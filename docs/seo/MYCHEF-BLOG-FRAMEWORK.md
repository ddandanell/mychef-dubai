# myCHEF blog publishing framework

Adapted from the owner's framework on 15 October 2026 for **mychef.ae**, its eight protected service hubs and its existing Ryze → GitHub → Vercel implementation. Execution instructions: `docs/agent-briefs/MYCHEF-DAILY-SUPPORTING-BLOGS.md`. The daily automation must apply these gates and produce `blog/publishing-checklists.json` for every new post.

The aim is useful answers for prospective customers, with a clear route to the relevant service. Five articles is the daily target, subject to genuine editorial quality. No publication count, schema choice, link count or image count guarantees rankings.

## Gate 0: a useful, distinct question

- Check current GSC query/page data and GA4 organic landing pages. Record the informational target, one primary money page, a real existing cluster and the evidence period. Commercial investigation is acceptable only if independently useful and factual; avoid another round of generic provider comparisons. Transactional service and price terms remain with existing money pages.
- Record actual GSC impressions/clicks for the question where available. If GSC only establishes demand for the parent topic, explicitly label the exact new question **unproven** and explain its concrete customer value and distinct content gap. An unobserved precise long tail is not proven zero demand, and a parent keyword's impressions are not that long tail's search volume. Monthly volume is `null` unless a connected research source actually returns it. Semrush/Ahrefs are not mandatory dependencies where unavailable; never invent their data.
- Read the nearest existing article and compare all assigned primaries. Existing coverage means maintenance, not another URL with a slightly altered question. GSC query overlap is a signal for review, not proof of cannibalisation. Keep new claims focused on useful planning rather than fictional expertise.
- Each article has one primary owner. Up to two other services may be linked only when the subject needs them. No orphan or off-topic posts.

## Gate 1: discovery and archives

- The main archive has 12 posts per page with ordinary numbered `<a href>` links. `/blog` remains page one. `/blog/page/2` and subsequent pages are newly added routes, self-canonical, indexable and prerendered with unique page-number titles. Do not rename or redirect any existing article.
- Sort dated article cards newest first. Provide title, available authentic date, category, short excerpt and image. Do not invent a precise historical day for legacy cards that only have a known month.
- Pin three useful starting guides separately from the chronological archive. Topic hubs link the complete relevant inventory, with useful starting guides first. Keep the existing commercial keyword assignments and the **existing noindex,follow hub policy**; a crawlable navigation hub need not compete as an indexed commercial landing page. No new thin tag pages.
- Retain the homepage/footer → blog → hub → article path. Related guides and relevant reverse links add more discovery routes. Audit actual rendered links, not just JSON relationships.

## Gate 2: article presentation

- Use short meaningful new slugs without date decoration; preserve all live URLs. New titles should be descriptive, brand-suffixed and normally at most 60 characters. New descriptions are useful 140–160 character summaries; do not expand every older description merely to meet a count.
- Answer the specific question in the opening 100 words. Aim for a compact opening answer when natural, without a rigid featured-snippet formula. Use one H1 and meaningful H2 questions/sections, with H3s nested sensibly. No fixed minimum length: the first batch's roughly 600-word practical guides can answer their questions without 1,200 words of filler.
- The shared imported-article template places a linked **myCHEF Dubai company byline** near the headline, exact human-readable publication date and a material update date when different. Link to `/about`; do not invent a person or imply a chef reviewed AI-written text. Disclose material AI assistance truthfully.
- Put the usable H2 contents links after the introduction and before the first H2. Use readable unique IDs. Include FAQs only when genuine customer/search questions add information; do not append six repetitive questions automatically.
- Include concrete original value: a worked example, decision table, checklist or specific planning method, supported by original contextual photographs. Benchmark relevant current results and primary sources when making factual claims; neither copying competitors nor exceeding their word counts is a quality standard.

## Gate 3: useful service and guide links

- Add a descriptive contextual owner link in the first two or three paragraphs, within 200 visible words. Use natural varied labels. Add a clear closing service/enquiry next step.
- Do **not** force identical mid-post and end-post sales blocks into every short guide. Add a mid-post action only when it helps the decision. Do not stuff exact commercial anchors or enforce an arbitrary link density.
- Link the real cluster and a few genuinely related guides. Related reading uses curated relationships first and same-cluster siblings next; it never fills space with unrelated recent posts.
- Before publication, arrange at least two relevant existing-guide reverse links using the shared related-reading system; verify that the links actually render. The core money pages retain their established guide sections/caps, rather than accumulating daily blocks. The existing shared module is capped at three cards, and pages with their own curated planning links keep those sections.

