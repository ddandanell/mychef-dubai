---
name: mychef-experiences-imagery
description: >
  Mandatory image-generation skill for the mychef-dubai / myCHEF.ae project.
  Use whenever the user asks for a picture, photo, image, hero, visual, concept art,
  Midjourney/Grok/DALL-E prompt, or any visual for myCHEF Experiences, catering,
  private chef, villa, yacht, desert, BBQ, wedding, blogs, or related pages.
  Triggers on: image, picture, photo, visual, hero image, generate image, prompt for image,
  mychef-dubai imagery, experience page art direction, blog image.
alwaysApply: true
project: mychef-dubai
---

# myCHEF Experiences — Image Generation Skill

**Status:** Standard / mandatory for this repository  
**Project:** mychef-dubai · myCHEF.ae  
**Full creative source:** `docs/skills/mychef-experiences-page-master-brief.md`

When anything in this workspace involves creating, rewriting, or directing an **image**, you **must** follow this skill. Do not improvise generic luxury stock direction.

**Analyze the page first. Do not generate until the scene, people, setting, and commercial job of the image are clear.**

---

## 1. Creative north star

People do not buy a chef, a menu, or a table. They buy intention: love, achievement, connection, confidence, relief from hosting, or a story worth remembering.

**Every image must feel like a memory witnessed from inside the experience** — not an advertisement assembled around it.

myCHEF is a **high-end all-in-one private chef and catering company**. Images must show a complete service: chef, service team, table, home, and host relief — not a single plate, not a lone cook, not a buffet tray on a desk.

### Page image balance (target mix)

| Share | Subject |
|------:|---------|
| 40% | Human emotion and interaction |
| 20% | Host relief and behind-the-scenes care |
| 15% | Atmosphere and setting |
| 15% | Culinary craft |
| 10% | Finished food |

---

## 2. Global art direction (always on)

- Cinematic **documentary** photography with **quiet luxury**
- Dubai via **light, architecture, water, atmosphere** — not constant landmark clichés
- Human reactions are **subtle**: held breath, recognition in the eyes, a hand across a table, a host finally sitting down
- **Imperfect life traces:** slightly turned chair, melting wax, folded menu, flour on fingers, half-finished plate
- Wardrobe refined and natural; no costume eveningwear unless the occasion needs it
- Food **achievable** by a real culinary team — not surreal or architecturally impossible

---

## 2.1 Who is in the picture (casting — always on)

Do **not** cast by religion. Do **not** write “no Muslims,” “no Arabs,” or any faith/ethnicity ban into a prompt.

Cast by **role, wealth context, and how this company actually works**.

### Clients / guests (who sits at the table)

These are myCHEF’s usual hosts: affluent international residents and visitors in Dubai — people living or doing business here with family or colleagues. They stay in **high-end villas and premium apartments** (Palm Jumeirah, Emirates Hills, Dubai Hills, Jumeirah, Downtown, Marina, DIFC residences).

Show them as:

- Wealthy international professionals and families (European, American, East Asian, wealthy Commonwealth, mixed international tables)
- Ages mostly 30–55, sometimes older parents as guests of honour
- Contemporary luxury wardrobe: linen, silk, tailored casual, quiet jewellery — not costume, not tourist dress
- Homes that look lived-in and expensive: pool terrace, villa dining room, penthouse with real furniture and books

Do **not** default every table to a religious-ceremony look (prayer beads as props, ceremonial group iftar as the generic dinner, costume modest-wear as the only guest style) unless the **page itself** is about that occasion (Iftar, Ramadan, Eid, wedding with that brief).

Occasion pages may show the occasion honestly. A hiring-guide dinner is a private villa dinner, not a religious gathering.

### Team / staff (who cooks and serves)

Dubai private-chef teams are mostly hospitality professionals from the region’s service workforce, with some senior chefs from high-end kitchens.

Show them as:

- **About 90% of visible service/kitchen support:** Filipino, South Asian, and similar hospitality professionals — skilled, calm, dignified
- **Some head chefs / senior talent:** European, Levantine, or other high-end kitchen backgrounds when the scene needs a lead chef
- Clean practical chef whites or dark service kit — never costume, never “servant in the corner”
- Hands busy with real work: plating, tasting, resetting, carrying from underneath

