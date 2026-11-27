# BreatheWise AI — PromptWars Virtual Challenge 06 Submission

## A. Project Title
**BreatheWise AI**

## B. Tagline
*Don't just understand the air. Understand how to live in it.*

## C. Short Description (1-2 Sentences)
BreatheWise AI is an exposure-aware urban air intelligence web application covering all 36 Indian States and Union Territories that turns live Copernicus CAMS atmospheric telemetry and official CPCB NAQI standards into actionable commute, indoor ventilation, physical exertion, and AI-guided daily decisions.

## D. Full Description
Most air quality apps stop at reporting an index number (e.g., AQI 124) without answering what a resident should actually do next. BreatheWise AI bridges this **Actionability Chasm** by pairing live Open-Meteo / Copernicus CAMS atmospheric telemetry and official Indian CPCB NAQI calculations with five deterministic environmental physics engines and a grounded Google Gemini 2.0 Flash AI Advisor.

Across six dedicated workspaces—an interactive 3D Earth Landing Page, Air Intelligence Overview, Commute Intelligence, Indoor Air Intelligence, Exposure / What-If Analysis, and AI Advisor—users can inspect 24-hour diurnal pollution curves (`WindowSafe™`), compare real inhaled $\text{PM}_{2.5}$ ($\mu\text{g}$) and $\text{CO}_2$ ($\text{kg}$) across transit modes and city corridors, simulate room-level indoor air mass balance with HEPA purifier CADR and outdoor smog safety locks, calculate respiratory dose across activity levels and mask tiers, and ask personalized questions grounded in their selected health profile (`General Adult`, `Child / Pediatric`, `Elderly`, `Respiratory Sensitive`, `Outdoor Athlete`)—protected by an unconditional clinical triage guard.

## E. Problem
Urban residents across India face severe, rapidly shifting air pollution episodes driven by nocturnal thermal inversions, traffic corridors, seasonal biomass burning, and indoor cooking or incense sources. Existing tools fail them in three ways:
1. **The Actionability Chasm:** Raw AQI numbers or concentration values ($\mu\text{g/m}^3$) do not translate into personal decisions like *"Which 2-hour window is safest for a walk?"* or *"Should I open my apartment window right now?"*
2. **Concentration vs. Inhaled Dose Blindness:** People treat ambient $\text{PM}_{2.5}$ concentration as equal to personal risk, ignoring minute ventilation ($V_E$ triples during exercise) and micro-environment exposure (open two-wheelers experience street-level exhaust plumes vs. filtered AC Metro).
3. **Unsafe Generic Advice & Hallucination Risk:** Unconstrained AI chatbots can give dangerous advice (e.g., telling someone to open windows during high ozone/smog, or answering prescription inhaler dosage questions).

## F. Solution
BreatheWise AI solves this with a **physics-first, AI-synthesized architecture**:
1. **Deterministic Environmental Physics Tier:** Five pure TypeScript engines compute CPCB NAQI sub-indices, diurnal convective minimum windows (`WindowSafe™`), gross inhaled $\text{PM}_{2.5}$ dose ($M_{\text{inh}}$), single-zone indoor mass-balance concentrations with strict safety ceilings, and corridor-aware commute exposure & $\text{CO}_2$ tradeoffs.
2. **State → District → City Intelligence:** Covers all 36 Indian States & UTs plus custom location search, backed by Open-Meteo / Copernicus CAMS live telemetry with a 15-minute LocalStorage cache and honest provenance states (`Live CAMS`, `Cached CAMS`, `Calibrated Baseline`, `Unavailable`).
3. **Grounded AI Advisor + Clinical Triage Guard:** Integrates Google Gemini 2.0 Flash (via optional session-only key) with a deterministic offline fallback. Every response is grounded in live city telemetry, active health profile, and active workspace scenario state, while an unconditional pre-LLM triage filter intercepts medical/medication queries and directs users to licensed healthcare professionals.

