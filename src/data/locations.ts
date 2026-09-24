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
      "Private chef in Dubai Marina for home dining and regular household meals. Menus, service and clear-down planned around your guests and kitchen.",
    h1: 'Private Chef Dubai Marina',
    heroImage: '/loc-dubai-marina.webp',
    heroSubtitle:
      "A private chef in Dubai Marina, with menus and service tailored to your apartments, penthouses and chartered yachts. Choose regular household cooking or a carefully planned meal for one occasion.",
    intro: [
      "Enjoy professional cooking in Dubai Marina, with a chef working at the address you provide. We plan around your kitchen, guest count and occasion, from everyday household meals to a private celebration.",
      "Regular household plans bring a chef back on an agreed schedule, with your preferences recorded in a Food Profile. One-off private dinners and parties are arranged as catering, with the menu, service and equipment quoted for the occasion.",
      "Tower concierge, loading windows and marina access are confirmed before arrival. For yacht bookings, we coordinate storage, loading and service with your captain or operator.",
    ],
    targetAudience: {
      title: 'Who this kitchen is for in the Marina',
      paragraphs: [
        "Apartment residents, visiting guests and yacht hosts can arrange a private dinner or regular cooking, with the service adapted to the kitchen or galley.",
        "Share any preferences that would help you feel comfortable with the chef in your home. We consider these during matching and confirm availability.",
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
        "We develop the menu around your food preferences, the people joining you and the cooking facilities available. Share dietary requirements early, and we will confirm the proposed dishes, preparation arrangements and level of service.",
        "For iftar or another timed occasion, the menu and service are planned around your schedule, guest requirements and kitchen facilities.",
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
            "Review and approve the proposal, then complete the required booking confirmation and payment to secure the agreed service.",
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
        "Tower concierge, loading windows and marina access are confirmed before arrival. For yacht bookings, we coordinate storage, loading and service with your captain or operator.",
        "We typically reply within 15 minutes between 9am and 9pm Dubai time. Chef availability and the booking date are confirmed after the brief and proposal are agreed.",
      ],
    },
    useCases: {
      title: "Ways to enjoy the service",
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
        "Tower concierge, loading windows and marina access are confirmed before arrival. For yacht bookings, we coordinate storage, loading and service with your captain or operator.",
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
        a: "Regular weekly cooking is arranged through a [household plan](/private-chef-dubai). A private dinner, birthday or team lunch is quoted as [catering](/catering-dubai), with service tailored to that occasion.",
      },
      {
        q: 'Can you cook in a Marina penthouse?',
        a: 'Yes, if the kitchen and concierge allow it. We confirm lift, valet and loading before the day. The private chef Dubai Marina menu is written around that kitchen, not a generic list.',
      },
      {
        q: 'How far ahead should I write?',
        a: "Enquire as soon as your date is known, allowing more time for larger occasions and holidays. We typically reply within 15 minutes during business hours; chef availability is confirmed individually.",
      },
      {
        q: 'Is cleanup included?',
        a: 'Yes. Clear-down and a kitchen reset are part of the service we quote.',
      },
      {
        q: 'Can you match who is in the house?',
        a: "Share your preferences when enquiring. We consider household fit alongside identity checks, right to work, cooking ability and references, and confirm a suitable available match.",
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
      "Private chef in Downtown Dubai for home dining and regular household meals. Menus, service and clear-down planned around your guests and kitchen.",
    h1: 'Private Chef Downtown Dubai',
    heroImage: '/loc-downtown.webp',
    heroSubtitle:
      "A private chef in Downtown Dubai, with menus and service tailored to your apartments, penthouses and offices. Choose regular household cooking or a carefully planned meal for one occasion.",
    intro: [
      "Enjoy professional cooking in Downtown Dubai, with a chef working at the address you provide. We plan around your kitchen, guest count and occasion, from everyday household meals to a private celebration.",
      "Regular household plans bring a chef back on an agreed schedule, with your preferences recorded in a Food Profile. One-off private dinners and parties are arranged as catering, with the menu, service and equipment quoted for the occasion.",
      "We plan around booked loading bays, service lifts and concierge access. Event traffic and the timing of your meeting or evening plans are included in the arrival schedule.",
    ],
    targetAudience: {
      title: 'Who hosts in these towers',
      paragraphs: [
        "Residents, visitors and office teams can enjoy a private meal with timings adapted to meetings, theatre plans or a relaxed evening at home.",
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
        "We develop the menu around your food preferences, the people joining you and the cooking facilities available. Share dietary requirements early, and we will confirm the proposed dishes, preparation arrangements and level of service.",
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
            "Review and approve the proposal, then complete the required booking confirmation and payment to secure the agreed service.",
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
        "We plan around booked loading bays, service lifts and concierge access. Event traffic and the timing of your meeting or evening plans are included in the arrival schedule.",
        "We typically reply within 15 minutes between 9am and 9pm Dubai time. Chef availability and the booking date are confirmed after the brief and proposal are agreed.",
      ],
    },
    useCases: {
      title: "Ways to enjoy the service",
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
        "We plan around booked loading bays, service lifts and concierge access. Event traffic and the timing of your meeting or evening plans are included in the arrival schedule.",
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
        a: "Regular weekly cooking is arranged through a [household plan](/private-chef-dubai). A private dinner, birthday or team lunch is quoted as [catering](/catering-dubai), with service tailored to that occasion.",
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
        a: "Enquire as soon as your date is known, allowing more time for larger occasions and holidays. We typically reply within 15 minutes during business hours; chef availability is confirmed individually.",
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
      "Private chef in Palm Jumeirah for home dining and regular household meals. Menus, service and clear-down planned around your guests and kitchen.",
    h1: 'Private Chef Palm Jumeirah',
    heroImage: '/loc-palm-jumeirah.webp',
    heroSubtitle:
      "A private chef in Palm Jumeirah, with menus and service tailored to your Frond villas and Trunk apartments. Choose regular household cooking or a carefully planned meal for one occasion.",
    intro: [
      "Enjoy professional cooking in Palm Jumeirah, with a chef working at the address you provide. We plan around your kitchen, guest count and occasion, from everyday household meals to a private celebration.",
      "Regular household plans bring a chef back on an agreed schedule, with your preferences recorded in a Food Profile. One-off private dinners and parties are arranged as catering, with the menu, service and equipment quoted for the occasion.",
      "We confirm gate passes, parking and kitchen access before arrival. Outdoor meals are planned around the property’s permissions, facilities and weather conditions.",
    ],
    targetAudience: {
      title: 'Who lives with this access problem',
      paragraphs: [
        "Villa households, apartment residents and guests staying on the Palm can arrange family meals, celebration dinners or regular chef support.",
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
        "We develop the menu around your food preferences, the people joining you and the cooking facilities available. Share dietary requirements early, and we will confirm the proposed dishes, preparation arrangements and level of service.",
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
            "Review and approve the proposal, then complete the required booking confirmation and payment to secure the agreed service.",
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
        "We confirm gate passes, parking and kitchen access before arrival. Outdoor meals are planned around the property’s permissions, facilities and weather conditions.",
        "We typically reply within 15 minutes between 9am and 9pm Dubai time. Chef availability and the booking date are confirmed after the brief and proposal are agreed.",
      ],
    },
    useCases: {
      title: "Ways to enjoy the service",
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
        "We confirm gate passes, parking and kitchen access before arrival. Outdoor meals are planned around the property’s permissions, facilities and weather conditions.",
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
        a: "Regular weekly cooking is arranged through a [household plan](/private-chef-dubai). A private dinner, birthday or team lunch is quoted as [catering](/catering-dubai), with service tailored to that occasion.",
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
        a: "Enquire as soon as your date is known, allowing more time for larger occasions and holidays. We typically reply within 15 minutes during business hours; chef availability is confirmed individually.",
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
      "Private chef in Jumeirah for home dining and regular household meals. Menus, service and clear-down planned around your guests and kitchen.",
    h1: 'Private Chef Jumeirah',
    heroImage: '/loc-jumeirah.webp',
    heroSubtitle:
      "A private chef in Jumeirah, with menus and service tailored to your villas and family homes. Choose regular household cooking or a carefully planned meal for one occasion.",
    intro: [
      "Enjoy professional cooking in Jumeirah, with a chef working at the address you provide. We plan around your kitchen, guest count and occasion, from everyday household meals to a private celebration.",
      "Regular household plans bring a chef back on an agreed schedule, with your preferences recorded in a Food Profile. One-off private dinners and parties are arranged as catering, with the menu, service and equipment quoted for the occasion.",
      "Driveway access, kitchen facilities and garden service are agreed with the household. Outdoor menus account for available equipment, weather and any property restrictions.",
    ],
    targetAudience: {
      title: 'Families and long-stay houses on the coast',
      paragraphs: [
        "Families and hosts in Jumeirah can plan regular meals, garden gatherings or a private dinner at home.",
        "Share any preferences that would help you feel comfortable with the chef in your home. We consider these during matching and confirm availability.",
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
        "We develop the menu around your food preferences, the people joining you and the cooking facilities available. Share dietary requirements early, and we will confirm the proposed dishes, preparation arrangements and level of service.",
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
            "Review and approve the proposal, then complete the required booking confirmation and payment to secure the agreed service.",
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
        "Driveway access, kitchen facilities and garden service are agreed with the household. Outdoor menus account for available equipment, weather and any property restrictions.",
        "We typically reply within 15 minutes between 9am and 9pm Dubai time. Chef availability and the booking date are confirmed after the brief and proposal are agreed.",
      ],
    },
    useCases: {
      title: "Ways to enjoy the service",
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
        "Driveway access, kitchen facilities and garden service are agreed with the household. Outdoor menus account for available equipment, weather and any property restrictions.",
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
        a: "Regular weekly cooking is arranged through a [household plan](/private-chef-dubai). A private dinner, birthday or team lunch is quoted as [catering](/catering-dubai), with service tailored to that occasion.",
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
        a: "We typically reply within 15 minutes between 9am and 9pm Dubai time. Chef availability and the booking date are confirmed after the brief and proposal are agreed.",
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
      "Private chef in JBR for home dining and regular household meals. Menus, service and clear-down planned around your guests and kitchen.",
    h1: 'Private Chef JBR',
    heroImage: '/loc-jbr.webp',
    heroSubtitle:
      "A private chef in JBR, with menus and service tailored to your beachfront apartments and residences. Choose regular household cooking or a carefully planned meal for one occasion.",
    intro: [
      "Enjoy professional cooking in JBR, with a chef working at the address you provide. We plan around your kitchen, guest count and occasion, from everyday household meals to a private celebration.",
      "Regular household plans bring a chef back on an agreed schedule, with your preferences recorded in a Food Profile. One-off private dinners and parties are arranged as catering, with the menu, service and equipment quoted for the occasion.",
      "We coordinate loading, parking and service-lift access with your building. Kitchen capacity and balcony restrictions are checked before the menu and equipment are confirmed.",
    ],
    targetAudience: {
      title: 'Residents, short stays and family tables on The Walk',
      paragraphs: [
        "Apartment residents and visiting guests can enjoy a private dinner or regular chef support, with service suited to the facilities in the residence.",
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
        "We develop the menu around your food preferences, the people joining you and the cooking facilities available. Share dietary requirements early, and we will confirm the proposed dishes, preparation arrangements and level of service.",
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
            "Review and approve the proposal, then complete the required booking confirmation and payment to secure the agreed service.",
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
        "We coordinate loading, parking and service-lift access with your building. Kitchen capacity and balcony restrictions are checked before the menu and equipment are confirmed.",
        "We typically reply within 15 minutes between 9am and 9pm Dubai time. Chef availability and the booking date are confirmed after the brief and proposal are agreed.",
      ],
    },
    useCases: {
      title: "Ways to enjoy the service",
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
        "We coordinate loading, parking and service-lift access with your building. Kitchen capacity and balcony restrictions are checked before the menu and equipment are confirmed.",
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
        a: "Regular weekly cooking is arranged through a [household plan](/private-chef-dubai). A private dinner, birthday or team lunch is quoted as [catering](/catering-dubai), with service tailored to that occasion.",
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
        a: "Enquire as soon as your date is known, allowing more time for larger occasions and holidays. We typically reply within 15 minutes during business hours; chef availability is confirmed individually.",
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
      "Private chef in Business Bay for home dining and regular household meals. Menus, service and clear-down planned around your guests and kitchen.",
    h1: 'Private Chef Business Bay',
    heroImage: '/loc-difc.webp',
    heroSubtitle:
      "A private chef in Business Bay, with menus and service tailored to your canal-side apartments and offices. Choose regular household cooking or a carefully planned meal for one occasion.",
    intro: [
      "Enjoy professional cooking in Business Bay, with a chef working at the address you provide. We plan around your kitchen, guest count and occasion, from everyday household meals to a private celebration.",
      "Regular household plans bring a chef back on an agreed schedule, with your preferences recorded in a Food Profile. One-off private dinners and parties are arranged as catering, with the menu, service and equipment quoted for the occasion.",
      "Building security, loading bays and service lifts are part of the plan. Office meals are timed around the working day, while home dinners follow the household’s schedule.",
    ],
    targetAudience: {
      title: 'Offices by day, apartments after six',
      paragraphs: [
        "Share any preferences that would help you feel comfortable with the chef in your home. We consider these during matching and confirm availability.",
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
        "We develop the menu around your food preferences, the people joining you and the cooking facilities available. Share dietary requirements early, and we will confirm the proposed dishes, preparation arrangements and level of service.",
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
            "Review and approve the proposal, then complete the required booking confirmation and payment to secure the agreed service.",
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
        "Building security, loading bays and service lifts are part of the plan. Office meals are timed around the working day, while home dinners follow the household’s schedule.",
        "We typically reply within 15 minutes between 9am and 9pm Dubai time. Chef availability and the booking date are confirmed after the brief and proposal are agreed.",
      ],
    },
    useCases: {
      title: "Ways to enjoy the service",
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
        "Building security, loading bays and service lifts are part of the plan. Office meals are timed around the working day, while home dinners follow the household’s schedule.",
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
        a: "Regular weekly cooking is arranged through a [household plan](/private-chef-dubai). A private dinner, birthday or team lunch is quoted as [catering](/catering-dubai), with service tailored to that occasion.",
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
      "Private chef in DIFC for home dining and regular household meals. Menus, service and clear-down planned around your guests and kitchen.",
    h1: 'Private Chef DIFC',
    heroImage: '/loc-difc.webp',
    heroSubtitle:
      "A private chef in DIFC, with menus and service tailored to your residences, offices and boardrooms. Choose regular household cooking or a carefully planned meal for one occasion.",
    intro: [
      "Enjoy professional cooking in DIFC, with a chef working at the address you provide. We plan around your kitchen, guest count and occasion, from everyday household meals to a private celebration.",
      "Regular household plans bring a chef back on an agreed schedule, with your preferences recorded in a Food Profile. One-off private dinners and parties are arranged as catering, with the menu, service and equipment quoted for the occasion.",
      "We confirm building permissions, security registration and delivery access with your contact. Boardroom service is planned around the meeting agenda and agreed finish time.",
    ],
    targetAudience: {
      title: 'Firms, family offices and a few residences',
      paragraphs: [
        "Residents and business hosts can arrange private meals or discreet office hospitality, with the level of service matched to the occasion.",
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
        "We develop the menu around your food preferences, the people joining you and the cooking facilities available. Share dietary requirements early, and we will confirm the proposed dishes, preparation arrangements and level of service.",
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
            "Review and approve the proposal, then complete the required booking confirmation and payment to secure the agreed service.",
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
        "We confirm building permissions, security registration and delivery access with your contact. Boardroom service is planned around the meeting agenda and agreed finish time.",
        "We typically reply within 15 minutes between 9am and 9pm Dubai time. Chef availability and the booking date are confirmed after the brief and proposal are agreed.",
      ],
    },
    useCases: {
      title: "Ways to enjoy the service",
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
        "We confirm building permissions, security registration and delivery access with your contact. Boardroom service is planned around the meeting agenda and agreed finish time.",
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
        a: "Regular weekly cooking is arranged through a [household plan](/private-chef-dubai). A private dinner, birthday or team lunch is quoted as [catering](/catering-dubai), with service tailored to that occasion.",
      },
      {
        q: 'Can you work in Gate Village event rooms?',
        a: 'Where the venue allows an external team. We still need their rules in writing. We do not own those rooms.',
      },
      {
        q: 'How fast is a reply?',
        a: "We typically reply within 15 minutes between 9am and 9pm Dubai time. Chef availability and the booking date are confirmed after the brief and proposal are agreed.",
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
      "Private chef in Emirates Hills for home dining and regular household meals. Menus, service and clear-down planned around your guests and kitchen.",
    h1: 'Private Chef Emirates Hills',
    heroImage: '/loc-emirates-hills.webp',
    heroSubtitle:
      "A private chef in Emirates Hills, with menus and service tailored to your private villas and residences. Choose regular household cooking or a carefully planned meal for one occasion.",
    intro: [
      "Enjoy professional cooking in Emirates Hills, with a chef working at the address you provide. We plan around your kitchen, guest count and occasion, from everyday household meals to a private celebration.",
      "Regular household plans bring a chef back on an agreed schedule, with your preferences recorded in a Food Profile. One-off private dinners and parties are arranged as catering, with the menu, service and equipment quoted for the occasion.",
      "Security passes, driveway access and household service arrangements are agreed before arrival. We plan indoor and garden service around the property’s facilities and rules.",
    ],
    targetAudience: {
      title: 'Households that entertain at home on purpose',
      paragraphs: [
        "Villa households can arrange regular cooking or host guests at home, with preferences and household routines reflected in the brief.",
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
        "We develop the menu around your food preferences, the people joining you and the cooking facilities available. Share dietary requirements early, and we will confirm the proposed dishes, preparation arrangements and level of service.",
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
            "Review and approve the proposal, then complete the required booking confirmation and payment to secure the agreed service.",
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
        "Security passes, driveway access and household service arrangements are agreed before arrival. We plan indoor and garden service around the property’s facilities and rules.",
        "We typically reply within 15 minutes between 9am and 9pm Dubai time. Chef availability and the booking date are confirmed after the brief and proposal are agreed.",
      ],
    },
    useCases: {
      title: "Ways to enjoy the service",
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
        "Security passes, driveway access and household service arrangements are agreed before arrival. We plan indoor and garden service around the property’s facilities and rules.",
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
        a: "We typically reply within 15 minutes between 9am and 9pm Dubai time. Chef availability and the booking date are confirmed after the brief and proposal are agreed.",
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
      "Private chef in Arabian Ranches for home dining and regular household meals. Menus, service and clear-down planned around your guests and kitchen.",
    h1: 'Private Chef Arabian Ranches',
    heroImage: '/loc-emirates-hills.webp',
    heroSubtitle:
      "A private chef in Arabian Ranches, with menus and service tailored to your family villas and garden settings. Choose regular household cooking or a carefully planned meal for one occasion.",
    intro: [
      "Enjoy professional cooking in Arabian Ranches, with a chef working at the address you provide. We plan around your kitchen, guest count and occasion, from everyday household meals to a private celebration.",
      "Regular household plans bring a chef back on an agreed schedule, with your preferences recorded in a Food Profile. One-off private dinners and parties are arranged as catering, with the menu, service and equipment quoted for the occasion.",
      "We confirm community entry, parking, kitchen access and any garden equipment requirements. Grills and outdoor service are included only where the property permits them.",
    ],
    targetAudience: {
      title: 'Families who host in the garden on purpose',
      paragraphs: [
        "Families and villa hosts can plan regular meals, garden gatherings or celebration dining with a chef matched to the household.",
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
        "We develop the menu around your food preferences, the people joining you and the cooking facilities available. Share dietary requirements early, and we will confirm the proposed dishes, preparation arrangements and level of service.",
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
            "Review and approve the proposal, then complete the required booking confirmation and payment to secure the agreed service.",
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
        "We confirm community entry, parking, kitchen access and any garden equipment requirements. Grills and outdoor service are included only where the property permits them.",
        "We typically reply within 15 minutes between 9am and 9pm Dubai time. Chef availability and the booking date are confirmed after the brief and proposal are agreed.",
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
        "We confirm community entry, parking, kitchen access and any garden equipment requirements. Grills and outdoor service are included only where the property permits them.",
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
        a: "Regular weekly cooking is arranged through a [household plan](/private-chef-dubai). A private dinner, birthday or team lunch is quoted as [catering](/catering-dubai), with service tailored to that occasion.",
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
        a: "Enquire as soon as your date is known, allowing more time for larger occasions and holidays. We typically reply within 15 minutes during business hours; chef availability is confirmed individually.",
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
      "Private chef in Dubai Hills for home dining and regular household meals. Menus, service and clear-down planned around your guests and kitchen.",
    h1: 'Private Chef Dubai Hills',
    heroImage: '/loc-emirates-hills.webp',
    heroSubtitle:
      "A private chef in Dubai Hills, with menus and service tailored to your villas, townhouses and apartments. Choose regular household cooking or a carefully planned meal for one occasion.",
    intro: [
      "Enjoy professional cooking in Dubai Hills, with a chef working at the address you provide. We plan around your kitchen, guest count and occasion, from everyday household meals to a private celebration.",
      "Regular household plans bring a chef back on an agreed schedule, with your preferences recorded in a Food Profile. One-off private dinners and parties are arranged as catering, with the menu, service and equipment quoted for the occasion.",
      "Access arrangements depend on the community and property type. We confirm security, parking and available kitchen equipment before finalising the menu and service.",
    ],
    targetAudience: {
      title: 'Families who moved here for space, and still host at home',
      paragraphs: [
        "Households in villas, townhouses and apartments can arrange regular cooking, private dinners and family occasions.",
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
        "We develop the menu around your food preferences, the people joining you and the cooking facilities available. Share dietary requirements early, and we will confirm the proposed dishes, preparation arrangements and level of service.",
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
            "Review and approve the proposal, then complete the required booking confirmation and payment to secure the agreed service.",
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
        "Access arrangements depend on the community and property type. We confirm security, parking and available kitchen equipment before finalising the menu and service.",
        "We typically reply within 15 minutes between 9am and 9pm Dubai time. Chef availability and the booking date are confirmed after the brief and proposal are agreed.",
      ],
    },
    useCases: {
      title: "Ways to enjoy the service",
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
        "Access arrangements depend on the community and property type. We confirm security, parking and available kitchen equipment before finalising the menu and service.",
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
        a: "Regular weekly cooking is arranged through a [household plan](/private-chef-dubai). A private dinner, birthday or team lunch is quoted as [catering](/catering-dubai), with service tailored to that occasion.",
      },
      {
        q: 'Do you cook for children?',
        a: 'Yes, when the brief says so.',
      },
      {
        q: 'How fast is a reply?',
        a: "We typically reply within 15 minutes between 9am and 9pm Dubai time. Chef availability and the booking date are confirmed after the brief and proposal are agreed.",
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
      "Private chef in JVC for home dining and regular household meals. Menus, service and clear-down planned around your guests and kitchen.",
    h1: 'Private Chef JVC',
    heroImage: '/loc-dubai-marina.webp',
    heroSubtitle:
      "A private chef in JVC, with menus and service tailored to your apartments, townhouses and villas. Choose regular household cooking or a carefully planned meal for one occasion.",
    intro: [
      "Enjoy professional cooking in JVC, with a chef working at the address you provide. We plan around your kitchen, guest count and occasion, from everyday household meals to a private celebration.",
      "Regular household plans bring a chef back on an agreed schedule, with your preferences recorded in a Food Profile. One-off private dinners and parties are arranged as catering, with the menu, service and equipment quoted for the occasion.",
      "We check community access, parking and the size of the kitchen. Menus and any portable equipment are planned to suit the facilities available in your home.",
    ],
    targetAudience: {
      title: 'Young families and houses that actually cook at home',
      paragraphs: [
        "Families and residents can arrange everyday chef support or a special meal, with the service adapted to the size of the home and guest list.",
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
        "We develop the menu around your food preferences, the people joining you and the cooking facilities available. Share dietary requirements early, and we will confirm the proposed dishes, preparation arrangements and level of service.",
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
            "Review and approve the proposal, then complete the required booking confirmation and payment to secure the agreed service.",
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
        "We check community access, parking and the size of the kitchen. Menus and any portable equipment are planned to suit the facilities available in your home.",
        "We typically reply within 15 minutes between 9am and 9pm Dubai time. Chef availability and the booking date are confirmed after the brief and proposal are agreed.",
      ],
    },
    useCases: {
      title: "Ways to enjoy the service",
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
        "We check community access, parking and the size of the kitchen. Menus and any portable equipment are planned to suit the facilities available in your home.",
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
        a: "Regular weekly cooking is arranged through a [household plan](/private-chef-dubai). A private dinner, birthday or team lunch is quoted as [catering](/catering-dubai), with service tailored to that occasion.",
      },
      {
        q: 'Is cleanup included?',
        a: 'Yes. The kitchen and dining area are reset before we leave.',
      },
      {
        q: 'How far ahead should I write?',
        a: "Enquire as soon as your date is known, allowing more time for larger occasions and holidays. We typically reply within 15 minutes during business hours; chef availability is confirmed individually.",
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
      "Private chef in JLT for home dining and regular household meals. Menus, service and clear-down planned around your guests and kitchen.",
    h1: 'Private Chef JLT',
    heroImage: '/loc-dubai-marina.webp',
    heroSubtitle:
      "A private chef in JLT, with menus and service tailored to your lakeside apartments and offices. Choose regular household cooking or a carefully planned meal for one occasion.",
    intro: [
      "Enjoy professional cooking in JLT, with a chef working at the address you provide. We plan around your kitchen, guest count and occasion, from everyday household meals to a private celebration.",
      "Regular household plans bring a chef back on an agreed schedule, with your preferences recorded in a Food Profile. One-off private dinners and parties are arranged as catering, with the menu, service and equipment quoted for the occasion.",
      "Cluster access, loading bays and lift bookings are confirmed with your building contact. Office service is timed around meetings, with clear-down included as agreed.",
    ],
    targetAudience: {
      title: 'DMCC offices by day, lakeside apartments after work',
      paragraphs: [
        "Residents and office teams can arrange household cooking, private dinners or meeting catering, with access and timings planned for the relevant cluster.",
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
        "We develop the menu around your food preferences, the people joining you and the cooking facilities available. Share dietary requirements early, and we will confirm the proposed dishes, preparation arrangements and level of service.",
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
            "Review and approve the proposal, then complete the required booking confirmation and payment to secure the agreed service.",
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
        "Cluster access, loading bays and lift bookings are confirmed with your building contact. Office service is timed around meetings, with clear-down included as agreed.",
        "We typically reply within 15 minutes between 9am and 9pm Dubai time. Chef availability and the booking date are confirmed after the brief and proposal are agreed.",
      ],
    },
    useCases: {
      title: "Ways to enjoy the service",
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
        "Cluster access, loading bays and lift bookings are confirmed with your building contact. Office service is timed around meetings, with clear-down included as agreed.",
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
        a: "Regular weekly cooking is arranged through a [household plan](/private-chef-dubai). A private dinner, birthday or team lunch is quoted as [catering](/catering-dubai), with service tailored to that occasion.",
      },
      {
        q: 'Can you handle mixed diets in an office?',
        a: 'Yes, when you send the list. Halal sourcing is the default unless you ask otherwise.',
      },
      {
        q: 'How fast is a reply?',
        a: "We typically reply within 15 minutes between 9am and 9pm Dubai time. Chef availability and the booking date are confirmed after the brief and proposal are agreed.",
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
      "Private chef in Bluewaters for home dining and regular household meals. Menus, service and clear-down planned around your guests and kitchen.",
    h1: 'Private Chef Bluewaters Island',
    heroImage: '/loc-jbr.webp',
    heroSubtitle:
      "A private chef in Bluewaters, with menus and service tailored to your apartments and serviced residences. Choose regular household cooking or a carefully planned meal for one occasion.",
    intro: [
      "Enjoy professional cooking in Bluewaters, with a chef working at the address you provide. We plan around your kitchen, guest count and occasion, from everyday household meals to a private celebration.",
      "Regular household plans bring a chef back on an agreed schedule, with your preferences recorded in a Food Profile. One-off private dinners and parties are arranged as catering, with the menu, service and equipment quoted for the occasion.",
      "We coordinate island entry, parking and loading with you or the concierge. Kitchen equipment is assessed in advance so the menu suits the apartment’s facilities.",
    ],
    targetAudience: {
      title: 'Residents and short stays who would rather eat in',
      paragraphs: [
        "Share any preferences that would help you feel comfortable with the chef in your home. We consider these during matching and confirm availability.",
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
        "We develop the menu around your food preferences, the people joining you and the cooking facilities available. Share dietary requirements early, and we will confirm the proposed dishes, preparation arrangements and level of service.",
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
            "Review and approve the proposal, then complete the required booking confirmation and payment to secure the agreed service.",
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
        "We coordinate island entry, parking and loading with you or the concierge. Kitchen equipment is assessed in advance so the menu suits the apartment’s facilities.",
        "We typically reply within 15 minutes between 9am and 9pm Dubai time. Chef availability and the booking date are confirmed after the brief and proposal are agreed.",
      ],
    },
    useCases: {
      title: "Ways to enjoy the service",
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
        "We coordinate island entry, parking and loading with you or the concierge. Kitchen equipment is assessed in advance so the menu suits the apartment’s facilities.",
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
        a: "Regular weekly cooking is arranged through a [household plan](/private-chef-dubai). A private dinner, birthday or team lunch is quoted as [catering](/catering-dubai), with service tailored to that occasion.",
      },
      {
        q: 'How do you handle island access?',
        a: 'We coordinate with you or the concierge for entry, parking and loading.',
      },
      {
        q: 'How fast is a reply?',
        a: "We typically reply within 15 minutes between 9am and 9pm Dubai time. Chef availability and the booking date are confirmed after the brief and proposal are agreed.",
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
      "Private chef in Umm Suqeim for home dining and regular household meals. Menus, service and clear-down planned around your guests and kitchen.",
    h1: 'Private Chef Umm Suqeim',
    heroImage: '/loc-jumeirah.webp',
    heroSubtitle:
      "A private chef in Umm Suqeim, with menus and service tailored to your coastal villas and family homes. Choose regular household cooking or a carefully planned meal for one occasion.",
    intro: [
      "Enjoy professional cooking in Umm Suqeim, with a chef working at the address you provide. We plan around your kitchen, guest count and occasion, from everyday household meals to a private celebration.",
      "Regular household plans bring a chef back on an agreed schedule, with your preferences recorded in a Food Profile. One-off private dinners and parties are arranged as catering, with the menu, service and equipment quoted for the occasion.",
      "We confirm driveway access and the available indoor and outdoor spaces. Garden and poolside service include an agreed plan for wind, heat and changing weather.",
    ],
    targetAudience: {
      title: 'Long-stay coastal households and villa guests',
      paragraphs: [
        "Families and guests in coastal villas can arrange regular meals, private dinners or outdoor gatherings within the property’s permissions.",
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
        "We develop the menu around your food preferences, the people joining you and the cooking facilities available. Share dietary requirements early, and we will confirm the proposed dishes, preparation arrangements and level of service.",
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
        "We confirm driveway access and the available indoor and outdoor spaces. Garden and poolside service include an agreed plan for wind, heat and changing weather.",
        "We typically reply within 15 minutes between 9am and 9pm Dubai time. Chef availability and the booking date are confirmed after the brief and proposal are agreed.",
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
        "We confirm driveway access and the available indoor and outdoor spaces. Garden and poolside service include an agreed plan for wind, heat and changing weather.",
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
        a: "Regular weekly cooking is arranged through a [household plan](/private-chef-dubai). A private dinner, birthday or team lunch is quoted as [catering](/catering-dubai), with service tailored to that occasion.",
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
        a: "Enquire as soon as your date is known, allowing more time for larger occasions and holidays. We typically reply within 15 minutes during business hours; chef availability is confirmed individually.",
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
      "Private chef in Al Barsha for home dining and regular household meals. Menus, service and clear-down planned around your guests and kitchen.",
    h1: 'Private Chef Al Barsha',
    heroImage: '/loc-downtown.webp',
    heroSubtitle:
      "A private chef in Al Barsha, with menus and service tailored to your villas, apartments and hotel residences. Choose regular household cooking or a carefully planned meal for one occasion.",
    intro: [
      "Enjoy professional cooking in Al Barsha, with a chef working at the address you provide. We plan around your kitchen, guest count and occasion, from everyday household meals to a private celebration.",
      "Regular household plans bring a chef back on an agreed schedule, with your preferences recorded in a Food Profile. One-off private dinners and parties are arranged as catering, with the menu, service and equipment quoted for the occasion.",
      "We confirm the property type, parking and concierge arrangements before arrival. Menus and equipment are adapted to the kitchen, with travel and access included in the plan.",
    ],
    targetAudience: {
      title: 'Mixed households, hotel residences and small offices',
      paragraphs: [
        "Families, apartment residents and visiting guests can arrange household chef support, birthday dinners and smaller gatherings at home.",
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
        "We develop the menu around your food preferences, the people joining you and the cooking facilities available. Share dietary requirements early, and we will confirm the proposed dishes, preparation arrangements and level of service.",
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
            "Review and approve the proposal, then complete the required booking confirmation and payment to secure the agreed service.",
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
        "We confirm the property type, parking and concierge arrangements before arrival. Menus and equipment are adapted to the kitchen, with travel and access included in the plan.",
        "We typically reply within 15 minutes between 9am and 9pm Dubai time. Chef availability and the booking date are confirmed after the brief and proposal are agreed.",
      ],
    },
    useCases: {
      title: "Ways to enjoy the service",
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
        "We confirm the property type, parking and concierge arrangements before arrival. Menus and equipment are adapted to the kitchen, with travel and access included in the plan.",
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
        a: "Regular weekly cooking is arranged through a [household plan](/private-chef-dubai). A private dinner, birthday or team lunch is quoted as [catering](/catering-dubai), with service tailored to that occasion.",
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
