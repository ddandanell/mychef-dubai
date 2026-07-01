import { Link } from 'react-router'
import { Building2, Users, Coffee, PartyPopper, Truck, Utensils } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'exhibition-catering-dubai',
  seoTitle: 'Exhibition & Trade Show Catering Dubai | DWTC & Expo City',
  metaDescription:
    'Exhibition and trade show catering in Dubai for DWTC, Expo City and venues across the city. Branded counters, canapés, coffee stations and full-service stands for exhibitors and organisers.',
  canonicalPath: '/exhibition-catering-dubai',
  ogImage: '/service-events.webp',
  breadcrumbLabel: 'Exhibition Catering Dubai',
  h1: 'Exhibition & Trade Show Catering in Dubai',
  heroSub:
    'Reliable, high-volume catering for exhibitors, organisers and trade show visitors at Dubai World Trade Centre, Expo City and major exhibition venues across the emirate.',
  heroImage: '/service-events.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like a quote for exhibition and trade show catering in Dubai (via mychef.ae/exhibition-catering-dubai)",
  eyebrow: 'EXHIBITION & TRADE SHOW CATERING IN DUBAI',
  introH2: 'Keep Your Stand, Staff and Visitors Well Fed',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Trade shows and exhibitions in Dubai move fast. Whether you are hosting a stand at Dubai World Trade Centre, organising a pavilion at Expo City, or running a corporate showcase at a hotel ballroom, your catering needs to keep pace with long hours, high footfall and back-to-back meetings. Our exhibition catering service is built around reliability, speed and presentation that reflects your brand.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        We provide branded food counters, passed canapés, grab-and-go lunch boxes, barista coffee stations, refreshment trolleys and VIP hospitality menus. Everything is designed to be served efficiently in a busy exhibition environment, with clear labelling for dietary needs and packaging that travels well from prep kitchen to stand.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        Exhibition catering sits within our wider{' '}
        <Link to="/corporate-event-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          corporate event catering Dubai
        </Link>{' '}
        offering. For product launches and brand activations, see our{' '}
        <Link to="/brand-activation-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          brand activation catering
        </Link>{' '}
        service, or explore{' '}
        <Link to="/canape-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          canapé catering Dubai
        </Link>{' '}
        for reception-style service at your stand.
      </p>
    </>
  ),
  formatsH2: 'Exhibition Catering Formats',
  formats: [
    {
      Icon: Building2,
      title: 'Branded Stand Catering',
      description: 'A fully branded food and beverage counter on your exhibition stand, designed to attract visitors and extend dwell time.',
      link: '/brand-activation-catering-dubai',
    },
    {
      Icon: Coffee,
      title: 'Coffee & Refreshment Stations',
      description: 'Barista coffee, tea, cold juices and water stations to keep your team and visitors energised throughout the day.',
      link: '/bar-services-dubai',
    },
    {
      Icon: Utensils,
      title: 'Canapé & Bowl Food Receptions',
      description: 'Elegant bite-sized dishes for stand openings, networking receptions and VIP moments within the exhibition hall.',
      link: '/canape-catering-dubai',
    },
    {
      Icon: Truck,
      title: 'Grab-and-Go Lunch Boxes',
      description: 'Individually packed lunches for staff, crew and visitors who need to eat quickly without leaving the venue.',
      link: '/drop-off-catering-dubai',
    },
    {
      Icon: Users,
      title: 'VIP Hospitality Catering',
      description: 'Premium plated and buffet options for private meeting rooms, hospitality suites and executive lounges.',
      link: '/corporate-event-catering-dubai',
    },
    {
      Icon: PartyPopper,
      title: 'Stand Launch & After-Show Events',
      description: 'Catering for stand openings, product reveals and after-show networking events at nearby venues or hotels.',
      link: '/product-launch-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE EXHIBITION CATERING HELPS',
  useCasesH2: 'Built for the Show Floor',
  useCases: [
    {
      title: 'Exhibitor Stands',
      description:
        'Turn your stand into a destination with coffee, canapés and light lunches. Good catering encourages visitors to stay longer and gives your team a natural conversation starter.',
    },
    {
      title: 'Organiser & Pavilion Hospitality',
      description:
        'We cater organiser lounges, press rooms, speaker green rooms and national pavilions with efficient service and menus that scale across multi-day events.',
    },
    {
      title: 'Product Launches at Trade Shows',
      description:
        'Coordinate catering with your launch moment — from champagne-style mocktail toasts to themed tasting plates that mirror your product story.',
    },
    {
      title: 'Multi-Day Conferences & Expos',
      description:
        'Consistent quality across breakfast, lunch and coffee breaks for delegates, exhibitors and crew during week-long exhibitions and congresses.',
    },
  ],
  includedH2: "What's Included in Our Exhibition Catering",
  includedItems: [
    { title: 'Venue-Aware Logistics', description: 'Planning around DWTC, Expo City and hotel venue rules, loading bays, power limits and service windows.' },
    { title: 'Branded Counter Design', description: 'Food stations styled to complement your stand design and brand colours.' },
    { title: 'High-Volume Capacity', description: 'Menus and staffing scaled to serve hundreds of visitors across busy show hours.' },
    { title: 'Canapés & Bowl Food', description: 'Bite-sized, easy-to-eat options perfect for networking while standing.' },
    { title: 'Grab-and-Go & Boxed Meals', description: 'Quick lunch options for crew and visitors who cannot sit down for a full meal.' },
    { title: 'Barista Coffee & Beverages', description: 'Coffee, tea, juices and infused water stations to keep energy up on the show floor.' },
    { title: 'Dietary Labelling', description: 'Halal, vegetarian, vegan, gluten-free and allergen-aware items clearly marked.' },
    { title: 'Full Service & Pack-Down', description: 'Chefs, service staff and clean-up crews managed around exhibition hall schedules.' },
  ],
  galleryH2: 'A Taste of Our Exhibition Catering',
  galleryImages: [
    { src: '/service-events.webp', alt: 'Exhibition catering at a Dubai trade show' },
    { src: '/menu-canapes.webp', alt: 'Canapés for exhibition stand receptions' },
    { src: '/menu-appetizer.webp', alt: 'Bite-sized appetisers for trade show guests' },
    { src: '/service-corporate.webp', alt: 'Corporate catering setup at an exhibition venue' },
    { src: '/service-luxury-dining.webp', alt: 'VIP hospitality catering for exhibitions' },
    { src: '/menu-dessert.webp', alt: 'Dessert display for exhibition events' },
  ],
  faqsH2: 'Exhibition Catering Questions',
  faqs: [
    {
      q: 'Which exhibition venues in Dubai do you cater?',
      a: 'We cater at Dubai World Trade Centre, Expo City Dubai, major hotel exhibition halls and outdoor show sites across the emirate. We are familiar with venue access, loading and service restrictions.',
    },
    {
      q: 'Can you brand the catering counter to match our stand?',
      a: 'Yes. We can dress the counter, signage and serveware to align with your stand design and colour scheme, helping your food offering feel like a seamless part of the visitor experience.',
    },
    {
      q: 'Do you provide staff for exhibition stands?',
      a: 'Yes. We supply chefs, baristas and service staff who understand the pace of exhibition service and can engage professionally with your visitors.',
    },
    {
      q: 'Can you handle dietary requirements for a large crowd?',
      a: 'Absolutely. We build halal, vegetarian, vegan, gluten-free and dairy-free options into exhibition menus as standard, with clear labelling so every guest can choose confidently.',
    },
    {
      q: 'What is the minimum order for exhibition catering?',
      a: 'There is no fixed minimum, but exhibition logistics are most cost-effective for stands expecting 50 or more guests per day. Contact us with your stand size and footfall projections for a tailored proposal.',
    },
    {
      q: 'How far in advance should we book exhibition catering?',
      a: 'Two to four weeks is ideal, especially for large multi-day shows or stands requiring custom branding. For urgent stand catering, contact us on WhatsApp and we will confirm what is possible.',
    },
  ],
  relatedServices: [
    {
      title: 'Corporate Event Catering',
      description: 'Full-service corporate catering for conferences, launches and company events across Dubai.',
      image: '/service-events.webp',
      link: '/corporate-event-catering-dubai',
    },
    {
      title: 'Brand Activation Catering',
      description: 'Bespoke catering for brand activations, pop-ups and experiential marketing events.',
      image: '/service-corporate.webp',
      link: '/brand-activation-catering-dubai',
    },
    {
      title: 'Canapé Catering Dubai',
      description: 'Sophisticated bite-sized food for receptions, stand openings and networking moments.',
      image: '/menu-canapes.webp',
      link: '/canape-catering-dubai',
    },
  ],
  ctaH2: 'Plan Exhibition Catering That Works as Hard as Your Stand',
  ctaP:
    'Tell us your venue, stand size and visitor numbers. We will design an exhibition catering package that keeps your team energised and your guests impressed.',
}

export default function ExhibitionCatering() {
  return <ServiceLandingPage config={config} />
}
