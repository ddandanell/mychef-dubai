# myCHEF.ae Keyword Blueprint

**Locked master · 25 August 2026**

Working file: `myCHEF-AE-KEYWORD-BLUEPRINT.xlsx` (10 sheets). This note is the decision log so the spreadsheet is not a black box.

Site crawled: `https://www.mychef.ae/sitemap.xml` — **216 live URLs**, lastmod 2026-08-25.
Robots: sitemap declared, `/thank-you` and `/inquiry` disallowed.

---

## What was compared

| Source | Date | What it is | What it is not |
|---|---|---|---|
| **MD lock** `MYCHEF-KEYWORD-MAP.md` | 19 Aug 2026 | Copy lock. 206 pages, 197 targeted, 984 subkeywords, 0 main-keyword collisions. Every term survived one proposer + three adversarial verifiers (search reality, cannibalisation, brand/price fit). | Not a volume study. Not a task list for stuffing. |
| **JSON-500** `mychef_ae_keyword_architecture_500.json` | 25 Aug 2026 | Architecture layer. 500 keywords, 174 pages, 10 silos, linking rules. Useful for hubs and supporting variants. | Not allowed to overwrite a locked primary. Semrush fields are empty. 12 exact duplicate rows from sheet-merge. |
| **Live sitemap** | 25 Aug 2026 | Reality. 216 URLs. Nested `/private-chef-dubai/*` cluster now exists. Pastry chef slug is Matteo, not Sofia. | Does not tell you what a page should rank for. |

**When they fight, the 19 Aug MD lock wins.** The JSON file is a silo/linking layer. It does not get to rename a page that already went through the adversarial pass.

---

## The only rules that matter for shipping copy

1. One commercial intent → one owner URL.
2. Main keyword in four places only: title, H1, first 100 words, one subheading.
3. Subkeywords live inside sentences that had to be written anyway. Cap 8. Fewer is honest.
4. If a sentence exists only to carry a term, delete the sentence.
5. Read it aloud. Machine-voice copy goes, even if it “matches.”
6. Blogs own cost / comparison / ideas / checklist / how-to, then link to the commercial owner.
7. Hubs stay broad. Children own the modifier.
8. Check volume before investing in a thin spoke. Nothing in any of these files is proof of demand.

---

## Scoreboard

| | |
|---|---|
| Live URLs | 216 |
| MD pages | 206 (197 targeted + 9 untargeted) |
| JSON target URLs | 174 |
| Blueprint universe | 217 |
| Locked primaries on live URLs | see `02_PAGE_BLUEPRINT` |
| Primary disagreements MD vs JSON on shared URLs | **44** — MD wins all 44 |
| JSON’s declared conflict (`event catering dubai` on `/catering-dubai` **and** `/events`) | **Resolved → `/events`** |
| Locked primary collisions after remap | **0** |
| Live URLs the MD map never saw | **11** |
| MD URL missing from sitemap | **1** (`/chefs/sofia-pastry-chef`) |

---

## Where the two files actually disagree

The JSON file is not a harmless synonym list. On 44 shared URLs it proposed a different primary. The important ones:

| URL | MD lock (keep) | JSON wanted (ignore as primary) |
|---|---|---|
| `/kids-nutrition-chef-dubai` | kids meal prep dubai | kids nutrition chef dubai — invented title, already killed in MD |
| `/corporate-retainer-dubai` | corporate catering contract dubai | corporate retainer catering dubai — agency jargon |
| `/mystery-dining-dubai` | surprise dinner experience dubai | (architecture still carries mystery-dining residue in places) |
| `/wellness-meal-prep-dubai` | healthy meal prep dubai | healthy meal prep chef dubai |
| `/cuisines-dubai` | multi cuisine catering dubai | cuisines dubai catering |
| `/locations` | catering near me dubai | dubai private chef locations |
| `/guide/private-dining-dubai` | private dining dubai | JSON moved this primary onto `/luxury-dining-experiences` |
| `/our-chefs` | private chefs dubai | JSON pointed the same primary at `/private-chef-dubai/our-chefs` |
| `/allergy-safe-catering-dubai` | allergy safe catering dubai | allergy aware catering dubai |
| `/apartment-private-dining-dubai` | private chef for apartment dubai | apartment private dining dubai |
| `/bar-services-dubai` | bar services dubai | bar services dubai events |

Full list: sheet `04_DIFF_MD_vs_JSON`.

JSON also never assigned the homepage, `/about`, chef profiles, partner pages, trust pages, `/become-a-mychef`, `/faq`, `/how-it-works`, `/our-chefs` (flat), membership/loyalty/VIP, or most utility URLs. That is why JSON covers 174 pages and the live site has 216.

---

## Live site vs locked map — the 11 new URLs

These are on the 25 Aug sitemap and were **not** in the 19 Aug lock. Decisions:

