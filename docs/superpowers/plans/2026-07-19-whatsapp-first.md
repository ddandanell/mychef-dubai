# WhatsApp-First Communication Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace all client-facing forms on mychef.ae with lead-magnet-style WhatsApp CTAs so WhatsApp becomes the primary communication channel.

**Architecture:** Keep existing page URLs, SEO metadata, and schema intact. Strip form state, validation, and API submission from each page. Replace with a hero/section containing value bullets and a WhatsApp button that opens `https://wa.me/971551744849` with a page-specific pre-filled message.

**Tech Stack:** Vite 7.3 + React 19 + TypeScript + Tailwind CSS + GSAP + react-router

## Global Constraints

- Keep every existing URL live (`/inquiry`, `/contact`, `/become-a-mychef`).
- Preserve unique title, meta description, canonical, ogImage, and JSON-LD schema on each page.
- Do not change design system colors, fonts, or button classes.
- Use existing `WHATSAPP_NUMBER = '971551744849'` constant pattern.
- WhatsApp pre-filled messages must include page attribution (`via mychef.ae/<path>`).
- `npm run build` and `npx tsx scripts/reword-scanner.ts` must pass after each task.
- Do not change `/thank-you`, `/api/submit-lead.ts`, or sitewide "Request a Proposal" links (they remain but are no longer reached from the changed pages).

---

## File Structure

- `src/pages/Inquiry.tsx` — replace multi-step quote form with WhatsApp CTA section.
- `src/pages/Contact.tsx` — replace contact form with WhatsApp CTA section.
- `src/sections/LeadMagnetModal.tsx` — replace phone-input form with WhatsApp button.
- `src/pages/BecomeAMyChef.tsx` — replace chef application form with WhatsApp CTA section.

---

### Task 1: Convert `/inquiry` to WhatsApp-first

**Files:**
- Modify: `src/pages/Inquiry.tsx`

**Interfaces:**
- Consumes: existing `WHATSAPP_NUMBER`, `WHATSAPP_LINK`, `SEO`, `TrustBar`, `breadcrumbSchema`.
- Produces: page renders a WhatsApp CTA instead of a form; no form state or API calls remain.

- [ ] **Step 1: Remove form state and helpers**
  Delete `useState` for `formData`, `errors`, `currentStep`, `isSubmitting`, `isSubmitted` and the related handlers (`handleChange`, `validateStep`, `handleNext`, `handleBack`, `handleSubmit`).

- [ ] **Step 2: Remove form UI markup**
  Replace the multi-step form JSX with a centered section containing:
  - H1: "Get Your Bespoke Quote on WhatsApp"
  - Subhead: "Tell us what you're planning and we'll reply with menu ideas and indicative pricing within 2 hours."
  - 3 bullets: "Custom menu designed around your event", "Transparent AED pricing guidance", "Same-day WhatsApp response"
  - Primary CTA `<a href={WHATSAPP_LINK} ...>Request My Quote on WhatsApp</a>`
  - Small fallback: "Prefer email? <a href='mailto:hello@mychef.ae'>hello@mychef.ae</a>"

- [ ] **Step 3: Update WhatsApp message**
  Set `WHATSAPP_MESSAGE` to:
  ```ts
  const WHATSAPP_MESSAGE = encodeURIComponent("Hi myCHEF Dubai, I'd like to request a bespoke quote for an upcoming event (via mychef.ae/inquiry)")
  ```

- [ ] **Step 4: Verify build and scanner**
  Run:
  ```bash
  npm run build
  npx tsx scripts/reword-scanner.ts
  ```
  Expected: build succeeds, scanner passes with zero banned patterns.

- [ ] **Step 5: Commit**
  ```bash
  git add src/pages/Inquiry.tsx
  git commit -m "feat(inquiry): replace quote form with WhatsApp CTA"
  ```

---

### Task 2: Convert `/contact` to WhatsApp-first

**Files:**
- Modify: `src/pages/Contact.tsx`

**Interfaces:**
- Consumes: existing `WHATSAPP_NUMBER`, page SEO/breadcrumb.
- Produces: contact page shows WhatsApp as primary CTA, no form remains.

- [ ] **Step 1: Remove form state and handlers**
  Delete `formState`, `formData`, `errors`, `handleChange`, `validate`, `handleSubmit`, and the form JSX.

- [ ] **Step 2: Replace form with WhatsApp section**
  Below the existing contact cards, add a prominent section:
  - H2: "Chat with Us on WhatsApp"
  - Text: "For the fastest reply, send us a message on WhatsApp. We typically respond within 2 hours."
  - CTA button opening WhatsApp with message attribution `via mychef.ae/contact`.
  - Keep the existing email/phone cards as small secondary options.

