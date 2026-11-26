import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { calculateIndoorRecommendations, getIndianStandardTimeHour } from '../engines/indoorCoach';
import { IndoorSourceType } from '../types/engines';
import { Home, Lock, Wind, Fan } from 'lucide-react';

export const IndoorCoachView: React.FC<{ isDedicatedWorkspace?: boolean }> = ({ isDedicatedWorkspace = false }) => {
  const { telemetry, cleanAirWindow, userPreferences } = useApp();
  const [roomAreaM2, setRoomAreaM2] = useState<number>(userPreferences.roomSizeM2 || 20);
  const [indoorSource, setIndoorSource] = useState<IndoorSourceType>('none');

  const ambientPm25 = telemetry.current.pm25;
  const ambientO3 = telemetry.current.o3;
  const currentHour = getIndianStandardTimeHour();
  const rec = calculateIndoorRecommendations(ambientPm25, cleanAirWindow, currentHour, roomAreaM2, ambientO3, indoorSource);

  const isSealed = rec.windowAction === 'SEAL_COMPLETELY';
  const roomVolumeM3 = Math.round(roomAreaM2 * 2.8);
  const targetCadrM3H = Math.round(roomVolumeM3 * 4.8);

  const sourceOptions: Array<{ id: IndoorSourceType; label: string }> = [
    { id: 'none', label: 'None (Clean & Sealed)' },
    { id: 'cooking_frying', label: 'Cooking / Frying (+85 µg/m³)' },
    { id: 'incense_smoke', label: 'Incense / Agarbatti (+95 µg/m³)' },
    { id: 'high_co2_stuffy', label: 'High CO₂ / Stuffy Room' },
  ];

  return (
    <div
      className={`rounded-3xl bg-white/90 backdrop-blur-md border border-[#CBE0F2] shadow-soft ${
        isDedicatedWorkspace ? 'p-5 sm:p-7' : 'p-4 sm:p-5 flex flex-col justify-between h-full space-y-4'
      }`}
    >
      {/* Compact Header for Overview */}
      {!isDedicatedWorkspace && (
        <div className="flex items-center justify-between pb-2.5 border-b border-[#E2EFFA]">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#E6F4FA] text-[#0284C7] flex items-center justify-center border border-[#BAE0F5] shrink-0">
              <Home className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-extrabold text-[#0C2D57] tracking-tight">
                Indoor Envelope & Air Coach
              </h3>
              <p className="text-[11px] text-[#476788]">
                Room volume, ventilation & purifier CADR
              </p>
            </div>
          </div>
          <span className="text-[11px] font-bold font-mono text-[#0C2D57] bg-[#F0F7FD] px-2.5 py-1 rounded-full border border-[#CBE0F2]">
            {roomVolumeM3} m³
          </span>
        </div>
      )}

      {/* 3-Column Panel Layout (Matches Reference Panel 4) */}
      <div className={`grid grid-cols-1 ${isDedicatedWorkspace ? 'lg:grid-cols-3' : 'sm:grid-cols-2'} gap-4`}>
        {/* Col 1: Room Area & Volume */}
        <div className="bg-[#F4F9FE] rounded-2xl border border-[#D6E7F5] p-4 flex flex-col justify-between space-y-4">
          <div className="space-y-2.5">
            <div className="text-xs font-extrabold text-[#0C2D57]">Room Area</div>
            <div className="grid grid-cols-4 gap-1.5">
              {[12, 20, 35, 50].map((area) => (
                <button
                  key={area}
                  type="button"
                  onClick={() => setRoomAreaM2(area)}
                  className={`py-2 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                    roomAreaM2 === area
                      ? 'bg-[#0284C7] text-white shadow-sm'
                      : 'bg-white text-[#365779] hover:bg-[#E6F4FA] border border-[#CBE0F2]'
                  }`}
                >
                  {area} m²
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#CBE0F2] p-3">
            <div className="text-[11px] text-[#5A7896] font-semibold">Indoor Volume</div>
            <div className="text-base font-black font-mono text-[#0C2D57] mt-0.5">
              {roomVolumeM3} m³
            </div>
            <div className="text-[10px] text-[#5A7896] font-mono">
              ({roomAreaM2} m² × 2.8 m ceiling)
            </div>
          </div>
        </div>

        {/* Col 2: Indoor Source Radio List */}
        <div className="bg-[#F4F9FE] rounded-2xl border border-[#D6E7F5] p-4 space-y-2.5">
          <div className="text-xs font-extrabold text-[#0C2D57]">Indoor Source (Optional)</div>
          <div className="space-y-1.5">
            {sourceOptions.map((opt) => {
              const active = indoorSource === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setIndoorSource(opt.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl border text-xs font-semibold flex items-center space-x-2.5 transition-all cursor-pointer ${
                    active
                      ? 'bg-white border-[#0284C7] text-[#0C2D57] shadow-2xs'
                      : 'bg-white/60 border-[#D6E7F5] text-[#476788] hover:bg-white'
                  }`}
                >
                  <span
                    className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                      active ? 'border-[#0284C7] bg-[#0284C7]' : 'border-[#94BFE2]'
                    }`}
                  >
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </span>
                  <span className="truncate">{opt.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Col 3: Window Ventilation & HEPA Air Purifier Stacked Cards */}
        <div className={`space-y-3 ${!isDedicatedWorkspace ? 'sm:col-span-2' : ''}`}>
          {/* Card A: Window Ventilation */}
          <div
            className={`rounded-2xl border p-4 space-y-2 ${
              isSealed ? 'bg-[#FFF5F5] border-rose-200' : 'bg-[#ECFDF5] border-[#A7F3D0]'
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center space-x-2 text-xs font-extrabold text-[#0C2D57]">
                {isSealed ? (
                  <Lock className="w-4 h-4 text-rose-600" />
                ) : (
                  <Wind className="w-4 h-4 text-[#059669]" />
                )}
                <span>Window Ventilation</span>
              </div>
              <span
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider text-white ${
                  isSealed ? 'bg-rose-600' : 'bg-[#059669]'
                }`}
              >
                {isSealed ? 'SEAL ENVELOPE' : 'VENTILATE'}
              </span>
            </div>
            <p className="text-[11px] font-bold text-[#0C2D57]">
              {isSealed
                ? 'Keep Windows & Balcony Doors Sealed'
                : 'Open Windows for Convective Air Flush'}
            </p>
            <p className="text-[11px] text-[#365779] leading-relaxed">
              {rec.safetyReason}
            </p>
          </div>

          {/* Card B: HEPA Air Purifier */}
          <div className="rounded-2xl bg-[#F4F9FE] border border-[#CBE0F2] p-4 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center space-x-2 text-xs font-extrabold text-[#0C2D57]">
                <Fan className="w-4 h-4 text-[#0284C7]" />
                <span>HEPA Air Purifier</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#0284C7] text-white">
                SPEED: {rec.purifierRecommendation.recommendedSpeed}
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
              <span className="text-[#365779]">
                Target Indoor PM2.5:{' '}
                <strong className="font-mono font-black text-[#0C2D57]">
                  ~{rec.purifierRecommendation.estimatedPostCleanPm25} µg/m³
                </strong>
              </span>
              <span className="text-[#365779]">
                Required CADR:{' '}
                <strong className="font-mono font-black text-[#0284C7]">
                  ~{targetCadrM3H} m³/h
                </strong>
              </span>
            </div>
            <p className="text-[10px] text-[#5A7896]">
              Modeled at 4.8 ACH for {roomVolumeM3} m³ room volume (current outdoor baseline: {ambientPm25} µg/m³).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
