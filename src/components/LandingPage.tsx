import React, { Suspense, lazy } from 'react';
import { useApp } from '../context/AppContext';
import { ErrorBoundary } from './ErrorBoundary';
import { INDIAN_CITIES_PRESETS } from '../data/cities';
import { getCpcbCategory, getCpcbSemanticColors } from '../engines/cpcbAqi';
import { 
  Leaf, 
  ShieldAlert, 
  ChevronDown, 
  ArrowRight,
  Globe2,
} from 'lucide-react';

const InteractiveGlobe = lazy(() =>
  import('./InteractiveGlobe').then((m) => ({ default: m.InteractiveGlobe }))
);

export const LandingPage: React.FC = () => {
  const { setActiveTab, selectedCityId, selectCity, setIsTransparencyOpen, telemetry } = useApp();

  const activeCity = INDIAN_CITIES_PRESETS.find((c) => c.id === selectedCityId);
  const aqiVal = typeof telemetry.current.aqi === 'number' && Number.isFinite(telemetry.current.aqi) ? telemetry.current.aqi : 78;
  const aqiCat = telemetry.current.aqiCategory || getCpcbCategory(aqiVal);
  const semanticColors = getCpcbSemanticColors(aqiVal, aqiCat);
  const dominant = telemetry.current.primaryPollutant || 'PM2.5';
  const windSpd = telemetry.weather?.windSpeed ?? 13.2;
  const riskPercent = Math.min(99, Math.max(8, Math.round((aqiVal / 500) * 100)));
  const locationLabel = telemetry.city || activeCity?.name || 'India';

  const now = new Date();
  const formattedDate = `${now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })} • ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

  const handleLaunchApp = (cityId?: string) => {
    if (cityId) selectCity(cityId);
    setActiveTab('overview');
  };

  return (
    <div className="min-h-screen bg-[#070D18] text-slate-100 flex flex-col font-sans relative overflow-x-hidden selection:bg-emerald-500 selection:text-slate-900">
      
      {/* 1. Cinematic Atmospheric Background with Mountain Horizon (Matches Image 1) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060B16] via-[#091528] to-[#040812] pointer-events-none" />
      
      {/* Mountain & Cloud Silhouette at bottom horizon (Authentic Reference 1 Landscape) */}
      <div className="absolute bottom-0 inset-x-0 h-72 sm:h-80 pointer-events-none z-0 overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}images/mountain-clouds.png`}
          alt="Atmospheric landscape clouds"
          className="w-full h-full object-cover object-bottom opacity-85 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040812] via-transparent to-transparent opacity-90" />
      </div>

      {/* 2. Top Navigation Bar (Exact match to Image 1) */}
      <header className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Logo */}
          <div className="flex items-center space-x-2.5 cursor-pointer" onClick={() => handleLaunchApp()}>
            {/* Green Cloud Icon with Leaf Cutout */}
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 shadow-lg shadow-emerald-500/25">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
            </div>
            <span className="font-extrabold text-xl text-white tracking-tight">
              BreatheWise <span className="text-emerald-400">AI</span>
            </span>
          </div>

          {/* Center Navigation Links with Active Green Pill */}
          <nav className="hidden lg:flex items-center space-x-1.5 p-1 rounded-full bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('landing')}
              className="px-4 py-1.5 rounded-full text-xs font-bold bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20 cursor-pointer"
            >
              Air Quality
            </button>
            <button
              onClick={() => handleLaunchApp()}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Air Monitors
            </button>
            <button
              onClick={() => handleLaunchApp()}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Discover
            </button>
            <button
              onClick={() => setIsTransparencyOpen(true)}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => setIsTransparencyOpen(true)}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Technology
            </button>
          </nav>

          {/* Right Action CTA */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => handleLaunchApp()}
              className="flex items-center space-x-1.5 px-5 py-2.5 rounded-full text-xs font-extrabold bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 transition-all shadow-lg shadow-emerald-500/25 hover:scale-[1.02] cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

        </div>
      </header>

      {/* 3. Main Hero Viewport (Split Layout: Left Intelligence Cards, Right Cinematic 3D Earth) */}
      <main className="relative z-20 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        
        {/* Left Column: Typography, Time Context & Glass Intelligence Cards */}
        <div className="w-full lg:w-[440px] flex flex-col justify-center space-y-4 sm:space-y-4.5 z-30 text-left">
          
          {/* Small Top Tag */}
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400/90 flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>GLOBAL AIR INTELLIGENCE</span>
          </div>

          {/* Headline (Exact match to Image 1: "Air Quality Index" with Index in Green) */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.08]">
            Air Quality <span className="text-emerald-400">Index</span>
          </h1>

          {/* Date, Time & Location Dropdown Line (Image 1 match) */}
          <div className="flex items-center space-x-3 text-xs text-slate-300 pt-0.5">
            <span className="w-1 h-4 bg-emerald-500 rounded-full shrink-0" />
            <span className="font-medium font-mono text-slate-300">{formattedDate}</span>
            <span className="text-slate-600">|</span>
            <div className="relative inline-flex items-center space-x-1 font-semibold text-white bg-slate-900/60 px-2.5 py-1 rounded-lg border border-slate-700/60 cursor-pointer" onClick={() => handleLaunchApp()}>
              <span>Location: {locationLabel}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </div>
          </div>

          {/* Card 1: "Live Air Snapshot" (Exact match to Image 1) */}
          <div className="relative p-5 rounded-3xl bg-slate-900/75 border border-emerald-500/35 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-emerald-400/60 transition-all">
            {/* Glowing Green Wave Accent Graphic in top-right */}
            <div className="absolute top-2 right-2 w-32 h-20 opacity-70 pointer-events-none">
              <svg viewBox="0 0 120 60" fill="none" className="w-full h-full">
                <path
                  d="M0 30 Q 30 10, 60 30 T 120 30"
                  stroke="#10B981"
                  strokeWidth="3"
                  fill="none"
                  className="animate-pulse"
                />
                <path
                  d="M0 38 Q 30 18, 60 38 T 120 38"
                  stroke="#059669"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.6"
                />
              </svg>
            </div>

            {/* Header */}
            <div className="flex items-center space-x-2 text-xs font-bold text-white mb-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                <Leaf className="w-3.5 h-3.5" />
              </div>
              <span>{telemetry.metadata.isLive ? 'CAMS Regional Air Snapshot' : 'Regional Baseline Snapshot'}</span>
            </div>

            {/* Middle Row: Massive AQI Number & Status Badge */}
            <div className="flex items-baseline space-x-3 my-2">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">AQI</span>
                <span className={`text-5xl font-black tracking-tight font-mono ${semanticColors.textClass}`}>
                  {aqiVal}
                </span>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold font-sans shadow-md ${semanticColors.badgeClass}`}>
                {aqiCat}
              </span>
            </div>

            {/* Bottom Row: Dominant Pollutant & Wind */}
            <div className="flex items-center justify-between text-xs text-slate-300 pt-3 border-t border-slate-800/80 font-medium">
              <div>
                <span className="text-slate-400">Dominant Pollutant:</span>{' '}
                <strong className="text-white">{dominant}</strong>
              </div>
              <div>
                <span className="text-slate-400">Wind:</span>{' '}
                <strong className="text-white font-mono">{windSpd} km/h</strong>
              </div>
            </div>
          </div>

          {/* Card 2: "Risk of Pollution" (Exact match to Image 1) */}
          <div className="relative p-5 rounded-3xl bg-slate-900/75 border border-slate-700/60 backdrop-blur-xl shadow-2xl overflow-hidden hover:border-slate-600 transition-all">
            {/* Top Row: Title & Details Button */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2 text-xs font-bold text-white">
                <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/40">
                  <ShieldAlert className="w-3.5 h-3.5" />
                </div>
                <span>Risk of Pollution</span>
              </div>

              <button
                onClick={() => handleLaunchApp()}
                className="flex items-center space-x-1 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors shadow-md shadow-amber-500/20 cursor-pointer"
              >
                <span>Details</span>
                <span className="text-xs">→</span>
              </button>
            </div>

            {/* Middle Row: Large Risk % & Stepped Colored Bar Chart (Matches Image 1) */}
            <div className="flex items-center justify-between my-2">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Risk</span>
                <span className="text-3xl font-black text-amber-400 tracking-tight font-mono">
                  {riskPercent}%
                </span>
              </div>

              {/* Multi-step stepped risk chart (green -> yellow -> orange) matching Image 1 */}
              <div className="flex items-end space-x-1.5 h-8">
                {[
                  { h: 25, color: 'bg-emerald-500' },
                  { h: 32, color: 'bg-emerald-400' },
                  { h: 40, color: 'bg-emerald-400' },
                  { h: 48, color: 'bg-lime-400' },
                  { h: 56, color: 'bg-yellow-400' },
                  { h: 64, color: 'bg-amber-400' },
                  { h: 72, color: 'bg-amber-500' },
                  { h: 80, color: 'bg-orange-500' },
                  { h: 90, color: 'bg-orange-600' },
                  { h: 100, color: 'bg-red-500' },
                ].map((bar, idx) => (
                  <div
                    key={idx}
                    className={`w-2 sm:w-2.5 rounded-xs ${bar.color} transition-all shadow-xs`}
                    style={{ height: `${bar.h}%`, opacity: 0.95 }}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Row: Risk reason (Exact Image 1 match) */}
            <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-800/80 leading-relaxed">
              Moderate risk due to weather conditions
            </p>
          </div>

          {/* Social Share Icons (Bottom Left match to Image 1) */}
          <div className="flex items-center space-x-2 pt-1 text-slate-400">
            <div className="w-8 h-8 rounded-full bg-slate-900/80 border border-slate-700/80 flex items-center justify-center hover:text-white cursor-pointer transition-colors">
              <span className="text-xs font-bold">f</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-900/80 border border-slate-700/80 flex items-center justify-center hover:text-white cursor-pointer transition-colors">
              <span className="text-xs font-bold">w</span>
            </div>
          </div>

        </div>

        {/* Right Column: Large Interactive 3D Earth Globe (Lazy-loaded + WebGL ErrorBoundary) */}
        <div className="w-full lg:flex-1 flex items-center justify-center relative">
          <ErrorBoundary
            fallback={
              <div className="w-full max-w-md p-8 rounded-3xl bg-slate-900/80 border border-slate-700/80 text-center space-y-3">
                <Globe2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <div className="text-sm font-bold text-white">3D Globe Unavailable on This Device</div>
                <p className="text-xs text-slate-400">
                  WebGL rendering is unavailable or disabled. You can still access all air intelligence modules directly.
                </p>
                <button
                  onClick={() => handleLaunchApp()}
                  className="px-4 py-2 rounded-full bg-emerald-500 text-slate-950 text-xs font-extrabold cursor-pointer"
                >
                  Open Air Intelligence Dashboard →
                </button>
              </div>
            }
          >
            <Suspense
              fallback={
                <div className="w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] rounded-full bg-slate-900/60 border border-emerald-500/20 flex flex-col items-center justify-center space-y-2 animate-pulse">
                  <Globe2 className="w-8 h-8 text-emerald-400 animate-spin" />
                  <span className="text-xs text-slate-400 font-medium">Loading 3D Atmospheric Globe...</span>
                </div>
              }
            >
              <InteractiveGlobe
                onExploreCity={(cityId) => handleLaunchApp(cityId)}
                activeView="globe"
                onToggleView={(view) => {
                  if (view === 'map') handleLaunchApp();
                }}
              />
            </Suspense>
          </ErrorBoundary>
        </div>

      </main>

    </div>
  );
};
