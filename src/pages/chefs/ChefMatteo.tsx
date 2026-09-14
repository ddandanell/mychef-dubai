// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /chefs/matteo-pastry-chef
//     primary:     "private pastry chef dubai"
//     subkeywords: "hire a pastry chef dubai" · "dessert chef for private event dubai" · "pastry chef for events dubai" · "dessert chef dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import ChefProfile, { type ChefProfileData } from './ChefProfile'

const chef: ChefProfileData = {
  slug: '/chefs/matteo-pastry-chef',
  name: 'Matteo Moretti',
  title: 'Independent partner pastry chef',
  seoPhrase: 'Private Pastry Chef Dubai',
  partnerLabel: 'Partner chef · employed by a licensed supplier',
  experience: '',
  cuisine: 'Patisserie and plated desserts',
  image: '/team-pastry-chef.webp',
  imageAlt: 'Chef Matteo Moretti, independent partner pastry chef in the myCHEF Dubai network',
  bio: 'Matteo Moretti is a private pastry chef Dubai hosts book through myCHEF: an independent partner chef, employed by a licensed supplier. Hire a pastry chef Dubai for plated desserts, a dessert chef for private event Dubai nights, or a pastry chef for events Dubai when the brief is a dessert table or a wedding cake. Dessert chef Dubai, here, is the last course cooked in your kitchen or plated for a party, then clear-down. You approve the profile before anyone starts. We do not publish years of experience.',
  specialties: [
    'Chocolate Work',
    'Sugar Art',
    'Plated Desserts',
    'Wedding Cakes',
    'Macarons',
  ],
  sampleMenus: [
    {
      title: 'Chocolate Indulgence',
      description: 'A five-course chocolate tasting for true cocoa enthusiasts.',
      items: [
        'Dark chocolate ganache tart',
        'Milk chocolate mousse with caramel',
        'White chocolate parfait',
        'Chocolate soufflé with vanilla crème anglaise',
        'Petit fours selection',
      ],
    },
    {
      title: 'Wedding Dessert Table',
      description: 'A curated display of bite-sized sweets and a central celebration cake.',
      items: [
        'Three-tier vanilla berry cake',
        'Lemon posset verrines',
        'Assorted French macarons',
        'Chocolate truffles',
        'Seasonal fruit tartlets',
      ],
    },
    {
      title: 'Seasonal Fruit & Cream',
      description: 'Lighter desserts that highlight fresh, seasonal produce.',
      items: [
        'Poached pear with saffron',
        'Yuzu posset with citrus salad',
        'Berry pavlova',
        'Honey and thyme ice cream',
      ],
    },
  ],
  certifications: [
    'Food-safety certified',
    'Food Allergen Management Certified',
    'Le Cordon Bleu Paris Diplôme de Pâtisserie',
  ],
  eventTypes: [
    'Weddings',
    'Baby Showers',
    'Corporate Galas',
    'Private Dinners',
    'Product Launches',
  ],
}

export default function ChefMatteo() {
  return <ChefProfile chef={chef} />
}
