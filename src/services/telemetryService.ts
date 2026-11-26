/**
 * Telemetry Ingestion, Validation & Cache Orchestrator
 * 
 * Manages live Open-Meteo fetching for any Indian State/District/City/Town,
 * local cache invalidation (15-min TTL), and transparent provenance states:
 * - Live (Copernicus CAMS)
 * - Cached (explicitly stamped with age)
 * - Calibrated Baseline (only for calibrated presets)
 * - Unavailable (honest failure state when uncalibrated location has no network)
 */

import { EnvironmentalTelemetry } from '../types/telemetry';
import { INDIAN_CITIES_PRESETS } from '../data/cities';
import { INDIA_LOCATIONS, IndiaLocation } from '../data/indiaLocations';
import { FALLBACK_TELEMETRY } from '../data/staticFallback';
import { fetchOpenMeteoTelemetry } from './openMeteo';

const CACHE_PREFIX = 'breathewise_telemetry_';
const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes cache

export function resolveLocationById(cityId: string, customLocation?: IndiaLocation | null): IndiaLocation {
  if (customLocation && customLocation.id === cityId) {
    return customLocation;
  }
  const fromIndia = INDIA_LOCATIONS.find((l) => l.id === cityId);
  if (fromIndia) return fromIndia;

  const fromPreset = INDIAN_CITIES_PRESETS.find((c) => c.id === cityId);
  if (fromPreset) {
    return {
      id: fromPreset.id,
      name: fromPreset.name,
      district: fromPreset.name,
      state: fromPreset.state,
      lat: fromPreset.lat,
      lon: fromPreset.lon,
      isCalibratedPreset: true,
    };
  }

  return INDIA_LOCATIONS[0];
}

export async function getCityTelemetry(
  cityIdOrLocation: string | IndiaLocation,
  customLocation?: IndiaLocation | null
): Promise<EnvironmentalTelemetry> {
  const location =
    typeof cityIdOrLocation === 'string'
      ? resolveLocationById(cityIdOrLocation, customLocation)
      : cityIdOrLocation;

  // 1. Check local browser cache with strict schema, location-match, and TTL validation
  const cacheKey = `${CACHE_PREFIX}${location.id}`;
  try {
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      const parsed = JSON.parse(cached);
      const ageMs = Date.now() - parsed?.timestamp;
      const isValidCache =
        parsed &&
        typeof parsed.timestamp === 'number' &&
        Number.isFinite(parsed.timestamp) &&
        ageMs >= 0 &&
        ageMs < CACHE_TTL_MS &&
        parsed.data &&
        parsed.data.city === location.name &&
        typeof parsed.data.current?.pm25 === 'number' &&
        Number.isFinite(parsed.data.current.pm25) &&
        Array.isArray(parsed.data.hourly) &&
        parsed.data.hourly.length > 0;

      if (isValidCache) {
        const cachedData = parsed.data as EnvironmentalTelemetry;
        const minsAgo = Math.max(1, Math.round(ageMs / 60000));
        return {
          ...cachedData,
          metadata: {
            ...cachedData.metadata,
            isLive: false,
            fetchTimestamp: `Cached CAMS (${minsAgo}m ago)`,
          },
        };
      } else {
        localStorage.removeItem(cacheKey);
      }
    }
  } catch {
    // LocalStorage inaccessible or corrupt JSON
  }

  // 2. Attempt live Open-Meteo CAMS atmospheric fetch by exact coordinates
  try {
    const liveData = await fetchOpenMeteoTelemetry(
      location.lat,
      location.lon,
      location.name,
      location.state
    );

    try {
      localStorage.setItem(
        cacheKey,
        JSON.stringify({ timestamp: Date.now(), data: liveData })
      );
    } catch {}

    return liveData;
  } catch (err) {
    console.warn(`[BreatheWise] Live telemetry fetch unavailable for ${location.name}.`, err);

    // 3. Calibrated baseline ONLY for verified calibrated presets
    if (FALLBACK_TELEMETRY[location.id]) {
      return FALLBACK_TELEMETRY[location.id];
    }

    // 4. For any other Indian city/town, do NOT fabricate fake AQI measurements!
    throw new Error(
      `Live atmospheric telemetry is currently unavailable for ${location.name}, ${location.state}. Please check your network connection or select a calibrated monitoring station.`
    );
  }
}
