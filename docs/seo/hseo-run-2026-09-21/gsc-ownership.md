# C01–C03 GSC ownership audit — myCHEF.ae

**Audit only.** No site source was edited. Figures are Google Search Console Search Analytics only. No keyword-tool volumes.

| Field | Value |
|---|---|
| Property | `https://www.mychef.ae/` |
| 28-day window | 2026-08-24 → 2026-09-20 |
| 90-day context | 2026-06-23 → 2026-09-20 (labeled separately) |
| Search type | `web` |
| Keyword lock | `docs/seo/myCHEF-AE-SEO-STANDARD.json` → `pages[*].intent_owner.primary_keyword` |
| Lock size | 226 page objects; 204 with a primary; 0 primary collisions |
| Queried | 2026-09-21 (Search Console MCP `query_search_analytics`) |

## Source limits (read before the tables)

- Search Analytics returns **top rows only**. Default API sort is clicks, then leftover slots fill alphabetically — not by impressions.
- Google **anonymizes** many queries. Site totals therefore do not equal the sum of revealed query rows.
- 28-day site total: **212 clicks / 21,850 impressions / 0.97% CTR / pos 26.5**.
- 28-day `query+page` dump (`row_limit` 1000): **1,000 pairs, 49 clicks / 12,875 impressions**. The missing ~163 clicks sit on queries Google did not reveal.
- 28-day `page` dump: **133 URLs** (complete enough for the page tables below).
- 28-day `query` dump: **100 queries** — useful for brand split of *revealed* queries, not a full demand list.
- Owner path = the **`pages` object key**, not `url` (some keys are `REDIRECTED` and `url` points at the destination).
- Mismatch = GSC landing path ≠ locked owner path for that **exact** primary. Near-matches are noted, not scored as lock hits.

---

## 28-day site totals

| Window | Clicks | Impr | CTR | Avg pos |
|---|---:|---:|---:|---:|
| 28d 2026-08-24 → 2026-09-20 | 212 | 21,850 | 0.97% | 26.5 |
| 90d 2026-06-23 → 2026-09-20 *(context)* | 310 | 37,987 | 0.82% | 28.9 |

The last 28 days are **68% of 90-day clicks** and **58% of 90-day impressions**. Click-through improved vs the prior 62 days; the impression base is still mostly UAE commercial queries sitting on page 3–6.

---

## Query ownership table (exact locked primary only)

Queries in the 28-day `query+page` dump that **exactly equal** a locked `primary_keyword`. Metrics are summed across every landing that received that query. **Landing** = highest-impression URL for that query. **Mismatch** = that top landing ≠ owner, or a material share of impressions sits off-owner.

| Query | Clicks | Impr | Pos (top landing) | Landing (top) | Intended owner | Mismatch? |
|---|---:|---:|---:|---|---|---|
| catering dubai | 0 | 282 | 54.2 | `/catering-dubai` | `/catering-dubai` | **yes** — 86 of 282 impr leak to `/catering-packages-dubai`, `/corporate`, `/events` |
| event catering dubai | 0 | 268 | 52.0 | `/catering-dubai` | `/events` | **yes** |
| corporate catering dubai | 0 | 250 | 37.3 | `/corporate` | `/corporate` | **yes** — 67 of 250 impr leak to `/corporate-event-catering-dubai` + checklist + `/catering-dubai` |
| private chef dubai | 5 | 209 | 18.7 | `/` | `/private-chef-dubai` | **yes** — home 160 / owner 23 / pricing 26 |
| yacht catering dubai | 1 | 156 | 40.8 | `/yacht-catering-guide-dubai` | `/yachts` | **yes** |
| cocktail party catering dubai | 0 | 60 | 21.4 | `/cocktail-party-catering-dubai` | `/cocktail-party-catering-dubai` | **yes** — owner is strongest, but `/party-catering-dubai`, `/events`, `/private-party-catering-dubai` still rank |
| buffet catering dubai | 0 | 35 | 32.7 | `/catering-dubai` | `/buffet-catering-dubai` | **yes** — owner only 2 impr |
| private chef dubai *(owner row)* | 2 | 23 | 47.7 | `/private-chef-dubai` | `/private-chef-dubai` | no *(shown so the owner row is visible)* |
| christmas catering dubai | 0 | 23 | 27.0 | `/festive-catering-dubai` | `/christmas-catering-dubai` | **yes** |
| breakfast catering dubai | 0 | 13 | 31.5 | `/office-catering-dubai` | `/breakfast-catering-dubai` | **yes** |
| diwali catering dubai | 0 | 11 | 7.6 | `/diwali-catering-dubai` | `/diwali-catering-dubai` | no |
| festive catering dubai | 0 | 11 | 16.5 | `/festive-catering-dubai` | `/festive-catering-dubai` | no |
| indian catering dubai | 0 | 9 | 36.9 | `/diwali-catering-dubai` | `/indian-catering-dubai` | **yes** |
| school catering dubai | 1 | 8 | 11.0 | `/school-catering-dubai` | `/school-catering-dubai` | no |
| corporate event catering dubai | 0 | 6 | 38.8 | `/corporate` | `/corporate-event-catering-dubai` | **yes** |
| full time private chef dubai | 1 | 3 | 2.3 | `/private-chef-dubai` | `/full-time-private-chef-dubai` | **yes** |
| business lunch catering dubai | 0 | 3 | 25.5 | `/business-lunch-catering-dubai` | `/business-lunch-catering-dubai` | **yes** — 1 impr on `/corporate` |
| baby shower catering dubai | 0 | 1 | 16.0 | `/events` | `/baby-shower-catering-dubai` | **yes** |

