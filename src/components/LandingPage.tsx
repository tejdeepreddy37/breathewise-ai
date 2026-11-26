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
    <div className="min-h-screen bg-gradient-to-br from-[#ECF5FC] via-[#D8EEFC] to-[#8BCEF9] text-[#0B223E] flex flex-col font-sans relative overflow-hidden selection:bg-[#BAE6FD] selection:text-[#0B223E]">
      {/* Bright Sky & Soft White Atmospheric Cloud Backdrop */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft sunlit center-left atmospheric radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 28% 36%, rgba(255,255,255,0.92) 0%, rgba(240,249,255,0.65) 38%, rgba(147,210,250,0) 72%)',
          }}
        />

        {/* Fluffy White Horizon Clouds */}
        <img
          src={`${import.meta.env.BASE_URL}images/sky-clouds-backdrop.png`}
          alt=""
          className="w-full h-full object-cover object-bottom opacity-90"
        />

        {/* Subtle bottom-right cloud luminosity boost matching reference */}
        <div
          className="absolute -bottom-16 -right-12 w-[520px] h-[260px] rounded-full bg-white/60 blur-3xl"
        />
        <div
          className="absolute -bottom-20 -left-10 w-[440px] h-[220px] rounded-full bg-white/55 blur-3xl"
        />
      </div>

      {/* Minimal Top-Left Brand Header */}
      <header className="relative z-30 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-6 sm:pt-8">
        <div className="flex items-center justify-between h-11">
          <button
            type="button"
            onClick={() => handleEnterApp()}
            className="flex items-center space-x-3 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5E9] rounded-full pr-2"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-b from-[#38BDF8] to-[#0284C7] flex items-center justify-center text-white shadow-md shadow-[#0284C7]/25 ring-2 ring-white/90">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                <path d="M9.5 14.5 11.2 16l3.3-3.5" />
              </svg>
            </div>
            <span className="font-extrabold text-xl text-[#0C2340] tracking-tight">
              BreatheWise <span className="text-[#10B981] font-bold">AI</span>
            </span>
          </button>
        </div>
      </header>

      {/* Main Two-Part Hero Composition */}
      <main className="relative z-20 flex-1 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-14 py-4 sm:py-6 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
        {/* Left Column: Label, Heading, Description, Single Primary CTA */}
        <div className="w-full lg:w-[440px] shrink-0 flex flex-col justify-center space-y-4 sm:space-y-5 z-30 text-left">
          <div className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#26466D]">
            GLOBAL AIR INTELLIGENCE
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black text-[#0B223E] tracking-tight leading-[1.06]">
            BreatheWise <span className="text-[#0EA5E9] italic font-extrabold">AI</span>
          </h1>

          <p className="text-base sm:text-[17px] text-[#1E3A5F] leading-[1.55] font-medium max-w-[390px]">
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

        {/* Right Column: Interactive 3D Earth Positioned Cleanly to the Right */}
        <div className="w-full lg:flex-1 lg:pl-10 flex items-center justify-center lg:justify-end relative">
          {/* Subtle 4-Point Atmospheric Star Glint (Upper-Left of Earth) */}
          <svg
            className="hidden sm:block absolute top-8 left-10 lg:left-24 w-6 h-6 text-white/95 pointer-events-none z-20 drop-shadow-[0_0_8px_rgba(255,255,255,0.95)]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0 L13.8 10.2 L24 12 L13.8 13.8 L12 24 L10.2 13.8 L0 12 L10.2 10.2 Z" />
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
                <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full bg-white/50 border border-[#BAE6FD] flex flex-col items-center justify-center space-y-2 animate-pulse">
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
