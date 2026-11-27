/**
 * Air Day Twin — Deterministic 24-Hour Personal Exposure Optimization Engine
 *
 * Reuses BreatheWise's verified scientific engines without duplicating math:
 * - inhaledDose.ts (US EPA minute ventilation + NIOSH mask efficiency)
 * - commuteSwap.ts (corridor micro-environment & carbon emission model)
 * - indoorCoach.ts (single-zone infiltration alpha & WindowSafe ceilings)
 * - windowSafe.ts (diurnal convective dispersion window)
 * - cpcbAqi.ts (official Indian CPCB NAQI sub-index calculation)
 */

import { EnvironmentalTelemetry } from '../types/telemetry';
import { ActivityType, CleanAirWindow, CommuteMode, VulnerabilityProfile } from '../types/engines';
import { calculateInhaledDose, MASK_EFFICIENCIES } from './inhaledDose';
import { calculateCommuteTradeoffs } from './commuteSwap';
import { calculateIndoorRecommendations } from './indoorCoach';
import { calculateCleanAirWindow } from './windowSafe';
import { calculateCpcbAqi } from './cpcbAqi';

export type DayActivityCategory = 'sleep' | 'exercise' | 'commute' | 'indoor_work' | 'errands' | 'home';
export type DayEnvironment = 'indoor' | 'outdoor' | 'commute';

export interface DayActivity {
  id: string;
  title: string;
  category: DayActivityCategory;
  startHour: number; // 0..23
  endHour: number;   // 1..24, endHour > startHour
  environment: DayEnvironment;
  activityIntensity: ActivityType;
  commuteMode?: CommuteMode;
  commuteDistanceKm?: number;
  maskType: keyof typeof MASK_EFFICIENCIES;
  purifierOn?: boolean;
  movable: boolean;
  allowedWindow?: [number, number];
  constraintNote: string;
}

export interface DayRoutinePreset {
  id: string;
  name: string;
  description: string;
  activities: DayActivity[];
}

export interface HourlyExposureSlot {
  hour: number;
  label: string;
  ambientPm25: number;
  cpcbAqi: number;
  provenance: 'modeled_cams' | 'calibrated_baseline' | 'interpolated';
  baselineInhaledUg: number;
  optimizedInhaledUg: number;
  baselineActivityTitle: string;
  optimizedActivityTitle: string;
}

export interface DayDecisionAttribution {
  activityId: string;
  activityTitle: string;
  changed: boolean;
  whatChanged: string;
  whyChanged: string;
  evidence: string;
  exposureDeltaUg: number; // positive = µg saved
  tradeOff: string;
  uncertainty: string;
}

export interface EvaluatedActivityResult extends DayActivity {
  inhaledUg: number;
  averageAmbientPm25: number;
  carbonKg: number;
}

export interface DayTwinSummaryMetrics {
  activities: EvaluatedActivityResult[];
  totalInhaledUg: number;
  totalCarbonKg: number;
  topContributorTitle: string;
  topContributorUg: number;
  peakRiskHour: number;
  peakRiskUg: number;
}

export interface DayTwinOptimizationResult {
  hasValidData: boolean;
  dataQualityLabel: string;
  dataLimitationNote: string;
  noMeaningfulImprovement: boolean;
  zeroImprovementReason: string | null;
  cleanAirWindow: CleanAirWindow;
  baseline: DayTwinSummaryMetrics;
  optimized: DayTwinSummaryMetrics;
  alternativePlan: {
    label: string;
    description: string;
    totalInhaledUg: number;
    exposureSavedUg: number;
    exposureSavedPercent: number;
  };
  exposureSavedUg: number;
  exposureSavedPercent: number;
  carbonSavedKg: number;
  hourlySeries: HourlyExposureSlot[];
  decisions: DayDecisionAttribution[];
  assumptions: string[];
  validationError: string | null;
}

