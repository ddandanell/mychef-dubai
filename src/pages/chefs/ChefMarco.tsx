import ChefProfile, { type ChefProfileData } from './ChefProfile'

const chef: ChefProfileData = {
  slug: '/chefs/marco-italian-chef',
  name: 'Marco Rossi',
  title: 'Italian Chef',
  experience: '15+ Years',
  cuisine: 'Authentic Italian & Mediterranean',
  image: '/team-sous-chef.webp',
  imageAlt: 'Chef Marco Rossi, Italian Chef at myCHEF Dubai',
  bio: 'Marco Rossi grew up in Tuscany, learning to cook from his grandmother before training professionally in Rome and Milan. For the past fifteen years he has brought the soul of Italian regional cuisine to private kitchens, villas, and yacht galleys across the Mediterranean and the Gulf. Marco is happiest when hand-rolling pasta, building antipasti boards, or coaxing flavour from simple, exceptional ingredients. His menus celebrate the Italian tradition of convivial dining, where every dish is designed to be shared, discussed, and enjoyed. From rustic family-style feasts to refined seafood dinners, Marco adapts his craft to the mood of each event while staying true to the honest flavours that define Italian cooking.',
  specialties: [
    'Handmade Pasta',
    'Wood-Fired Cooking',
    'Regional Italian',
    'Fresh Seafood',
    'Antipasti',
  ],
  sampleMenus: [
    {
      title: 'Classic Italian Pranzo',
      description: 'A traditional long lunch of antipasti, pasta, and a show-stopping main.',
      items: [
        'Burrata with roasted tomatoes and basil oil',
        'Hand-rolled pici cacio e pepe',
        'Osso buco with saffron risotto',
        'Tiramisù al cucchiaio',
      ],
    },
    {
      title: 'Coastal Seafood Feast',
      description: 'Mediterranean seafood prepared simply and served beautifully.',
      items: [
        'Crudo of sea bream with citrus',
        'Linguine alle vongole',
        'Grilled whole sea bass',
        'Lemon ricotta cheesecake',
      ],
    },
    {
      title: 'Tuscan Family Style',
      description: 'Generous platters meant for passing around the table.',
      items: [
        'Charcuterie and pecorino board',
        'Ribollita soup',
        'Bistecca alla Fiorentina',
        'Cantucci and vin santo',
      ],
    },
  ],
  certifications: [
    'HACCP Level 3 Certified',
    'Italian Culinary Federation Member',
    'Dubai Municipality Food Safety Certification',
  ],
  eventTypes: [
    'Family Celebrations',
    'Villa Dinners',
    'Corporate Lunches',
    'Birthday Parties',
    'Poolside BBQ',
  ],
}

export default function ChefMarco() {
  return <ChefProfile chef={chef} />
}
