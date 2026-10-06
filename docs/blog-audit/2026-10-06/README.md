# Blog photography and reading experience — 6 October 2026

Reviewed all 85 active blog article routes, including intentionally noindex articles. Related-post thumbnails are excluded from the image totals.

## Findings and changes

- Before this update, 28 articles had only one article image. Sixteen articles depended on 27 remotely hosted article images.
- All 85 articles now have at least three locally hosted article photographs: 284 images across the rendered articles, up from 178. Image selections changed on 65 articles; the other 20 already had adequate relevant photography and retain it with the shared presentation improvements.
- The 61 Ryze articles each have two curated inline photographs, distributed through the reading sections. The assignments include relevant existing food, preparation, service and venue photographs, with descriptive alternative text and contextual captions.
- Replace off-topic appliance and generic website imagery on comparison articles. Curate local hero images for imported pages that previously depended on remote assets.
- Add an additional supporting photograph to three school/nursery guides and the meal-prep comparison.
- Use measured dimensions, existing responsive WebP variants, lazy-loaded inline images, consistent figure spacing, readable captions and mobile typography. Imported articles also display estimated reading time.
- Preserve the core-service ownership, commercial links, article text, titles, canonicals, indexation and booking flows.

The assets already exist in the repository. Existing image manifests retain their original provenance. These editorial pictures do not establish a specific completed client booking or identify a named member of staff. No new client-work claims are introduced.

## Source of truth

`src/content/blogPhotography.json` assigns the two inline photographs and optional hero selection to each imported article. `blogMedia.json` supplies measured dimensions, checked responsive variants and blog-card hero assignments. `withArticlePhotography` replaces imported image blocks with the curated figures during rendering, so future Ryze content conversion cannot silently reinstate remote placeholders. Normal article copy and contextual links remain intact.

The three school/nursery articles keep their images in the existing handoff JSON; the meal-prep comparison uses its existing bespoke JSX template. `photography-review.json` records every route, before/after image counts, published sources, alternative text and captions.

## Validation

- Production build and all 259 public prerenders passed.
- Photography validation: 85 articles, 284 locally available images, minimum three per article, no repeated photograph within an article, descriptive alternative text and valid responsive candidates.
- Hydrated browser verification: every article at 390px and 1440px; all photographs load, no horizontal overflow, one H1, readable captions and no browser errors.
- Visual inspection: existing asset contact sheets plus representative article heroes and figures on mobile and desktop.
- Core-service ownership and all 259 rendered SEO records pass; public links and canonical validation pass.

The source photography check runs before every production build, including Ryze publishing. New Ryze articles need an explicit photography assignment before publication.

```sh
python3 scripts/verify-blog-photography.py
npm run build
npm run prerender
python3 scripts/verify-blog-photography.py --rendered
python3 scripts/verify-page-authority.py --rendered
python3 scripts/verify-public-pages.py
node scripts/check-blog-visuals.mjs
```