export const DAY_TWIN_PRESETS: DayRoutinePreset[] = [
  {
    id: 'urban_commuter',
    name: 'Urban Commuter & Runner',
    description: 'Morning run at 6 AM, two-wheeler commute at 8 AM & 5 PM, fixed 9–5 office/college hours.',
    activities: [
      {
        id: 'sleep-am',
        title: 'Sleep (Night)',
        category: 'sleep',
        startHour: 0,
        endHour: 6,
        environment: 'indoor',
        activityIntensity: 'resting_sleep',
        maskType: 'none',
        purifierOn: false,
        movable: false,
        constraintNote: 'Fixed sleep schedule',
      },
      {
        id: 'morning-run',
        title: 'Outdoor Morning Run',
        category: 'exercise',
        startHour: 6,
        endHour: 7,
        environment: 'outdoor',
        activityIntensity: 'outdoor_running',
        maskType: 'none',
        movable: true,
        allowedWindow: [6, 21],
        constraintNote: 'Flexible 1h workout (6 AM – 9 PM)',
      },
      {
        id: 'prep-am',
        title: 'Breakfast & Morning Prep',
        category: 'home',
        startHour: 7,
        endHour: 8,
        environment: 'indoor',
        activityIntensity: 'desk_office',
        maskType: 'none',
        purifierOn: false,
        movable: false,
        constraintNote: 'Fixed morning household routine',
      },
      {
        id: 'commute-am',
        title: 'Morning Commute',
        category: 'commute',
        startHour: 8,
        endHour: 9,
        environment: 'commute',
        activityIntensity: 'light_walking',
        commuteMode: 'two_wheeler_open',
        commuteDistanceKm: 14,
        maskType: 'none',
        movable: true,
        allowedWindow: [8, 9],
        constraintNote: 'Fixed 8 AM arrival window; transit mode flexible',
      },
      {
        id: 'work-am',
        title: 'Morning Work / College',
        category: 'indoor_work',
        startHour: 9,
        endHour: 12,
        environment: 'indoor',
        activityIntensity: 'desk_office',
        maskType: 'none',
        purifierOn: false,
        movable: false,
        constraintNote: 'Immovable morning work / classes (9 AM – 12 PM)',
      },
      {
        id: 'midday-break',
        title: 'Midday Break (Flexible)',
        category: 'home',
        startHour: 12,
        endHour: 13,
        environment: 'indoor',
        activityIntensity: 'desk_office',
        maskType: 'none',
        purifierOn: false,
        movable: true,
        allowedWindow: [6, 21],
        constraintNote: 'Flexible 1h midday break',
      },
      {
        id: 'work-pm',
        title: 'Afternoon Work / College',
        category: 'indoor_work',
        startHour: 13,
        endHour: 17,
        environment: 'indoor',
        activityIntensity: 'desk_office',
        maskType: 'none',
        purifierOn: false,
        movable: false,
        constraintNote: 'Immovable afternoon work / classes (1 PM – 5 PM)',
      },
      {
        id: 'commute-pm',
        title: 'Return Commute',
        category: 'commute',
        startHour: 17,
        endHour: 18,
        environment: 'commute',
        activityIntensity: 'light_walking',
        commuteMode: 'two_wheeler_open',
        commuteDistanceKm: 14,
        maskType: 'none',
        movable: true,
        allowedWindow: [17, 18],
        constraintNote: 'Fixed 5 PM departure; transit mode flexible',
      },
      {
        id: 'errands-pm',
        title: 'Outdoor Errands & Walk',
        category: 'errands',
        startHour: 18,
        endHour: 19,
        environment: 'outdoor',
        activityIntensity: 'light_walking',
        maskType: 'none',
        movable: true,
        allowedWindow: [12, 21],
        constraintNote: 'Flexible 1h errands (12 PM – 9 PM)',
      },
      {
        id: 'home-pm',
        title: 'Evening & Sleep at Home',
        category: 'home',
        startHour: 19,
        endHour: 24,
        environment: 'indoor',
        activityIntensity: 'resting_sleep',
        maskType: 'none',
        purifierOn: false,
        movable: false,
        constraintNote: 'Fixed evening at home',
      },
    ],
  },
  {
    id: 'family_pediatric',
    name: 'Family & School Routine',
    description: 'School drop-off by auto, indoor study, and afternoon outdoor play.',
    activities: [
      {
        id: 'sleep-am',
        title: 'Night Rest',
        category: 'sleep',
        startHour: 0,
        endHour: 7,
        environment: 'indoor',
        activityIntensity: 'resting_sleep',
        maskType: 'none',
        purifierOn: false,
        movable: false,
        constraintNote: 'Fixed sleep hours',
      },
      {
        id: 'school-commute-am',
        title: 'School Drop-Off',
        category: 'commute',
        startHour: 7,
        endHour: 8,
        environment: 'commute',
        activityIntensity: 'light_walking',
        commuteMode: 'auto_rickshaw',
        commuteDistanceKm: 8,
        maskType: 'none',
        movable: true,
        allowedWindow: [7, 8],
        constraintNote: 'Fixed school bell; mode flexible',
      },
      {
        id: 'school-core',
        title: 'Classroom / Indoor Study',
        category: 'indoor_work',
        startHour: 8,
        endHour: 15,
        environment: 'indoor',
        activityIntensity: 'desk_office',
        maskType: 'none',
        purifierOn: false,
        movable: false,
        constraintNote: 'Immovable school hours',
      },
      {
        id: 'school-commute-pm',
        title: 'Afternoon Pickup',
        category: 'commute',
        startHour: 15,
        endHour: 16,
        environment: 'commute',
        activityIntensity: 'light_walking',
        commuteMode: 'auto_rickshaw',
        commuteDistanceKm: 8,
        maskType: 'none',
        movable: true,
        allowedWindow: [15, 16],
        constraintNote: 'Fixed pickup time; mode flexible',
      },
      {
        id: 'park-play',
        title: 'Outdoor Park / Play',
        category: 'exercise',
        startHour: 18,
        endHour: 19,
        environment: 'outdoor',
        activityIntensity: 'cycling_commute',
        maskType: 'none',
        movable: true,
        allowedWindow: [15, 20],
        constraintNote: 'Flexible 1h play (3 PM – 8 PM)',
      },
      {
        id: 'home-evening',
        title: 'Family Evening & Sleep',
        category: 'home',
        startHour: 19,
        endHour: 24,
        environment: 'indoor',
        activityIntensity: 'resting_sleep',
        maskType: 'none',
        purifierOn: false,
        movable: false,
        constraintNote: 'Fixed family evening',
      },
    ],
  },
];

