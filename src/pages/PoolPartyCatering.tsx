import { Link } from 'react-router'
import { Waves, Utensils, Salad, IceCream, Home, Sun } from 'lucide-react'
import OccasionCateringPage from './occasion/OccasionCateringPage'
import type { OccasionPageConfig } from './occasion/OccasionCateringPage'

const config: OccasionPageConfig = {
  slug: 'pool-party-catering-dubai',
  seoTitle: 'Pool Party Catering Dubai | Fresh, Light Villa Party Food',
  metaDescription:
    'Pool party catering in Dubai for villas and beach clubs. Fresh, light menus, hydration stations, BBQ and sweet treats — full setup and service.',
  canonicalPath: '/pool-party-catering-dubai',
  ogImage: '/images/pool-party-catering-dubai-hero.webp',
  breadcrumbLabel: 'Pool Party Catering Dubai',
  h1: 'Pool Party Catering in Dubai',
  heroSub:
    'Fresh, light and splash-proof catering for villa pool parties and beach club celebrations across Dubai — from grills and salads to mocktails and ice-cream stations.',
  heroImage: '/images/pool-party-catering-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to plan pool party catering in Dubai (via mychef.ae/pool-party-catering-dubai)",
  eyebrow: 'POOLSIDE CATERING IN DUBAI',
  introH2: 'Food That Works in Swimwear and Sunshine',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        A great pool party in Dubai is about cool water, good music and food that survives the heat without weighing guests down. Our pool party catering is designed for exactly that — light, fresh menus that can be eaten casually in swimwear, with plenty of hydration and just enough indulgence to keep the celebration feeling special.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        Whether you are hosting a family villa day in Palm Jumeirah, a teenagers’ birthday by the pool, or an adults-only afternoon with lounge music, we bring live grills, salad bars, canapés and frozen treats to your venue. Explore our{' '}
        <Link to="/bbq-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          BBQ catering Dubai
        </Link>{' '}
        for live grilling, or see how this fits with our{' '}
        <Link to="/villa-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          villa catering Dubai
        </Link>{' '}
        service.
      </p>
    </>
  ),
  formatsH2: 'Pool Party Catering Formats',
  formats: [
    {
      Icon: Utensils,
      title: 'Poolside Canapés',
      description: 'Bite-sized, easy-to-eat canapés passed around the pool — no cutlery, no mess, no one has to leave their lounger.',
      link: '/canape-catering-dubai',
    },
    {
      Icon: Salad,
      title: 'Fresh Salad & Grain Bars',
      description: 'Cool, crunchy salads and grain bowls that hold up in the heat and keep guests feeling light.',
      link: '/buffet-catering-dubai',
    },
    {
      Icon: Waves,
      title: 'Live Grill & BBQ Stations',
      description: 'Beach club-style grilling by the pool: marinated meats, seafood skewers and vegetable kebabs cooked to order.',
      link: '/bbq-catering-dubai',
    },
    {
      Icon: IceCream,
      title: 'Frozen Dessert Stations',
      description: 'Ice-cream, sorbet and frozen fruit stations to keep everyone cool during the hottest part of the day.',
      link: '/dessert-table-catering-dubai',
    },
    {
      Icon: Home,
      title: 'Villa Pool Parties',
      description: 'Full-service catering at your villa across Dubai, with waterproof-style setup, service and pack-down.',
      link: '/villa-catering-dubai',
    },
    {
      Icon: Sun,
      title: 'Beach Club & Venue Parties',
      description: 'Catering coordination for Dubai beach clubs, hotel pools and licensed venues with outdoor service.',
      link: '/event-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE POOL PARTY CATERING SHINES',
  useCasesH2: 'Built for Dubai’s Outdoor Lifestyle',
  useCases: [
    {
      title: 'Family Villa Days',
      description:
        'Villa pools are the heart of Dubai family entertaining. We set up shaded grazing tables, grills and hydration stations so parents and children can graze all afternoon.',
    },
    {
      title: 'Teen & Young Adult Parties',
      description:
        'Teenagers want food that feels casual and Instagram-worthy. Think loaded fries, sliders, mocktail bars and dessert stations by the pool.',
    },
    {
      title: 'Adults-Only Pool Lounges',
      description:
        'For sophisticated afternoon gatherings, we serve elegant canapés, seafood platters, crisp salads and premium non-alcoholic beverages poolside.',
    },
    {
      title: 'Heat-Proof Celebrations',
      description:
        'Dubai summers demand menus designed for temperature. We use fresh ingredients, chilled service and timed preparation so food tastes great even at midday.',
    },
  ],
  includedH2: "What's Included in Our Pool Party Catering",
  includedItems: [
    { title: 'Light, Heat-Friendly Menus', description: 'Fresh dishes that taste great in warm weather and do not sit heavily.' },
    { title: 'Live Grill & BBQ Options', description: 'On-site grilling for that authentic poolside smell and flavour.' },
    { title: 'Hydration Stations', description: 'Infused waters, mocktails and chilled juices to keep guests hydrated.' },
    { title: 'Fresh Salads & Grains', description: 'Cool, colourful sides that balance the grilled proteins.' },
    { title: 'Frozen Treats', description: 'Ice-cream, sorbet and fruit stations for a cooling sweet finish.' },
    { title: 'Splash-Proof Setup', description: 'Sturdy, covered serving stations designed for wet feet and pool spray.' },
    { title: 'Poolside Service Staff', description: 'Friendly team experienced in outdoor, casual service.' },
    { title: 'Full Pack-Down', description: 'We clear and clean the catering area so you can keep the party going.' },
  ],
  galleryH2: 'A Taste of Our Pool Party Catering',
  galleryImages: [
    { src: '/menu-appetizer.webp', alt: 'Pool party appetisers in Dubai' },
    { src: '/menu-canapes.webp', alt: 'Poolside canapé selection' },
    { src: '/menu-dessert.webp', alt: 'Frozen dessert station by the pool' },
    { src: '/service-catering.webp', alt: 'Pool party catering set-up at a Dubai villa' },
    { src: '/service-villa.webp', alt: 'Villa pool party styling' },
    { src: '/service-events.webp', alt: 'Poolside catering in Dubai' },
  ],
  faqsH2: 'Pool Party Catering Questions',
  faqs: [
    {
      q: 'What food works best for a pool party in Dubai?',
      a: 'Light, fresh menus work best: grilled meats and seafood, colourful salads, canapés, fruit platters and frozen desserts. Heavy, hot dishes tend to feel out of place by the water.',
    },
    {
      q: 'Can you keep food cool and safe by the pool?',
      a: 'Yes. We use chilled serving equipment, ice baths, covered stations and timed preparation to keep everything at a safe temperature, even on hot Dubai afternoons.',
    },
    {
      q: 'Do you provide mocktail bars for pool parties?',
      a: 'Yes. Our mocktail bars are a popular addition for pool parties, serving refreshing, alcohol-free drinks that suit all ages. See our mocktail bar catering page for more.',
    },
    {
      q: 'Can you cater at a villa I have rented?',
      a: 'Absolutely. We cater at private villas across Palm Jumeirah, Emirates Hills, Dubai Hills and beyond. We work around your pool, garden and kitchen setup.',
    },
    {
      q: 'Do you handle setup and cleanup poolside?',
      a: 'Yes. We bring all equipment, set up the food stations, serve during the party and clear everything away afterwards, leaving the area clean and tidy.',
    },
    {
      q: 'How far in advance should I book pool party catering?',
      a: 'Two to four weeks is ideal for weekend pool parties, especially during the cooler season. Last-minute bookings are possible depending on availability.',
    },
  ],
  relatedServices: [
    {
      title: 'BBQ Catering',
      description: 'Live grilling stations perfect for poolside and garden parties.',
      image: '/images/bbq-catering-dubai-hero.webp',
      link: '/bbq-catering-dubai',
    },
    {
      title: 'Mocktail Bar Catering',
      description: 'Refreshing alcohol-free bars ideal for family pool parties.',
      image: '/menu-canapes.webp',
      link: '/mocktail-bar-catering-dubai',
    },
    {
      title: 'Villa Catering',
      description: 'Full-service dining at your Dubai villa, garden or terrace.',
      image: '/service-villa.webp',
      link: '/villa-catering-dubai',
    },
  ],
  ctaH2: 'Plan the Perfect Pool Party Menu',
  ctaP:
    'Tell us about your pool, guest list and timing. We will design a fresh, light menu that keeps everyone cool, fed and in the party mood.',
}

export default function PoolPartyCatering() {
  return <OccasionCateringPage config={config} />
}
