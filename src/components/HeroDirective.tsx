import React from 'react';
import { useApp } from '../context/AppContext';
import { Activity, DoorClosed, DoorOpen, Train } from 'lucide-react';
import { getCpcbCategory, getCpcbSemanticColors } from '../engines/cpcbAqi';

export const HeroDirective: React.FC = () => {
  const { telemetry, cleanAirWindow } = useApp();

  const cityName = telemetry.city.includes('—') ? telemetry.city.split('—')[0].trim() : telemetry.city;

  const pm = typeof telemetry.current.pm25 === 'number' && Number.isFinite(telemetry.current.pm25) ? telemetry.current.pm25 : 0;
  const aqi = typeof telemetry.current.aqi === 'number' && Number.isFinite(telemetry.current.aqi) ? telemetry.current.aqi : 0;
  const aqiCat = telemetry.current.aqiCategory || getCpcbCategory(aqi);
  const primaryPollutant = telemetry.current.primaryPollutant || 'PM2.5';

  const isSevere = aqiCat === 'Severe' || aqiCat === 'Very Poor' || aqi >= 301;
  const isPoor = aqiCat === 'Poor' || (aqi >= 201 && aqi <= 300);
  const isModerate = aqiCat === 'Moderate' || (aqi >= 101 && aqi <= 200);
  const isSatisfactory = aqiCat === 'Satisfactory' || (aqi >= 51 && aqi <= 100);
  const isGood = aqiCat === 'Good' || aqi <= 50;

  // Physical ventilation safety threshold: PM2.5 > 60 µg/m³ or Ozone > 100 µg/m³
  const isOzoneUnsafe = typeof telemetry.current.o3 === 'number' && telemetry.current.o3 > 100;
  const shouldSealWindows = pm > 60 || isOzoneUnsafe;

  // Canonical semantic color mapping from CPCB engine
  const colors = getCpcbSemanticColors(aqi, aqiCat);
  const statusColor = colors.hexColor;
  const statusBg = colors.badgeClass;

  // SVG Radial Dial Math (500 scale, compact proportions matching Reference Image 2)
  const normalizedAqi = Math.max(0, Math.min(500, aqi));
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (normalizedAqi / 500) * circumference;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-stone-200/80 p-5 sm:p-6 lg:p-7 shadow-xs">
      
      {/* 1. Unified Scenic Atmospheric Backdrop (Matches Reference Image 2: Foliage, Sky, Sunrise Haze, India Gate, Skyline, Birds) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-scenic-backdrop.png`}
          alt="Atmospheric scenic landscape"
          className={`w-full h-full object-cover object-center transition-opacity duration-500 ${
            telemetry.city.toLowerCase().includes('delhi') ? 'opacity-100' : 'opacity-40'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/20" />
      </div>

      {/* 2. Main 3-Column Hero Grid: Left Text, Center Radial Dial, Right Quick Decision Cards */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-6">
        
        {/* Left Column: Headline and Context (Desktop only, matches Reference Image 2 layout) */}
        <div className="hidden lg:block flex-1 text-left space-y-2 max-w-sm sm:max-w-md">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slatecharcoal-900 tracking-tight leading-tight">
            {isSevere
              ? 'Severe Particulate Episode in '
              : isPoor
              ? 'Elevated Air Pollution in '
              : 'Acceptable Air Quality in '}
            <span style={{ color: statusColor }}>{cityName}</span>
          </h1>

          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
            {isSevere
              ? 'Air quality is severely degraded due to high PM2.5 and stagnant morning conditions. Limit outdoor exertion and keep indoor spaces sealed.'
              : isPoor
              ? 'Moderate to high particulate levels observed. Optimize outdoor activity for the clean-air convective valley.'
              : 'Atmospheric conditions are favorable for outdoor recreation and controlled residential ventilation.'}
          </p>
        </div>

        {/* Center Column: Circular Radial AQI Gauge (Exact Match to Image 2) */}
        <div className="shrink-0 flex items-center justify-center my-1 lg:my-0">
          <div className="relative flex items-center justify-center w-44 h-44 sm:w-48 sm:h-48">
            
            {/* Soft Ambient Radial Aura Glow */}
            <div
              className="absolute inset-0 rounded-full blur-xl opacity-35"
              style={{ backgroundColor: statusColor }}
            />

            {/* SVG Circular Radial Progress */}
            <svg className="w-40 h-40 sm:w-44 sm:h-44 -rotate-90 transform" viewBox="0 0 140 140">
              {/* Outer Subtle Aura Track */}
              <circle
                cx="70"
                cy="70"
                r={radius + 3}
                stroke={statusColor}
                strokeWidth="1.2"
                strokeOpacity="0.25"
                fill="none"
              />
              {/* Background Track */}
              <circle
                cx="70"
                cy="70"
                r={radius}
                className="stroke-stone-200"
                strokeWidth="8"
                fill="none"
              />
              {/* Active Progress Arc */}
              <circle
                cx="70"
                cy="70"
                r={radius}
                stroke={statusColor}
                strokeWidth="8"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="none"
                className="transition-all duration-1000 ease-out"
                style={{
                  filter: `drop-shadow(0 0 5px ${statusColor}80)`,
                }}
              />
            </svg>

            {/* Centered Dial Information */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none">
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                CPCB NAQI
              </span>
              <span className="text-3xl sm:text-4xl font-black text-slatecharcoal-900 tracking-tight my-0.5 font-mono">
                {aqi}
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-black text-white ${statusBg} shadow-2xs`}>
                {aqiCat}
              </span>
              <span className="text-[10px] text-slate-500 font-medium mt-0.5">
                Dominant: {primaryPollutant}
              </span>
            </div>

          </div>
        </div>

        {/* Right Column: 3 Decision Cards (Horizontal 3-column row on mobile, stacked on desktop - Exact Image 2 Match) */}
        <div className="w-full lg:w-64 grid grid-cols-3 lg:flex lg:flex-col gap-2 lg:space-y-2 lg:gap-0">
          
          {/* Card 1: Outdoor Exercise */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-2.5 p-2 sm:p-2.5 rounded-xl bg-white border border-stone-200/80 shadow-2xs hover:shadow-xs transition-all text-center lg:text-left min-h-[58px] justify-center">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center border shrink-0 mb-1 lg:mb-0 ${
              isSevere || isPoor ? 'bg-rose-50 text-rose-600 border-rose-100' : 'bg-emerald-50 text-emerald-600 border-emerald-100'
            }`}>
              <Activity className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="hidden lg:block text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                Outdoor Exercise
              </div>
              <div className={`text-[11px] sm:text-xs font-extrabold ${isSevere || isPoor ? 'text-rose-600' : 'text-emerald-700'}`}>
                {isSevere ? 'Shift Indoors' : isPoor ? 'Use Best Window' : 'Favorable Today'}
              </div>
            </div>
          </div>

          {/* Card 2: Window Ventilation */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-2.5 p-2 sm:p-2.5 rounded-xl bg-white border border-stone-200/80 shadow-2xs hover:shadow-xs transition-all text-center lg:text-left min-h-[58px] justify-center">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center border shrink-0 mb-1 lg:mb-0 ${
              shouldSealWindows ? 'bg-orange-50 text-orange-600 border-orange-100' : 'bg-emerald-50 text-emerald-600 border-emerald-100'
            }`}>
              {shouldSealWindows ? <DoorClosed className="w-3.5 h-3.5" /> : <DoorOpen className="w-3.5 h-3.5" />}
            </div>
            <div>
              <div className="hidden lg:block text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                Window Ventilation
              </div>
              <div className={`text-[11px] sm:text-xs font-extrabold ${shouldSealWindows ? 'text-rose-600' : 'text-emerald-700'}`}>
                {shouldSealWindows ? 'Keep Sealed' : 'Safe to Flush'}
              </div>
            </div>
          </div>

          {/* Card 3: Commute Protection */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-2.5 p-2 sm:p-2.5 rounded-xl bg-white border border-stone-200/80 shadow-2xs hover:shadow-xs transition-all text-center lg:text-left min-h-[58px] justify-center">
            <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100 shrink-0 mb-1 lg:mb-0">
              <Train className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="hidden lg:block text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                Commute Protection
              </div>
              <div className="text-[11px] sm:text-xs font-extrabold text-teal-700">
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
