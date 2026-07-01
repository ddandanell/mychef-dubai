import { Link } from 'react-router'
import { Heart, Wine, Sparkles, Home, Building, UtensilsCrossed } from 'lucide-react'
import OccasionCateringPage from './occasion/OccasionCateringPage'
import type { OccasionPageConfig } from './occasion/OccasionCateringPage'

const config: OccasionPageConfig = {
  slug: 'valentines-day-catering-dubai',
  seoTitle: "Valentine's Day Private Dining Dubai | Romantic Dinner at Home",
  metaDescription:
    "Valentine's Day private dining and romantic catering in Dubai. Candlelit dinners for two, proposals, anniversaries and intimate celebrations at home or venue.",
  canonicalPath: '/valentines-day-catering-dubai',
  ogImage: '/images/valentines-day-catering-dubai-hero.webp',
  breadcrumbLabel: "Valentine's Day Catering Dubai",
  h1: "Valentine's Day Private Dining in Dubai",
  heroSub:
    "An intimate, candlelit Valentine's dinner crafted by a private chef in your Dubai home, villa or venue — bespoke menus, roses, champagne service and seamless cleanup.",
  heroImage: '/images/valentines-day-catering-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to plan Valentine's Day private dining in Dubai (via mychef.ae/valentines-day-catering-dubai)",
  eyebrow: "VALENTINE'S DAY CATERING IN DUBAI",
  introH2: "A Valentine's Dinner Worth Remembering",
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Valentine's Day in Dubai deserves more than a crowded restaurant and a fixed menu. Our private Valentine's dining experience brings the romance to you — a beautifully set table, a bespoke multi-course menu, attentive service and the privacy of your own home or villa. Whether you are planning a surprise proposal, celebrating decades together, or simply want an evening that feels truly special, we design every detail around the two of you.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        We serve Valentine's dinners across Dubai, from Palm Jumeirah penthouses and Emirates Hills villas to Downtown apartments and yacht decks. Pair this with our{' '}
        <Link to="/romantic-dinner-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          romantic dinner Dubai
        </Link>{' '}
        service for year-round date nights, or explore{' '}
        <Link to="/luxury-dining-experiences" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          luxury private dining
        </Link>{' '}
        for milestone celebrations.
      </p>
    </>
  ),
  formatsH2: "Valentine's Day Dining Formats",
  formats: [
    {
      Icon: Heart,
      title: 'Dinner for Two',
      description: 'An intimate multi-course menu served at a candlelit table for two — perfect for proposals, anniversaries or a meaningful date night.',
      link: '/romantic-dinner-dubai',
    },
    {
      Icon: Wine,
      title: 'Wine & Champagne Pairing',
      description: 'Curated wine, champagne or mocktail pairings chosen to complement each course and elevate the occasion.',
      link: '/bar-services-dubai',
    },
    {
      Icon: Sparkles,
      title: 'Surprise Proposal Setup',
      description: 'Discreet coordination, romantic styling and flawless timing so the only thing left to do is ask the question.',
      link: '/private-party-catering-dubai',
    },
    {
      Icon: Home,
      title: 'At-Home Villa Dining',
      description: 'Transform your living room, terrace or garden into a private restaurant with full setup, service and cleanup.',
      link: '/villas-private-residences',
    },
    {
      Icon: Building,
      title: 'Venue & Yacht Dinners',
      description: 'Romantic catering delivered to event venues, beach clubs, yachts or hotel suites across Dubai.',
      link: '/yachts',
    },
    {
      Icon: UtensilsCrossed,
      title: 'Group Valentine Celebrations',
      description: 'Elegant shared menus for double dates, galentines gatherings or small parties who want a romantic atmosphere.',
      link: '/party-catering-dubai',
    },
  ],
  useCasesEyebrow: "WHERE VALENTINE'S DINING SHINES",
  useCasesH2: "Romance, Privacy & Impeccable Taste",
  useCases: [
    {
      title: 'Marriage Proposals',
      description:
        'We plan the menu, timing and service flow around your proposal moment. The chef and server step away at exactly the right time, leaving you with privacy and a perfectly plated celebration.',
    },
    {
      title: 'Anniversary Celebrations',
      description:
        'Mark a milestone with a menu that recalls favourite dishes, destinations or memories. Our chefs can recreate a honeymoon meal or design a tasting menu around your years together.',
    },
    {
      title: 'At-Home Date Nights',
      description:
        'Skip the traffic and reservations. A private chef prepares a restaurant-quality dinner in your kitchen while you relax, dress up and enjoy the evening in your own space.',
    },
    {
      title: 'Yacht & Rooftop Romance',
      description:
        "For a dramatic backdrop, we cater Valentine's dinners on Dubai yachts, rooftop terraces and pool decks, with menus that travel well and service that feels effortless.",
    },
  ],
  includedH2: "What's Included in Our Valentine's Day Catering",
  includedItems: [
    { title: 'Bespoke Multi-Course Menu', description: 'A personalised menu designed around your tastes, dietary needs and the mood of the evening.' },
    { title: 'Table Styling & Ambiance', description: 'Candles, linens, flowers and elegant tableware to create a romantic setting.' },
    { title: 'Champagne & Wine Service', description: 'Optional pairing menus and dedicated service for wine, champagne or crafted mocktails.' },
    { title: 'Private Chef & Server', description: 'A discreet chef and attentive server who deliver professional hospitality without intrusion.' },
    { title: 'Dietary Accommodation', description: 'Halal, vegetarian, vegan, gluten-free and allergy-aware menus available on request.' },
    { title: 'Proposal Coordination', description: 'We time courses and service around your plan so the moment unfolds seamlessly.' },
    { title: 'Full Setup & Cleanup', description: 'We arrive early to prepare, serve throughout the evening, and leave your space spotless.' },
    { title: 'Flexible Locations', description: 'Service at villas, apartments, yachts, venues and hotel suites across Dubai.' },
  ],
  galleryH2: "A Taste of Our Valentine's Day Catering",
  galleryImages: [
    { src: '/images/valentines-day-catering-dubai-hero.webp', alt: "Valentine's Day private dining setup in Dubai" },
    { src: '/menu-appetizer.webp', alt: 'Romantic appetisers for a private dinner' },
    { src: '/menu-canapes.webp', alt: "Elegant canapés for a Valentine's celebration" },
    { src: '/menu-dessert.webp', alt: 'Valentine dessert and chocolate plating' },
    { src: '/service-luxury-dining.webp', alt: 'Luxury private dining experience in Dubai' },
    { src: '/service-events.webp', alt: 'Intimate event catering for couples in Dubai' },
  ],
  faqsH2: "Valentine's Day Dining Questions",
  faqs: [
    {
      q: "Can you cater a Valentine's dinner just for two?",
      a: 'Absolutely. Our dinner-for-two service is designed for intimacy, with a private chef, server and bespoke menu tailored to both guests.',
    },
    {
      q: 'Do you help with proposal setups?',
      a: 'Yes. We coordinate the timing, styling and service so you can focus on the moment. Tell us your plan and we will build the evening around it.',
    },
    {
      q: "Can Valentine's dinner be served at my home or villa?",
      a: 'Yes. We bring everything needed to turn your home, villa, terrace or yacht into a private dining room, then clear away afterwards.',
    },
    {
      q: 'Do you provide wine, champagne or mocktails?',
      a: 'We offer curated wine and champagne pairings, as well as elegant alcohol-free mocktail menus for guests who prefer non-alcoholic options.',
    },
    {
      q: 'How far in advance should I book?',
      a: "Valentine's Day is one of our busiest dates. We recommend booking two to four weeks ahead, especially for proposal setups and prime dinner slots.",
    },
    {
      q: 'Can the menu accommodate dietary requirements?',
      a: 'Yes. We routinely adapt menus for halal, vegetarian, vegan, gluten-free and allergy-specific needs without compromising on romance or flavour.',
    },
  ],
  relatedServices: [
    {
      title: 'Romantic Dinner Dubai',
      description: 'Year-round intimate dining for two, anniversaries and special date nights.',
      image: '/images/romantic-dinner-dubai-hero.webp',
      link: '/romantic-dinner-dubai',
    },
    {
      title: 'Luxury Private Dining',
      description: 'Bespoke multi-course experiences in your home, villa or chosen venue.',
      image: '/service-luxury-dining.webp',
      link: '/luxury-dining-experiences',
    },
    {
      title: 'Dessert Table Catering',
      description: 'Show-stopping sweet displays to finish a romantic evening beautifully.',
      image: '/menu-dessert.webp',
      link: '/dessert-table-catering-dubai',
    },
  ],
  ctaH2: "Plan a Valentine's Dinner They'll Never Forget",
  ctaP:
    "Tell us about your plans, venue and dietary preferences. We will design a romantic Valentine's dinner that feels effortless, intimate and unforgettable.",
}

export default function ValentinesDayCatering() {
  return <OccasionCateringPage config={config} />
}
