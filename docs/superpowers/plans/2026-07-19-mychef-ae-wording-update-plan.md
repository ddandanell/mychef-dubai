# mychef.ae Wording Update — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reword the entire mychef.ae site so myCHEF never claims to cook, cater, or employ chefs, while preserving every URL, title keyword, H1, price, and SEO signal.

**Architecture:** Validator-first pipeline. Build a scanner from `mychef_reword_changes.json` *before* changing copy. Quarantine 5 regulated pages first. Then manually reword shared components and high-trust key pages. Then run a codemod for deterministic bulk swaps across ~120 templated pages. Finally regenerate JSON-LD and run the scanner until it returns zero.

**Tech Stack:** Vite 7.3 + React 19 + TypeScript, Tailwind CSS, React Helmet Async, Vercel redirects, `tsx` for scripts.

## Global Constraints

- **No URL changes** except the 5 quarantine 301 redirects.
- **No title/H1 keyword loss:** every `/*-catering-dubai` page keeps "Catering" in title and H1.
- **No price changes.**
- **No design, layout, or image changes** — words only.
- **No checkout/cart additions.**
- **No HACCP / licensed-caterer claims about myCHEF itself.**
- **No replacement containing literal `our chef`**.
- **Case-insensitive scanner must return zero** on all ~180 pages before legal handoff.
- **No live production deploy** by the implementation agent.
- **Licence line omitted** until legal name/number/authority are provided.

---

## File Inventory

| File | Responsibility |
|------|----------------|
| `scripts/reword-scanner.ts` | Reads handoff JSON and checks source/JSON-LD for banned patterns; runs positive assertions. |
| `scripts/apply-reword-rules.ts` | Codemod that applies deterministic find/replace and phrase_map rules to page/component source. |
| `src/components/SEO.tsx` | Shared SEO component; controls title suffix and meta/OG/Twitter/canonical. |
| `src/components/Footer.tsx` | Shared footer; tagline and role-statement line go here. |
| `src/components/Navbar.tsx` | Shared nav; apply phrase_map to labels if needed. |
| `src/components/TrustBar.tsx` | Trust strip; apply phrase_map. |
| `src/sections/*` | Shared page sections (Hero, Services, Trust, HowItWorks, Team, CTA, Locations, Testimonials, GuidesTeaser, StarterPackages). |
| `src/utils/schema.ts` | Schema generators; change `FoodService` to `ProfessionalService` on homepage only. |
| `src/pages/Home.tsx`, `About.tsx`, `HowItWorks.tsx`, `FAQ.tsx`, `OurChefs.tsx`, `Catering.tsx` | High-trust key pages using elevated copy. |
| `src/pages/chefs/ChefAhmed.tsx`, `ChefSofia.tsx`, `ChefMarco.tsx`, `ChefLayla.tsx` | Named chef bios reframed as independent partners. |
| `src/pages/Terms.tsx` | High-risk; reword but flag for lawyer review. |
| `src/pages/HealthcareCatering.tsx`, `SchoolCatering.tsx`, `NurseryCatering.tsx`, `UniversityCatering.tsx`, `GovernmentEventCatering.tsx` | Quarantined pages; add `noindex`. |
| `vercel.json` | 301 redirects for quarantined pages. |
| `src/pages/**/*.tsx` (~130 remaining) | Bulk-reworded via codemod. |

---

## Task 1: Bootstrap Feature Branch and Copy Handoff JSON into Repo

**Files:**
- Create: `app/docs/handoff/mychef_reword_changes.json`
- Modify: none

**Interfaces:**
- Produces: `app/docs/handoff/mychef_reword_changes.json` — the canonical rule source for scripts.

- [ ] **Step 1: Create handoff copy**

Copy `/Users/openclaw/Downloads/MyChef_Reword_Handoff_for_David/mychef_reword_changes.json` into `app/docs/handoff/mychef_reword_changes.json` so scripts can read it from a stable relative path.

