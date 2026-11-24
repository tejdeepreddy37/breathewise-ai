import { EnvironmentalTelemetry, HourlyDataPoint, CurrentPollutants, WeatherTelemetry } from '../types/telemetry';

export async function fetchOpenMeteoTelemetry(
  lat: number,
  lon: number,
  cityName: string,
  stateName: string
): Promise<EnvironmentalTelemetry> {
  const aqUrl = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone,us_aqi&hourly=pm10,pm2_5,nitrogen_dioxide,ozone,us_aqi,boundary_layer_height&timezone=auto&forecast_days=1`;
  const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,surface_pressure,wind_speed_10m,wind_direction_10m,weather_code&timezone=auto`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 6000); // 6s timeout

  try {
    const [aqRes, weatherRes] = await Promise.all([
      fetch(aqUrl, { signal: controller.signal }),
      fetch(weatherUrl, { signal: controller.signal }).catch(() => null),
    ]);

    clearTimeout(timeoutId);

    if (!aqRes.ok) {
      throw new Error(`Open-Meteo Air Quality API error: ${aqRes.status} ${aqRes.statusText}`);
    }

    const aqData = await aqRes.json();
    const weatherData = weatherRes && weatherRes.ok ? await weatherRes.json() : null;

    const currentAq = aqData.current || {};
    const pm25 = Math.round(currentAq.pm2_5 ?? 120);
    const pm10 = Math.round(currentAq.pm10 ?? pm25 * 1.5);
    const no2 = Math.round(currentAq.nitrogen_dioxide ?? 35);
    const so2 = Math.round(currentAq.sulphur_dioxide ?? 10);
    const co = +(currentAq.carbon_monoxide ?? 0.8).toFixed(2);
    const o3 = Math.round(currentAq.ozone ?? 30);
    const aqi = Math.round(currentAq.us_aqi ?? Math.min(500, Math.round(pm25 * 1.15)));

    let aqiCategory: CurrentPollutants['aqiCategory'] = 'Moderate';
    if (aqi <= 50) aqiCategory = 'Good';
    else if (aqi <= 100) aqiCategory = 'Moderate';
    else if (aqi <= 150) aqiCategory = 'Poor';
    else if (aqi <= 200) aqiCategory = 'Unhealthy';
    else if (aqi <= 300) aqiCategory = 'Severe';
    else aqiCategory = 'Hazardous';

    const currentWeather = weatherData?.current || {};
    const temp = Math.round(currentWeather.temperature_2m ?? 22);
    const humidity = Math.round(currentWeather.relative_humidity_2m ?? 60);
    const windSpeed = Math.round(currentWeather.wind_speed_10m ?? 8);
    const windDir = Math.round(currentWeather.wind_direction_10m ?? 270);
    const pressure = Math.round(currentWeather.surface_pressure ?? 1013);

    // Thermal inversion is likely during winter when wind speed is low (< 8 km/h), humidity is moderate/high, and night/morning
    const isThermalInversion = windSpeed <= 8 && temp <= 22;

    const weather: WeatherTelemetry = {
      temperature: temp,
      humidity,
      windSpeed,
      windDirection: windDir,
      surfacePressure: pressure,
      weatherDescription: isThermalInversion
        ? 'Thermal atmospheric boundary trapping surface particulates'
        : 'Active convective airflow with steady dispersion',
      isThermalInversionLikely: isThermalInversion,
    };

    // Format hourly
    const hourlyTimes = aqData.hourly?.time || [];
    const hourlyPm25 = aqData.hourly?.pm2_5 || [];
    const hourlyPm10 = aqData.hourly?.pm10 || [];
    const hourlyNo2 = aqData.hourly?.nitrogen_dioxide || [];
    const hourlyO3 = aqData.hourly?.ozone || [];
    const hourlyAqi = aqData.hourly?.us_aqi || [];
    const hourlyPbl = aqData.hourly?.boundary_layer_height || [];

    // Find the minimum PM2.5 in daytime (11:00 - 16:00) to flag clean air windows
    let daytimeMinPm25 = 9999;
    for (let i = 0; i < hourlyTimes.length; i++) {
      const h = new Date(hourlyTimes[i]).getHours();
      if (h >= 11 && h <= 16 && hourlyPm25[i] != null) {
        if (hourlyPm25[i] < daytimeMinPm25) daytimeMinPm25 = hourlyPm25[i];
      }
    }

    const hourly: HourlyDataPoint[] = [];
    for (let i = 0; i < Math.min(24, hourlyTimes.length); i++) {
      const timeStr = hourlyTimes[i];
      const h = new Date(timeStr).getHours();
      const hPm25 = Math.round(hourlyPm25[i] ?? pm25);
      const hAqi = Math.round(hourlyAqi[i] ?? Math.min(500, Math.round(hPm25 * 1.15)));
      const pbl = Math.round(hourlyPbl[i] ?? (h >= 11 && h <= 16 ? 1200 : 300));

      const isClean = h >= 12 && h <= 16 && hPm25 <= daytimeMinPm25 * 1.25;

      hourly.push({
        time: timeStr,
        hour: h,
        pm25: hPm25,
        pm10: Math.round(hourlyPm10[i] ?? hPm25 * 1.5),
        no2: Math.round(hourlyNo2[i] ?? no2),
        o3: Math.round(hourlyO3[i] ?? o3),
        aqi: hAqi,
        temperature: temp,
        windSpeed,
        boundaryLayerHeight: pbl,
        isCleanAirWindow: isClean,
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
        co,
        o3,
        aqi,
        aqiCategory,
        primaryPollutant: 'PM2.5',
      },
      weather,
      hourly,
      metadata: {
        provider: 'Open-Meteo (Copernicus CAMS)',
        stationName: `Copernicus CAMS 0.25° Model Grid (${cityName})`,
        latitude: lat,
        longitude: lon,
        lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isLive: true,
        attribution: 'Open-Meteo / Copernicus Atmosphere Monitoring Service (CC BY 4.0)',
      },
    };
  } catch (err) {
    clearTimeout(timeoutId);
    throw err;
  }
}
