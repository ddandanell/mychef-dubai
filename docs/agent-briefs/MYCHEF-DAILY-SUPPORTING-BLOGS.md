# myCHEF daily supporting-blog publishing brief

Owner instruction, 15 October 2026: publish five useful, reviewed blogs each day, catch up held articles, and use blogs to support the private-chef and catering service pages rather than compete with them. Apply the adapted owner framework in `docs/seo/MYCHEF-BLOG-FRAMEWORK.md` at every run. This brief supplements the website copy brief and governs new blog publication and Ryze topic selection.

## Editorial objective

The service pages own commercial search intent. `/private-chef-dubai` and `/catering-dubai` are the main service destinations. The existing SEO contract also assigns specialist support to `/full-time-private-chef-dubai`, `/corporate`, `/events`, `/luxury-dining-experiences`, `/yachts`, and `/institutional-catering-dubai`. Preserve that hierarchy.

Each article answers one genuinely distinct informational question: a planning decision, preparation checklist, coordination problem or practical explanation. Do not turn blogs into alternative service landing pages, commercial head-term lists, repetitive “best provider” pages, or near-duplicate variants of an existing guide. Search performance is judged first on the relevant service pages and genuine enquiries; blog impressions or average positions alone are not the business goal. Do not promise ranking gains.

Before writing, compare all existing article topics and the current `docs/seo/myCHEF-AE-SEO-STANDARD.json`. Choose a unique informational primary. Assign exactly one core money-page owner. Keep the article's title, H1 and opening focused on its useful question. Add a descriptive, crawlable contextual link to the owner early in the body and a relevant service/enquiry next step. Catering subtopics may also link naturally to `/catering-dubai`. Use relevant supporting guides sparingly. Link directly to current canonical destinations, not retired or redirected articles. No unrelated promotional outbound insertions.

## Daily operation

Use one native Ryze scheduled agent as the reviewed publisher, with Ryze MCP supplying connected Google data, upstream drafts and GitHub publication. The active recurring schedule is `8d040578-0712-40c3-affa-6cf8bcdc7d91`, also identified in `blog/publishing-policy.json`. It authors the work and invokes the reviewed GitHub Actions executor, rather than sending a reminder. Do not create another publisher or another daily schedule. No email or browser login. This workflow does not claim to change Ryze's unavailable native frequency control.

The target is five useful new articles per Asia/Dubai day, across the whole approved pipeline. `blog/publishing-ledger.json` reserves staged places, records verified live publications and prevents a retry producing another batch. The baseline contains the 106 pre-system articles; it is not a fabricated history of their first live dates. Maintenance of existing articles does not consume new-publication places. Recover a staged batch before starting new articles. If recovery completes on a later day, its five count on that actual day, without adding another five. Do not invent missed-day debt or backdate new articles.

The ten-slot rotation covers all eight service owners over two batches, with private-chef and catering appearing twice. The planner prints the next owner slots. Each guide has exactly one primary owner; add another service link only when it genuinely helps its question. Do not force five articles to mention every service.

Unassigned Ryze exports claiming Published are automatically retained as `pending_review` by `scripts/queue-ryze-imports.py`, before conversion. Original upstream content and timestamps are retained. Review appropriate held drafts within the same daily quota and fill unused places with original useful guides. Existing approved exports continue through strict intent checks; a stale import cannot silently overwrite their approval. Retired articles stay retired. There is no second ungated route to live article pages.

Publication is authorized by the owner. Article sources, contract records, photograph plans, metadata, related-guide links, routes and sitemap must be committed together. The existing service-page planning module may show the three most recent relevant guides; keep that three-card cap and the service copy intact. A source claiming Published or a GitHub commit alone is not a live publication.

### Execution procedure

