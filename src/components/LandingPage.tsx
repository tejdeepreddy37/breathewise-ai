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
    <div className="min-h-screen bg-[#E9F4FC] flex items-center justify-center p-3 sm:p-6 md:p-8 font-sans selection:bg-[#BAE6FD] selection:text-[#0B223E]">
      {/* Compact Horizontally Oriented Showcase Container (Exact 760:330 Reference Proportions on Desktop) */}
      <div className="relative w-full max-w-[960px] md:aspect-[760/330] rounded-[24px] overflow-hidden bg-gradient-to-br from-[#EDF6FD] via-[#D6ECFC] to-[#84CAF9] shadow-[0_24px_60px_rgba(14,165,233,0.18)] border border-white/80 flex flex-col justify-between">
        {/* Background Sky & Soft Cloud Horizon */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Center-left white sunlit atmospheric glow */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 26% 38%, rgba(255,255,255,0.95) 0%, rgba(240,249,255,0.7) 38%, rgba(132,202,249,0) 74%)',
            }}
          />

          {/* Soft Horizon Clouds */}
          <img
            src={`${import.meta.env.BASE_URL}images/sky-clouds-backdrop.png`}
            alt=""
            className="w-full h-full object-cover object-bottom opacity-85"
          />

          {/* Side & bottom fluffy cloud highlights matching IMAGE 2 */}
          <div className="hidden md:block absolute -bottom-16 -right-10 w-[340px] h-[220px] rounded-full bg-white/75 blur-2xl" />
          <div className="hidden md:block absolute -bottom-14 -left-8 w-[300px] h-[160px] rounded-full bg-white/65 blur-2xl" />
        </div>

        {/* Minimal Top-Left Brand Header */}
        <header className="relative z-30 px-6 sm:px-9 pt-5 sm:pt-7 shrink-0">
          <button
            type="button"
            onClick={() => handleEnterApp()}
            className="inline-flex items-center space-x-2.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5E9] rounded-full pr-2"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-b from-[#38BDF8] to-[#0284C7] flex items-center justify-center text-white shadow-sm shadow-[#0284C7]/25 ring-2 ring-white/90">
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                <path d="M9.5 14.5 11.2 16l3.3-3.5" />
              </svg>
            </div>
            <span className="font-extrabold text-lg sm:text-[19px] text-[#0C2340] tracking-tight">
              BreatheWise <span className="text-[#10B981] font-bold">AI</span>
            </span>
          </button>
        </header>

        {/* Main Split Composition */}
        <main className="relative z-20 flex-1 px-6 sm:px-9 pb-6 pt-2 md:py-0 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
          {/* Left Content Column */}
          <div className="w-full md:w-[48%] shrink-0 flex flex-col justify-center space-y-3 sm:space-y-3.5 z-30 text-left md:pb-4">
            <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-[#1E3A5F]">
              GLOBAL AIR INTELLIGENCE
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0B223E] tracking-tight leading-[1.06] whitespace-nowrap">
              BreatheWise <span className="text-[#0EA5E9] italic font-extrabold">AI</span>
            </h1>

            <p className="text-sm sm:text-[15px] text-[#1E3A5F] leading-[1.45] font-medium max-w-[305px]">
              Real-time air quality, exposure insights, and personalized protection for healthier urban living.
            </p>

            <div className="pt-1.5">
              <button
                type="button"
                onClick={() => handleEnterApp()}
                className="inline-flex items-center space-x-2 px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-[13px] font-bold bg-gradient-to-r from-[#2DD4BF] via-[#06B6D4] to-[#0EA5E9] hover:from-[#14B8A6] hover:to-[#0284C7] text-white transition-all duration-200 shadow-[0_8px_22px_rgba(14,165,233,0.34)] hover:shadow-[0_12px_28px_rgba(14,165,233,0.42)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Enter Air Intelligence</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Right Earth Visual Column */}
          <div className="w-full md:w-[54%] md:h-[345px] lg:h-[365px] md:-mt-4 flex items-center justify-center relative">
            {/* Subtle 4-Point Atmospheric Star Glint (Upper-Left of Earth) */}
            <svg
              className="hidden sm:block absolute top-8 left-4 md:left-6 w-5 h-5 text-white/95 pointer-events-none z-20 drop-shadow-[0_0_8px_rgba(255,255,255,0.95)]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0 L13.8 10.2 L24 12 L13.8 13.8 L12 24 L10.2 13.8 L0 12 L10.2 10.2 Z" />
            </svg>

            <ErrorBoundary
              fallback={
                <div className="w-full max-w-sm p-6 rounded-2xl bg-white/85 backdrop-blur-xl border border-[#CBE0F2] text-center space-y-2.5 shadow-float">
                  <Globe2 className="w-8 h-8 text-[#0891B2] mx-auto" />
                  <div className="text-sm font-bold text-[#0C2D57]">3D Earth Unavailable</div>
                  <button
                    type="button"
                    onClick={() => handleEnterApp()}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-[#2DD4BF] to-[#0EA5E9] text-white text-xs font-extrabold cursor-pointer"
                  >
                    Enter Air Intelligence →
                  </button>
                </div>
              }
            >
              <Suspense
                fallback={
                  <div className="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] rounded-full bg-white/40 border border-[#BAE6FD] flex flex-col items-center justify-center space-y-2 animate-pulse">
                    <Globe2 className="w-7 h-7 text-[#0891B2] animate-spin" />
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
    </div>
  );
};
