# myCHEF Google traffic and indexing investigation, 12 October 2026

The screenshot alone does not establish a site-wide traffic collapse. Google marks 11 October onward as incomplete in the live Search Analytics response. There was a completed one-day dip on 10 October (7 clicks), followed by 20 clicks on 11 October while that day was still incomplete. Do not compare a partial last day with a complete day.

The completed dip on 10 October was a click-through change: impressions were 799, versus 758 on 9 October, while clicks fell from 17 to 7. CTR fell from 2.24% to 0.88%; average position changed from 14.08 to 19.58. Visibility did not disappear that day. A change in query mix and daily positions is consistent with this pattern, but these aggregates do not prove a Google penalty or identify a single causal site edit. Homepage clicks actually rose from 3 to 4; the drop came across the other pages. Page-level results were inspected for 8–10 October (330 rows).

## Completed, comparable periods

| Measure | 26 Sep–2 Oct | 3–9 Oct | Change |
|---|---:|---:|---:|
| Google organic clicks | 144 | 155 | +7.6% |
| Google impressions | 7,368 | 8,069 | +9.5% |
| GA4 Organic Search sessions | 80 | 226 | +182.5% |
| GA4 engaged Organic Search sessions | 65 | 161 | +147.7% |

Search Console dates are Pacific Time; GA4 reports use Asia/Dubai. These are parallel observations, not interchangeable visitor totals. GA4 tracking can affect session comparisons; Search Console independently confirms improving completed-week clicks and impressions. Key-event counts were inspected but are not treated as verified enquiries or bookings.

Sources: Ryze Google Search Console Search Analytics (https://www.mychef.ae/) and GA4 property 543704202, retrieved 12 October 2026. GSC `dataState: all` returned `firstIncompleteDate: 2026-10-11`.

## Indexing and live website

The supplied Coverage workbook ends on 9 October: 241 indexed URLs and 96 not indexed. On 24 July it recorded 68 indexed URLs. The 96 exclusions comprise 57 redirects, 29 noindex URLs, 3 duplicates without user-selected canonical, 1 soft 404, 1 404, 3 discovered/not indexed and 2 crawled/not indexed. These categories do not mean 96 broken service pages.

The noindex drilldown mainly contains enquiry URLs and their parameters, review/legal/site-map pages, a blog topic index, duplicate private-chef support modules and deliberately parked pages. Tasting Menu is parked by a recorded 28 August business/SEO decision; URL Inspection confirms its noindex exclusion. This was not silently reversed.

Live audit: all 216 URLs in the currently deployed sitemap returned HTTP 200 with exactly one title, one H1 and one self-referencing canonical, and none carried noindex. The audit inspected 259 URLs including parked pages and support/utility endpoints. The retired/unknown `/locations/al-safa` returned a real 404 and is outside the sitemap. All 586 distinct local image paths referenced by sitemap pages exist in the production repository.

Google URL Inspection returned PASS / Submitted and indexed for Home, Private Chef, Catering, Corporate and Dinner. The sitemap API reported zero errors and zero warnings. Its legacy `indexed: 0` field is not a valid site-wide index count; URL Inspection and the supplied coverage export show indexed pages.

The export did not include the exact URLs for its 3 duplicate, 1 soft-404 and 1 404 categories. Their individual causes cannot be identified from counts. The complete current sitemap crawl had none of these response/canonical problems.

## Confirmed corrections

- Restored `/uae-national-day-catering-dubai` and `/blog/desert-dinner-party-dubai`. Both were still parked after their recorded 1 October revival date. Updated the park list, contract indexation and generated sitemap/breadcrumbs.
- Added a build-rendering flag to stop GA4, Google Ads and first-party event collection during prerendering. The flag is not written into the delivered HTML, so ordinary visitors continue to be tracked. Regression tests confirm both visitor tracking and build suppression.
- Added the requested corporate and dinner menu-price catalogues, with dedicated SEO ownership, self-canonicals, navigation, related links and complete prerendered menus.

Google's exclusion counts will change only after recrawling. No indexed important service URL was removed or redirected in this change.

## GA4 anomaly requiring sender identification

For 26 September–11 October, GA4 shows 802 Unassigned sessions whose page_view events have country and browser `(not set)` and zero engagement. A wider hostname/source/device report shows 813 desktop sessions labelled Unassigned / `(not set)` on www.mychef.ae. The granular missing-browser/country cohort contains page_view only; no corresponding session_start, first_visit or user_engagement rows were returned.

This pattern is consistent with incomplete/server-origin event collection or automated hits, but the sender is unconfirmed. No Measurement Protocol sender was found in this repository. Do not report this as a proven bot attack or a Google ranking loss, and do not delete or filter all Unassigned traffic: some ordinary visitors also have incomplete attribution. Review GA4 Measurement Protocol integrations and external senders separately. Ryze's exposed GA4 Admin capability is read-only, so no permanent account filter or secret rotation was performed.

## Catalogue implementation and validation

- Corporate: 33 packages and 16 live stations, every menu category and exact guest tier, inclusions, station upgrades, furniture/staffing/transport extras and service details.
- Dinner: 13 menus, every course, cuisine/chef filters, 2–20 guest pricing, add-ons, kitchen/staffing details and peak-date estimate.
- Prices preserved from the uploaded catalogues; supplier costs and internal margin formulas removed from public data. Existing website booking/payment/cancellation terms take precedence over conflicting older catalogue wording. Date Night remains a separate package from the signature collection.
- Added the owner-supplied GiveMe5 review widget GxRGAhebMrf6 beneath pricing on service pages and at the closing enquiry area on other marketing pages. The provider returned seven visible reviews and a nine-review total for myCHEF Dubai. No review text, rating or count was invented or overwritten. The runtime loads on approach to the section, once per document, and reuses cached data across SPA navigation.
- Responsive desktop/mobile UI checks; fixed vs per-guest prices; gap tiers; chef threshold; multi-station discount; VAT and peak-date examples; type checking; targeted lint; SEO uniqueness; URL preservation; sitemap and prerender checks.

Reference guidance: https://developers.google.com/webmaster-tools/v1/searchanalytics/query ; https://support.google.com/webmasters/answer/7576553 ; https://support.google.com/analytics/answer/13504892 .
