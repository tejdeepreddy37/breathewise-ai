import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { calculateCommuteTradeoffs } from '../engines/commuteSwap';
import { calculateCpcbAqi } from '../engines/cpcbAqi';
import { CommuteMode } from '../types/engines';
import { Bike, Car, Bus, Train, MapPin, Navigation, ArrowRight, Sprout, ChevronDown } from 'lucide-react';

const CORRIDOR_DISTANCES: Record<string, number> = {
  'Short Local Trip (5 km)': 5,
  'Neighborhood Loop (10 km)': 10,
  'City Core Corridor (16.8 km)': 16.8,
  'Outer Ring / Tech Park (24 km)': 24,
  'Cross-Metro Express (35 km)': 35,
};

export const CommuteSimulator: React.FC<{ isDedicatedWorkspace?: boolean }> = () => {
  const { telemetry, cleanAirWindow, scenarioState, updateScenario } = useApp();
  const isUnavailable = Boolean(telemetry.metadata.isUnavailable);
  const ambientPm25 =
    !isUnavailable && typeof telemetry.current.pm25 === 'number' && Number.isFinite(telemetry.current.pm25)
      ? telemetry.current.pm25
      : null;

  const [origin, setOrigin] = useState(scenarioState.commute.origin || 'City Center');
  const [destination, setDestination] = useState(scenarioState.commute.destination || 'Tech / Work Hub');
  const [corridorKey, setCorridorKey] = useState('City Core Corridor (16.8 km)');
  const [distanceKm, setDistanceKm] = useState<number>(scenarioState.commute.distanceKm || 16.8);
  const [selectedMode, setSelectedMode] = useState<CommuteMode>(scenarioState.commute.mode || 'ac_cab');
  const [analyzedCount, setAnalyzedCount] = useState<number>(0);

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

  const handleCorridorChange = (key: string) => {
    setCorridorKey(key);
    const km = CORRIDOR_DISTANCES[key] || 16.8;
    setDistanceKm(km);
    syncScenario(km, selectedMode, origin, destination);
  };

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    syncScenario(distanceKm, selectedMode, origin, destination);
    setAnalyzedCount((c) => c + 1);
  };

  return (
    <div className="space-y-4 animate-in fade-in duration-200">
      {/* Main 3-Column Layout Matching Panel 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
        {/* Column 1: Plan Your Commute */}
        <form
          onSubmit={handleAnalyze}
          className="rounded-3xl bg-white/85 backdrop-blur-md border border-white p-5 shadow-soft flex flex-col justify-between space-y-4"
        >
          <div className="space-y-3.5">
            <h2 className="text-sm sm:text-base font-extrabold text-[#0C2340]">
              Plan Your Commute
            </h2>

            {/* Origin */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-[#476788] flex items-center space-x-1">
                <MapPin className="w-3 h-3 text-[#0EA5E9]" />
                <span>Origin</span>
              </label>
              <input
                type="text"
                value={origin}
                onChange={(e) => {
                  setOrigin(e.target.value);
                  syncScenario(distanceKm, selectedMode, e.target.value, destination);
                }}
                placeholder="Origin locality"
                className="w-full bg-[#F4F9FE] border border-[#CBE0F2] rounded-xl px-3 py-2 text-xs font-semibold text-[#0C2340] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30"
              />
            </div>

            {/* Destination */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-[#476788] flex items-center space-x-1">
                <Navigation className="w-3 h-3 text-[#0EA5E9]" />
                <span>Destination</span>
              </label>
              <input
                type="text"
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value);
                  syncScenario(distanceKm, selectedMode, origin, e.target.value);
                }}
                placeholder="Destination locality"
                className="w-full bg-[#F4F9FE] border border-[#CBE0F2] rounded-xl px-3 py-2 text-xs font-semibold text-[#0C2340] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30"
              />
            </div>

            {/* Corridor / Distance Control */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[11px] font-bold text-[#476788]">
                <span>Modeled Trip Distance</span>
                <span className="font-mono font-black text-[#0284C7]">{distanceKm} km</span>
              </div>
              <div className="relative">
                <select
                  aria-label="Distance Scenario Preset"
                  value={corridorKey}
                  onChange={(e) => handleCorridorChange(e.target.value)}
                  className="w-full bg-[#F4F9FE] border border-[#CBE0F2] rounded-xl py-1.5 pl-3 pr-7 text-xs font-semibold text-[#0C2340] cursor-pointer focus:outline-none"
                >
                  {Object.keys(CORRIDOR_DISTANCES).map((k) => (
                    <option key={k} value={k}>
                      {k}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-[#5A7896] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              <input
                type="range"
                min="1"
                max="50"
                step="0.5"
                value={distanceKm}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setDistanceKm(val);
                  syncScenario(val, selectedMode, origin, destination);
                }}
                aria-label="Commute distance slider"
                className="w-full h-1.5 bg-[#CBE0F2] rounded-lg appearance-none cursor-pointer accent-[#0EA5E9]"
              />
            </div>

            {/* 4 Transport Mode Icon Buttons */}
            <div className="grid grid-cols-4 gap-2 pt-1">
              {modeButtons.map((m) => {
                const active = selectedMode === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => {
                      setSelectedMode(m.id);
                      syncScenario(distanceKm, m.id, origin, destination);
                    }}
                    className={`flex flex-col items-center justify-center py-2.5 px-1 rounded-xl border text-[11px] font-bold transition-all cursor-pointer ${
                      active
                        ? 'bg-[#0EA5E9] border-[#0EA5E9] text-white shadow-sm'
                        : 'bg-[#F4F9FE] border-[#CBE0F2] text-[#334E68] hover:bg-white'
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
            className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-[#0EA5E9] hover:bg-[#0284C7] text-white text-xs font-extrabold shadow-sm transition-all cursor-pointer"
          >
            <span>Analyze Commute</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* Column 2: Route Comparison */}
        <div className="rounded-3xl bg-white/85 backdrop-blur-md border border-white p-5 shadow-soft flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm sm:text-base font-extrabold text-[#0C2340]">
                Route Comparison
              </h2>
              {analyzedCount > 0 && (
                <span className="text-[10px] font-bold text-[#0EA5E9]">Updated</span>
              )}
            </div>

            {/* Scenario A: Selected Mode */}
            <div className="rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] p-4 flex items-center justify-between gap-3">
              <div>
                <div className="text-xs font-extrabold text-[#0C2340]">
                  Selected: {selectedComp.modeLabel.split('(')[0].trim()}
                </div>
                <div className="text-[11px] font-medium text-[#5A7896] mt-0.5 font-mono">
                  {distanceKm} km • {selectedComp.travelTimeMinutes} min
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-black text-amber-600 font-mono">
                  {selectedCabinAqi ? selectedCabinAqi.aqi : '--'}
                </div>
                <div className="text-[10px] font-bold text-amber-800">
                  {selectedCabinAqi ? `(${selectedCabinAqi.category})` : 'Unavailable'}
                </div>
              </div>
            </div>

            {/* Scenario B: Cleaner Alternative (AC Metro) */}
            <div className="rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0] p-4 flex items-center justify-between gap-3">
              <div>
                <div className="text-xs font-extrabold text-[#0C2340]">
                  Cleaner: Rapid AC Metro
                </div>
                <div className="text-[11px] font-medium text-[#047857] mt-0.5 font-mono">
                  {distanceKm} km • {metroComp.travelTimeMinutes} min
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-black text-[#059669] font-mono">
                  {cleanerCabinAqi ? cleanerCabinAqi.aqi : '--'}
                </div>
                <div className="text-[10px] font-bold text-[#047857]">
                  {cleanerCabinAqi ? `(${cleanerCabinAqi.category})` : 'Unavailable'}
                </div>
              </div>
            </div>
          </div>

          <p className="text-[10px] text-[#5A7896] leading-relaxed">
            Modeled from {telemetry.city} ambient PM2.5 ({ambientPm25 != null ? `${ambientPm25} µg/m³` : 'Unavailable'}) and corridor micro-environment infiltration factors. Does not use live road traffic feeds.
          </p>
        </div>

        {/* Column 3: Commute Exposure Estimate */}
        <div className="rounded-3xl bg-white/85 backdrop-blur-md border border-white p-5 shadow-soft flex flex-col justify-between space-y-4">
          <h2 className="text-sm sm:text-base font-extrabold text-[#0C2340]">
            Commute Exposure Estimate
          </h2>

          <div className="flex items-center justify-between gap-3 py-2">
            <div>
              <div className="text-xs font-bold text-[#476788]">Inhaled Dose (PM2.5)</div>
              <div className="text-3xl sm:text-4xl font-black text-[#0C2340] font-mono mt-1">
                {ambientPm25 != null ? `${selectedComp.inhaledDoseUg} µg` : '--'}
              </div>
              <div className="text-[11px] text-[#5A7896] mt-1 font-mono">
                CO₂: {selectedComp.carbonEmissionKg.toFixed(2)} kg
              </div>
            </div>

            {/* Soft Sky-Blue Lungs Vector Graphic Matching Panel 3 */}
            <div className="w-16 h-16 rounded-2xl bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center shrink-0">
              <svg className="w-9 h-9 text-[#0EA5E9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v9" />
                <path d="M12 12c-2-2-6-2-7 3-.7 3.5 1 6 4 6 2 0 3-1 3-3v-6Z" />
                <path d="M12 12c2-2 6-2 7 3 .7 3.5-1 6-4 6-2 0-3-1-3-3v-6Z" />
              </svg>
            </div>
          </div>

          <div className="pt-4 border-t border-[#E2EFFA] flex items-center justify-between">
            <span className="text-xs font-bold text-[#334E68]">
              Exposure vs. Cleaner Mode
            </span>
            <span className="text-2xl font-black font-mono text-[#059669]">
              {ambientPm25 != null ? (selectedMode === 'ac_metro' ? 'Optimal' : `-${doseDiffPercent}%`) : '--'}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Recommendation Banner Matching Panel 3 */}
      <div className="rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0] p-4 flex items-center space-x-3 text-xs shadow-2xs">
        <div className="w-9 h-9 rounded-xl bg-white border border-[#A7F3D0] flex items-center justify-center shrink-0">
          <Sprout className="w-5 h-5 text-[#059669]" />
        </div>
        <div>
          <div className="font-extrabold text-[#065F46]">Recommendation</div>
          <p className="text-[#166534] font-medium mt-0.5">
            {ambientPm25 == null
              ? `Live pollution data is currently unavailable for ${telemetry.city}. When commuting outdoors during uncertain air quality, enclosed filtered transit reduces intake.`
              : selectedMode === 'ac_metro'
              ? `AC Metro is your lowest-exposure transit choice for ${origin} → ${destination} (${metroComp.inhaledDoseUg} µg inhaled, ${metroComp.carbonEmissionKg.toFixed(2)} kg CO₂). Optimal daytime travel window: ${cleanAirWindow.displayWindow}.`
              : `Choose Rapid AC Metro (saves ${carbonSavedKg.toFixed(2)} kg CO₂ and cuts inhaled dose by ${doseDiffPercent}% to ${metroComp.inhaledDoseUg} µg) or travel during ${cleanAirWindow.displayWindow} for lower exposure.`}
          </p>
        </div>
      </div>
    </div>
  );
};
