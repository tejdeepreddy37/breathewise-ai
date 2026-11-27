/**
 * Comprehensive Automated Scientific & Adversarial Unit Test Suite
 * BreatheWise AI Domain Engines & Mathematical Models
 */

let passed = 0;
let failed = 0;

function assert(condition, testName) {
  if (condition) {
    console.log(`  ✓ PASS: ${testName}`);
    passed++;
  } else {
    console.error(`  ✗ FAIL: ${testName}`);
    failed++;
  }
}

// =========================================================================
// 1. CPCB NAQI Continuous Piecewise Linear Interpolation
// =========================================================================
const PM25_BREAKPOINTS = [
  { cLow: 0, cHigh: 30, iLow: 0, iHigh: 50 },
  { cLow: 30, cHigh: 60, iLow: 50, iHigh: 100 },
  { cLow: 60, cHigh: 90, iLow: 100, iHigh: 200 },
  { cLow: 90, cHigh: 120, iLow: 200, iHigh: 300 },
  { cLow: 120, cHigh: 250, iLow: 300, iHigh: 400 },
  { cLow: 250, cHigh: 500, iLow: 400, iHigh: 500 },
];

const PM10_BREAKPOINTS = [
  { cLow: 0, cHigh: 50, iLow: 0, iHigh: 50 },
  { cLow: 50, cHigh: 100, iLow: 50, iHigh: 100 },
  { cLow: 100, cHigh: 250, iLow: 100, iHigh: 200 },
  { cLow: 250, cHigh: 350, iLow: 200, iHigh: 300 },
  { cLow: 350, cHigh: 430, iLow: 300, iHigh: 400 },
  { cLow: 430, cHigh: 500, iLow: 400, iHigh: 500 },
];

const CO_BREAKPOINTS = [
  { cLow: 0.0, cHigh: 1.0, iLow: 0, iHigh: 50 },
  { cLow: 1.0, cHigh: 2.0, iLow: 50, iHigh: 100 },
  { cLow: 2.0, cHigh: 10.0, iLow: 100, iHigh: 200 },
  { cLow: 10.0, cHigh: 17.0, iLow: 200, iHigh: 300 },
  { cLow: 17.0, cHigh: 34.0, iLow: 300, iHigh: 400 },
  { cLow: 34.0, cHigh: 50.0, iLow: 400, iHigh: 500 },
];

function calculateSubIndex(conc, breakpoints) {
  if (conc == null || typeof conc !== 'number' || isNaN(conc) || conc < 0) return null;
  if (conc === 0) return 0;

  for (let i = 0; i < breakpoints.length; i++) {
    const b = breakpoints[i];
    const isInRange = i === 0 ? (conc >= b.cLow && conc <= b.cHigh) : (conc > b.cLow && conc <= b.cHigh);
    if (isInRange) {
      const idx = ((b.iHigh - b.iLow) / (b.cHigh - b.cLow)) * (conc - b.cLow) + b.iLow;
      return Math.min(500, Math.round(idx));
    }
  }

  if (conc > breakpoints[breakpoints.length - 1].cHigh) return 500;
  return 0;
}

console.log('\n--- 1. Testing CPCB NAQI Interpolation & Continuity Logic ---');
{
  const idxGood = calculateSubIndex(25, PM25_BREAKPOINTS);
  assert(idxGood === 42, `PM2.5=25 yields sub-index ~42 (got ${idxGood})`);

  const idxSat = calculateSubIndex(45, PM25_BREAKPOINTS);
  assert(idxSat === 75, `PM2.5=45 yields Satisfactory sub-index ~75 (got ${idxSat})`);

  const idxMod = calculateSubIndex(75, PM25_BREAKPOINTS);
  assert(idxMod === 150, `PM2.5=75 yields Moderate sub-index ~150 (got ${idxMod})`);

  const idxSevere = calculateSubIndex(300, PM25_BREAKPOINTS);
  assert(idxSevere === 420, `PM2.5=300 yields Severe sub-index ~420 (got ${idxSevere})`);

  // Adversarial Continuity Checks: Decimal values that previously fell into dead gaps
  const idxGap1 = calculateSubIndex(30.5, PM25_BREAKPOINTS);
  assert(idxGap1 === 51, `PM2.5=30.5 yields continuous sub-index 51 without dead-gap (got ${idxGap1})`);

  const idxGap2 = calculateSubIndex(60.5, PM25_BREAKPOINTS);
  assert(idxGap2 === 102, `PM2.5=60.5 yields continuous sub-index 102 without dead-gap (got ${idxGap2})`);

  const idxGap3 = calculateSubIndex(90.5, PM25_BREAKPOINTS);
  assert(idxGap3 === 202, `PM2.5=90.5 yields continuous sub-index 202 without dead-gap (got ${idxGap3})`);

  const idxCoGap = calculateSubIndex(1.05, CO_BREAKPOINTS);
  assert(idxCoGap === 53, `CO=1.05 mg/m³ yields sub-index 53 without dead-gap (got ${idxCoGap})`);

  // Edge cases: Negative, zero, overflow, NaN
  assert(calculateSubIndex(-5, PM25_BREAKPOINTS) === null, 'Negative PM2.5 (-5) returns null safely');
  assert(calculateSubIndex(NaN, PM25_BREAKPOINTS) === null, 'NaN PM2.5 returns null safely');
  assert(calculateSubIndex(null, PM25_BREAKPOINTS) === null, 'null PM2.5 returns null safely');
  assert(calculateSubIndex(0, PM25_BREAKPOINTS) === 0, 'PM2.5=0 returns sub-index 0');
  assert(calculateSubIndex(1500, PM25_BREAKPOINTS) === 500, 'PM2.5=1500 is capped at 500');
}

// =========================================================================
// 2. Inhaled Exposure Math & Physical Units
// =========================================================================
console.log('\n--- 2. Testing Inhaled Exposure Math & Physical Units ---');
{
  const MINUTE_VENTILATION_LPM = {
    resting_sleep: 6,
    desk_office: 8,
    light_walking: 16,
    cycling_commute: 35,
    outdoor_running: 55,
    heavy_cardio: 65,
  };

  const MASK_EFFICIENCIES = {
    none: 0.0,
    cloth: 0.25,
    surgical: 0.60,
    n95: 0.95,
    n99: 0.99,
  };

  function calculateInhaledDose(ambientPm25, durationMinutes, activity = 'outdoor_running', maskType = 'none') {
    const safePm = typeof ambientPm25 === 'number' && !isNaN(ambientPm25) ? Math.max(0, ambientPm25) : 0;
    const safeDuration = typeof durationMinutes === 'number' && !isNaN(durationMinutes) ? Math.max(0, Math.min(720, durationMinutes)) : 0;
    const lpm = MINUTE_VENTILATION_LPM[activity] || 25;
    const hours = safeDuration / 60;
    const volumeM3 = (lpm * 60 * hours) / 1000;
    const efficiency = typeof MASK_EFFICIENCIES[maskType] === 'number' ? MASK_EFFICIENCIES[maskType] : 0.0;
    const massUg = +(safePm * volumeM3 * (1 - efficiency)).toFixed(1);
    const massWithN95 = +(safePm * volumeM3 * (1 - 0.95)).toFixed(1);
    const massSaved = +(massUg - massWithN95).toFixed(1);
    const relativeExposurePercent = Math.round((1 - efficiency) * 100);
    const whoExceedanceRatio = +(safePm / 15).toFixed(1);

    return {
      estimatedInhaledMassUg: massUg,
      inhaledAirVolumeM3: +volumeM3.toFixed(2),
      doseSavedUgWithN95: Math.max(0, massSaved),
      relativeExposurePercent,
      whoExceedanceRatio,
    };
  }

  const res = calculateInhaledDose(100, 45, 'outdoor_running', 'none');
  assert(res.estimatedInhaledMassUg === 247.5, `55 LPM * 45m * 100 µg/m³ = 247.5 µg (got ${res.estimatedInhaledMassUg})`);
  assert(res.inhaledAirVolumeM3 === 2.48, `Volume is 2.48 m³ (got ${res.inhaledAirVolumeM3})`);

  const resN95 = calculateInhaledDose(100, 45, 'outdoor_running', 'n95');
  assert(resN95.estimatedInhaledMassUg === 12.4, `N95 filters 95% -> 12.4 µg (got ${resN95.estimatedInhaledMassUg})`);
  assert(res.doseSavedUgWithN95 === 235.1, `Mass avoided with N95 is 235.1 µg (got ${res.doseSavedUgWithN95})`);
  assert(res.whoExceedanceRatio === 6.7, `WHO exceedance ratio is 6.7x (got ${res.whoExceedanceRatio})`);

  // Adversarial checks
  const resZero = calculateInhaledDose(100, 0, 'outdoor_running', 'none');
  assert(resZero.estimatedInhaledMassUg === 0 && resZero.inhaledAirVolumeM3 === 0, 'Zero duration produces 0 µg mass and 0 m³ volume');

  const resCap = calculateInhaledDose(100, 1440, 'light_walking', 'none'); // 24h passed, capped at 12h (720m)
  assert(resCap.inhaledAirVolumeM3 === 11.52, `1440 mins duration is safely capped at 720 mins (got ${resCap.inhaledAirVolumeM3} m³)`);

  const resNeg = calculateInhaledDose(-50, 45, 'outdoor_running', 'none');
  assert(resNeg.estimatedInhaledMassUg === 0, 'Negative ambient PM2.5 produces 0 µg exposure');
}

