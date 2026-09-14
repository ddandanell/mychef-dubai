import { Link } from 'react-router'
import { Briefcase, PartyPopper, Home, Building, Utensils, Heart } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'farewell-catering-dubai',
  seoTitle: 'Farewell Catering Dubai | myCHEF',
  metaDescription:
    'Farewell catering Dubai for office send-offs, retirements and leaving parties. Buffet from AED 120, canapés from AED 150. Itemised quote.',
  canonicalPath: '/private-party-catering-dubai',
  ogImage: '/service-events.webp',
  breadcrumbLabel: 'Farewell & Retirement Catering Dubai',
  h1: 'Farewell Catering Dubai',
  heroSub:
    'Farewell catering Dubai for an office lunch, a retirement dinner or a villa send-off. Menu, staff, setup and clear-down. You stay with the guest of honour.',
  heroImage: '/service-events.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to arrange farewell or retirement catering in Dubai (via mychef.ae/farewell-catering-dubai)",
  eyebrow: 'FAREWELL & RETIREMENT CATERING IN DUBAI',
  introH2: 'Farewell catering Dubai that lets you stay in the room',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Farewell catering Dubai is a send-off with a guest of honour, a clock and a room that may have to work again afterwards. An office lunch in DIFC, a rooftop reception, or a family retirement at home. Speeches need a gap in the food, not a buffet that never stops.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        A staffed buffet starts from AED 120 per person. Canapés from AED 150. Drop-off from AED 90. All before 5% VAT. The written quote itemises food, staff and VAT. Dietary notes go into the first draft.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        A company send-off can sit next to{' '}
        <Link to="/corporate-event-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          corporate event catering Dubai
        </Link>
        . A family night at home belongs on{' '}
        <Link to="/private-party-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          private party catering Dubai
        </Link>
        .
      </p>
    </>
  ),
  formatsH2: 'How a send-off is served',
  formats: [
    {
      Icon: Building,
      title: 'Office farewell lunches',
      description: 'A timed lunch for a boardroom or break-out space, packed before the next meeting.',
      link: '/office-catering-dubai',
    },
    {
      Icon: PartyPopper,
      title: 'Rooftop and venue receptions',
      description: 'Canapés and a drinks station for a standing leaving party.',
      link: '/events',
    },
    {
      Icon: Utensils,
      title: 'Plated retirement dinners',
      description: 'A seated meal for family and close colleagues when the table is the event.',
      link: '/catering-dubai',
    },
    {
      Icon: Home,
      title: 'Private villa farewells',
      description: 'A house night: setup, service and clear-down so the hosts stay with their guest.',
      link: '/villas-private-residences',
    },
    {
      Icon: Briefcase,
      title: 'Corporate send-off buffets',
      description: 'A maintained spread for a larger team recognition or long-service sitting.',
      link: '/buffet-catering-dubai',
    },
    {
      Icon: Heart,
      title: 'Cake and dessert tables',
      description: 'A cake moment that does not collide with speeches. Quoted when you want us to supply it.',
      link: '/dessert-table-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE FAREWELL CATERING WORKS',
  useCasesH2: 'Office, family, expat leaving dos',
  useCases: [
    {
      title: 'Corporate retirement parties',
      description:
        'A team in the room, a speech, and food that can pause. Timing is part of the brief.',
    },
    {
      title: 'Office leaving dos',
      description:
        'Friday afternoon or a sit-down lunch. The kitchen should not keep the host away from the person leaving.',
    },
    {
      title: 'Family retirement celebrations',
      description:
        'A parent or grandparent at home. Mixed ages, a quieter table than an office reception.',
    },
    {
      title: 'Expat farewell gatherings',
      description:
        'A mixed-nationality guest list. Dietary notes belong in the first draft, not on the night.',
    },
  ],
  includedH2: 'What a staffed farewell includes',
  includedItems: [
    { title: 'Menu written for the guest of honour', description: 'Dishes and a running order that leave space for speeches.' },
    { title: 'Canapés and grazing', description: 'Standing food when people will mingle rather than sit.' },
    { title: 'Live stations', description: 'Optional, when the room should move. Power and queue space belong in the brief.' },
    { title: 'Drinks', description: 'Mocktails, juice, tea and coffee. Alcohol at a private residence is sourced by the host.' },
    { title: 'Cake', description: 'Quoted when you want us to supply it, or we plate a cake you bring.' },
    { title: 'Dietary notes', description: 'Vegetarian, vegan, gluten-free, halal and allergy notes, labelled.' },
    { title: 'Staff', description: 'Chefs and waiters sized to the format. Drop-off has no team remaining on site.' },
    { title: 'Setup and cleanup', description: 'The office or house has to be usable in the morning.' },
  ],
  galleryH2: 'How farewell catering looks in Dubai',
  galleryImages: [
    { src: '/service-events.webp', alt: 'Farewell party catering set-up in Dubai' },
    { src: '/menu-canapes.webp', alt: 'Canapés for a retirement celebration' },
    { src: '/menu-appetizer.webp', alt: 'Farewell party appetisers and salads' },
    { src: '/menu-dessert.webp', alt: 'Retirement dessert table and cake display' },
    { src: '/service-corporate.webp', alt: 'Corporate farewell lunch setup' },
    { src: '/service-villa.webp', alt: 'Villa farewell party styling' },
  ],
  faqsH2: 'Questions before you book',
  faqs: [
    {
      q: 'What types of farewell events do you cater?',
      a: 'Office leaving lunches, retirements, corporate send-offs, expat goodbyes and family dinners at home.',
    },
    {
      q: 'Can the menu reflect the guest of honour?',
      a: 'Yes. Favourite dishes and a cake moment can be written in. We still have to work with the kitchen and the clock.',
    },
    {
      q: 'Do you provide non-alcoholic drinks?',
      a: 'Yes. Mocktails, juice, tea and coffee. Alcohol at a private residence is sourced by the host.',
    },
    {
      q: 'Can you cater at our office or venue?',
      a: 'Yes. We cook at the office, venue or villa you have booked. Access and pack-down times belong in the brief.',
    },
    {
      q: 'How formal or casual can the event be?',
      a: 'Drop-off, a buffet, canapés or a plated dinner. Format decides most of the price, not a mood word.',
    },
    {
      q: 'How far in advance should I book farewell catering?',
      a: 'Two to four weeks is the usual window. Office lunches can sometimes be arranged with shorter notice.',
    },
  ],
  relatedServices: [
    {
      title: 'Corporate Event Catering',
      description: 'Company events where the brief is the business, not a personal send-off.',
      image: '/service-corporate.webp',
      link: '/corporate-event-catering-dubai',
    },
    {
      title: 'Private Party Catering',
      description: 'The house night this farewell sitting redirects into.',
      image: '/service-villa.webp',
      link: '/private-party-catering-dubai',
    },
  ],
  ctaH2: 'Send the date, guest of honour and room',
  ctaP:
    'Tell us office or home, guest count and whether there are speeches. We send an itemised farewell catering Dubai quote.',
  showTrustSignalStrip: true,
}

export default function FarewellCatering() {
  return <ServiceLandingPage config={config} />
}