```bash
cp "/Users/openclaw/Downloads/MyChef_Reword_Handoff_for_David/mychef_reword_changes.json" \
  "/Users/openclaw/Movies/mychef dubai/app/docs/handoff/mychef_reword_changes.json"
```

- [ ] **Step 2: Create feature branch**

```bash
cd "/Users/openclaw/Movies/mychef dubai/app"
git checkout -b feat/reword-legal-positioning
```

- [ ] **Step 3: Commit**

```bash
git add docs/handoff/mychef_reword_changes.json
git commit -m "chore: copy reword handoff JSON into repo"
```

---

## Task 2: Build the Reword Scanner Script

**Files:**
- Create: `scripts/reword-scanner.ts`
- Modify: `package.json` (add script entry if needed)

**Interfaces:**
- Consumes: `docs/handoff/mychef_reword_changes.json`
- Produces: CLI tool run via `npx tsx scripts/reword-scanner.ts`

- [ ] **Step 1: Write scanner script**

Create `scripts/reword-scanner.ts`:

```typescript
import fs from 'fs'
import path from 'path'
import { globSync } from 'glob'

const HANDOFF_PATH = path.resolve(__dirname, '../docs/handoff/mychef_reword_changes.json')
const SRC_GLOB = 'src/**/*.{tsx,ts}'

interface Handoff {
  global: {
    scanner: {
      regex_must_be_zero: string[]
    }
    positive_assertions: string[]
  }
}

function main() {
  const handoff: Handoff = JSON.parse(fs.readFileSync(HANDOFF_PATH, 'utf-8'))
  const files = globSync(SRC_GLOB, { cwd: path.resolve(__dirname, '..') })

  let failed = false
  const patterns = handoff.global.scanner.regex_must_be_zero

  console.log(`Scanning ${files.length} files against ${patterns.length} banned patterns...\n`)

  for (const rawPattern of patterns) {
    const regex = new RegExp(rawPattern.slice(2), 'i') // strip (?i) prefix
    let totalHits = 0
    const hits: { file: string; line: number; text: string }[] = []

    for (const file of files) {
      const fullPath = path.resolve(__dirname, '..', file)
      const content = fs.readFileSync(fullPath, 'utf-8')
      const lines = content.split('\n')
      lines.forEach((line, idx) => {
        if (regex.test(line)) {
          totalHits++
          hits.push({ file, line: idx + 1, text: line.trim() })
        }
      })
    }

    if (totalHits > 0) {
      failed = true
      console.log(`❌ Pattern ${regex.source}: ${totalHits} hit(s)`)
      hits.slice(0, 10).forEach((h) => console.log(`   ${h.file}:${h.line}  ${h.text.substring(0, 120)}`))
      if (hits.length > 10) console.log(`   ... and ${hits.length - 10} more`)
    } else {
      console.log(`✅ Pattern ${regex.source}: 0 hits`)
    }
  }

  // Positive assertions (manual checks printed, not enforced by regex here)
  console.log('\nPositive assertions (verify manually or extend script):')
  handoff.global.positive_assertions.forEach((a) => console.log(`  • ${a}`))

  if (failed) {
    console.log('\nScanner FAILED — banned patterns found.')
    process.exit(1)
  } else {
    console.log('\nScanner PASSED — zero banned patterns found.')
    process.exit(0)
  }
}

main()
```

- [ ] **Step 2: Install `glob` if missing**

```bash
cd "/Users/openclaw/Movies/mychef dubai/app"
npm list glob || npm install --save-dev glob
```

- [ ] **Step 3: Run scanner to establish baseline**

```bash
npx tsx scripts/reword-scanner.ts
```

Expected: non-zero exit with a list of known banned-pattern hits across the current codebase. This is the baseline.

- [ ] **Step 4: Commit**

```bash
git add scripts/reword-scanner.ts package.json package-lock.json
git commit -m "feat: add reword scanner script"
```

---

## Task 3: Quarantine the 5 Regulated Pages

