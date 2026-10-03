# Private dinner package calculator

Implemented on `/private-chef-dubai#dinner-calculator`, with entry points in the
hero, private-chef navigation, mega menu, pricing page and relevant FAQ.

## Source and scope

The owner's `myCHEF_Complete_System_and_Build_Guide.md`, supplied 3 October 2026,
provides the dining prices, dish catalogue, chef restrictions and transport zones.
The source checksum is recorded in `src/content/privateDiningDishes.json`.
The owner's accompanying instruction changes the minimum from two to **six**
guests. The calculator covers 6–20 guests and 3–5 dishes including a main.

This release integrates the guide's private-dining package into the existing
website. Cooking-visit and existing meal-pack products keep their current rate
cards. The guide's other service-page projects, alternate meal-prep calculator,
membership, price feeds and payment/account systems are outside this change.

## Pricing and fulfilment rules

- Menu price: guests × sum of each dish's tier price and derived ingredient uplift.
- Chef evening fee: Essential AED 1,200 or Signature AED 1,800.
- One AED 400 assistant from 9 guests; two from 20 guests.
- Transport: AED 40 / 65 / 95 / 130 by the guide's four areas.
- VAT: 5% once on the event subtotal, rounded to fils. Per-person figures are rounded for display.
- Master uses the source's bespoke object and has no automated event total.
  Chef availability is requested, never promised.
- Essential supports up to L2; Signature up to L4; Master requests up to L5.
  Customers cannot self-approve senior sign-off. Sushi requires the Master specialist path.
- The seven dishes awaiting receipt confirmation have no numeric dish price or
  event total. A request can be sent for a manual quote. The same applies to
  source market-price dishes and Signature menus needing senior sign-off.
- All 104 dishes are imported. The 24 proposed additions are available only
  through the New preview and cannot be selected. Breakfast is excluded from dining.
- Private-dining ingredients and shopping are included in the menu price.
  Drinks, tableware, linen and requested extras are separate quotes.
- Every handoff is a request, not a confirmed reservation. The customer opens
  WhatsApp, reviews the encoded package/menu/details and chooses to send it.
  The site sends no automated messages and collects no payment.

## Maintenance

Prices and operational limits: `src/content/privateDiningConfig.ts`.
Calculation and message generation: `src/lib/privateDining.ts`.

To regenerate the catalogue from an updated owner guide:

```sh
python3 scripts/import-private-dining-data.py /path/to/myCHEF_Complete_System_and_Build_Guide.md
```

The importer derives grocery bands from source costs and verifies every band;
supplier cost figures and margin data are not copied into the public catalogue.
Do not clear cost-confirmation flags, approve proposed dishes or claim Master
availability without the corresponding operational confirmation.

## Verification

```sh
npm run test:private-dining
npm run build
npm run test:private-dining-ui
python3 scripts/verify-seo-contract.py
python3 scripts/verify-keyword-locks.py
```

The unit test reproduces the supplied Signature example: six guests, four mixed
dishes and zone 3 = AED 3,575 before VAT; AED 3,753.75 including VAT. It also covers
the guest limits, both assistant thresholds, all zones, all proposed dishes,
chef eligibility, market pricing, sign-off, invalid dates and WhatsApp encoding.
Browser checks cover desktop, tablet and small phones, filter interaction,
manual-quote states, input validation, mobile summary navigation and payloads.
External traffic is blocked and no enquiries are submitted by the tests.
