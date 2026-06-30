import ChefProfile, { type ChefProfileData } from './ChefProfile'

const chef: ChefProfileData = {
  slug: '/chefs/sofia-pastry-chef',
  name: 'Sofia Moretti',
  title: 'Pastry Chef',
  experience: '12+ Years',
  cuisine: 'Modern Patisserie & Dessert Design',
  image: '/team-pastry-chef.webp',
  imageAlt: 'Chef Sofia Moretti, Pastry Chef at myCHEF Dubai',
  bio: 'Sofia Moretti is a classically trained pastry chef whose desserts are as theatrical as they are delicious. After graduating from Le Cordon Bleu Paris, she spent years in boutique patisseries and luxury hotel pastry departments across Europe before joining myCHEF Dubai. Sofia believes the final course should leave the strongest impression, and she approaches every dessert as edible art. Her chocolate work, sugar sculptures, and plated desserts have become a signature of wedding receptions, product launches, and intimate dinner parties throughout the city. Beyond technique, she brings a deep understanding of flavour balance and dietary adaptation, ensuring every guest experiences a memorable sweet finish. Whether designing an elaborate dessert table or a single show-stopping cake, Sofia delivers precision, creativity, and unmistakable elegance.',
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
    'HACCP Level 2 Certified',
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

export default function ChefSofia() {
  return <ChefProfile chef={chef} />
}
