import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { calculateCommuteTradeoffs } from '../engines/commuteSwap';
import { Bike, Car, Train, Bus, CheckCircle2, Leaf } from 'lucide-react';

export const CommuteSimulator: React.FC<{ isDedicatedWorkspace?: boolean }> = ({ isDedicatedWorkspace = false }) => {
  const { telemetry, userPreferences } = useApp();
  const [distanceKm, setDistanceKm] = useState<number>(userPreferences.typicalCommuteDistanceKm || 25);

  const ambientPm25 =
    typeof telemetry.current.pm25 === 'number' && Number.isFinite(telemetry.current.pm25)
      ? telemetry.current.pm25
      : 100;
  const comparisons = calculateCommuteTradeoffs(distanceKm, ambientPm25);

  const targetModes = ['two_wheeler_open', 'auto_rickshaw', 'non_ac_bus', 'ac_metro'];
  const displayComparisons = comparisons.filter((c) => targetModes.includes(c.mode));

  const twoWheeler = displayComparisons.find((c) => c.mode === 'two_wheeler_open') || displayComparisons[0];
  const metro = displayComparisons.find((c) => c.mode === 'ac_metro') || displayComparisons[displayComparisons.length - 1];
  const massSavedUg = Math.max(0, +(twoWheeler.inhaledDoseUg - metro.inhaledDoseUg).toFixed(1));
  const carbonSavedKg = Math.max(0, +(twoWheeler.carbonEmissionKg - metro.carbonEmissionKg).toFixed(2));

  const getModeVisual = (mode: string) => {
    switch (mode) {
      case 'two_wheeler_open':
        return {
          title: 'Two-Wheeler',
          subtitle: '(Open)',
          icon: <Bike className="w-4 h-4 text-rose-500" />,
          iconBg: 'bg-rose-50 border-rose-200',
          cardBg: 'bg-[#FFF5F5] border-rose-200',
          doseColor: 'text-rose-700',
          isRecommended: false,
        };
      case 'auto_rickshaw':
        return {
          title: 'Auto-Rickshaw',
          subtitle: '(Semi-Enclosed)',
          icon: <Car className="w-4 h-4 text-amber-600" />,
          iconBg: 'bg-amber-50 border-amber-200',
          cardBg: 'bg-[#FFFBEB] border-amber-200',
          doseColor: 'text-amber-800',
          isRecommended: false,
        };
      case 'non_ac_bus':
      case 'ac_cab':
        return {
          title: 'Car',
          subtitle: '(Non-AC)',
          icon: <Car className="w-4 h-4 text-[#0284C7]" />,
          iconBg: 'bg-[#E0F2FE] border-[#BAE6FD]',
          cardBg: 'bg-[#F8FBFF] border-[#CBE0F2]',
          doseColor: 'text-[#0C2D57]',
          isRecommended: false,
        };
      case 'ac_metro':
      default:
        return {
          title: 'AC Metro',
          subtitle: '(Recommended)',
          icon: <Train className="w-4 h-4 text-[#059669]" />,
          iconBg: 'bg-[#D1FAE5] border-[#A7F3D0]',
          cardBg: 'bg-[#ECFDF5] border-[#34D399] ring-2 ring-[#34D399]/25',
          doseColor: 'text-[#065F46]',
          isRecommended: true,
        };
    }
  };

  return (
    <div
      className={`rounded-3xl bg-white/90 backdrop-blur-md border border-[#CBE0F2] shadow-soft ${
        isDedicatedWorkspace ? 'p-5 sm:p-7 space-y-5' : 'p-4 sm:p-5 flex flex-col justify-between h-full space-y-4'
      }`}
    >
      {/* Compact Header on Overview */}
      {!isDedicatedWorkspace && (
        <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-[#E2EFFA]">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#E6F4FA] text-[#0284C7] flex items-center justify-center border border-[#BAE0F5] shrink-0">
              <Bus className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-extrabold text-[#0C2D57] tracking-tight">
                Commute Exposure & Eco-Swap
              </h3>
              <p className="text-[11px] text-[#476788]">
                Compare inhaled particulate mass & carbon
              </p>
            </div>
          </div>
          <span className="text-xs font-extrabold font-mono text-[#0284C7] bg-[#E6F4FA] px-2.5 py-1 rounded-full border border-[#BAE0F5]">
            {distanceKm} km
          </span>
        </div>
      )}

      {/* Distance Slider + Preset Chips Row (Matches Panel 3) */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-[#F4F9FE] p-3.5 sm:p-4 rounded-2xl border border-[#D6E7F5]">
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-[#0C2D57]">
            <span>Commute Distance</span>
            <span className="font-mono text-sm font-black text-[#0284C7]">{distanceKm} km</span>
          </div>
          <input
            type="range"
            min="1"
            max="50"
            value={distanceKm}
            onChange={(e) => setDistanceKm(Number(e.target.value))}
            aria-label="Commute Distance in kilometers"
            className="w-full h-2 bg-[#CBE0F2] rounded-lg appearance-none cursor-pointer accent-[#0284C7]"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {[5, 10, 14, 25, 40].map((km) => (
            <button
              key={km}
              type="button"
              onClick={() => setDistanceKm(km)}
              className={`px-3 py-1.5 rounded-full font-bold text-xs transition-all cursor-pointer ${
                distanceKm === km
                  ? 'bg-[#0284C7] text-white shadow-sm'
                  : 'bg-white text-[#365779] hover:bg-[#E6F4FA] border border-[#CBE0F2]'
              }`}
            >
              {km} km
            </button>
          ))}
        </div>
      </div>

      {/* 4 Transport Mode Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {displayComparisons.map((item) => {
          const vis = getModeVisual(item.mode);
          return (
            <div
              key={item.mode}
              className={`relative rounded-2xl border p-4 transition-all ${vis.cardBg}`}
            >
              {vis.isRecommended && (
                <CheckCircle2 className="w-4 h-4 text-[#059669] absolute top-3.5 right-3.5" />
              )}

              <div className="flex items-center space-x-2.5 mb-3">
                <div className={`w-8 h-8 rounded-xl border flex items-center justify-center shrink-0 ${vis.iconBg}`}>
                  {vis.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-extrabold text-[#0C2D57] truncate">{vis.title}</div>
                  <div className={`text-[10px] font-semibold truncate ${vis.isRecommended ? 'text-[#059669]' : 'text-[#5A7896]'}`}>
                    {vis.subtitle}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2.5 border-t border-black/5">
                <div>
                  <div className={`text-sm sm:text-base font-black font-mono ${vis.doseColor}`}>
                    {item.inhaledDoseUg.toFixed(1)} µg
                  </div>
                  <div className="text-[10px] text-[#5A7896] font-medium">Inhaled Dose</div>
                </div>
                <div className="text-right">
                  <div className="text-sm sm:text-base font-black font-mono text-[#0C2D57]">
                    {item.carbonEmissionKg.toFixed(2)} kg
                  </div>
                  <div className="text-[10px] text-[#5A7896] font-medium">CO₂</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Eco-Swap Impact Banner */}
      <div className="rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0] px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div className="flex items-center space-x-2 text-[#065F46] font-bold">
          <div className="w-6 h-6 rounded-full bg-[#D1FAE5] flex items-center justify-center shrink-0">
            <Leaf className="w-3.5 h-3.5 text-[#059669]" />
          </div>
          <span>Eco-Swap Impact</span>
        </div>
        <p className="text-[#166534] font-medium">
          Switching to AC Metro spares <strong className="font-black font-mono">~{massSavedUg} µg</strong> of fine particulates and saves{' '}
          <strong className="font-black font-mono">{carbonSavedKg.toFixed(2)} kg</strong> of CO₂ per trip (at {ambientPm25} µg/m³ ambient PM2.5).
        </p>
      </div>
    </div>
  );
};
