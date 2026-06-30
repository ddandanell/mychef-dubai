import ChefProfile, { type ChefProfileData } from './ChefProfile'

const chef: ChefProfileData = {
  slug: '/chefs/layla-middle-eastern-chef',
  name: 'Layla Hassan',
  title: 'Middle Eastern Chef',
  experience: '14+ Years',
  cuisine: 'Middle Eastern & Arabic',
  image: '/images/arabic-catering-dubai-hero.webp',
  imageAlt: 'Chef Layla Hassan preparing Middle Eastern cuisine for a myCHEF Dubai event',
  bio: 'Layla Hassan is a passionate advocate for the bold, generous flavours of the Middle East. Raised in a family where recipes were passed down through generations, she trained formally in Lebanese and Emirati kitchens before leading banquet and catering operations for some of Dubai’s most prestigious events. Layla specialises in turning traditional dishes into refined, contemporary presentations while preserving their authentic heart. Her mezze spreads, grilled meats, and aromatic rice dishes are designed for sharing and celebration. She is especially sought after during Ramadan, Eid, and national celebrations, when her Iftar and feast menus create a sense of community and occasion. Layla’s warmth and deep cultural knowledge make her a natural host in the kitchen as well as at the table.',
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
    'HACCP Level 3 Certified',
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
