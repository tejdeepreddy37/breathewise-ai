import React from 'react';
import { useApp } from '../context/AppContext';
import { Wind } from 'lucide-react';

interface SubpageContextBarProps {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
}

export const SubpageContextBar: React.FC<SubpageContextBarProps> = ({ title, subtitle, icon }) => {
  const { telemetry } = useApp();
  const dominant = telemetry.current.primaryPollutant || 'PM2.5';

  return (
    <div className="bg-white/85 backdrop-blur-md rounded-2xl border border-[#CBE0F2] p-3.5 sm:p-4 shadow-soft">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center space-x-3 min-w-0">
          {icon && (
            <div className="w-9 h-9 rounded-xl bg-[#E6F4FA] border border-[#BAE0F5] flex items-center justify-center shrink-0">
              {icon}
            </div>
          )}
          <div className="min-w-0">
            <h1 className="text-base sm:text-lg font-extrabold text-[#0C2D57] tracking-tight truncate">
              {title}
            </h1>
            <p className="text-[11px] sm:text-xs text-[#476788] truncate">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Dominant Pollutant Attribution */}
        <div className="hidden sm:flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#F0F7FD] border border-[#CBE0F2] text-xs font-medium text-[#365779] shrink-0">
          <Wind className="w-3.5 h-3.5 text-[#0891B2]" />
          <span>
            Dominant: <strong className="text-[#0C2D57] font-bold">{dominant}</strong>
          </span>
        </div>
      </div>
    </div>
  );
};
