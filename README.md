# romiopshub
Activision UPDATES of Call Of Duty GAMES



# romiopshub — Ops Update Hub

An unofficial, fan-built hub that gathers every official **Call of Duty** update — across the **Black Ops** and **Modern Warfare** lines, from *Black Ops (2010)* all the way to *Black Ops 7* — into one clean, fast, cinematic place.

It was built out of pure love for the game: one hub, every update, always locked and loaded. All links route to Activision's **official** support pages, so the information stays current straight from the source.

> **Disclaimer:** This is an independent fan project. It is **not affiliated with, endorsed by, or connected to Activision**. All game names, logos, and trademarks belong to their respective owners.

---

## What it does

- **Every title in one grid** — 11 Call of Duty titles, each on its own card with year, studio, franchise, and live/legacy/upcoming status.
- **Full briefing per game** — click any title to open a detailed dossier with:
  - **Patch Notes** — highlights and the latest update status
  - **Ranks & Prestige** — max rank, prestige levels, matchmaking notes, and tier rewards
  - **Reward Support** — what carries in and out of each title across Warzone & Call of Duty HQ
  - **Roadmap** — what's live now and what's coming
  - **Feedback & Bug Report** — direct routes to Activision's official channels
- **Account & security help** — a side menu covering 2FA, linking platform accounts, password/sign-in, RICOCHET anti-cheat, enforcement & bans, and support policies — each linking to the exact official article.
- **Search & filters** — find any title by name, year, or studio, and filter by Black Ops / Modern Warfare / Live / Legacy / Upcoming.

## Languages

The whole experience is fully translated and works **offline** (no server needed) in:

🇬🇧 English · 🇩🇪 German · 🇪🇸 Spanish · 🇫🇷 French · 🇮🇹 Italian · 🇵🇹 Portuguese · 🇯🇵 Japanese · 🇨🇳 Simplified Chinese · 🇹🇼 Traditional Chinese · 🇰🇷 Korean

Pick a language from the top-right selector — the cards, menus, game briefings, and even the support links redirect to the matching Activision locale.

## Design & feel

- Cinematic dark theme with a drifting tri-colour neon backdrop and blurred weapon artwork floating behind the page.
- Smooth, elegant motion: cursor-tracking 3D card tilt, a card flip that reveals the briefing, and scroll-based reveals.
- Fully responsive — built to look sharp on phones, tablets, laptops, and desktops, and it respects reduced-motion preferences.

## How it's built

Plain **HTML, CSS, and JavaScript** — no build step, no framework install, nothing to compile. Just static files you can open in a browser or drop onto any static host.

| File | Purpose |
| --- | --- |
| `index.html` | The whole site — this is what loads |
| `support.js` | Runtime helper the page needs |
| `i18n.js` | Interface translations + Activision link localizer |
| `translations.js` | Card, menu, and label translations |
| `dossier-i18n.js` | Deep game-briefing translations (DE, ES, FR, IT, PT) |
| `dossier-i18n2.js` | Deep game-briefing translations (JA, ZH, ZH-TW, KO) |
| `image-slot.js` | Drag-and-drop image placeholder component |
| `uploads/` | All the game and weapon artwork |

> Keep every file next to `index.html` and keep the images inside the `uploads/` folder — the site loads them by relative path.

## Run it locally

Just open `index.html` in your browser. That's it. (For the language redirects and images to behave exactly like the live site, serving it through any simple static server works best.)

## Deploy

The repo is ready to host as-is on any static host (Netlify, GitHub Pages, Vercel, etc.). On Netlify: import this repo, leave the build command empty, set the publish directory to the project root, and deploy.

---

Made with love for every operator who dropped in at 3 A.M., held the line, and chased one last Prestige. 🎯
