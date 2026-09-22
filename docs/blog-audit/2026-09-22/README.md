# Blog image and internal-link review

Reviewed all 42 article routes and all 32 cards on the public blog listing. The ten previously unlisted, noindex articles retain that policy. Article URLs, keyword assignments and titles remain unchanged.

## Corrections

- Fixed the thumbnail bug that changed remote `featured.jpg` URLs to nonexistent `featured.webp` files (the latter returned HTTP 400).
- Published 22 existing article assets locally, with real WebP conversions and responsive derivatives. The source URLs and checksums are in `existing-image-manifest.json`.
- Added 13 exclusive editorial photographs, documented with their exact prompts, engine and file paths in `generated-image-manifest.json`.
- Restored the distinct original private-chef blog photographs. Shared service photographs no longer replace every article image, and the extended blog sections use explicitly assigned photos.
- Every article has at least two content images. The local audit identifies 120 distinct article images, with no repeated photograph within an article or across articles. Listing thumbnails identify their corresponding articles; related-reading cards use text.
- Removed the remaining image-generation captions from the blog index and institutional blog content. Alt text describes the image or article subject.
- Added restrained contextual links, 84 editor-written section connections, Ryze article tables of contents and more accurate topic membership. Paragraph links appear in the beginning, middle and final third of every article.
- Replaced obsolete internal destinations with their canonical URLs and corrected the newest articles’ enquiry links.

## Verification

`local-review.json` records the rendered pages, images, internal-link totals, paragraph-link distribution and listing cards. The audit checks local responsive assets, image uniqueness, canonical URLs, indexing policy, article section targets, retired destinations and link distribution. Live mode also requests every article, the blog listing, image master and linked service destination, and checks destination fragments.

```sh
npm run build
python3 scripts/verify-seo-contract.py
python3 scripts/verify-keyword-locks.py
python3 scripts/verify-url-stability.py
node scripts/build-blog-audit.mjs
node .blog-audit/ssr/blog-ssr-audit.js
python3 scripts/audit-blog-pages.py --html-dir .blog-audit/rendered
python3 scripts/audit-blog-pages.py --live --html-dir .blog-audit/live --output docs/blog-audit/2026-09-22/live-review.json
```

The Python audit requires Beautiful Soup and Pillow. The local React render includes HandoffPage data explicitly and does not require a browser server. Production prerendering still uses the existing browser-based build.

## Completed follow-up

- Moved route scrolling inside the content Suspense boundary, so navigation waits for the destination article to commit.
- Fragment navigation now observes delayed heading insertion and layout changes, decodes fragment IDs, and releases control as soon as the reader interacts. Missing targets have a bounded fallback; leaving a route cancels its pending scroll.
- Improved body text, captions, table labels and link contrast on light article surfaces while retaining the dark inset treatments.
- Added nine regression cases for delayed content, encoded and malformed fragments, reader interaction, route cleanup and missing targets.
- Re-rendered 111 pages, including all 42 articles, the blog listing and linked service/topic destinations. `final-review.json` records 120 distinct article photographs, 1,285 internal article links and zero audit issues. All 356 referenced image files, including responsive sizes and listing images, were retrieved from the reviewed GitHub revision, checked against their Git blob hashes and decoded successfully.
- The production build, targeted lint, SEO contract, keyword locks and URL stability checks passed. Existing URL and indexing policies are preserved.

To extend the rendered audit to service destinations, pass a JSON array of paths via `BLOG_AUDIT_TARGETS` when running the SSR bundle, then run the Python audit with `--check-targets`. Destination HTML is written beneath the rendered output's `targets` directory. Run the fragment regression suite with `node scripts/test-fragment-navigation.mjs`.
