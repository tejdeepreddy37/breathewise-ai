import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { calculateInhaledDose, MASK_EFFICIENCIES } from '../engines/inhaledDose';
import { ActivityType } from '../types/engines';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from 'recharts';
import { Activity, Clock, Wind, Shield, ChevronDown } from 'lucide-react';

const ACTIVITY_LABELS: Record<ActivityType, string> = {
  resting_sleep: 'Resting (6 L/min)',
  desk_office: 'Desk / Office (8 L/min)',
  light_walking: 'Outdoor Walk (16 L/min)',
  cycling_commute: 'Cycling (35 L/min)',
  outdoor_running: 'Running (55 L/min)',
  heavy_cardio: 'Heavy Cardio (65 L/min)',
};

const MASK_LABELS: Record<keyof typeof MASK_EFFICIENCIES, string> = {
  none: 'No Mask (0%)',
  cloth: 'Cloth Mask (25%)',
  surgical: 'Surgical Mask (60%)',
  n95: 'N95 (≈95%)',
  n99: 'N99 (≈99%)',
};

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
    { name: maskType === 'none' ? 'Unmasked' : `With ${maskType.toUpperCase()}`, dose: result.estimatedInhaledMassUg, fill: '#34D399' },
  ];

  const pm25Display =
    pm25Source === 'severe'
      ? 'Severe (250 µg/m³)'
      : pm25Source === 'benchmark'
      ? 'Benchmark (100 µg/m³)'
      : `${cityPm25} µg/m³ (City)`;

  return (
    <div className="space-y-4 animate-in fade-in duration-200">
      {/* Top 3-Column Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        {/* Column 1: Scenario Inputs */}
        <div className="lg:col-span-4 rounded-2xl bg-white/88 backdrop-blur-md border border-white/95 p-5 shadow-[0_10px_28px_-8px_rgba(15,44,76,0.1)] flex flex-col justify-between space-y-3">
          <h2 className="text-[14px] font-extrabold text-[#0C2340]">
            Scenario Inputs
          </h2>

          <div className="space-y-2.5 flex-1 flex flex-col justify-center">
            {/* Activity */}
            <div className="relative rounded-xl bg-white/95 border border-[#DCEBF7] px-3 py-2 flex items-center space-x-2.5">
              <div className="w-7 h-7 rounded-full bg-[#EAF4FD] flex items-center justify-center shrink-0">
                <Activity className="w-3.5 h-3.5 text-[#0284C7]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-semibold text-[#5A7896] leading-none">Activity</div>
                <div className="text-xs font-bold text-[#0C2340] truncate pt-0.5">
                  {ACTIVITY_LABELS[activity]}
                </div>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-[#5A7896] shrink-0" />
              <select
                aria-label="Activity Intensity"
                value={activity}
                onChange={(e) => {
                  const val = e.target.value as ActivityType;
                  setActivity(val);
                  syncExposure({ activity: val });
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              >
                <option value="resting_sleep">Resting / Sleep (6 L/min)</option>
                <option value="desk_office">Desk / Office (8 L/min)</option>
                <option value="light_walking">Outdoor Walk (16 L/min)</option>
                <option value="cycling_commute">Cycling Commute (35 L/min)</option>
                <option value="outdoor_running">Outdoor Running (55 L/min)</option>
                <option value="heavy_cardio">HIIT / Heavy Cardio (65 L/min)</option>
              </select>
            </div>

            {/* Duration */}
            <div className="relative rounded-xl bg-white/95 border border-[#DCEBF7] px-3 py-2 flex items-center space-x-2.5">
              <div className="w-7 h-7 rounded-full bg-[#EAF4FD] flex items-center justify-center shrink-0">
                <Clock className="w-3.5 h-3.5 text-[#0284C7]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-semibold text-[#5A7896] leading-none">Duration</div>
                <div className="text-xs font-bold text-[#0C2340] truncate pt-0.5">
                  {durationMinutes} minutes
                </div>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-[#5A7896] shrink-0" />
              <select
                aria-label="Exposure Duration"
                value={durationMinutes}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setDurationMinutes(val);
                  syncExposure({ durationMinutes: val });
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              >
                <option value={15}>15 minutes</option>
                <option value={30}>30 minutes</option>
                <option value={45}>45 minutes</option>
                <option value={60}>60 minutes</option>
                <option value={90}>90 minutes</option>
              </select>
            </div>

            {/* Air Quality (PM2.5) */}
            <div className="relative rounded-xl bg-white/95 border border-[#DCEBF7] px-3 py-2 flex items-center space-x-2.5">
              <div className="w-7 h-7 rounded-full bg-[#EAF4FD] flex items-center justify-center shrink-0">
                <Wind className="w-3.5 h-3.5 text-[#0284C7]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-semibold text-[#5A7896] leading-none">Air Quality (PM₂.₅)</div>
                <div className="text-xs font-bold text-[#0C2340] truncate pt-0.5">
                  {pm25Display}
                </div>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-[#5A7896] shrink-0" />
              <select
                aria-label="Ambient PM2.5 Concentration"
                value={pm25Source}
                onChange={(e) => {
                  const val = e.target.value as 'city' | 'benchmark' | 'severe';
                  setPm25Source(val);
                  syncExposure({ pm25Source: val });
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              >
                {cityPm25 != null && (
                  <option value="city">
                    Current City ({cityPm25} µg/m³)
                  </option>
                )}
                <option value="benchmark">Benchmark Scenario (100 µg/m³)</option>
                <option value="severe">Severe Episode (250 µg/m³)</option>
              </select>
            </div>

            {/* Mask Protection */}
            <div className="relative rounded-xl bg-white/95 border border-[#DCEBF7] px-3 py-2 flex items-center space-x-2.5">
              <div className="w-7 h-7 rounded-full bg-[#EAF4FD] flex items-center justify-center shrink-0">
                <Shield className="w-3.5 h-3.5 text-[#0284C7]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-semibold text-[#5A7896] leading-none">Mask Protection</div>
                <div className="text-xs font-bold text-[#0C2340] truncate pt-0.5">
                  {MASK_LABELS[maskType]}
                </div>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-[#5A7896] shrink-0" />
              <select
                aria-label="Mask Protection Type"
                value={maskType}
                onChange={(e) => {
                  const val = e.target.value as keyof typeof MASK_EFFICIENCIES;
                  setMaskType(val);
                  syncExposure({ maskType: val });
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              >
                <option value="none">No Mask (0%)</option>
                <option value="cloth">Cloth Mask (25%)</option>
                <option value="surgical">Surgical Mask (60%)</option>
                <option value="n95">N95 (95%)</option>
                <option value="n99">N99 (99%)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Column 2: Exposure Results */}
        <div className="lg:col-span-4 rounded-2xl bg-white/88 backdrop-blur-md border border-white/95 p-5 shadow-[0_10px_28px_-8px_rgba(15,44,76,0.1)] flex flex-col justify-between space-y-4">
          <h2 className="text-[14px] font-extrabold text-[#0C2340]">
            Exposure Results
          </h2>

          <div className="flex items-center space-x-4 py-1">
            <div className="w-14 h-14 rounded-2xl bg-[#EAF4FD] border border-[#CFE4F7] flex items-center justify-center shrink-0">
              <svg className="w-8 h-8 text-[#0EA5E9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v9" />
                <path d="M12 12c-2-2-6-2-7 3-.7 3.5 1 6 4 6 2 0 3-1 3-3v-6Z" />
                <path d="M12 12c2-2 6-2 7 3 .7 3.5-1 6-4 6-2 0-3-1-3-3v-6Z" />
              </svg>
            </div>

            <div>
              <div className="text-xs font-semibold text-[#476788]">Inhaled Dose (PM₂.₅)</div>
              <div className="text-[36px] leading-tight font-extrabold text-[#0C2340] tabular-nums">
                {result.estimatedInhaledMassUg} µg
              </div>
              <span className="inline-block mt-0.5 px-2.5 py-0.5 rounded-full bg-[#B9F3D0]/85 text-[#065F46] text-[10px] font-bold">
                {maskType === 'none' ? 'Unmasked' : `With ${maskType.toUpperCase()}`}
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-center text-xs text-[#476788]">
              Without Mask: <strong className="font-extrabold text-[#0C2340] tabular-nums">{result.unmaskedDoseUg} µg</strong>
              <span className="mx-1.5 text-[#CBD5E1]">•</span>
              <span className="tabular-nums">{result.inhaledAirVolumeM3} m³ air</span>
            </div>
            <div className="rounded-xl bg-[#B9F3D0]/85 border border-[#86EFAC] py-2.5 px-3 text-center font-extrabold text-[15px] text-[#065F46]">
              {maskType === 'none'
                ? '0% filtration active'
                : `-${reductionPercent}% lower exposure`}
            </div>
          </div>
        </div>

        {/* Column 3: Scenario Comparison Bar Chart */}
        <div className="lg:col-span-4 rounded-2xl bg-white/88 backdrop-blur-md border border-white/95 p-5 shadow-[0_10px_28px_-8px_rgba(15,44,76,0.1)] flex flex-col justify-between space-y-2">
          <h2 className="text-[14px] font-extrabold text-[#0C2340]">
            Scenario Comparison
          </h2>

          <div className="h-[210px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 26, right: 16, left: -16, bottom: 4 }}>
                <CartesianGrid stroke="#EEF5FB" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#0C2340', fontWeight: 600 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: '#5A7896' }} axisLine={false} tickLine={false} />
                <Tooltip
                  formatter={(value: number) => [`${value} µg`, 'Inhaled Dose']}
                  contentStyle={{ borderRadius: '12px', border: '1px solid #CBE0F2', fontSize: '11px' }}
                />
                <Bar dataKey="dose" radius={[8, 8, 0, 0]} barSize={48} minPointSize={8}>
                  {chartData.map((entry, idx) => (
                    <Cell key={idx} fill={entry.fill} />
                  ))}
                  <LabelList
                    dataKey="dose"
                    position="top"
                    formatter={(val: number) => `${val} µg`}
                    style={{ fontSize: '11px', fontWeight: 700, fill: '#0C2340' }}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom Takeaway Bar */}
      <div className="rounded-2xl bg-white/90 backdrop-blur-md border border-white/95 px-5 py-3.5 flex items-center space-x-3 text-xs shadow-[0_8px_22px_-6px_rgba(15,44,76,0.08)]">
        <div className="w-8 h-8 rounded-lg bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center shrink-0">
          <Shield className="w-4 h-4 text-[#0284C7]" />
        </div>
        <div className="flex flex-wrap items-center gap-x-2.5">
          <span className="font-extrabold text-[#0C2340]">Takeaway</span>
          <span className="text-[#CBD5E1]">|</span>
          <span className="text-[#334E68] font-medium">
            {maskType === 'none'
              ? `Unprotected ${durationMinutes}-minute activity at ${activePm25} µg/m³ inhales ~${result.unmaskedDoseUg} µg PM₂.₅ (${result.whoExceedanceRatio}× WHO guideline). An N95 spares 95% of particulate mass.`
              : `Using a ${maskType.toUpperCase()} mask reduces your PM₂.₅ exposure by ~${reductionPercent}% (${result.doseAvoidedUg} µg spared) for this activity.`}
          </span>
        </div>
      </div>
    </div>
  );
};
