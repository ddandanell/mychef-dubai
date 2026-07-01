import { Link } from 'react-router'
import { Star, Utensils, Moon, Home, Building, PartyPopper } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'halal-private-dining-dubai',
  seoTitle: 'Halal Private Dining Dubai | Intimate Halal-Certified Menus at Home',
  metaDescription:
    'Halal private dining in Dubai: bespoke halal menus served in your villa, home or venue by a dedicated chef and service team. Perfect for intimate dinners, family celebrations and corporate hospitality.',
  canonicalPath: '/halal-private-dining-dubai',
  ogImage: '/images/halal-private-dining-dubai-hero.webp',
  breadcrumbLabel: 'Halal Private Dining Dubai',
  h1: 'Halal Private Dining in Dubai',
  heroSub:
    'Bespoke halal menus, private chef service and discreet hospitality for intimate dinners, family celebrations and corporate gatherings across Dubai — all prepared to trusted halal standards.',
  heroImage: '/images/halal-private-dining-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to book halal private dining in Dubai (via mychef.ae/halal-private-dining-dubai)",
  eyebrow: 'HALAL PRIVATE DINING IN DUBAI',
  introH2: 'Halal Dining, Elevated and Personal',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Some occasions call for more than a restaurant reservation. Halal private dining in Dubai brings a dedicated chef, curated menu and professional service team into your home, villa or chosen venue, so you can host with confidence and without compromise. Every dish is prepared to trusted halal standards, using halal-sourced proteins and ingredients, and served with the polish of a fine-dining establishment.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Whether you are planning an intimate anniversary dinner in Emirates Hills, a family celebration in Palm Jumeirah, a Ramadan iftar at home, or a corporate hospitality evening in Downtown Dubai, we design the experience around your guests, your space and your tastes. The menu can lean Arabic, Mediterranean, Asian or contemporary international — always fully halal, always beautifully presented.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        This is the private, chef-led side of our broader{' '}
        <Link to="/halal-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          halal catering Dubai
        </Link>{' '}
        service. For larger guest lists, explore our{' '}
        <Link to="/event-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          event catering Dubai
        </Link>{' '}
        options, or pair private dining with a{' '}
        <Link to="/live-cooking-stations-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          live cooking station
        </Link>{' '}
        for added theatre.
      </p>
    </>
  ),
  formatsH2: 'Halal Private Dining Formats',
  formats: [
    {
      Icon: Utensils,
      title: 'Intimate Plated Dinners',
      description: 'Multi-course halal tasting menus served course by course in your dining room, with personal chef narration and discreet service.',
      link: '/luxury-dining-experiences',
    },
    {
      Icon: Star,
      title: 'Fine-Dining Halal Experiences',
      description: 'Elevated halal dishes presented with restaurant-style plating, premium ingredients and wine-pairing-style mocktail accompaniments.',
      link: '/luxury-dining-experiences',
    },
    {
      Icon: Moon,
      title: 'Iftar & Suhoor at Home',
      description: 'Traditional Ramadan private dining with dates, soups, salads, grills and sweets, served for family and close guests.',
      link: '/ramadan-catering-dubai',
    },
    {
      Icon: Home,
      title: 'Villa & Residence Dining',
      description: 'Full private dining set-up in your villa or apartment across Dubai, from kitchen prep to table service and clean-up.',
      link: '/villas-private-residences',
    },
    {
      Icon: Building,
      title: 'Corporate Halal Hospitality',
      description: 'Board dinners, client entertainment and executive hospitality with fully halal menus and professional front-of-house service.',
      link: '/corporate-event-catering-dubai',
    },
    {
      Icon: PartyPopper,
      title: 'Celebration Private Dining',
      description: 'Birthdays, anniversaries, engagements and family milestones with bespoke halal menus designed around the occasion.',
      link: '/private-dining-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE HALAL PRIVATE DINING WORKS',
  useCasesH2: 'Designed for Meaningful Gatherings',
  useCases: [
    {
      title: 'Intimate Anniversary Dinners',
      description:
        'A private chef prepares a multi-course halal menu for two or a small group, turning your home or terrace into a candlelit restaurant with every detail handled.',
    },
    {
      title: 'Family Celebrations at Home',
      description:
        'For Eid, birthdays and family reunions, a fully halal private dining experience lets you welcome guests without worrying about sourcing, cooking or serving.',
    },
    {
      title: 'Ramadan Iftar Gatherings',
      description:
        'Host iftar or suhoor at home with a chef-led halal menu that respects tradition while feeling special, from dates and soups to grills and kunafa.',
    },
    {
      title: 'Corporate Client Entertainment',
      description:
        'Impress clients and colleagues with a private halal dinner in a residence, boardroom or curated venue, supported by discreet, professional service.',
    },
  ],
  includedH2: "What's Included in Our Halal Private Dining",
  includedItems: [
    { title: 'Fully Halal Menus', description: 'All proteins and ingredients sourced and prepared to trusted halal standards from start to finish.' },
    { title: 'Bespoke Menu Design', description: 'A menu tailored to your tastes, occasion and dietary preferences, from Arabic classics to modern international.' },
    { title: 'Private Chef & Service Team', description: 'A dedicated chef and front-of-house staff focused entirely on your table and your guests.' },
    { title: 'In-Home or Venue Service', description: 'We cook, plate, serve and clean up at your villa, apartment, office or chosen venue anywhere in Dubai.' },
    { title: 'Premium Table Presentation', description: 'Restaurant-quality plating, linens, crockery and styling arranged to suit the setting.' },
    { title: 'Ramadan & Celebration Specials', description: 'Themed menus and service pacing for iftar, suhoor, Eid and other milestone occasions.' },
    { title: 'Mocktail & Beverage Pairing', description: 'Non-alcoholic drinks, juices and mocktails selected to complement the halal menu.' },
    { title: 'Full Setup & Pack-Down', description: 'We arrive with ingredients and equipment, then leave the space spotless after service.' },
  ],
  galleryH2: 'A Taste of Our Halal Private Dining',
  galleryImages: [
    { src: '/images/halal-private-dining-dubai-hero.webp', alt: 'Halal private dining table in a Dubai villa' },
    { src: '/menu-meat.webp', alt: 'Halal grilled meat main course' },
    { src: '/menu-appetizer.webp', alt: 'Elegant halal appetiser selection' },
    { src: '/service-luxury-dining.webp', alt: 'Luxury private dining service in Dubai' },
    { src: '/service-villa.webp', alt: 'Villa private dinner setting' },
    { src: '/menu-dessert.webp', alt: 'Traditional halal dessert presentation' },
  ],
  faqsH2: 'Halal Private Dining Questions',
  faqs: [
    {
      q: 'Is everything on the menu halal?',
      a: 'Yes. All meat, poultry and ingredients are sourced from trusted halal suppliers, and the menu is prepared to halal standards throughout. We can also accommodate vegetarian, vegan and allergen-conscious guests within the same service.',
    },
    {
      q: 'Where can halal private dining take place?',
      a: 'We serve private dinners in villas, apartments, penthouses, offices and selected venues across Dubai. Popular areas include Palm Jumeirah, Emirates Hills, Downtown Dubai, Dubai Marina and Jumeirah.',
    },
    {
      q: 'Can I customise the menu?',
      a: 'Absolutely. Every halal private dining menu is designed around your preferences, from Arabic and Mediterranean flavours to Asian or contemporary international dishes. We discuss your tastes and any guest requirements in advance.',
    },
    {
      q: 'Do you offer halal private dining for Ramadan?',
      a: 'Yes. We specialise in iftar and suhoor private dining during Ramadan, with menus that respect tradition while adding a refined, chef-led touch for family and corporate gatherings.',
    },
    {
      q: 'How many guests can you cater for in a private dining setting?',
      a: 'Private dining is ideal for small to medium groups, typically from 2 to 30 guests. For larger celebrations, we scale into full-service halal catering with additional chefs and service staff.',
    },
    {
      q: 'How far in advance should I book?',
      a: 'We recommend booking at least two to four weeks ahead, especially during Ramadan, Eid and the busy winter season from November to March. Last-minute requests are sometimes possible — contact us on WhatsApp to check availability.',
    },
  ],
  relatedServices: [
    {
      title: 'Halal Catering Dubai',
      description: 'Full-service halal catering for events, weddings and corporate functions of any size.',
      image: '/menu-meat.webp',
      link: '/halal-catering-dubai',
    },
    {
      title: 'Luxury Dining Experiences',
      description: 'Bespoke private chef experiences and tasting menus in your home or villa.',
      image: '/service-luxury-dining.webp',
      link: '/luxury-dining-experiences',
    },
    {
      title: 'Live Cooking Stations',
      description: 'Interactive live grills, pasta and shawarma stations that bring energy to your event.',
      image: '/service-events.webp',
      link: '/live-cooking-stations-dubai',
    },
  ],
  ctaH2: 'Host a Halal Private Dinner Your Guests Will Remember',
  ctaP:
    'Tell us about your occasion, guest count and preferred cuisine. We will design a fully halal private dining experience in Dubai that feels personal, polished and effortlessly hosted.',
}

export default function HalalPrivateDining() {
  return <ServiceLandingPage config={config} />
}