Never: anonymous brown hands only, bowed servants, or a room of only Western chefs if the scene is a full team.

### Homes and venues

If clients appear, the architecture must match their wealth: villa, garden, pool, yacht, penthouse, private dining room. Not a generic apartment kitchenette. Not a fluorescent office pantry.

---

## 2.2 Hard composition bans (always on)

### Never put food with computers

**Forbidden in every image:** plated food, canapés, grazing boards, or coffee service sitting on a desk next to a laptop, monitor, keyboard, mouse, or conference-call screen.

Why: it looks fake and cheap. Nobody in this market eats a plated dinner on a MacBook. Corporate catering happens in a **cleared meeting room, reception, terrace, or private dining room** — tables dressed for food, devices put away.

Corporate scenes may show:

- A dressed boardroom table after laptops are closed and stacked aside
- A reception or lounge with standing guests and passed canapés
- A private dining room used for a client dinner

Corporate scenes may **not** show:

- Sushi next to a keyboard
- A burger beside a spreadsheet
- A chef plating on an office desk
- “Busy professional eating at their computer”

### Other hard bans

- Exaggerated smiles, stock poses, camera-facing group shots
- Excessive gold, fantasy décor, empty showroom luxury
- Impossible plating, giant floral arches, decorative chef-as-prop
- Visible logos, watermarks, readable text/menus
- Landmark cliché overload; tourist-camp desert clichés
- Unsafe fire, children in cook zones
- Invented testimonials or “real event” claims for AI frames
- Casting people out of a scene because of religion

---

## 3. Technical baseline — append to every prompt

Unless a scene explicitly overrides, **end every generation prompt with:**

```text
Ultra-realistic cinematic editorial photograph, observed human moment, restrained quiet luxury, natural skin texture, believable hands, authentic high-end Dubai villa or residence, layered practical lighting, subtle film grain, rich but natural colour, realistic food and service details, affluent international guests, dignified hospitality team, no food next to laptops or computers, no visible brand logos, no text in image, no watermarks, no exaggerated smiles, no stock-photo posing, no excessive gold, no empty showroom atmosphere, no impossible table setting, 16:9 landscape master with safe central crop for 4:5 mobile.
```

---

## 4. Truth labels (copy next to images)

| Image type | Label |
|------------|--------|
| AI / commissioned illustrative | **Experience concept shown** |
| AI where policy requires | **Concept visual** |
| Approved real-event photography only | May be described as a real myCHEF experience |

**Never** manufacture testimonials, client reactions, chef history, or past events.

---

## 5. Continuity rules

For any multi-image story:

1. Build a **reference sheet** first (faces, ages, wardrobe, jewellery, hair, villa/yacht/kitchen geometry, team uniforms).
2. Reuse the same people and spaces across frames.
3. Progress daylight, candle burn, and meal state believably.
4. Do **not** swap in unrelated attractive people and call them one experience.

### Flagship product page — six-shot sequence

1. **Anticipation** — private work before arrival  
2. **Arrival** — guest enters the world  
3. **Creation** — chef and team build the experience  
4. **Recognition** — person begins to understand the meaning  
5. **Signature moment** — emotional or theatrical centre  
6. **Afterglow** — what remains when formality passes  

### Mobile crops

- Protect faces and meaningful hands inside the **central 60%** of landscape masters  
- Add 4:5 and 9:16 crops when environment carries the story  
- Never crop chefs at the wrists during craft  
- Never reduce service staff to an anonymous hand/tray only  

---

## 6. Commercial worlds → practical labels

Always pair creative world name with commercial label:

| Creative world | Practical label |
|----------------|-----------------|
| The Restaurant That Comes to You | Private chef at home |
| A Life Worth Celebrating | Birthdays and milestones |
| The Room That Remembers | Private dining and chef's tables |
| A Home That Looks After You | Villa and holiday chef |
| When Business Becomes Personal | Corporate dining and catering |
| For the Two of You | Romance, proposals and anniversaries |
| Where the City Meets the Water | Yacht dining and catering |
| Where the City Falls Silent | Desert private-chef experiences |
| Where Fire Brings Everyone Closer | BBQ and live-fire dining |
| The Beginning of Everything | Weddings and engagements |
| Food That Changes the Week | Weekly meal preparation and wellness |
| Come Into the Kitchen | Cooking classes and team building |

