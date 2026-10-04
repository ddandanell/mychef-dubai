# myCHEF private dinner calculator v2

Live route: `/private-chef-dubai#dinner-calculator`. All existing URLs remain unchanged.

The 4 October v2 brief replaces the earlier per-dish builder with a menu-package model. The page now focuses on a dinner estimate: a short hero and introduction, then gathering, menu, drinks/extras and review. Both Delivered and Chef in your kitchen start at six guests. The buffet option is removed. Shared promotions are updated to avoid advertising the removed service or the old ten-guest delivery minimum.

## Price source and formula

`src/content/privateDiningSettings.json` is the editable source for current package rates, staff, areas, drinks and hire starting prices. `src/content/privateDiningMenu.json` remains the 200-dish catalogue. Historical per-dish tariffs and senior-chef fields are retained as metadata only; they do not affect a v2 estimate.

All numbers are AED before VAT. V2 uses the supplied proposed package rate table for estimates, plus the specifically approved chef AED 1,200, kitchen assistant AED 400, waiter AED 450 and fine-dining uplift 50%. A bankable supplier cost/margin analysis needs the supplier's actual costs; the public comparator does not prove margin. Take a Chef's Dubai page, checked 4 October, publishes an average six-guest price of AED 468 per guest with ingredients, cooking and clean-up. It supports checking market position, not using its price as our cost: https://www.takeachef.com/en-ae/private-chef/dubai

1. Food: guests × style/cuisine package rate, plus AED 50 per guest for each extra family-style dish (up to four).
2. Kitchen team at home: one chef plus assistants; 6–8 = 0 assistants, 9–18 = 1, 19–28 = 2, 29–38 = 3, then one more per ten guests. Kitchen overtime is itemised if requested. Delivered has no on-site staff.
3. Fine dining: 50% of food + kitchen team, once, including any requested kitchen overtime. Never applies to optional service staff, drinks, transport or hire.
4. Optional service staff and drinks: package rules prevent duplicate billing for overlapping drinks. Alcohol is never priced as a myCHEF product; the calculator can price service of the client's own alcohol. Retail purchasing/collection is not offered until the business confirms its licence/operating arrangement.
5. Delivered packaging: AED 20 per guest, AED 200 minimum.
6. Transport: existing Dubai bands AED 40/65/95/130; Abu Dhabi AED 400 delivered / 500 at home, Sharjah AED 300 delivered / 350 at home. These regional rates are estimates from the v2 brief. At-home transport uses one car per three on-site staff, including optional waiters and bartenders.
7. Furniture, styling, cake, bar, glassware and fine-dining equipment use explicitly marked starting prices. Furniture delivery/setup/collection adds AED 250 once. Package size limitations are visible. Starting hire prices change the total label to “from”.
8. VAT 5% of the entire subtotal, once and last, rounded to fils. Total and per-guest total use two decimal places where needed.

Worked examples verified: six-guest Indian family style in Downtown AED 2,562; 12-guest Japanese fine dining on the Palm with hired equipment, one waiter and mocktail package from AED 13,109.25; 20-guest Italian delivery to Abu Dhabi with refreshments AED 6,405.

## Menus and validation

Three-course = starter, main with accompaniments, dessert. Fine dining = amuse-bouche, starter, middle course, main and dessert; the amuse-bouche and middle are smaller portions. Family style = starter, two mains with suitable accompaniments and dessert. Extra family dishes add one starter, main, side and dessert in that order.

Cuisine, style and mood select a menu from the existing catalogue, with editable dropdowns. Mood changes the suggestion, never the price. Vegetarian/vegan groups have suitable complete replacement menus at the same package price. Each guest belongs to one group. Specialist/market-price dishes are excluded from the fixed-price selection; no known quote-required dish can slip into a priced package. Allergy text is reviewed by the team and is never presented as an automatic allergy-safe guarantee.

