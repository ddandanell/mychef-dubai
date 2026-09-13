/**
 * Full corporate hospitality inventory.
 * Capability written into proposals. No invented prices.
 * Hub (/corporate) shows every section. Owner pages show the slices tagged to them.
 */

export type CorporateInvGroup = {
  heading: string
  items: readonly string[]
}

export type CorporateInvSection = {
  id: string
  nav: string
  line: string
  label: string
  h2: string
  how: string
  image: string
  imageAlt: string
  paths: readonly string[]
  groups: readonly CorporateInvGroup[]
}

const ALL = [
  '/corporate',
  '/office-catering-dubai',
  '/business-lunch-catering-dubai',
  '/conference-catering-dubai',
  '/corporate-event-catering-dubai',
  '/product-launch-catering-dubai',
  '/gala-dinner-catering-dubai',
  '/brand-activation-catering-dubai',
  '/exhibition-catering-dubai',
  '/corporate-dinner-package-dubai',
  '/staff-meals-catering-dubai',
  '/corporate-retainer-dubai',
  '/production-catering-dubai',
  '/corporate-catering-checklist-dubai',
] as const

export const CORPORATE_INVENTORY_INTRO = {
  label: 'The full company brief',
  h2: 'Everything a corporate sitting actually needs',
  body:
    'Food is only the start. A company day also needs chefs or a drop-off kitchen, service staff when the room requires them, equipment that fits a tower pantry, labelled dietary plates, a loading-bay window and one person who owns the timeline. The lists below are what we write into corporate proposals. The written proposal names the dishes, the team and the price.',
} as const

