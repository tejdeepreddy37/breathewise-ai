/**
 * Official Central Pollution Control Board (CPCB) India
 * National Air Quality Index (NAQI) Calculation Engine
 * 
 * Source: Ministry of Environment, Forest and Climate Change, Govt of India
 * Reference: National Air Quality Index Technical Report (CPCB 2014/2015)
 * 
 * Mathematical Specification:
 * - Piecewise linear interpolation between standard breakpoint concentrations:
 *   I_p = [ (I_high - I_low) / (C_high - C_low) ] * (C_p - C_low) + I_low
 * - Breakpoints define continuous intervals [cLow, cHigh] to eliminate dead-zones
 *   for continuous decimal measurements (e.g. 30.5 µg/m³).
 * - Minimum completeness criterion: At least 3 valid pollutant sub-indices,
 *   with at least one particulate matter (PM2.5 or PM10).
 */

export interface PollutantBreakpoint {
  cLow: number;
  cHigh: number;
  iLow: number;
  iHigh: number;
}

// Continuous breakpoint schedules matching official CPCB NAQI guidelines
export const PM25_BREAKPOINTS: PollutantBreakpoint[] = [
  { cLow: 0, cHigh: 30, iLow: 0, iHigh: 50 },
  { cLow: 30, cHigh: 60, iLow: 50, iHigh: 100 },
  { cLow: 60, cHigh: 90, iLow: 100, iHigh: 200 },
  { cLow: 90, cHigh: 120, iLow: 200, iHigh: 300 },
  { cLow: 120, cHigh: 250, iLow: 300, iHigh: 400 },
  { cLow: 250, cHigh: 500, iLow: 400, iHigh: 500 },
];

export const PM10_BREAKPOINTS: PollutantBreakpoint[] = [
  { cLow: 0, cHigh: 50, iLow: 0, iHigh: 50 },
  { cLow: 50, cHigh: 100, iLow: 50, iHigh: 100 },
  { cLow: 100, cHigh: 250, iLow: 100, iHigh: 200 },
  { cLow: 250, cHigh: 350, iLow: 200, iHigh: 300 },
  { cLow: 350, cHigh: 430, iLow: 300, iHigh: 400 },
  { cLow: 430, cHigh: 500, iLow: 400, iHigh: 500 },
];

export const NO2_BREAKPOINTS: PollutantBreakpoint[] = [
  { cLow: 0, cHigh: 40, iLow: 0, iHigh: 50 },
  { cLow: 40, cHigh: 80, iLow: 50, iHigh: 100 },
  { cLow: 80, cHigh: 180, iLow: 100, iHigh: 200 },
  { cLow: 180, cHigh: 280, iLow: 200, iHigh: 300 },
  { cLow: 280, cHigh: 400, iLow: 300, iHigh: 400 },
  { cLow: 400, cHigh: 600, iLow: 400, iHigh: 500 },
];

export const O3_BREAKPOINTS: PollutantBreakpoint[] = [
  { cLow: 0, cHigh: 50, iLow: 0, iHigh: 50 },
  { cLow: 50, cHigh: 100, iLow: 50, iHigh: 100 },
  { cLow: 100, cHigh: 168, iLow: 100, iHigh: 200 },
  { cLow: 168, cHigh: 208, iLow: 200, iHigh: 300 },
  { cLow: 208, cHigh: 748, iLow: 300, iHigh: 400 },
  { cLow: 748, cHigh: 1000, iLow: 400, iHigh: 500 },
];

export const CO_BREAKPOINTS: PollutantBreakpoint[] = [
  { cLow: 0.0, cHigh: 1.0, iLow: 0, iHigh: 50 },
  { cLow: 1.0, cHigh: 2.0, iLow: 50, iHigh: 100 },
  { cLow: 2.0, cHigh: 10.0, iLow: 100, iHigh: 200 },
  { cLow: 10.0, cHigh: 17.0, iLow: 200, iHigh: 300 },
  { cLow: 17.0, cHigh: 34.0, iLow: 300, iHigh: 400 },
  { cLow: 34.0, cHigh: 50.0, iLow: 400, iHigh: 500 },
];

