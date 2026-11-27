# BreatheWise AI — Personal Air Intelligence & Exposure-Aware Living Assistant

> *"Don't just understand the air. Understand how to live in it."*

[![PromptWars Virtual](https://img.shields.io/badge/PromptWars-Challenge%2006%3A%20Urban%20Air%20Quality-0284c7?style=flat-square)](https://promptwars.in)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-059669?style=flat-square)](https://tejdeepreddy37.github.io/breathewise-ai/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Google Gemini](https://img.shields.io/badge/Google%20Gemini-3.8%20Flash-orange?style=flat-square&logo=google)](https://ai.google.dev/gemini-api/docs/models)
[![Tests](https://img.shields.io/badge/Tests-306%20Passed%2C%200%20Failed-brightgreen?style=flat-square)](scripts/test-engines.js)

**Live App:** [https://tejdeepreddy37.github.io/breathewise-ai/](https://tejdeepreddy37.github.io/breathewise-ai/)  
**Repository:** [https://github.com/tejdeepreddy37/breathewise-ai](https://github.com/tejdeepreddy37/breathewise-ai)

---

## 1. Executive Summary & Problem Statement

Legacy air quality apps stop at raw numbers (*"AQI is 124 — Moderate"*), while generic chatbots offer vague advice (*"Stay indoors and wear a mask"*). Neither answers the practical daily decisions urban residents across India actually face:

1. *"What is driving today's AQI in my city, and which 2–3 hour diurnal window has the lowest exposure?"*
2. *"If I switch my commute corridor from a private cab or open two-wheeler to the AC Metro, how many µg of $\text{PM}_{2.5}$ and kg of $\text{CO}_2$ do I avoid?"*
3. *"If I cook or burn incense indoors, should I open windows or run my HEPA purifier—and what happens to modeled indoor $\text{PM}_{2.5}$?"*
4. *"For a specific activity, duration, and mask (e.g., N95), how much particulate mass actually enters my airways?"*

**BreatheWise AI** bridges this **Actionability Chasm**. It is an **exposure-aware decision intelligence application** combining live atmospheric model telemetry, official Indian CPCB NAQI standards, deterministic environmental physics engines, 9-scenario robustness stress-testing, shape-based decision-flip analysis, bounded observation anchoring, and a grounded Google Gemini 3.8 Flash AI Advisor with an unconditional clinical triage guard.

---

## 2. Application Screenshots (Verified Production Build)

| 1. 3D Earth Landing Page | 2. Air Intelligence Overview |
| :---: | :---: |
| ![Landing Page](docs/screenshots/01-landing.png) | ![Overview Workspace](docs/screenshots/02-overview.png) |

| 3. Commute Intelligence | 4. Indoor Air Intelligence |
| :---: | :---: |
| ![Commute Workspace](docs/screenshots/03-commute.png) | ![Indoor Workspace](docs/screenshots/04-indoor.png) |

| 5. Exposure / What-If Analysis | 6. AI Advisor |
| :---: | :---: |
| ![Exposure Workspace](docs/screenshots/05-exposure.png) | ![AI Advisor Workspace](docs/screenshots/06-ai-advisor.png) |

---

## 3. Seven-Screen Workspace Architecture

1. **Earth Landing Page (`LandingPage.tsx` + `InteractiveGlobe.tsx`):** Full-viewport interactive Three.js 3D Earth hero with atmospheric glow, orbital rings, and direct entry into the intelligence workspaces.
2. **Overview (`OverviewWorkspace.tsx`):** Displays live/cached Indian CPCB NAQI (`calculateCpcbAqi`), dominant pollutant driver (`PM2.5`, `PM10`, `NO2`, `O3`), weather conditions, a 24-hour diurnal AQI trend chart, and clickable Health & Actionable Insights.
3. **Air Day Twin (`DayTwinWorkspace.tsx`):** Signature 24-hour adaptive decision-intelligence workspace integrating:
   - **Day Schedule Optimizer (`dayTwin.ts`):** Minimizes cumulative inhaled $\text{PM}_{2.5}$ ($\mu\text{g}$) across a 24h routine while keeping fixed commitments locked.
   - **Robustness Engine (`robustness.ts`):** Stress-tests the optimized plan across up to 9 deduplicated deterministic perturbations (`ROBUST / SENSITIVE / FRAGILE / INCONCLUSIVE`).
   - **Shape-Based Decision-Flip (`decisionFlip.ts`):** Sweeps diurnal contrast $k \in [0, 1.5]$ via $C_k(h) = \mu + k(C(h)-\mu)$ with bisection boundary detection.
   - **Localized Observation Anchoring (`observationAnchor.ts`):** Bounded circular 24h adjustment ($f \in [0.33, 3.0]$) from a single user-provided $\text{PM}_{2.5}$ reading with full before/after recalculation and reset.
4. **Commute (`CommuteSimulator.tsx`):** Location-aware Origin → Destination corridor selector with draft-vs-committed analysis (`Analyze Commute →`) comparing road modes vs. Rapid AC Metro for inhaled $\text{PM}_{2.5}$ ($\mu\text{g}$) and $\text{CO}_2$ savings ($\text{kg}$).
5. **Indoor (`IndoorCoachView.tsx`):** Single-zone steady-state mass-balance model (`indoorCoach.ts`) with outdoor smog/ozone ventilation safety ceilings ($\text{PM}_{2.5} > 60\,\mu\text{g/m}^3$ or $\text{O}_3 > 100\,\mu\text{g/m}^3$).
6. **Exposure (`WhatIfSimulator.tsx`):** Physiological What-If Sandbox (`inhaledDose.ts`) computing gross inhaled $\text{PM}_{2.5}$ mass across US EPA minute ventilation rates ($V_E$) and NIOSH mask tiers.
7. **AI Advisor (`AiAssistantWorkspace.tsx` + `gemini.ts`):** Grounded assistant powered by **Google Gemini 3.8 Flash** (with `gemini-3.5-flash-lite` fallback and optional session-only key) plus a structured deterministic offline engine, grounded in live telemetry, `dayTwinSummary`, and an unconditional **Clinical Triage Guard**.

### Cross-Cutting Intelligence Controls
* **State → District → City Location Picker (`IndiaLocationPicker.tsx`):** Covers all **36 Indian States & Union Territories** plus custom coordinate search.
* **Health Profile Selector & Provenance Bar (`Sidebar.tsx`):** Adjusts physiological guidance across 5 profiles, shows explicit telemetry status (`Live CAMS`, `Cached CAMS`, `Calibrated Baseline`, or `Unavailable`), allows manual refresh, and opens the **Scientific Methodology & Telemetry Provenance** modal (`TransparencyDrawer.tsx`).

---

## 4. Scientific Engines & Mathematical Foundations

| Engine | File | Methodology & Standards |
| :--- | :--- | :--- |
| **CPCB NAQI Engine** | `src/engines/cpcbAqi.ts` | Continuous piecewise linear interpolation across official Indian CPCB breakpoints ($\text{PM}_{2.5}$, $\text{PM}_{10}$, $\text{NO}_2$, $\text{O}_3$, $\text{CO}$, $\text{SO}_2$). |
| **WindowSafe™ Diurnal Engine** | `src/engines/windowSafe.ts` | Rolling 2–3 hour diurnal slice scan identifying lowest composite $\text{PM}_{2.5}$ + $\text{O}_3$ exposure window without false reassurance during severe smog. |
| **Inhaled Dose Engine** | `src/engines/inhaledDose.ts` | US EPA *Exposure Factors Handbook* (Ch. 6) minute ventilation rates ($6\text{--}65\,\text{L/min}$) + NIOSH nominal filtration efficiencies. |
| **Indoor Air Coach** | `src/engines/indoorCoach.ts` | Single-zone steady-state mass balance ($\alpha = 0.45$ closed envelope infiltration), CADR clean-down time ($t_{75\%}$), and strict outdoor smog/ozone safety locks. |
| **Commute Eco-Swap Engine** | `src/engines/commuteSwap.ts` | Micro-environment exposure factors ($1.30\times$ open two-wheeler plume factor, metro walk-link modeling) + India GHG Protocol $\text{CO}_2$ emission factors. |

---

## 5. System Architecture & Data Provenance

```mermaid
flowchart LR
    A["Open-Meteo Air Quality & Weather<br/>(CAMS Global 0.4° / ~45 km Grid)"] --> B["telemetryService.ts<br/>(15-min LocalStorage TTL Cache)"]
    B --> C["Deterministic Physics Tier<br/>(CPCB NAQI • WindowSafe • Dose • Indoor • Commute • Day Twin)"]
    C --> D["7 Workspaces<br/>(Landing • Overview • Day Twin • Commute • Indoor • Exposure • AI Advisor)"]
    C --> E["Grounded AI Tier<br/>(Gemini 3.8 Flash + Clinical Triage Guard + Offline Fallback)"]
    E --> D
```

### Honest Telemetry & Provenance Disclosure
* **Atmospheric Model Grid (Global vs. European):** For India, Open-Meteo serves **CAMS Global Atmospheric Composition Forecasts** at **$0.4^\circ \times 0.4^\circ$ (~40–45 km) spatial resolution** with 3-hourly native model output interpolated to hourly—**not** Europe's higher-resolution $0.1^\circ$ (~11 km) CAMS grid and **not** hyper-local street-corner monitoring stations.
* **Hourly CPCB NAQI Proxy:** Official CPCB NAQI breakpoints are defined for 24-hour ($\text{PM}_{2.5}, \text{PM}_{10}, \text{NO}_2, \text{SO}_2$) and 8-hour ($\text{O}_3, \text{CO}$) averages; computing instantaneous CPCB NAQI from hourly model outputs is a real-time proxy.
* **Fallback & Observation Transparency:** When offline or unreachable, calibrated presets report `Calibrated Baseline` and uncalibrated custom locations report `Telemetry Unavailable`. Single user-provided observations (`0.33×–3.0×`) create a bounded model-adjusted scenario and never calibrate an entire day.
* **Non-Medical Boundary:** BreatheWise AI is an environmental exposure-reduction planning tool, not a clinical diagnostic or prescription service.

---

## 6. Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React `18.3.1`, TypeScript `5.6.3`, Vite `5.4.11` |
| **Styling** | Tailwind CSS `3.4.15`, `clsx`, `tailwind-merge` |
| **3D & Visualization** | Three.js `0.187.0` (3D Earth Globe), Recharts `2.13.3` (24h Trend & Exposure Charts), Lucide React `0.460.0` |
| **Generative AI** | `@google/generative-ai` (`0.21.0`) targeting `gemini-3.8-flash` / `gemini-3.5-flash-lite` + deterministic fallback |
| **Testing** | Node.js test harness (`scripts/test-engines.js` — **306 Passed, 0 Failed**) |

---

## 7. Local Setup & Verification

### Prerequisites
* **Node.js** v18+ (tested on Node v22)
* **npm** v9+

### Commands
```bash
# 1. Clone the repository
git clone https://github.com/tejdeepreddy37/breathewise-ai.git
cd breathewise-ai

# 2. Install dependencies
npm install

# 3. Run the deterministic engine & safety test suite (256 assertions)
npm test

# 4. Type-check and build production bundle
npm run build

# 5. Start local production preview server
npm run preview -- --port 4178 --strictPort --host 127.0.0.1
```

### Optional Gemini API Key Configuration
BreatheWise AI works **out-of-the-box with zero API keys** using its deterministic physics and rule-based advisor engine. To enable live **Google Gemini 3.8 Flash** synthesis:
* **Option A (In-App Session Key):** Open **AI Advisor**, click the settings icon on the left side of the message bar, and paste your Google AI Studio key. It is stored only in `sessionStorage` and cleared when the browser tab closes.
* **Option B (Local `.env.local`):** Copy `.env.example` to `.env.local` and set:
  ```env
  VITE_GEMINI_API_KEY=your_gemini_api_key_here
  ```

---

## 8. Authoritative References & License

1. **Central Pollution Control Board (CPCB), India:** *National Air Quality Index Technical Report* — piecewise linear breakpoint schedules.
2. **World Health Organization (WHO):** *Global Air Quality Guidelines (2021)* — 24h $\text{PM}_{2.5}$ ($15\,\mu\text{g/m}^3$) and 8h $\text{O}_3$ ($100\,\mu\text{g/m}^3$) benchmarks.
3. **US EPA:** *Exposure Factors Handbook (2011, Ch. 6)* — activity-specific minute ventilation rates ($V_E$).
4. **India GHG Protocol / CEA:** Urban passenger transport emission factors ($\text{kg CO}_2/\text{km}$).
5. **NIOSH 42 CFR Part 84:** Particulate respirator filtration classes (N95 / N99).

**Event:** PromptWars Virtual — Challenge 06: Urban Air Quality  
**License:** MIT
