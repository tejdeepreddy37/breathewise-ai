import React from 'react';
import { useApp, NavigationTab } from '../context/AppContext';
import { Home, Navigation, Fan, Sliders, MessageSquare } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const { activeTab, setActiveTab } = useApp();

  const tabs: Array<{ id: NavigationTab; label: string; icon: React.ReactNode }> = [
    { id: 'overview', label: 'Today', icon: <Home className="w-4 h-4" /> },
    { id: 'commute', label: 'Commute', icon: <Navigation className="w-4 h-4" /> },
    { id: 'indoor', label: 'Indoor', icon: <Fan className="w-4 h-4" /> },
    { id: 'simulator', label: 'What-If', icon: <Sliders className="w-4 h-4" /> },
    { id: 'assistant', label: 'Assistant', icon: <MessageSquare className="w-4 h-4" /> },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-cream-200/90 md:hidden pb-safe shadow-elevated">
      <div className="flex items-center justify-around h-16 px-2">
        {tabs.map((t) => {
          const isActive = activeTab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-2xl transition-all cursor-pointer ${
                isActive
                  ? 'text-forest-700 font-bold'
                  : 'text-slate-500 hover:text-slatecharcoal-800 font-medium'
              }`}
            >
              <div className={`p-1.5 rounded-xl transition-all ${isActive ? 'bg-forest-50 text-forest-700 shadow-2xs' : ''}`}>
                {t.icon}
              </div>
              <span className="text-[10px] mt-0.5 tracking-tight">{t.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
