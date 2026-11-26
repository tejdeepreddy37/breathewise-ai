/**
 * Commute Exposure & Transit Eco-Swap Engine
 * 
 * Compares inhaled micro-particulate lung exposure and vehicular carbon emissions
 * across 6 urban transit modes for a given commute distance.
 * 
 * Methodological Enhancements:
 * 1. Metro transit models realistic multimodal travel: includes 10-min outdoor walking/e-rickshaw
 *    for first-mile and last-mile connection alongside filtered underground/elevated cabin travel.
 * 2. Work-From-Home (WFH) explicitly states time-horizon: compares trip-avoidance directly,
 *    with an indoor baseline over the equivalent commute duration.
 * 3. Carbon factors based on India GHG Protocol & Central Electricity Authority (CEA) grid averages.
 */

import { CommuteComparison, CommuteMode } from '../types/engines';

interface ModeConfig {
  mode: CommuteMode;
  label: string;
  speedKmh: number;
  cabinExposureFactor: number; // Ratio of ambient background PM2.5 experienced in micro-environment
  ventilationLpm: number;
  carbonKgPerKm: number;
  assumptions: string;
}

const MODES: ModeConfig[] = [
  {
    mode: 'two_wheeler_open',
    label: 'Open Two-Wheeler / Motorcycle',
    speedKmh: 24,
    cabinExposureFactor: 1.30, // Direct exposure in vehicle exhaust plume (+30% vs ambient)
    ventilationLpm: 28, // Moderate physical driving effort & active balance
    carbonKgPerKm: 0.045, // Typical 125-150cc 4-stroke petrol two-wheeler
    assumptions: 'Rider is directly exposed to ground-level tailpipe plumes in traffic gridlock.',
  },
  {
    mode: 'auto_rickshaw',
    label: 'Auto-Rickshaw (Open Cabin)',
    speedKmh: 20,
    cabinExposureFactor: 1.15, // Open canvas sides, tailpipe height
    ventilationLpm: 20, // Passive passenger seated
    carbonKgPerKm: 0.075, // CNG / 4-stroke 3-wheeler shared factor
    assumptions: 'Open-sided cabin allows street-level particulate entry with minimal buffering.',
  },
  {
    mode: 'non_ac_bus',
    label: 'Public Bus (Non-AC)',
    speedKmh: 16,
    cabinExposureFactor: 1.05, // Elevated seating but open windows
    ventilationLpm: 18,
    carbonKgPerKm: 0.022, // Per passenger-km with average urban load factor ~40 passengers
    assumptions: 'Open windows maintain parity with ambient air, though passenger density buffers peak plumes.',
  },
  {
    mode: 'ac_cab',
    label: 'AC Private Cab (Recirculation)',
    speedKmh: 22,
    cabinExposureFactor: 0.50, // Standard automotive cabin air filter + recirculating AC
    ventilationLpm: 14, // Sedentary relaxed passenger
    carbonKgPerKm: 0.160, // Petrol/diesel sedan per passenger-km (single occupant)
    assumptions: 'Closed windows and vehicle HVAC air filter remove approx 50% of coarse/fine particulates.',
  },
  {
    mode: 'ac_metro',
    label: 'Rapid AC Metro Transit (Multimodal)',
    speedKmh: 32,
    cabinExposureFactor: 0.32, // Weighted average: 10 mins outdoor station approach (1.0x) + 75% cabin filtration (0.20x)
    ventilationLpm: 16, // Sedentary transit with brisk station interchange walking
    carbonKgPerKm: 0.012, // Electric rapid transit per passenger-km based on Indian CEA grid emissions
    assumptions: 'Includes realistic 10-min outdoor first/last-mile walking at road level, plus high-efficiency HVAC filtered train cabin.',
  },
  {
    mode: 'work_from_home',
    label: 'Work From Home (Trip Avoidance)',
    speedKmh: 0,
    cabinExposureFactor: 0.20, // Indoor room with closed windows and air filtration
    ventilationLpm: 8, // Sedentary desk breathing rate
    carbonKgPerKm: 0.000, // Zero transit carbon emission
    assumptions: 'Evaluates indoor exposure during the commute period avoided (closed envelope indoors).',
  },
];

export function calculateCommuteTradeoffs(
  distanceKm: number,
  ambientPm25: number
): CommuteComparison[] {
  const safeDist = typeof distanceKm === 'number' && Number.isFinite(distanceKm) ? Math.max(1, Math.min(60, distanceKm)) : 14;
  const safePm = typeof ambientPm25 === 'number' && Number.isFinite(ambientPm25) ? Math.max(0, ambientPm25) : 0;

  // Baseline reference: open two-wheeler transit
  const openMode = MODES[0];
  const openTimeHours = safeDist / openMode.speedKmh;
  const openConcentration = safePm * openMode.cabinExposureFactor;
  const openAirVolM3 = (openMode.ventilationLpm * 60 * openTimeHours) / 1000;
  const baselineDoseUg = openConcentration * openAirVolM3;

  return MODES.map((m) => {
    let travelTimeMinutes = 0;
    let travelTimeHours = 0;

    if (m.mode === 'work_from_home') {
      travelTimeMinutes = 0;
      travelTimeHours = openTimeHours; // compares equivalent duration of the avoided commute trip
    } else {
      travelTimeHours = safeDist / m.speedKmh;
      travelTimeMinutes = Math.round(travelTimeHours * 60);
    }

    // Preserve unrounded cabin concentration for dose & reduction math; round only for display
    const exactCabinConc = safePm * m.cabinExposureFactor;
    const cabinConc = Math.round(exactCabinConc);
    const airVolM3 = (m.ventilationLpm * 60 * travelTimeHours) / 1000;
    const rawInhaledUg = exactCabinConc * airVolM3;
    const inhaledUg = +rawInhaledUg.toFixed(1);

    const carbonKg = +(safeDist * m.carbonKgPerKm).toFixed(2);

    const reductionPercent = baselineDoseUg > 0
      ? Math.max(0, Math.min(99, Math.round(((baselineDoseUg - rawInhaledUg) / baselineDoseUg) * 100)))
      : 0;

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
      assumptions: m.assumptions,
    };
  });
}
