export interface HourlyDataPoint {
  time: string; // ISO or "YYYY-MM-DDTHH:00"
  hour: number; // 0 - 23
  pm25: number; // µg/m³
  pm10: number; // µg/m³
  no2: number; // µg/m³
  so2?: number; // µg/m³
  co?: number; // µg/m³
  o3?: number; // µg/m³
  aqi: number; // European or US/Indian EPA standard calculation
  temperature?: number; // °C
  windSpeed?: number; // km/h
  boundaryLayerHeight?: number; // meters (PBL height for inversion tracking)
  isCleanAirWindow?: boolean;
}

export interface CurrentPollutants {
  pm25: number;
  pm10: number;
  no2: number;
  so2: number;
  co: number;
  o3: number;
  aqi: number;
  aqiCategory: 'Good' | 'Moderate' | 'Poor' | 'Unhealthy' | 'Severe' | 'Hazardous';
  primaryPollutant: string;
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
  provider: 'Open-Meteo (Copernicus CAMS)' | 'WAQI (CPCB Ground Station)' | 'BreatheWise Offline Fallback Cache';
  stationName: string;
  latitude: number;
  longitude: number;
  lastUpdated: string;
  isLive: boolean;
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