Homepage lock `mychef dubai` does **not** appear as an exact GSC query in this dump. Brand variants that *do* appear (`my chef`, `mychef`, `my chef dubai`, `mychef catering`) land on `/` — see brand split.

`private chef dubai monthly` (6 clicks / 21 impr / pos 3.9 → `/private-chef-dubai`) is a **subkeyword** of the private-chef hub, not a second primary. Not scored as a mismatch.

---

## High-impression, low-CTR pages (28d, impr > 400, CTR < 1%)

From the 28-day `page` dimension (133 URLs). Homepage (2,585 impr, 2.09% CTR) and `/private-chef-dubai` (2,668 impr, 1.39% CTR) miss the CTR cut.

| Page | Clicks | Impr | CTR | Pos | Locked primary |
|---|---:|---:|---:|---:|---|
| `/catering-dubai` | 4 | 4,636 | 0.09% | 48.7 | catering dubai |
| `/corporate` | 3 | 3,841 | 0.08% | 35.8 | corporate catering dubai |
| `/yachts` | 2 | 1,004 | 0.20% | 40.5 | yacht catering dubai |
| `/corporate-event-catering-dubai` | 0 | 1,003 | 0.00% | 61.4 | corporate event catering dubai |
| `/events` | 1 | 994 | 0.10% | 47.2 | event catering dubai |
| `/yacht-catering-guide-dubai` | 1 | 795 | 0.13% | 51.5 | yacht catering guide dubai |
| `/wedding-catering-menu-planning-dubai` | 1 | 762 | 0.13% | 28.1 | wedding menu planning dubai |
| `/luxury-dining-experiences` | 2 | 514 | 0.39% | 27.6 | private dining experience dubai |

These eight URLs account for **12,549 impressions and 14 clicks** (0.11% CTR). They are the C02 / C03 problem set: the hubs rank widely, almost never get the click, and several locked primaries resolve to a sibling instead of the owner.

Just under the 400-impr line but the same pattern: `/yacht-catering-checklist-dubai` (270 / 0%), `/corporate-catering-checklist-dubai` (265 / 0%), `/locations` (237 / 0%), `/bbq-catering-dubai` (227 / 0.88%).

---

## Possible cannibalization (same query, 2+ landings)

231 queries in the 1,000-row `query+page` dump hit 2+ URLs. Below are the **impression-material** cases (28d). Page lists are landing / impr / clicks / pos.

