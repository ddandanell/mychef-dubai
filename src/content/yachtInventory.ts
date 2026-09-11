/**
 * Full yacht hospitality inventory for /yachts only.
 * Capability we write into proposals. No invented prices.
 * The 113-guest Harbour quote remains the only public number.
 */

export type YachtInvGroup = {
  heading: string
  items: readonly string[]
}

export type YachtInvSection = {
  id: string
  nav: string
  label: string
  h2: string
  how: string
  image: string
  imageAlt: string
  groups: readonly YachtInvGroup[]
}

export const YACHT_INVENTORY_INTRO = {
  label: 'The full hospitality brief',
  h2: 'One team for the entire yacht hospitality experience',
  body:
    'Food is only the start. A serious yacht day also needs chefs, waiters, bartenders, live stations, glassware, setup, marina loading and someone coordinating with the crew. We build the brief from what the day actually needs — not from a tray and a hope. Menus and staffing below are what we write into yacht proposals. Your written proposal names the dishes, the team and the price.',
} as const

export const YACHT_INVENTORY_PILLARS: readonly { href: string; title: string; line: string }[] = [
  { href: '#yacht-formats', title: 'Food & catering', line: 'Canapés, buffet, bowls, seated, hybrid' },
  { href: '#yacht-stations', title: 'Live cooking', line: 'Shawarma, pasta, grill, carving, dessert' },
  { href: '#yacht-staff', title: 'Service staff', line: 'Chefs, waiters, runners, bartenders' },
  { href: '#yacht-bar', title: 'Bars & beverages', line: 'Mocktails, wine, open bar where permitted' },
  { href: '#yacht-tableware', title: 'Tableware & rentals', line: 'Plates, glassware, cutlery, stations' },
  { href: '#yacht-styling', title: 'Event styling', line: 'Buffet décor, candles, yacht-safe florals' },
  { href: '#yacht-logistics', title: 'Logistics & setup', line: 'Cold chain, marina load, waste, clear-down' },
  { href: '#yacht-entertainment', title: 'Entertainment', line: 'Optional DJ and sound, if the yacht allows' },
  { href: '#yacht-management', title: 'Event management', line: 'Timeline, crew, speeches, boarding' },
]