- [ ] **Step 3: Update WhatsApp message**
  Set `WHATSAPP_MESSAGE` to:
  ```ts
  const WHATSAPP_MESSAGE = encodeURIComponent("Hi myCHEF Dubai, I'd like to get in touch (via mychef.ae/contact)")
  ```

- [ ] **Step 4: Verify build and scanner**
  Run:
  ```bash
  npm run build
  npx tsx scripts/reword-scanner.ts
  ```

- [ ] **Step 5: Commit**
  ```bash
  git add src/pages/Contact.tsx
  git commit -m "feat(contact): replace contact form with WhatsApp CTA"
  ```

---

### Task 3: Convert LeadMagnetModal to WhatsApp CTA

**Files:**
- Modify: `src/sections/LeadMagnetModal.tsx`

**Interfaces:**
- Consumes: existing modal visibility/dismiss logic.
- Produces: modal body shows a WhatsApp button instead of a phone input.

- [ ] **Step 1: Remove phone form state**
  Delete `phone`, `isSubmitting`, `isSubmitted`, and `handleSubmit`.

- [ ] **Step 2: Replace modal body**
  Keep the header and close button. Replace the form with:
  - Text: "Get the Private Dining Guide sent straight to your WhatsApp."
  - CTA: `<a href={WHATSAPP_LINK} ...>Send Me the Guide on WhatsApp</a>`
  - Keep dismissal on backdrop click.

- [ ] **Step 3: Update WhatsApp message**
  Set message to:
  ```ts
  const WHATSAPP_MESSAGE = encodeURIComponent("Hi myCHEF Dubai, please send me the private dining guide (via mychef.ae)")
  ```

- [ ] **Step 4: Verify build and scanner**
  Run:
  ```bash
  npm run build
  npx tsx scripts/reword-scanner.ts
  ```

- [ ] **Step 5: Commit**
  ```bash
  git add src/sections/LeadMagnetModal.tsx
  git commit -m "feat(lead-magnet): replace phone input with WhatsApp CTA"
  ```

---

### Task 4: Convert `/become-a-mychef` to WhatsApp-first

**Files:**
- Modify: `src/pages/BecomeAMyChef.tsx`

**Interfaces:**
- Consumes: existing page SEO, schema, WhatsApp constant.
- Produces: chef application page shows WhatsApp CTA, no form remains.

- [ ] **Step 1: Remove application form state and handlers**
  Delete form state, file upload state, validation, and submit handler related to the chef application form.

- [ ] **Step 2: Replace form with WhatsApp section**
  Replace the form area with:
  - H2: "Apply to Cook with Us on WhatsApp"
  - 3 bullets: "Flexible private events across Dubai", "Premium client network", "Fair, transparent rates"
  - CTA button opening WhatsApp with message attribution `via mychef.ae/become-a-mychef`.

- [ ] **Step 3: Update WhatsApp message**
  Set message to:
  ```ts
  const WHATSAPP_MESSAGE = encodeURIComponent("Hi myCHEF Dubai, I'm interested in joining the chef network (via mychef.ae/become-a-mychef)")
  ```

- [ ] **Step 4: Verify build and scanner**
  Run:
  ```bash
  npm run build
  npx tsx scripts/reword-scanner.ts
  ```

- [ ] **Step 5: Commit**
  ```bash
  git add src/pages/BecomeAMyChef.tsx
  git commit -m "feat(become-a-mychef): replace chef application form with WhatsApp CTA"
  ```

---

### Task 5: Final verification and preview deploy

**Files:**
- All modified files above.

- [ ] **Step 1: Run full verification**
  ```bash
  npm run build
  npx tsx scripts/reword-scanner.ts
  ```

- [ ] **Step 2: Deploy Vercel preview**
  ```bash
  npx vercel --yes
  ```

- [ ] **Step 3: Test the four surfaces**
  Open the preview URL and verify:
  - `/inquiry` shows WhatsApp CTA, no form.
  - `/contact` shows WhatsApp CTA, no form.
  - Lead magnet modal (wait 30s or scroll past 70%) shows WhatsApp CTA, no phone input.
  - `/become-a-mychef` shows WhatsApp CTA, no form.

- [ ] **Step 4: Commit any final tweaks**
  ```bash
  git commit -am "feat(whatsapp): make WhatsApp primary across all form surfaces"
  ```

## Spec Coverage

- `/inquiry` form → WhatsApp: Task 1
- `/contact` form → WhatsApp: Task 2
- LeadMagnetModal phone input → WhatsApp: Task 3
- `/become-a-mychef` form → WhatsApp: Task 4
- URLs, metadata, schema preserved: global constraints + each task
- Build/scanner verification: each task + Task 5

## Placeholder Scan

No TBD/TODO/fill-in-details placeholders. All WhatsApp messages, file paths, and commands are explicit.
