# Previous Work — 12 October 2026 photo collection

The gallery at `/gallery` contains exactly the 154 photographs supplied in the two ZIP files for this update. No existing stock, generated, inspiration, or older portfolio images are included in this collection. The original archive paths and SHA-256 hashes are recorded in `image-manifest.json`.

Each photograph has a description based on visual review, a descriptive filename, a category, searchable tags, dimensions, a thumbnail, a larger WebP image, and a direct link to the appropriate live service page. Venue names, client names, dates, guest counts and dietary claims were not invented. The gallery supports collection and type filters, accent-insensitive search, progressive loading, enlarged views, arrow-key navigation, Escape to close, restored focus, and photo URLs. All 154 images appear in the gallery JSON-LD and the image entries in the main sitemap.

The shared photo preview uses six submitted photographs. Pages receive relevant selections based on service context. Where a submitted category contains fewer than six photographs, related photographs from the same two ZIPs complete the preview; no generated photograph fills a gap. Uploaded photographs also replace selected service heroes where the pictured work fits that service.

Reviews appear once on relevant service and trust pages, after the hero and main introduction. The homepage places reviews after its service overview, followed by the work preview. Editorial guides and utility pages omit reviews where they would interrupt the purpose of the page. The GiveMe5 runtime uses the supplied account and its original review data, displayed as a compact grid rather than a carousel with cloned cards. The original rating and review text are preserved. The gallery chat control is compact on mobile to keep photo controls accessible.

The latest Menus & Prices navigation update is preserved. Previous Work is a direct desktop and mobile navigation item and a footer link. The established gallery address is retained.

Validation: TypeScript, production build, all 273 prerendered pages, SEO ownership, sitemap XML, valid image assets, review regression checks, and 270 browser render checks across 256 live routes. The desktop and mobile gallery checks cover filters, empty-state recovery, all 154 photographs, enlarged views, keyboard navigation, focus return, mobile navigation, original-only gallery images and social previews. No production analytics or lead submissions were sent by the browser checks.

To add future work, update `src/content/previousWorkPhotos.json` with traceable submitted photographs, corresponding optimized assets and descriptive metadata. Re-run the source count and provenance checks for the expanded collection, regenerate the sitemap, and run the browser checks before publishing.