**Files:**
- Modify: `src/pages/HealthcareCatering.tsx`, `SchoolCatering.tsx`, `NurseryCatering.tsx`, `UniversityCatering.tsx`, `GovernmentEventCatering.tsx`
- Create/Modify: `vercel.json`

**Interfaces:**
- Consumes: `SEO` component's `noindex` prop
- Produces: 5 pages with `noindex,nofollow`; 5 Vercel 301 redirects to `/luxury-dining-experiences`

- [ ] **Step 1: Add noindex to each regulated page**

For each of the 5 pages, add `noindex` to the `<SEO ... />` call. Example for `HealthcareCatering.tsx`:

```tsx
<SEO
  title="Healthcare Catering Dubai"
  description="..."
  canonicalPath="/healthcare-catering-dubai"
  noindex
/>
```

Repeat for:
- `SchoolCatering.tsx`
- `NurseryCatering.tsx`
- `UniversityCatering.tsx`
- `GovernmentEventCatering.tsx`

- [ ] **Step 2: Create Vercel redirects**

Create `vercel.json` at repo root (`/Users/openclaw/Movies/mychef dubai/app/vercel.json`) if it does not exist, or append to it:

```json
{
  "redirects": [
    { "source": "/healthcare-catering-dubai", "destination": "/luxury-dining-experiences", "permanent": true },
    { "source": "/school-catering-dubai", "destination": "/luxury-dining-experiences", "permanent": true },
    { "source": "/nursery-catering-dubai", "destination": "/luxury-dining-experiences", "permanent": true },
    { "source": "/university-catering-dubai", "destination": "/luxury-dining-experiences", "permanent": true },
    { "source": "/government-event-catering-dubai", "destination": "/luxury-dining-experiences", "permanent": true }
  ]
}
```

- [ ] **Step 3: Verify build still passes**

```bash
npm run build
```

Expected: build succeeds.

- [ ] **Step 4: Commit**

```bash
git add src/pages/HealthcareCatering.tsx src/pages/SchoolCatering.tsx src/pages/NurseryCatering.tsx src/pages/UniversityCatering.tsx src/pages/GovernmentEventCatering.tsx vercel.json
git commit -m "feat: quarantine 5 regulated catering pages (noindex + 301)"
```

---

## Task 4: Update Shared SEO Component

**Files:**
- Modify: `src/components/SEO.tsx`

**Interfaces:**
- Consumes: `title` prop from pages
- Produces: title without global suffix; homepage title as specified

- [ ] **Step 1: Remove global title suffix**

Change:

```tsx
const fullTitle = title
  ? `${title} | ${SITE_NAME} — Premium Private Chef & Catering`
  : `${SITE_NAME} — Premium Private Chef & Luxury Catering Dubai`
```

To:

```tsx
const fullTitle = title
  ? `${title} | ${SITE_NAME}`
  : `${SITE_NAME} — Premium Private Chef & Luxury Dining Experiences Dubai`
```

- [ ] **Step 2: Update default description**

Change `DEFAULT_DESCRIPTION` from:

```tsx
const DEFAULT_DESCRIPTION = 'myCHEF Dubai delivers premium private chef services, luxury catering, and bespoke dining experiences across Dubai. From villas to yachts — request your custom quote today.'
```

To:

```tsx
const DEFAULT_DESCRIPTION = 'myCHEF Dubai designs private dining experiences and connects you with handpicked, licensed chefs across Dubai. From villas to yachts — request your custom quote today.'
```

- [ ] **Step 3: Verify build**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add src/components/SEO.tsx
git commit -m "feat: remove catering title suffix; update default meta description"
```

---

## Task 5: Update Shared Footer

**Files:**
- Modify: `src/components/Footer.tsx`

**Interfaces:**
- Produces: coordinator-safe tagline and role-statement line on every page

- [ ] **Step 1: Update tagline**

Change line 93-94:

```tsx
<p className="mt-4 font-inter text-body-sm text-gray-400 leading-relaxed">
  Premium Private Chef & Catering, Dubai
</p>
```

To:

```tsx
<p className="mt-4 font-inter text-body-sm text-gray-400 leading-relaxed">
  Private Dining & Event Design, Dubai
