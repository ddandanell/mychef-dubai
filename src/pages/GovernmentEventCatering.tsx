import { Link } from 'react-router'
import { Building2, ShieldCheck, Users, Clock, FileCheck, Truck } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'government-event-catering-dubai',
  seoTitle: 'Government Event Catering Dubai | Official & Protocol Functions',
  metaDescription:
    'Government event catering in Dubai: protocol-aware service, scalable menus, full documentation and reliable execution for official functions, ceremonies and receptions.',
  canonicalPath: '/government-event-catering-dubai',
  ogImage: '/images/corporate-catering-dubai-hero.webp',
  breadcrumbLabel: 'Government Event Catering Dubai',
  h1: 'Government Event Catering in Dubai',
  heroSub:
    'Dependable, protocol-aware catering for government functions in Dubai — from official receptions and ceremonies to multi-day conferences and stakeholder events, delivered with precision and discretion.',
  heroImage: '/images/corporate-catering-dubai-hero.webp',
  whatsappMessage:
    'Hi myCHEF Dubai, I would like to discuss government event catering in Dubai (via mychef.ae/government-event-catering-dubai)',
  eyebrow: 'GOVERNMENT EVENT CATERING IN DUBAI',
  introH2: 'Catering Built for Official Events',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Government and official events demand more than great food — they require reliability, discretion, clear communication and the ability to scale across large, high-profile audiences. Our government event catering in Dubai is designed for ministries, government entities, embassies, diplomatic missions and public-sector organisations that need a catering partner they can trust.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        We deliver formal receptions, working lunches, multi-day conference catering, national day celebrations, ribbon-cutting ceremonies and protocol dinners. Every menu is planned around your schedule, dietary requirements, seating arrangements and event security procedures, with detailed documentation, timely service and a team that understands the importance of first impressions.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        This service extends our{' '}
        <Link to="/corporate-event-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          corporate event catering Dubai
        </Link>{' '}
        and{' '}
        <Link to="/conference-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          conference catering Dubai
        </Link>{' '}
        capabilities, and complements{' '}
        <Link to="/gala-dinner-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          gala dinner catering Dubai
        </Link>{' '}
        for formal evening functions and awards ceremonies.
      </p>
    </>
  ),
  formatsH2: 'Government Catering Formats',
  formats: [
    {
      Icon: Building2,
      title: 'Official Receptions',
      description: 'Elegant canapés, beverages and buffet service for receptions, openings and diplomatic gatherings.',
      link: '/canape-catering-dubai',
    },
    {
      Icon: Users,
      title: 'Conference & Summit Catering',
      description: 'Multi-day catering for plenary sessions, breakout rooms, working lunches and VIP lounges.',
      link: '/conference-catering-dubai',
    },
    {
      Icon: ShieldCheck,
      title: 'Protocol & National Day Events',
      description: 'Formal menus and service aligned with protocol requirements for national and ceremonial occasions.',
      link: '/uae-national-day-catering-dubai',
    },
    {
      Icon: Clock,
      title: 'Working Lunches & Boardrooms',
      description: 'Timely, discreet lunch service for meetings, negotiations and official working sessions.',
      link: '/business-lunch-catering-dubai',
    },
    {
      Icon: FileCheck,
      title: 'Large-Scale Ceremonies',
      description: 'Scalable buffet and plated service for inaugurations, award ceremonies and public events.',
      link: '/gala-dinner-catering-dubai',
    },
    {
      Icon: Truck,
      title: 'Drop-Off & Staffed Service',
      description: 'Flexible service models from delivered platters to full front-of-house teams on site.',
      link: '/drop-off-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE GOVERNMENT CATERING WORKS',
  useCasesH2: 'Trusted Across the Public Sector',
  useCases: [
    {
      title: 'Ministry Receptions',
      description:
        'Formal receptions and stakeholder events hosted by government departments, with menus that respect protocol and dietary diversity.',
    },
    {
      title: 'Diplomatic & Embassy Functions',
      description:
        'Discreet, culturally aware catering for embassies, consulates and international organisation events in Dubai.',
    },
    {
      title: 'Public Conferences & Forums',
      description:
        'Reliable multi-day catering for government-led conferences, public forums and policy summits.',
    },
    {
      title: 'National & Commemorative Events',
      description:
        'Large-format catering for UAE National Day, commemorative ceremonies and public celebrations.',
    },
  ],
  includedH2: "What's Included in Our Government Event Catering",
  includedItems: [
    { title: 'Protocol-Aware Service', description: 'Service style and presentation suited to formal and official occasions.' },
    { title: 'Scalable Menu Planning', description: 'Menus designed for hundreds or thousands of guests with consistent quality.' },
    { title: 'Dietary & Cultural Accommodations', description: 'Halal, vegetarian, vegan, gluten-free and allergy-aware options handled with care.' },
    { title: 'Detailed Event Documentation', description: 'Menu proposals, service schedules and itemised costing provided in advance.' },
    { title: 'On-Time Execution', description: 'Rigorous timing to align with official agendas, speeches and ceremony schedules.' },
    { title: 'Experienced Service Staff', description: 'Professional front-of-house and kitchen teams trained for high-profile events.' },
    { title: 'Secure & Discreet Operations', description: 'Staff who understand venue access, confidentiality and event-security procedures.' },
    { title: 'Full Setup, Service & Breakdown', description: 'End-to-end management so your team can focus on the event, not the catering.' },
  ],
  galleryH2: 'A Taste of Our Government Event Catering',
  galleryImages: [
    { src: '/images/corporate-catering-dubai-hero.webp', alt: 'Government event catering set-up in Dubai' },
    { src: '/service-events.webp', alt: 'Formal reception catering for official functions' },
    { src: '/menu-canapes.webp', alt: 'Canapés and reception bites for government events' },
    { src: '/menu-appetizer.webp', alt: 'Elegant starters for official dinners' },
    { src: '/service-corporate.webp', alt: 'Conference catering for government summits' },
    { src: '/menu-dessert.webp', alt: 'Refined desserts for formal events' },
  ],
  faqsH2: 'Government Event Catering Questions',
  faqs: [
    {
      q: 'What types of government events do you cater?',
      a: 'We cater official receptions, ministry functions, diplomatic events, national day celebrations, conferences, summits, ribbon-cuttings, award ceremonies and working lunches.',
    },
    {
      q: 'Can you accommodate large guest numbers?',
      a: 'Yes. We design scalable menus and service plans for events ranging from intimate boardroom lunches to large public ceremonies with hundreds or thousands of attendees.',
    },
    {
      q: 'Do you provide all necessary event documentation?',
      a: 'Yes. We provide detailed menu proposals, service schedules, itemised costing and dietary breakdowns to support event planning and procurement processes.',
    },
    {
      q: 'Is your catering halal and suitable for official events?',
      a: 'All meats and ingredients are sourced and prepared halal. We also provide vegetarian, vegan, gluten-free and allergen-aware options.',
    },
    {
      q: 'Can you work within venue security and access procedures?',
      a: 'Absolutely. Our teams are experienced in working within secure venues and follow access, timing and confidentiality protocols as required.',
    },
    {
      q: 'How far in advance should a government event be booked?',
      a: 'Two to four weeks is ideal for most events. Large or multi-day functions may require more lead time for full planning and resource allocation.',
    },
  ],
  relatedServices: [
    {
      title: 'Corporate Event Catering',
      description: 'Full-service catering for conferences, launches and company celebrations across Dubai.',
      image: '/service-corporate.webp',
      link: '/corporate-event-catering-dubai',
    },
    {
      title: 'Conference Catering Dubai',
      description: 'Coffee breaks, working lunches and multi-day catering for conferences and seminars.',
      image: '/service-events.webp',
      link: '/conference-catering-dubai',
    },
    {
      title: 'Gala Dinner Catering',
      description: 'Formal gala catering with premium menus, stations and white-glove service.',
      image: '/service-events.webp',
      link: '/gala-dinner-catering-dubai',
    },
  ],
  ctaH2: 'Discuss Your Government Event Catering Requirements',
  ctaP:
    'Share your event scope, expected guest count, venue and any protocol or dietary requirements. We will prepare a detailed, professional catering proposal for your official function.',
}

export default function GovernmentEventCatering() {
  return <ServiceLandingPage config={config} />
}
