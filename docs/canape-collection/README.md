# Canapé collection — 23 September 2026

Rebuilds the existing `/canape-catering-dubai` URL as a premium, searchable collection of 50 illustrative menu concepts. Research draws on selected primary catering sources across London, New York, Melbourne, Singapore, Hong Kong, Cape Town and Dubai; see `research.json` for evidence and keyword data. The separate user blueprint records the full research, sales strategy, buyer groups, photo direction and keyword universe.

## Customer experience

- Fifty individually illustrated dishes across seafood, meat and poultry, vegetarian, vegan and sweet categories.
- Six curated starting menus; category, temperature, dietary and ingredient filters.
- A saved shortlist with an explicit WhatsApp handoff, and a guest/format quantity estimator.
- Twenty visible FAQs covering quantities, pricing, service, venue needs and dietary planning.
- Existing AED 150 starting price and ten-guest starting brief retained; premium ingredients and final service scope remain subject to proposal.

## Content ownership

`src/content/canapes/collection.json` owns dish concepts and collections. `src/content/canapes/faqs.ts` owns FAQs. `src/pages/CanapeCatering.tsx` owns editorial content and the interactive experience. The older shared catering expansion is excluded from this URL to prevent duplicate copy and metadata.

The collection and hero use 51 original AI-created menu illustrations. `image-prompts.json` records their generation prompts and responsive derivatives. The public page identifies them as illustrations; they are not represented as photographs of fulfilled myCHEF orders. Ingredient notes are indicative, and culinary partners confirm recipes, sourcing and suitability.

## Search and verification

Preserves the commercial URL, brand and keyword ownership. Uses one H1, title, description and canonical; route-owned social image; Service, ItemList and breadcrumb data; descriptive image filenames and alt text; contextual links to existing related pages. All fifty dish cards render in the initial HTML. Native FAQ content is visible without a FAQ rich-result promise.

Validation includes the TypeScript/Vite build, existing SEO contract and keyword gates, targeted production prerender, responsive screenshots, asset integrity, and browser checks for menu filtering, collection deduplication, shortlist persistence, calculator output and validated/encoded enquiry handoff. No enquiry is sent by these checks.

## Measurement

Track Search Console clicks, impressions and CTR for the existing page and query group. Track collection selection, dish shortlisting and WhatsApp intent events without personal brief text in event payloads. Measure qualified enquiries and accepted proposals separately from CTA clicks. No ranking or conversion improvement is guaranteed by launch.