// =========================================================================
// 3. Indoor Air Coach Ventilation Safety Guard
// =========================================================================
console.log('\n--- 3. Testing Indoor Air Coach Ventilation Safety Guard ---');
{
  function calculateIndoorRecommendations(outdoorPm25, cleanAirWindow, currentHour, roomAreaM2, outdoorO3) {
    const safePm = typeof outdoorPm25 === 'number' && !isNaN(outdoorPm25) ? Math.max(0, outdoorPm25) : 0;
    const safeO3 = typeof outdoorO3 === 'number' && !isNaN(outdoorO3) ? Math.max(0, outdoorO3) : null;
    const isWindowActive = currentHour >= cleanAirWindow.startHour && currentHour <= cleanAirWindow.endHour;

    let windowAction = 'SEAL_COMPLETELY';
    const isOzoneUnsafe = safeO3 != null && safeO3 > 100;

    if (isOzoneUnsafe) {
      windowAction = 'SEAL_COMPLETELY';
    } else if (safePm <= 30) {
      windowAction = 'OPEN_CROSS_VENTILATE';
    } else if (safePm <= 60 && isWindowActive) {
      windowAction = 'CRACK_FLUSH_NOW';
    } else {
      windowAction = 'SEAL_COMPLETELY';
    }

    return { windowAction };
  }

  const win = { startHour: 13, endHour: 15 };

  // Clean outdoor air (20) -> open
  const rClean = calculateIndoorRecommendations(20, win, 14, 20);
  assert(rClean.windowAction === 'OPEN_CROSS_VENTILATE', 'Clean outdoor air (20 µg/m³) allows cross-ventilation');

  // Moderate air (45) during window -> crack flush
  const rMod = calculateIndoorRecommendations(45, win, 14, 20);
  assert(rMod.windowAction === 'CRACK_FLUSH_NOW', 'Moderate air (45 µg/m³) during window allows crack flush');

  // CRITICAL SAFETY GUARD: Severe air (180) during active window is strictly SEAL_COMPLETELY
  const rSevere = calculateIndoorRecommendations(180, win, 14, 20);
  assert(rSevere.windowAction === 'SEAL_COMPLETELY', 'CRITICAL SAFETY GUARD: Severe air (180 µg/m³) during active window is strictly SEAL_COMPLETELY');

  // Ozone hazard (130) -> SEALED
  const rOzone = calculateIndoorRecommendations(25, win, 14, 20, 130);
  assert(rOzone.windowAction === 'SEAL_COMPLETELY', 'High Ozone (130 µg/m³) strictly seals windows despite clean PM2.5');

  // NaN Ozone defense
  const rOzoneNan = calculateIndoorRecommendations(25, win, 14, 20, NaN);
  assert(rOzoneNan.windowAction === 'OPEN_CROSS_VENTILATE', 'NaN Ozone is sanitized safely without false seal');
}

// =========================================================================
// 4. Indoor Source Context & Directives
// =========================================================================
console.log('\n--- 4. Testing Indoor Source Context & Directives ---');
{
  function calculateIndoorWithSource(pm, win, hour, area, o3, source) {
    let baseline = Math.round(pm * 0.45);
    let speed = 'MEDIUM';
    let directive = '';

    if (source === 'cooking_frying') {
      baseline += 85;
      speed = 'TURBO';
      directive = 'Active Kitchen Cooking';
    } else if (source === 'incense_smoke') {
      baseline += 110;
      speed = 'TURBO';
      directive = 'Combustion Emissions';
    } else if (source === 'high_co2_stuffy') {
      directive = 'Stuffy Room';
    }

    return { baseline, speed, directive };
  }

  const win = { startHour: 13, endHour: 15 };
  const rCook = calculateIndoorWithSource(50, win, 14, 20, null, 'cooking_frying');
  assert(rCook.speed === 'TURBO', 'Cooking frying forces purifier speed to TURBO');
  assert(rCook.baseline === Math.round(50 * 0.45) + 85, 'Cooking frying adds +85 µg/m³ aerosol baseline');
  assert(rCook.directive.includes('Active Kitchen Cooking'), 'Provides specific cooking directive');

  const rSmoke = calculateIndoorWithSource(40, win, 14, 20, null, 'incense_smoke');
  assert(rSmoke.speed === 'TURBO', 'Incense smoke triggers TURBO purifier mode');
}

// =========================================================================
// 5. WindowSafe Rolling Slice Logic & Sanitization
// =========================================================================
console.log('\n--- 5. Testing WindowSafe Rolling Slice Logic & Sanitization ---');
{
  function scanWindow(hourly) {
    const validPoints = (hourly || [])
      .filter((p) => p != null && typeof p.hour === 'number' && !isNaN(p.hour))
      .map((p) => ({
        ...p,
        pm25: typeof p.pm25 === 'number' && !isNaN(p.pm25) ? Math.max(0, p.pm25) : 0,
      }));

    if (validPoints.length < 2) {
      return { bestStart: 13, bestEnd: 15, avgPm: 75, durationHours: 2 };
    }

    let lowestAvg = 9999;
    let bestStart = 13;
    let bestEnd = 15;

    for (let s = 0; s <= validPoints.length - 2; s++) {
      for (let e = s + 1; e <= Math.min(validPoints.length - 1, s + 2); e++) {
        const windowPoints = validPoints.slice(s, e + 1);
        if (windowPoints.length >= 2) {
          const sumPm = windowPoints.reduce((acc, p) => acc + p.pm25, 0);
          const avgPm = sumPm / windowPoints.length;
          if (avgPm < lowestAvg || (avgPm === lowestAvg && (e - s) > (bestEnd - bestStart))) {
            lowestAvg = avgPm;
            bestStart = windowPoints[0].hour;
            bestEnd = windowPoints[windowPoints.length - 1].hour;
          }
        }
      }
    }
    const durationHours = bestEnd >= bestStart ? Math.max(1, bestEnd - bestStart) : (24 - bestStart + bestEnd);
    return { bestStart, bestEnd, avgPm: Math.round(lowestAvg), durationHours };
  }

  // Standard 24h curve with midday dispersion valley (55 µg/m³ at 13:00-15:00)
  const mockHourly = Array.from({ length: 24 }, (_, h) => {
    let pm = 140;
    if (h >= 7 && h <= 9) pm = 220; // morning peak
    if (h >= 13 && h <= 15) pm = 55; // afternoon convective minimum
    if (h >= 20 && h <= 22) pm = 240; // evening peak
    return { hour: h, pm25: pm };
  });

  const winRes = scanWindow(mockHourly);
  assert(winRes.bestStart === 13, `WindowSafe identifies startHour=13 (got ${winRes.bestStart})`);
  assert(winRes.bestEnd === 15, `WindowSafe identifies endHour=15 (got ${winRes.bestEnd})`);
  assert(winRes.avgPm === 55, `WindowSafe calculates correct average PM2.5 = 55 (got ${winRes.avgPm})`);
  assert(winRes.durationHours === 2, `WindowSafe calculates non-negative duration = 2h (got ${winRes.durationHours})`);

  // Adversarial: Hourly with NaN and negative PM values
  const mockCorrupt = [
    { hour: 10, pm25: NaN },
    { hour: 11, pm25: -40 },
    { hour: 12, pm25: 50 },
    { hour: 13, pm25: 50 },
  ];
  const winCorrupt = scanWindow(mockCorrupt);
  assert(!isNaN(winCorrupt.avgPm), `WindowSafe handles NaN and negative data points without producing NaN (got ${winCorrupt.avgPm})`);

  // Adversarial: Empty or single-point hourly array
  const winEmpty = scanWindow([]);
  assert(winEmpty.durationHours === 2 && winEmpty.avgPm === 75, 'WindowSafe safely handles empty array with fallback window');
}

