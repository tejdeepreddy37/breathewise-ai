/**
 * Inhaled Particulate Exposure Engine
 * 
 * Calculates estimated gross inhaled mass of fine particulate matter (PM2.5)
 * based on human minute ventilation rates (V_E), session duration, ambient concentration,
 * and certified mask filtration efficiency.
 * 
 * References:
 * - US EPA Exposure Factors Handbook (Chapter 6: Inhalation Rates)
 * - WHO Global Air Quality Guidelines (2021 Update)
 */

import { ActivityType, InhaledDoseResult } from '../types/engines';

// Minute ventilation rates (V_E) in Litres/minute (LPM)
// Based on adult inhalation rates from EPA Exposure Factors Handbook
export const MINUTE_VENTILATION_LPM: Record<ActivityType, number> = {
  resting_sleep: 6, // 0.36 m³/h - Sleep/Resting
  desk_office: 8, // 0.48 m³/h - Sedentary office activity
  light_walking: 16, // 0.96 m³/h - Light walking (approx 3.5 km/h)
  cycling_commute: 35, // 2.10 m³/h - Moderate urban cycling
  outdoor_running: 55, // 3.30 m³/h - Moderate running (approx 9 km/h)
  heavy_cardio: 65, // 3.90 m³/h - High-intensity interval/cardio training
};

// Nominal laboratory particulate filtration efficiency (eta)
// Note: Inward leakage from improper facial seal reduces real-world performance
export const MASK_EFFICIENCIES = {
  none: 0.0,
  cloth: 0.25, // Single/double layer cloth
  surgical: 0.60, // Standard 3-ply surgical mask
  n95: 0.95, // NIOSH-certified N95 particulate respirator
  n99: 0.99, // Certified N99 / FFP3 respirator
};

export function calculateInhaledDose(
  ambientPm25: number,
  durationMinutes: number,
  activity: ActivityType = 'outdoor_running',
  maskType: keyof typeof MASK_EFFICIENCIES = 'none'
): InhaledDoseResult {
  const safePm = typeof ambientPm25 === 'number' && Number.isFinite(ambientPm25) ? Math.max(0, ambientPm25) : 0;
  const safeDuration = typeof durationMinutes === 'number' && Number.isFinite(durationMinutes) ? Math.max(0, Math.min(720, durationMinutes)) : 0;
  const lpm = MINUTE_VENTILATION_LPM[activity] || 25;
  const hours = safeDuration / 60;
  
  // Total inhaled air volume (m³) = (L/min * 60 min/h * hours) / 1000 L/m³
  const volumeM3 = (lpm * 60 * hours) / 1000;
  const efficiency = typeof MASK_EFFICIENCIES[maskType] === 'number' ? MASK_EFFICIENCIES[maskType] : 0.0;

  // Preserve floating-point precision during intermediate calculations; round only at presentation boundary
  const rawMassUnmasked = safePm * volumeM3;
  const rawMassUg = rawMassUnmasked * (1 - efficiency);
  const rawMassWithN95 = rawMassUnmasked * (1 - 0.95);
  const massUg = +rawMassUg.toFixed(1);
  const unmaskedDoseUg = +rawMassUnmasked.toFixed(1);
  const doseAvoidedUg = Math.max(0, +(rawMassUnmasked - rawMassUg).toFixed(1));
  const massSaved = +(rawMassUg - rawMassWithN95).toFixed(1);

  // Relative exposure percentage entering the respiratory tract
  const relativeExposurePercent = Math.round((1 - efficiency) * 100);

  // WHO 24-hour Air Quality Guideline benchmark for PM2.5 is 15 µg/m³
  const whoExceedanceRatio = +(safePm / 15).toFixed(1);

  let riskLevel: InhaledDoseResult['riskLevel'] = 'LOW';
  if (massUg > 150) riskLevel = 'CRITICAL';
  else if (massUg > 75) riskLevel = 'ELEVATED';
  else if (massUg > 30) riskLevel = 'MODERATE';

  return {
    activity,
    durationMinutes: safeDuration,
    ambientPm25: safePm,
    minuteVentilationRateLpm: lpm,
    inhaledAirVolumeM3: +volumeM3.toFixed(2),
    maskType,
    maskFiltrationEfficiency: efficiency,
    estimatedInhaledMassUg: massUg,
    unmaskedDoseUg,
    doseAvoidedUg,
    doseSavedUgWithN95: Math.max(0, massSaved),
    relativeExposurePercent,
    riskLevel,
    whoExceedanceRatio,
    disclaimer: 'Approximation of gross inhaled particulate mass entering the upper airway based on standard minute ventilation rates. Does not constitute a clinical measurement of deep alveolar tissue deposition or medical diagnosis.',
  };
}
