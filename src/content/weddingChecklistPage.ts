import { WEDDING_PATHS } from './weddingCluster'

export const CHECKLIST_KEYWORD_LOCK = {
  primary: 'wedding catering checklist Dubai',
  title: 'Wedding Catering Checklist Dubai | Timeline & Questions | myCHEF',
  description:
    'A wedding catering checklist Dubai: when to book, tasting timeline, community gates, hotel rules, alcohol licences and day-of service. Print it. No prices.',
} as const

export const checklistHero = {
  src: '/images/wedding-catering-dubai-hero.webp',
  alt: 'A villa wedding dinner in Dubai — long table, candlelight, service in the background. Experience concept shown.',
  width: 2560,
  height: 1440,
} as const

export const checklistPhases = [
  {
    phase: 'As soon as the date is real',
    when: 'Often three to six months before. Peak dates from November to March, and larger weddings, often six to twelve months.',
    tasks: [
      'Write the date, venue or area, and a guest-count range.',
      'Ask the venue, on day one, whether external wedding catering is allowed. If the hotel says no, stop designing an independent plated menu for that ballroom.',
      'Name one person who is not the couple as the day-of food contact — planner, sibling, venue coordinator.',
      'Send a brief: format if you know it, cuisine, dietary needs, budget band, and whether you need staff, bar, cake or rentals.',
      'Hold the date only when the venue, the kitchen plan and the team can actually do that day.',
    ],
  },
  {
    phase: 'Three to six months before',
    when: 'The comfortable planning window for most Dubai weddings.',
    tasks: [
      'Lock the catering brief: plated, buffet, stations, canapés, family-style, or a mix.',
      'Share cultural and dietary requirements: Halal default, vegetarian, vegan, Jain, gluten-free, dairy-free, nut-conscious.',
      'Decide what is in the food-and-beverage plan and what stays with other suppliers.',
      'Walk the site or send photographs: kitchen, power, water, load-in, guest flow, weather cover.',
      'If the wedding is in Palm Jumeirah, Emirates Hills, Dubai Hills or Arabian Ranches, write to the community office about trucks, parking and noise after 8 p.m.',
    ],
  },
  {
    phase: 'Tasting window',
    when: 'After the date is held and the menu direction is agreed. Typically four to eight weeks before. Larger or peak-season weddings: eight to twelve weeks.',
    tasks: [
      'Taste the dishes that will actually be served, not a generic show plate.',
      'Check seasoning, portion, temperature and the order of the meal.',
      'Confirm how allergy-aware plates will be produced — including whether a controlled kitchen has been confirmed.',
      'Agree what changes after the tasting, in writing.',
    ],
  },
  {
    phase: 'Four to two weeks before',
    when: 'Operations, not mood boards.',
    tasks: [
      'Confirm staff numbers against the format, not a package name.',
      'Lock rentals that the plan includes: tableware, glassware, linen, extra furniture.',
      'Confirm bar: mocktails and soft drinks through myCHEF; alcohol only where the venue licence allows.',
      'If the day is large, public, or serving alcohol in a licensed venue, check who owns the DET / CID permit calendar. Fourteen days is the alcohol-permit drumbeat.',
      'Share load-in times, vendor meals, children’s plates and late-night food if they are in the brief.',
    ],
  },
  {
    phase: 'Seven to fourteen days before',
    when: 'Final guest count. The menu locks with those numbers.',
    tasks: [
      'Send the final headcount and the dietary list, named where it matters.',
      'Reconfirm arrival, setup, service and clear-down against the planner’s run sheet.',
      'Weather backup for anything outdoors.',
      'Cake cutting, speeches and dancing: tell the kitchen when food must pause and when it must return.',
    ],
  },
  {
    phase: 'Day of',
    when: 'Setup is usually about two hours before guests. Service is usually about three hours unless the run sheet is longer.',
    tasks: [
      'The food team runs the food and beverage operation.',
      'You stay with the reason everyone is there.',
      'Clear-down is part of the catering plan, not an extra surprise at midnight.',
    ],
  },
] as const

export const firstBrief = [
  'Date and whether it is peak season (November to March).',
  'Venue or area, and whether it is a villa, hotel, garden, beach or yacht.',
  'Guest-count range, including children and vendors if they eat.',
  'How you want people to eat, if you know: plated, buffet, stations, canapés, family-style, not sure.',
  'Cuisine and any dishes that must appear — or must not.',
  'Dietary list: Halal standard, vegetarian, vegan, Jain, gluten-free, dairy-free, nut-conscious, named allergies.',
  'Budget band, even if it is a range.',
  'What you already have: planner, florist, cake, bar, rentals.',
  'Whether alcohol is expected, and whether the venue is licensed.',
] as const

export const plannerSplit = [
  { who: 'myCHEF', does: 'The food and beverage operation: menu, chefs, service team, dietary planning, setup and clear-down of the food service, and the named contact for all of that.' },
  { who: 'Your planner', does: 'The wedding: ceremony, florals, entertainment, photography, invitations, the run sheet everyone else fits into.' },
  { who: 'The venue', does: 'The building, the licence, often the preferred-supplier list, load-in windows, overtime, and whether an external kitchen is allowed at all.' },
  { who: 'The couple', does: 'Decisions. Taste. Final numbers. One named day-of contact who is not either of you.' },
] as const

