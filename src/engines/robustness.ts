/**
 * Deterministic Robustness & Scenario Validation Engine
 *
 * Stress-tests Air Day Twin recommendations across up to 9 deterministic
 * environmental perturbations (scaling, circular diurnal shifts, contrast
 * flattening, and adverse combined) using the exact same dayTwin.ts exposure math.
 *
 * IMPORTANT: Scenario win ratios are descriptive counts over constructed
 * perturbations — NEVER probabilities or statistical confidence intervals.
 */

import { EnvironmentalTelemetry } from '../types/telemetry';
import {
  DayActivity,
  buildNormalized24hPm25,
  evaluateScheduleOnTelemetry,
  validateDaySchedule,
  withTransformedPm25Profile,
} from './dayTwin';

export type RobustnessClassification = 'ROBUST' | 'SENSITIVE' | 'FRAGILE' | 'INCONCLUSIVE';

export interface RobustnessScenarioSpec {
  id: string;
  name: string;
  description: string;
  transform: (pm25: number[]) => number[];
}

export interface EvaluatedRobustnessScenario {
  id: string;
  name: string;
  description: string;
  baselineUg: number;
  candidateUg: number;
  savingUg: number;
  relativeSavingPct: number | null;
  outcome: 'WIN' | 'LOSS' | 'TIE' | 'INVALID';
  feasible: boolean;
  signature: string;
}

export interface RobustnessAnalysisResult {
  classification: RobustnessClassification;
  classificationReason: string;
  totalConfiguredScenarios: number;
  uniqueValidScenarios: number;
  deduplicatedCount: number;
  wins: number;
  losses: number;
  ties: number;
  invalidCount: number;
  descriptiveWinRatio: number; // wins / uniqueValidScenarios (NOT a probability)
  medianSavingUg: number;
  meanSavingUg: number;
  minSavingUg: number;
  maxSavingUg: number;
  worstCaseScenarioName: string;
  worstCaseLossUg: number;
  worstCaseLossToleranceUg: number;
  allConstraintsValid: boolean;
  scenarios: EvaluatedRobustnessScenario[];
}

const NUMERICAL_EPSILON_UG = 0.1;

function circularShift(arr: number[], shiftHours: number): number[] {
  const n = arr.length;
  return arr.map((_, h) => {
    const src = (((h - shiftHours) % n) + n) % n;
    return arr[src];
  });
}

function flattenContrast(arr: number[], factor: number): number[] {
  const mean = arr.reduce((a, b) => a + b, 0) / Math.max(1, arr.length);
  return arr.map((c) => Math.max(0, +(mean + factor * (c - mean)).toFixed(2)));
}

export const ROBUSTNESS_SCENARIO_SPECS: RobustnessScenarioSpec[] = [
  {
    id: 'baseline',
    name: 'Baseline profile',
    description: 'Unmodified modeled/calibrated 24-hour concentration profile.',
    transform: (pm) => pm.map((v) => Math.max(0, +v.toFixed(2))),
  },
  {
    id: 'scale_075',
    name: 'Concentration ×0.75',
    description: 'Whole-profile 25% lower ambient particulate levels.',
    transform: (pm) => pm.map((v) => Math.max(0, +(v * 0.75).toFixed(2))),
  },
  {
    id: 'scale_090',
    name: 'Concentration ×0.90',
    description: 'Whole-profile 10% lower ambient particulate levels.',
    transform: (pm) => pm.map((v) => Math.max(0, +(v * 0.9).toFixed(2))),
  },
  {
    id: 'scale_110',
    name: 'Concentration ×1.10',
    description: 'Whole-profile 10% higher ambient particulate levels.',
    transform: (pm) => pm.map((v) => Math.max(0, +(v * 1.1).toFixed(2))),
  },
  {
    id: 'scale_125',
    name: 'Concentration ×1.25',
    description: 'Whole-profile 25% higher ambient particulate levels.',
    transform: (pm) => pm.map((v) => Math.max(0, +(v * 1.25).toFixed(2))),
  },
  {
    id: 'shift_minus_2',
    name: 'Diurnal shift −2h',
    description: 'Circular 2-hour earlier shift of diurnal pollution peaks and valleys.',
    transform: (pm) => circularShift(pm, -2),
  },
  {
    id: 'shift_plus_2',
    name: 'Diurnal shift +2h',
    description: 'Circular 2-hour later shift of diurnal pollution peaks and valleys.',
    transform: (pm) => circularShift(pm, 2),
  },
  {
    id: 'flatten_50',
    name: 'Contrast flattened 50%',
    description: 'Diurnal deviation from daily mean compressed to 50% (weaker midday dispersion).',
    transform: (pm) => flattenContrast(pm, 0.5),
  },
  {
    id: 'adverse_combined',
    name: 'Adverse (×1.25 + 50% flat)',
    description: '25% higher pollution combined with 50% compressed diurnal dispersion.',
    transform: (pm) => flattenContrast(pm.map((v) => v * 1.25), 0.5),
  },
];

