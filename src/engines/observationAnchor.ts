/**
 * Localized Observation Anchoring Engine
 *
 * Allows a user-provided local PM2.5 reading (r) at hour h0 to adjust the
 * modeled 24-hour concentration profile using bounded circular decay:
 *
 *   f = r / m(h0)               (rejected if f < 0.33 or f > 3.0)
 *   d_circ(h, h0) = min(|h - h0|, 24 - |h - h0|)
 *   w(h) = 0.5 + 0.5 * exp(-d_circ(h, h0) / 3)
 *   factor(h) = 1 + (f - 1) * w(h)
 *   C'(h) = max(0, C(h) * factor(h))
 *
 * Never mutates the original modeled telemetry.
 */

import { EnvironmentalTelemetry } from '../types/telemetry';
import { buildNormalized24hPm25, withTransformedPm25Profile } from './dayTwin';

export interface ObservationInput {
  pm25: number;
  hour: number;
  source?: string;
}

export interface ObservationAnchorResult {
  valid: boolean;
  error: string | null;
  observedPm25: number;
  hour: number;
  source: string;
  modeledAtHour: number;
  ratio: number;
  minRatioBound: number;
  maxRatioBound: number;
  weightsByHour: number[];
  originalProfile: number[];
  adjustedProfile: number[];
  anchoredTelemetry: EnvironmentalTelemetry | null;
  disclosure: string;
}

export const OBSERVATION_BOUNDS = {
  MIN_PM25: 1,
  MAX_PM25: 1000,
  MIN_RATIO: 0.33,
  MAX_RATIO: 3.0,
} as const;

export function circularHourDistance(h1: number, h2: number): number {
  const diff = Math.abs(h1 - h2);
  return Math.min(diff, 24 - diff);
}

export function anchorTelemetryWithObservation(
  originalTelemetry: EnvironmentalTelemetry,
  input: ObservationInput
): ObservationAnchorResult {
  const sourceLabel = (input.source || '').trim() || 'User-provided local reading';
  const baseReturn = {
    observedPm25: input.pm25,
    hour: input.hour,
    source: sourceLabel,
    modeledAtHour: 0,
    ratio: 0,
    minRatioBound: OBSERVATION_BOUNDS.MIN_RATIO,
    maxRatioBound: OBSERVATION_BOUNDS.MAX_RATIO,
    weightsByHour: [],
    originalProfile: [],
    adjustedProfile: [],
    anchoredTelemetry: null,
    disclosure: 'Model-adjusted using a single user observation; a single observation does not establish the full day’s error pattern.',
  };

  if (typeof input.pm25 !== 'number' || !Number.isFinite(input.pm25)) {
    return { ...baseReturn, valid: false, error: 'Observation PM2.5 must be a finite number.' };
  }
  if (input.pm25 < OBSERVATION_BOUNDS.MIN_PM25 || input.pm25 > OBSERVATION_BOUNDS.MAX_PM25) {
    return {
      ...baseReturn,
      valid: false,
      error: `Observation PM2.5 (${input.pm25} µg/m³) must be between ${OBSERVATION_BOUNDS.MIN_PM25} and ${OBSERVATION_BOUNDS.MAX_PM25} µg/m³.`,
    };
  }
  if (typeof input.hour !== 'number' || !Number.isInteger(input.hour) || input.hour < 0 || input.hour > 23) {
    return { ...baseReturn, valid: false, error: 'Observation hour must be an integer between 0 and 23.' };
  }

  const originalProfile = buildNormalized24hPm25(originalTelemetry);
  if (!originalProfile || originalProfile.length !== 24) {
    return { ...baseReturn, valid: false, error: 'Underlying hourly environmental profile is missing or invalid.' };
  }

  const modeledAtHour = originalProfile[input.hour];
  if (typeof modeledAtHour !== 'number' || !Number.isFinite(modeledAtHour) || modeledAtHour <= 0) {
    return {
      ...baseReturn,
      valid: false,
      originalProfile,
      error: `Modeled PM2.5 at hour ${input.hour}:00 is missing or zero; cannot compute bounded adjustment ratio.`,
    };
  }

  const ratio = +(input.pm25 / modeledAtHour).toFixed(4);
  if (ratio < OBSERVATION_BOUNDS.MIN_RATIO || ratio > OBSERVATION_BOUNDS.MAX_RATIO) {
    return {
      ...baseReturn,
      valid: false,
      modeledAtHour,
      ratio,
      originalProfile,
      error: `Ratio f = ${input.pm25} / ${modeledAtHour} = ${ratio.toFixed(2)}× is outside safe bounded adjustment limits [${OBSERVATION_BOUNDS.MIN_RATIO}×, ${OBSERVATION_BOUNDS.MAX_RATIO}×]. Local spike or sensor anomaly cannot safely rescale the entire 24h profile.`,
    };
  }

  const weightsByHour: number[] = [];
  const adjustedProfile: number[] = [];

  for (let h = 0; h < 24; h++) {
    const dist = circularHourDistance(h, input.hour);
    const w = 0.5 + 0.5 * Math.exp(-dist / 3);
    const factor = 1 + (ratio - 1) * w;
    weightsByHour.push(+w.toFixed(4));
    adjustedProfile.push(Math.max(0, +(originalProfile[h] * factor).toFixed(1)));
  }

  const anchoredTelemetry = withTransformedPm25Profile(originalTelemetry, adjustedProfile, {
    provider: 'Model-adjusted using a single user observation',
    fetchTimestamp: `Adjusted (${input.pm25} µg/m³ @ ${String(input.hour).padStart(2, '0')}:00)`,
    isLive: false,
    isSimulated: originalTelemetry.metadata.isSimulated,
  });

  return {
    valid: true,
    error: null,
    observedPm25: input.pm25,
    hour: input.hour,
    source: sourceLabel,
    modeledAtHour,
    ratio,
    minRatioBound: OBSERVATION_BOUNDS.MIN_RATIO,
    maxRatioBound: OBSERVATION_BOUNDS.MAX_RATIO,
    weightsByHour,
    originalProfile,
    adjustedProfile,
    anchoredTelemetry,
    disclosure: `Model-adjusted using a single user observation (${input.pm25} µg/m³ at ${String(input.hour).padStart(2, '0')}:00, ratio ${ratio.toFixed(2)}× vs modeled ${modeledAtHour} µg/m³). A single observation does not establish the full day’s error pattern.`,
  };
}
