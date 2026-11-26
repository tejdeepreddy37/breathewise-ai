import React from 'react';
import { useApp } from '../context/AppContext';
import { Activity, CloudFog, Flame, Gauge, Sun, Droplets, Wind } from 'lucide-react';

export const MetricsStrip: React.FC = () => {
  const { telemetry } = useApp();
  const { current, weather } = telemetry;

  const hasPm25 = typeof current.pm25 === 'number' && Number.isFinite(current.pm25);
  const hasPm10 = typeof current.pm10 === 'number' && Number.isFinite(current.pm10);
  const hasNo2 = typeof current.no2 === 'number' && Number.isFinite(current.no2);
  const hasSo2 = typeof current.so2 === 'number' && Number.isFinite(current.so2);
  const hasCo = typeof current.co === 'number' && Number.isFinite(current.co);
  const hasO3 = typeof current.o3 === 'number' && Number.isFinite(current.o3);
  const hasHumidity = typeof weather?.humidity === 'number' && Number.isFinite(weather.humidity);
  const hasWind = typeof weather?.windSpeed === 'number' && Number.isFinite(weather.windSpeed);

  const metrics = [
    {
      id: 'pm25',
      label: 'PM2.5',
      value: hasPm25 ? current.pm25 : '--',
      unit: hasPm25 ? 'µg/m³' : '',
      icon: <Activity className="w-3.5 h-3.5 text-rose-500" />,
      color: 'text-rose-600',
    },
    {
      id: 'pm10',
      label: 'PM10',
      value: hasPm10 ? current.pm10 : '--',
      unit: hasPm10 ? 'µg/m³' : '',
      icon: <CloudFog className="w-3.5 h-3.5 text-rose-500" />,
      color: 'text-rose-600',
    },
    {
      id: 'no2',
      label: 'NO2',
      value: hasNo2 ? current.no2 : '--',
      unit: hasNo2 ? 'µg/m³' : '',
      icon: <Flame className="w-3.5 h-3.5 text-teal-600" />,
      color: 'text-teal-700',
    },
    {
      id: 'so2',
      label: 'SO2',
      value: hasSo2 ? current.so2 : '--',
      unit: hasSo2 ? 'µg/m³' : '',
      icon: <Flame className="w-3.5 h-3.5 text-amber-500" />,
      color: 'text-amber-600',
    },
    {
      id: 'co',
      label: 'CO',
      value: hasCo ? current.co : '--',
      unit: hasCo ? 'mg/m³' : '',
      icon: <Gauge className="w-3.5 h-3.5 text-amber-500" />,
      color: 'text-amber-600',
    },
    {
      id: 'o3',
      label: 'O3',
      value: hasO3 ? current.o3 : '--',
      unit: hasO3 ? 'µg/m³' : '',
      icon: <Sun className="w-3.5 h-3.5 text-emerald-500" />,
      color: 'text-emerald-600',
    },
    {
      id: 'humidity',
      label: 'Humidity',
      value: hasHumidity ? `${weather.humidity}%` : '--',
      unit: '',
      icon: <Droplets className="w-3.5 h-3.5 text-blue-500" />,
      color: 'text-slatecharcoal-900',
    },
    {
      id: 'wind',
      label: 'Wind',
      value: hasWind ? `${weather.windSpeed}` : '--',
      unit: hasWind ? 'km/h' : '',
      icon: <Wind className="w-3.5 h-3.5 text-teal-500" />,
      color: 'text-slatecharcoal-900',
    },
  ];

  return (
    <div className="hidden sm:block rounded-2xl bg-white border border-stone-200/80 py-2.5 px-4 sm:px-5 shadow-2xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Left Title: "At a Glance / Atmospheric Diagnostics" (Exact match to Image 2) */}
        <div className="shrink-0 border-b md:border-b-0 md:border-r border-stone-200/80 pb-2 md:pb-0 md:pr-6">
          <h2 className="text-sm font-extrabold text-slatecharcoal-900 tracking-tight">
            At a Glance
          </h2>
          <p className="text-[11px] text-slate-500 font-medium">
            Atmospheric Diagnostics
          </p>
        </div>

        {/* Right Horizontal Metrics List (Exact match to Image 2) */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-2.5">
          {metrics.map((m) => (
            <div key={m.id} className="flex items-center space-x-2 shrink-0">
              <div className="p-1.5 rounded-lg bg-stone-50 border border-stone-200/60">
                {m.icon}
              </div>
              <div className="text-left">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  {m.label}
                </div>
                <div className="flex items-baseline space-x-0.5">
                  <span className={`text-xs sm:text-sm font-black font-mono ${m.color}`}>
                    {m.value}
                  </span>
                  {m.unit && (
                    <span className="text-[10px] text-slate-400 font-medium ml-0.5">
                      {m.unit}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
