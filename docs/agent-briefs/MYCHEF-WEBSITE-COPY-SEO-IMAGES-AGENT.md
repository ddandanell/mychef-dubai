# myCHEF website copy, search and photography agent brief

**Prepared:** 24 September 2026. **Site:** https://www.mychef.ae. **Repository:** `ddandanell/mychef-dubai` (`main` deploys to Vercel production). Give this entire file to a ChatGPT agent with access to the site, repository, Google Search Console and GA4.

## Your assignment

Audit **every currently active public page**, then improve its writing, usefulness, imagery, navigation and search presentation **one page family at a time**. Do not indiscriminately rewrite a recently polished site. Establish a fresh baseline, distinguish actual gaps from already completed work, and give the owner a page-by-page plan. Only make a customer-facing change after showing its exact before/after and receiving approval for that batch. Never claim you reviewed all pages until the inventory and review log account for every route.

**Owner-specific locks:** The homepage was explicitly restored on 23 September. Preserve its current content and layout unless the owner separately authorises a homepage rewrite. Paid traffic may land **only** on `/birthday-catering-dubai` and `/yachts`. Do not change those paths, their canonical destinations, tracking, enquiry flows, paid-ad settings, budgets or bids. A content/image edit on those landing pages needs extra mobile, form and measurement QA. No ads changes are authorised by this brief.

## What is already done — do not duplicate it

The repository's 22 September reviews report rewrites and distinct imagery for 92 catering routes, image/link work for 42 blog articles, and a broader editorial audit. The 23 September homepage restoration supersedes the 22 September homepage redesign. Treat these as **prior work to verify**, not proof today's production is perfect and not a mandate to replace everything. Read:

- `docs/editorial-audit/2026-09-22/README.md`
- `docs/catering-redesign/2026-09-22/README.md` plus `image-manifest.json` and `supporting-image-manifest.json`
- `docs/blog-audit/2026-09-22/README.md`
- `docs/homepage-restoration/2026-09-23/README.md`
- `docs/seo/page-records/_index.json` and the individual page records
- `docs/seo/myCHEF-AE-SEO-STANDARD.json`, `docs/design-baseline.md`, and `skills/mychef-writing-system/` if present

The page register dated 22 September listed **173 indexable pages, 56 noindex support pages and 91 redirects** (320 records). Search Console's sitemap summary on 24 September reported **176 submitted URLs, zero sitemap errors/warnings**. These are different snapshots/definitions, not proof of an indexing problem. Reconcile the current sitemap, route list, page register, redirects and actual HTTP/HTML before reporting final coverage; include new routes and unsitemapped active routes. Do not rewrite redirects as pages or change an intentional noindex policy without evidence and approval.

## Evidence snapshot — use as a starting queue, not a promise of future results

Google Search Console property `https://www.mychef.ae/`, **25 Aug–21 Sep 2026**, 28 complete days; the comparable preceding window is **28 Jul–24 Aug**. This is mostly **before** the 22–23 September releases, so do not attribute subsequent results to those releases or assume older search snippets reflect current copy. Search impressions are appearances, not visitors; average position spans many queries.

| Page | Google impressions | Clicks | Average position | Why inspect first |
| --- | ---: | ---: | ---: | --- |
| `/catering-dubai` | 4,828 | 6 | 48.4 | High exposure but weak visibility and low clicks; diagnose query relevance, not just title text. |
| `/corporate` | 3,836 | 3 | 35.9 | Broad hub may be competing with specialist corporate pages. |
| `/private-chef-dubai` | 3,542 | 48 | 10.9 | Near page one for a core service; protect what works. |
| `/private-chef-dubai/pricing` | 1,321 | 25 | 11.1 | Price-intent page near page one; check answer quality and correct prices. |
| `/events` | 1,003 | 1 | 46.9 | Diagnose target queries and whether the hub earns its role. |
| `/yachts` | 979 | 2 | 40.0 | Paid landing page; query `yacht catering dubai` itself had 182 impressions, 1 click and average position 29.5. |
| `/birthday-catering-dubai` | 24 | 0 | 11.2 | Paid landing page; small organic sample, **not** proof of a broken page. |
| `/corporate-event-catering-dubai` | 1,091 | 0 | 62.0 | Check overlap with corporate hub and distinct intent. |

