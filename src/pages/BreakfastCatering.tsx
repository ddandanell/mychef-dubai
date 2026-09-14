// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /breakfast-catering-dubai
//     primary:     "breakfast catering dubai"
//     subkeywords: "breakfast catering dubai price" · "breakfast catering price per person dubai" · "best breakfast catering dubai" · "breakfast catering packages dubai" · "breakfast catering menu dubai" · "halal breakfast catering dubai" · "arabic breakfast catering dubai" · "office breakfast catering dubai" · "corporate breakfast catering dubai" · "breakfast food in dubai" · "breakfast options in dubai" · "breakfast platters dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { Link } from 'react-router'
import { Coffee, Building, Home, PartyPopper, Sun, Utensils } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'breakfast-catering-dubai',
  seoTitle: 'Breakfast Catering Dubai | myCHEF',
  metaDescription:
    'Breakfast catering Dubai for offices, villas and hotel suites. Pastries, hot dishes, coffee. Drop-off from AED 90, buffet from AED 120. Itemised quote.',
  canonicalPath: '/breakfast-catering-dubai',
  ogImage: '/images/breakfast-catering-dubai-hero.webp',
  showTrustSignalStrip: true,
  breadcrumbLabel: 'Breakfast Catering Dubai',
  h1: 'Breakfast Catering Dubai',
  heroSub:
    'Breakfast catering Dubai for an office, villa or hotel suite. Pastries, eggs, fruit and coffee, delivered or staffed, then cleared before the next slot.',
  heroImage: '/images/breakfast-catering-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to arrange breakfast catering in Dubai (via mychef.ae/breakfast-catering-dubai)",
  eyebrow: 'BREAKFAST CATERING IN DUBAI',
  introH2: 'Breakfast catering Dubai, ready before the meeting starts',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Breakfast catering Dubai is the first meal of the day at your office, villa or suite. Office breakfast catering Dubai and corporate breakfast catering Dubai use the same rule: food that arrives on time, is labelled, and is gone before the agenda starts. A late morning table is brunch, not this page.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Breakfast platters Dubai, boxed drops and hot buffets are formats, not packages. Drop-off starts from AED 90 per person (10 guests and AED 900 minimum). A staffed buffet from AED 120. All before 5% VAT. A breakfast catering menu Dubai is written around how long people stay and whether they sit. Halal breakfast catering Dubai is the default sourcing. Dietary notes go into the first draft.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        Breakfast food in Dubai for a team morning sits next to{' '}
        <Link to="/office-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          office catering Dubai
        </Link>
        . When the sitting runs past midday, use{' '}
        <Link to="/brunch-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          brunch catering Dubai
        </Link>
        . For a standing household chef who cooks breakfast every day, that is private chef, not catering.
      </p>
    </>
  ),
  formatsH2: 'How breakfast is served',
  formats: [
    {
      Icon: Coffee,
      title: 'Continental breakfast boxes',
      description: 'Pastries, fruit, yoghurt and granola in individual boxes for offices and hotel room drops.',
      link: '/office-catering-dubai',
    },
    {
      Icon: Sun,
      title: 'Hot breakfast buffets',
      description: 'Eggs, pancakes, Arabic breads, halloumi and warm sides held on a buffet, replenished while people arrive.',
      link: '/buffet-catering-dubai',
    },
    {
      Icon: Building,
      title: 'Corporate breakfast meetings',
      description: 'A timed spread for a boardroom, training day or morning conference, with coffee and juice.',
      link: '/business-lunch-catering-dubai',
    },
    {
      Icon: Home,
      title: 'Villa and residence breakfasts',
      description: 'A staffed morning table for house guests. You stay at the table. We cook and clear.',
      link: '/villas-private-residences',
    },
    {
      Icon: PartyPopper,
      title: 'Celebration breakfasts',
      description: 'A birthday morning, an Eid breakfast or a post-wedding table. Daytime pacing, not an evening menu served early.',
      link: '/brunch-catering-dubai',
    },
    {
      Icon: Utensils,
      title: 'Healthy and dietary breakfasts',
      description: 'Low-sugar, gluten-free, dairy-free and vegan dishes, labelled, when they are named in the brief.',
      link: '/cuisines-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE BREAKFAST CATERING HELPS',
  useCasesH2: 'Mornings that have a clock',
  useCases: [
    {
      title: 'Office early starts',
      description:
        'Meetings, training and launches. The food arrives, is set, and is packed before the workday takes the room back.',
    },
    {
      title: 'Hotel and short-stay guests',
      description:
        'A villa, serviced apartment or suite breakfast that does not depend on a restaurant opening time.',
    },
    {
      title: 'Weekend villa mornings',
      description:
        'Coffee and a laid-out table in Palm Jumeirah, Emirates Hills or Dubai Hills. Nobody in the house has to cook.',
    },
    {
      title: 'The morning after an event',
      description:
        'A gentler table after a late sitting. If it runs long and social, that is brunch.',
    },
  ],
  includedH2: 'What breakfast catering includes',
  includedItems: [
    { title: 'Pastries and breads', description: 'Croissants, muffins, Arabic breads and toast, shopped for the morning of service.' },
    { title: 'Hot and cold dishes', description: 'Eggs, pancakes, fruit and grilled proteins, chosen for how long the room stays.' },
    { title: 'Coffee and tea', description: 'Brewed coffee and tea. Barista-style service when the guest count justifies a station.' },
    { title: 'Juices', description: 'Orange juice and other morning drinks. Mocktails if you want them.' },
    { title: 'Dietary options', description: 'Vegan, gluten-free, dairy-free and low-sugar items, labelled and kept separate when needed.' },
    { title: 'Boxes or a buffet', description: 'Individual boxes for a drop-and-go morning, or a shared buffet if people sit.' },
    { title: 'On-time setup', description: 'Arrival timed to your slot, not to our convenience.' },
    { title: 'Serveware', description: 'Reusable platters or practical disposables, named in the quote.' },
  ],
  galleryH2: 'How breakfast catering looks in Dubai',
  galleryImages: [
    { src: '/images/breakfast-catering-dubai-hero.webp', alt: 'Breakfast catering spread in Dubai' },
    { src: '/menu-appetizer.webp', alt: 'Morning appetisers and pastries' },
    { src: '/menu-dessert.webp', alt: 'Fresh fruit and granola bowls' },
    { src: '/service-corporate.webp', alt: 'Corporate breakfast meeting setup' },
    { src: '/service-villa.webp', alt: 'Villa breakfast catering in Dubai' },
    { src: '/service-events.webp', alt: 'Event breakfast buffet service' },
  ],
  faqsH2: 'Questions before you book',
  faqs: [
    {
      q: 'What time do you deliver breakfast catering?',
      a: 'We time arrival to your start, usually 30 to 60 minutes before service. Early office breakfasts can be arranged from 6:30am across Dubai.',
    },
    {
      q: 'Can you cater breakfast for a large office?',
      a: 'Yes. Boxed drops, platters and buffets scale with the room. A standard buffet starts from 20 guests. Drop-off starts from 10 guests and AED 900.',
    },
    {
      q: 'Do you serve hot breakfast dishes?',
      a: 'Yes. Eggs, pancakes, Arabic breads, halloumi and warm sides, held on chafing dishes when the format is a buffet.',
    },
    {
      q: 'Are healthy and dietary options available?',
      a: 'Yes, when they are named in the brief. Vegan, gluten-free, dairy-free and low-sugar dishes can sit on the same table, labelled.',
    },
    {
      q: 'Can breakfast be served at a villa or hotel suite?',
      a: 'Yes. We cook or drop at villas, apartments, hotel suites and serviced residences. Staffed service includes clear-down.',
    },
    {
      q: 'How far in advance should I book breakfast catering?',
      a: 'Smaller orders: about 48 hours. Large corporate breakfasts: one to two weeks. Peak weeks need longer.',
    },
    {
      q: 'Do you also do breakfast platters Dubai?',
      a: 'Yes. Platters are one format. Boxes and a hot buffet are others. The quote names which one you are buying.',
    },
    {
      q: 'Does Arabic breakfast catering Dubai mean this service?',
      a: 'It can. Foul, eggs, Arabic breads, labneh and cheese sit on this page when they are a morning catering brief. A standing household cook is private chef.',
    },
  ],
  relatedServices: [
    {
      title: 'Office Catering Dubai',
      description: 'Meetings, lunches and all-day team food, not only the first meal.',
      image: '/service-corporate.webp',
      link: '/office-catering-dubai',
    },
    {
      title: 'Brunch Catering Dubai',
      description: 'A late morning or midday table. Different pacing than breakfast.',
      image: '/service-events.webp',
      link: '/brunch-catering-dubai',
    },
    {
      title: 'Healthy Catering Dubai',
      description: 'Menus written around dietary notes, not a separate product.',
      image: '/service-catering.webp',
      link: '/cuisines-dubai',
    },
    {
      title: 'Coffee & Tea Service',
      description: 'Coffee, tea and pastry as part of a catering brief.',
      image: '/images/afternoon-tea-catering-dubai-hero.webp',
      link: '/catering-dubai',
    },
  ],
  ctaH2: 'Send the slot, headcount and address',
  ctaP:
    'Tell us the start time, guest count and whether you need drop-off or staff. We send an itemised breakfast catering Dubai quote, with 5% VAT on its own line.',
}

export default function BreakfastCatering() {
  return <ServiceLandingPage config={config} />
}
