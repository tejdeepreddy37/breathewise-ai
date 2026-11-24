/**
 * Automated Unit Test Suite for BreatheWise AI Domain Engines
 */

import { calculateCpcbAqi, calculateSubIndex } from '../src/engines/cpcbAqi.ts';
import { calculateInhaledDose, MINUTE_VENTILATION_LPM, MASK_EFFICIENCIES } from '../src/engines/inhaledDose.ts';
import { calculateIndoorRecommendations } from '../src/engines/indoorCoach.ts';
import { calculateCleanAirWindow } from '../src/engines/windowSafe.ts';
import { calculateCommuteTradeoffs } from '../src/engines/commuteSwap.ts';

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

console.log('\n--- 1. Testing CPCB NAQI Calculation Engine ---');
{
  // Good: PM2.5 = 25 (bracket 0-30 -> 0-50)
  const r1 = calculateCpcbAqi({ pm25: 25 });
  assert(r1.aqi >= 40 && r1.aqi <= 43, `PM2.5=25 yields AQI ~42 (got ${r1.aqi})`);
  assert(r1.category === 'Good', `Category is Good (got ${r1.category})`);

  // Satisfactory: PM2.5 = 45 (bracket 31-60 -> 51-100)
  const r2 = calculateCpcbAqi({ pm25: 45 });
  assert(r2.category === 'Satisfactory', `PM2.5=45 category is Satisfactory (got ${r2.category}, aqi ${r2.aqi})`);

  // Moderate: PM2.5 = 75 (bracket 61-90 -> 101-200)
  const r3 = calculateCpcbAqi({ pm25: 75 });
  assert(r3.category === 'Moderate', `PM2.5=75 category is Moderate (got ${r3.category}, aqi ${r3.aqi})`);

  // Severe: PM2.5 = 280 (bracket 251-500 -> 401-500)
  const r4 = calculateCpcbAqi({ pm25: 280 });
  assert(r4.category === 'Severe', `PM2.5=280 category is Severe (got ${r4.category}, aqi ${r4.aqi})`);

  // Governing pollutant selection (Ozone higher than PM2.5)
  const r5 = calculateCpcbAqi({ pm25: 35, o3: 180 }); // PM2.5 ~60, O3 ~230
  assert(r5.primaryPollutant === 'Ozone', `Governing pollutant is Ozone when O3 is dominant (got ${r5.primaryPollutant})`);
}

console.log('\n--- 2. Testing Inhaled Exposure Engine (No Cigarette Metric) ---');
{
  const res = calculateInhaledDose(100, 45, 'outdoor_running', 'none');
  
  // Verify cigarette metric is permanently absent
  assert(!('equivalentCigarettes' in res), 'equivalentCigarettes field is removed');
  
  // Math verification: 55 L/min * 45 min = 2475 L = 2.475 m³
  // Mass = 100 µg/m³ * 2.475 m³ * 1.0 = 247.5 µg
  assert(res.estimatedInhaledMassUg === 247.5, `Mass calculated correctly: 247.5 µg (got ${res.estimatedInhaledMassUg})`);
  assert(res.inhaledAirVolumeM3 === 2.48, `Air volume respired ~2.48 m³ (got ${res.inhaledAirVolumeM3})`);

  // With N95: 95% filtration -> 5% enters -> 247.5 * 0.05 = 12.375 µg ~ 12.4 µg
  const resN95 = calculateInhaledDose(100, 45, 'outdoor_running', 'n95');
  assert(resN95.estimatedInhaledMassUg === 12.4, `N95 filters 95% -> 12.4 µg inhaled (got ${resN95.estimatedInhaledMassUg})`);
  assert(res.doseSavedUgWithN95 === 235.1, `Mass avoided with N95 is 235.1 µg (got ${res.doseSavedUgWithN95})`);

  // Edge cases: zero duration
  const resZero = calculateInhaledDose(100, 0, 'outdoor_running', 'none');
  assert(resZero.estimatedInhaledMassUg === 0, 'Zero duration produces 0 µg mass');

  // WHO exceedance ratio: 100 / 15 = 6.7x
  assert(res.whoExceedanceRatio === 6.7, `WHO exceedance ratio is 6.7x (got ${res.whoExceedanceRatio})`);
}

