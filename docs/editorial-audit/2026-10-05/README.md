# Website review — 5 October 2026

Review began at `15b8d2a2584be84f18b96d81e49949833f8659e2`; release base: `c40ac8bad4e11a3e57f3a91f4f92cb4b1ee8ef6c`. The owner requested review of Ryze's website suggestions, implementation and a direct push to GitHub. The restored private chef page is the baseline.

## Sources and limits

Reviewed the exposed Ryze website brief, scheduled website reviews, saved 41-class crawl audit, 46 SEO proposals and 12 control-queue summaries. The saved crawl was taken on 26 August; its October generation timestamp is not a fresh crawl. The proposal file is dated 14 September. Fresh Search Console and organic landing-page data were used as a relevance check; private account exports are not published in this repository.

Ryze's connected tools do not expose its native saved reports/recommendation queue. Help queries and the connected inbox did not provide that queue. This review therefore does not claim to have read every dashboard-only request or to have closed any native Ryze task. Clarity's returned sample was incomplete and consisted of one SEO-dashboard session; it was not used as evidence about customer behaviour.

`audit-requests.csv` records every saved crawl class and its current disposition. `seo-proposals.csv` records all 46 saved proposals. Existing accepted and rejected decisions are retained. The 15 open templates are checked against the current pages: two proposed phrases are already present, one page is intentionally parked, and the remaining templates lack sufficient current evidence or fit to justify changing approved copy. No ownership moves, medical results, cruise services or supplier claims are added.

## Changes

- The private chef overview has a sticky, four-link navigation to services, visit prices, questions and enquiries. Targets clear the fixed navigation, and links have 44-pixel tap areas. The restored hero, service choices, published rates and long-form guide remain available.
- A new enquiry FAQ explains what to include and distinguishes the initial reply target from availability review and a written proposal. Its answer uses the existing 9am–9pm Dubai-time policy. Visible FAQ and JSON-LD share the same source.
- Full catering hero copy and supporting-photo data load with catering pages. A small generated route/image index supports shared layout and social-image selection. Both local and Vercel builds regenerate that index from the same source.
- Plain editorial pages do not import ScrollTrigger just to follow a link. Animated pages register the plugin themselves; the navigation manager refreshes it when registered.
- Six articles now have explicit service destinations for their enquiry and WhatsApp handoff, including production catering for the film-production guide. All 58 active imported articles pass the service-owner checks.
- Authored article links use current destinations and the canonical www host. Source articles and generated copies are updated together, and modification dates reflect the changes. Existing redirects remain in place for external links.
- The fallback app shell clears its plain static title before React mounts, keeping enquiry pages and client navigation to one route title. The cleanup runs before React owns any head nodes.
- The concurrent sitemap additions in `c40ac8b` are checked against the live redirect contract. Both added URLs already redirect permanently; the sitemap keeps their current canonical destinations instead of advertising the old aliases.
- The current page records are regenerated, with an explicit review date supported by the generator. Date-free verification uses the committed snapshot date.

The shared entry bundle decreased from 702.05 to 593.65 kB, or 194.86 to 160.94 kB with Vite's gzip estimate. The private chef page's script/module-preload payload decreased from 1,139,281 to 1,031,250 bytes; the sum of locally gzipped files decreased from 317,903 to 284,156 bytes (10.62%). These are build-payload measurements, not a new Lighthouse score or a claim about field Core Web Vitals.

## Validation

The production build and complete Chromium prerender pass. There are 256 HTML pages: 201 indexable and 55 noindex support pages. The current HTML check validates 20,597 distinct per-page internal links and fragments, one title/H1/description/canonical per page, no duplicate IDs or titles, and no linked redirect aliases. The existing chef cluster canonical consolidation is retained.

SEO ownership and keyword locks, URL stability, parked pages, retirements, breadcrumbs, API packaging, article readiness, FAQ JSON-LD, the pricing engine and the rendered pricing contract pass. The rendered editorial check also confirms sitemap coverage, seeded article data and the analytics bootstrap.

Phone/desktop browser checks use the local production build, block outbound tracking and all POST requests, and do not submit enquiries or open WhatsApp. Their report covers the section links, visible enquiry form, client navigation, photos and eight representative page layouts. This is automated HTML coverage plus representative visual QA; it is not a claim that every paragraph on every page received a new human editorial review.

See `coverage.csv`, `rendered-pages.json`, `browser-validation.json`, `loading-payload.json` and `../../site-review/2026-10-05/public-pages.json` for the page evidence. Deployment and live checks are recorded in the release response; the commit's Vercel status is the deployment authority.
