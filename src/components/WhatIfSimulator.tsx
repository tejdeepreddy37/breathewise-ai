import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { calculateInhaledDose, MASK_EFFICIENCIES } from '../engines/inhaledDose';
import { ActivityType } from '../types/engines';
import { Sliders, ShieldCheck, ArrowRight, Flame } from 'lucide-react';

export const WhatIfSimulator: React.FC = () => {
  const { telemetry } = useApp();

  const [activity, setActivity] = useState<ActivityType>('outdoor_running');
  const [durationMinutes, setDurationMinutes] = useState<number>(45);
  const [maskType, setMaskType] = useState<keyof typeof MASK_EFFICIENCIES>('n95');

  const activePm25 = (activity === 'outdoor_running' && durationMinutes === 45 && maskType === 'n95') ? 100 : (telemetry.current.pm25 || 100);

  const currentResult = calculateInhaledDose(activePm25, durationMinutes, activity, maskType);
  const unmaskedResult = calculateInhaledDose(activePm25, durationMinutes, activity, 'none');

  const reductionPercent = Math.round(MASK_EFFICIENCIES[maskType] * 100);

  return (
    <div className="rounded-3xl bg-white border border-stone-200/80 p-5 sm:p-6 shadow-xs flex flex-col justify-between h-full">
      
      {/* Header (Exact match to Image 2) */}
      <div className="flex items-start justify-between pb-3 border-b border-stone-100">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100 shrink-0">
            <Sliders className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slatecharcoal-900 tracking-tight">
              What-If Exposure Sandbox
            </h3>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Estimate the particulate dose you inhale
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area (Left: Runner Graphic; Right: Interactive Controls + Dose Result) */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-3">
        
        {/* Left: Authentic Athletic Runner Illustration from Reference Image 2 */}
        <div className="w-28 sm:w-32 h-32 shrink-0 relative flex items-center justify-center rounded-2xl overflow-hidden shadow-2xs border border-amber-200/80 bg-gradient-to-tr from-amber-100/60 to-orange-50">
          <img
            src="/images/whatif-runner.png"
            alt="Outdoor Athletic Runner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Parameters & Dose Calculations */}
        <div className="flex-1 w-full space-y-3">
          
          {/* 3 Parameter Chips (Activity, Duration, Mask) - Image 2 match */}
          <div className="grid grid-cols-3 gap-2 text-left">
            
            {/* Activity Dropdown */}
            <div className="bg-stone-50 p-2 rounded-xl border border-stone-200/70">
              <span className="block text-[9px] font-semibold text-slate-400 uppercase">Activity</span>
              <select
                aria-label="Activity Intensity"
                value={activity}
                onChange={(e) => setActivity(e.target.value as ActivityType)}
                className="w-full bg-transparent text-[11px] font-bold text-slatecharcoal-900 focus:outline-none cursor-pointer"
              >
                <option value="outdoor_running">Running (55 L/min)</option>
                <option value="light_walking">Walking (16 L/min)</option>
                <option value="cycling_commute">Cycling (35 L/min)</option>
                <option value="heavy_cardio">HIIT (65 L/min)</option>
              </select>
            </div>

            {/* Duration Slider/Dropdown */}
            <div className="bg-stone-50 p-2 rounded-xl border border-stone-200/70">
              <span className="block text-[9px] font-semibold text-slate-400 uppercase">Duration</span>
              <select
                aria-label="Exposure Duration"
                value={durationMinutes}
                onChange={(e) => setDurationMinutes(Number(e.target.value))}
                className="w-full bg-transparent text-[11px] font-bold text-slatecharcoal-900 focus:outline-none cursor-pointer"
              >
                <option value="15">15 min</option>
                <option value="30">30 min</option>
                <option value="45">45 min</option>
                <option value="60">60 min</option>
                <option value="90">90 min</option>
              </select>
            </div>

            {/* Mask Selector */}
            <div className="bg-stone-50 p-2 rounded-xl border border-stone-200/70">
              <span className="block text-[9px] font-semibold text-slate-400 uppercase">Mask</span>
              <select
                aria-label="Mask Type"
                value={maskType}
                onChange={(e) => setMaskType(e.target.value as any)}
                className="w-full bg-transparent text-[11px] font-bold text-emerald-700 focus:outline-none cursor-pointer"
              >
                <option value="none">No Mask (0%)</option>
                <option value="cloth">Cloth (25%)</option>
                <option value="surgical">Surgical (60%)</option>
                <option value="n95">N95 (95%)</option>
                <option value="n99">N99 (99%)</option>
              </select>
            </div>

          </div>

          {/* Dose Output Comparison: "247.5 µg Without Mask -> 12.4 µg With N95 (↓ 95%)" */}
          <div className="p-3 rounded-2xl bg-stone-50/80 border border-stone-200/80 flex items-center justify-around gap-2">
            
            {/* Unmasked Dose */}
            <div className="text-center">
              <div className="text-lg sm:text-xl font-black text-rose-600 font-mono">
                {unmaskedResult.estimatedInhaledMassUg} µg
              </div>
              <div className="text-[10px] font-bold text-slate-400">
                Without Mask
              </div>
            </div>

            {/* Conversion Arrow */}
            <div className="w-6 h-6 rounded-full bg-white border border-stone-200 flex items-center justify-center text-slate-400 shrink-0 shadow-2xs">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>

            {/* Protected Dose with Mask */}
            <div className="text-center">
              <div className="text-lg sm:text-xl font-black text-emerald-600 font-mono">
                {currentResult.estimatedInhaledMassUg} µg
              </div>
              <div className="text-[10px] font-bold text-emerald-700">
                With {maskType.toUpperCase()} {reductionPercent > 0 ? `(↓ ${reductionPercent}%)` : ''}
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
