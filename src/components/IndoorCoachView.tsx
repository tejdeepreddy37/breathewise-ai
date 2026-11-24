import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { calculateIndoorRecommendations } from '../engines/indoorCoach';
import { IndoorSourceType } from '../types/engines';
import { Home, Lock, Wind, Fan, CheckCircle2, AlertCircle } from 'lucide-react';

export const IndoorCoachView: React.FC = () => {
  const { telemetry, cleanAirWindow, userPreferences } = useApp();
  const [roomAreaM2, setRoomAreaM2] = useState<number>(userPreferences.roomSizeM2 || 20);
  const [indoorSource, setIndoorSource] = useState<IndoorSourceType>('none');

  const ambientPm25 = telemetry.current.pm25;
  const ambientO3 = telemetry.current.o3;
  const currentHour = new Date().getHours();
  const rec = calculateIndoorRecommendations(ambientPm25, cleanAirWindow, currentHour, roomAreaM2, ambientO3, indoorSource);

  const isSealed = rec.windowAction === 'SEAL_COMPLETELY';

  return (
    <div className="rounded-3xl bg-white border border-stone-200/80 p-5 sm:p-6 shadow-xs flex flex-col justify-between h-full">
      
      {/* Header (Exact match to Image 2) */}
      <div className="flex items-start justify-between pb-3 border-b border-stone-100">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100 shrink-0">
            <Home className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slatecharcoal-900 tracking-tight">
              Indoor Envelope & Air Coach
            </h3>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Your home air quality and ventilation plan
            </p>
          </div>
        </div>
      </div>

      {/* Main Living Room Visual Graphic with Centered Directives Card (Matches Image 2) */}
      <div className="relative my-3 rounded-2xl overflow-hidden bg-gradient-to-tr from-stone-100 via-stone-50 to-emerald-50/40 border border-stone-200/80 p-5 min-h-[170px] flex items-center justify-between">
        
        {/* Left Side: Modern Living Room Plant SVG Illustration */}
        <div className="w-16 h-28 relative opacity-80 shrink-0 flex items-end">
          <svg viewBox="0 0 60 100" fill="none" className="w-full h-full text-emerald-800">
            {/* Flower Pot */}
            <path d="M15 70 L45 70 L40 100 L20 100 Z" fill="#D97706" opacity="0.6" />
            {/* Plant Stems and Leaves */}
            <path d="M30 70 Q25 40 10 30 Q15 45 30 70 Z" fill="currentColor" />
            <path d="M30 70 Q35 35 50 25 Q40 45 30 70 Z" fill="currentColor" />
            <path d="M30 70 Q30 20 30 10 Q35 30 30 70 Z" fill="currentColor" opacity="0.9" />
          </svg>
        </div>

        {/* Center: Clean Air Quality & Directives Card (Exact match to Image 2) */}
        <div className="flex-1 mx-2 p-3 sm:p-4 rounded-2xl bg-white/95 border border-stone-200/90 shadow-md backdrop-blur-md text-center space-y-2.5">
          
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Indoor Estimated Air
            </span>
            <div className="text-xl sm:text-2xl font-black text-slatecharcoal-900 font-mono tracking-tight">
              Indoor PM2.5: ~{rec.estimatedIndoorBaselinePm25} µg/m²
            </div>
          </div>

          {/* Action Pills: "Seal Windows & Doors" + "Run Purifier: TURBO" */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-0.5">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-rose-50 text-rose-700 border border-rose-200/80 shadow-2xs">
              <Lock className="w-3 h-3 text-rose-600" />
              <span>{isSealed ? 'Seal Windows & Doors' : 'Controlled Flush'}</span>
            </span>

            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200/80 shadow-2xs">
              <Fan className="w-3 h-3 text-emerald-600" />
              <span>Run Purifier: {rec.purifierRecommendation.recommendedSpeed}</span>
            </span>
          </div>

        </div>

        {/* Right Side: Air Purifier Appliance SVG Illustration */}
        <div className="w-14 h-28 relative opacity-90 shrink-0 flex items-end justify-center">
          <svg viewBox="0 0 50 90" fill="none" className="w-full h-full text-slate-300">
            {/* Purifier Body */}
            <rect x="5" y="15" width="40" height="70" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
            {/* Air Intake Grille Holes */}
            <circle cx="15" cy="50" r="1.5" fill="#94A3B8" />
            <circle cx="25" cy="50" r="1.5" fill="#94A3B8" />
            <circle cx="35" cy="50" r="1.5" fill="#94A3B8" />
            <circle cx="15" cy="60" r="1.5" fill="#94A3B8" />
            <circle cx="25" cy="60" r="1.5" fill="#94A3B8" />
            <circle cx="35" cy="60" r="1.5" fill="#94A3B8" />
            <circle cx="15" cy="70" r="1.5" fill="#94A3B8" />
            <circle cx="25" cy="70" r="1.5" fill="#94A3B8" />
            <circle cx="35" cy="70" r="1.5" fill="#94A3B8" />
            {/* Top Display Ring */}
            <circle cx="25" cy="28" r="6" fill="#10B981" opacity="0.8" />
          </svg>
        </div>

      </div>

    </div>
  );
};