</p>
```

- [ ] **Step 2: Update secondary description**

Change line 95-97:

```tsx
<p className="mt-4 font-inter text-body-sm text-gray-500 leading-relaxed">
  Bespoke culinary experiences for villas, yachts, and events across Dubai.
</p>
```

To:

```tsx
<p className="mt-4 font-inter text-body-sm text-gray-500 leading-relaxed">
  Bespoke dining experiences for villas, yachts, and events across Dubai.
</p>
```

- [ ] **Step 3: Add role-statement line above copyright**

Insert before the copyright divider (around line 297):

```tsx
{/* Role statement */}
<div className="border-t border-charcoal-light mt-8 pt-8">
  <p className="font-inter text-xs text-gray-500 text-center leading-relaxed max-w-4xl mx-auto">
    myCHEF Dubai designs and manages private dining and event experiences and connects clients with independent, licensed chefs and catering professionals. Culinary preparation is performed by those licensed third parties, whom the client engages; myCHEF is not a food establishment.
  </p>
</div>
```

- [ ] **Step 4: Verify build**

```bash
npm run build
```

- [ ] **Step 5: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: update footer tagline and add role-statement line"
```

---

## Task 6: Reword Shared Sections

**Files:**
- Modify: `src/sections/HeroSection.tsx`, `ServicesSection.tsx`, `TrustSection.tsx`, `HowItWorksSection.tsx`, `TeamSection.tsx`, `CTASection.tsx`, `LocationsSection.tsx`, `LocationStrip.tsx`, `TrustBar.tsx`, `Navbar.tsx`

**Interfaces:**
- Consumes: phrase_map rules and exact swaps from handoff JSON
- Produces: coordinator-safe shared section copy

- [ ] **Step 1: Apply phrase_map and exact swaps to each shared section**

For each file in the list, apply the relevant rules from `mychef_reword_changes.json`:

- `HeroSection.tsx`: homepage hero copy from `mychef_elevated_reword.md` §1.
- `ServicesSection.tsx`: services grid copy from `mychef_elevated_reword.md` §1.
- `TrustSection.tsx`: trust-strip copy; `HACCP-aligned food safety protocols` → `Independent chefs who hold their own food-safety credentials`; `VERIFIED CHEFS` → `HANDPICKED CHEFS`.
- `HowItWorksSection.tsx`: 4-step copy from `mychef_elevated_reword.md` §4.
- `TeamSection.tsx`: `MEET OUR CHEFS` → `OUR CULINARY NETWORK`; apply phrase_map.
- `CTASection.tsx`: `Ready to book a private chef or catering in Dubai?` → `Ready to plan an unforgettable dining experience in Dubai?`; apply phrase_map.
- `LocationsSection.tsx` / `LocationStrip.tsx`: `WHERE WE CATER` → `WHERE WE SERVE`; `Private chef & catering across Dubai` → `Private chef & luxury dining across Dubai`.
- `TrustBar.tsx`: apply phrase_map.
- `Navbar.tsx`: apply phrase_map to any employment/cooking labels.

- [ ] **Step 2: Run scanner**

```bash
npx tsx scripts/reword-scanner.ts
```

Expected: hits decrease; remaining hits are mostly in page files, not shared components.

