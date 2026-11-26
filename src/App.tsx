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

export const App: React.FC = () => {
  const { activeTab } = useApp();

  if (activeTab === 'landing') {
    return (
      <>
        <LandingPage />
        <TransparencyDrawer />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFBF8] flex flex-col font-sans text-slatecharcoal-900 pb-20 md:pb-12 selection:bg-emerald-100 selection:text-emerald-800 relative overflow-x-hidden">
      <Header />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3.5 sm:px-6 lg:px-8 py-3 sm:py-4 space-y-3.5 sm:space-y-4 overflow-x-hidden">
        
        {/* View Switcher based on activeTab */}
        {activeTab === 'overview' && (
          <div className="space-y-3.5 sm:space-y-4 animate-in fade-in duration-200">
            {/* Signature Clean-Air Directive Hero */}
            <HeroDirective />

            {/* Scientific Telemetry Strip */}
            <MetricsStrip />

            {/* 2x2 Primary Overview Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-4 items-stretch">
              {/* Item 1: WindowSafe Diurnal Forecast */}
              <div className="w-full order-1 flex flex-col">
                <DiurnalChart />
              </div>

              {/* Item 2: What-If Exposure Sandbox */}
              <div className="w-full order-2 flex flex-col">
                <WhatIfSimulator />
              </div>

              {/* Item 3: Commute Exposure & Eco-Swap */}
              <div className="w-full order-4 lg:order-3 flex flex-col">
                <CommuteSimulator />
              </div>

              {/* Item 4: Indoor Envelope & Air Coach */}
              <div className="w-full order-3 lg:order-4 flex flex-col">
                <IndoorCoachView />
              </div>
            </div>
          </div>
        )}

        {/* Dedicated Commute Workspace */}
        {activeTab === 'commute' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <SubpageContextBar
              title="Commute Exposure & Eco-Swap Optimizer"
              subtitle="Analyze urban travel modes to minimize inhaled fine particulate dose and reduce transit carbon footprint"
            />
            <CommuteSimulator isDedicatedWorkspace={true} />
          </div>
        )}

        {/* Dedicated Indoor Air Coach Workspace */}
        {activeTab === 'indoor' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <SubpageContextBar
              title="Indoor Air Envelope & Ventilation Coach"
              subtitle="Dynamic mass-balance modeling, infiltration control, and air purifier performance optimization"
            />
            <IndoorCoachView isDedicatedWorkspace={true} />
          </div>
        )}

        {/* Dedicated What-If Sandbox Workspace */}
        {activeTab === 'simulator' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <SubpageContextBar
              title="What-If Respiratory Exposure Sandbox"
              subtitle="Calculate particulate intake and simulate protective intervention reductions using physical ventilation rates"
            />
            <WhatIfSimulator isDedicatedWorkspace={true} />
          </div>
        )}

        {/* Dedicated AI Assistant Workspace */}
        {activeTab === 'assistant' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <SubpageContextBar
              title="BreatheWise AI Living Assistant"
              subtitle="Adaptive 24-hour daily routine timeline and environmental living guidance powered by convective dispersion models"
            />
            <AiAssistantWorkspace />
          </div>
        )}

      </main>

      {/* Scientific Transparency Modal */}
      <TransparencyDrawer />

      {/* Mobile Sticky Bottom Navigation */}
      <MobileBottomNav />

      {/* Footer */}
      <footer className="border-t border-cream-200/80 py-8 pb-24 sm:pb-8 text-center text-xs text-slate-500 mt-auto bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-slatecharcoal-900">BreatheWise AI</span>
            <span>•</span>
            <span className="text-slate-600 font-medium">PromptWars Virtual Challenge 06: Urban Air Quality Assistant</span>
          </div>
          <div className="text-[11px] text-slate-400">
            Copernicus CAMS Ensemble, Open-Meteo, CPCB Standards & Google Gemini
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
