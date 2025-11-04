# PoEWiki Quick Search - Chrome Extension

Light, fast popup to search https://www.poewiki.net/ from your browser toolbar.

## Files in this repo
- `manifest.json` — extension manifest (Manifest V3).
- `popup.html`, `popup.css`, `popup.js` — popup UI, styles and behaviour.
- `icons/` — contains PNG and SVG icons used by the extension (toolbar icon and theme icons).
- `PRIVACY_POLICY.md` — privacy policy to include in your Web Store listing.
- `LICENSE` — MIT license for this project.

## Installation (developer mode)
1. Create a folder and copy the project files into it (including the `icons/` folder).
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" (top right).
4. Click "Load unpacked" and select the project folder.
5. The extension icon will appear in the extensions bar. Click it to open the popup and enter a search.

Note: If you move or rename the `icons/` folder, update the paths in `manifest.json`, `popup.html`, and `popup.js` accordingly.

## Usage
- Open the extension popup by clicking the extension icon in the toolbar.
- Type your query and press Enter — a new tab opens with PoEWiki search results.
- Example: `Kaom's Heart` will be encoded as `Kaom%27s%20Heart` and sent to PoEWiki.

## Keyboard shortcut
The extension defines a keyboard shortcut command (configured in `manifest.json`).
- Default suggested key: Alt+W. Some systems or browsers reserve certain shortcuts; if Alt+W doesn't work, open `chrome://extensions/shortcuts` and set the shortcut manually for "PoE Wiki Search → Activate the extension".

## Pinning suggestion
The popup shows a small, dismissible banner that suggests users pin the extension for quick access. The banner is dismissible and remembers your choice (stored in localStorage).

## Theme (dark / light / auto)
- The extension auto-detects the system theme using `prefers-color-scheme` and applies a dark theme automatically when appropriate.
- A theme toggle button appears in the popup header. Single-click toggles between Dark and Light; double-click resets the theme to Auto (follow system preference).
- The chosen theme is stored in `localStorage` under the `theme` key (`"dark"`, `"light"`, or absent for auto).

## Privacy & data storage
- The extension only opens PoEWiki search pages and does not send any data to external servers.
- Local preferences stored in the browser (`localStorage`):
	- `theme` — user-selected theme choice.
	- `pinBannerDismissed` — whether the pin suggestion banner was dismissed.
- See `PRIVACY_POLICY.md` for the full privacy policy text.

## Permissions
- `tabs` — used only to open a new tab with the search results. No other permissions are requested.

## Publishing notes
- When publishing to the Chrome Web Store, provide a publicly hosted URL to the privacy policy in the Web Store dashboard (you can host `PRIVACY_POLICY.md` as a raw file on GitHub Pages or your website).

## Troubleshooting
- If icons or styles don't appear correctly after editing files, reload the extension at `chrome://extensions/` (click Reload).
- If the keyboard shortcut doesn't work, visit `chrome://extensions/shortcuts` and assign the desired shortcut.
- To debug the popup, open the popup and then right-click → Inspect to open DevTools for the popup.

## Contributing
- Pull requests are welcome. Please follow the MIT license terms in `LICENSE`.

## Contact
- For questions or bug reports, update the repository issues or contact: [your-email@example.com]

## License
This project is licensed under the MIT License — see the `LICENSE` file for details.