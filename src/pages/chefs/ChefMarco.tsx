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
  experience: '',
  cuisine: 'Italian and Mediterranean',
  image: '/team-sous-chef.webp',
  imageAlt: 'Independent partner chef Marco Rossi, Italian cuisine specialist in the myCHEF Dubai network',
  bio: 'Marco Rossi is an Italian private chef Dubai hosts book through myCHEF: an independent partner chef, employed by a licensed supplier. Private chef Italian food Dubai, an Italian chef for dinner party Dubai nights, and an Italian chef at home Dubai are the same person in your kitchen, then clear-down. Hand-rolled pasta, antipasti, regional Italian and seafood are the usual brief. Italian catering in Dubai sits on the catering pages when the night is a party. You approve the profile before anyone starts. We do not publish years of experience.',
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