---

## 7. How to answer an image request

When the user asks for a picture / prompt / hero / visual:

1. **Identify** the page, act, moment, or world.
2. **Analyze first:** who is the client, who is the team, what is the home, what is the commercial job of the image.
3. **Read** the matching section in `docs/skills/mychef-experiences-page-master-brief.md` if detail is needed.
4. **Output** in this structure:

```markdown
### Scene
[One-line narrative purpose]

### Why this image
[Emotional / conversion reason]

### Placement
[Hero / world signature / supporting / sequence frame N]

### People
[Client look + team look, specific]

### Generation prompt
[Full prompt = scene direction + technical baseline + avoids]

### Negative / avoid
[Scene-specific avoids]

### Truth label
Experience concept shown | Concept visual | Real photography only if approved

### Continuity notes
[Reference sheet keys if part of a set]

### Crop guidance
16:9 master; protect [faces/hands/table] in central 60% for 4:5
```

5. If generating a **set**, order frames Anticipation → Afterglow and keep continuity.
6. If the user only wants “a nice food shot,” **redirect** toward the balance rules (emotion/host/setting/craft first; finished food max ~10% of a page set).
7. If image-generation tools are not available in the session, deliver the full prompts honestly. Do not claim pixels were created.

---

## 8. Signature prompts (ready to use)

### 8.1 Hero — Moment 1 (Experiences threshold)

```text
A cinematic documentary photograph from inside an elegant lived-in Dubai villa dining room at warm blue-hour, taken one second before a meaningful private dinner surprise is revealed. In the foreground, a stylish but natural affluent international host in their late 30s watches a partially open doorway with quiet anticipation, one hand resting lightly on the back of a chair. Through the doorway, the guest of honour appears only as a softly focused approaching silhouette. In the middle ground, a professional private chef places one final handwritten menu beside a plate, calm and concentrated, with a Filipino or South Asian assistant checking candle spacing. The table is refined but human: warm linen, low flowers, candlelight, one chair slightly turned, no excessive gold. The emotional focus is the host waiting to see the guest's reaction. Camera at seated eye level, 35mm lens, shallow but not extreme depth of field, natural skin texture, practical warm lamps mixed with cool evening light, subtle film grain, believable hands and food, no posing, no visible logos, no text, no stock-photo smiles, no fantasy décor. Ultra-realistic editorial photography, 16:9 with mobile-safe central composition.
```

**Avoid:** Proposal ring close-ups, clinking champagne, enormous floral arches, guests staring at camera, empty luxury rooms, chef as decorative servant, food next to devices.

### 8.2 Menu mystery — Moment 2

```text
Intimate close-up documentary photograph of a human hand gently turning a beautifully printed but unreadable menu face down on a linen table before guests arrive, a second hand in the soft background adjusting a chair, warm candlelight, visible paper texture, restrained elegant table, a tiny irregularity in the folded napkin, emotional feeling of keeping a thoughtful secret, realistic fingers and nails, 50mm lens, shallow depth of field, no readable text, no jewellery product focus, no logo, no staged perfection. Ultra-realistic cinematic editorial photograph, observed human moment, restrained quiet luxury, natural skin texture, believable hands, authentic Dubai residence or location, layered practical lighting, subtle film grain, rich but natural colour, realistic food and service details, no visible brand logos, no text in image, no watermarks, no exaggerated smiles, no stock-photo posing, no excessive gold, no empty showroom atmosphere, no impossible table setting, 16:9 landscape master with safe central crop for 4:5 mobile.
```

### 8.3 Intention — recognition (Moment 4)

```text
Quiet documentary dinner scene in a contemporary high-end Dubai villa, a dignified woman in her late 60s has just tasted a familiar family dish and looks toward her adult daughter with a small, surprised expression of recognition; the daughter watches gently without performing for camera. Mixed-generation affluent international guests sit softly out of focus around the table. A serving dish is being passed, plates are partially eaten, candlelight is natural and low. Capture the instant of understanding, not crying or broad smiles. Warm 50mm editorial photography, realistic mature skin, believable hands, lived-in luxury home, no staged toast, no stock-photo family pose. Ultra-realistic cinematic editorial photograph, observed human moment, restrained quiet luxury, natural skin texture, believable hands, authentic Dubai residence or location, layered practical lighting, subtle film grain, rich but natural colour, realistic food and service details, no visible brand logos, no text in image, no watermarks, no exaggerated smiles, no stock-photo posing, no excessive gold, no empty showroom atmosphere, no impossible table setting, 16:9 landscape master with safe central crop for 4:5 mobile.
```

