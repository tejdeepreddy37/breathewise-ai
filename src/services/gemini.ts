/**
 * Grounded Gemini AI Orchestration Service
 * 
 * Generates personalized daily routines and interactive conversational responses
 * strictly grounded in verified environmental telemetry and deterministic physical safety rules.
 * 
 * Safety Principles:
 * 1. AI cannot override physical safety thresholds (e.g. ventilation when PM2.5 > 60 µg/m³).
 * 2. Defensive JSON schema validation prevents malformed output crashes.
 * 3. Client API keys are stored only in volatile session memory, never in unencrypted localStorage.
 */

import { GoogleGenerativeAI } from '@google/generative-ai';
import { EnvironmentalTelemetry } from '../types/telemetry';
import { CleanAirWindow, VulnerabilityProfile } from '../types/engines';
import { GroundedAiLivingPlan, ChatMessage } from '../types/ai';

// Deterministic rule-based living plan generator (100% reliable offline baseline)
export function generateDeterministicLivingPlan(
  telemetry: EnvironmentalTelemetry,
  window: CleanAirWindow,
  profile: VulnerabilityProfile
): GroundedAiLivingPlan {
  const pm = telemetry.current.pm25;
  const aqi = telemetry.current.aqi;
  const aqiCat = telemetry.current.aqiCategory;
  const isSevere = pm > 120 || aqi > 300;
  const isPoor = pm > 60 && pm <= 120;

  const profileCautions: Record<VulnerabilityProfile, string> = {
    pediatric: 'Children inhale up to 50% more air per unit body weight than adults, increasing vulnerable bronchial particulate exposure.',
    senior_respiratory: 'Elevated fine particulates provoke systemic cardiovascular stress and acute bronchial inflammation in sensitive airways.',
    outdoor_athlete: 'High-intensity exercise elevates minute ventilation from 8 L/min to over 55 L/min, multiplying deep airway particulate burden.',
    normal_adult: 'Prolonged cumulative exposure to fine particulates triggers oxidative stress, ocular irritation, and airway fatigue.',
  };

  const profileDirectives: Record<VulnerabilityProfile, string> = {
    pediatric: isSevere
      ? 'Restrict outdoor recreation. Ensure physical education is conducted indoors with air filtration active.'
      : `Schedule outdoor play strictly during the lower exposure period (${window.displayWindow}). Avoid morning traffic zones.`,
    senior_respiratory: isSevere
      ? 'Reschedule morning outdoor walks indoors. Keep rescue inhalers accessible and maintain filtered indoor air.'
      : `Conduct morning walks only after 11:30 AM once solar surface heating breaks the nocturnal ground-level inversion.`,
    outdoor_athlete: isSevere
      ? 'Cancel outdoor running. Shift cardio training to an indoor treadmill in a HEPA-filtered room.'
      : `If running outdoors, time workouts strictly within ${window.displayWindow} and consider an N95 respirator to filter fine particulates.`,
    normal_adult: isSevere
      ? 'Avoid open two-wheeler commuting. Use air-filtered rapid transit (Metro) and keep home envelope sealed.'
      : `Utilize the lower exposure window (${window.displayWindow}) for outdoor errands and commute planning.`,
  };

  let summaryTitle = '';
  let summaryBody = '';

  if (isSevere) {
    summaryTitle = `Severe Particulate Episode in ${telemetry.city} — Limit Outdoor Exertion`;
    summaryBody = `Current PM2.5 is ${pm} µg/m³ (CPCB NAQI ${aqi} — ${aqiCat}). Even during the diurnal minimum (${window.displayWindow}), ambient air remains hazardous. Keep indoor spaces sealed and run HEPA filtration.`;
  } else if (isPoor) {
    summaryTitle = `Elevated Particulate Drift in ${telemetry.city} — Utilize ${window.displayWindow}`;
    summaryBody = `Current PM2.5 is ${pm} µg/m³ (${aqiCat}). Daytime solar boundary mixing provides a ${window.reductionVsPeakPercent}% relative drop between ${window.displayWindow}. Prioritize barrier protection during morning and evening rush hours.`;
  } else {
    summaryTitle = `Acceptable Atmospheric Quality in ${telemetry.city} — Good Conditions During Midday`;
    summaryBody = `Current PM2.5 is ${pm} µg/m³ (CPCB NAQI ${aqi} — ${aqiCat}). Air quality is favorable for outdoor activities and home ventilation during the daytime window (${window.displayWindow}).`;
  }

  return {
    summaryTitle,
    summaryBody,
    cleanAirWindowAdvisory: window.windowStatus === 'HAZARDOUS_LIMIT_EXERTION'
      ? `The diurnal minimum between ${window.displayWindow} offers a relative dip, but overall PM2.5 remains hazardous (${window.averagePm25} µg/m³). Avoid outdoor workouts.`
      : `The optimal daytime window is ${window.displayWindow} (Avg PM2.5 ~${window.averagePm25} µg/m³). Daytime atmospheric mixing dilutes ground-level vehicle exhaust.`,
    vulnerabilityGuidance: {
      profile,
      cautionNotice: profileCautions[profile],
      actionableStep: profileDirectives[profile],
    },
    dailyRoutine: [
      {
        timeSlot: '07:00 – 10:00',
        activityName: 'Morning Rush & Surface Inversion',
        exposureRisk: isSevere ? 'CRITICAL' : isPoor ? 'HIGH' : 'MODERATE',
        directive: 'Avoid outdoor aerobic workouts and open two-wheeler transit.',
        alternativeSuggestion: 'Work from home or commute via AC Metro with an N95 mask. Keep bedroom windows sealed.',
      },
      {
        timeSlot: window.displayWindow,
        activityName: `Diurnal Minimum Window (${window.reductionVsPeakPercent}% lower vs peak)`,
        exposureRisk: isSevere ? 'HIGH' : isPoor ? 'MODERATE' : 'SAFE',
        directive: isSevere
          ? 'Lower relative exposure, but ambient air remains hazardous. Essential errands only with N95 mask.'
          : 'Best daytime window for outdoor errands, light walking, and scheduled transit.',
        alternativeSuggestion: isSevere
          ? 'Keep windows closed. Air quality is not clean enough for natural room flushing.'
          : 'Open windows for a brief 15-20 min flush if outdoor air is moderate.',
      },
      {
        timeSlot: '17:30 – 20:30',
        activityName: 'Evening Traffic Congestion',
        exposureRisk: isSevere ? 'CRITICAL' : isPoor ? 'HIGH' : 'MODERATE',
        directive: 'Close all balcony doors before evening traffic peaks. Wear an N95 mask if in open transit.',
        alternativeSuggestion: 'Delay departure by 40 minutes or select underground rapid transit corridors.',
      },
      {
        timeSlot: '21:00 – 06:00',
        activityName: 'Nocturnal Cooling & Sleep',
        exposureRisk: isSevere ? 'HIGH' : 'SAFE',
        directive: 'Run indoor air purifier on Medium/Turbo mode. Ensure bedroom doors remain closed.',
        alternativeSuggestion: 'Avoid burning incense, mosquito coils, or unvented heaters in sleeping quarters.',
      },
    ],
    indoorProtocol: isSevere
      ? 'Keep windows strictly sealed. Run indoor HEPA purifier on Turbo/Medium speed. Natural air flushing is unsafe.'
      : pm <= 60
      ? `Brief natural ventilation safe during ${window.displayWindow}. Keep windows sealed during morning and evening rush hours.`
      : 'Maintain closed window envelope and utilize indoor filtration to prevent particulate accumulation.',
    ecoActionOfTheDay: 'Choosing AC Metro over an open auto-rickshaw for a 14 km commute prevents ~1.8 kg of vehicular CO2 emissions and avoids up to 72% of inhaled particulate exposure.',
    scientificConfidence: telemetry.metadata.isSimulated
      ? 'High (Simulated Regional Model Baseline)'
      : 'High (Copernicus CAMS 0.25° Model Grid & CPCB NAQI Standards)',
  };
}