- [ ] **Step 3: Verify build**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add src/sections/ src/components/TrustBar.tsx src/components/Navbar.tsx
git commit -m "feat: reword shared sections for coordinator-safe positioning"
```

---

## Task 7: Reword Key Pages with Elevated Copy

**Files:**
- Modify: `src/pages/Home.tsx`, `About.tsx`, `HowItWorks.tsx`, `FAQ.tsx`, `OurChefs.tsx`, `Catering.tsx`, `Terms.tsx`
- Modify: `src/pages/chefs/ChefAhmed.tsx`, `ChefSofia.tsx`, `ChefMarco.tsx`, `ChefLayla.tsx`

**Interfaces:**
- Consumes: `mychef_elevated_reword.md` ✓ "after" copy; `phrase_map` for residual text
- Produces: fully reworded key pages with coordinator-safe copy

- [ ] **Step 1: Home.tsx**

Apply elevated copy from `mychef_elevated_reword.md` §1 to all sections rendered on the homepage. Update SEO title to `Private Chef & Luxury Dining Experiences Dubai`. Regenerate JSON-LD (see Task 10).

- [ ] **Step 2: About.tsx**

Apply elevated copy from `mychef_elevated_reword.md` §2 (story, founder line, values, team section rename).

- [ ] **Step 3: HowItWorks.tsx**

Apply elevated 4-step copy from `mychef_elevated_reword.md` §4.

- [ ] **Step 4: FAQ.tsx**

Apply reworded FAQ answers from `mychef_elevated_reword.md` §6. Add the new FAQ item: *"Do you cook, or do you bring a chef?"* with the coordinator-safe answer.

- [ ] **Step 5: OurChefs.tsx**

Apply `mychef_elevated_reword.md` §3: rename to "THE CHEFS WE CHOOSE", reframe as independent network, update CTA to `partners@mychef.ae`.

- [ ] **Step 6: Catering.tsx**

Apply elevated copy from `mychef_elevated_reword.md` §5. Keep H1/title keyword "Catering".

- [ ] **Step 7: Terms.tsx**

Redefine "the Services" as experience design, coordination, and chef introduction — not food provision. State culinary work is performed by independent licensed chefs/caterers the client engages; myCHEF is not a food establishment and does not employ chefs. **Flag file with a comment: `// PENDING LEGAL REVIEW — do not publish until lawyer approves`.**

- [ ] **Step 8: Chef bios**

For each of `ChefAhmed.tsx`, `ChefSofia.tsx`, `ChefMarco.tsx`, `ChefLayla.tsx`:
- Add "Independent partner chef" under the name.
- Apply phrase_map.
- Rewrite any "leads ... for myCHEF Dubai" → "is matched to ... myCHEF experiences".
- Keep tenure badges as the chef's own experience.

- [ ] **Step 9: Run scanner**

```bash
npx tsx scripts/reword-scanner.ts
```

- [ ] **Step 10: Verify build**

```bash
npm run build
```

- [ ] **Step 11: Commit**

```bash
git add src/pages/Home.tsx src/pages/About.tsx src/pages/HowItWorks.tsx src/pages/FAQ.tsx src/pages/OurChefs.tsx src/pages/Catering.tsx src/pages/Terms.tsx src/pages/chefs/
git commit -m "feat: reword key pages and chef bios with elevated copy"
```

---

## Task 8: Build and Run the Bulk Codemod

**Files:**
- Create: `scripts/apply-reword-rules.ts`
- Modify: ~120 page files in `src/pages/**/*.tsx`

**Interfaces:**
- Consumes: `docs/handoff/mychef_reword_changes.json`
- Produces: deterministic text replacements across bulk pages

- [ ] **Step 1: Write codemod**

Create `scripts/apply-reword-rules.ts`:

