# BreatheWise AI — 90-Second Reproducible Competition Demo Script

**Live URL:** [https://tejdeepreddy37.github.io/breathewise-ai/](https://tejdeepreddy37.github.io/breathewise-ai/)  
**Preparation:** Open the live URL at `1440×900` (no API key required — the entire Air Day Twin, Robustness, Decision-Flip, Observation Anchoring, and Deterministic AI brief run reproducibly out-of-the-box). Select **Delhi — Anand Vihar** in the Location Picker for the strongest pollution contrast.

---

### 0:00 – 0:15 | The Problem & 3D Earth Entrance
* **Action:** Start on the **3D Earth Landing Page**, click **`Enter Air Intelligence →`**, and select **Delhi — Anand Vihar** in the top-right Location Picker (`Overview` shows Live CAMS / Calibrated CPCB NAQI).
* **Narration:**  
  *"Air pollution changes dramatically hour by hour, but people cannot cancel work, school, or commutes. Legacy AQI apps only show a single number—they don't plan your day around the air or test whether their advice survives real-world uncertainty."*

---

### 0:15 – 0:30 | Air Day Twin — Optimization Under Real Constraints
* **Action:** Click **`Day Twin`** in the left sidebar. Point to the **Baseline Day** (`Urban Commuter & Runner`, e.g., `1853.4 µg` live CAMS or `3007.2 µg` winter baseline) and fixed `9 AM–12 PM` / `1 PM–5 PM` work blocks. Click **`Optimize My Day →`**.
* **Narration:**  
  *"Meet **Air Day Twin**. Using EPA minute-ventilation rates, commute corridor factors, and indoor mass-balance math, clicking **Optimize My Day** shifts our flexible 6 AM run into the cleaner 12 PM dispersion window, upgrades road commutes to AC Metro, and enables indoor HEPA filtration—cutting cumulative daily inhaled PM₂.₅ by 51–60% and saving 0.92 kg CO₂, without touching fixed work hours."*

---

### 0:30 – 0:45 | Robustness Test (Self-Challenging Decisions)
* **Action:** Point to the **Robustness Test** card (`ROBUST`, `9/9 (100%)`, Median Saving, Worst Case).
* **Narration:**  
  *"Instead of blindly trusting one forecast, BreatheWise stress-tests its own plan across nine deterministic perturbations—scaling ±25%, ±2-hour diurnal shifts, contrast flattening, and an adverse combined scenario. Our recommendation wins 9 out of 9 scenarios and classifies as **ROBUST**."*

---

### 0:45 – 1:00 | Shape-Based Decision Boundary (`k ∈ [0, 1.5]`)
* **Action:** Point to the **Decision Boundary (Shape k)** `LineChart` (`Flip @ k≈0.004`).
* **Narration:**  
  *"Uniform scaling doesn't change which hour is cleanest—diurnal shape does. Sweeping contrast parameter k from 0 to 1.5 shows the exact modeled boundary where the recommendation flips, proving why midday dispersion drives the decision."*

---

### 1:00 – 1:15 | Real-World Observation Anchoring & Reset
* **Action:** In **Anchor Local Reading**, click the first **Demo Input** (`0.40× @ 6 AM`) to show live recalculation of exposure, robustness, and whether the decision changed or survived, then click **`Reset`** to restore the exact original model.
* **Narration:**  
  *"When a user enters a local sensor reading at 6 AM, BreatheWise validates it within bounded limits (0.33×–3.0×), applies circular 24-hour decay without mutating the original model, and reruns the entire optimization, robustness, and boundary pipeline—honestly reporting whether the decision flips or survives."*

---

### 1:15 – 1:30 | Evidence, Grounded AI Advisor & Closing
* **Action:** Expand **`Evidence, Mathematical Assumptions & Provenance (9 Scenarios)`** briefly, then click **`"What makes this plan robust?"`** to jump to **`AI Advisor`** with the computed Day Twin summary grounded in the response.
* **Narration:**  
  *"Every number is traceable in the Evidence table, and our AI Advisor explains the exact Robustness, Boundary, and Observation results—with a strict Clinical Triage Guard protecting medical safety. BreatheWise AI: an environmental decision system that plans your day, stress-tests itself, and adapts to real-world evidence."*
