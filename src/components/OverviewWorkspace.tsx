import React from 'react';
import { useApp } from '../context/AppContext';
import { getCpcbCategory, getCpcbSemanticColors } from '../engines/cpcbAqi';
import { calculateIndoorRecommendations, getIndianStandardTimeHour } from '../engines/indoorCoach';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  Wind,
  Sun,
  Droplets,
  AlertTriangle,
  ShieldAlert,
  Clock,
  ChevronRight,
} from 'lucide-react';

export const OverviewWorkspace: React.FC = () => {
  const { telemetry, telemetryError, cleanAirWindow, userPreferences, setActiveTab } = useApp();
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
    { id: 'pm25', label: 'PM2.5', value: hasPm25 ? current.pm25 : null, maxRef: 250, barColor: 'bg-amber-400' },
    { id: 'pm10', label: 'PM10', value: !isUnavailable && typeof current.pm10 === 'number' && Number.isFinite(current.pm10) ? current.pm10 : null, maxRef: 430, barColor: 'bg-orange-500' },
    { id: 'no2', label: 'NO2', value: !isUnavailable && typeof current.no2 === 'number' && Number.isFinite(current.no2) ? current.no2 : null, maxRef: 280, barColor: 'bg-amber-400' },
    { id: 'o3', label: 'O3', value: !isUnavailable && typeof current.o3 === 'number' && Number.isFinite(current.o3) ? current.o3 : null, maxRef: 208, barColor: 'bg-amber-500' },
  ];

  const primaryNorm = primaryPollutant.toLowerCase().replace(/[^a-z0-9]/g, '');

  const isSevere = hasAqi && (aqiCat === 'Severe' || aqiCat === 'Very Poor' || (aqiVal ?? 0) >= 301);
  const isPoor = hasAqi && (aqiCat === 'Poor' || ((aqiVal ?? 0) >= 201 && (aqiVal ?? 0) <= 300));

  const latestChartAqi =
    hourly.length > 0 && typeof hourly[hourly.length - 1]?.cpcbAqi === 'number'
      ? hourly[hourly.length - 1].cpcbAqi
      : aqiVal;

  return (
    <div className="space-y-4 animate-in fade-in duration-200">
      {/* Row 1: Current AQI | Key Pollutants | Weather (Exact Panel 2 Top Row) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Card 1: Current AQI */}
        <div className="rounded-3xl bg-white/85 backdrop-blur-md border border-white p-5 shadow-soft flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-3 relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-sm font-extrabold text-[#0C2340]">Current AQI</span>
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#F0F7FD] text-[#1E4976] border border-[#CBE0F2]">
                {isUnavailable
                  ? 'Unavailable'
                  : telemetry.metadata.isLive
                  ? 'Live CAMS'
                  : telemetry.metadata.fetchTimestamp?.includes('Cached')
                  ? 'Cached CAMS'
                  : 'Baseline'}
              </span>
            </div>

            {hasAqi ? (
              <div className="flex items-center space-x-3">
                <span className="text-4xl sm:text-5xl font-black text-[#0C2340] font-mono tracking-tight">
                  {aqiVal}
                </span>
                <span className={`px-3 py-1 rounded-xl text-xs font-extrabold shadow-2xs ${colors.badgeClass}`}>
                  {aqiCat}
                </span>
              </div>
            ) : (
              <div className="flex items-center space-x-2 text-rose-600 py-2">
                <AlertTriangle className="w-6 h-6" />
                <span className="text-lg font-extrabold">Data Unavailable</span>
              </div>
            )}

            <p className="text-xs text-[#334E68] leading-relaxed pr-8">
              {hasAqi
                ? `Driven by ${primaryPollutant} (CPCB NAQI). ${
                    isSevere
                      ? 'Severe particulate burden — minimize outdoor exposure.'
                      : isPoor
                      ? 'Sensitive and general groups should limit prolonged outdoor exertion.'
                      : aqiCat === 'Moderate'
                      ? 'Air quality is acceptable, though sensitive groups may experience discomfort.'
                      : 'Atmospheric conditions are favorable for normal outdoor activities.'
                  }`
                : telemetryError || 'Live observations unavailable for this location. No values are fabricated.'}
            </p>
          </div>

          {/* Subtle Decorative Wind Graphic Bottom-Right matching Panel 2 */}
          <Wind className="w-10 h-10 text-[#93C5FD]/60 absolute bottom-4 right-4 pointer-events-none" />
        </div>

        {/* Card 2: Key Pollutants (µg/m³) */}
        <div className="rounded-3xl bg-white/85 backdrop-blur-md border border-white p-5 shadow-soft flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-extrabold text-[#0C2340]">Key Pollutants (µg/m³)</span>
            {hasAqi && (
              <span className="text-[10px] font-bold text-[#0369A1]">
                Driver: {primaryPollutant}
              </span>
            )}
          </div>

          <div className="space-y-2.5">
            {pollutants.map((p) => {
              const isDriver = hasAqi && p.id === primaryNorm;
              const pct = p.value != null ? Math.min(100, Math.max(8, Math.round((p.value / p.maxRef) * 100))) : 0;
              return (
                <div key={p.id} className="grid grid-cols-12 items-center gap-2 text-xs">
                  <div className="col-span-3 font-bold text-[#334E68] flex items-center space-x-1">
                    <span>{p.label}</span>
                    {isDriver && <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" title="Dominant AQI driver" />}
                  </div>
                  <div className="col-span-7 h-2 rounded-full bg-[#E6F1FA] overflow-hidden">
                    {p.value != null && (
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${p.barColor}`}
                        style={{ width: `${pct}%` }}
                      />
                    )}
                  </div>
                  <div className="col-span-2 text-right font-black font-mono text-[#0C2340]">
                    {p.value != null ? p.value : '--'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Card 3: Weather */}
        <div className="rounded-3xl bg-white/85 backdrop-blur-md border border-white p-5 shadow-soft flex flex-col justify-between space-y-3">
          <span className="text-sm font-extrabold text-[#0C2340]">Weather</span>

          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] flex items-center justify-center shrink-0">
              <Sun className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <div className="text-3xl font-black text-[#0C2340] font-mono">
                {!isUnavailable && Number.isFinite(weather.temperature) ? `${weather.temperature}°C` : '--'}
              </div>
              <div className="text-xs font-medium text-[#476788] leading-snug">
                {!isUnavailable ? weather.weatherDescription : 'Weather telemetry unavailable'}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#E2EFFA] text-xs">
            <div className="flex items-center space-x-2">
              <Droplets className="w-4 h-4 text-[#0EA5E9]" />
              <div>
                <div className="font-black text-[#0C2340] font-mono">
                  {!isUnavailable && Number.isFinite(weather.humidity) ? `${weather.humidity}%` : '--'}
                </div>
                <div className="text-[10px] text-[#5A7896]">Humidity</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Wind className="w-4 h-4 text-[#0284C7]" />
              <div>
                <div className="font-black text-[#0C2340] font-mono">
                  {!isUnavailable && Number.isFinite(weather.windSpeed) ? `${weather.windSpeed} km/h` : '--'}
                </div>
                <div className="text-[10px] text-[#5A7896]">Wind</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: AQI Trend (Last 24 Hours) + Health & Actionable Insights (Exact Panel 2 Bottom Row) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        {/* Left 7 Columns: AQI Trend Chart */}
        <div className="lg:col-span-7 rounded-3xl bg-white/85 backdrop-blur-md border border-white p-5 shadow-soft flex flex-col justify-between space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-sm sm:text-base font-extrabold text-[#0C2340]">
                AQI Trend (Last 24 Hours)
              </h3>
              <p className="text-[11px] text-[#5A7896]">
                {hourly.length > 0
                  ? `Lowest exposure window: ${cleanAirWindow.displayWindow} (↓ ~${cleanAirWindow.reductionVsPeakPercent}% vs peak)`
                  : 'Hourly curve unavailable for this snapshot'}
              </p>
            </div>
            {latestChartAqi != null && (
              <span className="px-2.5 py-1 rounded-full bg-[#0EA5E9] text-white font-mono text-xs font-black shadow-xs">
                {latestChartAqi}
              </span>
            )}
          </div>

          <div className="h-52 w-full">
            {hourly.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={hourly} margin={{ top: 10, right: 12, left: -18, bottom: 0 }}>
                  <defs>
                    <linearGradient id="skyAqiGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.35} />
                      <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
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
                  />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full rounded-2xl bg-[#F4F9FE] border border-[#D6E7F5] flex items-center justify-center text-xs text-[#5A7896]">
                Hourly trend unavailable — check connection or switch to a monitoring station.
              </div>
            )}
          </div>
        </div>

        {/* Right 5 Columns: Health & Actionable Insights */}
        <div className="lg:col-span-5 rounded-3xl bg-white/85 backdrop-blur-md border border-white p-5 shadow-soft flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm sm:text-base font-extrabold text-[#0C2340]">
              Health & Actionable Insights
            </h3>
            <span className="text-[10px] font-bold text-[#5A7896] capitalize">
              {userPreferences.vulnerabilityProfile.replace('_', ' ')}
            </span>
          </div>

          <div className="space-y-2.5 flex-1 flex flex-col justify-center">
            <button
              type="button"
              onClick={() => setActiveTab('exposure')}
              className="w-full p-3.5 rounded-2xl bg-[#F8FBFF] hover:bg-white border border-[#E2EFFA] flex items-center justify-between gap-3 transition-all cursor-pointer text-left"
            >
              <div className="flex items-center space-x-3 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                </div>
                <span className="text-xs font-bold text-[#0C2340] leading-snug">
                  {isSevere
                    ? 'Avoid outdoor exercise; shift workouts indoors'
                    : isPoor
                    ? 'Limit prolonged outdoor exertion today'
                    : 'Favorable for light outdoor activity'}
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#5A7896] shrink-0" />
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('commute')}
              className="w-full p-3.5 rounded-2xl bg-[#F8FBFF] hover:bg-white border border-[#E2EFFA] flex items-center justify-between gap-3 transition-all cursor-pointer text-left"
            >
              <div className="flex items-center space-x-3 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-4 h-4 text-rose-600" />
                </div>
                <span className="text-xs font-bold text-[#0C2340] leading-snug">
                  {hasPm25 && current.pm25 > 60
                    ? 'Wear an N95 mask & prefer AC Metro transit'
                    : 'Check cleaner commute route & cabin exposure'}
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#5A7896] shrink-0" />
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('indoor')}
              className="w-full p-3.5 rounded-2xl bg-[#F8FBFF] hover:bg-white border border-[#E2EFFA] flex items-center justify-between gap-3 transition-all cursor-pointer text-left"
            >
              <div className="flex items-center space-x-3 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[#059669]" />
                </div>
                <span className="text-xs font-bold text-[#0C2340] leading-snug">
                  {indoorRec?.windowAction === 'SEAL_COMPLETELY'
                    ? `Keep windows sealed (flush window: ${cleanAirWindow.displayWindow})`
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
