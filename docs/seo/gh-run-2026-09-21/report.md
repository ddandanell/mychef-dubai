# Gray-hat on-site pass — myCHEF.ae

**Run:** `gh-mychef-ae-2026-09-21`  
**Blueprint:** Gray-Hat SEO Agent Master Blueprint v1.3-GH  
**Money site:** https://www.mychef.ae  
**Mode:** audit_and_deploy (on-site only)  
**Market:** AE / Dubai / English (`en-AE`)

## Authorization actually used

| Class | Status |
|---|---|
| On-site field engines (title already locked, twitter, lang, canonical) | Deployed |
| Lock lattice: one exact echo link from leak pages → owner | Deployed |
| Internet harvest from GSC | Harvested |
| Blog router / new posts | Not this pass |
| Reddit / LinkedIn / YouTube capture | **Refused** — draft-only, not authorized |
| Paid editorial / niche edits | **Refused** — no spend authorization |
| Satellites / expired domains / PBN | **Refused** — high-risk not authorized; user forbade URL changes |
| New money URLs | **Refused** — `allow_new_money_urls: false` |
| 12–22 exact-match stuffing on owners | **Refused** — SEO standard + writing system cap lock to title, H1, first 100 words, one H2 |
| Public `meta keywords` | **Refused** — default off |
| Fake reviews, cloaking, hidden walls, scraped republication | **Refused** — hard line |

Burn budget: not declared. Isolation: money site only. Blast radius: if the echo links look noisy, revert Home / Catering / Corporate / Festive anchors.

## GSC harvest (28d 2026-08-24 → 2026-09-20)

Lock leaks still live (query → Google’s top landing → contract owner):

| Seed | Impr | Landing | Owner | Route |
|---|---:|---|---|---|
| private chef dubai | 209 | `/` (160) | `/private-chef-dubai` | echo from home |
| yacht catering dubai | 156 | `/yacht-catering-guide-dubai` | `/yachts` | already echoed; keep |
| event catering dubai | 268 | `/catering-dubai` | `/events` | echo from catering hub |
| buffet catering dubai | 35 | `/catering-dubai` | `/buffet-catering-dubai` | echo from catering hub |
| christmas catering dubai | 23 | `/festive-catering-dubai` | `/christmas-catering-dubai` | echo from festive |
| corporate event catering dubai | 6 | `/corporate` | `/corporate-event-catering-dubai` | exact echo on hub |
| catering dubai | 282 | `/catering-dubai` | `/catering-dubai` | owner; home now echoes once |

No licensed SERP adapter in this session. Competitor HTML / autocomplete / PAA not pulled. Volume unknown except GSC impressions.

## Field engines this pass

- `<html lang="en-AE">` on the document and Helmet
- `twitter:card` already `summary_large_image`; added real `twitter:site` `@mychefdubai`
- `twitter:title` / description continue to match the title engine
- Canonical / robots unchanged
- No public keywords tag

## Lattice applied (visible, one sentence each)

- `/` → private chef Dubai, catering Dubai, event catering Dubai, yacht catering Dubai
- `/catering-dubai` → event catering Dubai, buffet catering Dubai
- `/corporate` → corporate event catering Dubai
- `/festive-catering-dubai` → Christmas catering Dubai
- `/yacht-catering-guide-dubai` already linked yacht catering Dubai → `/yachts`

## Render verify (localhost:5173, 21 Sep 2026)

| URL | Title / H1 | Echo | Head |
|---|---|---|---|
| `/` | owner home title + H1 | private chef / catering / event catering / yacht catering → owners | `lang=en-AE`, `twitter:site=@mychefdubai`, `twitter:card=summary_large_image`, no public keywords |
| `/catering-dubai` | `Catering Dubai \| Food Only to Full Event Support \| myCHEF` / H1 lock | event catering Dubai → `/events`; buffet catering Dubai → `/buffet-catering-dubai` | same card set |
| `/corporate` | contract title / Corporate Catering Dubai… | corporate event catering Dubai → spoke | same |
| `/festive-catering-dubai` | Festive Catering Dubai | Christmas catering Dubai → owner | same |
| `/yacht-catering-guide-dubai` | guide title / guide H1 (not the money H1) | yacht catering Dubai → `/yachts` | same |

`/catering-dubai` briefly failed to mount on this pass: the new echo sentence used a multi-line JS string and Vite refused the file (`Unterminated string constant`). Rewritten as JSX text. Re-checked: page title, H1, both lock anchors present.

Duplicate `<title>` in the client document (Helmet + `index.html`) is the known createRoot issue, not new. `document.title` is the contract title.

## What this will not do

It will not put myCHEF on page one by itself. The money queries sit at positions 18–54. Occupancy, paid editorial, and capture properties were not authorized. Measure owner click-share in 14 and 28 days.

After deploy: Request Indexing in GSC for `/best-catering-companies-dubai` (still Discovered-not-indexed; the MCP cannot press that button).