| Live URL | Decision |
|---|---|
| `/chefs/matteo-pastry-chef` | **Lock transferred.** Primary = `private pastry chef dubai`. Sofia slug is dead. 301 `/chefs/sofia-pastry-chef` → Matteo. |
| `/private-jet-catering-dubai` | **Assign.** Primary = `private jet catering dubai`. Only if this is a real SKU. |
| `/blog/desert-dinner-party-dubai` | **Assign.** Primary = `desert dinner party dubai`. Commercial booking stays on `/desert-dining-dubai`. |
| `/partners` | **Untargeted hub.** Same rule as `/blog`. |
| `/trust-and-programs` | **Untargeted hub.** |
| `/private-chef-dubai/how-it-works` | **New distinct primary.** `managed private chef service dubai`. Live title already says “How to Get a Cook in Dubai \| Managed Chef Service”. Different intent from `/how-it-works`. |
| `/private-chef-dubai/how-your-plan-works` | **Support only.** No independent primary. |
| `/private-chef-dubai/our-chefs` | **Support only.** Do not give it `private chefs dubai`. That stays on `/our-chefs`. |
| `/private-chef-dubai/pricing` | **Conflict.** Owner is `/private-chef-prices-dubai`. 301 or canonical this nested pricing URL. |
| `/private-chef-dubai/privacy-security` | **Untargeted trust module.** |
| `/private-chef-dubai/quality-training` | **Untargeted trust module.** Vetting queries stay on `/how-we-vet-our-chefs`. |

---

## Duplicate pairs that will cannibalise if you ignore them

| Pair | Verdict |
|---|---|
| `/how-it-works` vs `/private-chef-dubai/how-it-works` | Keep both. Different jobs. Flat = how to book any myCHEF service. Nested = household managed plan. Titles must stay distinct. |
| `/our-chefs` vs `/private-chef-dubai/our-chefs` | One owner. Flat URL owns `private chefs dubai`. Nested page is a module of the household product. Canonical or retitle. |
| `/private-chef-prices-dubai` vs `/private-chef-dubai/pricing` | One owner. Flat prices URL wins. Nested should 301 or noindex+canonical. |
| `/guide/private-dining-dubai` vs `/luxury-dining-experiences` | One informational owner, one commercial owner. Do not merge. JSON was wrong to move `private dining dubai` onto the luxury page. |
| `/catering-dubai` vs `/events` | `/catering-dubai` = `catering dubai`. `/events` = `event catering dubai`. Remove that phrase from the catering hub. |
| `/chefs/sofia-pastry-chef` vs `/chefs/matteo-pastry-chef` | Sofia is gone. Matteo inherits the pastry lock. |

---

## Pillar lock (do not renegotiate)

| URL | Locked primary |
|---|---|
| `/` | **private chef and catering dubai** |
| `/private-chef-dubai` | **private chef dubai** |
| `/catering-dubai` | **catering dubai** |
| `/events` | **event catering dubai** |
| `/corporate` | **corporate catering dubai** |
| `/wedding-catering-dubai` | **wedding catering dubai** |
| `/yachts` | **yacht catering dubai** |
| `/villas-private-residences` | **villa chef dubai** |
| `/weekly-meal-prep-dubai` | **weekly meal prep dubai** |
| `/full-time-private-chef-dubai` | **full time private chef dubai** |
| `/part-time-private-chef-dubai` | **part time private chef dubai** |
| `/private-chef-prices-dubai` | **private chef dubai price** |
| `/our-chefs` | **private chefs dubai** |
| `/how-it-works` | **how to book a private chef dubai** |
| `/locations` | **catering near me dubai** |
| `/cuisines-dubai` | **multi cuisine catering dubai** |
| `/romantic-dinner-dubai` | **romantic dinner dubai** |
| `/tourist-villa-chef-dubai` | **holiday villa chef dubai** |
| `/office-catering-dubai` | **office catering dubai** |
| `/chefs/layla-middle-eastern-chef` | **arabic private chef dubai** |
| `/chefs/marco-italian-chef` | **italian private chef dubai** |
| `/chefs/matteo-pastry-chef` | **private pastry chef dubai** |

Homepage live title already leads with “Private Chef Dubai & Luxury Catering”. That matches the lock. Do not put the site back on `home catering dubai` or any cheap- modifier. Private-chef hub live title is “Private Chef Dubai \| From AED 2,700 a Month” — also aligned.

---

## Deliberately untargeted (still correct)

`/blog` · `/contact` · `/gallery` · `/press` · `/privacy-policy` · `/review` · `/site-map` · `/terms` · `/chefs/ahmed-executive-chef`

