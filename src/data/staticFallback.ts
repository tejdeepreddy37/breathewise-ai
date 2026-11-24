/**
 * Calibrated Offline Demonstration Profiles
 * 
 * Used exclusively for offline demonstrations, network degradation fallbacks,
 * and edge testing.
 * 
 * PROVENANCE DISCLOSURE:
 * These profiles are simulated mathematical parameterizations of typical diurnal
 * boundary-layer behavior observed in northern and peninsular Indian metropolitan areas.
 * They DO NOT represent live physical sensor measurements from CPCB or state pollution control boards.
 */

import { EnvironmentalTelemetry, HourlyDataPoint } from '../types/telemetry';
import { calculateCpcbAqi } from '../engines/cpcbAqi';

export function generateSimulatedDiurnalCurve(
  basePm25: number,
  peakMorningHour = 8,
  peakEveningHour = 21,
  valleyAfternoonHour = 14
): HourlyDataPoint[] {
  const points: HourlyDataPoint[] = [];
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');

  for (let h = 0; h < 24; h++) {
    const hourStr = String(h).padStart(2, '0');
    
    // Diurnal boundary layer parameterization:
    // Morning traffic & surface cooling create relative peaks
    // Solar convective mixing creates daytime dispersion valley
    let factor = 1.0;
    if (h >= 6 && h <= 10) {
      factor = 1.35 - Math.abs(h - peakMorningHour) * 0.10;
    } else if (h >= 12 && h <= 16) {
      factor = 0.58 + Math.abs(h - valleyAfternoonHour) * 0.08;
    } else if (h >= 19 && h <= 23) {
      factor = 1.40 - Math.abs(h - peakEveningHour) * 0.08;
    } else {
      factor = 0.95;
    }

    const pm25Val = Math.round(basePm25 * factor);
    const pm10Val = Math.round(pm25Val * 1.55);
    const no2Val = Math.round(35 * factor);
    // Photochemical ozone rises in afternoon hours
    const o3Val = Math.round(h >= 12 && h <= 16 ? 65 : 24);

    const aqiResult = calculateCpcbAqi({
      pm25: pm25Val,
      pm10: pm10Val,
      no2: no2Val,
      o3: o3Val,
      co: 1.2,
    });

    points.push({
      time: `${year}-${month}-${day}T${hourStr}:00`,
      hour: h,
      pm25: pm25Val,
      pm10: pm10Val,
      no2: no2Val,
      so2: Math.round(12 * factor),
      co: +(1.2 * factor).toFixed(2), // mg/m³
      o3: o3Val,
      cpcbAqi: aqiResult.aqi,
      usAqi: Math.min(500, Math.round(pm25Val * 1.2)),
      temperature: Math.round(17 + (h >= 10 && h <= 16 ? (h - 10) * 1.6 : -1)),
      windSpeed: Math.round(h >= 12 && h <= 16 ? 11 : 6),
      boundaryLayerHeight: null, // Transparently unobserved in fallback
    });
  }

  return points;
}

