import { ActivityType, InhaledDoseResult } from '../types/engines';

export const MINUTE_VENTILATION_LPM: Record<ActivityType, number> = {
  resting_sleep: 6, // 0.36 m³/h
  desk_office: 8, // 0.48 m³/h
  light_walking: 16, // 0.96 m³/h
  cycling_commute: 35, // 2.10 m³/h
  outdoor_running: 55, // 3.30 m³/h
  heavy_cardio: 65, // 3.90 m³/h
};

export const MASK_EFFICIENCIES = {
  none: 0.0,
  cloth: 0.25,
  surgical: 0.60,
  n95: 0.95,
  n99: 0.99,
};

export function calculateInhaledDose(
  ambientPm25: number,
  durationMinutes: number,
  activity: ActivityType = 'outdoor_running',
  maskType: keyof typeof MASK_EFFICIENCIES = 'none'
): InhaledDoseResult {
  const lpm = MINUTE_VENTILATION_LPM[activity] || 25;
  const hours = durationMinutes / 60;
  const volumeM3 = (lpm * 60 * hours) / 1000;
  const efficiency = MASK_EFFICIENCIES[maskType] ?? 0.0;

  // D_inh = C * V * (1 - eta)
  const doseUg = +(ambientPm25 * volumeM3 * (1 - efficiency)).toFixed(1);
  const doseWithN95 = +(ambientPm25 * volumeM3 * (1 - 0.95)).toFixed(1);
  const doseSaved = +(doseUg - doseWithN95).toFixed(1);

  // Berkeley Earth & WHO equivalence: ~22 µg/m³ for 24h (~528 µg total inhaled) ~ 1 cigarette
  const cigs = +(doseUg / 22).toFixed(1);

  let riskLevel: InhaledDoseResult['riskLevel'] = 'LOW';
  if (doseUg > 150) riskLevel = 'CRITICAL';
  else if (doseUg > 75) riskLevel = 'ELEVATED';
  else if (doseUg > 30) riskLevel = 'MODERATE';

  return {
    activity,
    durationMinutes,
    ambientPm25,
    minuteVentilationRateLpm: lpm,
    inhaledAirVolumeM3: +volumeM3.toFixed(2),
    maskType,
    maskFiltrationEfficiency: efficiency,
    inhaledDoseUg: doseUg,
    equivalentCigarettes: cigs,
    riskLevel,
    doseSavedUgWithN95: Math.max(0, doseSaved),
  };
}
