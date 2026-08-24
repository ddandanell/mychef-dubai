# myCHEF Design Baseline (Phase 1 audit — 2026-08-25)

Reference for any AI design agent working on this project. This documents what EXISTS.
The brand is not shadcn defaults — shadcn is the implementation layer, this is the identity.

## Stack
- Vite 7 · React 19 · react-router 7 (library mode, data-driven routes in `src/routes.tsx`)
- Tailwind **v3.4** (`tailwind.config.js`) + tailwindcss-animate + tw-animate-css
- shadcn/ui: style `new-york`, base **radix** (do NOT migrate to Base UI), css-variables on,
  53 components installed in `src/components/ui/`
- npm, single package (not a monorepo)

## Brand identity — preserve
- **Fonts** (Google Fonts, loaded in index.html):
  - Display serif: **Cormorant Garamond** — Tailwind key `font-playfair` (legacy key, intentional)
  - Body/UI: **Manrope** — Tailwind key `font-inter` (legacy key, intentional)
- **Palette**: gold `#C8A45C` (light `#D9BC7A`, dark `#A68B4B`, text-safe `gold.ink #7A5F1C` — WCAG AA
  on light), charcoal `#1A1A1A`/`#2A2A2A`, cream `#FAF7F2`, custom gray-100…600 scale
- shadcn tokens are dark-based: background black, `--primary` = gold (42 48% 57%), `--radius` 0.25rem
  (sharp corners are part of the identity — near-square, editorial)
- **Type scale**: custom named sizes (`display`, `h1`–`h4`, `body`, `body-lg/sm`, `caption`, `nav`,
  `button`) + fluid variants (`fluid-display`, `fluid-h1`–`h3`). Do not invent arbitrary sizes.
- **Spacing tokens**: xs 4 · sm 8 · md 16 · lg 24 · xl 32 · 2xl 48 · 3xl 64 · 4xl 96 · 5xl 128 (px)
- **Shadows**: `card`, `card-hover`, `elevated`, `subtle` (deep, soft, dark)
- **Motion**: GSAP + @gsap/react, Lenis smooth scroll. Compositor-friendly properties only.
- **Icons**: lucide-react (primary; keep consistent). Larger sets via Iconify only when lucide
  genuinely lacks a glyph — do not mix styles within a surface.

## Layout language
- Editorial: `Section`/`Container`/`Eyebrow`/`DisplayHeading`/`BodyCopy`/`EditorialCard`/
  `EditorialImage` from `src/components/system/index.tsx` — the page-building layer.
  Prefer these over raw shadcn primitives for marketing pages.
- Section tones: `white`, `ivory`, `charcoal`, `dark` — alternating rhythm down a page.
- Photography-led heroes (`PageHero`), cinematic overlays, left-aligned display serif titles.
- Cards are used sparingly and bordered (`border-gray-200`), never shadow-heavy grids.

## Copy layer (do not bypass)
- All Private Chef cluster copy: `src/content/privateChefCluster.ts` + `privateChefPage.ts`
- Writing rules: `skills/mychef-writing-system/` (voice, headlines, SEO locks)
- Keyword ownership: `KEYWORD_LOCKS` in `privateChefCluster.ts` — redesigns must not change
  H1s/titles without respecting the locks.

## Extension points
- `components.json` → `registries` — vetted set, each verified to parse under shadcn v4 and
  searchable via the MCP (`search_items_in_registries`):
  - `@shadcn` (default) — primitives and ui
  - `@magicui` — marketing components and motion (marquee, animated text, shimmer, bento)
  - `@aceternity` — landing-page `block`s (hero, feature, team, timeline sections) and effects
  Use them as raw material only: strip default colors/radius/shadows and re-express in this
  system's tokens. Aceternity effects are opt-in — motion must clarify, never decorate (see
  Motion above). Rejected after testing: Launch UI (catalog fails registry schema → search
  breaks), Tailark (Base UI, conflicts with Radix), Origin UI (registry URL serves HTML).
  Add further registries deliberately, one at a time, and verify with an MCP search first.
- shadcn MCP: `.mcp.json` (project) — server `shadcn` via `npx shadcn@latest mcp`.
- shadcn skill: `.agents/skills/shadcn/` (symlinked into `.claude/skills/`).

## Patterns added 2026-08-25 (reuse, do not reinvent)
- **Quiet hero** — `<PageHero variant="quiet" eyebrow="…" …>`: eyebrow rendered *inside* the H1 (keyword
  stays in the heading), serif H1 `clamp(48px,5.2vw,76px)` / mobile `clamp(40px,11vw,52px)`, one
  description ≤680px, copy column ≤55%, two 50px buttons (`.hero-btn--quiet-primary/-secondary`).
  Live on /private-chef-dubai and /catering-dubai. Default variant unchanged for other heroes.
- **Section header** — `Eyebrow` (gold rule + 12px caption, accepts `id` for anchors) → `DisplayHeading`
  (fluid 28–42px) → lede. `cn()` now registers the brand type scale with tailwind-merge; never add
  custom `text-*` sizes without adding them to `BRAND_FONT_SIZES` in `src/lib/utils.ts`.
- **Navigation** — desktop: 13px/0.12em antialiased links with sliding gold hairline, Chat pill with the
  dot-fill hover mechanic (Magic UI adapted, no dependency), no proposal button in the bar. Mobile:
  full-width ≥56px rows, cluster as Accordion with `CLUSTER_ICONS` + descriptions, pinned CTAs.
- **De-carding** — sequences → inline chains (`01 → 02 →`), categories → hairline panels (`gap-px
  bg-gray-200`), recognition lists → numbered editorial rows, timelines → gold rail. Boxes only for
  real interactive options (pricing calculator).
- **Images** — sources should be ≥2× the rendered CSS width for retina; heroes render ~1512 CSS px at
  1440. Owner decision: per-asset only, no batch processing. Generation: Grok Build `image_gen`
  (1280×720 max) + FSRCNN ×2 (`scripts` pattern in scratch) for a 2560 hero.
