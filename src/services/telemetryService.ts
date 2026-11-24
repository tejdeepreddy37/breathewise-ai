/**
 * Telemetry Ingestion, Validation & Cache Orchestrator
 * 
 * Manages live Open-Meteo fetching, local cache invalidation (15-min TTL),
 * and transparent fallback to simulated demonstration profiles.
 */

import { EnvironmentalTelemetry } from '../types/telemetry';
import { INDIAN_CITIES_PRESETS } from '../data/cities';
import { FALLBACK_TELEMETRY, generateSimulatedDiurnalCurve } from '../data/staticFallback';
import { fetchOpenMeteoTelemetry } from './openMeteo';
import { calculateCpcbAqi } from '../engines/cpcbAqi';

const CACHE_PREFIX = 'breathewise_telemetry_';
const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes cache

export async function getCityTelemetry(cityId: string): Promise<EnvironmentalTelemetry> {
  const cityPreset = INDIAN_CITIES_PRESETS.find((c) => c.id === cityId) || INDIAN_CITIES_PRESETS[0];

  // 1. Check local browser cache
  try {
    const cached = localStorage.getItem(`${CACHE_PREFIX}${cityId}`);
    if (cached) {
      const parsed = JSON.parse(cached);
      const ageMs = Date.now() - parsed.timestamp;
      if (ageMs < CACHE_TTL_MS) {
        const cachedData = parsed.data as EnvironmentalTelemetry;
        const minsAgo = Math.max(1, Math.round(ageMs / 60000));
        // Return with explicit cache metadata indicator
        return {
          ...cachedData,
          metadata: {
            ...cachedData.metadata,
            fetchTimestamp: `Cached (${minsAgo}m ago)`,
          },
        };
      }
    }
  } catch (e) {
    // LocalStorage inaccessible or parse error
  }

  // 2. Attempt live Open-Meteo CAMS atmospheric fetch
  try {
    const liveData = await fetchOpenMeteoTelemetry(
      cityPreset.lat,
      cityPreset.lon,
      cityPreset.name,
      cityPreset.state
    );

    // Save to local cache
    try {
      localStorage.setItem(
        `${CACHE_PREFIX}${cityId}`,
        JSON.stringify({ timestamp: Date.now(), data: liveData })
      );
    } catch (e) {}

    return liveData;
  } catch (err) {
    console.warn(`[BreatheWise] Live telemetry fetch unavailable for ${cityPreset.name}. Using calibrated demonstration profile.`, err);

    // 3. Transparent fallback to simulated regional profiles
    if (FALLBACK_TELEMETRY[cityId]) {
      return FALLBACK_TELEMETRY[cityId];
    }

    // Dynamic fallback generation based on city severity
    const defaultPm = cityPreset.typicalSmogSeverity === 'Extreme' ? 240 : cityPreset.typicalSmogSeverity === 'High' ? 130 : 60;
    const aqiResult = calculateCpcbAqi({
      pm25: defaultPm,
      pm10: Math.round(defaultPm * 1.55),
      no2: 42,
      o3: 35,
      co: 1.1,
    });

    return {
      city: cityPreset.name,
      state: cityPreset.state,
      country: 'India',
      current: {
        pm25: defaultPm,
        pm10: Math.round(defaultPm * 1.55),
        no2: 42,
        so2: 12,
        co: 1.1,
        o3: 35,
        aqi: aqiResult.aqi,
        aqiCategory: aqiResult.category,
        primaryPollutant: aqiResult.primaryPollutant,
        aqiStandard: aqiResult.standard,
      },
      weather: {
        temperature: 23,
        humidity: 62,
        windSpeed: 8,
        windDirection: 280,
        surfacePressure: 1014,
        weatherDescription: 'Representative regional atmospheric model baseline',
        isThermalInversionLikely: defaultPm > 150,
      },
      hourly: generateSimulatedDiurnalCurve(defaultPm),
      metadata: {
        provider: 'BreatheWise Simulated Regional Profile',
        stationName: `${cityPreset.name} Regional Simulation Baseline`,
        latitude: cityPreset.lat,
        longitude: cityPreset.lon,
        fetchTimestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        modelTimestamp: 'Offline Reference Model',
        isLive: false,
        isSimulated: true,
        attribution: 'Simulated profile for offline demonstration based on typical seasonal diurnal curves.',
      },
    };
  }
}
