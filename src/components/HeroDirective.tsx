import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Sun, 
  ShieldCheck, 
  ArrowDownRight, 
  AlertTriangle, 
  Activity, 
  DoorClosed, 
  DoorOpen, 
  Train, 
  Sparkles,
  Info
} from 'lucide-react';

export const HeroDirective: React.FC = () => {
  const { telemetry, cleanAirWindow, userPreferences, livingPlan } = useApp();

  const pm = telemetry.current.pm25;
  const aqi = telemetry.current.aqi;
  const aqiCat = telemetry.current.aqiCategory;
  const primaryPollutant = telemetry.current.primaryPollutant || 'PM2.5';
  
  const isSevere = pm > 120 || aqi > 300;
  const isPoor = pm > 60 && pm <= 120;
  const isGood = pm <= 30 && aqi <= 50;
  const isModerate = !isSevere && !isPoor && !isGood;

  // Semantic color accents
  const theme = isSevere
    ? {
        ringColor: '#991B1B', // Severe crimson red
        glowClass: 'ambient-glow-severe',
        badgeBg: 'bg-rose-50 text-rose-800 border-rose-200',
        dialBg: 'bg-rose-50/40 border-rose-100',
        statusColor: 'text-rose-700',
        windowPillBg: 'bg-rose-50 text-rose-900 border-rose-200',
      }
    : isPoor
    ? {
        ringColor: '#EA580C', // Orange poor
        glowClass: 'ambient-glow-moderate',
        badgeBg: 'bg-orange-50 text-orange-800 border-orange-200',
        dialBg: 'bg-orange-50/40 border-orange-100',
        statusColor: 'text-orange-700',
        windowPillBg: 'bg-amber-50 text-amber-900 border-amber-200',
      }
    : isModerate
    ? {
        ringColor: '#D97706', // Moderate amber
        glowClass: 'ambient-glow-moderate',
        badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
        dialBg: 'bg-amber-50/40 border-amber-100',
        statusColor: 'text-amber-700',
        windowPillBg: 'bg-amber-50 text-amber-900 border-amber-200',
      }
    : {
        ringColor: '#2D6A4F', // Good forest green
        glowClass: 'ambient-glow-good',
        badgeBg: 'bg-forest-50 text-forest-700 border-forest-200',
        dialBg: 'bg-forest-50/50 border-forest-100',
        statusColor: 'text-forest-700',
        windowPillBg: 'bg-forest-50 text-forest-800 border-forest-200',
      };

  // SVG Radial Dial Math (500 scale)
  const normalizedAqi = Math.max(0, Math.min(500, aqi));
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  // Fill proportion around the circle (e.g. 80% arc)
  const strokeDashoffset = circumference - (normalizedAqi / 500) * circumference;

  // WHO guideline exceedance ratio (WHO 24-hr PM2.5 = 15 µg/m³)
  const whoRatio = +(pm / 15).toFixed(1);

  // Quick Action Directives
  const outdoorAction = isSevere
    ? { label: 'Outdoor Exercise', value: 'Shift Indoors', icon: <Activity className="w-3.5 h-3.5 text-rose-600" />, ok: false }
    : isPoor
    ? { label: 'Outdoor Exercise', value: 'Use Best Window', icon: <Activity className="w-3.5 h-3.5 text-amber-600" />, ok: null }
    : { label: 'Outdoor Exercise', value: 'Favorable Today', icon: <Activity className="w-3.5 h-3.5 text-forest-600" />, ok: true };

  const ventilationAction = pm > 60 || (telemetry.current.o3 && telemetry.current.o3 > 100)
    ? { label: 'Window Ventilation', value: 'Keep Sealed', icon: <DoorClosed className="w-3.5 h-3.5 text-rose-600" />, ok: false }
    : { label: 'Window Ventilation', value: 'Safe to Flush', icon: <DoorOpen className="w-3.5 h-3.5 text-forest-600" />, ok: true };

  const commuteAction = isSevere || isPoor
    ? { label: 'Commute Protocol', value: 'Prefer AC Metro / N95', icon: <Train className="w-3.5 h-3.5 text-sky-600" />, ok: true }
    : { label: 'Commute Protocol', value: 'Standard Transit', icon: <Train className="w-3.5 h-3.5 text-forest-600" />, ok: true };

  return (
    <div className={`relative overflow-hidden rounded-3xl bg-white border border-stone-200/80 p-6 sm:p-8 lg:p-10 shadow-soft transition-all ${theme.glowClass}`}>
      
      {/* Background Subtle Ambient Shape */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full opacity-30 pointer-events-none blur-3xl" style={{ backgroundColor: theme.ringColor }} />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
        
        {/* Left Column: Actionable Living Directive */}
        <div className="flex-1 space-y-4">
          
          {/* Top Pill Row: Clean Window Indicator & Context */}
          <div className="flex flex-wrap items-center gap-2">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${theme.windowPillBg} shadow-xs`}>
              <Sun className="w-3.5 h-3.5 mr-1.5 animate-spin-slow" />
              <span>{cleanAirWindow.statusLabel}: {cleanAirWindow.displayWindow}</span>
            </span>

            {cleanAirWindow.reductionVsPeakPercent > 0 && (
              <span className="inline-flex items-center text-xs font-medium text-slate-700 bg-stone-100/80 px-2.5 py-1 rounded-full border border-stone-200">
                <ArrowDownRight className="w-3.5 h-3.5 mr-1 text-emerald-600 font-bold" />
                <span>~{cleanAirWindow.reductionVsPeakPercent}% lower exposure vs peak</span>
              </span>
            )}

            <span className="text-[11px] text-slate-500 font-medium pl-1">
              Copernicus CAMS 0.25° Model Grid
            </span>
          </div>

          {/* Ozone Risk Warning Banner if active */}
          {cleanAirWindow.ozoneRiskWarning && (
            <div className="flex items-center space-x-2 text-xs bg-amber-50 text-amber-900 px-3 py-2 rounded-xl border border-amber-200 shadow-xs">
              <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
              <span className="text-[11px] font-medium leading-relaxed">{cleanAirWindow.ozoneRiskWarning}</span>
            </div>
          )}

          {/* Main Editorial Headline */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slatecharcoal-900 tracking-tight leading-tight">
              {livingPlan?.summaryTitle || (isSevere 
                ? `Severe Particulate Episode in ${telemetry.city} — Limit Outdoor Exertion`
                : `Acceptable Atmospheric Quality in ${telemetry.city}`)}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mt-2 font-normal">
              {livingPlan?.summaryBody || cleanAirWindow.convectiveReasoning}
            </p>
          </div>

          {/* 3 Quick Lifestyle Decision Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
            {[outdoorAction, ventilationAction, commuteAction].map((act, i) => (
              <div 
                key={i} 
                className="flex items-center space-x-2.5 p-2.5 sm:p-3 rounded-2xl bg-stone-50/80 border border-stone-200/60 hover:bg-white hover:border-stone-300 transition-all shadow-xs"
              >
                <div className="p-1.5 rounded-xl bg-white shadow-xs border border-stone-200/50">
                  {act.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                    {act.label}
                  </div>
                  <div className="text-xs font-bold text-slatecharcoal-900 truncate">
                    {act.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Vulnerability Profile Micro-Advisory */}
          <div className="flex items-start space-x-2.5 text-xs bg-stone-50/90 p-3 rounded-2xl border border-stone-200/80">
            <ShieldCheck className="w-4 h-4 text-forest-600 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <span className="font-semibold text-slatecharcoal-900 capitalize">
                {userPreferences.vulnerabilityProfile.replace('_', ' ')} Profile:
              </span>{' '}
              <span className="text-slate-700">
                {livingPlan?.vulnerabilityGuidance?.actionableStep ||
                  'Keep intense aerobic activities scheduled for the lower exposure window.'}
              </span>
            </div>
          </div>

        </div>

        {/* Right Column: Prominent Circular Atmospheric AQI Dial */}
        <div className="flex flex-col items-center lg:items-end justify-center shrink-0">
          <div className={`relative flex flex-col items-center justify-center p-6 rounded-3xl ${theme.dialBg} border shadow-soft w-64 h-64 sm:w-72 sm:h-72 transition-all`}>
            
            {/* SVG Circular Radial Progress */}
            <svg className="w-48 h-48 sm:w-52 sm:h-52 -rotate-90 transform" viewBox="0 0 140 140">
              {/* Background Track */}
              <circle
                cx="70"
                cy="70"
                r={radius}
                className="stroke-stone-200/80"
                strokeWidth="10"
                fill="none"
              />
              {/* Active AQI Arc */}
              <circle
                cx="70"
                cy="70"
                r={radius}
                stroke={theme.ringColor}
                strokeWidth="10"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="none"
                className="transition-all duration-1000 ease-out"
              />
            </svg>

            {/* Centered Dial Information */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                CPCB NAQI
              </span>
              <span className="text-4xl sm:text-5xl font-black text-slatecharcoal-900 tracking-tight my-0.5">
                {aqi}
              </span>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-extrabold ${theme.badgeBg}`}>
                {aqiCat}
              </span>
              <div className="text-[11px] text-slate-500 font-medium mt-1">
                Dominant: <strong className="text-slatecharcoal-900">{primaryPollutant}</strong>
              </div>
            </div>

            {/* Bottom Mini Metric Inside Dial */}
            <div className="mt-1 pt-1.5 border-t border-stone-200/60 w-full flex justify-between items-center text-[10px] text-slate-500 px-2">
              <span>PM2.5: <strong className="text-slatecharcoal-900 font-bold">{pm} µg/m³</strong></span>
              <span className="font-semibold text-slate-600">
                {whoRatio > 1 ? `${whoRatio}× WHO 24h` : 'WHO Compliant'}
              </span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
