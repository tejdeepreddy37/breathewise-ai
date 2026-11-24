import React from 'react';
import { useApp } from '../context/AppContext';
import { Activity, Wind, CloudFog, Flame, Gauge } from 'lucide-react';

export const MetricsStrip: React.FC = () => {
  const { telemetry } = useApp();
  const { current, weather } = telemetry;

  // Percentage of max standard reference
  const pm25Ratio = Math.min(100, Math.round((current.pm25 / 250) * 100));
  const pm10Ratio = Math.min(100, Math.round((current.pm10 / 430) * 100));
  const no2Ratio = Math.min(100, Math.round((current.no2 / 180) * 100));
  const coRatio = Math.min(100, Math.round((current.co / 10) * 100));
  const windRatio = Math.min(100, Math.round((weather.windSpeed / 25) * 100));

  const metrics = [
    {
      id: 'pm25',
      label: 'PM2.5 Fine',
      value: current.pm25,
      unit: 'µg/m³',
      ratio: pm25Ratio,
      color: current.pm25 > 120 ? 'bg-rose-500' : current.pm25 > 60 ? 'bg-amber-500' : 'bg-emerald-500',
      textColor: current.pm25 > 120 ? 'text-rose-700' : current.pm25 > 60 ? 'text-amber-700' : 'text-emerald-700',
      status: current.pm25 > 120 ? 'Severe' : current.pm25 > 60 ? 'Moderate' : 'Good',
      detail: 'Deep alveolar aerosol',
      icon: <Activity className="w-3.5 h-3.5 text-slate-400" />,
    },
    {
      id: 'pm10',
      label: 'PM10 Coarse',
      value: current.pm10,
      unit: 'µg/m³',
      ratio: pm10Ratio,
      color: current.pm10 > 250 ? 'bg-rose-500' : current.pm10 > 100 ? 'bg-amber-500' : 'bg-emerald-500',
      textColor: current.pm10 > 250 ? 'text-rose-700' : 'text-slatecharcoal-900',
      status: current.pm10 > 250 ? 'Elevated' : 'Moderate',
      detail: 'Upper airway inhalable dust',
      icon: <CloudFog className="w-3.5 h-3.5 text-slate-400" />,
    },
    {
      id: 'no2',
      label: 'NO2 Traffic',
      value: current.no2,
      unit: 'µg/m³',
      ratio: no2Ratio,
      color: current.no2 > 80 ? 'bg-amber-500' : 'bg-emerald-500',
      textColor: current.no2 > 80 ? 'text-amber-700' : 'text-slatecharcoal-900',
      status: current.no2 > 80 ? 'Elevated' : 'Safe',
      detail: 'Combustion exhaust plume',
      icon: <Flame className="w-3.5 h-3.5 text-slate-400" />,
    },
    {
      id: 'co',
      label: 'CO Normalized',
      value: current.co,
      unit: 'mg/m³',
      ratio: coRatio,
      color: current.co > 2.0 ? 'bg-amber-500' : 'bg-emerald-500',
      textColor: current.co > 2.0 ? 'text-amber-700' : 'text-slatecharcoal-900',
      status: '8-hr CPCB standard',
      detail: 'Incomplete combustion',
      icon: <Gauge className="w-3.5 h-3.5 text-slate-400" />,
    },
    {
      id: 'wind',
      label: 'Atmosphere Flow',
      value: weather.windSpeed,
      unit: 'km/h',
      ratio: windRatio,
      color: weather.isThermalInversionLikely ? 'bg-rose-500' : 'bg-emerald-500',
      textColor: weather.isThermalInversionLikely ? 'text-rose-700' : 'text-emerald-700',
      status: weather.isThermalInversionLikely ? 'Inversion Cap' : 'Active Flow',
      detail: weather.isThermalInversionLikely ? 'Surface smoke trapped' : 'Convective dispersion',
      icon: <Wind className="w-3.5 h-3.5 text-slate-400" />,
    },
  ];

  return (
    <div className="rounded-3xl bg-white border border-stone-200/80 p-5 sm:p-6 shadow-soft transition-all">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-4 border-b border-stone-100">
        <div className="flex items-center space-x-2">
          <Activity className="w-4 h-4 text-forest-600" />
          <h2 className="text-xs sm:text-sm font-bold text-slatecharcoal-900 uppercase tracking-wider">
            Atmospheric Chemical & Physical Diagnostics
          </h2>
        </div>
        <span className="text-[11px] text-slate-400 font-medium">
          Normalized to Indian CPCB & WHO Benchmark Limits
        </span>
      </div>

      {/* Grid of metrics with visual progress gauges */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-stone-100">
        {metrics.map((m, i) => (
          <div key={m.id} className={`flex flex-col justify-between pt-3 sm:pt-0 ${i !== 0 ? 'sm:pl-4 lg:pl-6' : ''}`}>
            <div>
              <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  {m.label}
                </span>
                {m.icon}
              </div>

              <div className="flex items-baseline space-x-1.5 my-1">
                <span className={`text-2xl sm:text-3xl font-black tracking-tight ${m.textColor}`}>
                  {m.value}
                </span>
                <span className="text-xs text-slate-400 font-medium">{m.unit}</span>
              </div>

              {/* Subtle Horizontal Progress Bar */}
              <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden my-2">
                <div 
                  className={`h-full rounded-full transition-all duration-700 ${m.color}`}
                  style={{ width: `${Math.max(8, m.ratio)}%` }}
                />
              </div>
            </div>

            <div className="pt-1">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-700">
                {m.status}
              </div>
              <div className="text-[11px] text-slate-400 truncate" title={m.detail}>
                {m.detail}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
