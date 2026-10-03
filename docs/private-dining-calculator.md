# Food and chef calculator

Live route: `/private-chef-dubai#dinner-calculator`.

## Current model (4 October 2026)

The owner requested one service-first flow, one cuisine per booking and automatic chef selection. Service minimums are home 6, delivery 10, buffet 20. Bookings require at least five calendar days' notice in Asia/Dubai time, name and WhatsApp number. Home cooking also requires explicit kitchen confirmation. WhatsApp opens a prefilled request; no message is sent automatically and no booking is confirmed.

The UI has four steps: gathering, menu, drinks/extras, review/send. Homepage, menus, catering, private party, birthday, villa, luxury dining and catering calculator links point to the same calculator. Navigation keeps the existing contained calculator card.

## Sources and editable data

- `src/content/privateDiningSettings.json`: service minimums, VAT, chef fees, drink prices, 35 area mappings, transport, equipment, themes and cake flavours.
- `src/content/privateDiningMenu.json`: 200 dishes; five cuisines, ten dishes per category in each cuisine. Stable string IDs must not be renumbered.
- `src/content/privateDiningDishes.json`: preserved original guide import. `sourceId` links reused/adapted recipes to this source. Do not overwrite the historical import with workbook edits.
- `src/lib/privateDining.ts`: calculations, menu slots, dietary group resolution, staffing and WhatsApp validation.

The owner's Complete System and Build Guide supplies dish tiers E/S/C = AED 35/55/90, ingredient uplifts L/M/H = AED 0/15/35, chef fees AED 1,200/1,800, assistants AED 400 and transport AED 40/65/95/130. These are sale estimate tariffs, not actual ingredient costs. The prior six-to-twenty and three-to-five limits are superseded by the current instruction.

## Pricing

Each guest is assigned to exactly one group: main menu, vegetarian, vegan or other dietary needs. Food is the sum of each group's guests multiplied by its chosen dish prices. Alternatives replace that group's base menu, so there is no double charge. Compatible vegan/vegetarian base dishes carry over automatically. Other needs require explicit dish selection and written dietary notes, with chef review before confirmation.

Delivery includes preparation in its dish prices and has no on-site chef fee or assistants. Home/buffet selects the chef from the highest recipe level actually served: levels 1–2 AED 1,200; 3–4 AED 1,800. There is no extra chef multiplier. Specialist recipes with unverified pricing retain a complete personal-quote state, rather than publishing a partial total. Buffet uses the same on-site chef fee model; this is an implementation assumption for owner review, not the separate website's generic per-person catering floor.

Home and buffet: 0 assistants for up to 8 guests, 1 for 9–19, 2 for 20–29, 3 for 30–39, and so on. Buffet caps at 5 assistants. **The owner's “buffet stops at five people” is interpreted as five assistants, not five guests.** Final operational staffing/availability is confirmed by the coordinator. The cap is not a capacity guarantee.

Drinks apply to every guest once per selected option. Proposed before-VAT package prices: water 8, soft drink 12, fresh juice 20, mocktail 28, tea 12, coffee 15 AED per guest. These are owner-requested price suggestions, not verified supplier quotations. Delivery drinks are ready to serve; hot drinks use insulated containers. Glassware, bar staff and unlimited refills are not included.

The ticket shows food, chef, assistants, food-and-chef subtotal, drinks, transport and VAT. VAT is applied once and rounded at ticket level. Equipment, themes and cake flavours are separately quoted and never contribute zero-valued promises or hidden charges to the estimate.

Area mappings preserve the four original rates. Additional neighbourhoods use documented estimated band assignments; the exact address and exceptional access/transport are confirmed before booking. The calculator does not claim live traffic pricing.

## Menus

Indian, Arabic, Western, Japanese and Italian. Existing Italian dishes support the additional cuisine. Dubai DET’s 2023 gastronomy report lists Italian, Lebanese and Indian among popular choices; YouGov’s October 2023 UAE survey also places Italian highly. These are historical market signals, not a current ranking of myCHEF bookings. Sources: https://www.dubaidet.gov.ae/en/research-and-insights/-/media/files/faqs/dubai-gastronomy-industry-report-2023.pdf and https://yougov.com/articles/47611-italian-and-middle-eastern-cuisines-are-most-popular-among-meat-eaters-in-uae . New recipes and recipe variants are suggestions priced from the existing tariff ladder. These have not been represented as kitchen-trialled recipes. Vegan/vegetarian recipe notes specify preparation changes; labels are not allergen or cross-contact guarantees.

The 3–11 selections are dishes, grouped by correct names: first/second/third starter, main, side and dessert. A side is not called an independent plated course. Counts map to starter/main/side/dessert quantities:

| Dishes | Starters | Mains | Sides | Desserts |
| --- | --- | --- | --- | --- |
| 3 | 1 | 1 | 0 | 1 |
| 4 | 1 | 1 | 1 | 1 |
| 5 | 2 | 1 | 1 | 1 |
| 6 | 2 | 2 | 1 | 1 |
| 7 | 2 | 2 | 2 | 1 |
| 8 | 2 | 2 | 2 | 2 |
| 9 | 3 | 2 | 2 | 2 |
| 10 | 3 | 3 | 2 | 2 |
| 11 | 3 | 3 | 3 | 2 |

## Updating from the owner workbook

The exported workbook contains stable IDs, current settings, menus, all prices and all extras. Edit values, preserve IDs and upload the workbook with an instruction describing the requested changes. It does not automatically publish edits. Compare against the checked-in JSON, validate the new input, run tests and build, review the layout, then publish an authorized commit. New dish prices should normally be controlled by tier/band; edit tier/band or their rates, not formula-derived prices. Turn `active` off to remove a dish, rather than deleting its ID. If a category drops below the needed number of selectable dishes, fix its options before publishing.

## Validation

`npm run test:private-dining` covers service minimums, assistant boundary values and buffet cap, all 200 dish IDs and category counts, all 3–11 menu sizes, one-cuisine enforcement, dietary replacements without double charging, full-group drinks, VAT, invalid values, unverified recipe quotes, date boundaries, contacts, kitchen confirmation and complete WhatsApp payloads.

Use the connected browser for interactive verification of all four steps, desktop and responsive layouts, menu alternatives and WhatsApp href inspection. Do not send test enquiries.
