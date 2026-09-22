import { Link } from 'react-router'
import { Sparkles, Utensils, Flame, Home, Leaf, Coffee } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'chinese-new-year-catering-dubai',
  seoTitle: 'Chinese New Year Catering Dubai | myCHEF',
  metaDescription:
    'Chinese New Year catering Dubai at your home, villa or office. Sharing menus, dim sum, live wok. We cook at your venue. Itemised quote.',
  canonicalPath: '/asian-catering-dubai',
  ogImage: '/images/asian-catering-dubai-hero.webp',
  breadcrumbLabel: 'Chinese New Year Catering Dubai',
  h1: 'Chinese New Year Catering Dubai',
  heroSub:
    'Chinese New Year catering Dubai for a reunion dinner, dim sum brunch or company sitting. Sharing dishes, cooked at your address, then cleared.',
  heroImage: '/images/asian-catering-dubai-hero.webp',
  whatsappMessage:
    'Hi myCHEF Dubai, I would like to arrange Chinese New Year catering in Dubai (via mychef.ae/chinese-new-year-catering-dubai)',
  eyebrow: 'CHINESE NEW YEAR CATERING IN DUBAI',
  introH2: 'Chinese New Year catering Dubai, at the reunion table',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Chinese New Year catering Dubai is a reunion dinner, a dim sum brunch or a company sitting at your venue. Dishes carry meaning for the hosts who want them: noodles, dumplings, whole fish, rice cakes. We cook at the address you give us. A year-round Asian menu without the date sits on Asian catering.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        A staffed buffet starts from AED 120 per person. Live stations from AED 150. Drop-off from AED 90. Chef-led plated dining is AED 700–950. All before 5% VAT. Halal Chinese New Year catering Dubai is available when the brief says so. Dietary notes go into the first draft. No chef is guaranteed by name.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        This date sits on our{' '}
        <Link to="/festive-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          festive catering Dubai
        </Link>{' '}
        calendar. An informal gathering at home belongs on{' '}
        <Link to="/private-party-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          private party catering Dubai
        </Link>
        .
      </p>
    </>
  ),
  formatsH2: 'How the reunion meal is served',
  formats: [
    {
      Icon: Sparkles,
      title: 'Reunion dinner banquet',
      description: 'A sharing menu served family-style, built around the dishes this table actually wants.',
      link: '/catering-dubai',
    },
    {
      Icon: Coffee,
      title: 'Dim sum brunch',
      description: 'Baskets of dumplings, buns and small plates for a daytime gathering.',
      link: '/brunch-catering-dubai',
    },
    {
      Icon: Flame,
      title: 'Live wok and noodle station',
      description: 'Cooking in front of guests: noodles, fried rice and stir-fries finished to order.',
      link: '/live-cooking-stations-dubai',
    },
    {
      Icon: Utensils,
      title: 'Plated corporate dinner',
      description: 'Plated or buffet service for a company CNY dinner or client sitting.',
      link: '/corporate-event-catering-dubai',
    },
    {
      Icon: Home,
      title: 'Villa and home celebrations',
      description: 'Setup, cooking, service and clear-down in the kitchen you already have.',
      link: '/villas-private-residences',
    },
    {
      Icon: Leaf,
      title: 'Vegetarian and dietary menus',
      description: 'Plant-based, halal proteins, gluten-free and nut-free adjustments when they are named.',
      link: '/vegetarian-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE CHINESE NEW YEAR CATERING WORKS',
  useCasesH2: 'Family tables, company lunches, community halls',
  useCases: [
    {
      title: 'Family reunion dinners',
      description:
        'A mixed-age table in a villa in Emirates Hills, Palm Jumeirah or Dubai Hills. Sharing plates, not a tasting for two.',
    },
    {
      title: 'Corporate CNY lunches',
      description:
        'Staff and clients. Timing, labels and a room that has to be a workplace again afterwards.',
    },
    {
      title: 'Community and association events',
      description:
        'A larger buffet or banquet. Guest count, access and how food is held decide the crew size.',
    },
    {
      title: 'Intimate dim sum brunches',
      description:
        'A smaller daytime sitting with baskets, tea and a kitchen that may not plate a banquet.',
    },
  ],
  includedH2: 'What a staffed CNY sitting includes',
  includedItems: [
    { title: 'Menu written for the date', description: 'Symbolic dishes when you want them, adapted to who is eating and what the kitchen can hold.' },
    { title: 'Starters', description: 'Dumplings, spring rolls, cold plates and salads to open the table.' },
    { title: 'Sharing mains', description: 'Fish, duck, noodles, rice and greens, served so people can pass.' },
    { title: 'Live stations', description: 'Wok, noodle or dumpling stations when the room should move.' },
    { title: 'Halal and dietary notes', description: 'Halal proteins and vegetarian dishes when the brief names them.' },
    { title: 'Sweets and tea', description: 'Rice cakes, sesame sweets and tea service, sized to the guest list.' },
    { title: 'Staff', description: 'A team to plate, replenish and clear. Drop-off is food only.' },
    { title: 'Pack-down', description: 'The kitchen and table are left as we found them.' },
  ],
  galleryH2: 'How a Lunar New Year table looks in Dubai',
  galleryImages: [
    { src: '/service-events.webp', alt: 'Chinese New Year catering set-up in Dubai' },
    { src: '/menu-appetizer.webp', alt: 'Dumplings and starters for Lunar New Year catering' },
    { src: '/menu-seafood.webp', alt: 'Whole fish and seafood for Chinese New Year banquet' },
    { src: '/menu-meat.webp', alt: 'Peking duck and roasted meats for CNY catering' },
    { src: '/service-villa.webp', alt: 'Villa Chinese New Year reunion dinner styling' },
    { src: '/menu-dessert.webp', alt: 'Lunar New Year dessert table and tea service' },
  ],
  faqsH2: 'Questions before you book',
  faqs: [
    {
      q: 'What dishes are traditionally served for Chinese New Year?',
      a: 'Hosts often ask for dumplings, long noodles, whole fish, spring rolls and sweet rice cakes. We build from that list, then cut anything the kitchen or the guest list cannot support.',
    },
    {
      q: 'Can you cater a Chinese New Year reunion dinner at our villa?',
      a: 'Yes. We cook at your villa or apartment, with setup, service and clear-down included on a staffed booking.',
    },
    {
      q: 'Do you offer halal Chinese New Year catering?',
      a: 'Yes, when the brief says so. Halal proteins, vegetarian and other dietary notes belong in the first menu draft.',
    },
    {
      q: 'Can you include live cooking stations?',
      a: 'Yes. Live wok, noodle and dumpling stations start from AED 150 per person before 5% VAT.',
    },
    {
      q: 'How many guests can you cater for?',
      a: 'Drop-off starts from 10 guests. A standard buffet from 20. A chef cooking on site has no minimum headcount. Larger rooms are quoted on access and staffing, not a marketing maximum.',
    },
    {
      q: 'How far in advance should I book Chinese New Year catering?',
      a: 'Two to three weeks is the usual window. Reunion weekends and company dinners book earlier.',
    },
  ],
  relatedServices: [
    {
      title: 'Festive Catering Dubai',
      description: 'The seasonal calendar: Christmas, Ramadan, Eid, Diwali and this date.',
      image: '/service-events.webp',
      link: '/festive-catering-dubai',
    },
    {
      title: 'Private Party Catering',
      description: 'Private parties and gatherings at home throughout the year.',
      image: '/service-villa.webp',
      link: '/private-party-catering-dubai',
    },
  ],
  ctaH2: 'Send the date, guest count and who is at the table',
  ctaP:
    'Tell us the address, how many people and whether you want a banquet, dim sum or a live station. We send an itemised quote.',
  showTrustSignalStrip: true,
}

export default function ChineseNewYearCatering() {
  return <ServiceLandingPage config={config} />
}
