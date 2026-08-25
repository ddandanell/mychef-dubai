/**
 * Content for the corporate hub: /corporate
 *
 * KEYWORD LOCK: "corporate catering dubai".
 *
 * PRICING PROVENANCE — every figure below was already published by myCHEF in
 * src/content/seo-pages/corporate.json (opening_paragraph, add_block[5]/[6], faq[0]/[10])
 * and in this page's own <title>. That block used to be appended to the page by
 * SeoContent as a separate second article; suppressing the duplicate removed the only
 * place these numbers were rendered. They are relocated here so the hub is the single
 * on-page source of corporate pricing. Nothing here is estimated or invented — update
 * this file when the real prices change, and no other file needs touching.
 */

export interface FormatRow {
  format: string
  what: string
  staff: string
  price: string
}

/** The corporate service-format price ladder. */
export const formatLadder: FormatRow[] = [
  { format: 'Drop-off', what: 'Food delivered ready to serve', staff: 'None', price: 'From AED 90 per person' },
  { format: 'Buffet', what: 'Presentation plus a maintained spread', staff: '1–2', price: 'From AED 120 per person' },
  { format: 'Live stations', what: 'Cooking in front of your guests', staff: '2–4', price: 'From AED 150 per person' },
  { format: 'Plated', what: 'Every course served together', staff: '3 and above', price: 'AED 700–950 per person' },
]

export const pricingNotes = [
  'Volume formats start at 10 guests, a full buffet at 20.',
  'Minimum order value is AED 900 on dropped-off formats.',
  'A chef cooking on site has no minimum headcount — a board dinner for six is a normal booking.',
  'All figures are before 5% VAT, which is shown as its own line.',
  'Recurring work is priced against the weekly or monthly schedule instead.',
]

export const pricingIntro = [
  'Corporate catering in Dubai opens at AED 90 per person and moves with headcount, menu and how much service you want in the room. The format decides most of it: the same guests cost very different amounts dropped off versus plated.',
  'Every quote is itemised — food, staffing, equipment, delivery and VAT as separate lines — so your finance team can see exactly what is being approved, and you can compare it fairly against another quote. A quote that hides those lines is not cheaper, it is less complete.',
]

/** Routing prose: the hub's real job is sending people to the right service. */
export const routing = {
  h2: 'Which Corporate Service Do You Actually Need?',
  paragraphs: [
    'Corporate catering is not one product. The three things companies ask us for run on different operations, different lead times and different pricing, and putting them on one page is how people end up with the wrong quote.',
    'The first is recurring workplace catering: office lunches, boardroom meetings, daily staff meals, portioned meal prep. These are planned around a weekly rhythm and a headcount you already know. Consistency and timing matter more than presentation, and cost per head is the number that gets scrutinised.',
    'The second is one-off company events: parties, launches, award nights, networking receptions. These are planned around a date, a venue and a format. They need service staff, setup and pack-down, and they are quoted per event rather than per week.',
    'The third is production catering — film crews and shoots — where the schedule is unpredictable, meals move with the call sheet, and feeding people properly on a long day matters more than styling.',
    'If you are not sure which one you are planning, describe the day rather than the category. We will tell you which service fits and what it should cost.',
  ],
}

export const quoting = {
  h2: 'How a Corporate Quote Is Built',
  paragraphs: [
    'A useful proposal needs four things from you: the date, the venue or office, how many people, and what kind of occasion it is. Dietary requirements and a budget position help, and telling us the budget early is not a trap — it means the first proposal is realistic rather than the third one.',
    'From there we scope the format against the room. What a space can physically support changes what can be cooked and served in it: a floor with no service lift, a venue that will not allow open flame, or an office kitchen with one power point each rule out options that look fine on paper.',
    'What comes back is itemised. Where service staff, equipment hire or delivery are needed, they appear as their own lines rather than being folded into a per-head figure that is impossible to compare.',
  ],
}

export const boundaries = [
  {
    q: 'Feeding the office day to day?',
    a: 'Recurring workplace lunches run on a weekly rhythm.',
    href: '/office-catering-dubai',
    cta: 'Office catering',
  },
  {
    q: 'A one-off company event?',
    a: 'Parties, launches, galas and networking receptions.',
    href: '/corporate-event-catering-dubai',
    cta: 'Corporate event catering',
  },
  {
    q: 'Daily meals for a workforce?',
    a: 'Volume staff meals are a different operation entirely.',
    href: '/staff-meals-catering-dubai',
    cta: 'Staff meals',
  },
  {
    q: 'Catering a shoot or crew?',
    a: 'Meals that move with the call sheet.',
    href: '/production-catering-dubai',
    cta: 'Production catering',
  },
]
