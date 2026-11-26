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
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-r from-[#F0F8FF] via-[#CEEBFE] to-[#68C0FA] text-[#0B223E] flex flex-col font-sans selection:bg-[#BAE6FD] selection:text-[#0B223E]">
      {/* Full-Viewport Sky Atmosphere & Soft Cloud Horizon */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Center-left sunlit white atmospheric glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 22% 40%, rgba(255,255,255,0.96) 0%, rgba(240,249,255,0.65) 36%, rgba(104,192,250,0) 70%)',
          }}
        />

        {/* Fluffy White Bottom Horizon Clouds Extending Across Page */}
        <img
          src={`${import.meta.env.BASE_URL}images/sky-clouds-backdrop.png`}
          alt=""
          className="w-full h-full object-cover object-bottom opacity-95 [mask-image:linear-gradient(to_top,black_36%,transparent_70%)]"
        />

        {/* Soft white cloud luminosity concentrated along bottom sides */}
        <div className="hidden md:block absolute -bottom-16 -right-12 w-[520px] h-[300px] rounded-full bg-white/80 blur-3xl" />
        <div className="hidden md:block absolute -bottom-16 -left-12 w-[440px] h-[230px] rounded-full bg-white/70 blur-3xl" />
      </div>

      {/* Main Responsive Viewport Container */}
      <div className="relative z-20 flex-1 w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 py-6 sm:py-8 flex flex-col justify-between">
        {/* Top-Left Brand Header (Restrained Logo Sizing) */}
        <header className="relative z-30 shrink-0">
          <button
            type="button"
            onClick={() => handleEnterApp()}
            className="inline-flex items-center space-x-2.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5E9] rounded-full pr-2"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-b from-[#38BDF8] to-[#0284C7] flex items-center justify-center text-white shadow-md shadow-[#0284C7]/25 ring-2 ring-white/90">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.95" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                <path d="M9.5 14.5 11.2 16l3.3-3.5" />
              </svg>
            </div>
            <span className="font-extrabold text-xl text-[#0C2340] tracking-tight">
              BreatheWise <span className="text-[#10B981] font-bold">AI</span>
            </span>
          </button>
        </header>

        {/* Balanced Two-Column Hero Composition */}
        <main className="relative z-20 flex-1 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 py-4 md:py-0">
          {/* Left Content Column (Compact Relative Hierarchy Matching IMAGE 2) */}
          <div className="w-full md:w-[44%] shrink-0 flex flex-col justify-center space-y-3.5 sm:space-y-4 z-30 text-left">
            <div className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#1E3A5F]">
              GLOBAL AIR INTELLIGENCE
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-black text-[#0B223E] tracking-tight leading-[1.05] whitespace-nowrap">
              BreatheWise <span className="text-[#0EA5E9] italic font-extrabold">AI</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-[19px] text-[#1E3A5F] leading-[1.48] font-medium max-w-[410px]">
              Real-time air quality, exposure insights, and personalized protection for healthier urban living.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => handleEnterApp()}
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full text-sm sm:text-[15px] font-bold bg-gradient-to-r from-[#2DD4BF] via-[#06B6D4] to-[#0EA5E9] hover:from-[#14B8A6] hover:to-[#0284C7] text-white transition-all duration-200 shadow-[0_10px_28px_rgba(14,165,233,0.34)] hover:shadow-[0_14px_34px_rgba(14,165,233,0.42)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Enter Air Intelligence</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Right Earth Visual Column (Contained Proportions Matching IMAGE 2) */}
          <div className="w-full md:w-[56%] h-[330px] sm:h-[430px] md:h-[70vh] max-h-[650px] flex items-center justify-center relative">
            {/* Luminous 4-Point Atmospheric Star Glint (Upper-Left of Earth) */}
            <svg
              className="hidden sm:block absolute top-14 left-4 lg:left-10 w-8 h-8 text-white pointer-events-none z-20 drop-shadow-[0_0_10px_rgba(255,255,255,1)]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0 L13.4 10.6 L24 12 L13.4 13.4 L12 24 L10.6 13.4 L0 12 L10.6 10.6 Z" />
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
                  <div className="w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] rounded-full bg-white/40 border border-[#BAE6FD] flex flex-col items-center justify-center space-y-2 animate-pulse">
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
