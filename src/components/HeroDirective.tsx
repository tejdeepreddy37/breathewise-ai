import React from 'react';
import { useApp } from '../context/AppContext';
import { Activity, DoorClosed, DoorOpen, Train } from 'lucide-react';

export const HeroDirective: React.FC = () => {
  const { telemetry, cleanAirWindow } = useApp();

  const pm = telemetry.current.pm25;
  const aqi = telemetry.current.aqi;
  const aqiCat = telemetry.current.aqiCategory;
  const primaryPollutant = telemetry.current.primaryPollutant || 'PM2.5';
  const cityName = telemetry.city;

  const isSevere = pm > 120 || aqi > 300;
  const isPoor = pm > 60 && pm <= 120;
  const isGood = pm <= 30 && aqi <= 50;

  // Semantic color mapping
  const statusColor = isSevere ? '#DC2626' : isPoor ? '#EA580C' : isGood ? '#10B981' : '#D97706';
  const statusBg = isSevere ? 'bg-rose-500' : isPoor ? 'bg-orange-500' : isGood ? 'bg-emerald-500' : 'bg-amber-500';

  // SVG Radial Dial Math (500 scale)
  const normalizedAqi = Math.max(0, Math.min(500, aqi));
  const radius = 62;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (normalizedAqi / 500) * circumference;

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-stone-50 via-white to-stone-50 border border-stone-200/80 p-6 sm:p-8 lg:p-10 shadow-sm">
      
      {/* 1. Atmospheric Foliage & Monument Silhouette Background Graphic (Matches Image 2) */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-25 pointer-events-none -ml-8 -mt-8">
        {/* Soft green botanical leafy tree overlay */}
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-emerald-800">
          <path
            d="M0,0 Q60,20 80,70 T20,120 Q0,80 0,0 Z M40,0 Q100,30 110,80 T60,140 Q30,90 40,0 Z M80,0 Q140,40 140,90 T90,150 Q60,90 80,0 Z"
            fill="currentColor"
            opacity="0.35"
          />
        </svg>
      </div>

      {/* India Gate / Monument Silhouette in Background Center (Matches Image 2) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-32 opacity-15 pointer-events-none flex items-end justify-center">
        <svg viewBox="0 0 160 80" fill="none" className="w-full h-full text-stone-700">
          {/* Monument Archway Silhouette */}
          <path
            d="M20,80 L20,30 L30,25 L30,15 L40,15 L40,80 M120,80 L120,15 L130,15 L130,25 L140,30 L140,80 M40,25 Q80,20 120,25 M40,35 Q80,15 120,35 L120,80 L100,80 L100,50 Q80,35 60,50 L60,80 L40,80 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* 2. Main 3-Column Hero Grid: Left Text, Center Radial Dial, Right Quick Decision Cards */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
        
        {/* Left Column: Headline and Context */}
        <div className="flex-1 text-center lg:text-left space-y-2.5 max-w-md">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slatecharcoal-900 tracking-tight leading-tight">
            {isSevere
              ? 'Severe Particulate Episode in '
              : isPoor
              ? 'Elevated Air Pollution in '
              : 'Acceptable Air Quality in '}
            <span style={{ color: statusColor }}>{cityName}</span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {isSevere
              ? 'Air quality is severely degraded due to high PM2.5 and stagnant morning conditions. Limit outdoor exertion and keep indoor spaces sealed.'
              : isPoor
              ? 'Moderate to high particulate levels observed. Optimize outdoor activity for the clean-air convective valley.'
              : 'Atmospheric conditions are favorable for outdoor recreation and controlled residential ventilation.'}
          </p>
        </div>

        {/* Center Column: Circular Radial AQI Gauge (Exact Match to Image 2) */}
        <div className="shrink-0 flex items-center justify-center my-2 lg:my-0">
          <div className="relative flex items-center justify-center w-56 h-56 sm:w-64 sm:h-64">
            
            {/* Soft Ambient Radial Aura Glow */}
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-35"
              style={{ backgroundColor: statusColor }}
            />

            {/* SVG Circular Radial Progress */}
            <svg className="w-52 h-52 sm:w-60 sm:h-60 -rotate-90 transform" viewBox="0 0 160 160">
              {/* Outer Subtle Aura Track */}
              <circle
                cx="80"
                cy="80"
                r={radius + 4}
                stroke={statusColor}
                strokeWidth="1.5"
                strokeOpacity="0.25"
                fill="none"
              />
              {/* Background Track */}
              <circle
                cx="80"
                cy="80"
                r={radius}
                className="stroke-stone-200"
                strokeWidth="9"
                fill="none"
              />
              {/* Active Progress Arc */}
              <circle
                cx="80"
                cy="80"
                r={radius}
                stroke={statusColor}
                strokeWidth="9"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="none"
                className="transition-all duration-1000 ease-out"
                style={{
                  filter: `drop-shadow(0 0 6px ${statusColor}80)`,
                }}
              />
            </svg>

            {/* Centered Dial Information */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                CPCB NAQI
              </span>
              <span className="text-4xl sm:text-5xl font-black text-slatecharcoal-900 tracking-tight my-0.5 font-mono">
                {aqi}
              </span>
              <span className={`px-3 py-0.5 rounded-full text-xs font-black text-white ${statusBg} shadow-xs`}>
                {aqiCat}
              </span>
              <span className="text-[11px] text-slate-500 font-medium mt-1">
                Dominant: {primaryPollutant}
              </span>
            </div>

          </div>
        </div>

        {/* Right Column: 3 Stacked White Decision Cards (Exact Match to Image 2) */}
        <div className="w-full lg:w-72 flex flex-col space-y-2.5">
          
          {/* Card 1: Outdoor Exercise */}
          <div className="flex items-center space-x-3 p-3.5 rounded-2xl bg-white border border-stone-200/80 shadow-xs hover:shadow-sm transition-all">
            <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100 shrink-0">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Outdoor Exercise
              </div>
              <div className="text-xs font-extrabold text-rose-600">
                {isSevere ? 'Shift Indoors' : isPoor ? 'Use Best Window' : 'Favorable Today'}
              </div>
            </div>
          </div>

          {/* Card 2: Window Ventilation */}
          <div className="flex items-center space-x-3 p-3.5 rounded-2xl bg-white border border-stone-200/80 shadow-xs hover:shadow-sm transition-all">
            <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100 shrink-0">
              {pm > 60 ? <DoorClosed className="w-4 h-4" /> : <DoorOpen className="w-4 h-4" />}
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Window Ventilation
              </div>
              <div className="text-xs font-extrabold text-rose-600">
                {pm > 60 ? 'Keep Sealed' : 'Safe to Flush'}
              </div>
            </div>
          </div>

          {/* Card 3: Commute Protection */}
          <div className="flex items-center space-x-3 p-3.5 rounded-2xl bg-white border border-stone-200/80 shadow-xs hover:shadow-sm transition-all">
            <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100 shrink-0">
              <Train className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Commute Protection
              </div>
              <div className="text-xs font-extrabold text-teal-700">
                {isSevere || isPoor ? 'Prefer AC Metro / N95' : 'Standard Transit'}
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
