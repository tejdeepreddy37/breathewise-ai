# BreatheWise AI — Personal Air Intelligence & Exposure-Aware Living Assistant
> *"Don't just understand the air. Understand how to live in it."*

**PromptWars Virtual — Challenge 06: Urban Air Quality Assistant**  
Built with **Google Antigravity**, **Google Gemini 1.5 Flash**, **React 18**, **TypeScript**, and **Copernicus Atmosphere Monitoring Service (CAMS)** telemetry.

---

## 1. Executive Summary

Most consumer air quality applications suffer from the **Actionability Chasm**:
* Legacy tools tell you: *"The AQI is 342 (Hazardous)."*
* Generic LLMs say: *"Stay indoors and wear a mask."*

Neither answers real-life urban dilemmas:
1. *"When is the exact 45-minute window today to open windows and flush my apartment without letting in diesel exhaust?"*
2. *"Can I take my 6-year-old asthmatic child outdoors for physical activity today?"*
3. *"If I switch my 14 km commute from an open auto-rickshaw to the metro, how many micrograms (µg) of PM2.5 do I save my lungs from inhaling?"*

**BreatheWise AI** bridges this chasm by pairing **deterministic environmental physics** with **context-grounded Generative AI synthesis**.

---

## 2. The 4 Signature Differentiators

### A. WindowSafe™ Diurnal Clean-Air Window Engine
In northern and central India, morning rush-hour and nocturnal cooling create severe ground-level thermal inversions (<300m boundary layer height). Between 1:00 PM and 4:00 PM, daytime solar heating triggers deep convective mixing (>1,200m), creating a natural **40% to 60% particulate dispersion valley**. BreatheWise AI calculates and highlights this optimal window daily for exercise, errands, and ventilation.

### B. Physiological Inhaled Particulate Burden ($D_{\text{inh}}$)
Standard apps equate outdoor concentration with personal danger. BreatheWise AI calculates actual inhaled lung deposition:
$$D_{\text{inh}} = C_{\text{ambient}} \times V_E \times t \times (1 - \eta_{\text{mask}})$$
Where $V_E$ is the minute ventilation rate (0.48 m³/h resting vs. 3.30 m³/h running) and $\eta$ is mask efficiency (95% for N95).

### C. Commute Exposure & Eco-Swap Simulator
Directly compares 6 urban transit modes (Open Two-Wheeler, Auto-Rickshaw, Public Bus, AC Cab, AC Metro, and Work-From-Home) across both **personal protection (inhaled µg saved)** and **civic sustainability (tailpipe kg CO2 avoided)**.

### D. Indoor Envelope & HEPA Purifier Coach
Models indoor particulate infiltration ratios ($\alpha \approx 0.45$ sealed) and calculates the required air purifier runtime (Clean Air Delivery Rate vs. room volume) to achieve 75% particulate clean-down.

---

## 3. Architecture & Tech Stack

```
+---------------------------------------------------------------------------------+
|                               SYSTEM ARCHITECTURE                               |
+---------------------------------------------------------------------------------+
|                                                                                 |
|   LAYER 1: TELEMETRY INGESTION (Zero API Key Friction)                          |
|   * Open-Meteo Air Quality API (Hourly Copernicus CAMS 0.25° Model)             |
|   * WAQI Ground Station Feed (CPCB Central Pollution Control Board Monitors)    |
|   * High-Reliability Localized Metro Fallback Cache                             |
|                                                                                 |
|   LAYER 2: DETERMINISTIC LOGIC & PHYSICS ENGINES (TypeScript)                   |
|   * windowSafe.ts: Boundary layer mixing and diurnal valley parser              |
|   * inhaledDose.ts: Physiological ventilation & mask filtration math            |
|   * commuteSwap.ts: Micro-environment exposure factors & carbon math            |
|   * indoorCoach.ts: Envelope infiltration ratios & purifier CADR ACH math       |
|                                                                                 |
|   LAYER 3: GROUNDED GENAI SYNTHESIS (Google Gemini 1.5 Flash)                   |
|   * Structured JSON Schema Output generation                                    |
|   * Injected real-time telemetry (Zero hallucinated numbers)                    |
|   * Strict safety guardrails: No medical diagnosis, conservative defaults       |
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

# Run development server
npm run dev

# Build for production
npm run build
```

---

## 5. Authoritative References & Scientific Standards
* **Central Pollution Control Board (CPCB), India:** National Air Quality Index (NAQI) Breakpoint Standards
* **World Health Organization (WHO):** Global Air Quality Guidelines (2021 Update)
* **US EPA:** Exposure Factors Handbook (Minute ventilation rates across human demographics)
* **Berkeley Earth:** Ambient Air Pollution & Cigarette Equivalence Mathematical Model

---

## 6. License
MIT License. Environmental data provided under non-commercial CC BY 4.0 by Copernicus Atmosphere Monitoring Service / Open-Meteo.
