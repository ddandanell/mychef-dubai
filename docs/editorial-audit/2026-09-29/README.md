# myCHEF editorial and internal-link update — 29 September 2026

This release improves the public website copy, search snippets and contextual links while retaining existing URL and primary-keyword ownership. Account analytics and Keyword Planner research are kept in the private audit and are not part of this repository or its public deployment.

## Changes

- Refined titles and descriptions on 38 service and planning pages. Replaced the incomplete full-time-chef description and aligned the household entry points with the newly launched matching service.
- Replaced repeated planning copy with specific guidance on 19 catering pages. Updated 21 catering introductions, the catering hub, canapé introduction and the active part-time, meal-prep and wellness introductions.
- Added contract-derived service prose links. Corrected office, business-lunch and canapé destinations in blog copy. Automatic links preserve headings and existing anchors, exclude the page itself and parked destinations, and are capped per paragraph, destination and article.
- Added 48 distinct contextual links across 39 pages relative to the starting rendered snapshot. The audit before the independently restored article covers 469 contextual link instances across 97 pages.
- Fixed the homepage guide card's retired yacht URL without changing its wording or design. Removed a catering-hub link to the parked private-flight page. Recorded an already-deployed blog redirect in the SEO contract.
- Regenerated one JSON record per URL, and kept this dated render separate from the historical September 22 audit.
- Preserved the concurrent household chef launch and enquiry-tracking fixes and the restored private-chef article through commit 8d5af6654f625b028a2f64642dac3cbeafc8a007.

## Validation

- TypeScript and Vite production build passed; Chromium prerender passed for 244 routes.
- Metadata, canonical and editorial checks passed. The sitemap contains 189 URLs.
- SEO ownership: 263 contract URLs, 166 unique primary keywords, zero primary collisions.
- 91 redirect records and 36 parked URLs passed their checks. No existing route was deleted or renamed.
- Full rendered link audit: no missing page/asset destinations, no invalid section fragments and no contextual links through redirects.
- Existing chef, household and catering enquiry checks and conversion-event checks passed. No test enquiry was sent.
- Contextual-link tests passed for ownership, self-links, protected landing pages, existing anchors, headings and repetition limits.

Regenerate service rules with `python scripts/generate-contextual-links.py`. Run the focused test with `node --import tsx scripts/test-contextual-links.tsx`. Page records are regenerated after a production build and prerender with `python scripts/generate-page-records.py`, then checked with `--check`.

The starting comparison snapshot predates concurrent household-service changes. Counts describe verified website edits and rendered output, not a claim of ranking or traffic improvement caused by this release.
