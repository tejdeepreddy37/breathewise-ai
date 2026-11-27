# BreatheWise AI — 3-Minute Live Demo Script

**Target Duration:** ~3:00 (180 seconds)  
**App URL:** [https://tejdeepreddy37.github.io/breathewise-ai/](https://tejdeepreddy37.github.io/breathewise-ai/)  
**Preparation:** Open the live URL in a desktop browser (`1440×900` or full screen). No API key is required—the deterministic physics and AI engine works out-of-the-box (optionally add a Gemini API key in AI Advisor settings beforehand if demonstrating live LLM synthesis).

---

### 0:00 – 0:25 | Hook & 3D Earth Landing Page
* **On Screen:** Start on the **3D Earth Landing Page**.
* **Action:** Briefly orbit or let the animated Earth globe and orbital rings sit cleanly in frame.
* **Narration:**  
  *"Every air quality app tells you a number—like AQI 124—but leaves you guessing what to do next. Can my child walk outside this evening? Should I take the Metro instead of a cab? Should I open my apartment windows right now? Meet **BreatheWise AI**—an exposure-aware decision intelligence assistant built for urban living across all 36 Indian States and Union Territories."*
* **Transition:** Click **`Enter Air Intelligence →`**.

---

### 0:25 – 0:55 | Air Intelligence Overview & Location / Profile Context
* **On Screen:** **Overview** workspace (`#overview`).
* **Action:**
  1. Point to **Current AQI**, **Key Pollutants (µg/m³)**, **Weather**, and the **AQI Trend (Last 24 Hours)** area chart.
  2. Click the top-right **Location Pill** (`Bengaluru, Karnataka`) to briefly show the **State → District → City** selector (e.g., switch or keep Bengaluru), then point to the **Health Profile** dropdown in the left sidebar (`Child / Pediatric` or `General Adult`).
  3. Click the **Science / Lab** icon button next to `Live CAMS` in the sidebar to briefly show the **Scientific Methodology & Telemetry Provenance** modal, then close it.
* **Narration:**  
  *"Here in **Overview**, BreatheWise pulls live Copernicus CAMS atmospheric telemetry and computes official Indian CPCB NAQI sub-indices. We can see the exact dominant pollutant driver, 24-hour diurnal trend, and the lowest-exposure activity window—all transparently labeled with live data provenance and tailored to the selected Health Profile."*

---

### 0:55 – 1:30 | Commute Intelligence (Corridor & Mode Tradeoffs)
* **On Screen:** Click **`Commute`** in the left sidebar (`#commute`).
* **Action:**
  1. Select **Origin** and **Destination** (e.g., `HSR Layout` → `Electronic City`), select **`Car`** or **`Bike`**, then switch to **`Metro`** and click **`Analyze Commute →`**.
  2. Point to **Route Comparison** (Selected vs. Baseline), **Commute Exposure Estimate** (Inhaled Dose in `µg` and `%` Exposure Savings), and the bottom **Recommendation** bar showing `kg CO2` saved.
* **Narration:**  
  *"In **Commute Intelligence**, we move beyond ambient AQI to real inhaled dose. Choosing a corridor like HSR Layout to Electronic City and clicking **Analyze Commute** compares open two-wheelers, private cabs, buses, and Rapid AC Metro—showing both the exact micrograms of PM2.5 you avoid inhaling and the kilograms of CO2 saved."*

---

### 1:30 – 2:00 | Indoor Air Intelligence (Mass-Balance & Safety Ceilings)
* **On Screen:** Click **`Indoor`** in the left sidebar (`#indoor`).
* **Action:**
  1. Show **Room Setup** (`Bedroom`, `12 m²`, `2.8 m`, `0.5 (Sealed)`).
  2. Change **Indoor Source** from `None` to **`Cooking / Frying`** (and toggle **Using Air Purifier** on/off) so the **Indoor Air Analysis** gauge, **Modeled PM2.5**, **Scenarios & Impact** (`With Ventilation`, `With Purifier`), and **Insight** card update immediately.
* **Narration:**  
  *"**Indoor Air Intelligence** runs a single-zone steady-state mass-balance model. When we simulate indoor cooking or incense, BreatheWise updates modeled indoor PM2.5 and purifier impact in real time—while enforcing strict outdoor smog and ozone safety ceilings so it never recommends opening windows into hazardous outdoor air."*

---

### 2:00 – 2:30 | Exposure / What-If Analysis (Physiological Dose)
* **On Screen:** Click **`Exposure`** in the left sidebar (`#exposure`).
* **Action:**
  1. Show **Scenario Inputs** (`Activity`, `Duration`, `Air Quality (PM2.5)`, `Mask Protection`).
  2. Switch **Activity** (e.g., `Outdoor Walk` → `Outdoor Running`) or **Mask Protection** (`None` → `N95 (≈95%)`) and point to **Exposure Results** (`µg` inhaled dose), the **Scenario Comparison** bar chart, and the **Takeaway** banner.
* **Narration:**  
  *"In **Exposure / What-If Analysis**, BreatheWise applies US EPA minute ventilation rates to show how activity intensity and mask filtration change what actually enters your lungs—comparing unmasked vs. N95-protected inhaled mass in clear micrograms."*

---

### 2:30 – 3:00 | AI Advisor, Clinical Triage Guard & Closing
* **On Screen:** Click **`AI Advisor`** in the left sidebar (`#advisor`).
* **Action:**
  1. Click the first **Quick Question** (`"Is it safe to exercise today?"`) and highlight the grounded reply citing the active city, AQI, PM2.5, optimal window, and selected Health Profile.
  2. Type a clinical/medication question (e.g., `"Should I take 2 puffs of my inhaler?"`) and submit to demonstrate the **Clinical Triage Guard** ethical refusal.
* **Narration:**  
  *"Finally, our **AI Advisor** grounds every answer in your live city telemetry, health profile, and active scenario—powered by Google Gemini 2.0 Flash with a 100% deterministic offline fallback. And if a user asks for prescription dosing or reports acute symptoms, an unconditional **Clinical Triage Guard** intercepts it before any LLM call and directs them to licensed medical care. BreatheWise AI: don't just understand the air—understand how to live in it."*
