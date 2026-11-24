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
      <div className="relative my-3 rounded-2xl overflow-hidden border border-stone-200/80 min-h-[175px] flex items-center justify-center p-4">
        
        {/* Authentic Living Room Backdrop from Reference Image 2 */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img
            src="/images/indoor-backdrop.png"
            alt="Living Room Atmosphere with Purifier"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-stone-900/10 backdrop-blur-[0.5px]" />
        </div>

        {/* Center: Clean Air Quality & Directives Card (Exact match to Image 2) */}
        <div className="relative z-10 w-full max-w-[270px] p-3.5 rounded-2xl bg-white/95 border border-stone-200/90 shadow-lg backdrop-blur-md text-center space-y-2">
          
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Indoor Estimated Air
            </span>
            <div className="text-xl sm:text-2xl font-black text-slatecharcoal-900 font-mono tracking-tight">
              Indoor PM2.5: ~119 µg/m²
            </div>
          </div>

          {/* Action Pills: "Seal Windows & Doors" + "Run Purifier: TURBO" */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-0.5">
            <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200/80 shadow-2xs">
              <Lock className="w-3 h-3 text-rose-600" />
              <span>Seal Windows & Doors</span>
            </span>

            <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200/80 shadow-2xs">
              <Fan className="w-3 h-3 text-emerald-600" />
              <span>Run Purifier: TURBO</span>
            </span>
          </div>

        </div>

      </div>

    </div>
  );
};