| Query | Impr | Pages | Split | Intended owner |
|---|---:|---:|---|---|
| home chef | 2,146 | 5 | `/private-chef-dubai` 1,795/0/7.5 · `/private-chef-dubai/pricing` 342/0/8.6 · `/` 7/0/11 | none (nearest: `/private-chef-dubai`) |
| corporate catering | 406 | 4 | `/corporate` 244/0/34 · `/corporate-event-catering-dubai` 93/0/67 · checklist 63/0/53 | `/corporate` *(primary is the Dubai-modifier form)* |
| catering dubai | 282 | 4 | `/catering-dubai` 196/0/54 · packages 55/0/64 · `/corporate` 29/0/51 · `/events` 2 | `/catering-dubai` |
| event catering dubai | 268 | 3 | `/catering-dubai` 194/0/52 · `/events` 72/0/40 · corporate-event 2 | `/events` |
| corporate catering dubai | 250 | 4 | `/corporate` 183/0/37 · corporate-event 64/0/60 · checklist 2 · `/catering-dubai` 1 | `/corporate` |
| catering in dubai | 226 | 4 | `/catering-dubai` 221/0/48 · `/corporate` 3 | `/catering-dubai` *(near)* |
| catering services dubai | 217 | 2 | `/catering-dubai` 216/0/48 · `/corporate` 1 | `/catering-dubai` *(near)* |
| catering company dubai | 212 | 2 | `/catering-dubai` 182/0/56 · `/corporate` 30/0/76 | `/catering-dubai` *(near)* |
| private chef dubai | 209 | 3 | `/` 160/2/18.7 · pricing 26/1/44.9 · `/private-chef-dubai` 23/2/47.7 | `/private-chef-dubai` |
| home catering dubai | 177 | 4 | `/catering-dubai` 104/1/47 · packages 71/0/88 | `/catering-dubai` *(near)* |
| hire michelin chef | 174 | 5 | `/` 55 · `/private-chef-dubai` 49 · `/our-chefs` 37 · `/locations` 28 · pricing 5 | none |
| boat party catering | 137 | 2 | `/yachts` 81/0/32 · yacht-guide 56/0/67 | `/yachts` *(subkeyword: yacht party catering dubai)* |
| corporate breakfast catering | 127 | 2 | `/corporate` 125/0/30 · `/office-catering-dubai` 2 | `/corporate` / `/breakfast-catering-dubai` |
| corporate event catering | 125 | 3 | `/corporate` 84/0/42 · `/corporate-event-catering-dubai` 39/0/26 · `/events` 2 | `/corporate-event-catering-dubai` |
| buffet catering | 109 | 5 | `/catering-dubai` 78/0/24 · `/corporate` 19 · `/buffet-catering-dubai` 9/0/12 | `/buffet-catering-dubai` |
| business meeting catering | 104 | 2 | `/corporate` 81/0/23 · corporate-event 23/0/68 | `/corporate` |
| event catering services dubai | 91 | 2 | `/catering-dubai` 68/0/48 · `/events` 23/0/70 | `/events` |

**Highest-priority cannibal pair:** `private chef dubai` — homepage outranks the locked owner (pos 18.7 vs 47.7) and takes 160 of 209 impressions. The SEO standard already records this fight (homepage primary was moved to `mychef dubai` on 2026-08-28). Google has not finished the swap.

**Highest-priority hub leak:** `event catering dubai` — `/catering-dubai` (194 impr, pos 52) beats `/events` (72 impr, pos 40). Owner has the better position and still loses the impression share.

**Yacht cluster:** `yacht catering dubai` lands on the **guide**, not `/yachts`. `boat party catering` / `boat catering` split `/yachts` vs `/yacht-catering-guide-dubai` vs `/yacht-catering-checklist-dubai`.

Residual indexed/redirect URLs still taking impressions in 28d: `/party-catering-dubai` (65 impr / 2 clicks), `/corporate-catering-dubai` (70 / 1). Both are recorded 301s in the standard.

---

## Brand vs non-brand (28d)

Brand rule used: query contains `mychef`, `my chef`, or `myCHEF` (case-insensitive). No invented brand list.

### Revealed queries (`query` dimension, top 100)

| Bucket | Queries in this dump | Clicks | Impr | CTR | Notes |
|---|---:|---:|---:|---:|---|
| Brand | 4 | 12 | 38 | 31.6% | `my chef` 6/23 pos 1.2; `mychef` 3/8 pos 1.5; `mychef catering` 2/3 pos 2.0; `my chef dubai` 1/4 pos 2.0 |
| Non-brand (revealed, clicked) | 26 | 36 | — | — | See clicked non-brand list in the 28d query dump |
| Site total (includes anonymized) | — | 212 | 21,850 | 0.97% | Brand is **5.7% of site clicks** and **0.17% of site impressions** |

Brand landings in `query+page`: `/` takes `my chef` (6/23), `mychef` (2/8), `mychef catering` (2/3), `my chef dubai` (1/4). Leaks: `my chef` → `/private-chef-dubai` (1/3 pos 29.7); `mychef` → `/how-it-works` (1/1 pos 2).

Homepage lock `mychef dubai` is the right owner for this brand set. CTR on brand is healthy; volume is tiny.

### 90-day brand context *(not the scoring window)*

| Query | Clicks | Impr | CTR | Pos |
|---|---:|---:|---:|---:|
| my chef | 7 | 52 | 13.5% | 7.4 |
| mychef | 6 | 23 | 26.1% | 1.7 |
| mychef catering | 2 | 4 | 50.0% | 1.8 |
| my chef catering | 1 | 4 | 25.0% | 1.0 |
| my chef dubai | 1 | 4 | 25.0% | 2.0 |
| **Brand total (revealed)** | **17** | **87** | **19.5%** | — |