Plus the new hubs/modules: `/partners` · `/trust-and-programs` · `/private-chef-dubai/privacy-security` · `/private-chef-dubai/quality-training` · `/private-chef-dubai/how-your-plan-works` · `/private-chef-dubai/our-chefs` (support) · `/private-chef-dubai/pricing` (consolidate).

Ahmed’s profile stays untargeted because `executive chef dubai` is a recruitment query. That intent already has a home: `/become-a-mychef` → `private chef jobs dubai`.

---

## Silos

| Silo | Hub | Priority |
|---|---|---|
| Brand / Homepage | `/` | P0 |
| Private Chef | `/private-chef-dubai` | P1 |
| Catering | `/catering-dubai` | P1 |
| Private Events | `/events` | P1 |
| Corporate Catering | `/corporate` | P1 |
| Dining Experiences | `/luxury-dining-experiences` | P1 |
| Locations | `/locations` | P1 |
| Cuisines and Dietary | `/cuisines-dubai` | P2 |
| Seasonal and Occasions | `/catering-dubai` (seasonal children) | P2 |
| Packages / Offers | `/catering-packages-dubai` | P2 |
| Blog and Guides | `/guides` | P2 |
| Partners / Recruit | `/partners` | P3 |
| Trust / Utility | `/faq` | P3 |

Linking direction, unchanged from the architecture file: **hub → child landing pages → guides/blogs → back to the commercial owner.**

Location pattern, unchanged from MD: primary = `private chef {area}`, subs = catering / chef at home / private dining / party catering / personal chef + office or yacht only where that area actually has it.

---

## What I would add (not locked — volume first)

These are on sheet `08_GROK_ADDITIONS`. They come from live titles, competitor SERPs (Splidu, Chef at Home, Montclair, PRIVÉ, Eaz Chef, Maison Cullinan) and the cuisine+chef hole the MD map already called out.

**Park on existing pages**

- `managed private chef service dubai` + `how to get a cook in dubai` → nested how-it-works (already in live title)
- `personal chef at home dubai`, `chef for hire dubai` → `/private-chef-dubai` as subs
- `private chef monthly dubai` → `/full-time-private-chef-dubai`
- `omakase at home dubai` → `/tasting-menu-dubai` only if they can run it
- `iftar / eid / ramadan private chef dubai` → the matching seasonal catering page as subs, not new URLs
- extra compounds (`creek harbour`, `meydan`, `damac hills`, `tilal al ghaf`, `city walk`) → `/locations` or the closest live area. Do not mint thin location URLs

**Real gaps — new URL only if a chef and a menu exist**

- `french private chef dubai`
- `japanese private chef dubai` / kaiseki-at-home (different buyer from `/sushi-catering-dubai`)
- `indian private chef dubai` (catering page exists; private-chef tier does not)
- `persian / iranian catering dubai`
- `filipino catering dubai`
- `thai catering dubai` and `mexican catering dubai` — only if `/asian-catering-dubai` cannot honestly cover them

**Never assign**

- cheap / affordable / budget catering or private chef
- `mystery dining dubai`
- `executive chef dubai` on a customer profile
- `private chef abu dhabi` / `catering abu dhabi` until you operate there
- staff-canteen economics on `/staff-meals-catering-dubai` (page can rank; it will not convert at myCHEF rates — do not invest)

---

## Immediate technical actions

1. **301** `/chefs/sofia-pastry-chef` → `/chefs/matteo-pastry-chef` if the old slug ever existed in the index.
2. **301 or canonical** `/private-chef-dubai/pricing` → `/private-chef-prices-dubai`.
3. **Retitle / canonical** `/private-chef-dubai/our-chefs` so it cannot compete with `/our-chefs` for `private chefs dubai`.
4. Confirm `/how-it-works` and `/private-chef-dubai/how-it-works` have different titles, H1s and intros (they already do — keep it that way).
5. Strip `event catering dubai` from `/catering-dubai` title/H1/subheadings.
6. Do not put years-of-experience claims on chef pages. Do not rewrite `/about` from this map — it still names people who are not on the confirmed roster.
7. Run the locked primaries through Semrush/Ahrefs before commissioning copy on thin seasonal or dietary spokes.

---

## How to use the spreadsheet

- **Shipping copy for one URL:** filter `02_PAGE_BLUEPRINT` to that URL. Use **LOCKED primary** + **LOCKED subkeywords** only.
- **“What page owns this term?”:** `03_KEYWORD_INDEX`.
- **Why JSON said something else:** `04_DIFF_MD_vs_JSON`.
- **What the sitemap grew:** `05_LIVE_GAPS`.
- **Linking plan:** `06_SILOS`.
- **What not to touch:** `07_CONFLICTS` + the banned list in `08_GROK_ADDITIONS`.

This blueprint does not authorise stuffing the live site with every row in the index. The approved page copy already carries its keywords. Adding more recreates the exact-match problem this project exists to remove.
