# Master page blueprint — nav commercial URLs

**Mode:** PLAN ONLY. No `src/` edits in this pass.  
**Agents:** Events, Catering formats, Corporate, Cuisines, Dinner (experiences).  
**Sources:** `docs/seo/myCHEF-AE-SEO-STANDARD.json` `pages[path]` · writing system · published prices in `src/content/`. Do not feed the 500-keyword architecture file or `mychef-master-keywords.json` to writers.

---

## Non-negotiables (all clusters agreed)

1. **One primary per URL** — title, H1, first paragraph, one H2, one FAQ, meta.
2. **12–16 sections** (cap 20). Extra H2 only for an *owned* secondary. Never 50 filler.
3. **1,000–1,200 words** of related body on spokes. Hubs are routers (800–1,100).
4. **Section 8 is unique** — the constraint no sibling can copy.
5. **Section 4 kills cannibalisation** — who should leave, with links to owners.
6. **3–5 images** — hero + after “what this is” + mid constraint + gallery of 4. Existing `public/images/{slug}-hero.webp` first. AI: “Experience concept shown.” Imagery skill. Never food next to laptops.
7. **Prices** — AED 90 drop-off · 120 buffet · 150 premium/stations/canapés/BBQ/grazing · 700–950 chef on site · 5% VAT · min 10 / 20 / AED 900 · chef-on-site no headcount min. Packages 1,200 / 2,400 / 3,600 as starting points. Link `/dubai-catering-prices-guide`. Do not invent.
8. **Silo-map** `do_not_link` never in rails.
9. **Code locks beat JSON** when they disagree.
10. Final-editor ≥ 16 before any URL ships.

### Four products (every section 4)

| Product | Hub |
|---------|-----|
| Household chef | `/private-chef-dubai` |
| One-night catering / format | `/catering-dubai` |
| Occasion | `/events` |
| Experience / moment | `/luxury-dining-experiences` |

---

## Image placement (every rebuilt spoke)

| Slot | Where | Job |
|------|--------|-----|
| Hero | Top | Outcome of hiring myCHEF (host present, team in control) |
| Mid A | After who-for / not | Human emotion or host relief |
| Mid B | Inside unique constraint | Craft or setting of *this* URL |
| Gallery | Before FAQ | 4 frames, one evening, continuity |

Reuse existing heroes. New pixels: Grok only, `skills/mychef-experiences-imagery`. Balance: emotion 40 · relief 20 · setting 15 · craft 15 · food 10.

---

## Cluster files

| File | Mega | Action |
|------|------|--------|
| `01-events.md` | Events | 6 rebuilds, 2 gap-fills, hub router |
| `02-catering-formats.md` | Catering | 8 format rebuilds, hub gap-fill |
| `03-corporate.md` | Corporate | 7 rebuilds + hub router (drafted if agent still running) |
| `04-cuisines.md` | Cuisines | 6 kitchen rebuilds, hub router |
| `05-dinner.md` | Dinner | 5 spoke rebuilds, hub slim, gift-card truth |

Private Chef six: **already on spine — do not reopen.**  
Contact mega: not in this commercial pass.

---

## Build order (site-wide)

1. **Engagement** (model occasion) → anniversary → baby shower → graduation → private party → kids birthday  
2. **`/events` hub router**  
3. Birthday + wedding: **patches only**  
4. Format clones: buffet → canapé+finger food pair → live stations → BBQ → grazing → drop-off → packages last  
5. Catering hub: add missing style links + cost pointer only  
6. Cuisines: Arabic → Indian → Italian → Mediterranean → Asian → sushi → hub  
7. Corporate: hub router → events → gala → launch → office → conference → exhibition → staff meals  
8. Dinner: gift-card truth first → romantic → tasting → cooking → desert → hub slim  

---

## First ship

`/engagement-catering-dubai` — 14 sections, ~1,180 words, keep the four gallery images already generated, add `/proposal-dinner-dubai` who-not link, published price bands, no brochure adjectives.

Do not touch `src/` until that page (or this master) is approved.