### 8.4 Place triptych — Moment 5

```text
Editorial cinematic triptych of three plausible Dubai culinary settings connected by the same warm line of light: left, the open doorway of a lived-in modern villa with a softly prepared private table; centre, the corner of a yacht deck at golden hour with water movement and only part of a set table visible; right, a restrained low desert dining setup at the edge of dusk with dunes and practical lanterns, no extravagant fantasy installation. Human traces but no central posed figures, realistic venue constraints, coherent colour grade, refined quiet luxury, 16:9 panoramic composition. Ultra-realistic cinematic editorial photograph, observed human moment, restrained quiet luxury, layered practical lighting, subtle film grain, rich but natural colour, no visible brand logos, no text in image, no watermarks, no excessive gold, no empty showroom atmosphere, no impossible table setting, 16:9 landscape master with safe central crop for 4:5 mobile.
```

### 8.5 Desert signature — Where the City Falls Silent

```text
Ultra-realistic cinematic documentary photograph in the Dubai desert during the final twenty minutes before sunset. Four elegantly but naturally dressed affluent international guests walk over a low dune and see their private dining setting for the first time. Photograph them from slightly behind and at human eye level so the viewer arrives with them. The desert occupies more than two-thirds of the composition and feels vast, textured and quiet. The table is restrained and operationally believable: warm linen, stable low arrangements, practical lanterns and one subtle natural detail, with no enormous arches, chandeliers, fantasy carpets or excessive gold. A professional private chef and assistant make final preparations beside a discreet wind-protected service area in the middle distance; they appear as capable creative professionals, not costumed attendants. Wind moves fabric gently and the guests' footprints remain visible in the sand. The emotional focus is the change in pace as the group encounters the silence and scale of the landscape. Amber sunset moving toward deep blue, realistic desert colour, natural skin and fabric texture, 35mm cinematic editorial photography, no camels, no tourist-camp clichés, no visible logos, no text, 16:9 landscape with all people protected inside a mobile-safe central crop.
```

**Desert safeguards:** Never imply myCHEF owns the site; no unsafe fire/candles in wind; no fake Milky Way; no proposal-default; production looks removable; show arrival/silence/light — not only a finished table.

### 8.6 Live-fire villa grill — Where Fire Brings Everyone Closer

```text
Ultra-realistic cinematic documentary photograph of a premium private BBQ experience in the garden of a lived-in Dubai villa at sunset. An affluent international family and friends gather naturally around a generous outdoor table beside the pool. The host is clearly seated, relaxed and engaged in conversation rather than standing over the grill. Nearby in the second plane, a skilled private chef works at a stable professional live-fire grill while a Filipino or South Asian assistant manages ingredients, timing and safe service; both appear as capable culinary professionals. One guest turns naturally toward the fire as a dish is finished while others continue talking and sharing. Flame is controlled and believable, with gentle smoke travelling safely away from guests. The table carries realistic sharing dishes, salads, breads, sauces, grilled vegetables and seafood as well as meat, expressing abundance without excess. Warm sunset develops into ember light, contemporary Dubai villa architecture, realistic outdoor spacing, natural skin and hands, 35mm cinematic editorial photography, no chef posing, no giant flames, no raw-meat glamour shot, no disposable barbecue, no staged champagne toast, no visible logos or text, 16:9 with a safe central mobile crop.
```

### 8.7 Private chef at home — host remains present

```text
Observational photograph across an open-plan high-end Dubai villa during a private chef evening. In the foreground, an affluent international host is seated and genuinely engaged in conversation with two guests, shoulders relaxed, not watching the kitchen. In the background, a skilled chef calmly finishes a dish at the island while a hospitality assistant quietly resets one place, both visible as coordinated professionals rather than anonymous servants. The home feels inhabited with books and subtle personal objects, kitchen is orderly but active, warm practical lighting, realistic service spacing, no camera-facing people, 35mm environmental documentary frame. Ultra-realistic cinematic editorial photograph, observed human moment, restrained quiet luxury, natural skin texture, believable hands, authentic Dubai residence or location, layered practical lighting, subtle film grain, rich but natural colour, realistic food and service details, no visible brand logos, no text in image, no watermarks, no exaggerated smiles, no stock-photo posing, no excessive gold, no empty showroom atmosphere, no impossible table setting, 16:9 landscape master with safe central crop for 4:5 mobile.
```

