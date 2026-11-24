import { IndoorVentilationRecommendation } from '../types/engines';
import { CleanAirWindow } from '../types/engines';

export function calculateIndoorRecommendations(
  outdoorPm25: number,
  cleanAirWindow: CleanAirWindow,
  currentHour = new Date().getHours(),
  roomAreaM2 = 20
): IndoorVentilationRecommendation {
  const isWindowActive = currentHour >= cleanAirWindow.startHour && currentHour <= cleanAirWindow.endHour;

  // Building infiltration factor
  // Closed windows: alpha = 0.45
  // Open windows: alpha = 0.90
  const baselineIndoor = Math.round(outdoorPm25 * 0.45);

  let windowAction: IndoorVentilationRecommendation['windowAction'] = 'SEAL_COMPLETELY';
  let actionDirective = '';
  let safeWindowText = '';

  if (outdoorPm25 < 60) {
    windowAction = 'OPEN_CROSS_VENTILATE';
    safeWindowText = 'Natural ventilation safe right now.';
    actionDirective = 'Outdoor air is relatively clean. Open windows across rooms to flush accumulated indoor CO2, cooking VOCs, and micro-dust.';
  } else if (isWindowActive) {
    windowAction = 'CRACK_FLUSH_NOW';
    safeWindowText = `Clean-Air Window Active (${cleanAirWindow.displayWindow})`;
    actionDirective = `Take advantage of the afternoon convective mixing window. Open opposite windows for a brisk 35-minute air flush, then seal before evening rush hour.`;
  } else {
    windowAction = 'SEAL_COMPLETELY';
    safeWindowText = `Next Safe Flush Window: ${cleanAirWindow.displayWindow}`;
    actionDirective = `Surface boundary layer is currently trapping vehicle and thermal smog. Keep all external doors and balcony windows sealed. Use internal recirculation mode on ACs.`;
  }

  // Purifier runtime calculation
  // Room Volume V = Area * 2.8m height
  const roomVolumeM3 = roomAreaM2 * 2.8;
  const mediumCadr = 250; // m³/h typical HEPA purifier
  const airChangesPerHour = +(mediumCadr / roomVolumeM3).toFixed(1);
  // Time to 75% reduction: t = ln(4) / ACH * 60 min ~ 1.38 / ACH * 60
  const targetRuntimeMinutes = Math.min(120, Math.max(25, Math.round((1.38 / airChangesPerHour) * 60)));
  const estimatedPostCleanPm25 = Math.max(8, Math.round(baselineIndoor * 0.18));

  let recommendedSpeed: 'OFF' | 'LOW' | 'MEDIUM' | 'TURBO' = 'MEDIUM';
  if (outdoorPm25 > 250) recommendedSpeed = 'TURBO';
  else if (outdoorPm25 > 100) recommendedSpeed = 'MEDIUM';
  else if (outdoorPm25 > 45) recommendedSpeed = 'LOW';
  else recommendedSpeed = 'OFF';

  return {
    safeWindowActive: isWindowActive,
    safeWindowText,
    outdoorPm25,
    estimatedIndoorBaselinePm25: baselineIndoor,
    actionDirective,
    windowAction,
    purifierRecommendation: {
      recommendedSpeed,
      targetRuntimeMinutes,
      estimatedPostCleanPm25,
    },
  };
}
