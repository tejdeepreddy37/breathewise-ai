/**
 * Indoor Air Quality & Ventilation Safety Coach
 * 
 * Evaluates indoor-outdoor pollutant infiltration and provides strict, conservative
 * window ventilation directives and HEPA air purifier run-time recommendations.
 * 
 * Safety Principles:
 * 1. Diurnal minimum windows DO NOT authorize opening windows when outdoor air is hazardous.
 * 2. Ventilation is strictly BLOCKED whenever outdoor PM2.5 > 60 µg/m³ or Ozone > 100 µg/m³.
 * 3. Indoor baseline reflects building envelope infiltration (alpha ~ 0.45 for closed windows).
 */

import { IndoorVentilationRecommendation, CleanAirWindow } from '../types/engines';

export const VENTILATION_THRESHOLDS = {
  CLEAN_OUTDOOR_PM25_MAX: 30, // µg/m³ - Safe for continuous cross-ventilation (WHO/CPCB Satisfactory)
  FLUSH_OUTDOOR_PM25_MAX: 60, // µg/m³ - Absolute upper limit for brief 15-20 min flush
  OZONE_OUTDOOR_MAX: 100, // µg/m³ - WHO 8-hour photochemical oxidant guideline
  ASSUMED_CEILING_HEIGHT_M: 2.8, // meters
  CLOSED_ENVELOPE_INFILTRATION_ALPHA: 0.45, // concrete building infiltration factor
};

export function calculateIndoorRecommendations(
  outdoorPm25: number,
  cleanAirWindow: CleanAirWindow,
  currentHour = new Date().getHours(),
  roomAreaM2 = 20,
  outdoorO3?: number
): IndoorVentilationRecommendation {
  const safePm = Math.max(0, outdoorPm25 || 0);
  const safeO3 = outdoorO3 != null ? Math.max(0, outdoorO3) : null;
  const isWindowActive = currentHour >= cleanAirWindow.startHour && currentHour <= cleanAirWindow.endHour;

  // Estimated indoor baseline with closed windows (alpha = 0.45)
  const baselineIndoor = Math.round(safePm * VENTILATION_THRESHOLDS.CLOSED_ENVELOPE_INFILTRATION_ALPHA);

  let windowAction: IndoorVentilationRecommendation['windowAction'] = 'SEAL_COMPLETELY';
  let actionDirective = '';
  let safeWindowText = '';
  let safetyReason = '';

  // 1. Check Ozone Hazard first (photochemical smog hazard during sunny afternoons)
  const isOzoneUnsafe = safeO3 != null && safeO3 > VENTILATION_THRESHOLDS.OZONE_OUTDOOR_MAX;

  if (isOzoneUnsafe) {
    windowAction = 'SEAL_COMPLETELY';
    safeWindowText = 'Ventilation restricted: Ground-level Ozone is elevated';
    actionDirective = 'Keep all exterior windows and doors sealed. Strong solar radiation has elevated ground-level Ozone (O3) above the 100 µg/m³ safety threshold, which irritates respiratory airways.';
    safetyReason = `Ground-level Ozone (${safeO3} µg/m³) exceeds the WHO 100 µg/m³ threshold. Do not ventilate.`;
  }
  // 2. Strict PM2.5 Safety Evaluation
  else if (safePm <= VENTILATION_THRESHOLDS.CLEAN_OUTDOOR_PM25_MAX) {
    windowAction = 'OPEN_CROSS_VENTILATE';
    safeWindowText = 'Natural ventilation safe right now';
    actionDirective = 'Outdoor air quality is currently clean. Open opposite windows to generate cross-ventilation, flushing accumulated indoor CO2, humidity, and domestic VOCs.';
    safetyReason = `Outdoor PM2.5 (${safePm} µg/m³) is below the 30 µg/m³ clean threshold.`;
  }
  // 3. Moderate range (31 - 60 µg/m³) AND within diurnal minimum window
  else if (safePm <= VENTILATION_THRESHOLDS.FLUSH_OUTDOOR_PM25_MAX && isWindowActive) {
    windowAction = 'CRACK_FLUSH_NOW';
    safeWindowText = `Diurnal Minimum Window Active (${cleanAirWindow.displayWindow})`;
    actionDirective = 'Outdoor particulates are in the moderate range. Conduct a brief 15 to 20-minute cross-room air flush to exchange indoor air, then seal windows before evening rush-hour emissions build up.';
    safetyReason = `Outdoor PM2.5 (${safePm} µg/m³) is within the acceptable 60 µg/m³ flush boundary during the diurnal dispersion minimum.`;
  }
  // 4. OVERRIDE: Outdoor PM2.5 > 60 µg/m³ - STRICT SAFETY SEAL
  else {
    windowAction = 'SEAL_COMPLETELY';
    if (safePm > 120) {
      safeWindowText = 'Ventilation unsafe: Severe outdoor particulate pollution';
      actionDirective = `Outdoor PM2.5 is severe (${safePm} µg/m³). Keep all windows and balcony doors sealed. Opening windows now will flood your living space with outdoor particulate smog. Rely on indoor recirculation and mechanical HEPA filtration.`;
      safetyReason = `Outdoor PM2.5 (${safePm} µg/m³) exceeds the safe ventilation limit (60 µg/m³). Natural ventilation is strictly contraindicated.`;
    } else {
      safeWindowText = 'Keep windows closed: Outdoor air exceeds safe ventilation limit';
      actionDirective = `Outdoor PM2.5 is ${safePm} µg/m³. Natural ventilation is not recommended because outdoor air will degrade your indoor environment. Keep windows closed and utilize indoor filtration.`;
      safetyReason = `Outdoor PM2.5 (${safePm} µg/m³) is above the 60 µg/m³ ceiling for natural air exchange.`;
    }
  }

  // Purifier runtime calculation using single-zone well-mixed model
  const roomVolumeM3 = Math.max(10, roomAreaM2) * VENTILATION_THRESHOLDS.ASSUMED_CEILING_HEIGHT_M;
  const mediumCadr = 250; // m³/h typical residential HEPA purifier CADR
  const airChangesPerHour = +(mediumCadr / roomVolumeM3).toFixed(1);
  
  // Time to approx 75% clean-down: t = ln(4) / ACH * 60 min ~ 1.386 / ACH * 60
  const targetRuntimeMinutes = Math.min(120, Math.max(20, Math.round((1.386 / airChangesPerHour) * 60)));
  const estimatedPostCleanPm25 = Math.max(6, Math.round(baselineIndoor * 0.20));

  let recommendedSpeed: 'OFF' | 'LOW' | 'MEDIUM' | 'TURBO' = 'MEDIUM';
  if (safePm > 200) recommendedSpeed = 'TURBO';
  else if (safePm > 90) recommendedSpeed = 'MEDIUM';
  else if (safePm > 35) recommendedSpeed = 'LOW';
  else recommendedSpeed = 'OFF';

  return {
    safeWindowActive: isWindowActive,
    safeWindowText,
    outdoorPm25: safePm,
    outdoorO3: safeO3 ?? undefined,
    estimatedIndoorBaselinePm25: baselineIndoor,
    actionDirective,
    windowAction,
    safetyReason,
    purifierRecommendation: {
      recommendedSpeed,
      targetRuntimeMinutes,
      estimatedPostCleanPm25,
    },
  };
}
