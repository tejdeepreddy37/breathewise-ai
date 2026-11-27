import React, { useMemo, useState } from 'react';
import { useApp } from '../context/AppContext';
import { calculateCommuteTradeoffs } from '../engines/commuteSwap';
import { calculateCpcbAqi } from '../engines/cpcbAqi';
import { CommuteMode } from '../types/engines';
import { Bike, Car, Bus, Train, MapPin, ArrowRight, Sprout, ChevronDown } from 'lucide-react';

const ORIGIN_ZONES = [
  'HSR Layout',
  'City Center',
  'Residential Locality',
  'Tech Corridor West',
  'Suburban Transit Hub',
] as const;

const DESTINATION_ZONES = [
  'Electronic City',
  'Koramangala Core',
  'Whitefield / ITPL',
  'Outer Ring Road',
  'Airport Express',
] as const;

// Deterministic route distances (km) per Origin -> Destination corridor pair
const CORRIDOR_MATRIX_KM: Record<string, Record<string, number>> = {
  'HSR Layout': {
    'Electronic City': 16.8,
    'Koramangala Core': 5.4,
    'Whitefield / ITPL': 18.6,
    'Outer Ring Road': 11.2,
    'Airport Express': 41.0,
  },
  'City Center': {
    'Electronic City': 19.5,
    'Koramangala Core': 7.8,
    'Whitefield / ITPL': 21.4,
    'Outer Ring Road': 14.6,
    'Airport Express': 34.5,
  },
  'Residential Locality': {
    'Electronic City': 14.2,
    'Koramangala Core': 6.5,
    'Whitefield / ITPL': 15.8,
    'Outer Ring Road': 9.8,
    'Airport Express': 38.2,
  },
  'Tech Corridor West': {
    'Electronic City': 22.4,
    'Koramangala Core': 12.6,
    'Whitefield / ITPL': 24.8,
    'Outer Ring Road': 17.5,
    'Airport Express': 31.8,
  },
  'Suburban Transit Hub': {
    'Electronic City': 26.0,
    'Koramangala Core': 16.4,
    'Whitefield / ITPL': 28.5,
    'Outer Ring Road': 20.2,
    'Airport Express': 27.5,
  },
};

export function getCorridorDistanceKm(origin: string, destination: string): number {
  return CORRIDOR_MATRIX_KM[origin]?.[destination] ?? 16.8;
}

interface AnalyzedCommuteState {
  origin: string;
  destination: string;
  distanceKm: number;
  mode: CommuteMode;
}

