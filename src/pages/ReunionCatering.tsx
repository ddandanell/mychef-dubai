import { Link } from 'react-router'
import { Users, Home, PartyPopper, Utensils, Heart, Building } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'reunion-catering-dubai',
  seoTitle: 'Reunion Catering Dubai | Family & Friends Get-Togethers',
  metaDescription:
    'Reunion catering in Dubai for family gatherings, school reunions and friends get-togethers. Shared menus, live stations, villa service and full setup. Request a quote.',
  canonicalPath: '/reunion-catering-dubai',
  ogImage: '/service-events.webp',
  breadcrumbLabel: 'Reunion Catering Dubai',
  h1: 'Reunion Catering in Dubai',
  heroSub:
    'Bring everyone back together with reunion catering across Dubai — generous shared menus, relaxed service and beautiful setups for family, friends and alumni gatherings.',
  heroImage: '/service-events.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to arrange reunion catering in Dubai (via mychef.ae/reunion-catering-dubai)",
  eyebrow: 'REUNION CATERING IN DUBAI',
  introH2: 'Good Food for Long-Awaited Reunions',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Reunions are about reconnecting, sharing stories and enjoying the people you have missed. The last thing any host wants is to be stuck in the kitchen while everyone else is catching up. Our reunion catering in Dubai is built around relaxed, generous service that keeps guests fed, happy and together from the first arrival to the final goodbye.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        We cater family reunions in villas across Emirates Hills and Palm Jumeirah, school and alumni gatherings in Dubai Marina and Jumeirah, and friends’ get-togethers in penthouses, gardens and beach clubs. Menus are designed for sharing: mezze and antipasti, grazing tables, BBQ live stations, family-style mains and dessert spreads that invite everyone to the table.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        This service works beautifully alongside our{' '}
        <Link to="/party-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          party catering Dubai
        </Link>{' '}
        range and{' '}
        <Link to="/villas-private-residences" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          villa dining Dubai
        </Link>{' '}
        service. For a more private occasion, explore our{' '}
        <Link to="/private-party-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          private party catering Dubai
        </Link>{' '}
        options.
      </p>
    </>
  ),
  formatsH2: 'Reunion Catering Formats',
  formats: [
    {
      Icon: Users,
      title: 'Family-Style Shared Menus',
      description: 'Generous platters and shared bowls passed around the table to encourage conversation and connection.',
      link: '/catering-dubai',
    },
    {
      Icon: PartyPopper,
      title: 'Grazing & Mezze Tables',
      description: 'Long, colourful tables of antipasti, mezze, cheeses and breads that guests can enjoy at their own pace.',
      link: '/grazing-table-dubai',
    },
    {
      Icon: Utensils,
      title: 'Live Cooking Stations',
      description: 'Interactive pasta, BBQ, shawarma or seafood stations that become a natural gathering point for guests.',
      link: '/live-cooking-stations-dubai',
    },
    {
      Icon: Home,
      title: 'Villa & Home Reunions',
      description: 'Full-service catering at your villa or home with setup, service and cleanup so you can simply host.',
      link: '/villas-private-residences',
    },
    {
      Icon: Building,
      title: 'Alumni & School Reunions',
      description: 'Venue-based catering for school, university and alumni reunions with scalable menus and service.',
      link: '/event-catering-dubai',
    },
    {
      Icon: Heart,
      title: 'Themed Dessert Spreads',
      description: 'Memory-inspired desserts, cakes and sweet tables that celebrate the occasion and the people.',
      link: '/dessert-table-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE REUNION CATERING WORKS',
  useCasesH2: 'Built for People Who Have Stories to Share',
  useCases: [
    {
      title: 'Family Reunions',
      description:
        'Multi-generational family gatherings where shared dishes, dietary variety and a relaxed pace make everyone feel at home.',
    },
    {
      title: 'School & Alumni Reunions',
      description:
        'Catering for former classmates meeting again in Dubai, with menus that suit venue receptions and mixed tastes.',
    },
    {
      title: 'Friends’ Get-Togethers',
      description:
        'Long-overdue catch-ups that deserve great food without anyone having to cook, wash up or leave the conversation.',
    },
    {
      title: 'Special Anniversary Reunions',
      description:
        'Milestone reunions for groups who have shared decades of history and want a celebration to match.',
    },
  ],
  includedH2: "What's Included in Our Reunion Catering",
  includedItems: [
    { title: 'Generous Sharing Menus', description: 'Family-style and grazing formats designed for groups who want to eat together.' },
    { title: 'Multi-Cuisine Options', description: 'Mediterranean, Middle Eastern, Asian, Indian, international and fusion menus to suit every group.' },
    { title: 'Live Cooking Stations', description: 'Chef-manned stations that add theatre and keep food fresh throughout the event.' },
    { title: 'Dietary Flexibility', description: 'Vegetarian, vegan, halal, gluten-free and allergy-aware options for mixed groups.' },
    { title: 'Tableware & Styling', description: 'Elegant platters, linen, serveware and styling that suit the tone of the reunion.' },
    { title: 'Attentive Service Staff', description: 'Friendly staff who keep the food flowing and the space tidy without interrupting conversations.' },
    { title: 'Full Setup & Cleanup', description: 'We arrive early, set up, serve and clear away so hosts can stay with their guests.' },
    { title: 'Flexible Group Sizes', description: 'From intimate reunions of 10 to large gatherings of 100 or more.' },
  ],
  galleryH2: 'A Taste of Our Reunion Catering',
  galleryImages: [
    { src: '/service-events.webp', alt: 'Reunion catering set-up in Dubai' },
    { src: '/menu-canapes.webp', alt: 'Shared canapés and mezze for a reunion' },
    { src: '/menu-appetizer.webp', alt: 'Reunion appetisers and salads' },
    { src: '/menu-dessert.webp', alt: 'Reunion dessert table and shared sweets' },
    { src: '/service-villa.webp', alt: 'Villa reunion party styling' },
    { src: '/service-catering.webp', alt: 'Family reunion catering service in Dubai' },
  ],
  faqsH2: 'Reunion Catering Questions',
  faqs: [
    {
      q: 'What types of reunions do you cater?',
      a: 'We cater family reunions, school and alumni reunions, friends’ get-togethers, anniversary reunions and any gathering where people are coming back together to celebrate shared history.',
    },
    {
      q: 'Can you cater a reunion at a villa or home?',
      a: 'Yes. We provide full-service villa and home reunion catering across Dubai, including setup, service and cleanup.',
    },
    {
      q: 'What food works best for a reunion?',
      a: 'Sharing-style menus work best. Grazing tables, mezze, family-style mains, BBQ live stations and dessert spreads encourage guests to move around, mingle and eat at their own pace.',
    },
    {
      q: 'Can you accommodate mixed dietary requirements?',
      a: 'Absolutely. Reunions often bring together guests with varied diets. We provide vegetarian, vegan, halal, gluten-free and allergy-aware options clearly labelled and served safely.',
    },
    {
      q: 'Do you cater school or alumni events at a venue?',
      a: 'Yes. We work with venues, schools, hotels and outdoor spaces across Dubai to provide reunion catering that scales to your guest list.',
    },
    {
      q: 'How far in advance should I book reunion catering?',
      a: 'Two to four weeks is ideal, especially for larger groups or villa events during peak season. Smaller gatherings can often be arranged with shorter notice.',
    },
  ],
  relatedServices: [
    {
      title: 'Party Catering Dubai',
      description: 'The hub for birthdays, celebrations and every kind of private gathering.',
      image: '/service-events.webp',
      link: '/party-catering-dubai',
    },
    {
      title: 'Private Party Catering',
      description: 'Intimate home and villa parties with personalised menus and full service.',
      image: '/service-villa.webp',
      link: '/private-party-catering-dubai',
    },
    {
      title: 'BBQ Catering Dubai',
      description: 'Relaxed outdoor grilling menus that work perfectly for reunion gatherings.',
      image: '/menu-meat.webp',
      link: '/bbq-catering-dubai',
    },
  ],
  ctaH2: 'Bring Everyone Together With Great Food',
  ctaP:
    'Tell us about your reunion, guest count, venue and preferred cuisine. We will create a warm, generous catering experience that lets you focus on the people.',
}

export default function ReunionCatering() {
  return <ServiceLandingPage config={config} />
}
