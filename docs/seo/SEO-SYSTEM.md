# The myCHEF SEO system

How the whole thing works: what collects data, where it is stored, what edits the site, what
guards those edits, and what you look at. Written for someone picking this up cold.

Last verified: 26 August 2026.

---

## 1. What it is

A closed loop that keeps mychef.ae aimed at the searches that exist in Dubai, and records
everything it does.

```
 sources ──▶ collectors ──▶ Postgres archive ──▶ the board (/seo)
    ▲                            │                     │
    └──────── the site ◀── optimizer ◀── gates ◀───────┘
```

Five ideas hold it together:

1. **One contract.** `docs/seo/myCHEF-AE-SEO-STANDARD.json` decides which keyword each URL owns.
   Nothing else may decide it. 216 URLs, 163 unique primary keywords, zero collisions, enforced
   by a verifier that fails the build.
2. **Every page carries its own contract.** A `KEYWORD LOCK` comment at the top of each page file
   states its primary and subkeywords. A second verifier fails the build if a page and the
   contract disagree.
3. **The site is measured, not assumed.** Scores come from the built HTML, not from intent.
4. **Every run is archived whole.** Not a summary — the full keyword table, page table, report,
   links, gaps, backlog, traffic and the contract as it stood that day.
5. **Changes are reversible and logged.** The optimizer records what it wrote, where, and what
   was there before, and can revert a page.

---

## 2. Where things live

| Path | What it is |
|---|---|
| `docs/seo/myCHEF-AE-SEO-STANDARD.json` | The contract. Which keyword each URL owns. |
| `docs/seo/keyword-map/*.py` | The collectors, the optimizer, the builders. |
| `docs/seo/keyword-map/*.html` | Generator output. The live board is React, not these files. |
| `docs/seo/keyword-map/*.json` | Research payloads the React OS reads. |
| `src/seo-os/` | shadcn dashboard-01 shell for `/seo` (sidebar, cards, tables, inspector). |
| `docs/seo/keyword-map/.live/` | Snapshots and research data. Git-ignored. |
| `public/seo/data/` | Published JSON. Git-ignored; written at build time by `publish.sh`. |
| `src/content/keywordLocks.ts` | The contract, compiled for the app. |
| `api/e.ts` | First-party event collector (public). |
| `api/ask.ts` | The read-only SEO analyst (password-gated). |
| `src/lib/track.ts` | The ~2 KB browser beacon. |
| `middleware.ts` | Password gate for `/seo/*` and `/api/ask`. |
| `scripts/verify-*.py` | The gates. |

Credentials live in `~/.config/claude-seo/` (mode 600) and, for anything the site needs at
runtime, as Vercel environment variables. **No credential is ever committed.**

---

## 3. The sources

| Source | Answers | Credential | Status |
|---|---|---|---|
| **DataForSEO** | What Dubai searches for, difficulty, live SERPs, competitor pages, AI answers | `dataforseo.env` | Connected |
| **Google Search Console** | Impressions, clicks, CTR, average position per query and page | `service-account.json` | Connected 26 Aug 2026 |
| **Vercel Web Analytics** | Visitors and pageviews per URL, referrers, countries, devices | `vercel.env` | Connected |
| **First-party events** | Time on page, bounce, scroll depth, WhatsApp clicks — joinable to keywords | `DATABASE_URL` on Vercel | Connected |
| **Google Analytics 4** | The same behaviour data, from Google's side | `service-account.json` | **Not connected** — see §9 |
| **Bing Webmaster** | Bing crawl and ranking data | `bing-webmaster.env` | Connected |
| **PageSpeed / CrUX** | Core Web Vitals | `google-psi.env` | Key present, no collector |

The Status page shows this live, including whether each source has actually *delivered*
recently — a key that authenticates but has gone quiet reads as stale, not green.

---

## 4. The collectors

Each is a standalone script. None of them fails the loop: on a network or auth error they say
so and leave the previous snapshot in place.

