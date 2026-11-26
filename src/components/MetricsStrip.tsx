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
    { id: 'pm25', label: 'PM2.5', value: hasPm25 ? current.pm25 : '--', unit: hasPm25 ? 'µg/m³' : '', icon: <Activity className="w-3.5 h-3.5 text-rose-500" /> },
    { id: 'pm10', label: 'PM10', value: hasPm10 ? current.pm10 : '--', unit: hasPm10 ? 'µg/m³' : '', icon: <CloudFog className="w-3.5 h-3.5 text-amber-600" /> },
    { id: 'no2', label: 'NO2', value: hasNo2 ? current.no2 : '--', unit: hasNo2 ? 'µg/m³' : '', icon: <Flame className="w-3.5 h-3.5 text-[#0891B2]" /> },
    { id: 'so2', label: 'SO2', value: hasSo2 ? current.so2 : '--', unit: hasSo2 ? 'µg/m³' : '', icon: <Flame className="w-3.5 h-3.5 text-sky-600" /> },
    { id: 'co', label: 'CO', value: hasCo ? current.co : '--', unit: hasCo ? 'mg/m³' : '', icon: <Gauge className="w-3.5 h-3.5 text-amber-500" /> },
    { id: 'o3', label: 'O3', value: hasO3 ? current.o3 : '--', unit: hasO3 ? 'µg/m³' : '', icon: <Sun className="w-3.5 h-3.5 text-emerald-600" /> },
    { id: 'humidity', label: 'Humidity', value: hasHumidity ? `${weather.humidity}%` : '--', unit: '', icon: <Droplets className="w-3.5 h-3.5 text-[#0284C7]" /> },
    { id: 'wind', label: 'Wind', value: hasWind ? `${weather.windSpeed}` : '--', unit: hasWind ? 'km/h' : '', icon: <Wind className="w-3.5 h-3.5 text-teal-600" /> },
  ];

  const primaryNorm = (current.primaryPollutant || 'PM2.5').toLowerCase().replace(/[^a-z0-9]/g, '');

  return (
    <div className="rounded-2xl bg-white/85 backdrop-blur-md border border-[#CBE0F2] py-3 px-4 sm:px-5 shadow-soft">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="shrink-0 border-b md:border-b-0 md:border-r border-[#D6E7F5] pb-2 md:pb-0 md:pr-5">
          <h2 className="text-sm font-extrabold text-[#0C2D57] tracking-tight">
            At a Glance
          </h2>
          <p className="text-[11px] text-[#5A7896] font-medium">
            Atmospheric Diagnostics
          </p>
        </div>

        <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-2.5">
          {metrics.map((m) => {
            const isDriver = m.id.replace(/[^a-z0-9]/g, '') === primaryNorm;
            return (
              <div
                key={m.id}
                className={`flex items-center space-x-2 p-1.5 rounded-xl transition-all ${
                  isDriver ? 'bg-[#E6F4FA] ring-1 ring-[#0891B2]/40' : ''
                }`}
                title={isDriver ? `${m.label} is the dominant pollutant driving the CPCB NAQI` : undefined}
              >
                <div className="p-1.5 rounded-lg bg-white border border-[#D6E7F5] shadow-2xs shrink-0">
                  {m.icon}
                </div>
                <div className="text-left min-w-0">
                  <div className="text-[10px] font-bold text-[#5A7896] uppercase tracking-wider flex items-center space-x-1">
                    <span>{m.label}</span>
                    {isDriver && (
                      <span className="text-[7px] bg-[#059669] text-white px-1 py-0.2 rounded font-black tracking-tight">
                        DRIVER
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline space-x-0.5">
                    <span className="text-xs sm:text-sm font-black font-mono text-[#0C2D57]">
                      {m.value}
                    </span>
                    {m.unit && (
                      <span className="text-[10px] text-[#5A7896] font-medium">
                        {m.unit}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
