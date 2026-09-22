import { Link } from 'react-router'
import { Egg, Rabbit, Flower2, Sun, Home, Building2 } from 'lucide-react'
import OccasionCateringPage from './occasion/OccasionCateringPage'
import type { OccasionPageConfig } from './occasion/OccasionCateringPage'

const config: OccasionPageConfig = {
  slug: 'easter-catering-dubai',
  seoTitle: 'Easter Catering Dubai | myCHEF',
  metaDescription:
    'Easter catering Dubai at your home or villa: brunch, roast lunch or a garden table. We cook at your venue. Buffet from AED 120. Itemised quote.',
  canonicalPath: '/private-party-catering-dubai',
  ogImage: '/images/easter-catering-dubai-hero.webp',
  breadcrumbLabel: 'Easter Catering Dubai',
  h1: 'Easter Catering Dubai',
  heroSub:
    'Easter catering Dubai for a family brunch, roast lunch or garden sitting. We cook at your home or villa, serve and clear down.',
  heroImage: '/images/easter-catering-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to book Easter catering in Dubai (via mychef.ae/easter-catering-dubai)",
  eyebrow: 'EASTER CATERING IN DUBAI',
  introH2: 'Easter catering Dubai for a mixed-age table',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Easter catering Dubai is a family sitting at your home, villa or garden, not a hotel lunch you have to leave. Easter brunch catering Dubai and Easter Sunday lunch catering Dubai use the same rule: you host, we cook. Lamb, ham, breads, salads and a dessert the children will actually eat.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        A staffed buffet starts from AED 120 per person. Drop-off from AED 90. Chef-led plated dining is AED 700–950. All before 5% VAT. Halal Easter catering Dubai is the default sourcing; pork is only on the menu when you ask for it. Dietary notes go into the first draft.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        A spring morning table can sit on{' '}
        <Link to="/brunch-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          brunch catering
        </Link>
        . A larger gathering at home belongs on{' '}
        <Link to="/private-party-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          private party catering
        </Link>
        .
      </p>
    </>
  ),
  formatsH2: 'How Easter is served',
  formats: [
    {
      Icon: Egg,
      title: 'Easter brunch',
      description: 'Eggs, pastries, fruit, salads and coffee for a late morning sitting.',
      link: '/brunch-catering-dubai',
    },
    {
      Icon: Rabbit,
      title: 'Family Easter lunch',
      description: 'A roast lunch with lamb or ham, sides and a dessert, paced for grandparents and children.',
      link: '/private-party-catering-dubai',
    },
    {
      Icon: Flower2,
      title: 'Garden and terrace parties',
      description: 'Grazing or a grill outside, planned around heat, shade and how long people stay.',
      link: '/villas-private-residences',
    },
    {
      Icon: Sun,
      title: 'Kids Easter egg hunt catering',
      description: 'A simpler plate for children, timed around the hunt, with the adult table as the main event.',
      link: '/birthday-catering-dubai',
    },
    {
      Icon: Home,
      title: 'At-home villa dining',
      description: 'Setup, cooking, service and clear-down in the kitchen you already have.',
      link: '/villas-private-residences',
    },
    {
      Icon: Building2,
      title: 'Venue and corporate Easter events',
      description: 'A community or company sitting. Timing and labels matter more than floral language.',
      link: '/corporate-event-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE EASTER CATERING SHINES',
  useCasesH2: 'Family lunch, garden, egg hunt',
  useCases: [
    {
      title: 'Family gatherings',
      description:
        'A mixed-age table. Traditional dishes for those who want them, a lighter plate for those who do not.',
    },
    {
      title: 'Garden and poolside parties',
      description:
        'Dubai spring weather. Shade, holding and drinks that can be carried away from the table.',
    },
    {
      title: 'Children’s Easter egg hunts',
      description:
        'Serve children first. Keep the adult catering as the main sitting. One dessert, one running order.',
    },
    {
      title: 'Corporate and community events',
      description:
        'A daytime reception with a clock. Food that holds, then a room that has to be used again.',
    },
  ],
  includedH2: 'What a staffed Easter sitting includes',
  includedItems: [
    { title: 'Menu written for the table', description: 'Spring dishes and Easter classics, chosen for who is eating, not a stock template.' },
    { title: 'Roast mains', description: 'Lamb, ham or a vegetarian centre, carved when the format needs it. Pork only when requested.' },
    { title: 'Starters and salads', description: 'Lighter plates so the roast is not the only food in the room.' },
    { title: 'Easter desserts', description: 'Hot cross buns, chocolate, cake. Named in the quote, not assumed.' },
    { title: 'Chef and staff', description: 'Licensed partners and waiters sized to the format.' },
    { title: 'Dietary notes', description: 'Halal, vegetarian, vegan, gluten-free and allergy notes in the first draft.' },
    { title: 'Tableware', description: 'Plates, linen and serving kit brought in and taken out.' },
    { title: 'Setup and cleanup', description: 'We arrive, cook, serve and leave the kitchen as we found it.' },
  ],
  galleryH2: 'How Easter catering looks in Dubai',
  galleryImages: [
    { src: '/images/easter-catering-dubai-hero.webp', alt: 'Easter catering setup in Dubai' },
    { src: '/menu-appetizer.webp', alt: 'Spring appetisers for an Easter brunch' },
    { src: '/menu-meat.webp', alt: 'Roast lamb and Easter main dishes' },
    { src: '/menu-dessert.webp', alt: 'Easter desserts and chocolate treats' },
    { src: '/service-events.webp', alt: 'Event catering service in Dubai' },
    { src: '/service-luxury-dining.webp', alt: 'Private dining for an Easter lunch in Dubai' },
  ],
  faqsH2: 'Questions before you book',
  faqs: [
    {
      q: 'Can you cater Easter at my home or villa in Dubai?',
      a: 'Yes. We cook at your address: chefs, staff, equipment and tableware on a staffed booking.',
    },
    {
      q: 'What Easter dishes do you offer?',
      a: 'Lamb, ham (on request), roasted vegetables, salads, hot cross buns and chocolate. The menu is written for the table in front of us.',
    },
    {
      q: 'Do you cater Easter egg hunts for children?',
      a: 'Yes. We time the children’s food around the hunt so it does not collide with the adult lunch.',
    },
    {
      q: 'Can you host an Easter brunch instead of lunch?',
      a: 'Yes. Eggs, pastries, fruit and coffee. If the sitting is a late morning table without the Easter date, that is brunch catering.',
    },
    {
      q: 'How far in advance should I book Easter catering?',
      a: 'Two to three weeks is the usual window. Larger family tables book earlier.',
    },
    {
      q: 'Can you accommodate dietary requirements?',
      a: 'Yes, when they are named early. Halal sourcing is the default. We do not describe a kitchen as allergen-free.',
    },
  ],
  relatedServices: [
    {
      title: 'Brunch Catering Dubai',
      description: 'A late morning table when the date is not Easter.',
      image: '/images/brunch-catering-dubai-hero.webp',
      link: '/brunch-catering-dubai',
    },
    {
      title: 'Private Party Catering',
      description: 'The house night this Easter sitting redirects into.',
      image: '/service-events.webp',
      link: '/private-party-catering-dubai',
    },
    {
      title: 'Kids Birthday Catering',
      description: 'Children’s food as part of a family sitting, owned on the birthday page.',
      image: '/images/kids-birthday-catering-dubai-hero.webp',
      link: '/birthday-catering-dubai',
    },
  ],
  ctaH2: 'Send the date, guest count and who is eating',
  ctaP:
    'Tell us brunch or lunch, how many adults and children, and the address. We send an itemised Easter catering Dubai quote.',
  showTrustSignalStrip: true,
}

export default function EasterCatering() {
  return <OccasionCateringPage config={config} />
}
