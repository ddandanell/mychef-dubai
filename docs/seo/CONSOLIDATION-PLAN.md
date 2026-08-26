# myCHEF.ae — URL consolidation plan

Owner brief (26 Aug 2026): concentrate authority into fewer, stronger commercial pages; keep only URLs that carry a genuinely different intent; do it in stages so nothing that reacts to something else breaks.

Machine-readable map: [`consolidation-map.json`](./consolidation-map.json). Procedure: `scripts/retire-url.py` + `scripts/verify-retirements.py`.

---

## 1. What shipped on 26 Aug 2026

### Phase 1 — the duplicated page bug (priority zero)

Every commercial page carried a second article under it: **"The details"** — 8–22 collapsed sections of researched copy (`SeoContent`) appended by the layout on 151 of 220 URLs, 1,900–6,800 words each, restating the page above it (another pricing block, another location block, another FAQ). It was in the HTML, not hidden by CSS, so Google read two documents per URL.

Fixed at the component, not per page:

- `SeoContent` unmounted from `Layout.tsx` and deleted. `SeoHead` (title/meta owner on non-`SKIP` routes) and `HandoffPage` (full-page blog routes) are untouched.
- `scripts/prerender.ts` no longer inlines the 10–15 KB `window.__SEO__` payload on commercial pages — only HandoffPage routes still seed from it.
- Measured before removal: no page drops below ~470 words of its own content (`/romantic-dinner-dubai` 568, `/locations` 715, package pages ~830). Nothing goes thin.

**Coupling found and fixed:** the prerenderer took its route list *from the sitemap*. The committed sitemap was stale versus its generator; regenerating it (correctly) drops six `noindex` pages — `/privacy-policy`, `/terms`, `/site-map`, three nested private-chef modules — and they would silently have shipped as the empty SPA shell. `readRoutes()` is now `sitemap ∪ static routes in routes.tsx`.

### Redirect #4, finished properly

`/private-chef-dubai/pricing → /private-chef-prices-dubai` was already in `vercel.json` (commit `046ccf8`) but half-done: the SPA route still rendered on in-app clicks, ten cluster links and five FAQ links pointed through the 301, and the **household-plan calculator** (a lead form) lived only on the retired route. Now:

- `PriceCalculator` + `PlanTermsDigest` render on `/private-chef-prices-dubai#calculator` with a household `Service` schema node; breadcrumb is Home › Private Chef Dubai › Prices.
- `CLUSTER_PATHS.pricing` is the flat URL — one constant, every cluster link follows.
- Route, page file, handoff JSON and HTML-sitemap entry removed.

### Phase 2 — the three obvious duplicates

| From | To | Content carried over |
|---|---|---|
| `/party-catering-dubai` | `/private-party-catering-dubai` | "Bachelor, Bachelorette & Baby Showers", "Yacht & Marina Parties" use cases; intro now owns *party catering in Dubai*; breadcrumb → Events |
| `/finger-food-catering-dubai` | `/canape-catering-dubai` | "Finger Food & Sharing Platters", "Office & Networking Bites"; nav item and duplicate icon removed |
| `/film-crew-catering-dubai` | `/production-catering-dubai` | "Feature Films & Commercials", "Night Shoots & Wrap Meals"; title now *Film, TV & Photo Crews* |

Retired primaries became subkeywords of the survivor in the SEO contract (`docs/seo/myCHEF-AE-SEO-STANDARD.json`); no FAQ was ported — destination pages already carry 20+ FAQs (see §5).

### Legacy redirects, made consistent

`vercel.json` had 35 redirects, but the tree still contained **~60 internal links through them** (`/event-catering-dubai` ×16, `/villa-catering-dubai` ×10, `/luxury-dining-dubai` ×7 …) and **6 quarantined regulated-sector pages still routed in the SPA**. All links now point at the destination; dead routes and page files are gone; every redirect is recorded in the contract's `redirects[]`. Two Villas cards and three prose links that could only point at the `/locations` hub became plain text.

