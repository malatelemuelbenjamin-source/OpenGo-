# OPENNOW GOVERNMENT — introduction website

**KNOW BEFORE YOU GO.**
Check First. Travel Smarter. Save Time.

The public introduction website for OpenNow Government, an independent digital initiative under
BetterGo Marinduque. It teaches citizens what to check before visiting a government office and
presents how a participating office could publish schedules, official availability, service status,
and announcements.

> **Stage:** introduction website only. There is no backend, database, staff accounts, live
> availability engine, booking, or personal-data collection. Every office status, schedule, and
> announcement on this site is **sample / demonstration data** and is labelled as such.

## Stack

- Vite 6 + React 19 + TypeScript (strict)
- Hand-written CSS with design tokens (`src/styles.css`); no UI framework, no runtime dependencies
  beyond React
- Static output in `dist/` — deployable to any static host

## Structure

```
index.html              SEO, Open Graph, Twitter, JSON-LD (WebSite / WebPage / FAQPage)
public/
  favicon.svg           Brand mark
  og-image.png          1200×630 social preview
  robots.txt            Public indexing
  sitemap.xml           Single-page sitemap (production URL)
  _headers              Security + cache headers (Cloudflare Pages / Netlify format)
scripts/generate-og.mjs Regenerates og-image.png (optional `sharp` dependency, not installed)
src/
  main.tsx              Entry point
  App.tsx               Section order
  site.ts               Brand, contact channels, BetterGo link, nav + footer links
  searchIndex.ts        Site-only search index and matcher
  content/
    faqs.ts             FAQ copy (also mirrored into FAQPage structured data)
    guides.ts           Eight transaction preparation guides
  components/           One file per section or feature
  styles.css            Design system + all section styles
```

### Editing content

- **Brand, contact, links, navigation:** `src/site.ts`. Contact channels are `null` on purpose and
  render a “to be published” state instead of invented details. `site.betterGo.url` is the single
  source for every BetterGo link.
- **SEO / social metadata:** `index.html`. The canonical URL, Open Graph URL, and image URLs point at
  the planned production origin. Update all of them together if the domain changes.
- **FAQ:** `src/content/faqs.ts`, plus the matching `FAQPage` entries in `index.html`. Keep the two
  in sync — mismatched structured data is an SEO/trust problem.
- **Sample data:** office boards, statuses, announcements, and scenarios live inside their section
  components and are deliberately marked demo/sample.

## Run

```bash
npm install
npm run dev        # http://localhost:3002
npm run typecheck  # tsc --noEmit
npm run build      # typecheck + production build to dist/
npm run preview    # serve the production build
```

## Deploy

Everything in `dist/` is a complete static site. Three common paths:

- **Vercel:** import the repository (or run `vercel`). `vercel.json` sets the Vite build, `dist`
  output, clean URLs, CSP/security headers, and immutable caching for `/assets/*`.
- **Netlify:** connect the repo (build `npm run build`, publish `dist`), or drag `dist/` into the
  dashboard. `public/_headers` is copied into the build and applied automatically.
- **Cloudflare Pages:** build `npm run build`, output `dist`; `_headers` is supported natively.
- **Any other static host:** upload the contents of `dist/` and add the headers from
  `public/_headers` (or `vercel.json`) in the host dashboard if it does not read `_headers`.

## Deployment checklist

1. `npm ci && npm run build`; confirm `dist/index.html`, hashed `dist/assets/*`, `robots.txt`,
   `sitemap.xml`, `_headers`, `favicon.svg`, `og-image.png`.
2. Confirm the production origin (`https://opennow.bettergomarinduque.com`) **before** publishing.
   The domain is not configured or verified yet; do not announce it as live until it resolves over
   HTTPS. DNS changes need explicit authorization from the domain owner.
3. Update `index.html` (canonical, `og:url`, `og:image`, `twitter:image`, JSON-LD `@id`/`url`) and
   `public/robots.txt` + `public/sitemap.xml` if the domain differs.
4. Serve over HTTPS with the root as the document root (the build assumes `base: "/"`).
5. Keep `_headers` if the host supports it (Cloudflare Pages, Netlify). The CSP allows Google Fonts
   and inline style attributes used by React; it blocks form submissions and framing. On hosts
   without `_headers` support, configure the same headers in the host dashboard.
6. Re-run the shared-link preview check (Facebook Sharing Debugger / Messenger composer) after the
   domain is live, and cache-bust `og-image.png` if it changes.
7. No environment variables or secrets are required. Do not add any to this client bundle.

## Known limitations

- The production subdomain is a planned target, not a live deployment. Nothing has been deployed.
- `bettergomarinduque.com` (the BetterGo initiative link) does not resolve publicly yet.
- Contact channels are unset; the feedback form validates input in the browser and sends nothing.
- No live government data exists; all boards are labelled demonstration content.
- Fonts load from Google Fonts (an external request that receives the visitor IP). No analytics or
  tracking scripts are installed.
- `scripts/generate-og.mjs` needs `sharp` (install with `npm i --no-save sharp`).

## Recommended next phase

The government availability management platform: authorized office accounts, schedule and
availability publishing with audit timestamps, verification workflow, announcement lifecycle, a
public read API, and a real feedback intake with moderation — built server-side, with D1/Postgres and
authentication, keeping this site's public vocabulary (OPEN / OUT OF OFFICE / LIMITED SERVICE /
ESTIMATED RETURN vs CONFIRMED SCHEDULE) as the contract.
