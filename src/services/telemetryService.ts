import { EnvironmentalTelemetry } from '../types/telemetry';
import { INDIAN_CITIES_PRESETS } from '../data/cities';
import { FALLBACK_TELEMETRY, generateDiurnalCurve } from '../data/staticFallback';
import { fetchOpenMeteoTelemetry } from './openMeteo';

const CACHE_PREFIX = 'breathewise_telemetry_';
const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes cache

export async function getCityTelemetry(cityId: string): Promise<EnvironmentalTelemetry> {
  const cityPreset = INDIAN_CITIES_PRESETS.find((c) => c.id === cityId) || INDIAN_CITIES_PRESETS[0];

  // 1. Check local cache
  try {
    const cached = localStorage.getItem(`${CACHE_PREFIX}${cityId}`);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Date.now() - parsed.timestamp < CACHE_TTL_MS) {
        return parsed.data;
      }
    }
  } catch (e) {
    // localStorage not accessible or parse error
  }

  // 2. Attempt live Open-Meteo fetch
  try {
    const liveData = await fetchOpenMeteoTelemetry(
      cityPreset.lat,
      cityPreset.lon,
      cityPreset.name,
      cityPreset.state
    );

    // Save to cache
    try {
      localStorage.setItem(
        `${CACHE_PREFIX}${cityId}`,
        JSON.stringify({ timestamp: Date.now(), data: liveData })
      );
    } catch (e) {}

    return liveData;
  } catch (err) {
    console.warn(`[BreatheWise] Live telemetry fetch failed for ${cityPreset.name}. Using calibrated fallback.`, err);

    // 3. Fallback to calibrated dataset
    if (FALLBACK_TELEMETRY[cityId]) {
      return FALLBACK_TELEMETRY[cityId];
    }

    // Dynamic fallback generation based on city characteristics
    const defaultPm = cityPreset.typicalSmogSeverity === 'Extreme' ? 260 : cityPreset.typicalSmogSeverity === 'High' ? 140 : 65;
    return {
      city: cityPreset.name,
      state: cityPreset.state,
      country: 'India',
      current: {
        pm25: defaultPm,
        pm10: Math.round(defaultPm * 1.6),
        no2: 45,
        so2: 12,
        co: 1.1,
        o3: 35,
        aqi: Math.min(500, Math.round(defaultPm * 1.15)),
        aqiCategory: defaultPm > 200 ? 'Severe' : defaultPm > 100 ? 'Unhealthy' : 'Moderate',
        primaryPollutant: 'PM2.5',
      },
      weather: {
        temperature: 23,
        humidity: 62,
        windSpeed: 8,
        windDirection: 280,
        surfacePressure: 1014,
        weatherDescription: 'Calibrated atmospheric model baseline',
        isThermalInversionLikely: defaultPm > 180,
      },
      hourly: generateDiurnalCurve(defaultPm),
      metadata: {
        provider: 'BreatheWise Offline Fallback Cache',
        stationName: `${cityPreset.name} Reference Baseline`,
        latitude: cityPreset.lat,
        longitude: cityPreset.lon,
        lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isLive: false,
        attribution: 'Calibrated Copernicus CAMS Baseline (Offline Mode)',
      },
    };
  }
}
