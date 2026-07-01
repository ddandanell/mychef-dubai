import { Link } from 'react-router'
import { MilkOff, Utensils, Salad, Cake, Home, Building } from 'lucide-react'
import DietaryCateringPage from './dietary/DietaryCateringPage'
import type { DietaryPageConfig } from './dietary/DietaryCateringPage'

const config: DietaryPageConfig = {
  slug: 'dairy-free-catering-dubai',
  seoTitle: 'Dairy-Free Catering Dubai | Lactose-Free Event Menus',
  metaDescription:
    'Dairy-free and lactose-free catering in Dubai for weddings, villas, offices and parties. Creamy textures without dairy, full-service execution. Request a quote.',
  canonicalPath: '/dairy-free-catering-dubai',
  ogImage: '/images/dairy-free-catering-dubai-hero.webp',
  breadcrumbLabel: 'Dairy-Free Catering Dubai',
  h1: 'Dairy-Free Catering in Dubai',
  heroSub:
    'Lactose-free menus, dairy-free desserts and creamy alternatives for weddings, villa dinners, corporate events and celebrations across Dubai.',
  heroImage: '/images/dairy-free-catering-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to plan dairy-free catering in Dubai (via mychef.ae/dairy-free-catering-dubai)",
  eyebrow: 'LACTOSE-FREE CATERING IN DUBAI',
  introH2: 'Dairy-Free Menus That Still Feel Indulgent',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Dairy-free catering has moved far beyond omission. With the right oils, nut milks, coconut creams and cultured alternatives, our chefs build menus that are every bit as rich, rounded and satisfying as their dairy-based equivalents. Whether your guests are lactose intolerant, vegan, or simply avoiding dairy, we create events where no one feels they are missing out.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        From dairy-free wedding cakes to creamy risottos and luscious desserts, every course is designed without milk, cream, butter or cheese. Browse how this connects with our{' '}
        <Link to="/vegan-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          vegan catering Dubai
        </Link>{' '}
        offering, or see our full{' '}
        <Link to="/cuisines-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          cuisine collection
        </Link>{' '}
        for mixed-diet inspiration.
      </p>
    </>
  ),
  formatsH2: 'Dairy-Free Formats for Every Occasion',
  formats: [
    {
      Icon: Utensils,
      title: 'Plated Dairy-Free Dinners',
      description: 'Multi-course plated menus where creamy sauces, reductions and finishes are rebuilt using dairy-free techniques without losing depth.',
      link: '/catering-dubai',
    },
    {
      Icon: Salad,
      title: 'Dairy-Free Buffets',
      description: 'Generous buffet lines with clearly labelled dairy-free mains, sides and salads, perfect for mixed groups and large celebrations.',
      link: '/buffet-catering-dubai',
    },
    {
      Icon: MilkOff,
      title: 'Dairy-Free Canapés',
      description: 'Elegant passed canapés and bowl food with no hidden butter or cream — ideal for receptions and cocktail events.',
      link: '/canape-catering-dubai',
    },
    {
      Icon: Cake,
      title: 'Dairy-Free Desserts & Cakes',
      description: 'Celebration cakes, mousses, tarts and patisserie made with plant-based creams and alternative milks.',
      link: '/dessert-table-catering-dubai',
    },
    {
      Icon: Home,
      title: 'Villa Dairy-Free Dining',
      description: 'At-home dairy-free dining across Dubai’s premium neighbourhoods, cooked and served on-site with full styling.',
      link: '/villa-catering-dubai',
    },
    {
      Icon: Building,
      title: 'Corporate Dairy-Free Lunches',
      description: 'Inclusive office catering with individually packed dairy-free meals or labelled buffet options for boardroom wellness days.',
      link: '/corporate-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE DAIRY-FREE CATERING WORKS',
  useCasesH2: 'Built Around Real Guest Needs',
  useCases: [
    {
      title: 'Lactose-Intolerant Guests',
      description:
        'Lactose intolerance is common, and a thoughtfully planned dairy-free menu means those guests can enjoy every course instead of navigating ingredient questions all evening.',
    },
    {
      title: 'Vegan & Plant-Forward Events',
      description:
        'Dairy-free menus pair naturally with vegan catering. We can design a fully plant-based spread or simply remove dairy while keeping other proteins on the table.',
    },
    {
      title: 'Weddings & Milestone Celebrations',
      description:
        'No one wants a wedding cake that only half the room can eat. Dairy-free desserts, canapés and mains let every guest participate fully in the celebration.',
    },
    {
      title: 'Corporate Wellness Programs',
      description:
        'Offices running wellness weeks or inclusive lunch programs benefit from dairy-free options that feel contemporary rather than restrictive.',
    },
  ],
  includedH2: "What's Included in Our Dairy-Free Catering",
  includedItems: [
    { title: 'No Milk, Cream, Butter or Cheese', description: 'Every element of the dairy-free menu is built without lactose-containing ingredients.' },
    { title: 'Creamy Alternatives', description: 'Nut milks, coconut cream, olive oil and cultured plant-based ingredients recreate richness.' },
    { title: 'Dairy-Free Bakery', description: 'Cakes, tarts and pastries made with alternative fats and milks for texture and flavour.' },
    { title: 'Clear Menu Labelling', description: 'Guests know exactly which dishes are dairy-free, with staff briefed to answer questions.' },
    { title: 'Custom Menu Design', description: 'Menus tailored to your occasion, guest count and any other dietary overlaps.' },
    { title: 'On-Site Cooking & Service', description: 'Food cooked and finished at your venue by our team, served with full front-of-house support.' },
    { title: 'Mixed-Diet Solutions', description: 'We can serve a fully dairy-free event or integrate options within a wider menu.' },
    { title: 'Setup & Pack-Down', description: 'We bring equipment, serve and clear away, leaving your venue tidy.' },
  ],
  galleryH2: 'A Taste of Our Dairy-Free Catering',
  galleryImages: [
    { src: '/menu-appetizer.webp', alt: 'Dairy-free appetisers in Dubai' },
    { src: '/menu-canapes.webp', alt: 'Dairy-free canapé selection' },
    { src: '/menu-dessert.webp', alt: 'Dairy-free dessert display' },
    { src: '/service-catering.webp', alt: 'Dairy-free catering set-up at a Dubai event' },
    { src: '/service-villa.webp', alt: 'Villa dairy-free dinner styling' },
    { src: '/service-events.webp', alt: 'Dairy-free event catering in Dubai' },
  ],
  faqsH2: 'Dairy-Free Catering Questions',
  faqs: [
    {
      q: 'Is the menu completely free of milk, cream, butter and cheese?',
      a: 'Yes. When you book dairy-free catering, every dish is prepared without milk, cream, butter, cheese or other dairy derivatives. We use alternative fats, milks and creams to maintain flavour and texture.',
    },
    {
      q: 'Can you make dairy-free food taste rich and creamy?',
      a: 'Absolutely. We use olive oil, coconut cream, cashew cream, nut milks and other techniques to create the same richness you would expect from traditional dairy-based sauces and desserts.',
    },
    {
      q: 'Do you offer dairy-free celebration cakes?',
      a: 'Yes. Our pastry team bakes dairy-free celebration cakes, tarts and dessert displays using plant-based butters and milks, so the sweet course is just as special.',
    },
    {
      q: 'Can dairy-free catering also be vegan or gluten-free?',
      a: 'We regularly combine dietary requirements. Let us know the full list of needs when planning and we will design a menu that covers dairy-free, vegan, gluten-free, nut-free or any other restrictions safely.',
    },
    {
      q: 'Is dairy-free catering suitable for lactose-intolerant guests?',
      a: 'Yes. Because our dairy-free menus contain no lactose, they are suitable for lactose-intolerant guests. We also label dishes clearly so guests can choose confidently.',
    },
    {
      q: 'How much notice do you need for dairy-free catering?',
      a: 'One to three weeks is typical. Complex bakery items, tasting menus and peak-season dates benefit from earlier booking so we can source the best alternative ingredients.',
    },
  ],
  relatedServices: [
    {
      title: 'Vegan Catering',
      description: 'Fully plant-based menus that are naturally dairy-free and elegantly executed.',
      image: '/menu-appetizer.webp',
      link: '/vegan-catering-dubai',
    },
    {
      title: 'Healthy Catering',
      description: 'Nutrition-conscious menus for corporate wellness and balanced events.',
      image: '/service-corporate.webp',
      link: '/healthy-catering-dubai',
    },
    {
      title: 'Dessert Table Catering',
      description: 'Show-stopping dessert displays, including dairy-free and alternative options.',
      image: '/menu-dessert.webp',
      link: '/dessert-table-catering-dubai',
    },
  ],
  ctaH2: 'Design Your Dairy-Free Menu',
  ctaP:
    'Share your event details and dietary needs. We will build a luscious dairy-free menu that every guest can enjoy without compromise.',
}

export default function DairyFreeCatering() {
  return <DietaryCateringPage config={config} />
}
