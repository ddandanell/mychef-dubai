# Keyword map — local research, not part of the website

Open `index.html` (the map) and `backlog.html` (found, not yet placed) in a browser. Nothing in this folder is served; `.live/` (the site snapshot + research harvest) is git-ignored.

## The files

| File | What it is |
|---|---|
| `index.html` | Every URL by silo: locked primary, subkeywords (n/8, free slots), where each keyword sits on the live page (title · description · H1 · H2 · first 100 words · body ×count), a per-keyword **score**, doubles, cannibalisation risk, candidates. Click a row to expand. |
| `backlog.html` | Every researched phrase no page owns yet, grouped by the page it most plausibly belongs to, with intent (sales / long-tail / informational / recruitment / competitor), sources, UAE volume where known, and the live pages already saying it. |
| `build-keyword-map.py` | Builds `index.html` from the SEO contract + the live snapshot. `--fetch` pulls the live site first. |
| `harvest-autocomplete.py` | Google (gl=ae) + Bing (en-AE) autocomplete for every active primary × sales/long-tail modifiers + A–Z on the head terms → `.live/research/autocomplete.jsonl`. Real queries, no volumes. |
| `harvest-targeted.py` | Second pass aimed at pages that still have open slots (reads `fill-report.json`). |
| `build-backlog.py` | Joins the harvest, the owner's Semrush export (`ae` rows carry UAE volume; `us` rows are phrasing hints) and the historical keyword master; classifies intent; suggests a page. |
| `fill-subkeywords.py` | Fills every page's slots (cap 8) with the best unowned phrase — global greedy, one owner per phrase, topical gate, banned/off-topic/geo filters, no near-duplicates on a page. `--apply` writes the contract. Resolves doubles first. Writes `fill-report.json`. |

## Scores

- **Primary /10** — title 3 · H1 3 · meta description 2 · one H2 1 · used at least twice in the body 1. The contract's placement rule, made measurable. A 0 usually means the page says a *variant* (e.g. "private chef prices dubai" vs the locked "private chef dubai price").
- **Subkeyword /4** — body mentions (max 3) + description 1. A subkeyword inside a title/H1/H2 is flagged: the contract allows subs in sentences only.

## The loop

```
python3 docs/seo/keyword-map/build-keyword-map.py --fetch     # snapshot the live site + build the map
python3 docs/seo/keyword-map/harvest-autocomplete.py          # (slow, ~30 min) real UAE queries per primary
python3 docs/seo/keyword-map/build-backlog.py                 # pool → backlog.html
python3 docs/seo/keyword-map/fill-subkeywords.py              # dry run: the plan
python3 docs/seo/keyword-map/fill-subkeywords.py --apply      # write the contract
npm run seo:locks && npm run verify:keyword-locks             # project the contract into code (page headers + src/content/keywordLocks.ts)
npm run verify:seo-contract                                   # 0 collisions, banned terms, redirects
python3 docs/seo/keyword-map/build-keyword-map.py             # rebuild the map from the snapshot
```

## Keyword locks in code

`scripts/generate-keyword-locks.py` writes a `// KEYWORD LOCK … // END KEYWORD LOCK` header into every page component (resolved through `src/routes.tsx`), a `keyword_lock` field into each HandoffPage JSON, and `src/content/keywordLocks.ts` (`KEYWORD_LOCKS`, `keywordLockFor(pathname)`). The contract stays the source of truth; `npm run verify:keyword-locks` fails when any file drifts from it, so a session that rewrites a page from an old copy is caught before it ships. Not a `<meta name="keywords">` tag — search engines ignore that and it reads as a spam signal.

## What the data can and cannot say

Volumes exist only for the private-chef cluster (Semrush UAE, 25 Aug 2026) and the 13 `ae` rows of the owner's export. Autocomplete proves a phrase is typed, not how often. Semrush is out of API units; GSC has no mychef.ae property; Ahrefs is plan-gated (see `docs/seo/CONSOLIDATION-PLAN.md` §3). Pages that keep open slots do so because no *relevant* phrase exists in the pool — padding them would be the damage the brief forbids.
