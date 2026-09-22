// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /chefs/layla-middle-eastern-chef
//     primary:     "arabic private chef dubai"
//     subkeywords: "middle eastern private chef dubai" · "arabic chef for home dinner dubai" · "private chef arabic food dubai" · "chef middle east dubai" · "top personal chef services providers in dubai" · "top personal chef in dubai" · "top personal chef provider in dubai" · "arabic food names in dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import ChefProfile, { type ChefProfileData } from './ChefProfile'

const chef: ChefProfileData = {
  slug: '/chefs/layla-middle-eastern-chef',
  name: 'Layla Hassan',
  title: 'Independent partner chef',
  seoPhrase: 'Arabic Private Chef Dubai',
  partnerLabel: 'Partner chef · employed by a licensed supplier',
  experience: '',
  cuisine: 'Middle Eastern and Arabic',
  image: '/images/chefs/layla-hassan.webp',
  imageAlt: 'Chef Layla Hassan, independent partner chef for myCHEF Dubai, in a professional black chef\'s jacket in a kitchen setting.',
  bio: "Layla Hassan is an Arabic private chef in Dubai, working through a licensed culinary partner. Her menus draw on Levantine and Emirati cooking, from generous mezze and grilled dishes to traditional rice courses and iftar tables. Each menu is developed around your household or occasion, with the chef profile and availability confirmed before booking.",
  specialties: [
    'Arabic Mezze',
    'Grilled Meats',
    'Ramadan & Iftar',
    'Emirati Flavours',
    'Live Stations',
  ],
  sampleMenus: [
    {
      title: 'Emirati Heritage Feast',
      description: 'A celebration of local flavours, from fragrant rice to slow-cooked meats.',
      items: [
        'Machboos with lamb',
        'Thareed with roasted vegetables',
        'Grilled hammour with za’atar',
        'Balaleet with saffron omelette',
        'Luqaimat with date syrup',
      ],
    },
    {
      title: 'Levantine Mezze & Grill',
      description: 'Shared salads, dips, and flame-grilled specialities for any gathering.',
      items: [
        'Hummus, moutabal, and muhammara',
        'Fattoush and tabbouleh',
        'Shish tawook and kofta',
        'Samke harra spiced fish',
        'Baklava and fresh fruit',
      ],
    },
    {
      title: 'Iftar Sharing Menu',
      description: 'A balanced Iftar designed for breaking the fast with family and guests.',
      items: [
        'Dates, laban, and lentil soup',
        'Mixed hot and cold mezze',
        'Chicken musakhan rolls',
        'Lamb ouzi with fragrant rice',
        'Kunafa with rosewater syrup',
      ],
    },
  ],
  certifications: [
    'Food-safety certified (partner-held)',
    'Dubai Municipality Food Safety Certification',
    'Halal Preparation Standards',
  ],
  eventTypes: [
    'Iftar Gatherings',
    'Eid Celebrations',
    'Villa BBQs',
    'Weddings',
    'National Day Events',
  ],
}

export default function ChefLayla() {
  return <ChefProfile chef={chef} />
}
