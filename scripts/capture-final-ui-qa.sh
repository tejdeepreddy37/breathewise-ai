#!/bin/bash
set -e

BASE_DIR="/Users/ptejdeepreddy/.gemini/antigravity/scratch/breathewise-ai/artifacts/final-ui-qa"
mkdir -p "$BASE_DIR/desktop" "$BASE_DIR/mobile" "$BASE_DIR/features" "$BASE_DIR/interactions"

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
CHROME_FLAGS="--headless --disable-gpu --no-sandbox --user-data-dir=/tmp/chrome-test-profile-bw-rc"

echo "=== Capturing Desktop Suite ==="
"$CHROME" $CHROME_FLAGS --window-size=1440,900 --screenshot="$BASE_DIR/desktop/01_desktop_first_view.png" "http://localhost:4173/"
"$CHROME" $CHROME_FLAGS --window-size=1440,3600 --screenshot="$BASE_DIR/desktop/02_desktop_full_page.png" "http://localhost:4173/"
"$CHROME" $CHROME_FLAGS --window-size=1440,1800 --screenshot="$BASE_DIR/desktop/03_desktop_full_page_sections.png" "http://localhost:4173/#simulator"

echo "=== Capturing Mobile Suite ==="
UA_IPHONE="Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"
"$CHROME" $CHROME_FLAGS --window-size=390,844 --user-agent="$UA_IPHONE" --screenshot="$BASE_DIR/mobile/01_mobile_390_first_view.png" "http://localhost:4173/"
"$CHROME" $CHROME_FLAGS --window-size=390,4600 --user-agent="$UA_IPHONE" --screenshot="$BASE_DIR/mobile/02_mobile_390_full_page.png" "http://localhost:4173/"
"$CHROME" $CHROME_FLAGS --window-size=320,4800 --user-agent="$UA_IPHONE" --screenshot="$BASE_DIR/mobile/03_mobile_320_full_page.png" "http://localhost:4173/"
"$CHROME" $CHROME_FLAGS --window-size=390,1600 --user-agent="$UA_IPHONE" --screenshot="$BASE_DIR/mobile/04_mobile_full_page_sections.png" "http://localhost:4173/#indoor"

echo "=== Capturing Dedicated Feature Suite ==="
"$CHROME" $CHROME_FLAGS --window-size=1440,750 --screenshot="$BASE_DIR/features/01_air_intelligence.png" "http://localhost:4173/"
"$CHROME" $CHROME_FLAGS --window-size=1440,800 --screenshot="$BASE_DIR/features/02_atmospheric_diagnostics.png" "http://localhost:4173/"
"$CHROME" $CHROME_FLAGS --window-size=1440,1050 --screenshot="$BASE_DIR/features/03_daily_living_plan.png" "http://localhost:4173/"
"$CHROME" $CHROME_FLAGS --window-size=1440,1000 --screenshot="$BASE_DIR/features/04_windowsafe.png" "http://localhost:4173/"
"$CHROME" $CHROME_FLAGS --window-size=1440,1000 --screenshot="$BASE_DIR/features/05_commute_simulator.png" "http://localhost:4173/#commute"
"$CHROME" $CHROME_FLAGS --window-size=1440,1050 --screenshot="$BASE_DIR/features/06_indoor_air_coach.png" "http://localhost:4173/#indoor"
"$CHROME" $CHROME_FLAGS --window-size=1440,1100 --screenshot="$BASE_DIR/features/07_what_if_simulator.png" "http://localhost:4173/#simulator"
"$CHROME" $CHROME_FLAGS --window-size=1440,1050 --screenshot="$BASE_DIR/features/08_ai_assistant.png" "http://localhost:4173/#assistant"
"$CHROME" $CHROME_FLAGS --window-size=1440,1100 --screenshot="$BASE_DIR/features/09_methodology.png" "http://localhost:4173/?transparency=true"

echo "=== Capturing Interaction Suite ==="
# 01. City Change: Bengaluru (Clean air, green state)
"$CHROME" $CHROME_FLAGS --window-size=1440,1000 --screenshot="$BASE_DIR/interactions/01_city_change.png" "http://localhost:4173/?city=bengaluru-indiranagar"

# 02. Profile Change: Senior Asthmatic in Delhi
"$CHROME" $CHROME_FLAGS --window-size=1440,1000 --screenshot="$BASE_DIR/interactions/02_profile_change.png" "http://localhost:4173/?city=delhi-anand-vihar&profile=senior_respiratory"

# 03. WindowSafe Selection: Kolkata afternoon convection
"$CHROME" $CHROME_FLAGS --window-size=1440,1000 --screenshot="$BASE_DIR/interactions/03_windowsafe_selection.png" "http://localhost:4173/?city=kolkata-victoria"

# 04. Commute Comparison: Mumbai 25km AC Metro vs Bike
"$CHROME" $CHROME_FLAGS --window-size=1440,1000 --screenshot="$BASE_DIR/interactions/04_commute_comparison.png" "http://localhost:4173/?city=mumbai-bkc#commute"

# 05. Indoor Scenario: Chennai Maritime with Indoor Coach
"$CHROME" $CHROME_FLAGS --window-size=1440,1050 --screenshot="$BASE_DIR/interactions/05_indoor_scenario.png" "http://localhost:4173/?city=chennai-adyar#indoor"

# 06. Exposure Simulation: Outdoor Athlete Running in Delhi
"$CHROME" $CHROME_FLAGS --window-size=1440,1100 --screenshot="$BASE_DIR/interactions/06_exposure_simulation.png" "http://localhost:4173/?city=delhi-anand-vihar&profile=outdoor_athlete#simulator"

echo "=== All Screenshots Captured Successfully ==="
ls -lh "$BASE_DIR"/*
