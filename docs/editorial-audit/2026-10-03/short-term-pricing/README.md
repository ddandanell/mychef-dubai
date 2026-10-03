# Short-term private-chef pricing update — 3 October 2026

This release implements the short-term visit and meal-pack pricing supplied in the revised pricing guide. It is a separate change from the earlier SEO blueprint release. No URL, keyword owner, redirect or indexation decision changes.

## Published rate card

All fees below are before 5% VAT. Groceries are charged at actual cost with no markup. Zone transport of AED 40–130 per visit is separate. A member rate requires a monthly plan of at least four prepaid visits; there is no further reduction for higher frequency.

| Service | Hours | Single booking, AED | Member visit, AED |
| --- | ---: | ---: | ---: |
| Private Chef Visit | 3 | 1,125 | 750 |
| Fridge Reset | 4 | 1,350 | 900 |
| Fridge Reset, chef shops | 5 | 1,575 | 1,050 |
| Chef by the Day | 10 | 2,000 | 1,450 |

Single visits are available. The former three-day minimum and 20-visit frequency reduction are removed. Existing internal service IDs remain stable.

## Client-facing changes

- The pricing and short-term pages show both rates for each service. Member eligibility, shopping time, groceries, transport and VAT are explained alongside the offer.
- The calculator opens with one single visit. Changing the booking type changes the prices displayed on the service cards as well as the estimate. A chosen transport zone adds a separate travel line and an estimate including 5% VAT. An unknown zone remains unpriced rather than silently assuming an address.
- Central / Mid / Marina & Palm / Outer zone fees remain AED 40 / 65 / 95 / 130. Grocery-management add-on fees remain AED 150 member or AED 225 single. Assistant fees remain AED 350 per short visit, AED 550 per day and AED 90 per extra hour.
- The enquiry and WhatsApp prefill use the same calculation and include the member condition, transport, VAT and exclusions. No enquiry or message was sent during testing.
- Fridge Reset is described as approximately 20–25 labelled portions, dependent on the agreed menu, portion sizes and kitchen. Containers can be supplied by the customer or purchased at actual cost.
- The pricing and weekly meal-prep pages now offer 15, 30 or 45-meal pack estimates, priced by dish complexity: Everyday AED 60 single / 45 member; Signature 80 / 60; Chef’s Special 125 / 95. A 30-meal example of 15 Everyday, 10 Signature and 5 Chef’s Special is AED 2,325 single or AED 1,750 member. The same cooking is not charged again as a visit.
- Cooking output per hour is presented as a working estimate, with the actual schedule and number of visits confirmed against the menu. No guaranteed throughput is implied.
- Signature uses the published rates. Reserve and Private Office are on request. No unverified popularity, credentials or replacement-time claim is added.
- The homepage and menus cards, household overview, part-time and wellness pages, specialist meal-prep pages and relevant cost/hiring guides now use the same single/member model. Search descriptions and the visible OfferCatalog are aligned with the rate card.
- The floating chat launcher is hidden on the pricing page on smaller screens so it cannot cover the mobile plan button. WhatsApp remains available within the plan and enquiry form.

## Scope boundaries

The broader strategy contains later commercial decisions. This release does not launch a separate Half Day product, proposed private-dining formula, unconfirmed premium-tier multipliers, clinical wellness package, household-plan rebrand, new guarantee, credited activation/tasting arrangement, direct-hire product, or a new menu-builder URL. Existing event and dedicated Managed Household terms remain their separate offers. A dish-mix estimator was added to existing pages; it is not an invented 80-dish catalogue.

## Verification

- Production TypeScript/Vite build and all 256 prerender routes.
- Pricing acceptance tests cover all four rates in both modes, every recurring frequency, a single visit, ten-hour days, grocery management, assistant thresholds, transport/VAT, meal-pack arithmetic, quote text and structured offers.
- Rendered sweep checks retired visit names/minimums/rates, visible single/member prices, member conditions, extra costs and schema consistency.
- Browser checks cover desktop and mobile layouts, booking-type changes, full-day member totals, transport, meal-pack controls, enquiry prefill and the mobile plan drawer. External requests and POST requests are blocked, including background analytics.
- Existing metadata, hero, keyword-lock, URL-stability, retirement, parked-page, FAQ and page-graph checks.
- Customer-facing content changes on 19 existing routes, recorded in `changed-routes.json`. The deployment is verified against the production build after merging.
