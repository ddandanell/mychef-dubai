import { Link } from 'react-router'
import { Users, Home, PartyPopper, Utensils, Heart, Building } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'reunion-catering-dubai',
  seoTitle: 'Reunion Catering Dubai | myCHEF',
  metaDescription:
    'Reunion catering Dubai for family, school and friends. Sharing food so the host stays in the room. Buffet from AED 120. Itemised quote.',
  canonicalPath: '/private-party-catering-dubai',
  ogImage: '/service-events.webp',
  breadcrumbLabel: 'Reunion Catering Dubai',
  h1: 'Reunion Catering Dubai',
  heroSub:
    'Reunion catering Dubai for family, alumni or friends. Sharing plates, a mixed guest list, and a host who is not in the kitchen.',
  heroImage: '/service-events.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to arrange reunion catering in Dubai (via mychef.ae/reunion-catering-dubai)",
  eyebrow: 'REUNION CATERING IN DUBAI',
  introH2: 'Reunion catering Dubai so the host can sit down',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Reunion catering Dubai is a mixed guest list that has not eaten together in years. Family in a villa, alumni in a hall, friends in an apartment. Sharing food, dietary notes named early, and a running order that does not keep the host plating.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        A staffed buffet starts from AED 120 per person. Live stations from AED 150. Drop-off from AED 90. All before 5% VAT. Family reunion catering Dubai and school reunion catering Dubai use the standard format starting prices, with service tailored to the reunion.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        A villa sitting sits next to{' '}
        <Link to="/villas-private-residences" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          villa dining Dubai
        </Link>
        . An informal gathering at home belongs on{' '}
        <Link to="/private-party-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          private party catering Dubai
        </Link>
        .
      </p>
    </>
  ),
  formatsH2: 'How a reunion is served',
  formats: [
    {
      Icon: Users,
      title: 'Family-style shared menus',
      description: 'Platters passed around a table so people stay in the conversation.',
      link: '/catering-dubai',
    },
    {
      Icon: PartyPopper,
      title: 'Grazing and mezze tables',
      description: 'A spread people can eat at their own pace while they catch up.',
      link: '/grazing-table-dubai',
    },
    {
      Icon: Utensils,
      title: 'Live cooking stations',
      description: 'Pasta, BBQ or shawarma as a gathering point. Power and queue space belong in the brief.',
      link: '/live-cooking-stations-dubai',
    },
    {
      Icon: Home,
      title: 'Villa and home reunions',
      description: 'Setup, service and cleanup at the house. You stay with the people you invited.',
      link: '/villas-private-residences',
    },
    {
      Icon: Building,
      title: 'Alumni and school reunions',
      description: 'A hall or venue you have booked. Their rules, our kitchen team.',
      link: '/events',
    },
    {
      Icon: Heart,
      title: 'Dessert spreads',
      description: 'A sweet course quoted when you want it, not assumed on drop-off.',
      link: '/dessert-table-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE REUNION CATERING WORKS',
  useCasesH2: 'Family, alumni, friends',
  useCases: [
    {
      title: 'Family reunions',
      description:
        'Mixed ages, mixed diets, a long sitting. Labels on the food matter more than a theme.',
    },
    {
      title: 'School and alumni reunions',
      description:
        'A venue reception. Guest count and access decide the crew.',
    },
    {
      title: 'Friends’ get-togethers',
      description:
        'A long-overdue table. Nobody in the group should be washing up.',
    },
    {
      title: 'Anniversary reunions',
      description:
        'A group that has a history. Two covers marking a year belong on a romantic dinner page.',
    },
  ],
  includedH2: 'What a staffed reunion includes',
  includedItems: [
    { title: 'Sharing menus', description: 'Family-style and grazing formats for groups that talk more than they sit still.' },
    { title: 'More than one cuisine', description: 'Mediterranean, Middle Eastern, Asian, Indian or a mix, written for this guest list.' },
    { title: 'Live stations', description: 'Optional, when the room should move.' },
    { title: 'Dietary flexibility', description: 'Vegetarian, vegan, halal, gluten-free and allergy notes, labelled.' },
    { title: 'Tableware', description: 'Platters, linen and kit brought in and taken out.' },
    { title: 'Staff', description: 'A team that replenishes without interrupting the table.' },
    { title: 'Setup and cleanup', description: 'The house or hall is left usable.' },
    { title: 'Guest count', description: 'Drop-off from 10. Buffet from 20. A chef on site has no minimum headcount.' },
  ],
  galleryH2: 'How reunion catering looks in Dubai',
  galleryImages: [
    { src: '/service-events.webp', alt: 'Reunion catering set-up in Dubai' },
    { src: '/menu-canapes.webp', alt: 'Shared canapés and mezze for a reunion' },
    { src: '/menu-appetizer.webp', alt: 'Reunion appetisers and salads' },
    { src: '/menu-dessert.webp', alt: 'Reunion dessert table and shared sweets' },
    { src: '/service-villa.webp', alt: 'Villa reunion party styling' },
    { src: '/service-catering.webp', alt: 'Family reunion catering service in Dubai' },
  ],
  faqsH2: 'Questions before you book',
  faqs: [
    {
      q: 'What types of reunions do you cater?',
      a: 'Family reunions, school and alumni gatherings, friends’ tables and group anniversaries.',
    },
    {
      q: 'Can you cater a reunion at a villa or home?',
      a: 'Yes. Staffed bookings include setup, service and clear-down at your address.',
    },
    {
      q: 'What food works best for a reunion?',
      a: 'Sharing food: mezze, grazing, family-style mains, a BBQ station. People move. The food should too.',
    },
    {
      q: 'Can you accommodate mixed dietary requirements?',
      a: 'Yes, when named early. Reunions almost always need that. Dishes are labelled. We do not call a kitchen allergen-free.',
    },
    {
      q: 'Do you cater school or alumni events at a venue?',
      a: 'Yes, at a venue you have booked. Access times and pack-down sit in the quote.',
    },
    {
      q: 'How far in advance should I book reunion catering?',
      a: 'Two to four weeks is the usual window. Peak season needs longer.',
    },
  ],
  relatedServices: [
    {
      title: 'Private Party Catering',
      description: 'The house night this reunion sitting redirects into.',
      image: '/service-villa.webp',
      link: '/private-party-catering-dubai',
    },
    {
      title: 'BBQ Catering Dubai',
      description: 'Grill-led service when the garden is the room.',
      image: '/menu-meat.webp',
      link: '/bbq-catering-dubai',
    },
  ],
  ctaH2: 'Send who is coming and where they will sit',
  ctaP:
    'Tell us family, school or friends, guest count and the address. We send an itemised reunion catering Dubai quote.',
  showTrustSignalStrip: true,
}

export default function ReunionCatering() {
  return <ServiceLandingPage config={config} />
}