export const CORPORATE_INVENTORY: readonly CorporateInvSection[] = [
  {
    id: 'corp-inv-formats',
    nav: 'Formats',
    line: 'Drop-off, buffet, canapés, plated',
    label: 'How the room is served',
    h2: 'Service formats for a Dubai office or venue',
    how:
      'The format is the decision that moves the price. Drop-off is food and delivery. A staffed buffet adds people for setup, replenishing and clearance. Canapés keep a standing room moving. Plated service is courses at a table. We do not fold those four into one per-head slogan.',
    image: '/images/drop-off-catering-dubai-hero.webp',
    imageAlt: 'Drop-off lunch laid out on a cleared meeting table. Experience concept shown.',
    paths: ALL,
    groups: [
      {
        heading: 'Coverage',
        items: [
          'Drop-off, laid out, you serve',
          'Drop-off plus collection of empties',
          'Staffed buffet line',
          'Passed canapé reception',
          'Bowl-food standing service',
          'Plated courses at the table',
          'Live station where the building allows flame and power',
          'Hybrid: drop-off lunch, staffed evening',
        ],
      },
      {
        heading: 'What the headline covers',
        items: [
          'Food only',
          'Food and delivery',
          'Food, delivery and setup',
          'Food, staff, setup and clearance',
          '5% VAT as its own line',
          'Unusual venue access quoted separately',
        ],
      },
    ],
  },
  {
    id: 'corp-inv-office',
    nav: 'Office week',
    line: 'Breakfast, lunch, repeating days',
    label: 'The repeating workplace',
    h2: 'Office breakfast, lunch and meeting food',
    how:
      'A known headcount on named days. Consistency and the delivery window matter more than theatre. Recurring weeks are billed on actual service days. There is no automatic volume discount.',
    image: '/images/office-catering-dubai-hero.webp',
    imageAlt: 'Office catering laid out in a Dubai workplace. Experience concept shown.',
    paths: ['/corporate', '/office-catering-dubai', '/corporate-retainer-dubai', '/corporate-catering-checklist-dubai'],
    groups: [
      {
        heading: 'Breakfast',
        items: [
          'Egg and labneh wraps',
          'Granola pots',
          'Seasonal fruit',
          'Arabic coffee and tea',
          'Still water',
          'Laid out before the floor fills',
        ],
      },
      {
        heading: 'Weekday lunch',
        items: [
          'Named hot main with a vegetarian line',
          'Grain or rice',
          'Salad',
          'Cut fruit',
          'Labelled boxes for mixed dietary rooms',
          'Two-week rotation so the same wrap does not appear twice',
        ],
      },
      {
        heading: 'Ordering',
        items: [
          'Standing weekday window',
          'Headcount deadline in the booking',
          'One monthly invoice if you want it',
          'Changes after the kitchen deadline are quoted again',
        ],
      },
    ],
  },
  {
    id: 'corp-inv-lunch',
    nav: 'Boardroom',
    line: 'Working lunch, client sitting',
    label: 'Meetings that stay in the room',
    h2: 'Boardroom catering and client lunches',
    how:
      'A working lunch keeps the agenda in the room. A client lunch is a different product: plated courses, staff in the room, devices off the table. Do not price those two as if they were the same sandwich.',
    image: '/images/blog/corporate-event-catering-ideas-dubai-2.webp',
    imageAlt: 'Drop-off boxes on a cleared Dubai meeting table. Experience concept shown.',
    paths: ['/corporate', '/business-lunch-catering-dubai', '/office-catering-dubai', '/conference-catering-dubai'],
    groups: [
      {
        heading: 'Working lunch',
        items: [
          'Boxed mains, one per seat',
          'Sharing platters for a small table',
          'Hand-friendly food that does not need a knife',
          'Delivered before the agenda slot',
          'No staff remaining unless you ask',
        ],
      },
      {
        heading: 'Client sitting',
        items: [
          'Starter, main, dessert',
          'Chef and service sized to the table',
          'Printed menus on request',
          'Pause for a pitch or a signature',
          'Kitchen left as found',
        ],
      },
    ],
  },
  {
    id: 'corp-inv-conference',
    nav: 'Conference',
    line: 'Breaks, half day, full day',
    label: 'Around the agenda',
    h2: 'Coffee breaks, delegate lunch and multi-day holding',
    how:
      'Conference catering is the food operation under the run of show. Breaks are timed to the slot. Lunch is boxed or buffet. Holding across sessions is a staffed job. We do not hire the room or run the slides.',
    image: '/images/breakfast-catering-dubai-hero.webp',
    imageAlt: 'Conference break with coffee and pastry. Experience concept shown.',
    paths: ['/corporate', '/conference-catering-dubai', '/exhibition-catering-dubai', '/business-lunch-catering-dubai'],
    groups: [
      {
        heading: 'Breaks',
        items: [
          'Arrival coffee and tea',
          'Morning break: pastry or savoury bite, fruit, water',
          'Afternoon break: tea, sweet, water',
          'Barista labour separate from a full coffee cart',
          'All-day water and fruit station on request',
        ],
      },
      {
        heading: 'Delegate meals',
        items: [
          'Boxed lunch for a tight agenda',
          'Buffet lunch for a 45-minute window',
          'Half-day: arrival, one break, lunch',
          'Full day: two breaks and lunch',
          'Multi-day: rotating lunch, dietary map carried across days',
        ],
      },
      {
        heading: 'Room conditions',
        items: [
          'Power for urns and holding',
          'Service lift booking',
          'No open flame unless the venue writes it',
          'Clearance before the next session',
        ],
      },
    ],
  },
  {
    id: 'corp-inv-events',
    nav: 'Company events',
    line: 'Parties, launches, awards',
    label: 'One-off company nights',
    h2: 'Staff parties, networking and launches',
    how:
      'A company celebration is quoted per event. Food can pause for a speech or a product reveal. Devices are stacked, not used as placemats. Seasonal sittings, including Diwali, use the same event operation.',
    image: '/images/corporate-catering-dubai-hero.webp',
    imageAlt: 'Canapés passed at a company reception. Experience concept shown.',
    paths: [
      '/corporate',
      '/corporate-event-catering-dubai',
      '/product-launch-catering-dubai',
      '/brand-activation-catering-dubai',
      '/gala-dinner-catering-dubai',
    ],
    groups: [
      {
        heading: 'Standing',
        items: [
          'Passed canapés, about 8 to 12 pieces per guest over 90 minutes',
          'Bowl-food pockets',
          'Networking reception',
          'Launch timed to the reveal',
          'Awards-night service that pauses for speeches',
        ],
      },
      {
        heading: 'Seated',
        items: [
          'Staff party buffet, minimum 20 guests',
          'Gala banquet with a clock',
          '10 to 15 guest corporate dinner package',
          'Executive plated dinner outside that range',
        ],
      },
    ],
  },
  {
    id: 'corp-inv-production',
    nav: 'Production',
    line: 'Craft services, crew lunch',
    label: 'Call-sheet food',
    h2: 'Shoots, crews and craft services',
    how:
      'Production catering follows the call sheet. Meals move if the day moves. This is crew food, not a client gala. Film-crew searches that still 301 to the event page are a known mismatch. Brief production here.',
    image: '/images/film-production-catering-dubai-hero.webp',
    imageAlt: 'Crew meals for a production day. Experience concept shown.',
    paths: ['/corporate', '/production-catering-dubai', '/staff-meals-catering-dubai'],
    groups: [
      {
        heading: 'On the sheet',
        items: [
          'Craft table: fruit, snacks, hot drinks, water',
          'Crew lunch, one per name on the sheet',
          'Early call breakfast',
          'Wrap lunch',
          'Shift meals that hold',
        ],
      },
    ],
  },
  {
    id: 'corp-inv-staff-meals',
    nav: 'Workforce',
    line: 'Canteen rhythm, shift meals',
    label: 'Feeding the team',
    h2: 'Staff meals that repeat without becoming a gala',
    how:
      'Volume food for a known workforce. Rotating mains, labelled dietary lines, billed on sittings. This is not waiter recruitment and not a page for hiring hospitality staff.',
    image: '/images/staff-meals-catering-dubai-hero.webp',
    imageAlt: 'Staff meals in a workplace canteen. Experience concept shown.',
    paths: ['/corporate', '/staff-meals-catering-dubai', '/office-catering-dubai', '/corporate-retainer-dubai'],
    groups: [
      {
        heading: 'Sittings',
        items: [
          'Daily hot main, rice or bread, salad, fruit',
          'Shift meals that hold temperature',
          'Vegetarian line as a first-class tray',
          'Canteen rhythm, not plated courses',
        ],
      },
    ],
  },
  {
    id: 'corp-inv-menu',
    nav: 'Menus',
    line: 'Mains, stations, dietary lines',
    label: 'What goes on the table',
    h2: 'Corporate catering food that survives a mixed room',
    how:
      'Halal ingredients are the default. Vegetarian, vegan and gluten-free dishes are planned when named. Labels go on the tray. We do not promise an allergen-free kitchen.',
    image: '/images/buffet-catering-dubai-hero.webp',
    imageAlt: 'Buffet line with labelled dietary dishes. Experience concept shown.',
    paths: ALL,
    groups: [
      {
        heading: 'Hot',
        items: [
          'Grilled chicken or fish',
          'Slow lamb or a lentil stew',
          'Herb rice, bread, vegetables',
          'Live pasta or grill station where allowed',
          'Shawarma station where the building allows it',
        ],
      },
      {
        heading: 'Cold and holding',
        items: [
          'Fattoush, slaw, mixed salad',
          'Mezze that holds without a kitchen',
          'Cut fruit',
          'Exhibition bites that do not need a stove on the stand',
        ],
      },
      {
        heading: 'Dietary marks',
        items: [
          'Halal by default',
          'Vegetarian line',
          'Vegan line when named',
          'Gluten-free when named',
          'Named allergen, named guest',
        ],
      },
    ],
  },
  {
    id: 'corp-inv-people',
    nav: 'Staff',
    line: 'Chefs, waiters, runners, supervisor',
    label: 'Who is in the room',
    h2: 'Catering staff for a company sitting',
    how:
      'Drop-off has no staff in the room. A staffed buffet includes 1 to 2 people for the line. Canapés need passers. Plated service needs a chef plus a floor team sized to the table. Extra roles are extra lines. We do not double-charge included waiters.',
    image: '/images/live-cooking-stations-dubai-hero.webp',
    imageAlt: 'Chef at a live station. Experience concept shown.',
    paths: ALL,
    groups: [
      {
        heading: 'Roles we book',
        items: [
          'Chef',
          'Waiter',
          'Runner on larger rooms',
          'Barista for a named break',
          'Floor supervisor on larger events',
        ],
      },
      {
        heading: 'What they do',
        items: [
          'Setup and pack-down inside booked hours',
          'Replenish the line',
          'Pass and clear',
          'Hold the timeline against the agenda',
          'Leave the pantry as found',
        ],
      },
      {
        heading: 'Not included unless named',
        items: [
          'A complete coffee-cart package',
          'Bartender and bar kit',
          'Overtime after the booked window',
          'Uniform changes for a brand colourway',
        ],
      },
    ],
  },
  {
    id: 'corp-inv-kit',
    nav: 'Equipment',
    line: 'Chafers, trays, holding, glass',
    label: 'What we bring',
    h2: 'Equipment that fits a tower pantry',
    how:
      'A Dubai office is not a ballroom. We bring what the format needs and check power, flame and lift size before the menu is locked. Unusual hire is a separate line.',
    image: '/images/canape-catering-dubai-hero.webp',
    imageAlt: 'Service trays and canapé setup. Experience concept shown.',
    paths: ALL,
    groups: [
      {
        heading: 'Drop-off kit',
        items: [
          'Sealed packaging',
          'Tongs and serving spoons',
          'Napkins',
          'Dietary labels',
        ],
      },
      {
        heading: 'Staffed kit',
        items: [
          'Chafing dishes',
          'Linen for the line',
          'Trays and stands',
          'Holding boxes',
          'Tableware for plated service',
          'Place settings on the dinner package',
        ],
      },
    ],
  },
  {
    id: 'corp-inv-drinks',
    nav: 'Drinks',
    line: 'Coffee, water, licensed wine',
    label: 'Beverages',
    h2: 'Soft drinks as standard. Alcohol only where licensed',
    how:
      'Water, coffee and tea are the default. Mocktails can be staffed. Wine or champagne is only where the venue licence allows it and the proposal names it. We do not assume an open bar.',
    image: '/images/bar-services-dubai-hero.webp',
    imageAlt: 'Beverage station for a company event. Experience concept shown.',
    paths: ALL,
    groups: [
      {
        heading: 'Always available to quote',
        items: [
          'Still and sparkling water',
          'Arabic coffee and tea',
          'Soft drinks',
          'Mocktail service',
          'Coffee break urns',
        ],
      },
      {
        heading: 'Only when agreed',
        items: [
          'Wine service where licensed',
          'Champagne toast where licensed',
          'Bartender with bar station',
          'Client-supplied alcohol, we serve if the licence allows it',
        ],
      },
    ],
  },
  {
    id: 'corp-inv-logistics',
    nav: 'Buildings',
    line: 'Lifts, bays, security desks',
    label: 'Getting into the tower',
    h2: 'Delivery, loading bays and building rules',
    how:
      'DIFC, Business Bay, Downtown and Media City each have a different desk. Names, vehicle plates and lift slots change when food can arrive at temperature. Mention the building early. Unusual access is quoted separately.',
    image: '/images/blog/corporate-catering-full-service-vs-drop-off-2.webp',
    imageAlt: 'Staffed setup in an office pantry. Experience concept shown.',
    paths: ALL,
    groups: [
      {
        heading: 'What we need',
        items: [
          'Tower and floor',
          'Loading-bay window',
          'Service-lift booking',
          'Security name list',
          'Power for holding',
          'Open-flame permission in writing, or we drop flame from the menu',
        ],
      },
      {
        heading: 'Clearance',
        items: [
          'Pack-down after the last sitting',
          'Collection of empties on drop-off, if asked',
          'Waste handled to the building rule',
          'Pantry left as found on staffed jobs',
        ],
      },
    ],
  },
  {
    id: 'corp-inv-paper',
    nav: 'Invoicing',
    line: 'VAT, LPO, accounts',
    label: 'What finance sees',
    h2: 'Itemised invoices, not a blended headline',
    how:
      'Food, staff, equipment, delivery and 5% VAT sit on separate lines. An LPO or a consolidated invoice does not by itself create credit terms. A written account is a separate agreement.',
    image: '/images/catering-packages-dubai-hero.webp',
    imageAlt: 'Proposal and package planning. Experience concept shown.',
    paths: ['/corporate', '/corporate-retainer-dubai', '/office-catering-dubai', '/corporate-catering-checklist-dubai'],
    groups: [
      {
        heading: 'On every proposal',
        items: [
          'TRN-ready VAT invoice',
          'Itemised food line',
          'Staff only when not already inside the package',
          'Equipment hire if it is extra',
          'Delivery if it is extra',
          'VAT 5% as its own line',
        ],
      },
      {
        heading: 'Accounts',
        items: [
          'Consolidated invoice when you book more than one service in a period',
          'Written contract for regular bookings',
          'Credit, fees, expiry and overages only if the agreement names them',
          'No shop-window monthly fee',
        ],
      },
    ],
  },
  {
    id: 'corp-inv-not-this',
    nav: 'Not this',
    line: 'AV, venue, entertainment',
    label: 'What stays with you',
    h2: 'What myCHEF does not supply',
    how:
      'We coordinate with your planner, production team and venue. We would rather say no than let you discover a gap two days before the sitting.',
    image: '/images/events-catering-dubai-hero.webp',
    imageAlt: 'A dressed event room without staging equipment as the hero. Experience concept shown.',
    paths: ALL,
    groups: [
      {
        heading: 'Not in the catering operation',
        items: [
          'AV and screens',
          'Staging and lighting',
          'Entertainment and DJs',
          'Venue hire',
          'General conference production',
          'Photographing or naming your clients unless you agree in writing',
        ],
      },
    ],
  },
]

export function inventoryForPath(path: string) {
  return CORPORATE_INVENTORY.filter((section) => section.paths.includes(path))
}

export const CORPORATE_INVENTORY_PILLARS = CORPORATE_INVENTORY.map((section) => ({
  href: `#${section.id}`,
  title: section.nav,
  line: section.line,
}))
