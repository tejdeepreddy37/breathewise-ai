import React from 'react';
import { useApp } from '../context/AppContext';
import { INDIAN_CITIES_PRESETS } from '../data/cities';
import { VulnerabilityProfile } from '../types/engines';
import { 
  Wind, 
  RefreshCw, 
  Info, 
  Baby, 
  HeartPulse, 
  Activity, 
  UserCheck, 
  Sparkles,
  WifiOff,
  Clock
} from 'lucide-react';

export const Header: React.FC = () => {
  const {
    selectedCityId,
    selectCity,
    telemetry,
    isLoadingTelemetry,
    refreshData,
    userPreferences,
    updateProfile,
    setIsTransparencyOpen,
  } = useApp();

  const profiles: Array<{ id: VulnerabilityProfile; label: string; icon: React.ReactNode }> = [
    { id: 'pediatric', label: 'Child / Pediatric', icon: <Baby className="w-3.5 h-3.5" /> },
    { id: 'senior_respiratory', label: 'Senior / Asthmatic', icon: <HeartPulse className="w-3.5 h-3.5" /> },
    { id: 'outdoor_athlete', label: 'Outdoor Athlete', icon: <Activity className="w-3.5 h-3.5" /> },
    { id: 'normal_adult', label: 'General Adult', icon: <UserCheck className="w-3.5 h-3.5" /> },
  ];

  const meta = telemetry.metadata;
  const isCached = meta.fetchTimestamp.startsWith('Cached');

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-cream-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Product Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-forest-600 text-white flex items-center justify-center shadow-soft">
              <Wind className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg text-slatecharcoal-900 tracking-tight">
                  BreatheWise<span className="text-forest-600 font-extrabold ml-0.5">AI</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-forest-50 text-forest-700 border border-forest-100">
                  <Sparkles className="w-2.5 h-2.5 mr-1 text-forest-600" /> Challenge 06
                </span>
              </div>
              <p className="hidden md:block text-[11px] text-slate-500 font-medium">
                Personal Air Intelligence & Exposure-Aware Living
              </p>
            </div>
          </div>

          {/* City Selector & Telemetry Status Indicator */}
          <div className="flex items-center space-x-1.5 sm:space-x-3">
            <div className="relative">
              <select
                aria-label="Select Target City"
                value={selectedCityId}
                onChange={(e) => selectCity(e.target.value)}
                className="appearance-none bg-cream-50 hover:bg-cream-100/80 text-slatecharcoal-900 text-xs sm:text-sm font-semibold py-2 pl-3 pr-7 sm:pl-3.5 sm:pr-8 rounded-xl border border-cream-200/90 focus:outline-none focus:ring-2 focus:ring-forest-500/20 focus:border-forest-500 cursor-pointer transition-all shadow-2xs"
              >
                {INDIAN_CITIES_PRESETS.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Profile Dropdown / Selector */}
            <div className="relative hidden lg:block">
              <select
                aria-label="Vulnerability Profile"
                value={userPreferences.vulnerabilityProfile}
                onChange={(e) => updateProfile(e.target.value as VulnerabilityProfile)}
                className="appearance-none bg-cream-50 hover:bg-cream-100/80 text-slatecharcoal-800 text-xs font-semibold py-2 pl-3.5 pr-7 rounded-xl border border-cream-200/90 focus:outline-none focus:ring-2 focus:ring-forest-500/20 cursor-pointer shadow-2xs"
              >
                {profiles.map((p) => (
                  <option key={p.id} value={p.id}>
                    Profile: {p.label}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Data Provenance & Freshness Badge */}
            <button
              onClick={() => setIsTransparencyOpen(true)}
              className={`inline-flex items-center px-2.5 sm:px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-semibold border transition-all cursor-pointer shadow-2xs ${
                meta.isLive && !isCached
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
                  : isCached
                  ? 'bg-cream-100 text-slatecharcoal-800 border-cream-300 hover:bg-cream-200'
                  : 'bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100'
              }`}
              title="Click to inspect data provenance, units & mathematical formulas"
            >
              {meta.isLive && !isCached ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-1 sm:mr-1.5" />
                  <span className="hidden sm:inline text-slate-500 mr-1">Source:</span> CAMS Grid
                </>
              ) : isCached ? (
                <>
                  <Clock className="w-3 h-3 text-slate-500 mr-1" />
                  <span className="truncate max-w-[85px] sm:max-w-none">{meta.fetchTimestamp}</span>
                </>
              ) : (
                <>
                  <WifiOff className="w-3 h-3 text-amber-700 mr-1" />
                  <span>Demo Mode</span>
                </>
              )}
            </button>

            {/* Refresh Button */}
            <button
              onClick={refreshData}
              disabled={isLoadingTelemetry}
              aria-label="Refresh environmental telemetry"
              className="p-2 rounded-xl text-slate-500 hover:text-slatecharcoal-900 hover:bg-cream-100 border border-cream-200/70 hover:border-cream-300 transition-all cursor-pointer shadow-2xs"
              title="Refresh environmental telemetry"
            >
              <RefreshCw className={`w-4 h-4 ${isLoadingTelemetry ? 'animate-spin text-forest-600' : ''}`} />
            </button>

            {/* Scientific Transparency Info Button */}
            <button
              onClick={() => setIsTransparencyOpen(true)}
              aria-label="Inspect Data & Scientific Methodology"
              className="p-2 rounded-xl text-slate-500 hover:text-forest-600 hover:bg-cream-100 border border-cream-200/70 hover:border-cream-300 transition-all cursor-pointer shadow-2xs"
              title="Inspect Data & Scientific Methodology"
            >
              <Info className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
