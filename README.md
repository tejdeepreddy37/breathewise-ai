# BreatheWise AI — Personal Air Intelligence & Exposure-Aware Living Assistant
> *"Don't just understand the air. Understand how to live in it."*

**PromptWars Virtual — Challenge 06: Urban Air Quality Assistant**  
Built with **Google Antigravity**, **Google Gemini 1.5 Flash**, **React 18**, **TypeScript**, and **Copernicus Atmosphere Monitoring Service (CAMS)** regional grid telemetry.

---

## 1. Executive Summary

Most consumer air quality applications suffer from the **Actionability Chasm**:
* Legacy tools tell you: *"The AQI is 342 (Hazardous)."*
* Generic LLMs say: *"Stay indoors and wear a mask."*

Neither answers real-life urban dilemmas:
1. *"When is the exact 45-minute window today to open windows and flush my apartment without letting in hazardous particulate smog?"*
2. *"Can I take my 6-year-old asthmatic child outdoors for physical activity today?"*
3. *"If I switch my 14 km commute from an open auto-rickshaw to the metro, how many micrograms (µg) of PM2.5 do I save my lungs from inhaling?"*

**BreatheWise AI** bridges this chasm by pairing **deterministic environmental physics & official CPCB NAQI calculation** with **context-grounded Generative AI synthesis**.

---

## 2. The 4 Signature Differentiators

### A. WindowSafe™ Environmental Activity Window Intelligence
In northern and central India, morning rush-hour and nocturnal cooling create ground-level thermal inversions. Between 1:00 PM and 3:30 PM, daytime solar heating triggers convective atmospheric mixing, creating a natural **30% to 50% relative particulate dispersion valley**. BreatheWise AI evaluates the full 24-hour diurnal curve to identify this window, checks photochemical Ozone ($O_3$) spikes, and applies strict health labeling: relative valleys during severe smog episodes are clearly labeled as *"Relatively Lower Exposure (Air Remains Unhealthy)"*, avoiding false reassurance.

### B. Inhaled Particulate Exposure Engine ($M_{\text{inh}}$)
Standard apps equate outdoor concentration with personal danger. BreatheWise AI calculates estimated gross inhaled particulate mass:
$$M_{\text{inh}} = C_{\text{ambient}} \times V_E \times t \times (1 - \eta_{\text{mask}})$$
Where $V_E$ is the minute ventilation rate (0.48 m³/h resting vs. 3.30 m³/h running, adapted from the US EPA Exposure Factors Handbook) and $\eta$ is certified mask material efficiency (95% for N95).

### C. Commute Exposure & Transit Eco-Swap Simulator
Directly compares 6 urban transit modes (Open Two-Wheeler, Auto-Rickshaw, Public Bus, AC Cab, AC Metro with first/last-mile walking, and Work-From-Home) across both **personal protection (inhaled µg avoided)** and **civic sustainability (tailpipe kg CO2 avoided)**.

### D. Indoor Envelope & Ventilation Safety Coach
Evaluates building envelope infiltration ($\alpha \approx 0.45$ sealed) and calculates required air purifier runtime (Clean Air Delivery Rate vs. room volume) to achieve 75% particulate removal. **Strict Safety Guard:** Natural ventilation is permitted only when outdoor PM2.5 is $\le 30\,\mu\text{g/m}^3$ (or up to $60\,\mu\text{g/m}^3$ during diurnal valleys). Ventilation is **strictly blocked whenever outdoor PM2.5 > 60 µg/m³ or Ozone > 100 µg/m³**, preventing hazardous outdoor air from flooding living spaces.

---

## 3. Architecture & Tech Stack

```
+---------------------------------------------------------------------------------+
|                               SYSTEM ARCHITECTURE                               |
+---------------------------------------------------------------------------------+
|                                                                                 |
|   LAYER 1: TELEMETRY INGESTION & PROVENANCE                                     |
|   * Open-Meteo Air Quality API (Hourly Copernicus CAMS 0.25° Regional Grid)     |
|   * Timezone-safe ISO parsing (Preserves Indian Standard Time)                 |
|   * CO unit normalization (µg/m³ -> mg/m³)                                      |
|   * Calibrated offline simulated regional profile fallback (Zero fake sensors)  |
|                                                                                 |
|   LAYER 2: DETERMINISTIC LOGIC & PHYSICS ENGINES (TypeScript)                   |
|   * cpcbAqi.ts: Official Indian CPCB NAQI piecewise linear interpolation        |
|   * windowSafe.ts: 24h diurnal curve parser with Ozone risk detection          |
|   * inhaledDose.ts: EPA ventilation rates & gross inhaled particulate mass      |
|   * commuteSwap.ts: Micro-environment exposure factors & India GHG carbon math  |
|   * indoorCoach.ts: Infiltration ratio, CADR runtime & strict safety ceilings   |
|                                                                                 |
|   LAYER 3: GROUNDED GENAI SYNTHESIS (Google Gemini 1.5 Flash)                   |
|   * Structured JSON Schema Output with defensive markdown fence stripping       |
|   * Strict safety boundaries: Physical safety rules override AI suggestions     |
|   * Session-only volatile key storage (SessionStorage, never in localStorage)   |
|                                                                                 |
|   LAYER 4: MODERN PRESENTATION (React 18 + Tailwind CSS + Recharts)             |
|   * Organic Editorial Design System (Alabaster cream, Slate charcoal, Forest)   |
|   * Unified Desktop Command Center + Mobile-First Tactical Companion            |
|                                                                                 |
+---------------------------------------------------------------------------------+
```

---

## 4. Getting Started

### Prerequisites
* Node.js v18+ (tested on Node v22)
* npm v9+

### Quick Start
```bash
# Clone the repository
git clone https://github.com/your-username/breathewise-ai.git
cd breathewise-ai

# Install dependencies
npm install

# (Optional) Add your Gemini API key to .env.local
cp .env.example .env.local
# Edit .env.local and set VITE_GEMINI_API_KEY=your_key_here

# Run automated engine unit tests
npm test

# Run development server
npm run dev

# Build for production
npm run build
```

---

## 5. Authoritative References & Scientific Standards
* **Central Pollution Control Board (CPCB), Ministry of Environment, Forest and Climate Change:** National Air Quality Index (NAQI) Technical Report (Piecewise linear breakpoint schedules)
* **World Health Organization (WHO):** Global Air Quality Guidelines (2021 Update: PM2.5 24h benchmark 15 µg/m³, O3 8h benchmark 100 µg/m³)
* **US Environmental Protection Agency (EPA):** Exposure Factors Handbook (Chapter 6: Inhalation Rates)
* **India GHG Protocol & Central Electricity Authority (CEA):** Baseline Carbon Emission Factors for Indian Transport & Grid Electricity

---

## 6. License
MIT License. Environmental data provided under non-commercial CC BY 4.0 by Copernicus Atmosphere Monitoring Service / Open-Meteo.
