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
  MapPin, 
  User, 
  Bell, 
  Globe2, 
  Home, 
  Car, 
  Sliders, 
  Sparkles,
  Layers
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
    activeTab,
    setActiveTab,
  } = useApp();

  const profiles: Array<{ id: VulnerabilityProfile; label: string; icon: React.ReactNode }> = [
    { id: 'pediatric', label: 'Child / Pediatric', icon: <Baby className="w-3.5 h-3.5" /> },
    { id: 'senior_respiratory', label: 'Senior / Asthmatic', icon: <HeartPulse className="w-3.5 h-3.5" /> },
    { id: 'outdoor_athlete', label: 'Outdoor Athlete', icon: <Activity className="w-3.5 h-3.5" /> },
    { id: 'normal_adult', label: 'General Adult', icon: <UserCheck className="w-3.5 h-3.5" /> },
  ];

  const meta = telemetry.metadata;
  const isLive = meta.isLive && !meta.fetchTimestamp.startsWith('Cached');

  const navItems = [
    { id: 'overview', label: 'Air Intelligence', icon: <Wind className="w-3.5 h-3.5" /> },
    { id: 'commute', label: 'Commute', icon: <Car className="w-3.5 h-3.5" /> },
    { id: 'indoor', label: 'Indoor', icon: <Home className="w-3.5 h-3.5" /> },
    { id: 'simulator', label: 'What-If', icon: <Sliders className="w-3.5 h-3.5" /> },
    { id: 'assistant', label: 'AI Assistant', icon: <Sparkles className="w-3.5 h-3.5" /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAFBF8]/95 backdrop-blur-md border-b border-stone-200/70 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row (Exact match to Image 2 top bar) */}
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Logo & Product Brand */}
          <div 
            className="flex items-center space-x-2.5 cursor-pointer"
            onClick={() => setActiveTab('landing')}
          >
            {/* Green Cloud Logo matching Image 2 */}
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-md shadow-emerald-600/20">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-lg text-slatecharcoal-900 tracking-tight leading-tight">
                  BreatheWise <span className="text-emerald-700">AI</span>
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium tracking-tight -mt-0.5">
                Your Urban Air Intelligence Assistant
              </p>
            </div>
          </div>

          {/* Center Navigation Pills (Exact match to Image 2) */}
          <nav className="hidden md:flex items-center space-x-1.5 p-1 rounded-full bg-stone-200/50 border border-stone-200/80">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as any)}
                  className={`flex items-center space-x-1.5 py-1.5 px-3.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#164E43] text-white shadow-sm ring-1 ring-[#164E43]'
                      : 'text-slate-600 hover:text-slatecharcoal-900 hover:bg-white/70'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Header Controls (Bell, Avatar, Globe Switcher) */}
          <div className="flex items-center space-x-2.5">
            {/* Return to 3D Earth Globe */}
            <button
              onClick={() => setActiveTab('landing')}
              className="flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-100 text-xs font-semibold shadow-2xs border border-slate-700 transition-all cursor-pointer"
              title="Switch to 3D Earth Globe View"
            >
              <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">3D Globe</span>
            </button>

            {/* Notification Bell */}
            <button
              onClick={() => setIsTransparencyOpen(true)}
              className="w-9 h-9 rounded-full bg-white hover:bg-stone-100 border border-stone-200 flex items-center justify-center text-slate-600 shadow-2xs transition-colors cursor-pointer"
              title="Methodology & Alerts"
            >
              <Bell className="w-4 h-4" />
            </button>

            {/* User Avatar with Green Active Ring */}
            <div className="relative w-9 h-9 rounded-full bg-emerald-900 text-white font-bold text-xs flex items-center justify-center border-2 border-emerald-500 shadow-sm">
              <User className="w-4 h-4 text-emerald-100" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
            </div>
          </div>

        </div>

        {/* Secondary Filter & Telemetry Row (Matches subheader in Image 2) */}
        <div className="flex flex-wrap items-center justify-between gap-3 py-2.5 border-t border-stone-200/50 text-xs">
          
          {/* Left: Location & Profile Selector Pills */}
          <div className="flex items-center space-x-2">
            
            {/* City Dropdown Pill */}
            <div className="relative">
              <select
                aria-label="Select Target City"
                value={selectedCityId}
                onChange={(e) => selectCity(e.target.value)}
                className="appearance-none bg-white hover:bg-stone-50 text-slatecharcoal-900 text-xs font-bold py-1.5 pl-8 pr-7 rounded-full border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 cursor-pointer transition-all shadow-2xs"
              >
                {INDIAN_CITIES_PRESETS.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
              <MapPin className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
              <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Profile Dropdown Pill */}
            <div className="relative">
              <select
                aria-label="Vulnerability Profile"
                value={userPreferences.vulnerabilityProfile}
                onChange={(e) => updateProfile(e.target.value as VulnerabilityProfile)}
                className="appearance-none bg-white hover:bg-stone-50 text-slatecharcoal-900 text-xs font-bold py-1.5 pl-8 pr-7 rounded-full border border-stone-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 cursor-pointer transition-all shadow-2xs"
              >
                {profiles.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.label}
                  </option>
                ))}
              </select>
              <User className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
              <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

          </div>

          {/* Right: Live/Demo Status Indicator (Matches Image 2) & Refresh */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1.5 bg-stone-100/80 p-0.5 rounded-full border border-stone-200/80 text-[11px]">
              <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-white text-slatecharcoal-900 font-bold shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live (CAMS)</span>
              </span>
              <span className="inline-flex items-center space-x-1 px-2 py-0.5 text-slate-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full border border-slate-300" />
                <span>Demo Mode</span>
              </span>
            </div>

            <button
              onClick={refreshData}
              disabled={isLoadingTelemetry}
              aria-label="Refresh telemetry data"
              className="p-1.5 rounded-full bg-white hover:bg-stone-100 border border-stone-200 text-slate-600 transition-colors shadow-2xs cursor-pointer"
              title="Refresh Telemetry"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoadingTelemetry ? 'animate-spin text-emerald-600' : ''}`} />
            </button>
          </div>

        </div>

      </div>
    </header>
  );
};