## G. Key Features
* **3D Earth Landing Experience:** Full-screen Three.js interactive globe hero with atmospheric glow and direct entry into the dashboard.
* **Air Intelligence Overview:** Live CPCB NAQI, dominant pollutant breakdown ($\text{PM}_{2.5}$, $\text{PM}_{10}$, $\text{NO}_2$, $\text{O}_3$), weather telemetry, 24-hour diurnal AQI curve, and clickable Health & Actionable Insights.
* **Commute Intelligence:** Origin → Destination corridor selector with draft-vs-committed `Analyze Commute` pipeline comparing `Bike`, `Car`, `Bus`, and `Metro` for route AQI, inhaled $\text{PM}_{2.5}$ ($\mu\text{g}$), percentage savings vs. private cab, and $\text{CO}_2$ avoided ($\text{kg}$).
* **Indoor Air Intelligence:** Single-zone steady-state mass-balance simulator for room dimensions, ACH ventilation, indoor pollution sources (`Cooking / Frying`, `Incense / Dhoop`, `Candles`), and purifier CADR—enforcing automatic window-seal safety locks when outdoor $\text{PM}_{2.5} > 60\,\mu\text{g/m}^3$ or $\text{O}_3 > 100\,\mu\text{g/m}^3$.
* **Exposure / What-If Analysis:** Physiological dose calculator combining US EPA minute ventilation rates ($6\text{--}65\,\text{L/min}$), session duration, ambient/custom $\text{PM}_{2.5}$, and mask tiers (`None`, `Cloth`, `Surgical`, `N95`, `N99`) with a side-by-side comparison bar chart.
* **AI Advisor:** Grounded conversational assistant with 5 one-click quick questions, session-only Gemini 2.0 Flash API key configuration, 100% deterministic offline fallback, and unconditional clinical triage refusal.
* **Health Profile & Scientific Provenance:** 5 vulnerability profiles (`General Adult`, `Child / Pediatric`, `Elderly`, `Respiratory Sensitive`, `Outdoor Athlete`) and an interactive **Scientific Methodology & Telemetry Provenance** modal.

## H. Innovation
* **Physics-Bounded AI (Zero-Hallucination Safety Architecture):** Rather than letting an LLM guess AQI math or recommend opening windows into smog, deterministic physics engines compute all numbers and safety ceilings first, and the AI Advisor synthesizes strictly within those bounds.
* **Honest Telemetry Provenance:** Explicitly distinguishes live Copernicus CAMS grid data from cached data, calibrated baselines, and unavailable states—never fabricating fake live sensor numbers.
* **Actionable Unit Translation:** Converts abstract $\mu\text{g/m}^3$ ambient readings into personal inhaled $\mu\text{g}$ of $\text{PM}_{2.5}$ and civic $\text{kg CO}_2$ saved per commute.

## I. Technology Stack
* **Frontend:** React 18.3.1, TypeScript 5.6.3, Vite 5.4.11
* **Styling:** Tailwind CSS 3.4.15
* **3D & Charts:** Three.js 0.187.0, Recharts 2.13.3, Lucide React 0.460.0
* **AI:** Google Gemini 2.0 Flash (`@google/generative-ai` 0.21.0) + deterministic rule-based fallback
* **Data:** Open-Meteo Air Quality (Copernicus CAMS $0.25^\circ$ grid) & Weather APIs
* **Testing & Hosting:** Node.js engine test suite (`256 Passed, 0 Failed`), GitHub Pages (`https://tejdeepreddy37.github.io/breathewise-ai/`)

## J. Impact
* **For Urban Families & Sensitive Groups:** Helps parents of asthmatic children, elderly residents, and outdoor athletes pick safer diurnal activity windows and mask protection based on real inhaled dose rather than guesswork.
* **For Daily Commuters:** Quantifies both personal lung protection ($\mu\text{g PM}_{2.5}$ avoided) and climate co-benefits ($\text{kg CO}_2$ saved) of shifting from private cars or open two-wheelers to AC Metro transit.
* **For Indoor Living:** Prevents unintended indoor air degradation by blocking window ventilation during high-smog or high-ozone hours and sizing HEPA purifier response to cooking or incense events.

## K. Limitations & Responsible Use
* **Regional Grid Resolution:** Open-Meteo Copernicus CAMS provides $0.25^\circ \times 0.25^\circ$ (~25 km) atmospheric model reanalysis/forecasts, not hyper-local street-level hardware sensor readings.
* **Model Assumptions:** Indoor air estimates use a single-zone well-mixed mass-balance approximation ($\alpha = 0.45$ closed envelope infiltration); real-world mask efficiency depends on facial fit and seal integrity.
* **Non-Medical Disclaimer:** BreatheWise AI is an informational exposure-planning tool and does not provide medical diagnosis, prognosis, or medication dosing advice. Acute respiratory symptoms require licensed medical care.

## L. Verified Links
* **Live Deployment:** [https://tejdeepreddy37.github.io/breathewise-ai/](https://tejdeepreddy37.github.io/breathewise-ai/)
* **GitHub Repository:** [https://github.com/tejdeepreddy37/breathewise-ai](https://github.com/tejdeepreddy37/breathewise-ai)
* **Verification Suite:** `npm test` (`256 Passed, 0 Failed`) and `npm run build` (`tsc && vite build`)