Sitemap: 220 → 211 URLs, `lastmod` refreshed.

---

## 2. The dependency map (what reacts to what)

One URL on this site lives in **nine** places. Retiring it by hand misses some every time.

| Signal | Where | Consequence if stale |
|---|---|---|
| Server 301 | `vercel.json` | none — but nothing else follows automatically |
| SPA route | `src/routes.tsx` | in-app clicks render a page the server 301s away; `tsc` fails on the orphaned lazy import |
| XML sitemap | `public/sitemap.xml` ← `scripts/generate-sitemap.ts` (reads routes.tsx, excludes redirect sources) | redirected URL advertised as canonical; **prerender used this as its route list** |
| HTML sitemap | `src/pages/SiteMap.tsx` | link through a 301 |
| Internal links | `src/**` — nav clusters, `navIcons.ts`, `data/locations.ts`, cluster constants, page arrays, FAQ markdown, handoff JSON | crawl budget through 301s, mixed canonical signals |
| Silo module | `src/content/siloMap.json` ← `scripts/generate-silo-map.py` (suppresses redirect sources) | "You May Also Like" renders a retired URL |
| SEO contract | `docs/seo/myCHEF-AE-SEO-STANDARD.json` — `pages[]`, `redirects[]`, `canonical_overrides`, `internal_linking` | `verify:seo-contract` passes while the site contradicts it |
| Handoff data | `src/content/seo/routes.json`, `seo-pages/*.json`, `SKIP_SEO_HEAD_ROUTES` | dead payload; `SeoHead` fetch for a route that no longer exists |
| Keyword locks | `privateChefCluster.ts`, `experiencesCluster.ts` | a retired page still "owns" a primary |

`scripts/retire-url.py` touches all of these in one pass and refuses redirect chains or non-live destinations. `scripts/verify-retirements.py` (also `npm run verify:retirements`, `--live` for HTTP checks) fails the ship if any signal disagrees.

**Release gate, in order:** `npx tsc -b` → `verify:seo-contract` → `audit-onpage.py` → `verify:retirements` → `npm run build:prerender` → deploy → `verify:retirements --live`.

---

## 3. Evidence available (and not)

| Source | State on 26 Aug 2026 |
|---|---|
| Google Search Console | **No access.** The service account sees `mychef.id`, not `mychef.ae`. Owner must add `~/.config/claude-seo/service-account.json`'s client email as a Full user on the `mychef.ae` property. This is the gate for Phases 3–5. |
| Bing Webmaster | `www.mychef.ae` verified. ~5 impressions/day site-wide; `/dubai-catering-prices-guide` (16 imp), `/` (30 imp), one click each on `/` and `/healthy-catering-dubai`. Too small to veto, useful as a tiebreaker. |
| Vercel Web Analytics | Not enabled on `mychef-dubai-vite` (API: "Web Analytics not found"). Enabling it is free and gives per-path traffic for the next phases. |
| GA4 | `G-26YM3CE8CB` wired with WhatsApp/lead events — no API route from this environment. |
| Ahrefs / Semrush | Ahrefs Site Explorer and Keywords Explorer both "Insufficient plan"; Semrush out of API units. No volumes; the 19 Aug map records none either. |

Rule: no row in Phases 3–5 is executed until GSC has been checked for that URL. `retire-url.py` does not know about traffic; the human running it must.

---

## 4. Phases 3–5 (planned, not executed)

Full list with reasons in `consolidation-map.json`. Summary:

- **Phase 3 — celebration micro-pages → `/private-party-catering-dubai`** (bachelor, bachelorette, engagement, anniversary, pool, beach, housewarming, graduation, farewell, reunion, Father's Day, picnic); `/kids-birthday → /birthday`; `/holi → /indian-catering-dubai` (consultant named two destinations — cuisine is the closer one); stations (`/shawarma-station`, `/oyster-bar`, `/dessert-cart`) → `/live-cooking-stations-dubai`; `/coffee-tea-service → /catering-dubai`; `/mocktail-bar → /bar-services-dubai` *after* bar-services is rebuilt as the one bar page. **Before executing:** add the section list (pool parties, engagements, anniversaries, graduations, housewarmings, bachelor/bachelorette, family celebrations) to the private-party page so the intents keep a home.
- **Phase 4 — extreme dietary → `/allergy-safe-catering-dubai`** (gluten-free, dairy-free, nut-free, sugar-free, FODMAP) after that page gets dedicated gluten/dairy/nut/special-requirement sections; `/pescatarian`, `/keto → /cuisines-dubai`. **Hold** `/healthy-catering-dubai`: it has the only Bing click on the site.
- **Phase 5 — seasonal, support, locations.** Valentine's → romantic dinner (release its lock in `experiencesCluster.ts`), Mother's Day / Easter / Halloween → private party, CNY → Asian, staff-meals absorbs corporate-meal-prep. Locations: **measured on the 26 Aug build — the 15 location pages are not copies** (median pairwise 5-word-shingle overlap 0.03, ~5% shared boilerplate, 840–1,040 words each), so do not consolidate them; rewrite the strong ones (Palm villas + yachts, DIFC corporate, Marina apartments + yachts) and judge the rest on GSC. Support pages: decision rule, page by page.

Target end state: roughly 60–100 indexable pages where every page has a job — Home; Private Chef (prices, how it works, chefs, full-time, part-time, meal prep); Catering (weddings, birthdays, private parties, corporate, BBQ, buffet, canapés, live stations, grazing, drop-off); Cuisines; Events; Corporate; Seasonal; Dining; strong Locations; Guides/Blog/About/Contact.

---

## 5. Open items for the owner

1. **GSC access** — the single blocker for everything above.
2. **Enable Vercel Web Analytics** on the project (free tier) so future decisions have per-path traffic.
3. **FAQ bloat** — most commercial pages carry 20–21 FAQs (6 original + ~15 appended in an earlier pass), against the brief's 5–8. Trimming is a content decision per page, not a template fix; the FAQPage schema follows the array automatically.
4. **Nested private-chef modules** (`/our-chefs`, `/quality-training`, `/privacy-security`, `/how-your-plan-works` under `/private-chef-dubai/`) are `noindex` + canonical to flat owners and are still linked from the cluster nav. They now prerender correctly; whether they should exist at all is the same decision rule.
5. The **parallel session** (Screaming Frog pass, `docs/seo/frog-fix-tracker.md`) rewrites whole files from stale reads; during this work it resurrected five deleted pages once. Its F4/F5 items (301 map, links to live owners) are now done by this pass; its F8 (strip internal UTM) is in progress and compiles.

---

## 6. Keyword map, backlog and locks (added 26 Aug, later the same day)

`docs/seo/keyword-map/` holds the local research layer: the **map** (`index.html` — every URL's locked primary, subkeywords, live placement with per-keyword scores, doubles, cannibalisation risk), the **backlog** (`backlog.html` — researched phrases no page owns yet, grouped by suggested page), the autocomplete harvest, and `fill-subkeywords.py`, which filled every page's slots from the pool under strict rules (see its README). The contract is now projected into code: `npm run seo:locks` writes a KEYWORD LOCK header into every page component and `src/content/keywordLocks.ts`; `npm run verify:keyword-locks` fails on drift. Add both to the release gate in §2.

## 7. The rule for any future URL

> Do not create another indexable URL unless it represents a materially different user intent from every existing URL. If an existing page can satisfy the intent with a section, add the section. If two URLs satisfy the same intent, keep the stronger page, merge the useful content, `retire-url.py` the weaker one, and let `verify-retirements.py` prove the four signals agree.