### 8.8 Closing doorway — Moment 17 (pairs with hero)

```text
Closing cinematic photograph returning to the exact same Dubai villa doorway and dining room as the opening hero, now later at night. The door is fully open, the host is seated among guests and engaged in conversation, the guest of honour is part of the warm table rather than performing a reaction. The chef and service team are visible only where naturally appropriate, completing the rhythm of the evening. Candles have burned lower, plates show a real meal in progress, atmosphere warm and lived-in. Match hero architecture, cast, wardrobe and lens for perfect narrative continuity, 35mm documentary photograph, no camera gaze, no staged toast. Ultra-realistic cinematic editorial photograph, observed human moment, restrained quiet luxury, natural skin texture, believable hands, authentic Dubai residence or location, layered practical lighting, subtle film grain, rich but natural colour, realistic food and service details, no visible brand logos, no text in image, no watermarks, no exaggerated smiles, no stock-photo posing, no excessive gold, no empty showroom atmosphere, no impossible table setting, 16:9 landscape master with safe central crop for 4:5 mobile.
```

---

## 9. Credibility & copy guardrails (visual + adjacent UI copy)

- Prefer *designed to express…* over *guaranteed to make them feel…*
- Do not imply myCHEF owns yachts, desert sites, beaches, or private venues
- Workers show **judgment and skill**, not luxury decoration
- Wellness visuals: food and ease — not medical/clinical claims
- No fake awards, reviews, or case-study collages from unrelated events
- Case studies: only approved real photos from the **same** booking

---

## 10. Blog image workflow

For every blog in `src/content/blogTaxonomy.ts` / `src/content/seo-pages/blog-*.json`:

1. Read the page purpose, H1, and sections before writing any prompt.
2. Keep the existing file names under `public/images/blog/` unless the user asks to add frames.
3. Standard set: **hero + 2 supporting** (3 total). Lifestyle-heavy posts may use 4.
4. Hero sells the **outcome of hiring myCHEF** (host present, home beautiful, team in control).
5. One supporting frame is usually **craft / team**.
6. One supporting frame is usually **afterglow / table life**.
7. Corporate blogs: dressed rooms, devices away. Never food + laptop.
8. Seasonal religious-occasion blogs (Iftar, Ramadan, Eid): show the occasion honestly without turning guests into costume.
9. Write prompts in the Section 7 template. Do not claim generated files unless an image tool actually ran.

Blog 1 brief lives at `docs/skills/blog-01-how-to-hire-a-private-chef-dubai-images.md`.

---

## 11. Agent checklist (before delivering any image prompt)

- [ ] Page analyzed before prompting
- [ ] Scene matches a defined moment/world (or is clearly marked as new supporting art)
- [ ] Client look = affluent international residents in luxury homes
- [ ] Team look = dignified hospitality professionals, mostly regional service workforce, some senior chefs
- [ ] No food next to laptops / monitors / keyboards
- [ ] Emotion / host-relief / setting / craft balance respected
- [ ] Technical baseline appended
- [ ] Avoid list included
- [ ] Truth label stated
- [ ] Continuity keys noted if multi-image
- [ ] Mobile central crop protected
- [ ] No landmark clichés, unsafe fire, servant posing, readable fake text, or invented “real” proof
- [ ] No religion-based exclusion in the prompt
- [ ] Commercial world label available if the image keys a product world

---

## 12. Related files

| File | Role |
|------|------|
| `docs/skills/mychef-experiences-page-master-brief.md` | Full page journey, all moments, all world prompts |
| `docs/skills/blog-01-how-to-hire-a-private-chef-dubai-images.md` | Blog 1 analyzed image set |
| `AGENTS.md` | Project-wide rule: always apply this skill for imagery |
| `skills/mychef-experiences-imagery/SKILL.md` | This operational skill |

**If instructions conflict:** this skill + master brief win for all myCHEF visuals in this repo.
