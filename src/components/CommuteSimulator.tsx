import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { calculateCommuteTradeoffs } from '../engines/commuteSwap';
import { Bike, Car, Train, Bus, CheckCircle2 } from 'lucide-react';

export const CommuteSimulator: React.FC<{ isDedicatedWorkspace?: boolean }> = ({ isDedicatedWorkspace = false }) => {
  const { telemetry, userPreferences } = useApp();
  const [distanceKm, setDistanceKm] = useState<number>(userPreferences.typicalCommuteDistanceKm || 14);

  const ambientPm25 = typeof telemetry.current.pm25 === 'number' && Number.isFinite(telemetry.current.pm25)
    ? telemetry.current.pm25
    : 100;
  const comparisons = calculateCommuteTradeoffs(distanceKm, ambientPm25);

  // Filter 4 primary modes featured in Image 2
  const targetModes = ['two_wheeler_open', 'auto_rickshaw', 'non_ac_bus', 'ac_metro'];
  const displayComparisons = comparisons.filter((c) => targetModes.includes(c.mode));

  const twoWheeler = displayComparisons.find((c) => c.mode === 'two_wheeler_open') || displayComparisons[0];
  const metro = displayComparisons.find((c) => c.mode === 'ac_metro') || displayComparisons[displayComparisons.length - 1];
  const massSavedUg = Math.max(0, +(twoWheeler.inhaledDoseUg - metro.inhaledDoseUg).toFixed(1));
  const carbonSavedKg = Math.max(0, +(twoWheeler.carbonEmissionKg - metro.carbonEmissionKg).toFixed(2));
  const reductionPercent = twoWheeler.inhaledDoseUg > 0 ? Math.round((massSavedUg / twoWheeler.inhaledDoseUg) * 100) : 89;

  const getModeVisual = (mode: string) => {
    switch (mode) {
      case 'two_wheeler_open':
        return {
          title: 'Two-Wheeler (Open)',
          desc: 'Maximum tailpipe & roadway aerosol intake',
          icon: <Bike className="w-5 h-5 text-rose-500" />,
          cardBg: 'bg-rose-50/40 border-rose-200/80',
          badgeColor: 'text-rose-600',
        };
      case 'auto_rickshaw':
        return {
          title: 'Auto-Rickshaw',
          desc: 'Semi-enclosed canvas cabin',
          icon: <Car className="w-5 h-5 text-amber-500" />,
          cardBg: 'bg-amber-50/40 border-amber-200/80',
          badgeColor: 'text-amber-700',
        };
      case 'non_ac_bus':
      case 'ac_cab':
        return {
          title: 'Car (Non-AC)',
          desc: 'Standard automotive cabin flow',
          icon: <Car className="w-5 h-5 text-slate-600" />,
          cardBg: 'bg-stone-50/60 border-stone-200/80',
          badgeColor: 'text-slate-600',
        };
      case 'ac_metro':
      default:
        return {
          title: 'AC Metro (Recommended)',
          desc: 'Sealed grade-separated HEPA envelope',
          icon: <Train className="w-5 h-5 text-emerald-600" />,
          cardBg: 'bg-emerald-50/50 border-emerald-300 ring-2 ring-emerald-500/20',
          badgeColor: 'text-emerald-700 font-extrabold',
          isRecommended: true,
        };
    }
  };

  return (
    <div className={`rounded-3xl bg-white border border-stone-200/80 ${isDedicatedWorkspace ? 'p-5 sm:p-7 space-y-5' : 'p-4 sm:p-5 flex flex-col justify-between h-full'} shadow-2xs`}>
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-100">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100 shrink-0">
            <Bus className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slatecharcoal-900 tracking-tight">
              Commute Exposure & Eco-Swap Optimizer
            </h3>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Compare travel modes by inhaled particulate mass and carbon emissions
            </p>
          </div>
        </div>

        {/* Distance Preset Selector */}
        <div className="flex items-center space-x-1 self-start sm:self-auto bg-stone-100/70 p-1 rounded-xl text-xs">
          {[5, 10, 14, 25, 40].map((km) => (
            <button
              key={km}
              onClick={() => setDistanceKm(km)}
              className={`whitespace-nowrap px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all cursor-pointer ${
                distanceKm === km ? 'bg-white text-slatecharcoal-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {km} km
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Distance Slider (Only in Dedicated Workspace) */}
      {isDedicatedWorkspace && (
        <div className="bg-stone-50/70 p-4 rounded-2xl border border-stone-200/70 space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-slatecharcoal-900">Custom Transit Distance</span>
            <span className="font-mono font-black text-emerald-800 text-sm">{distanceKm} km</span>
          </div>
          <input
            type="range"
            min="1"
            max="50"
            value={distanceKm}
            onChange={(e) => setDistanceKm(Number(e.target.value))}
            className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
          />
          <div className="flex justify-between text-[10px] text-slate-400 font-mono">
            <span>1 km (Local)</span>
            <span>25 km (Suburban)</span>
            <span>50 km (Regional)</span>
          </div>
        </div>
      )}

      {/* 4 Multi-Modal Transit Cards Row */}
      <div className={`grid grid-cols-2 ${isDedicatedWorkspace ? 'sm:grid-cols-4 gap-3.5' : 'sm:grid-cols-4 gap-2 sm:gap-2.5 py-1'}`}>
        {displayComparisons.map((c) => {
          const visual = getModeVisual(c.mode);

          return (
            <div
              key={c.mode}
              className={`p-3.5 sm:p-4 rounded-2xl border flex flex-col justify-between transition-all ${visual.cardBg} relative overflow-hidden`}
            >
              {visual.isRecommended && (
                <div className="absolute top-2.5 right-2.5 text-emerald-600">
                  <CheckCircle2 className="w-4 h-4 fill-emerald-100" />
                </div>
              )}

              {/* Mode Icon & Label */}
              <div className="space-y-1.5">
                <div className="w-9 h-9 rounded-xl bg-white border border-stone-200/80 flex items-center justify-center shadow-2xs">
                  {visual.icon}
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-slatecharcoal-900 leading-tight min-h-[32px] flex flex-col justify-center">
                  {c.mode === 'two_wheeler_open' ? (
                    <div><div>Two-Wheeler</div><span className="text-[9px] text-slate-500 font-normal">(Open)</span></div>
                  ) : c.mode === 'ac_metro' ? (
                    <div><div>AC Metro</div><span className="text-[9px] text-emerald-700 font-semibold">(Recommended)</span></div>
                  ) : c.mode === 'auto_rickshaw' ? (
                    <div><div>Auto-Rickshaw</div><span className="text-[9px] text-slate-400 font-normal invisible">(Open)</span></div>
                  ) : (
                    <div><div>Car</div><span className="text-[9px] text-slate-500 font-normal">(Non-AC)</span></div>
                  )}
                </div>
                {isDedicatedWorkspace && (
                  <p className="text-[10px] text-slate-500 leading-snug">
                    {visual.desc}
                  </p>
                )}
              </div>

              {/* Inhaled PM2.5 & CO2 Metrics */}
              <div className="mt-3 pt-2.5 border-t border-stone-200/60 flex items-baseline justify-between gap-1.5 text-xs font-mono">
                <div>
                  <span className="font-black text-slatecharcoal-900 text-sm">
                    {c.inhaledDoseUg} µg
                  </span>
                  <span className="block text-[9px] text-slate-400 font-sans">PM2.5 Dose</span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-slate-600">
                    {c.carbonEmissionKg} kg
                  </span>
                  <span className="block text-[9px] text-slate-400 font-sans">CO2 Emission</span>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Dedicated Workspace Impact Summary Card */}
      {isDedicatedWorkspace && (
        <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-600 text-white shadow-2xs">
                ECO-SWAP ADVANTAGE
              </span>
              <span className="text-xs font-bold text-emerald-950">
                Switching to AC Metro for this {distanceKm} km commute
              </span>
            </div>
            <p className="text-xs text-emerald-900 leading-relaxed">
              Spares your respiratory system <strong className="font-mono text-emerald-950">{massSavedUg} µg</strong> of fine particulate mass (<span className="font-bold">↓ {reductionPercent}% exposure</span>) and prevents <strong className="font-mono text-emerald-950">{carbonSavedKg} kg</strong> of CO₂ emissions.
            </p>
          </div>

          <div className="text-[11px] text-slate-500 font-sans bg-white px-3 py-2 rounded-xl border border-emerald-200 shadow-2xs self-stretch sm:self-auto shrink-0 text-center sm:text-right">
            <span>Model: Urban Micro-environment I/O</span>
            <span className="block text-[10px] text-slate-400">CPCB & TERI Transport Factors</span>
          </div>
        </div>
      )}

    </div>
  );
};
