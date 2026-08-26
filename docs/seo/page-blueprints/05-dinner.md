# Dinner mega — page blueprints

**Historical.** The live plan is the 2026-08-26 decision list. `docs/seo/myCHEF-AE-SEO-STANDARD.json` wins. The “ignore JSON” table below is void.

**Product:** the moment. One line to `/private-chef-dubai` if they need a weekly chef. 80 guests → `/catering-dubai`.

Alcohol: licence-dependent. Do not sell “wine pairing included.”

---

## Code lock vs JSON

| URL | Use (code) | Ignore (JSON) |
|-----|------------|---------------|
| `/luxury-dining-experiences` | private dining experience dubai | luxury dining experiences dubai as primary |
| `/tasting-menu-dubai` | private tasting menu dubai | private chef tasting menu dubai |
| `/gift-cards` | dining experience gift card dubai | mychef gift cards as if a SKU exists |

Romantic code lists proposal/anniversary as secondaries — **this plan overrides:** link only, do not own.

---

## Gift-card hard truth

`src/content/seo-pages/gift-cards.json`: myCHEF **does not currently issue stored-value vouchers**. Live `GiftCards.tsx` invents cards. **JSON wins on product existence.** Hub gift tile must not contradict. Give the evening as a **scheduled booking**.

---

## Pages

| URL | Primary | Unique constraint | H1 direction | Words |
|-----|---------|-------------------|--------------|-------|
| `/luxury-dining-experiences` | private dining experience dubai | Router of moments; slim dump | Keep: Private Dining Experiences, Designed Around the Moment | 800–1,000 |
| `/romantic-dinner-dubai` | romantic dinner dubai | Two people; pause; who is in the room | Without the rest of the restaurant | 1,100–1,200 |
| `/tasting-menu-dubai` | private tasting menu dubai | Course count + kitchen geometry | At your table — **not** “& Chef’s Table” | 1,100–1,200 |
| `/private-cooking-classes-dubai` | private cooking classes dubai | Hands in the kitchen; capacity | You cook, then you eat — strip “& Catering” | 1,100–1,200 |
| `/desert-dining-dubai` | desert dining dubai | Access, wind, **we do not own the dune** | A private table; a kitchen that has to travel | 1,150–1,200 |
| `/gift-cards` | dining experience gift card dubai | Stored value vs scheduled service | What we can issue, and what we cannot | 1,000–1,150 |

**Required sideways:** `/proposal-dinner-dubai` · `/anniversary-catering-dubai` · `/date-night-package-dubai` · `/halal-private-dining-dubai`

**Desert image bans:** fake Milky Way, owned camp, unsafe fire, camels, proposal-default.

**Cooking:** office team + HR → `/corporate-event-catering-dubai`. Guests only watch → `/live-cooking-stations-dubai`.

**Prices you may quote:** plated 700–950 pp · tasting 1,400 pp with pairing · two-person from 1,200 **per booking** · class 700–950 pp · desert 700–950 pp (logistics floor).

## Images

Existing: `luxury-dining-experiences-dubai-hero.webp`, `romantic-dinner-dubai-hero.webp`, `tasting-menu-dubai-hero.webp`, `private-cooking-classes-dubai-hero.webp`, `desert-dining-dubai-hero.webp`, `gift-cards-hero.webp`. Placement: hero · after what-this-is · mid constraint · gallery. Experience concept shown.

## Build order (this mega)

1. Gift cards TSX ↔ JSON truth (trust risk)  
2. Romantic (proposal/anniversary/date-night links)  
3. Tasting (kill chef’s table in H1)  
4. Cooking (eject team-building)  
5. Desert (eject camp ownership)  
6. Hub slim last  

## Leave this mega if…

Weekly cook → private chef. 80 guests / speeches → catering. Ring → proposal dinner. Friends at the table for years → anniversary catering. Shared tourist camp → not us.