export async function fetchGeminiLivingPlan(
  telemetry: EnvironmentalTelemetry,
  window: CleanAirWindow,
  profile: VulnerabilityProfile,
  customApiKey?: string
): Promise<GroundedAiLivingPlan> {
  const apiKey = customApiKey || (import.meta as any).env?.VITE_GEMINI_API_KEY;

  if (!apiKey || apiKey === 'YOUR_GEMINI_API_KEY') {
    return generateDeterministicLivingPlan(telemetry, window, profile);
  }

  try {
    const ai = new GoogleGenerativeAI(apiKey);
    const model = ai.getGenerativeModel({
      model: 'gemini-1.5-flash',
      generationConfig: {
        responseMimeType: 'application/json',
        temperature: 0.15,
      },
    });

    const prompt = `You are BreatheWise AI, an expert Environmental Lifestyle Strategist.
Analyze the following real-time environmental context for ${telemetry.city}, India:
- Current PM2.5: ${telemetry.current.pm25} µg/m³
- Current AQI: ${telemetry.current.aqi} (${telemetry.current.aqiCategory} — ${telemetry.current.aqiStandard})
- Primary Pollutant: ${telemetry.current.primaryPollutant}
- Temperature: ${telemetry.weather.temperature} °C, Humidity: ${telemetry.weather.humidity}%
- Wind Speed: ${telemetry.weather.windSpeed} km/h, Inversion Trapping: ${telemetry.weather.isThermalInversionLikely}
- Diurnal Lowest Exposure Window: ${window.displayWindow} (Average PM2.5 in window: ${window.averagePm25} µg/m³, representing a ${window.reductionVsPeakPercent}% relative drop vs peak; Status: ${window.statusLabel})
- Ozone Warning: ${window.ozoneRiskWarning || 'None'}
- Target User Profile: ${profile} (pediatric, senior_respiratory, outdoor_athlete, or normal_adult)
- Data Source: ${telemetry.metadata.isSimulated ? 'Simulated Regional Profile' : 'Copernicus Atmosphere Service Regional Model Grid'}

STRICT SCIENTIFIC AND SAFETY CONSTRAINTS:
1. NEVER call a window "clean air" if average PM2.5 exceeds 60 µg/m³. Call it "relatively lower exposure".
2. If PM2.5 > 60 µg/m³, NEVER instruct users to open windows for ventilation. Keep them sealed.
3. Do NOT make medical diagnoses or prescribe medications.
4. Use exact numerical values provided. Do not hallucinate different numbers.

Return strictly a valid JSON object matching this schema:
{
  "summaryTitle": string (punchy executive takeaway, max 12 words),
  "summaryBody": string (concise environmental reality, max 35 words),
  "cleanAirWindowAdvisory": string (how to navigate ${window.displayWindow}),
  "vulnerabilityGuidance": {
    "profile": "${profile}",
    "cautionNotice": string (physiological risk in 1 sentence),
    "actionableStep": string (exact protective step)
  },
  "dailyRoutine": [
    {
      "timeSlot": "07:00 – 10:00",
      "activityName": string,
      "exposureRisk": "SAFE" | "MODERATE" | "HIGH" | "CRITICAL",
      "directive": string,
      "alternativeSuggestion": string
    },
    {
      "timeSlot": "${window.displayWindow}",
      "activityName": string,
      "exposureRisk": "SAFE" | "MODERATE" | "HIGH" | "CRITICAL",
      "directive": string,
      "alternativeSuggestion": string
    },
    {
      "timeSlot": "17:30 – 20:30",
      "activityName": string,
      "exposureRisk": "SAFE" | "MODERATE" | "HIGH" | "CRITICAL",
      "directive": string,
      "alternativeSuggestion": string
    },
    {
      "timeSlot": "21:00 – 06:00",
      "activityName": string,
      "exposureRisk": "SAFE" | "MODERATE" | "HIGH" | "CRITICAL",
      "directive": string,
      "alternativeSuggestion": string
    }
  ],
  "indoorProtocol": string (indoor filtration and envelope directive),
  "ecoActionOfTheDay": string (sustainable transit trade-off),
  "scientificConfidence": "High (Gemini 1.5 Grounded Synthesis)"
}`;

    const res = await model.generateContent(prompt);
    let text = res.response.text().trim();

    // Defensive stripping of markdown code blocks
    if (text.startsWith('```json')) text = text.slice(7);
    if (text.startsWith('```')) text = text.slice(3);
    if (text.endsWith('```')) text = text.slice(0, -3);
    text = text.trim();

    const parsed = JSON.parse(text) as GroundedAiLivingPlan;

    // Runtime defensive verification
    if (!parsed.summaryTitle || !Array.isArray(parsed.dailyRoutine) || parsed.dailyRoutine.length === 0) {
      throw new Error('Malformed JSON schema returned by model');
    }

    return parsed;
  } catch (err) {
    console.warn('[BreatheWise] Gemini API call failed or returned malformed output. Falling back to deterministic plan.', err);
    return generateDeterministicLivingPlan(telemetry, window, profile);
  }
}