```typescript
import fs from 'fs'
import path from 'path'
import { globSync } from 'glob'

const HANDOFF_PATH = path.resolve(__dirname, '../docs/handoff/mychef_reword_changes.json')
const PAGES_DIR = path.resolve(__dirname, '../src/pages')
const COMPONENTS_DIR = path.resolve(__dirname, '../src')

const EXCLUDED_FILES = [
  'HealthcareCatering.tsx',
  'SchoolCatering.tsx',
  'NurseryCatering.tsx',
  'UniversityCatering.tsx',
  'GovernmentEventCatering.tsx',
  'Home.tsx',
  'About.tsx',
  'HowItWorks.tsx',
  'FAQ.tsx',
  'OurChefs.tsx',
  'Catering.tsx',
  'Terms.tsx',
  'ChefAhmed.tsx',
  'ChefSofia.tsx',
  'ChefMarco.tsx',
  'ChefLayla.tsx',
]

interface Replacement {
  find: string
  replace: string
}

interface PhraseMap {
  banned_regex: string
  replace: string
}

function loadHandoff() {
  return JSON.parse(fs.readFileSync(HANDOFF_PATH, 'utf-8'))
}

function applyExactReplacements(content: string, replacements: Replacement[]): string {
  for (const { find, replace } of replacements) {
    content = content.split(find).join(replace)
  }
  return content
}

function applyPhraseMap(content: string, phraseMap: PhraseMap[]): string {
  for (const { banned_regex, replace } of phraseMap) {
    // Strip (?i) prefix if present
    const rawRegex = banned_regex.startsWith('(?i)') ? banned_regex.slice(4) : banned_regex
    const regex = new RegExp(rawRegex, 'gi')
    content = content.replace(regex, replace)
  }
  return content
}

function main() {
  const handoff = loadHandoff()
  const files = globSync('**/*.tsx', { cwd: PAGES_DIR })
    .map((f) => path.join(PAGES_DIR, f))
    .filter((f) => !EXCLUDED_FILES.includes(path.basename(f)))

  console.log(`Applying reword rules to ${files.length} bulk page files...`)

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8')
    content = applyExactReplacements(content, handoff.global.find_replace_exact)
    content = applyPhraseMap(content, handoff.global.phrase_map)
    fs.writeFileSync(file, content, 'utf-8')
  }

  console.log('Bulk codemod complete.')
}

main()
```

- [ ] **Step 2: Run codemod**

```bash
npx tsx scripts/apply-reword-rules.ts
```

- [ ] **Step 3: Spot-check representative pages**

Open and review:
- `src/pages/WeddingCatering.tsx`
- `src/pages/BBQCatering.tsx`
- `src/pages/IndianCatering.tsx`
- `src/pages/VeganCatering.tsx`
- `src/pages/OfficeCatering.tsx`
- `src/pages/LocationDetail.tsx` or a location page
- `src/pages/blog/PrivateChefCostDubai.tsx`

Look for broken JSX, awkward replacements, or remaining banned phrases.

- [ ] **Step 4: Run scanner and fix residual hits**

```bash
npx tsx scripts/reword-scanner.ts
```

Fix any non-zero hits manually or by adjusting the codemod.

- [ ] **Step 5: Verify build**

```bash
npm run build
```

- [ ] **Step 6: Commit**

```bash
git add scripts/apply-reword-rules.ts src/pages/
git commit -m "feat: apply bulk reword codemod to templated pages"
```

---

## Task 9: Apply Template-Specific Rules

**Files:**
- Modify: occasion/cuisine/corporate pages, location pages, service pages, blog/guide pages, case studies/press/gallery pages

**Interfaces:**
- Consumes: `templates` section of handoff JSON
- Produces: category-specific exact replacements applied

- [ ] **Step 1: Extend codemod or run manual replacements**

Apply template-specific `find_replace` rules from `mychef_reword_changes.json → templates`:

- `occasion-catering`: kitchen/service/styling, pastry chef, full-service wedding catering, mobile kitchen, handle every detail.
- `chef pages`: already done in Task 7.
- `location pages`: `WHERE WE CATER` → `WHERE WE SERVE`; phrase_map residuals.
- `service pages`: apply service-page rules.
- `/case-studies + /press + /gallery`: narrative rewording of first-person cooking claims.
- `blog & guides`: sweep body, author bios, CTAs, image alt with phrase_map.

- [ ] **Step 2: Run scanner**

```bash
npx tsx scripts/reword-scanner.ts
```

