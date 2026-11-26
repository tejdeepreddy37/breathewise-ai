import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { calculateIndoorRecommendations, getIndianStandardTimeHour } from '../engines/indoorCoach';
import { calculateCpcbAqi, getCpcbSemanticColors } from '../engines/cpcbAqi';
import { IndoorSourceType } from '../types/engines';
import { Home, ChevronDown, AlertTriangle } from 'lucide-react';

export const IndoorCoachView: React.FC<{ isDedicatedWorkspace?: boolean }> = () => {
  const { telemetry, cleanAirWindow, scenarioState, updateScenario } = useApp();
  const isUnavailable = Boolean(telemetry.metadata.isUnavailable);
  const ambientPm25 =
    !isUnavailable && typeof telemetry.current.pm25 === 'number' && Number.isFinite(telemetry.current.pm25)
      ? telemetry.current.pm25
      : null;
  const ambientO3 = !isUnavailable ? telemetry.current.o3 : null;

  const [roomType, setRoomType] = useState(scenarioState.indoor.roomType || 'Bedroom');
  const [roomAreaM2, setRoomAreaM2] = useState(scenarioState.indoor.roomAreaM2 || 12);
  const [ceilingHeightM, setCeilingHeightM] = useState(scenarioState.indoor.ceilingHeightM || 2.8);
  const [ventilationAch, setVentilationAch] = useState(scenarioState.indoor.ventilationAch || 0.5);
  const [usingPurifier, setUsingPurifier] = useState(scenarioState.indoor.usingPurifier ?? true);
  const [purifierCadr, setPurifierCadr] = useState(scenarioState.indoor.purifierCadr || 300);
  const [indoorSource, setIndoorSource] = useState<IndoorSourceType>(scenarioState.indoor.indoorSource || 'none');

  const syncIndoor = (patch: Partial<typeof scenarioState.indoor>) => {
    updateScenario('indoor', patch);
  };

  const currentHour = getIndianStandardTimeHour();
  const safeOutdoor = ambientPm25 ?? 0;
  const rec = calculateIndoorRecommendations(safeOutdoor, cleanAirWindow, currentHour, roomAreaM2, ambientO3, indoorSource);

  const roomVolumeM3 = +(roomAreaM2 * ceilingHeightM).toFixed(1);
  // Single-zone well-mixed mass balance: indoor steady-state influenced by infiltration (ventilationAch) and purifier removal (purifierCadr / roomVolumeM3)
  const infiltrationAlpha = ventilationAch <= 0.5 ? 0.45 : ventilationAch <= 1.5 ? 0.65 : 0.85;
  const sourceBonus = indoorSource === 'cooking_frying' ? 85 : indoorSource === 'incense_smoke' ? 110 : 0;
  const rawIndoorBeforePurifier = safeOutdoor * infiltrationAlpha + sourceBonus;
  const purifierAch = usingPurifier ? purifierCadr / Math.max(10, roomVolumeM3) : 0;
  const effectiveReductionRatio = purifierAch > 0 ? purifierAch / (purifierAch + ventilationAch + 0.5) : 0;

  const modeledIndoorPm25 = ambientPm25 != null
    ? Math.max(2, Math.round(rawIndoorBeforePurifier * (1 - effectiveReductionRatio)))
    : null;

  const indoorAqiResult = modeledIndoorPm25 != null ? calculateCpcbAqi({ pm25: modeledIndoorPm25 }) : null;
  const indoorColors = getCpcbSemanticColors(indoorAqiResult?.aqi ?? 0, indoorAqiResult?.category ?? 'Good');

  // Scenario impact calculations (truthful mass balance)
  const baselineSealedPm25 = safeOutdoor * 0.45 + sourceBonus;
  const vent3Pm25 = safeOutdoor * 0.85 + sourceBonus;
  const ventDeltaPct =
    baselineSealedPm25 > 0
      ? Math.round(((vent3Pm25 - baselineSealedPm25) / baselineSealedPm25) * 100)
      : 0;
  const purifierDeltaPct = -Math.round((purifierCadr / Math.max(10, roomVolumeM3) / (purifierCadr / Math.max(10, roomVolumeM3) + ventilationAch + 0.5)) * 100);

  // Semi-circle arc gauge math
  const gaugePct = indoorAqiResult ? Math.min(1, indoorAqiResult.aqi / 300) : 0;
  const arcLen = Math.PI * 64;
  const dashOffset = arcLen * (1 - gaugePct);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch animate-in fade-in duration-200">
      {/* Col 1 (4 Cols): Room Setup */}
      <div className="lg:col-span-4 rounded-3xl bg-white/85 backdrop-blur-md border border-white p-5 shadow-soft flex flex-col justify-between space-y-3.5">
        <h2 className="text-sm sm:text-base font-extrabold text-[#0C2340]">Room Setup</h2>

        <div className="space-y-3 text-xs">
          {/* Room Type */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-[#476788]">Room Type</label>
            <div className="relative">
              <select
                aria-label="Room Type"
                value={roomType}
                onChange={(e) => {
                  setRoomType(e.target.value);
                  syncIndoor({ roomType: e.target.value });
                }}
                className="w-full bg-[#F4F9FE] border border-[#CBE0F2] rounded-xl py-2 pl-3 pr-7 font-bold text-[#0C2340] cursor-pointer focus:outline-none"
              >
                <option value="Bedroom">Bedroom</option>
                <option value="Living Room">Living Room</option>
                <option value="Study / Office">Study / Office</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-[#5A7896] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Room Size & Ceiling Height */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-[#476788]">Room Size</label>
              <div className="relative">
                <select
                  aria-label="Room Size"
                  value={roomAreaM2}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setRoomAreaM2(val);
                    syncIndoor({ roomAreaM2: val });
                  }}
                  className="w-full bg-[#F4F9FE] border border-[#CBE0F2] rounded-xl py-2 pl-3 pr-6 font-bold text-[#0C2340] cursor-pointer focus:outline-none"
                >
                  <option value={12}>12 m²</option>
                  <option value={20}>20 m²</option>
                  <option value={35}>35 m²</option>
                  <option value={50}>50 m²</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-[#5A7896] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold text-[#476788]">Ceiling Height</label>
              <div className="relative">
                <select
                  aria-label="Ceiling Height"
                  value={ceilingHeightM}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setCeilingHeightM(val);
                    syncIndoor({ ceilingHeightM: val });
                  }}
                  className="w-full bg-[#F4F9FE] border border-[#CBE0F2] rounded-xl py-2 pl-3 pr-6 font-bold text-[#0C2340] cursor-pointer focus:outline-none"
                >
                  <option value={2.5}>2.5 m</option>
                  <option value={2.8}>2.8 m</option>
                  <option value={3.2}>3.2 m</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-[#5A7896] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Ventilation (ACH) & Indoor Source */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-[#476788]">Ventilation (ACH)</label>
              <div className="relative">
                <select
                  aria-label="Ventilation ACH"
                  value={ventilationAch}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setVentilationAch(val);
                    syncIndoor({ ventilationAch: val });
                  }}
                  className="w-full bg-[#F4F9FE] border border-[#CBE0F2] rounded-xl py-2 pl-3 pr-6 font-bold text-[#0C2340] cursor-pointer focus:outline-none"
                >
                  <option value={0.5}>0.5 (Sealed)</option>
                  <option value={1.5}>1.5 (Crack)</option>
                  <option value={3.0}>3.0 (Open)</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-[#5A7896] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold text-[#476788]">Indoor Source</label>
              <div className="relative">
                <select
                  aria-label="Indoor Source"
                  value={indoorSource}
                  onChange={(e) => {
                    const val = e.target.value as IndoorSourceType;
                    setIndoorSource(val);
                    syncIndoor({ indoorSource: val });
                  }}
                  className="w-full bg-[#F4F9FE] border border-[#CBE0F2] rounded-xl py-2 pl-2.5 pr-6 font-bold text-[#0C2340] cursor-pointer focus:outline-none truncate"
                >
                  <option value="none">None</option>
                  <option value="cooking_frying">Cooking (+85)</option>
                  <option value="incense_smoke">Incense (+110)</option>
                  <option value="high_co2_stuffy">Stuffy CO₂</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-[#5A7896] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Using Air Purifier Switch + CADR */}
          <div className="pt-2 border-t border-[#E2EFFA] space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#0C2340]">Using Air Purifier</span>
              <button
                type="button"
                role="switch"
                aria-checked={usingPurifier}
                onClick={() => {
                  const next = !usingPurifier;
                  setUsingPurifier(next);
                  syncIndoor({ usingPurifier: next });
                }}
                className={`w-11 h-6 rounded-full transition-colors p-0.5 cursor-pointer ${
                  usingPurifier ? 'bg-[#0EA5E9]' : 'bg-slate-300'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
                    usingPurifier ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {usingPurifier && (
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#476788] font-semibold">Purifier CADR Rate:</span>
                <select
                  aria-label="Purifier CADR"
                  value={purifierCadr}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setPurifierCadr(val);
                    syncIndoor({ purifierCadr: val });
                  }}
                  className="bg-[#F4F9FE] border border-[#CBE0F2] rounded-lg px-2 py-1 font-bold text-[#0284C7] cursor-pointer"
                >
                  <option value={150}>150 m³/h</option>
                  <option value={250}>250 m³/h</option>
                  <option value={300}>300 m³/h</option>
                  <option value={400}>400 m³/h</option>
                </select>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Stack (8 Cols): Top Row (Analysis + Scenarios) & Bottom Insight */}
      <div className="lg:col-span-8 flex flex-col justify-between gap-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 flex-1">
          {/* Card: Indoor Air Analysis (7 Cols) */}
          <div className="md:col-span-7 rounded-3xl bg-white/85 backdrop-blur-md border border-white p-5 shadow-soft flex flex-col justify-between space-y-3">
            <h2 className="text-sm sm:text-base font-extrabold text-[#0C2340]">
              Indoor Air Analysis
            </h2>

            {indoorAqiResult ? (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Semi-Circular Radial Gauge */}
                <div className="relative w-40 h-28 flex flex-col items-center justify-end shrink-0">
                  <svg className="w-40 h-24 overflow-visible" viewBox="0 0 160 90">
                    <path
                      d="M 16 80 A 64 64 0 0 1 144 80"
                      fill="none"
                      stroke="#E2EFFA"
                      strokeWidth="14"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 16 80 A 64 64 0 0 1 144 80"
                      fill="none"
                      stroke={indoorColors.hexColor}
                      strokeWidth="14"
                      strokeLinecap="round"
                      strokeDasharray={arcLen}
                      strokeDashoffset={dashOffset}
                      className="transition-all duration-700"
                    />
                  </svg>
                  <div className="text-center -mt-10">
                    <div className="text-3xl font-black text-[#0C2340] font-mono leading-none">
                      {indoorAqiResult.aqi}
                    </div>
                    <div className="text-[10px] font-bold text-[#5A7896] mt-0.5">
                      AQI (Indoor Est.)
                    </div>
                  </div>
                  <span className={`mt-1.5 px-3 py-0.5 rounded-full text-[11px] font-extrabold ${indoorColors.badgeClass}`}>
                    {indoorAqiResult.category}
                  </span>
                </div>

                {/* Modeled Indoor Parameters */}
                <div className="flex-1 w-full space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-[#E2EFFA]">
                    <span className="text-[#5A7896] font-semibold">Modeled PM2.5</span>
                    <strong className="font-mono text-[#0C2340]">{modeledIndoorPm25} µg/m³</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#E2EFFA]">
                    <span className="text-[#5A7896] font-semibold">Outdoor PM2.5</span>
                    <strong className="font-mono text-[#0C2340]">{ambientPm25} µg/m³</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#E2EFFA]">
                    <span className="text-[#5A7896] font-semibold">Room Volume</span>
                    <strong className="font-mono text-[#0C2340]">{roomVolumeM3} m³</strong>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#5A7896] font-semibold">Purifier ACH</span>
                    <strong className="font-mono text-[#0284C7]">{purifierAch.toFixed(1)} ACH</strong>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center py-6 text-rose-600 space-y-1">
                <AlertTriangle className="w-6 h-6" />
                <span className="text-xs font-bold">Outdoor baseline unavailable — cannot model indoor concentration</span>
              </div>
            )}
          </div>

          {/* Card: Scenarios & Impact (5 Cols) */}
          <div className="md:col-span-5 rounded-3xl bg-white/85 backdrop-blur-md border border-white p-5 shadow-soft flex flex-col justify-between space-y-3">
            <h2 className="text-sm sm:text-base font-extrabold text-[#0C2340]">
              Scenarios & Impact
            </h2>

            <div className="space-y-3">
              {/* Scenario 1: Open Ventilation */}
              <div className="rounded-2xl bg-[#F4F9FE] border border-[#D6E7F5] p-3.5 flex items-center justify-between gap-2">
                <div>
                  <div className="text-xs font-extrabold text-[#0C2340]">With Ventilation</div>
                  <div className="text-[11px] text-[#5A7896] font-mono">ACH 3.0</div>
                </div>
                <span
                  className={`px-2.5 py-1 rounded-xl text-xs font-black font-mono ${
                    ventDeltaPct > 0
                      ? 'bg-rose-50 text-rose-700 border border-rose-200'
                      : 'bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]'
                  }`}
                >
                  {ambientPm25 == null ? '--' : ventDeltaPct > 0 ? `+${ventDeltaPct}%` : `${ventDeltaPct}%`}
                </span>
              </div>

              {/* Scenario 2: With Purifier */}
              <div className="rounded-2xl bg-[#F4F9FE] border border-[#D6E7F5] p-3.5 flex items-center justify-between gap-2">
                <div>
                  <div className="text-xs font-extrabold text-[#0C2340]">With Purifier</div>
                  <div className="text-[11px] text-[#5A7896] font-mono">CADR {purifierCadr} m³/h</div>
                </div>
                <span className="px-2.5 py-1 rounded-xl text-xs font-black font-mono bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]">
                  {purifierDeltaPct}%
                </span>
              </div>
            </div>

            <p className="text-[10px] text-[#5A7896] leading-tight">
              Single-zone steady-state mass-balance estimate ({roomType}, {roomAreaM2} m²).
            </p>
          </div>
        </div>

        {/* Bottom Insight Bar */}
        <div className="rounded-2xl bg-white/85 backdrop-blur-md border border-[#CBE0F2] p-4 flex items-center space-x-3 text-xs shadow-2xs">
          <div className="w-9 h-9 rounded-xl bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center shrink-0">
            <Home className="w-4 h-4 text-[#0284C7]" />
          </div>
          <div>
            <span className="font-extrabold text-[#0C2340]">Insight: </span>
            <span className="text-[#334E68] font-medium">
              {ambientPm25 == null
                ? 'Live outdoor PM2.5 is currently unavailable for this location. Keep HEPA filtration active indoors if haze is visible.'
                : `${rec.safetyReason} Purifier recommended on ${rec.purifierRecommendation.recommendedSpeed} speed (target clean-down ~${rec.purifierRecommendation.estimatedPostCleanPm25} µg/m³).`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