## Gate 4: pictures and information aids

- Use at least three distinct approved original photographs per article: hero plus two inline. Add more only where the content warrants them. There is no claim that three images, or one per H2, is a ranking factor. Prefer an authentic hero at least 1200 pixels wide where suitable; never enlarge an unsuitable or low-resolution photo merely to satisfy a checkbox.
- Select relevant owner-supplied local WebP assets from the previous-work catalogue. No copied web images, mandatory stock quota or made-up client shoots. A hypothetical scenario is not a documented booking; captions and disclosure must reflect this.
- Use descriptive alts, correct intrinsic dimensions and responsive variants. Load the hero eagerly and inline images lazily. Preserve existing filenames and approved photos instead of renaming images already in use. Compression/size is judged with appearance and delivered responsive dimensions, not a universal 150KB cutoff.
- Every guide should have an information aid where it helps: an accessible HTML comparison/decision table or checklist qualifies. Do not make a redundant graphic just to increase image count. Place illustrations close to relevant sections and caption them honestly.

## Gate 5: technical publication

- Use the existing shared Article/WebPage/BreadcrumbList graph, not embedded duplicate JSON-LD. Organization authorship is appropriate for these company guides; Person markup is used only for a real named author. Publisher identity resolves to the existing Organization with logo. New articles include their cluster in the contracted breadcrumb; preserve established legacy trails until deliberately reviewed.
- Source, visible dates, Article dates and sitemap lastmod must agree. Modification dates advance only for substantive editorial changes. Regenerating projections does not make a post new.
- New article URLs must be self-canonical, indexable, in the canonical sitemap and deliver meaningful prerendered HTML. Keep existing noindex and redirect decisions. FAQ content may be useful; do not add FAQ schema to every article.
- Run source, type/build, prerender, link, photo, canonical and production checks. Inspect desktop and mobile; test TOC, tables, image dimensions and CTAs without submitting an enquiry.
- Monitor real mobile CWV against Google's current good thresholds (LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 at the 75th percentile). A new URL may lack field data. Report it as unavailable, not passed. Local visual/interaction checks are not field CWV, and a site cannot promise every visitor will receive the same performance.

## Gate 6: measure and improve

- Read GSC impressions, clicks, CTR and position by query/page; compare equivalent complete periods and service owners. Read GA4 organic sessions, engagement and configured key events. The new `blog_money_page_click` engagement event records the source blog and owner destination; query it with built-in `pagePath` and `eventName`. Optional custom parameters need GA4 custom dimensions before they can be used in custom-dimension reports.
- An internal link click, WhatsApp click or generic configured key event is not proof of a qualified lead or booking. Review genuine enquiry/booking attribution where reliable; otherwise label assisted conversions unavailable. Do not replace working lead tracking or inflate conversions with navigation events.
- The same daily automation checks for due maintenance: review new posts after about 90 days, and established useful guides at 6–12 months. CTR under 1%, positions 8–20 or six months of no impressions are **review flags**, interpreted with impressions, query intent, seasonality, indexation and conversions. They do not trigger blanket title churn, merges, deletion or redirects.
- Refresh helpful content when facts or customer needs change. Any proposed merger/removal requires a concrete relevance/traffic/link assessment, a preserved useful destination and separate deliberate URL-retirement work. Never auto-delete or auto-301 a post merely because of one threshold. Save a dated measurement/review record and the actual outcome.

## Filled checklist

`blog/publishing-checklists.json` contains each new article's keyword, true available demand evidence, owner, cluster, overlap review, title/meta lengths, opening answer, original value, photo provenance, dates, rendered byline/TOC/schema/image checks and actual reverse links. It explicitly states CWV/attribution limits. The publication ledger separately records deployment and live HTTP/canonical/photo/sitemap verification. An unchecked or unavailable measurement is never labelled passed.

References checked when adapting the owner's framework:

- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/search/docs/essentials/spam-policies
- https://developers.google.com/search/docs/appearance/structured-data/article
- https://developers.google.com/search/docs/specialty/ecommerce/pagination-and-incremental-page-loading
- https://developers.google.com/search/docs/appearance/core-web-vitals