- [ ] **Step 3: Verify build**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add src/pages/
git commit -m "feat: apply template-specific reword rules"
```

---

## Task 10: Regenerate JSON-LD Schema

**Files:**
- Modify: `src/utils/schema.ts`, `src/pages/Home.tsx`
- Modify: all pages with FAQ sections

**Interfaces:**
- Consumes: reworded page copy
- Produces: coordinator-safe JSON-LD matching visible copy

- [ ] **Step 1: Update schema.ts**

Change `localBusinessSchema()` `@type` from `FoodService` to `ProfessionalService` and update description:

```typescript
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    description: 'Premium private-dining and event design in Dubai. We design bespoke culinary experiences and connect clients with vetted, licensed independent chefs and catering partners.',
    // ... rest unchanged
  }
}
```

Also update `organizationSchema().description` similarly.

- [ ] **Step 2: Update Home.tsx combined schema**

Ensure homepage emits only one `ProfessionalService` node. Keep `Organization` if desired, but the handoff says ProfessionalService once site-wide. Recommended:

```tsx
const combinedSchema = [
  organizationSchema(),
  localBusinessSchema(), // now ProfessionalService
  websiteSchema(),
]
```

- [ ] **Step 3: Add FAQPage JSON-LD to FAQ-bearing pages**

For `FAQ.tsx` and any page with visible FAQs, import `faqPageSchema` from `@/utils/schema` and pass it to `<SEO schema={...} />`. The FAQ questions/answers must match visible copy word-for-word.

- [ ] **Step 4: Search and replace any remaining banned schema types**

```bash
grep -R "Caterer\|CateringService\|Restaurant\|FoodEstablishment" src/
```

Change any remaining `@type` to `ProfessionalService` or `Service`.

- [ ] **Step 5: Run scanner including JSON-LD strings**

The scanner already checks `src/**/*.tsx`, so JSON-LD strings are covered.

```bash
npx tsx scripts/reword-scanner.ts
```

- [ ] **Step 6: Verify build**

```bash
npm run build
```

- [ ] **Step 7: Commit**

```bash
git add src/utils/schema.ts src/pages/Home.tsx src/pages/FAQ.tsx
git commit -m "feat: regenerate JSON-LD as ProfessionalService and FAQPage"
```

---

## Task 11: Final Scanner Pass and Build Verification

**Files:**
- Modify: any remaining files with scanner hits

**Interfaces:**
- Consumes: scanner output
- Produces: zero banned-pattern hits across all source files

- [ ] **Step 1: Run final scanner**

```bash
npx tsx scripts/reword-scanner.ts
```

Expected: zero hits. If not, fix remaining files and re-run.

- [ ] **Step 2: Run positive assertions manually**

```bash
# Every catering page keeps "Catering" in title
grep -R "title=\".*Catering.*\"" src/pages/*Catering.tsx | wc -l
# Should be ~100+

# Every page contains role statement
grep -R "myCHEF Dubai designs and manages private dining" src/components/Footer.tsx

# Homepage has ProfessionalService
grep -R "ProfessionalService" src/pages/Home.tsx
```

- [ ] **Step 3: Final build**

```bash
npm run build
```

Expected: build succeeds with no TypeScript errors.

- [ ] **Step 4: Commit any final fixes**

```bash
git add -A
git commit -m "fix: final scanner pass and residual reword fixes"
```

---

## Task 12: Deploy Preview and Hand Off for Legal Review

**Files:**
- Modify: none (deploy only)

**Interfaces:**
- Produces: Vercel preview URL

- [ ] **Step 1: Push branch**

```bash
git push -u origin feat/reword-legal-positioning
```

- [ ] **Step 2: Deploy preview**

```bash
npx vercel --cwd "/Users/openclaw/Movies/mychef dubai/app"
```

Capture the preview URL.

- [ ] **Step 3: Hand off to human**

Report:
- Preview URL
- Scanner result: zero banned patterns
- Positive assertions status
- `/terms` flagged pending legal review
- Licence line omitted pending legal details
- 5 regulated pages quarantined

Do **not** merge to production or run `npx vercel --prod`.

---

## Self-Review Checklist

- [ ] Spec coverage: every section of the design spec maps to one or more tasks above.
- [ ] Placeholder scan: no "TBD", "TODO", or "implement later" in task steps.
- [ ] Type consistency: `mychef_reword_changes.json` schema used consistently across scanner and codemod.
- [ ] SEO safety: URLs, titles, H1s, canonicals, prices preserved throughout.
