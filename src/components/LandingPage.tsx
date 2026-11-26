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
    <div className="min-h-screen bg-gradient-to-b from-[#DCEEFB] via-[#ECF6FD] to-[#F7FBFF] text-[#0F2C4C] flex flex-col font-sans relative overflow-x-hidden selection:bg-[#BAE6FD] selection:text-[#0C2D57]">
      {/* Soft Sky & Fluffy Clouds Horizon Backdrop */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}images/sky-clouds-backdrop.png`}
          alt=""
          className="w-full h-full object-cover object-bottom opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#E4F2FC]/90 via-[#EDF6FD]/45 to-transparent" />
      </div>

      {/* Minimal Brand Header (Matches Reference Panel 1) */}
      <header className="relative z-30 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-5 sm:pt-7">
        <div className="flex items-center justify-between h-12">
          <div
            className="flex items-center space-x-2.5 cursor-pointer"
            onClick={() => handleEnterApp()}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0284C7] to-[#22D3EE] flex items-center justify-center text-white shadow-md shadow-[#0284C7]/25">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
            </div>
            <span className="font-extrabold text-xl text-[#0C2D57] tracking-tight">
              BreatheWise <span className="text-[#0891B2] italic font-bold">AI</span>
            </span>
          </div>
        </div>
      </header>

      {/* Main Split Hero Viewport */}
      <main className="relative z-20 flex-1 max-w-7xl w-full mx-auto px-5 sm:px-8 lg:px-12 py-6 sm:py-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left Column: Typography & Single Primary CTA */}
        <div className="w-full lg:w-[460px] shrink-0 flex flex-col justify-center space-y-5 z-30 text-left">
          <div className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#2B5B84]">
            GLOBAL AIR INTELLIGENCE
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-[#0C2D57] tracking-tight leading-[1.06]">
            BreatheWise <span className="text-[#0891B2] italic font-extrabold">AI</span>
          </h1>

          <p className="text-base sm:text-lg text-[#365779] leading-relaxed font-medium max-w-md">
            Real-time air quality, exposure insights, and personalized protection for healthier urban living.
          </p>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => handleEnterApp()}
              className="inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-full text-sm font-extrabold bg-gradient-to-r from-[#0EA5E9] to-[#14B8A6] hover:from-[#0284C7] hover:to-[#0D9488] text-white transition-all shadow-lg shadow-[#0EA5E9]/30 hover:scale-[1.02] cursor-pointer"
            >
              <span>Enter Air Intelligence</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Right Column: Interactive 3D Earth (Drag to rotate, no zoom buttons) */}
        <div className="w-full lg:flex-1 flex items-center justify-center relative">
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
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#14B8A6] text-white text-xs font-extrabold cursor-pointer"
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