export function calculateSubIndex(conc: number | null | undefined, breakpoints: PollutantBreakpoint[]): number | null {
  if (conc == null || typeof conc !== 'number' || !Number.isFinite(conc) || conc < 0) return null;

  // Exact 0 handling
  if (conc === 0) return 0;

  for (let i = 0; i < breakpoints.length; i++) {
    const b = breakpoints[i];
    // First bracket covers [0, cHigh]; subsequent brackets cover (cLow, cHigh]
    const isInRange = i === 0 ? (conc >= b.cLow && conc <= b.cHigh) : (conc > b.cLow && conc <= b.cHigh);

    if (isInRange) {
      const idx = ((b.iHigh - b.iLow) / (b.cHigh - b.cLow)) * (conc - b.cLow) + b.iLow;
      return Math.min(500, Math.round(idx));
    }
  }

  // If concentration exceeds highest bracket, cap at 500 according to CPCB NAQI convention
  if (conc > breakpoints[breakpoints.length - 1].cHigh) {
    return 500;
  }

  return 0;
}

export type CpcbAqiCategory = 'Good' | 'Satisfactory' | 'Moderate' | 'Poor' | 'Very Poor' | 'Severe';

export interface CpcbAqiResult {
  aqi: number;
  category: CpcbAqiCategory;
  primaryPollutant: string;
  isCompleteCalculation: boolean;
  standard: 'Indian CPCB NAQI' | 'Indicative PM2.5-Derived';
  subIndices: {
    pm25?: number | null;
    pm10?: number | null;
    no2?: number | null;
    o3?: number | null;
    co?: number | null;
  };
}

export function calculateCpcbAqi(pollutants: {
  pm25?: number | null;
  pm10?: number | null;
  no2?: number | null;
  o3?: number | null;
  co?: number | null; // in mg/m³
}): CpcbAqiResult {
  const pm25Idx = pollutants.pm25 != null ? calculateSubIndex(pollutants.pm25, PM25_BREAKPOINTS) : null;
  const pm10Idx = pollutants.pm10 != null ? calculateSubIndex(pollutants.pm10, PM10_BREAKPOINTS) : null;
  const no2Idx = pollutants.no2 != null ? calculateSubIndex(pollutants.no2, NO2_BREAKPOINTS) : null;
  const o3Idx = pollutants.o3 != null ? calculateSubIndex(pollutants.o3, O3_BREAKPOINTS) : null;
  const coIdx = pollutants.co != null ? calculateSubIndex(pollutants.co, CO_BREAKPOINTS) : null;

  const validEntries: Array<{ name: string; idx: number }> = [];
  if (pm25Idx != null) validEntries.push({ name: 'PM2.5', idx: pm25Idx });
  if (pm10Idx != null) validEntries.push({ name: 'PM10', idx: pm10Idx });
  if (no2Idx != null) validEntries.push({ name: 'NO2', idx: no2Idx });
  if (o3Idx != null) validEntries.push({ name: 'Ozone', idx: o3Idx });
  if (coIdx != null) validEntries.push({ name: 'CO', idx: coIdx });

  if (validEntries.length === 0) {
    return {
      aqi: 0,
      category: 'Good',
      primaryPollutant: 'N/A',
      isCompleteCalculation: false,
      standard: 'Indicative PM2.5-Derived',
      subIndices: {},
    };
  }

  // Find maximum subindex (governing pollutant)
  let maxIdx = 0;
  let primaryName = 'PM2.5';
  for (const entry of validEntries) {
    if (entry.idx > maxIdx) {
      maxIdx = entry.idx;
      primaryName = entry.name;
    }
  }

  // Official CPCB criterion: at least 3 pollutants with at least one PM
  const hasPm = pm25Idx != null || pm10Idx != null;
  const isComplete = validEntries.length >= 3 && hasPm;

  let category: CpcbAqiCategory = 'Good';
  if (maxIdx <= 50) category = 'Good';
  else if (maxIdx <= 100) category = 'Satisfactory';
  else if (maxIdx <= 200) category = 'Moderate';
  else if (maxIdx <= 300) category = 'Poor';
  else if (maxIdx <= 400) category = 'Very Poor';
  else category = 'Severe';

  return {
    aqi: maxIdx,
    category,
    primaryPollutant: primaryName,
    isCompleteCalculation: isComplete,
    standard: isComplete ? 'Indian CPCB NAQI' : 'Indicative PM2.5-Derived',
    subIndices: {
      pm25: pm25Idx,
      pm10: pm10Idx,
      no2: no2Idx,
      o3: o3Idx,
      co: coIdx,
    },
  };
}
