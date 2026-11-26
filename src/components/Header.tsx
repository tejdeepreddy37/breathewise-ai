import React from 'react';
import { useApp, NavigationTab } from '../context/AppContext';
import { VulnerabilityProfile } from '../types/engines';
import { IndiaLocationPicker } from './IndiaLocationPicker';
import {
  Wind,
  RefreshCw,
  FlaskConical,
  User,
  Home,
  Car,
  Sliders,
  Sparkles,
  ChevronDown,
} from 'lucide-react';

export const Header: React.FC = () => {
  const {
    telemetry,
    isLoadingTelemetry,
    telemetryError,
    refreshData,
    userPreferences,
    updateProfile,
    setIsTransparencyOpen,
    activeTab,
    setActiveTab,
    isDemoMode,
  } = useApp();

  const profiles: Array<{ id: VulnerabilityProfile; label: string }> = [
    { id: 'pediatric', label: 'Child / Pediatric' },
    { id: 'senior_respiratory', label: 'Senior / Asthmatic' },
    { id: 'outdoor_athlete', label: 'Outdoor Athlete' },
    { id: 'normal_adult', label: 'General Adult' },
  ];

  const meta = telemetry.metadata;

  const navItems: Array<{ id: NavigationTab; label: string; icon: React.ReactNode }> = [
    { id: 'overview', label: 'Overview', icon: <Wind className="w-3.5 h-3.5" /> },
    { id: 'commute', label: 'Commute', icon: <Car className="w-3.5 h-3.5" /> },
    { id: 'indoor', label: 'Indoor', icon: <Home className="w-3.5 h-3.5" /> },
    { id: 'exposure', label: 'Exposure', icon: <Sliders className="w-3.5 h-3.5" /> },
    { id: 'advisor', label: 'AI Advisor', icon: <Sparkles className="w-3.5 h-3.5" /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#E6F2FC]/90 backdrop-blur-xl border-b border-[#CBE0F2] transition-all">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Top Row: Brand | Center Nav Pills | Science */}
        <div className="flex items-center justify-between h-14 sm:h-16 gap-2">
          {/* Logo */}
          <div
            className="flex items-center space-x-2.5 cursor-pointer shrink-0"
            onClick={() => setActiveTab('landing')}
            title="Return to 3D Earth Entrance"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0284C7] to-[#22D3EE] text-white flex items-center justify-center shadow-sm shadow-[#0284C7]/25">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
            </div>
            <div>
              <span className="font-extrabold text-base sm:text-lg text-[#0C2D57] tracking-tight leading-tight block">
                BreatheWise <span className="text-[#0891B2] italic">AI</span>
              </span>
              <p className="text-[10px] text-[#476788] font-medium tracking-tight -mt-0.5 hidden sm:block">
                Your Urban Air Intelligence Assistant
              </p>
            </div>
          </div>

          {/* Center Navigation Pills */}
          <nav
            aria-label="Primary Workspace Navigation"
            className="hidden md:flex items-center space-x-1 p-1 rounded-full bg-white/75 border border-[#CBE0F2] shadow-2xs"
          >
            {navItems.map((item) => {
              const isActive =
                activeTab === item.id ||
                (item.id === 'exposure' && activeTab === 'simulator') ||
                (item.id === 'advisor' && activeTab === 'assistant');
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-1.5 py-1.5 px-3 lg:px-4 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#0284C7] text-white shadow-sm'
                      : 'text-[#365779] hover:text-[#0C2D57] hover:bg-[#EBF5FD]'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right: Science / Methodology Modal Button */}
          <button
            type="button"
            onClick={() => setIsTransparencyOpen(true)}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white/90 hover:bg-white border border-[#CBE0F2] text-[#0F2C4C] text-xs font-bold shadow-2xs transition-all cursor-pointer shrink-0"
            title="Scientific Methodology, CPCB Standards & Data Provenance"
          >
            <FlaskConical className="w-3.5 h-3.5 text-[#0891B2]" />
            <span>Science</span>
          </button>
        </div>

        {/* Secondary Context Row: India Location Picker | Profile Selector | Provenance Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2 py-2 border-t border-[#CBE0F2]/70 text-xs">
          <div className="flex items-center space-x-2">
            <IndiaLocationPicker />

            {/* Profile Dropdown Pill */}
            <div className="relative">
              <select
                aria-label="Vulnerability Profile"
                value={userPreferences.vulnerabilityProfile}
                onChange={(e) => updateProfile(e.target.value as VulnerabilityProfile)}
                className="appearance-none bg-white/90 hover:bg-white text-[#0F2C4C] text-xs font-semibold py-1.5 pl-8 pr-7 rounded-full border border-[#CBE0F2] focus:outline-none focus:ring-2 focus:ring-[#0891B2]/25 cursor-pointer transition-all shadow-2xs max-w-[140px] sm:max-w-none truncate"
              >
                {profiles.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.label}
                  </option>
                ))}
              </select>
              <User className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#0891B2]" />
              <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#5A7896]" />
            </div>
          </div>

          {/* Right: Provenance Status Pill + Refresh */}
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => setIsTransparencyOpen(true)}
              className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/90 hover:bg-white border border-[#CBE0F2] text-[11px] font-bold shadow-2xs cursor-pointer transition-all"
              title="View full data provenance and CPCB NAQI methodology"
            >
              {telemetryError ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  <span className="text-rose-700">Live Unavailable</span>
                </>
              ) : !isDemoMode && meta.isLive ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[#065F46]">Live (CAMS Copernicus)</span>
                </>
              ) : meta.fetchTimestamp?.includes('Cached') ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-sky-500" />
                  <span className="text-[#1E4976]">{meta.fetchTimestamp}</span>
                </>
              ) : (
                <>
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="text-amber-800">Calibrated Baseline</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={refreshData}
              disabled={isLoadingTelemetry}
              aria-label="Refresh telemetry data"
              className="p-1.5 rounded-full bg-white/90 hover:bg-white border border-[#CBE0F2] text-[#365779] transition-colors shadow-2xs cursor-pointer"
              title="Refresh Atmospheric Telemetry"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoadingTelemetry ? 'animate-spin text-[#0284C7]' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
