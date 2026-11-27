/**
 * Shape-Based Decision-Flip Sensitivity Engine
 *
 * Varies the diurnal contrast parameter k in [0, 1.5] (step 0.1):
 *   C_k(h) = max(0, μ + k × (C(h) − μ))
 * where μ is the daily mean PM2.5.
 *
 * Detects genuine changes in the primary Day Twin decision (main flexible
 * outdoor start hour + commute mode) and refines locally monotonic transitions
 * via deterministic bisection.
 */

import { EnvironmentalTelemetry } from '../types/telemetry';
import { VulnerabilityProfile } from '../types/engines';
import {
  DayActivity,
  buildNormalized24hPm25,
  optimizeDayRoutine,
  validateDaySchedule,
  withTransformedPm25Profile,
} from './dayTwin';

export interface DecisionFlipSweepPoint {
  k: number;
  decisionKey: string;
  decisionLabel: string;
  mainOutdoorStartHour: number | null;
  commuteMode: string | null;
  baselineUg: number;
  optimizedUg: number;
  savingUg: number;
  feasible: boolean;
}

export interface DecisionTransition {
  kLow: number;
  kHigh: number;
  kCrossover: number;
  verifiedBothSides: boolean;
  fromDecision: string;
  toDecision: string;
}

export interface DecisionFlipAnalysisResult {
  hasValidData: boolean;
  isMonotonic: boolean;
  hasCrossover: boolean;
  currentK: number;
  currentDecision: string;
  dailyMeanPm25: number;
  sweep: DecisionFlipSweepPoint[];
  transitions: DecisionTransition[];
  summaryText: string;
  limitationText: string;
}

function extractPrimaryDecision(
  optimizedActivities: DayActivity[]
): { key: string; label: string; mainOutdoorStartHour: number | null; commuteMode: string | null } {
  const mainOutdoor =
    optimizedActivities.find((a) => a.environment === 'outdoor' && a.category === 'exercise') ||
    optimizedActivities.find((a) => a.environment === 'outdoor');
  const mainCommute = optimizedActivities.find((a) => a.environment === 'commute');

  const outHr = mainOutdoor ? mainOutdoor.startHour : null;
  const commMode = mainCommute?.commuteMode || null;

  const hrStr =
    outHr === null
      ? 'No outdoor block'
      : `${outHr === 0 ? 12 : outHr > 12 ? outHr - 12 : outHr}${outHr >= 12 ? 'PM' : 'AM'}`;
  const modeStr = commMode ? commMode.replace(/_/g, ' ') : 'No commute';

  return {
    key: `${outHr ?? 'none'}|${commMode ?? 'none'}`,
    label: `${hrStr} + ${modeStr}`,
    mainOutdoorStartHour: outHr,
    commuteMode: commMode,
  };
}

export function transformProfileByContrast(basePm: number[], k: number): number[] {
  const mean = basePm.reduce((a, b) => a + b, 0) / Math.max(1, basePm.length);
  return basePm.map((c) => Math.max(0, +(mean + k * (c - mean)).toFixed(2)));
}

