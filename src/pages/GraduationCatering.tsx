import { Link } from 'react-router'
import { GraduationCap, PartyPopper, Home, Building, Utensils, Camera } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'graduation-catering-dubai',
  seoTitle: 'Graduation Catering Dubai | myCHEF',
  metaDescription:
    'Graduation catering Dubai for school, university and family parties. Daytime food, mixed ages. Buffet from AED 120. Itemised quote.',
  canonicalPath: '/private-party-catering-dubai',
  ogImage: '/service-events.webp',
  breadcrumbLabel: 'Graduation Party Catering Dubai',
  h1: 'Graduation Catering Dubai',
  heroSub:
    'Graduation catering Dubai for a school leaver party, a university lunch or a family table at home. Mixed ages, earlier service, then clear-down.',
  heroImage: '/service-events.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to arrange graduation party catering in Dubai (via mychef.ae/graduation-catering-dubai)",
  eyebrow: 'GRADUATION PARTY CATERING IN DUBAI',
  introH2: 'Graduation catering Dubai is usually a daytime mixed-ages table',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Graduation catering Dubai is lunch or a late afternoon more often than an evening party. Grandparents, classmates and siblings eat at different speeds. The brief is daytime food, earlier service, and a menu that does not assume a night out.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        A staffed buffet starts from AED 120 per person. Canapés from AED 150. Drop-off from AED 90. All before 5% VAT. Dietary notes go into the first draft.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        A house sitting belongs on{' '}
        <Link to="/private-party-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          private party catering Dubai
        </Link>
        . A more formal seated dinner can be quoted from{' '}
        <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          luxury catering Dubai
        </Link>
        .
      </p>
    </>
  ),
  formatsH2: 'How a graduation sitting is served',
  formats: [
    {
      Icon: PartyPopper,
      title: 'Graduation buffets',
      description: 'A maintained spread for mixed guest lists. School colours if you want them. Food still has to hold.',
      link: '/buffet-catering-dubai',
    },
    {
      Icon: Utensils,
      title: 'Plated celebration dinners',
      description: 'Courses at the table when the guest list fits one sitting.',
      link: '/catering-dubai',
    },
    {
      Icon: Camera,
      title: 'Canapé receptions',
      description: 'Passed bites for arrivals and photographs, then a main when people actually eat.',
      link: '/canape-catering-dubai',
    },
    {
      Icon: Home,
      title: 'Villa and home graduation parties',
      description: 'Setup, service and pack-down at the house. Gates and kitchen access belong in the brief.',
      link: '/villas-private-residences',
    },
    {
      Icon: Building,
      title: 'School and university events',
      description: 'A hall, courtyard or auditorium you have booked. Their rules, our kitchen team.',
      link: '/events',
    },
    {
      Icon: GraduationCap,
      title: 'Dessert and cake stations',
      description: 'Cake as its own moment, not colliding with the main. Quoted when you want us to supply it.',
      link: '/dessert-table-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE GRADUATION CATERING WORKS',
  useCasesH2: 'School leavers, university, family villas',
  useCases: [
    {
      title: 'School leaver parties',
      description:
        'Age-appropriate food, labelled, with a running order parents can see in the quote.',
    },
    {
      title: 'University graduation events',
      description:
        'Classmates, professors and family at the same table. Spice levels and dietary notes named early.',
    },
    {
      title: 'Family villa celebrations',
      description:
        'A lunch or dinner at home in Emirates Hills, Palm Jumeirah or Dubai Hills. You stay with the graduate.',
    },
    {
      title: 'Institutional ceremonies',
      description:
        'A reception with a clock. Food that holds, then a room that has to empty.',
    },
  ],
  includedH2: 'What a staffed graduation sitting includes',
  includedItems: [
    { title: 'Menu written for mixed ages', description: 'The graduate, the grandparents and any children, named in the brief.' },
    { title: 'Live stations', description: 'Optional pasta, BBQ or dessert stations. Power and supervision belong in the quote.' },
    { title: 'Canapés and grazing', description: 'Arrival food while photographs happen.' },
    { title: 'Cake', description: 'Quoted when you want us to supply it, or we plate a cake you bring.' },
    { title: 'Drinks', description: 'Mocktails, juice and soft drinks. Alcohol at a private residence is sourced by the host.' },
    { title: 'Dietary notes', description: 'Vegetarian, vegan, gluten-free, halal and allergy notes, labelled.' },
    { title: 'Setup and service', description: 'Tables, linen and staff sized to the format.' },
    { title: 'Pack-down', description: 'The house or hall is left usable.' },
  ],
  galleryH2: 'How graduation catering looks in Dubai',
  galleryImages: [
    { src: '/service-events.webp', alt: 'Graduation party catering set-up in Dubai' },
    { src: '/menu-canapes.webp', alt: 'Canapés for a graduation celebration' },
    { src: '/menu-appetizer.webp', alt: 'Graduation party appetisers and salads' },
    { src: '/menu-dessert.webp', alt: 'Graduation dessert table and cake display' },
    { src: '/service-villa.webp', alt: 'Villa graduation party styling' },
    { src: '/service-catering.webp', alt: 'Graduation catering service in Dubai' },
  ],
  faqsH2: 'Questions before you book',
  faqs: [
    {
      q: 'What types of graduation events do you cater?',
      a: 'School leaver parties, university lunches, postgraduate dinners, family villa gatherings and institutional receptions.',
    },
    {
      q: 'Can you match the school or university colours and theme?',
      a: 'We can match dessert colours and a few table details. The food still has to hold and eat cleanly.',
    },
    {
      q: 'Do you provide non-alcoholic drinks and mocktails?',
      a: 'Yes. Mocktails, juice and soft drinks. Alcohol at a private residence is sourced by the host.',
    },
    {
      q: 'Can graduation catering be held at home or in a villa?',
      a: 'Yes. We cook at your address. Staffed bookings include setup, service and clear-down.',
    },
    {
      q: 'Do you cater for mixed-age groups including children and grandparents?',
      a: 'Yes. That is the usual graduation brief. Serve children earlier if you want one party, not two.',
    },
    {
      q: 'How far in advance should I book graduation party catering?',
      a: 'Two to four weeks is the usual window, longer in graduation season.',
    },
  ],
  relatedServices: [
    {
      title: 'Private Party Catering',
      description: 'The house night this graduation sitting redirects into.',
      image: '/service-villa.webp',
      link: '/private-party-catering-dubai',
    },
    {
      title: 'Dessert Table Catering',
      description: 'A styled sweet display when cake needs its own table.',
      image: '/menu-dessert.webp',
      link: '/dessert-table-catering-dubai',
    },
  ],
  ctaH2: 'Send the graduate, the guest list and the time of day',
  ctaP:
    'Tell us school, university or family, how many people and whether it is lunch or evening. We send an itemised quote.',
  showTrustSignalStrip: true,
}

export default function GraduationCatering() {
  return <ServiceLandingPage config={config} />
}