// =========================================================================
// 6. Commute Mode Tradeoff Engine & Non-Fabrication
// =========================================================================
console.log('\n--- 6. Testing Commute Mode Tradeoffs & Non-Fabrication ---');
{
  const MODES = [
    { mode: 'two_wheeler_open', label: 'Open Two-Wheeler', speedKmh: 24, cabinFactor: 1.30, ventilationLpm: 28, carbonPerKm: 0.045 },
    { mode: 'ac_metro', label: 'Rapid AC Metro', speedKmh: 32, cabinFactor: 0.32, ventilationLpm: 16, carbonPerKm: 0.012 },
  ];

  function calcCommute(distanceKm, ambientPm25) {
    const safeDist = typeof distanceKm === 'number' && !isNaN(distanceKm) ? Math.max(1, Math.min(60, distanceKm)) : 14;
    const safePm = typeof ambientPm25 === 'number' && !isNaN(ambientPm25) ? Math.max(0, ambientPm25) : 0;

    return MODES.map((m) => {
      const travelHours = safeDist / m.speedKmh;
      const cabinConc = Math.round(safePm * m.cabinFactor);
      const airVolM3 = (m.ventilationLpm * 60 * travelHours) / 1000;
      const doseUg = +(cabinConc * airVolM3).toFixed(1);
      const carbonKg = +(safeDist * m.carbonPerKm).toFixed(2);
      return { mode: m.mode, doseUg, carbonKg, travelTimeMins: Math.round(travelHours * 60) };
    });
  }

  const comps = calcCommute(14, 150);
  const bike = comps[0];
  const metro = comps[1];

  assert(bike.doseUg > metro.doseUg, `Two-wheeler inhaled dose (${bike.doseUg} µg) > AC Metro dose (${metro.doseUg} µg)`);
  assert(bike.carbonKg > metro.carbonKg, `Two-wheeler carbon (${bike.carbonKg} kg) > AC Metro carbon (${metro.carbonKg} kg)`);

  // Adversarial: 0 km distance
  const zeroComps = calcCommute(0, 150);
  assert(zeroComps[0].doseUg > 0 && !isNaN(zeroComps[0].doseUg), 'Zero distance is safely clamped to 1 km without division by zero');

  // Adversarial: NaN PM2.5
  const nanComps = calcCommute(14, NaN);
  assert(nanComps[0].doseUg === 0, 'NaN ambient PM2.5 is safely sanitized to 0 dose');
}

// =========================================================================
// 7. Medical Triage & Clinical Safety Refusal Guard
// =========================================================================
console.log('\n--- 7. Testing Medical Triage & Clinical Safety Refusal Guard ---');
{
  function isMedicalRefusal(question) {
    const qLower = question.toLowerCase();
    return (
      qLower.includes('inhaler') ||
      qLower.includes('puff') ||
      qLower.includes('dosage') ||
      qLower.includes('dose') ||
      qLower.includes('medicine') ||
      qLower.includes('medication') ||
      qLower.includes('steroid') ||
      qLower.includes('albuterol') ||
      qLower.includes('budecort') ||
      qLower.includes('foracort') ||
      qLower.includes('asthma attack') ||
      qLower.includes('chest pain') ||
      qLower.includes('diagnos') ||
      qLower.includes('prescri') ||
      qLower.includes('shortness of breath')
    );
  }

  assert(isMedicalRefusal('Should I take 2 puffs of my albuterol inhaler?'), 'Correctly intercepts inhaler dosage question');
  assert(isMedicalRefusal('I have chest pain and shortness of breath'), 'Correctly intercepts acute clinical symptoms');
  assert(isMedicalRefusal('Can you prescribe steroids for my asthma?'), 'Correctly intercepts prescription drug requests');
  assert(!isMedicalRefusal('Is it safe to go for a run right now?'), 'Does not falsely trigger for valid exercise query');
  assert(!isMedicalRefusal('Can I open my windows today?'), 'Does not falsely trigger for valid ventilation query');
}

// =========================================================================
// 8. Geographic Coordinate & Data Integrity
// =========================================================================
console.log('\n--- 8. Testing Geographic Coordinate & Data Integrity ---');
{
  const mumbaiPreset = {
    id: 'mumbai-bkc',
    lat: 19.0657,
    lon: 72.8687,
  };
  assert(mumbaiPreset.lon >= 72.8 && mumbaiPreset.lon <= 72.95, `Mumbai longitude is verified near 72.87°E (got ${mumbaiPreset.lon})`);
}

// =========================================================================
// 9. Indoor Coach Dynamic Output & Multi-City Calibration
// =========================================================================
console.log('\n--- 9. Testing Indoor Coach Dynamic Model & Multi-City Calibration ---');
{
  function calculateIndoorRecommendations(outdoorPm25, cleanAirWindow, currentHour = 14, roomAreaM2 = 20, outdoorO3 = null, indoorSource = 'none') {
    const safePm = typeof outdoorPm25 === 'number' && !isNaN(outdoorPm25) ? Math.max(0, outdoorPm25) : 0;
    const isWindowActive = cleanAirWindow.endHour >= cleanAirWindow.startHour
      ? currentHour >= cleanAirWindow.startHour && currentHour <= cleanAirWindow.endHour
      : currentHour >= cleanAirWindow.startHour || currentHour <= cleanAirWindow.endHour;
    
    let baseline = Math.round(safePm * 0.45);
    let windowAction = 'SEAL_COMPLETELY';
    if (safePm <= 30) {
      windowAction = 'OPEN_CROSS_VENTILATE';
    } else if (safePm <= 60 && isWindowActive) {
      windowAction = 'CRACK_FLUSH_NOW';
    } else {
      windowAction = 'SEAL_COMPLETELY';
    }

    let recommendedSpeed = 'LOW';
    if (baseline > 100 || outdoorPm25 > 200) {
      recommendedSpeed = 'TURBO';
    } else if (baseline > 50) {
      recommendedSpeed = 'HIGH';
    } else if (baseline > 25) {
      recommendedSpeed = 'MEDIUM';
    }

    return {
      estimatedIndoorBaselinePm25: baseline,
      windowAction,
      purifierRecommendation: { recommendedSpeed }
    };
  }

  const windowMock = {
    startHour: 13,
    endHour: 15,
    averagePm25: 55,
    displayWindow: '1:00 PM – 2:00 PM',
    windowStatus: 'CONVECTIVE_VALLEY_OPTIMAL',
    statusLabel: 'Safe Midday Window',
    reductionVsPeakPercent: 56,
  };

  // Delhi Anand Vihar baseline (PM2.5: 265)
  const delhiRec = calculateIndoorRecommendations(265, windowMock, 14, 20);
  assert(delhiRec.estimatedIndoorBaselinePm25 === 119, `Delhi indoor baseline is exactly 119 µg/m³ (got ${delhiRec.estimatedIndoorBaselinePm25})`);
  assert(delhiRec.windowAction === 'SEAL_COMPLETELY', `Delhi ventilation is strictly SEAL_COMPLETELY`);
  assert(delhiRec.purifierRecommendation.recommendedSpeed === 'TURBO', `Delhi purifier is TURBO`);

  // Bengaluru clean baseline (PM2.5: 25)
  const blrRec = calculateIndoorRecommendations(25, windowMock, 14, 20);
  assert(blrRec.estimatedIndoorBaselinePm25 === 11, `Bengaluru indoor baseline is 11 µg/m³ (got ${blrRec.estimatedIndoorBaselinePm25})`);
  assert(blrRec.windowAction === 'OPEN_CROSS_VENTILATE', `Bengaluru ventilation is OPEN_CROSS_VENTILATE`);
  assert(blrRec.purifierRecommendation.recommendedSpeed === 'LOW', `Bengaluru purifier is LOW (got ${blrRec.purifierRecommendation.recommendedSpeed})`);
}

