# WhatsApp-First Communication Design

**Date:** 2026-07-19
**Scope:** Replace all client-facing forms with lead-magnet-style WhatsApp CTAs.

---

## Goal

Make WhatsApp the primary communication channel on mychef.ae. Every place where a visitor can currently fill something out becomes a WhatsApp action instead.

## Pages to change

### 1. `/inquiry` (Request a Quote)
- Remove the multi-step form and all form state/validation.
- Keep the page title, meta, canonical, breadcrumb, and TrustBar.
- Hero becomes: "Get Your Bespoke Quote on WhatsApp" with 2–3 bullets:
  - Custom menu designed around your event
  - Indicative AED pricing guidance
  - Reply within 2 hours
- Primary CTA: gold "Request My Quote on WhatsApp" button.
- Pre-filled WhatsApp message: `"Hi myCHEF Dubai, I'd like to request a bespoke quote (via mychef.ae/inquiry)"`.
- Small fallback line: "Prefer email? hello@mychef.ae".

### 2. `/contact` (Contact)
- Remove the contact form.
- Keep the page title, meta, canonical, breadcrumb.
- Hero becomes: "Contact Us on WhatsApp".
- Prominent WhatsApp card/button as the only CTA.
- Pre-filled WhatsApp message: `"Hi myCHEF Dubai, I'd like to get in touch (via mychef.ae/contact)"`.
- Keep email/phone as small secondary text (not clickable CTAs).

### 3. LeadMagnetModal
- Remove the phone input and submit handler.
- Keep the modal trigger and dismissal logic.
- Replace body with: "Get the Private Dining Guide sent to you on WhatsApp."
- CTA: "Send Me the Guide on WhatsApp".
- Pre-filled WhatsApp message: `"Hi myCHEF Dubai, please send me the private dining guide (via mychef.ae)"`.

### 4. `/become-a-mychef` (Chef Application)
- Remove the chef application form.
- Keep the page title, meta, canonical, breadcrumb.
- Hero becomes: "Apply to Cook with Us on WhatsApp" with bullets:
  - Flexible event opportunities
  - Premium private-client network
  - Fair, transparent rates
- CTA: "Apply on WhatsApp".
- Pre-filled WhatsApp message: `"Hi myCHEF Dubai, I'm interested in joining the chef network (via mychef.ae/become-a-mychef)"`.

## What stays unchanged

- URLs `/inquiry`, `/contact`, `/become-a-mychef` remain live — no redirects.
- SEO metadata (title, description, canonical, OG image) stays in place.
- JSON-LD schema stays (Service / FAQPage / BreadcrumbList).
- `/thank-you` and `/api/submit-lead.ts` remain in the repo but are no longer linked from the changed pages.
- Sitewide "Request a Proposal" buttons keep linking to `/inquiry`, which now converts via WhatsApp.
- Footer WhatsApp link and contact details stay.

## WhatsApp number

Use the existing constant: `971551744849` for `wa.me` links.

## Verification

- `npm run build` passes.
- `npx tsx scripts/reword-scanner.ts` passes.
- No banned legal phrases introduced.
- Preview deployment shows WhatsApp CTAs on all four surfaces.
