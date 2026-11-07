# Safari-TV Guide

Unofficial English fan guide for [Safari-TV](https://store.steampowered.com/app/5118500/SafariTV/) (Steam AppID **5118500**), aimed at **safaritv.wiki**.

Not affiliated with Mercy Games, stre1itzia, Blue Ocean Games, Valve, or Steam. The site does not sell the game, redeem codes, or recover accounts.

## Build

```bash
npm install
npm run dev      # http://localhost:4329
npm run build
npm run preview  # http://localhost:4329
```

Node 22. The build is a static Astro site (`dist/`). `astro.config.mjs` sets `site` to `https://safaritv.wiki`.

## Layout

| Layer | Path | Role |
| --- | --- | --- |
| Site config | `sites/safari/site.config.ts` | Domain, Steam AppID, theme, nav |
| Ads | `sites/safari/ads.config.ts` | Adsterra Native Banner for this domain |
| Active site | `sites/active` → `safari` | What the build reads |
| Framework | `framework/` | Layout, SEO, ad slot |
| Content | `content/safari/` | Guide pages and JSON |
| Routes | `src/pages/` | Home, guide slug, 404 |

`analytics.gaId` is `G-3V3EVPD0Y2`, so the base layout loads GA4 on content pages. The Adsterra Native Banner after Quick Answer is enabled for this domain only. See [ADS.md](ADS.md).

Steam art lives in `public/images/official/steam/` with `ATTRIBUTION.txt`. This repository does not buy a domain, edit DNS, or deploy. Vercel can serve the static `dist/` output.

There is no codes page. The Steam store page and the announcements checked on 7 Nov 2026 do not describe a public redeem-code program. Contest keys and Discord tickets for streamers are quoted on the guide as those posts wrote them.

## Pages

- `/` — what the game is, and the 9 Nov 2026 Early Access date
- `/guide` — safari agency co-op overview
- `/truck` — the destructible physics truck and the unpublished upgrade list
- `/wildlife` — store wording and the animals in official screenshots
- `/coop` — 2–4 player co-op, tourists, and shared footage
- `/about` — disclaimer, privacy, image credits
- `/404`
