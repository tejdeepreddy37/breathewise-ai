import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { calculateCommuteTradeoffs } from '../engines/commuteSwap';
import { Bike, Car, Train, Bus, CheckCircle2 } from 'lucide-react';

export const CommuteSimulator: React.FC = () => {
  const { telemetry, userPreferences } = useApp();
  const [distanceKm, setDistanceKm] = useState<number>(userPreferences.typicalCommuteDistanceKm || 14);

  const ambientPm25 = typeof telemetry.current.pm25 === 'number' && Number.isFinite(telemetry.current.pm25)
    ? telemetry.current.pm25
    : 100;
  const comparisons = calculateCommuteTradeoffs(distanceKm, ambientPm25);

  // Filter 4 primary modes featured in Image 2
  const targetModes = ['two_wheeler_open', 'auto_rickshaw', 'non_ac_bus', 'ac_metro'];
  const displayComparisons = comparisons.filter((c) => targetModes.includes(c.mode));

  const getModeVisual = (mode: string) => {
    switch (mode) {
      case 'two_wheeler_open':
        return {
          title: 'Two-Wheeler (Open)',
          icon: <Bike className="w-5 h-5 text-rose-500" />,
          cardBg: 'bg-rose-50/40 border-rose-200/80',
          badgeColor: 'text-rose-600',
        };
      case 'auto_rickshaw':
        return {
          title: 'Auto-Rickshaw',
          icon: <Car className="w-5 h-5 text-amber-500" />,
          cardBg: 'bg-amber-50/40 border-amber-200/80',
          badgeColor: 'text-amber-700',
        };
      case 'non_ac_bus':
      case 'ac_cab':
        return {
          title: 'Car (Non-AC)',
          icon: <Car className="w-5 h-5 text-slate-600" />,
          cardBg: 'bg-stone-50/60 border-stone-200/80',
          badgeColor: 'text-slate-600',
        };
      case 'ac_metro':
      default:
        return {
          title: 'AC Metro (Recommended)',
          icon: <Train className="w-5 h-5 text-emerald-600" />,
          cardBg: 'bg-emerald-50/50 border-emerald-300 ring-2 ring-emerald-500/20',
          badgeColor: 'text-emerald-700 font-extrabold',
          isRecommended: true,
        };
    }
  };

  return (
    <div className="rounded-3xl bg-white border border-stone-200/80 p-4 sm:p-5 shadow-2xs flex flex-col justify-between h-full">
      
      {/* Header (Exact match to Image 2) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-stone-100">
        <div className="flex items-center space-x-2.5">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100 shrink-0">
            <Bus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
          <div>
            <h3 className="text-xs sm:text-base font-bold text-slatecharcoal-900 tracking-tight">
              Commute Exposure & Eco-Swap
            </h3>
            <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5">
              Compare travel modes by inhaled particulate mass and carbon emissions
            </p>
          </div>
        </div>

        {/* Distance Preset Selector */}
        <div className="flex items-center space-x-1 self-start sm:self-auto bg-stone-100/70 p-0.5 rounded-lg text-xs">
          {[5, 14, 25].map((km) => (
            <button
              key={km}
              onClick={() => setDistanceKm(km)}
              className={`whitespace-nowrap px-2 py-0.5 rounded font-bold text-[10px] transition-all cursor-pointer ${
                distanceKm === km ? 'bg-white text-slatecharcoal-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {km} km
            </button>
          ))}
        </div>
      </div>

      {/* 4 Multi-Modal Transit Cards Row (Exact Match to Image 2) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 py-2">
        {displayComparisons.map((c) => {
          const visual = getModeVisual(c.mode);

          return (
            <div
              key={c.mode}
              className={`p-3.5 rounded-2xl border flex flex-col justify-between transition-all ${visual.cardBg} relative overflow-hidden`}
            >
              {visual.isRecommended && (
                <div className="absolute top-2 right-2 text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5 fill-emerald-100" />
                </div>
              )}

              {/* Mode Icon & Label */}
              <div className="space-y-1">
                <div className="w-8 h-8 rounded-xl bg-white border border-stone-200/80 flex items-center justify-center shadow-2xs">
                  {visual.icon}
                </div>
                <div className="text-[11px] font-bold text-slatecharcoal-900 leading-tight min-h-[32px] flex flex-col justify-center">
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
              </div>

              {/* Inhaled PM2.5 & CO2 Metrics (Matches Image 2) */}
              <div className="mt-3 pt-2 border-t border-stone-200/60 flex items-baseline justify-between gap-1.5 text-[11px] font-mono">
                <div>
                  <span className="font-black text-slatecharcoal-900">
                    {c.inhaledDoseUg} µg
                  </span>
                  <span className="block text-[9px] text-slate-400 font-sans">PM2.5</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold text-slate-600">
                    {c.carbonEmissionKg} kg
                  </span>
                  <span className="block text-[9px] text-slate-400 font-sans">CO2</span>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