export const FALLBACK_TELEMETRY: Record<string, EnvironmentalTelemetry> = {
  'delhi-anand-vihar': {
    city: 'Delhi',
    state: 'Delhi NCR (Simulated Representative Profile)',
    country: 'India',
    current: {
      pm25: 265,
      pm10: 410,
      no2: 68,
      so2: 18,
      co: 2.1, // mg/m³
      o3: 38,
      aqi: 405,
      aqiCategory: 'Severe',
      primaryPollutant: 'PM2.5',
      aqiStandard: 'Indian CPCB NAQI',
    },
    weather: {
      temperature: 19,
      humidity: 68,
      windSpeed: 6,
      windDirection: 315,
      surfacePressure: 1016,
      weatherDescription: 'Representative winter smog profile with strong surface inversion',
      isThermalInversionLikely: true,
    },
    hourly: generateSimulatedDiurnalCurve(265, 8, 21, 14),
    metadata: {
      provider: 'BreatheWise Simulated Regional Profile',
      stationName: 'Delhi Metropolitan Representative Smog Profile (Simulated)',
      latitude: 28.6469,
      longitude: 77.316,
      fetchTimestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      modelTimestamp: 'Offline Reference Model',
      isLive: false,
      isSimulated: true,
      attribution: 'Simulated profile for offline demonstration based on typical seasonal diurnal curves.',
    },
  },
  'bengaluru-indiranagar': {
    city: 'Bengaluru',
    state: 'Karnataka (Simulated Representative Profile)',
    country: 'India',
    current: {
      pm25: 58,
      pm10: 92,
      no2: 34,
      so2: 8,
      co: 0.9, // mg/m³
      o3: 45,
      aqi: 97,
      aqiCategory: 'Satisfactory',
      primaryPollutant: 'PM2.5',
      aqiStandard: 'Indian CPCB NAQI',
    },
    weather: {
      temperature: 24,
      humidity: 52,
      windSpeed: 14,
      windDirection: 90,
      surfacePressure: 1012,
      weatherDescription: 'Moderate plateau ventilation with steady convective dispersion',
      isThermalInversionLikely: false,
    },
    hourly: generateSimulatedDiurnalCurve(58, 9, 19, 14),
    metadata: {
      provider: 'BreatheWise Simulated Regional Profile',
      stationName: 'Bengaluru Plateau Representative Profile (Simulated)',
      latitude: 12.9784,
      longitude: 77.6408,
      fetchTimestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      modelTimestamp: 'Offline Reference Model',
      isLive: false,
      isSimulated: true,
      attribution: 'Simulated profile for offline demonstration based on typical seasonal diurnal curves.',
    },
  },
  'mumbai-bkc': {
    city: 'Mumbai',
    state: 'Maharashtra (Simulated Representative Profile)',
    country: 'India',
    current: {
      pm25: 135,
      pm10: 210,
      no2: 52,
      so2: 14,
      co: 1.4, // mg/m³
      o3: 48,
      aqi: 312,
      aqiCategory: 'Very Poor',
      primaryPollutant: 'PM2.5',
      aqiStandard: 'Indian CPCB NAQI',
    },
    weather: {
      temperature: 28,
      humidity: 74,
      windSpeed: 11,
      windDirection: 240,
      surfacePressure: 1011,
      weatherDescription: 'Coastal humidity with evening onshore sea-breeze dispersion',
      isThermalInversionLikely: false,
    },
    hourly: generateSimulatedDiurnalCurve(135, 8, 20, 15),
    metadata: {
      provider: 'BreatheWise Simulated Regional Profile',
      stationName: 'Mumbai Coastal Representative Profile (Simulated)',
      latitude: 19.0657,
      longitude: 72.8687,
      fetchTimestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      modelTimestamp: 'Offline Reference Model',
      isLive: false,
      isSimulated: true,
      attribution: 'Simulated profile for offline demonstration based on typical seasonal diurnal curves.',
    },
  },
  'kolkata-victoria': {
    city: 'Kolkata',
    state: 'West Bengal (Simulated Representative Profile)',
    country: 'India',
    current: {
      pm25: 168,
      pm10: 252,
      no2: 58,
      so2: 16,
      co: 1.6, // mg/m³
      o3: 42,
      aqi: 337,
      aqiCategory: 'Very Poor',
      primaryPollutant: 'PM2.5',
      aqiStandard: 'Indian CPCB NAQI',
    },
    weather: {
      temperature: 23,
      humidity: 78,
      windSpeed: 7,
      windDirection: 180,
      surfacePressure: 1014,
      weatherDescription: 'Stagnant winter atmospheric conditions with shallow boundary mixing',
      isThermalInversionLikely: true,
    },
    hourly: generateSimulatedDiurnalCurve(168, 8, 21, 14),
    metadata: {
      provider: 'BreatheWise Simulated Regional Profile',
      stationName: 'Kolkata Gangetic Basin Representative Profile (Simulated)',
      latitude: 22.5448,
      longitude: 88.3426,
      fetchTimestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      modelTimestamp: 'Offline Reference Model',
      isLive: false,
      isSimulated: true,
      attribution: 'Simulated profile for offline demonstration based on typical seasonal diurnal curves.',
    },
  },
  'chennai-adyar': {
    city: 'Chennai',
    state: 'Tamil Nadu (Simulated Representative Profile)',
    country: 'India',
    current: {
      pm25: 42,
      pm10: 68,
      no2: 24,
      so2: 6,
      co: 0.7, // mg/m³
      o3: 32,
      aqi: 70,
      aqiCategory: 'Satisfactory',
      primaryPollutant: 'PM2.5',
      aqiStandard: 'Indian CPCB NAQI',
    },
    weather: {
      temperature: 29,
      humidity: 82,
      windSpeed: 18,
      windDirection: 110,
      surfacePressure: 1010,
      weatherDescription: 'Maritime sea-breeze ventilation with steady coastal particulate dispersion',
      isThermalInversionLikely: false,
    },
    hourly: generateSimulatedDiurnalCurve(42, 9, 18, 13),
    metadata: {
      provider: 'BreatheWise Simulated Regional Profile',
      stationName: 'Chennai Coastal Representative Profile (Simulated)',
      latitude: 13.0012,
      longitude: 80.2565,
      fetchTimestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      modelTimestamp: 'Offline Reference Model',
      isLive: false,
      isSimulated: true,
      attribution: 'Simulated profile for offline demonstration based on typical seasonal diurnal curves.',
    },
  },
};