export const foodChecklist = [
  'Welcome drinks and canapés — or a decision that dinner starts on arrival.',
  'Main format locked: plated, buffet, stations, sharing, or a mix with times.',
  'Vegetarian, vegan, Jain and allergen-conscious covers named, not “we will see”.',
  'Children’s plates if they are eating a different meal.',
  'Vendor meals: photographers, musicians, planners eat too.',
  'Cake: moment, dessert, or both. Specialist pastry if the cake is a showpiece.',
  'Dessert table or plated sweet.',
  'Late-night food with a time, or a clear no.',
  'Bar: mocktails and soft drinks; alcohol only where licensed.',
  'Tea, coffee, Arabic coffee, dates — if they belong to this family.',
] as const

export const questionsToAsk = [
  'Who is the named point of contact from first brief to clear-down?',
  'What is always coordinated, what is included only when the plan says so, and what is extra?',
  'Does this venue allow external catering? If it is a hotel, get that in writing.',
  'Where will the food be cooked, and what kitchen access exists on the day?',
  'How will vegetarian, vegan, Jain and allergen-conscious covers be produced — including cross-contact?',
  'Is alcohol permitted here, and who holds the licence and the CID paperwork?',
  'What is the staffing plan for this format and this guest count?',
  'When is the tasting, and what does it cost if it is not in the plan?',
  'When is the final guest count due, and what happens if numbers move after that?',
  'Who owns load-in, waste, overtime and community-gate letters?',
] as const

export const dubaiBlock = [
  {
    title: 'Gated communities',
    body: 'Palm, Emirates Hills, Dubai Hills, Arabian Ranches: write to the community office early. Trucks, parking, noise after 8 p.m., and a wedding that looks like a production can all need a letter. We plan load-in with whoever holds the clicker.',
  },
  {
    title: 'Hotels',
    body: 'Ask on day one whether external wedding catering is allowed. If the answer is no, stop designing a myCHEF plated menu for that ballroom. The hotel is selling a building and a kitchen. That can be the right buy — it is a different product.',
  },
  {
    title: 'Alcohol at a villa',
    body: 'This is not a styling choice. It is a licence choice. If the paper is not there, we build a mocktail bar you will be proud of.',
  },
  {
    title: 'DET and CID',
    body: 'If the day is large, public, or serving alcohol in a licensed venue, someone — usually the venue or planner — owns the permit calendar. Fourteen days is the alcohol-permit drumbeat. Put it on this checklist.',
  },
] as const

export const checklistFaqs = [
  {
    q: 'When should I book a wedding caterer in Dubai?',
    a: 'Contact us three to six months before the wedding. Larger weddings and peak dates from November to March should begin earlier — often six to twelve months. Short-notice weddings may be possible depending on the venue, menu and partner availability. Do not wait until seven days out and expect a peak-season villa dinner.',
  },
  {
    q: 'What is a realistic wedding catering timeline in Dubai?',
    a: 'Brief and date hold first. Menu direction next. Tasting after that — typically four to eight weeks before, or eight to twelve in peak season. Final guest count seven to fourteen days before. Setup about two hours before guests. This page is the sequence; the [wedding catering](/wedding-catering-dubai) page is how you hire.',
  },
  {
    q: 'When is the wedding tasting?',
    a: 'After the date is held and the menu direction is agreed, typically four to eight weeks before the wedding. Larger or peak-season weddings: eight to twelve weeks. A tasting is not a first date with a caterer you have not briefed.',
  },
  {
    q: 'What questions should we ask a wedding caterer in Dubai?',
    a: 'Start with venue access, who the named contact is, what is included versus extra, allergen controls, alcohol licensing, and the final-numbers deadline. The full list is on this page. Prices live on the [cost guide](/blog/wedding-catering-cost-dubai).',
  },
  {
    q: 'Do we need a wedding planner if we use myCHEF?',
    a: 'myCHEF is not a wedding planner. We manage the food and beverage operation and fit it to your planner’s run sheet. If you do not have a planner, we still need one named day-of contact who is not the couple.',
  },
  {
    q: 'Can you work on short notice?',
    a: 'Sometimes. It depends on the venue, the menu and whether the right licensed partners are free. Send the date. We will say yes or no without theatre.',
  },
  {
    q: 'How much food for a wedding Dubai?',
    a: 'There is no single number for how much food for a wedding Dubai: guest count, menu, service style and staffing move the figure. Our indicative starting point on this page is AED 120 per guest. Send the date, headcount and venue and you get an itemised proposal — food, chefs, staff, hire and 5% VAT shown separately — usually within a working day.',
  },
  {
    q: 'How to plan wedding catering Dubai?',
    a: 'How to plan wedding catering Dubai starts from a set format that we adjust to your event rather than selling a fixed box: menu length, service style, staff and equipment are chosen for the day. Starting points begin at AED 120 per guest. Ask for the format closest to what you are planning and we shape it from there.',
  },
] as const

export const checklistLinks = [
  { href: WEDDING_PATHS.hub, label: 'Wedding catering Dubai', note: 'Hire the team' },
  { href: WEDDING_PATHS.menu, label: 'Wedding menu planning', note: 'Food, tasting, cuisines' },
  { href: WEDDING_PATHS.cost, label: 'Wedding catering cost', note: 'How a quote is built' },
  { href: '/blog/how-far-ahead-book-caterer-dubai', label: 'How far ahead to book', note: 'Lead times by event type' },
  { href: '/dessert-table-catering-dubai', label: 'Dessert table catering', note: 'Cake and the last food moment' },
  { href: '/bar-services-dubai', label: 'Bar services', note: 'Mocktails, and alcohol where licensed' },
] as const
