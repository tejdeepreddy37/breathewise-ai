import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { calculateIndoorRecommendations } from '../engines/indoorCoach';
import { IndoorSourceType } from '../types/engines';
import { 
  Home, 
  Wind, 
  Fan, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Clock, 
  Info, 
  Flame, 
  AlertCircle,
  Lock,
  ArrowRight,
  Gauge
} from 'lucide-react';

export const IndoorCoachView: React.FC = () => {
  const { telemetry, cleanAirWindow, userPreferences, updatePreferences } = useApp();
  const [roomAreaM2, setRoomAreaM2] = useState<number>(userPreferences.roomSizeM2 || 20);
  const [indoorSource, setIndoorSource] = useState<IndoorSourceType>('none');

  const ambientPm25 = telemetry.current.pm25;
  const ambientO3 = telemetry.current.o3;
  const currentHour = new Date().getHours();
  const rec = calculateIndoorRecommendations(ambientPm25, cleanAirWindow, currentHour, roomAreaM2, ambientO3, indoorSource);

  const isSealed = rec.windowAction === 'SEAL_COMPLETELY';
  const isFlush = rec.windowAction === 'CRACK_FLUSH_NOW';
  const isOpen = rec.windowAction === 'OPEN_CROSS_VENTILATE';

  const getActionBadge = () => {
    if (isOpen) {
      return (
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-sage-50 text-sage-800 border border-sage-200/80 flex items-center space-x-1.5 shadow-2xs">
          <CheckCircle2 className="w-3.5 h-3.5 text-sage-600" />
          <span>SAFE TO CROSS-VENTILATE</span>
        </span>
      );
    }
    if (isFlush) {
      return (
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-300 flex items-center space-x-1.5 animate-pulse shadow-2xs">
          <Clock className="w-3.5 h-3.5 text-emerald-600" />
          <span>CONTROLLED FLUSH (15-20 MIN)</span>
        </span>
      );
    }
    return (
      <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-300 flex items-center space-x-1.5 shadow-2xs">
        <Lock className="w-3.5 h-3.5 text-amber-700" />
        <span>SEAL WINDOWS & DOORS</span>
      </span>
    );
  };

  const getSpeedBars = (speed: string) => {
    const levels: Record<string, number> = {
      OFF: 0,
      LOW: 1,
      MEDIUM: 2,
      HIGH: 3,
      TURBO: 4,
    };
    const activeLevel = levels[speed] || 2;
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4].map((bar) => (
          <div
            key={bar}
            className={`w-2 h-4 rounded-xs transition-all ${
              bar <= activeLevel
                ? activeLevel === 4
                  ? 'bg-rose-500'
                  : activeLevel >= 3
                  ? 'bg-amber-500'
                  : 'bg-forest-500'
                : 'bg-cream-200'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white p-6 sm:p-7 rounded-3xl border border-cream-200/80 shadow-soft space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-cream-200/60">
        <div>
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg bg-forest-50 text-forest-600 flex items-center justify-center border border-forest-100/80">
              <Home className="w-3.5 h-3.5" />
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slatecharcoal-900 tracking-tight">
              Indoor Envelope & Ventilation Coach
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Single-zone residential infiltration model with strict public-health safety ceilings (Ventilation blocked if outdoor PM2.5 &gt; 60 µg/m³)
          </p>
        </div>

        {/* Floor Area Selector Controls */}
        <div className="flex items-center space-x-2 text-xs bg-cream-50/80 p-2 rounded-2xl border border-cream-200/80 self-start sm:self-auto">
          <span className="text-slate-600 font-semibold pl-1 text-[11px]">Room Size:</span>
          {[15, 20, 30].map((size) => (
            <button
              key={size}
              onClick={() => {
                setRoomAreaM2(size);
                updatePreferences({ roomSizeM2: size });
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                roomAreaM2 === size
                  ? 'bg-forest-600 text-white shadow-2xs'
                  : 'text-slate-600 hover:bg-cream-200/60'
              }`}
            >
              {size} m²
            </button>
          ))}
        </div>
      </div>

      {/* Graphical Building Envelope Diagram */}
      <div className="bg-cream-50/60 rounded-2xl border border-cream-200/80 p-4 sm:p-5">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Outdoor Source */}
          <div className="flex-1 bg-white p-3.5 rounded-xl border border-cream-200/70 shadow-2xs">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold text-slate-500 uppercase">Outdoor Ambient</span>
              <Wind className="w-3.5 h-3.5 text-slate-500" />
            </div>
            <div className="flex items-baseline space-x-1.5">
              <span className="text-xl font-extrabold text-slatecharcoal-900 font-mono">
                {ambientPm25}
              </span>
              <span className="text-[10px] text-slate-500 font-medium">µg/m³ PM2.5</span>
            </div>
            <div className="text-[10px] text-slate-500 mt-1">
              Ozone: <span className="font-semibold text-slate-700">{ambientO3} µg/m³</span>
            </div>
          </div>

          {/* Barrier / Envelope Node */}
          <div className="flex flex-col items-center justify-center px-2 py-1">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Envelope Barrier
            </div>
            <div
              className={`px-3 py-1.5 rounded-xl border flex items-center space-x-1.5 shadow-2xs transition-all ${
                isSealed
                  ? 'bg-amber-100/80 border-amber-300 text-amber-900'
                  : isFlush
                  ? 'bg-emerald-100/80 border-emerald-300 text-emerald-900'
                  : 'bg-sage-100/80 border-sage-300 text-sage-900'
              }`}
            >
              {isSealed ? (
                <>
                  <Lock className="w-3.5 h-3.5 text-amber-800" />
                  <span className="text-xs font-bold">Sealed Barrier (α=0.45)</span>
                </>
              ) : isFlush ? (
                <>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-700 animate-pulse" />
                  <span className="text-xs font-bold">Crack Flush Active</span>
                </>
              ) : (
                <>
                  <ArrowRight className="w-3.5 h-3.5 text-sage-700" />
                  <span className="text-xs font-bold">Cross-Ventilation Open</span>
                </>
              )}
            </div>
          </div>

          {/* Indoor Living Space */}
          <div className="flex-1 bg-white p-3.5 rounded-xl border border-cream-200/70 shadow-2xs">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold text-slate-500 uppercase">Indoor Living Space</span>
              <Home className="w-3.5 h-3.5 text-forest-600" />
            </div>
            <div className="flex items-baseline space-x-1.5">
              <span className="text-xl font-extrabold text-forest-700 font-mono">
                ~{rec.estimatedIndoorBaselinePm25}
              </span>
              <span className="text-[10px] text-slate-500 font-medium">µg/m³ baseline</span>
            </div>
            <div className="text-[10px] text-slate-500 mt-1">
              Volume: <span className="font-semibold text-slate-700">{(roomAreaM2 * 2.8).toFixed(0)} m³ ({roomAreaM2} m²)</span>
            </div>
          </div>

        </div>
      </div>

      {/* Main Directive Callout Card */}
      <div
        className={`p-4 sm:p-5 rounded-2xl border space-y-3 transition-all ${
          isSealed
            ? 'bg-amber-50/50 border-amber-200/90'
            : 'bg-sage-50/40 border-sage-200/80'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-600">
            Window & Envelope Protocol
          </div>
          <div>{getActionBadge()}</div>
        </div>

        <p className="text-sm font-semibold text-slatecharcoal-900 leading-relaxed">
          {rec.actionDirective}
        </p>

        {/* Specific Indoor Source Advisory if active */}
        {rec.indoorSourceDirective && (
          <div className="p-3 bg-amber-100/60 rounded-xl border border-amber-200/90 text-xs text-amber-950 space-y-1">
            <div className="font-bold flex items-center space-x-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
              <span>Active Indoor Source Intervention</span>
            </div>
            <p className="leading-relaxed text-[11px]">{rec.indoorSourceDirective}</p>
          </div>
        )}

        <div className="text-xs text-slate-600 flex items-center space-x-2 pt-2 border-t border-cream-200/60">
          <Info className="w-3.5 h-3.5 text-slate-500 shrink-0" />
          <span><strong>Safety Rule:</strong> {rec.safetyReason}</span>
        </div>
      </div>

      {/* Indoor Context Selector Buttons */}
      <div className="space-y-2">
        <label className="block text-xs font-semibold text-slate-700">
          Current Indoor Emission Activity
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { id: 'none', label: '🌿 Normal Indoor Air' },
            { id: 'cooking_frying', label: '🍳 Cooking / Frying' },
            { id: 'incense_smoke', label: '🕯️ Incense / Puja' },
            { id: 'high_co2_stuffy', label: '💨 High CO2 / Stuffy' },
          ].map((src) => (
            <button
              key={src.id}
              onClick={() => setIndoorSource(src.id as IndoorSourceType)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer text-center ${
                indoorSource === src.id
                  ? 'bg-forest-600 text-white shadow-2xs ring-1 ring-forest-600'
                  : 'bg-cream-50/70 text-slate-700 border border-cream-200 hover:bg-cream-100'
              }`}
            >
              {src.label}
            </button>
          ))}
        </div>
      </div>

      {/* Two Telemetry Cards: Infiltration vs Purifier CADR */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Infiltration Column */}
        <div className="p-4 sm:p-5 rounded-2xl border border-cream-200/80 bg-white space-y-3">
          <div className="flex items-center space-x-2 text-xs font-bold text-slatecharcoal-900">
            <Wind className="w-4 h-4 text-forest-600" />
            <span>Building Envelope Infiltration Model</span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between items-center py-1.5 border-b border-cream-100">
              <span className="text-slate-500">Outdoor Ambient PM2.5:</span>
              <span className="font-bold text-slatecharcoal-900 font-mono">{ambientPm25} µg/m³</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-cream-100">
              <span className="text-slate-500">Estimated Unfiltered Indoor:</span>
              <span className="font-bold text-amber-700 font-mono">~{rec.estimatedIndoorBaselinePm25} µg/m³</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-cream-100">
              <span className="text-slate-500">Envelope Infiltration Ratio:</span>
              <span className="font-semibold text-slate-700 font-mono">α ≈ 0.45 (Closed windows)</span>
            </div>
            <p className="text-[11px] text-slate-500 pt-1 leading-relaxed">
              Standard residential construction prevents ~55% of outdoor coarse particles when sealed, but micro-fine PM2.5 penetrates building cracks over a 2 to 4-hour envelope lag.
            </p>
          </div>
        </div>

        {/* Purifier Clean-Down Column */}
        <div className="p-4 sm:p-5 rounded-2xl border border-cream-200/80 bg-white space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs font-bold text-slatecharcoal-900">
              <Fan className="w-4 h-4 text-forest-600" />
              <span>HEPA Purifier Clean-Down Engine</span>
            </div>
            {getSpeedBars(rec.purifierRecommendation.recommendedSpeed)}
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between items-center py-1.5 border-b border-cream-100">
              <span className="text-slate-500">Target Fan Speed:</span>
              <span className="font-bold text-forest-700 font-mono">{rec.purifierRecommendation.recommendedSpeed}</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-cream-100">
              <span className="text-slate-500">Time to 75% Removal:</span>
              <span className="font-bold text-slatecharcoal-900 font-mono">~{rec.purifierRecommendation.targetRuntimeMinutes} minutes</span>
            </div>
            <div className="flex justify-between items-center py-1.5 border-b border-cream-100">
              <span className="text-slate-500">Target Indoor PM2.5:</span>
              <span className="font-bold text-emerald-600 font-mono">&lt; {rec.purifierRecommendation.estimatedPostCleanPm25} µg/m³</span>
            </div>
            <p className="text-[11px] text-slate-500 pt-1 leading-relaxed">
              Modeled for {roomAreaM2} m² floor area with 2.8m ceiling height (Volume: {(roomAreaM2 * 2.8).toFixed(0)} m³) assuming a standard 250 m³/h CADR true-HEPA filter.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
