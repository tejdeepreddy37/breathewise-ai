/**
 * Open-Meteo Environmental Telemetry Service
 * 
 * Ingests atmospheric reanalysis and meteorological forecast data derived from
 * the European Copernicus Atmosphere Monitoring Service (CAMS) 0.25° grid model.
 * 
 * Quality Principles:
 * 1. Timezone isolation: Parses local hours directly from ISO strings to preserve Indian Standard Time.
 * 2. Carbon Monoxide normalization: Converts API µg/m³ to standard mg/m³ (÷ 1000).
 * 3. Verified Indian CPCB NAQI calculation via piecewise linear breakpoint interpolation.
 * 4. Zero fabricated boundary layer heights: Preserves null when unobserved.
 */

import { EnvironmentalTelemetry, HourlyDataPoint, WeatherTelemetry } from '../types/telemetry';
import { calculateCpcbAqi } from '../engines/cpcbAqi';

export async function fetchOpenMeteoTelemetry(
  lat: number,
  lon: number,
  cityName: string,
  stateName: string
): Promise<EnvironmentalTelemetry> {
  const aqUrl = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone,us_aqi&hourly=pm10,pm2_5,nitrogen_dioxide,sulphur_dioxide,ozone,us_aqi,boundary_layer_height&timezone=auto&forecast_days=1`;
  const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,surface_pressure,wind_speed_10m,wind_direction_10m,weather_code&timezone=auto`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 6000); // 6s timeout

  try {
    const [aqRes, weatherRes] = await Promise.all([
      fetch(aqUrl, { signal: controller.signal }),
      fetch(weatherUrl, { signal: controller.signal }).catch(() => null),
    ]);

    if (!aqRes.ok) {
      throw new Error(`Open-Meteo Air Quality API error: ${aqRes.status} ${aqRes.statusText}`);
    }

    const aqData = await aqRes.json();
    const weatherData = weatherRes && weatherRes.ok ? await weatherRes.json() : null;

    const currentAq = aqData?.current;
    if (!currentAq || typeof currentAq.pm2_5 !== 'number' || !Number.isFinite(currentAq.pm2_5) || currentAq.pm2_5 < 0) {
      throw new Error('Open-Meteo response missing valid current.pm2_5 reading');
    }

    const pm25 = Math.round(currentAq.pm2_5);
    // Transparently preserve null if PM10 or gases were unobserved; DO NOT silently fabricate
    const pm10 = typeof currentAq.pm10 === 'number' && Number.isFinite(currentAq.pm10) && currentAq.pm10 >= 0 ? Math.round(currentAq.pm10) : null;
    const no2 = typeof currentAq.nitrogen_dioxide === 'number' && Number.isFinite(currentAq.nitrogen_dioxide) && currentAq.nitrogen_dioxide >= 0 ? Math.round(currentAq.nitrogen_dioxide) : null;
    const so2 = typeof currentAq.sulphur_dioxide === 'number' && Number.isFinite(currentAq.sulphur_dioxide) && currentAq.sulphur_dioxide >= 0 ? Math.round(currentAq.sulphur_dioxide) : null;
    
    // Normalize Carbon Monoxide from Open-Meteo µg/m³ to standard mg/m³
    const rawCoUg = currentAq.carbon_monoxide;
    const coMg = typeof rawCoUg === 'number' && Number.isFinite(rawCoUg) && rawCoUg >= 0 ? +(rawCoUg / 1000).toFixed(2) : null;
    
    const o3 = typeof currentAq.ozone === 'number' && Number.isFinite(currentAq.ozone) && currentAq.ozone >= 0 ? Math.round(currentAq.ozone) : null;
    const rawUsAqi = typeof currentAq.us_aqi === 'number' && Number.isFinite(currentAq.us_aqi) ? Math.round(currentAq.us_aqi) : 0;

    // Compute official Indian CPCB NAQI based on official breakpoint tables
    const aqiResult = calculateCpcbAqi({
      pm25,
      pm10,
      no2,
      so2,
      o3,
      co: coMg,
    });

    const hasLiveWeather = Boolean(weatherData && weatherData.current);
    const currentWeather = weatherData?.current || {};
    const temp = Math.round(currentWeather.temperature_2m ?? 22);
    const humidity = Math.round(currentWeather.relative_humidity_2m ?? 60);
    const windSpeed = Math.round(currentWeather.wind_speed_10m ?? 8);
    const windDir = Math.round(currentWeather.wind_direction_10m ?? 270);
    const pressure = Math.round(currentWeather.surface_pressure ?? 1013);

    // Thermal inversion heuristic based on cold surface temperature, high humidity, and stagnation (< 6 km/h)
    const isThermalInversion = windSpeed <= 6 && temp <= 20 && humidity >= 65;

    const weather: WeatherTelemetry = {
      temperature: temp,
      humidity,
      windSpeed,
      windDirection: windDir,
      surfacePressure: pressure,
      weatherDescription: !hasLiveWeather
        ? 'Defaulted atmospheric profile (weather feed unavailable)'
        : isThermalInversion
        ? 'Thermal atmospheric inversion trapping ground-level emissions'
        : windSpeed > 12
        ? 'Active atmospheric convective mixing with steady dispersion'
        : 'Stable atmospheric conditions with moderate ventilation',
      isThermalInversionLikely: isThermalInversion,
    };

    // Format hourly data points with timezone-safe parsing
    const hourlyTimes: string[] = Array.isArray(aqData?.hourly?.time) ? aqData.hourly.time : [];
    if (hourlyTimes.length === 0) {
      throw new Error('Open-Meteo response missing hourly time-series');
    }
    const hourlyPm25: unknown[] = Array.isArray(aqData.hourly?.pm2_5) ? aqData.hourly.pm2_5 : [];
    const hourlyPm10: unknown[] = Array.isArray(aqData.hourly?.pm10) ? aqData.hourly.pm10 : [];
    const hourlyNo2: unknown[] = Array.isArray(aqData.hourly?.nitrogen_dioxide) ? aqData.hourly.nitrogen_dioxide : [];
    const hourlySo2: unknown[] = Array.isArray(aqData.hourly?.sulphur_dioxide) ? aqData.hourly.sulphur_dioxide : [];
    const hourlyO3: unknown[] = Array.isArray(aqData.hourly?.ozone) ? aqData.hourly.ozone : [];
    const hourlyAqi: unknown[] = Array.isArray(aqData.hourly?.us_aqi) ? aqData.hourly.us_aqi : [];
    const hourlyPbl: unknown[] = Array.isArray(aqData.hourly?.boundary_layer_height) ? aqData.hourly.boundary_layer_height : [];

    const hourly: HourlyDataPoint[] = [];
    const pointsCount = Math.min(24, hourlyTimes.length);

    for (let i = 0; i < pointsCount; i++) {
      const timeStr = hourlyTimes[i];
      // Timezone-safe hour extraction: "2026-11-24T14:00" -> 14
      let localHour = i;
      if (typeof timeStr === 'string' && timeStr.includes('T')) {
        const parts = timeStr.split('T')[1].split(':');
        const parsedHour = parseInt(parts[0], 10);
        if (Number.isFinite(parsedHour) && parsedHour >= 0 && parsedHour <= 23) {
          localHour = parsedHour;
        }
      }

      const rawHPm25 = hourlyPm25[i];
      const rawHPm10 = hourlyPm10[i];
      const rawHNo2 = hourlyNo2[i];
      const rawHSo2 = hourlySo2[i];
      const rawHO3 = hourlyO3[i];
      const rawHAqi = hourlyAqi[i];
      const rawHPbl = hourlyPbl[i];

      const hPm25 = typeof rawHPm25 === 'number' && Number.isFinite(rawHPm25) && rawHPm25 >= 0 ? Math.round(rawHPm25) : pm25;
      const hPm10 = typeof rawHPm10 === 'number' && Number.isFinite(rawHPm10) && rawHPm10 >= 0 ? Math.round(rawHPm10) : null;
      const hNo2 = typeof rawHNo2 === 'number' && Number.isFinite(rawHNo2) && rawHNo2 >= 0 ? Math.round(rawHNo2) : null;
      const hSo2 = typeof rawHSo2 === 'number' && Number.isFinite(rawHSo2) && rawHSo2 >= 0 ? Math.round(rawHSo2) : null;
      const hO3 = typeof rawHO3 === 'number' && Number.isFinite(rawHO3) && rawHO3 >= 0 ? Math.round(rawHO3) : null;

      // Verified Indian CPCB calculation for this hour
      const hourlyAqiResult = calculateCpcbAqi({
        pm25: hPm25,
        pm10: hPm10,
        no2: hNo2,
        so2: hSo2,
        o3: hO3,
      });

      // Preserve null for unobserved PBL; DO NOT fabricate synthetic heights
      const pblVal = typeof rawHPbl === 'number' && Number.isFinite(rawHPbl) && rawHPbl >= 0 ? Math.round(rawHPbl) : null;

      hourly.push({
        time: timeStr,
        hour: localHour,
        pm25: hPm25,
        pm10: hPm10,
        no2: hNo2,
        so2: hSo2,
        o3: hO3,
        cpcbAqi: hourlyAqiResult.aqi,
        usAqi: typeof rawHAqi === 'number' && Number.isFinite(rawHAqi) ? Math.round(rawHAqi) : rawUsAqi,
        temperature: temp,
        windSpeed,
        boundaryLayerHeight: pblVal,
      });
    }

    return {
      city: cityName,
      state: stateName,
      country: 'India',
      current: {
        pm25,
        pm10,
        no2,
        so2,
        co: coMg,
        o3,
        aqi: aqiResult.aqi,
        aqiCategory: aqiResult.category,
        primaryPollutant: aqiResult.primaryPollutant,
        aqiStandard: aqiResult.standard,
      },
      weather,
      hourly,
      metadata: {
        provider: 'Open-Meteo (Copernicus Atmosphere Grid)',
        stationName: `Copernicus CAMS 0.25° Regional Grid (${cityName})`,
        latitude: lat,
        longitude: lon,
        fetchTimestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        modelTimestamp: currentAq.time ? currentAq.time.replace('T', ' ') : undefined,
        isLive: true,
        isSimulated: false,
        attribution: 'Open-Meteo / Copernicus Atmosphere Monitoring Service (ECMWF CAMS)',
      },
    };
  } finally {
    clearTimeout(timeoutId);
  }
}
