export type VulnerabilityProfile = 'pediatric' | 'senior_respiratory' | 'outdoor_athlete' | 'normal_adult';

export interface CleanAirWindow {
  startHour: number; // e.g. 13
  endHour: number; // e.g. 16
  displayWindow: string; // e.g. "1:00 PM – 4:00 PM"
  durationHours: number;
  averagePm25: number;
  averageAqi: number;
  reductionVsPeakPercent: number; // e.g. 52% reduction
  convectiveReasoning: string;
  isAvailableToday: boolean;
}

export type ActivityType = 'resting_sleep' | 'desk_office' | 'light_walking' | 'cycling_commute' | 'outdoor_running' | 'heavy_cardio';

export interface InhaledDoseResult {
  activity: ActivityType;
  durationMinutes: number;
  ambientPm25: number; // µg/m³
  minuteVentilationRateLpm: number; // Litres per minute
  inhaledAirVolumeM3: number; // m³
  maskType: 'none' | 'cloth' | 'surgical' | 'n95' | 'n99';
  maskFiltrationEfficiency: number; // 0.0 - 0.99
  inhaledDoseUg: number; // microgram PM2.5 deposited/inhaled
  equivalentCigarettes: number; // approx benchmark (22 µg/m³ 24h ~ 1 cig)
  riskLevel: 'LOW' | 'MODERATE' | 'ELEVATED' | 'CRITICAL';
  doseSavedUgWithN95: number;
}

export type CommuteMode = 'two_wheeler_open' | 'auto_rickshaw' | 'non_ac_bus' | 'ac_cab' | 'ac_metro' | 'work_from_home';

export interface CommuteComparison {
  mode: CommuteMode;
  modeLabel: string;
  travelTimeMinutes: number;
  cabinPm25Concentration: number; // µg/m³
  inhaledDoseUg: number;
  carbonEmissionKg: number; // kg CO2e
  exposureReductionVsOpenTransitPercent: number;
  recommendationTag?: 'RECOMMENDED' | 'BEST_ECO_SWAP' | 'HIGH_EXPOSURE_RISK';
}

export interface IndoorVentilationRecommendation {
  safeWindowActive: boolean;
  safeWindowText: string;
  outdoorPm25: number;
  estimatedIndoorBaselinePm25: number; // with infiltration ratio ~0.45
  actionDirective: string;
  windowAction: 'SEAL_COMPLETELY' | 'CRACK_FLUSH_NOW' | 'OPEN_CROSS_VENTILATE';
  purifierRecommendation: {
    recommendedSpeed: 'OFF' | 'LOW' | 'MEDIUM' | 'TURBO';
    targetRuntimeMinutes: number;
    estimatedPostCleanPm25: number;
  };
}