90-day `my chef` position 7.4 vs 28-day 1.2: the earlier window included `/about` (1 click / 25 impr / pos 20) diluting the average. Last 28 days the brand query is almost cleanly homepage.

---

## Country mix

### 28-day (`country`, top 25)

Site total 212 / 21,850. These 25 countries cover **203 clicks (95.8%)** and **21,213 impressions (97.1%)**.

| Country | Clicks | Impr | CTR | Pos | Click share | Impr share |
|---|---:|---:|---:|---:|---:|---:|
| ARE (UAE) | 163 | 19,132 | 0.85% | 28.2 | 76.9% | 87.6% |
| GBR | 5 | 281 | 1.78% | 9.5 | 2.4% | 1.3% |
| IDN | 4 | 60 | 6.67% | 16.8 | 1.9% | 0.3% |
| IND | 3 | 304 | 0.99% | 23.4 | 1.4% | 1.4% |
| QAT | 3 | 17 | 17.6% | 10.1 | 1.4% | 0.1% |
| USA | 2 | 949 | 0.21% | 12.0 | 0.9% | 4.3% |
| FRA / NLD / PRT / CYP | 2 each | 59 / 87 / 13 / 5 | — | — | — | — |
| Other (15 countries @ 1 click) | 15 | 297 | — | — | 7.1% | 1.4% |

UAE is the market. USA is impression-heavy and click-poor (likely English generic SERPs). GBR / IDN / QAT convert better at smaller volume.

`page+country` (50 rows) confirms the same story on the hubs: UAE drives `/` (21/1,469), `/private-chef-dubai` (10/2,136), `/catering-dubai` (1/4,201), `/yacht-catering-guide-dubai` (1/743), `/wedding-catering-menu-planning-dubai` (1/673). International clicks on the private-chef hub are one-off (DEU/IRL/ITA/NLD, 1 click each).

### 90-day country context *(not the scoring window)*

| Country | Clicks | Impr | CTR | Pos |
|---|---:|---:|---:|---:|
| ARE | 234 | 33,448 | 0.70% | 30.4 |
| IND | 12 | 490 | 2.45% | 23.2 |
| GBR | 6 | 531 | 1.13% | 13.7 |
| USA | 4 | 1,425 | 0.28% | 14.6 |
| IDN | 4 | 106 | 3.77% | 23.6 |

UAE is 75% of 90-day clicks and 88% of 90-day impressions. India over-indexes on clicks vs the 28-day slice.

---

## 15 highest-opportunity query–page pairs (28d)

Ranked from the 1,000-row `query+page` dump by impressions × (1 − CTR), with a modest boost when average position is ≤ 20 (recoverable). Not volumes. Not forecasts.

| # | Query | Landing | Clicks | Impr | CTR | Pos | Intended owner | Why it is an opportunity |
|---|---|---|---:|---:|---:|---:|---|---|
| 1 | home chef | `/private-chef-dubai` | 0 | 1,795 | 0% | 7.5 | none locked; nearest `/private-chef-dubai` | Largest revealed pair. Page-2-adjacent, zero clicks. |
| 2 | home chef | `/private-chef-dubai/pricing` | 0 | 342 | 0% | 8.6 | same | Sibling competing with the hub on the same query. |
| 3 | catering in dubai | `/catering-dubai` | 0 | 221 | 0% | 48.0 | `/catering-dubai` *(near)* | Head-term variant, page 5, owner already ranking. |
| 4 | catering services dubai | `/catering-dubai` | 0 | 216 | 0% | 48.4 | `/catering-dubai` *(near)* | Same hub, same dead CTR. |
| 5 | catering dubai | `/catering-dubai` | 0 | 196 | 0% | 54.2 | `/catering-dubai` | Exact locked primary. Owner is winning the URL and still at pos 54. |
| 6 | event catering dubai | `/catering-dubai` | 0 | 194 | 0% | 52.0 | `/events` | **Mismatch.** Owner `/events` is pos 40 with only 72 impr. |
| 7 | corporate catering dubai | `/corporate` | 0 | 183 | 0% | 37.3 | `/corporate` | Exact primary on the owner, mid-pack, 0 clicks. |
| 8 | catering company dubai | `/catering-dubai` | 0 | 182 | 0% | 56.2 | `/catering-dubai` *(near)* | Head-term company query, page 6. |
| 9 | catering services | `/catering-dubai` | 0 | 181 | 0% | 61.0 | `/catering-dubai` *(near)* | Generic; low intent quality vs the Dubai-modifier rows. |
| 10 | private chef dubai | `/` | 2 | 160 | 1.25% | 18.7 | `/private-chef-dubai` | **Mismatch.** Homepage outranks the lock. |
| 11 | yacht catering dubai | `/yacht-catering-guide-dubai` | 1 | 156 | 0.64% | 40.8 | `/yachts` | **Mismatch.** Guide holds the primary; hub `/yachts` is the owner. |
| 12 | corporate catering | `/corporate` | 0 | 244 | 0% | 33.8 | `/corporate` *(near)* | Highest corporate-cluster pair after the Dubai-modifier form. |
| 13 | corporate breakfast catering | `/corporate` | 0 | 125 | 0% | 30.4 | `/breakfast-catering-dubai` / `/corporate` | Hub absorbing a spoke primary. |
| 14 | corporate staff catering | `/corporate` | 0 | 72 | 0% | 20.0 | `/corporate` *(near)* | Best corporate position in this set (pos 20). |
| 15 | chef | `/` | 1 | 72 | 1.39% | 10.1 | `/` brand-adjacent | Generic; homepage already pos ~10. Low commercial precision. |

