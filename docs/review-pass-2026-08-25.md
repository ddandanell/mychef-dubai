# Review pass — 2026-08-25 (localhost:3000, all changes local & uncommitted)

Walk each page top to bottom at desktop and on your phone. Tick, or note what to change.

## Pages to review

| Page | URL | What changed — look for |
|---|---|---|
| Private Chef hub | /private-chef-dubai | Quiet hero (eyebrow → "Your chef. Your household. Already understood."), numbered "Who it is for" rows, hairline trust panel, rhythm links |
| How It Works | /private-chef-dubai/how-it-works | Keyword copy restored inside the redesigned intro; hero H1 "How to get a cook in Dubai…" |
| Our Chefs | /private-chef-dubai/our-chefs | Evidence chain + matching steps as `01 → 02 →` flows; specialists split with cuisine board |
| Quality & Training | /private-chef-dubai/quality-training | Icon panel (Menu/Seasoning/Timing/…) + gold-rail calibration timeline |
| Privacy & Security | /private-chef-dubai/privacy-security | Numbered icon panel for the four checks; agency paragraph; family FAQ |
| Pricing | /private-chef-dubai/pricing | Unchanged calculator; variant section ("private chef hire, personal cook…") |
| Catering | /catering-dubai | Quiet hero + terrace image; one-sentence link band; formats directory with concept icons; location + event hairline panels; **your collage** as the gallery; pricing-logic section (duplicate package grid removed); collapsed SEO digest |
| Home | / | Services photo pair + index, numbered trust rows, gold-rail "how it works", location contact sheet, honest review invite (fake stars removed), guides panels, one trust strip |
| Experiences | /luxury-dining-experiences | Four formats as numbered rows, occasions as icon panel, merged related sections, sharpened headings |
| About | /about | Story, "the standard" rows, team, "the split" chain, coverage panels (8 dead location links → plain text) |
| Contact | /contact | Three-ways-in panels (whole panel tappable), "next 24 hours" chain, coverage chips, new meta description |
| Every page | any | Section headers: gold rule + 12px eyebrow + 28–42px fluid H2 (were 16px); SEO digest at the bottom instead of a wall; new mobile menu; desktop nav (no proposal button, Chat pill hover) |

## Decisions that are yours

1. **Home hero** — still the old pattern ("Private Chef & Luxury Catering… Villa, Yacht or Home" + floating guide card). Moving it to the quiet variant is the biggest remaining change and a message decision.
2. **Inter vs Manrope** — recommendation: keep Manrope (two-line switch if you disagree).
3. **Catering FAQs** — done: 27 → 18 (duplicates merged, every link/figure kept); exactly one FAQPage schema confirmed.
4. **Email inconsistency** — Contact/Footer use info@mychef.id, /inquiry uses hallo@mychef.ae. Which is right?
5. **Missing location pages** — About linked 8 communities with no page (Dubai Creek Harbour, Jumeirah Islands, Jumeirah Golf Estates, Al Safa, Al Barari, Meydan, Silicon Oasis, Dubai South). Create pages, or leave as text.
6. **Long-tail copy** — banned brochure words remain on ~10 untouched pages (BabyShower/Bachelor/Birthday/BrandActivation/Wedding catering, Events, GiftCards, ProposalDinner, TouristVillaChef, Villas). Same treatment when you want it.
7. **Shared blocks not touched** — StarterPackagesSection (7-card grid on 6 pages), LocationStrip after Locations on Home, TrustBar still used in Footer/Inquiry.

## Deploy

Everything is local and uncommitted on `main`. The other session pushes to production independently — coordinate one coherent release (commit this work together) rather than letting piecemeal pushes overwrite it.