console.log('\n--- 3. Testing Indoor Air Coach Ventilation Safety ---');
{
  const dummyWindow = {
    startHour: 13,
    endHour: 15,
    displayWindow: '1:00 PM – 3:00 PM',
    durationHours: 2,
    averagePm25: 140,
    averageAqi: 320,
    reductionVsPeakPercent: 35,
    windowStatus: 'HAZARDOUS_LIMIT_EXERTION',
    statusLabel: 'Diurnal Minimum',
    convectiveReasoning: 'Test',
    isAvailableToday: true,
    ozoneRiskWarning: null,
  };

  // Case A: Clean outdoor air (PM2.5 = 20) -> Safe to open
  const recClean = calculateIndoorRecommendations(20, dummyWindow, 14, 20);
  assert(recClean.windowAction === 'OPEN_CROSS_VENTILATE', 'Clean outdoor air (20 µg/m³) permits cross-ventilation');

  // Case B: Moderate air (PM2.5 = 45) during window -> Crack flush
  const recMod = calculateIndoorRecommendations(45, dummyWindow, 14, 20);
  assert(recMod.windowAction === 'CRACK_FLUSH_NOW', 'Moderate air (45 µg/m³) during window permits brief flush');

  // Case C: CRITICAL SAFETY TEST: Severe air (PM2.5 = 180) during active window -> MUST BE SEALED!
  const recSevere = calculateIndoorRecommendations(180, dummyWindow, 14, 20);
  assert(recSevere.windowAction === 'SEAL_COMPLETELY', 'CRITICAL SAFETY TEST: Severe air (180 µg/m³) during window is strictly SEAL_COMPLETELY');

  // Case D: Ozone hazard (O3 = 140) -> MUST BE SEALED!
  const recOzone = calculateIndoorRecommendations(25, dummyWindow, 14, 20, 140);
  assert(recOzone.windowAction === 'SEAL_COMPLETELY', 'High Ozone (140 µg/m³) strictly seals windows despite clean PM2.5');
}

console.log('\n--- 4. Testing Environmental Window Intelligence (WindowSafe) ---');
{
  // 24h curve with morning peak (200), afternoon dip (70), evening peak (220)
  const hourly = [];
  for (let h = 0; h < 24; h++) {
    let pm = 150;
    if (h >= 7 && h <= 9) pm = 220;
    else if (h >= 13 && h <= 15) pm = 70;
    else if (h >= 20 && h <= 22) pm = 240;
    hourly.push({
      time: `2026-11-24T${String(h).padStart(2, '0')}:00`,
      hour: h,
      pm25: pm,
      pm10: pm * 1.5,
      no2: 30,
      o3: h >= 13 && h <= 15 ? 120 : 25, // Ozone spike in afternoon
      cpcbAqi: 200,
      usAqi: 200,
    });
  }

  const win = calculateCleanAirWindow(hourly);
  assert(win.startHour === 13, `Window correctly identifies 13:00 start (got ${win.startHour})`);
  assert(win.averagePm25 === 70, `Average PM2.5 is 70 µg/m³ (got ${win.averagePm25})`);
  assert(win.ozoneRiskWarning != null, 'Ozone spike is detected and warned in window');
  assert(win.windowStatus === 'UNHEALTHY_ELEVATED', `WindowStatus reflects real health impact (got ${win.windowStatus})`);
}

console.log('\n--- 5. Testing Commute Transit Eco-Swap Engine ---');
{
  const tradeoffs = calculateCommuteTradeoffs(14, 150);
  assert(tradeoffs.length === 6, 'Evaluates all 6 transport modes');

  const bike = tradeoffs.find(t => t.mode === 'two_wheeler_open');
  const metro = tradeoffs.find(t => t.mode === 'ac_metro');
  const wfh = tradeoffs.find(t => t.mode === 'work_from_home');

  assert(bike.inhaledDoseUg > metro.inhaledDoseUg, 'Two-wheeler open exposure is higher than AC metro');
  assert(metro.carbonEmissionKg < bike.carbonEmissionKg, 'Metro transit has lower per-passenger carbon than motorcycle');
  assert(wfh.carbonEmissionKg === 0, 'WFH has 0 kg transport carbon emission');
  assert(metro.assumptions.includes('first/last-mile'), 'Metro includes first/last-mile assumption');
}

console.log(`\n========================================`);
console.log(`TEST SUMMARY: ${passed} Passed, ${failed} Failed`);
console.log(`========================================\n`);

if (failed > 0) process.exit(1);
