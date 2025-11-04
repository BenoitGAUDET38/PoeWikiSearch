const form = document.getElementById('searchForm');
const input = document.getElementById('q');

// Pin banner logic
const pinBanner = document.getElementById('pin-banner');
const dismissBtn = document.getElementById('dismiss-pin-banner');
if (pinBanner && dismissBtn) {
  if (!localStorage.getItem('pinBannerDismissed')) {
    pinBanner.style.display = 'flex';
  }
  dismissBtn.addEventListener('click', () => {
    pinBanner.style.display = 'none';
    localStorage.setItem('pinBannerDismissed', '1');
  });
}

// Theme toggle logic
const themeToggle = document.getElementById('theme-toggle');
// Use user-provided icon files (now placed in the icons/ folder)
const LIGHT_ICON_PATH = 'icons/light_mode_icon_2.svg';
const DARK_ICON_PATH = 'icons/dark_mode_icon.svg';
function applyTheme(theme) {
  document.body.classList.remove('theme-dark', 'theme-light');
  if (theme === 'dark') document.body.classList.add('theme-dark');
  else if (theme === 'light') document.body.classList.add('theme-light');
  // update button icon and aria-pressed/label
  if (theme === 'dark') {
    // show light icon to indicate clicking will switch to light
    themeToggle.innerHTML = `<img src="${LIGHT_ICON_PATH}" alt="Switch to light theme" />`;
    themeToggle.setAttribute('aria-pressed', 'true');
    themeToggle.setAttribute('aria-label', 'Switch to light theme');
  } else if (theme === 'light') {
    // show dark icon to indicate clicking will switch to dark
    themeToggle.innerHTML = `<img src="${DARK_ICON_PATH}" alt="Switch to dark theme" />`;
    themeToggle.setAttribute('aria-pressed', 'true');
    themeToggle.setAttribute('aria-label', 'Switch to dark theme');
  } else {
    // auto: reflect current preference (show opposite icon as action)
    const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    themeToggle.innerHTML = isDark ? `<img src="${LIGHT_ICON_PATH}" alt="Switch to light theme" />` : `<img src="${DARK_ICON_PATH}" alt="Switch to dark theme" />`;
    themeToggle.setAttribute('aria-pressed', 'false');
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
  }
}

// initialize theme from localStorage
let savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || savedTheme === 'light') applyTheme(savedTheme);
else applyTheme(null);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = localStorage.getItem('theme');
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    applyTheme(next);
  });
  // allow double-click to reset to auto
  themeToggle.addEventListener('dblclick', () => {
    localStorage.removeItem('theme');
    applyTheme(null);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const raw = input.value.trim();
  if (!raw) return;

  const encoded = encodeURIComponent(raw).replace(/%20/g, '+');
  const url = `https://www.poewiki.net/index.php?search=${encoded}&title=Special%3ASearch&go=Go`;

  chrome.tabs.create({ url });
  window.close();
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') window.close();
});