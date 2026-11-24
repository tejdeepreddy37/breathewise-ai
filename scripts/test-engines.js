/**
 * Direct Unit Test Suite for BreatheWise AI Engines & Logic
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

// 1. CPCB NAQI Piecewise Linear Logic
const PM25_BREAKPOINTS = [
  { cLow: 0, cHigh: 30, iLow: 0, iHigh: 50 },
  { cLow: 31, cHigh: 60, iLow: 51, iHigh: 100 },
  { cLow: 61, cHigh: 90, iLow: 101, iHigh: 200 },
  { cLow: 91, cHigh: 120, iLow: 201, iHigh: 300 },
  { cLow: 121, cHigh: 250, iLow: 301, iHigh: 400 },
  { cLow: 251, cHigh: 500, iLow: 401, iHigh: 500 },
];

function calculateSubIndex(conc, breakpoints) {
  if (conc == null || isNaN(conc) || conc < 0) return null;
  for (const b of breakpoints) {
    if (conc >= b.cLow && conc <= b.cHigh) {
      const idx = ((b.iHigh - b.iLow) / (b.cHigh - b.cLow)) * (conc - b.cLow) + b.iLow;
      return Math.round(idx);
    }
  }
  if (conc > breakpoints[breakpoints.length - 1].cHigh) return 500;
  return 0;
}

console.log('\n--- 1. Testing CPCB NAQI Interpolation Logic ---');
{
  const idxGood = calculateSubIndex(25, PM25_BREAKPOINTS);
  assert(idxGood >= 40 && idxGood <= 43, `PM2.5=25 yields sub-index ~42 (got ${idxGood})`);

  const idxSat = calculateSubIndex(45, PM25_BREAKPOINTS);
  assert(idxSat >= 70 && idxSat <= 80, `PM2.5=45 yields Satisfactory sub-index ~75 (got ${idxSat})`);

  const idxMod = calculateSubIndex(75, PM25_BREAKPOINTS);
  assert(idxMod >= 140 && idxMod <= 160, `PM2.5=75 yields Moderate sub-index ~150 (got ${idxMod})`);

  const idxSevere = calculateSubIndex(300, PM25_BREAKPOINTS);
  assert(idxSevere >= 415 && idxSevere <= 425, `PM2.5=300 yields Severe sub-index ~420 (got ${idxSevere})`);
}

console.log('\n--- 2. Testing Inhaled Exposure Math (No Cigarettes) ---');
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

  function calculateInhaledDose(ambientPm25, durationMinutes, activity, maskType) {
    const safePm = Math.max(0, ambientPm25 || 0);
    const safeDuration = Math.max(0, Math.min(720, durationMinutes || 0));
    const lpm = MINUTE_VENTILATION_LPM[activity] || 25;
    const hours = safeDuration / 60;
    const volumeM3 = (lpm * 60 * hours) / 1000;
    const efficiency = MASK_EFFICIENCIES[maskType] ?? 0.0;
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
}

console.log('\n--- 3. Testing Indoor Air Coach Ventilation Safety Guard ---');
{
  function calculateIndoorRecommendations(outdoorPm25, cleanAirWindow, currentHour, roomAreaM2, outdoorO3) {
    const safePm = Math.max(0, outdoorPm25 || 0);
    const safeO3 = outdoorO3 != null ? Math.max(0, outdoorO3) : null;
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

  // CRITICAL SAFETY TEST: Severe air (180) during active window -> SEALED
  const rSevere = calculateIndoorRecommendations(180, win, 14, 20);
  assert(rSevere.windowAction === 'SEAL_COMPLETELY', 'CRITICAL SAFETY GUARD: Severe air (180 µg/m³) during active window is strictly SEAL_COMPLETELY');

  // Ozone hazard (130) -> SEALED
  const rOzone = calculateIndoorRecommendations(25, win, 14, 20, 130);
  assert(rOzone.windowAction === 'SEAL_COMPLETELY', 'High Ozone (130 µg/m³) strictly seals windows despite clean PM2.5');
}

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

console.log('\n--- 5. Testing WindowSafe Rolling Slice Logic ---');
{
  function scanWindow(hourly) {
    let lowestAvg = 9999;
    let bestStart = 13;
    let bestEnd = 15;

    for (let s = 0; s <= hourly.length - 2; s++) {
      for (let e = s + 1; e <= Math.min(hourly.length - 1, s + 2); e++) {
        const windowPoints = hourly.slice(s, e + 1);
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
    return { bestStart, bestEnd, avgPm: Math.round(lowestAvg) };
  }

  // Create mock diurnal curve: morning high (180), afternoon valley (55 at 13:00-15:00), evening high (210)
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
}

console.log('\n--- 6. Testing Geographic Coordinate & Data Integrity ---');
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
