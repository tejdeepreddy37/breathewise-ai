import React from 'react';
import { useApp } from '../context/AppContext';
import { INDIAN_CITIES_PRESETS } from '../data/cities';
import { VulnerabilityProfile } from '../types/engines';
import { 
  Wind, 
  RefreshCw, 
  Info, 
  ShieldAlert, 
  Baby, 
  HeartPulse, 
  Activity, 
  UserCheck, 
  Sparkles,
  Wifi,
  WifiOff
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

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-cream-300 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Product Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-forest-500 text-white flex items-center justify-center shadow-sm shadow-forest-500/20">
              <Wind className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-lg text-slatecharcoal-900 tracking-tight">
                  BreatheWise<span className="text-forest-500 font-bold ml-0.5">AI</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-forest-50 text-forest-600 border border-forest-100">
                  <Sparkles className="w-2.5 h-2.5 mr-1" /> Challenge 06
                </span>
              </div>
              <p className="hidden md:block text-[11px] text-slate-500">
                Exposure-Aware Living & Air Intelligence
              </p>
            </div>
          </div>

          {/* City Selector & Live Telemetry Indicator */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="relative">
              <select
                aria-label="Select Target City"
                value={selectedCityId}
                onChange={(e) => selectCity(e.target.value)}
                className="appearance-none bg-cream-50 hover:bg-cream-100 text-slatecharcoal-900 text-xs sm:text-sm font-medium py-1.5 pl-3 pr-8 rounded-lg border border-cream-300 focus:outline-none focus:ring-2 focus:ring-forest-500/20 focus:border-forest-500 cursor-pointer transition-colors"
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
                className="appearance-none bg-cream-50 hover:bg-cream-100 text-slatecharcoal-800 text-xs font-medium py-1.5 pl-3 pr-7 rounded-lg border border-cream-300 focus:outline-none focus:ring-2 focus:ring-forest-500/20 cursor-pointer"
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

            {/* Live Status Pill */}
            <button
              onClick={() => setIsTransparencyOpen(true)}
              className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-cream-100 hover:bg-cream-200 text-slatecharcoal-800 border border-cream-300 transition-colors"
              title="Click to inspect telemetry sources & math formulas"
            >
              {telemetry.metadata.isLive ? (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse mr-1.5" />
                  <span className="hidden sm:inline text-slate-500 mr-1">Feed:</span> Live CAMS
                </>
              ) : (
                <>
                  <WifiOff className="w-3 h-3 text-amber-600 mr-1.5" />
                  <span className="text-amber-800">Calibrated Cache</span>
                </>
              )}
            </button>

            {/* Refresh Button */}
            <button
              onClick={refreshData}
              disabled={isLoadingTelemetry}
              aria-label="Refresh environmental telemetry"
              className="p-1.5 sm:p-2 rounded-lg text-slate-500 hover:text-slatecharcoal-900 hover:bg-cream-100 border border-transparent hover:border-cream-300 transition-colors"
              title="Refresh environmental telemetry"
            >
              <RefreshCw className={`w-4 h-4 ${isLoadingTelemetry ? 'animate-spin text-forest-500' : ''}`} />
            </button>

            {/* Scientific Transparency Info Button */}
            <button
              onClick={() => setIsTransparencyOpen(true)}
              aria-label="Inspect Data & Scientific Methodology"
              className="p-1.5 sm:p-2 rounded-lg text-slate-500 hover:text-forest-600 hover:bg-cream-100 border border-transparent hover:border-cream-300 transition-colors"
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