function formatHourShort(h: number): string {
  const norm = ((h % 24) + 24) % 24;
  if (norm === 0) return '12 AM';
  if (norm === 12) return '12 PM';
  return norm > 12 ? `${norm - 12} PM` : `${norm} AM`;
}

export function validateDaySchedule(activities: DayActivity[]): string | null {
  if (!Array.isArray(activities) || activities.length === 0) {
    return 'Schedule must contain at least one activity.';
  }
  const occupied = new Array<string | null>(24).fill(null);
  for (const act of activities) {
    if (!Number.isInteger(act.startHour) || !Number.isInteger(act.endHour) || act.startHour < 0 || act.endHour > 24 || act.endHour <= act.startHour) {
      return `Invalid time bounds on "${act.title}" (${act.startHour}:00–${act.endHour}:00).`;
    }
    for (let h = act.startHour; h < act.endHour; h++) {
      if (occupied[h]) {
        return `Schedule overlap at ${formatHourShort(h)} between "${occupied[h]}" and "${act.title}".`;
      }
      occupied[h] = act.title;
    }
  }
  return null;
}

interface HourlyEnvPoint {
  hour: number;
  pm25: number;
  o3: number;
  cpcbAqi: number;
  provenance: 'modeled_cams' | 'calibrated_baseline' | 'interpolated';
}

function buildHourlyProfile(telemetry: EnvironmentalTelemetry): {
  valid: boolean;
  points: HourlyEnvPoint[];
  provenanceLabel: string;
} {
  if (telemetry.metadata.isUnavailable || !Array.isArray(telemetry.hourly) || telemetry.hourly.length < 2) {
    return { valid: false, points: [], provenanceLabel: 'Unavailable' };
  }

  const baseProvenance: 'modeled_cams' | 'calibrated_baseline' = telemetry.metadata.isSimulated
    ? 'calibrated_baseline'
    : 'modeled_cams';

  const byHour = new Map<number, { pm25: number; o3: number; cpcbAqi: number }>();
  for (const pt of telemetry.hourly) {
    if (pt && Number.isFinite(pt.hour) && typeof pt.pm25 === 'number' && Number.isFinite(pt.pm25) && pt.pm25 >= 0) {
      const h = ((Math.round(pt.hour) % 24) + 24) % 24;
      const o3 = typeof pt.o3 === 'number' && Number.isFinite(pt.o3) && pt.o3 >= 0 ? pt.o3 : 0;
      const aqi =
        typeof pt.cpcbAqi === 'number' && Number.isFinite(pt.cpcbAqi)
          ? pt.cpcbAqi
          : calculateCpcbAqi({ pm25: pt.pm25, o3 }).aqi;
      byHour.set(h, { pm25: pt.pm25, o3, cpcbAqi: aqi });
    }
  }

  if (byHour.size < 2) {
    return { valid: false, points: [], provenanceLabel: 'Unavailable' };
  }

  const knownHours = Array.from(byHour.keys()).sort((a, b) => a - b);
  const points: HourlyEnvPoint[] = [];

  for (let h = 0; h < 24; h++) {
    const exact = byHour.get(h);
    if (exact) {
      points.push({ hour: h, ...exact, provenance: baseProvenance });
    } else {
      // Nearest-neighbor deterministic fallback for sparse hourly arrays
      let nearest = knownHours[0];
      let bestDist = 24;
      for (const kh of knownHours) {
        const d = Math.abs(kh - h);
        if (d < bestDist) {
          bestDist = d;
          nearest = kh;
        }
      }
      const ref = byHour.get(nearest)!;
      points.push({ hour: h, ...ref, provenance: 'interpolated' });
    }
  }

  return {
    valid: true,
    points,
    provenanceLabel: telemetry.metadata.isSimulated
      ? 'Calibrated Offline Diurnal Baseline (Simulated)'
      : 'Open-Meteo / Copernicus CAMS 0.25° Hourly Model',
  };
}

function evaluateActivity(
  act: DayActivity,
  hourlyEnv: HourlyEnvPoint[]
): { evaluated: EvaluatedActivityResult; hourlyUg: number[] } {
  const durationHours = act.endHour - act.startHour;
  const hourlyUg = new Array<number>(24).fill(0);
  let totalUg = 0;
  let totalCarbonKg = 0;
  let pmSum = 0;

  for (let h = act.startHour; h < act.endHour; h++) {
    const env = hourlyEnv[h];
    pmSum += env.pm25;

    if (act.environment === 'commute' && act.commuteMode) {
      const dist = act.commuteDistanceKm ?? 14;
      const trades = calculateCommuteTradeoffs(dist, env.pm25);
      const match = trades.find((t) => t.mode === act.commuteMode) || trades[0];
      // Spread total trip dose/carbon evenly across the commute block hours
      const maskEff = MASK_EFFICIENCIES[act.maskType] ?? 0;
      const adjustedDose = +(match.inhaledDoseUg * (1 - maskEff) / durationHours).toFixed(2);
      hourlyUg[h] = adjustedDose;
      totalUg += adjustedDose;
      totalCarbonKg += match.carbonEmissionKg / durationHours;
    } else if (act.environment === 'indoor') {
      // Closed concrete envelope infiltration alpha = 0.45 (matches indoorCoach.ts);
      // HEPA purifier reduces steady-state indoor particulate by ~78% when active (~4.5 ACH)
      const alpha = 0.45;
      const purifierFactor = act.purifierOn ? 0.22 : 1.0;
      const indoorPm25 = Math.max(2, env.pm25 * alpha * purifierFactor);
      const dose = calculateInhaledDose(indoorPm25, 60, act.activityIntensity, act.maskType);
      hourlyUg[h] = dose.estimatedInhaledMassUg;
      totalUg += dose.estimatedInhaledMassUg;
    } else {
      const dose = calculateInhaledDose(env.pm25, 60, act.activityIntensity, act.maskType);
      hourlyUg[h] = dose.estimatedInhaledMassUg;
      totalUg += dose.estimatedInhaledMassUg;
    }
  }

  return {
    evaluated: {
      ...act,
      inhaledUg: +totalUg.toFixed(1),
      averageAmbientPm25: Math.round(pmSum / Math.max(1, durationHours)),
      carbonKg: +totalCarbonKg.toFixed(2),
    },
    hourlyUg,
  };
}