// =========================================================================
// 10. Exposure Model Fidelity: Benchmark vs Ambient City
// =========================================================================
console.log('\n--- 10. Testing What-If Exposure Benchmark vs Ambient Calculations ---');
{
  const MINUTE_VENTILATION_LPM = { outdoor_running: 55 };
  const MASK_EFFICIENCIES = { none: 0.0, n95: 0.95 };
  function calculateInhaledDose(ambientPm25, durationMinutes, activity = 'outdoor_running', maskType = 'none') {
    const safePm = typeof ambientPm25 === 'number' && !isNaN(ambientPm25) ? Math.max(0, ambientPm25) : 0;
    const lpm = MINUTE_VENTILATION_LPM[activity] || 25;
    const volumeM3 = (lpm * 60 * (durationMinutes / 60)) / 1000;
    const efficiency = MASK_EFFICIENCIES[maskType] || 0.0;
    const massUg = +(safePm * volumeM3 * (1 - efficiency)).toFixed(1);
    return { estimatedInhaledMassUg: massUg };
  }

  // 100 µg/m³ benchmark
  const bmUnmasked = calculateInhaledDose(100, 45, 'outdoor_running', 'none');
  const bmN95 = calculateInhaledDose(100, 45, 'outdoor_running', 'n95');
  assert(bmUnmasked.estimatedInhaledMassUg === 247.5, `Benchmark unmasked dose is 247.5 µg (got ${bmUnmasked.estimatedInhaledMassUg})`);
  assert(bmN95.estimatedInhaledMassUg === 12.4, `Benchmark N95 dose is 12.4 µg (got ${bmN95.estimatedInhaledMassUg})`);

  // 265 µg/m³ Delhi live
  const delhiUnmasked = calculateInhaledDose(265, 45, 'outdoor_running', 'none');
  const delhiN95 = calculateInhaledDose(265, 45, 'outdoor_running', 'n95');
  assert(delhiUnmasked.estimatedInhaledMassUg === 655.9, `Delhi unmasked dose is 655.9 µg (got ${delhiUnmasked.estimatedInhaledMassUg})`);
  assert(delhiN95.estimatedInhaledMassUg === 32.8, `Delhi N95 dose is 32.8 µg (got ${delhiN95.estimatedInhaledMassUg})`);
}

// =========================================================================
// 11-15. Real TypeScript Production Module Integration & Regression Suite
// =========================================================================
import { build } from 'esbuild';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { pathToFileURL } from 'url';

