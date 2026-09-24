# Homepage restoration — 23 September 2026

The owner explicitly requested restoring the homepage to its version before the 22 September changes, and keeping that original homepage going forward. Use `6664f63b1231d8844c8b85aa0e41123a29b8219c` (21 September, 23:42:18 UTC) as the content/layout baseline. Do not redesign or rewrite the homepage without a new explicit owner request. The SEO contract records this preservation instruction.

`restoration.json` lists the nine historical source files restored byte-for-byte. The original homepage layout handling and organization image are also restored; unrelated shared functionality and all service-page work remain intact. Metadata is aligned with the rendered historical page. The homepage sitemap date and page record are refreshed.

`validation.json` records responsive browser checks. The production TypeScript/Vite build, target-page prerender, one-H1/canonical/indexability checks, SEO contract, keyword locks and hero-copy gates passed. This is targeted validation, not a claim that every route was manually reviewed in this release.

The owner's separate SEO review uses connected Search Console and GA4 data plus Git history. Final Search Console data available during the review ends on 20 September, before the 22 September redesign. The recorded Google homepage crawl (22 September at 21:31:26 UTC) also precedes the 22:16 UTC redesign commit. Attribution of the earlier impression dip to that redesign is unsupported. The restoration follows the owner's preference; it does not promise ranking recovery.

The canapé collection is a separate requested upgrade at `/canape-catering-dubai`; its content, imagery and planning tools are retained. Preserve concurrent unrelated repository changes when publishing.
