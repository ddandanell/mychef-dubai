# Conversion Optimization Sprint — Design

**Date:** 2026-07-19  
**Goal:** Turn every page into a lead-generation asset while keeping price exposure controlled and trustworthy.

## Principles
1. **Lead first, price second.** Exact AED pricing lives only on dedicated pricing/package pages. Everywhere else we use ranges, "from", or "request a quote" to start conversations.
2. **One primary CTA per section.** Every major section above the fold and at the bottom drives to `/inquiry` or WhatsApp.
3. **No headline leakage.** All `PageHero` titles and `<h1>` elements are plain strings; no JSX fragments render as text.
4. **Schema on every page.** Every indexable route has a valid JSON-LD `@graph` with at least Service + BreadcrumbList; FAQ pages add FAQPage.
5. **Answer-first SEO.** H2s answer the question a searcher typed, not just describe the page.

## Workstreams

### 1. Price exposure audit & softening
- Identify non-pricing pages with exact AED figures.
- Replace exact prices with soft ranges or remove them where they distract.
- Keep exact prices only on: `/private-chef-prices-dubai`, `/dubai-catering-prices-guide`, `/catering-cost-calculator-dubai`, `/catering-packages-dubai`, and the four dedicated package pages.
- Package cards on non-pricing pages can show "From AED X" if it helps qualify, but the button must say "Get a custom quote".

### 2. CTA standardization
- Hero CTA primary: action-specific (e.g. "Plan My Proposal Dinner", "Get a Corporate Quote").
- Hero CTA secondary: WhatsApp with campaign-specific message.
- Bottom CTA banner on every page.
- Buttons link to `/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=<campaign>`.

### 3. Headline & meta hardening
- Scan all `src/pages/**/*.tsx` for `title={<>...` or `title={`...<br`.
- Ensure every page has a unique `title` and `description` in `<SEO>`.
- Convert any remaining JSX PageHero titles to plain strings.

### 4. Schema completeness
- Add `@graph` schema to pages missing it.
- Ensure FAQ accordions feed `faqPageSchema`.

### 5. Internal linking
- Add 1–2 contextual cross-links in body copy per page to relevant services.
- Ensure no orphan pages outside the site-map.

## Out of scope
- New page creation (already done in batches 1–5).
- Off-page SEO / GBP / directories (blocked on accounts).
- Major design system changes.

## Success criteria
- `npm run build` passes with zero TS/lint errors.
- All modified pages return 200 in production.
- No exact AED prices on non-pricing service pages unless intentionally kept as "from" qualifiers.
- No JSX fragment PageHero titles remain.
