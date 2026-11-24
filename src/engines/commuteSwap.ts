import { CommuteComparison, CommuteMode } from '../types/engines';

interface ModeConfig {
  mode: CommuteMode;
  label: string;
  speedKmh: number;
  cabinExposureFactor: number; // Ratio of road-level PM2.5 experienced
  ventilationLpm: number;
  carbonKgPerKm: number;
}

const MODES: ModeConfig[] = [
  {
    mode: 'two_wheeler_open',
    label: 'Open Two-Wheeler / Motorcycle',
    speedKmh: 24,
    cabinExposureFactor: 1.30, // Directly in tailpipe plume
    ventilationLpm: 28,
    carbonKgPerKm: 0.045,
  },
  {
    mode: 'auto_rickshaw',
    label: 'Auto-Rickshaw (Open Cabin)',
    speedKmh: 20,
    cabinExposureFactor: 1.15,
    ventilationLpm: 20,
    carbonKgPerKm: 0.080,
  },
  {
    mode: 'non_ac_bus',
    label: 'Public Bus (Non-AC)',
    speedKmh: 16,
    cabinExposureFactor: 1.05,
    ventilationLpm: 18,
    carbonKgPerKm: 0.025,
  },
  {
    mode: 'ac_cab',
    label: 'AC Private Cab (Recirculation)',
    speedKmh: 22,
    cabinExposureFactor: 0.52,
    ventilationLpm: 14,
    carbonKgPerKm: 0.165,
  },
  {
    mode: 'ac_metro',
    label: 'Rapid AC Metro Transit',
    speedKmh: 35,
    cabinExposureFactor: 0.22, // Heavy cabin and underground HVAC filtration
    ventilationLpm: 14,
    carbonKgPerKm: 0.012,
  },
  {
    mode: 'work_from_home',
    label: 'Work From Home (Remote Day)',
    speedKmh: 0,
    cabinExposureFactor: 0.15, // Indoor filtered room
    ventilationLpm: 8,
    carbonKgPerKm: 0.000,
  },
];

export function calculateCommuteTradeoffs(
  distanceKm: number,
  ambientPm25: number
): CommuteComparison[] {
  // Baseline open transit inhaled dose for reference comparison
  const openMode = MODES[0];
  const openTimeHours = distanceKm / openMode.speedKmh;
  const openConcentration = ambientPm25 * openMode.cabinExposureFactor;
  const openAirVolM3 = (openMode.ventilationLpm * 60 * openTimeHours) / 1000;
  const baselineDoseUg = openConcentration * openAirVolM3;

  return MODES.map((m) => {
    let travelTimeMinutes = 0;
    let travelTimeHours = 0;

    if (m.mode === 'work_from_home') {
      travelTimeMinutes = 0;
      travelTimeHours = openTimeHours; // assume 8h day or standard commute duration
    } else {
      travelTimeHours = distanceKm / m.speedKmh;
      travelTimeMinutes = Math.round(travelTimeHours * 60);
    }

    const cabinConc = Math.round(ambientPm25 * m.cabinExposureFactor);
    const airVolM3 = (m.ventilationLpm * 60 * travelTimeHours) / 1000;
    const inhaledUg = +(cabinConc * airVolM3).toFixed(1);

    const carbonKg = +(distanceKm * m.carbonKgPerKm).toFixed(2);

    const reductionPercent = Math.max(
      0,
      Math.min(99, Math.round(((baselineDoseUg - inhaledUg) / baselineDoseUg) * 100))
    );

    let tag: CommuteComparison['recommendationTag'];
    if (m.mode === 'ac_metro') tag = 'RECOMMENDED';
    else if (m.mode === 'work_from_home') tag = 'BEST_ECO_SWAP';
    else if (m.mode === 'two_wheeler_open' || m.mode === 'auto_rickshaw') tag = 'HIGH_EXPOSURE_RISK';

    return {
      mode: m.mode,
      modeLabel: m.label,
      travelTimeMinutes,
      cabinPm25Concentration: cabinConc,
      inhaledDoseUg: inhaledUg,
      carbonEmissionKg: carbonKg,
      exposureReductionVsOpenTransitPercent: reductionPercent,
      recommendationTag: tag,
    };
  });
}