export const YACHT_INVENTORY: readonly YachtInvSection[] = [
  {
    id: 'yacht-formats',
    nav: 'Food & catering',
    label: 'How the day is served',
    h2: 'Service formats built for a moving yacht',
    how:
      'Guests do not sit still. They move from the aft lounge to the upper deck to the salon. We design the food around that: passed canapés while people arrive, a welcome hour, buffet or bowls once they settle, live stations where the deck allows it, seated-optional dining if a smaller group wants a table. We can pause service for a CEO speech and restart without the room going cold. Corporate yacht catering, private yacht catering and VIP days use the same operating model — different staffing, same coordination with the crew.',
    image: '/images/yacht-inv-canapes.webp',
    imageAlt: 'Waiter passing canapés in a yacht salon. Experience concept shown.',
    groups: [
      {
        heading: 'Reception and movement',
        items: [
          'Passed canapé reception',
          'Canapé buffet',
          'Cocktail reception',
          'Welcome canapé hour',
          'Continuous roaming service',
          'Seated-optional dining',
          'Hybrid dining (standing + seated pockets)',
        ],
      },
      {
        heading: 'Tables and lounges',
        items: [
          'Premium international buffet',
          'Family-style dining',
          'Bowl-food dining',
          'Lounge dining',
          'Upper-deck service',
          'Main-salon service',
          'Aft-lounge service',
          'Rotating service through the yacht',
          'Buffet stations across multiple areas',
        ],
      },
      {
        heading: 'Who the day is for',
        items: [
          'Corporate yacht catering',
          'Private yacht catering',
          'VIP yacht catering',
          'Client entertaining',
          'Family days and celebrations',
        ],
      },
    ],
  },
  {
    id: 'yacht-stations',
    nav: 'Live cooking',
    label: 'Live stations',
    h2: 'Compact live stations that actually fit the deck',
    how:
      'A yacht is not a hotel ballroom. Stations have to be self-contained, marine-safe and small enough to load in the captain’s window. The 113-guest Harbour quote priced one live station — chicken shawarma, Mexican, pasta or burger — with two station chefs as a separate AED 720 line. We can run more than one station when the vessel and headcount justify it: carving, dessert, coffee, robata, noodle or wok. If the captain will not allow open flame, we do not light a grill.',
    image: '/images/yacht-inv-live-station.webp',
    imageAlt: 'Chef at a compact shawarma live station on a yacht deck. Experience concept shown.',
    groups: [
      {
        heading: 'Stations we write into proposals',
        items: [
          'Live chicken shawarma (bread, fries, garlic, pickles, salad)',
          'Live Mexican (quesadilla, fajita, taco fillings, guacamole, salsa)',
          'Live pasta (tagliatelle, farfalle, penne, pesto, tomato, cream, shrimp or chicken)',
          'Live burger (beef or chicken, cheeses, sauces, pickles)',
          'Robata or charcoal grill (lamb chops, yakitori, halloumi, vegetable skewers — if permitted)',
          'Noodle / wok (Pad Thai, Singapore noodles, shrimp, chicken or vegetarian)',
          'Carving (herb-crusted beef sirloin, red wine jus)',
          'Dessert station and coffee station',
          'Multiple live stations on larger decks',
        ],
      },
    ],
  },
  {
    id: 'yacht-canapes',
    nav: 'Canapés',
    label: 'Canapé menus',
    h2: 'A proper canapé list — not six anonymous bites',
    how:
      'The Harbour canapé reception offered a choice of 12 from a 40+ item list, plus desserts, soft drinks, water and mocktails, with 5–6 waiters named on that quote. Passed bites have to survive movement, heat and one-hand eating. We prep most of the work on land and finish onboard. The list below is the range we build from. Your written menu is a short selection, not every item on one tray.',
    image: '/images/yacht-inv-canapes.webp',
    imageAlt: 'Passed canapés served to guests in a yacht salon. Experience concept shown.',
    groups: [
      {
        heading: 'Meat',
        items: [
          'Beef Wellington canapé',
          'Wagyu beef crostini or sliders',
          'Beef sliders',
          'Bresaola with goat cheese, asparagus, peach or brownie',
          'Smoked beef and asparagus',
          'Meatball skewers',
          'Chicken sliders, satay, shawarma parcels, caramelized chicken crepes',
          'Smoked turkey and cheese potato',
        ],
      },
      {
        heading: 'Seafood',
        items: [
          'Tuna tartare cones',
          'Blackened shrimp tartlet',
          'Butterfly shrimp bruschetta',
          'Shrimp cocktail canapé',
          'Panko prawns',
          'Tiger prawn and mango',
          'Prawn and mango spring rolls',
          'Seafood dumplings',
          'Smoked salmon crostini, gravlax, blini, rose, asparagus, tobiko',
          'Crab, avocado and mango lettuce cup',
          'Caviar blini',
          'Potato with sour cream and caviar',
        ],
      },
      {
        heading: 'Vegetarian',
        items: [
          'Apricot, goat cheese, almond and rosemary',
          'Black fig and goat cheese',
          'Brie and blueberry cracker',
          'Burrata and heirloom tomato skewer',
          'Beetroot and goat cheese tart',
          'Mushroom or truffle arancini',
          'Tomato or hummus bruschetta',
          'Chaat tartlets',
          'Dates and cream cheese',
          'Endive and Roquefort',
          'Grilled zucchini and ricotta',
          'Kebbeh with moutabal',
          'Watermelon, mango and feta',
          'Tomato quiche',
        ],
      },
    ],
  },
  {
    id: 'yacht-buffet',
    nav: 'Buffet',
    label: 'International buffet',
    h2: 'A buffet that waiters actually run',
    how:
      'A professionally managed buffet is how larger yacht groups eat without a restaurant pass. Guests move at their own pace. Waiters replenish, clear and keep the table looking organised. The Harbour buffet quote named 4 waiters, with salads, appetizers, mains, sides, desserts and beverages. Elevations come off if the sea gets rough — that is a captain’s call, written into how we set the table.',
    image: '/images/yacht-inv-buffet.webp',
    imageAlt: 'International buffet in a yacht salon with waiters. Experience concept shown.',
    groups: [
      {
        heading: 'Cold',
        items: [
          'Mediterranean mezze — hummus, muhammara, baba ganoush, olives, flatbread',
          'Burrata Caprese and heirloom tomato',
          'Asian slaw',
          'Quinoa tabbouleh',
          'Pomegranate salad',
        ],
      },
      {
        heading: 'Mains and sides',
        items: [
          'Beef sirloin',
          'Seabass',
          'Butter chicken',
          'Vegetable and halloumi tagine',
          'Mushroom and truffle risotto',
          'Saffron basmati rice',
          'Rosemary roasted potatoes',
          'Seasonal grilled vegetables',
        ],
      },
    ],
  },
  {
    id: 'yacht-lounge',
    nav: 'Lounge dining',
    label: 'Bowl food and lounge',
    h2: 'Bowl food when a formal table will not fit',
    how:
      'On a yacht, a low lounge table often works better than a long seated dinner. Bowl food is a proper course in a vessel you can hold — short rib, seabass, tagine, risotto, orzo — served by waiters while guests stay in conversation. Vegetarian and vegan bowls are part of the same format, not an afterthought.',
    image: '/images/yacht-inv-lounge.webp',
    imageAlt: 'Waiters serving bowl food in a yacht lounge. Experience concept shown.',
    groups: [
      {
        heading: 'Bowls we build',
        items: [
          'Slow-braised beef short rib, truffle mash, red wine jus',
          'Miso-glazed seabass, jasmine rice, bok choy',
          'Saffron chicken tagine, couscous, preserved lemon',
          'Wild mushroom and truffle risotto',
          'Grilled vegetable and halloumi orzo',
          'Vegetarian bowl-food options',
          'Vegan bowl-food options',
        ],
      },
    ],
  },
  {
    id: 'yacht-desserts',
    nav: 'Desserts',
    label: 'Desserts',
    h2: 'Desserts that survive a moving deck',
    how:
      'Harbour canapé days included five desserts. We favour items that hold: tartlets, shots, baklava, fruit. A live dessert station or tiramisu bar is possible when the yacht has the space and the staff. A chocolate fountain only if the captain and the sea agree — it is not a default.',
    image: '/images/yacht-inv-dessert.webp',
    imageAlt: 'Dessert and coffee service on a yacht deck. Experience concept shown.',
    groups: [
      {
        heading: 'Sweet service',
        items: [
          'Chocolate ganache tartlets',
          'Rose éclairs',
          'Berry and lemon meringue tartlets',
          'Tiramisu shots and mini cups',
          'Oreo or pistachio cheesecake shots',
          'Chocolate and pistachio tartlets',
          'Chocolate fondant bites',
          'Pistachio baklava',
          'Fresh fruit skewers and platters',
          'Build-your-own tiramisu bar',
          'Live dessert station',
          'Arabic coffee and mini pastries',
        ],
      },
    ],
  },
  {
    id: 'yacht-bar',
    nav: 'Bars & beverages',
    label: 'Drinks',
    h2: 'Beverage service — mocktails as standard, a bar where the yacht allows it',
    how:
      'Soft drinks, water and mocktails sat inside the Harbour food rates. A bartender with a bar station, glasses and icebox is AED 1,800 on that quote; a bartender alone is AED 1,200. Alcohol is only where the operator permits it. We can run a mobile bar, use the yacht’s existing bar, or keep the day fully non-alcoholic. Continuous beverage service is a staffing decision, written before anyone boards.',
    image: '/images/yacht-inv-bar.webp',
    imageAlt: 'Bartender at a compact yacht bar station. Experience concept shown.',
    groups: [
      {
        heading: 'Non-alcoholic',
        items: [
          'Still and sparkling water',
          'Soft drinks',
          'Fresh juices',
          'Premium and signature mocktails',
          'Alcohol-free cocktails',
          'Continuous beverage service',
        ],
      },
      {
        heading: 'Where the operator allows alcohol',
        items: [
          'Welcome Champagne and Champagne replenishment',
          'Red, white and rosé wine',
          'Vodka, gin, whisky, rum, tequila',
          'Signature cocktails and mixed drinks to order',
          'Premium open bar',
          'Cocktail menu development',
        ],
      },
      {
        heading: 'Bar equipment',
        items: [
          'Mobile bar station',
          'Existing yacht-bar operation',
          'Cocktail equipment and garnish station',
          'Wine, Champagne, spirit and cocktail glasses',
          'Ice boxes, ice buckets, ice supply',
          'Bar refrigeration and chillers',
        ],
      },
    ],
  },
  {
    id: 'yacht-staff',
    nav: 'Service staff',
    label: 'The team',
    h2: 'Chefs, waiters and bartenders — named in the proposal',
    how:
      'The Harbour canapé quote named 5–6 skilled waiters. The buffet named 4. Live station added two chefs at AED 720. Larger days can scale to an event manager, a head chef, station chefs, waiters, runners and bartenders. We do not copy a 113-guest team onto a table of twelve. Mixed-gender service teams are normal; we can match the brief. A yacht chef Dubai brief is a charter day, not a household plan.',
    image: '/images/yacht-inv-lounge.webp',
    imageAlt: 'Yacht waiters serving guests in the lounge. Experience concept shown.',
    groups: [
      {
        heading: 'Front of house',
        items: [
          'Event manager / service manager / event coordinator',
          'Service captain and head waiter',
          'Waiters and skilled waiters',
          'Runners and clearing staff',
          'Bartenders, cocktail bartenders, barbacks',
          'Beverage servers',
          'Mixed-gender teams, matched to the brief',
        ],
      },
      {
        heading: 'Kitchen',
        items: [
          'Head chef',
          'Station and line chefs',
          'Live-station, grill, robata, shawarma, pasta, burger, noodle and carving chefs',
          'Dessert chef',
          'Kitchen assistants and prep chefs',
          'Stewarding / cleaning team',
        ],
      },
      {
        heading: 'Support',
        items: [
          'Logistics and setup crew',
          'Breakdown crew and equipment handlers',
          'Waste-removal staff',
          'Cold-chain / refrigeration support',
        ],
      },
    ],
  },
  {
    id: 'yacht-management',
    nav: 'Event management',
    label: 'Running the day',
    h2: 'Someone owns the timeline so you do not have to',
    how:
      'On larger charters we put an event or service manager on the boat: briefing the team, coordinating boarding with the crew, timing food around a speech, watching guest count, dietaries and the floor plan. That person is the client-facing supervisor. You should not be messaging five suppliers while guests are arriving.',
    image: '/images/yacht-inv-coordination.webp',
    imageAlt: 'Event coordinator briefing yacht service team. Experience concept shown.',
    groups: [
      {
        heading: 'Coordination we handle',
        items: [
          'Service briefing and staff coordination',
          'Yacht crew and boarding coordination',
          'Service-point and floor-plan planning',
          'Event timeline and food-service timing',
          'CEO speech / service-pause coordination',
          'Setup and breakdown supervision',
          'Vendor, rental and beverage coordination',
          'Final guest-count and dietary coordination',
          'Marina logistics and disembarkation',
          'Yacht safety briefing with the crew',
        ],
      },
    ],
  },
  {
    id: 'yacht-tableware',
    nav: 'Tableware & rentals',
    label: 'What we bring',
    h2: 'Plates, glasses and stations — you should not hunt for rentals',
    how:
      'Glassware, plates, cutlery and napkins were inside the Harbour food quotes. Larger days add charger plates, fabric napkins, buffet risers, chafing or induction, and station signage. We load what the format needs and take it off again. Menu name tags go on the buffet so guests are not guessing.',
    image: '/images/yacht-inv-tableware.webp',
    imageAlt: 'Tableware and glassware being set on a yacht table. Experience concept shown.',
    groups: [
      {
        heading: 'Table and glass',
        items: [
          'Charger, dinner, canapé and dessert plates',
          'Wine, Champagne, water and cocktail glasses',
          'Four-piece cutlery sets',
          'Tissue and fabric napkins, napkin rings',
          'Table runners',
        ],
      },
      {
        heading: 'Service equipment',
        items: [
          'Serving trays, buffet platters and boards',
          'Buffet risers and station signage',
          'Menu / name tags',
          'Chafing equipment and induction units',
          'Grills and robata equipment where permitted',
        ],
      },
    ],
  },
  {
    id: 'yacht-styling',
    nav: 'Event styling',
    label: 'How it looks',
    h2: 'Yacht-safe styling — not a ballroom install',
    how:
      'Décor has to survive movement and a captain’s safety call. We style buffets and stations with elevations that can come off in open water. Candles, low florals, table runners and gold charger settings are available when the brief wants them. Corporate days can take branded menu signage. Nothing is glued to the yacht.',
    image: '/images/yacht-inv-tableware.webp',
    imageAlt: 'Yacht table styling with glassware and low candles. Experience concept shown.',
    groups: [
      {
        heading: 'Display and décor',
        items: [
          'Premium buffet styling and elevations',
          'Food labels and buffet name tags',
          'Grazing / display boards',
          'Live-station styling and compact yacht stations',
          'Marine-safe buffet setups and rough-sea adaptations',
          'Deck, salon and lounge setups',
          'Table styling, cylinder candles, floral arrangements',
          'Station décor and custom event styling',
          'Corporate styling',
        ],
      },
    ],
  },
  {
    id: 'yacht-logistics',
    nav: 'Logistics & setup',
    label: 'Getting it onboard',
    h2: 'Marina loading is part of the service, not an extra you invent on the day',
    how:
      'Food, equipment and staff load in the captain’s window. Cold chain, ice, chillers and waste removal are planned before the van leaves. We set up, run the service, break down and take the kit off. End-of-event clearance is on the crew’s timing. We follow the boat — Dubai Marina, Dubai Harbour, Palm Jumeirah, JBR, and other berths when the vessel is there.',
    image: '/images/yacht-inv-loading.webp',
    imageAlt: 'Catering team loading cold boxes onto a yacht at a Dubai marina. Experience concept shown.',
    groups: [
      {
        heading: 'On the pontoon and onboard',
        items: [
          'Food and equipment transportation',
          'Marina delivery, yacht loading and offloading',
          'Setup, breakdown and equipment collection',
          'Cold-chain management, refrigerated storage, chillers',
          'Ice management',
          'Waste removal and end-of-event clearance',
          'Kitchen prep logistics',
          'Yacht-access, marina and loading coordination',
          'Boarding and final floor-plan coordination',
        ],
      },
    ],
  },
  {
    id: 'yacht-dietary',
    nav: 'Dietary',
    label: 'Dietary',
    h2: 'Dietaries collected before we cook — not announced at the gangway',
    how:
      'Halal is the default kitchen. Vegetarian, vegan, gluten-free, dairy-free and allergy adaptations are written into the menu when they are in the brief. Live stations can run a vegetarian or vegan line. Canapés can be adapted. Corporate days often need labelling and a pre-event dietary collection. Tell us before we write the proposal.',
    image: '/images/vegetarian-catering-dubai-hero.webp',
    imageAlt: 'Vegetarian dishes prepared for a catering service. Experience concept shown.',
    groups: [
      {
        heading: 'What we plan for',
        items: [
          'Vegetarian and vegan',
          'Gluten-free and dairy-free',
          'Allergy adaptation',
          'Custom dietary menus',
          'Vegetarian and vegan live-station options',
          'Gluten-free canapé adaptation',
          'Corporate dietary management and labelling',
          'Pre-event dietary collection',
        ],
      },
    ],
  },
  {
    id: 'yacht-entertainment',
    nav: 'Entertainment',
    label: 'Sound',
    h2: 'DJ and sound when the yacht — and the brief — need it',
    how:
      'We are a culinary and service team first. Optional DJ booking, sound system, audio setup and breakdown, background music and speech support can sit in a full event-management brief where the operator allows it. It is priced separately. If the yacht already has a sound system, we coordinate rather than duplicate.',
    image: '/images/yacht-inv-bar.webp',
    imageAlt: 'Evening yacht deck with bar and service. Experience concept shown.',
    groups: [
      {
        heading: 'Optional production',
        items: [
          'DJ booking',
          'Sound system, audio setup and breakdown',
          'CEO speech audio support',
          'Background music',
          'Event sound coordination',
        ],
      },
    ],
  },
  {
    id: 'yacht-corporate',
    nav: 'Corporate',
    label: 'Corporate yacht days',
    h2: 'Corporate charters, speeches and client entertaining',
    how:
      'The Harbour example was a 113-guest corporate day. That is not a birthday with extra canapés. It needs timed service, dietary management, a pause for a speech, enough waiters to keep 100 people looked after, and a manager who talks to the crew. We also run smaller executive dinners, networking receptions, staff celebrations and spouse-inclusive days. Branded menu signage is available. The food still has to work on a moving deck.',
    image: '/images/yacht-inv-coordination.webp',
    imageAlt: 'Service briefing before a corporate yacht event. Experience concept shown.',
    groups: [
      {
        heading: 'Corporate use',
        items: [
          'Staff celebrations and company parties',
          'Management and executive dinners',
          'Client entertainment and VIP guest catering',
          'Networking and cocktail receptions',
          'Team events',
          'Spouse- and family-inclusive corporate days',
          'Speech coordination',
          'Branded menu signage and corporate menu planning',
        ],
      },
    ],
  },
]
