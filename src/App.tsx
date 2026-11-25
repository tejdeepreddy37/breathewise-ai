import React from 'react';
import { useApp } from './context/AppContext';
import { Header } from './components/Header';
import { HeroDirective } from './components/HeroDirective';
import { MetricsStrip } from './components/MetricsStrip';
import { DiurnalChart } from './components/DiurnalChart';
import { AiLivingPlanCard } from './components/AiLivingPlanCard';
import { CommuteSimulator } from './components/CommuteSimulator';
import { IndoorCoachView } from './components/IndoorCoachView';
import { WhatIfSimulator } from './components/WhatIfSimulator';
import { AiAssistantFeed } from './components/AiAssistantFeed';
import { TransparencyDrawer } from './components/TransparencyDrawer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { LandingPage } from './components/LandingPage';
import { 
  Home, 
  Navigation, 
  Fan, 
  Sliders, 
  MessageSquare, 
  Sparkles,
  ShieldCheck,
  CheckCircle,
  Clock
} from 'lucide-react';

export const App: React.FC = () => {
  const { activeTab, setActiveTab } = useApp();

  const desktopTabs = [
    { id: 'overview', label: 'Air Intelligence & Living Plan', icon: <Home className="w-4 h-4" /> },
    { id: 'commute', label: 'Commute Eco-Swap', icon: <Navigation className="w-4 h-4" /> },
    { id: 'indoor', label: 'Indoor Ventilation Coach', icon: <Fan className="w-4 h-4" /> },
    { id: 'simulator', label: 'What-If Exposure Sandbox', icon: <Sliders className="w-4 h-4" /> },
    { id: 'assistant', label: 'AI Living Assistant', icon: <MessageSquare className="w-4 h-4" /> },
  ];

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
      
      {/* Botanical Foliage Framing Overlay (Matches Image 2 top-left lush leaves) */}
      <div className="absolute top-0 left-0 w-24 sm:w-32 lg:w-36 pointer-events-none z-20 select-none -ml-2 -mt-2">
        <img
          src="/images/foliage-branch.png"
          alt="Framing botanical leaves"
          className="w-full h-auto drop-shadow-sm"
        />
      </div>

      <Header />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3.5 sm:px-6 lg:px-8 py-3 sm:py-4 space-y-3.5 sm:space-y-4 overflow-x-hidden">
        
        {/* View Switcher based on activeTab */}
        {activeTab === 'overview' && (
          <div className="space-y-3.5 sm:space-y-4 animate-in fade-in duration-200">
            {/* Signature Clean-Air Directive Hero (Exact Image 2 Match) */}
            <HeroDirective />

            {/* Scientific Telemetry Strip (Exact Image 2 Match) */}
            <MetricsStrip />

            {/* Exact 2x2 Grid Matching Image 2 Desktop and Sequential Mobile Stack */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-4">
              {/* Item 1: WindowSafe Diurnal Forecast (Desktop Top-Left, Mobile 1st) */}
              <div className="w-full order-1">
                <DiurnalChart />
              </div>

              {/* Item 2: What-If Exposure Sandbox (Desktop Top-Right, Mobile 2nd) */}
              <div className="w-full order-2">
                <WhatIfSimulator />
              </div>

              {/* Item 3: Commute Exposure & Eco-Swap (Desktop Bottom-Left, Mobile 4th) */}
              <div className="w-full order-4 lg:order-3">
                <CommuteSimulator />
              </div>

              {/* Item 4: Indoor Envelope & Air Coach (Desktop Bottom-Right, Mobile 3rd) */}
              <div className="w-full order-3 lg:order-4">
                <IndoorCoachView />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'commute' && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <HeroDirective />
            <CommuteSimulator />
          </div>
        )}

        {activeTab === 'indoor' && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <HeroDirective />
            <IndoorCoachView />
          </div>
        )}

        {activeTab === 'simulator' && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <HeroDirective />
            <WhatIfSimulator />
          </div>
        )}

        {activeTab === 'assistant' && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <HeroDirective />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              <div className="lg:col-span-5">
                <AiLivingPlanCard />
              </div>
              <div className="lg:col-span-7">
                <AiAssistantFeed />
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Scientific Transparency Modal */}
      <TransparencyDrawer />

      {/* Mobile Sticky Bottom Navigation */}
      <MobileBottomNav />

      {/* Footer */}
      <footer className="border-t border-cream-200/80 py-8 text-center text-xs text-slate-500 mt-auto bg-cream-50">
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
