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
  title: 'Pastry Chef',
  partnerLabel: 'Independent partner chef',
  experience: '12+ Years',
  cuisine: 'Modern Patisserie & Dessert Design',
  image: '/team-pastry-chef.webp',
  imageAlt: 'Chef Matteo Moretti, independent partner pastry chef in the myCHEF Dubai network',
  bio: 'Matteo Moretti is a classically trained independent pastry chef whose desserts are as theatrical as they are delicious. After graduating from Le Cordon Bleu Paris, he spent years in boutique patisseries and luxury hotel pastry departments across Europe before joining the myCHEF Dubai network of partner chefs. Matteo believes the final course should leave the strongest impression, and he approaches every dessert as edible art. His chocolate work, sugar sculptures, and plated desserts have become a signature of wedding receptions, product launches, and intimate dinner parties throughout the city. Beyond technique, he brings a deep understanding of flavour balance and dietary adaptation, ensuring every guest experiences a memorable sweet finish. Whether designing an elaborate dessert table or a single show-stopping cake, Matteo delivers precision, creativity, and unmistakable elegance.',
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