GA4 property `543704202`, same current 28-day window, **all channels**: `/yachts` had 80 landing sessions and 19 recorded **key-event occurrences**; `/birthday-catering-dubai` 28 sessions and 0 key-event occurrences; `/private-chef-dubai` 52 sessions and 4; `/` 125 sessions and 10. A key-event occurrence is **not a verified qualified WhatsApp enquiry, booking or sale**. The preceding GA4 window is sparse (for example, homepage 8 sessions), so do not call the month-on-month jump a copy improvement. Check event names, attribution and actual qualified leads in the booking system before recommending conversion claims.

Google URL Inspection on 24 September: `/yachts` and `/birthday-catering-dubai` both **submitted and indexed**, self-canonical and allowed. The last recorded Google crawls were 10 September and 11 August respectively, before recent edits. Do not say either page is unindexed or that Google has assessed the new content yet.

Microsoft Clarity's 3-day URL breakdown returned an incomplete/truncated result with no usable page metrics. **Do not manufacture scroll or click findings.** Re-pull narrowly if available; do not infer behaviour from that partial response.

## Specific copy and experience checks from the current review

1. **Catering reply hours conflict.** The live `/catering-dubai` page's closing section says a typical 15-minute reply is during **9am–9pm**, while its FAQ and wider site say **9am–11pm Dubai time**. The repository source `src/pages/Catering.tsx` contains the 9pm line. Confirm the actual staffed hours with the owner, then reconcile every customer-facing occurrence and structured data; do **not** guess which promise is true.
2. **Service scope language conflicts.** On `/catering-dubai`, one passage calls a 10–20 guest home catering party “one chef, one server”, while the same page sells food-only drop-off from 10 guests. The private-chef comparison describes that service as only recurring, though the homepage offers one-off dinner experiences. Rewrite these sections into accurate, separate choices: food delivery, a one-off chef-led dinner, staffed event catering, and recurring household cooking; verify inclusions and prices first.
3. **Search phrasing versus human clarity.** The reviewed catering and yacht copy contains strings such as “Hosts looking for catering services Dubai start here” and “A chef for yacht charter Dubai”. Remove unnatural search-term sentences; retain each page's primary topic in the title, H1 and useful opening, with related terms only where they read naturally. The current page-level keyword owner in the SEO contract wins.
4. **Long decision journeys.** The sampled birthday page contains multiple introductory pathways, a concept-visual gallery, format and extras sections, repeated brief prompts and a lengthy FAQ. The yacht page's source register lists roughly 5,941 words; the birthday register about 5,312, catering about 4,808. These are source audit counts, **not an instruction to cut to a word-count target**. On mobile, test whether users can reach prices, service inclusions and the enquiry without wading through repeated sections; propose consolidation only if useful details remain accessible. Preserve the two birthday lanes: intimate private milestone and larger statement celebration.
5. **Proof versus illustrations.** Birthday copy labels many images “Experience concept shown” but also introduces a yacht birthday as a case-study event; corporate uses “Company events we have run” beside examples described as usual formats. Check the underlying booking evidence and consent. Separate documented work from illustrative briefs in headings, captions and metadata. Never imply an AI-made photograph records a client's event, or invent an actual chef, review, qualification, licence, insurance cover, 15-minute response guarantee or completed booking.
6. **Images: upgrade selectively, not wholesale.** I visually inspected the current catering editorial hero (`/images/catering-editorial-2026/catering-dubai-800.webp`), the real yacht hero (`/images/yacht-work/deck-table-skyline.webp`), the birthday hero and corporate hero. The catering image clearly shows chefs plating; keep it unless a clearly better approved service image exists. The real yacht hero documents a dressed, empty table; keep the real-work provenance and yacht gallery, but consider an **approved real onboard food/service moment** as a stronger first image if one exists. The birthday hero looks like an intimate dinner, a fit for the private lane but less representative of a larger birthday; the corporate hero depicts a small seated dinner rather than office catering. Create a short shot list for missing use cases before commissioning new photos. Existing 22 September audits report 211 uniquely assigned catering photos and 120 distinct blog photos; **verify current rendering** and do not claim the site has no imagery.
7. **Yacht and birthday paid pages.** Yacht service is food, chefs, service staff and loading on a yacht the client already owns or has chartered: never say myCHEF supplies or hires a yacht. Keep yacht catering and onboard-chef intent distinguishable. Birthday is both UHNW intimate dining and statement-scale celebration. Keep both current URLs and working enquiry/WhatsApp links. Do not send paid traffic to another page.

