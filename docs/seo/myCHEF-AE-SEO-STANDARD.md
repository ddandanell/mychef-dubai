# myCHEF.ae SEO Operating Standard

**The file to put in the repo:** `myCHEF-AE-SEO-STANDARD.json`

This is not another keyword map. You already have a lock. This is the shipping contract so the next writer, CMS, or agent cannot undo it.

---

## What it prevents (self-inflicted SEO)

Cannibalisation, exact-match H2 farms, cheap/affordable targeting, recruitment queries on customer pages, a second pricing URL, a second our-chefs URL, guessed You May Also Like lists, invented job titles, unpublished years-of-experience claims, and minting thin spokes because a term looked nice in a spreadsheet.

## What it does not prevent

Competitors. No search volume. A dull page that follows every rule. Seasonal pages going quiet in August. Google changing its mind.

No JSON makes “SEO unable to go wrong.” It stops *you* from being the thing that goes wrong.

---

## What is inside

| Key | Role |
|---|---|
| `invariants` | The laws. One intent one owner. Primary in four places only. Subs in sentences. Read-aloud test. |
| `banned_terms` | cheap / affordable / mystery dining / executive chef on profiles / halal jain / Abu Dhabi / years of experience |
| `approved_chefs` | Ahmed Al-Rashid, Marco Rossi, Layla Hassan, Matteo Moretti |
| `agent_preamble` | Paste this at the top of every generation prompt |
| `pages[url]` | The contract for that URL: title, H1, meta, canonical, robots, schema, siblings, breadcrumb, claims |
| `redirects` | Sofia → Matteo. Nested pricing → `/private-chef-prices-dubai` |
| `change_control` | How a new URL is allowed to exist |
| `validation_checks` | Assertions a script can run before publish |

216 pages. 0 primary collisions. 8 noindex (legal + duplicate household modules). 200 with a locked primary. 16 deliberately untargeted.

---

## How to use it

**Cursor / CMS:** `const page = standard.pages[path]`. Title, H1, meta, canonical, schema and sibling cards come from that object. Nothing else.

**AI writer:** prepend `agent_preamble`, then pass `pages[path]` as the only SEO context. Do not also dump the old 500-keyword JSON into the prompt. That is how the 44 primary fights started.

**Human:** if a draft fails `qa_gates`, it does not ship.

Conflict rule: this file is the shipping contract. The 19 Aug map is already baked into the locked primaries. The 25 Aug architecture file does not get a vote.

---

## Put this in the repo, not the old architecture JSON

Keep:

- `MYCHEF-KEYWORD-MAP.md` — historical lock, reference
- `myCHEF-AE-KEYWORD-BLUEPRINT.xlsx` — human ownership sheet
- `myCHEF-AE-SEO-STANDARD.json` — **what the site and the agents read**
- `myCHEF-AE-SILO-LINKING.json` — already merged into `pages[url].internal_linking`

Do not keep feeding `mychef_ae_keyword_architecture_500.json` to writers. It is how primaries get renamed.
