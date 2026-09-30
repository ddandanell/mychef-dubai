# Household chef launch — 29 September 2026

The Private Chef service now offers two clear entry points: cooking visits and short stays, or a dedicated long-term household chef with matching, recruitment coordination and continuing support.

## Customer journey

- The existing `/full-time-private-chef-dubai` URL now owns the household service. Its existing search target and canonical are retained.
- New decision pages: `/private-chef-dubai/live-in-chef`, `/private-chef-dubai/live-out-chef`, `/private-chef-dubai/short-term-chef`.
- The header, mobile navigation, homepage, Private Chef overview, pricing, existing part-time/meal-prep pages, service process and footer lead into the appropriate journey.
- `/our-chefs` offers 25 detailed cuisine/role profiles, five per culinary level. These are explicitly chef styles used for matching, not fabricated named people or claims of present availability. Existing named chefs and their URLs are retained.
- Visitors can filter profiles, shortlist up to three and carry their selections into the enquiry. The form collects arrangement, monthly budget, start date, household size, area, schedule and food preferences. Both the existing lead endpoint's message and WhatsApp receive the details.
- Monthly indicative client service bands: Standard AED 18–22k; Select 22–28k; Senior 28–35k; Executive 35–42k; Elite 42–50k. VAT, groceries and agreed extras are separate. These bands shape a proposal and are not employee salaries or an availability promise. Existing cooking-visit calculations are unchanged.

## Imagery

29 original images were created with the built-in image generator: four service/arrangement photographs and 25 cuisine photographs. The images are illustrative. No generated chef portrait is attached to a fictional candidate identity.

`image-manifest.json` records each exact prompt, original output path and the 116 production WebP paths (480, 800, 1200 and 1536 pixels). Responsive delivery and lazy loading keep the catalogue manageable. The original PNGs are working assets; optimized images live in `public/images/household-chefs/`.

## Search preservation and keyword check

No existing URL was deleted, renamed, redirected or assigned another page's primary. The service additions have unique primary targets, self-canonicals, breadcrumbs, Service and matching FAQ schema, internal links and sitemap entries. No cuisine landing-page farm or invented Person schema was added. Useful existing long-form guides remain accessible. The URL inventory, keyword locks, breadcrumb registry and link map include the additions.

Google Ads historical metrics were checked for the UAE (geo target 2784), English (language 1000), Google Search, for September 2025–August 2026, on 29 September 2026. `full time private chef dubai` returned 20 average searches/month; `private chef dubai monthly` returned 10. `live in private chef dubai`, `live out private chef dubai`, `short term private chef dubai` and `household chef dubai` returned no metrics. Unavailable metrics are not zero volume. New pages are justified by the owner's requested service and distinct customer decisions, not an invented search-volume claim.

The production metadata gate also exposed six pre-existing pages with overlong titles/descriptions; concise metadata was aligned with their existing subjects and canonical URLs to clear the gate.

## Validation

Run `npm run build`, `npm run prerender`, `node --import tsx scripts/test-household-inquiry.ts`, the existing chef enquiry/FAQ tests, and the SEO contract, keyword, breadcrumb, URL and editorial gates. This environment used `node --import tsx` instead of the tsx CLI and a locally extracted Chromium for the production render.

The browser check covers desktop and mobile layouts, catalogue filters, the three-profile limit, enquiry prefill, WhatsApp contents, the submitted message and mobile navigation. Submission is intercepted locally; no test lead is sent to the business. Image loading and metadata are checked on all seven primary journey pages.
