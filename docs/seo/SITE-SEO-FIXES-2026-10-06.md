# Site SEO fixes — 6 October 2026

## Changes

- Repair malformed sitemap XML by removing the already-redirected kids-birthday URL; preserve its existing redirect.
- Validate sitemap syntax, canonical hosts and duplicate locations during production prerender. Add a stricter Python validator to GitHub and Ryze publishing.
- Clarify the catering page's service and festive-menu navigation, with direct links to existing seasonal pages and the quote section.
- Clarify the private-chef metadata's published single/member visit conditions and link the overview to the long-term household service.
- Align yacht metadata and introductory copy with catering aboard a customer-owned or chartered vessel.
- Link the expat-family planning guide directly to the long-term household service.
- Replace executive and older-adult guides' redirected meal-prep links with the weekly meal-prep service URL and accurate anchors. Keep source and generated content synchronized.
- Align the SEO metadata contract with the updated service-page titles and descriptions.

## Validation

Production build and all 259 public prerenders passed. The repaired sitemap has 203 unique canonical URLs. The public-page validator checked 20,846 internal links and fragments and found no errors. SEO ownership, frozen URLs, pricing and quote checks passed. Mobile and desktop navigation and enquiry handoffs passed without submitting a test enquiry.

The final Ryze publishing run passed on retry after concurrent commits caused a non-fast-forward push rejection. Website deployment completed for the functional change set ending at `564409c06739700e47b14d07c4076c9a97054857`.

## Editorial alignment — completed follow-up

Keep core service pages as the destinations for booking intent. Supporting articles should answer distinct planning questions and link to the relevant service. The separate private audit contains the page inventory and proposed title, H1, content and anchor-text plans. The follow-up applies the 30 editorial rewrites and assigns all 259 active routes to eight core service owners. See `MONEY-PAGE-HIERARCHY.md` for the enforced publishing rules and validation.

Preserve stable URLs, useful self-canonical guides and existing indexation policies. Update the SEO contract and rendered metadata together when carrying out future editorial changes.