function summarizeDay(
  activities: DayActivity[],
  hourlyEnv: HourlyEnvPoint[]
): { metrics: DayTwinSummaryMetrics; perHourTotals: number[]; perHourTitle: string[] } {
  const evaluatedList: EvaluatedActivityResult[] = [];
  const perHourTotals = new Array<number>(24).fill(0);
  const perHourTitle = new Array<string>(24).fill('Free / Unscheduled');
  let totalInhaledUg = 0;
  let totalCarbonKg = 0;
  let topTitle = activities[0]?.title || 'None';
  let topUg = -1;

  for (const act of activities) {
    const { evaluated, hourlyUg } = evaluateActivity(act, hourlyEnv);
    evaluatedList.push(evaluated);
    totalInhaledUg += evaluated.inhaledUg;
    totalCarbonKg += evaluated.carbonKg;
    if (evaluated.inhaledUg > topUg) {
      topUg = evaluated.inhaledUg;
      topTitle = evaluated.title;
    }
    for (let h = act.startHour; h < act.endHour; h++) {
      perHourTotals[h] = +hourlyUg[h].toFixed(1);
      perHourTitle[h] = act.title;
    }
  }

  let peakRiskHour = 0;
  let peakRiskUg = -1;
  for (let h = 0; h < 24; h++) {
    if (perHourTotals[h] > peakRiskUg) {
      peakRiskUg = perHourTotals[h];
      peakRiskHour = h;
    }
  }

  return {
    metrics: {
      activities: [...evaluatedList].sort((a, b) => a.startHour - b.startHour),
      totalInhaledUg: +totalInhaledUg.toFixed(1),
      totalCarbonKg: +totalCarbonKg.toFixed(2),
      topContributorTitle: topTitle,
      topContributorUg: +Math.max(0, topUg).toFixed(1),
      peakRiskHour,
      peakRiskUg: +Math.max(0, peakRiskUg).toFixed(1),
    },
    perHourTotals,
    perHourTitle,
  };
}

export function evaluateScheduleOnTelemetry(
  activities: DayActivity[],
  telemetry: EnvironmentalTelemetry
): {
  valid: boolean;
  error: string | null;
  totalInhaledUg: number;
  totalCarbonKg: number;
  activities: EvaluatedActivityResult[];
} {
  const validationError = validateDaySchedule(activities);
  if (validationError) {
    return { valid: false, error: validationError, totalInhaledUg: 0, totalCarbonKg: 0, activities: [] };
  }
  const profileResult = buildHourlyProfile(telemetry);
  if (!profileResult.valid) {
    return { valid: false, error: 'Hourly environmental profile unavailable', totalInhaledUg: 0, totalCarbonKg: 0, activities: [] };
  }
  const summary = summarizeDay(activities, profileResult.points);
  return {
    valid: true,
    error: null,
    totalInhaledUg: summary.metrics.totalInhaledUg,
    totalCarbonKg: summary.metrics.totalCarbonKg,
    activities: summary.metrics.activities,
  };
}

export function buildNormalized24hPm25(telemetry: EnvironmentalTelemetry): number[] | null {
  const profileResult = buildHourlyProfile(telemetry);
  if (!profileResult.valid) return null;
  return profileResult.points.map((p) => p.pm25);
}

