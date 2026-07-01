import { Link } from 'react-router'
import { Flag, Home, Building2, Users, UtensilsCrossed, Flame } from 'lucide-react'
import OccasionCateringPage from './occasion/OccasionCateringPage'
import type { OccasionPageConfig } from './occasion/OccasionCateringPage'

const config: OccasionPageConfig = {
  slug: 'uae-national-day-catering-dubai',
  seoTitle: 'UAE National Day Catering Dubai | Private Chef & Celebration Menu',
  metaDescription:
    'UAE National Day catering in Dubai. Celebrate 2 December with bespoke Emirati menus, live grills and elegant buffets at home, villas, offices or venues across Dubai.',
  canonicalPath: '/uae-national-day-catering-dubai',
  ogImage: '/images/uae-national-day-catering-dubai-hero.webp',
  breadcrumbLabel: 'UAE National Day Catering Dubai',
  h1: 'UAE National Day Catering in Dubai',
  heroSub:
    'Celebrate the spirit of the Union with a bespoke National Day menu crafted by a private chef — authentic Emirati flavours, modern canapés and seamless service at your villa, office or venue.',
  heroImage: '/images/uae-national-day-catering-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to book UAE National Day catering in Dubai (via mychef.ae/uae-national-day-catering-dubai)",
  eyebrow: 'UAE NATIONAL DAY CATERING IN DUBAI',
  introH2: 'A National Day Feast Worthy of the Occasion',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        UAE National Day is one of the most joyful occasions in Dubai — a time to come together, honour heritage and celebrate progress. Whether you are hosting an intimate family gathering, a villa party for friends or a corporate reception for colleagues, our National Day catering service brings the flavours of the Emirates to your chosen setting. We combine traditional Emirati dishes with contemporary presentation, so every buffet feels both rooted and refined.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Our chefs design menus around your guest list, venue and schedule. Expect slow-cooked lamb ouzi, fragrant machboos, freshly baked khameer, date-based desserts and live shawarma or kebab stations that draw guests in. We handle everything from setup and service to cleanup, leaving you free to enjoy the fireworks, music and company.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        We cater UAE National Day events across Dubai, from Palm Jumeirah villas and Emirates Hills homes to Downtown offices and desert camps. Pair this with our{' '}
        <Link to="/eid-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          Eid catering
        </Link>{' '}
        for other cultural celebrations, or explore{' '}
        <Link to="/corporate-event-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          corporate event catering
        </Link>{' '}
        for large office gatherings.
      </p>
    </>
  ),
  formatsH2: 'National Day Celebration Formats',
  formats: [
    {
      Icon: Flag,
      title: 'National Day Buffet',
      description: 'A styled buffet of Emirati classics and modern dishes, perfect for villa parties, community gatherings and family celebrations.',
      link: '/party-catering-dubai',
    },
    {
      Icon: Flame,
      title: 'Live Grill & Shawarma Station',
      description: 'An interactive station serving fresh grills, shawarma and Arabic breads cooked in front of your guests.',
      link: '/live-cooking-station-dubai',
    },
    {
      Icon: Home,
      title: 'Villa & Home Celebrations',
      description: 'Transform your garden, terrace or dining room into a National Day venue with full setup, service and cleanup.',
      link: '/villas-private-residences',
    },
    {
      Icon: Building2,
      title: 'Office & Corporate Receptions',
      description: 'Elegant grazing tables, boxed menus and buffet setups for workplace National Day events across Dubai.',
      link: '/corporate-event-catering-dubai',
    },
    {
      Icon: Users,
      title: 'Community & Large Gatherings',
      description: 'Scalable catering for large guest lists, with multiple service points and efficient flow management.',
      link: '/event-catering-dubai',
    },
    {
      Icon: UtensilsCrossed,
      title: 'Emirati Tasting Menu',
      description: 'A curated multi-course journey through UAE flavours, ideal for intimate dinners or VIP hospitality.',
      link: '/luxury-dining-experiences',
    },
  ],
  useCasesEyebrow: 'WHERE NATIONAL DAY CATERING SHINES',
  useCasesH2: 'Heritage, Hospitality & Hassle-Free Service',
  useCases: [
    {
      title: 'Family Villa Gatherings',
      description:
        'Celebrate at home with a buffet that feels like a five-star hotel spread. We bring chefs, service staff, tableware and décor tailored to the occasion.',
    },
    {
      title: 'Corporate National Day Receptions',
      description:
        'Show appreciation for your team with an elegant office reception, complete with branded touches, grazing tables and Emirati-inspired dishes.',
    },
    {
      title: 'Community & Embassy Events',
      description:
        'From large majlises to community halls, we design service plans that keep long queues moving and every guest well fed.',
    },
    {
      title: 'Desert & Outdoor Celebrations',
      description:
        'Take the celebration into the dunes or a beachside setup with menus that travel beautifully and service that adapts to the outdoors.',
    },
  ],
  includedH2: "What's Included in Our UAE National Day Catering",
  includedItems: [
    { title: 'Bespoke Emirati Menu', description: 'A personalised menu blending traditional UAE dishes with modern canapés and crowd favourites.' },
    { title: 'Live Cooking Stations', description: 'Optional live grill, shawarma or Arabic bread stations to add theatre and freshness.' },
    { title: 'Professional Chefs & Staff', description: 'Experienced chefs, servers and event support who deliver polished hospitality throughout your event.' },
    { title: 'Styling & Theming', description: 'Subtle National Day colour accents, linens, serving ware and décor that suit the occasion.' },
    { title: 'Halal & Dietary Options', description: 'All menus are halal by default; vegetarian, vegan and allergy-aware options available.' },
    { title: 'Setup, Service & Cleanup', description: 'We arrive early, manage service, and leave your venue spotless after the celebration.' },
    { title: 'Flexible Guest Counts', description: 'From intimate family dinners to large community events, we scale the team and menu accordingly.' },
    { title: 'All Dubai Locations', description: 'Service at villas, apartments, offices, venues, yachts and outdoor sites across the emirate.' },
  ],
  galleryH2: 'A Taste of Our UAE National Day Catering',
  galleryImages: [
    { src: '/images/uae-national-day-catering-dubai-hero.webp', alt: 'UAE National Day catering setup in Dubai' },
    { src: '/menu-canapes.webp', alt: 'Canapés and appetisers for a National Day event' },
    { src: '/menu-mains.webp', alt: 'Emirati-inspired main dishes for a celebration' },
    { src: '/menu-dessert.webp', alt: 'Date and Arabic desserts for National Day' },
    { src: '/service-events.webp', alt: 'Event catering service in Dubai' },
    { src: '/service-luxury-dining.webp', alt: 'Luxury private dining experience in Dubai' },
  ],
  faqsH2: 'UAE National Day Catering Questions',
  faqs: [
    {
      q: 'Can you cater UAE National Day at my home or villa?',
      a: 'Yes. We specialise in villa and home catering, bringing chefs, staff, equipment and tableware so you can host without lifting a finger.',
    },
    {
      q: 'Do you offer traditional Emirati dishes for National Day?',
      a: 'Absolutely. Our menus can feature ouzi, machboos, harees, thareed, khameer, luqaimat and date-based desserts, prepared with authentic flavours and modern presentation.',
    },
    {
      q: 'Can you handle large corporate National Day events?',
      a: 'Yes. We cater office receptions, large corporate gatherings and community events with scalable buffets, live stations and efficient service flow.',
    },
    {
      q: 'Do you provide live cooking stations?',
      a: 'We offer live grill, shawarma, kebab and Arabic bread stations that add energy and freshness to your National Day celebration.',
    },
    {
      q: 'How far in advance should I book National Day catering?',
      a: 'National Day is a busy date. We recommend booking two to four weeks ahead, especially for large events, live stations and prime time slots.',
    },
    {
      q: 'Are your National Day menus halal?',
      a: 'Yes. All our catering is halal by default, and we can accommodate vegetarian, vegan, gluten-free and other dietary requirements on request.',
    },
  ],
  relatedServices: [
    {
      title: 'Eid Catering Dubai',
      description: 'Festive halal catering for Eid al-Fitr and Eid al-Adha celebrations at home or venue.',
      image: '/images/eid-catering-dubai-hero.webp',
      link: '/eid-catering-dubai',
    },
    {
      title: 'Corporate Event Catering',
      description: 'Polished catering for office events, product launches and team celebrations across Dubai.',
      image: '/service-corporate.webp',
      link: '/corporate-event-catering-dubai',
    },
    {
      title: 'Live Cooking Station Dubai',
      description: 'Interactive food stations that bring theatre and freshness to any celebration.',
      image: '/service-events.webp',
      link: '/live-cooking-station-dubai',
    },
  ],
  ctaH2: 'Book Your UAE National Day Catering',
  ctaP:
    'Tell us about your guest count, venue and vision. We will design a National Day menu and service plan that celebrates the occasion beautifully.',
}

export default function UaeNationalDayCatering() {
  return <OccasionCateringPage config={config} />
}
