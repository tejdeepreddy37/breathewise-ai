import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { calculateCommuteTradeoffs } from '../engines/commuteSwap';
import { CommuteMode } from '../types/engines';
import { Navigation, Bike, Car, Train, Home, Shield, Leaf, Info, Bus, Sparkles, ArrowRight } from 'lucide-react';

export const CommuteSimulator: React.FC = () => {
  const { telemetry, userPreferences } = useApp();
  const [distanceKm, setDistanceKm] = useState<number>(userPreferences.typicalCommuteDistanceKm || 14);

  const ambientPm25 = telemetry.current.pm25;
  const comparisons = calculateCommuteTradeoffs(distanceKm, ambientPm25);

  const maxInhaledDose = Math.max(...comparisons.map((c) => c.inhaledDoseUg), 1);
  const maxCarbon = Math.max(...comparisons.map((c) => c.carbonEmissionKg), 0.1);

  const getModeIcon = (mode: CommuteMode) => {
    switch (mode) {
      case 'two_wheeler_open':
        return <Bike className="w-4 h-4 text-rose-600" />;
      case 'auto_rickshaw':
        return <Car className="w-4 h-4 text-amber-600" />;
      case 'non_ac_bus':
        return <Bus className="w-4 h-4 text-amber-600" />;
      case 'ac_cab':
        return <Car className="w-4 h-4 text-slate-700" />;
      case 'ac_metro':
        return <Train className="w-4 h-4 text-forest-600" />;
      case 'work_from_home':
        return <Home className="w-4 h-4 text-emerald-600" />;
    }
  };

  const distancePresets = [5, 14, 25];

  return (
    <div className="bg-white p-6 sm:p-7 rounded-3xl border border-cream-200/80 shadow-soft space-y-6">
      
      {/* Header with Distance Presets & Slider */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-cream-200/60">
        <div>
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-lg bg-forest-50 text-forest-600 flex items-center justify-center border border-forest-100/80">
              <Navigation className="w-3.5 h-3.5" />
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slatecharcoal-900 tracking-tight">
              Commute Exposure & Eco-Swap Engine
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Compare inhaled particulate lung burden (M_inh) against personal tailpipe carbon emissions across urban transit modes
          </p>
        </div>

        {/* Distance Controls */}
        <div className="bg-cream-50/80 p-2.5 rounded-2xl border border-cream-200/80 flex items-center space-x-3 text-xs self-start sm:self-auto">
          <div className="flex items-center space-x-1">
            {distancePresets.map((preset) => (
              <button
                key={preset}
                onClick={() => setDistanceKm(preset)}
                className={`px-2.5 py-1 rounded-lg font-semibold text-[11px] transition-all cursor-pointer ${
                  distanceKm === preset
                    ? 'bg-forest-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:bg-cream-200/60'
                }`}
              >
                {preset} km
              </button>
            ))}
          </div>
          <div className="h-4 w-px bg-cream-300"></div>
          <div className="flex items-center space-x-2">
            <input
              type="range"
              min="3"
              max="35"
              step="1"
              value={distanceKm}
              onChange={(e) => setDistanceKm(Number(e.target.value))}
              className="w-20 sm:w-24 accent-forest-600 cursor-pointer"
            />
            <span className="font-bold text-slatecharcoal-900 font-mono text-[11px] w-10 text-right">
              {distanceKm}km
            </span>
          </div>
        </div>
      </div>

      {/* Comparative Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {comparisons.map((c) => {
          const isRecommended = c.recommendationTag === 'RECOMMENDED';
          const isBestEco = c.recommendationTag === 'BEST_ECO_SWAP';
          const isDanger = c.recommendationTag === 'HIGH_EXPOSURE_RISK';

          const dosePercent = Math.min(100, Math.round((c.inhaledDoseUg / maxInhaledDose) * 100));
          const carbonPercent = Math.min(100, Math.round((c.carbonEmissionKg / maxCarbon) * 100));

          return (
            <div
              key={c.mode}
              className={`p-4 sm:p-4.5 rounded-2xl border flex flex-col justify-between transition-all ${
                isRecommended
                  ? 'bg-forest-50/40 border-forest-200/90 shadow-soft ring-1 ring-forest-500/20'
                  : isBestEco
                  ? 'bg-emerald-50/40 border-emerald-200/80 shadow-soft'
                  : isDanger
                  ? 'bg-rose-50/30 border-rose-200/70'
                  : 'bg-white border-cream-200/70 hover:border-cream-300'
              }`}
            >
              <div>
                {/* Mode Top Bar */}
                <div className="flex items-center justify-between gap-1 mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="p-2 rounded-xl bg-white border border-cream-200/80 shadow-2xs">
                      {getModeIcon(c.mode)}
                    </span>
                    <span className="font-bold text-xs text-slatecharcoal-900">
                      {c.modeLabel}
                    </span>
                  </div>
                  {isRecommended && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-forest-600 text-white shadow-2xs">
                      LOWEST DOSE
                    </span>
                  )}
                  {isBestEco && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-600 text-white shadow-2xs">
                      ZERO EMISSION
                    </span>
                  )}
                  {isDanger && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800">
                      HIGH RISK
                    </span>
                  )}
                </div>

                {/* Key Metric Meters */}
                <div className="space-y-2.5 text-xs">
                  {/* Inhaled PM2.5 */}
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="text-[11px] text-slate-500 font-medium">Inhaled PM2.5:</span>
                      <span className={`font-bold font-mono text-xs ${isDanger ? 'text-rose-700' : 'text-slatecharcoal-900'}`}>
                        {c.inhaledDoseUg} µg
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-cream-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${
                          isDanger ? 'bg-rose-500' : isRecommended ? 'bg-forest-500' : 'bg-slate-400'
                        }`}
                        style={{ width: `${dosePercent}%` }}
                      />
                    </div>
                  </div>

                  {/* Tailpipe Carbon */}
                  <div>
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="text-[11px] text-slate-500 font-medium">Tailpipe Carbon:</span>
                      <span className="font-semibold font-mono text-xs text-slate-700">
                        {c.carbonEmissionKg} kg CO2
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-cream-200 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-sky-500 transition-all duration-300"
                        style={{ width: `${carbonPercent}%` }}
                      />
                    </div>
                  </div>

                  {/* Secondary Details */}
                  <div className="pt-2 border-t border-cream-200/50 flex justify-between items-center text-[11px] text-slate-500">
                    <span>Cabin PM2.5: <strong className="text-slate-700">{c.cabinPm25Concentration} µg/m³</strong></span>
                    {c.travelTimeMinutes > 0 && (
                      <span>Est. ~{c.travelTimeMinutes} mins</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Exposure Reduction Tag */}
              <div className="mt-3.5 pt-2.5 border-t border-cream-200/60 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-500">Trip Reduction vs Bike:</span>
                <span className={`font-bold font-mono ${c.exposureReductionVsOpenTransitPercent > 0 ? 'text-forest-700' : 'text-slate-400'}`}>
                  {c.exposureReductionVsOpenTransitPercent > 0 ? `-${c.exposureReductionVsOpenTransitPercent}%` : 'Baseline (0%)'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Synthesis Insight Callout */}
      {(() => {
        const bikeComp = comparisons.find((c) => c.mode === 'two_wheeler_open') || comparisons[0];
        const metroComp = comparisons.find((c) => c.mode === 'ac_metro') || comparisons[4];
        const doseSaved = Math.max(0, Math.round(bikeComp.inhaledDoseUg - metroComp.inhaledDoseUg));
        const co2Saved = Math.max(0, +(bikeComp.carbonEmissionKg - metroComp.carbonEmissionKg).toFixed(1));

        return (
          <div className="bg-cream-50/80 p-4 rounded-2xl border border-cream-200/80 flex items-start space-x-3 text-xs text-slate-700">
            <div className="w-7 h-7 rounded-lg bg-forest-100 text-forest-700 flex items-center justify-center shrink-0 mt-0.5">
              <Leaf className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <span className="font-bold text-slatecharcoal-900 block">
                Evidence-Based Modal Shift Impact
              </span>
              <p className="leading-relaxed text-[11px] text-slate-600">
                In arterial Indian traffic, road-level diesel exhaust concentrates fine particles ~30% above rooftop ambient monitors. Shifting your {distanceKm} km commute from motorcycle to AC Metro prevents an estimated{' '}
                <strong className="text-forest-700 font-bold font-mono">
                  {doseSaved} µg
                </strong>{' '}
                of fine particulate lung burden while cutting{' '}
                <strong className="text-forest-700 font-bold font-mono">
                  {co2Saved} kg
                </strong>{' '}
                of vehicular tailpipe CO2.
              </p>
            </div>
          </div>
        );
      })()}

    </div>
  );
};
