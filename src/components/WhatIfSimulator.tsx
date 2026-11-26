import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { calculateInhaledDose, MASK_EFFICIENCIES } from '../engines/inhaledDose';
import { ActivityType } from '../types/engines';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from 'recharts';
import { Activity, Clock, Wind, Shield, ChevronDown } from 'lucide-react';

export const WhatIfSimulator: React.FC<{ isDedicatedWorkspace?: boolean }> = () => {
  const { telemetry, scenarioState, updateScenario } = useApp();
  const isUnavailable = Boolean(telemetry.metadata.isUnavailable);
  const cityPm25 =
    !isUnavailable && typeof telemetry.current.pm25 === 'number' && Number.isFinite(telemetry.current.pm25)
      ? telemetry.current.pm25
      : null;

  const [activity, setActivity] = useState<ActivityType>(scenarioState.exposure.activity || 'light_walking');
  const [durationMinutes, setDurationMinutes] = useState<number>(scenarioState.exposure.durationMinutes || 60);
  const [maskType, setMaskType] = useState<keyof typeof MASK_EFFICIENCIES>(scenarioState.exposure.maskType || 'n95');
  const [pm25Source, setPm25Source] = useState<'city' | 'benchmark' | 'severe'>(
    cityPm25 != null ? scenarioState.exposure.pm25Source : 'benchmark'
  );

  const activePm25 =
    pm25Source === 'severe'
      ? 250
      : pm25Source === 'benchmark'
      ? 100
      : cityPm25 ?? 100;

  const result = calculateInhaledDose(activePm25, durationMinutes, activity, maskType);
  const reductionPercent = Math.round((MASK_EFFICIENCIES[maskType] || 0) * 100);

  const syncExposure = (patch: Partial<typeof scenarioState.exposure>) => {
    updateScenario('exposure', patch);
  };

  const chartData = [
    { name: 'Without Mask', dose: result.unmaskedDoseUg, fill: '#F472B6' },
    { name: maskType === 'none' ? 'Current (No Mask)' : `With ${maskType.toUpperCase()}`, dose: result.estimatedInhaledMassUg, fill: '#34D399' },
  ];

  return (
    <div className="space-y-4 animate-in fade-in duration-200">
      {/* Main 3-Column Layout Matching Panel 5 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
        {/* Column 1: Scenario Inputs */}
        <div className="rounded-3xl bg-white/85 backdrop-blur-md border border-white p-5 shadow-soft flex flex-col justify-between space-y-3.5">
          <h2 className="text-sm sm:text-base font-extrabold text-[#0C2340]">
            Scenario Inputs
          </h2>

          <div className="space-y-3 text-xs">
            {/* Activity */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-[#476788] flex items-center space-x-1">
                <Activity className="w-3 h-3 text-[#0EA5E9]" />
                <span>Activity</span>
              </label>
              <div className="relative">
                <select
                  aria-label="Activity Intensity"
                  value={activity}
                  onChange={(e) => {
                    const val = e.target.value as ActivityType;
                    setActivity(val);
                    syncExposure({ activity: val });
                  }}
                  className="w-full bg-[#F4F9FE] border border-[#CBE0F2] rounded-xl py-2 pl-3 pr-7 font-bold text-[#0C2340] cursor-pointer focus:outline-none"
                >
                  <option value="resting_sleep">Resting / Sleep (6 L/min)</option>
                  <option value="desk_office">Desk / Office (8 L/min)</option>
                  <option value="light_walking">Outdoor Walk (16 L/min)</option>
                  <option value="cycling_commute">Cycling Commute (35 L/min)</option>
                  <option value="outdoor_running">Outdoor Running (55 L/min)</option>
                  <option value="heavy_cardio">HIIT / Heavy Cardio (65 L/min)</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-[#5A7896] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Duration */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-[#476788] flex items-center space-x-1">
                <Clock className="w-3 h-3 text-[#0EA5E9]" />
                <span>Duration</span>
              </label>
              <div className="relative">
                <select
                  aria-label="Exposure Duration"
                  value={durationMinutes}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setDurationMinutes(val);
                    syncExposure({ durationMinutes: val });
                  }}
                  className="w-full bg-[#F4F9FE] border border-[#CBE0F2] rounded-xl py-2 pl-3 pr-7 font-bold text-[#0C2340] cursor-pointer focus:outline-none"
                >
                  <option value={15}>15 minutes</option>
                  <option value={30}>30 minutes</option>
                  <option value={45}>45 minutes</option>
                  <option value={60}>60 minutes</option>
                  <option value={90}>90 minutes</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-[#5A7896] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Air Quality (PM2.5) */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-[#476788] flex items-center space-x-1">
                <Wind className="w-3 h-3 text-[#0EA5E9]" />
                <span>Air Quality (PM2.5)</span>
              </label>
              <div className="relative">
                <select
                  aria-label="Ambient PM2.5 Concentration"
                  value={pm25Source}
                  onChange={(e) => {
                    const val = e.target.value as 'city' | 'benchmark' | 'severe';
                    setPm25Source(val);
                    syncExposure({ pm25Source: val });
                  }}
                  className="w-full bg-[#F4F9FE] border border-[#CBE0F2] rounded-xl py-2 pl-3 pr-7 font-bold text-[#0C2340] cursor-pointer focus:outline-none"
                >
                  {cityPm25 != null && (
                    <option value="city">
                      Current City ({cityPm25} µg/m³)
                    </option>
                  )}
                  <option value="benchmark">Benchmark Scenario (100 µg/m³)</option>
                  <option value="severe">Severe Episode (250 µg/m³)</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-[#5A7896] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Mask Protection */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-[#476788] flex items-center space-x-1">
                <Shield className="w-3 h-3 text-[#0EA5E9]" />
                <span>Mask Protection</span>
              </label>
              <div className="relative">
                <select
                  aria-label="Mask Protection Type"
                  value={maskType}
                  onChange={(e) => {
                    const val = e.target.value as keyof typeof MASK_EFFICIENCIES;
                    setMaskType(val);
                    syncExposure({ maskType: val });
                  }}
                  className="w-full bg-[#F4F9FE] border border-[#CBE0F2] rounded-xl py-2 pl-3 pr-7 font-bold text-[#0C2340] cursor-pointer focus:outline-none"
                >
                  <option value="none">No Mask (0%)</option>
                  <option value="cloth">Cloth Mask (25%)</option>
                  <option value="surgical">Surgical Mask (60%)</option>
                  <option value="n95">N95 (95%)</option>
                  <option value="n99">N99 (99%)</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-[#5A7896] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Column 2: Exposure Results */}
        <div className="rounded-3xl bg-white/85 backdrop-blur-md border border-white p-5 shadow-soft flex flex-col justify-between space-y-4">
          <h2 className="text-sm sm:text-base font-extrabold text-[#0C2340]">
            Exposure Results
          </h2>

          <div className="flex items-center space-x-4 py-2">
            <div className="w-14 h-14 rounded-2xl bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center shrink-0">
              <svg className="w-8 h-8 text-[#0EA5E9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v9" />
                <path d="M12 12c-2-2-6-2-7 3-.7 3.5 1 6 4 6 2 0 3-1 3-3v-6Z" />
                <path d="M12 12c2-2 6-2 7 3 .7 3.5-1 6-4 6-2 0-3-1-3-3v-6Z" />
              </svg>
            </div>

            <div>
              <div className="text-xs font-bold text-[#476788]">Inhaled Dose (PM2.5)</div>
              <div className="text-3xl sm:text-4xl font-black text-[#0C2340] font-mono">
                {result.estimatedInhaledMassUg} µg
              </div>
              <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-[#D1FAE5] text-[#065F46] text-[10px] font-extrabold">
                {maskType === 'none' ? 'Unmasked' : `With ${maskType.toUpperCase()}`}
              </span>
            </div>
          </div>

          <div className="space-y-2.5 pt-2 border-t border-[#E2EFFA]">
            <div className="flex justify-between text-xs text-[#476788]">
              <span>Without Mask Baseline:</span>
              <strong className="font-mono text-[#0C2340]">{result.unmaskedDoseUg} µg</strong>
            </div>
            <div className="flex justify-between text-xs text-[#476788]">
              <span>Inhaled Air Volume ({result.minuteVentilationRateLpm} L/min):</span>
              <strong className="font-mono text-[#0C2340]">{result.inhaledAirVolumeM3} m³</strong>
            </div>
            <div className="rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] py-2.5 px-3 text-center font-extrabold text-sm text-[#059669]">
              {maskType === 'none'
                ? '0% mask filtration active'
                : `-${reductionPercent}% lower exposure (${result.doseAvoidedUg} µg spared)`}
            </div>
          </div>
        </div>

        {/* Column 3: Scenario Comparison Bar Chart */}
        <div className="rounded-3xl bg-white/85 backdrop-blur-md border border-white p-5 shadow-soft flex flex-col justify-between space-y-3">
          <h2 className="text-sm sm:text-base font-extrabold text-[#0C2340]">
            Scenario Comparison
          </h2>

          <div className="h-52 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 24, right: 16, left: -12, bottom: 5 }}>
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#334E68', fontWeight: 600 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: '#5A7896' }} axisLine={false} tickLine={false} />
                <Tooltip
                  formatter={(value: number) => [`${value} µg`, 'Inhaled Dose']}
                  contentStyle={{ borderRadius: '12px', border: '1px solid #CBE0F2', fontSize: '11px' }}
                />
                <Bar dataKey="dose" radius={[10, 10, 0, 0]} barSize={56}>
                  {chartData.map((entry, idx) => (
                    <Cell key={idx} fill={entry.fill} />
                  ))}
                  <LabelList
                    dataKey="dose"
                    position="top"
                    formatter={(val: number) => `${val} µg`}
                    style={{ fontSize: '11px', fontWeight: 800, fill: '#0C2340', fontFamily: 'monospace' }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom Takeaway Bar */}
      <div className="rounded-2xl bg-white/85 backdrop-blur-md border border-[#CBE0F2] p-4 flex items-center space-x-3 text-xs shadow-2xs">
        <div className="w-9 h-9 rounded-xl bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center shrink-0">
          <Shield className="w-4 h-4 text-[#0284C7]" />
        </div>
        <div>
          <span className="font-extrabold text-[#0C2340]">Takeaway: </span>
          <span className="text-[#334E68] font-medium">
            {maskType === 'none'
              ? `Unprotected ${durationMinutes}-minute activity at ${activePm25} µg/m³ inhales ~${result.unmaskedDoseUg} µg of PM2.5 (${result.whoExceedanceRatio}× WHO 24h guideline). Selecting an N95 mask spares 95% of nominal particle mass.`
              : `Using a ${maskType.toUpperCase()} mask reduces your modeled PM2.5 intake by ~${reductionPercent}% (from ${result.unmaskedDoseUg} µg down to ${result.estimatedInhaledMassUg} µg) assuming proper facial seal.`}
          </span>
        </div>
      </div>
    </div>
  );
};
