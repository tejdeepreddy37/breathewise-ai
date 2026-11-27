import React, { Suspense, lazy } from 'react';
import { useApp } from './context/AppContext';
import { Sidebar } from './components/Sidebar';
import { IndiaLocationPicker } from './components/IndiaLocationPicker';
import { TransparencyDrawer } from './components/TransparencyDrawer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { LandingPage } from './components/LandingPage';
import { AlertTriangle, RefreshCw, FlaskConical } from 'lucide-react';

const OverviewWorkspace = lazy(() =>
  import('./components/OverviewWorkspace').then((m) => ({ default: m.OverviewWorkspace }))
);
const CommuteSimulator = lazy(() =>
  import('./components/CommuteSimulator').then((m) => ({ default: m.CommuteSimulator }))
);
const IndoorCoachView = lazy(() =>
  import('./components/IndoorCoachView').then((m) => ({ default: m.IndoorCoachView }))
);
const WhatIfSimulator = lazy(() =>
  import('./components/WhatIfSimulator').then((m) => ({ default: m.WhatIfSimulator }))
);
const AiAssistantWorkspace = lazy(() =>
  import('./components/AiAssistantWorkspace').then((m) => ({ default: m.AiAssistantWorkspace }))
);

export const App: React.FC = () => {
  const { activeTab, setActiveTab, telemetryError, refreshData, isLoadingTelemetry, setIsTransparencyOpen } = useApp();

  if (activeTab === 'landing') {
    return (
      <>
        <LandingPage />
        <TransparencyDrawer />
      </>
    );
  }

  const getHeaderMeta = () => {
    if (activeTab === 'commute') {
      return {
        title: 'Commute Intelligence',
        subtitle: 'Plan a cleaner, healthier commute with exposure-aware insights',
      };
    }
    if (activeTab === 'indoor') {
      return {
        title: 'Indoor Air Intelligence',
        subtitle: 'Understand and improve the air quality inside your spaces',
      };
    }
    if (activeTab === 'exposure' || activeTab === 'simulator') {
      return {
        title: 'Exposure / What-If Analysis',
        subtitle: 'Estimate your personal exposure and compare different scenarios',
      };
    }
    if (activeTab === 'advisor' || activeTab === 'assistant') {
      return {
        title: 'AI Advisor',
        subtitle: 'Your personal air quality and health assistant',
      };
    }
    return {
      title: 'Air Intelligence Overview',
      subtitle: 'Real-time air quality, trends, and health insights for your location',
    };
  };

  const headerMeta = getHeaderMeta();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#DDF1FE] via-[#CDE9FC] to-[#B7DFFA] flex font-sans text-[#0C2340] selection:bg-[#BAE6FD] selection:text-[#0C2340] relative overflow-x-hidden">
      {/* Subtle Bottom Horizon Clouds Matching Reference Panels */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-55">
        <img
          src={`${import.meta.env.BASE_URL}images/sky-clouds-backdrop.png`}
          alt=""
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* Desktop Left Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col min-w-0 pb-20 md:pb-8">
        {/* Mobile Brand + Utility Bar */}
        <div className="md:hidden flex items-center justify-between gap-2 px-3 py-2.5 bg-white/75 backdrop-blur-md border-b border-white/85">
          <button
            type="button"
            onClick={() => setActiveTab('landing')}
            className="flex items-center space-x-1.5 shrink-0 cursor-pointer"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-b from-[#38BDF8] to-[#0284C7] flex items-center justify-center text-white shrink-0">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
              </svg>
            </div>
            <span className="font-extrabold text-sm text-[#0C2340] whitespace-nowrap">
              BreatheWise <span className="text-[#10B981]">AI</span>
            </span>
          </button>

          <div className="flex items-center space-x-1.5 min-w-0">
            <IndiaLocationPicker />
            <button
              type="button"
              onClick={() => setIsTransparencyOpen(true)}
              aria-label="Science & Methodology"
              className="p-2 rounded-full bg-white border border-[#CBE0F2] text-[#0284C7] shrink-0"
            >
              <FlaskConical className="w-4 h-4" />
            </button>
          </div>
        </div>

        <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 space-y-5">
          {/* Consistent Top Workspace Header Row (Title + Subtitle on Left, Location Picker on Right) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-[#0C2340] tracking-tight">
                {headerMeta.title}
              </h1>
              <p className="text-xs sm:text-sm text-[#476788] font-medium">
                {headerMeta.subtitle}
              </p>
            </div>

            <div className="hidden md:block shrink-0">
              <IndiaLocationPicker />
            </div>
          </div>

          {/* Honest Unavailable Telemetry Banner */}
          {telemetryError && (
            <div className="rounded-2xl bg-amber-50/95 border border-amber-300 px-4 py-3 flex items-center justify-between gap-3 text-xs text-amber-900 shadow-xs">
              <div className="flex items-center space-x-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{telemetryError}</span>
              </div>
              <button
                type="button"
                onClick={refreshData}
                disabled={isLoadingTelemetry}
                className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold transition-colors cursor-pointer shrink-0"
              >
                <RefreshCw className={`w-3 h-3 ${isLoadingTelemetry ? 'animate-spin' : ''}`} />
                <span>Retry</span>
              </button>
            </div>
          )}

          {/* 5 Workspace Views */}
          <Suspense
            fallback={
              <div className="min-h-[360px] rounded-2xl bg-white/70 border border-white/80 p-6 flex items-center justify-center text-xs font-semibold text-[#476788]">
                Loading workspace...
              </div>
            }
          >
            {activeTab === 'overview' && <OverviewWorkspace />}
            {activeTab === 'commute' && <CommuteSimulator isDedicatedWorkspace={true} />}
            {activeTab === 'indoor' && <IndoorCoachView isDedicatedWorkspace={true} />}
            {(activeTab === 'exposure' || activeTab === 'simulator') && (
              <WhatIfSimulator isDedicatedWorkspace={true} />
            )}
            {(activeTab === 'advisor' || activeTab === 'assistant') && <AiAssistantWorkspace />}
          </Suspense>
        </main>
      </div>

      <TransparencyDrawer />
      <MobileBottomNav />
    </div>
  );
};

export default App;
