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
  title: 'Independent partner chef',
  partnerLabel: 'Partner chef · employed by a licensed supplier',
  experience: '',
  cuisine: 'Modern European and French technique',
  image: '/team-head-chef.webp',
  imageAlt: 'Chef Ahmed Al-Rashid, independent partner chef in the myCHEF Dubai network',
  bio: 'Ahmed Al-Rashid is an independent partner chef in the myCHEF Dubai network. Classical French technique, cooked in Dubai homes, villas and yachts, and on corporate dinners when the brief is plated. He writes the menu with the host: what this table eats, how the courses should land, and how the kitchen is left. Anniversary dinners, villa celebrations and boardroom lunches are the usual nights. You approve the profile before anyone starts. We do not publish years of experience.',
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
      description: 'Seven courses built around seasonal produce and the proteins this table asked for.',
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
