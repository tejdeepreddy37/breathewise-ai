import React from 'react';
import { useApp } from '../context/AppContext';
import { Wind, Thermometer, Droplets, Gauge, AlertCircle, Compass } from 'lucide-react';

export const MetricsStrip: React.FC = () => {
  const { telemetry } = useApp();
  const { current, weather } = telemetry;

  const metrics = [
    {
      label: 'PM2.5 (Fine)',
      value: `${current.pm25}`,
      unit: 'µg/m³',
      desc: 'Alveolar deep lung burden',
      highlight: current.pm25 > 120 ? 'text-amber-800' : 'text-forest-700',
    },
    {
      label: 'PM10 (Coarse)',
      value: `${current.pm10}`,
      unit: 'µg/m³',
      desc: 'Upper airway irritation',
      highlight: 'text-slatecharcoal-900',
    },
    {
      label: 'NO2 (Traffic)',
      value: `${current.no2}`,
      unit: 'µg/m³',
      desc: 'Diesel exhaust combustion',
      highlight: current.no2 > 50 ? 'text-amber-800' : 'text-slatecharcoal-900',
    },
    {
      label: 'Temperature',
      value: `${weather.temperature}`,
      unit: '°C',
      desc: `${weather.humidity}% Rel. Humidity`,
      highlight: 'text-slatecharcoal-900',
    },
    {
      label: 'Wind Flow',
      value: `${weather.windSpeed}`,
      unit: 'km/h',
      desc: weather.isThermalInversionLikely ? 'Surface Inversion Trap' : 'Convective Mixing',
      highlight: weather.isThermalInversionLikely ? 'text-amber-700 font-semibold' : 'text-forest-600',
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {metrics.map((m, idx) => (
        <div
          key={idx}
          className="bg-white p-3.5 sm:p-4 rounded-xl border border-cream-300 shadow-xs flex flex-col justify-between"
        >
          <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
            {m.label}
          </div>
          <div className="my-1.5 flex items-baseline space-x-1">
            <span className={`text-xl sm:text-2xl font-bold tracking-tight ${m.highlight}`}>
              {m.value}
            </span>
            <span className="text-[11px] text-slate-500 font-medium">{m.unit}</span>
          </div>
          <div className="text-[11px] text-slate-500 truncate" title={m.desc}>
            {m.desc}
          </div>
        </div>
      ))}
    </div>
  );
};
