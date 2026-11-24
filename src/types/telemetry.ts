export interface HourlyDataPoint {
  time: string; // ISO or "YYYY-MM-DDTHH:00"
  hour: number; // 0 - 23 (in city local time)
  pm25: number; // µg/m³
  pm10?: number | null; // µg/m³
  no2?: number | null; // µg/m³
  so2?: number | null; // µg/m³
  co?: number | null; // mg/m³ normalized
  o3?: number | null; // µg/m³
  cpcbAqi: number; // Official Indian CPCB NAQI formula calculation
  usAqi?: number; // US EPA standard calculation for reference
  temperature?: number; // °C
  windSpeed?: number; // km/h
  boundaryLayerHeight?: number | null; // meters (null when unobserved, never fabricated)
  isCleanAirWindow?: boolean;
}

export interface CurrentPollutants {
  pm25: number; // µg/m³
  pm10?: number | null; // µg/m³
  no2?: number | null; // µg/m³
  so2?: number | null; // µg/m³
  co?: number | null; // mg/m³ (normalized from API µg/m³)
  o3?: number | null; // µg/m³
  aqi: number; // Official Indian CPCB NAQI calculation
  aqiCategory: 'Good' | 'Satisfactory' | 'Moderate' | 'Poor' | 'Very Poor' | 'Severe';
  primaryPollutant: string;
  aqiStandard: 'Indian CPCB NAQI' | 'Indicative PM2.5-Derived';
}

export interface WeatherTelemetry {
  temperature: number; // °C
  humidity: number; // %
  windSpeed: number; // km/h
  windDirection: number; // degrees
  surfacePressure: number; // hPa
  weatherDescription: string;
  isThermalInversionLikely: boolean;
}

export interface StationMetadata {
  provider: 'Open-Meteo (Copernicus Atmosphere Grid)' | 'BreatheWise Simulated Regional Profile';
  stationName: string;
  latitude: number;
  longitude: number;
  fetchTimestamp: string;
  modelTimestamp?: string;
  isLive: boolean;
  isSimulated: boolean;
  attribution: string;
}

export interface EnvironmentalTelemetry {
  city: string;
  state: string;
  country: string;
  current: CurrentPollutants;
  weather: WeatherTelemetry;
  hourly: HourlyDataPoint[];
  metadata: StationMetadata;
}

export interface CityPreset {
  id: string;
  name: string;
  state: string;
  lat: number;
  lon: number;
  waqiStationId?: string;
  typicalSmogSeverity: 'Extreme' | 'High' | 'Moderate';
}
