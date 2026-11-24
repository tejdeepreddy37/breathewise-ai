import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { calculateIndoorRecommendations } from '../engines/indoorCoach';
import { IndoorSourceType } from '../types/engines';
import { Home, Wind, Fan, CheckCircle2, AlertTriangle, ShieldCheck, Clock, Info, Flame, AlertCircle } from 'lucide-react';

export const IndoorCoachView: React.FC = () => {
  const { telemetry, cleanAirWindow, userPreferences, updatePreferences } = useApp();
  const [roomAreaM2, setRoomAreaM2] = useState<number>(userPreferences.roomSizeM2 || 20);
  const [indoorSource, setIndoorSource] = useState<IndoorSourceType>('none');

  const ambientPm25 = telemetry.current.pm25;
  const ambientO3 = telemetry.current.o3;
  const currentHour = new Date().getHours();
  const rec = calculateIndoorRecommendations(ambientPm25, cleanAirWindow, currentHour, roomAreaM2, ambientO3, indoorSource);

  const getActionBadge = () => {
    switch (rec.windowAction) {
      case 'OPEN_CROSS_VENTILATE':
        return (
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-forest-50 text-forest-700 border border-forest-200 flex items-center space-x-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>SAFE TO CROSS-VENTILATE</span>
          </span>
        );
      case 'CRACK_FLUSH_NOW':
        return (
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-300 flex items-center space-x-1.5 animate-pulse">
            <Clock className="w-3.5 h-3.5" />
            <span>MODERATE FLUSH ACTIVE (15-20 MINS)</span>
          </span>
        );
      case 'SEAL_COMPLETELY':
        return (
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-300 flex items-center space-x-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
            <span>KEEP WINDOWS & DOORS SEALED</span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-5 sm:p-6 rounded-2xl border border-cream-300 shadow-sm space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-cream-200">
        <div>
          <div className="flex items-center space-x-2">
            <Home className="w-4 h-4 text-forest-600" />
            <h2 className="text-base sm:text-lg font-bold text-slatecharcoal-900 tracking-tight">
              Indoor Air & Ventilation Safety Coach
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Single-zone building envelope analysis with conservative safety bounds (Ventilation strictly blocked if outdoor PM2.5 &gt; 60 µg/m³)
          </p>
        </div>

        {/* Room Area & Source Selector Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center space-x-2 text-xs bg-cream-100 p-2 rounded-xl border border-cream-200">
            <span className="text-slate-600 font-medium">Floor Area:</span>
            {[15, 20, 30].map((size) => (
              <button
                key={size}
                onClick={() => {
                  setRoomAreaM2(size);
                  updatePreferences({ roomSizeM2: size });
                }}
                className={`px-2 py-0.5 rounded font-semibold transition-colors ${
                  roomAreaM2 === size
                    ? 'bg-forest-500 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-cream-200'
                }`}
              >
                {size} m²
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-1.5 text-xs bg-cream-100 p-1.5 rounded-xl border border-cream-200">
            <span className="text-slate-600 font-medium pl-1 hidden sm:inline">Indoor Context:</span>
            {[
              { id: 'none', label: 'Normal' },
              { id: 'cooking_frying', label: '🍳 Cooking / Frying' },
              { id: 'incense_smoke', label: '🕯️ Incense' },
              { id: 'high_co2_stuffy', label: '💨 Stuffy / CO2' },
            ].map((src) => (
              <button
                key={src.id}
                onClick={() => setIndoorSource(src.id as IndoorSourceType)}
                className={`px-2 py-1 rounded-lg text-[11px] font-semibold transition-colors ${
                  indoorSource === src.id
                    ? 'bg-forest-500 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-cream-200'
                }`}
              >
                {src.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Guidance Card */}
      <div className={`p-4 sm:p-5 rounded-xl border space-y-3 ${
        rec.windowAction === 'SEAL_COMPLETELY'
          ? 'bg-amber-50/50 border-amber-200'
          : 'bg-cream-50 border-cream-300'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Building Envelope Directive
          </div>
          <div>{getActionBadge()}</div>
        </div>

        <p className="text-sm font-medium text-slatecharcoal-900 leading-relaxed">
          {rec.actionDirective}
        </p>

        {/* Specific Indoor Source Advisory if active */}
        {rec.indoorSourceDirective && (
          <div className="p-3 bg-amber-50/80 rounded-lg border border-amber-200 text-xs text-amber-900 space-y-1">
            <div className="font-bold flex items-center space-x-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
              <span>Indoor Activity & Airflow Directive</span>
            </div>
            <p className="leading-relaxed text-[11px]">{rec.indoorSourceDirective}</p>
          </div>
        )}

        <div className="text-xs text-slate-600 flex items-center space-x-1.5 pt-1 border-t border-cream-200/80">
          <Info className="w-3.5 h-3.5 text-slate-500 shrink-0" />
          <span><strong>Safety Rule:</strong> {rec.safetyReason}</span>
        </div>
      </div>

      {/* Two-Column Telemetry: Infiltration vs Purifier CADR */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Infiltration Column */}
        <div className="p-4 rounded-xl border border-cream-200 bg-white space-y-3">
          <div className="flex items-center space-x-2 text-xs font-bold text-slatecharcoal-900">
            <Wind className="w-4 h-4 text-forest-600" />
            <span>Building Envelope Infiltration Model</span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between items-center py-1 border-b border-cream-100">
              <span className="text-slate-500">Outdoor PM2.5:</span>
              <span className="font-bold text-slatecharcoal-900">{ambientPm25} µg/m³</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-cream-100">
              <span className="text-slate-500">Estimated Unfiltered Indoor:</span>
              <span className="font-bold text-amber-700">~{rec.estimatedIndoorBaselinePm25} µg/m³</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-cream-100">
              <span className="text-slate-500">Envelope Infiltration Ratio:</span>
              <span className="font-semibold text-slate-700">α ≈ 0.45 (Closed windows)</span>
            </div>
            <p className="text-[11px] text-slate-500 pt-1">
              Standard residential concrete construction typically prevents ~55% of coarse particles when sealed, but micro-fine PM2.5 gradually penetrates building cracks over a 2 to 4-hour envelope lag.
            </p>
          </div>
        </div>

        {/* Purifier Optimization Column */}
        <div className="p-4 rounded-xl border border-cream-200 bg-white space-y-3">
          <div className="flex items-center space-x-2 text-xs font-bold text-slatecharcoal-900">
            <Fan className="w-4 h-4 text-forest-600" />
            <span>HEPA Purifier Clean-Down Engine</span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between items-center py-1 border-b border-cream-100">
              <span className="text-slate-500">Recommended Fan Speed:</span>
              <span className="font-bold text-forest-700">{rec.purifierRecommendation.recommendedSpeed}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-cream-100">
              <span className="text-slate-500">Time to 75% Particulate Removal:</span>
              <span className="font-bold text-slatecharcoal-900">~{rec.purifierRecommendation.targetRuntimeMinutes} minutes</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-cream-100">
              <span className="text-slate-500">Target Indoor PM2.5:</span>
              <span className="font-bold text-emerald-600">&lt; {rec.purifierRecommendation.estimatedPostCleanPm25} µg/m³</span>
            </div>
            <p className="text-[11px] text-slate-500 pt-1">
              Evaluated for {roomAreaM2} m² floor area with assumed 2.8m ceiling height (Volume: {(roomAreaM2 * 2.8).toFixed(0)} m³) assuming a 250 m³/h CADR true-HEPA filter.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
