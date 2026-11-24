import { VulnerabilityProfile } from './engines';

export interface UserPreferences {
  vulnerabilityProfile: VulnerabilityProfile;
  homeCityId: string;
  roomSizeM2: number;
  hasAirPurifier: boolean;
  hasHepaAc: boolean;
  typicalCommuteDistanceKm: number;
  usualOutdoorActivityTime: 'morning' | 'afternoon' | 'evening' | 'night';
  useEcoAlternatives: boolean;
}

export const DEFAULT_USER_PREFERENCES: UserPreferences = {
  vulnerabilityProfile: 'pediatric',
  homeCityId: 'delhi-anand-vihar',
  roomSizeM2: 20,
  hasAirPurifier: true,
  hasHepaAc: false,
  typicalCommuteDistanceKm: 14,
  usualOutdoorActivityTime: 'afternoon',
  useEcoAlternatives: true,
};
