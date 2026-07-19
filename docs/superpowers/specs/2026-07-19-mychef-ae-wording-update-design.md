# mychef.ae Wording Update — Design Spec

> **Status:** Approved for implementation plan  
> **Inputs:** `MyChef_Reword_Handoff_for_David/` (AI_README.md, mychef_reword_changes.json, mychef_elevated_reword.md, mychef_jsonld_blocks.md, README_for_David.md)  
> **Live codebase:** `/Users/openclaw/Movies/mychef dubai/app` (Vite + React + TypeScript SPA, ~180 routes)  
> **Goal:** Reposition myCHEF as a private-dining and event-design brand that connects clients with independent, licensed chefs — never claiming myCHEF cooks, caters, or employs chefs.

---

## 1. Golden Rule

Every line of copy must pass:

> **"Does this say WE cook, cater, prepare, source, or employ/supply/staff the chefs?"**
> If yes → rewrite so the **chef** does the regulated work and myCHEF **designs / arranges / matches / manages / coordinates**.

- ✅ Keep: `your chef`, `handpicked chefs`, `chefs in our network`, `we design`, `we match`, `we coordinate`, `we run the evening`, `one standard`, `one point of contact`.
- ❌ Never: `we cook`, `we cater`, `we prepare`, `our chefs`, `our team`, `our kitchen`, `one team`, `full-service catering` (as ours), `we provide/place chefs`, `careers@`, HACCP about myCHEF.

---

## 2. Overall Strategy

Build a **validator-first pipeline**:

1. Create the scanner *before* any rewording so every phase has an objective pass/fail gate.
2. Work on a feature branch (`feat/reword-legal-positioning`).
3. Each phase ends with `npm run build` and a Vercel preview deploy.
4. No live production deploy until: (a) scanner returns zero, (b) positive assertions pass, (c) a UAE lawyer reviews and approves.

**Implementation approach:** Hybrid
- Manual edits for shared components and the highest-trust pages.
- Codemod for deterministic bulk swaps across ~120 templated pages.
- Subagents for contextual judgment on key pages and final review.

---

## 3. Phase 1 — Quarantine + Scanner Scaffolding

### 3.1 Regulated-sector page quarantine

Set the following 5 routes to `noindex,nofollow` and 301-redirect them to `/luxury-dining-experiences`:

- `/healthcare-catering-dubai`
- `/school-catering-dubai`
- `/nursery-catering-dubai`
- `/university-catering-dubai`
- `/government-event-catering-dubai`

Implementation:
- Add `<meta name="robots" content="noindex, nofollow">` to each of the 5 page components via their `<SEO noindex />` prop.
- Add Vercel 301 redirects in `vercel.json` (or the Vercel project redirects UI) from the 5 paths to `/luxury-dining-experiences`.
- Do not reword these pages; leave them out of the scanner's "must be zero" pass except to confirm they are noindexed.

### 3.2 Scanner script

Create `scripts/reword-scanner.ts` that:

- Reads `mychef_reword_changes.json` (copied or referenced from the handoff folder).
- Runs every `scanner.regex_must_be_zero` pattern case-insensitively over:
  - `src/**/*.tsx` source text,
  - generated JSON-LD strings,
  - `<title>` and meta/OG/Twitter strings embedded in components.
- Runs `positive_assertions`:
  - Every `/*-catering-dubai` page still contains the word `Catering` in its `<title>` and H1.
  - Every page contains the footer role-statement string.
  - Homepage contains exactly one `ProfessionalService` JSON-LD node.
- Prints a per-pattern/per-file hit report; exits non-zero if any banned pattern is found or any positive assertion fails.
- Runs in CI/local via `npx tsx scripts/reword-scanner.ts`.

Deliverable:
- `scripts/reword-scanner.ts` committed and passing on the current (un-reworded) codebase with known failures documented, so we can measure progress.

---

## 4. Phase 2 — Shared Components + Key Pages

### 4.1 Shared components (manual edits)

| Component | Changes |
|-----------|---------|
| `src/components/SEO.tsx` | Remove global title suffix ` — Premium Private Chef & Catering`. Homepage title becomes `Private Chef & Luxury Dining Experiences Dubai \| myCHEF Dubai`. |
| `src/components/Footer.tsx` | Update tagline from "Premium Private Chef & Catering, Dubai" to **"Private Dining & Event Design, Dubai"**. Add the role-statement footer line: **"myCHEF Dubai designs and manages private dining and event experiences and connects clients with independent, licensed chefs and catering professionals. Culinary preparation is performed by those licensed third parties, whom the client engages; myCHEF is not a food establishment."** Omit the licence line until legal details arrive. |
| `src/components/Navbar.tsx` | Apply phrase_map to any employment/cooking claims in labels. |
| `src/components/TrustBar.tsx` | Apply phrase_map (e.g., `HACCP-aligned` → partner-held food-safety wording, `VERIFIED CHEFS` → `HANDPICKED CHEFS`). |
| `src/sections/HeroSection.tsx` | Apply elevated homepage hero copy from `mychef_elevated_reword.md` §1. |
| `src/sections/ServicesSection.tsx` | Apply elevated services-grid copy from `mychef_elevated_reword.md` §1. |
| `src/sections/TrustSection.tsx` | Apply elevated trust-strip copy. |
| `src/sections/HowItWorksSection.tsx` | Apply elevated 4-step copy from `mychef_elevated_reword.md` §4. |
| `src/sections/TeamSection.tsx` | Rename "MEET OUR CHEFS" → "OUR CULINARY NETWORK" or "THE CHEFS WE CHOOSE"; apply phrase_map. |
| `src/sections/CTASection.tsx` | Apply phrase_map to CTA text. |
| `src/sections/LocationsSection.tsx`, `src/components/LocationStrip.tsx` | `WHERE WE CATER` → `WHERE WE SERVE`; apply phrase_map. |
| `src/sections/TestimonialsSection.tsx`, `src/sections/GuidesTeaserSection.tsx`, `src/sections/StarterPackagesSection.tsx` | Apply phrase_map where needed. |

