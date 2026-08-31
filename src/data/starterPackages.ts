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
    guests: '2 guests',
    price: '1,200',
    perPerson: '600',
    included: 'A three-course menu for two, cooked in your kitchen, served at your table, and the kitchen left exactly as we found it.',
    recurring: false,
  },
  {
    name: 'Family Feast',
    guests: '6–8 guests',
    price: '2,400',
    perPerson: '300–400',
    included: 'Generous sharing plates and premium ingredients, with a chef and service staff so nobody has to leave the table.',
    recurring: false,
  },
  {
    name: 'Birthday Celebration',
    guests: '8–12 guests',
    price: '3,600',
    perPerson: '300–450',
    included: 'Canapés or a starter, main course and dessert, with service staff looking after your guests all evening.',
    recurring: false,
  },
  {
    name: 'Weekly Prep Lite',
    guests: '2–3 guests, weekly',
    price: '1,900',
    perPerson: '~949/session',
    included: 'Two prep sessions a week, a menu built around how you eat, meals portioned and labelled, kitchen left clean.',
    recurring: true,
  },
  {
    name: 'Weekly Prep Standard',
    guests: '4–6 guests, weekly',
    price: '2,700',
    perPerson: '~899/session',
    included: 'Two prep sessions a week for a larger household, rotating menus, every dietary need covered, kitchen left clean.',
    recurring: true,
  },
  {
    name: 'Corporate Dinner',
    guests: '10–15 guests',
    price: '4,500',
    perPerson: '300–450',
    included: 'A multi-course or buffet menu with service staff, presented to the standard the room expects.',
    recurring: false,
  },
  {
    name: 'The Full Experience',
    guests: '6–10 guests',
    price: '5,500',
    perPerson: '550–900',
    included: 'A multi-course tasting menu, a full service team, and plating you would expect from a restaurant — in your own home.',
    recurring: false,
  },
]
