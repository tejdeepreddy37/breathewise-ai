import React from 'react';
import { useApp, NavigationTab } from '../context/AppContext';
import { Home, Car, Building2, Activity, Bot, CalendarClock } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const { activeTab, setActiveTab } = useApp();

  const tabs: Array<{ id: NavigationTab; label: string; icon: React.ReactNode }> = [
    { id: 'overview', label: 'Overview', icon: <Home className="w-4 h-4" /> },
    { id: 'daytwin', label: 'Day Twin', icon: <CalendarClock className="w-4 h-4" /> },
    { id: 'commute', label: 'Commute', icon: <Car className="w-4 h-4" /> },
    { id: 'indoor', label: 'Indoor', icon: <Building2 className="w-4 h-4" /> },
    { id: 'exposure', label: 'Exposure', icon: <Activity className="w-4 h-4" /> },
    { id: 'advisor', label: 'Advisor', icon: <Bot className="w-4 h-4" /> },
  ];

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-lg border-t border-[#CBE0F2] md:hidden pb-safe shadow-elevated"
    >
      <div className="flex items-center justify-around h-16 px-1.5">
        {tabs.map((t) => {
          const isActive =
            activeTab === t.id ||
            (t.id === 'exposure' && activeTab === 'simulator') ||
            (t.id === 'advisor' && activeTab === 'assistant');
          return (
            <button
              key={t.id}
              type="button"
              aria-current={isActive ? 'page' : undefined}
              onClick={() => setActiveTab(t.id)}
              className={`flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-2xl transition-all cursor-pointer ${
                isActive ? 'text-[#0EA5E9] font-bold' : 'text-[#5A7896] hover:text-[#0C2340] font-medium'
              }`}
            >
              <div className={`p-1.5 rounded-xl transition-all ${isActive ? 'bg-[#E0F2FE] text-[#0EA5E9] shadow-2xs' : ''}`}>
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
