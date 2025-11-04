# PoEWiki Quick Search - Chrome Extension

## Installation (developer mode)
1. Create a folder and copy the project files into it (manifest.json, popup.html, popup.js, popup.css, and the `icons/` folder containing `icon48.png`, `icon128.png`, and any SVG icons like `light_mode_icon.svg` and `dark_mode_icon.svg`).
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" (top right).
4. Click "Load unpacked" and select the project folder.
5. The extension icon will appear in the extensions bar. Click it to open the popup and enter a search.

## Behavior
- Type your query and press Enter — a new tab will open with the PoEWiki search results page.
- Apostrophes and special characters are properly encoded (e.g., `Kaom's Heart` -> `Kaom%27s%20Heart`).