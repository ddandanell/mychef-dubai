# myCHEF daily supporting-blog publishing brief

Owner instruction, 15 October 2026: publish five useful, reviewed blogs each day, catch up held articles, and use blogs to support the private-chef and catering service pages rather than compete with them. This brief supplements the website copy brief and governs new blog publication and Ryze topic selection.

## Editorial objective

The service pages own commercial search intent. `/private-chef-dubai` and `/catering-dubai` are the main service destinations. The existing SEO contract also assigns specialist support to `/full-time-private-chef-dubai`, `/corporate`, `/events`, `/luxury-dining-experiences`, `/yachts`, and `/institutional-catering-dubai`. Preserve that hierarchy.

Each article answers one genuinely distinct informational question: a planning decision, preparation checklist, coordination problem or practical explanation. Do not turn blogs into alternative service landing pages, commercial head-term lists, repetitive “best provider” pages, or near-duplicate variants of an existing guide. Search performance is judged first on the relevant service pages and genuine enquiries; blog impressions or average positions alone are not the business goal. Do not promise ranking gains.

Before writing, compare all existing article topics and the current `docs/seo/myCHEF-AE-SEO-STANDARD.json`. Choose a unique informational primary. Assign exactly one core money-page owner. Keep the article's title, H1 and opening focused on its useful question. Add a descriptive, crawlable contextual link to the owner early in the body and a relevant service/enquiry next step. Catering subtopics may also link naturally to `/catering-dubai`. Use relevant supporting guides sparingly. Link directly to current canonical destinations, not retired or redirected articles. No unrelated promotional outbound insertions.

## Daily operation

Use the existing daily Ryze run and native content plan as one coordinated pipeline. Check the native plan, repository, production URLs and today's actual published inventory before acting. The daily target is five new, distinct, quality-approved articles in total across this existing pipeline. Count articles actually live today in Asia/Dubai before acting; publish only the remaining number needed to reach five. If five are already live, verify them and stop. This replaces the earlier one-per-day target. Publishing a JSON export or scheduling a task does not count as a live article. Keep the established business schedule in Asia/Dubai. Do not invent historical missed-day counts. Where a real dated backlog exists, quality-reviewed held articles count within the five daily publications; do not add catch-up posts above that total. Do not publish near-duplicate topics to meet the target; report the actual shortfall and cause if five useful articles are not ready.

Publication is authorized by the owner. For an approved new article, update `blog/data/<slug>.json`, the SEO contract, photography and generated route/sitemap projections together. Preserve original publication timestamps on repairs and record the actual modification date. Never mark source published and stop before its URL works. Native Ryze “published” status alone does not prove the website deployed it. Reconcile the current article export with approved editorial assignments so a later import cannot restore conflicting titles or draft status.

## Ryze preference targets and money-page protection

Owner clarification, 12 October 2026: all blog blocks and publishing automation must support the pages that sell catering, chef services and paid packages. This brief is the repository policy; native Ryze preferences must be read, saved and verified separately. The owner requires MCP access only, with no email or browser login. A repository policy update is not proof that the native daily-frequency setting or scheduler changed.

- Language: English. Target market: United Arab Emirates, with Dubai-specific customer questions. Tone: practical, accurate and clear. Length: Dynamic; do not add filler to meet a fixed word count.
- GitHub destination: `ddandanell/mychef-dubai`, branch `main`, folder `blog/data`. Public blog URL and headless override: `https://www.mychef.ae/blog`. Confirm the saved values in Ryze rather than assuming them from published files.
- Use Manual native publishing while reconciling the plan with the SEO contract. Retain the existing reviewed daily pipeline; do not run a second independent automatic publishing pipeline. Resume ungated Automatic publishing only after a due article can be exported with its approved metadata, authority assignment and successful deployment checks.
- Turn off Backlink Exchange for this workspace. Keep useful editorial citations to authoritative sources; do not insert reciprocal promotions or unrelated partner links. Do not enable automated press releases as part of blog publishing.
- Protect every existing service, pricing, package, menu and quote-calculator page from blog-driven rewrites, keyword reassignment, new indexation rules and automated article blocks. Commercial titles, H1s, pricing tables, menus, review widgets and enquiry CTAs on those pages require their own authorized page work. Article publication changes the article and its necessary route/sitemap projections only.
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
