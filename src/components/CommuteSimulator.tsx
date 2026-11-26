import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { calculateCommuteTradeoffs } from '../engines/commuteSwap';
import { calculateCpcbAqi } from '../engines/cpcbAqi';
import { CommuteMode } from '../types/engines';
import { Bike, Car, Bus, Train, MapPin, ArrowRight, Sprout, ChevronDown } from 'lucide-react';

const ORIGIN_ZONES = [
  'Residential Locality',
  'HSR Layout',
  'City Center',
  'Tech Corridor West',
  'Suburban Transit Hub',
];

const DESTINATION_CORRIDORS: Array<{ label: string; km: number }> = [
  { label: 'Short Local Trip (5 km)', km: 5 },
  { label: 'Neighborhood Loop (10 km)', km: 10 },
  { label: 'Electronic City (16.8 km)', km: 16.8 },
  { label: 'Outer Ring Corridor (24 km)', km: 24 },
  { label: 'Cross-Metro Express (35 km)', km: 35 },
];

export const CommuteSimulator: React.FC<{ isDedicatedWorkspace?: boolean }> = () => {
  const { telemetry, cleanAirWindow, scenarioState, updateScenario } = useApp();
  const isUnavailable = Boolean(telemetry.metadata.isUnavailable);
  const ambientPm25 =
    !isUnavailable && typeof telemetry.current.pm25 === 'number' && Number.isFinite(telemetry.current.pm25)
      ? telemetry.current.pm25
      : null;

  const [origin, setOrigin] = useState(
    ORIGIN_ZONES.includes(scenarioState.commute.origin) ? scenarioState.commute.origin : 'HSR Layout'
  );
  const [destinationLabel, setDestinationLabel] = useState('Electronic City (16.8 km)');
  const [distanceKm, setDistanceKm] = useState<number>(scenarioState.commute.distanceKm || 16.8);
  const [selectedMode, setSelectedMode] = useState<CommuteMode>(scenarioState.commute.mode || 'ac_cab');

  const safePm = ambientPm25 ?? 0;
  const comparisons = calculateCommuteTradeoffs(distanceKm, safePm);
  const selectedComp = comparisons.find((c) => c.mode === selectedMode) || comparisons[0];
  const metroComp = comparisons.find((c) => c.mode === 'ac_metro') || comparisons[comparisons.length - 1];

  const selectedCabinAqi = ambientPm25 != null ? calculateCpcbAqi({ pm25: selectedComp.cabinPm25Concentration }) : null;
  const cleanerCabinAqi = ambientPm25 != null ? calculateCpcbAqi({ pm25: metroComp.cabinPm25Concentration }) : null;

  const doseDiffPercent =
    selectedComp.inhaledDoseUg > 0
      ? Math.max(0, Math.round(((selectedComp.inhaledDoseUg - metroComp.inhaledDoseUg) / selectedComp.inhaledDoseUg) * 100))
      : 0;
  const carbonSavedKg = Math.max(0, +(selectedComp.carbonEmissionKg - metroComp.carbonEmissionKg).toFixed(2));

  const modeButtons: Array<{ id: CommuteMode; label: string; icon: React.ReactNode }> = [
    { id: 'two_wheeler_open', label: 'Bike', icon: <Bike className="w-4 h-4" /> },
    { id: 'ac_cab', label: 'Car', icon: <Car className="w-4 h-4" /> },
    { id: 'non_ac_bus', label: 'Bus', icon: <Bus className="w-4 h-4" /> },
    { id: 'ac_metro', label: 'Metro', icon: <Train className="w-4 h-4" /> },
  ];

  const syncScenario = (dist: number, mode: CommuteMode, orig: string, dest: string) => {
    updateScenario('commute', {
      distanceKm: dist,
      mode,
      origin: orig,
      destination: dest,
    });
  };

  const handleOriginChange = (val: string) => {
    setOrigin(val);
    syncScenario(distanceKm, selectedMode, val, destinationLabel);
  };

  const handleDestinationChange = (label: string) => {
    setDestinationLabel(label);
    const match = DESTINATION_CORRIDORS.find((d) => d.label === label);
    const km = match ? match.km : 16.8;
    setDistanceKm(km);
    syncScenario(km, selectedMode, origin, label);
  };

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    syncScenario(distanceKm, selectedMode, origin, destinationLabel);
  };

  return (
    <div className="space-y-4 animate-in fade-in duration-200">
      {/* Main 3-Column Row Matching Reference */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        {/* Column 1: Plan Your Commute */}
        <form
          onSubmit={handleAnalyze}
          className="lg:col-span-4 rounded-2xl bg-white/88 backdrop-blur-md border border-white/95 p-5 shadow-[0_10px_28px_-8px_rgba(15,44,76,0.1)] flex flex-col justify-between space-y-4"
        >
          <div className="space-y-3">
            <h2 className="text-[14px] font-extrabold text-[#0C2340]">
              Plan Your Commute
            </h2>

            {/* Origin Field */}
            <div className="relative rounded-xl bg-white/95 border border-[#DCEBF7] px-3 py-2 flex items-center space-x-2.5">
              <MapPin className="w-4 h-4 text-[#5A7896] shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-semibold text-[#5A7896] leading-none">Origin</div>
                <select
                  aria-label="Origin Locality"
                  value={origin}
                  onChange={(e) => handleOriginChange(e.target.value)}
                  className="w-full bg-transparent text-xs font-bold text-[#0C2340] pt-0.5 pr-5 cursor-pointer focus:outline-none truncate"
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

            {/* Destination / Corridor Field */}
            <div className="relative rounded-xl bg-white/95 border border-[#DCEBF7] px-3 py-2 flex items-center space-x-2.5">
              <MapPin className="w-4 h-4 text-[#5A7896] shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-semibold text-[#5A7896] leading-none">Destination</div>
                <select
                  aria-label="Destination Corridor"
                  value={destinationLabel}
                  onChange={(e) => handleDestinationChange(e.target.value)}
                  className="w-full bg-transparent text-xs font-bold text-[#0C2340] pt-0.5 pr-5 cursor-pointer focus:outline-none truncate"
                >
                  {DESTINATION_CORRIDORS.map((d) => (
                    <option key={d.label} value={d.label}>
                      {d.label}
                    </option>
                  ))}
                </select>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-[#5A7896] pointer-events-none shrink-0" />
            </div>

            {/* 4 Mode Buttons */}
            <div className="grid grid-cols-4 gap-2 pt-1">
              {modeButtons.map((m) => {
                const active = selectedMode === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => {
                      setSelectedMode(m.id);
                      syncScenario(distanceKm, m.id, origin, destinationLabel);
                    }}
                    className={`flex flex-col items-center justify-center py-2.5 px-1 rounded-xl border text-[11px] font-bold transition-all cursor-pointer ${
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
            className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] hover:brightness-105 text-white text-xs font-extrabold shadow-[0_6px_16px_rgba(14,165,233,0.3)] transition-all cursor-pointer"
          >
            <span>Analyze Commute</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* Column 2: Route Comparison */}
        <div className="lg:col-span-4 rounded-2xl bg-white/88 backdrop-blur-md border border-white/95 p-5 shadow-[0_10px_28px_-8px_rgba(15,44,76,0.1)] flex flex-col justify-between space-y-3">
          <h2 className="text-[14px] font-extrabold text-[#0C2340]">
            Route Comparison
          </h2>

          <div className="space-y-3 flex-1 flex flex-col justify-center">
            {/* Selected Route Card */}
            <div className="rounded-xl bg-[#FEF6E6] border border-[#FDE2B8] p-4 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="text-xs font-extrabold text-[#0C2340]">
                  Selected: {selectedComp.modeLabel.split('(')[0].trim()}
                </div>
                <div className="text-[11px] font-medium text-[#5A7896] mt-0.5 tabular-nums">
                  {distanceKm} km • {selectedComp.travelTimeMinutes} min
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-2xl font-extrabold text-[#D97706] leading-none tabular-nums">
                  {selectedCabinAqi ? selectedCabinAqi.aqi : '--'}
                </div>
                <div className="text-[10px] font-bold text-[#92400E] mt-1">
                  {selectedCabinAqi ? `(${selectedCabinAqi.category})` : 'Unavailable'}
                </div>
              </div>
            </div>

            {/* Cleaner Alternative Card */}
            <div className="rounded-xl bg-[#E8FAEF] border border-[#BBEFD1] p-4 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="text-xs font-extrabold text-[#0C2340]">
                  Cleaner: Rapid AC Metro
                </div>
                <div className="text-[11px] font-medium text-[#047857] mt-0.5 tabular-nums">
                  {distanceKm} km • {metroComp.travelTimeMinutes} min
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-2xl font-extrabold text-[#059669] leading-none tabular-nums">
                  {cleanerCabinAqi ? cleanerCabinAqi.aqi : '--'}
                </div>
                <div className="text-[10px] font-bold text-[#047857] mt-1">
                  {cleanerCabinAqi ? `(${cleanerCabinAqi.category})` : 'Unavailable'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: Commute Exposure Estimate */}
        <div className="lg:col-span-4 rounded-2xl bg-white/88 backdrop-blur-md border border-white/95 p-5 shadow-[0_10px_28px_-8px_rgba(15,44,76,0.1)] flex flex-col justify-between space-y-4">
          <h2 className="text-[14px] font-extrabold text-[#0C2340]">
            Commute Exposure Estimate
          </h2>

          <div className="flex items-center justify-between gap-3 py-1">
            <div>
              <div className="text-xs font-semibold text-[#476788]">Inhaled Dose (PM₂.₅)</div>
              <div className="text-[36px] leading-tight font-extrabold text-[#0C2340] tabular-nums mt-0.5">
                {ambientPm25 != null ? `${selectedComp.inhaledDoseUg} µg` : '--'}
              </div>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-[#EAF4FD] border border-[#CFE4F7] flex items-center justify-center shrink-0">
              <svg className="w-8 h-8 text-[#0EA5E9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v9" />
                <path d="M12 12c-2-2-6-2-7 3-.7 3.5 1 6 4 6 2 0 3-1 3-3v-6Z" />
                <path d="M12 12c2-2 6-2 7 3 .7 3.5-1 6-4 6-2 0-3-1-3-3v-6Z" />
              </svg>
            </div>
          </div>

          <div className="pt-3 border-t border-[#E6F1FA]">
            <div className="text-xs font-bold text-[#0C2340]">
              Exposure vs. Cleaner Route
            </div>
            <div className="text-[30px] leading-tight font-extrabold text-[#16A34A] tabular-nums mt-0.5">
              {ambientPm25 != null ? (selectedMode === 'ac_metro' ? 'Optimal' : `-${doseDiffPercent}%`) : '--'}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Recommendation Banner */}
      <div className="rounded-2xl bg-white/90 backdrop-blur-md border border-white/95 px-5 py-3.5 flex items-center space-x-3 text-xs shadow-[0_8px_22px_-6px_rgba(15,44,76,0.08)]">
        <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center shrink-0">
          <Sprout className="w-4 h-4 text-[#059669]" />
        </div>
        <div className="flex flex-wrap items-baseline gap-x-2">
          <span className="font-extrabold text-[#0C2340]">Recommendation</span>
          <span className="text-[#334E68] font-medium">
            {ambientPm25 == null
              ? `Live pollution data unavailable for ${telemetry.city}. Enclosed filtered transit is safest during uncertain air quality.`
              : selectedMode === 'ac_metro'
              ? `AC Metro gives lowest exposure for ${origin} → ${destinationLabel.split('(')[0].trim()} (${metroComp.inhaledDoseUg} µg inhaled, ${metroComp.carbonEmissionKg.toFixed(2)} kg CO₂). Ideal window: ${cleanAirWindow.displayWindow}.`
              : `Choose Rapid AC Metro or travel during ${cleanAirWindow.displayWindow} for ~${doseDiffPercent}% lower exposure (saves ${carbonSavedKg.toFixed(2)} kg CO₂).`}
          </span>
        </div>
      </div>
    </div>
  );
};
