import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { calculateIndoorRecommendations, getIndianStandardTimeHour } from '../engines/indoorCoach';
import { IndoorSourceType } from '../types/engines';
import { Home, Lock, Wind, Fan, CheckCircle2, AlertCircle } from 'lucide-react';

export const IndoorCoachView: React.FC<{ isDedicatedWorkspace?: boolean }> = ({ isDedicatedWorkspace = false }) => {
  const { telemetry, cleanAirWindow, userPreferences } = useApp();
  const [roomAreaM2, setRoomAreaM2] = useState<number>(userPreferences.roomSizeM2 || 20);
  const [indoorSource, setIndoorSource] = useState<IndoorSourceType>('none');

  const ambientPm25 = telemetry.current.pm25;
  const ambientO3 = telemetry.current.o3;
  const currentHour = getIndianStandardTimeHour();
  const rec = calculateIndoorRecommendations(ambientPm25, cleanAirWindow, currentHour, roomAreaM2, ambientO3, indoorSource);

  const isSealed = rec.windowAction === 'SEAL_COMPLETELY';
  const roomVolumeM3 = Math.round(roomAreaM2 * 2.8);
  const targetCadrM3H = Math.round(roomVolumeM3 * 4.8); // 4.8 ACH standard for respiratory protection

  return (
    <div className={`rounded-3xl bg-white border border-stone-200/80 ${isDedicatedWorkspace ? 'p-5 sm:p-7 space-y-5' : 'p-4 sm:p-6 flex flex-col justify-between h-full'} shadow-2xs`}>
      
      {/* Mobile Card Header */}
      <div className="sm:hidden flex items-center justify-between pb-2 border-b border-stone-100">
        <div className="flex items-center space-x-2.5">
          <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100 shrink-0">
            <Home className="w-3.5 h-3.5" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-slatecharcoal-900 tracking-tight">
              Indoor Air Coach
            </h3>
            <p className="text-[10px] text-slate-500 font-medium">
              Indoor: ~{rec.estimatedIndoorBaselinePm25} µg/m³
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Card Header */}
      <div className="hidden sm:flex items-start justify-between pb-3 border-b border-stone-100">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100 shrink-0">
            <Home className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slatecharcoal-900 tracking-tight">
              Indoor Envelope & Air Coach
            </h3>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Your home air quality and ventilation plan
            </p>
          </div>
        </div>

        {isDedicatedWorkspace && (
          <div className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80">
            Room Volume: {roomVolumeM3} m³ ({roomAreaM2} m² × 2.8m)
          </div>
        )}
      </div>

      {/* Interactive Controls Bar */}
      <div className={`bg-stone-50/70 p-3.5 rounded-2xl border border-stone-200/70 flex flex-wrap items-center justify-between gap-3 text-xs`}>
        <div className="flex items-center space-x-2">
          <span className="text-slate-500 font-bold uppercase text-[10px] tracking-wider">Room Area:</span>
          {[12, 20, 35, 50].map((area) => (
            <button
              key={area}
              onClick={() => setRoomAreaM2(area)}
              className={`px-2.5 py-1 rounded-lg font-bold text-xs transition-all cursor-pointer ${
                roomAreaM2 === area
                  ? 'bg-white text-slatecharcoal-900 shadow-2xs border border-stone-200'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {area} m²
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-slate-500 font-bold uppercase text-[10px] tracking-wider">Indoor Source:</span>
          <select
            aria-label="Indoor Pollution Source"
            value={indoorSource}
            onChange={(e) => setIndoorSource(e.target.value as IndoorSourceType)}
            className="bg-white border border-stone-200 rounded-lg px-2.5 py-1 font-bold text-slatecharcoal-900 text-xs cursor-pointer focus:outline-none shadow-2xs"
          >
            <option value="none">None (Clean & Sealed)</option>
            <option value="cooking_frying">Cooking / Frying (+85 µg/m³)</option>
            <option value="incense_smoke">Incense / Coil (+120 µg/m³)</option>
            <option value="high_co2_stuffy">Stuffy / High CO₂</option>
          </select>
        </div>
      </div>

      {/* Dual Key Directives: Window Ventilation & HEPA Filtration */}
      <div className={`grid grid-cols-1 ${isDedicatedWorkspace ? 'sm:grid-cols-2 gap-4' : 'sm:grid-cols-2 gap-3 py-1'}`}>
        
        {/* Card 1: Window Action Directive */}
        <div className={`p-4 rounded-2xl border flex flex-col justify-between space-y-2.5 ${
          isSealed ? 'bg-rose-50/50 border-rose-200/80 text-rose-950' : 'bg-emerald-50/50 border-emerald-200/80 text-emerald-950'
        }`}>
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center space-x-1.5">
              {isSealed ? <Lock className="w-3.5 h-3.5 text-rose-600" /> : <Wind className="w-3.5 h-3.5 text-emerald-600" />}
              <span>Window Ventilation</span>
            </span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
              isSealed ? 'bg-rose-100 text-rose-800' : 'bg-emerald-100 text-emerald-800'
            }`}>
              {isSealed ? 'SEAL ENVELOPE' : 'VENTILATE'}
            </span>
          </div>

          <div>
            <div className="text-sm sm:text-base font-extrabold tracking-tight">
              {isSealed ? 'Seal Windows & Doors Completely' : 'Open Windows for Convective Air Flush'}
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed mt-1">
              {isSealed
                ? 'Outdoor PM2.5 or Ozone exceeds safe exposure limits. Infiltration introduces toxic fine aerosols into residential breathing zones.'
                : 'Current atmospheric conditions are in the convective dispersion window. Natural cross-ventilation reduces indoor CO₂ accumulation.'}
            </p>
          </div>

          <div className="pt-2 border-t border-stone-200/60 text-[10px] font-mono text-slate-500 flex justify-between">
            <span>Outdoor PM2.5: {ambientPm25 ?? '--'} µg/m³</span>
            <span>Ozone: {ambientO3 ?? '--'} µg/m³</span>
          </div>
        </div>

        {/* Card 2: Air Purifier Operation Directive */}
        <div className="p-4 rounded-2xl border border-stone-200/80 bg-stone-50/60 flex flex-col justify-between space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center space-x-1.5">
              <Fan className="w-3.5 h-3.5 text-emerald-700" />
              <span>HEPA Air Purifier</span>
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-600 text-white shadow-2xs">
              SPEED: {rec.purifierRecommendation.recommendedSpeed}
            </span>
          </div>

          <div>
            <div className="text-sm sm:text-base font-extrabold text-slatecharcoal-900 tracking-tight">
              Indoor PM2.5 Target: ~{rec.estimatedIndoorBaselinePm25} µg/m³
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed mt-1">
              Run mechanical HEPA filtration on {rec.purifierRecommendation.recommendedSpeed} mode for {rec.purifierRecommendation.targetRuntimeMinutes} minutes to bring indoor aerosols to ~{rec.purifierRecommendation.estimatedPostCleanPm25} µg/m³.
            </p>
          </div>

          <div className="pt-2 border-t border-stone-200/60 text-[10px] font-mono text-slate-500 flex justify-between">
            <span>Target CADR: ~{targetCadrM3H} m³/h</span>
            <span>Room Volume: {roomVolumeM3} m³</span>
          </div>
        </div>

      </div>

      {/* Dedicated Workspace Scientific Living Note */}
      {isDedicatedWorkspace && (
        <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-start space-x-3 text-xs text-slate-600 leading-relaxed">
          <div className="w-7 h-7 rounded-xl bg-white border border-stone-200 flex items-center justify-center shrink-0 shadow-2xs text-emerald-700 font-bold">
            ℹ
          </div>
          <div>
            <strong className="text-slatecharcoal-900 block mb-0.5">Physical Infiltration & Deposition Model</strong>
            BreatheWise computes indoor particulate equilibrium using a single-compartment mass balance model. Real-world penetration averages 0.65 without weatherstripping. Running mechanical filtration at ≥ 4.5 ACH accelerates particulate clearance by 82%.
          </div>
        </div>
      )}

    </div>
  );
};