export function withTransformedPm25Profile(
  telemetry: EnvironmentalTelemetry,
  pm25ByHour: number[],
  metaOverride?: Partial<EnvironmentalTelemetry['metadata']>
): EnvironmentalTelemetry {
  const baseProfile = buildHourlyProfile(telemetry);
  const hourly = Array.from({ length: 24 }, (_, h) => {
    const existing = telemetry.hourly?.find((p) => ((Math.round(p.hour) % 24) + 24) % 24 === h);
    const basePt = baseProfile.points[h];
    const nextPm = Math.max(0, Math.round((pm25ByHour[h] ?? 0) * 10) / 10);
    const o3Val = existing?.o3 ?? basePt?.o3 ?? 0;
    const no2Val = existing?.no2 ?? null;
    const pm10Val = existing?.pm10 ?? null;
    const aqiRes = calculateCpcbAqi({ pm25: Math.round(nextPm), pm10: pm10Val, no2: no2Val, o3: o3Val });
    return {
      time: existing?.time || `2026-11-27T${String(h).padStart(2, '0')}:00`,
      hour: h,
      pm25: nextPm,
      pm10: pm10Val,
      no2: no2Val,
      o3: o3Val,
      usAqi: existing?.usAqi ?? aqiRes.aqi,
      cpcbAqi: aqiRes.aqi,
      boundaryLayerHeight: existing?.boundaryLayerHeight ?? null,
    };
  });

  const firstPm = Math.round(pm25ByHour[0] ?? telemetry.current.pm25 ?? 0);
  const currentAqi = calculateCpcbAqi({
    pm25: firstPm,
    pm10: telemetry.current.pm10,
    no2: telemetry.current.no2,
    so2: telemetry.current.so2,
    o3: telemetry.current.o3,
    co: telemetry.current.co,
  });

  return {
    ...telemetry,
    current: {
      ...telemetry.current,
      pm25: firstPm,
      aqi: currentAqi.aqi,
      aqiCategory: currentAqi.category,
      primaryPollutant: currentAqi.primaryPollutant,
    },
    hourly,
    metadata: {
      ...telemetry.metadata,
      ...metaOverride,
    },
  };
}

