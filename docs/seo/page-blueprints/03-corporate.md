# Corporate mega — page blueprints

**Status:** planning only. Code locks in `src/content/corporateCluster.ts` win.  
**Fear:** the company looks incompetent in front of clients. Devices away. No food next to laptops (copy and images).

Published prices: AED 90 drop-off · 120 buffet · 150 stations/canapés · 700–950 plated · 5% VAT · min 10 / 20 / AED 900.

Spine: 12–16 sections. Spokes 1,000–1,200 words. Hub is a router.

---

## Split

| One-off | Daily / recurring |
|---------|-------------------|
| `/corporate-event-catering-dubai` | `/office-catering-dubai` |
| `/product-launch-catering-dubai` | `/conference-catering-dubai` |
| `/gala-dinner-catering-dubai` | `/staff-meals-catering-dubai` |
| Hub routes both | Link `/corporate-meal-prep-dubai`, `/corporate-retainer-dubai` (not in mega) |

Never: `/corporate-catering-dubai` (`do_not_link`). Hub is `/corporate`.

---

## /corporate

- **Status:** Hub. Rebuild as **router** if it still dumps every format.
- **Primary:** `corporate catering dubai`
- **Owned secondaries (sentences):** corporate catering services dubai, corporate catering company dubai, halal corporate catering dubai (link `/halal-catering-dubai`).
- **Do not own:** `corporate event catering dubai`, `office catering dubai`, `gala dinner catering dubai`, `staff meals catering dubai`, `catering dubai`.
- **Unique section:** Recurring vs one-off vs retainer. Invoice, PO, dietary at scale.
- **Customer first question:** Is this tomorrow’s lunch, or a night with clients in the room?
- **Sections (12):** 1 Hero · 2 Trust · 3 What corporate catering is (not household chef) · 4 One-off vs daily vs retainer · 5 Spoke index (7 children) · 6 Format index (link canapés, drop-off, buffet) · 7 Cost pointer · 8 Workplace constraint (devices away, dressed room) · 9 Dietary at volume · 10 Sequence / lead times · 11 FAQ residual · 12 LocationStrip + CTA
- **Images:** `/images/corporate-catering-dubai-hero.webp` · mid: dressed boardroom, laptops stacked aside · gallery: reception canapés, seated gala, office lunch without screens.
- **Est. words:** 900–1,100

---

## /corporate-event-catering-dubai

- **Primary:** `corporate event catering dubai` (code lock; secondary list in `CORPORATE_KEYWORD_LOCKS.events` — company party family lives **here**, no separate company-party URL)
- **Do not own:** hub primary, gala, product launch, office.
- **Unique:** Awards, parties, networking — run-of-show, speeches, standing then seated.
- **Who not:** Daily lunch → office. Seated black-tie as the whole product → gala. Door-opening reception as the product → launch.
- **Sections (14):** Hero · Trust · What a company event is · Who/not · How guests eat (link canapés/buffet/stations) · Included · Cost · **Run-of-show + devices away** · Menu for mixed teams · Dietary at scale · Staff/uniform/NDA if agreed · Sequence · Gallery · FAQ+CTA
- **H1:** Corporate event catering in Dubai for company parties and client nights
- **Est. words:** 1,150

---

## /product-launch-catering-dubai

- **Primary:** `product launch catering dubai`
- **Unique:** Timing to the reveal. Standing crowd. Brand without food-on-desk.
- **Link:** canapés, exhibition, brand-activation (not in mega), bar.
- **H1:** Product launch catering in Dubai — food that does not compete with the reveal
- **Est. words:** 1,100

---

## /gala-dinner-catering-dubai

- **Primary:** `gala dinner catering dubai`
- **Unique:** Seated run-of-show, wine service licence-true, awards gaps.
- **Link:** tasting (not steal), wedding (comparison only), live stations.
- **H1:** Gala dinner catering in Dubai is a seated night with a clock
- **Est. words:** 1,120

---

## /office-catering-dubai

- **Primary:** `office catering dubai`
- **Unique:** Daily lunch, pantry vs dressed room, **no food next to laptops**.
- **Link:** drop-off, business lunch, staff meals, meal prep.
- **H1:** Office catering in Dubai is lunch that does not sit on a keyboard
- **Cost band:** drop-off AED 90; do not quote plated 700 as the default office lunch.
- **Est. words:** 1,100

---

## /conference-catering-dubai

- **Primary:** `conference catering dubai`
- **Unique:** Breaks, dietary volume, multi-day, holding across sessions.
- **Link:** office, drop-off, exhibition.
- **H1:** Conference catering in Dubai has to survive the break, not just the first plate
- **Est. words:** 1,100

---

## /exhibition-catering-dubai

- **Primary:** `exhibition catering dubai`
- **Unique:** Stand, no kitchen, holding, visitor flow.
- **Link:** drop-off, product launch.
- **H1:** Exhibition catering in Dubai is hospitality without a kitchen
- **Est. words:** 1,050

---

## /staff-meals-catering-dubai

- **Primary:** `staff meals catering dubai`
- **Unique:** Volume, rotation, cost per head, canteen rhythm — not a gala.
- **Link:** office, meal prep, retainer.
- **H1:** Staff meals catering in Dubai is volume food with a repeating week
- **Est. words:** 1,050

---

## Image law (corporate)

Dressed meeting room, devices closed and stacked. Reception or terrace. Never sushi next to a MacBook. Never chef plating on a desk. Experience concept shown.

## Build order

Hub router → corporate events → gala → launch → office → conference → exhibition → staff meals.