export function analyzeDecisionFlipSensitivity(
  activities: DayActivity[],
  telemetry: EnvironmentalTelemetry,
  profile: VulnerabilityProfile = 'normal_adult'
): DecisionFlipAnalysisResult {
  const basePm = buildNormalized24hPm25(telemetry);
  const schedErr = validateDaySchedule(activities);

  if (!basePm || schedErr) {
    return {
      hasValidData: false,
      isMonotonic: false,
      hasCrossover: false,
      currentK: 1.0,
      currentDecision: 'Unavailable',
      dailyMeanPm25: 0,
      sweep: [],
      transitions: [],
      summaryText: schedErr || 'Cannot run shape-based decision-flip analysis without valid hourly telemetry.',
      limitationText: 'Unavailable profile.',
    };
  }

  const dailyMeanPm25 = +(basePm.reduce((a, b) => a + b, 0) / basePm.length).toFixed(1);

  const evalAtK = (k: number): DecisionFlipSweepPoint => {
    const roundedK = +k.toFixed(4);
    const transformed = transformProfileByContrast(basePm, roundedK);
    const scenTel = withTransformedPm25Profile(telemetry, transformed);
    const opt = optimizeDayRoutine(activities, scenTel, profile);
    const dec = extractPrimaryDecision(opt.optimized.activities);
    return {
      k: roundedK,
      decisionKey: dec.key,
      decisionLabel: dec.label,
      mainOutdoorStartHour: dec.mainOutdoorStartHour,
      commuteMode: dec.commuteMode,
      baselineUg: opt.baseline.totalInhaledUg,
      optimizedUg: opt.optimized.totalInhaledUg,
      savingUg: opt.exposureSavedUg,
      feasible: opt.hasValidData && validateDaySchedule(opt.optimized.activities) === null,
    };
  };

  // Sweep k from 0.0 to 1.5 in step 0.1
  const sweep: DecisionFlipSweepPoint[] = [];
  for (let step = 0; step <= 15; step++) {
    sweep.push(evalAtK(+(step * 0.1).toFixed(1)));
  }

  const transitions: DecisionTransition[] = [];
  const seenKeys = new Set<string>();
  let revisitedPreviousKey = false;

  for (let i = 0; i < sweep.length; i++) {
    const cur = sweep[i];
    if (i > 0 && cur.decisionKey !== sweep[i - 1].decisionKey && seenKeys.has(cur.decisionKey)) {
      revisitedPreviousKey = true;
    }
    seenKeys.add(cur.decisionKey);

    if (i < sweep.length - 1 && cur.decisionKey !== sweep[i + 1].decisionKey) {
      // Refine boundary with 6 bisection steps
      let lo = cur.k;
      let hi = sweep[i + 1].k;
      const loKey = cur.decisionKey;
      for (let b = 0; b < 6; b++) {
        const mid = (lo + hi) / 2;
        const midEval = evalAtK(mid);
        if (midEval.decisionKey === loKey) {
          lo = mid;
        } else {
          hi = mid;
        }
      }
      const kCross = +((lo + hi) / 2).toFixed(3);
      const leftCheck = evalAtK(Math.max(0, kCross - 0.01));
      const rightCheck = evalAtK(Math.min(1.5, kCross + 0.01));
      const verifiedBothSides = leftCheck.decisionKey !== rightCheck.decisionKey;

      transitions.push({
        kLow: cur.k,
        kHigh: sweep[i + 1].k,
        kCrossover: kCross,
        verifiedBothSides,
        fromDecision: cur.decisionLabel,
        toDecision: sweep[i + 1].decisionLabel,
      });
    }
  }

  const currentPt = sweep.find((s) => Math.abs(s.k - 1.0) < 0.01) || sweep[10];
  const isMonotonic = !revisitedPreviousKey && transitions.length <= 2;
  const hasCrossover = transitions.length > 0;

  let summaryText = '';
  if (!hasCrossover) {
    summaryText = `No decision crossover detected across k ∈ [0, 1.5]. Primary decision (${currentPt.decisionLabel}) remains stable even if diurnal contrast flattens completely to the ${dailyMeanPm25} µg/m³ daily mean or amplifies to 1.5×.`;
  } else if (!isMonotonic) {
    summaryText = `Non-monotonic sweep across k ∈ [0, 1.5] with ${transitions.length} transitions; review the full curve rather than a single threshold.`;
  } else if (transitions.length === 1) {
    const t = transitions[0];
    summaryText = `Model decision flips near diurnal contrast k ≈ ${t.kCrossover}: below k=${t.kCrossover} it selects "${t.fromDecision}", while above k=${t.kCrossover} it selects "${t.toDecision}". Current modeled contrast is k = 1.0.`;
  } else {
    summaryText = `Detected ${transitions.length} decision transitions across k ∈ [0, 1.5] (at ${transitions.map((t) => `k≈${t.kCrossover}`).join(', ')}). Current modeled contrast is k = 1.0 (${currentPt.decisionLabel}).`;
  }

  return {
    hasValidData: true,
    isMonotonic,
    hasCrossover,
    currentK: 1.0,
    currentDecision: currentPt.decisionLabel,
    dailyMeanPm25,
    sweep,
    transitions,
    summaryText,
    limitationText:
      'Sensitivity result from our modeled diurnal shape transformation C_k(h) = μ + k(C(h) − μ), not a claim that real-world atmosphere varies linearly by k.',
  };
}
