import React from 'react';
import { useApp } from '../context/AppContext';
import { InteractiveGlobe } from './InteractiveGlobe';
import { 
  Wind, 
  Sparkles, 
  ArrowRight, 
  Clock, 
  Sliders, 
  ShieldCheck, 
  Fan, 
  Navigation, 
  Info,
  CheckCircle2,
  Atom,
  Flame,
  Globe2
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { setActiveTab, selectCity, setIsTransparencyOpen } = useApp();

  const handleExplore = (cityId?: string) => {
    if (cityId) selectCity(cityId);
    setActiveTab('overview');
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 flex flex-col font-sans selection:bg-forest-600 selection:text-white relative overflow-x-hidden">
      
      {/* Background Radial Atmospheric Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-blue-900/25 via-emerald-950/15 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Elegant Atmospheric Header */}
      <header className="sticky top-0 z-40 bg-[#070B14]/80 backdrop-blur-md border-b border-slate-800/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-forest-600 to-emerald-500 text-white flex items-center justify-center shadow-lg shadow-forest-500/20">
                <Wind className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-extrabold text-lg text-white tracking-tight">
                    BreatheWise<span className="text-emerald-400 font-black ml-0.5">AI</span>
                  </span>
                  <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-800/60">
                    <Sparkles className="w-2.5 h-2.5 mr-1 text-emerald-400" /> Challenge 06
                  </span>
                </div>
                <p className="hidden md:block text-[11px] text-slate-400 font-medium">
                  Personal Air Intelligence & Exposure-Aware Living
                </p>
              </div>
            </div>

            {/* Quick Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6 text-xs font-semibold text-slate-300">
              <button 
                onClick={() => setActiveTab('overview')} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                Air Intelligence
              </button>
              <button 
                onClick={() => setActiveTab('commute')} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                Commute Eco-Swap
              </button>
              <button 
                onClick={() => setActiveTab('indoor')} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                Indoor Coach
              </button>
              <button 
                onClick={() => setActiveTab('simulator')} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                What-If Sandbox
              </button>
              <button 
                onClick={() => setActiveTab('assistant')} 
                className="hover:text-white transition-colors cursor-pointer"
              >
                AI Assistant
              </button>
            </nav>

            {/* Action CTA & Methodology */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsTransparencyOpen(true)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 border border-slate-800 transition-all cursor-pointer"
                title="Inspect Scientific Methodology"
                aria-label="Inspect Scientific Methodology"
              >
                <Info className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleExplore()}
                className="flex items-center space-x-2 py-2 px-4 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-lg shadow-emerald-600/20 cursor-pointer"
              >
                <span>Launch App</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Hero Section with Interactive Globe */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-12 flex flex-col items-center text-center">
        
        {/* Challenge & Status Pill */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300 backdrop-blur-md mb-6 shadow-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-white">Urban Air Quality Assistant</span>
          <span className="text-slate-500">•</span>
          <span>Copernicus CAMS & CPCB Standards</span>
        </div>

        {/* Compelling Brand Statement Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl">
          Don't just understand the air.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">
            Understand how to live in it.
          </span>
        </h1>

        <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mt-4 leading-relaxed font-normal">
          BreatheWise AI couples continuous CPCB atmospheric interpolation, 24-hour diurnal boundary layer physics, and EPA minute ventilation rates with grounded AI to turn complex environmental data into practical daily decisions.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8">
          <button
            onClick={() => handleExplore()}
            className="flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-forest-600 to-emerald-600 hover:from-forest-500 hover:to-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-900/30 hover:scale-[1.02] transition-all cursor-pointer"
          >
            <span>Explore Air Intelligence</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsTransparencyOpen(true)}
            className="flex items-center space-x-2 px-5 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm backdrop-blur-md transition-all cursor-pointer"
          >
            <Atom className="w-4 h-4 text-emerald-400" />
            <span>Scientific Methodology</span>
          </button>
        </div>

        {/* Centerpiece: 3D Interactive Atmospheric Earth Globe */}
        <div className="w-full mt-10">
          <InteractiveGlobe onExploreCity={(cityId) => handleExplore(cityId)} />
        </div>

      </section>

      {/* 3 Pillars of Decision Intelligence Teaser Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-800/80">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
            Validated Environmental Decision Support
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            Why BreatheWise AI is Fundamentally Different
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Generic dashboards give you an abstract colored number. BreatheWise models physical exposure, diurnal convection, and building envelopes to guide real life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pillar 1 */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-slate-700 transition-all space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-950/80 text-emerald-400 border border-emerald-800/50 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white tracking-tight">
              WindowSafe™ Diurnal Engine
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              In northern and peninsular India, morning inversions trap ground soot. BreatheWise models the 24-hour planetary boundary layer to locate the convective solar dilution valley, pinpointing the optimal 45-minute window for indoor fresh-air exchange.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-slate-700 transition-all space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-950/80 text-sky-400 border border-sky-800/50 flex items-center justify-center">
              <Sliders className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white tracking-tight">
              Physiological What-If Sandbox
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Standard tools conflate ambient air (µg/m³) with personal risk. BreatheWise models gross inspired particulate mass ($M = C \cdot V_E \cdot t \cdot [1 - \eta]$) using EPA minute ventilation tables, calculating exact microgram savings from N95 masks.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-slate-700 transition-all space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-950/80 text-amber-400 border border-amber-800/50 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white tracking-tight">
              Indoor Safety & Commute Eco-Swap
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Features an active indoor ventilation safety lockout (strictly sealing windows whenever ambient PM2.5 &gt; 60 µg/m³ or Ozone &gt; 100 µg/m³), while modeling personal inhaled exposure versus vehicular carbon emissions across 6 transit modes.
            </p>
          </div>

        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/60 via-slate-900/80 to-blue-950/60 border border-emerald-800/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white">
              Ready to adapt your daily routine?
            </h3>
            <p className="text-xs text-slate-400">
              Select your city on the globe or launch directly into the personalized decision intelligence workspace.
            </p>
          </div>
          <button
            onClick={() => handleExplore()}
            className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-extrabold text-xs shadow-lg shadow-emerald-500/20 transition-all cursor-pointer whitespace-nowrap"
          >
            Launch BreatheWise AI →
          </button>
        </div>

      </section>

      {/* Atmospheric Footer */}
      <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500 mt-auto bg-[#050811]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-slate-300">BreatheWise AI</span>
            <span>•</span>
            <span className="text-slate-400">PromptWars Virtual Challenge 06: Urban Air Quality Assistant</span>
          </div>
          <div className="text-[11px] text-slate-400">
            Copernicus Atmosphere Monitoring Service (CAMS), Open-Meteo & Central Pollution Control Board (CPCB)
          </div>
        </div>
      </footer>

    </div>
  );
};
