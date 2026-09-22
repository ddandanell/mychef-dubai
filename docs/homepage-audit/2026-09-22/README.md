# Homepage design, content and keyword review

Reviewed 22 September 2026. Baseline: `b725463668e78c7e0c8c49d1cc07e714b6b6d29a`.

## Keyword ownership

| Role | Locked phrase | Implementation |
| --- | --- | --- |
| Primary | mychef dubai | Title, H1, first 100 visible words and exactly one H2 |
| Supporting | my chef dubai | Natural brand-name explanation in a FAQ answer |
| Supporting | fine dining at home dubai | Body sentence: “For fine dining at home, Dubai hosts can…” |

The authority remains `docs/seo/myCHEF-AE-SEO-STANDARD.json`. No keyword owner, route, canonical destination or indexation policy was reassigned. The service hubs continue to own their commercial queries. The quoted phrase “do a log” was interpreted as a request to log the work, as stated in the progress update; it is not one of the homepage’s locked search terms and was not inserted into customer copy. Search volume and ranking improvements were not measured or claimed.

## Changes

- Replaced the assembled homepage sections with one authored journey: introduction, two service gateways, private dining, four occasion types, menus, planning steps, pricing pathways, chef selection, local coverage, journal links, six FAQs and a final enquiry.
- Expanded main content from **1,171 to 2,253 words**, including the accessible FAQ answers. The hero stays at **66 words** including navigation labels and its caption.
- Added a restrained ivory, forest-green and bronze design, serif display typography, readable contrast, varied editorial layouts and responsive columns. All copy is visible immediately; no opacity-zero entrance animation or autoplay video is needed.
- Added a new illustrative hero and reused four relevant service photographs. The five images have descriptive alternative text and explicit dimensions. The hero is eager/high priority; the four supporting images are lazy loaded. All 15 responsive files were decoded and their declared widths verified.
- Added **45 contextual links**, covering **28 unique destinations including the homepage**. The homepage’s ten featured destinations are all represented. Section navigation and two article fragments point to existing IDs. No content link targets a redirect or a URL prohibited by the homepage contract.
- Replaced homepage package snapshots with links to the existing authoritative pricing pages and calculator. Published service prices and booking terms were not edited.
- Removed duplicate generated service/location modules from the homepage shell, because their destinations now have contextual placements in the authored page. Shared modules remain available to other pages.
- Updated the title, description, H1 and Open Graph image, synchronised the SEO contract and homepage record, and updated the business graph image. Organization/WebSite entity identities remain stable; no unsupported FAQ rich-result markup was added.

## Verification before publishing

- `npm run build`: passed TypeScript and the Vite production build.
- `python3 scripts/verify-seo-contract.py`: passed; 245 URLs, 148 unique primaries, no collisions.
- `python3 scripts/verify-keyword-locks.py`: passed; 158 page files and 202 module entries match the contract.
- `python3 scripts/verify-url-stability.py`: passed; 245 frozen URLs remain present.
- `node --import tsx scripts/test-faq-jsonld.ts`: passed all existing schema checks.
- Rendered the homepage and its 27 other linked destinations using the same React components, routes and layout. All **123 targeted checks** passed. An initial audit file-path lookup for `/blog` was corrected to the renderer’s `index.html`; the blog page itself was valid.
- Checked one H1, metadata lengths (55/155 characters), canonical URL, index/follow, keyword placement, unique anchors, links, image files and structured data. `checks.json`, `links.json`, `destinations.json` and `images.json` retain the results.

The full production prerender and live browser review follow the GitHub main deployment. Live observations are recorded separately after the deployment completes. No claim of a mobile browser test or measured Core Web Vitals is made by the source-level audit.

## Image provenance

The hero is generated brand imagery, not documentary evidence of an actual client event or a named chef. It was generated with the built-in `image_gen.imagegen` engine, then exported to WebP at 480×600, 800×1000 and 1120×1400. The largest file is 194,142 bytes. Existing supporting images come from `/images/private-chef-2026/`; only verified 480, 800 and 1200 pixel versions are used.

The generation brief is in `hero-image-prompt.txt`. The generated master is retained by the image-generation workflow; the deployable derivatives are committed in `public/images/home-editorial-2026/`.
