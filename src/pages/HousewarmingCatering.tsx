import { Link } from 'react-router'
import { Home, PartyPopper, Utensils, Users, Star, Heart } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'housewarming-catering-dubai',
  seoTitle: 'Housewarming Catering Dubai | New-Home Celebration Menus',
  metaDescription:
    'Housewarming party catering in Dubai: relaxed, delicious menus for new homes and villas across the city. From canapés to BBQ buffets, we handle the food so you can enjoy your guests.',
  canonicalPath: '/housewarming-catering-dubai',
  ogImage: '/service-villa.webp',
  breadcrumbLabel: 'Housewarming Catering Dubai',
  h1: 'Housewarming Catering in Dubai',
  heroSub:
    'Celebrate your new Dubai home with stress-free catering: shareable menus, friendly service and full setup so you can focus on welcoming friends, family and neighbours.',
  heroImage: '/service-villa.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to arrange housewarming catering in Dubai (via mychef.ae/housewarming-catering-dubai)",
  eyebrow: 'HOUSEWARMING CATERING IN DUBAI',
  introH2: 'Make Your New House Feel Like Home',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Moving into a new home in Dubai is a milestone worth celebrating. Whether you have settled into a villa in Arabian Ranches, an apartment in Downtown Dubai, or a townhouse in Dubai Hills, our housewarming catering takes care of the food so you can spend the evening showing guests around, not stuck in the kitchen.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        We design relaxed, crowd-pleasing menus that suit an open-house atmosphere: grazing tables, mezze platters, sliders and skewers, fresh salads, live stations and indulgent desserts. Service can be as simple as a drop-off spread or as polished as a fully staffed buffet with chefs and front-of-house team on site.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        Housewarming catering pairs naturally with our{' '}
        <Link to="/villas-private-residences" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          villa dining
        </Link>{' '}
        service for homes with gardens and pools, and with{' '}
        <Link to="/bbq-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          BBQ catering Dubai
        </Link>{' '}
        when you want a laid-back outdoor gathering. For a more formal touch, explore our{' '}
        <Link to="/canape-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          canapé catering Dubai
        </Link>{' '}
        options.
      </p>
    </>
  ),
  formatsH2: 'Housewarming Catering Formats',
  formats: [
    {
      Icon: Home,
      title: 'Open-House Grazing Tables',
      description: 'Beautiful, abundant grazing spreads that guests can pick at throughout the afternoon or evening.',
      link: '/grazing-table-dubai',
    },
    {
      Icon: PartyPopper,
      title: 'Garden & Terrace Parties',
      description: 'Outdoor housewarming menus for villas and townhouses with pools, lawns and terraces.',
      link: '/villas-private-residences',
    },
    {
      Icon: Utensils,
      title: 'Buffet & Family-Style Dining',
      description: 'Self-serve buffets and shared platters that keep the mood relaxed and sociable.',
      link: '/buffet-catering-dubai',
    },
    {
      Icon: Users,
      title: 'Canapé & Drinks Receptions',
      description: 'Elegant bite-sized dishes and mocktails for a more refined housewarming reception.',
      link: '/canape-catering-dubai',
    },
    {
      Icon: Star,
      title: 'Live Cooking Stations',
      description: 'Interactive grills, pasta and shawarma stations that bring energy to your new home.',
      link: '/live-cooking-stations-dubai',
    },
    {
      Icon: Heart,
      title: 'Dessert & Sweet Tables',
      description: 'Celebration cakes, cupcakes and sweet tables to round off the housewarming in style.',
      link: '/dessert-table-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE HOUSEWARMING CATERING WORKS',
  useCasesH2: 'Designed for New-Home Celebrations',
  useCases: [
    {
      title: 'Villa Housewarmings',
      description:
        'Welcome guests to your new villa with a garden buffet, BBQ or grazing table that makes the most of your outdoor space across Palm Jumeirah, Emirates Hills or Dubai Hills.',
    },
    {
      title: 'Apartment & Penthouse Gatherings',
      description:
        'Compact but stylish menus for apartment entertaining, with easy-to-serve canapés, bowl food and drinks that suit a balcony or open-plan living area.',
    },
    {
      title: 'Family Open Houses',
      description:
        'A steady flow of neighbours, friends and family calls for flexible, all-day grazing and replenished platters rather than a single sit-down meal.',
    },
    {
      title: 'Neighbourhood Meet-and-Greets',
      description:
        'Break the ice with neighbours over shared food. A friendly, generous spread makes your new house feel like part of the community from day one.',
    },
  ],
  includedH2: "What's Included in Our Housewarming Catering",
  includedItems: [
    { title: 'Relaxed, Crowd-Pleasing Menus', description: 'Menus designed for mixing and mingling rather than formal seating.' },
    { title: 'Grazing & Sharing Platters', description: 'Mezze, cheeses, charcuterie, salads and breads arranged for easy self-service.' },
    { title: 'Live Stations on Request', description: 'Grills, pasta and shawarma stations that add theatre and freshness.' },
    { title: 'Canapés & Bowl Food', description: 'Elegant bite-sized options for standing receptions and smaller spaces.' },
    { title: 'Mocktails & Soft Drinks', description: 'Refreshing non-alcoholic drinks, juices and infused waters.' },
    { title: 'Dessert & Celebration Touches', description: 'Sweet tables, cakes and treats to mark the occasion.' },
    { title: 'Setup, Service & Cleanup', description: 'We arrive early, serve your guests and clear away so your home is tidy afterwards.' },
    { title: 'Flexible Dietary Options', description: 'Vegetarian, vegan, halal, gluten-free and dairy-free choices available.' },
  ],
  galleryH2: 'A Taste of Our Housewarming Catering',
  galleryImages: [
    { src: '/service-villa.webp', alt: 'Housewarming catering at a Dubai villa' },
    { src: '/menu-appetizer.webp', alt: 'Appetisers for a housewarming party' },
    { src: '/menu-mains.webp', alt: 'Shared main dishes for a housewarming celebration' },
    { src: '/service-events.webp', alt: 'Housewarming event catering setup' },
    { src: '/menu-dessert.webp', alt: 'Dessert table for a housewarming party' },
    { src: '/service-luxury-dining.webp', alt: 'Elegant private dining for a housewarming' },
  ],
  faqsH2: 'Housewarming Catering Questions',
  faqs: [
    {
      q: 'What kind of food works best for a housewarming party?',
      a: 'Sharing-style food is ideal. Grazing tables, mezze, sliders, salads and desserts let guests help themselves while they mingle. Live stations and BBQs are popular for villa housewarmings.',
    },
    {
      q: 'Can you cater a housewarming in an apartment?',
      a: 'Yes. We adapt the menu and service style to apartment and penthouse spaces, with compact canapés, bowl food and easy-to-serve platters that work in open-plan living areas.',
    },
    {
      q: 'Do you provide staff and cleanup?',
      a: 'We can provide chefs and service staff for larger housewarmings, or deliver a ready-to-serve drop-off spread for smaller, more casual gatherings. Cleanup is included with staffed service.',
    },
    {
      q: 'Can the menu reflect a theme or cuisine?',
      a: 'Absolutely. We can design a Mediterranean, Middle Eastern, Asian or international spread to match your tastes and the style of your new home.',
    },
    {
      q: 'How many guests can you cater for a housewarming?',
      a: 'From intimate dinners for 8 to open-house parties for 100 or more. We scale the menu, service and equipment to your guest count and space.',
    },
    {
      q: 'How far in advance should I book housewarming catering?',
      a: 'One to two weeks is usually enough. During busy periods or for live stations and custom menus, two to three weeks is recommended.',
    },
  ],
  relatedServices: [
    {
      title: 'Villa Dining Dubai',
      description: 'Private chef and catering experiences designed for villas and residences.',
      image: '/service-villa.webp',
      link: '/villas-private-residences',
    },
    {
      title: 'BBQ Catering Dubai',
      description: 'Relaxed outdoor grilling menus perfect for garden housewarmings.',
      image: '/menu-meat.webp',
      link: '/bbq-catering-dubai',
    },
    {
      title: 'Canapé Catering Dubai',
      description: 'Elegant bite-sized food for standing receptions and welcome drinks.',
      image: '/menu-canapes.webp',
      link: '/canape-catering-dubai',
    },
    {
      title: 'Graduation Party Catering',
      description: 'Celebrate school and university milestones with themed menus and full service.',
      image: '/service-events.webp',
      link: '/graduation-catering-dubai',
    },
    {
      title: 'Reunion Catering',
      description: 'Bring family and friends back together with generous shared menus.',
      image: '/service-events.webp',
      link: '/reunion-catering-dubai',
    },
  ],
  ctaH2: 'Host a Housewarming Your Guests Will Remember',
  ctaP:
    'Tell us about your new home, guest count and preferred style. We will design a housewarming catering menu that lets you relax and enjoy your celebration.',
}

export default function HousewarmingCatering() {
  return <ServiceLandingPage config={config} />
}