function computeMedian(sortedNums: number[]): number {
  if (sortedNums.length === 0) return 0;
  const mid = Math.floor(sortedNums.length / 2);
  if (sortedNums.length % 2 === 1) return sortedNums[mid];
  return +((sortedNums[mid - 1] + sortedNums[mid]) / 2).toFixed(1);
}

export function evaluateDayTwinRobustness(
  baselineActivities: DayActivity[],
  candidateActivities: DayActivity[],
  telemetry: EnvironmentalTelemetry
): RobustnessAnalysisResult {
  const basePm = buildNormalized24hPm25(telemetry);
  const baseConstraintErr = validateDaySchedule(baselineActivities);
  const candConstraintErr = validateDaySchedule(candidateActivities);
  const allConstraintsValid = !baseConstraintErr && !candConstraintErr;

  if (!basePm || !allConstraintsValid) {
    return {
      classification: 'INCONCLUSIVE',
      classificationReason: baseConstraintErr || candConstraintErr || 'Valid hourly environmental profile unavailable.',
      totalConfiguredScenarios: ROBUSTNESS_SCENARIO_SPECS.length,
      uniqueValidScenarios: 0,
      deduplicatedCount: 0,
      wins: 0,
      losses: 0,
      ties: 0,
      invalidCount: ROBUSTNESS_SCENARIO_SPECS.length,
      descriptiveWinRatio: 0,
      medianSavingUg: 0,
      meanSavingUg: 0,
      minSavingUg: 0,
      maxSavingUg: 0,
      worstCaseScenarioName: 'Unavailable',
      worstCaseLossUg: 0,
      worstCaseLossToleranceUg: 0,
      allConstraintsValid,
      scenarios: [],
    };
  }

  const seenSignatures = new Set<string>();
  const evaluated: EvaluatedRobustnessScenario[] = [];
  let deduplicatedCount = 0;

  for (const spec of ROBUSTNESS_SCENARIO_SPECS) {
    const transformed = spec.transform(basePm);
    if (transformed.some((v) => !Number.isFinite(v) || v < 0)) {
      continue;
    }
    const sig = transformed.map((v) => v.toFixed(2)).join(',');
    if (seenSignatures.has(sig)) {
      deduplicatedCount++;
      continue;
    }
    seenSignatures.add(sig);

    const scenTelemetry = withTransformedPm25Profile(telemetry, transformed);
    const baseEval = evaluateScheduleOnTelemetry(baselineActivities, scenTelemetry);
    const candEval = evaluateScheduleOnTelemetry(candidateActivities, scenTelemetry);

    if (!baseEval.valid || !candEval.valid || !Number.isFinite(baseEval.totalInhaledUg) || !Number.isFinite(candEval.totalInhaledUg)) {
      evaluated.push({
        id: spec.id,
        name: spec.name,
        description: spec.description,
        baselineUg: 0,
        candidateUg: 0,
        savingUg: 0,
        relativeSavingPct: null,
        outcome: 'INVALID',
        feasible: false,
        signature: sig,
      });
      continue;
    }

    const savingUg = +(baseEval.totalInhaledUg - candEval.totalInhaledUg).toFixed(1);
    const relPct =
      baseEval.totalInhaledUg > 0
        ? Math.round((savingUg / baseEval.totalInhaledUg) * 100)
        : null;

    let outcome: 'WIN' | 'LOSS' | 'TIE' = 'TIE';
    if (savingUg >= NUMERICAL_EPSILON_UG) outcome = 'WIN';
    else if (savingUg <= -NUMERICAL_EPSILON_UG) outcome = 'LOSS';

    evaluated.push({
      id: spec.id,
      name: spec.name,
      description: spec.description,
      baselineUg: baseEval.totalInhaledUg,
      candidateUg: candEval.totalInhaledUg,
      savingUg,
      relativeSavingPct: relPct,
      outcome,
      feasible: true,
      signature: sig,
    });
  }

  const validScenarios = evaluated.filter((s) => s.outcome !== 'INVALID');
  const invalidCount = evaluated.length - validScenarios.length;
  const wins = validScenarios.filter((s) => s.outcome === 'WIN').length;
  const losses = validScenarios.filter((s) => s.outcome === 'LOSS').length;
  const ties = validScenarios.filter((s) => s.outcome === 'TIE').length;

  const baselinePrimary = validScenarios[0]?.baselineUg ?? 0;
  // Predeclared worst-case loss tolerance: max(1% of baseline exposure, 0.1 µg)
  const worstCaseLossToleranceUg = +Math.max(baselinePrimary * 0.01, NUMERICAL_EPSILON_UG).toFixed(2);

  const savingsSorted = validScenarios.map((s) => s.savingUg).sort((a, b) => a - b);
  const medianSavingUg = computeMedian(savingsSorted);
  const meanSavingUg =
    validScenarios.length > 0
      ? +(validScenarios.reduce((acc, s) => acc + s.savingUg, 0) / validScenarios.length).toFixed(1)
      : 0;
  const minSavingUg = savingsSorted[0] ?? 0;
  const maxSavingUg = savingsSorted[savingsSorted.length - 1] ?? 0;

  let worstScenario = validScenarios[0];
  for (const s of validScenarios) {
    if (!worstScenario || s.savingUg < worstScenario.savingUg) {
      worstScenario = s;
    }
  }
  const worstCaseLossUg = worstScenario && worstScenario.savingUg < 0 ? +Math.abs(worstScenario.savingUg).toFixed(1) : 0;

  // Proportional classification thresholds
  const robustWinThreshold = Math.ceil((8 / 9) * validScenarios.length);
  const sensitiveWinThreshold = Math.ceil((6 / 9) * validScenarios.length);

  let classification: RobustnessClassification = 'INCONCLUSIVE';
  let classificationReason = '';

  if (validScenarios.length < 5 || !allConstraintsValid) {
    classification = 'INCONCLUSIVE';
    classificationReason = `Only ${validScenarios.length} valid unique scenarios (<5 minimum required for classification).`;
  } else if (wins >= robustWinThreshold && worstCaseLossUg <= worstCaseLossToleranceUg) {
    classification = 'ROBUST';
    classificationReason = `Candidate wins in ${wins}/${validScenarios.length} scenarios with worst-case loss (${worstCaseLossUg} µg) within tolerance (${worstCaseLossToleranceUg} µg).`;
  } else if (wins >= sensitiveWinThreshold && worstCaseLossUg <= worstCaseLossToleranceUg * 2) {
    classification = 'SENSITIVE';
    classificationReason = `Candidate wins in ${wins}/${validScenarios.length} scenarios, but falls short of the ${robustWinThreshold}/${validScenarios.length} ROBUST bar or tolerance.`;
  } else {
    classification = 'FRAGILE';
    classificationReason = `Candidate wins in only ${wins}/${validScenarios.length} scenarios or exhibits adverse downside (${worstCaseLossUg} µg loss).`;
  }

  return {
    classification,
    classificationReason,
    totalConfiguredScenarios: ROBUSTNESS_SCENARIO_SPECS.length,
    uniqueValidScenarios: validScenarios.length,
    deduplicatedCount,
    wins,
    losses,
    ties,
    invalidCount,
    descriptiveWinRatio: validScenarios.length > 0 ? +(wins / validScenarios.length).toFixed(2) : 0,
    medianSavingUg,
    meanSavingUg,
    minSavingUg,
    maxSavingUg,
    worstCaseScenarioName: worstScenario?.name || 'None',
    worstCaseLossUg,
    worstCaseLossToleranceUg,
    allConstraintsValid,
    scenarios: evaluated,
  };
}
