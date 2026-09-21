# HSEO-1.0 Wave 1 — myCHEF.ae

**Run:** `hseo-mychef-ae-2026-09-21`  
**Date:** 21 September 2026  
**Target:** https://www.mychef.ae  
**Market:** UAE / Dubai / English / AED  
**Blueprint:** Holistic SEO Agent Master Blueprint v1.0  
**Subprofile:** page-implementation plus site context (not a full 1,000-check holistic 100)  
**Mode this wave:** audit (12 parallel page-cluster agents) + first repair batch  
**Revision:** working tree; yacht/inquiry form edits already in progress were not overwritten

## Scope and access

| Item | Value |
|---|---|
| Inventory | 176 exact routes + 15 location slugs + 4 Ryze posts + 7 blog hubs ≈ 195 routed URLs |
| Live sitemap | 147 URLs, GSC 0 errors |
| GSC window | 24 Aug–20 Sep 2026 (28d): 212 clicks / 21,850 impressions / 0.97% CTR / pos 26.5 |
| Source of truth | `docs/seo/myCHEF-AE-SEO-STANDARD.json` + repo |
| New URLs | not authorized |
| Keyword locks | preserved |
| Provider Content / Authority scores | UNAVAILABLE |
| Origin CrUX | insufficient field data (API 404) |
| Keyboard / form-submit journeys | UNKNOWN this wave |

This is **not** a claim that all 1,000 registry checks were instantiated on every URL. Expensive rendered checks were stratified by template plus all priority pages, per Section 6. Unsampled unique checks remain UNKNOWN.

## Gates (site)

| Gate | Status | Why |
|---|---|---|
| G1 usable public pages | PASS on intended prerendered owners | Sampled hubs 200 with body copy |
| G2 index / canonical | **FAIL** | `/inquiry` empty shell, no robots; 4 Ryze URLs indexed against locked owners; several LOCKED pages parked/`noindex`; `/review` in sitemap while noindex |
| G3 mobile content | UNKNOWN | Lab mobile Lighthouse only; no device walkthrough |
| G4 claims | **FAIL** | Marco “15+ years”; FAQ offers Abu Dhabi; academy/influencer invented packages; wedding/private-dining price drift |
| G5 conversion | UNKNOWN | `/inquiry` is the primary CTA and is not prerendered |
| G6 keyboard | UNKNOWN | not tested |
| G7 keyword ownership | **FAIL** | Home beats `/private-chef-dubai` for `private chef dubai`; yacht guide owns `yacht catering dubai`; catering hub owns `event catering dubai` |
| G8 injection | PASS this wave | no edit introduced a secret or destructive route |

**Release status: BLOCKED** on G2 / G4 / G7. Conservative overall readiness is **capped at 79.9**. Uncapped cluster estimates sat in the mid-30s to mid-60s because UNKNOWN rows score 0.

## Provider outcomes (GSC, not a score)

Eight high-impression pages produced **12,549 impressions and 14 clicks** in 28 days:

| URL | Clicks | Impr | CTR | Pos |
|---|---:|---:|---:|---:|
| `/` | 54 | 2,585 | 2.1% | 15.3 |
| `/private-chef-dubai` | 37 | 2,668 | 1.4% | 12.2 |
| `/private-chef-dubai/pricing` | 19 | 1,222 | 1.6% | 11.7 |
| `/catering-dubai` | 4 | 4,636 | 0.09% | 48.7 |
| `/corporate` | 3 | 3,841 | 0.08% | 35.8 |
| `/yachts` | 2 | 1,004 | 0.20% | 40.5 |
| `/corporate-event-catering-dubai` | 0 | 1,003 | 0% | 61.4 |
| `/events` | 1 | 994 | 0.10% | 47.2 |

This is a **rank and ownership** problem on the catering/corporate/yacht hubs, not a missing-H1 problem. Titles already carry the locks.

Exact-lock mismatches (query → Google’s landing vs contract owner):

| Query | Lands on | Owner |
|---|---|---|
| private chef dubai | `/` (160 impr) | `/private-chef-dubai` (23 impr) |
| yacht catering dubai | `/yacht-catering-guide-dubai` | `/yachts` |
| event catering dubai | `/catering-dubai` | `/events` |
| christmas catering dubai | `/festive-catering-dubai` | `/christmas-catering-dubai` |
| buffet catering dubai | `/catering-dubai` | `/buffet-catering-dubai` |
| full time private chef dubai | `/private-chef-dubai` | `/full-time-private-chef-dubai` |

Brand queries are tiny and healthy (12 clicks / 38 impr / 31.6% CTR). Non-brand carries almost all impressions.

Full ownership tables: `docs/seo/hseo-run-2026-09-21/gsc-ownership.md`

## Lab performance (PageSpeed mobile, 21 Sep 2026)

