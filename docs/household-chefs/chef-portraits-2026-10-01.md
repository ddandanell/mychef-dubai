# Household chef-style portraits — 1 October 2026

The `/our-chefs#household-profiles` catalogue now leads with 25 original chef-style portraits, five for each existing culinary level. Visitors can see the kind of professional presentation and cooking context the role describes, then filter by level or cuisine and shortlist up to three styles.

The portraits are visual matching examples. They are not attached to invented candidate names, employment histories or credentials. The catalogue explains that a personal shortlist includes actual chefs' profiles, experience and confirmed availability.

## Presentation and image delivery

- Portraits use consistent 4:5 framing, natural expressions, warm daylight and the site's ivory, sage and stone palette.
- Culinary context and presentation progress from everyday family kitchens to more formal private dining. Every level retains professional standards.
- Cards show cuisine, level, the existing role description and a short level focus. Existing food photographs remain inside the expandable menu details.
- The catalogue uses three columns on larger screens, two on tablets and one on phones. Images have explicit dimensions and load lazily.
- The 75 production WebPs are saved in `public/images/household-chefs/portraits/`: 360, 600 and 960 pixels wide for each of the 25 profiles. Total asset size is 3,856,750 bytes; each browser selects the appropriate size.
- Exact final prompts, original generated paths and production paths are in `chef-portrait-prompts-2026-10-01.json`. Images were created with the built-in `image_gen` tool. Four first-pass portraits were replaced to improve visual distinction across the collection.

## Scope and validation

The update concerns the portrait catalogue and its presentation. The existing full-time page links to this catalogue. The monthly commercial bands, daily booking rates, matching terms, named chef pages, profile IDs and enquiry handoff remain in their existing sources.

Validation completed locally:

- TypeScript check and production build; 247 routes prerendered and Google brand check passed.
- All 25 catalogue portraits load, with five profiles per level. Cuisine filtering, the three-style shortlist limit, shortlist enquiry URL and expandable food photos work.
- Layouts checked at 1440, 900 and 390 pixels; no horizontal overflow or JavaScript errors.
- 339 page records regenerated and verified against the current repository, including records that predated the latest household copy changes.
- SEO contract: 263 frozen URLs, 166 unique primary keywords, no collisions. URL stability and Git whitespace checks passed.

No business enquiry was submitted during verification.
