# Screaming Frog cleanup — myCHEF.ae

Crawl: `~/Desktop/frog mychef dubai` (2026-08-26, https://mychef.ae/)
Skill: `seo-technical` (+ `seo-hreflang` for the hreflang call)
Rule: fix what is safe. Do not rewrite the SEO contract, pad thin hubs, add CSP, or change live URLs that already rank.

## Decision filter

| Do | Skip (Frog noise or high risk) |
|----|--------------------------------|
| Duplicate robots, nofollow on noindex, homepage-canonicalised dead URLs, SPA 200s on missing files, internal UTM, missing security headers (except CSP), short /about /contact titles, H2 skip on /faq and /locations | Mass title/H1 truncation to 60 chars, URL underscore rewrites, image recompress, GSC-no-data, high WhatsApp outlinks, readability, thin blog topic hubs |

## Tracker

| ID | Status | Issue | Action |
|----|--------|-------|--------|
| F1 | done | Duplicate robots (`index,follow` in `index.html` + Helmet `noindex,nofollow`) | One robots tag in `SEO.tsx`. `noindex, follow` on utility pages. Remove static robots from `index.html`. |
| F2 | done | Hreflang `en-ae` on every URL, 262 missing x-default, 6 noindex return links | Removed hreflang. Single-language site. Kept `html lang="en"` and `og:locale en_AE`. |
| F3 | done | Catch-all rewrite serves prerendered homepage for missing paths (4 .webp as `text/html`, dead HTML canonicalised to `/`) | SPA fallback = shell `fallback.html`, not `index.html`. Extensionless only. Real 404 for missing files. NotFound `noindex, follow`. |
| F4 | done | 43 canonicalised URLs: dead slugs, unpublished locations, case-study children | 301 to the real owner. Never 301 those to `/`. |
| F5 | done | Internal links still point at dead slugs / unpublished `/locations/:slug` / `/case-studies/:slug` | Point links at live owners. `locationPath()` for unpublished areas. Case-study cards stay on `/case-studies`. |
| F6 | done | 212 robots.txt blocks, all `/inquiry` | Allow `/inquiry`. Keep `noindex, follow`. Keep `Disallow: /thank-you`. |
| F7 | done | Missing `X-Content-Type-Options`, `X-Frame-Options`, Referrer-Policy | Added those three. Skipped CSP. |
| F8 | done | 222 internal UTM URLs (overwrite GA sessions + duplicate crawl) | Stripped `utm_*` from internal `Link`/`href`. Kept WhatsApp/external as-is. |
| F9 | done | `/about` 27 chars, `/contact` 19 chars | About: contract title. Contact: modest length, no stolen primary. |
| F10 | done | `/faq` and `/locations` H2 after H3 | First heading after H1 is H2. |
| F11 | done | Missing image srcs served as HTML | Point at files that exist. Missing files 404 (F3). |
| SKIP | skipped | Title >60 / >561px (44–49 URLs) | Contract titles stay. |
| SKIP | skipped | Low-content `/blog/topic/*` | Hubs by design. |
| SKIP | skipped | Underscores, image KB, alt length, missing width/height, CSP, GSC empty, readability | Not this pass. |

## 301 map (F4)

### Dead service slugs → live owners

| From | To |
|------|----|
| `/catering` | `/catering-dubai` |
| `/yacht-catering-dubai` | `/yachts` |
| `/villa-catering-dubai` | `/villas-private-residences` |
| `/event-catering-dubai` | `/events` |
| `/luxury-dining-dubai` | `/luxury-dining-experiences` |
| `/private-dining-dubai` | `/private-chef-dubai` |
| `/dessert-table-dubai` | `/dessert-table-catering-dubai` |
| `/live-cooking-station-dubai` | `/live-cooking-stations-dubai` |

Do **not** 301 `/private-chef-dubai/our-chefs` — it is a real cluster child, canonical `/our-chefs`.

### Unpublished locations → `/locations`

`/locations/jumeirah-islands`, `/mirdif`, `/dubai-internet-city`, `/meydan`, `/dubai-harbour`, `/al-barari`, `/dubai-media-city`, `/dubai-creek-harbour`, `/jumeirah-golf-estates`, `/mall-of-the-emirates`, `/dwtc`, `/dubai-mall`, `/city-walk`

### Unpublished case-study children → `/case-studies`

`corporate-gala-dinner-downtown-dubai`, `product-launch-difc`, `family-eid-gathering-arabian-ranches`, `intimate-anniversary-dinner-palm-jumeirah`, `villa-wedding-reception-emirates-hills`, `yacht-birthday-celebration-dubai-marina`

## Verify

- `npx tsc -b --pretty false`
- `python3 scripts/verify-seo-contract.py`
- Dev server: `/about`, `/contact`, `/faq`, `/locations`, `/inquiry`, a published location, a dead slug (should 301 after deploy), NotFound
