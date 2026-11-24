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
  if (!hourly || hourly.length === 0) {
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
  for (const pt of hourly) {
    if (pt.pm25 > peakPm25) peakPm25 = pt.pm25;
  }

  // Scan the entire 24-hour period for the lowest continuous 2 to 3-hour exposure window
  let bestStart = 13;
  let bestEnd = 15;
  let lowestAvg = 9999;
  let bestOzoneAvg = 0;

  // Search continuous blocks of 2 to 3 hours across available data
  for (let s = 0; s <= hourly.length - 2; s++) {
    for (let e = s + 2; e <= Math.min(hourly.length - 1, s + 3); e++) {
      const windowPoints = hourly.filter((p) => p.hour >= s && p.hour <= e);
      if (windowPoints.length > 0) {
        const sumPm = windowPoints.reduce((acc, p) => acc + p.pm25, 0);
        const avgPm = sumPm / windowPoints.length;
        if (avgPm < lowestAvg) {
          lowestAvg = avgPm;
          bestStart = s;
          bestEnd = e;
          const sumO3 = windowPoints.reduce((acc, p) => acc + (p.o3 || 0), 0);
          bestOzoneAvg = Math.round(sumO3 / windowPoints.length);
        }
      }
    }
  }

  const windowPoints = hourly.filter((p) => p.hour >= bestStart && p.hour <= bestEnd);
  const avgPm25 = Math.round(lowestAvg === 9999 ? 75 : lowestAvg);
  
  // Calculate verified CPCB AQI for the window average
  const aqiResult = calculateCpcbAqi({ pm25: avgPm25, o3: bestOzoneAvg });
  const avgAqi = aqiResult.aqi;

  const reductionPercent = peakPm25 > 0 ? Math.max(0, Math.round(((peakPm25 - avgPm25) / peakPm25) * 100)) : 0;

  const formatHour = (h: number) => {
    const period = h >= 12 ? 'PM' : 'AM';
    const displayH = h % 12 === 0 ? 12 : h % 12;
    return `${displayH}:00 ${period}`;
  };

  const displayWindow = `${formatHour(bestStart)} – ${formatHour(bestEnd)}`;

  // Determine honest status based on absolute health impact, not just relative drop
  let windowStatus: CleanAirWindow['windowStatus'] = 'UNHEALTHY_ELEVATED';
  let statusLabel = 'Relatively Lower Exposure Window';
  let convectiveReasoning = '';

  if (avgPm25 <= 30) {
    windowStatus = 'FAVORABLE';
    statusLabel = 'Clean Air Opportunity Window';
    convectiveReasoning = `Ambient particulate concentrations are within the WHO guideline range (${avgPm25} µg/m³). Suitable for outdoor activities and home ventilation.`;
  } else if (avgPm25 <= 60) {
    windowStatus = 'MODERATE_OPPORTUNITY';
    statusLabel = 'Moderate Air Exposure Window';
    convectiveReasoning = `Atmospheric dispersion provides a ${reductionPercent}% reduction compared to peak hours. Suitable for moderate outdoor tasks; sensitive individuals should monitor symptoms.`;
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
    durationHours: bestEnd - bestStart,
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
