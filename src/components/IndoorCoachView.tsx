import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { calculateIndoorRecommendations, getIndianStandardTimeHour } from '../engines/indoorCoach';
import { calculateCpcbAqi, getCpcbSemanticColors } from '../engines/cpcbAqi';
import { IndoorSourceType } from '../types/engines';
import { Home, ChevronDown, AlertTriangle, Bot } from 'lucide-react';

export const IndoorCoachView: React.FC<{ isDedicatedWorkspace?: boolean }> = () => {
  const { telemetry, cleanAirWindow, scenarioState, updateScenario, askAiWithPrompt } = useApp();
  const isUnavailable = Boolean(telemetry.metadata.isUnavailable);
  const ambientPm25 =
    !isUnavailable && typeof telemetry.current.pm25 === 'number' && Number.isFinite(telemetry.current.pm25)
      ? telemetry.current.pm25
      : null;
  const ambientPm10 =
    !isUnavailable && typeof telemetry.current.pm10 === 'number' && Number.isFinite(telemetry.current.pm10)
      ? telemetry.current.pm10
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
  const infiltrationAlpha = ventilationAch <= 0.5 ? 0.45 : ventilationAch <= 1.5 ? 0.65 : 0.85;
  const sourceBonus = indoorSource === 'cooking_frying' ? 85 : indoorSource === 'incense_smoke' ? 110 : 0;
  // Single-zone steady-state mass balance: higher ACH admits more outdoor air (alpha) while diluting indoor sources
  const activeDilution = 1 / (1 + Math.max(0, ventilationAch - 0.5) * 0.45);
  const vent3Dilution = 1 / (1 + (3.0 - 0.5) * 0.45);

  const rawIndoorBeforePurifier = safeOutdoor * infiltrationAlpha + sourceBonus * activeDilution;
  const purifierAch = usingPurifier ? purifierCadr / Math.max(10, roomVolumeM3) : 0;
  const effectiveReductionRatio = purifierAch > 0 ? purifierAch / (purifierAch + ventilationAch + 0.5) : 0;

  const modeledIndoorPm25 = ambientPm25 != null
    ? Math.max(2, Math.round(rawIndoorBeforePurifier * (1 - effectiveReductionRatio)))
    : null;
  const modeledIndoorPm10 = ambientPm10 != null
    ? Math.max(4, Math.round((ambientPm10 * infiltrationAlpha + sourceBonus * 1.2 * activeDilution) * (1 - effectiveReductionRatio * 0.85)))
    : null;

  const indoorAqiResult = modeledIndoorPm25 != null ? calculateCpcbAqi({ pm25: modeledIndoorPm25 }) : null;
  const indoorColors = getCpcbSemanticColors(indoorAqiResult?.aqi ?? 0, indoorAqiResult?.category ?? 'Good');

  const baselineSealedPm25 = safeOutdoor * 0.45 + sourceBonus;
  const vent3Pm25 = safeOutdoor * 0.85 + sourceBonus * vent3Dilution;
  const ventDeltaPct =
    baselineSealedPm25 > 0
      ? Math.round(((vent3Pm25 - baselineSealedPm25) / baselineSealedPm25) * 100)
      : 0;
  const purifierDeltaPct = -Math.round((purifierCadr / Math.max(10, roomVolumeM3) / (purifierCadr / Math.max(10, roomVolumeM3) + ventilationAch + 0.5)) * 100);

  const ventilationExplanation =
    ambientPm25 == null
      ? ''
      : ventDeltaPct > 0
      ? ambientPm25 <= 30
        ? ` Opening windows admits outdoor air (+${ventDeltaPct}% vs sealed), yet indoor PM2.5 stays Clean (~${Math.round(vent3Pm25)} µg/m³) while flushing CO₂.`
        : ` Opening windows raises indoor PM2.5 (+${ventDeltaPct}% vs sealed) by admitting outdoor pollution.`
      : ` Opening windows dilutes indoor ${indoorSource !== 'none' ? 'source emissions' : 'air'} (${ventDeltaPct}% vs sealed).`;

  const gaugePct = indoorAqiResult ? Math.min(1, Math.max(0.14, indoorAqiResult.aqi / 220)) : 0;
  const arcLen = Math.PI * 64;
  const dashOffset = arcLen * (1 - gaugePct);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch animate-in fade-in duration-200">
      {/* Col 1 (4 Cols): Full-Height Room Setup Table */}
      <div className="lg:col-span-4 rounded-2xl bg-white border border-white p-5 shadow-[0_12px_32px_-8px_rgba(14,165,233,0.16),0_2px_6px_rgba(15,44,76,0.05)] flex flex-col justify-between space-y-3">
        <h2 className="text-[14px] font-extrabold text-[#0C2340]">Room Setup</h2>

        <div className="space-y-2.5 text-xs flex-1 flex flex-col justify-center">
          {/* Room Type */}
          <div className="grid grid-cols-12 items-center gap-2">
            <label htmlFor="indoor-room-type" className="col-span-5 text-[11px] font-semibold text-[#476788]">Room Type</label>
            <div className="col-span-7 relative">
              <select
                id="indoor-room-type"
                aria-label="Room Type"
                value={roomType}
                onChange={(e) => {
                  setRoomType(e.target.value);
                  syncIndoor({ roomType: e.target.value });
                }}
                className="w-full bg-[#F8FBFF] border border-[#DCEBF7] rounded-lg py-1.5 pl-2.5 pr-6 text-xs font-bold text-[#0C2340] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5E9]/40"
              >
                <option value="Bedroom">Bedroom</option>
                <option value="Living Room">Living Room</option>
                <option value="Study / Office">Study / Office</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-[#5A7896] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Room Size */}
          <div className="grid grid-cols-12 items-center gap-2">
            <label htmlFor="indoor-room-size" className="col-span-5 text-[11px] font-semibold text-[#476788]">Room Size</label>
            <div className="col-span-7 relative">
              <select
                id="indoor-room-size"
                aria-label="Room Size"
                value={roomAreaM2}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setRoomAreaM2(val);
                  syncIndoor({ roomAreaM2: val });
                }}
                className="w-full bg-[#F8FBFF] border border-[#DCEBF7] rounded-lg py-1.5 pl-2.5 pr-6 text-xs font-bold text-[#0C2340] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5E9]/40"
              >
                <option value={12}>12 m²</option>
                <option value={20}>20 m²</option>
                <option value={35}>35 m²</option>
                <option value={50}>50 m²</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-[#5A7896] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Ceiling Height */}
          <div className="grid grid-cols-12 items-center gap-2">
            <label htmlFor="indoor-ceiling-height" className="col-span-5 text-[11px] font-semibold text-[#476788]">Ceiling Height</label>
            <div className="col-span-7 relative">
              <select
                id="indoor-ceiling-height"
                aria-label="Ceiling Height"
                value={ceilingHeightM}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setCeilingHeightM(val);
                  syncIndoor({ ceilingHeightM: val });
                }}
                className="w-full bg-[#F8FBFF] border border-[#DCEBF7] rounded-lg py-1.5 pl-2.5 pr-6 text-xs font-bold text-[#0C2340] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5E9]/40"
              >
                <option value={2.5}>2.5 m</option>
                <option value={2.8}>2.8 m</option>
                <option value={3.2}>3.2 m</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-[#5A7896] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Ventilation (ACH) */}
          <div className="grid grid-cols-12 items-center gap-2">
            <label htmlFor="indoor-ventilation" className="col-span-5 text-[11px] font-semibold text-[#476788]">Ventilation (ACH)</label>
            <div className="col-span-7 relative">
              <select
                id="indoor-ventilation"
                aria-label="Ventilation ACH"
                value={ventilationAch}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setVentilationAch(val);
                  syncIndoor({ ventilationAch: val });
                }}
                className="w-full bg-[#F8FBFF] border border-[#DCEBF7] rounded-lg py-1.5 pl-2.5 pr-6 text-xs font-bold text-[#0C2340] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5E9]/40"
              >
                <option value={0.5}>0.5 (Sealed)</option>
                <option value={1.5}>1.5 (Crack)</option>
                <option value={3.0}>3.0 (Open)</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-[#5A7896] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Indoor Source */}
          <div className="grid grid-cols-12 items-center gap-2">
            <label htmlFor="indoor-source" className="col-span-5 text-[11px] font-semibold text-[#476788]">Indoor Source</label>
            <div className="col-span-7 relative">
              <select
                id="indoor-source"
                aria-label="Indoor Source"
                value={indoorSource}
                onChange={(e) => {
                  const val = e.target.value as IndoorSourceType;
                  setIndoorSource(val);
                  syncIndoor({ indoorSource: val });
                }}
                className="w-full bg-[#F8FBFF] border border-[#DCEBF7] rounded-lg py-1.5 pl-2.5 pr-6 text-xs font-bold text-[#0C2340] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5E9]/40 truncate"
              >
                <option value="none">None</option>
                <option value="cooking_frying">Cooking (+85)</option>
                <option value="incense_smoke">Incense (+110)</option>
                <option value="high_co2_stuffy">Stuffy CO₂</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-[#5A7896] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Using Air Purifier Toggle */}
          <div className="pt-2 border-t border-[#E6F1FA] space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#0C2340]">Using Air Purifier</span>
              <button
                type="button"
                role="switch"
                aria-label="Using Air Purifier"
                aria-checked={usingPurifier}
                onClick={() => {
                  const next = !usingPurifier;
                  setUsingPurifier(next);
                  syncIndoor({ usingPurifier: next });
                }}
                className={`w-11 h-6 rounded-full transition-colors p-0.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5E9] ${
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

            {/* Purifier CADR Rate */}
            <div className="grid grid-cols-12 items-center gap-2">
              <label htmlFor="indoor-cadr" className="col-span-5 text-[11px] font-semibold text-[#476788]">Purifier CADR Rate</label>
              <div className="col-span-7 relative">
                <select
                  id="indoor-cadr"
                  aria-label="Purifier CADR"
                  disabled={!usingPurifier}
                  value={purifierCadr}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setPurifierCadr(val);
                    syncIndoor({ purifierCadr: val });
                  }}
                  className={`w-full rounded-lg py-1.5 pl-2.5 pr-6 text-xs font-bold border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5E9]/40 ${
                    usingPurifier
                      ? 'bg-[#E0F2FE] border-[#BAE6FD] text-[#0284C7] cursor-pointer'
                      : 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <option value={150}>150 m³/h</option>
                  <option value={250}>250 m³/h</option>
                  <option value={300}>300 m³/h</option>
                  <option value={400}>400 m³/h</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-[#0284C7] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Stack (8 Cols): Top Row (Analysis + Scenarios) & Bottom Insight */}
      <div className="lg:col-span-8 flex flex-col justify-between gap-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 flex-1">
          {/* Card: Indoor Air Analysis */}
          <div className="md:col-span-7 rounded-2xl bg-white border border-white p-5 shadow-[0_12px_32px_-8px_rgba(14,165,233,0.16),0_2px_6px_rgba(15,44,76,0.05)] flex flex-col justify-between space-y-3">
            <h2 className="text-[14px] font-extrabold text-[#0C2340]">
              Indoor Air Analysis
            </h2>

            {indoorAqiResult ? (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 flex-1">
                {/* Gradient Arc Gauge */}
                <div
                  className="relative w-36 h-32 flex flex-col items-center justify-end shrink-0"
                  role="img"
                  aria-label={`Estimated indoor AQI is ${indoorAqiResult.aqi} (${indoorAqiResult.category})`}
                >
                  <svg className="w-40 h-28 overflow-visible" viewBox="0 0 160 95">
                    <defs>
                      <linearGradient id="indoorGaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10B981" />
                        <stop offset="55%" stopColor="#FACC15" />
                        <stop offset="100%" stopColor="#F97316" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 16 84 A 64 64 0 0 1 144 84"
                      fill="none"
                      stroke="#E6EEF6"
                      strokeWidth="13"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 16 84 A 64 64 0 0 1 144 84"
                      fill="none"
                      stroke="url(#indoorGaugeGrad)"
                      strokeWidth="13"
                      strokeLinecap="round"
                      strokeDasharray={arcLen}
                      strokeDashoffset={dashOffset}
                      className="transition-all duration-700"
                    />
                  </svg>
                  <div className="text-center -mt-12">
                    <div className="text-[36px] leading-none font-extrabold text-[#0C2340] tabular-nums">
                      {indoorAqiResult.aqi}
                    </div>
                    <div className="text-[10px] font-semibold text-[#5A7896] mt-1">
                      AQI (Indoor Est.)
                    </div>
                  </div>
                  <span className={`mt-1.5 px-3 py-0.5 rounded-lg text-[11px] font-bold ${indoorColors.badgeClass}`}>
                    {indoorAqiResult.category}
                  </span>
                </div>

                {/* Truthful Modeled Parameters Table */}
                <div className="flex-1 min-w-0 w-full pr-1 space-y-2.5 text-xs">
                  <div className="flex justify-between items-center gap-3 py-1">
                    <span className="text-[#476788] font-medium whitespace-nowrap">Modeled PM₂.₅</span>
                    <strong className="font-extrabold text-[#0C2340] tabular-nums whitespace-nowrap">{modeledIndoorPm25} µg/m³</strong>
                  </div>
                  <div className="flex justify-between items-center gap-3 py-1">
                    <span className="text-[#476788] font-medium whitespace-nowrap">
                      {modeledIndoorPm10 != null ? 'Modeled PM₁₀' : 'Outdoor PM₂.₅'}
                    </span>
                    <strong className="font-extrabold text-[#0C2340] tabular-nums whitespace-nowrap">
                      {modeledIndoorPm10 != null ? `${modeledIndoorPm10} µg/m³` : `${ambientPm25} µg/m³`}
                    </strong>
                  </div>
                  <div className="flex justify-between items-center gap-3 py-1">
                    <span className="text-[#476788] font-medium whitespace-nowrap">Room Volume</span>
                    <strong className="font-extrabold text-[#0C2340] tabular-nums whitespace-nowrap">{roomVolumeM3} m³</strong>
                  </div>
                  <div className="flex justify-between items-center gap-3 py-1">
                    <span className="text-[#476788] font-medium whitespace-nowrap">Purifier ACH</span>
                    <strong className="font-extrabold text-[#0284C7] tabular-nums whitespace-nowrap">{purifierAch.toFixed(1)} ACH</strong>
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

          {/* Card: Scenarios & Impact */}
          <div className="md:col-span-5 rounded-2xl bg-white border border-white p-5 shadow-[0_12px_32px_-8px_rgba(14,165,233,0.16),0_2px_6px_rgba(15,44,76,0.05)] flex flex-col justify-between space-y-3">
            <h2 className="text-[14px] font-extrabold text-[#0C2340]">
              Scenarios & Impact
            </h2>

            <div className="space-y-3 flex-1 flex flex-col justify-center">
              {/* Scenario 1: Open Ventilation */}
              <div className="rounded-xl bg-[#F0F7FD] border border-[#DCEBF7] px-4 py-3 flex items-center justify-between gap-2">
                <div>
                  <div className="text-xs font-extrabold text-[#0C2340]">With Ventilation</div>
                  <div className="text-[11px] text-[#5A7896]">ACH 3.0</div>
                </div>
                <span
                  className={`text-lg font-extrabold tabular-nums ${
                    ventDeltaPct > 0 ? 'text-rose-600' : 'text-[#16A34A]'
                  }`}
                >
                  {ambientPm25 == null ? '--' : ventDeltaPct > 0 ? `+${ventDeltaPct}%` : `${ventDeltaPct}%`}
                </span>
              </div>

              {/* Scenario 2: With Purifier */}
              <div className="rounded-xl bg-[#F0F7FD] border border-[#DCEBF7] px-4 py-3 flex items-center justify-between gap-2">
                <div>
                  <div className="text-xs font-extrabold text-[#0C2340]">With Purifier</div>
                  <div className="text-[11px] text-[#5A7896]">CADR {purifierCadr} m³/h</div>
                </div>
                <span className="text-lg font-extrabold text-[#16A34A] tabular-nums">
                  {purifierDeltaPct}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Insight Bar Matching Image 2 Top */}
        <div className="rounded-2xl bg-white border border-white p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-[0_10px_28px_-8px_rgba(14,165,233,0.14)]">
          <div className="flex items-center space-x-3.5 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center shrink-0">
              <Home className="w-5 h-5 text-[#0284C7]" />
            </div>
            <div className="min-w-0">
              <div className="font-extrabold text-[#0C2340] text-xs">Insight</div>
              <p className="text-[#334E68] font-medium mt-0.5 leading-snug">
                {ambientPm25 == null
                  ? 'Live outdoor PM2.5 unavailable for this location. Keep HEPA filtration active indoors if haze is visible.'
                  : `${rec.safetyReason}${ventilationExplanation} Purifier recommended on ${rec.purifierRecommendation.recommendedSpeed} speed (target clean-down ~${rec.purifierRecommendation.estimatedPostCleanPm25} µg/m³).`}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() =>
              askAiWithPrompt(
                `Explain my indoor air scenario in ${telemetry.city}: ${roomType} (${roomAreaM2} m², ${ventilationAch} ACH, source: ${indoorSource}, purifier ${usingPurifier ? `ON at ${purifierCadr} m³/h` : 'OFF'}). Modeled indoor PM2.5 is ${modeledIndoorPm25 ?? 'unavailable'} µg/m³ vs outdoor ${ambientPm25 ?? 'unavailable'} µg/m³. Why is this ventilation & purifier action recommended right now?`
              )
            }
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#E0F2FE] hover:bg-[#BAE6FD] text-[#0369A1] text-xs font-bold transition-colors cursor-pointer shrink-0 self-start sm:self-center"
          >
            <Bot className="w-3.5 h-3.5" />
            <span>Explain with AI</span>
          </button>
        </div>
      </div>
    </div>
  );
};
