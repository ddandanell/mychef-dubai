import { Link } from 'react-router'
import { Sun, Utensils, Flame, Salad, Moon, Home } from 'lucide-react'
import OccasionCateringPage from './occasion/OccasionCateringPage'
import type { OccasionPageConfig } from './occasion/OccasionCateringPage'

const config: OccasionPageConfig = {
  slug: 'desert-dining-dubai',
  seoTitle: 'Desert Dining & Camp Catering Dubai | Luxury Outdoor Feasts',
  metaDescription:
    'Desert dining and camp catering in Dubai: private dune dinners, Bedouin-style feasts, live grills and full-service outdoor events under the stars.',
  canonicalPath: '/desert-dining-dubai',
  ogImage: '/images/desert-dining-dubai-hero.webp',
  breadcrumbLabel: 'Desert Dining & Camp Catering Dubai',
  h1: 'Desert Dining & Camp Catering in Dubai',
  heroSub:
    'Private dune dinners, Bedouin-style feasts and luxury camp catering across Dubai’s desert — live grills, Arabic sharing menus and service under the stars.',
  heroImage: '/images/desert-dining-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to plan desert dining or camp catering in Dubai (via mychef.ae/desert-dining-dubai)",
  eyebrow: 'DESERT CATERING IN DUBAI',
  introH2: 'A Feast Under the Desert Sky',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Dubai’s desert is one of the most dramatic places to host a meal. Whether you are planning a private dune dinner, a corporate retreat, a romantic proposal or a Bedouin-style celebration, our desert dining catering brings the kitchen to the sand. We design menus that feel authentic to the setting — Arabic sharing plates, live grills, fragrant rice dishes and slow-cooked meats — while keeping logistics, safety and guest comfort front of mind.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        Our team handles transport, on-site cooking, service styling and pack-down, working with desert camps, event planners and private estates. Explore our{' '}
        <Link to="/arabic-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          Arabic catering Dubai
        </Link>{' '}
        menus for traditional flavours, or see how this complements our{' '}
        <Link to="/bbq-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          BBQ catering Dubai
        </Link>{' '}
        live grilling options.
      </p>
    </>
  ),
  formatsH2: 'Desert Dining Formats',
  formats: [
    {
      Icon: Utensils,
      title: 'Bedouin Sharing Feasts',
      description: 'Large communal platters of Arabic mezze, grilled meats and rice, served in traditional style around low tables or carpets.',
      link: '/arabic-catering-dubai',
    },
    {
      Icon: Flame,
      title: 'Live Desert Grill',
      description: 'Chefs grill lamb, chicken, seafood and vegetables over open flames as the sun sets over the dunes.',
      link: '/bbq-catering-dubai',
    },
    {
      Icon: Salad,
      title: 'Mezze & Salad Spreads',
      description: 'Cool mezze, tabbouleh, fattoush and dips that balance the richer grilled dishes in the desert heat.',
      link: '/mediterranean-catering-dubai',
    },
    {
      Icon: Moon,
      title: 'Sunset & Starlight Dinners',
      description: 'Timed service at sunset or under the stars, with lanterns, candles and warm service for an unforgettable atmosphere.',
      link: '/luxury-dining-experiences',
    },
    {
      Icon: Home,
      title: 'Private Desert Camps',
      description: 'Full-service catering at licensed desert camps and private setups arranged by your event planner.',
      link: '/event-catering-dubai',
    },
    {
      Icon: Sun,
      title: 'Corporate Retreat Dining',
      description: 'Structured group dining for team-building retreats, conferences and incentive trips in the desert.',
      link: '/corporate',
    },
  ],
  useCasesEyebrow: 'WHERE DESERT DINING COMES ALIVE',
  useCasesH2: 'Memorable Outdoor Experiences',
  useCases: [
    {
      title: 'Private Dune Dinners',
      description:
        'For proposals, anniversaries or VIP guests, a private table on the dunes with a dedicated chef and server creates a once-in-a-lifetime experience.',
    },
    {
      title: 'Bedouin-Style Celebrations',
      description:
        'Birthdays, family gatherings and cultural events feel natural in a Bedouin-style setup with cushions, carpets and sharing platters.',
    },
    {
      title: 'Corporate Desert Retreats',
      description:
        'Team-building days and incentive trips often end with a desert dinner. We scale the menu and service to match the group size and brand tone.',
    },
    {
      title: 'Cultural & Seasonal Events',
      description:
        'Desert dining is especially popular during Ramadan, Eid and cooler months. We adapt timings, menus and service style for each occasion.',
    },
  ],
  includedH2: "What's Included in Our Desert Dining Catering",
  includedItems: [
    { title: 'Arabic & Mediterranean Menus', description: 'Sharing platters, mezze, grilled meats and rice dishes suited to the desert setting.' },
    { title: 'Live Grill Stations', description: 'On-site grilling over charcoal or open flame for aroma and theatre.' },
    { title: 'Desert-Safe Logistics', description: 'Insulated transport, covered prep areas and wind-aware serving setups.' },
    { title: 'Ambient Styling Support', description: 'Coordination with your camp or planner on lanterns, low tables and service flow.' },
    { title: 'Dietary Adaptations', description: 'Vegetarian, vegan, halal and allergy-conscious options available.' },
    { title: 'Dedicated Service Staff', description: 'Experienced outdoor service team for sand-based events.' },
    { title: 'Timed Sunset Service', description: 'Service planned around sunset, temperature and guest arrival.' },
    { title: 'Full Pack-Down', description: 'We clear the catering area and leave no trace on the dunes.' },
  ],
  galleryH2: 'A Taste of Our Desert Dining',
  galleryImages: [
    { src: '/menu-appetizer.webp', alt: 'Arabic appetisers for desert dining in Dubai' },
    { src: '/menu-canapes.webp', alt: 'Desert camp canapé selection' },
    { src: '/menu-dessert.webp', alt: 'Dessert under the desert stars' },
    { src: '/service-catering.webp', alt: 'Desert dining set-up in Dubai' },
    { src: '/service-villa.webp', alt: 'Private dune dinner styling' },
    { src: '/service-events.webp', alt: 'Desert event catering in Dubai' },
  ],
  faqsH2: 'Desert Dining Questions',
  faqs: [
    {
      q: 'Can you cater at any desert camp in Dubai?',
      a: 'We cater at licensed desert camps and private setups arranged by event planners. If you already have a camp or location, we coordinate directly with them on access, power and service areas.',
    },
    {
      q: 'What food is best for desert dining?',
      a: 'Arabic sharing menus work beautifully: hot and cold mezze, grilled meats, spiced rice, flatbreads and fresh salads. We also offer Mediterranean and fusion options on request.',
    },
    {
      q: 'Do you provide the camp setup or just the food?',
      a: 'We specialise in the catering, but we can coordinate closely with your camp provider or event planner on tables, cushions, lighting and service flow.',
    },
    {
      q: 'Is desert dining available year-round?',
      a: 'It is most comfortable from October to April. Summer events are possible in the early morning or late evening with shaded, cooled setups and adjusted menus.',
    },
    {
      q: 'Can you handle dietary requirements in the desert?',
      a: 'Yes. We plan vegetarian, vegan, gluten-free and halal options just as carefully for desert events as we do for indoor catering.',
    },
    {
      q: 'How far in advance should I book desert dining catering?',
      a: 'Three to four weeks is ideal, especially for large groups or peak season. This gives us time to coordinate transport, camp access and menu sourcing.',
    },
  ],
  relatedServices: [
    {
      title: 'Arabic Catering',
      description: 'Traditional Arabic sharing menus perfect for desert feasts.',
      image: '/images/arabic-catering-dubai-hero.webp',
      link: '/arabic-catering-dubai',
    },
    {
      title: 'BBQ Catering',
      description: 'Live grilling stations that bring theatre to any outdoor setting.',
      image: '/images/bbq-catering-dubai-hero.webp',
      link: '/bbq-catering-dubai',
    },
    {
      title: 'Luxury Dining Experiences',
      description: 'Bespoke private dining for unforgettable moments in Dubai.',
      image: '/service-villa.webp',
      link: '/luxury-dining-experiences',
    },
  ],
  ctaH2: 'Plan a Desert Dining Experience',
  ctaP:
    'Tell us about your camp, group size and vision. We will design a Bedouin-inspired menu and service plan that makes the dunes feel like the finest dining room in Dubai.',
}

export default function DesertDining() {
  return <OccasionCateringPage config={config} />
}
