import React from 'react';
import { useApp } from '../context/AppContext';
import { getCpcbCategory, getCpcbSemanticColors } from '../engines/cpcbAqi';
import { calculateIndoorRecommendations, getIndianStandardTimeHour } from '../engines/indoorCoach';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  Wind,
  Droplets,
  Footprints,
  ChevronRight,
  AlertTriangle,
} from 'lucide-react';

function getCompactWeatherLabel(desc?: string): string {
  if (!desc) return 'Partly Cloudy';
  const lower = desc.toLowerCase();
  if (lower.includes('rain') || lower.includes('drizzle')) return 'Light Rain';
  if (lower.includes('thunder')) return 'Thunderstorm';
  if (lower.includes('mist') || lower.includes('fog') || lower.includes('haze')) return 'Hazy Conditions';
  if (lower.includes('cloud') || lower.includes('overcast')) return 'Partly Cloudy';
  if (lower.includes('clear') || lower.includes('sun')) return 'Clear Sky';
  if (lower.includes('stable') || lower.includes('calm')) return 'Partly Cloudy';
  return desc.split(' ').slice(0, 2).join(' ');
}

export const OverviewWorkspace: React.FC = () => {
  const { telemetry, telemetryError, cleanAirWindow, setActiveTab } = useApp();
  const isUnavailable = Boolean(telemetry.metadata.isUnavailable);
  const { current, weather, hourly } = telemetry;

  const hasAqi = !isUnavailable && typeof current.aqi === 'number' && Number.isFinite(current.aqi);
  const aqiVal = hasAqi ? current.aqi : null;
  const aqiCat = hasAqi ? current.aqiCategory || getCpcbCategory(current.aqi) : 'Unavailable';
  const colors = getCpcbSemanticColors(aqiVal ?? 0, hasAqi ? aqiCat : 'Moderate');
  const primaryPollutant = current.primaryPollutant || 'PM2.5';

  const hasPm25 = !isUnavailable && typeof current.pm25 === 'number' && Number.isFinite(current.pm25);
  const currentHour = getIndianStandardTimeHour();
  const indoorRec = hasPm25
    ? calculateIndoorRecommendations(current.pm25, cleanAirWindow, currentHour, 20, current.o3, 'none')
    : null;

  // Scaled against moderate-poor CPCB thresholds so low-to-moderate readings show balanced bars
  const pollutants = [
    { id: 'pm25', label: 'PM2.5', value: hasPm25 ? current.pm25 : null, maxRef: 90 },
    { id: 'pm10', label: 'PM10', value: !isUnavailable && typeof current.pm10 === 'number' && Number.isFinite(current.pm10) ? current.pm10 : null, maxRef: 180 },
    { id: 'no2', label: 'NO2', value: !isUnavailable && typeof current.no2 === 'number' && Number.isFinite(current.no2) ? current.no2 : null, maxRef: 120 },
    { id: 'o3', label: 'O3', value: !isUnavailable && typeof current.o3 === 'number' && Number.isFinite(current.o3) ? current.o3 : null, maxRef: 140 },
  ];

  const isSevere = hasAqi && (aqiCat === 'Severe' || aqiCat === 'Very Poor' || (aqiVal ?? 0) >= 301);
  const isPoor = hasAqi && (aqiCat === 'Poor' || ((aqiVal ?? 0) >= 201 && (aqiVal ?? 0) <= 300));
  const isModerate = hasAqi && aqiCat === 'Moderate';

  const latestChartPoint = hourly.length > 0 ? hourly[hourly.length - 1] : null;
  const latestChartAqi =
    latestChartPoint && typeof latestChartPoint.cpcbAqi === 'number'
      ? latestChartPoint.cpcbAqi
      : aqiVal;
  const latestChartHourLabel = latestChartPoint
    ? latestChartPoint.hour === 0
      ? '12 AM'
      : latestChartPoint.hour === 12
      ? '12 PM'
      : latestChartPoint.hour > 12
      ? `${latestChartPoint.hour - 12} PM`
      : `${latestChartPoint.hour} AM`
    : null;

  const lastIndex = Math.max(0, hourly.length - 1);

  return (
    <div className="space-y-4 animate-in fade-in duration-200">
      {/* Row 1: Current AQI | Key Pollutants | Weather (Reference Image 3 Top) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Card 1: Current AQI */}
        <div className="rounded-2xl bg-white border border-white p-5 shadow-[0_12px_32px_-8px_rgba(14,165,233,0.16),0_2px_6px_rgba(15,44,76,0.05)] flex flex-col justify-between relative overflow-hidden min-h-[164px]">
          <div className="space-y-2.5 relative z-10">
            <div className="text-[14px] font-extrabold text-[#0C2340]">Current AQI</div>

            {hasAqi ? (
              <div className="flex items-center space-x-3">
                <span className="text-[46px] leading-none font-extrabold text-[#0C2340] tracking-tight tabular-nums">
                  {aqiVal}
                </span>
                <span
                  className={`px-3.5 py-1 rounded-xl text-xs font-extrabold ${
                    isModerate
                      ? 'bg-[#FCD38D] text-[#78350F]'
                      : isSevere || isPoor
                      ? colors.badgeClass
                      : 'bg-[#BBF7D0] text-[#065F46]'
                  }`}
                >
                  {aqiCat}
                </span>
              </div>
            ) : (
              <div className="flex items-center space-x-2 text-rose-600 py-1.5">
                <AlertTriangle className="w-5 h-5" />
                <span className="text-base font-extrabold">Unavailable</span>
              </div>
            )}

            <p className="text-[12.5px] text-[#334E68] leading-snug pr-11">
              {hasAqi
                ? isSevere
                  ? `Driven by ${primaryPollutant}. Minimize prolonged outdoor exposure.`
                  : isPoor
                  ? `Driven by ${primaryPollutant}. Sensitive and general groups should limit outdoor exertion.`
                  : isModerate
                  ? `Air quality is acceptable, but sensitive groups may experience minor discomfort.`
                  : `Driven by ${primaryPollutant}. Air quality is favorable for normal outdoor activities.`
                : telemetryError || 'Live observations unavailable for this location. No values are fabricated.'}
            </p>
          </div>

          <Wind className="w-9 h-9 text-[#0EA5E9]/70 absolute bottom-4 right-4 pointer-events-none" />
        </div>

        {/* Card 2: Key Pollutants (µg/m³) */}
        <div className="rounded-2xl bg-white border border-white p-5 shadow-[0_12px_32px_-8px_rgba(14,165,233,0.16),0_2px_6px_rgba(15,44,76,0.05)] flex flex-col justify-between space-y-3 min-h-[164px]">
          <div className="text-[14px] font-extrabold text-[#0C2340]">Key Pollutants (µg/m³)</div>

          <div className="space-y-2.5">
            {pollutants.map((p) => {
              const pct = p.value != null ? Math.min(100, Math.max(12, Math.round((p.value / p.maxRef) * 100))) : 0;
              return (
                <div key={p.id} className="grid grid-cols-12 items-center gap-2 text-[12.5px]">
                  <div className="col-span-3 font-extrabold text-[#0C2340]">
                    {p.label}
                  </div>
                  <div className="col-span-7 h-2 rounded-full bg-[#E5EEF6] overflow-hidden">
                    {p.value != null && (
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#FACC15] to-[#F59E0B] transition-all duration-500"
                        style={{ width: `${pct}%` }}
                      />
                    )}
                  </div>
                  <div className="col-span-2 text-right font-extrabold text-[#0C2340] tabular-nums">
                    {p.value != null ? p.value : '--'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Card 3: Weather */}
        <div className="rounded-2xl bg-white border border-white p-5 shadow-[0_12px_32px_-8px_rgba(14,165,233,0.16),0_2px_6px_rgba(15,44,76,0.05)] flex flex-col justify-between space-y-3 min-h-[164px]">
          <div className="text-[14px] font-extrabold text-[#0C2340]">Weather</div>

          <div className="flex items-center space-x-3.5">
            {/* Crisp Cloud + Sun Illustration Matching Image 3 */}
            <div className="w-14 h-12 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 54 44" className="w-14 h-12" fill="none">
                <circle cx="34" cy="15" r="8" fill="#FBBF24" />
                <path d="M34 3V5.5M34 24.5V27M46 15H43.5M24.5 15H22M42.5 6.5L40.7 8.3M27.3 21.7L25.5 23.5M42.5 23.5L40.7 21.7" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
                <path d="M16 36h20.5a8 8 0 0 0 1.3-15.9A10.8 10.8 0 0 0 16.5 19a9 9 0 0 0-.5 17Z" fill="#E0F2FE" stroke="#0EA5E9" strokeWidth="2.2" />
              </svg>
            </div>
            <div>
              <div className="text-[32px] leading-none font-extrabold text-[#0C2340] tabular-nums">
                {!isUnavailable && Number.isFinite(weather.temperature) ? `${weather.temperature}°C` : '--'}
              </div>
              <div className="text-[12.5px] font-bold text-[#334E68] mt-1">
                {!isUnavailable ? getCompactWeatherLabel(weather.weatherDescription) : 'Unavailable'}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2.5 border-t border-[#E6F1FA] text-xs">
            <div className="flex items-center space-x-2">
              <Droplets className="w-4 h-4 text-[#0EA5E9] shrink-0" />
              <div>
                <div className="font-extrabold text-[#0C2340] text-[13px] tabular-nums">
                  {!isUnavailable && Number.isFinite(weather.humidity) ? `${weather.humidity}%` : '--'}
                </div>
                <div className="text-[10px] text-[#5A7896] font-medium">Humidity</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Wind className="w-4 h-4 text-[#0284C7] shrink-0" />
              <div>
                <div className="font-extrabold text-[#0C2340] text-[13px] tabular-nums">
                  {!isUnavailable && Number.isFinite(weather.windSpeed) ? `${weather.windSpeed} km/h` : '--'}
                </div>
                <div className="text-[10px] text-[#5A7896] font-medium">Wind</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: AQI Trend (Last 24 Hours) + Health & Actionable Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        {/* Left 7 Columns: AQI Trend Chart */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-white p-5 shadow-[0_12px_32px_-8px_rgba(14,165,233,0.16),0_2px_6px_rgba(15,44,76,0.05)] flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-[14px] font-extrabold text-[#0C2340]">
              AQI Trend (Last 24 Hours)
            </h3>
            {latestChartAqi != null && (
              <span
                className="px-3 py-0.5 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] text-white text-xs font-extrabold tabular-nums shadow-xs whitespace-nowrap"
                title={
                  aqiVal != null && latestChartAqi !== aqiVal
                    ? `Current AQI is ${aqiVal}; chart ends at ${latestChartHourLabel} (${latestChartAqi})`
                    : undefined
                }
              >
                {latestChartHourLabel && aqiVal != null && latestChartAqi !== aqiVal
                  ? `${latestChartHourLabel}: ${latestChartAqi}`
                  : latestChartAqi}
              </span>
            )}
          </div>

          <div className="h-[185px] w-full">
            {hourly.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={hourly} margin={{ top: 8, right: 14, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="skyAqiGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.32} />
                      <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0.03} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#EDF5FC" vertical={false} />
                  <XAxis
                    dataKey="hour"
                    tickFormatter={(h) => (h === 0 ? '12 AM' : h === 12 ? '12 PM' : h > 12 ? `${h - 12} PM` : `${h} AM`)}
                    ticks={[0, 4, 8, 12, 16, 20]}
                    tick={{ fontSize: 10.5, fill: '#334E68', fontWeight: 600 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 10.5, fill: '#334E68', fontWeight: 600 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    formatter={(val: number) => [`${val} CPCB NAQI`, 'AQI']}
                    labelFormatter={(h) => `${Number(h) % 12 === 0 ? 12 : Number(h) % 12}:00 ${Number(h) >= 12 ? 'PM' : 'AM'}`}
                    contentStyle={{ borderRadius: '12px', border: '1px solid #CBE0F2', fontSize: '11px' }}
                  />
                  <Area
                    type="monotone"
                    dataKey="cpcbAqi"
                    stroke="#0EA5E9"
                    strokeWidth={2.75}
                    fillOpacity={1}
                    fill="url(#skyAqiGradient)"
                    dot={(dotProps) => {
                      if (dotProps.index !== lastIndex) return <g key={dotProps.index} />;
                      return (
                        <circle
                          key={dotProps.index}
                          cx={dotProps.cx}
                          cy={dotProps.cy}
                          r={5}
                          fill="#0284C7"
                          stroke="#FFFFFF"
                          strokeWidth={2.5}
                        />
                      );
                    }}
                    activeDot={{ r: 5.5, fill: '#0284C7', stroke: '#FFFFFF', strokeWidth: 2 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full rounded-xl bg-[#F4F9FE] border border-[#D6E7F5] flex items-center justify-center text-xs text-[#5A7896]">
                Hourly trend unavailable — check connection or switch to a calibrated station.
              </div>
            )}
          </div>
        </div>

        {/* Right 5 Columns: Health & Actionable Insights */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-white p-5 shadow-[0_12px_32px_-8px_rgba(14,165,233,0.16),0_2px_6px_rgba(15,44,76,0.05)] flex flex-col justify-between space-y-3">
          <h3 className="text-[14px] font-extrabold text-[#0C2340]">
            Health & Actionable Insights
          </h3>

          <div className="space-y-2.5 flex-1 flex flex-col justify-center">
            <button
              type="button"
              onClick={() => setActiveTab('exposure')}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5FAFF] hover:bg-[#EAF4FD] border border-[#E2EFFA] flex items-center justify-between gap-2.5 transition-all cursor-pointer text-left"
            >
              <div className="flex items-center space-x-3 min-w-0">
                <div className="w-8 h-8 rounded-full bg-[#FEF3C7] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#D97706]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 4v7M12 11l-2.5 2M12 11l2.5 2" />
                    <path d="M9.5 13C7 12.5 5 14.5 5 17.5c0 1.8 1.3 2.5 3 2.5 1.8 0 3-1 3-3.2V11" />
                    <path d="M14.5 13c2.5-.5 4.5 1.5 4.5 4.5 0 1.8-1.3 2.5-3 2.5-1.8 0-3-1-3-3.2V11" />
                  </svg>
                </div>
                <span className="text-[12.5px] font-bold text-[#0C2340] leading-snug">
                  {isSevere
                    ? 'Avoid prolonged outdoor exertion today'
                    : isPoor || isModerate
                    ? 'Limit prolonged outdoor activity'
                    : 'Favorable for outdoor activity'}
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#5A7896] shrink-0" />
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('commute')}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5FAFF] hover:bg-[#EAF4FD] border border-[#E2EFFA] flex items-center justify-between gap-2.5 transition-all cursor-pointer text-left"
            >
              <div className="flex items-center space-x-3 min-w-0">
                <div className="w-8 h-8 rounded-full bg-[#FFE4E6] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#E11D48]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 10c2-2 12-2 14 0v4c0 3-3.5 5-7 5s-7-2-7-5v-4Z" />
                    <path d="M5 11H3a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h1" />
                    <path d="M19 11h2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2h-1" />
                    <path d="M9 13h6" />
                  </svg>
                </div>
                <span className="text-[12.5px] font-bold text-[#0C2340] leading-snug">
                  {hasPm25 && current.pm25 > 60
                    ? 'Use a mask in high traffic areas'
                    : 'Compare cleaner transit options'}
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#5A7896] shrink-0" />
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('indoor')}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5FAFF] hover:bg-[#EAF4FD] border border-[#E2EFFA] flex items-center justify-between gap-2.5 transition-all cursor-pointer text-left"
            >
              <div className="flex items-center space-x-3 min-w-0">
                <div className="w-8 h-8 rounded-full bg-[#DCFCE7] flex items-center justify-center shrink-0">
                  <Footprints className="w-4 h-4 text-[#16A34A]" />
                </div>
                <span className="text-[12.5px] font-bold text-[#0C2340] leading-snug">
                  {indoorRec?.windowAction === 'SEAL_COMPLETELY'
                    ? `Prefer ${cleanAirWindow.displayWindow} for lower exposure`
                    : `Safe window period: ${cleanAirWindow.displayWindow}`}
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#5A7896] shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