| Script | Pulls |
|---|---|
| `build-keyword-map.py` | Reads the built site, scores every keyword's placement, finds duplicates, heading collisions and measured SERP overlap. `--dist` snapshots the local build; `--fetch` crawls production. |
| `harvest-serps.py` | Live Google SERPs for every primary (DataForSEO, UAE). ~$0.005 per keyword. |
| `harvest-gsc.py` | Search Console by query, query+page, page and date. |
| `harvest-vercel-analytics.py` | Traffic per URL, referrers, countries, devices. Pages past the API's 100-row cap. |
| `harvest-firstparty.py` | Sessions, bounce, median seconds, conversions from our own events. |
| `harvest-ga4.py` | GA4 engagement and conversion events. Waiting on access. |
| `harvest-competitors.py` | The pages that outrank us, fetched and parsed. |
| `harvest-llm.py` | Asks Claude 16 buyer questions and records who it names. ~$0.07 each. |
| `harvest-autocomplete.py` / `harvest-targeted.py` | Google and Bing suggestions for the UAE. |
| `check-integrations.py` | Probes every source for connection **and** data flow. |

## 5. The builders

| Script | Produces |
|---|---|
| `build-ownership.py` | **The keyword file** — `keywords.csv`, `keywords.json`, `ownership.html`. One row per keyword: owner URL, role, volume, intent, value, difficulty, position, title/description/H1/H2/body/FAQ/anchor coverage, cannibalisation, traffic, conversions, Search Console clicks and impressions, share of demand, score out of 10, and the next action. |
| `build-report.py` | The 12-column research report. |
| `build-backlog.py` | Researched phrases no page owns yet, with UAE volume. |
| `build-demand.py` | What each page's keyword set is worth. |
| `build-internal-links.py` | Link profile per URL: in/out by region, anchors, orphans, authority. |
| `build-gaps.py` | Headings, questions and entities competitors cover and we do not. |
| `build-architecture.py` | The sitemap as an authority map: depth, orphans, hub↔child. |
| `build-actions.py` | **Actions** — every edit the agent made, with the words before and after. |
| `build-status.py` | **Status** — the health of every source. |
| `build-proposals.py` | **Queue** — ranked proposals from the loop's own evidence. Does not call the optimizer. |
| `run-daily.sh` | Cheap half: GSC + first-party + Vercel + rollup + Queue + Status. Safe to cron. |
| `fill-subkeywords.py` | Fills free subkeyword slots from the backlog, one owner per phrase. |
| `store-keywords.py` | Writes the whole run to Postgres. |
| `inject-nav.py` | Legacy HTML chrome. Kept for local HTML previews; production `/seo` is the React OS. |
| `export-board-data.py` | Copies JSON (+ status/actions extracts) into `public/seo/data`. |
| `publish.sh` | Runs the exporter. Runs inside the Vercel build. |

---

## 6. The optimizer

`optimize-page.py` (components) and `optimize-data-pages.py` (locations and handoff JSON) are
the only things that edit page copy.

**What it does.** Places the exact primary keyword in the `<SEO>` title and description, the H1
and one section heading. Places missing subkeywords in **body sentences** — one sentence per
question type (price, packages, menu, dietary, venue, booking, equipment, how-to-choose, alias),
with the phrasings joined inside it. FAQs are used only for phrases that already read as a
question, and only while the page is under the brief's 5–8 FAQ cap.

**Rules it will not break.**