**Source caution:** Readable page extraction and raw production HTML differed on the yacht page during this review: the extracted text reflected an older hero/quote presentation, while the current HTML and repository show the newer page with a real-work hero and calculated quote examples. When a crawler extraction disagrees, use the current rendered page, HTML and current repo source; note the discrepancy instead of filing a stale issue. The quote calculation in `src/content/yachtCateringQuote.ts` is authoritative for the estimator. Do not repeat an old total without checking current output and approved proposal.

## Visual standard and photo plan

Maintain myCHEF's editorial character: Cormorant Garamond display, Manrope body, black/charcoal, cream and restrained gold (`#C8A45C`, accessible dark-gold text `#7A5F1C`). Use the actual current page styles; the older design baseline is a reference, not authority over a newer approved design. Warm, real hospitality, not generic stock luxury, badges everywhere or hard-sell banners.

For **every active page**, record hero and supporting image paths, provenance (approved real client work / licensed stock / AI concept / unknown), subject, crop on phone and desktop, resolution, accessibility text, duplicate use, loading and whether the image proves the service the page promises. Use approved real work first; ask for permission for guests, residences, uniforms, yacht identities and case studies. Never generate a fake portrait of a named chef or a supposed real booking. If no real image is available, prepare an asset request/shot brief for approval rather than silently substituting a staged concept. The yacht's existing real `public/images/yacht-work/` archive is protected.

Suggested owner photo requests, subject to consent: (a) yacht: chef finishing a dish or passing canapés onboard with visible service context; (b) birthdays: one intimate chef-led table **and** one staffed 30–40 guest celebration with discreet guests; (c) corporate: office drop-off layout, labelled dietary options and a boardroom service scene; (d) catering hub: real buffet, canapé pass and kitchen work representing three formats. For every replacement supply original source/provenance, filename, intended page/placement, responsive variants, descriptive alt text and before/after phone/desktop screenshots. Do not put generated image credits on a live page, but do retain internal provenance.

## Site-wide execution workflow

### 1. Inventory and baseline

- Enumerate current `https://www.mychef.ae/sitemap.xml`, `src/routes.tsx`, dynamically generated location/topic/article routes, `docs/seo/page-records/_index.json`, the blog registry, `vercel.json` redirects, and linked but unsitemapped support pages. Record path, live status, canonical, robots, sitemap presence, business owner, route source, page family, primary search intent, paid-traffic status, last update and whether it is active/redirect/noindex. Resolve inventory mismatches before calling the review complete.
- Read fresh Search Console page+query performance for the last 28 complete days and the preceding 28, plus GA4 landing sessions and **named** enquiry events; check recent daily data after the September releases. Ask the owner for qualified enquiries with date, guest count and Dubai area. Do not treat all key events as sales or infer keyword search volume from impressions.
- Record a screenshot and mobile/desktop baseline of every active page; start with high-impact hubs and paid destinations, then move through private-chef, events, corporate, institutional, cuisine, locations, guides, blog, trust and utility pages. Inspect actual first render **and** hydrated browser page when they differ.

### 2. Write a page-specific recommendation before touching that page

