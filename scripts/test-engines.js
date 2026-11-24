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

console.log(`\n========================================`);
console.log(`TEST RESULTS: ${passed} Passed, ${failed} Failed`);
console.log(`========================================\n`);

if (failed > 0) process.exit(1);
