import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { calculateInhaledDose, MASK_EFFICIENCIES } from '../engines/inhaledDose';
import { ActivityType } from '../types/engines';
import { 
  Sliders, 
  Shield, 
  Activity, 
  Clock, 
  CheckCircle2, 
  Info,
  Footprints,
  Bike,
  Flame,
  Dumbbell,
  ShieldCheck,
  TrendingDown
} from 'lucide-react';

export const WhatIfSimulator: React.FC = () => {
  const { telemetry, cleanAirWindow } = useApp();

  const [activity, setActivity] = useState<ActivityType>('outdoor_running');
  const [durationMinutes, setDurationMinutes] = useState<number>(45);
  const [maskType, setMaskType] = useState<keyof typeof MASK_EFFICIENCIES>('none');
  const [timeSelection, setTimeSelection] = useState<'now' | 'window' | 'morning' | 'evening' | 'custom'>('now');
  const [customHour, setCustomHour] = useState<number>(14);

  // Compute active PM2.5 based on time selection
  let activePm25 = telemetry.current.pm25;
  let timeLabel = `Current (${telemetry.current.pm25} µg/m³)`;

  if (timeSelection === 'window') {
    activePm25 = cleanAirWindow.averagePm25;
    timeLabel = `${cleanAirWindow.displayWindow} (~${cleanAirWindow.averagePm25} µg/m³)`;
  } else if (timeSelection === 'morning') {
    const pt = telemetry.hourly.find((h) => h.hour === 8);
    activePm25 = pt ? pt.pm25 : Math.round(telemetry.current.pm25 * 1.3);
    timeLabel = `Morning 08:00 (~${activePm25} µg/m³)`;
  } else if (timeSelection === 'evening') {
    const pt = telemetry.hourly.find((h) => h.hour === 20);
    activePm25 = pt ? pt.pm25 : Math.round(telemetry.current.pm25 * 1.35);
    timeLabel = `Evening 20:00 (~${activePm25} µg/m³)`;
  } else if (timeSelection === 'custom') {
    const pt = telemetry.hourly.find((h) => h.hour === customHour);
    activePm25 = pt ? pt.pm25 : telemetry.current.pm25;
    const hourDisplay = `${customHour % 12 === 0 ? 12 : customHour % 12}:00 ${customHour >= 12 ? 'PM' : 'AM'}`;
    timeLabel = `${hourDisplay} (~${activePm25} µg/m³)`;
  }

  // Peak reference: worst daytime hour without protection
  const peakPm25 = telemetry.hourly.length > 0
    ? Math.max(...telemetry.hourly.map((h) => h.pm25), telemetry.current.pm25)
    : telemetry.current.pm25 * 1.3;

  const currentResult = calculateInhaledDose(activePm25, durationMinutes, activity, maskType);
  const peakUnprotected = calculateInhaledDose(peakPm25, durationMinutes, activity, 'none');

  const massSavedVsPeak = +(peakUnprotected.estimatedInhaledMassUg - currentResult.estimatedInhaledMassUg).toFixed(1);
  const percentSavedVsPeak = peakUnprotected.estimatedInhaledMassUg > 0
    ? Math.max(0, Math.round((massSavedVsPeak / peakUnprotected.estimatedInhaledMassUg) * 100))
    : 0;

  const activities: Array<{ id: ActivityType; label: string; lpm: number; icon: React.ReactNode }> = [
    { id: 'light_walking', label: 'Light Walking', lpm: 16, icon: <Footprints className="w-3.5 h-3.5" /> },
    { id: 'cycling_commute', label: 'Urban Cycling', lpm: 35, icon: <Bike className="w-3.5 h-3.5" /> },
    { id: 'outdoor_running', label: 'Outdoor Running', lpm: 55, icon: <Flame className="w-3.5 h-3.5" /> },
    { id: 'heavy_cardio', label: 'HIIT / Sports', lpm: 65, icon: <Dumbbell className="w-3.5 h-3.5" /> },
  ];

  const masks: Array<{ id: keyof typeof MASK_EFFICIENCIES; label: string; eff: string }> = [
    { id: 'none', label: 'No Mask', eff: '0%' },
    { id: 'cloth', label: 'Cloth Mask', eff: '25%' },
    { id: 'surgical', label: 'Surgical', eff: '60%' },
    { id: 'n95', label: 'N95 Respirator', eff: '95%' },
    { id: 'n99', label: 'N99 Respirator', eff: '99%' },
  ];

  return (
    <div className="bg-white p-6 sm:p-7 rounded-3xl border border-cream-200/80 shadow-soft space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-cream-200/60">
        <div>
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg bg-forest-50 text-forest-600 flex items-center justify-center border border-forest-100/80">
              <Sliders className="w-3.5 h-3.5" />
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slatecharcoal-900 tracking-tight">
              Physiological Exposure & "What-If" Sandbox
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Simulate how minute ventilation rate (V_E), exposure duration, mask filtration, and time-shifting alter gross inhaled particulate mass (M_inh)
          </p>
        </div>

        <span className="text-[11px] text-slate-600 bg-cream-50 px-3 py-1 rounded-full border border-cream-200/80 self-start sm:self-auto font-mono">
          Formula: M_inh = C × VE × t × (1 - η)
        </span>
      </div>

      {/* Interactive Controls Section */}
      <div className="space-y-4 bg-cream-50/50 p-5 rounded-2xl border border-cream-200/80">
        
        {/* Row 1: Activity Intensity */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">
            Activity & Respiration Rate (Minute Ventilation Rate VE)
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {activities.map((a) => (
              <button
                key={a.id}
                onClick={() => setActivity(a.id)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  activity === a.id
                    ? 'bg-forest-600 text-white border-forest-600 shadow-2xs'
                    : 'bg-white text-slate-700 border-cream-200 hover:border-cream-300'
                }`}
              >
                <div className="flex items-center space-x-1.5 mb-1">
                  <span>{a.icon}</span>
                  <span className="font-bold text-xs">{a.label}</span>
                </div>
                <div className={`text-[10px] font-mono ${activity === a.id ? 'text-forest-100' : 'text-slate-500'}`}>
                  VE: {a.lpm} L/min
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Row 2: Duration & Mask Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          
          {/* Duration Slider with Quick Presets */}
          <div className="bg-white p-4 rounded-xl border border-cream-200/80 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-slate-700">Exposure Duration:</span>
              <span className="text-xs font-bold text-slatecharcoal-900 font-mono bg-cream-100 px-2 py-0.5 rounded">
                {durationMinutes} minutes
              </span>
            </div>
            <input
              type="range"
              min="15"
              max="120"
              step="15"
              value={durationMinutes}
              onChange={(e) => setDurationMinutes(Number(e.target.value))}
              className="w-full accent-forest-600 cursor-pointer"
            />
            <div className="flex justify-between items-center pt-1">
              {[15, 30, 45, 60, 90, 120].map((dur) => (
                <button
                  key={dur}
                  onClick={() => setDurationMinutes(dur)}
                  className={`text-[10px] font-medium px-1.5 py-0.5 rounded cursor-pointer ${
                    durationMinutes === dur ? 'bg-forest-100 text-forest-700 font-bold' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {dur}m
                </button>
              ))}
            </div>
          </div>

          {/* Mask Barrier Selection */}
          <div className="bg-white p-4 rounded-xl border border-cream-200/80 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-semibold text-slate-700">Physical Mask Barrier:</span>
              <span className="text-[11px] font-bold text-forest-700 font-mono">
                {MASK_EFFICIENCIES[maskType] * 100}% Filtration
              </span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5 pt-1">
              {masks.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setMaskType(m.id)}
                  className={`p-1.5 rounded-lg border text-center transition-all cursor-pointer ${
                    maskType === m.id
                      ? 'bg-forest-600 text-white border-forest-600 shadow-2xs'
                      : 'bg-cream-50 text-slate-700 border-cream-200 hover:bg-cream-100'
                  }`}
                >
                  <div className="text-[10px] font-bold truncate">{m.label}</div>
                  <div className={`text-[9px] font-mono ${maskType === m.id ? 'text-forest-100' : 'text-slate-500'}`}>
                    {m.eff}
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Row 3: Diurnal Time Shift Window */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Diurnal Exposure Time Window: <span className="font-bold text-forest-700">{timeLabel}</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {[
              { id: 'now', label: 'Current Hour' },
              { id: 'window', label: `Clean Valley (${cleanAirWindow.displayWindow})` },
              { id: 'morning', label: 'Morning Rush (08:00)' },
              { id: 'evening', label: 'Evening Peak (20:00)' },
              { id: 'custom', label: 'Custom Hour Slider' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setTimeSelection(t.id as any)}
                className={`px-2.5 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer truncate ${
                  timeSelection === t.id
                    ? 'bg-forest-600 text-white border-forest-600 shadow-2xs'
                    : 'bg-white text-slate-700 border-cream-200 hover:bg-cream-100'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {timeSelection === 'custom' && (
            <div className="mt-3 p-3 bg-white rounded-xl border border-cream-200 flex items-center space-x-3">
              <span className="text-xs font-semibold text-slate-600 whitespace-nowrap">Hour:</span>
              <input
                type="range"
                min="0"
                max="23"
                value={customHour}
                onChange={(e) => setCustomHour(Number(e.target.value))}
                className="w-full accent-forest-600 cursor-pointer"
              />
              <span className="text-xs font-bold font-mono text-slatecharcoal-900 w-16 text-right">
                {customHour}:00
              </span>
            </div>
          )}
        </div>

      </div>

      {/* Primary Simulator Computed Results */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        {/* Estimated Inhaled Mass */}
        <div className="p-5 rounded-2xl bg-white border border-cream-200/80 shadow-2xs space-y-1.5">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
            Trip Inhaled PM2.5 Mass
          </div>
          <div className="flex items-baseline space-x-1.5 pt-1">
            <span className={`text-3xl font-extrabold font-mono ${
              currentResult.riskLevel === 'CRITICAL'
                ? 'text-rose-700'
                : currentResult.riskLevel === 'ELEVATED'
                ? 'text-amber-700'
                : 'text-forest-700'
            }`}>
              {currentResult.estimatedInhaledMassUg}
            </span>
            <span className="text-xs text-slate-500 font-semibold">µg PM2.5</span>
          </div>
          <div className="text-xs text-slate-600 pt-1 border-t border-cream-100">
            Respiration: <strong className="text-slate-800">{currentResult.inhaledAirVolumeM3} m³</strong> air respired
          </div>
        </div>

        {/* Mass Avoided */}
        <div className="p-5 rounded-2xl bg-forest-50/50 border border-forest-200/80 shadow-2xs space-y-1.5">
          <div className="text-[11px] font-bold uppercase tracking-wider text-forest-700">
            Particulate Mass Avoided
          </div>
          <div className="flex items-baseline space-x-1.5 pt-1">
            <span className="text-3xl font-extrabold font-mono text-forest-700">
              +{Math.max(0, massSavedVsPeak)}
            </span>
            <span className="text-xs text-forest-600 font-bold">µg ({percentSavedVsPeak}%)</span>
          </div>
          <div className="text-xs text-forest-700 pt-1 border-t border-forest-100">
            {massSavedVsPeak > 0
              ? `Saved vs unprotected peak (~${Math.round(peakPm25)} µg/m³)`
              : 'Unmitigated baseline reference'}
          </div>
        </div>

        {/* WHO Guideline Context */}
        <div className="p-5 rounded-2xl bg-white border border-cream-200/80 shadow-2xs space-y-1.5">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
            WHO Exposure Ratio
          </div>
          <div className="flex items-baseline space-x-1.5 pt-1">
            <span className="text-3xl font-extrabold font-mono text-slatecharcoal-900">
              {currentResult.whoExceedanceRatio}×
            </span>
            <span className="text-xs text-slate-500 font-semibold">WHO 24h Guideline</span>
          </div>
          <div className="text-xs text-slate-600 pt-1 border-t border-cream-100">
            Ambient air benchmark: <strong className="text-slate-800">15 µg/m³</strong>
          </div>
        </div>

      </div>

      {/* Scientific Citation Notice */}
      <div className="bg-cream-50/80 p-4 rounded-2xl border border-cream-200/80 text-xs text-slate-700 flex items-start space-x-3">
        <Info className="w-4 h-4 text-forest-600 shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <span className="font-bold text-slatecharcoal-900">
            Scientific Methodology & Physiological Parameters:
          </span>
          <p className="text-[11px] text-slate-600 leading-relaxed">
            Minute ventilation rates are parameterized from the US EPA Exposure Factors Handbook (2011, Chapter 6). Real-world mask protection depends critically on facial seal fit; values shown represent nominal laboratory material filtration efficiency ($\eta$).
          </p>
        </div>
      </div>

    </div>
  );
};
