import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { calculateInhaledDose, MASK_EFFICIENCIES } from '../engines/inhaledDose';
import { ActivityType } from '../types/engines';
import { Sliders, Shield, Activity, Clock, CheckCircle2, Info } from 'lucide-react';

export const WhatIfSimulator: React.FC = () => {
  const { telemetry, cleanAirWindow } = useApp();

  const [activity, setActivity] = useState<ActivityType>('outdoor_running');
  const [durationMinutes, setDurationMinutes] = useState<number>(45);
  const [maskType, setMaskType] = useState<keyof typeof MASK_EFFICIENCIES>('none');
  const [useCleanWindow, setUseCleanWindow] = useState<boolean>(false);

  // Active PM2.5 based on whether user selected current time or diurnal clean-air window
  const activePm25 = useCleanWindow ? cleanAirWindow.averagePm25 : telemetry.current.pm25;

  const currentResult = calculateInhaledDose(activePm25, durationMinutes, activity, maskType);
  const baselineUnprotected = calculateInhaledDose(telemetry.current.pm25, durationMinutes, activity, 'none');

  const massSavedVsWorstCase = +(baselineUnprotected.estimatedInhaledMassUg - currentResult.estimatedInhaledMassUg).toFixed(1);
  const percentSaved = baselineUnprotected.estimatedInhaledMassUg > 0
    ? Math.round((massSavedVsWorstCase / baselineUnprotected.estimatedInhaledMassUg) * 100)
    : 0;

  const activities: Array<{ id: ActivityType; label: string; lpm: number }> = [
    { id: 'light_walking', label: 'Light Walking (16 L/min)', lpm: 16 },
    { id: 'cycling_commute', label: 'Cycling (35 L/min)', lpm: 35 },
    { id: 'outdoor_running', label: 'Outdoor Running (55 L/min)', lpm: 55 },
    { id: 'heavy_cardio', label: 'Heavy HIIT / Sports (65 L/min)', lpm: 65 },
  ];

  return (
    <div className="bg-white p-5 sm:p-6 rounded-2xl border border-cream-300 shadow-sm space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-cream-200">
        <div>
          <div className="flex items-center space-x-2">
            <Sliders className="w-4 h-4 text-forest-600" />
            <h2 className="text-base sm:text-lg font-bold text-slatecharcoal-900 tracking-tight">
              Physiological Exposure & "What-If" Simulator
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Evaluate how activity intensity, duration, barrier filtration, and time-shifting alter gross inhaled particulate mass ($M_inh$)
          </p>
        </div>

        <span className="text-[11px] text-slate-600 bg-cream-100 px-2.5 py-1 rounded-full border border-cream-300 self-start sm:self-auto font-mono">
          Formula: M_inh = C × VE × t × (1 - η)
        </span>
      </div>

      {/* Simulator Interactive Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-cream-50 p-4 rounded-xl border border-cream-200">
        
        {/* Activity Selection */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Activity Intensity
          </label>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value as ActivityType)}
            className="w-full text-xs font-medium bg-white border border-cream-300 rounded-lg p-2 focus:ring-2 focus:ring-forest-500/20 cursor-pointer"
          >
            {activities.map((a) => (
              <option key={a.id} value={a.id}>
                {a.label}
              </option>
            ))}
          </select>
        </div>

        {/* Duration Selection */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Duration: {durationMinutes} mins
          </label>
          <input
            type="range"
            min="15"
            max="120"
            step="15"
            value={durationMinutes}
            onChange={(e) => setDurationMinutes(Number(e.target.value))}
            className="w-full accent-forest-500 mt-2 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1">
            <span>15m</span>
            <span>45m</span>
            <span>90m</span>
            <span>120m</span>
          </div>
        </div>

        {/* Mask Selection */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Physical Mask Barrier
          </label>
          <select
            value={maskType}
            onChange={(e) => setMaskType(e.target.value as any)}
            className="w-full text-xs font-medium bg-white border border-cream-300 rounded-lg p-2 focus:ring-2 focus:ring-forest-500/20 cursor-pointer"
          >
            <option value="none">No Mask (0% filtration)</option>
            <option value="cloth">Cloth Mask (~25% nominal)</option>
            <option value="surgical">Surgical Mask (~60% nominal)</option>
            <option value="n95">Certified N95 Mask (95% certified)</option>
            <option value="n99">Certified N99 Mask (99% certified)</option>
          </select>
        </div>

        {/* Time Window Switcher */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Time Slot Selected
          </label>
          <div className="flex rounded-lg border border-cream-300 overflow-hidden text-xs">
            <button
              onClick={() => setUseCleanWindow(false)}
              className={`flex-1 py-2 px-2 text-center font-medium transition-colors ${
                !useCleanWindow
                  ? 'bg-forest-500 text-white font-bold'
                  : 'bg-white text-slate-700 hover:bg-cream-100'
              }`}
            >
              Current Hour
            </button>
            <button
              onClick={() => setUseCleanWindow(true)}
              className={`flex-1 py-2 px-2 text-center font-medium transition-colors ${
                useCleanWindow
                  ? 'bg-forest-500 text-white font-bold'
                  : 'bg-white text-slate-700 hover:bg-cream-100'
              }`}
            >
              Diurnal Minimum
            </button>
          </div>
          <div className="text-[10px] text-slate-500 mt-1 text-center">
            {useCleanWindow ? `${cleanAirWindow.displayWindow} (~${cleanAirWindow.averagePm25} µg/m³)` : `Current: ${telemetry.current.pm25} µg/m³`}
          </div>
        </div>

      </div>

      {/* Primary Simulator Computed Results */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        {/* Estimated Inhaled Mass */}
        <div className="p-4 rounded-xl bg-white border border-cream-300 shadow-xs space-y-1">
          <div className="text-[11px] font-semibold uppercase text-slate-500">
            Estimated Inhaled PM2.5 Mass
          </div>
          <div className="flex items-baseline space-x-1.5 pt-1">
            <span className={`text-3xl font-extrabold ${currentResult.riskLevel === 'CRITICAL' ? 'text-rose-700' : currentResult.riskLevel === 'ELEVATED' ? 'text-amber-700' : 'text-forest-700'}`}>
              {currentResult.estimatedInhaledMassUg}
            </span>
            <span className="text-xs text-slate-500 font-medium">µg PM2.5</span>
          </div>
          <div className="text-xs font-medium text-slate-600">
            Air volume respired: {currentResult.inhaledAirVolumeM3} m³ ({currentResult.minuteVentilationRateLpm} L/min)
          </div>
        </div>

        {/* Mass Avoided */}
        <div className="p-4 rounded-xl bg-forest-50/70 border border-forest-200 shadow-xs space-y-1">
          <div className="text-[11px] font-semibold uppercase text-forest-700">
            Particulate Mass Avoided
          </div>
          <div className="flex items-baseline space-x-1.5 pt-1">
            <span className="text-3xl font-extrabold text-forest-700">
              +{Math.max(0, massSavedVsWorstCase)}
            </span>
            <span className="text-xs text-forest-600 font-medium">µg PM2.5 ({percentSaved}%)</span>
          </div>
          <div className="text-xs font-medium text-forest-700">
            {massSavedVsWorstCase > 0
              ? 'Avoided via barrier mask & window timing'
              : 'Unmitigated baseline exposure'}
          </div>
        </div>

        {/* WHO Guideline Context */}
        <div className="p-4 rounded-xl bg-white border border-cream-300 shadow-xs space-y-1">
          <div className="text-[11px] font-semibold uppercase text-slate-500">
            Ambient Air Context
          </div>
          <div className="flex items-baseline space-x-1.5 pt-1">
            <span className="text-3xl font-extrabold text-slatecharcoal-900">
              {currentResult.whoExceedanceRatio}×
            </span>
            <span className="text-xs text-slate-500 font-medium">WHO 24h Guideline</span>
          </div>
          <div className="text-[11px] text-slate-500">
            Ambient PM2.5 vs WHO health benchmark (15 µg/m³)
          </div>
        </div>

      </div>

      {/* Scientific Disclaimer & Transparency Note */}
      <div className="bg-cream-100 p-3.5 rounded-xl border border-cream-200 text-xs text-slate-700 space-y-1">
        <div className="flex items-center space-x-1.5 font-semibold text-slatecharcoal-900">
          <Info className="w-3.5 h-3.5 text-forest-600" />
          <span>Scientific Methodology & Limitation Notice</span>
        </div>
        <p className="text-[11px] text-slate-600 leading-relaxed">
          {currentResult.disclaimer} Ventilation rates are adapted from the US EPA Exposure Factors Handbook (Chapter 6). Real-world mask protection depends on face seal integrity; values shown represent nominal laboratory material filtration.
        </p>
      </div>
    </div>
  );
};
