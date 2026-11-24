#!/bin/bash
set -e

DIR="/Users/ptejdeepreddy/.gemini/antigravity/scratch/breathewise-ai/artifacts/visual-qa"
mkdir -p "$DIR"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

echo "=== 1. Desktop Initial Viewport (1440x900) ==="
"$CHROME" --headless --disable-gpu --window-size=1440,900 --screenshot="$DIR/01_desktop_viewport_1440x900.png" "http://localhost:4173/"

echo "=== 2. Desktop Full Page (1440x3600) ==="
"$CHROME" --headless --disable-gpu --window-size=1440,3600 --screenshot="$DIR/02_desktop_fullpage_1440x3600.png" "http://localhost:4173/"

echo "=== 3. Mobile Initial Viewport (390x844) ==="
"$CHROME" --headless --disable-gpu --window-size=390,844 --user-agent="Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1" --screenshot="$DIR/03_mobile_viewport_390x844.png" "http://localhost:4173/"

echo "=== 4. Mobile Full Page (390x4400) ==="
"$CHROME" --headless --disable-gpu --window-size=390,4400 --user-agent="Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1" --screenshot="$DIR/04_mobile_fullpage_390x4400.png" "http://localhost:4173/"

echo "=== 5. WindowSafe / Diurnal Hourly Forecast ==="
"$CHROME" --headless --disable-gpu --window-size=1440,1100 --screenshot="$DIR/05_windowsafe_hourly_forecast.png" "http://localhost:4173/"

echo "=== 6. Commute Simulator Tab ==="
"$CHROME" --headless --disable-gpu --window-size=1440,1100 --screenshot="$DIR/06_commute_simulator.png" "http://localhost:4173/#commute"

echo "=== 7. Indoor Air Coach Tab ==="
"$CHROME" --headless --disable-gpu --window-size=1440,1100 --screenshot="$DIR/07_indoor_air_coach.png" "http://localhost:4173/#indoor"

echo "=== 8. What-If Physiological Exposure Sandbox ==="
"$CHROME" --headless --disable-gpu --window-size=1440,1100 --screenshot="$DIR/08_whatif_simulator.png" "http://localhost:4173/#simulator"

echo "=== 9. AI Living Assistant Chat Tab ==="
"$CHROME" --headless --disable-gpu --window-size=1440,1050 --screenshot="$DIR/09_ai_assistant_chat.png" "http://localhost:4173/#assistant"

echo "=== 10. Transparency & Methodology Modal Drawer Open ==="
"$CHROME" --headless --disable-gpu --window-size=1440,1100 --screenshot="$DIR/10_transparency_methodology_drawer.png" "http://localhost:4173/?transparency=true"

echo "=== 11. Interaction State A: Bengaluru Clean Air + Outdoor Athlete Profile ==="
"$CHROME" --headless --disable-gpu --window-size=1440,1100 --screenshot="$DIR/11_interaction_bengaluru_clean_air_athlete.png" "http://localhost:4173/?city=bengaluru-indiranagar&profile=outdoor_athlete"

echo "=== 12. Interaction State B: Mumbai Coastal + Senior Asthmatic Profile ==="
"$CHROME" --headless --disable-gpu --window-size=1440,1100 --screenshot="$DIR/12_interaction_mumbai_coastal_asthmatic.png" "http://localhost:4173/?city=mumbai-bkc&profile=senior_respiratory"

echo "=== Visual QA Capture Complete ==="
ls -lh "$DIR"
