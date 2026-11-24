import { VulnerabilityProfile } from './engines';

export interface RoutineSlot {
  timeSlot: string; // e.g. "07:00 - 09:00"
  activityName: string;
  exposureRisk: 'SAFE' | 'MODERATE' | 'HIGH' | 'CRITICAL';
  directive: string;
  alternativeSuggestion: string;
}

export interface GroundedAiLivingPlan {
  summaryTitle: string; // Punchy executive takeaway
  summaryBody: string; // ~35 words
  cleanAirWindowAdvisory: string;
  vulnerabilityGuidance: {
    profile: VulnerabilityProfile;
    cautionNotice: string;
    actionableStep: string;
  };
  dailyRoutine: RoutineSlot[];
  indoorProtocol: string;
  ecoActionOfTheDay: string;
  scientificConfidence: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  contextSummary?: string;
  suggestedFollowUps?: string[];
}