Automatic suggestions favour lighter plant-based opening and middle courses for fine dining, and avoid repeating the same main protein across savoury courses when alternatives are available. Mood remains a preference within those rules. Customers can still swap dishes freely within the cuisine, course and dietary requirements.

Five calendar days' notice uses Asia/Dubai, including month/year and leap-year boundaries. Date is required before advancing. A short kitchen suitability question protects the home-cooking estimate; a requested temporary kitchen routes to a complete personal offer without displaying a partial total. Automatic estimates cover up to 50 at-home or 100 delivered guests; larger groups can send a brief for tailored staffing. Those limits are implementation decisions to avoid presenting the one-chef model as a guaranteed large-event plan.

No payment is taken. At-home dinners use 50% on confirmation and the balance the day before; delivered catering uses the company's current full-payment-on-confirmation policy. Card fees and cancellation terms are confirmed in the written offer rather than invented from the brief's unconfirmed proposals. No new reply-time guarantee is introduced.

## Request delivery

The form POSTs to `/api/dining-request`; it does not require the visitor to press Send in WhatsApp. The server validates contacts/date/menu/service, recomputes all prices from the same catalogue/settings, and ignores any submitted price. Team delivery must succeed before the UI reports the request received. Customer copies are separate emails, avoiding exposure of other recipients. Receipt failures cannot turn a received team request into an instruction to submit it again.

Server deployment uses the existing SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM and LEAD_EMAIL_TO configuration. GET `/api/dining-request` returns capability booleans only, no credentials. Without SMTP the form reports unavailable and exposes a WhatsApp backup; it never claims sending succeeded.

Optional automatic WhatsApp receipts use a pre-approved utility template and server-only environment variables: DINING_WHATSAPP_TOKEN, DINING_WHATSAPP_PHONE_ID, DINING_WHATSAPP_TEMPLATE, DINING_WHATSAPP_API_VERSION, and optional DINING_WHATSAPP_LANGUAGE. The template body has five text parameters: name, event date, total, reference, short event description. No browser token is used. Provider acceptance is labelled “queued”, not “delivered”. The complete email copy is always attempted, covering WhatsApp errors at submission time and later asynchronous provider failures. Actual delivery tracking requires the provider's status webhook. Official integration rules: https://docs.aws.amazon.com/social-messaging/latest/userguide/whatsapp-send-message.html and https://docs.aws.amazon.com/social-messaging/latest/userguide/managing-templates.html

The self-contained Vercel function `api/dining-request.ts` is generated from `src/server/diningRequest.ts` and shared calculator logic. Run `node scripts/build-dining-api.mjs` after editing settings, menu or logic. The deployment rejects a stale generated file with `--check`. No relative serverless import can silently fail.

## Sharing, appearance and deferred assets

Pre-filled links contain only date, guests, area, service, cuisine, style, mood and extra-dish count. They never include names, phone/email, exact addresses, allergy text or notes. The visible copy-link action gives the team a simple way to generate one. Ready-to-send team message: “Get your price in five minutes here: https://www.mychef.ae/private-chef-dubai#dinner-calculator”.

The page uses the supplied warm ivory, sand, ink and gold palette; real native radios/checkboxes; visible labels/help; a sticky mobile step indicator and total with expandable details; reduced-motion support; and debounced price announcements. The old unrelated sections and section-jump navigation are removed from this calculator route. No unverified photographs, fabricated reviews, client names from lead archives or testimonial placeholders are published. A typographic share graphic uses the real calculator state once reviewed; supplied real brand photography can be added later without pretending generated imagery is authentic.

## Checks

`npm run test:private-dining`: all worked examples, 75 cuisine/style/mood combinations, dietary parity, minimums and limits, staffing thresholds, multi-car transport, packaging, extras, overtime, rounding, dates and safe pre-filled links.

`node --import tsx scripts/test-dining-request.ts`: schema validation, forged/invalid choices, SMTP failure, receipt failure, idempotent repeated requests and truthful fallback states, using mocked senders only. No real email or WhatsApp is sent by this test.
