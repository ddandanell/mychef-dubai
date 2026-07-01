export const WHATSAPP_NUMBER = '971551744849'

export interface StarterPackage {
  name: string
  guests: string
  price: string
  perPerson: string
  included: string
  recurring: boolean
}

export const starterPackages: StarterPackage[] = [
  {
    name: 'Date Night',
    guests: '2',
    price: '1,200',
    perPerson: '600',
    included: 'Bespoke 3-course menu for two, private chef, table service, and full cleanup.',
    recurring: false,
  },
  {
    name: 'Family Feast',
    guests: '6–8',
    price: '2,400',
    perPerson: '300–400',
    included: 'Generous sharing-style menu, premium ingredients, chef and service support for a relaxed family dinner.',
    recurring: false,
  },
  {
    name: 'Birthday Celebration',
    guests: '8–12',
    price: '3,600',
    perPerson: '300–450',
    included: 'Celebration menu with canapés or starter, main course, dessert, and service staff.',
    recurring: false,
  },
  {
    name: 'Weekly Prep Lite',
    guests: '2–3 (recurring)',
    price: '1,898',
    perPerson: '~949/session',
    included: '2 weekly prep sessions, bespoke menu, portioned meals, container labelling, and cleanup.',
    recurring: true,
  },
  {
    name: 'Weekly Prep Standard',
    guests: '4–6 (recurring)',
    price: '2,698',
    perPerson: '~899/session',
    included: '2 weekly prep sessions for larger households, rotating menus, dietary flexibility, and cleanup.',
    recurring: true,
  },
  {
    name: 'Corporate Dinner',
    guests: '10–15',
    price: '4,500',
    perPerson: '300–450',
    included: 'Professional multi-course or buffet menu, service staff, and elegant presentation for board or team dinners.',
    recurring: false,
  },
  {
    name: 'The Full Experience',
    guests: '6–10',
    price: '5,500',
    perPerson: '550–900',
    included: 'Multi-course tasting menu, wine pairing consultation, full service team, and premium plating.',
    recurring: false,
  },
]
