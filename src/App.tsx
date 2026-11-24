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

  return (
    <div className="min-h-screen bg-cream-100 flex flex-col font-sans text-slatecharcoal-900 pb-20 md:pb-10 selection:bg-forest-100 selection:text-forest-700">
      <Header />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-8 space-y-6">
        
        {/* Desktop Navigation Tabs */}
        <div className="hidden md:flex items-center space-x-2 border-b border-cream-300 pb-2">
          {desktopTabs.map((t) => {
            const isActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id as any)}
                className={`flex items-center space-x-2 py-2 px-4 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-forest-500 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slatecharcoal-900 hover:bg-white/80'
                }`}
              >
                {t.icon}
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>

        {/* View Switcher based on activeTab */}
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Signature Clean-Air Directive Hero */}
            <HeroDirective />

            {/* Scientific Telemetry Strip */}
            <MetricsStrip />

            {/* Two-Column Grid: Diurnal Chart + AI Living Plan */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 space-y-6">
                <DiurnalChart />
                <CommuteSimulator />
              </div>
              <div className="lg:col-span-5 space-y-6">
                <AiLivingPlanCard />
                <IndoorCoachView />
              </div>
            </div>

            {/* Physiological What-If Exposure Sandbox */}
            <WhatIfSimulator />
          </div>
        )}

        {activeTab === 'commute' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <HeroDirective />
            <CommuteSimulator />
          </div>
        )}

        {activeTab === 'indoor' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <HeroDirective />
            <IndoorCoachView />
          </div>
        )}

        {activeTab === 'simulator' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <HeroDirective />
            <WhatIfSimulator />
          </div>
        )}

        {activeTab === 'assistant' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-200">
            <div className="lg:col-span-4 space-y-4">
              <HeroDirective />
              <MetricsStrip />
            </div>
            <div className="lg:col-span-8">
              <AiAssistantFeed />
            </div>
          </div>
        )}

      </main>

      {/* Scientific Transparency Modal */}
      <TransparencyDrawer />

      {/* Mobile Sticky Bottom Navigation */}
      <MobileBottomNav />

      {/* Footer */}
      <footer className="border-t border-cream-300 py-6 text-center text-xs text-slate-500 mt-auto">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            <strong>BreatheWise AI</strong> • PromptWars Virtual Challenge 06: Urban Air Quality Assistant
          </div>
          <div className="text-[11px] text-slate-400">
            Powered by Copernicus CAMS, Open-Meteo, CPCB Standards & Google Gemini 2.5 Flash / Pro
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
