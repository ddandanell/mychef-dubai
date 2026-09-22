# Catering editorial release — 22 September 2026

Covers all 92 active catering service, cuisine, occasion, corporate, institutional, package and supporting guide routes in `inventory.json`. The existing Private Chef comparison page remains part of the earlier Private Chef release. Redirected URLs are excluded.

## Changes

- Added a page-specific planning introduction, relevant supporting sections, in-page navigation, contextual links and a closing enquiry action to every covered route.
- Refined abrupt headings, internal pricing jargon and unsupported blanket operational assertions in existing copy. Preserved the pricing sources, calculators, form logic and booking terms.
- Retained every locked primary keyword, canonical and indexation decision. Updated the wedding cost guide H1 wording in the SEO contract without changing its keyword owner.
- Introduced a responsive editorial hero and a separately assigned photograph for every route. Decorative stock galleries and repeated card photographs no longer render on the covered pages. Shared templates still serve other routes.
- Retained specific Christmas work photography. Restored all 21 original real yacht photographs across the hero, service choices, a curated gallery and hospitality sections, with each photograph displayed once. The yacht route uses its original real hero and social image.
- Added a prerender readiness check for the catering content so the expanded copy is included in static production HTML.

## Content and imagery

`content-map.json` records the additions by route. Practical planning modules are reused where relevant; the per-page rendered word count must not be described as entirely unique prose. Page-specific opening briefs and existing service detail distinguish each route.

`image-manifest.json` records each new image's sole page owner, file, prompt and original pixel hash. Four responsive WebP resolutions represent one image, not four placements. Image descriptions are factual alt text. New images carry no visible generation captions and make no claims to document actual client events.

## Validation

- Production TypeScript/Vite build.
- SEO contract and keyword-lock verification.
- Catering pricing and enquiry checks, corporate packages, birthday extras and yacht quote checks.
- Server-rendered inspection of all 92 routes, including streamed Suspense content: one H1 per page, at least 1,000 main-content words, and no duplicate visible image sources across the covered pages. See `render-audit.json`.
- Visual contact-sheet review and exact pixel-hash uniqueness check for the new photographs. Private jet and Jain images were replaced after subject-matter review.

Production deployment and browser checks are recorded after publishing.

## Image placement requirements

Each catering page must show at least two distinct content photographs. Aim for two to four; the yacht page retains its full set of 21 real photographs at the owner’s request. Never reuse a content photograph on another page or in another visible placement. Responsive size variants count as one photograph. Do not add visible image-generation credits or unnecessary captions. Alt text should describe the pictured subject without implying a generated scene documents a real company event.

New supporting photography belongs to an explicit route in `cateringDesign.json`. Yacht photographs must remain the original files in `/images/yacht-work/`; do not replace them with generated images.

## Supporting photography expansion

Added 91 individually assigned supporting photographs, plus five previously unused images, using the built-in image-generation tool. Every supporting photograph has four compressed WebP widths (480, 800, 1200 and 1536 pixels) and reviewed descriptive alt text. `supporting-image-manifest.json` records prompts, source files, final image names and pixel hashes. School and nursery images were revised after visual review.

Christmas keeps its four existing photographs; the new Christmas-themed image is assigned exclusively to the broader festive catering page. Yacht photographs are no longer repeated in shared Private Chef portfolio sections; those sections link to the yacht portfolio instead. The yacht page has no generated imagery.

Final local validation: production build passed; SEO contract and keyword locks passed. All 92 rendered catering routes have one H1 and at least 1,037 main-content words. There are 211 distinct visible content photographs, with 2–4 per page except the yacht page’s 21 originals. Every referenced responsive image opens successfully. Shared Private Chef portfolio sections were also rendered to verify that removing repeated yacht photographs preserved their headings, substantial copy and remaining photography. See `photography-audit.json` and `render-audit.json`.
