import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { calculateCommuteTradeoffs } from '../engines/commuteSwap';
import { CommuteMode } from '../types/engines';
import { Navigation, Bike, Car, Train, Home, Shield, Leaf, Info } from 'lucide-react';

export const CommuteSimulator: React.FC = () => {
  const { telemetry, userPreferences } = useApp();
  const [distanceKm, setDistanceKm] = useState<number>(userPreferences.typicalCommuteDistanceKm || 14);

  const ambientPm25 = telemetry.current.pm25;
  const comparisons = calculateCommuteTradeoffs(distanceKm, ambientPm25);

  const getModeIcon = (mode: CommuteMode) => {
    switch (mode) {
      case 'two_wheeler_open':
        return <Bike className="w-4 h-4" />;
      case 'auto_rickshaw':
      case 'non_ac_bus':
      case 'ac_cab':
        return <Car className="w-4 h-4" />;
      case 'ac_metro':
        return <Train className="w-4 h-4" />;
      case 'work_from_home':
        return <Home className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-white p-5 sm:p-6 rounded-2xl border border-cream-300 shadow-sm space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-cream-200">
        <div>
          <div className="flex items-center space-x-2">
            <Navigation className="w-4 h-4 text-forest-600" />
            <h2 className="text-base sm:text-lg font-bold text-slatecharcoal-900 tracking-tight">
              Commute Exposure & Eco-Swap Simulator
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Compare inhaled particulate lung burden ($M_inh$) vs. personal tailpipe carbon emissions across realistic urban transit modes
          </p>
        </div>

        {/* Distance Slider Control */}
        <div className="bg-cream-100 p-2.5 rounded-xl border border-cream-200 flex items-center space-x-3 text-xs">
          <span className="font-semibold text-slate-700 whitespace-nowrap">Distance: {distanceKm} km</span>
          <input
            type="range"
            min="3"
            max="35"
            step="1"
            value={distanceKm}
            onChange={(e) => setDistanceKm(Number(e.target.value))}
            className="w-24 sm:w-32 accent-forest-500 cursor-pointer"
          />
        </div>
      </div>

      {/* Comparative Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {comparisons.map((c) => {
          const isRecommended = c.recommendationTag === 'RECOMMENDED';
          const isBestEco = c.recommendationTag === 'BEST_ECO_SWAP';
          const isDanger = c.recommendationTag === 'HIGH_EXPOSURE_RISK';

          return (
            <div
              key={c.mode}
              className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${
                isRecommended
                  ? 'bg-forest-50/70 border-forest-300 ring-1 ring-forest-500/20'
                  : isBestEco
                  ? 'bg-emerald-50/60 border-emerald-300'
                  : isDanger
                  ? 'bg-rose-50/30 border-rose-200'
                  : 'bg-cream-50 border-cream-200'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-2">
                  <div className="flex items-center space-x-2 text-slatecharcoal-900 font-semibold text-xs">
                    <span className="p-1.5 rounded-lg bg-white border border-cream-300 shadow-xs">
                      {getModeIcon(c.mode)}
                    </span>
                    <span>{c.modeLabel}</span>
                  </div>
                  {isRecommended && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-forest-500 text-white shadow-xs">
                      LOWEST DOSE
                    </span>
                  )}
                  {isBestEco && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-600 text-white shadow-xs">
                      ZERO EMISSION
                    </span>
                  )}
                  {isDanger && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800">
                      HIGH RISK
                    </span>
                  )}
                </div>

                {/* Metrics */}
                <div className="space-y-1.5 pt-1 text-xs">
                  <div className="flex justify-between items-baseline">
                    <span className="text-slate-500">Trip Inhaled PM2.5:</span>
                    <span className={`font-bold text-sm ${isDanger ? 'text-rose-700' : 'text-slatecharcoal-900'}`}>
                      {c.inhaledDoseUg} µg
                    </span>
                  </div>

                  <div className="flex justify-between items-baseline">
                    <span className="text-slate-500">Tailpipe Carbon:</span>
                    <span className="font-semibold text-slate-700">{c.carbonEmissionKg} kg CO2</span>
                  </div>

                  <div className="flex justify-between items-baseline">
                    <span className="text-slate-500">Cabin PM2.5 Conc.:</span>
                    <span className="font-medium text-slate-600">{c.cabinPm25Concentration} µg/m³</span>
                  </div>

                  {c.travelTimeMinutes > 0 && (
                    <div className="flex justify-between items-baseline text-[11px] text-slate-500">
                      <span>Est. Travel Time:</span>
                      <span>~{c.travelTimeMinutes} mins</span>
                    </div>
                  )}

                  <div className="text-[10px] text-slate-500 pt-1 italic border-t border-cream-200/60 line-clamp-2" title={c.assumptions}>
                    {c.assumptions}
                  </div>
                </div>
              </div>

              {/* Exposure Reduction Tag */}
              <div className="mt-3 pt-2.5 border-t border-cream-200/80 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-500">Trip Savings vs Open Bike:</span>
                <span className="font-bold text-forest-700">
                  {c.exposureReductionVsOpenTransitPercent > 0 ? `-${c.exposureReductionVsOpenTransitPercent}%` : 'Baseline (0%)'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Synthesis Insight */}
      <div className="bg-cream-100 p-3.5 rounded-xl border border-cream-200 flex items-start space-x-2 text-xs text-slate-700">
        <Leaf className="w-4 h-4 text-forest-600 shrink-0 mt-0.5" />
        <p>
          <span className="font-semibold text-slatecharcoal-900">Transit Methodological Notice:</span> In dense Indian arterial traffic, road-level diesel exhaust concentrates particles ~30% above rooftop monitors. Metro transit calculations include a realistic 10-minute outdoor station connection at road-level exposure. Shifting a {distanceKm} km commute from motorcycle to AC Metro avoids an estimated{' '}
          <strong className="text-forest-700 font-bold">
            {Math.round(comparisons[0].inhaledDoseUg - comparisons[4].inhaledDoseUg)} µg
          </strong>{' '}
          of fine particulate intake while preventing{' '}
          <strong className="text-forest-700 font-bold">
            {(comparisons[0].carbonEmissionKg - comparisons[4].carbonEmissionKg).toFixed(1)} kg
          </strong>{' '}
          of vehicular CO2.
        </p>
      </div>
    </div>
  );
};