export function optimizeDayRoutine(
  inputActivities: DayActivity[],
  telemetry: EnvironmentalTelemetry,
  profile: VulnerabilityProfile = 'normal_adult'
): DayTwinOptimizationResult {
  const validationError = validateDaySchedule(inputActivities);
  const cleanAirWindow = calculateCleanAirWindow(telemetry.hourly || []);
  const profileResult = buildHourlyProfile(telemetry);

  if (validationError || !profileResult.valid) {
    const emptyMetrics: DayTwinSummaryMetrics = {
      activities: inputActivities.map((a) => ({
        ...a,
        inhaledUg: 0,
        averageAmbientPm25: 0,
        carbonKg: 0,
      })),
      totalInhaledUg: 0,
      totalCarbonKg: 0,
      topContributorTitle: 'Unavailable',
      topContributorUg: 0,
      peakRiskHour: 0,
      peakRiskUg: 0,
    };

    return {
      hasValidData: false,
      dataQualityLabel: validationError ? 'Invalid Schedule' : 'Telemetry Unavailable',
      dataLimitationNote:
        validationError ||
        'Hourly atmospheric telemetry is unavailable for this location. Air Day Twin will not fabricate exposure reductions without real data.',
      noMeaningfulImprovement: true,
      zeroImprovementReason: validationError || 'Missing hourly atmospheric telemetry.',
      cleanAirWindow,
      baseline: emptyMetrics,
      optimized: emptyMetrics,
      alternativePlan: {
        label: 'Unavailable',
        description: 'Cannot compute alternative plan without valid schedule and hourly data.',
        totalInhaledUg: 0,
        exposureSavedUg: 0,
        exposureSavedPercent: 0,
      },
      exposureSavedUg: 0,
      exposureSavedPercent: 0,
      carbonSavedKg: 0,
      hourlySeries: [],
      decisions: [],
      assumptions: [],
      validationError,
    };
  }

  const hourlyEnv = profileResult.points;
  const baselineSummary = summarizeDay(inputActivities, hourlyEnv);

  // Clone activities for deterministic optimization
  const working: DayActivity[] = inputActivities.map((a) => ({ ...a }));
  const decisions: DayDecisionAttribution[] = [];

  // Track occupied hours for movable outdoor rescheduling (excluding the currently evaluated movable block)
  const findFreeSlots = (
    excludeId: string,
    duration: number,
    minHour: number,
    maxHour: number
  ): number[] => {
    const occupied = new Array<boolean>(24).fill(false);
    for (const act of working) {
      if (act.id === excludeId) continue;
      for (let h = act.startHour; h < act.endHour; h++) {
        occupied[h] = true;
      }
    }
    const candidates: number[] = [];
    for (let s = Math.max(0, minHour); s <= Math.min(24 - duration, maxHour - duration); s++) {
      let free = true;
      for (let h = s; h < s + duration; h++) {
        if (occupied[h]) {
          free = false;
          break;
        }
      }
      if (free) candidates.push(s);
    }
    return candidates;
  };

  // Step 1: Optimize movable outdoor activities (find lowest-exposure feasible free slot; swap with flexible indoor if needed? Only free slots to guarantee zero overlap/displacement)
  // Also evaluate swapping two movable blocks or shifting into unallocated/indoor-replaceable slots?
  // Note: If the 24h day is 100% packed with fixed blocks, only unscheduled or other movable blocks can swap!
  // Let's check: in our presets, if a user has a movable outdoor block (e.g. 6-7 AM) and fixed 9-5 work + fixed 7-8 PM home, wait:
  // If 7-8 PM is fixed home, can 6-7 AM run move to 12-1 PM? Not if 9-5 work is immovable!
  // Instead, can 6-7 AM run swap with 7-8 AM? No, 7-8 AM is fixed prep. Can it move to 7-8 PM / 3-4 PM?
  // Wait: in `urban_commuter`, 12-5 PM is `Office / College Hours` (9-17). What if evening errands (6-7 PM) or morning run (6-7 AM) are movable, AND `Evening & Sleep at Home` (19-24) allows swapping an outdoor block into 19-21 (7-9 PM) OR `Office / College Hours` has a lunch break, OR `home` blocks yield 1 hour?
  // Let's make sure the presets leave realistic flexible slots OR allow `home`/`errands` movable blocks to swap cleanly!
  // Specifically: in `urban_commuter`, let `19:00-21:00` be `Evening Leisure at Home` (`movable: true`, `home`) and `21:00-24:00` be `Night Sleep` (`movable: false`), AND `12:00-13:00` be `Midday Break` (`movable: true`, `home`/`indoor_work`) so the optimizer genuinely tests moving a 6 AM run or 6 PM walk into the cleaner midday convective window (e.g. 12–1 PM) OR evening cleaner window without ever violating fixed work hours (9–12, 13–17)!
  // Let's handle BOTH free-slot search AND pairwise swap with another `movable` lower-intensity block!

  for (let i = 0; i < working.length; i++) {
    const act = working[i];
    if (act.environment === 'outdoor') {
      const origEval = evaluateActivity(act, hourlyEnv).evaluated;
      if (!act.movable) {
        decisions.push({
          activityId: act.id,
          activityTitle: act.title,
          changed: false,
          whatChanged: 'Kept at original time',
          whyChanged: `Marked as fixed (${act.constraintNote}).`,
          evidence: `Ambient PM2.5 averages ${origEval.averageAmbientPm25} µg/m³ (${origEval.inhaledUg} µg inhaled).`,
          exposureDeltaUg: 0,
          tradeOff: 'None — constraint preserved.',
          uncertainty: 'Regional 0.25° grid model.',
        });
        continue;
      }

      const [minH, maxH] = act.allowedWindow || [6, 21];
      const dur = act.endHour - act.startHour;
      let bestStart = act.startHour;
      let bestUg = origEval.inhaledUg;
      let swapPartnerIdx: number | null = null;

      // 1a. Check free slots
      const freeStarts = findFreeSlots(act.id, dur, minH, maxH);
      for (const s of freeStarts) {
        const candidate: DayActivity = { ...act, startHour: s, endHour: s + dur };
        const candUg = evaluateActivity(candidate, hourlyEnv).evaluated.inhaledUg;
        if (candUg + 0.5 < bestUg) {
          bestUg = candUg;
          bestStart = s;
          swapPartnerIdx = null;
        }
      }

      // 1b. Check swapping with another movable block of same duration (e.g., midday break)
      for (let j = 0; j < working.length; j++) {
        if (i === j) continue;
        const partner = working[j];
        if (!partner.movable || partner.environment === 'commute') continue;
        const partnerDur = partner.endHour - partner.startHour;
        if (partnerDur !== dur) continue;
        if (partner.startHour < minH || partner.endHour > maxH) continue;
        const [pMin, pMax] = partner.allowedWindow || [0, 24];
        if (act.startHour < pMin || act.endHour > pMax) continue;

        const candAct: DayActivity = { ...act, startHour: partner.startHour, endHour: partner.endHour };
        const candPartner: DayActivity = { ...partner, startHour: act.startHour, endHour: act.endHour };
        const beforePair = origEval.inhaledUg + evaluateActivity(partner, hourlyEnv).evaluated.inhaledUg;
        const afterPair =
          evaluateActivity(candAct, hourlyEnv).evaluated.inhaledUg +
          evaluateActivity(candPartner, hourlyEnv).evaluated.inhaledUg;

        if (beforePair - afterPair > 1.0 && beforePair - afterPair > origEval.inhaledUg - bestUg) {
          bestUg = evaluateActivity(candAct, hourlyEnv).evaluated.inhaledUg;
          bestStart = partner.startHour;
          swapPartnerIdx = j;
        }
      }

      const deltaUg = +(origEval.inhaledUg - bestUg).toFixed(1);
      if (bestStart !== act.startHour && deltaUg >= 1.0) {
        const oldWindow = `${formatHourShort(act.startHour)}–${formatHourShort(act.endHour)}`;
        const newWindow = `${formatHourShort(bestStart)}–${formatHourShort(bestStart + dur)}`;
        if (swapPartnerIdx !== null) {
          const partner = working[swapPartnerIdx];
          working[swapPartnerIdx] = { ...partner, startHour: act.startHour, endHour: act.endHour };
        }
        working[i] = { ...act, startHour: bestStart, endHour: bestStart + dur };
        const newAvgPm = evaluateActivity(working[i], hourlyEnv).evaluated.averageAmbientPm25;

        // Check WindowSafe / severe exertion safety rule
        const safetyCaveat =
          newAvgPm > 120
            ? ' Severe smog (>120 µg/m³) persists — shift exercise indoors with HEPA or wear an N95.'
            : '';

        decisions.push({
          activityId: act.id,
          activityTitle: act.title,
          changed: true,
          whatChanged: `Moved from ${oldWindow} to ${newWindow}`,
          whyChanged: `Shifted out of higher-pollution hours (${origEval.averageAmbientPm25} µg/m³) into cleaner diurnal dispersion window (${newAvgPm} µg/m³).${safetyCaveat}`,
          evidence: `PM2.5 drops from ${origEval.averageAmbientPm25} to ${newAvgPm} µg/m³ across ${dur}h at ${act.activityIntensity.replace(/_/g, ' ')}.`,
          exposureDeltaUg: deltaUg,
          tradeOff: swapPartnerIdx !== null ? `Swaps slot with ${working[swapPartnerIdx].title}.` : 'Uses an open flexible daytime slot.',
          uncertainty: 'Assumes planned activity intensity and diurnal model curve hold.',
        });
      } else {
        decisions.push({
          activityId: act.id,
          activityTitle: act.title,
          changed: false,
          whatChanged: 'Kept at original time',
          whyChanged: 'No feasible alternative slot within your constraints offered a meaningful (>1 µg) exposure drop.',
          evidence: `Original slot (${origEval.averageAmbientPm25} µg/m³) is already near-optimal within [${formatHourShort(minH)}–${formatHourShort(maxH)}].`,
          exposureDeltaUg: 0,
          tradeOff: 'None.',
          uncertainty: 'Regional hourly CAMS resolution.',
        });
      }
    } else if (act.environment === 'commute' && act.commuteMode) {
      const origEval = evaluateActivity(act, hourlyEnv).evaluated;
      if (!act.movable || act.commuteMode === 'ac_metro' || act.commuteMode === 'work_from_home') {
        decisions.push({
          activityId: act.id,
          activityTitle: act.title,
          changed: false,
          whatChanged: 'Commute mode unchanged',
          whyChanged: act.movable
            ? 'Already using low-exposure transit mode.'
            : `Commute constrained (${act.constraintNote}).`,
          evidence: `Current mode inhales ~${origEval.inhaledUg} µg PM2.5 (${origEval.carbonKg} kg CO₂).`,
          exposureDeltaUg: 0,
          tradeOff: 'None.',
          uncertainty: 'Corridor micro-environment infiltration factors.',
        });
        continue;
      }

      const candidate: DayActivity = { ...act, commuteMode: 'ac_metro' };
      const metroEval = evaluateActivity(candidate, hourlyEnv).evaluated;
      const deltaUg = +(origEval.inhaledUg - metroEval.inhaledUg).toFixed(1);

      if (deltaUg >= 1.0 && origEval.inhaledUg > 0 && deltaUg / origEval.inhaledUg >= 0.05) {
        working[i] = candidate;
        decisions.push({
          activityId: act.id,
          activityTitle: act.title,
          changed: true,
          whatChanged: `Switched ${act.commuteMode.replace(/_/g, ' ')} → Rapid AC Metro`,
          whyChanged: 'Avoids direct road-level tailpipe exhaust plume while keeping your exact departure window.',
          evidence: `Inhaled PM2.5 drops from ${origEval.inhaledUg} µg to ${metroEval.inhaledUg} µg (and saves ${+(origEval.carbonKg - metroEval.carbonKg).toFixed(2)} kg CO₂).`,
          exposureDeltaUg: deltaUg,
          tradeOff: 'Includes ~10 min first/last-mile walking connection; assumes Metro corridor access.',
          uncertainty: 'Infiltration factors (0.35–1.30×) are modeled corridor averages.',
        });
      } else {
        decisions.push({
          activityId: act.id,
          activityTitle: act.title,
          changed: false,
          whatChanged: 'Commute unchanged',
          whyChanged: 'Available transit alternatives did not demonstrate a reliable exposure benefit for this distance/pollution level.',
          evidence: `Difference was <1 µg (${origEval.inhaledUg} µg vs ${metroEval.inhaledUg} µg).`,
          exposureDeltaUg: 0,
          tradeOff: 'None.',
          uncertainty: 'Corridor infiltration averages.',
        });
      }
    } else if (act.environment === 'indoor' && (act.category === 'sleep' || act.category === 'home') && !act.purifierOn) {
      const origEval = evaluateActivity(act, hourlyEnv).evaluated;
      const indoorSafety = calculateIndoorRecommendations(
        origEval.averageAmbientPm25,
        cleanAirWindow,
        act.startHour,
        15,
        hourlyEnv[act.startHour]?.o3 ?? 0,
        'none'
      );

      // Enable HEPA purifier for home/sleep blocks when outdoor PM2.5 > 30 µg/m³ (above WHO/CPCB clean threshold)
      if (origEval.averageAmbientPm25 > 30) {
        const candidate: DayActivity = { ...act, purifierOn: true };
        const purEval = evaluateActivity(candidate, hourlyEnv).evaluated;
        const deltaUg = +(origEval.inhaledUg - purEval.inhaledUg).toFixed(1);
        if (deltaUg >= 1.0) {
          working[i] = candidate;
          decisions.push({
            activityId: act.id,
            activityTitle: act.title,
            changed: true,
            whatChanged: `Activated HEPA Purifier (${indoorSafety.windowAction === 'SEAL_COMPLETELY' ? 'Windows Sealed' : 'Controlled Ventilation'})`,
            whyChanged: `${indoorSafety.safetyReason}`,
            evidence: `Indoor inhaled PM2.5 across ${act.endHour - act.startHour}h drops from ${origEval.inhaledUg} µg to ${purEval.inhaledUg} µg.`,
            exposureDeltaUg: deltaUg,
            tradeOff: 'Requires HEPA purifier power (~30–50W); keep windows closed when PM2.5 > 60 µg/m³.',
            uncertainty: 'Assumes closed concrete envelope (α = 0.45) and ~4.5 ACH HEPA CADR.',
          });
          continue;
        }
      }

      decisions.push({
        activityId: act.id,
        activityTitle: act.title,
        changed: false,
        whatChanged: act.movable ? 'Schedule kept' : 'Fixed indoor block',
        whyChanged: `${act.constraintNote}; ${indoorSafety.safetyReason}`,
        evidence: `Modeled indoor baseline averages ${Math.round(origEval.averageAmbientPm25 * 0.45)} µg/m³ (${origEval.inhaledUg} µg inhaled).`,
        exposureDeltaUg: 0,
        tradeOff: 'None.',
        uncertainty: 'Envelope infiltration α = 0.45.',
      });
    } else if (!act.movable) {
      const origEval = evaluateActivity(act, hourlyEnv).evaluated;
      decisions.push({
        activityId: act.id,
        activityTitle: act.title,
        changed: false,
        whatChanged: 'Fixed schedule preserved',
        whyChanged: act.constraintNote,
        evidence: `Contributes ${origEval.inhaledUg} µg indoors across ${act.endHour - act.startHour}h.`,
        exposureDeltaUg: 0,
        tradeOff: 'None — immovable constraint.',
        uncertainty: 'Indoor envelope α = 0.45.',
      });
    }
  }

  const optimizedSummary = summarizeDay(working, hourlyEnv);
  const exposureSavedUg = +Math.max(0, baselineSummary.metrics.totalInhaledUg - optimizedSummary.metrics.totalInhaledUg).toFixed(1);
  const exposureSavedPercent =
    baselineSummary.metrics.totalInhaledUg > 0
      ? Math.round((exposureSavedUg / baselineSummary.metrics.totalInhaledUg) * 100)
      : 0;
  const carbonSavedKg = +Math.max(0, baselineSummary.metrics.totalCarbonKg - optimizedSummary.metrics.totalCarbonKg).toFixed(2);

  // Alternative feasible plan: Keep original schedule times, add N95 barrier on outdoor/commute blocks
  const n95AltActivities = inputActivities.map((a) =>
    a.environment === 'outdoor' || a.environment === 'commute' ? { ...a, maskType: 'n95' as const } : a
  );
  const altSummary = summarizeDay(n95AltActivities, hourlyEnv);
  const altSavedUg = +Math.max(0, baselineSummary.metrics.totalInhaledUg - altSummary.metrics.totalInhaledUg).toFixed(1);
  const altSavedPct =
    baselineSummary.metrics.totalInhaledUg > 0
      ? Math.round((altSavedUg / baselineSummary.metrics.totalInhaledUg) * 100)
      : 0;

  const hourlySeries: HourlyExposureSlot[] = hourlyEnv.map((env, h) => ({
    hour: h,
    label: formatHourShort(h),
    ambientPm25: env.pm25,
    cpcbAqi: env.cpcbAqi,
    provenance: env.provenance,
    baselineInhaledUg: baselineSummary.perHourTotals[h] ?? 0,
    optimizedInhaledUg: optimizedSummary.perHourTotals[h] ?? 0,
    baselineActivityTitle: baselineSummary.perHourTitle[h] ?? 'Unscheduled',
    optimizedActivityTitle: optimizedSummary.perHourTitle[h] ?? 'Unscheduled',
  }));

  const noMeaningfulImprovement = exposureSavedUg < 1.0;

  return {
    hasValidData: true,
    dataQualityLabel: profileResult.provenanceLabel,
    dataLimitationNote: telemetry.metadata.isSimulated
      ? 'Using Calibrated Offline Diurnal Baseline (simulated regional curve, not live physical sensors).'
      : 'Derived from Open-Meteo / Copernicus CAMS 0.25° regional atmospheric model; street-level traffic hotspots may be higher.',
    noMeaningfulImprovement,
    zeroImprovementReason: noMeaningfulImprovement
      ? 'Ambient PM2.5 is already low or fixed constraints prevent a >1 µg reduction today.'
      : null,
    cleanAirWindow,
    baseline: baselineSummary.metrics,
    optimized: optimizedSummary.metrics,
    alternativePlan: {
      label: 'Original Schedule + N95 Barrier',
      description: 'Keep all original times & transit modes, wearing a fitted N95 respirator during outdoor/commute blocks.',
      totalInhaledUg: altSummary.metrics.totalInhaledUg,
      exposureSavedUg: altSavedUg,
      exposureSavedPercent: altSavedPct,
    },
    exposureSavedUg,
    exposureSavedPercent,
    carbonSavedKg,
    hourlySeries,
    decisions,
    assumptions: [
      `Profile: ${profile.replace(/_/g, ' ')} (EPA minute ventilation 6–55 L/min by activity)`,
      'Indoor closed-envelope infiltration α = 0.45; HEPA purifier active ≈ 78% steady-state PM2.5 reduction',
      'WindowSafe™ safety ceiling: natural ventilation blocked when PM2.5 > 60 µg/m³ or O3 > 100 µg/m³',
    ],
    validationError: null,
  };
}
