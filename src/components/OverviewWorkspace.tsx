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
  Activity,
  ShieldAlert,
  Footprints,
  ChevronRight,
  AlertTriangle,
} from 'lucide-react';

function getCompactWeatherLabel(desc?: string): string {
  if (!desc) return 'Calm Weather';
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

  const pollutants = [
    { id: 'pm25', label: <>PM<sub>2.5</sub></>, value: hasPm25 ? current.pm25 : null, maxRef: 250 },
    { id: 'pm10', label: <>PM<sub>10</sub></>, value: !isUnavailable && typeof current.pm10 === 'number' && Number.isFinite(current.pm10) ? current.pm10 : null, maxRef: 430 },
    { id: 'no2', label: <>NO<sub>2</sub></>, value: !isUnavailable && typeof current.no2 === 'number' && Number.isFinite(current.no2) ? current.no2 : null, maxRef: 280 },
    { id: 'o3', label: <>O<sub>3</sub></>, value: !isUnavailable && typeof current.o3 === 'number' && Number.isFinite(current.o3) ? current.o3 : null, maxRef: 208 },
  ];

  const isSevere = hasAqi && (aqiCat === 'Severe' || aqiCat === 'Very Poor' || (aqiVal ?? 0) >= 301);
  const isPoor = hasAqi && (aqiCat === 'Poor' || ((aqiVal ?? 0) >= 201 && (aqiVal ?? 0) <= 300));
  const isModerate = hasAqi && aqiCat === 'Moderate';

  const latestChartAqi =
    hourly.length > 0 && typeof hourly[hourly.length - 1]?.cpcbAqi === 'number'
      ? hourly[hourly.length - 1].cpcbAqi
      : aqiVal;

  const lastIndex = Math.max(0, hourly.length - 1);

  return (
    <div className="space-y-4 animate-in fade-in duration-200">
      {/* Row 1: Current AQI | Key Pollutants | Weather */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Card 1: Current AQI */}
        <div className="rounded-2xl bg-white/88 backdrop-blur-md border border-white/95 p-5 shadow-[0_10px_28px_-8px_rgba(15,44,76,0.1)] flex flex-col justify-between relative overflow-hidden min-h-[158px]">
          <div className="space-y-2.5 relative z-10">
            <div className="text-[14px] font-extrabold text-[#0C2340]">Current AQI</div>

            {hasAqi ? (
              <div className="flex items-center space-x-3">
                <span className="text-[44px] leading-none font-extrabold text-[#0C2340] tracking-tight tabular-nums">
                  {aqiVal}
                </span>
                <span
                  className={`px-3 py-1 rounded-xl text-xs font-bold ${
                    isModerate
                      ? 'bg-[#FDE68A]/85 text-[#92400E]'
                      : isSevere || isPoor
                      ? colors.badgeClass
                      : 'bg-[#D1FAE5] text-[#065F46]'
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

            <p className="text-[12px] text-[#334E68] leading-snug pr-10">
              {hasAqi
                ? isSevere
                  ? `Driven by ${primaryPollutant}. Minimize outdoor exposure.`
                  : isPoor
                  ? `Driven by ${primaryPollutant}. Sensitive and general groups should limit outdoor exertion.`
                  : isModerate
                  ? `Air quality is acceptable, but sensitive groups may experience minor discomfort.`
                  : `Driven by ${primaryPollutant}. Air quality is favorable for normal outdoor activities.`
                : telemetryError || 'Live observations unavailable for this location. No values are fabricated.'}
            </p>
          </div>

          <Wind className="w-8 h-8 text-[#38BDF8]/70 absolute bottom-4 right-4 pointer-events-none" />
        </div>

        {/* Card 2: Key Pollutants (µg/m³) */}
        <div className="rounded-2xl bg-white/88 backdrop-blur-md border border-white/95 p-5 shadow-[0_10px_28px_-8px_rgba(15,44,76,0.1)] flex flex-col justify-between space-y-3 min-h-[158px]">
          <div className="text-[14px] font-extrabold text-[#0C2340]">Key Pollutants (µg/m³)</div>

          <div className="space-y-2.5">
            {pollutants.map((p) => {
              const pct = p.value != null ? Math.min(100, Math.max(8, Math.round((p.value / p.maxRef) * 100))) : 0;
              return (
                <div key={p.id} className="grid grid-cols-12 items-center gap-2 text-[12px]">
                  <div className="col-span-3 font-bold text-[#0C2340]">
                    {p.label}
                  </div>
                  <div className="col-span-7 h-2 rounded-full bg-[#E6EFF7] overflow-hidden">
                    {p.value != null && (
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] transition-all duration-500"
                        style={{ width: `${pct}%` }}
                      />
                    )}
                  </div>
                  <div className="col-span-2 text-right font-bold text-[#0C2340] tabular-nums">
                    {p.value != null ? p.value : '--'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Card 3: Weather */}
        <div className="rounded-2xl bg-white/88 backdrop-blur-md border border-white/95 p-5 shadow-[0_10px_28px_-8px_rgba(15,44,76,0.1)] flex flex-col justify-between space-y-3 min-h-[158px]">
          <div className="text-[14px] font-extrabold text-[#0C2340]">Weather</div>

          <div className="flex items-center space-x-3.5">
            {/* Crisp Cloud + Sun Illustration */}
            <div className="w-12 h-11 relative flex items-center justify-center shrink-0">
              <svg viewBox="0 0 48 40" className="w-12 h-10" fill="none">
                <circle cx="31" cy="14" r="7.5" fill="#FBBF24" />
                <path d="M31 2.5V5M31 23V25.5M42.5 14H40M22 14H19.5M39.1 5.9L37.4 7.6M24.6 20.4L22.9 22.1M39.1 22.1L37.4 20.4" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M15 33h18.5a7.5 7.5 0 0 0 1.2-14.9A10 10 0 0 0 15.2 17a8.5 8.5 0 0 0-.2 16Z" fill="#E0F2FE" stroke="#0EA5E9" strokeWidth="1.8" />
              </svg>
            </div>
            <div>
              <div className="text-[30px] leading-none font-extrabold text-[#0C2340] tabular-nums">
                {!isUnavailable && Number.isFinite(weather.temperature) ? `${weather.temperature}°C` : '--'}
              </div>
              <div className="text-xs font-semibold text-[#334E68] mt-1">
                {!isUnavailable ? getCompactWeatherLabel(weather.weatherDescription) : 'Unavailable'}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2.5 border-t border-[#E6F1FA] text-xs">
            <div className="flex items-center space-x-2">
              <Droplets className="w-4 h-4 text-[#0EA5E9] shrink-0" />
              <div>
                <div className="font-extrabold text-[#0C2340] tabular-nums">
                  {!isUnavailable && Number.isFinite(weather.humidity) ? `${weather.humidity}%` : '--'}
                </div>
                <div className="text-[10px] text-[#5A7896]">Humidity</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Wind className="w-4 h-4 text-[#0284C7] shrink-0" />
              <div>
                <div className="font-extrabold text-[#0C2340] tabular-nums">
                  {!isUnavailable && Number.isFinite(weather.windSpeed) ? `${weather.windSpeed} km/h` : '--'}
                </div>
                <div className="text-[10px] text-[#5A7896]">Wind</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: AQI Trend (Last 24 Hours) + Health & Actionable Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        {/* Left 7 Columns: AQI Trend Chart */}
        <div className="lg:col-span-7 rounded-2xl bg-white/88 backdrop-blur-md border border-white/95 p-5 shadow-[0_10px_28px_-8px_rgba(15,44,76,0.1)] flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-[14px] font-extrabold text-[#0C2340]">
              AQI Trend (Last 24 Hours)
            </h3>
            {latestChartAqi != null && (
              <span className="px-3 py-0.5 rounded-full bg-[#0EA5E9] text-white text-xs font-extrabold tabular-nums shadow-xs">
                {latestChartAqi}
              </span>
            )}
          </div>

          <div className="h-[205px] w-full">
            {hourly.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={hourly} margin={{ top: 10, right: 12, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="skyAqiGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.28} />
                      <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#EEF5FB" vertical={false} />
                  <XAxis
                    dataKey="hour"
                    tickFormatter={(h) => (h === 0 ? '12 AM' : h === 12 ? '12 PM' : h > 12 ? `${h - 12} PM` : `${h} AM`)}
                    ticks={[0, 4, 8, 12, 16, 20]}
                    tick={{ fontSize: 10, fill: '#5A7896' }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 10, fill: '#5A7896' }}
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
                    strokeWidth={2.5}
                    fillOpacity={1}
                    fill="url(#skyAqiGradient)"
                    dot={(dotProps) => {
                      if (dotProps.index !== lastIndex) return <g key={dotProps.index} />;
                      return (
                        <circle
                          key={dotProps.index}
                          cx={dotProps.cx}
                          cy={dotProps.cy}
                          r={4.5}
                          fill="#0EA5E9"
                          stroke="#FFFFFF"
                          strokeWidth={2}
                        />
                      );
                    }}
                    activeDot={{ r: 5, fill: '#0284C7', stroke: '#FFFFFF', strokeWidth: 2 }}
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
        <div className="lg:col-span-5 rounded-2xl bg-white/88 backdrop-blur-md border border-white/95 p-5 shadow-[0_10px_28px_-8px_rgba(15,44,76,0.1)] flex flex-col justify-between space-y-3">
          <h3 className="text-[14px] font-extrabold text-[#0C2340]">
            Health & Actionable Insights
          </h3>

          <div className="space-y-2.5 flex-1 flex flex-col justify-center">
            <button
              type="button"
              onClick={() => setActiveTab('exposure')}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4F9FE]/90 hover:bg-white border border-[#E6F1FA] flex items-center justify-between gap-2.5 transition-all cursor-pointer text-left"
            >
              <div className="flex items-center space-x-3 min-w-0">
                <div className="w-8 h-8 rounded-full bg-[#FEF3C7] flex items-center justify-center shrink-0">
                  <Activity className="w-4 h-4 text-[#D97706]" />
                </div>
                <span className="text-[12.5px] font-semibold text-[#0C2340] leading-snug">
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
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4F9FE]/90 hover:bg-white border border-[#E6F1FA] flex items-center justify-between gap-2.5 transition-all cursor-pointer text-left"
            >
              <div className="flex items-center space-x-3 min-w-0">
                <div className="w-8 h-8 rounded-full bg-[#FFE4E6] flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-4 h-4 text-[#E11D48]" />
                </div>
                <span className="text-[12.5px] font-semibold text-[#0C2340] leading-snug">
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
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4F9FE]/90 hover:bg-white border border-[#E6F1FA] flex items-center justify-between gap-2.5 transition-all cursor-pointer text-left"
            >
              <div className="flex items-center space-x-3 min-w-0">
                <div className="w-8 h-8 rounded-full bg-[#DCFCE7] flex items-center justify-center shrink-0">
                  <Footprints className="w-4 h-4 text-[#16A34A]" />
                </div>
                <span className="text-[12.5px] font-semibold text-[#0C2340] leading-snug">
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
