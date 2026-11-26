import React from 'react';
import { useApp } from '../context/AppContext';
import { Activity, DoorClosed, DoorOpen, Train } from 'lucide-react';
import { getCpcbCategory, getCpcbSemanticColors } from '../engines/cpcbAqi';

export const HeroDirective: React.FC = () => {
  const { telemetry } = useApp();

  const cityName = telemetry.city.includes('—') ? telemetry.city.split('—')[0].trim() : telemetry.city;

  const pm = typeof telemetry.current.pm25 === 'number' && Number.isFinite(telemetry.current.pm25) ? telemetry.current.pm25 : 0;
  const aqi = typeof telemetry.current.aqi === 'number' && Number.isFinite(telemetry.current.aqi) ? telemetry.current.aqi : 0;
  const aqiCat = telemetry.current.aqiCategory || getCpcbCategory(aqi);
  const primaryPollutant = telemetry.current.primaryPollutant || 'PM2.5';

  const isSevere = aqiCat === 'Severe' || aqiCat === 'Very Poor' || aqi >= 301;
  const isPoor = aqiCat === 'Poor' || (aqi >= 201 && aqi <= 300);
  const isModerate = aqiCat === 'Moderate' || (aqi >= 101 && aqi <= 200);

  // Physical ventilation safety threshold: PM2.5 > 60 µg/m³ or Ozone > 100 µg/m³
  const isOzoneUnsafe = typeof telemetry.current.o3 === 'number' && telemetry.current.o3 > 100;
  const shouldSealWindows = pm > 60 || isOzoneUnsafe;

  const colors = getCpcbSemanticColors(aqi, aqiCat);
  const statusColor = colors.hexColor;
  const statusBg = colors.badgeClass;

  const normalizedAqi = Math.max(0, Math.min(500, aqi));
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (normalizedAqi / 500) * circumference;

  return (
    <div className="relative overflow-hidden rounded-3xl bg-white/85 backdrop-blur-xl border border-[#CBE0F2] p-5 sm:p-6 lg:p-7 shadow-soft">
      {/* Soft Cloud & Sky Atmospheric Backdrop */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/sky-clouds-backdrop.png`}
          alt=""
          className="w-full h-full object-cover object-bottom opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F0F8FE]/85 via-white/40 to-[#F0F8FE]/75" />
      </div>

      {/* Main 3-Column Hero Grid: Left Text, Center Radial Dial, Right Decision Cards */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-6">
        {/* Left Column: Headline and Context */}
        <div className="flex-1 text-center lg:text-left space-y-2 max-w-md">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2B5B84]">
            AIR INTELLIGENCE OVERVIEW
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0C2D57] tracking-tight leading-tight">
            {isSevere
              ? 'Severe Particulate Episode in '
              : isPoor
              ? 'Elevated Air Pollution in '
              : isModerate
              ? 'Moderate Air Quality in '
              : 'Acceptable Air Quality in '}
            <span style={{ color: isSevere || isPoor ? statusColor : '#0284C7' }}>{cityName}</span>
          </h1>

          <p className="text-xs sm:text-[13px] text-[#365779] leading-relaxed font-normal">
            {isSevere
              ? `Air quality is severely degraded (NAQI ${aqi}, driven by ${primaryPollutant}). Limit outdoor exertion and keep indoor spaces sealed.`
              : isPoor
              ? `Elevated pollution observed (NAQI ${aqi}, driven by ${primaryPollutant}). Optimize outdoor activity for the clean-air convective valley.`
              : isModerate
              ? `Moderate air quality (NAQI ${aqi}, driven by ${primaryPollutant}). Sensitive groups should reduce prolonged outdoor exertion.`
              : 'Atmospheric conditions are favorable for outdoor recreation and controlled residential ventilation.'}
          </p>
        </div>

        {/* Center Column: Circular Radial AQI Gauge */}
        <div className="shrink-0 flex items-center justify-center my-1 lg:my-0">
          <div className="relative flex items-center justify-center w-44 h-44 sm:w-48 sm:h-48">
            <div
              className="absolute inset-3 rounded-full bg-white/90 shadow-float border border-[#E0EFFA]"
            />

            <svg className="relative z-10 w-40 h-40 sm:w-44 sm:h-44 -rotate-90 transform" viewBox="0 0 140 140">
              <circle
                cx="70"
                cy="70"
                r={radius}
                className="stroke-[#E2EFFA]"
                strokeWidth="9"
                fill="none"
              />
              <circle
                cx="70"
                cy="70"
                r={radius}
                stroke={statusColor}
                strokeWidth="9"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="none"
                className="transition-all duration-1000 ease-out"
                style={{
                  filter: `drop-shadow(0 0 4px ${statusColor}60)`,
                }}
              />
            </svg>

            {/* Centered Dial Information */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center select-none">
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#5A7896]">
                CPCB NAQI
              </span>
              <span className="text-3xl sm:text-4xl font-black text-[#0C2D57] tracking-tight my-0.5 font-mono">
                {aqi}
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-black text-white ${statusBg} shadow-2xs`}>
                {aqiCat}
              </span>
              <span
                className="text-[10px] text-[#476788] font-medium mt-1"
                title="CPCB NAQI is determined by the maximum sub-index across monitored pollutants"
              >
                Driven by <strong className="text-[#0C2D57] font-bold">{primaryPollutant}</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: 3 Decision Cards */}
        <div className="w-full lg:w-64 grid grid-cols-3 lg:flex lg:flex-col gap-2 lg:space-y-2.5 lg:gap-0">
          {/* Card 1: Outdoor Exercise */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-3 p-2.5 sm:p-3 rounded-2xl bg-white/95 border border-[#CBE0F2] shadow-2xs text-center lg:text-left min-h-[58px] justify-center lg:justify-start">
            <div
              className={`w-8 h-8 rounded-xl flex items-center justify-center border shrink-0 mb-1 lg:mb-0 ${
                isSevere || isPoor
                  ? 'bg-rose-50 text-rose-600 border-rose-200'
                  : 'bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]'
              }`}
            >
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <div className="hidden lg:block text-[10px] font-bold text-[#5A7896] uppercase tracking-wider">
                Outdoor Exercise
              </div>
              <div className={`text-[11px] sm:text-xs font-extrabold ${isSevere || isPoor ? 'text-rose-600' : 'text-[#047857]'}`}>
                {isSevere ? 'Shift Indoors' : isPoor ? 'Use Best Window' : 'Favorable Today'}
              </div>
            </div>
          </div>

          {/* Card 2: Window Ventilation */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-3 p-2.5 sm:p-3 rounded-2xl bg-white/95 border border-[#CBE0F2] shadow-2xs text-center lg:text-left min-h-[58px] justify-center lg:justify-start">
            <div
              className={`w-8 h-8 rounded-xl flex items-center justify-center border shrink-0 mb-1 lg:mb-0 ${
                shouldSealWindows
                  ? 'bg-orange-50 text-orange-600 border-orange-200'
                  : 'bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]'
              }`}
            >
              {shouldSealWindows ? <DoorClosed className="w-4 h-4" /> : <DoorOpen className="w-4 h-4" />}
            </div>
            <div>
              <div className="hidden lg:block text-[10px] font-bold text-[#5A7896] uppercase tracking-wider">
                Window Ventilation
              </div>
              <div className={`text-[11px] sm:text-xs font-extrabold ${shouldSealWindows ? 'text-rose-600' : 'text-[#047857]'}`}>
                {shouldSealWindows ? 'Keep Sealed' : 'Safe to Flush'}
              </div>
            </div>
          </div>

          {/* Card 3: Commute Protection */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-3 p-2.5 sm:p-3 rounded-2xl bg-white/95 border border-[#CBE0F2] shadow-2xs text-center lg:text-left min-h-[58px] justify-center lg:justify-start">
            <div className="w-8 h-8 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center border border-[#BAE6FD] shrink-0 mb-1 lg:mb-0">
              <Train className="w-4 h-4" />
            </div>
            <div>
              <div className="hidden lg:block text-[10px] font-bold text-[#5A7896] uppercase tracking-wider">
                Commute Protection
              </div>
              <div className="text-[11px] sm:text-xs font-extrabold text-[#0369A1]">
                {isSevere || isPoor ? (
                  <>
                    <span className="lg:hidden">AC Metro / N95</span>
                    <span className="hidden lg:inline">Prefer AC Metro / N95</span>
                  </>
                ) : (
                  'Standard Transit'
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
