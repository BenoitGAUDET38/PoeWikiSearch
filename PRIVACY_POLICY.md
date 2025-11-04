Privacy Policy — PoE Wiki Search

Last updated: November 4, 2025

Summary

PoE Wiki Search is a small Chrome extension that opens a search query on https://www.poewiki.net/ from a popup. This extension does not collect or transmit personal data to any server. It only opens pages on the PoE Wiki and stores a small amount of non-personal UI preferences locally.

What this extension does

- Opens a new browser tab to perform a search on PoE Wiki when you submit the popup form.
- Uses the Chrome `tabs` permission to open search results in a new tab.
- Stores a few preferences locally in `localStorage` on the user's browser:
  - Theme preference ("dark", "light", or absent for automatic system preference).
  - Whether the pin-suggestion banner has been dismissed.

What we do NOT collect

- We do not collect or transmit any personally identifiable information (PII).
- We do not collect browsing history, search terms, email addresses, or other personal data.
- We do not use analytics, crash-reporting tools, or third-party tracking services.

Network access and third-party sites

- The extension constructs a PoE Wiki search URL and opens it in a new tab. The search query content is sent only to the PoE Wiki site (https://www.poewiki.net/) when the user submits a search.
- Any content, cookies, or interactions on PoE Wiki pages are handled by that site and are subject to their privacy policy.

Permissions

- "tabs": required only to open a new tab with the search results page.

Storage and retention

- Preferences are stored locally in your browser's `localStorage` and remain until you clear site data or uninstall the extension.
- No data is transmitted to us or any external service by the extension.

Security

- The extension only includes static assets packaged with it (icons, HTML, CSS, JS). Be sure to install from a trusted source or the Chrome Web Store.

Contact

If you have questions about privacy or this extension, contact: [your-email@example.com]

Publishing notes for the developer

- To add this privacy policy to your Chrome Web Store listing, upload the policy file to a publicly accessible URL (for example, host it on your website or GitHub Pages) and add that URL in the "Privacy policy" field of the Chrome Web Store developer dashboard when publishing the extension.
- Alternatively, include this `PRIVACY_POLICY.md` in the repository and provide a link to the raw file hosted on a public Git hosting service.

Changes to this policy

We may update this privacy policy from time to time. The "Last updated" date at the top will indicate when changes were made.
