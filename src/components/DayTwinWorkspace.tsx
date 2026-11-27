import React, { useEffect, useMemo, useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  DAY_TWIN_PRESETS,
  DayActivity,
  optimizeDayRoutine,
} from '../engines/dayTwin';
import { CommuteMode } from '../types/engines';
import { MASK_EFFICIENCIES } from '../engines/inhaledDose';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  Sparkles,
  RotateCcw,
  Lock,
  Unlock,
  ArrowRight,
  Bot,
  AlertTriangle,
  Database,
  CheckCircle2,
  Shield,
} from 'lucide-react';

function formatHr(h: number): string {
  const norm = ((h % 24) + 24) % 24;
  if (norm === 0) return '12 AM';
  if (norm === 12) return '12 PM';
  return norm > 12 ? `${norm - 12} PM` : `${norm} AM`;
}

export const DayTwinWorkspace: React.FC = () => {
  const { telemetry, userPreferences, askAiWithPrompt, setDayTwinSummary } = useApp();

  const [presetId, setPresetId] = useState<string>(DAY_TWIN_PRESETS[0].id);
  const [activities, setActivities] = useState<DayActivity[]>(() =>
    DAY_TWIN_PRESETS[0].activities.map((a) => ({ ...a }))
  );
  const [hasOptimized, setHasOptimized] = useState<boolean>(false);

  const result = useMemo(
    () => optimizeDayRoutine(activities, telemetry, userPreferences.vulnerabilityProfile),
    [activities, telemetry, userPreferences.vulnerabilityProfile]
  );

  // Sync computed Day Twin context to AppContext so AI Advisor always sees real computed results
  useEffect(() => {
    if (!result.hasValidData) {
      setDayTwinSummary(`Day Twin (${telemetry.city}): ${result.dataQualityLabel} — ${result.dataLimitationNote}`);
      return;
    }
    const changedDecisions = result.decisions
      .filter((d) => d.changed)
      .map((d) => `${d.activityTitle}: ${d.whatChanged} (-${d.exposureDeltaUg} µg)`)
      .join('; ');
    const fixedItems = result.decisions
      .filter((d) => !d.changed)
      .map((d) => `${d.activityTitle} (${d.whatChanged})`)
      .join('; ');
    setDayTwinSummary(
      `Day Twin (${telemetry.city}, ${result.dataQualityLabel}): Baseline=${result.baseline.totalInhaledUg} µg/day (Peak ${formatHr(result.baseline.peakRiskHour)}: ${result.baseline.peakRiskUg} µg, Top=${result.baseline.topContributorTitle}); Optimized=${result.optimized.totalInhaledUg} µg/day (-${result.exposureSavedUg} µg / -${result.exposureSavedPercent}%, -${result.carbonSavedKg} kg CO2); Alternative N95=${result.alternativePlan.totalInhaledUg} µg (-${result.alternativePlan.exposureSavedPercent}%); Changes=[${changedDecisions || 'None'}]; Fixed/Unchanged=[${fixedItems}].`
    );
  }, [result, telemetry.city, setDayTwinSummary]);

  const handleLoadPreset = (nextId: string) => {
    const found = DAY_TWIN_PRESETS.find((p) => p.id === nextId) || DAY_TWIN_PRESETS[0];
    setPresetId(found.id);
    setActivities(found.activities.map((a) => ({ ...a })));
    setHasOptimized(false);
  };

  const toggleMovable = (id: string) => {
    setActivities((prev) =>
      prev.map((a) =>
        a.id === id
          ? {
              ...a,
              movable: !a.movable,
              constraintNote: !a.movable ? 'User unlocked as flexible' : 'Locked as fixed by user',
            }
          : a
      )
    );
  };

  const updateCommuteMode = (id: string, mode: CommuteMode) => {
    setActivities((prev) => prev.map((a) => (a.id === id ? { ...a, commuteMode: mode } : a)));
  };

  const updateMaskType = (id: string, mask: keyof typeof MASK_EFFICIENCIES) => {
    setActivities((prev) => prev.map((a) => (a.id === id ? { ...a, maskType: mask } : a)));
  };

  const contextualPrompts = [
    'Why did you move my workout?',
    'I cannot change my commute. What else can I do?',
    'Which one change gives me the biggest benefit?',
    'What are the limitations of this plan?',
  ];

  const displayedActivities = hasOptimized ? result.optimized.activities : result.baseline.activities;

  return (
    <div className="space-y-4 animate-in fade-in duration-200">
      {/* Row 1: Preset Controls + Optimize Action + Exposure Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        {/* Controls Card */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-white p-5 shadow-[0_12px_32px_-8px_rgba(14,165,233,0.16),0_2px_6px_rgba(15,44,76,0.05)] flex flex-col justify-between space-y-3">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-[14px] font-extrabold text-[#0C2340]">Day Routine Setup</h2>
              <span className="text-[10.5px] font-bold px-2.5 py-0.5 rounded-full bg-[#E0F2FE] text-[#0369A1]">
                {userPreferences.vulnerabilityProfile.replace(/_/g, ' ')}
              </span>
            </div>

            <div className="space-y-1">
              <label htmlFor="daytwin-preset" className="text-[11px] font-semibold text-[#476788]">
                Load Routine Preset
              </label>
              <select
                id="daytwin-preset"
                value={presetId}
                onChange={(e) => handleLoadPreset(e.target.value)}
                className="w-full bg-[#F8FBFF] border border-[#DCEBF7] rounded-xl py-2 px-3 text-xs font-bold text-[#0C2340] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5E9]"
              >
                {DAY_TWIN_PRESETS.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            <p className="text-[11px] text-[#5A7896] leading-snug">
              {DAY_TWIN_PRESETS.find((p) => p.id === presetId)?.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <button
              type="button"
              onClick={() => setHasOptimized(true)}
              disabled={!result.hasValidData}
              className="flex-1 inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] hover:brightness-105 disabled:opacity-50 text-white text-xs font-extrabold shadow-[0_6px_16px_rgba(14,165,233,0.3)] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5E9]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{hasOptimized ? 'Re-Optimize My Day' : 'Optimize My Day'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            {hasOptimized && (
              <button
                type="button"
                onClick={() => setHasOptimized(false)}
                className="inline-flex items-center space-x-1 py-2.5 px-3.5 rounded-full bg-[#F0F7FD] hover:bg-[#E0F2FE] text-[#0369A1] text-xs font-bold transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Baseline</span>
              </button>
            )}
          </div>
        </div>

        {/* Before vs After Exposure Comparison Card */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-white p-5 shadow-[0_12px_32px_-8px_rgba(14,165,233,0.16),0_2px_6px_rgba(15,44,76,0.05)] flex flex-col justify-between space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-[14px] font-extrabold text-[#0C2340]">
              Cumulative Daily Inhaled Exposure (PM₂.₅)
            </h2>
            <span className="inline-flex items-center space-x-1 text-[10.5px] font-bold px-2.5 py-0.5 rounded-full bg-[#F0F7FD] text-[#334E68] border border-[#DCEBF7]">
              <Database className="w-3 h-3 text-[#0284C7]" />
              <span>{result.dataQualityLabel}</span>
            </span>
          </div>

          {!result.hasValidData ? (
            <div className="flex items-center space-x-2.5 p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>{result.dataLimitationNote}</span>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-xl bg-[#F8FBFF] border border-[#E5EEF6] p-3">
                  <div className="text-[10.5px] font-bold text-[#5A7896] uppercase">Baseline Day</div>
                  <div className="text-2xl font-extrabold text-[#0C2340] tabular-nums mt-0.5">
                    {result.baseline.totalInhaledUg} µg
                  </div>
                  <div className="text-[10.5px] text-[#5A7896] mt-0.5 truncate">
                    Peak: {formatHr(result.baseline.peakRiskHour)} ({result.baseline.peakRiskUg} µg/h)
                  </div>
                </div>

                <div
                  className={`rounded-xl border p-3 transition-all ${
                    hasOptimized
                      ? 'bg-[#ECFDF5] border-[#A7F3D0]'
                      : 'bg-[#F8FBFF] border-[#E5EEF6]'
                  }`}
                >
                  <div className="text-[10.5px] font-bold text-[#059669] uppercase">
                    {hasOptimized ? 'Optimized Day' : 'Potential Optimized'}
                  </div>
                  <div className="text-2xl font-extrabold text-[#065F46] tabular-nums mt-0.5">
                    {result.optimized.totalInhaledUg} µg
                  </div>
                  <div className="text-[10.5px] font-bold text-[#059669] mt-0.5 tabular-nums">
                    {result.noMeaningfulImprovement
                      ? '0 µg meaningful reduction'
                      : `-${result.exposureSavedUg} µg (-${result.exposureSavedPercent}%) • -${result.carbonSavedKg} kg CO₂`}
                  </div>
                </div>

                <div className="rounded-xl bg-[#F0F7FD] border border-[#DCEBF7] p-3">
                  <div className="text-[10.5px] font-bold text-[#0369A1] uppercase">
                    Alt: Keep Times + N95
                  </div>
                  <div className="text-2xl font-extrabold text-[#0C2340] tabular-nums mt-0.5">
                    {result.alternativePlan.totalInhaledUg} µg
                  </div>
                  <div className="text-[10.5px] text-[#476788] mt-0.5 tabular-nums">
                    -{result.alternativePlan.exposureSavedUg} µg (-{result.alternativePlan.exposureSavedPercent}%)
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-[#476788] flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-[#EDF5FC]">
                <span>
                  Top baseline contributor: <strong className="text-[#0C2340]">{result.baseline.topContributorTitle}</strong> ({result.baseline.topContributorUg} µg)
                </span>
                <span className="text-[#5A7896]">
                  Best diurnal window: <strong className="text-[#0284C7]">{result.cleanAirWindow.displayWindow}</strong>
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Row 2: 24-Hour Exposure Comparison Chart */}
      {result.hasValidData && (
        <div className="rounded-2xl bg-white border border-white p-5 shadow-[0_12px_32px_-8px_rgba(14,165,233,0.16),0_2px_6px_rgba(15,44,76,0.05)] space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-[14px] font-extrabold text-[#0C2340]">
                24-Hour Hourly Inhaled Exposure: Baseline vs. Optimized (µg/hr)
              </h3>
              <p className="text-[11px] text-[#5A7896]">
                {result.dataLimitationNote}
              </p>
            </div>
            <div className="flex items-center space-x-4 text-[11px] font-bold">
              <span className="inline-flex items-center space-x-1.5 text-[#D97706]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <span>Baseline</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 text-[#059669]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                <span>Optimized</span>
              </span>
            </div>
          </div>

          <div
            className="h-[195px] w-full"
            role="img"
            aria-label={`24-hour exposure comparison chart: Baseline ${result.baseline.totalInhaledUg} micrograms vs Optimized ${result.optimized.totalInhaledUg} micrograms`}
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={result.hourlySeries} margin={{ top: 10, right: 12, left: -16, bottom: 0 }}>
                <defs>
                  <linearGradient id="dtBaseGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.28} />
                    <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.02} />
                  </linearGradient>
                  <linearGradient id="dtOptGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.32} />
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0.03} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#EDF5FC" vertical={false} />
                <XAxis
                  dataKey="hour"
                  tickFormatter={(h) => (h === 0 ? '12A' : h === 12 ? '12P' : h > 12 ? `${h - 12}P` : `${h}A`)}
                  ticks={[0, 4, 8, 12, 16, 20]}
                  tick={{ fontSize: 10.5, fill: '#334E68', fontWeight: 600 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis tick={{ fontSize: 10.5, fill: '#334E68', fontWeight: 600 }} axisLine={false} tickLine={false} />
                <Tooltip
                  formatter={(val: number, name: string) => [
                    `${val} µg`,
                    name === 'baselineInhaledUg' ? 'Baseline' : 'Optimized',
                  ]}
                  labelFormatter={(h) => `${formatHr(Number(h))}`}
                  contentStyle={{ borderRadius: '12px', border: '1px solid #CBE0F2', fontSize: '11px' }}
                />
                <Area type="monotone" dataKey="baselineInhaledUg" stroke="#F59E0B" strokeWidth={2.2} fill="url(#dtBaseGrad)" />
                <Area type="monotone" dataKey="optimizedInhaledUg" stroke="#10B981" strokeWidth={2.4} fill="url(#dtOptGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Row 3: 24-Hour Routine Builder / Timeline + Why This Plan Is Better */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        {/* Activity Timeline */}
        <div className="lg:col-span-7 rounded-2xl bg-white border border-white p-5 shadow-[0_12px_32px_-8px_rgba(14,165,233,0.16),0_2px_6px_rgba(15,44,76,0.05)] space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-[14px] font-extrabold text-[#0C2340]">
              {hasOptimized ? 'Optimized 24-Hour Schedule (Constraints Respected)' : 'Baseline 24-Hour Routine (Edit Constraints)'}
            </h3>
            <span className="text-[11px] font-semibold text-[#5A7896]">
              Click lock icon to toggle Fixed vs. Flexible
            </span>
          </div>

          <div className="space-y-2">
            {displayedActivities.map((act) => {
              const baseMatch = result.baseline.activities.find((b) => b.id === act.id);
              const wasModified =
                hasOptimized &&
                baseMatch &&
                (baseMatch.startHour !== act.startHour ||
                  baseMatch.commuteMode !== act.commuteMode ||
                  baseMatch.purifierOn !== act.purifierOn);

              return (
                <div
                  key={act.id}
                  className={`rounded-xl border p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs ${
                    wasModified
                      ? 'bg-[#ECFDF5]/80 border-[#A7F3D0]'
                      : 'bg-[#F8FBFF] border-[#E5EEF6]'
                  }`}
                >
                  <div className="min-w-0 space-y-0.5">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="font-mono text-[11px] font-bold text-[#0369A1] bg-[#E0F2FE] px-2 py-0.5 rounded-md tabular-nums">
                        {formatHr(act.startHour)} – {formatHr(act.endHour)}
                      </span>
                      <span className="font-extrabold text-[#0C2340]">{act.title}</span>
                      {wasModified && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#D1FAE5] text-[#065F46]">
                          Optimized
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-[#5A7896] flex flex-wrap items-center gap-x-2">
                      <span className="capitalize">{act.environment}</span>
                      <span>•</span>
                      <span>{act.constraintNote}</span>
                      {act.purifierOn && <span className="text-[#059669] font-semibold">• HEPA ON</span>}
                    </div>
                  </div>

                  <div className="flex items-center flex-wrap gap-1.5 shrink-0">
                    {!hasOptimized && act.environment === 'commute' && (
                      <select
                        aria-label={`${act.title} mode`}
                        value={act.commuteMode || 'two_wheeler_open'}
                        onChange={(e) => updateCommuteMode(act.id, e.target.value as CommuteMode)}
                        className="bg-white border border-[#CBE0F2] rounded-lg py-1 px-2 text-[11px] font-bold text-[#0C2340] cursor-pointer"
                      >
                        <option value="two_wheeler_open">Two-Wheeler</option>
                        <option value="auto_rickshaw">Auto</option>
                        <option value="non_ac_bus">Non-AC Bus</option>
                        <option value="ac_cab">AC Cab</option>
                        <option value="ac_metro">AC Metro</option>
                      </select>
                    )}

                    {!hasOptimized && (act.environment === 'outdoor' || act.environment === 'commute') && (
                      <select
                        aria-label={`${act.title} mask`}
                        value={act.maskType}
                        onChange={(e) => updateMaskType(act.id, e.target.value as keyof typeof MASK_EFFICIENCIES)}
                        className="bg-white border border-[#CBE0F2] rounded-lg py-1 px-2 text-[11px] font-bold text-[#0C2340] cursor-pointer"
                      >
                        <option value="none">No Mask</option>
                        <option value="surgical">Surgical</option>
                        <option value="n95">N95</option>
                      </select>
                    )}

                    <button
                      type="button"
                      onClick={() => toggleMovable(act.id)}
                      aria-label={act.movable ? `Lock ${act.title} as fixed` : `Unlock ${act.title} as flexible`}
                      className={`inline-flex items-center space-x-1 px-2 py-1 rounded-lg border text-[10.5px] font-bold cursor-pointer ${
                        act.movable
                          ? 'bg-white border-[#BAE6FD] text-[#0284C7]'
                          : 'bg-slate-100 border-slate-200 text-[#476788]'
                      }`}
                    >
                      {act.movable ? <Unlock className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
                      <span>{act.movable ? 'Flexible' : 'Fixed'}</span>
                    </button>

                    <span className="font-extrabold text-[#0C2340] tabular-nums min-w-[54px] text-right">
                      {act.inhaledUg} µg
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Decision Attribution ("Why This Plan Is Better") + Contextual AI */}
        <div className="lg:col-span-5 rounded-2xl bg-white border border-white p-5 shadow-[0_12px_32px_-8px_rgba(14,165,233,0.16),0_2px_6px_rgba(15,44,76,0.05)] flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <h3 className="text-[14px] font-extrabold text-[#0C2340]">
              Why This Plan Is Better
            </h3>

            {result.hasValidData && (
              <div className="space-y-2 max-h-[340px] overflow-y-auto pr-1">
                {result.decisions.map((d) => (
                  <div
                    key={d.activityId}
                    className={`rounded-xl border p-3 text-xs space-y-1 ${
                      d.changed ? 'bg-[#ECFDF5]/60 border-[#A7F3D0]' : 'bg-[#F8FBFF] border-[#E5EEF6]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-extrabold text-[#0C2340] flex items-center space-x-1.5">
                        {d.changed ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                        ) : (
                          <Shield className="w-3.5 h-3.5 text-[#5A7896] shrink-0" />
                        )}
                        <span>{d.activityTitle}</span>
                      </span>
                      <span
                        className={`font-extrabold tabular-nums text-[11px] ${
                          d.exposureDeltaUg > 0 ? 'text-[#059669]' : 'text-[#5A7896]'
                        }`}
                      >
                        {d.exposureDeltaUg > 0 ? `-${d.exposureDeltaUg} µg` : '0 µg'}
                      </span>
                    </div>
                    <div className="font-bold text-[#0369A1] text-[11px]">{d.whatChanged}</div>
                    <p className="text-[11px] text-[#334E68] leading-snug">{d.whyChanged}</p>
                    <p className="text-[10.5px] text-[#5A7896]">
                      <strong>Evidence:</strong> {d.evidence} • <strong>Trade-off:</strong> {d.tradeOff}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Contextual AI Advisor Prompts */}
          <div className="pt-3 border-t border-[#EDF5FC] space-y-2">
            <div className="text-[11px] font-extrabold text-[#0C2340] flex items-center space-x-1.5">
              <Bot className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Ask AI Advisor About Your Day Twin</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {contextualPrompts.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => askAiWithPrompt(q)}
                  className="text-left text-[11px] font-semibold px-2.5 py-1.5 rounded-lg bg-[#F0F7FD] hover:bg-[#E0F2FE] text-[#0369A1] border border-[#DCEBF7] transition-colors cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
