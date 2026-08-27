/**
 * GENERATED — python3 scripts/generate-parked.py. Do not edit.
 *
 * Parked, not deleted: the page still resolves, renders noindex, is out of the sitemap and is
 * linked from nowhere. Delete the URL from docs/seo/parked-urls.json and rebuild to bring it
 * back exactly as it was.
 *
 * Parked 2026-08-28 on 2026-05-27 to 2026-08-25 (Search Console, 90 days).
 */

export const PARKED: readonly string[] = [
 "/asian-catering-dubai",
 "/birthday-catering-package-dubai",
 "/blog/desert-dinner-party-dubai",
 "/blog/dinner-party-menu-ideas-dubai",
 "/blog/halal-private-dining-dubai-what-to-ask",
 "/blog/iftar-at-home-dubai",
 "/blog/nye-party-catering-dubai",
 "/blog/private-chef-date-night-dubai",
 "/blog/private-chef-vs-restaurant-dubai",
 "/blog/ramadan-iftar-catering-trends-2026",
 "/blog/vegan-catering-dubai-guide",
 "/blog/weekly-meal-prep-vs-full-time-chef-dubai",
 "/brand-activation-catering-dubai",
 "/corporate-dinner-package-dubai",
 "/corporate-retainer-dubai",
 "/date-night-package-dubai",
 "/dubai-event-catering-price-guide-2026",
 "/exhibition-catering-dubai",
 "/family-feast-package-dubai",
 "/fitness-meal-prep-dubai",
 "/gala-dinner-catering-dubai",
 "/jain-catering-dubai",
 "/kids-nutrition-chef-dubai",
 "/locations/arabian-ranches",
 "/locations/bluewaters-island",
 "/locations/business-bay",
 "/locations/downtown-dubai",
 "/locations/dubai-hills",
 "/locations/dubai-marina",
 "/locations/emirates-hills",
 "/locations/jumeirah",
 "/locations/jvc",
 "/locations/palm-jumeirah",
 "/locations/umm-suqeim",
 "/luxury-dinner-planning-guide-dubai",
 "/mystery-dining-dubai",
 "/postpartum-meal-prep-dubai",
 "/private-jet-catering-dubai",
 "/product-launch-catering-dubai",
 "/production-catering-dubai",
 "/ramadan-catering-guide-dubai",
 "/staff-meals-catering-dubai",
 "/tasting-menu-dubai",
 "/tourist-villa-chef-dubai",
 "/uae-national-day-catering-dubai"
] as const

/** Seasonal pages, measured out of season — the date each should come back. */
export const REVIVE_ON: Record<string, string> = {
 "/blog/desert-dinner-party-dubai": "2026-10-01",
 "/blog/iftar-at-home-dubai": "2026-12-01",
 "/blog/nye-party-catering-dubai": "2026-10-15",
 "/blog/ramadan-iftar-catering-trends-2026": "2026-12-01",
 "/ramadan-catering-guide-dubai": "2026-12-01",
 "/uae-national-day-catering-dubai": "2026-10-01"
}

const clean = (path: string) => (path.length > 1 ? path.replace(/\/+$/, "") : path)

export function isParked(path: string): boolean {
  return PARKED.includes(clean(path))
}
