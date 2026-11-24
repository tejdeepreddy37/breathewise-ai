import React from 'react';
import { useApp } from '../context/AppContext';
import { Activity, Wind, CloudFog, Flame, Gauge } from 'lucide-react';

export const MetricsStrip: React.FC = () => {
  const { telemetry } = useApp();
  const { current, weather } = telemetry;

  const pm25Val = current.pm25 ?? 0;
  const pm10Val = current.pm10;
  const no2Val = current.no2;
  const coVal = current.co;
  const windVal = weather?.windSpeed ?? 0;

  // Percentage of max standard reference
  const pm25Ratio = Math.min(100, Math.round((pm25Val / 250) * 100));
  const pm10Ratio = pm10Val != null ? Math.min(100, Math.round((pm10Val / 430) * 100)) : 0;
  const no2Ratio = no2Val != null ? Math.min(100, Math.round((no2Val / 180) * 100)) : 0;
  const coRatio = coVal != null ? Math.min(100, Math.round((coVal / 10) * 100)) : 0;
  const windRatio = Math.min(100, Math.round((windVal / 25) * 100));

  const metrics = [
    {
      id: 'pm25',
      label: 'PM2.5 Fine',
      value: pm25Val,
      unit: 'µg/m³',
      ratio: pm25Ratio,
      color: pm25Val > 120 ? 'bg-rose-500' : pm25Val > 60 ? 'bg-amber-500' : 'bg-emerald-500',
      textColor: pm25Val > 120 ? 'text-rose-700' : pm25Val > 60 ? 'text-amber-700' : 'text-emerald-700',
      status: pm25Val > 120 ? 'Severe' : pm25Val > 60 ? 'Moderate' : 'Good',
      detail: 'Fine respirable aerosol',
      icon: <Activity className="w-3.5 h-3.5 text-slate-400" />,
    },
    {
      id: 'pm10',
      label: 'PM10 Coarse',
      value: pm10Val != null ? pm10Val : '--',
      unit: pm10Val != null ? 'µg/m³' : '',
      ratio: pm10Ratio,
      color: pm10Val == null ? 'bg-stone-300' : pm10Val > 250 ? 'bg-rose-500' : pm10Val > 100 ? 'bg-amber-500' : 'bg-emerald-500',
      textColor: pm10Val == null ? 'text-slate-400' : pm10Val > 250 ? 'text-rose-700' : 'text-slatecharcoal-900',
      status: pm10Val == null ? 'Unobserved' : pm10Val > 250 ? 'Elevated' : 'Moderate',
      detail: pm10Val == null ? 'Sensor unobserved' : 'Upper airway inhalable dust',
      icon: <CloudFog className="w-3.5 h-3.5 text-slate-400" />,
    },
    {
      id: 'no2',
      label: 'NO2 Traffic',
      value: no2Val != null ? no2Val : '--',
      unit: no2Val != null ? 'µg/m³' : '',
      ratio: no2Ratio,
      color: no2Val == null ? 'bg-stone-300' : no2Val > 80 ? 'bg-amber-500' : 'bg-emerald-500',
      textColor: no2Val == null ? 'text-slate-400' : no2Val > 80 ? 'text-amber-700' : 'text-slatecharcoal-900',
      status: no2Val == null ? 'Unobserved' : no2Val > 80 ? 'Elevated' : 'Safe',
      detail: no2Val == null ? 'Sensor unobserved' : 'Combustion exhaust plume',
      icon: <Flame className="w-3.5 h-3.5 text-slate-400" />,
    },
    {
      id: 'co',
      label: 'CO Normalized',
      value: coVal != null ? coVal : '--',
      unit: coVal != null ? 'mg/m³' : '',
      ratio: coRatio,
      color: coVal == null ? 'bg-stone-300' : coVal > 2.0 ? 'bg-amber-500' : 'bg-emerald-500',
      textColor: coVal == null ? 'text-slate-400' : coVal > 2.0 ? 'text-amber-700' : 'text-slatecharcoal-900',
      status: coVal == null ? 'Unobserved' : '8-hr CPCB standard',
      detail: coVal == null ? 'Sensor unobserved' : 'Incomplete combustion',
      icon: <Gauge className="w-3.5 h-3.5 text-slate-400" />,
    },
    {
      id: 'wind',
      label: 'Atmosphere Flow',
      value: windVal,
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
                {m.unit && <span className="text-xs text-slate-400 font-medium">{m.unit}</span>}
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
