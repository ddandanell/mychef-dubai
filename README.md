# myCHEF Dubai

The production website for [myCHEF](https://www.mychef.ae): managed household chefs, private dining and event catering in Dubai.

## Start here

- [Project knowledge and editorial audit](docs/editorial-audit/2026-09-22/README.md)
- [One JSON record per URL](docs/seo/page-records/_index.json)
- [SEO ownership contract](docs/seo/myCHEF-AE-SEO-STANDARD.json)
- [Frozen URL inventory](docs/seo/url-inventory.json)

## Development

```bash
npm ci
npm run dev
npm run build
npm run build:prerender
```

The app uses React 19, TypeScript, Vite, React Router, Tailwind and GSAP. Vercel runs the configured production build on `main`. The prerender step produces HTML for indexable pages and support pages; `/thank-you` remains a client route. Local prerendering requires a Puppeteer-compatible Chrome installation. Vercel uses the bundled Chromium package.

## Content ownership

| Content | Source |
| --- | --- |
| Routes | `src/routes.tsx` |
| Bespoke pages | `src/pages/` |
| Shared page copy and prices | `src/content/` |
| Homepage sections | `src/sections/` |
| Location detail | `src/data/locations.ts` |
| Handoff articles | `src/content/seo-pages/`, mapped by `src/content/seo/routes.json` |
| Comparison articles | `blog/data/`; run `node scripts/ryze-convert.mjs` |
| Search title/description overrides | `src/content/seoAuditOverrides.ts` |
| Keywords, canonicals and page roles | `docs/seo/myCHEF-AE-SEO-STANDARD.json` |
| Deployment redirects | `vercel.json` |

Do not edit generated comparison JSON, keyword locks or breadcrumb maps independently of their source. Most legacy SEO JSON bodies are no longer rendered on commercial pages. Check the route and component before editing them.

## Editorial principles

Use clear, considered British English. Explain the service, inclusions, venue needs and next step. Keep recurring household cooking distinct from one-off events. Preserve published rates and contract terms; do not infer new promises from a headline price. Treat the 15-minute target as an initial reply during 9am–11pm Dubai time. A proposal follows review of the brief and availability.

Do not invent chef experience, certifications, client results, independent rankings, search volumes or guarantees about allergens. Comparison guides identify myCHEF as their publisher. Medical diets, institutional food policies and venue permissions require case-specific confirmation.

## Regenerate and check

```bash
node scripts/ryze-convert.mjs
npm run seo:locks
npm run seo:breadcrumbs
npm run sitemap:generate
npm run build:prerender
python3 scripts/generate-page-records.py
python3 scripts/generate-page-records.py --check
npm run verify:seo-contract
npm run verify:keyword-locks
npm run verify:retirements
npm run verify:parked
npm run verify:urls
npm run test:catering-pricing
npm run test:yacht-quote
npm run test:catering-inquiry
```

The sitemap excludes redirects, parked pages and noindex topic hubs. Regeneration preserves existing modification dates; update a page’s sitemap date when its content materially changes. Article dates come from the article source.

The September 2026 audit records validation results and known pre-existing lint/parser limitations. Do not interpret a source-text parser warning as proof that a rendered page is missing metadata; inspect the prerendered HTML.
