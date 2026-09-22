import { Link } from 'react-router'
import { Beef, Coffee, Home, Utensils, Flame, Heart } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'fathers-day-catering-dubai',
  seoTitle: "Father's Day Catering Dubai | myCHEF",
  metaDescription:
    "Father's Day catering Dubai at home or in the garden: brunch, BBQ or a family dinner. BBQ from AED 150, buffet from AED 120. Itemised quote.",
  canonicalPath: '/private-party-catering-dubai',
  ogImage: '/service-events.webp',
  breadcrumbLabel: "Father's Day Catering Dubai",
  h1: "Father's Day Catering Dubai",
  heroSub:
    "Father's Day catering Dubai for a family brunch, a garden BBQ or a seated dinner at home. We cook, serve and clear down. Dad stays at the table.",
  heroImage: '/service-events.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to arrange Father's Day catering in Dubai (via mychef.ae/fathers-day-catering-dubai)",
  eyebrow: "FATHER'S DAY CATERING IN DUBAI",
  introH2: "Father's Day catering Dubai so nobody is stuck on the grill",
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Father's Day catering Dubai is a family sitting at home, in a villa garden or at a table you already have. Brunch, a BBQ or a quieter dinner. The point is that Dad is not shopping, cooking or washing up.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        BBQ catering starts from AED 150 per person. A staffed buffet from AED 120. Drop-off from AED 90. Chef-led plated dining is AED 700–950. All before 5% VAT. Dietary notes go into the first draft.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        A late morning table can sit on{' '}
        <Link to="/brunch-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          brunch catering Dubai
        </Link>
        . A grill-led afternoon sits on{' '}
        <Link to="/bbq-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          BBQ catering Dubai
        </Link>
        . An informal gathering at home belongs on{' '}
        <Link to="/private-party-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          private party catering Dubai
        </Link>
        .
      </p>
    </>
  ),
  formatsH2: "How Father's Day is served",
  formats: [
    {
      Icon: Coffee,
      title: "Father's Day brunch",
      description: 'Eggs, pastries, grilled proteins, juice and coffee, served family-style.',
      link: '/brunch-catering-dubai',
    },
    {
      Icon: Flame,
      title: 'BBQ and grill lunch',
      description: 'Garden or poolside grilling, planned around heat, smoke and how long people stay outside.',
      link: '/bbq-catering-dubai',
    },
    {
      Icon: Utensils,
      title: 'Plated family dinner',
      description: 'Courses at the table when the guest list fits one sitting.',
      link: '/catering-dubai',
    },
    {
      Icon: Home,
      title: 'Villa and home celebrations',
      description: 'Setup, service and clear-down in the house you already live in.',
      link: '/villas-private-residences',
    },
    {
      Icon: Beef,
      title: 'Carving and live stations',
      description: 'A carving or grill station when the room should move rather than sit.',
      link: '/live-cooking-stations-dubai',
    },
    {
      Icon: Heart,
      title: 'Dessert and cake',
      description: 'A cake or sweet course quoted when you want us to supply it.',
      link: '/dessert-table-catering-dubai',
    },
  ],
  useCasesEyebrow: "WHERE FATHER'S DAY CATERING WORKS",
  useCasesH2: 'Brunch, BBQ, a quieter dinner',
  useCases: [
    {
      title: 'Family villa lunches',
      description:
        'Extended family in Emirates Hills, Palm Jumeirah or Dubai Hills. Mixed ages, one running order.',
    },
    {
      title: 'Poolside BBQ celebrations',
      description:
        'A named adult on the brief for the grill, or we staff the grill. Children and live fire need that line written down.',
    },
    {
      title: 'Intimate home dinners',
      description:
        'A smaller table. If it is two covers only, that is a romantic dinner, not this page.',
    },
    {
      title: 'Multi-generational gatherings',
      description:
        'Grandfathers, fathers and children. Portions and spice levels named before anyone cooks.',
    },
  ],
  includedH2: "What a staffed Father's Day sitting includes",
  includedItems: [
    { title: 'Menu written around Dad', description: 'Proteins, sides and a dessert he will eat, not a stock “men’s menu”.' },
    { title: 'Brunch, lunch or dinner', description: 'The clock is part of the brief. Format follows it.' },
    { title: 'Meats and seafood', description: 'Steaks, ribs, burgers, prawns or fish, sized to the guest list.' },
    { title: 'Live BBQ', description: 'A partner chef on the grill when that is the format.' },
    { title: 'Sides and salads', description: 'Breads and salads so the grill is not the only food.' },
    { title: 'Dessert', description: 'Cake or a sweet course, quoted when requested.' },
    { title: 'Staff', description: 'A team to serve and clear. Drop-off is food only.' },
    { title: 'Pack-down', description: 'The garden or kitchen is left usable the same evening.' },
  ],
  galleryH2: "How Father's Day catering looks in Dubai",
  galleryImages: [
    { src: '/service-events.webp', alt: "Father's Day catering set-up in Dubai" },
    { src: '/menu-meat.webp', alt: "Grilled meats for a Father's Day feast" },
    { src: '/menu-appetizer.webp', alt: "Father's Day appetisers and salads" },
    { src: '/menu-dessert.webp', alt: "Father's Day dessert table and cake" },
    { src: '/service-villa.webp', alt: "Villa Father's Day lunch styling" },
    { src: '/service-catering.webp', alt: "Father's Day catering service in Dubai" },
  ],
  faqsH2: 'Questions before you book',
  faqs: [
    {
      q: "What kind of food works best for Father's Day catering?",
      a: 'Whatever Dad actually eats: a grill, a roast, seafood or a quieter plated dinner. Tell us his dishes. We write the menu around that, not a stereotype.',
    },
    {
      q: "Can you cater Father's Day at our home or villa?",
      a: 'Yes. We cook at your address. Staffed bookings include setup, service and clear-down.',
    },
    {
      q: 'Do you offer brunch as well as lunch and dinner?',
      a: 'Yes. Eggs, pastries, grilled proteins, juice and coffee. If the date is not Father’s Day, that sitting is brunch catering.',
    },
    {
      q: 'Can you include a custom cake or dessert for Dad?',
      a: 'Yes, quoted as its own line, or we plate a cake you bring.',
    },
    {
      q: 'How many guests can you cater for Father’s Day?',
      a: 'Drop-off from 10 guests. Buffet from 20. A chef cooking on site has no minimum headcount.',
    },
    {
      q: 'How far in advance should I book Father’s Day catering?',
      a: 'One to two weeks is the usual window. The weekend itself books earlier.',
    },
  ],
  relatedServices: [
    {
      title: 'BBQ Catering Dubai',
      description: 'Grill-led service when the garden is the room.',
      image: '/menu-meat.webp',
      link: '/bbq-catering-dubai',
    },
    {
      title: 'Brunch Catering Dubai',
      description: 'A late morning table when the date is not Father’s Day.',
      image: '/service-events.webp',
      link: '/brunch-catering-dubai',
    },
    {
      title: 'Private Party Catering',
      description: 'The house night this sitting redirects into.',
      image: '/service-villa.webp',
      link: '/private-party-catering-dubai',
    },
  ],
  ctaH2: 'Send the date, guest count and what Dad eats',
  ctaP:
    "Tell us brunch, BBQ or dinner, how many people and the address. We send an itemised Father's Day catering Dubai quote.",
  showTrustSignalStrip: true,
}

export default function FathersDayCatering() {
  return <ServiceLandingPage config={config} />
}
