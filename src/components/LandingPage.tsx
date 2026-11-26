import React, { Suspense, lazy } from 'react';
import { useApp } from '../context/AppContext';
import { ErrorBoundary } from './ErrorBoundary';
import { ArrowRight, Globe2 } from 'lucide-react';

const InteractiveGlobe = lazy(() =>
  import('./InteractiveGlobe').then((m) => ({ default: m.InteractiveGlobe }))
);

export const LandingPage: React.FC = () => {
  const { setActiveTab, selectCity } = useApp();

  const handleEnterApp = (cityId?: string) => {
    if (cityId) selectCity(cityId);
    setActiveTab('overview');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2F8FD] via-[#DDF0FC] to-[#9BD3FA] text-[#0B223E] flex flex-col font-sans relative overflow-hidden selection:bg-[#BAE6FD] selection:text-[#0B223E]">
      {/* Luminous Sky Atmosphere & Soft Cloud/Mountain Horizon */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft sunlit center-left atmospheric radial glow */}
        <div className="absolute -top-24 left-1/4 w-[680px] h-[680px] rounded-full bg-white/65 blur-3xl" />

        {/* Fluffy White Clouds Backdrop */}
        <img
          src={`${import.meta.env.BASE_URL}images/sky-clouds-backdrop.png`}
          alt=""
          className="w-full h-full object-cover object-bottom opacity-80 mix-blend-screen"
        />

        {/* Subtle Misty Blue Mountain Ridge along Bottom Horizon */}
        <svg
          className="absolute bottom-0 inset-x-0 w-full h-24 sm:h-32 text-[#8FC2E8]/45"
          preserveAspectRatio="none"
          viewBox="0 0 1440 140"
          fill="currentColor"
        >
          <path d="M0,140 L0,96 Q120,62 240,86 T480,74 T760,92 T1040,68 T1280,82 L1440,56 L1440,140 Z" />
          <path
            d="M0,140 L0,112 Q180,82 360,104 T720,96 T1100,88 T1440,94 L1440,140 Z"
            fill="#FFFFFF"
            fillOpacity="0.45"
          />
        </svg>
      </div>

      {/* Minimal Top-Left Brand Header */}
      <header className="relative z-30 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-6 sm:pt-8">
        <div className="flex items-center justify-between h-11">
          <button
            type="button"
            onClick={() => handleEnterApp()}
            className="flex items-center space-x-3 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5E9] rounded-full pr-2"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#38BDF8] to-[#0284C7] flex items-center justify-center text-white shadow-md shadow-[#0284C7]/25 ring-2 ring-white/80">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                <path d="M9.5 14.5 11.2 16l3.3-3.5" />
              </svg>
            </div>
            <span className="font-extrabold text-xl sm:text-[22px] text-[#0C2340] tracking-tight">
              BreatheWise <span className="text-[#10B981] font-bold">AI</span>
            </span>
          </button>
        </div>
      </header>

      {/* Main Two-Part Hero Composition */}
      <main className="relative z-20 flex-1 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-14 py-6 sm:py-8 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
        {/* Left Column: Label, Heading, Description, Single Primary CTA */}
        <div className="w-full lg:w-[465px] shrink-0 flex flex-col justify-center space-y-5 z-30 text-left">
          <div className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.26em] text-[#26466D]">
            GLOBAL AIR INTELLIGENCE
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-[#0B223E] tracking-tight leading-[1.05]">
            BreatheWise <span className="text-[#0EA5E9] italic font-extrabold">AI</span>
          </h1>

          <p className="text-base sm:text-[18px] text-[#1E3A5F] leading-[1.55] font-medium max-w-[420px]">
            Real-time air quality, exposure insights, and personalized protection for healthier urban living.
          </p>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => handleEnterApp()}
              className="inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-full text-sm sm:text-[15px] font-bold bg-gradient-to-r from-[#2DD4BF] via-[#06B6D4] to-[#0EA5E9] hover:from-[#14B8A6] hover:to-[#0284C7] text-white transition-all duration-200 shadow-[0_10px_28px_rgba(14,165,233,0.34)] hover:shadow-[0_14px_34px_rgba(14,165,233,0.42)] hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Enter Air Intelligence</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Right Column: Large Luminous Interactive 3D Earth */}
        <div className="w-full lg:flex-1 flex items-center justify-center relative">
          {/* Subtle 4-Point Atmospheric Star Glint (Upper-Left of Earth) */}
          <svg
            className="hidden sm:block absolute top-10 left-12 lg:left-16 w-7 h-7 text-white/90 pointer-events-none z-20 drop-shadow-[0_0_8px_rgba(255,255,255,0.95)]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" />
          </svg>

          <ErrorBoundary
            fallback={
              <div className="w-full max-w-md p-8 rounded-3xl bg-white/85 backdrop-blur-xl border border-[#CBE0F2] text-center space-y-3 shadow-float">
                <Globe2 className="w-10 h-10 text-[#0891B2] mx-auto" />
                <div className="text-sm font-bold text-[#0C2D57]">3D Earth Unavailable on This Device</div>
                <p className="text-xs text-[#476788]">
                  WebGL rendering is unavailable or disabled. You can still enter the Air Intelligence suite directly.
                </p>
                <button
                  type="button"
                  onClick={() => handleEnterApp()}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#2DD4BF] to-[#0EA5E9] text-white text-xs font-extrabold cursor-pointer"
                >
                  Enter Air Intelligence →
                </button>
              </div>
            }
          >
            <Suspense
              fallback={
                <div className="w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] rounded-full bg-white/50 border border-[#BAE6FD] flex flex-col items-center justify-center space-y-2 animate-pulse">
                  <Globe2 className="w-8 h-8 text-[#0891B2] animate-spin" />
                  <span className="text-xs text-[#365779] font-medium">Loading 3D Earth...</span>
                </div>
              }
            >
              <InteractiveGlobe
                onExploreCity={(cityId) => handleEnterApp(cityId)}
                activeView="globe"
              />
            </Suspense>
          </ErrorBoundary>
        </div>
      </main>
    </div>
  );
};