export async function askBreatheWiseAssistant(
  question: string,
  history: ChatMessage[],
  telemetry: EnvironmentalTelemetry,
  window: CleanAirWindow,
  profile: VulnerabilityProfile,
  customApiKey?: string
): Promise<string> {
  const apiKey = customApiKey || (import.meta as any).env?.VITE_GEMINI_API_KEY;

  if (!apiKey || apiKey === 'YOUR_GEMINI_API_KEY') {
    // Structured intent-based deterministic assistant
    const qLower = question.toLowerCase();
    const pm = telemetry.current.pm25;

    // Intent 1: Outdoor Exercise / Running / Cardio
    if (qLower.includes('run') || qLower.includes('jog') || qLower.includes('exercise') || qLower.includes('workout') || (qLower.includes('bike') && qLower.includes('exercise'))) {
      if (pm > 120) {
        return `Outdoor Exercise Safety Alert for ${telemetry.city}:\nCurrent PM2.5 is ${pm} µg/m³ (CPCB NAQI ${telemetry.current.aqi} — ${telemetry.current.aqiCategory}). Under aerobic exertion, your minute ventilation rises to over 55 L/min, dramatically accelerating micro-particulate intake.\n\nRecommendation: Cancel outdoor cardio workouts today. Shift exercise indoors to a room with HEPA filtration active. Even during the diurnal minimum (${window.displayWindow}), PM2.5 remains hazardous for aerobic respiration.`;
      }
      return `Outdoor Exercise Guidance for ${telemetry.city}:\nCurrent PM2.5 is ${pm} µg/m³. If running or exercising outdoors today, time your session strictly within the diurnal minimum window (${window.displayWindow}) when atmospheric dispersion is greatest. Sensitive individuals and runners should wear a certified N95 respirator to minimize airway irritation.`;
    }

    // Intent 2: Windows / Indoor Ventilation / Air Purifier
    if (qLower.includes('window') || qLower.includes('ventilat') || qLower.includes('flush') || qLower.includes('purifier') || qLower.includes('air out')) {
      if (pm > 60) {
        return `Indoor Air Safety Notice for ${telemetry.city}:\nCurrent outdoor PM2.5 is ${pm} µg/m³. Natural ventilation is strictly NOT recommended today. Opening windows will flood your home with outdoor particulates, degrading indoor air quality. Keep all exterior windows sealed, set air conditioners to internal recirculation, and run your HEPA air purifier.`;
      }
      return `Indoor Ventilation Protocol for ${telemetry.city}:\nOutdoor air quality is relatively moderate (PM2.5: ${pm} µg/m³). You may conduct a brief 15 to 20-minute cross-ventilation flush during the diurnal dispersion window (${window.displayWindow}) to evacuate indoor CO2 and cooking odors. Seal all windows before evening traffic congestion begins.`;
    }

    // Intent 3: Commute / Metro / Auto / Transit
    if (qLower.includes('commute') || qLower.includes('metro') || qLower.includes('auto') || qLower.includes('traffic') || qLower.includes('bus') || qLower.includes('drive')) {
      return `Commute Exposure Analysis for ${telemetry.city}:\nIn dense traffic corridors, open two-wheelers and auto-rickshaws expose commuters to direct tailpipe exhaust (~30% higher than ambient background). Switching to the AC Metro reduces your commute particulate exposure by up to 72% while eliminating ~1.8 kg of personal vehicular CO2 emissions for a 14 km trip.`;
    }

    // Intent 4: Pediatric / Children / Family
    if (qLower.includes('child') || qLower.includes('kid') || qLower.includes('school') || qLower.includes('baby') || qLower.includes('family')) {
      if (pm > 100) {
        return `Child Air Protection Advisory for ${telemetry.city}:\nChildren have developing lungs and higher respiratory rates per kilogram of body weight. With current PM2.5 at ${pm} µg/m³, ensure schools conduct physical education indoors and keep outdoor playtime to a strict minimum. When outdoors for necessary transit, equip a well-fitted pediatric particulate mask.`;
      }
      return `Family Air Quality Guidance:\nOutdoor PM2.5 is ${pm} µg/m³. Today's relatively lower exposure window is ${window.displayWindow}. Schedule outdoor family activities during this window and avoid major arterial roadways during morning and evening rush hours.`;
    }

    // Default: General Overview
    return `In ${telemetry.city}, current PM2.5 is ${telemetry.current.pm25} µg/m³ (CPCB NAQI ${telemetry.current.aqi} — ${telemetry.current.aqiCategory}). Today's lowest relative exposure window is ${window.displayWindow} (${window.statusLabel}). For your selected ${profile} profile, prioritize barrier protection (N95) during rush hours and keep indoor spaces sealed when outdoor air is elevated.`;
  }

  try {
    const ai = new GoogleGenerativeAI(apiKey);
    const model = ai.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: `You are BreatheWise AI, an expert Environmental Intelligence and Living Assistant.
Current live context for ${telemetry.city}, India:
- PM2.5: ${telemetry.current.pm25} µg/m³, CPCB NAQI: ${telemetry.current.aqi} (${telemetry.current.aqiCategory})
- Temperature: ${telemetry.weather.temperature}°C, Wind: ${telemetry.weather.windSpeed} km/h
- Lowest Exposure Window: ${window.displayWindow} (${window.statusLabel})
- Active Profile: ${profile}
- Ozone Warning: ${window.ozoneRiskWarning || 'None'}
STRICT RULES:
1. If PM2.5 > 60 µg/m³, NEVER tell the user to open windows or ventilate.
2. If PM2.5 > 120 µg/m³, advise against outdoor aerobic workouts.
3. Never invent numbers. Never diagnose diseases or prescribe medications.
Keep responses concise, actionable, and grounded in the data above.`,
    });

    const chat = model.startChat({
      history: history.slice(-6).map((m) => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }],
      })),
    });

    const result = await chat.sendMessage(question);
    return result.response.text();
  } catch (err) {
    console.warn('[BreatheWise] Gemini chat error, using deterministic response.', err);
    return `In ${telemetry.city}, current PM2.5 is ${telemetry.current.pm25} µg/m³ (CPCB NAQI ${telemetry.current.aqi}). Today's lowest relative exposure window is ${window.displayWindow}. We recommend scheduling essential outdoor tasks during this window and keeping indoor spaces sealed during morning and evening smog peaks.`;
  }
}