Field data: unavailable on all five sampled URLs. Lab only:

| URL | Perf | LCP | FCP | TBT | CLS | SEO audit |
|---|---:|---:|---:|---:|---:|---:|
| `/` | 60 | 6.8s | 4.1s | 230ms | 0 | 100 |
| `/private-chef-dubai` | 56 | 6.9s | 4.1s | 370ms | 0 | 100 |
| `/catering-dubai` | 62 | 6.6s | 5.1s | 120ms | 0 | 100 |
| `/corporate` | 63 | 5.5s | 3.8s | 360ms | 0 | 100 |
| `/yachts` | 63 | 6.3s | 4.8s | 180ms | 0 | 100 |

Lighthouse SEO = tag hygiene, not rankings. LCP is a lab T10 risk (hero video/images, GTM, Ryze pixel). Do not treat this as field CWV failure.

## What is working

- HTTPS + www, 75/75 SEO-standard 301s implemented, sitemap clean
- Most commercial pages are prerendered with self-canonical, `index,follow`, one H1
- Dietary consolidation 301s match the contract (gluten-free → allergy-safe, etc.)
- School/nursery pages rank page 1 and convert; cooking classes is a quiet winner (10 clicks / 244 impr)
- Banned cheap/budget terms are not in titles/H1s
- About does not publish the unpublished chef names
- Location body copy is area-specific (not empty doorways); 11 area URLs are parked on purpose

## Highest-severity findings

1. **`/inquiry` is an empty SPA shell** (7 KB, no H1/canonical/robots). It is the sitewide quote CTA. G1/G2 fail for the conversion URL.
2. **Four Ryze blog posts are indexed and steal locked owners** (`private chef dubai`, `meal prep dubai`, `best catering companies`, private-chef cost). The locked `/best-catering-companies-dubai` is discovered-not-indexed.
3. **Keyword owners are losing their own queries** (home vs chef hub; yacht guide vs `/yachts`; catering vs events).
4. **Contract vs park list is a dual source of truth.** About 36 URLs are live `noindex` while the SEO standard still says LOCKED + index + sitemap.
5. **False or drifted claims:** Marco 15+ years; FAQ Abu Dhabi offer; chef’s-table / wedding / private-dining price strings disagree with `cateringPricing.ts`.
6. **Format-farm copy** on BBQ / canapé / grazing / dessert / live / cocktail / brunch.
7. **CorporateInventory** is shared across the hub and 13 spokes, so Google treats `/corporate-event-catering-dubai` as a weak duplicate (1,003 impr / pos 61).
8. **GSC leftover 404s** still exist: `/pricing`, `/private-chef-uae`, `/private-chef/dubai/pricing`, `/private-events-catering/baby-shower-catering/`.
9. **Household cluster URLs sit in the global Private Chef mega** against the SEO invariant.
10. **`/film-crew-catering-dubai` 301s to the event spoke**; production owns that intent and is unknown to Google.

## What this wave did not change

- No new URLs
- No unparking of the 36 parked URLs (needs an explicit park-vs-contract decision)
- No catering/corporate title rewrites (titles already match locks; positions are page 3–6)
- No yacht/inquiry form rewrite (already dirty in the working tree)
- Authority / outreach / experiments (A02, A04, A06, A07, U08) excluded

## First repair batch (this session)

See `change_ledger.jsonl`. Intended:

- Remove invented “15+ years” on Marco
- Stop villas title from using the sibling lock `private chef dubai`
- Stop FAQ from offering Abu Dhabi as a served market
- 301 leftover 404s and the four Ryze duplicates
- Point film-crew at `/production-catering-dubai`
- Send `X-Robots-Tag: noindex` on `/inquiry` and `/seo`
- Take household support URLs out of the global Private Chef menu

## Batch 2 (no URL changes) — applied 21 Sep 2026

Authorized after Wave 1. URLs, slugs, and live-owner 301s were not touched.

1. `/inquiry` now prerenders (still `noindex,follow`; CTA stays on `/inquiry`)
2. Homepage service card + footer no longer use exact-match `private chef dubai`
3. Yacht guide H1 stays the guide lock; commercial phrase links to `/yachts`
4. Corporate inventory hub H2s are hub-only; spokes keep their own slices
5. 36 parked URLs + `/review` set `index:false` / `in_sitemap:false` in the SEO standard; `/review` left the sitemap
6. `/best-catering-companies-dubai` inspected in GSC: still **Discovered — currently not indexed**. Request Indexing is not available via the API — click it in Search Console after deploy
7. Format-farm H2s rewritten on canapé, grazing, dessert, cocktail, baby shower, brunch (BBQ / live cooking already unique)

## Rollback

`git checkout --` on the files in this batch. Vercel redirects are reversible by removing the new `vercel.json` entries. Do not roll back if the only observed change is short-term ranking volatility.
