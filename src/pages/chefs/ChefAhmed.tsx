// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /chefs/ahmed-executive-chef
//     primary:     none (untargeted by decision)
//     subkeywords: none
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import ChefProfile, { type ChefProfileData } from './ChefProfile'

const chef: ChefProfileData = {
  slug: '/chefs/ahmed-executive-chef',
  name: 'Ahmed Al-Rashid',
  title: 'Executive Chef',
  partnerLabel: 'Partner chef · employed by a licensed supplier',
  experience: '18+ Years',
  cuisine: 'Modern European & Fine Dining',
  image: '/team-head-chef.webp',
  imageAlt: 'Chef Ahmed Al-Rashid, independent partner chef in the myCHEF Dubai network',
  bio: 'Ahmed Al-Rashid is an independent partner chef in the myCHEF Dubai network, with nearly two decades of experience shaping luxury dining across Dubai, London, and Paris. Trained in classical French technique, he refined his craft in acclaimed fine-dining kitchens before returning to the UAE, where he is matched to myCHEF experiences at high-end villas, yachts, and corporate events. His philosophy is simple: the best ingredients, treated with precision, should tell a story on every plate. Ahmed designs each menu as a personal collaboration with the host, balancing elegant presentation with the warmth of genuine hospitality. From intimate anniversary dinners to multi-course gala receptions, he ensures every course is timed, seasoned, and served to exacting standards. His calm kitchen leadership and obsessive attention to detail have made him the chef of choice for clients who expect nothing less than restaurant-quality dining in their own space.',
  specialties: [
    'French Technique',
    'Menu Design',
    'Luxury Plated Service',
    'Kitchen Leadership',
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
    'Advanced Food Safety Certification',
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
