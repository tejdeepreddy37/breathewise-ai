import React from 'react';
import { useApp } from './context/AppContext';
import { Header } from './components/Header';
import { HeroDirective } from './components/HeroDirective';
import { MetricsStrip } from './components/MetricsStrip';
import { DiurnalChart } from './components/DiurnalChart';
import { CommuteSimulator } from './components/CommuteSimulator';
import { IndoorCoachView } from './components/IndoorCoachView';
import { WhatIfSimulator } from './components/WhatIfSimulator';
import { AiAssistantWorkspace } from './components/AiAssistantWorkspace';
import { SubpageContextBar } from './components/SubpageContextBar';
import { TransparencyDrawer } from './components/TransparencyDrawer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { LandingPage } from './components/LandingPage';
import { AlertTriangle, RefreshCw, Car, Home, Sliders, Sparkles } from 'lucide-react';

export const App: React.FC = () => {
  const { activeTab, telemetryError, refreshData, isLoadingTelemetry } = useApp();

  if (activeTab === 'landing') {
    return (
      <>
        <LandingPage />
        <TransparencyDrawer />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#DCEEFB] via-[#EAF4FC] to-[#F3F8FD] flex flex-col font-sans text-[#0F2C4C] pb-20 md:pb-12 selection:bg-[#BAE6FD] selection:text-[#0C2D57] relative overflow-x-hidden">
      {/* Subtle Atmospheric Sky Backdrop */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-45">
        <img
          src={`${import.meta.env.BASE_URL}images/sky-clouds-backdrop.png`}
          alt=""
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      <Header />

      {/* Main Container */}
      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-3.5 sm:px-6 lg:px-8 py-3.5 sm:py-5 space-y-4 overflow-x-hidden">
        {/* Honest Telemetry Unavailable Banner */}
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

        {/* 1. Overview Workspace */}
        {activeTab === 'overview' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <HeroDirective />
            <MetricsStrip />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
              <div className="w-full order-1 flex flex-col">
                <DiurnalChart />
              </div>
              <div className="w-full order-2 flex flex-col">
                <WhatIfSimulator />
              </div>
              <div className="w-full order-4 lg:order-3 flex flex-col">
                <CommuteSimulator />
              </div>
              <div className="w-full order-3 lg:order-4 flex flex-col">
                <IndoorCoachView />
              </div>
            </div>
          </div>
        )}

        {/* 2. Dedicated Commute Workspace */}
        {activeTab === 'commute' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <SubpageContextBar
              title="Commute Exposure & Eco-Swap Optimizer"
              subtitle="Analyze urban travel modes to minimize inhaled particulate dose and reduce transit carbon footprint."
              icon={<Car className="w-4 h-4 text-[#0284C7]" />}
            />
            <CommuteSimulator isDedicatedWorkspace={true} />
          </div>
        )}

        {/* 3. Dedicated Indoor Workspace */}
        {activeTab === 'indoor' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <SubpageContextBar
              title="Indoor Air Envelope & Ventilation Coach"
              subtitle="Dynamic mass-balance modeling, infiltration control, and air purifier performance optimization."
              icon={<Home className="w-4 h-4 text-[#0284C7]" />}
            />
            <IndoorCoachView isDedicatedWorkspace={true} />
          </div>
        )}

        {/* 4. Dedicated Exposure Workspace */}
        {(activeTab === 'simulator' || activeTab === 'exposure') && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <SubpageContextBar
              title="What-If Respiratory Exposure Sandbox"
              subtitle="Calculate particulate intake and simulate protective intervention reductions using physical ventilation rates."
              icon={<Sliders className="w-4 h-4 text-[#0284C7]" />}
            />
            <WhatIfSimulator isDedicatedWorkspace={true} />
          </div>
        )}

        {/* 5. Dedicated AI Advisor Workspace */}
        {(activeTab === 'assistant' || activeTab === 'advisor') && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <SubpageContextBar
              title="BreatheWise AI Living Assistant"
              subtitle="Adaptive 24-hour daily routine timeline and personalized air-health guidance."
              icon={<Sparkles className="w-4 h-4 text-[#0284C7]" />}
            />
            <AiAssistantWorkspace />
          </div>
        )}
      </main>

      <TransparencyDrawer />
      <MobileBottomNav />
    </div>
  );
};

export default App;
