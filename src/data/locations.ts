export interface LocationData {
  slug: string
  name: string
  title: string
  metaDescription: string
  h1: string
  heroImage: string
  heroSubtitle: string
  intro: string[]
  targetAudience: {
    title: string
    paragraphs: string[]
  }
  serviceInclusions: {
    title: string
    items: string[]
  }
  menuOptions: {
    title: string
    paragraphs: string[]
    cuisines: string[]
  }
  howItWorks: {
    title: string
    steps: { title: string; description: string }[]
  }
  whyChoose: {
    title: string
    paragraphs: string[]
  }
  useCases: {
    title: string
    cases: { title: string; description: string }[]
  }
  logistics: {
    title: string
    paragraphs: string[]
  }
  nearbyLocations: { name: string; slug: string; description: string }[]
  relatedServices: { name: string; path: string }[]
  relatedEvents: { name: string; path: string }[]
  faqs: { q: string; a: string }[]
  uniqueAngle: string
  propertyType: string
  callToAction: {
    title: string
    subtitle: string
    whatsappMessage: string
  }
}

const allLocations: LocationData[] = [
  {
    slug: 'dubai-marina',
    name: 'Dubai Marina',
    title: 'Private Chef Dubai Marina | myCHEF',
    metaDescription:
      'Private Chef Dubai Marina with a vetted myCHEF team. Menus, service and clear-down handled so you stay a guest at your own table.',
    h1: 'Private Chef Dubai Marina',
    heroImage: '/loc-dubai-marina.webp',
    heroSubtitle:
      'A private chef Dubai Marina cooks in your tower kitchen, penthouse or, if you already have the boat, at a marina berth. One night is catering. A chef who comes back is a household plan.',
    intro: [
      'Dubai Marina is towers, concierge desks and boats at the dock. We cook at your address. We do not charter yachts and we do not own a venue on the water.',
      'Catering in Dubai Marina is a single sitting: setup, service, clear-down. A chef at home in Dubai Marina on a standing plan is different. That chef returns, works from a Food Profile, and a household manager handles backup when someone is off.',
      'Private dining in Dubai Marina still needs the same facts: tower, berth or apartment, guest count, and whether this is one night or a weekly rhythm. Party catering in Dubai Marina is quoted as an event. A personal chef in Dubai Marina who comes back is quoted as a household plan. Tell us which one it is.',
    ],
    targetAudience: {
      title: 'Who this kitchen is for in the Marina',
      paragraphs: [
        'Residents in high-rise apartments and penthouses, visitors in serviced residences, and teams who want a dinner in the building after work. Yacht owners and charter guests use us for the food and service only. You hold the boat. We bring the kitchen team.',
        'If you want a woman in the kitchen, say so in the brief. Matching includes who you are comfortable having in the house. We do not advertise a separate product for that. It is a match note.',
      ],
    },
    serviceInclusions: {
      title: 'What arrives with the chef in Dubai Marina',
      items: [
        'A vetted partner chef matched to the brief, not a random slot fill',
        'For a standing plan: a Food Profile and one household manager',
        'For one night: chef, service staff as needed, setup and clear-down',
        'Ingredient sourcing; groceries at receipt cost when we shop',
        'Tower concierge, valet and loading coordination',
        'If you have a boat: marina packing, crew handoff and galley-aware service',
        'Crockery, glassware and service equipment when the quote includes them',
        'Kitchen left as we found it',
      ],
    },
    menuOptions: {
      title: 'Menus that work in a tower or on a deck',
      paragraphs: [
        'The menu follows the kitchen you actually have. A penthouse with a full hob is not a yacht galley. Yacht catering in Dubai Marina is planned around space, power and how food moves on deck. Fine dining in Dubai Marina is a plated sitting in your home if that is the brief, not a restaurant we run.',
        'If the sitting is iftar, we plan the menu and timing around that. It is still a dinner at your address, quoted as catering.',
      ],
      cuisines: [
        'Mediterranean',
        'Japanese',
        'French',
        'Italian',
        'Seafood',
        'Modern European',
        'Middle Eastern',
        'Canapés',
      ],
    },
    howItWorks: {
      title: 'From the tower brief to clear-down',
      steps: [
        {
          title: 'Send the brief',
          description:
            'Date, guest count, tower or berth, and whether this is one night or a chef who comes back.',
        },
        {
          title: 'Confirm access',
          description:
            'We confirm concierge rules, valet, loading windows or the marina handoff with your crew.',
        },
        {
          title: 'Written proposal',
          description:
            'You receive a menu direction, staffing and a written quote before anyone is booked.',
        },
        {
          title: 'Confirm the date',
          description:
            'Once you approve, we lock the chef and the team. The date is not held on a verbal yes.',
        },
        {
          title: 'The chef arrives',
          description:
            'The chef arrives with ingredients and equipment, cleared through concierge or yacht crew as planned.',
        },
        {
          title: 'Service and clear-down',
          description:
            'We cook, serve and restore the kitchen, terrace or galley before we leave.',
        },
      ],
    },
    whyChoose: {
      title: 'The lift booking and the marina handoff are part of the brief',
      paragraphs: [
        'A Marina dinner fails on access more often than on the plate. We plan the concierge slot, the valet drop and, on the water, the packing the crew will accept. The chef cooks. myCHEF matches, briefs and backs them up.',
        'We do not promise a chef within 24 hours. We typically reply within 15 minutes during business hours. The date is confirmed when the brief and the quote are agreed.',
      ],
    },
    useCases: {
      title: 'Nights that actually happen here',
      cases: [
        {
          title: 'Dinner on a boat you already have',
          description:
            'Food, chefs and service at a Marina berth. You rent or own the yacht. We do not.',
        },
        {
          title: 'Penthouse sitting',
          description:
            'Plated dinner in a tower kitchen with concierge and terrace rules written down.',
        },
        {
          title: 'After-work table in the building',
          description:
            'A small team dinner upstairs, timed to lift access, not a restaurant booking.',
        },
        {
          title: 'Standing household chef',
          description:
            'The same chef back each week, with a Food Profile and cover when they are off.',
        },
      ],
    },
    logistics: {
      title: 'Concierge, valet and marina loading',
      paragraphs: [
        'Many Marina towers are valet-only with booked loading. We confirm those windows before the day. For a boat, we pack for a marina handoff and work with your captain or yacht manager. We do not run the charter.',
      ],
    },
    nearbyLocations: [
      {
        name: 'JBR',
        slug: 'jbr',
        description: 'Beachfront apartments on The Walk, with building access as the first constraint.',
      },
      {
        name: 'JLT',
        slug: 'jlt',
        description: 'Lakeside apartments and DMCC offices, planned around cluster loading bays.',
      },
      {
        name: 'Palm Jumeirah',
        slug: 'palm-jumeirah',
        description: 'Frond villas and Trunk apartments, with gate access confirmed before arrival.',
      },
    ],
    relatedServices: [
      { name: 'Private Chef Dubai', path: '/private-chef-dubai' },
      { name: 'Catering Dubai', path: '/catering-dubai' },
      { name: 'Yacht Catering', path: '/yachts' },
      { name: 'Canapé Catering', path: '/canape-catering-dubai' },
    ],
    relatedEvents: [
      { name: 'Yacht Events', path: '/yachts' },
      { name: 'Birthday Parties', path: '/birthday-catering-dubai' },
      { name: 'Private Parties', path: '/private-party-catering-dubai' },
    ],
    faqs: [
      {
        q: 'Do you charter yachts in Dubai Marina?',
        a: 'No. You hold the boat. We handle food, chefs, service and the marina handoff, and we coordinate with your crew. See [yacht catering](/yachts).',
      },
      {
        q: 'Is a standing chef different from one dinner?',
        a: 'Yes. One night is [catering](/catering-dubai). A chef who returns is a [household plan](/private-chef-dubai) with a Food Profile and backup. Do not buy a monthly plan to cover a birthday.',
      },
      {
        q: 'Can you cook in a Marina penthouse?',
        a: 'Yes, if the kitchen and concierge allow it. We confirm lift, valet and loading before the day. The private chef Dubai Marina menu is written around that kitchen, not a generic list.',
      },
      {
        q: 'How far ahead should I write?',
        a: 'Give us the date as soon as you have it. Two weeks is comfortable for a larger sitting. We typically reply within 15 minutes during business hours. We do not promise a chef within 24 hours.',
      },
      {
        q: 'Is cleanup included?',
        a: 'Yes. Clear-down and a kitchen reset are part of the service we quote.',
      },
      {
        q: 'Can you match who is in the house?',
        a: 'Yes. Identity, right-to-work, a cooking check and references sit behind the match. If you want a woman in the kitchen, put that in the brief.',
      },
    ],
    uniqueAngle:
      'Private chef Dubai Marina for tower kitchens and berths you already hold',
    propertyType:
      'High-rise apartments, penthouses and serviced residences. Boats only when you already have the vessel.',
    callToAction: {
      title: 'Send the Marina address',
      subtitle:
        'Tower, berth or apartment, date and guest count. We send a written plan.',
      whatsappMessage:
        "Hi myCHEF Dubai, I'd like to request a quote for catering in Dubai Marina",
    },
  },
  {
    slug: 'downtown-dubai',
    name: 'Downtown Dubai',
    title: 'Private Chef Downtown Dubai | myCHEF',
    metaDescription:
      'Private Chef Downtown Dubai with a vetted myCHEF team. Menus, service and clear-down handled so you stay a guest at your own table.',
    h1: 'Private Chef Downtown Dubai',
    heroImage: '/loc-downtown.webp',
    heroSubtitle:
      'Private chef Downtown Dubai means a team cleared through concierge and a loading bay, then cooking in your apartment or office kitchen. One night is catering. A chef who comes back is a household plan.',
    intro: [
      'Downtown is towers, timed service lifts and streets that jam around the Fountain. We cook at your address. We do not own a restaurant here and we do not book Dubai Opera for you.',
      'Catering in Downtown Dubai is a sitting with a clock: setup, service, out before the next building slot. A chef at home in Downtown Dubai on a standing plan is the same kitchen on a weekly rhythm, with a Food Profile so backup is not a restart.',
      'Private dining in Downtown Dubai is still your table. Party catering in Downtown Dubai is an event quote. A personal chef in Downtown Dubai who returns is a household quote. Office catering in Downtown Dubai is timed to the meeting, not to a buffet line in a ballroom we run.',
    ],
    targetAudience: {
      title: 'Who hosts in these towers',
      paragraphs: [
        'Residents in Downtown apartments and penthouses, offices that need a lunch or a client dinner in the building, and visitors in hotel residences. Guests are often on a tight clock: a show, a meeting, a fountain window.',
      ],
    },
    serviceInclusions: {
      title: 'What is in a Downtown booking',
      items: [
        'A vetted partner chef matched to the brief',
        'Standing plan: Food Profile and one household manager',
        'One night: chef, service staff as needed, setup and clear-down',
        'Loading-bay and concierge coordination',
        'Ingredient sourcing; groceries at receipt cost when we shop',
        'Equipment the kitchen does not already have, when quoted',
        'Service paced to your window, including a post-show dinner if that is the brief',
        'Kitchen and dining area reset',
      ],
    },
    menuOptions: {
      title: 'Menus that survive a service-lift slot',
      paragraphs: [
        'Event catering in Downtown Dubai has to move through a loading bay and still land hot. Fine dining in Downtown Dubai is a plated sitting in your home or boardroom if the kitchen can support it. If the sitting is iftar, we plan the timing with the building rules, not against them.',
      ],
      cuisines: [
        'French',
        'Italian',
        'Modern European',
        'Middle Eastern',
        'Japanese',
        'Steakhouse',
        'Vegetarian-focused',
        'Canapés',
      ],
    },
    howItWorks: {
      title: 'From loading bay to the last plate',
      steps: [
        {
          title: 'Send the brief',
          description:
            'Date, tower, guest count, and whether this is one night or a standing chef.',
        },
        {
          title: 'Confirm access',
          description:
            'We confirm concierge, loading-bay hours and any building supplier rules.',
        },
        {
          title: 'Written proposal',
          description:
            'Menu direction, staffing and a written quote. Nothing starts on a verbal yes.',
        },
        {
          title: 'Confirm the date',
          description:
            'We lock the chef and the access slot once you approve the proposal.',
        },
        {
          title: 'The chef arrives',
          description:
            'The chef arrives in the approved window with ingredients and equipment, cleared through concierge.',
        },
        {
          title: 'Service and clear-down',
          description:
            'We serve to your clock and restore the space before the building\'s next slot.',
        },
      ],
    },
    whyChoose: {
      title: 'Loading-bay hours are written into the plan',
      paragraphs: [
        'Downtown dinners fail when the van cannot enter. We treat the bay booking as part of the brief, the same as headcount. The chef cooks. We match, time and back them up.',
        'We typically reply within 15 minutes during business hours. We do not promise a chef within 24 hours.',
      ],
    },
    useCases: {
      title: 'What people actually book here',
      cases: [
        {
          title: 'Apartment dinner after a show',
          description:
            'A late sitting in your residence, timed to when guests actually walk in the door.',
        },
        {
          title: 'Boardroom lunch',
          description:
            'Food that can be served and cleared inside the meeting window.',
        },
        {
          title: 'Penthouse table',
          description:
            'A private sitting with skyline views, still bound by concierge and lift rules.',
        },
        {
          title: 'Standing household chef',
          description:
            'Weekly cooking in the same Downtown kitchen, with cover from the Food Profile.',
        },
      ],
    },
    logistics: {
      title: 'Service lifts, bays and Fountain traffic',
      paragraphs: [
        'Downtown towers usually need a booked loading bay and a named contact at concierge. We arrive in the approved window and use service lifts where the building requires it. We plan around Fountain and Opera traffic rather than hoping the street is empty.',
      ],
    },
    nearbyLocations: [
      {
        name: 'Business Bay',
        slug: 'business-bay',
        description: 'Canal towers, offices and weekday lunches with the same access discipline.',
      },
      {
        name: 'DIFC',
        slug: 'difc',
        description: 'Boardrooms and residences inside the Gate, timed to the meeting.',
      },
      {
        name: 'Jumeirah',
        slug: 'jumeirah',
        description: 'Beach-road villas and garden tables, a different access problem to Downtown.',
      },
    ],
    relatedServices: [
      { name: 'Private Chef Dubai', path: '/private-chef-dubai' },
      { name: 'Catering Dubai', path: '/catering-dubai' },
      { name: 'Corporate Catering', path: '/corporate' },
      { name: 'Luxury Dining', path: '/luxury-dining-experiences' },
    ],
    relatedEvents: [
      { name: 'Corporate Events', path: '/corporate-event-catering-dubai' },
      { name: 'Wedding Catering', path: '/wedding-catering-dubai' },
      { name: 'Birthday Parties', path: '/birthday-catering-dubai' },
    ],
    faqs: [
      {
        q: 'Can you cook in a Downtown penthouse?',
        a: 'Yes, once concierge and the loading bay are confirmed. We do not skip building rules to "make it work".',
      },
      {
        q: 'Do you run corporate catering for Downtown offices?',
        a: 'Yes, as [catering](/catering-dubai): a written quote, a timed service, and a kitchen or pantry that can actually hold the food.',
      },
      {
        q: 'Is a weekly chef the same as a party?',
        a: 'No. A party is one night. A weekly chef is a [household plan](/private-chef-dubai). We will send you to the right product.',
      },
      {
        q: 'How does pricing work?',
        a: 'Household plans are priced on working time and days. Events are priced on the brief. You see the number in writing before work starts.',
      },
      {
        q: 'Is service staff included?',
        a: 'When the quote says so. A two-person dinner and a forty-person sitting do not use the same team.',
      },
      {
        q: 'How quickly do you reply?',
        a: 'We typically reply within 15 minutes during business hours. That is a reply, not a chef at the door.',
      },
    ],
    uniqueAngle:
      'Private chef Downtown Dubai for penthouses, offices and timed dinners',
    propertyType:
      'High-rise apartments, serviced residences and offices. Not a villa community.',
    callToAction: {
      title: 'Send the Downtown tower',
      subtitle: 'Address, date and guest count. We send a written plan.',
      whatsappMessage:
        "Hi myCHEF Dubai, I'd like to request a quote for catering in Downtown Dubai",
    },
  },
  {
    slug: 'palm-jumeirah',
    name: 'Palm Jumeirah',
    title: 'Private Chef Palm Jumeirah | myCHEF',
    metaDescription:
      'Private Chef Palm Jumeirah with a vetted myCHEF team. Menus, service and clear-down handled so you stay a guest at your own table.',
    h1: 'Private Chef Palm Jumeirah',
    heroImage: '/loc-palm-jumeirah.webp',
    heroSubtitle:
      'A private chef Palm Jumeirah works a Frond villa kitchen or a Trunk apartment, after the gate list is confirmed. One night is catering. A chef who comes back is a household plan.',
    intro: [
      'The Palm is villas on the Fronds and apartments on the Trunk. We cook in those kitchens. We do not own a villa here and we do not run a beach club.',
      'Catering on Palm Jumeirah is one sitting: garden, dining room or, where the house allows it, the beach at the end of the plot. A chef at home on Palm Jumeirah on a standing plan is a villa chef who returns, with a Food Profile so the next chef is not guessing at the door.',
      'Private dining on Palm Jumeirah is your table. A private dinner on Palm Jumeirah for clients is still catering if it is one night. Party catering on Palm Jumeirah is an event quote. A personal chef on Palm Jumeirah, or a villa chef on Palm Jumeirah who comes back each week, is a household quote. A business lunch on Palm Jumeirah is the same kitchen on a weekday clock.',
    ],
    targetAudience: {
      title: 'Who lives with this access problem',
      paragraphs: [
        'Households in Frond villas, residents on the Trunk, and guests staying in residences on the island. Dinners here are often family, often mixed diets, and often behind a gate that wants names in advance.',
      ],
    },
    serviceInclusions: {
      title: 'What a Palm booking actually includes',
      items: [
        'A vetted partner chef matched to the house, not a name from a list',
        'Standing plan: Food Profile, household manager, backup from the record',
        'One night: chef, service staff as needed, setup and clear-down',
        'Nakheel gate and villa access coordination',
        'Beach or garden equipment only where the plot and the quote allow it',
        'Ingredient sourcing; groceries at receipt cost when we shop',
        'Halal sourcing as the default unless you ask otherwise',
        'Kitchen, terrace and service areas reset',
      ],
    },
    menuOptions: {
      title: 'Menus for a villa kitchen, not a brochure',
      paragraphs: [
        'The menu follows the kitchen, the weather and who is at the table. Catering in Jumeirah Dubai is a different page if the house is on the beach road rather than on the Palm. If the sitting is iftar, we plan the menu and the Maghrib timing with you.',
      ],
      cuisines: [
        'French',
        'Italian',
        'Mediterranean',
        'Japanese',
        'Seafood',
        'Steakhouse',
        'Modern European',
        'Middle Eastern',
      ],
    },
    howItWorks: {
      title: 'Gate first, then the kitchen',
      steps: [
        {
          title: 'Send the brief',
          description:
            'Frond or Trunk, date, guest count, and standing chef or one night.',
        },
        {
          title: 'Confirm access',
          description:
            'We confirm Nakheel or building access, parking and whether the sitting is indoors, garden or beach.',
        },
        {
          title: 'Written proposal',
          description:
            'Menu direction, staffing and a written quote before the date is held.',
        },
        {
          title: 'Confirm the date',
          description:
            'We lock the chef and submit guest names for the gate as the house requires.',
        },
        {
          title: 'The chef arrives',
          description:
            'The chef arrives with ingredients and equipment, cleared through the gate as planned.',
        },
        {
          title: 'Service and clear-down',
          description:
            'We serve, then restore the villa kitchen and any outdoor area we used.',
        },
      ],
    },
    whyChoose: {
      title: 'The Frond gate is the first course',
      paragraphs: [
        'If the chef cannot get onto the island, the menu does not matter. We treat gate access, parking and the kitchen layout as part of the job. The chef cooks. We match, brief and cover.',
        'We typically reply within 15 minutes during business hours. We do not promise a chef within 24 hours.',
      ],
    },
    useCases: {
      title: 'How the Palm actually uses a chef',
      cases: [
        {
          title: 'Frond villa dinner',
          description:
            'A seated night in the house, with staff scaled to the table, not to a hotel banquet.',
        },
        {
          title: 'Garden or beach grill',
          description:
            'Outdoor cooking where the plot allows it, with equipment that belongs to the brief.',
        },
        {
          title: 'Weekday client lunch',
          description:
            'A business lunch in the villa, quoted as catering, cleared before the afternoon.',
        },
        {
          title: 'Standing villa chef',
          description:
            'The same chef back each week, with the house rules already in the Food Profile.',
        },
      ],
    },
    logistics: {
      title: 'Island gates, parking and beach setups',
      paragraphs: [
        'Palm entry is controlled. We confirm names, vehicle details and the villa\'s preferred gate before the day. Beach service only where the house and the rules allow it. We bring what the kitchen does not have rather than assuming a hotel store cupboard.',
      ],
    },
    nearbyLocations: [
      {
        name: 'Dubai Marina',
        slug: 'dubai-marina',
        description: 'Tower kitchens and marina berths you already hold, not a venue we own.',
      },
      {
        name: 'JBR',
        slug: 'jbr',
        description: 'Beachfront apartments on The Walk, with building loading as the constraint.',
      },
      {
        name: 'Emirates Hills',
        slug: 'emirates-hills',
        description: 'Gated villas inland, with house rules and a different security desk.',
      },
    ],
    relatedServices: [
      { name: 'Private Chef Dubai', path: '/private-chef-dubai' },
      { name: 'Catering Dubai', path: '/catering-dubai' },
      { name: 'Luxury Dining', path: '/luxury-dining-experiences' },
      { name: 'Villa Dining', path: '/villas-private-residences' },
    ],
    relatedEvents: [
      { name: 'Wedding Catering', path: '/wedding-catering-dubai' },
      { name: 'Birthday Parties', path: '/birthday-catering-dubai' },
      { name: 'Private Parties', path: '/private-party-catering-dubai' },
    ],
    faqs: [
      {
        q: 'Do you cook inside Palm villas?',
        a: 'Yes. Frond villas and Trunk residences, once access is confirmed. We do not own the house.',
      },
      {
        q: 'Can you grill on the beach at the villa?',
        a: 'Where the plot and the house rules allow it. We do not run a public beach service.',
      },
      {
        q: 'Is a weekly villa chef the same as a party?',
        a: 'No. A party is [catering](/catering-dubai). A chef who returns is a [household plan](/private-chef-dubai).',
      },
      {
        q: 'Do you handle the island gate?',
        a: 'We collect the names and vehicle details the house or Nakheel needs, and we arrive as booked. You or the villa office still own the access list.',
      },
      {
        q: 'Are dietary needs planned in?',
        a: 'Yes, including halal as the default. Allergies sit in the brief or the Food Profile, not as a note on the night.',
      },
      {
        q: 'How fast is a reply?',
        a: 'We typically reply within 15 minutes during business hours. That is not a same-day chef guarantee.',
      },
    ],
    uniqueAngle:
      'Private chef Palm Jumeirah for Frond villas and Trunk apartments',
    propertyType:
      'Villas on the Fronds, apartments on the Trunk, and hotel residences on the island.',
    callToAction: {
      title: 'Send the Palm address',
      subtitle: 'Frond or Trunk, date and guest count. We send a written plan.',
      whatsappMessage:
        "Hi myCHEF Dubai, I'd like to request a quote for catering in Palm Jumeirah",
    },
  },
  {
    slug: 'jumeirah',
    name: 'Jumeirah',
    title: 'Private Chef Jumeirah | myCHEF',
    metaDescription:
      'Private Chef Jumeirah with a vetted myCHEF team. Menus, service and clear-down handled so you stay a guest at your own table.',
    h1: 'Private Chef Jumeirah',
    heroImage: '/loc-jumeirah.webp',
    heroSubtitle:
      'Private chef Jumeirah is a villa kitchen on the beach road, with garden tables and parking that has to be thought about. One night is catering. A chef who comes back is a household plan.',
    intro: [
      'Jumeirah is houses, compounds and gardens, not a marina cluster. We cook in those kitchens. We do not own a beach venue and we do not hold a table at a hotel.',
      'Catering in Jumeirah is one sitting in the house or garden. A chef at home in Jumeirah on a standing plan is the weekly rhythm: the same kitchen, a Food Profile, cover when the chef is off.',
      'Private dining in Jumeirah is your dining room. Party catering in Jumeirah is an event quote. A personal chef in Jumeirah who returns is a household quote. If you searched for a private chef near Palm Jumeirah, this page is the beach-road villas; the island has its own page.',
    ],
    targetAudience: {
      title: 'Families and long-stay houses on the coast',
      paragraphs: [
        'Households in villas and compounds, often multi-generational, often with children at the table. Visitors in rented villas book a one-night chef. Residents more often want someone who comes back.',
        'If you want a woman in the kitchen, put it in the brief. That is a match constraint, not a separate brand.',
      ],
    },
    serviceInclusions: {
      title: 'What a Jumeirah villa booking includes',
      items: [
        'A vetted partner chef matched to the house',
        'Standing plan: Food Profile and household manager',
        'One night: chef, service staff as needed, setup and clear-down',
        'Garden, poolside or indoor setup as the plot allows',
        'Ingredient sourcing; groceries at receipt cost when we shop',
        'Family and children\'s plates when the brief asks for them',
        'Halal sourcing as the default unless you ask otherwise',
        'Kitchen and garden reset',
      ],
    },
    menuOptions: {
      title: 'Menus for a garden table and a family kitchen',
      paragraphs: [
        'Sharing plates, grilled fish, mezze and a seated dinner all work here if the kitchen and the weather agree. If the sitting is iftar, we plan the timing with the household, not against school runs and Maghrib.',
      ],
      cuisines: [
        'Mediterranean',
        'Middle Eastern',
        'Seafood',
        'Italian',
        'French',
        'BBQ',
        'Family-style',
        'Vegetarian-focused',
      ],
    },
    howItWorks: {
      title: 'Beach Road first, then the garden',
      steps: [
        {
          title: 'Send the brief',
          description:
            'Villa location, date, guest count, and standing chef or one night.',
        },
        {
          title: 'Confirm access',
          description:
            'We confirm gates, parking and whether service is indoors, garden or poolside.',
        },
        {
          title: 'Written proposal',
          description:
            'Menu direction, staffing and a written quote before the date is held.',
        },
        {
          title: 'Confirm the date',
          description:
            'We lock the chef and the team once you approve.',
        },
        {
          title: 'The chef arrives',
          description:
            'The chef arrives with ingredients and equipment, ready for the villa kitchen or an outdoor setup.',
        },
        {
          title: 'Service and clear-down',
          description:
            'We serve, then restore the kitchen and any garden area we used.',
        },
      ],
    },
    whyChoose: {
      title: 'The kitchen is in the villa, not on Beach Road',
      paragraphs: [
        'Jumeirah service is parking, a garden that may be windy, and a kitchen that was built for a family, not a banquet. We plan those constraints before the shopping list. The chef cooks. We match and back them up.',
        'We typically reply within 15 minutes during business hours. We do not promise a chef within 24 hours.',
      ],
    },
    useCases: {
      title: 'What these houses actually book',
      cases: [
        {
          title: 'Garden dinner',
          description:
            'A seated table outside, with a weather plan if the wind comes up.',
        },
        {
          title: 'Family weekend lunch',
          description:
            'Sharing food, children\'s plates, and a kitchen that is reset before Monday.',
        },
        {
          title: 'Children\'s birthday at home',
          description:
            'One-night catering in the villa, not a restaurant party room.',
        },
        {
          title: 'Standing household chef',
          description:
            'The same chef back each week, with the house\'s timing already written down.',
        },
      ],
    },
    logistics: {
      title: 'Gates, parking and Beach Road traffic',
      paragraphs: [
        'Parking near beachfront villas is often tight. We confirm where the van can stop and how we enter the garden. We plan around Beach Road traffic rather than promising a time we cannot keep.',
      ],
    },
    nearbyLocations: [
      {
        name: 'Downtown Dubai',
        slug: 'downtown-dubai',
        description: 'Tower kitchens and loading bays, a different access problem to Jumeirah.',
      },
      {
        name: 'JBR',
        slug: 'jbr',
        description: 'Beachfront apartments, not villas, with The Walk as the constraint.',
      },
      {
        name: 'Emirates Hills',
        slug: 'emirates-hills',
        description: 'Gated inland villas with a security desk and house rules.',
      },
    ],
    relatedServices: [
      { name: 'Private Chef Dubai', path: '/private-chef-dubai' },
      { name: 'Catering Dubai', path: '/catering-dubai' },
      { name: 'Villa Dining', path: '/villas-private-residences' },
      { name: 'BBQ Catering', path: '/bbq-catering-dubai' },
    ],
    relatedEvents: [
      { name: 'Birthday Parties', path: '/birthday-catering-dubai' },
      { name: 'Wedding Catering', path: '/wedding-catering-dubai' },
      { name: 'Private Parties', path: '/private-party-catering-dubai' },
    ],
    faqs: [
      {
        q: 'Do you cook in Jumeirah villas near the beach?',
        a: 'Yes. We plan parking and access with you or the house security. We do not own the beach.',
      },
      {
        q: 'Can you serve in the garden?',
        a: 'Yes, when the plot allows it. We bring shade, weights and a weather plan rather than hoping for a still evening.',
      },
      {
        q: 'Is a weekly chef the same as a birthday?',
        a: 'No. A birthday is [catering](/catering-dubai). A weekly chef is a [household plan](/private-chef-dubai).',
      },
      {
        q: 'Do you cook for children as well as adults?',
        a: 'Yes, when the brief says so. Children\'s plates are planned, not an afterthought from the adult menu.',
      },
      {
        q: 'Is cleanup included?',
        a: 'Yes. Kitchen and service areas are reset before we leave.',
      },
      {
        q: 'How fast is a reply?',
        a: 'We typically reply within 15 minutes during business hours. We do not promise a chef within 24 hours.',
      },
    ],
    uniqueAngle:
      'Private chef Jumeirah for beach-road villas and garden tables',
    propertyType:
      'Beachfront villas, compounds and low-rise houses. Not a high-rise cluster.',
    callToAction: {
      title: 'Send the Jumeirah villa',
      subtitle: 'Address, date and guest count. We send a written plan.',
      whatsappMessage:
        "Hi myCHEF Dubai, I'd like to request a quote for catering in Jumeirah Dubai",
    },
  },
  {
    slug: 'jbr',
    name: 'JBR',
    title: 'Private Chef JBR | myCHEF',
    metaDescription:
      'Private Chef JBR with a vetted myCHEF team. Menus, service and clear-down handled so you stay a guest at your own table.',
    h1: 'Private Chef JBR',
    heroImage: '/loc-jbr.webp',
    heroSubtitle:
      'Private chef JBR is a beachfront apartment kitchen on The Walk, with building loading and parking as the first constraint. One night is catering. A chef who comes back is a household plan.',
    intro: [
      'JBR is apartments, serviced residences and a busy beach road. We cook in those kitchens. We do not own a beach plot and we do not run a restaurant on The Walk.',
      'Catering in JBR is one sitting in the apartment, or on the beach only where it is permitted. A chef at home in JBR on a standing plan is a weekly cook in the same kitchen, with a Food Profile for backup.',
      'Private dining in JBR is your table with a sea or marina view. Party catering in JBR is an event quote. A personal chef in JBR who returns is a household quote. If the sitting is iftar, we plan the timing around the building and the household, not a buffet hall we do not run.',
    ],
    targetAudience: {
      title: 'Residents, short stays and family tables on The Walk',
      paragraphs: [
        'People who live in JBR apartments, visitors in serviced residences, and families booking a birthday in the building. The kitchen is often compact. The brief has to say so.',
      ],
    },
    serviceInclusions: {
      title: 'What a JBR apartment booking includes',
      items: [
        'A vetted partner chef matched to a compact or full apartment kitchen',
        'Standing plan: Food Profile and household manager',
        'One night: chef, service staff as needed, setup and clear-down',
        'Building access and loading coordination',
        'Beach-safe equipment only where a beach sitting is permitted and quoted',
        'Ingredient sourcing; groceries at receipt cost when we shop',
        'Equipment the apartment kitchen does not have, when quoted',
        'Kitchen reset before we leave',
      ],
    },
    menuOptions: {
      title: 'Menus that fit an apartment kitchen',
      paragraphs: [
        'Light, serviceable food that can be finished in a residential kitchen. Seafood, Mediterranean sharing plates, canapés and a seated dinner all work if the hob and the lift agree.',
      ],
      cuisines: [
        'Mediterranean',
        'Seafood',
        'Japanese',
        'BBQ',
        'Italian',
        'Middle Eastern',
        'Canapés',
        'Modern European',
      ],
    },
    howItWorks: {
      title: 'The Walk is busy. The kitchen still has to work.',
      steps: [
        {
          title: 'Send the brief',
          description:
            'Building, date, guest count, and standing chef or one night.',
        },
        {
          title: 'Confirm access',
          description:
            'We confirm concierge, loading and whether any beach sitting is actually allowed.',
        },
        {
          title: 'Written proposal',
          description:
            'Menu direction, staffing and a written quote before the date is held.',
        },
        {
          title: 'Confirm the date',
          description:
            'We lock the chef and the building slot once you approve.',
        },
        {
          title: 'The chef arrives',
          description:
            'The chef arrives at the approved drop-off with ingredients and equipment.',
        },
        {
          title: 'Service and clear-down',
          description:
            'We serve and restore the apartment. Beach setups, if permitted, are packed out.',
        },
      ],
    },
    whyChoose: {
      title: 'The Walk is the access problem, not the brand story',
      paragraphs: [
        'JBR fails on parking, sand in the lift and a kitchen that is smaller than the guest list. We plan those before we shop. The chef cooks. We match and back them up.',
        'We typically reply within 15 minutes during business hours. We do not promise a chef within 24 hours.',
      ],
    },
    useCases: {
      title: 'What JBR actually books',
      cases: [
        {
          title: 'Apartment birthday',
          description:
            'One-night catering in the residence, scaled to the rooms you have.',
        },
        {
          title: 'Dinner at home for visitors',
          description:
            'A sitting in a short-stay apartment, with equipment brought in if the kitchen is thin.',
        },
        {
          title: 'Sunset canapés on a terrace',
          description:
            'Where the building allows it, not on a public stretch of sand we do not control.',
        },
        {
          title: 'Standing household chef',
          description:
            'Weekly cooking in the same JBR kitchen, with cover from the Food Profile.',
        },
      ],
    },
    logistics: {
      title: 'Loading points, The Walk and beach rules',
      paragraphs: [
        'The Walk is congested and many buildings restrict loading. We use the approved drop-off and we do not leave a van on the beach road. Beach service only where it is permitted. Sand does not go in the lift.',
      ],
    },
    nearbyLocations: [
      {
        name: 'Dubai Marina',
        slug: 'dubai-marina',
        description: 'Tower kitchens and marina berths you already hold.',
      },
      {
        name: 'Bluewaters',
        slug: 'bluewaters-island',
        description: 'Island apartments reached by the bridge, with their own access list.',
      },
      {
        name: 'Jumeirah',
        slug: 'jumeirah',
        description: 'Beach-road villas, a different kitchen and parking problem to JBR.',
      },
    ],
    relatedServices: [
      { name: 'Private Chef Dubai', path: '/private-chef-dubai' },
      { name: 'Catering Dubai', path: '/catering-dubai' },
      { name: 'Canapé Catering', path: '/canape-catering-dubai' },
    ],
    relatedEvents: [
      { name: 'Birthday Parties', path: '/birthday-catering-dubai' },
      { name: 'Yacht Events', path: '/yachts' },
      { name: 'Private Parties', path: '/private-party-catering-dubai' },
    ],
    faqs: [
      {
        q: 'Can you cook on JBR beach?',
        a: 'Only where it is permitted. Most bookings are in the apartment. We do not treat the public beach as our venue.',
      },
      {
        q: 'Do you cook in serviced apartments?',
        a: 'Yes. We bring what the kitchen lacks and we work with building concierge on access.',
      },
      {
        q: 'Is a weekly chef the same as a birthday party?',
        a: 'No. A party is [catering](/catering-dubai). A weekly chef is a [household plan](/private-chef-dubai).',
      },
      {
        q: 'Is cleanup included?',
        a: 'Yes. The apartment kitchen is reset before we leave.',
      },
      {
        q: 'Can you handle a children\'s birthday in the building?',
        a: 'Yes, as one-night catering, with the menu and timing written for the age mix.',
      },
      {
        q: 'How far ahead should I write?',
        a: 'As soon as you have the date. Peak season from November to March fills faster. We typically reply within 15 minutes during business hours. We do not promise a chef within 24 hours.',
      },
    ],
    uniqueAngle:
      'Private chef JBR for beachfront apartments on The Walk',
    propertyType:
      'Apartments, penthouses and serviced residences. Not a villa community.',
    callToAction: {
      title: 'Send the JBR building',
      subtitle: 'Tower, date and guest count. We send a written plan.',
      whatsappMessage:
        "Hi myCHEF Dubai, I'd like to request a quote for catering in JBR Dubai",
    },
  },
  {
    slug: 'business-bay',
    name: 'Business Bay',
    title: 'Private Chef Business Bay | myCHEF',
    metaDescription:
      'Private Chef Business Bay with a vetted myCHEF team. Menus, service and clear-down handled so you stay a guest at your own table.',
    h1: 'Private Chef Business Bay',
    heroImage: '/loc-difc.webp',
    heroSubtitle:
      'Private chef Business Bay is a canal-tower kitchen: offices on a weekday clock, apartments after hours. One night is catering. A chef who comes back is a household plan.',
    intro: [
      'Business Bay mixes Grade A offices and residential towers on the canal. We cook in those kitchens. We do not own a canal venue and we do not run a restaurant on the promenade.',
      'Catering in Business Bay is a sitting with a loading dock and a finish time. A chef at home in Business Bay on a standing plan is weekly cooking in the same apartment, with a Food Profile for backup.',
      'Private dining in Business Bay is your table. Party catering in Business Bay is an event quote. A personal chef in Business Bay who returns is a household quote. Office catering in Business Bay is food that can be served and cleared inside the meeting. A business dinner in Business Bay is catering, quoted in writing. Business lunches in Dubai that happen in these towers follow the same rule: the window is the brief.',
    ],
    targetAudience: {
      title: 'Offices by day, apartments after six',
      paragraphs: [
        'Office managers booking a lunch or a reception, residents in canal-front towers, and teams who want clients fed in the building. If you want a woman in the kitchen, put it in the brief.',
      ],
    },
    serviceInclusions: {
      title: 'What a Business Bay booking includes',
      items: [
        'A vetted partner chef matched to office pantry or apartment kitchen',
        'Standing plan: Food Profile and household manager',
        'One night or one lunch: chef, service staff as needed, setup and clear-down',
        'Loading-dock and tower access coordination',
        'Ingredient sourcing; groceries at receipt cost when we shop',
        'Dietary notes per guest when you send them',
        'Timing aligned to the meeting or the concierge slot',
        'Kitchen or pantry reset',
      ],
    },
    menuOptions: {
      title: 'Menus that survive a meeting window',
      paragraphs: [
        'A working lunch is not a gala. We will say so if the format is wrong for the time you have. Event catering in this district is still your room. If the sitting is iftar, we plan the timing with the tower, not against the lift schedule.',
      ],
      cuisines: [
        'Mediterranean',
        'French',
        'Italian',
        'Modern European',
        'Middle Eastern',
        'Pan-Asian',
        'Indian',
        'Japanese',
      ],
    },
    howItWorks: {
      title: 'Dock time, then the pass',
      steps: [
        {
          title: 'Send the brief',
          description:
            'Tower, date, guest count, office or home, and the finish time if there is one.',
        },
        {
          title: 'Confirm access',
          description:
            'We confirm loading-dock hours, visitor desks and service-lift rules.',
        },
        {
          title: 'Written proposal',
          description:
            'Menu direction, staffing and a written quote, including whether this is catering or a household plan.',
        },
        {
          title: 'Confirm the date',
          description:
            'We lock the chef and the dock slot once you approve.',
        },
        {
          title: 'The chef arrives',
          description:
            'The chef arrives in the approved window. Food may be finished in your kitchen or pantry depending on the brief.',
        },
        {
          title: 'Service and clear-down',
          description:
            'We serve to the clock and leave the space tidy before the next meeting or the next resident.',
        },
      ],
    },
    whyChoose: {
      title: 'The meeting window is the menu constraint',
      paragraphs: [
        'Business Bay food fails when it is still being plated as people stand up. We design the service to the finish time you give us. The chef cooks. We match, time and back them up.',
        'We typically reply within 15 minutes during business hours. We do not promise a chef within 24 hours.',
      ],
    },
    useCases: {
      title: 'What these towers actually book',
      cases: [
        {
          title: 'Boardroom lunch',
          description:
            'Plated or sharing food that can be cleared before the next slot.',
        },
        {
          title: 'Canal-front apartment dinner',
          description:
            'A private sitting in a residential tower, with concierge written into the plan.',
        },
        {
          title: 'After-work reception',
          description:
            'Canapés and drinks in the office, quoted as catering, not as a household chef.',
        },
        {
          title: 'Standing household chef',
          description:
            'Weekly cooking in the same Business Bay kitchen.',
        },
      ],
    },
    logistics: {
      title: 'Loading docks, valet and canal drop-offs',
      paragraphs: [
        'Towers here run on docks and visitor desks. We book the window, use service lifts where required, and do not leave equipment in a lobby. Canal-front rooms still need a legal drop-off, not a van on the promenade.',
      ],
    },
    nearbyLocations: [
      {
        name: 'Downtown Dubai',
        slug: 'downtown-dubai',
        description: 'Penthouses and offices with the same loading-bay discipline, closer to the Fountain.',
      },
      {
        name: 'DIFC',
        slug: 'difc',
        description: 'Gate access and boardroom timing, a tighter security perimeter.',
      },
      {
        name: 'JLT',
        slug: 'jlt',
        description: 'Lakeside clusters with DMCC offices and apartment kitchens.',
      },
    ],
    relatedServices: [
      { name: 'Corporate Catering', path: '/corporate' },
      { name: 'Office Catering', path: '/office-catering-dubai' },
      { name: 'Business Lunch', path: '/business-lunch-catering-dubai' },
      { name: 'Private Chef Dubai', path: '/private-chef-dubai' },
    ],
    relatedEvents: [
      { name: 'Corporate Events', path: '/corporate-event-catering-dubai' },
      { name: 'Private Parties', path: '/private-party-catering-dubai' },
      { name: 'Birthday Parties', path: '/birthday-catering-dubai' },
    ],
    faqs: [
      {
        q: 'Do you cook inside Business Bay office towers?',
        a: 'Yes, once security and the loading dock are confirmed. We use service entrances where the building requires them.',
      },
      {
        q: 'Can lunch finish when the meeting finishes?',
        a: 'If you give us the window, we design to it. We will say no if the menu you want cannot be served in that time.',
      },
      {
        q: 'Is a weekly chef the same as office catering?',
        a: 'No. Office catering is [catering](/catering-dubai). A weekly chef in the apartment is a [household plan](/private-chef-dubai).',
      },
      {
        q: 'Do you invoice companies properly?',
        a: 'Yes. The quote is itemised. An LPO does not create credit terms by itself.',
      },
      {
        q: 'How much notice for an office lunch?',
        a: 'Give us the date as soon as you have it. A few days can work for a simple lunch. Larger sittings need more. We do not promise a chef within 24 hours.',
      },
      {
        q: 'Is cleanup included?',
        a: 'Yes. Pantry, meeting room or apartment kitchen is reset before we leave.',
      },
    ],
    uniqueAngle:
      'Private chef Business Bay for canal towers, offices and apartments',
    propertyType:
      'Office towers, residential high-rises and mixed-use buildings on the canal.',
    callToAction: {
      title: 'Send the Business Bay tower',
      subtitle: 'Office or home, date and guest count. We send a written plan.',
      whatsappMessage:
        "Hi myCHEF Dubai, I'd like to request a quote for catering in Business Bay",
    },
  },
  {
    slug: 'difc',
    name: 'DIFC',
    title: 'Private Chef DIFC | myCHEF',
    metaDescription:
      'Private Chef DIFC with a vetted myCHEF team. Menus, service and clear-down handled so you stay a guest at your own table.',
    h1: 'Private Chef DIFC',
    heroImage: '/loc-difc.webp',
    heroSubtitle:
      'Private chef DIFC is a boardroom or a residence inside the Gate, timed to security and the meeting end. One night is catering. A chef who comes back is a household plan.',
    intro: [
      'DIFC is controlled access, office towers and a small number of residences. We cook in those rooms. We do not own a dining room in Gate Village and we do not take over a restaurant kitchen.',
      'Catering in DIFC is a sitting with a clock and a security desk. A chef at home in DIFC on a standing plan is weekly cooking in a residence such as Index Tower, with a Food Profile for backup.',
      'Private dining in DIFC is your table. Party catering in DIFC is an event quote. A personal chef in DIFC who returns is a household quote. Office catering in DIFC and a business lunch in DIFC are catering products: billed, timed, cleared. Fine dining in DIFC, if you want a plated sitting, is still your room, not ours.',
    ],
    targetAudience: {
      title: 'Firms, family offices and a few residences',
      paragraphs: [
        'Banks, advisers, law firms and family offices who need food in the room without turning the meeting into an event. Residents in DIFC buildings who want a chef at home. Discretion is a working method: small teams, named access, no lobby theatre.',
      ],
    },
    serviceInclusions: {
      title: 'What a DIFC booking includes',
      items: [
        'A vetted partner chef matched to the room and the clock',
        'Standing plan for residences: Food Profile and household manager',
        'One lunch or dinner: chef, service staff as needed, setup and clear-down',
        'Gate Village or tower access coordination',
        'Quiet arrival and a tidy exit before the next meeting',
        'Dietary, halal and allergen notes when you send them',
        'Ingredient sourcing; groceries at receipt cost when we shop',
        'Kitchen or pantry reset',
      ],
    },
    menuOptions: {
      title: 'Menus that can be served and cleared on time',
      paragraphs: [
        'A 60-minute lunch is a constraint, not a slogan. We will cut the menu if the clock cannot hold it. Corporate catering in DIFC is still food plus people in the room, quoted in writing.',
      ],
      cuisines: [
        'French',
        'Italian',
        'Mediterranean',
        'Modern European',
        'Japanese',
        'Middle Eastern',
        'Pan-Asian',
        'Indian',
      ],
    },
    howItWorks: {
      title: 'Security, then the clock, then the plate',
      steps: [
        {
          title: 'Send the brief',
          description:
            'Building, timing, guest profile and whether this is a lunch, a dinner or a standing chef.',
        },
        {
          title: 'Confirm access',
          description:
            'We confirm Gate or tower protocols, loading and the finish time.',
        },
        {
          title: 'Written proposal',
          description:
            'Menu direction, staffing and a written quote aligned to the window you gave us.',
        },
        {
          title: 'Confirm the date',
          description:
            'We lock the chef and liaise with the building for loading and setup.',
        },
        {
          title: 'The chef arrives',
          description:
            'The chef arrives through the approved entrance. Food is finished in your kitchen or pantry as the brief allows.',
        },
        {
          title: 'Service and clear-down',
          description:
            'We serve, then leave the room as we found it, without a second performance in the lobby.',
        },
      ],
    },
    whyChoose: {
      title: 'The lunch has to finish when the meeting does',
      paragraphs: [
        'DIFC food fails when it ignores the Gate, the lift and the calendar. We treat those as ingredients of the brief. The chef cooks. We match, time and back them up.',
        'We typically reply within 15 minutes during business hours. We do not promise a chef within 24 hours.',
      ],
    },
    useCases: {
      title: 'What DIFC actually books',
      cases: [
        {
          title: 'Timed working lunch',
          description:
            'Food that can be served and cleared inside the meeting window you give us.',
        },
        {
          title: 'Boardroom dinner',
          description:
            'A seated sitting for a small table, still bound by building hours.',
        },
        {
          title: 'Firm reception',
          description:
            'Canapés and service in the office, quoted as catering.',
        },
        {
          title: 'Residence chef',
          description:
            'A standing household chef in a DIFC apartment, with cover from the Food Profile.',
        },
      ],
    },
    logistics: {
      title: 'Gate Village access, bays and quiet exits',
      paragraphs: [
        'DIFC access is controlled. We arrange entry with building management, use designated bays and service lifts, and arrive on the meeting clock. We carry what we need so we are not borrowing the floor pantry.',
      ],
    },
    nearbyLocations: [
      {
        name: 'Downtown Dubai',
        slug: 'downtown-dubai',
        description: 'Penthouses and offices with loading-bay timing, a short hop from the Gate.',
      },
      {
        name: 'Business Bay',
        slug: 'business-bay',
        description: 'Canal towers and weekday lunches with dock access as the first constraint.',
      },
    ],
    relatedServices: [
      { name: 'Corporate Catering', path: '/corporate' },
      { name: 'Business Lunch', path: '/business-lunch-catering-dubai' },
      { name: 'Canapé Catering', path: '/canape-catering-dubai' },
      { name: 'Private Chef Dubai', path: '/private-chef-dubai' },
    ],
    relatedEvents: [
      { name: 'Corporate Events', path: '/corporate-event-catering-dubai' },
      { name: 'Private Parties', path: '/private-party-catering-dubai' },
      { name: 'Birthday Parties', path: '/birthday-catering-dubai' },
    ],
    faqs: [
      {
        q: 'Do you cook inside DIFC office towers?',
        a: 'Yes, once security and loading are confirmed. We use service lifts where the building requires them.',
      },
      {
        q: 'Can you serve a 60-minute lunch?',
        a: 'Yes, if the menu fits the window. We will shorten the menu rather than run into the next meeting.',
      },
      {
        q: 'Is the team discreet?',
        a: 'We arrive through the approved entrance, work to the brief, and leave without turning the lobby into a show. Confidentiality is a working method, not a slogan.',
      },
      {
        q: 'Is a weekly chef the same as a client lunch?',
        a: 'No. A client lunch is [catering](/catering-dubai). A weekly chef in a residence is a [household plan](/private-chef-dubai).',
      },
      {
        q: 'Can you work in Gate Village event rooms?',
        a: 'Where the venue allows an external team. We still need their rules in writing. We do not own those rooms.',
      },
      {
        q: 'How fast is a reply?',
        a: 'We typically reply within 15 minutes during business hours. We do not promise a chef within 24 hours.',
      },
    ],
    uniqueAngle:
      'Private chef DIFC for boardrooms and residences inside the Gate',
    propertyType:
      'Office towers in Gate Village and the Gate District, with residences in buildings such as Index Tower.',
    callToAction: {
      title: 'Send the DIFC building',
      subtitle: 'Tower, timing and guest count. We send a written plan.',
      whatsappMessage:
        "Hi myCHEF Dubai, I'd like to request a quote for catering in DIFC",
    },
  },
  {
    slug: 'emirates-hills',
    name: 'Emirates Hills',
    title: 'Private Chef Emirates Hills | myCHEF',
    metaDescription:
      'Private Chef Emirates Hills with a vetted myCHEF team. Menus, service and clear-down handled so you stay a guest at your own table.',
    h1: 'Private Chef Emirates Hills',
    heroImage: '/loc-emirates-hills.webp',
    heroSubtitle:
      'Private chef Emirates Hills is a gated villa kitchen: security passes, house rules, a chef at the door. One night is catering. A chef who comes back is a household plan.',
    intro: [
      'Emirates Hills is villas behind a gate, around a golf course we do not run. We cook in those houses. We do not own a clubhouse and we do not advertise the residents.',
      'Catering in Emirates Hills is one sitting in the dining room, garden or pool terrace. A chef at home in Emirates Hills on a standing plan is a private chef for an Emirates Hills villa who returns, with a Food Profile so backup is not a conversation on the driveway.',
      'Private dining in Emirates Hills is your table. Party catering in Emirates Hills is an event quote. A personal chef in Emirates Hills who comes back is a household quote. Halal sourcing is the default. If you are asking whether food in this community with us is halal, the answer is yes unless you ask otherwise.',
    ],
    targetAudience: {
      title: 'Households that entertain at home on purpose',
      paragraphs: [
        'Families and principals who would rather host in the villa than in a public room. Client dinners, family tables and the odd larger sitting in a garden. Privacy is a process: named vehicles, a small team, no extra bodies "to help the vibe".',
      ],
    },
    serviceInclusions: {
      title: 'What an Emirates Hills villa booking includes',
      items: [
        'A vetted partner chef matched to the house',
        'Standing plan: Food Profile, household manager, backup from the record',
        'One night: chef, service staff as needed, setup and clear-down',
        'Gate-pass and arrival-route coordination',
        'Kitchen assessment so we are not discovering the hob on the night',
        'Ingredient sourcing; groceries at receipt cost when we shop',
        'Halal, allergen and household notes in the brief',
        'Kitchen and dining areas reset',
      ],
    },
    menuOptions: {
      title: 'Menus for a villa kitchen that already exists',
      paragraphs: [
        'The menu follows the guests and the rooms, not a tasting-menu costume. We cook in your kitchen. If a specialist is needed for one meal, that is quoted separately. Healthy cooking, if that is what this house means by it, is defined in the brief, not as a slogan borrowed from another community.',
      ],
      cuisines: [
        'French',
        'Italian',
        'Japanese',
        'Mediterranean',
        'Modern European',
        'Middle Eastern',
        'Indian',
        'Spanish',
      ],
    },
    howItWorks: {
      title: 'Passes, then the house rules, then the stove',
      steps: [
        {
          title: 'Send the brief',
          description:
            'Villa location, date, who is at the table, and standing chef or one night.',
        },
        {
          title: 'Confirm access',
          description:
            'We confirm gate passes, the preferred entrance and any staff rules of the house.',
        },
        {
          title: 'Written proposal',
          description:
            'Menu direction, staffing and a written quote before the date is held.',
        },
        {
          title: 'Confirm the date',
          description:
            'We lock the chef and submit vehicle details as security requires.',
        },
        {
          title: 'The chef arrives',
          description:
            'The chef arrives at the agreed time with ingredients, and cooks in the villa kitchen.',
        },
        {
          title: 'Service and clear-down',
          description:
            'We serve, then restore the kitchen and leave by the same quiet route.',
        },
      ],
    },
    whyChoose: {
      title: 'The house has rules. We work inside them.',
      paragraphs: [
        'Emirates Hills service fails when a team treats the villa like a hotel. We take the gate, the entrance the house prefers, and the way the family wants to be served as part of the job. The chef cooks. We match and cover.',
        'We typically reply within 15 minutes during business hours. We do not promise a chef within 24 hours.',
      ],
    },
    useCases: {
      title: 'What these villas actually book',
      cases: [
        {
          title: 'Client dinner at home',
          description:
            'A seated sitting in the villa, with a small team and a finish that does not linger in the driveway.',
        },
        {
          title: 'Family table',
          description:
            'Multi-generational dining, with diets written into the brief.',
        },
        {
          title: 'Garden sitting',
          description:
            'Outdoor service where the plot allows it, still bound by the house rules.',
        },
        {
          title: 'Standing household chef',
          description:
            'The same chef back each week. Golf-club events are only with the club\'s approval. We do not own the club.',
        },
      ],
    },
    logistics: {
      title: 'Gated entry, named vehicles, quiet exits',
      paragraphs: [
        'Emirates Hills is gated. We arrange passes in advance, arrive at the agreed time and follow the villa\'s preferred route. We bring what we need and we take it away. Privacy is the method, not a claim that the community is closed to everyone else.',
      ],
    },
    nearbyLocations: [
      {
        name: 'Palm Jumeirah',
        slug: 'palm-jumeirah',
        description: 'Frond villas and Trunk apartments, with island gates instead of inland ones.',
      },
      {
        name: 'Dubai Hills',
        slug: 'dubai-hills',
        description: 'Villas, townhouses and apartments with multiple community gates.',
      },
      {
        name: 'Jumeirah',
        slug: 'jumeirah',
        description: 'Beach-road villas and garden tables, without an inland golf-course gate.',
      },
    ],
    relatedServices: [
      { name: 'Private Chef Dubai', path: '/private-chef-dubai' },
      { name: 'Luxury Dining', path: '/luxury-dining-experiences' },
      { name: 'Villa Dining', path: '/villas-private-residences' },
      { name: 'Catering Dubai', path: '/catering-dubai' },
    ],
    relatedEvents: [
      { name: 'Private Parties', path: '/private-party-catering-dubai' },
      { name: 'Wedding Catering', path: '/wedding-catering-dubai' },
      { name: 'Birthday Parties', path: '/birthday-catering-dubai' },
    ],
    faqs: [
      {
        q: 'Can a chef cook in my Emirates Hills villa?',
        a: 'Yes. We cook in your kitchen and leave it as we found it.',
      },
      {
        q: 'Can you place a chef for several days?',
        a: 'Yes, as a short household plan, quoted in writing. Under a month is priced differently to an ongoing plan. See [private chef](/private-chef-dubai).',
      },
      {
        q: 'How do you handle the gate?',
        a: 'We submit names and vehicles as security requires, arrive on the agreed route, and keep the team small.',
      },
      {
        q: 'Is the food halal?',
        a: 'Halal sourcing is the default unless you ask otherwise. Other diets are planned in the brief, not bolted on at the pass.',
      },
      {
        q: 'Do you cater at the golf club?',
        a: 'Only with the club\'s approval. We do not own the club and we do not treat it as our venue.',
      },
      {
        q: 'How fast is a reply?',
        a: 'We typically reply within 15 minutes during business hours. We do not promise a chef within 24 hours.',
      },
    ],
    uniqueAngle:
      'Private chef Emirates Hills for gated villas, not a club we own',
    propertyType:
      'Villas and large houses in a gated community. Not apartments.',
    callToAction: {
      title: 'Send the villa gate details',
      subtitle: 'Address, date and guest count. We send a written plan.',
      whatsappMessage:
        "Hi myCHEF Dubai, I'd like to request a quote for catering in Emirates Hills",
    },
  },
  {
    slug: 'arabian-ranches',
    name: 'Arabian Ranches',
    title: 'Private Chef Arabian Ranches | myCHEF',
    metaDescription:
      'Private Chef Arabian Ranches with a vetted myCHEF team. Menus, service and clear-down handled so you stay a guest at your own table.',
    h1: 'Private Chef Arabian Ranches',
    heroImage: '/loc-emirates-hills.webp',
    heroSubtitle:
      'Private chef Arabian Ranches is a villa kitchen and, often, a garden grill that needs power and a gate pass. One night is catering. A chef who comes back is a household plan.',
    intro: [
      'Arabian Ranches is villa communities with gardens, parks and a family clock. We cook in those houses. We do not run the community club and we do not book the park for you.',
      'Catering in Arabian Ranches is one sitting: garden BBQ, dining room, or a community space only where it is permitted. A chef at home in Arabian Ranches on a standing plan is weekly cooking in the same villa, with a Food Profile for backup.',
      'Private dining in Arabian Ranches is your table. Party catering in Arabian Ranches is an event quote. A personal chef in Arabian Ranches who returns is a household quote. If you want a woman in the kitchen, put it in the brief.',
    ],
    targetAudience: {
      title: 'Families who host in the garden on purpose',
      paragraphs: [
        'Long-stay families, school-run households and people who chose the Ranches for space. Birthdays, weekend grills and the occasional seated dinner. Children at the table are normal here. The brief should say so.',
      ],
    },
    serviceInclusions: {
      title: 'What a Ranches villa booking includes',
      items: [
        'A vetted partner chef, including a grill cook when the brief is a BBQ',
        'Standing plan: Food Profile and household manager',
        'One night: chef, service staff as needed, setup and clear-down',
        'Community gate coordination',
        'Outdoor equipment and surface protection for garden service',
        'Children\'s plates when the brief asks for them',
        'Ingredient sourcing; groceries at receipt cost when we shop',
        'Kitchen and garden reset',
      ],
    },
    menuOptions: {
      title: 'Menus for a garden, a grill and a family table',
      paragraphs: [
        'Sharing food, grills, and a seated dinner all work if the garden power and the guest mix agree. We plan children\'s plates with the adult menu, not after it.',
      ],
      cuisines: [
        'Mediterranean',
        'Middle Eastern',
        'BBQ & Grill',
        'Italian',
        'Indian',
        'International Comfort',
        'Mexican',
        'Pan-Asian',
      ],
    },
    howItWorks: {
      title: 'Gate, garden power, then the grill',
      steps: [
        {
          title: 'Send the brief',
          description:
            'Which Ranches community, date, guest count, and BBQ, buffet or seated dinner.',
        },
        {
          title: 'Confirm access',
          description:
            'We confirm the gate, parking, garden power and whether any park or club rules apply.',
        },
        {
          title: 'Written proposal',
          description:
            'Menu direction, staffing and a written quote before the date is held.',
        },
        {
          title: 'Confirm the date',
          description:
            'We lock the chef and equipment once you approve.',
        },
        {
          title: 'The chef arrives',
          description:
            'The chef arrives at the villa with ingredients and, if quoted, grills and serving tables.',
        },
        {
          title: 'Service and clear-down',
          description:
            'We serve through the event and clear grills, stations and the kitchen before we leave.',
        },
      ],
    },
    whyChoose: {
      title: 'Garden power, children, and a grill that actually starts',
      paragraphs: [
        'A Ranches night fails on an extension lead, a gate list and a menu that ignores bedtimes. We plan those with you. The chef cooks. We match and back them up.',
        'We typically reply within 15 minutes during business hours. We do not promise a chef within 24 hours.',
      ],
    },
    useCases: {
      title: 'What these villas actually book',
      cases: [
        {
          title: 'Villa garden BBQ',
          description:
            'A grill in the garden, with surfaces protected and the kit taken away after.',
        },
        {
          title: 'Children\'s birthday',
          description:
            'One-night catering with timing that fits younger guests.',
        },
        {
          title: 'Family seated dinner',
          description:
            'A dining-room sitting, with diets written into the brief.',
        },
        {
          title: 'Standing household chef',
          description:
            'Weekly cooking in the same villa kitchen.',
        },
      ],
    },
    logistics: {
      title: 'Community gates, driveways and outdoor kit',
      paragraphs: [
        'Each sub-community has its own gate. We arrange visitor access when required, park on the driveway where we can, and bring outdoor-safe equipment. Park or club events only with the relevant permission. We do not treat those spaces as ours.',
      ],
    },
    nearbyLocations: [
      {
        name: 'Dubai Hills',
        slug: 'dubai-hills',
        description: 'Villas, townhouses and apartments with multiple gates and a golf course we do not run.',
      },
      {
        name: 'JVC',
        slug: 'jvc',
        description: 'Family apartments, townhouses and compact kitchens a short drive away.',
      },
      {
        name: 'Emirates Hills',
        slug: 'emirates-hills',
        description: 'Gated inland villas with a stricter security desk and larger kitchens.',
      },
    ],
    relatedServices: [
      { name: 'BBQ Catering', path: '/bbq-catering-dubai' },
      { name: 'Private Chef Dubai', path: '/private-chef-dubai' },
      { name: 'Catering Dubai', path: '/catering-dubai' },
    ],
    relatedEvents: [
      { name: 'Birthday Parties', path: '/birthday-catering-dubai' },
      { name: 'Private Parties', path: '/private-party-catering-dubai' },
      { name: 'Wedding Catering', path: '/wedding-catering-dubai' },
    ],
    faqs: [
      {
        q: 'Can you grill in the villa garden?',
        a: 'Yes. We bring the grill and outdoor kit when the quote includes them, and we protect garden surfaces.',
      },
      {
        q: 'Do you cater community gatherings?',
        a: 'Where the community or club allows an external team. We do not own the park or the clubhouse.',
      },
      {
        q: 'Is a weekly chef the same as a BBQ party?',
        a: 'No. A BBQ party is [catering](/catering-dubai). A weekly chef is a [household plan](/private-chef-dubai).',
      },
      {
        q: 'Do you cook for children?',
        a: 'Yes, when the brief says so. Mild plates and timing are planned with the adult menu.',
      },
      {
        q: 'Is cleanup included?',
        a: 'Yes. Grills, stations and the kitchen are cleared before we leave.',
      },
      {
        q: 'How far ahead should I write?',
        a: 'Weekends fill faster. Give us the date as soon as you have it. We typically reply within 15 minutes during business hours. We do not promise a chef within 24 hours.',
      },
    ],
    uniqueAngle:
      'Private chef Arabian Ranches for villa kitchens and garden grills',
    propertyType:
      'Villa communities across Arabian Ranches 1, 2 and 3, with gardens and community parks.',
    callToAction: {
      title: 'Send the Ranches address',
      subtitle: 'Community, date and guest count. We send a written plan.',
      whatsappMessage:
        "Hi myCHEF Dubai, I'd like to request a quote for catering in Arabian Ranches",
    },
  },
  {
    slug: 'dubai-hills',
    name: 'Dubai Hills',
    title: 'Private Chef Dubai Hills | myCHEF',
    metaDescription:
      'Private Chef Dubai Hills with a vetted myCHEF team. Menus, service and clear-down handled so you stay a guest at your own table.',
    h1: 'Private Chef Dubai Hills',
    heroImage: '/loc-emirates-hills.webp',
    heroSubtitle:
      'Private chef Dubai Hills is a villa, townhouse or apartment kitchen, and the access changes with the cluster. One night is catering. A chef who comes back is a household plan.',
    intro: [
      'Dubai Hills Estate mixes villas, townhouses and apartment towers around a golf course and a park we do not run. We cook in those kitchens. We do not own the clubhouse.',
      'Catering in Dubai Hills is one sitting in a garden, on a terrace or in a dining room. A chef at home in Dubai Hills on a standing plan is weekly cooking in the same kitchen, with a Food Profile for backup.',
      'Private dining in Dubai Hills is your table. Party catering in Dubai Hills is an event quote. A personal chef in Dubai Hills who returns is a household quote. A villa here still needs a working kitchen and a gate that opens. A business lunch in Dubai Hills is catering on a weekday clock, not a household plan.',
    ],
    targetAudience: {
      title: 'Families who moved here for space, and still host at home',
      paragraphs: [
        'Households in Sidra, Maple and the other villa clusters, townhouses, and apartments in buildings such as Park Ridge. Birthdays, brunches and the occasional golf-day lunch, the last only with the club\'s approval.',
      ],
    },
    serviceInclusions: {
      title: 'What a Dubai Hills booking includes',
      items: [
        'A vetted partner chef matched to villa, townhouse or apartment kitchen',
        'Standing plan: Food Profile and household manager',
        'One night: chef, service staff as needed, setup and clear-down',
        'The right community gate and parking plan',
        'Garden or terrace equipment when quoted',
        'Children\'s plates when the brief asks for them',
        'Ingredient sourcing; groceries at receipt cost when we shop',
        'Kitchen and outdoor areas reset',
      ],
    },
    menuOptions: {
      title: 'Menus for a garden, a terrace or a tower kitchen',
      paragraphs: [
        'The property type decides the format. A villa garden can hold a grill. An apartment terrace cannot pretend to be one. If the sitting is iftar, we plan the timing with the household and the gate hours.',
      ],
      cuisines: [
        'Mediterranean',
        'Middle Eastern',
        'Italian',
        'French',
        'BBQ & Grill',
        'International',
        'Indian',
        'Modern European',
      ],
    },
    howItWorks: {
      title: 'Which gate, then which kitchen',
      steps: [
        {
          title: 'Send the brief',
          description:
            'Cluster or building, date, guest count, and standing chef or one night.',
        },
        {
          title: 'Confirm access',
          description:
            'We confirm the gate, parking and whether any club or park permission is required.',
        },
        {
          title: 'Written proposal',
          description:
            'Menu direction, staffing and a written quote before the date is held.',
        },
        {
          title: 'Confirm the date',
          description:
            'We lock the chef and submit visitor details as the community requires.',
        },
        {
          title: 'The chef arrives',
          description:
            'The chef arrives at the villa, townhouse or apartment with ingredients and equipment.',
        },
        {
          title: 'Service and clear-down',
          description:
            'We serve and restore the kitchen and any garden or terrace we used.',
        },
      ],
    },
    whyChoose: {
      title: 'Villa, townhouse or apartment: the access changes the plan',
      paragraphs: [
        'Dubai Hills is not one address type. A Sidra driveway is not a Park Ridge loading bay. We ask which it is before we write a menu. The chef cooks. We match and back them up.',
        'We typically reply within 15 minutes during business hours. We do not promise a chef within 24 hours.',
      ],
    },
    useCases: {
      title: 'What Dubai Hills actually books',
      cases: [
        {
          title: 'Villa garden birthday',
          description:
            'One-night catering in the garden, with children\'s timing when needed.',
        },
        {
          title: 'Golf-day lunch',
          description:
            'Only with the club\'s approval, or at a private house nearby. We do not own the club.',
        },
        {
          title: 'Weekend brunch at home',
          description:
            'A terrace or garden sitting for family, quoted as catering if it is one morning.',
        },
        {
          title: 'Standing household chef',
          description:
            'Weekly cooking in the same Hills kitchen, villa or apartment.',
        },
      ],
    },
    logistics: {
      title: 'Multiple gates, driveways and tower loading',
      paragraphs: [
        'We need the cluster name, not only "Dubai Hills". Visitor parking, villa driveways and apartment loading are different jobs. Club and park venues are reached through their own drop-offs, and only with permission.',
      ],
    },
    nearbyLocations: [
      {
        name: 'Emirates Hills',
        slug: 'emirates-hills',
        description: 'Gated villas inland, with a single community security pattern rather than mixed towers.',
      },
      {
        name: 'Arabian Ranches',
        slug: 'arabian-ranches',
        description: 'Villa gardens and grills, with community gates of their own.',
      },
      {
        name: 'Al Barsha',
        slug: 'al-barsha',
        description: 'A mixed stock of villas, apartments and hotel residences toward Sheikh Zayed Road.',
      },
    ],
    relatedServices: [
      { name: 'Villa Dining', path: '/villas-private-residences' },
      { name: 'BBQ Catering', path: '/bbq-catering-dubai' },
      { name: 'Private Chef Dubai', path: '/private-chef-dubai' },
    ],
    relatedEvents: [
      { name: 'Birthday Parties', path: '/birthday-catering-dubai' },
      { name: 'Private Parties', path: '/private-party-catering-dubai' },
      { name: 'Wedding Catering', path: '/wedding-catering-dubai' },
    ],
    faqs: [
      {
        q: 'Do you cook at Dubai Hills Golf Club?',
        a: 'Only with the club\'s approval. We do not own the club. Many golf-day tables are simply hosted at a nearby villa.',
      },
      {
        q: 'Can you serve villa gardens in Sidra or Maple?',
        a: 'Yes. We need the cluster and the gate details, not a pin that says Dubai Hills.',
      },
      {
        q: 'Do you cook in apartments as well as villas?',
        a: 'Yes. The kitchen and the loading bay change the plan. We will ask which you have.',
      },
      {
        q: 'Is a weekly chef the same as a garden party?',
        a: 'No. A party is [catering](/catering-dubai). A weekly chef is a [household plan](/private-chef-dubai).',
      },
      {
        q: 'Do you cook for children?',
        a: 'Yes, when the brief says so.',
      },
      {
        q: 'How fast is a reply?',
        a: 'We typically reply within 15 minutes during business hours. We do not promise a chef within 24 hours.',
      },
    ],
    uniqueAngle:
      'Private chef Dubai Hills for villas, townhouses and apartment towers',
    propertyType:
      'Villas, townhouses and apartments across clusters such as Sidra, Maple, Golf Place and Park Ridge.',
    callToAction: {
      title: 'Send the Hills cluster',
      subtitle: 'Villa, townhouse or apartment, date and guest count. We send a written plan.',
      whatsappMessage:
        "Hi myCHEF Dubai, I'd like to request a quote for catering in Dubai Hills",
    },
  },
  {
    slug: 'jvc',
    name: 'JVC',
    title: 'Private Chef JVC | myCHEF',
    metaDescription:
      'Private Chef JVC with a vetted myCHEF team. Menus, service and clear-down handled so you stay a guest at your own table.',
    h1: 'Private Chef JVC',
    heroImage: '/loc-dubai-marina.webp',
    heroSubtitle:
      'Private chef JVC is a family apartment, townhouse or villa kitchen, often compact, behind a community gate. One night is catering. A chef who comes back is a household plan.',
    intro: [
      'Jumeirah Village Circle is apartments, townhouses and villas around parks we do not run. We cook in those kitchens. We do not own a community hall.',
      'Catering in JVC is one sitting at home, or in a park only where it is permitted. A chef at home in JVC on a standing plan is weekly cooking in the same kitchen, with a Food Profile for backup.',
      'Private dining in JVC is your table. Party catering in JVC is an event quote. A personal chef in JVC who returns is a household quote. A compact kitchen is still a working kitchen if the brief is honest about hob, fridge and lift.',
    ],
    targetAudience: {
      title: 'Young families and houses that actually cook at home',
      paragraphs: [
        'Households who moved to JVC for space and a park downstairs. Birthdays, baby gatherings and weekend dinners. Short-stay apartments book a one-night chef. Residents more often want someone who comes back.',
      ],
    },
    serviceInclusions: {
      title: 'What a JVC home booking includes',
      items: [
        'A vetted partner chef who can work a compact kitchen',
        'Standing plan: Food Profile and household manager',
        'One night: chef, service staff as needed, setup and clear-down',
        'Portable equipment when the apartment kitchen is thin',
        'Community gate coordination',
        'Children\'s plates when the brief asks for them',
        'Ingredient sourcing; groceries at receipt cost when we shop',
        'Kitchen reset',
      ],
    },
    menuOptions: {
      title: 'Menus that fit the rooms you have',
      paragraphs: [
        'Family tables, a grill where the plot allows it, and seated dinners in villas with a full kitchen. We scale the menu to the guest list instead of forcing a banquet into a two-bed apartment.',
      ],
      cuisines: [
        'Arabic & Levantine',
        'Indian & Pakistani',
        'Italian',
        'Mediterranean',
        'BBQ & Grill',
        'International Comfort Food',
        'Asian Fusion',
        'Dessert & Canapé Stations',
      ],
    },
    howItWorks: {
      title: 'Cluster gate, then the size of the kitchen',
      steps: [
        {
          title: 'Send the brief',
          description:
            'Apartment, townhouse or villa, date, guest count, and standing chef or one night.',
        },
        {
          title: 'Confirm access',
          description:
            'We confirm the gate, parking and what the kitchen can actually hold.',
        },
        {
          title: 'Written proposal',
          description:
            'Menu direction, staffing and a written quote. We will say if the rooms are too small for the guest list.',
        },
        {
          title: 'Confirm the date',
          description:
            'We lock the chef and the equipment once you approve.',
        },
        {
          title: 'The chef arrives',
          description:
            'The chef arrives with ingredients and the kit the kitchen does not have.',
        },
        {
          title: 'Service and clear-down',
          description:
            'We serve and restore the JVC kitchen before we leave.',
        },
      ],
    },
    whyChoose: {
      title: 'A compact kitchen is still a working kitchen',
      paragraphs: [
        'JVC bookings fail when the guest list ignores the hob. We ask about the kitchen before we write a menu. The chef cooks. We match and back them up.',
        'We typically reply within 15 minutes during business hours. We do not promise a chef within 24 hours.',
      ],
    },
    useCases: {
      title: 'What JVC actually books',
      cases: [
        {
          title: 'Children\'s birthday at home',
          description:
            'One-night catering scaled to an apartment or townhouse, not a hotel ballroom.',
        },
        {
          title: 'Family weekend dinner',
          description:
            'A seated table in your dining room, with diets written down.',
        },
        {
          title: 'Park gathering',
          description:
            'Only where the community allows it. We do not treat the park as our venue.',
        },
        {
          title: 'Standing household chef',
          description:
            'Weekly cooking in the same JVC kitchen.',
        },
      ],
    },
    logistics: {
      title: 'Cluster parking and compact kitchens',
      paragraphs: [
        'Some JVC clusters need a gate pass. We ask for that in the brief. For larger sittings we need a place to unload near the entrance. If the kitchen is small, we bring portable kit rather than discovering that on the night.',
      ],
    },
    nearbyLocations: [
      {
        name: 'JLT',
        slug: 'jlt',
        description: 'Lakeside offices and apartments, a different loading-bay problem to JVC.',
      },
      {
        name: 'Al Barsha',
        slug: 'al-barsha',
        description: 'Villas, apartments and hotel residences toward Mall of the Emirates.',
      },
      {
        name: 'Dubai Hills',
        slug: 'dubai-hills',
        description: 'Villas, townhouses and apartment towers with multiple community gates.',
      },
    ],
    relatedServices: [
      { name: 'Private Chef Dubai', path: '/private-chef-dubai' },
      { name: 'Catering Dubai', path: '/catering-dubai' },
      { name: 'Birthday Catering', path: '/birthday-catering-dubai' },
    ],
    relatedEvents: [
      { name: 'Birthday Parties', path: '/birthday-catering-dubai' },
      { name: 'Private Parties', path: '/private-party-catering-dubai' },
    ],
    faqs: [
      {
        q: 'Can you cook a birthday in a JVC apartment?',
        a: 'Yes, if the kitchen and the guest list fit. We will say so if they do not.',
      },
      {
        q: 'Can you cook in a JVC park?',
        a: 'Only where it is permitted. Most bookings are in the home.',
      },
      {
        q: 'Is there a minimum guest count?',
        a: 'No fixed minimum. The kitchen size and the format decide what is sensible.',
      },
      {
        q: 'Is a weekly chef the same as a party?',
        a: 'No. A party is [catering](/catering-dubai). A weekly chef is a [household plan](/private-chef-dubai).',
      },
      {
        q: 'Is cleanup included?',
        a: 'Yes. The kitchen and dining area are reset before we leave.',
      },
      {
        q: 'How far ahead should I write?',
        a: 'Give us the date as soon as you have it. Weekends fill faster. We typically reply within 15 minutes during business hours. We do not promise a chef within 24 hours.',
      },
    ],
    uniqueAngle:
      'Private chef JVC for family apartments, townhouses and villas',
    propertyType:
      'Apartments, townhouses and villas across landscaped community clusters.',
    callToAction: {
      title: 'Send the JVC cluster',
      subtitle: 'Apartment, townhouse or villa, date and guest count. We send a written plan.',
      whatsappMessage:
        "Hi myCHEF Dubai, I'd like to request a quote for catering in JVC",
    },
  },
  {
    slug: 'jlt',
    name: 'JLT',
    title: 'Private Chef JLT | myCHEF',
    metaDescription:
      'Private Chef JLT with a vetted myCHEF team. Menus, service and clear-down handled so you stay a guest at your own table.',
    h1: 'Private Chef JLT',
    heroImage: '/loc-dubai-marina.webp',
    heroSubtitle:
      'Private chef JLT is a lakeside apartment or a DMCC office, planned around cluster loading bays and lift bookings. One night is catering. A chef who comes back is a household plan.',
    intro: [
      'Jumeirah Lakes Towers is mixed-use clusters: offices, apartments and hotel residences around the lakes. We cook in those kitchens. We do not own a lakeside venue and we do not run JLT Park.',
      'Catering in JLT is a sitting with a loading bay and a finish time. A chef at home in JLT on a standing plan is weekly cooking in the same apartment, with a Food Profile for backup.',
      'Private dining in JLT is your table. Party catering in JLT is an event quote. A personal chef in JLT who returns is a household quote. Office catering in JLT and a business lunch in JLT are catering products, timed to the meeting. If the sitting is iftar, we plan it around the tower clock, not a hall we do not run.',
    ],
    targetAudience: {
      title: 'DMCC offices by day, lakeside apartments after work',
      paragraphs: [
        'Companies in the free-zone towers booking lunches and team sittings, and residents hosting in cluster apartments. Short-stay hotel apartments book a one-night chef. The common constraint is access, not appetite.',
      ],
    },
    serviceInclusions: {
      title: 'What a JLT tower booking includes',
      items: [
        'A vetted partner chef matched to office pantry or apartment kitchen',
        'Standing plan: Food Profile and household manager',
        'One night or one lunch: chef, service staff as needed, setup and clear-down',
        'Cluster security and loading-bay coordination',
        'Portable kit for compact apartment kitchens',
        'Timing for a 60- to 90-minute office window when that is the brief',
        'Ingredient sourcing; groceries at receipt cost when we shop',
        'Kitchen or pantry reset',
      ],
    },
    menuOptions: {
      title: 'Menus for a meeting room or a lakeside kitchen',
      paragraphs: [
        'An office lunch is plated or sharing food that can be cleared on time. A home sitting can be longer. We will not write a banquet for a kitchen that cannot hold it.',
      ],
      cuisines: [
        'Mediterranean',
        'Middle Eastern',
        'Italian',
        'Asian Fusion',
        'French Bistro',
        'Indian',
        'Corporate Lunch Sets',
        'Canapés & Finger Food',
      ],
    },
    howItWorks: {
      title: 'Cluster, bay, lift, then the stove',
      steps: [
        {
          title: 'Send the brief',
          description:
            'Cluster and tower, office or home, date, guest count, and the finish time if there is one.',
        },
        {
          title: 'Confirm access',
          description:
            'We confirm security, loading-bay hours and service-lift rules.',
        },
        {
          title: 'Written proposal',
          description:
            'Menu direction, staffing and a written quote. Catering or household plan, named as such.',
        },
        {
          title: 'Confirm the date',
          description:
            'We lock the chef and the bay slot once you approve.',
        },
        {
          title: 'The chef arrives',
          description:
            'The chef arrives with ingredients and equipment, using the approved entrance.',
        },
        {
          title: 'Service and clear-down',
          description:
            'We serve on schedule and leave before the next meeting or the next resident.',
        },
      ],
    },
    whyChoose: {
      title: 'Lakeside towers run on loading bays and lift slots',
      paragraphs: [
        'JLT food fails when the van cannot enter the cluster. We treat the bay and the lift as part of the brief. The chef cooks. We match, time and back them up.',
        'We typically reply within 15 minutes during business hours. We do not promise a chef within 24 hours.',
      ],
    },
    useCases: {
      title: 'What JLT actually books',
      cases: [
        {
          title: 'DMCC office lunch',
          description:
            'Timed food for a boardroom or meeting room, quoted as catering.',
        },
        {
          title: 'Apartment dinner',
          description:
            'A private sitting in a lakeside residence, with concierge written in.',
        },
        {
          title: 'Team celebration in the tower',
          description:
            'One-night catering in the office, cleared before the building\'s next slot.',
        },
        {
          title: 'Standing household chef',
          description:
            'Weekly cooking in the same JLT kitchen.',
        },
      ],
    },
    logistics: {
      title: 'Cluster security, bays and lake-edge drop-offs',
      paragraphs: [
        'JLT towers need a named cluster, a security plan and a loading bay. We ask for a building contact. Park events only where permitted. We do not treat the lakeside as our terrace.',
      ],
    },
    nearbyLocations: [
      {
        name: 'Dubai Marina',
        slug: 'dubai-marina',
        description: 'Tower kitchens and marina berths you already hold.',
      },
      {
        name: 'JBR',
        slug: 'jbr',
        description: 'Beachfront apartments on The Walk, with a different loading problem.',
      },
      {
        name: 'JVC',
        slug: 'jvc',
        description: 'Family apartments and townhouses, compact kitchens, community gates.',
      },
      {
        name: 'Business Bay',
        slug: 'business-bay',
        description: 'Canal towers and weekday lunches with dock access as the first constraint.',
      },
    ],
    relatedServices: [
      { name: 'Private Chef Dubai', path: '/private-chef-dubai' },
      { name: 'Corporate Catering', path: '/corporate' },
      { name: 'Business Lunch', path: '/business-lunch-catering-dubai' },
      { name: 'Canapé Catering', path: '/canape-catering-dubai' },
    ],
    relatedEvents: [
      { name: 'Corporate Events', path: '/corporate-event-catering-dubai' },
      { name: 'Private Parties', path: '/private-party-catering-dubai' },
    ],
    faqs: [
      {
        q: 'Do you cook office lunches in JLT towers?',
        a: 'Yes. We plan around loading bays and a 60- to 90-minute window when that is the brief. See [catering](/catering-dubai).',
      },
      {
        q: 'Can you cook in a small JLT apartment kitchen?',
        a: 'Yes. We bring portable kit and we will say if the guest list is too large for the rooms.',
      },
      {
        q: 'Do you cook in JLT Park?',
        a: 'Only where it is permitted. Most bookings are in the tower.',
      },
      {
        q: 'Is a weekly chef the same as a team lunch?',
        a: 'No. A team lunch is catering. A weekly chef is a [household plan](/private-chef-dubai).',
      },
      {
        q: 'Can you handle mixed diets in an office?',
        a: 'Yes, when you send the list. Halal sourcing is the default unless you ask otherwise.',
      },
      {
        q: 'How fast is a reply?',
        a: 'We typically reply within 15 minutes during business hours. We do not promise a chef within 24 hours.',
      },
    ],
    uniqueAngle:
      'Private chef JLT for lakeside apartments and DMCC offices',
    propertyType:
      'Mixed-use cluster towers: apartments, offices and hotel residences around the lakes.',
    callToAction: {
      title: 'Send the JLT cluster and tower',
      subtitle: 'Office or home, date and guest count. We send a written plan.',
      whatsappMessage:
        "Hi myCHEF Dubai, I'd like to request a quote for catering in JLT",
    },
  },
  {
    slug: 'bluewaters-island',
    name: 'Bluewaters',
    title: 'Private Chef Bluewaters Island | myCHEF',
    metaDescription:
      'Private Chef Bluewaters Island with a vetted myCHEF team. Menus, service and clear-down handled so you stay a guest at your own table.',
    h1: 'Private Chef Bluewaters Island',
    heroImage: '/loc-jbr.webp',
    heroSubtitle:
      'Private chef Bluewaters Island is an apartment kitchen reached by the bridge, often a serviced residence with a thin hob. One night is catering. A chef who comes back is a household plan.',
    intro: [
      'Bluewaters is an island of apartments and serviced residences. We cook in those kitchens. We do not own a restaurant on the island and we do not run the attractions.',
      'Catering on Bluewaters Island is one sitting in the apartment. A chef at home on Bluewaters Island on a standing plan is weekly cooking in the same kitchen, with a Food Profile for backup.',
      'Private dining on Bluewaters Island is your table. Party catering on Bluewaters Island is an event quote. A personal chef on Bluewaters Island who returns is a household quote. Catering on Bluewaters in Dubai still starts with bridge access and a building that will let the team in.',
    ],
    targetAudience: {
      title: 'Residents and short stays who would rather eat in',
      paragraphs: [
        'People who live on the island and visitors in holiday homes who want a chef in the apartment rather than another reservation. Kitchens are often compact. The brief has to say so. If you want a woman in the kitchen, put it in the brief.',
      ],
    },
    serviceInclusions: {
      title: 'What a Bluewaters apartment booking includes',
      items: [
        'A vetted partner chef who can work a serviced-apartment kitchen',
        'Standing plan: Food Profile and household manager',
        'One night: chef, service staff as needed, setup and clear-down',
        'Bridge and building access coordination',
        'Portable equipment when the kitchen is thin',
        'Timing that fits a short stay, not a hotel banquet',
        'Ingredient sourcing; groceries at receipt cost when we shop',
        'Kitchen reset',
      ],
    },
    menuOptions: {
      title: 'Menus for a waterfront apartment kitchen',
      paragraphs: [
        'Sharing plates, seafood, a seated dinner for a small table. We design to the hob you have. We do not stage a show kitchen we cannot support.',
      ],
      cuisines: [
        'Mediterranean',
        'Seafood & Grill',
        'Italian',
        'Modern European',
        'Middle Eastern',
        'Asian Fusion',
        'French',
        'Celebration Tasting Menus',
      ],
    },
    howItWorks: {
      title: 'Bridge access is booked like the menu',
      steps: [
        {
          title: 'Send the brief',
          description:
            'Building, date, guest count, length of stay, and standing chef or one night.',
        },
        {
          title: 'Confirm access',
          description:
            'We confirm island entry, parking or loading, and what the apartment kitchen can hold.',
        },
        {
          title: 'Written proposal',
          description:
            'Menu direction, staffing and a written quote before the date is held.',
        },
        {
          title: 'Confirm the date',
          description:
            'We lock the chef once you approve. Short-stay dates still need a written yes.',
        },
        {
          title: 'The chef arrives',
          description:
            'The chef arrives with ingredients and equipment, self-sufficient for a thin kitchen.',
        },
        {
          title: 'Service and clear-down',
          description:
            'We serve and leave the apartment as we found it.',
        },
      ],
    },
    whyChoose: {
      title: 'The island is an access list, not a backdrop',
      paragraphs: [
        'Bluewaters fails when the team cannot get across the bridge or the kitchen cannot hold the menu. We plan both. The chef cooks. We match and back them up.',
        'We typically reply within 15 minutes during business hours. We do not promise a chef within 24 hours.',
      ],
    },
    useCases: {
      title: 'What Bluewaters actually books',
      cases: [
        {
          title: 'Holiday-home dinner',
          description:
            'A sitting in a short-stay apartment, with kit brought in.',
        },
        {
          title: 'Resident table',
          description:
            'A small dinner at home for people who live on the island.',
        },
        {
          title: 'Birthday in the apartment',
          description:
            'One-night catering scaled to the rooms, not a public venue.',
        },
        {
          title: 'Standing household chef',
          description:
            'Weekly cooking for residents who want the same chef back.',
        },
      ],
    },
    logistics: {
      title: 'Bridge, loading route and thin kitchens',
      paragraphs: [
        'Island access is controlled. We time arrival with you or the concierge and confirm parking or loading. Most serviced apartments need extra kit. We bring it rather than assuming a villa hob.',
      ],
    },
    nearbyLocations: [
      {
        name: 'JBR',
        slug: 'jbr',
        description: 'Beachfront apartments on The Walk, with building loading as the first constraint.',
      },
      {
        name: 'Dubai Marina',
        slug: 'dubai-marina',
        description: 'Tower kitchens and marina berths you already hold.',
      },
    ],
    relatedServices: [
      { name: 'Private Chef Dubai', path: '/private-chef-dubai' },
      { name: 'Luxury Dining', path: '/luxury-dining-experiences' },
      { name: 'Catering Dubai', path: '/catering-dubai' },
      { name: 'Birthday Catering', path: '/birthday-catering-dubai' },
    ],
    relatedEvents: [
      { name: 'Birthday Parties', path: '/birthday-catering-dubai' },
      { name: 'Private Parties', path: '/private-party-catering-dubai' },
    ],
    faqs: [
      {
        q: 'Can you cook in a Bluewaters serviced apartment?',
        a: 'Yes. We bring portable equipment when the kitchen is compact.',
      },
      {
        q: 'Do you cook for visitors on a short stay?',
        a: 'Yes, as one-night catering. Tell us the building and the date of the stay.',
      },
      {
        q: 'Do you own a venue on the island?',
        a: 'No. We cook in your apartment. You hold the residence.',
      },
      {
        q: 'Is a weekly chef the same as a holiday dinner?',
        a: 'No. A holiday dinner is [catering](/catering-dubai). A weekly chef is a [household plan](/private-chef-dubai).',
      },
      {
        q: 'How do you handle island access?',
        a: 'We coordinate with you or the concierge for entry, parking and loading.',
      },
      {
        q: 'How fast is a reply?',
        a: 'We typically reply within 15 minutes during business hours. We do not promise a chef within 24 hours.',
      },
    ],
    uniqueAngle:
      'Private chef Bluewaters Island for apartments you reach by the bridge',
    propertyType:
      'Apartments and serviced residences on the island. Not villas.',
    callToAction: {
      title: 'Send the Bluewaters building',
      subtitle: 'Residence, date and guest count. We send a written plan.',
      whatsappMessage:
        "Hi myCHEF Dubai, I'd like to request a quote for catering in Bluewaters Island",
    },
  },
  {
    slug: 'umm-suqeim',
    name: 'Umm Suqeim',
    title: 'Private Chef Umm Suqeim | myCHEF',
    metaDescription:
      'Private Chef Umm Suqeim with a vetted myCHEF team. Menus, service and clear-down handled so you stay a guest at your own table.',
    h1: 'Private Chef Umm Suqeim',
    heroImage: '/loc-jumeirah.webp',
    heroSubtitle:
      'Private chef Umm Suqeim is a coastal villa kitchen: garden, pool, parking, and a wind plan. One night is catering. A chef who comes back is a household plan.',
    intro: [
      'Umm Suqeim is established beach villas and compounds, near the coast and the hotels we do not run. We cook in those houses. We do not own a beach plot.',
      'Catering in Umm Suqeim is one sitting in the villa, garden or pool terrace. A chef at home in Umm Suqeim on a standing plan is weekly cooking in the same kitchen, with a Food Profile for backup.',
      'Private dining in Umm Suqeim is your table. Party catering in Umm Suqeim is an event quote. A personal chef in Umm Suqeim who returns is a household quote. Outdoor service here needs a plan for wind and sand, not a hope that the evening is still.',
    ],
    targetAudience: {
      title: 'Long-stay coastal households and villa guests',
      paragraphs: [
        'Families in villas, homeowners who host at the house, and guests in rented coastal villas who want a chef without leaving the plot. Mixed ages at the table are common. The brief should say so.',
      ],
    },
    serviceInclusions: {
      title: 'What an Umm Suqeim villa booking includes',
      items: [
        'A vetted partner chef matched to a villa kitchen',
        'Standing plan: Food Profile and household manager',
        'One night: chef, service staff as needed, setup and clear-down',
        'Garden, poolside or indoor setup as the plot allows',
        'Outdoor kit that can handle wind and sand',
        'Family and children\'s plates when the brief asks for them',
        'Ingredient sourcing; groceries at receipt cost when we shop',
        'Kitchen and outdoor areas reset',
      ],
    },
    menuOptions: {
      title: 'Menus for a coastal villa, not a hotel terrace',
      paragraphs: [
        'Mediterranean and Middle Eastern sharing food, grilled fish, and a seated dinner indoors if the wind is up. We decide indoor or outdoor with you, not against the forecast.',
      ],
      cuisines: [
        'Mediterranean',
        'Middle Eastern & Levantine',
        'Seafood & Grill',
        'Italian',
        'Lebanese Mezze',
        'Asian Fusion',
        'BBQ & Garden Platters',
        'Modern European',
      ],
    },
    howItWorks: {
      title: 'Parking, wind, then the villa kitchen',
      steps: [
        {
          title: 'Send the brief',
          description:
            'Villa location, date, guest count, and standing chef or one night.',
        },
        {
          title: 'Confirm access',
          description:
            'We confirm parking, garden access and whether the sitting is indoor or outdoor.',
        },
        {
          title: 'Written proposal',
          description:
            'Menu direction, staffing and a written quote before the date is held.',
        },
        {
          title: 'Confirm the date',
          description:
            'We lock the chef and the team once you approve.',
        },
        {
          title: 'The chef arrives',
          description:
            'The chef arrives with ingredients and equipment, including outdoor kit if quoted.',
        },
        {
          title: 'Service and clear-down',
          description:
            'We serve and restore the villa, garden and kitchen.',
        },
      ],
    },
    whyChoose: {
      title: 'Coastal villas need a plan for wind and parking',
      paragraphs: [
        'Umm Suqeim dinners fail on a blocked driveway and a tablecloth in the wind. We plan both. The chef cooks. We match and back them up.',
        'We typically reply within 15 minutes during business hours. We do not promise a chef within 24 hours.',
      ],
    },
    useCases: {
      title: 'What these villas actually book',
      cases: [
        {
          title: 'Garden or pool dinner',
          description:
            'Outdoor sitting where the plot allows it, with an indoor fallback.',
        },
        {
          title: 'Family birthday at home',
          description:
            'One-night catering for mixed ages, in the house.',
        },
        {
          title: 'Weekend lunch by the pool',
          description:
            'Sharing food, quoted as catering if it is one sitting.',
        },
        {
          title: 'Standing household chef',
          description:
            'Weekly cooking in the same coastal kitchen.',
        },
      ],
    },
    logistics: {
      title: 'Villa parking, garden access and coastal weather',
      paragraphs: [
        'Most Umm Suqeim villas have a driveway. We still confirm where the van stops. Beachfront service only where the house and the rules allow it. We bring weights, shade and a weather plan for outdoor sittings.',
      ],
    },
    nearbyLocations: [
      {
        name: 'Jumeirah',
        slug: 'jumeirah',
        description: 'Beach-road villas next door, with the same garden-and-parking problem.',
      },
      {
        name: 'Al Barsha',
        slug: 'al-barsha',
        description: 'A mixed stock of villas, apartments and hotel residences inland from the coast.',
      },
    ],
    relatedServices: [
      { name: 'Private Chef Dubai', path: '/private-chef-dubai' },
      { name: 'Villa Dining', path: '/villas-private-residences' },
      { name: 'Catering Dubai', path: '/catering-dubai' },
      { name: 'BBQ Catering', path: '/bbq-catering-dubai' },
    ],
    relatedEvents: [
      { name: 'Birthday Parties', path: '/birthday-catering-dubai' },
      { name: 'Wedding Catering', path: '/wedding-catering-dubai' },
    ],
    faqs: [
      {
        q: 'Can you cook at a beachfront villa in Umm Suqeim?',
        a: 'Yes, in the house and garden where access allows. We do not run a public beach service.',
      },
      {
        q: 'Can you set up by the pool?',
        a: 'Yes, when the plot allows it. We plan for sun, wind and wet ground.',
      },
      {
        q: 'Is a weekly chef the same as a family party?',
        a: 'No. A party is [catering](/catering-dubai). A weekly chef is a [household plan](/private-chef-dubai).',
      },
      {
        q: 'Do you bring service staff?',
        a: 'When the quote says so. A family lunch and a larger sitting do not use the same team.',
      },
      {
        q: 'Can you cook for children and mixed diets?',
        a: 'Yes. Halal sourcing is the default unless you ask otherwise. Other needs go in the brief.',
      },
      {
        q: 'How far ahead should I write?',
        a: 'Give us the date as soon as you have it. Holiday weekends fill faster. We typically reply within 15 minutes during business hours. We do not promise a chef within 24 hours.',
      },
    ],
    uniqueAngle:
      'Private chef Umm Suqeim for coastal villas and garden kitchens',
    propertyType:
      'Beachfront villas and compounds with private gardens and pools.',
    callToAction: {
      title: 'Send the Umm Suqeim villa',
      subtitle: 'Address, date and guest count. We send a written plan.',
      whatsappMessage:
        "Hi myCHEF Dubai, I'd like to request a quote for catering in Umm Suqeim",
    },
  },
  {
    slug: 'al-barsha',
    name: 'Al Barsha',
    title: 'Private Chef Al Barsha | myCHEF',
    metaDescription:
      'Private Chef Al Barsha with a vetted myCHEF team. Menus, service and clear-down handled so you stay a guest at your own table.',
    h1: 'Private Chef Al Barsha',
    heroImage: '/loc-downtown.webp',
    heroSubtitle:
      'Private chef Al Barsha is a villa, apartment or hotel residence kitchen, decided by the property type, not by a package name. One night is catering. A chef who comes back is a household plan.',
    intro: [
      'Al Barsha sits on Sheikh Zayed Road with villas, apartment towers and hotel residences near Mall of the Emirates. We cook in those kitchens. We do not own a venue at the mall.',
      'Catering in Al Barsha is one sitting at home or in a small office. A chef at home in Al Barsha on a standing plan is weekly cooking in the same kitchen, with a Food Profile for backup.',
      'Private dining in Al Barsha is your table. Party catering in Al Barsha is an event quote. A personal chef in Al Barsha who returns is a household quote. If the address is over the road in Al Quoz, say so. The brief is still the kitchen, the timing and the guest count.',
    ],
    targetAudience: {
      title: 'Mixed households, hotel residences and small offices',
      paragraphs: [
        'Families in villas and townhouses, professionals in apartments, and guests in hotel residences. Birthdays and family dinners are common. Small offices book a lunch. The property type is the first question.',
      ],
    },
    serviceInclusions: {
      title: 'What an Al Barsha booking includes',
      items: [
        'A vetted partner chef matched to villa, apartment or hotel-residence kitchen',
        'Standing plan: Food Profile and household manager',
        'One night or one lunch: chef, service staff as needed, setup and clear-down',
        'Building or villa access coordination',
        'Portable equipment when the kitchen is compact',
        'Flexible service: plated, sharing or buffet as the rooms allow',
        'Ingredient sourcing; groceries at receipt cost when we shop',
        'Kitchen reset',
      ],
    },
    menuOptions: {
      title: 'Menus that follow the property, not a single format',
      paragraphs: [
        'A villa can hold a grill. A studio cannot. We write the menu after we know the rooms. If the sitting is iftar, we plan the timing with the household. Halal sourcing is the default unless you ask otherwise.',
      ],
      cuisines: [
        'Arabic & Levantine',
        'Indian',
        'Italian',
        'Mediterranean',
        'BBQ & Grill',
        'International',
        'Corporate Lunch Sets',
        'Canapés & Finger Food',
      ],
    },
    howItWorks: {
      title: 'Property type first, then the kitchen',
      steps: [
        {
          title: 'Send the brief',
          description:
            'Villa, apartment, hotel residence or office, date, guest count, and standing chef or one night.',
        },
        {
          title: 'Confirm access',
          description:
            'We confirm gates or concierge, parking and what the kitchen can hold.',
        },
        {
          title: 'Written proposal',
          description:
            'Menu direction, staffing and a written quote before the date is held.',
        },
        {
          title: 'Confirm the date',
          description:
            'We lock the chef and any extra staff once you approve.',
        },
        {
          title: 'The chef arrives',
          description:
            'The chef arrives with ingredients and the kit that kitchen needs.',
        },
        {
          title: 'Service and clear-down',
          description:
            'We serve and restore the Al Barsha kitchen before we leave.',
        },
      ],
    },
    whyChoose: {
      title: 'The property type decides the team, not a package name',
      paragraphs: [
        'Al Barsha is not one kind of home. We ask what you have before we write a menu. The chef cooks. We match and back them up.',
        'We typically reply within 15 minutes during business hours. We do not promise a chef within 24 hours.',
      ],
    },
    useCases: {
      title: 'What Al Barsha actually books',
      cases: [
        {
          title: 'Family birthday',
          description:
            'One-night catering in a villa or apartment, scaled to the rooms.',
        },
        {
          title: 'Villa dinner',
          description:
            'A seated sitting at home, with staff if the table needs them.',
        },
        {
          title: 'Hotel-residence dinner',
          description:
            'A chef in a serviced apartment near the mall, with kit brought in.',
        },
        {
          title: 'Small office lunch',
          description:
            'Catering on a weekday clock, quoted in writing.',
        },
      ],
    },
    logistics: {
      title: 'Sheikh Zayed Road, villa driveways and tower desks',
      paragraphs: [
        'The road is fast until it is not. We plan arrival around that. Villas usually have parking. Apartments need a concierge plan. We confirm access in advance and bring portable kit when the kitchen is small.',
      ],
    },
    nearbyLocations: [
      {
        name: 'JVC',
        slug: 'jvc',
        description: 'Family apartments, townhouses and compact kitchens in neighbouring clusters.',
      },
      {
        name: 'Dubai Hills',
        slug: 'dubai-hills',
        description: 'Villas, townhouses and apartment towers with multiple community gates.',
      },
      {
        name: 'Umm Suqeim',
        slug: 'umm-suqeim',
        description: 'Coastal villas and garden kitchens, a different wind and parking problem.',
      },
    ],
    relatedServices: [
      { name: 'Private Chef Dubai', path: '/private-chef-dubai' },
      { name: 'Catering Dubai', path: '/catering-dubai' },
      { name: 'Private Parties', path: '/private-party-catering-dubai' },
      { name: 'Office Catering', path: '/office-catering-dubai' },
    ],
    relatedEvents: [
      { name: 'Birthday Parties', path: '/birthday-catering-dubai' },
      { name: 'Corporate Events', path: '/corporate-event-catering-dubai' },
    ],
    faqs: [
      {
        q: 'Can you cook a small apartment dinner in Al Barsha?',
        a: 'Yes. We bring portable kit when the kitchen is compact.',
      },
      {
        q: 'Do you cook near Mall of the Emirates?',
        a: 'Yes, in residences, hotel apartments and offices around that area. We do not cook in the mall.',
      },
      {
        q: 'Do you do office lunches here?',
        a: 'Yes, as [catering](/catering-dubai): timed, itemised, cleared.',
      },
      {
        q: 'Is a weekly chef the same as a party?',
        a: 'No. A party is catering. A weekly chef is a [household plan](/private-chef-dubai).',
      },
      {
        q: 'Can one sitting mix diets?',
        a: 'Yes. Halal sourcing is the default unless you ask otherwise. Other needs go in the brief.',
      },
      {
        q: 'Is cleanup included?',
        a: 'Yes. The kitchen and dining area are reset before we leave.',
      },
    ],
    uniqueAngle:
      'Private chef Al Barsha for villas, apartments and hotel residences',
    propertyType:
      'Mixed residential area: apartments, villas and hotel apartments near Mall of the Emirates.',
    callToAction: {
      title: 'Send the Al Barsha address',
      subtitle: 'Villa, apartment or office, date and guest count. We send a written plan.',
      whatsappMessage:
        "Hi myCHEF Dubai, I'd like to request a quote for catering in Al Barsha",
    },
  },
]

export const PUBLISHED_LOCATION_SLUGS = new Set(allLocations.map((location) => location.slug))

export function locationPath(slug: string): string {
  return PUBLISHED_LOCATION_SLUGS.has(slug) ? `/locations/${slug}` : '/locations'
}

export default allLocations
