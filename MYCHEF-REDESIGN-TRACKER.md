# myCHEF Redesign — Homework Tracker

_Everything requested across the session, with status. Working dir: `app/` · Local dev: http://localhost:3000 · Prod: Vercel project `mychef-dubai-vite`._

## ✅ Done & live in production

### Global design system
- [x] Typography swapped **site-wide** to Cormorant Garamond (display) + Manrope (body), remapped at the source (`tailwind.config` + `index.css` vars).
- [x] Fluid hero type scale + `.hero-title` / `.hero-copy` with subtle readability text-shadow.
- [x] Gold readability: added `gold-ink` token (readable on light bg); bright `gold` on dark. Swept the pilot page.
- [x] One spacing system: `.section-padding` fluid clamp.
- [x] One hero scrim (`HERO_SCRIM`) applied to every hero (PageHero + custom Home/Contact) — consistent, readable.
- [x] Breadcrumb pinned to a readable corner pill on all heroes.
- [x] `.editorial-image` soft depth shadow.

### Heroes
- [x] Home hero: new **HERO2 video** — plays 2×, then fades to the poster image. Lazy, muted, non-blocking.
- [x] Catering hero: **video loop** background, text moved to the left, full-screen.
- [x] Private-chef hero: **video loop**, full-screen cinematic, darker overlay.
- [x] Luxury-dining, Blog, About, Contact heroes: new images, full-screen, voice copy, LCP preload.
- [x] Video autoplay bug fixed (was `prefers-reduced-motion` gate + an opacity-class conflict).

### Private-chef page (pilot)
- [x] Hero image → then video.
- [x] "myCHEF difference", "See the chefs", "How it works", who-for, household-plan images replaced.
- [x] Household Manager section redesigned (3-person team, name band, roles, trust bar).
- [x] Food Profile record section built (+ compact + "chef changes, profile stays" ghost cue).
- [x] Feedback → **Learning System** section (replaced star ratings), new image.
- [x] Process Journey (5-step vertical, gold rail, loop back to step 3).
- [x] "Friday wants Japanese" rotation section + new 3-person image.
- [x] Household Plan full-bleed consultation image + conversation-first copy.
- [x] Removed catering distraction, the 4 "after a year" images, the small process strip.
- [x] Non-sticky rates bar.
- [x] Layla Hassan card uses her real portrait.
- [x] 10 generic sections migrated to shared primitives (`Section, Container, Eyebrow, DisplayHeading, BodyCopy, EditorialImage, EditorialCard, CTAGroup`).

### Infra
- [x] Pulled latest from git before starting.
- [x] Deployed to **production** (Vercel).

## 🔄 In progress / next (follow-ups I named)
- [x] **Desktop QA at 1440 — COMPLETE** across private-chef (hero → machine → what-myCHEF-is → who-this-is → chefs → pricing). Cohesive, premium, spacing intentional. No fixes needed.
- [x] **Design system FROZEN** — typography, spacing, gold, hero, image treatment, primitives are locked. Stop changing token values page by page.
- [ ] **Per-page primitive rollout** (invisible refactor — pages already look unified via global tokens): catering → luxury-dining → about → contact → blog.
- [ ] **Legacy cleanup** after rollout.
- [ ] **Motion/polish pass (LAST):** tasteful scroll reveals, nav-on-scroll, page transitions, hover states — Tailwind + GSAP (already installed) + View Transitions API. No heavy plugins.
- [ ] **Per-page primitive rollout**: catering → luxury-dining → about → contact → blog (invisible refactor; they already share global tokens).
- [ ] **Legacy cleanup**: remove dead utilities/duplicates after rollout.
- [ ] **Freeze the design system** once desktop QA passes.
- [ ] **CRO / content pass** (final phase): section order, repetition, CTA clarity, pricing simplicity, mobile friction.

## ⏸ Pending YOUR input (I won't guess)
- [ ] **Traction/score statement** (42 households · 4.8 · 1,000+): are the numbers **verified**, and what are the **3 sub-score labels**? (Conflicts with the on-page "we don't invent numbers" section until confirmed.)
- [ ] **Catering event image** (`caterigng".png` on Desktop): is that the large-event photo you want on the catering hero instead of the video/team image?
- [ ] **GitHub token → Vercel env**: run yourself (keeps the secret private):
      `vercel env add GITHUB_TOKEN production preview development`
- [ ] **Deployment Protection** is ON — turn off in Vercel → Settings if you want the `*.vercel.app` URL public.

## ⚡ Performance / startup
- [x] **Prerendering confirmed active** — `vercel.json` build runs `tsx scripts/prerender.ts` (175 routes → static HTML). Verified: `mychef.ae/private-chef-dubai` returns HTTP 200 with real prerendered content (title + headline in raw HTML) → **instant first paint in production.**
- [x] **Fonts** now load non-render-blocking (`media=print`+`onload`), weights trimmed.
- [x] **Hero videos** now mount only after the `window.load` event → never slow initial start; still autoplay.
- [x] **Mobile hero headline** floor reduced to ~40px (was 52px) — comfortable on 375–430px.
- ℹ️ "Slow startup" was **localhost dev** (unprerendered SPA); the live site is prerendered + fast.
- Live domain: **https://mychef.ae** (production alias public; only `*.vercel.app` deploy URLs are behind Deployment Protection).

## 🖼 Blocked
- [ ] **AI image generation** (BFL / Vercel AI Gateway / fal.ai) all out of credits → new imagery needs a top-up or you supply files. Household-example block images still use placeholders.