Honorable mentions (same dump, just outside 15): `business meeting catering` → `/corporate` (81 impr / pos 23), `boat party catering` → `/yachts` (81 / pos 32), `buffet catering` → `/catering-dubai` (78 / pos 24, **mismatch** vs `/buffet-catering-dubai`), `home catering dubai` → `/catering-dubai` (104 / 1 click / pos 47).

---

## 90-day context (not used for mismatch scoring)

Use this only to see whether a 28-day pattern is new.

| Signal | 90d | vs 28d |
|---|---|---|
| Top query by clicks | `private chef dubai` 8 / 565 / pos 28.7 | 28d: 5 / 216 / pos 28.4 — same query, same weak CTR |
| `yacht catering dubai` | 1 / 308 / pos 29.0 | 28d: 1 / 180 — most yacht demand is recent |
| `home catering dubai` | 1 / 250 / pos 57.5 | 28d: 1 / 133 |
| `personal chef dubai` | 1 / 177 / pos 38.2 | 28d: 1 / 76 |
| `/catering-dubai` | 4 / 4,638 / 0.09% | Almost all catering-hub impressions are inside the last 28 days |
| `/corporate` | 3 / 4,060 / 0.07% | Same — corporate impressions are recent |
| `/party-catering-dubai` | 4 / 868 / 0.46% | 28d only 65 impr — this URL mostly ranked *before* the 28-day window (redirect residue) |
| `/private-party-catering-dubai` | 3 / 1,210 / 0.25% | 28d only 55 impr |
| `/blog/corporate-event-catering-ideas-dubai` | 1 / 1,545 / 0.06% | 28d only 12 impr — older blog cannibal, now quiet |
| `/canape-catering-dubai` | 2 / 996 / 0.20% | 28d 125 impr |
| `/kids-birthday-catering-dubai` | 3 / 691 / 0.43% | 28d 24 impr |
| Birthday / anniversary cannibals | Heavy 90d split across birthday / kids-birthday / party / private-party | Mostly pre-window; 28d is quieter |

90-day `query+page` also shows `private chef dubai` homepage-led (5/480 pos 23.0 vs owner 2/39 pos 53.2) — the homepage theft is **not new**.

---

## C01 / C02 / C03 read-out

1. **C01 ownership is documented and internally consistent** (204 primaries, 0 collisions). Google is not obeying it on the money queries: `private chef dubai`, `event catering dubai`, `yacht catering dubai`, `buffet catering dubai`, `christmas catering dubai`.
2. **C02 CTR failure is a hub problem, not a thin-page problem.** Eight URLs over 400 impressions sit under 1% CTR. `/catering-dubai` and `/corporate` alone are 8,477 impressions and 7 clicks.
3. **C03 cannibalization is structural:** catering hub vs events hub vs corporate hub vs yacht guide/checklist; homepage vs `/private-chef-dubai` vs `/private-chef-dubai/pricing`; festive vs Christmas. Redirected URLs (`/party-catering-dubai`, `/corporate-catering-dubai`) still collect leftover impressions.
4. **Brand is fine and small.** Revealed brand queries click at ~32% CTR and land on `/`. They are not the traffic engine.
5. **Country is UAE.** 77% of clicks, 88% of impressions. Do not retarget the standard for USA impression noise.

Do not treat the 1,000-row dump as the full query universe. Treat the **page** and **site** totals as the ceiling, and the revealed pairs as the actionable slice.