export const CommuteSimulator: React.FC<{ isDedicatedWorkspace?: boolean }> = () => {
  const { telemetry, cleanAirWindow, scenarioState, updateScenario } = useApp();
  const isUnavailable = Boolean(telemetry.metadata.isUnavailable);
  const ambientPm25 =
    !isUnavailable && typeof telemetry.current.pm25 === 'number' && Number.isFinite(telemetry.current.pm25)
      ? telemetry.current.pm25
      : null;

  const initialOrigin = ORIGIN_ZONES.includes(scenarioState.commute.origin as (typeof ORIGIN_ZONES)[number])
    ? scenarioState.commute.origin
    : 'HSR Layout';
  const initialDestination = DESTINATION_ZONES.includes(
    scenarioState.commute.destination as (typeof DESTINATION_ZONES)[number]
  )
    ? scenarioState.commute.destination
    : 'Electronic City';
  const initialMode: CommuteMode = scenarioState.commute.mode || 'ac_cab';

  // Pending draft controls — changing inputs prepares the scenario until "Analyze Commute" runs
  const [draftOrigin, setDraftOrigin] = useState<string>(initialOrigin);
  const [draftDestination, setDraftDestination] = useState<string>(initialDestination);
  const [draftMode, setDraftMode] = useState<CommuteMode>(initialMode);

  // Committed scenario used for all visible comparison, dose, reduction, and recommendation cards
  const [analyzedScenario, setAnalyzedScenario] = useState<AnalyzedCommuteState>(() => ({
    origin: initialOrigin,
    destination: initialDestination,
    distanceKm: getCorridorDistanceKm(initialOrigin, initialDestination),
    mode: initialMode,
  }));

  const isDirty =
    draftOrigin !== analyzedScenario.origin ||
    draftDestination !== analyzedScenario.destination ||
    draftMode !== analyzedScenario.mode;

  const analysis = useMemo(() => {
    const safePm = ambientPm25 ?? 0;
    const comparisons = calculateCommuteTradeoffs(analyzedScenario.distanceKm, safePm);
    const selectedComp =
      comparisons.find((c) => c.mode === analyzedScenario.mode) || comparisons[0];
    const metroComp =
      comparisons.find((c) => c.mode === 'ac_metro') || comparisons[comparisons.length - 1];
    const cabComp =
      comparisons.find((c) => c.mode === 'ac_cab') || comparisons[0];

    const isMetroSelected = analyzedScenario.mode === 'ac_metro';
    const comparisonTarget = isMetroSelected ? cabComp : metroComp;

    const selectedCabinAqi =
      ambientPm25 != null
        ? calculateCpcbAqi({ pm25: selectedComp.cabinPm25Concentration })
        : null;
    const comparisonCabinAqi =
      ambientPm25 != null
        ? calculateCpcbAqi({ pm25: comparisonTarget.cabinPm25Concentration })
        : null;

    // When Metro is selected, compare reduction against AC Private Cab baseline; otherwise compare Selected vs Cleaner AC Metro
    const doseReductionVsTargetPercent = isMetroSelected
      ? cabComp.inhaledDoseUg > 0
        ? Math.max(0, Math.round(((cabComp.inhaledDoseUg - selectedComp.inhaledDoseUg) / cabComp.inhaledDoseUg) * 100))
        : 0
      : selectedComp.inhaledDoseUg > 0
      ? Math.max(0, Math.round(((selectedComp.inhaledDoseUg - metroComp.inhaledDoseUg) / selectedComp.inhaledDoseUg) * 100))
      : 0;

    const carbonSavedKg = isMetroSelected
      ? Math.max(0, +(cabComp.carbonEmissionKg - selectedComp.carbonEmissionKg).toFixed(2))
      : Math.max(0, +(selectedComp.carbonEmissionKg - metroComp.carbonEmissionKg).toFixed(2));

    return {
      selectedComp,
      comparisonTarget,
      isMetroSelected,
      selectedCabinAqi,
      comparisonCabinAqi,
      doseReductionVsTargetPercent,
      carbonSavedKg,
    };
  }, [ambientPm25, analyzedScenario]);

  const modeButtons: Array<{ id: CommuteMode; label: string; icon: React.ReactNode }> = [
    { id: 'two_wheeler_open', label: 'Bike', icon: <Bike className="w-4 h-4" /> },
    { id: 'ac_cab', label: 'Car', icon: <Car className="w-4 h-4" /> },
    { id: 'non_ac_bus', label: 'Bus', icon: <Bus className="w-4 h-4" /> },
    { id: 'ac_metro', label: 'Metro', icon: <Train className="w-4 h-4" /> },
  ];

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    const nextDistanceKm = getCorridorDistanceKm(draftOrigin, draftDestination);
    const nextAnalyzed: AnalyzedCommuteState = {
      origin: draftOrigin,
      destination: draftDestination,
      distanceKm: nextDistanceKm,
      mode: draftMode,
    };
    setAnalyzedScenario(nextAnalyzed);
    updateScenario('commute', {
      origin: draftOrigin,
      destination: draftDestination,
      distanceKm: nextDistanceKm,
      mode: draftMode,
    });
  };

  return (
    <div className="space-y-4 animate-in fade-in duration-200">
      {/* Main 3-Column Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        {/* Column 1: Plan Your Commute */}
        <form
          onSubmit={handleAnalyze}
          className="lg:col-span-4 rounded-2xl bg-white border border-white p-5 shadow-[0_12px_32px_-8px_rgba(14,165,233,0.16),0_2px_6px_rgba(15,44,76,0.05)] flex flex-col justify-between space-y-4"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-[14px] font-extrabold text-[#0C2340]">
                Plan Your Commute
              </h2>
              {isDirty && (
                <span className="text-[10px] font-bold text-[#0284C7] bg-[#E0F2FE] px-2 py-0.5 rounded-full">
                  Pending
                </span>
              )}
            </div>

            {/* Origin Field */}
            <div className="relative rounded-xl bg-white border border-[#DCEBF7] px-3 py-2 flex items-center space-x-2.5">
              <MapPin className="w-4 h-4 text-[#5A7896] shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-semibold text-[#5A7896] leading-none">Origin</div>
                <select
                  aria-label="Origin Locality"
                  value={draftOrigin}
                  onChange={(e) => setDraftOrigin(e.target.value)}
                  className="w-full bg-transparent text-xs font-extrabold text-[#0C2340] pt-0.5 pr-5 cursor-pointer focus:outline-none truncate"
                >
                  {ORIGIN_ZONES.map((z) => (
                    <option key={z} value={z}>
                      {z}
                    </option>
                  ))}
                </select>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-[#5A7896] pointer-events-none shrink-0" />
            </div>

            {/* Destination Field */}
            <div className="relative rounded-xl bg-white border border-[#DCEBF7] px-3 py-2 flex items-center space-x-2.5">
              <MapPin className="w-4 h-4 text-[#5A7896] shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-semibold text-[#5A7896] leading-none">Destination</div>
                <select
                  aria-label="Destination Corridor"
                  value={draftDestination}
                  onChange={(e) => setDraftDestination(e.target.value)}
                  className="w-full bg-transparent text-xs font-extrabold text-[#0C2340] pt-0.5 pr-5 cursor-pointer focus:outline-none truncate"
                >
                  {DESTINATION_ZONES.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-[#5A7896] pointer-events-none shrink-0" />
            </div>

            {/* 4 Mode Buttons */}
            <div className="grid grid-cols-4 gap-2 pt-0.5">
              {modeButtons.map((m) => {
                const active = draftMode === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setDraftMode(m.id)}
                    aria-pressed={active}
                    className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl border text-[11px] font-bold transition-all cursor-pointer ${
                      active
                        ? 'bg-gradient-to-b from-[#0EA5E9] to-[#0284C7] border-[#0284C7] text-white shadow-[0_6px_14px_rgba(14,165,233,0.28)]'
                        : 'bg-[#F8FBFF] border-[#DCEBF7] text-[#334E68] hover:bg-white'
                    }`}
                  >
                    {m.icon}
                    <span className="mt-1">{m.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="submit"
            className={`w-full inline-flex items-center justify-center space-x-2 py-2.5 px-5 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] hover:brightness-105 text-white text-xs font-extrabold shadow-[0_6px_16px_rgba(14,165,233,0.3)] transition-all cursor-pointer ${
              isDirty ? 'ring-2 ring-[#7DD3FC] ring-offset-1' : ''
            }`}
          >
            <span>Analyze Commute</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* Column 2: Route Comparison */}
        <div className="lg:col-span-4 rounded-2xl bg-white border border-white p-5 shadow-[0_12px_32px_-8px_rgba(14,165,233,0.16),0_2px_6px_rgba(15,44,76,0.05)] flex flex-col justify-between space-y-3">
          <div>
            <h2 className="text-[14px] font-extrabold text-[#0C2340]">
              Route Comparison
            </h2>
            <p className="text-[11px] font-medium text-[#5A7896] mt-0.5 truncate">
              {analyzedScenario.origin} → {analyzedScenario.destination}
            </p>
          </div>

          <div className="space-y-3 flex-1 flex flex-col justify-center">
            {/* Selected Mode Row */}
            <div className="rounded-xl bg-[#F8FBFF] border border-[#E5EEF6] p-3 flex items-center justify-between gap-3">
              <div className="min-w-0 pl-1">
                <div className="text-xs font-extrabold text-[#0C2340]">
                  Selected: {analysis.selectedComp.modeLabel.split('(')[0].trim()}
                </div>
                <div className="text-[11px] font-medium text-[#5A7896] mt-0.5 tabular-nums">
                  {analyzedScenario.distanceKm} km • {analysis.selectedComp.travelTimeMinutes} min
                </div>
              </div>
              <div
                className={`w-24 rounded-xl py-2 px-2 text-center shrink-0 ${
                  analysis.isMetroSelected ? 'bg-[#DCFCE7]' : 'bg-[#FEF0D4]'
                }`}
              >
                <div
                  className={`text-xl font-extrabold leading-none tabular-nums ${
                    analysis.isMetroSelected ? 'text-[#059669]' : 'text-[#D97706]'
                  }`}
                >
                  {analysis.selectedCabinAqi ? analysis.selectedCabinAqi.aqi : '--'}
                </div>
                <div
                  className={`text-[10px] font-bold mt-1 ${
                    analysis.isMetroSelected ? 'text-[#065F46]' : 'text-[#92400E]'
                  }`}
                >
                  {analysis.selectedCabinAqi ? `(${analysis.selectedCabinAqi.category})` : 'Unavailable'}
                </div>
              </div>
            </div>

            {/* Comparison Mode Row */}
            <div className="rounded-xl bg-[#F8FBFF] border border-[#E5EEF6] p-3 flex items-center justify-between gap-3">
              <div className="min-w-0 pl-1">
                <div className="text-xs font-extrabold text-[#0C2340]">
                  {analysis.isMetroSelected
                    ? `Baseline: ${analysis.comparisonTarget.modeLabel.split('(')[0].trim()}`
                    : 'Cleaner: Rapid AC Metro'}
                </div>
                <div className="text-[11px] font-medium text-[#476788] mt-0.5 tabular-nums">
                  {analyzedScenario.distanceKm} km • {analysis.comparisonTarget.travelTimeMinutes} min
                </div>
              </div>
              <div
                className={`w-24 rounded-xl py-2 px-2 text-center shrink-0 ${
                  analysis.isMetroSelected ? 'bg-[#FEF0D4]' : 'bg-[#DCFCE7]'
                }`}
              >
                <div
                  className={`text-xl font-extrabold leading-none tabular-nums ${
                    analysis.isMetroSelected ? 'text-[#D97706]' : 'text-[#059669]'
                  }`}
                >
                  {analysis.comparisonCabinAqi ? analysis.comparisonCabinAqi.aqi : '--'}
                </div>
                <div
                  className={`text-[10px] font-bold mt-1 ${
                    analysis.isMetroSelected ? 'text-[#92400E]' : 'text-[#065F46]'
                  }`}
                >
                  {analysis.comparisonCabinAqi ? `(${analysis.comparisonCabinAqi.category})` : 'Unavailable'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: Commute Exposure Estimate */}
        <div className="lg:col-span-4 rounded-2xl bg-white border border-white p-5 shadow-[0_12px_32px_-8px_rgba(14,165,233,0.16),0_2px_6px_rgba(15,44,76,0.05)] flex flex-col justify-between space-y-4">
          <h2 className="text-[14px] font-extrabold text-[#0C2340]">
            Commute Exposure Estimate
          </h2>

          <div className="flex items-center justify-between gap-3 py-1">
            <div>
              <div className="text-xs font-semibold text-[#476788]">Inhaled Dose (PM2.5)</div>
              <div className="text-[38px] leading-tight font-extrabold text-[#0C2340] tabular-nums mt-0.5">
                {ambientPm25 != null ? `${analysis.selectedComp.inhaledDoseUg} µg` : '--'}
              </div>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-[#EAF4FD] border border-[#CFE4F7] flex items-center justify-center shrink-0">
              <svg className="w-9 h-9 text-[#0284C7]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 5v9" />
                <path d="M16 14l-4 3.5" />
                <path d="M16 14l4 3.5" />
                <path d="M12.5 11.5C9.2 10.2 5.5 13.5 5 20.5c-.3 4.2 1.8 6.5 5 6.5 2.4 0 4-1.5 4-5v-8.5" />
                <path d="M19.5 11.5C22.8 10.2 26.5 13.5 27 20.5c.3 4.2-1.8 6.5-5 6.5-2.4 0-4-1.5-4-5v-8.5" />
                <path d="M10.5 19.5l-2 2.5M12 22l-1.5 2M21.5 19.5l2 2.5M20 22l1.5 2" />
              </svg>
            </div>
          </div>

          <div className="pt-3 border-t border-[#E6F1FA]">
            <div className="text-xs font-extrabold text-[#0C2340]">
              {analysis.isMetroSelected ? 'Exposure Savings vs. Cab' : 'Exposure vs. Cleaner Route'}
            </div>
            <div className="text-[30px] leading-tight font-extrabold text-[#16A34A] tabular-nums mt-0.5">
              {ambientPm25 != null ? `-${analysis.doseReductionVsTargetPercent}%` : '--'}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Recommendation Banner */}
      <div className="rounded-2xl bg-white border border-white px-5 py-3.5 flex items-center space-x-3 text-[13px] shadow-[0_10px_28px_-8px_rgba(14,165,233,0.14)]">
        <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center shrink-0">
          <Sprout className="w-4 h-4 text-[#059669]" />
        </div>
        <div className="flex flex-wrap items-baseline gap-x-2.5">
          <span className="font-extrabold text-[#0C2340]">Recommendation</span>
          <span className="text-[#334E68] font-medium">
            {ambientPm25 == null
              ? `Live pollution data unavailable for ${telemetry.city}. Enclosed filtered transit is safest for ${analyzedScenario.origin} → ${analyzedScenario.destination}.`
              : analysis.isMetroSelected
              ? `Rapid AC Metro for ${analyzedScenario.origin} → ${analyzedScenario.destination} (${analyzedScenario.distanceKm} km) cuts inhaled dose by ${analysis.doseReductionVsTargetPercent}% vs private cab (${analysis.selectedComp.inhaledDoseUg} µg inhaled) and saves ${analysis.carbonSavedKg.toFixed(2)} kg CO₂.`
              : `For ${analyzedScenario.origin} → ${analyzedScenario.destination} (${analyzedScenario.distanceKm} km), switch from ${analysis.selectedComp.modeLabel.split('(')[0].trim()} to Rapid AC Metro or travel during ${cleanAirWindow.displayWindow} for ~${analysis.doseReductionVsTargetPercent}% lower exposure (saves ${analysis.carbonSavedKg.toFixed(2)} kg CO₂).`}
          </span>
        </div>
      </div>
    </div>
  );
};
