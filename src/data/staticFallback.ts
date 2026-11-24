import { EnvironmentalTelemetry, HourlyDataPoint } from '../types/telemetry';

export function generateDiurnalCurve(
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
    // Diurnal atmospheric boundary layer physics:
    // Morning inversion trap (7-9 AM) & Evening nocturnal boundary drop (8-11 PM) cause peaks
    // Solar convective mixing (12-16 PM) causes valley (35-55% drop)
    let factor = 1.0;
    if (h >= 6 && h <= 10) {
      factor = 1.35 - Math.abs(h - peakMorningHour) * 0.12;
    } else if (h >= 12 && h <= 16) {
      factor = 0.52 + Math.abs(h - valleyAfternoonHour) * 0.08;
    } else if (h >= 19 && h <= 23) {
      factor = 1.42 - Math.abs(h - peakEveningHour) * 0.09;
    } else {
      factor = 0.95;
    }

    const pm25Val = Math.round(basePm25 * factor);
    const pm10Val = Math.round(pm25Val * 1.65);
    const no2Val = Math.round(35 * factor);
    const aqiVal = Math.min(500, Math.round(pm25Val * 1.15));

    // Boundary layer height (meters)
    let pbl = 350;
    if (h >= 11 && h <= 16) {
      pbl = 1450 - Math.abs(h - 14) * 150;
    } else if (h >= 17 && h <= 20) {
      pbl = 650;
    } else {
      pbl = 220; // strong nocturnal surface inversion
    }

    points.push({
      time: `${year}-${month}-${day}T${hourStr}:00`,
      hour: h,
      pm25: pm25Val,
      pm10: pm10Val,
      no2: no2Val,
      so2: Math.round(12 * factor),
      co: +(0.8 * factor).toFixed(2),
      o3: Math.round(h >= 12 && h <= 16 ? 65 : 22),
      aqi: aqiVal,
      temperature: Math.round(16 + (h >= 10 && h <= 16 ? (h - 10) * 1.8 : -1)),
      windSpeed: Math.round(h >= 12 && h <= 16 ? 12 : 5),
      boundaryLayerHeight: pbl,
      isCleanAirWindow: h >= 13 && h <= 16,
    });
  }

  return points;
}

export const FALLBACK_TELEMETRY: Record<string, EnvironmentalTelemetry> = {
  'delhi-anand-vihar': {
    city: 'Delhi',
    state: 'Delhi NCR (Anand Vihar Monitor)',
    country: 'India',
    current: {
      pm25: 284,
      pm10: 412,
      no2: 68,
      so2: 18,
      co: 2.4,
      o3: 32,
      aqi: 348,
      aqiCategory: 'Hazardous',
      primaryPollutant: 'PM2.5',
    },
    weather: {
      temperature: 19,
      humidity: 68,
      windSpeed: 6,
      windDirection: 315, // NW cold winter winds
      surfacePressure: 1016,
      weatherDescription: 'Dense winter haze with thermal boundary inversion',
      isThermalInversionLikely: true,
    },
    hourly: generateDiurnalCurve(284, 8, 21, 14),
    metadata: {
      provider: 'BreatheWise Offline Fallback Cache',
      stationName: 'CPCB Anand Vihar Reference Sensor #04',
      latitude: 28.6469,
      longitude: 77.316,
      lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isLive: false,
      attribution: 'CPCB India / Copernicus CAMS Regional Model Baseline',
    },
  },
  'bengaluru-indiranagar': {
    city: 'Bengaluru',
    state: 'Karnataka (Indiranagar / BTM)',
    country: 'India',
    current: {
      pm25: 64,
      pm10: 98,
      no2: 36,
      so2: 8,
      co: 0.9,
      o3: 45,
      aqi: 92,
      aqiCategory: 'Moderate',
      primaryPollutant: 'PM2.5',
    },
    weather: {
      temperature: 24,
      humidity: 52,
      windSpeed: 14,
      windDirection: 90,
      surfacePressure: 1012,
      weatherDescription: 'Pleasant with moderate traffic corridor particulate drift',
      isThermalInversionLikely: false,
    },
    hourly: generateDiurnalCurve(64, 9, 19, 14),
    metadata: {
      provider: 'BreatheWise Offline Fallback Cache',
      stationName: 'KSPCB BTM Layout Ground Station',
      latitude: 12.9784,
      longitude: 77.6408,
      lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isLive: false,
      attribution: 'KSPCB / Open-Meteo Atmospheric Grid',
    },
  },
  'mumbai-bkc': {
    city: 'Mumbai',
    state: 'Maharashtra (Bandra Kurla Complex)',
    country: 'India',
    current: {
      pm25: 142,
      pm10: 215,
      no2: 52,
      so2: 14,
      co: 1.4,
      o3: 48,
      aqi: 172,
      aqiCategory: 'Unhealthy',
      primaryPollutant: 'PM2.5',
    },
    weather: {
      temperature: 28,
      humidity: 74,
      windSpeed: 11,
      windDirection: 240, // Coastal sea-breeze
      surfacePressure: 1011,
      weatherDescription: 'Humid coastal haze with evening sea-breeze dispersion',
      isThermalInversionLikely: false,
    },
    hourly: generateDiurnalCurve(142, 8, 20, 15),
    metadata: {
      provider: 'BreatheWise Offline Fallback Cache',
      stationName: 'MPCB Bandra Kurla Complex Station',
      latitude: 19.0657,
      longitude: 77.8687,
      lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isLive: false,
      attribution: 'MPCB / Copernicus Atmosphere Service',
    },
  },
};