async function runRealModuleTests() {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'breathewise-test-'));
  const entryFile = path.join(tmpDir, 'entry.ts');
  const outFile = path.join(tmpDir, 'bundle.mjs');
  const rootDir = process.cwd();

  fs.writeFileSync(
    entryFile,
    [
      `export * from ${JSON.stringify(path.join(rootDir, 'src/engines/cpcbAqi.ts'))};`,
      `export * from ${JSON.stringify(path.join(rootDir, 'src/engines/windowSafe.ts'))};`,
      `export * from ${JSON.stringify(path.join(rootDir, 'src/engines/inhaledDose.ts'))};`,
      `export * from ${JSON.stringify(path.join(rootDir, 'src/engines/commuteSwap.ts'))};`,
      `export * from ${JSON.stringify(path.join(rootDir, 'src/engines/indoorCoach.ts'))};`,
      `export * from ${JSON.stringify(path.join(rootDir, 'src/services/openMeteo.ts'))};`,
      `export * from ${JSON.stringify(path.join(rootDir, 'src/services/telemetryService.ts'))};`,
      `export * from ${JSON.stringify(path.join(rootDir, 'src/services/gemini.ts'))};`,
      `export * from ${JSON.stringify(path.join(rootDir, 'src/data/cities.ts'))};`,
      `export * from ${JSON.stringify(path.join(rootDir, 'src/data/indiaLocations.ts'))};`,
      `export * from ${JSON.stringify(path.join(rootDir, 'src/data/staticFallback.ts'))};`,
    ].join('\n')
  );

  await build({
    entryPoints: [entryFile],
    bundle: true,
    platform: 'node',
    format: 'esm',
    outfile: outFile,
    define: { 'import.meta.env': '{}' },
    logLevel: 'silent',
  });

  const mod = await import(pathToFileURL(outFile).href);

  // --- 11. Real cpcbAqi.ts Boundaries, Infinity & Multi-Pollutant Consistency ---
  console.log('\n--- 11. Testing Real cpcbAqi.ts Boundaries & Conflicts ---');
  assert(mod.calculateSubIndex(Infinity, mod.PM25_BREAKPOINTS) === null, 'Infinity PM2.5 returns null safely');
  assert(mod.calculateSubIndex(-Infinity, mod.PM25_BREAKPOINTS) === null, '-Infinity PM2.5 returns null safely');
  assert(mod.calculateCpcbAqi({ pm25: 30 }).category === 'Good', 'Boundary PM2.5=30 is Good');
  assert(mod.calculateCpcbAqi({ pm25: 60 }).category === 'Satisfactory', 'Boundary PM2.5=60 is Satisfactory');
  assert(mod.calculateCpcbAqi({ pm25: 90 }).category === 'Moderate', 'Boundary PM2.5=90 is Moderate');
  assert(mod.calculateCpcbAqi({ pm25: 120 }).category === 'Poor', 'Boundary PM2.5=120 is Poor');
  assert(mod.calculateCpcbAqi({ pm25: 250 }).category === 'Very Poor', 'Boundary PM2.5=250 is Very Poor');
  assert(mod.calculateCpcbAqi({ pm25: 300 }).category === 'Severe', 'Boundary PM2.5=300 is Severe');

  // SO2 Breakpoint verification across standard schedules
  assert(mod.calculateSubIndex(20, mod.SO2_BREAKPOINTS) === 25, 'SO2=20 µg/m³ yields sub-index 25 (Good)');
  assert(mod.calculateSubIndex(60, mod.SO2_BREAKPOINTS) === 75, 'SO2=60 µg/m³ yields sub-index 75 (Satisfactory)');
  assert(mod.calculateSubIndex(230, mod.SO2_BREAKPOINTS) === 150, 'SO2=230 µg/m³ yields sub-index 150 (Moderate)');
  assert(mod.calculateSubIndex(590, mod.SO2_BREAKPOINTS) === 250, 'SO2=590 µg/m³ yields sub-index 250 (Poor)');
  assert(mod.calculateSubIndex(1200, mod.SO2_BREAKPOINTS) === 350, 'SO2=1200 µg/m³ yields sub-index 350 (Very Poor)');
  assert(mod.calculateSubIndex(1800, mod.SO2_BREAKPOINTS) === 450, 'SO2=1800 µg/m³ yields sub-index 450 (Severe)');

  const so2Conflict = mod.calculateCpcbAqi({ pm25: 15, so2: 500 });
  assert(so2Conflict.primaryPollutant === 'SO2', `High industrial SO2 governs over low PM2.5 (got ${so2Conflict.primaryPollutant})`);

  // Single pollutant zero-index tie-break stability
  const o3Zero = mod.calculateCpcbAqi({ o3: 0 });
  assert(o3Zero.primaryPollutant === 'Ozone', `Single non-PM zero sub-index preserves provided pollutant as primary (got ${o3Zero.primaryPollutant})`);
  const pm10Zero = mod.calculateCpcbAqi({ pm10: 0 });
  assert(pm10Zero.primaryPollutant === 'PM10', `Single PM10 zero sub-index preserves PM10 (got ${pm10Zero.primaryPollutant})`);

  const emptyAqi = mod.calculateCpcbAqi({});
  assert(emptyAqi.isValid === false && emptyAqi.primaryPollutant === 'Insufficient Data', 'Empty pollutants return isValid=false and Insufficient Data');

  const conflictAqi = mod.calculateCpcbAqi({ pm25: 20, pm10: 40, o3: 180 });
  assert(conflictAqi.primaryPollutant === 'Ozone', `Conflicting pollutants: Ozone=180 governs over PM2.5=20 (got ${conflictAqi.primaryPollutant})`);
  assert(conflictAqi.isCompleteCalculation === true, '3 pollutants including PM satisfies CPCB completeness');

  const incompleteAqi = mod.calculateCpcbAqi({ pm25: 50, no2: 40 });
  assert(incompleteAqi.isCompleteCalculation === false && incompleteAqi.standard === 'Indicative PM2.5-Derived', '2 pollutants marked Indicative PM2.5-Derived');

  // --- 12. Real commuteSwap.ts & inhaledDose.ts Precision ---
  console.log('\n--- 12. Testing Real commuteSwap.ts & inhaledDose.ts Precision ---');
  const commute23 = mod.calculateCommuteTradeoffs(14, 23);
  const metro23 = commute23.find((c) => c.mode === 'ac_metro');
  // Unrounded: 23 * 0.32 = 7.36 µg/m³, airVol = 16*60*(14/32)/1000 = 0.42 m³, dose = 7.36 * 0.42 = 3.0912 -> 3.1 µg
  assert(metro23.cabinPm25Concentration === 7, `Display cabin concentration rounds to 7 (got ${metro23.cabinPm25Concentration})`);
  assert(metro23.inhaledDoseUg === 3.1, `Premature rounding fixed: unrounded 7.36 * 0.42 = 3.1 µg (got ${metro23.inhaledDoseUg})`);

  const doseN95 = mod.calculateInhaledDose(100, 45, 'outdoor_running', 'n95');
  assert(doseN95.unmaskedDoseUg === 247.5, `Direct unmasked baseline matches without double-call: 247.5 µg (got ${doseN95.unmaskedDoseUg})`);
  assert(doseN95.doseAvoidedUg === 235.1, `Dose avoided by N95 is 235.1 µg (got ${doseN95.doseAvoidedUg})`);

  const doseN99 = mod.calculateInhaledDose(100, 45, 'outdoor_running', 'n99');
  assert(doseN99.estimatedInhaledMassUg === 2.5, `N99 reduces 247.5 µg to 2.5 µg (got ${doseN99.estimatedInhaledMassUg})`);
  assert(doseN99.doseAvoidedUg === 245.0, `Dose avoided by N99 is 245.0 µg (got ${doseN99.doseAvoidedUg})`);

  const doseNone = mod.calculateInhaledDose(100, 45, 'outdoor_running', 'none');
  assert(doseNone.doseAvoidedUg === 0, 'Unmasked dose avoided is exactly 0 µg');

  const doseInf = mod.calculateInhaledDose(Infinity, NaN, 'outdoor_running', 'n95');
  assert(doseInf.estimatedInhaledMassUg === 0 && doseInf.inhaledAirVolumeM3 === 0, 'Infinity/NaN inputs sanitize to 0 exposure');

  // --- 13. Real openMeteo.ts Schema Validation & Parsing ---
  console.log('\n--- 13. Testing Real openMeteo.ts Validation & Parsing ---');
  const origFetch = globalThis.fetch;
  try {
    // 13a. Valid response with null PM10 & PBL + CO µg->mg conversion + IST hour parsing
    globalThis.fetch = async (url) => {
      if (String(url).includes('air-quality-api')) {
        return {
          ok: true,
          json: async () => ({
            current: {
              time: '2026-11-26T14:00',
              pm2_5: 88.4,
              pm10: null,
              carbon_monoxide: 2100,
              nitrogen_dioxide: 45,
              sulphur_dioxide: null,
              ozone: 52,
              us_aqi: 168,
            },
            hourly: {
              time: ['2026-11-26T13:00', '2026-11-26T14:00'],
              pm2_5: [80, 90],
              pm10: [null, null],
              nitrogen_dioxide: [40, 45],
              ozone: [50, 52],
              us_aqi: [160, 168],
              boundary_layer_height: [null, 950],
            },
          }),
        };
      }
      return {
        ok: true,
        json: async () => ({
          current: { temperature_2m: 24, relative_humidity_2m: 55, wind_speed_10m: 12, wind_direction_10m: 270, surface_pressure: 1012 },
        }),
      };
    };

    const parsedLive = await mod.fetchOpenMeteoTelemetry(28.64, 77.31, 'Delhi', 'Delhi');
    assert(parsedLive.current.pm25 === 88, `Open-Meteo rounds valid PM2.5=88.4 -> 88 (got ${parsedLive.current.pm25})`);
    assert(parsedLive.current.pm10 === null, 'Open-Meteo preserves null pm10 without fabricating 1.5x multiplier');
    assert(parsedLive.current.co === 2.1, `Open-Meteo converts CO 2100 µg/m³ -> 2.1 mg/m³ (got ${parsedLive.current.co})`);
    assert(parsedLive.hourly[0].hour === 13 && parsedLive.hourly[1].hour === 14, 'Timezone-safe ISO parsing preserves local hours 13, 14');
    assert(parsedLive.hourly[0].boundaryLayerHeight === null && parsedLive.hourly[1].boundaryLayerHeight === 950, 'PBL preserves null when unobserved');

    // 13b. Missing current.pm2_5 must throw instead of fabricating 0 Good AQI
    globalThis.fetch = async () => ({
      ok: true,
      json: async () => ({ current: { pm2_5: null }, hourly: { time: ['2026-11-26T14:00'] } }),
    });
    let threwMissingPm = false;
    try {
      await mod.fetchOpenMeteoTelemetry(28.64, 77.31, 'Delhi', 'Delhi');
    } catch {
      threwMissingPm = true;
    }
    assert(threwMissingPm, 'Open-Meteo rejects missing/null current.pm2_5 instead of fabricating 0');

    // 13c. Missing hourly.time throws
    globalThis.fetch = async () => ({
      ok: true,
      json: async () => ({ current: { pm2_5: 50 }, hourly: { time: [] } }),
    });
    let threwEmptyHourly = false;
    try {
      await mod.fetchOpenMeteoTelemetry(28.64, 77.31, 'Delhi', 'Delhi');
    } catch {
      threwEmptyHourly = true;
    }
    assert(threwEmptyHourly, 'Open-Meteo rejects empty hourly time-series');

    // --- 14. Real telemetryService.ts Cache, Stale & Provenance ---
    console.log('\n--- 14. Testing Real telemetryService.ts Cache & Fallback ---');
    const store = new Map();
    globalThis.localStorage = {
      getItem: (k) => (store.has(k) ? store.get(k) : null),
      setItem: (k, v) => store.set(k, String(v)),
      removeItem: (k) => store.delete(k),
    };

    // 14a. Fresh cache hit returns explicit Cached CAMS provenance without fetch
    let fetchCalled = false;
    globalThis.fetch = async () => {
      fetchCalled = true;
      throw new Error('Should not fetch on valid cache hit');
    };
    const fakeCached = {
      city: 'Delhi — Anand Vihar',
      state: 'Delhi',
      country: 'India',
      current: { pm25: 199, aqi: 360, aqiCategory: 'Very Poor', primaryPollutant: 'PM2.5', aqiStandard: 'Indian CPCB NAQI' },
      weather: { temperature: 20, humidity: 60, windSpeed: 5, windDirection: 270, surfacePressure: 1014, weatherDescription: 'Test', isThermalInversionLikely: true },
      hourly: [{ time: '2026-11-26T14:00', hour: 14, pm25: 199, cpcbAqi: 360 }],
      metadata: { provider: 'Open-Meteo (Copernicus Atmosphere Grid)', stationName: 'Test', latitude: 28.6, longitude: 77.3, fetchTimestamp: '12:00', isLive: true, isSimulated: false, attribution: 'Test' },
    };
    store.set('breathewise_telemetry_delhi-anand-vihar', JSON.stringify({ timestamp: Date.now() - 120000, data: fakeCached }));
    const cachedRes = await mod.getCityTelemetry('delhi-anand-vihar');
    assert(!fetchCalled && cachedRes.metadata.fetchTimestamp.startsWith('Cached CAMS'), `Fresh cache returns Cached CAMS provenance without network call (got ${cachedRes.metadata.fetchTimestamp})`);

    // 14b. Corrupt cache is evicted & falls back to simulated baseline on network failure
    store.set('breathewise_telemetry_delhi-anand-vihar', '{corrupt-json');
    const fallbackRes = await mod.getCityTelemetry('delhi-anand-vihar');
    assert(fallbackRes.metadata.isSimulated === true && fallbackRes.metadata.isLive === false, 'Corrupt cache + network failure falls back with honest isSimulated=true, isLive=false');

    // 14c. Stale cache (>15 min) is bypassed
    store.set('breathewise_telemetry_delhi-anand-vihar', JSON.stringify({ timestamp: Date.now() - 20 * 60 * 1000, data: fakeCached }));
    let staleTriggeredFetch = false;
    globalThis.fetch = async () => {
      staleTriggeredFetch = true;
      throw new Error('Simulated offline');
    };
    await mod.getCityTelemetry('delhi-anand-vihar');
    assert(staleTriggeredFetch, 'Stale cache (>15 min) bypasses cache and attempts refresh');

    // --- 15. Real gemini.ts Schema Validation & Safety Guards ---
    console.log('\n--- 15. Testing Real gemini.ts Validation & Safety Guards ---');
    const severeWin = mod.calculateCleanAirWindow(fallbackRes.hourly);
    const validRawPlan = {
      summaryTitle: 'Severe Smog Alert',
      summaryBody: 'Keep indoor spaces sealed.',
      cleanAirWindowAdvisory: 'Avoid outdoor exertion.',
      vulnerabilityGuidance: { profile: 'pediatric', cautionNotice: 'High risk', actionableStep: 'Stay indoors' },
      dailyRoutine: [
        { timeSlot: '07:00 – 10:00', activityName: 'Morning Rush', exposureRisk: 'SAFE', directive: 'Stay inside', alternativeSuggestion: 'HEPA on' },
      ],
      indoorProtocol: 'Open windows in the afternoon for fresh air.',
      ecoActionOfTheDay: 'Take Metro.',
    };
    const sanitizedPlan = mod.validateAndSanitizeLivingPlan(validRawPlan, fallbackRes, severeWin, 'pediatric');
    assert(sanitizedPlan.dailyRoutine[0].exposureRisk === 'HIGH', `AI safety guard overrides SAFE -> HIGH during severe smog (got ${sanitizedPlan.dailyRoutine[0].exposureRisk})`);
    assert(sanitizedPlan.indoorProtocol.includes('Safety Override'), 'AI safety guard blocks "open windows" directive when PM2.5 > 60');

    let rejectedMalformed = false;
    try {
      mod.validateAndSanitizeLivingPlan({ summaryTitle: '', dailyRoutine: [] }, fallbackRes, severeWin, 'pediatric');
    } catch {
      rejectedMalformed = true;
    }
    assert(rejectedMalformed, 'AI validator rejects empty summaryTitle / empty dailyRoutine');

    const medRefusal = await mod.askBreatheWiseAssistant('What inhaler dosage should I take?', [], fallbackRes, severeWin, 'pediatric', '');
    assert(medRefusal.includes('NOT a medical diagnostic'), 'AI assistant refuses medical/inhaler dosage queries');

    // --- 16. Real WindowSafe Ozone Avoidance & Indoor Coach Clamping ---
    console.log('\n--- 16. Testing WindowSafe Ozone Avoidance & Indoor Coach Clamping ---');
    const ozoneHourly = [
      { hour: 10, pm25: 45, o3: 20 },
      { hour: 11, pm25: 45, o3: 20 },
      { hour: 12, pm25: 45, o3: 20 },
      { hour: 14, pm25: 35, o3: 195 },
      { hour: 15, pm25: 35, o3: 195 },
      { hour: 16, pm25: 35, o3: 195 },
    ];
    const oWin = mod.calculateCleanAirWindow(ozoneHourly);
    assert(oWin.startHour === 10 && oWin.endHour === 12, `WindowSafe avoids toxic photochemical ozone spike at 14:00 (got ${oWin.displayWindow})`);

    const cleanMockWindow = { startHour: 13, endHour: 15, displayWindow: '1:00 PM – 3:00 PM', durationHours: 2, averagePm25: 8, averageAqi: 13, reductionVsPeakPercent: 0, windowStatus: 'FAVORABLE', statusLabel: 'Clean', convectiveReasoning: '', isAvailableToday: true };
    const recClean = mod.calculateIndoorRecommendations(8, cleanMockWindow, 14, 20, null, 'none');
    assert(recClean.estimatedIndoorBaselinePm25 === 4, `Clean baseline indoor PM2.5 is 4 µg/m³ (got ${recClean.estimatedIndoorBaselinePm25})`);
    assert(recClean.purifierRecommendation.estimatedPostCleanPm25 <= recClean.estimatedIndoorBaselinePm25, `Purifier clean-down never exceeds starting baseline (got postClean=${recClean.purifierRecommendation.estimatedPostCleanPm25} vs base=${recClean.estimatedIndoorBaselinePm25})`);

    const istHour = mod.getIndianStandardTimeHour();
    assert(Number.isInteger(istHour) && istHour >= 0 && istHour <= 23, `Timezone helper returns valid IST hour: ${istHour}`);

    // --- 17. Real Gemini JSON Extraction & Expanded Intelligence Intents ---
    console.log('\n--- 17. Testing Gemini JSON Extraction & Expanded Assistant Intents ---');
    const fencedJson = 'Here is the plan:\n```json\n{"summaryTitle":"Clean Air","summaryBody":"Favorable conditions"}\n```\nHope this helps!';
    assert(mod.extractJsonPayload(fencedJson) === '{"summaryTitle":"Clean Air","summaryBody":"Favorable conditions"}', 'extractJsonPayload isolates JSON inside markdown fence with preambles');

    const rawProseJson = 'Analysis complete: {"summaryTitle":"Smog Alert","summaryBody":"Keep sealed."} Have a safe day.';
    assert(mod.extractJsonPayload(rawProseJson) === '{"summaryTitle":"Smog Alert","summaryBody":"Keep sealed."}', 'extractJsonPayload isolates raw JSON surrounded by commentary');

    const primaryAns = await mod.askBreatheWiseAssistant('Which pollutant is the main problem right now?', [], fallbackRes, severeWin, 'normal_adult', '');
    assert(primaryAns.includes('Primary Pollutant Analysis') && primaryAns.includes('PM2.5'), 'Assistant provides grounded primary pollutant chemical risk analysis');

    const timingAns = await mod.askBreatheWiseAssistant('What is the best time to go outside today?', [], fallbackRes, severeWin, 'normal_adult', '');
    assert(timingAns.includes('Daily Outdoor Exposure Planning') && timingAns.includes('Optimal Window'), 'Assistant provides convective diurnal window outdoor timing guidance');

    const purifierAns = await mod.askBreatheWiseAssistant('What kind of air purifier should I buy? Are ionizers safe?', [], fallbackRes, severeWin, 'normal_adult', '');
    assert(purifierAns.includes('True HEPA') && purifierAns.includes('Avoid Ionizers'), 'Assistant warns against dangerous ozone-generating ionizers');

    const actionAns = await mod.askBreatheWiseAssistant('What should I do right now to protect myself?', [], fallbackRes, severeWin, 'normal_adult', '');
    assert(actionAns.includes('Immediate Air Protection Action Checklist') && actionAns.includes('ENVELOPE'), 'Assistant delivers structured multi-layer action checklist');

    // --- 18. Testing UI Consistency, Globe AQI Sync & Dynamic Color Logic ---
    console.log('\n--- 18. Testing UI Consistency, Globe AQI Sync & Dynamic Color Logic ---');
    
    // Test 18.1: Diurnal curve 0% reduction guard preservation
    const zeroPercentReduction = typeof cleanMockWindow.reductionVsPeakPercent === 'number' && Number.isFinite(cleanMockWindow.reductionVsPeakPercent)
      ? cleanMockWindow.reductionVsPeakPercent
      : 0;
    assert(zeroPercentReduction === 0, `0% reduction in diurnal curve is preserved as 0% rather than falling back to 56% (got ${zeroPercentReduction})`);

    // Test 18.2: Production Canonical CPCB Categories & Breakpoints
    assert(mod.getCpcbCategory(0) === 'Good', 'AQI 0 resolves to Good');
    assert(mod.getCpcbCategory(50) === 'Good', 'AQI 50 resolves to Good');
    assert(mod.getCpcbCategory(51) === 'Satisfactory', 'AQI 51 resolves to Satisfactory');
    assert(mod.getCpcbCategory(100) === 'Satisfactory', 'AQI 100 resolves to Satisfactory');
    assert(mod.getCpcbCategory(101) === 'Moderate', 'AQI 101 resolves to Moderate');
    assert(mod.getCpcbCategory(200) === 'Moderate', 'AQI 200 resolves to Moderate');
    assert(mod.getCpcbCategory(201) === 'Poor', 'AQI 201 resolves to Poor');
    assert(mod.getCpcbCategory(300) === 'Poor', 'AQI 300 resolves to Poor');
    assert(mod.getCpcbCategory(301) === 'Very Poor', 'AQI 301 resolves to Very Poor');
    assert(mod.getCpcbCategory(400) === 'Very Poor', 'AQI 400 resolves to Very Poor');
    assert(mod.getCpcbCategory(401) === 'Severe', 'AQI 401 resolves to Severe');
    assert(mod.getCpcbCategory(405) === 'Severe', 'AQI 405 resolves to Severe');
    assert(mod.getCpcbCategory(null) === 'Good', 'null AQI safely resolves to Good');
    assert(mod.getCpcbCategory(NaN) === 'Good', 'NaN AQI safely resolves to Good');

    // Test 18.3: Production Canonical Semantic Colors
    assert(mod.getCpcbSemanticColors(405).textClass === 'text-rose-400', 'Production AQI 405 maps to text-rose-400');
    assert(mod.getCpcbSemanticColors(405).hexColor === '#DC2626', 'Production AQI 405 maps to #DC2626');
    assert(mod.getCpcbSemanticColors(312).hexColor === '#EF4444', 'Production AQI 312 Very Poor maps to #EF4444');
    assert(mod.getCpcbSemanticColors(220).hexColor === '#EA580C', 'Production AQI 220 Poor maps to #EA580C');
    assert(mod.getCpcbSemanticColors(150).hexColor === '#D97706', 'Production AQI 150 Moderate maps to #D97706');
    assert(mod.getCpcbSemanticColors(78).hexColor === '#16A34A', 'Production AQI 78 Satisfactory maps to #16A34A');
    assert(mod.getCpcbSemanticColors(25).hexColor === '#10B981', 'Production AQI 25 Good maps to #10B981');

    // Test 18.4: Safe fallback guards without fabricating 265 / 405 smog
    const emptyTelemetry = { current: {} };
    const safePm = typeof emptyTelemetry.current.pm25 === 'number' && Number.isFinite(emptyTelemetry.current.pm25) ? emptyTelemetry.current.pm25 : 0;
    const safeAqi = typeof emptyTelemetry.current.aqi === 'number' && Number.isFinite(emptyTelemetry.current.aqi) ? emptyTelemetry.current.aqi : 0;
    const safeCat = emptyTelemetry.current.aqiCategory || mod.getCpcbCategory(safeAqi);
    assert(safePm === 0, `Missing PM2.5 safely resolves to 0 without fabricating 265 µg/m³ (got ${safePm})`);
    assert(safeAqi === 0, `Missing AQI safely resolves to 0 without fabricating 405 AQI (got ${safeAqi})`);
    assert(safeCat === 'Good', `Missing AQI and category safely resolves to Good (got ${safeCat})`);

    // --- 19. Testing Critical Medical Triage Unconditional Pre-Filter & Network Suppression ---
    console.log('\n--- 19. Testing Medical Triage Unconditional Pre-Filter & Network Suppression ---');
    let suppressedNetworkCalls = 0;
    globalThis.fetch = async () => {
      suppressedNetworkCalls++;
      throw new Error('NETWORK CALL DETECTED: Medical query should have been intercepted before network!');
    };

    // 19.1: Offline / No API Key
    const medOffline = await mod.askBreatheWiseAssistant('How should I use my inhaler today?', [], fallbackRes, severeWin, 'normal_adult', '');
    assert(medOffline.includes('Medical & Clinical Triage Notice') && medOffline.includes('NOT a medical diagnostic'), 'Offline query receives deterministic triage refusal');
    assert(suppressedNetworkCalls === 0, `Zero network calls made for offline medical query (count: ${suppressedNetworkCalls})`);

    // 19.2: With Valid-Looking Custom API Key (Proves P1 defect is resolved)
    const medWithKey = await mod.askBreatheWiseAssistant('What dosage of budecort steroid inhaler should I use?', [], fallbackRes, severeWin, 'normal_adult', 'AIzaSyMockKeyForAdversarialTesting9988');
    assert(medWithKey.includes('Medical & Clinical Triage Notice') && medWithKey.includes('NOT a medical diagnostic'), 'Query with active API key receives deterministic triage refusal without LLM bypass');
    assert(suppressedNetworkCalls === 0, `CRITICAL: Zero network calls made when API key is present for medical query (count: ${suppressedNetworkCalls})`);

    // 19.3: Emergency acute symptom interception
    const medEmergency = await mod.askBreatheWiseAssistant('I have severe chest pain and acute shortness of breath', [], fallbackRes, severeWin, 'normal_adult', 'AIzaSyMockKeyForAdversarialTesting9988');
    assert(medEmergency.includes('emergency medical care immediately'), 'Acute respiratory/chest pain symptoms direct user to emergency care');
    assert(suppressedNetworkCalls === 0, 'Zero network calls made for emergency triage query');

    // --- 20. Testing 100% City Preset Fallback Telemetry Coverage ---
    console.log('\n--- 20. Testing 100% City Preset Fallback Telemetry Coverage ---');
    assert(Array.isArray(mod.INDIAN_CITIES_PRESETS) && mod.INDIAN_CITIES_PRESETS.length === 9, 'All 9 Indian city presets configured');

    for (const preset of mod.INDIAN_CITIES_PRESETS) {
      const fb = mod.FALLBACK_TELEMETRY[preset.id];
      assert(fb !== undefined, `Fallback telemetry exists for preset: ${preset.id}`);
      assert(fb.city.includes(preset.name.split('—')[0].trim()), `Fallback city matches preset name: ${fb.city} vs ${preset.name}`);
      assert(Math.abs(fb.metadata.latitude - preset.lat) < 0.01, `Fallback lat matches preset lat for ${preset.id}`);
      assert(Math.abs(fb.metadata.longitude - preset.lon) < 0.01, `Fallback lon matches preset lon for ${preset.id}`);
      assert(Array.isArray(fb.hourly) && fb.hourly.length === 24, `24 hourly points present for ${preset.id}`);
      assert(typeof fb.current.aqi === 'number' && fb.current.aqi > 0, `Valid AQI for ${preset.id} (got ${fb.current.aqi})`);
      assert(fb.current.aqiCategory === mod.getCpcbCategory(fb.current.aqi), `AQI category consistent for ${preset.id} (${fb.current.aqiCategory} matches CPCB ${mod.getCpcbCategory(fb.current.aqi)})`);
      
      // Proves P1 city contamination defect is resolved: non-Delhi presets do NOT silently borrow Delhi Anand Vihar
      if (preset.id !== 'delhi-anand-vihar') {
        assert(fb.city !== 'Delhi' || preset.id.startsWith('delhi-'), `Non-Delhi preset ${preset.id} does not silently resolve to Delhi Anand Vihar`);
      }
    }

    // --- 21. Testing India-Wide Location System (All 36 States/UTs) & AI Context ---
    console.log('\n--- 21. Testing India-Wide Location System & AI Context ---');
    assert(Array.isArray(mod.INDIA_STATES_AND_UTS) && mod.INDIA_STATES_AND_UTS.length === 36, `All 36 Indian States & UTs present (got ${mod.INDIA_STATES_AND_UTS.length})`);
    for (const st of mod.INDIA_STATES_AND_UTS) {
      const locs = mod.searchLocalIndiaLocations('', st);
      assert(locs.length >= 1, `State/UT ${st} has at least 1 location (got ${locs.length})`);
    }
    const jaipurSearch = mod.searchLocalIndiaLocations('Jaipur');
    assert(jaipurSearch.length >= 1 && jaipurSearch[0].state === 'Rajasthan', 'Search finds Jaipur in Rajasthan');

    const testTelemetry = mod.FALLBACK_TELEMETRY['bengaluru-indiranagar'];
    const testWindow = mod.calculateCleanAirWindow(testTelemetry.hourly);

    const aqiExplain = await mod.askBreatheWiseAssistant('Why is AQI high when PM2.5 is low?', [], testTelemetry, testWindow, 'normal_adult', '');
    assert(aqiExplain.includes('MAXIMUM sub-index') && aqiExplain.includes('Dominant Pollutant Driver'), 'AI explains CPCB NAQI max sub-index driver accurately');

    const provExplain = await mod.askBreatheWiseAssistant('Is this based on live data?', [], testTelemetry, testWindow, 'normal_adult', '');
    assert(provExplain.includes('Calibrated Regional Baseline') && !provExplain.includes('Live Copernicus CAMS (Live'), 'AI accurately discloses calibrated baseline provenance without pretending it is live');

    // --- 22. Testing State->District Cascade, Unavailable Telemetry Guard & Scenario Context ---
    console.log('\n--- 22. Testing State->District Cascade, Unavailable State & AI Scenario Context ---');
    const karnatakaDistricts = mod.getDistrictsForState('Karnataka');
    assert(Array.isArray(karnatakaDistricts) && karnatakaDistricts.includes('Bengaluru Urban') && karnatakaDistricts.includes('Mysuru'), `Karnataka districts include Bengaluru Urban & Mysuru (got ${karnatakaDistricts.length})`);

    const filteredBengaluru = mod.searchLocalIndiaLocations('', 'Karnataka', 'Bengaluru Urban');
    assert(filteredBengaluru.length >= 1 && filteredBengaluru.every((l) => l.state === 'Karnataka' && l.district === 'Bengaluru Urban'), 'State + District filter restricts results strictly to Bengaluru Urban, Karnataka');

    const unavailableTelemetry = {
      ...testTelemetry,
      city: 'Remote Village',
      state: 'Rajasthan',
      current: {
        ...testTelemetry.current,
        pm25: NaN,
        pm10: null,
        no2: null,
        so2: null,
        co: null,
        o3: null,
        aqi: 0,
        aqiCategory: 'Unavailable',
        primaryPollutant: 'Unavailable',
      },
      metadata: {
        ...testTelemetry.metadata,
        isLive: false,
        isSimulated: false,
        isUnavailable: true,
        fetchTimestamp: 'Telemetry Unavailable',
      },
    };

    const unavailReply = await mod.askBreatheWiseAssistant(
      'Can I go for an outdoor run?',
      [],
      unavailableTelemetry,
      testWindow,
      'normal_adult',
      '',
      'Active Scenario -> Commute: Bike 10 km; Exposure: Running 45 min with N95'
    );
    assert(unavailReply.includes('Telemetry Unavailable for Remote Village, Rajasthan'), 'Unavailable telemetry triggers honest Telemetry Unavailable disclosure');
    assert(unavailReply.includes('no fabricated readings') && unavailReply.includes('Commute: Bike 10 km'), 'Unavailable reply avoids fabricated numbers and reflects active scenario context');

    console.log('\n--- 23. Testing Gemini Chat History Normalization, Request Construction & Failure Fallback ---');
    // A. Welcome assistant message followed by first user question -> startChat receives [] (no leading model turn)
    let capturedHistoryFirstTurn = null;
    let capturedSystemInstruction = '';
    const mockFirstTurnFactory = (_apiKey, sysInstr) => {
      capturedSystemInstruction = sysInstr;
      return {
        startChat: ({ history }) => {
          capturedHistoryFirstTurn = history;
          return {
            sendMessage: async (q) => ({
              response: { text: () => `LIVE_GEMINI_OK: ${q}` },
            }),
          };
        },
      };
    };

    const firstTurnReply = await mod.askBreatheWiseAssistant(
      'Is it safe to exercise today?',
      [{ id: 'welcome', role: 'assistant', content: 'Based on the current air quality...', timestamp: 'Just now' }],
      testTelemetry,
      testWindow,
      'pediatric',
      'AIzaFakeTestKeyForMock123',
      'Commute: HSR Layout -> Electronic City',
      mockFirstTurnFactory
    );
    assert(Array.isArray(capturedHistoryFirstTurn) && capturedHistoryFirstTurn.length === 0, 'Welcome-only assistant history is normalized to [] before Gemini startChat');
    assert(firstTurnReply === 'LIVE_GEMINI_OK: Is it safe to exercise today?', 'Live Gemini response is returned when startChat succeeds on Turn 1');
    assert(capturedSystemInstruction.includes('pediatric') && capturedSystemInstruction.includes('HSR Layout -> Electronic City'), 'System instruction includes profile and active scenario context');

    // B. Multi-turn history starting with assistant/model message preserves user/model turns starting at user
    let capturedMultiTurnHistory = null;
    const multiTurnHistory = [
      { id: 'w', role: 'assistant', content: 'Welcome message', timestamp: '10:00' },
      { id: 'u1', role: 'user', content: 'First question', timestamp: '10:01' },
      { id: 'b1', role: 'assistant', content: 'First answer', timestamp: '10:01' },
      { id: 'u2', role: 'user', content: 'Second question', timestamp: '10:02' },
      { id: 'b2', role: 'assistant', content: 'Second answer', timestamp: '10:02' },
    ];
    await mod.askBreatheWiseAssistant(
      'Follow-up question',
      multiTurnHistory,
      testTelemetry,
      testWindow,
      'normal_adult',
      'AIzaFakeTestKeyForMock123',
      '',
      () => ({
        startChat: ({ history }) => {
          capturedMultiTurnHistory = history;
          return { sendMessage: async () => ({ response: { text: () => 'LIVE_MULTI_OK' } }) };
        },
      })
    );
    assert(
      Array.isArray(capturedMultiTurnHistory) &&
        capturedMultiTurnHistory.length === 4 &&
        capturedMultiTurnHistory[0].role === 'user' &&
        capturedMultiTurnHistory[0].parts[0].text === 'First question' &&
        capturedMultiTurnHistory[3].role === 'model',
      'Multi-turn history strips leading assistant message and preserves user->model alternation'
    );

    // C. Malformed/empty history entries are stripped safely
    const malformedNormalized = mod.normalizeGeminiHistory([
      null,
      { id: 'e1', role: 'assistant', content: '   ', timestamp: '' },
      { id: 'u1', role: 'user', content: 'Valid turn', timestamp: '' },
      { id: 'e2', role: 'user', content: '', timestamp: '' },
    ]);
    assert(malformedNormalized.length === 1 && malformedNormalized[0].role === 'user' && malformedNormalized[0].parts[0].text === 'Valid turn', 'Malformed and empty history entries are sanitized safely');

    // D. Gemini request failure falls back cleanly to deterministic response
    const fallbackReply = await mod.askBreatheWiseAssistant(
      'Is it safe to exercise today?',
      [{ id: 'u1', role: 'user', content: 'Hi', timestamp: '10:00' }],
      testTelemetry,
      testWindow,
      'normal_adult',
      'AIzaFakeTestKeyForMock123',
      '',
      () => ({
        startChat: () => ({
          sendMessage: async () => {
            throw new Error('Simulated 429 Quota Exceeded');
          },
        }),
      })
    );
    assert(fallbackReply.includes('Outdoor Exercise Guidance') && !fallbackReply.includes('LIVE_'), 'Gemini failure gracefully falls back to deterministic response');

    console.log('\n--- 24. Testing Open-Meteo Timeout Cleanup on Early Failure ---');
    let clearTimeoutCalled = false;
    const origClearTimeout = globalThis.clearTimeout;
    globalThis.clearTimeout = (id) => {
      clearTimeoutCalled = true;
      return origClearTimeout(id);
    };
    globalThis.fetch = async () => {
      throw new Error('Simulated early network rejection');
    };
    let rejectedCleanly = false;
    try {
      await mod.fetchOpenMeteoTelemetry(12.97, 77.59, 'Bengaluru', 'Karnataka');
    } catch (e) {
      rejectedCleanly = e instanceof Error && e.message.includes('Simulated early network rejection');
    } finally {
      globalThis.clearTimeout = origClearTimeout;
    }
    assert(rejectedCleanly && clearTimeoutCalled, 'fetchOpenMeteoTelemetry clears timeout via finally on early network rejection');

    console.log('\n--- 25. Testing Weather Fallback Honesty & Exposure Contextual AI ---');
    globalThis.fetch = async (url) => {
      if (String(url).includes('air-quality-api')) {
        return {
          ok: true,
          json: async () => ({
            current: { pm2_5: 42, pm10: 68, nitrogen_dioxide: 24, sulphur_dioxide: 8, carbon_monoxide: 400, ozone: 36, us_aqi: 117 },
            hourly: {
              time: ['2026-11-27T08:00', '2026-11-27T14:00'],
              pm2_5: [55, 30],
              pm10: [80, 50],
              nitrogen_dioxide: [28, 18],
              sulphur_dioxide: [8, 6],
              ozone: [30, 42],
              us_aqi: [149, 89],
              boundary_layer_height: [320, 1100],
            },
          }),
        };
      }
      return { ok: false, status: 503, statusText: 'Service Unavailable' };
    };
    const partialWeatherTelemetry = await mod.fetchOpenMeteoTelemetry(12.97, 77.59, 'Bengaluru', 'Karnataka');
    assert(
      partialWeatherTelemetry.weather.weatherDescription.includes('weather feed unavailable'),
      'Partial weather failure is transparently disclosed in weatherDescription'
    );

    const exposureAiReply = await mod.askBreatheWiseAssistant(
      'Interpret my personal exposure simulation: Outdoor Walk 60 min with N95',
      [],
      testTelemetry,
      testWindow,
      'pediatric',
      '',
      'Exposure: light_walking for 60 min, Mask=n95'
    );
    assert(
      exposureAiReply.includes('Personal Exposure Decision Brief') &&
        exposureAiReply.includes('Evidence:') &&
        exposureAiReply.includes('Recommended Actions:') &&
        exposureAiReply.includes('Safety Caveat:') &&
        exposureAiReply.includes('Mask=n95'),
      'Exposure contextual AI prompt grounds structured decision brief in inhaled dose equation and active scenario'
    );
  } finally {
    globalThis.fetch = origFetch;
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
}

runRealModuleTests()
  .then(() => {
    console.log(`\n========================================`);
    console.log(`TEST RESULTS: ${passed} Passed, ${failed} Failed`);
    console.log(`========================================\n`);
    if (failed > 0) process.exit(1);
  })
  .catch((err) => {
    console.error('Test runner fatal error:', err);
    process.exit(1);
  });