### 4.2 Key pages (subagent-driven, elevated copy wins)

Apply the exact ✓ "after" wording from `mychef_elevated_reword.md` where it exists; apply `phrase_map` for residual text; regenerate JSON-LD.

- `src/pages/Home.tsx`
- `src/pages/About.tsx`
- `src/pages/HowItWorks.tsx`
- `src/pages/FAQ.tsx`
- `src/pages/OurChefs.tsx`
- `src/pages/Catering.tsx`
- `src/pages/chefs/ChefAhmed.tsx`
- `src/pages/chefs/ChefSofia.tsx`
- `src/pages/chefs/ChefMarco.tsx`
- `src/pages/chefs/ChefLayla.tsx`

Special notes:
- `/terms` is high-risk and lawyer-first. Reword per the handoff's rule, but flag it explicitly as **pending legal review** and do not publish until approved.
- The 4 chef bios must be reframed as independent partner chefs in the myCHEF network, not employees.

### 4.3 Schema changes on key pages

- `Home.tsx`: replace `Organization` + `FoodService` with a single `ProfessionalService` block (homepage only). Keep `WebSite` schema.
- Pages with visible FAQs: wrap reworded FAQs in `FAQPage` JSON-LD with text identical to visible copy.
- Any page still emitting `@type: Caterer`, `CateringService`, `Restaurant`, or `FoodEstablishment` → change to `ProfessionalService` or `Service`.

---

## 5. Phase 3 — Bulk Pages via Codemod

### 5.1 Codemod

Create `scripts/apply-reword-rules.ts` that reads `mychef_reword_changes.json` and applies:

1. `global.find_replace_exact` to all `src/pages/**/*.tsx`.
2. `global.phrase_map` regex replacements to all `src/**/*.tsx` (components + pages).
3. Template-specific `find_replace` rules per page category:
   - Occasion/cuisine/corporate-type `/*-catering-dubai` pages
   - `/locations/*` pages
   - Service hub pages
   - Blog/guide pages
   - Case studies / press / gallery

Rules:
- Do not touch the 5 quarantined pages.
- Do not touch the Phase 2 key pages (they already have elevated copy).
- Preserve URLs, prices, H1s, and the noun `Catering` in titles.
- Never output a replacement containing the literal `our chef`.

### 5.2 Validation

- Run codemod.
- Spot-check 5–10 pages per category.
- Run scanner; fix any non-zero hits.
- Run `npm run build`; fix any TypeScript/JSX errors.
- Deploy preview.

---

## 6. Phase 4 — Final Scanner, Build, and Legal Handoff

### 6.1 Final checks

- Run scanner across all `src/**/*.tsx` and generated JSON-LD.
- If feasible, run scanner against rendered build output (e.g., using `react-snap`, `renderToString`, or a headless crawler) to catch text inside client-rendered components.
- Run positive assertions.
- Confirm `npm run build` passes.
- Confirm Vercel preview deploy succeeds.

### 6.2 What "done" looks like

- [ ] 5 regulated pages quarantined (noindex + 301).
- [ ] Scanner returns zero on all ~180 pages (case-insensitive).
- [ ] Positive assertions pass (keywords preserved; role statement on every page; one ProfessionalService).
- [ ] Key pages use elevated wording; URLs/prices unchanged.
- [ ] `/terms` flagged for legal review and not published until approved.
- [ ] Licence line omitted until legal details arrive.
- [ ] Branch handed to human for one UAE legal review pass; no live publish by the implementation agent.

---

## 7. Risks, Blockers, and Fallbacks

| Risk | Mitigation |
|------|------------|
| Licence details not yet available | Omit footer licence line; add TODO comment and a Phase 5 follow-up task. |
| `/terms` legal pushback | Mark as lawyer-only; if blocked, keep current terms and do not publish the reword branch until resolved. |
| Named chef pages still read as employment | Reframe as independent network chefs; fallback is noindex if lawyer objects. |
| Codemod over-replaces or breaks JSX | Run `npm run build` after codemod; use exact string matches before regex; review spot-check samples. |
| Scanner misses client-rendered text | Run scanner on source first; add rendered-build scan if tooling allows. |
| URLs or prices accidentally changed | Positive assertions and manual spot-checks guard against this. |

---

## 8. Out of Scope

- No new URLs.
- No shopping cart / online checkout.
- No new images, layout, or design changes.
- No new pages.
- No claim of HACCP or licensed-caterer status for myCHEF itself.
- No live production deploy by the implementation agent.
