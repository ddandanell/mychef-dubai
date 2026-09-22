# SEO in this repo

**What the site and every writer read:** [`myCHEF-AE-SEO-STANDARD.json`](./myCHEF-AE-SEO-STANDARD.json)

That file is the shipping contract for each URL: locked primary (eight-sub cap), title, H1, meta, canonical, robots, schema, breadcrumb, siblings, hub uplink, banned terms, QA gates.

How to use it: [`myCHEF-AE-SEO-STANDARD.md`](./myCHEF-AE-SEO-STANDARD.md)

## Keep

| File | Role |
|---|---|
| `myCHEF-AE-SEO-STANDARD.json` | Contract. `pages[path]` only. |
| `MYCHEF-KEYWORD-MAP.md` | Historical lock (19 Aug). Already baked into the contract primaries. |
| `myCHEF-AE-KEYWORD-BLUEPRINT.md` | Human ownership / decision log. The `.xlsx` workbook lives outside git if you keep a copy. |

## Do not feed to writers

- `mychef-master-keywords.json` / `.csv` — merge dump. 44 URL fights. Historical only.
- `mychef_ae_keyword_architecture_500.json` — architecture layer. Not allowed to rename a locked primary.
- `silo-map.json` — generated linking snapshot. Do not treat as a second ownership file.

Writer rule: prepend `agent_preamble` from the contract, then pass **only** `pages[path]`.

Schema: [`myCHEF-AE-SCHEMA-PLAYBOOK.md`](./myCHEF-AE-SCHEMA-PLAYBOOK.md). One organisation node. Not Restaurant. Not FAQPage on every URL.

## Check

```
npm run verify:seo-contract
```

Refuses a ship when the contract has a primary collision, a title/H1 uses a foreign primary or a banned term, or a required redirect is missing from `vercel.json`.


## September 2026 page records

`page-records/_index.json` indexes one JSON file per public, support or historical URL. Each file records the primary and secondary keywords, intent, page purpose, source files, canonical/indexation state, rendered metadata and audit references. The ownership authority remains `myCHEF-AE-SEO-STANDARD.json`; the page records are a generated projection.

Run `npm run seo:page-records` after building and prerendering, then `npm run verify:page-records`. Search volumes are explicitly unmeasured, rather than inferred from the copy. The complete audit and change log are in `../editorial-audit/2026-09-22/README.md`.