For each URL, provide: intended visitor and job; exact current title/H1/lede/CTA; what is already good; 1–3 evidenced defects with source and date; proposed exact replacement text; unique information to retain; owner facts needed; photo keep/replace/request decision; internal-link change only if verified; and a risk/priority level. Include an expected business effect as a **bounded, low/medium-confidence estimate only if supported**; otherwise say “impact not yet quantifiable” and collect a baseline first. Set a falsification check (e.g. qualified enquiries, form completion, mobile CTA use, relevant-query clicks) and a review window. No generic “add more keywords”, guessed ranking gains or entire-site find/replace.

### 3. Copy and SEO rules

- Write polished British English, warm but precise: lead with what the chef/team does, for whom, where, what's included/excluded, guest-count/minimums, practical next step. Short paragraphs, useful subheads and concrete details. No exaggerated luxury claims, keyword-stuffed connective tissue, hard sell, invented scarcity, fabricated social proof or cloned near-identical neighbourhood pages.
- Preserve actual booking terms, calculator arithmetic, approved prices, VAT, staff roles and privacy requirements. Cross-check homepage, specialist pages, calculator, enquiry page, FAQ and structured data. Conflicting public figures go in an **owner-approval ledger** and are not silently 'resolved' by changing one source.
- Give each page one distinct search purpose; use its current primary owner from the SEO contract. Compare likely cannibalisation before creating or merging pages. Keep URL/canonical/index policy stable; never redirect or delete without an owner-approved migration plan. Unique title and description should accurately preview that page. Keep visible FAQ and structured data consistent; do not add markup promising search features.
- Make the enquiry action match the service and carry date, guest count and Dubai area; yacht also needs marina/yacht status, birthday needs format and guest mix, corporate needs venue and service level. Test destinations and selected extras transfer. Preserve working tracking.

### 4. Changes and QA, small approved batches

- Show the owner an ordered backlog and seek sign-off on **one page family or a small batch** before editing. Preserve the homepage lock. Find the real rendered copy source: `src/pages/`, `src/content/`, `src/sections/`, `blog/data/*.json` plus converter, metadata overrides and pricing modules. The commercial SEO JSON register may contain unrendered legacy body text: do not edit a register and claim the visible site changed.
- Keep a change log with old/new copy, source file, image asset and approval. Make focused edits; do not let a generic template overwrite page-specific material. Build/prerender, run repository SEO/URL/keyword/pricing/enquiry checks, and review all affected pages on desktop and phone. Verify one H1, correct title/description/canonical/index setting, image load/crop/alt, internal links, contrast, price math, clear CTAs, form and WhatsApp flow, structured data, and no broken redirect.
- On the two paid destinations, perform an extra before/after check for headline/offer consistency, form and WhatsApp lead capture, event firing and exact destination URL. Do not change ads or budgets. After publishing, open the live pages and recheck the same items; log the actual deployment and exceptions. If verification fails, roll back that page's change rather than reporting it done.

## Deliverables back to the owner

1. **Complete inventory and coverage ledger**: every active public route marked reviewed/changed/kept/blocked, with redirects and noindex pages separately counted.
2. **Ranked page-by-page backlog**: exact evidence, before/after copy, photo keep/replace/request and owner questions; commercial hubs and paid destinations first, then supporting families.
3. **Photo shot list and provenance register**: approved source or consent gap, placement, crop and accurate alt text; no fake client-work photographs.
4. **Small approved implementation batches** with before/after previews, tests and live verification; a list of remaining blocked claims and assets.
5. **Measurement follow-up**: 28 complete days after each release, compare relevant Search Console queries, organic landings, named and qualified enquiries, and mobile form completion against a comparable baseline. Do not credit an edit for a traffic swing without considering indexing lag, seasonal demand and other changes.

**Start your first reply to the owner with:** a short inventory count with its date, the top three substantiated gaps, the fact that much of the site was recently updated, and one proposed first review batch. Ask only for facts you cannot verify (first: correct staffed reply hours, access to approved real event photos, and which public price/terms source is authoritative). Do not begin by rewriting the homepage or publishing a site-wide bulk edit.
