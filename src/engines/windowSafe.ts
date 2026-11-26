/**
 * Environmental Activity Window Intelligence (WindowSafe™)
 * 
 * Dynamically evaluates the 24-hour diurnal pollution forecast to identify
 * the lowest relative exposure period across PM2.5 and photochemical Ozone (O3).
 * 
 * Distinguishes true clean air from a relative diurnal minimum during severe smog.
 */

import { HourlyDataPoint } from '../types/telemetry';
import { CleanAirWindow } from '../types/engines';
import { calculateCpcbAqi } from './cpcbAqi';

export function calculateCleanAirWindow(hourly: HourlyDataPoint[]): CleanAirWindow {
  // Sanitize and validate hourly array (reject non-finite hours and clamp non-finite pollutant readings)
  const validPoints = (hourly || [])
    .filter((p) => p != null && typeof p.hour === 'number' && Number.isFinite(p.hour))
    .map((p) => ({
      ...p,
      pm25: typeof p.pm25 === 'number' && Number.isFinite(p.pm25) ? Math.max(0, p.pm25) : 0,
      o3: typeof p.o3 === 'number' && Number.isFinite(p.o3) ? Math.max(0, p.o3) : 0,
    }));

  if (validPoints.length < 2) {
    return {
      startHour: 13,
      endHour: 15,
      displayWindow: '1:00 PM – 3:00 PM',
      durationHours: 2,
      averagePm25: 75,
      averageAqi: 150,
      reductionVsPeakPercent: 35,
      windowStatus: 'UNHEALTHY_ELEVATED',
      statusLabel: 'Relatively Lower Exposure Window',
      convectiveReasoning: 'Solar boundary layer convective mixing typically offers a relative afternoon dispersion dip, though ambient air quality remains elevated.',
      isAvailableToday: true,
      ozoneRiskWarning: null,
    };
  }

  // Find peak 24-hour PM2.5 to establish reference baseline
  let peakPm25 = 0;
  for (const pt of validPoints) {
    if (pt.pm25 > peakPm25) peakPm25 = pt.pm25;
  }

  // Scan the 24-hour period for the lowest continuous 2 to 3-hour exposure window
  let bestStart = 13;
  let bestEnd = 15;
  let lowestCompositeRisk = Infinity;
  let lowestAvg = Infinity;
  let bestOzoneAvg = 0;

  for (let s = 0; s <= validPoints.length - 2; s++) {
    for (let e = s + 1; e <= Math.min(validPoints.length - 1, s + 2); e++) {
      const windowPoints = validPoints.slice(s, e + 1);
      if (windowPoints.length >= 2) {
        const sumPm = windowPoints.reduce((acc, p) => acc + p.pm25, 0);
        const avgPm = sumPm / windowPoints.length;
        const sumO3 = windowPoints.reduce((acc, p) => acc + (p.o3 || 0), 0);
        const avgO3 = Math.round(sumO3 / windowPoints.length);

        // Evaluate composite CPCB air quality index across PM2.5 and photochemical Ozone
        const windowAqiResult = calculateCpcbAqi({ pm25: Math.round(avgPm), o3: avgO3 });
        const compositeRisk = windowAqiResult.aqi;

        // Prioritize windows with lower composite AQI; break ties by lower PM2.5, then longer duration
        const isBetter =
          compositeRisk < lowestCompositeRisk ||
          (compositeRisk === lowestCompositeRisk && avgPm < lowestAvg) ||
          (compositeRisk === lowestCompositeRisk && avgPm === lowestAvg && (e - s) > (bestEnd - bestStart));

        if (isBetter) {
          lowestCompositeRisk = compositeRisk;
          lowestAvg = avgPm;
          bestStart = windowPoints[0].hour;
          bestEnd = windowPoints[windowPoints.length - 1].hour;
          bestOzoneAvg = avgO3;
        }
      }
    }
  }

  const avgPm25 = Math.round(lowestAvg === Infinity ? 75 : lowestAvg);
  
  // Calculate verified CPCB AQI for the window average
  const aqiResult = calculateCpcbAqi({ pm25: avgPm25, o3: bestOzoneAvg });
  const avgAqi = aqiResult.aqi;

  const reductionPercent = peakPm25 > 0 ? Math.max(0, Math.round(((peakPm25 - avgPm25) / peakPm25) * 100)) : 0;

  const formatHour = (h: number) => {
    const normH = ((h % 24) + 24) % 24;
    const period = normH >= 12 ? 'PM' : 'AM';
    const displayH = normH % 12 === 0 ? 12 : normH % 12;
    return `${displayH}:00 ${period}`;
  };

  const displayWindow = `${formatHour(bestStart)} – ${formatHour(bestEnd)}`;
  const durationHours = bestEnd >= bestStart ? Math.max(1, bestEnd - bestStart) : (24 - bestStart + bestEnd);

  // Determine honest status based on absolute health impact, not just relative drop
  let windowStatus: CleanAirWindow['windowStatus'] = 'UNHEALTHY_ELEVATED';
  let statusLabel = 'Relatively Lower Exposure Window';
  let convectiveReasoning = '';

  if (avgPm25 <= 30) {
    windowStatus = 'FAVORABLE';
    statusLabel = 'Clean Air Opportunity Window';
    convectiveReasoning = `Ambient particulate concentrations are within the WHO guideline range (${avgPm25} µg/m³). Favorable for outdoor activities and natural home ventilation.`;
  } else if (avgPm25 <= 60) {
    windowStatus = 'MODERATE_OPPORTUNITY';
    statusLabel = 'Moderate Air Exposure Window';
    convectiveReasoning = `Atmospheric dispersion provides a ${reductionPercent}% reduction compared to peak hours. Suitable for moderate outdoor tasks; sensitive individuals should monitor respiratory symptoms.`;
  } else if (avgPm25 <= 120) {
    windowStatus = 'UNHEALTHY_ELEVATED';
    statusLabel = 'Relatively Lower Exposure Window (Air Remains Poor)';
    convectiveReasoning = `Particulate density dips by ${reductionPercent}% between ${displayWindow} due to daytime solar boundary mixing, but ambient levels (${avgPm25} µg/m³) remain Unhealthy. Not clean air; limit strenuous physical exertion.`;
  } else {
    windowStatus = 'HAZARDOUS_LIMIT_EXERTION';
    statusLabel = 'Diurnal Minimum (Severe Smog Persists)';
    convectiveReasoning = `Even at its diurnal minimum between ${displayWindow}, PM2.5 remains severe (${avgPm25} µg/m³). Avoid outdoor workouts and keep indoor spaces sealed.`;
  }

  // Ozone risk warning if O3 exceeds 100 µg/m³
  let ozoneWarning: string | null = null;
  if (bestOzoneAvg > 100) {
    ozoneWarning = `Photochemical Ozone (O3) is elevated (~${bestOzoneAvg} µg/m³) during this afternoon window. Aerobic cardio outdoors may cause throat and airway irritation despite lower PM2.5.`;
  }

  return {
    startHour: bestStart,
    endHour: bestEnd,
    displayWindow,
    durationHours,
    averagePm25: avgPm25,
    averageAqi: avgAqi,
    reductionVsPeakPercent: reductionPercent,
    windowStatus,
    statusLabel,
    convectiveReasoning,
    isAvailableToday: true,
    ozoneRiskWarning: ozoneWarning,
  };
}