1. Use fresh `main` from `ddandanell/mychef-dubai`; preserve concurrent changes. Read this brief, the policy, ledger and current SEO contract. Run `python3 scripts/queue-ryze-imports.py`, then `python3 scripts/daily-supporting-blogs.py plan`. The output includes reserved batches, remaining places, owner slots, held imports and the current topic inventory. Recover unverified work first; check whether an earlier deployment is already live before retrying.
2. Read Search Console query-by-page data for `https://www.mychef.ae/` for the latest complete 28 days and the previous comparable period. Use a reporting lag and paginate if necessary. Read GA4 property `543704202` organic landing-page sessions, engagement and key events, with named date ranges. Treat key events as configured events, not automatically qualified leads. Check protected service-page trends and relevant new informational questions; distinguish measured demand from an editorial hypothesis. Sparse data is not a reason to invent volumes or claim cannibalisation. Do not repeat yesterday's topic or turn broad commercial queries into new blog landing pages.
3. Compare all existing page primaries and article content, not just slugs. Read the closest existing guide. Choose an unanswered reader question for each next owner slot. If the existing article already answers it, improve that article as maintenance and choose a different new topic. Record the reader question, distinct value, closest URL, overlap decision, factual-claims review and demand basis. Browse primary sources for factual, changing, legal, medical or technical claims; prefer practical planning guidance without unsupported claims. Do not fabricate first-hand experience, clients, reviews, author identities or professional review.
4. Author complete useful articles with a clear opening answer, specific explanatory sections, an actionable checklist/table where useful, and a relevant next step. Dynamic length, no padding, templated city variants, copied paragraphs, keyword stuffing or exaggerated titles. Add the contextual money-page link within 200 visible words. Use one H1 from the shared template and shared structured data; do not embed H1s or scripts in the body. Disclose material AI assistance accurately, without claiming an expert reviewed it unless that actually happened.
5. Select at least three distinct, visually relevant photographs from `src/content/previousWorkPhotos.json` with `sourceBatch > 0`. Inspect the selected files, use the real local dimensions, descriptive alts and honest captions. Existing photographs may illustrate context but must not be described as documentary evidence of the hypothetical example. Do not copy internet images or invent new client work. If no appropriate approved pictures exist, hold the topic or select another useful topic.
6. Prepare a scratch JSON payload following the input contract below. Run `python3 scripts/daily-supporting-blogs.py stage /absolute/path/batch.json`. It reserves the daily places and creates sources, contract entries, photos and review evidence after complete validation. A genuine quality shortfall may be documented; never publish filler to force five. Keep original dates on maintenance; use `approve-edits <slug> --reason "specific review reason"` to reapprove a changed system article, and verify it after deployment.
7. Generate authority, keywords and breadcrumbs, then convert, generate sitemap, run publishing regression tests, ownership, image, sitemap and full TypeScript/Vite/prerender checks. Verify rendered SEO contract, keyword locks, money-page authority, photography and public links. Inspect the new pages at desktop and mobile sizes; check for overflow, legibility, correct pictures and working CTAs without submitting customer enquiries. The existing Ryze publish CI runs the checks as a second gate.
8. Publish the complete reviewed change atomically to `main` through the Ryze GitHub MCP Git Data API, using the latest parent SHA and `force:false`. Re-read head before updating the ref; reconcile concurrent edits instead of overwriting. Large tree payloads may be split into successive base trees, then committed once. Do not expose credentials or use email/browser login.
9. Wait for the published commit's Vercel deployment and required GitHub actions. Run `python3 scripts/daily-supporting-blogs.py verify-live --date <batch-date> --commit <deployed-full-sha> --record`. It checks HTTP 200 with the intended title/H1, self canonical, robots, owner link, all three images and their asset responses, and canonical sitemap inclusion. Record only after all checks pass. Save the ledger evidence back to `main`; preserve an already verified publication day on rechecks. Confirm service-page metadata and canonical status remain correct. If a check fails, correct and retry the same reserved batch instead of creating another.
10. Resubmit the canonical sitemap via GSC only after deployment and read the result. Do not claim indexing or ranking improvement from a submission; inspect those later when data is available. Also read the ledger for due 90-day and 6–12-month editorial reviews; save dated GSC/GA4 measurements when due. Treat thresholds as review flags and do not automatically retire URLs. Finish with the five live URLs, owners, filled per-post checklists, actual photo and validation results, or an exact quality/access/deployment shortfall. A reminder or written plan is not completion.

### Payload input contract

Top level: `date` is today's `YYYY-MM-DD` in Asia/Dubai; `articles` is an array in the planner's owner order. Supply a substantive `shortfall_reason` only when fewer than the remaining five are ready. For each item:

- `article`: `slug`, `title` (the H1), `meta_title` (at most 60 characters), `meta_description` (140–160 characters), `excerpt`, distinct informational `primary_keyword`, complete `body_html`, relevant existing `related_articles`, at least two relevant existing `related_from` article URLs for reverse links, and an existing blog `hub`. Do not provide schema scripts or tracking forms.
- `owner`: next planned service owner; `owner_anchor`: descriptive contextual label.
- `photo_ids`: three or more distinct approved catalogue IDs, hero first; `photo_captions`: one caption for each subsequent image.
- `review`: substantive `reader_question`, `distinct_value`, `nearest_existing_url`, `overlap_review`, `claims_review`, `demand_basis`, and structured `demand_evidence` (`source: GSC`, observed query/page, reporting dates, impressions, clicks, `exact_query_demand`, `volume` set to null when unmeasured). A checklist assertion alone is not evidence that the editorial review occurred.

The staging helper preserves every existing contract record and URL. `verify` checks ledger integrity, daily cap, reviewed article fingerprints, photo selection and protected service-owner links. These are mechanical gates; the executing agent remains responsible for evaluating whether the text answers a useful, distinct question and whether its claims are supported.

### Native Ryze execution without a local terminal

The agent can author and publish using only Ryze MCP. Read `blog/topic-inventory.json` for the compact current topic map, the policy for owner rotation, and the ledger for dated reservations. Read the closest article sources before writing. Then dispatch the **Reviewed daily supporting blogs** workflow using GitHub write:

```json
{"ref":"main","inputs":{"mode":"publish","batch_json":"<serialized complete reviewed payload>"}}
```

Endpoint: `POST /repos/ddandanell/mychef-dubai/actions/workflows/daily-supporting-blogs.yml/dispatches`. The JSON is passed as data, never interpolated into shell code. The workflow runs the helper, builds and checks the exact batch before committing, verifies real live URLs after deployment, and persists proof. Read the exact run/jobs, source commit's Vercel status, and saved ledger/checklists; dispatch acceptance is not publication success. To recover a staged publication, use `{"ref":"main","inputs":{"mode":"verify","batch_date":"YYYY-MM-DD"}}`. A pre-publication failure has not consumed a remote ledger reservation; a committed batch must be recovered instead of regenerated. Always use a fresh main and preserve unrelated changes.

### Local build commands

Use `PUPPETEER_SKIP_DOWNLOAD=true npm ci` if the managed environment needs the packaged Chromium. The following are equivalent to the normal build workflow while avoiding the `tsx` CLI's unnecessary local IPC pipe:

```bash
python3 scripts/generate-page-authority.py
python3 scripts/generate-keyword-locks.py
python3 scripts/generate-breadcrumbs.py
python3 scripts/test-blog-ownership.py
python3 scripts/test-daily-supporting-blogs.py
node scripts/ryze-convert.mjs
node --import tsx scripts/generate-sitemap.ts
python3 scripts/verify-sitemap.py
python3 scripts/verify-blog-photography.py
python3 scripts/verify-page-authority.py
node scripts/generate-catering-design-index.mjs
npm run verify:images
node node_modules/typescript/bin/tsc -b
node node_modules/vite/bin/vite.js build
VERCEL=1 node --import tsx scripts/prerender.ts
python3 scripts/verify-seo-contract.py
python3 scripts/verify-keyword-locks.py
python3 scripts/verify-page-authority.py --rendered
python3 scripts/verify-blog-photography.py --rendered
python3 scripts/verify-public-pages.py
python3 scripts/verify-blog-framework.py --rendered
node scripts/test-site-navigation.mjs
node scripts/test-pricing-ui.mjs
```

If packaged Chromium extraction fails on ownership metadata, extract the installed `@sparticuz/chromium` Brotli assets with `tar --no-same-owner` in scratch; do not request security changes. A blocked local check is not proof that production is broken, and must be reported accurately.

## Ryze preference targets and money-page protection

Owner clarification, 12 October 2026: all blog blocks and publishing automation must support the pages that sell catering, chef services and paid packages. This brief is the repository policy; native Ryze preferences must be read, saved and verified separately. The owner requires MCP access only, with no email or browser login. A repository policy update is not proof that the native daily-frequency setting or scheduler changed.