- Subkeywords go in sentences, never in headings — the contract's own rule.
- Standing-plan pages get household wording; "guest count" is wrong on a meal-prep page.
- A phrase that matches the unplaceable list is never written into copy (meal-kit brands,
  non-UAE cities, foreign regulators, other people's conferences).
- Every change is logged with the text before and after, and `--revert <url>` undoes a page.

**The guard that matters.** Before writing anything it checks whether the page already says the
phrase — reading *prose only*: string literals with comments stripped, plus the prerendered
HTML. Normalising raw source once made the `KEYWORD LOCK` header (which quotes all twelve
subkeywords) look like page copy, and that single bug hid 1,237 unsaid phrases.

---

## 7. The gates

Run on every loop and inside the Vercel build. A failure stops the release.

| Gate | Checks |
|---|---|
| `verify-seo-contract.py` | The contract is internally consistent: unique primaries, no collisions. |
| `verify-keyword-locks.py` | Every page file's lock header matches the contract. |
| `verify-retirements.py` | Every retired URL redirects, is out of the sitemap, and has no internal links. `--live` checks production. |
| `audit-onpage.py` | Titles ≤ 65 chars, descriptions in range, one H1, canonical present, primary in title and H1. |
| `tsc -b` | The app compiles. |

**A push to `main` is a release.** Vercel's Git integration deploys production on every push, so
the gates run before the push, not after.

---

## 8. The board

Served at `https://www.mychef.ae/seo`, behind HTTP Basic auth (`SEO_PASSWORD`), `noindex`, and
disallowed in `robots.txt`. Rebuilt by `run-loop.sh` and published during the Vercel build.

| Page | What it answers |
|---|---|
| **Status** | Is every source connected and actually feeding data? |
| **Board** | Every URL, its locked keywords, where each phrase lands on the live page. |
| **Keywords** | One row per keyword with its score and next action. |
| **Research** | Volume, difficulty, intent, position, verdict. |
| **Demand** | What each page's keyword set is worth. |
| **Backlog** | Phrases with demand that no page owns yet. |
| **Links** | Internal link profile, orphans, anchor problems. |
| **Gaps** | What competitors cover that we do not. |
| **Architecture** | Click depth, hub↔child, sitemap health. |
| **AI answers** | Whether Claude names myCHEF for buyer prompts. |
| **Actions** | Every change the agent made, with before and after. |
| **Ask** | The read-only analyst. |

---

## 9. The analyst

`api/ask.ts`, reachable from the **Ask** page. Read-only **by construction, not by promise**:

1. It connects as the Postgres role `seo_readonly`, which holds `SELECT` and nothing else —
   `INSERT`, `UPDATE`, `DELETE`, `TRUNCATE` and `CREATE` are revoked at the database. Verified by
   attempting a write and being refused.
2. The model never writes SQL. The endpoint builds a fixed snapshot with fixed queries and hands
   over text. There is no path from a sentence to a query.
3. It has no filesystem, no git, no deploy hook and no other endpoint.
4. It sits behind the board password, so it costs nothing to a stranger.

**The snapshot it reads:** the latest run and the one before it, the score trend across runs, the
phrases Google actually shows with volume/impressions/clicks/position/share-of-demand, the
phrases ranking on a page the contract did not assign, primaries with no measured demand, the
widest content gaps, traffic, first-party behaviour and source health.

**Model providers, in order:** `AI_GATEWAY_API_KEY`, then the function's own OIDC token
(`x-vercel-oidc-token`), then `ANTHROPIC_API_KEY`. Within the gateway it asks for Claude Sonnet 5
first and falls back to `meta/llama-3.3-70b`, which the free AI tier allows — the answer says
which model replied.

DataForSEO's Claude endpoint is deliberately *not* in the chain: it caps a prompt at about 500
characters — measured, 493 passes and 521 fails — which makes it a brand-visibility probe, not a
chat API.

**It needs one key.** The Vercel API token authenticates against the gateway, but it can also
deploy and delete projects, so it does not belong in a web-facing function's environment. Create
a scoped key at **Vercel → AI → API keys** and set it as `AI_GATEWAY_API_KEY`. On free credits
the analyst answers on Llama 3.3 70B; with a few dollars of AI credits it answers on Claude
Sonnet 5.

---

## 10. The database

Neon Postgres. `DATABASE_URL` (pooled) for the site, `DATABASE_URL_UNPOOLED` for bulk loads,
`DATABASE_URL_READONLY` for the analyst.

**Per run** — `seo_runs`, `seo_keywords`, `seo_pages`, `seo_report`, `seo_links`, `seo_gaps`,
`seo_architecture`, `seo_depth`, `seo_backlog`, `seo_demand`, `seo_contract`.

**Dated, not per run** — `seo_serps`, `seo_ai_visibility`, `seo_traffic`,
`seo_traffic_breakdown`, `seo_integrations`. These are captured on their own schedule, so a
rerun on the same data cannot duplicate them.

**Dated, page grain** — `seo_page_daily` (first-party + GSC + Vercel views per URL per day). The join the advisor reads. `seo_proposals` is the queue: open / accepted / rejected, never written by the optimizer.

**Not run-scoped** — `seo_optimizer_log` (every edit ever), `web_sessions`, `web_events`.

`store-keywords.py --prune-keep N` trims the bulky tables for older runs when storage matters;
runs, keywords and pages are always kept.

---

## 11. First-party tracking

`api/e.ts` accepts a fixed vocabulary and nothing else: `page_view`, `engaged`, `scroll_depth`,
`whatsapp_click`, `form_submit`, `exit`, plus `cta_click`, `inquiry_start`, `inquiry_complete`,
`calc_use`, `expose`, `phone_click`, `email_click`. Labels are an allow-list (`hero`, `sticky`,
`price_table`, `faq`, `footer`, `nav`, `inquiry_form`, `contact_form`, `lead_magnet`, `lead_form`,
`link`). Unknown labels are dropped, not stored. Session 0 also records channel class (`organic` /
`paid` / `social` / `direct` / `referral` / `llm`) and a **server-side** landing class from the
contract (`brand` / `owned` / `unowned` / `utility`). The browser never ships the lock map.

**Privacy.** No cookies, no IP stored, no free text, nothing typed into a form. The session id is
random, lives in `sessionStorage` and dies with the tab. Country comes from Vercel's edge header.
The beacon honours Global Privacy Control, Do Not Track and a `localStorage` opt-out, and never
records visits to `/seo`.

**Abuse limits.** A fixed event vocabulary; 60 events per session enforced by the
`(session_id, seq)` primary key; a per-instance token bucket on a daily-salted hash of the IP; a
2 KB body cap and a shape check on every field. `TRACKING_OFF=1` disables it without a deploy. A
failed write returns 204 — analytics never surfaces to a visitor.

**Why it exists** when GA4 is already on the page: GA4 cannot be joined to the keyword tables.
This one writes into the same Postgres as `seo_keywords`, so *WhatsApp clicks per owned keyword*
is a query rather than a guess.

---

## 12. Running it

```bash
npm run build && npm run prerender          # build the site the board will measure
bash docs/seo/keyword-map/run-loop.sh dist  # refresh every source, rescore, gate, archive, publish
```

`run-loop.sh` in order: regenerate the sitemap and silo map → snapshot the built pages →
Search Console → GA4 → first-party behaviour → Vercel traffic → backlog, demand, report, links,
gaps, architecture → integration health → Status → Actions → the keyword file → the gates →
archive to Postgres → publish to `public/seo/`.

`run-loop.sh live` measures production instead of the local build.

**To change page copy:**

```bash
python3 docs/seo/keyword-map/optimize-page.py --all            # dry run, prints the plan
python3 docs/seo/keyword-map/optimize-page.py --all --apply    # write it
python3 docs/seo/keyword-map/optimize-page.py --revert /url    # undo one page
```

Always rebuild and re-snapshot before applying, or the guard compares new source against stale
rendered HTML and places nothing.

---

## 13. What is not finished

| Gap | Consequence | Fix |
|---|---|---|
| **AI Gateway key** | The analyst is deployed and read-only but has no model to answer with | Create a key at Vercel → AI → API keys, set `AI_GATEWAY_API_KEY` |
| **GA4 access** | No time-on-page or bounce from Google's side | Add `googlenay@trusty-bearing-489316-k1.iam.gserviceaccount.com` as Viewer on the property that owns `G-26YM3CE8CB` |
| **Nothing is scheduled** | Freshness depends on someone running `run-loop.sh` | Vercel Cron, once the panel exists |
| **127 of 163 primaries have no measured UAE demand** | Those pages have nothing to win | Re-target or merge, page by page |
| **344 subkeywords still unsaid** | Coverage sits at 78% | 33 pages keep their copy in content modules with no safe insertion point yet |
| **32 phrases rank on an unassigned page** | The contract and Google disagree | Move the keyword or move the content |
| **Location FAQ insertion is disabled** | `optimize-data-pages.py` cannot add FAQs to `locations.ts` | Its entry-bounds walk once deleted 1,181 lines; needs a proven fix before re-enabling |
| **Core Web Vitals** | Not in the archive | A `harvest-psi.py` using the existing key |
| **The board is a React OS on static JSON** | No live query of Postgres from the browser | `/api/ask` for questions; harvests still write JSON |

---

## 14. V2 — the control plane

V1 answers *what does the site say*. V2 answers *did the loop run, what does it propose, what
happened after a change, and what should be done today*. It is additive: no V1 table was
renamed or dropped, and the optimizer still only writes when a human asks.

### Locked, placed, proven

The state of a keyword, in the only three steps that matter:

| State | Means | Where it comes from |
|---|---|---|
| **LOCKED** | the contract assigns the phrase to a URL | `myCHEF-AE-SEO-STANDARD.json` |
| **PLACED** | the built HTML of that URL really says it | the prerendered page, scored by `build-keyword-map.py` |
| **PROVEN** | Search Console shows that URL earning impressions for it | `harvest-gsc.py` |

A keyword is not finished at LOCKED. Coverage percentages hide that distinction, which is why
Control shows all three. First measurement: **1,712 locked · 1,354 placed · 75 proven** — 1,637
phrases are locked and have never been seen by Google.

### The four new tables

| Table | Holds |
|---|---|
| `seo_heartbeats` | one row per run: kind, phase, which sources fed it, whether the gates passed |
| `seo_experiments` | every apply as a batch with a window and a verdict (`too_soon` / `lift` / `flat` / `drop` / `confounded`) |
| `seo_briefings` | one page of judgement per day |
| `seo_proposals` | the queue — the parallel session's columns, with the spec's names added beside them, nothing renamed |

`seo_page_daily` (page × day, first-party + GSC + Vercel) and `seo_integrations` already
existed and are reused.

### Control

`build-control.py` → `control.json` → the **Control** page. Locked/placed/proven, the last
heartbeat with its git SHA and gate result, which sources are feeding, the five proposals worth
doing next, open experiments, and the last twenty changes. A red banner when the last run is
older than 36 hours, when the gates failed, or when a source has stopped feeding.

### Two runners

```bash
npm run seo:daily     # cheap: GSC, first-party, Vercel, rollup, health, proposals, control, heartbeat, publish
npm run seo:loop      # full: everything above plus the scorer, all builders, the gates and the archive
```

`run-daily.sh` never calls `harvest-serps.py`, `harvest-llm.py` or the optimizer — those cost
money or change the site. Neither runner applies anything.

### What V2 does not do yet

Auto-apply (`apply-safe.py`), experiment closing (`close-experiments.py`), the daily briefing
(`build-briefing.py`) and the optimizer's `--safe-only` / `--max-per-url` / `--batch-id` flags
are specified and not built. The queue is populated and read-only until they are.

---

## 14. The rules, live

`build-rules.py` writes `rules.json` and the board renders it at **/seo/rules**: fifteen rules,
each with the reason it exists, where it is enforced, and whether it holds right now. Six are
gated — the gate's own exit code is the status and its last line is the evidence — and the rest
are carried by the tooling with their current numbers beside them.

A rule whose reason is forgotten is the next rule somebody deletes, so every card says what
went wrong to create it.

---

## 14. The hero rule

**A hero sells. It does not carry coverage copy.**

The hero is the section holding the `<h1>`. A visitor arriving there wants one promise, one
supporting line and a way to act. When the body-sentence optimizer chose "the first prose
paragraph on the page" it chose hero subtitles, and heroes grew to 200+ words —
`/bbq-catering-dubai` reached 245. Keyword sentences belong in body copy further down, where
they read as prose.

Three things hold the rule:

| Where | What it does |
|---|---|
| `optimize-page.py` → `hero_end()` | the body placer will not write above that offset, ever |
| `scripts/verify-hero.py` | gate: 90 words of hero prose, 140 for an article header. Breadcrumbs, eyebrows and button labels are not counted — they are navigation, not copy |
| `move-hero-copy.py` | moves generated paragraphs already sitting in a hero down to the first prose section below it, keeping that section's styling |

After the first pass: 19 paragraphs moved off 12 pages, median hero prose **36 words**, worst
case 245 → 37. Two hand-written heroes were trimmed by moving their detail into the intro
below — `/wedding-catering-dubai` (whose eyebrow also repeated its own H1 word for word) and
`/engagement-catering-dubai`.

A page whose hero genuinely needs more room goes in `EXEMPT` in the gate, with the reason
written next to it — agreed once, not argued every run.

---

## 14. Conventions

- **Never commit a credential.** `~/.config/claude-seo/` and Vercel environment variables only.
- **The contract wins.** Change a keyword there, run `npm run seo:locks`, never edit a lock header.
- **Measure before and after.** Rebuild, re-snapshot, then compare — a score that moved without a
  rebuild is measuring the wrong thing.
- **A push to `main` deploys.** Run the gates first. To stage without releasing, push a branch.
- **The loop never dies on a network blip.** A collector that cannot reach its source says so and
  leaves the last snapshot in place.
