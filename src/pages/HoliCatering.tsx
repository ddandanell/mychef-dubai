import { Link } from 'react-router'
import { Palette, Sun, Music, Flame, Home, Leaf } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'holi-catering-dubai',
  seoTitle: 'Holi Catering Dubai | myCHEF',
  metaDescription:
    'Holi catering Dubai at your villa, office or home: chaat, thandai, biryani and sweets. We cook at your venue. Buffet from AED 120. Itemised quote.',
  canonicalPath: '/indian-catering-dubai',
  ogImage: '/images/indian-catering-dubai-hero.webp',
  breadcrumbLabel: 'Holi Catering Dubai',
  h1: 'Holi Catering Dubai',
  heroSub:
    'Holi catering Dubai for a family villa, a community colour party or a company lunch. Chaat, biryani, thandai and sweets, cooked at your address.',
  heroImage: '/images/indian-catering-dubai-hero.webp',
  whatsappMessage:
    'Hi myCHEF Dubai, I would like to arrange Holi catering in Dubai (via mychef.ae/holi-catering-dubai)',
  eyebrow: 'HOLI CATERING IN DUBAI',
  introH2: 'Holi catering Dubai at the table, not as a colour product',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Holi catering Dubai is the food for a colour day you are already hosting: chaat, samosas, biryani, curries, breads, gujiya and thandai. We cook at your villa, office or community site. We do not run the colour play. Year-round Indian menus without the date sit on Indian catering.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        A staffed buffet starts from AED 120 per person. Live stations from AED 150. Drop-off from AED 90. All before 5% VAT. Vegetarian and Jain notes belong in the first draft. Thandai is a drink line, not a bar we invent.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        Holi sits next to{' '}
        <Link to="/indian-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          Indian catering Dubai
        </Link>{' '}
        and the{' '}
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
  formatsH2: 'How Holi food is served',
  formats: [
    {
      Icon: Palette,
      title: 'Holi buffet feast',
      description: 'Chaat, curries, biryani, breads, rice and sweets, maintained as a spread.',
      link: '/buffet-catering-dubai',
    },
    {
      Icon: Sun,
      title: 'Garden and poolside Holi party',
      description: 'Outdoor holding, live stations and drinks planned around heat and colour play nearby.',
      link: '/private-party-catering-dubai',
    },
    {
      Icon: Flame,
      title: 'Live chaat and tandoor station',
      description: 'Golgappa, dahi bhalla, kebabs and naan finished in front of guests.',
      link: '/live-cooking-stations-dubai',
    },
    {
      Icon: Music,
      title: 'Thandai and mocktail bar',
      description: 'Thandai, lassi, lemonade and alcohol-free drinks. Alcohol at a private residence is sourced by the host.',
      link: '/bar-services-dubai',
    },
    {
      Icon: Home,
      title: 'Villa and home celebrations',
      description: 'Setup, service and cleanup in the kitchen you already have.',
      link: '/villas-private-residences',
    },
    {
      Icon: Leaf,
      title: 'Vegetarian and dietary menus',
      description: 'Plant-forward, Jain, vegan, gluten-free and nut-free dishes when they are named.',
      link: '/vegetarian-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE HOLI CATERING WORKS',
  useCasesH2: 'Family villas, community halls, office lunches',
  useCases: [
    {
      title: 'Family villa Holi parties',
      description:
        'Emirates Hills, Palm Jumeirah or Arabian Ranches. Food that can be eaten between colour, then a proper sitting.',
    },
    {
      title: 'Community and cultural events',
      description:
        'A larger buffet. Guest count, access and how food is held decide the crew, not a festival slogan.',
    },
    {
      title: 'Corporate Holi lunches',
      description:
        'A themed lunch in Business Bay or DIFC. Labels, timing and a room that has to work afterwards.',
    },
    {
      title: 'Intimate home gatherings',
      description:
        'A smaller Holi meal at home. You host. We cook and clear.',
    },
  ],
  includedH2: 'What a staffed Holi sitting includes',
  includedItems: [
    { title: 'Menu written for the date', description: 'Chaat, curries, biryani and sweets, cut to who is eating.' },
    { title: 'Chaat and starters', description: 'Samosas, pakoras, tikka and chutneys to open the table.' },
    { title: 'Mains and breads', description: 'Sharing curries, rice and breads.' },
    { title: 'Live stations', description: 'Tandoor, chaat or dessert stations when the room should move.' },
    { title: 'Thandai and drinks', description: 'Thandai, lassi and lemonade, quoted as a drinks line.' },
    { title: 'Sweets', description: 'Gujiya, jalebi, kulfi and mithai, sized to the guest list.' },
    { title: 'Staff', description: 'A team to serve and replenish. Colour play is not their job.' },
    { title: 'Pack-down', description: 'Food kit is cleared. Outdoor colour residue sits with the host.' },
  ],
  galleryH2: 'How Holi catering looks in Dubai',
  galleryImages: [
    { src: '/service-events.webp', alt: 'Holi catering set-up in Dubai' },
    { src: '/menu-appetizer.webp', alt: 'Indian starters and chaat for Holi catering' },
    { src: '/menu-meat.webp', alt: 'Tandoori meats and curries for Holi feast' },
    { src: '/menu-dessert.webp', alt: 'Indian sweets and desserts for Holi' },
    { src: '/service-villa.webp', alt: 'Villa Holi party catering styling' },
    { src: '/menu-seafood.webp', alt: 'Fresh dishes served at a Holi celebration' },
  ],
  faqsH2: 'Questions before you book',
  faqs: [
    {
      q: 'What food is typically served at a Holi celebration?',
      a: 'Chaat, samosas, pakoras, kebabs, biryani, curries, breads, gujiya, jalebi, kulfi and thandai. We cut the list to the kitchen and the guest list.',
    },
    {
      q: 'Can you cater Holi at our villa or outdoor venue?',
      a: 'Yes. We cook at a villa, garden or hall you have booked. We do not own the venue and we do not supply colour powder as a default.',
    },
    {
      q: 'Do you offer vegetarian or Jain Holi catering?',
      a: 'Yes, when named in the brief. Vegetarian, Jain, vegan, gluten-free and nut-free dishes can sit on the same table, labelled. Halal and Jain are different systems and are never combined as one line.',
    },
    {
      q: 'Can you set up a thandai or drinks station?',
      a: 'Yes. Thandai, lassi, lemonade and mocktails. Alcohol at a private residence is sourced by the host.',
    },
    {
      q: 'How many guests can you cater for Holi?',
      a: 'Drop-off from 10 guests. Buffet from 20. A chef cooking on site has no minimum headcount.',
    },
    {
      q: 'How far in advance should I book Holi catering?',
      a: 'One to two weeks is the usual window. Villa parties with live stations book earlier.',
    },
  ],
  relatedServices: [
    {
      title: 'Indian Catering Dubai',
      description: 'Explore Indian menus for celebrations and gatherings throughout the year.',
      image: '/images/indian-catering-dubai-hero.webp',
      link: '/indian-catering-dubai',
    },
    {
      title: 'Festive Catering Dubai',
      description: 'The seasonal calendar this date sits on.',
      image: '/service-events.webp',
      link: '/festive-catering-dubai',
    },
    {
      title: 'Private Party Catering',
      description: 'An informal gathering at home, when the date is not Holi.',
      image: '/service-villa.webp',
      link: '/private-party-catering-dubai',
    },
  ],
  ctaH2: 'Send the date, guest count and dietary notes',
  ctaP:
    'Tell us family, community or office, how many people and whether the menu is vegetarian. We send an itemised Holi catering Dubai quote.',
  showTrustSignalStrip: true,
}

export default function HoliCatering() {
  return <ServiceLandingPage config={config} />
}