- Language: English. Target market: United Arab Emirates, with Dubai-specific customer questions. Tone: practical, accurate and clear. Length: Dynamic; do not add filler to meet a fixed word count.
- GitHub destination: `ddandanell/mychef-dubai`, branch `main`, folder `blog/data`. Public blog URL and headless override: `https://www.mychef.ae/blog`. Confirm the saved values in Ryze rather than assuming them from published files.
- Native Ryze publishing preferences remain separately managed. The active reviewed publisher uses the automation and repository gate above. Ryze imports are upstream drafts; do not enable another native scheduler or treat a native Published label as editorial approval.
- Turn off Backlink Exchange for this workspace. Keep useful editorial citations to authoritative sources; do not insert reciprocal promotions or unrelated partner links. Do not enable automated press releases as part of blog publishing.
- Protect every existing service, pricing, package, menu and quote-calculator page from blog-driven rewrites, keyword reassignment, new indexation rules and expansion of automated article blocks beyond the existing capped planning-guides module. Commercial titles, H1s, pricing tables, menus, review widgets and enquiry CTAs on those pages require their own authorized page work. Article publication changes the article and its necessary route/sitemap projections only.
- Reserve commercial service and price keywords for their established canonical page. Blog titles, H1s, primary keywords and FAQs answer specific informational questions. If a price question arises, explain the factors and link to the current service/pricing page; do not invent a competing rate card.
- Each article must contain an early contextual link to its assigned service owner, a relevant next step and useful supporting content. TL;DR, FAQ, quote, product and CTA blocks must add information specific to that question; do not copy the service landing-page sections into every article or use sitewide commercial-keyword boilerplate.
- Review reference examples for topic overlap before using them. Preserve owner-approved images and provenance. Do not import third-party internet pictures or overwrite approved article images with a stale export.

## Publication warnings and queue reconciliation

Treat Ryze's Published, Failed and Published-with-warnings states separately. For each record, retain its original ID and slug; compare the approved repository file, intended public URL, deployed article, sitemap and canonical before changing status. A successfully committed JSON file is not proof of a deployed page, and an access failure in the audit environment is not evidence that the website is broken.

For a verified live article with a stale warning, use Ryze's supported Check page and, if needed, Resubmit sitemap controls. Do not blindly republish the old draft or erase a real warning. For a Failed article, read the actual error and correct the relevant destination, export or build defect before Retry. Review overdue drafts one by one and preserve the agreed daily cadence; do not bulk-publish an unreviewed backlog.

Measure overlapping commercial queries by query and page in Search Console, and judge progress on qualified enquiries and service-page performance. Overlap is a review signal, not proof that a blog caused a ranking decline. Preserve useful informational articles; do not blanket noindex, canonicalize them to service pages, change established slugs or delete posts just because an article currently ranks above its owner.

## Required publication checks

- Approved informational topic and money-page assignment in the SEO contract; generated `pageAuthority.json` matches.
- Accurate factual claims, no invented people, client bookings, reviews, prices, qualifications or service promises. Medical/nutrition requirements come from the client's qualified professional, not a blog prescription. Yacht service is catering/chef provision, never yacht hire.
- Exact canonical URL, unique metadata, one H1, visible article body and useful internal links.
- Curated local hero and at least two distinct inline images, with descriptive alt text and correct dimensions. Preserve provenance internally; illustrations must not imply documented client work.
- Converter, sitemap, SEO ownership, photography, type/build and prerender checks pass. Preserve intentional redirects and noindex routes, homepage, prices, payment terms, enquiry forms, analytics and tracking. Blog publication permits adding its own route, self-canonical, indexable policy and sitemap entry; it does not authorize changing existing pages' URL/indexation policies.
- Read back the commit, check deployment, then verify each production URL returns HTTP 200 with the intended article (not an SPA soft 404), correct canonical/robots and direct money-page links. Inspect desktop and mobile rendering. Do not report complete or clear a warning until production is verified.

If access or deployment blocks publishing, report the exact blocker and retain the reviewed work. Do not publish filler just to satisfy cadence, start a duplicate scheduler, change advertising spend, fabricate CRM outcomes or send customer messages. Use existing scheduled reporting preferences.
