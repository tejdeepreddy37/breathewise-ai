import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { calculateIndoorRecommendations } from '../engines/indoorCoach';
import { Home, Wind, Fan, CheckCircle2, AlertTriangle, ShieldCheck, Clock } from 'lucide-react';

export const IndoorCoachView: React.FC = () => {
  const { telemetry, cleanAirWindow, userPreferences, updatePreferences } = useApp();
  const [roomAreaM2, setRoomAreaM2] = useState<number>(userPreferences.roomSizeM2 || 20);

  const ambientPm25 = telemetry.current.pm25;
  const currentHour = new Date().getHours();
  const rec = calculateIndoorRecommendations(ambientPm25, cleanAirWindow, currentHour, roomAreaM2);

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
            <span>CLEAN-AIR FLUSH ACTIVE NOW</span>
          </span>
        );
      case 'SEAL_COMPLETELY':
        return (
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-300 flex items-center space-x-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
            <span>KEEP WINDOWS & DOORS SEALED</span>
          </span>
        );
    }
  };

  return (
    <div className="bg-white p-5 sm:p-6 rounded-2xl border border-cream-300 shadow-sm space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-cream-200">
        <div>
          <div className="flex items-center space-x-2">
            <Home className="w-4 h-4 text-forest-600" />
            <h2 className="text-base sm:text-lg font-bold text-slatecharcoal-900 tracking-tight">
              Indoor Air & Ventilation Coach
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Micro-climate building envelope analysis factoring in outdoor infiltration ratio (α = 0.45) & HEPA CADR runtime
          </p>
        </div>

        {/* Room Area Selector */}
        <div className="flex items-center space-x-2 text-xs bg-cream-100 p-2 rounded-xl border border-cream-200">
          <span className="text-slate-600 font-medium">Room Size:</span>
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
      </div>

      {/* Main Guidance Card */}
      <div className="p-4 sm:p-5 rounded-xl bg-cream-50 border border-cream-300 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Current Building Envelope Directive
          </div>
          <div>{getActionBadge()}</div>
        </div>

        <p className="text-sm font-medium text-slatecharcoal-900 leading-relaxed">
          {rec.actionDirective}
        </p>

        <div className="text-xs text-slate-500">
          {rec.safeWindowText}
        </div>
      </div>

      {/* Two-Column Telemetry: Infiltration vs Purifier CADR */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Infiltration Column */}
        <div className="p-4 rounded-xl border border-cream-200 bg-white space-y-3">
          <div className="flex items-center space-x-2 text-xs font-bold text-slatecharcoal-900">
            <Wind className="w-4 h-4 text-forest-600" />
            <span>Building Infiltration Physics</span>
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
              <span className="text-slate-500">Envelope Infiltration Factor:</span>
              <span className="font-semibold text-slate-700">α ≈ 0.45 (Closed doors)</span>
            </div>
            <p className="text-[11px] text-slate-500 pt-1">
              Residential concrete construction typically blocks 55% of coarse particulates when sealed, but micro-fine PM2.5 gradually penetrates cracks.
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
              <span className="text-slate-500">Time to 75% Clean-Down:</span>
              <span className="font-bold text-slatecharcoal-900">~{rec.purifierRecommendation.targetRuntimeMinutes} minutes</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-cream-100">
              <span className="text-slate-500">Target Indoor PM2.5:</span>
              <span className="font-bold text-emerald-600">&lt; {rec.purifierRecommendation.estimatedPostCleanPm25} µg/m³ (Safe)</span>
            </div>
            <p className="text-[11px] text-slate-500 pt-1">
              Calculated for a {roomAreaM2} m² room (volume ~{(roomAreaM2 * 2.8).toFixed(0)} m³) utilizing a 250 m³/h CADR true-HEPA filter.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
