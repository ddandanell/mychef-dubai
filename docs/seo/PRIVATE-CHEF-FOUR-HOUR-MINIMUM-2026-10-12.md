# Private chef visits: four-hour minimum — 12 October 2026

The three-hour Private Chef Visit package is retired at the business owner's request. The existing four-hour Fridge Reset is now the shortest booking: AED 1,350 single or AED 900 per member visit. Member eligibility remains four or more prepaid visits per month. Five-hour and ten-hour rates, meal packs, VAT, groceries, transport and staffing charges retain their existing rules.

## Implementation

- Remove the retired service from the shared pricing engine, calculator choices and structured OfferCatalog. Default to the four-hour service; stale `service=fresh-meal` links resolve to that current default.
- Update starting prices, monthly examples, service descriptions, FAQs, search descriptions, supporting guides and household enquiry copy. Remove dormant three-hour package content to prevent reuse.
- Keep the three remaining package cards balanced on desktop and mobile.
- Update relevant sitemap dates and regenerate page records. Historical audit documents remain historical; yacht-charter timelines and catering service durations are separate from this retired household package.

## Verification

- TypeScript compilation, production bundle and all 259 prerendered pages.
- Pricing acceptance tests: every remaining service and member frequency, four-hour default, retired input fallback, shopping, assistants, transport, VAT, quote text and structured offers.
- Site-wide rendered pricing sweep, including retired package wording and starting price; SEO contract, keyword ownership, URL stability, page authority and 20,800 internal links/fragments.
- Desktop/mobile browser checks of package selection, member pricing, transport totals, meal packs, enquiry/WhatsApp quote text, legacy links and mobile plan drawer. Requests to submit leads or external messages were blocked.
