// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /chefs/marco-italian-chef
//     primary:     "italian private chef dubai"
//     subkeywords: "private chef italian food dubai" · "italian chef for dinner party dubai" · "italian chef at home dubai" · "italian food supplier dubai" · "italian catering in dubai" · "courses of an italian dinner" · "eat italian catering menu"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import ChefProfile, { type ChefProfileData } from './ChefProfile'

const chef: ChefProfileData = {
  slug: '/chefs/marco-italian-chef',
  name: 'Marco Rossi',
  title: 'Independent partner chef',
  seoPhrase: 'Italian Private Chef Dubai',
  experience: '15+ Years',
  cuisine: 'Authentic Italian & Mediterranean',
  image: '/team-sous-chef.webp',
  imageAlt: 'Independent partner chef Marco Rossi, Italian cuisine specialist in the myCHEF Dubai network',
  bio: 'Marco Rossi is an independent partner chef in the myCHEF Dubai network. He grew up in Tuscany, learning to cook from his grandmother before training professionally in Rome and Milan. For the past fifteen years he has brought the soul of Italian regional cuisine to private kitchens, villas, and yacht galleys across the Mediterranean and the Gulf. Marco is happiest when hand-rolling pasta, building antipasti boards, or coaxing flavour from simple, exceptional ingredients. His menus celebrate the Italian tradition of convivial dining, where every dish is designed to be shared, discussed, and enjoyed. From rustic family-style feasts to refined seafood dinners, he adapts his craft to the mood of each event while staying true to the honest flavours that define Italian cooking.',
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
    'Level 3 food-safety certified (partner-held)',
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
