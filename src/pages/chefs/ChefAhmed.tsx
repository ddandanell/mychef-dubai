import ChefProfile, { type ChefProfileData } from './ChefProfile'

const chef: ChefProfileData = {
  slug: '/chefs/ahmed-executive-chef',
  name: 'Ahmed Al-Rashid',
  title: 'Executive Chef',
  experience: '18+ Years',
  cuisine: 'Modern European & Fine Dining',
  image: '/team-head-chef.webp',
  imageAlt: 'Chef Ahmed Al-Rashid, Executive Chef at myCHEF Dubai',
  bio: 'Ahmed Al-Rashid has spent nearly two decades shaping luxury dining experiences across Dubai, London, and Paris. Trained in classical French technique, he refined his craft in Michelin-starred kitchens before returning to the UAE to lead private culinary teams for high-end villas, yachts, and corporate events. His philosophy is simple: the finest ingredients, treated with precision, should tell a story on every plate. Ahmed designs each menu as a personal collaboration with the host, balancing elegant presentation with the warmth of genuine hospitality. From intimate anniversary dinners to multi-course gala receptions, he ensures every course is timed, seasoned, and served to exacting standards. His calm kitchen leadership and obsessive attention to detail have made him the chef of choice for clients who expect nothing less than restaurant-quality dining in their own space.',
  specialties: [
    'French Technique',
    'Menu Design',
    'Luxury Plated Service',
    'Team Leadership',
    'Villa Dining',
  ],
  sampleMenus: [
    {
      title: 'Modern European Tasting',
      description: 'A refined seven-course journey built around seasonal produce and premium proteins.',
      items: [
        'Amuse-bouche of chilled cucumber and yuzu',
        'Seared scallop with cauliflower purée',
        'Line-caught sea bass in saffron velouté',
        '48-hour short rib with truffle jus',
        'Artisan cheese selection',
        'Valrhona chocolate sphere with gold leaf',
      ],
    },
    {
      title: 'Villa Celebration Dinner',
      description: 'Elegant family-style plating designed for villa dining rooms and terraces.',
      items: [
        'Burrata and heirloom tomato salad',
        'Truffle arancini',
        'Herb-crusted lamb rack',
        'Root vegetable gratin',
        'Dark chocolate fondant',
      ],
    },
    {
      title: 'Corporate Boardroom Lunch',
      description: 'Balanced, light dishes that keep energy high during working lunches.',
      items: [
        'Seasonal grain and roasted vegetable bowl',
        'Pan-seared salmon with citrus glaze',
        'Lemon thyme chicken supreme',
        'Petit fours and coffee service',
      ],
    },
  ],
  certifications: [
    'HACCP Level 3 Certified',
    'Dubai Municipality Food Safety Certification',
    'ISO 22000 Food Safety Awareness',
  ],
  eventTypes: [
    'Private Villa Dinners',
    'Yacht Events',
    'Corporate Dinners',
    'Birthday Celebrations',
    'Wedding Receptions',
  ],
}

export default function ChefAhmed() {
  return <ChefProfile chef={chef} />
}
