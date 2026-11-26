import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { calculateInhaledDose, MASK_EFFICIENCIES } from '../engines/inhaledDose';
import { ActivityType } from '../types/engines';
import { Sliders, ArrowRight, Footprints, Bike, Activity, Flame } from 'lucide-react';

export const WhatIfSimulator: React.FC<{ isDedicatedWorkspace?: boolean }> = ({ isDedicatedWorkspace = false }) => {
  const { telemetry } = useApp();
  const [activity, setActivity] = useState<ActivityType>('outdoor_running');
  const [durationMinutes, setDurationMinutes] = useState<number>(45);
  const [maskType, setMaskType] = useState<keyof typeof MASK_EFFICIENCIES>('n95');
  const [useCityAir, setUseCityAir] = useState<boolean>(false);

  const cityPm25 =
    typeof telemetry.current.pm25 === 'number' && Number.isFinite(telemetry.current.pm25)
      ? telemetry.current.pm25
      : 100;
  const activePm25 = useCityAir ? cityPm25 : 100;

  const currentResult = calculateInhaledDose(activePm25, durationMinutes, activity, maskType);
  const reductionPercent = Math.round((MASK_EFFICIENCIES[maskType] || 0) * 100);

  const activities: Array<{ id: ActivityType; label: string; rate: string; icon: React.ReactNode }> = [
    { id: 'light_walking', label: 'Walking', rate: '16 L/min', icon: <Footprints className="w-4 h-4" /> },
    { id: 'cycling_commute', label: 'Cycling', rate: '35 L/min', icon: <Bike className="w-4 h-4" /> },
    { id: 'outdoor_running', label: 'Running', rate: '55 L/min', icon: <Activity className="w-4 h-4" /> },
    { id: 'heavy_cardio', label: 'HIIT', rate: '65 L/min', icon: <Flame className="w-4 h-4" /> },
  ];

  const masks: Array<{ id: keyof typeof MASK_EFFICIENCIES; label: string; eff: string }> = [
    { id: 'none', label: 'No Mask', eff: '0%' },
    { id: 'cloth', label: 'Cloth', eff: '25%' },
    { id: 'surgical', label: 'Surgical', eff: '60%' },
    { id: 'n95', label: 'N95', eff: '95%' },
    { id: 'n99', label: 'N99', eff: '99%' },
  ];

  return (
    <div
      className={`rounded-3xl bg-white/90 backdrop-blur-md border border-[#CBE0F2] shadow-soft ${
        isDedicatedWorkspace ? 'p-5 sm:p-7 space-y-5' : 'p-4 sm:p-5 flex flex-col justify-between h-full space-y-4'
      }`}
    >
      {/* Top Bar: Title + Baseline Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-[#E2EFFA]">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#E6F4FA] text-[#0284C7] flex items-center justify-center border border-[#BAE0F5] shrink-0">
            <Sliders className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-extrabold text-[#0C2D57] tracking-tight">
              What-If Exposure Sandbox
            </h3>
            <p className="text-[11px] text-[#476788]">
              Estimate inhaled particulate mass (V̇E × t × C)
            </p>
          </div>
        </div>

        {/* Ambient Baseline Selector */}
        <div className="flex items-center space-x-1 bg-[#F0F7FD] p-1 rounded-full border border-[#CBE0F2] text-xs">
          <button
            type="button"
            onClick={() => setUseCityAir(false)}
            className={`px-3 py-1 rounded-full font-bold text-[11px] transition-all cursor-pointer ${
              !useCityAir ? 'bg-[#0284C7] text-white shadow-2xs' : 'text-[#476788] hover:text-[#0C2D57]'
            }`}
          >
            Benchmark (100 µg/m³)
          </button>
          <button
            type="button"
            onClick={() => setUseCityAir(true)}
            className={`px-3 py-1 rounded-full font-bold text-[11px] transition-all cursor-pointer ${
              useCityAir ? 'bg-[#0284C7] text-white shadow-2xs' : 'text-[#476788] hover:text-[#0C2D57]'
            }`}
          >
            City Air ({cityPm25} µg/m³)
          </button>
        </div>
      </div>

      {/* Main Split Layout (Matches Reference Panel 5) */}
      <div className={`grid grid-cols-1 ${isDedicatedWorkspace ? 'lg:grid-cols-12' : ''} gap-4 items-stretch`}>
        {/* Left Sidebar: Activity Intensity */}
        <div className={`${isDedicatedWorkspace ? 'lg:col-span-4' : ''} bg-[#F4F9FE] rounded-2xl border border-[#D6E7F5] p-3.5 space-y-2`}>
          <div className="text-xs font-extrabold text-[#0C2D57] px-1">Activity Intensity</div>
          <div className={`grid ${isDedicatedWorkspace ? 'grid-cols-2 lg:grid-cols-1' : 'grid-cols-2'} gap-2`}>
            {activities.map((act) => {
              const active = activity === act.id;
              return (
                <button
                  key={act.id}
                  type="button"
                  onClick={() => setActivity(act.id)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                    active
                      ? 'bg-[#E0F2FE] border-[#0284C7] text-[#0369A1] shadow-2xs'
                      : 'bg-white border-[#CBE0F2] text-[#365779] hover:bg-[#F0F7FD]'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    {act.icon}
                    <span>{act.label}</span>
                  </span>
                  <span className="text-[10px] font-mono opacity-80">({act.rate})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Panel: Duration, Mask Protection, and Runner Result Card */}
        <div className={`${isDedicatedWorkspace ? 'lg:col-span-8' : ''} flex flex-col justify-between space-y-4`}>
          {/* Duration & Mask Protection Chips */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#F4F9FE] rounded-2xl border border-[#D6E7F5] p-3.5">
            <div className="space-y-2">
              <div className="text-xs font-extrabold text-[#0C2D57]">Duration</div>
              <div className="flex flex-wrap gap-1.5">
                {[15, 30, 45, 60, 90].map((mins) => (
                  <button
                    key={mins}
                    type="button"
                    onClick={() => setDurationMinutes(mins)}
                    className={`px-2.5 py-1.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                      durationMinutes === mins
                        ? 'bg-[#0284C7] text-white shadow-sm'
                        : 'bg-white text-[#365779] hover:bg-[#E6F4FA] border border-[#CBE0F2]'
                    }`}
                  >
                    {mins} m
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-extrabold text-[#0C2D57]">Respiratory Protection</div>
              <div className="flex flex-wrap gap-1.5">
                {masks.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setMaskType(m.id)}
                    className={`px-2.5 py-1.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                      maskType === m.id
                        ? 'bg-[#0284C7] text-white shadow-sm'
                        : 'bg-white text-[#365779] hover:bg-[#E6F4FA] border border-[#CBE0F2]'
                    }`}
                  >
                    {m.label} ({m.eff})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Result Card with Exact Reference Male Runner Artwork */}
          <div className="rounded-2xl bg-[#F4F9FE] border border-[#CBE0F2] p-4 flex flex-col sm:flex-row items-center gap-4">
            <div className="w-36 sm:w-44 h-28 sm:h-32 rounded-2xl overflow-hidden border border-[#CBE0F2] bg-white shrink-0 shadow-2xs">
              <img
                src={`${import.meta.env.BASE_URL}images/exposure-runner.png`}
                alt="Outdoor runner exposure simulation"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="flex-1 w-full space-y-2">
              <div className="flex items-center justify-around gap-3 bg-white rounded-2xl border border-[#D6E7F5] p-3.5 text-center shadow-2xs">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-rose-600 font-mono">
                    {currentResult.unmaskedDoseUg} µg
                  </div>
                  <div className="text-[11px] font-bold text-[#476788]">Without Mask</div>
                </div>

                <ArrowRight className="w-5 h-5 text-[#5A7896] shrink-0" />

                <div>
                  <div className="text-xl sm:text-2xl font-black text-[#059669] font-mono">
                    {currentResult.estimatedInhaledMassUg} µg
                  </div>
                  <div className="text-[11px] font-bold text-[#047857]">
                    {maskType === 'none'
                      ? 'Without Mask'
                      : `With ${maskType.toUpperCase()} (↓ ${reductionPercent}%)`}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] text-[#5A7896] px-1">
                <span>
                  Baseline: <strong className="text-[#0C2D57]">{activePm25} µg/m³</strong> • Inhaled Air Volume:{' '}
                  <strong className="text-[#0C2D57]">{currentResult.inhaledAirVolumeM3} m³</strong>
                </span>
                <span>
                  Spared: <strong className="text-[#059669]">{currentResult.doseAvoidedUg} µg</strong> • Assumes ideal seal
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
