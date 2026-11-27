import React from 'react';
import { useApp, NavigationTab } from '../context/AppContext';
import { VulnerabilityProfile } from '../types/engines';
import {
  Home,
  Car,
  Building2,
  Activity,
  Bot,
  FlaskConical,
  RefreshCw,
  User,
  ChevronDown,
  CalendarClock,
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const {
    activeTab,
    setActiveTab,
    telemetry,
    telemetryError,
    isLoadingTelemetry,
    refreshData,
    userPreferences,
    updateProfile,
    setIsTransparencyOpen,
    isDemoMode,
  } = useApp();

  const navItems: Array<{ id: NavigationTab; label: string; icon: React.ReactNode }> = [
    { id: 'overview', label: 'Overview', icon: <Home className="w-4 h-4" /> },
    { id: 'daytwin', label: 'Day Twin', icon: <CalendarClock className="w-4 h-4" /> },
    { id: 'commute', label: 'Commute', icon: <Car className="w-4 h-4" /> },
    { id: 'indoor', label: 'Indoor', icon: <Building2 className="w-4 h-4" /> },
    { id: 'exposure', label: 'Exposure', icon: <Activity className="w-4 h-4" /> },
    { id: 'advisor', label: 'AI Advisor', icon: <Bot className="w-4 h-4" /> },
  ];

  const profiles: Array<{ id: VulnerabilityProfile; label: string }> = [
    { id: 'pediatric', label: 'Child / Pediatric' },
    { id: 'senior_respiratory', label: 'Senior / Asthmatic' },
    { id: 'outdoor_athlete', label: 'Outdoor Athlete' },
    { id: 'normal_adult', label: 'General Adult' },
  ];

  const meta = telemetry.metadata;
  const isUnavailable = Boolean(meta.isUnavailable || telemetryError);

  return (
    <aside className="hidden md:flex flex-col w-60 shrink-0 bg-white/95 backdrop-blur-xl border-r border-white p-5 gap-5 min-h-dvh sticky top-0 h-dvh z-20 overflow-y-auto">
      {/* Top Section: Brand + Navigation */}
      <div className="space-y-6">
        <button
          type="button"
          onClick={() => setActiveTab('landing')}
          className="flex items-center space-x-2.5 cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5E9] rounded-xl p-1 -ml-1 hover:bg-white/50 transition-colors"
          title="Return to 3D Earth Entrance"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-b from-[#38BDF8] to-[#0284C7] flex items-center justify-center text-white shadow-sm shadow-[#0284C7]/25 ring-2 ring-white/90 shrink-0">
            <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
              <path d="M9.5 14.5 11.2 16l3.3-3.5" />
            </svg>
          </div>
          <span className="font-extrabold text-lg text-[#0C2340] tracking-tight">
            BreatheWise <span className="text-[#10B981] font-bold">AI</span>
          </span>
        </button>

        <nav aria-label="Primary Workspace Navigation" className="space-y-1.5">
          {navItems.map((item) => {
            const isActive =
              activeTab === item.id ||
              (item.id === 'exposure' && activeTab === 'simulator') ||
              (item.id === 'advisor' && activeTab === 'assistant');

            return (
              <button
                key={item.id}
                type="button"
                aria-current={isActive ? 'page' : undefined}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] text-white font-bold shadow-[0_6px_16px_rgba(14,165,233,0.32)]'
                    : 'text-[#334E68] hover:text-[#0C2340] hover:bg-white/70 font-semibold'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Utility Section Directly Below Navigation: Profile, Honest Provenance & Science */}
      <div className="space-y-3 pt-4 border-t border-[#CBE0F2]/80 text-xs">
        {/* Profile Selector */}
        <div className="space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#5A7896] px-1">
            Health Profile
          </span>
          <div className="relative">
            <select
              aria-label="Vulnerability Profile"
              value={userPreferences.vulnerabilityProfile}
              onChange={(e) => updateProfile(e.target.value as VulnerabilityProfile)}
              className="w-full appearance-none bg-white/90 hover:bg-white text-[#0F2C4C] text-xs font-semibold py-2 pl-8 pr-7 rounded-xl border border-[#CBE0F2] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/25 cursor-pointer shadow-2xs truncate"
            >
              {profiles.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.label}
                </option>
              ))}
            </select>
            <User className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#0EA5E9]" />
            <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#5A7896]" />
          </div>
        </div>

        {/* Data Provenance & Science Trigger */}
        <div className="flex items-center justify-between gap-1.5">
          <button
            type="button"
            onClick={() => setIsTransparencyOpen(true)}
            className="flex-1 inline-flex items-center space-x-1.5 px-2.5 py-1.5 rounded-xl bg-white/85 hover:bg-white border border-[#CBE0F2] text-[11px] font-bold cursor-pointer truncate"
            title="View data provenance and CPCB methodology"
          >
            {isUnavailable ? (
              <>
                <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                <span className="text-rose-700 truncate">Unavailable</span>
              </>
            ) : !isDemoMode && meta.isLive ? (
              <>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="text-[#065F46] truncate">Live CAMS</span>
              </>
            ) : meta.fetchTimestamp?.includes('Cached') ? (
              <>
                <span className="w-2 h-2 rounded-full bg-sky-500 shrink-0" />
                <span className="text-[#1E4976] truncate">Cached</span>
              </>
            ) : (
              <>
                <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                <span className="text-amber-800 truncate">Baseline</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={refreshData}
            disabled={isLoadingTelemetry}
            aria-label="Refresh telemetry data"
            className="p-1.5 rounded-xl bg-white/85 hover:bg-white border border-[#CBE0F2] text-[#365779] cursor-pointer shrink-0"
            title="Refresh Atmospheric Telemetry"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoadingTelemetry ? 'animate-spin text-[#0EA5E9]' : ''}`} />
          </button>

          <button
            type="button"
            onClick={() => setIsTransparencyOpen(true)}
            aria-label="Scientific Methodology"
            className="p-1.5 rounded-xl bg-white/85 hover:bg-white border border-[#CBE0F2] text-[#0284C7] cursor-pointer shrink-0"
            title="Methodology & Standards"
          >
            <FlaskConical className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
