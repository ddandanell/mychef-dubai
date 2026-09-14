import { Link } from 'react-router'
import { Coffee, Sun, Users, Cookie, Leaf } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'coffee-tea-service-dubai',
  seoTitle: 'Coffee & Tea Service Dubai | myCHEF',
  metaDescription:
    'Coffee and tea service in Dubai: barista coffee, teas and labelled bites for meetings and receptions. Quoted with the catering. Canonical: catering hub.',
  canonicalPath: '/catering-dubai',
  ogImage: '/images/afternoon-tea-catering-dubai-hero.webp',
  showTrustSignalStrip: true,
  breadcrumbLabel: 'Coffee & Tea Service Dubai',
  h1: 'Coffee & Tea Service in Dubai',
  heroSub:
    'Coffee and tea service in Dubai is a drinks station: barista coffee, teas, Arabic coffee if you ask, and labelled bites. It is quoted with the catering. Breakfast and afternoon tea own their own pages.',
  heroImage: '/images/afternoon-tea-catering-dubai-hero.webp',
  whatsappMessage:
    'Hi myCHEF Dubai, I would like to arrange coffee and tea service in Dubai (via mychef.ae/coffee-tea-service-dubai)',
  eyebrow: 'COFFEE & TEA SERVICE IN DUBAI',
  introH2: 'A drinks station, not a breakfast menu',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Coffee and tea service in Dubai is cups, a station and someone to pour: espresso drinks, Arabic coffee, teas and labelled pastries. There is no published per-person floor for the station alone. It is quoted with the catering, or as an add-on. This URL is not the catering hub.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Timed refills for a meeting. A welcome table for a reception. Plant milks and named diets on the first draft. Gahwa with dates if that is the brief.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        A full morning spread lives on{' '}
        <Link to="/breakfast-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          breakfast catering
        </Link>
        . A seated tea lives on{' '}
        <Link to="/afternoon-tea-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          afternoon tea catering
        </Link>
        . Recurring office food lives on{' '}
        <Link to="/office-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          office catering
        </Link>
        .
      </p>
    </>
  ),
  formatsH2: 'How the station is staffed',
  formats: [
    {
      Icon: Coffee,
      title: 'Barista Coffee Station',
      description: 'Espresso, cappuccino, latte, americano and signature drinks brewed fresh by trained staff.',
      link: '/bar-services-dubai',
    },
    {
      Icon: Sun,
      title: 'Breakfast Coffee & Pastry Setup',
      description: 'Morning packages with coffee, tea, juices, croissants, muffins and fresh fruit for early events.',
      link: '/breakfast-catering-dubai',
    },
    {
      Icon: Users,
      title: 'Conference Break Service',
      description: 'Timed tea and coffee refills for meeting rooms, conference venues and training sessions.',
      link: '/conference-catering-dubai',
    },
    {
      Icon: Cookie,
      title: 'Afternoon Tea Service',
      description: 'Elegant afternoon tea with premium teas, scones, sandwiches and sweet treats.',
      link: '/afternoon-tea-catering-dubai',
    },
    {
      Icon: Leaf,
      title: 'Specialty & Wellness Teas',
      description: 'Herbal, green, matcha and wellness infusions for health-conscious guests.',
      link: '/cuisines-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE COFFEE & TEA SERVICE WORKS',
  useCasesH2: 'Meetings, receptions, a morning brief',
  useCases: [
    {
      title: 'Corporate Receptions',
      description:
        'Welcome clients and guests with a polished coffee and tea station in offices across Business Bay, DIFC and Downtown Dubai.',
    },
    {
      title: 'Meeting & Conference Breaks',
      description:
        'Keep energy high between sessions with reliable, timed refills of coffee, tea and light snacks.',
    },
    {
      title: 'Breakfast Briefings',
      description:
        'Pair fresh coffee with pastries and fruit for morning presentations, board meetings and press events.',
    },
    {
      title: 'Private Home Events',
      description:
        'Add a touch of hospitality to brunches, baby showers and family gatherings with a dedicated drinks station.',
    },
  ],
  includedH2: 'What the coffee and tea quote lists',
  includedItems: [
    { title: 'Barista-Style Coffee', description: 'Espresso-based drinks prepared fresh by trained service staff.' },
    { title: 'Curated Tea Selection', description: 'Black, green, herbal, matcha and Arabic coffee options to suit every guest.' },
    { title: 'Fresh Pastries & Bites', description: 'Croissants, muffins, scones, sandwiches and sweet treats to accompany drinks.' },
    { title: 'Service Station & Equipment', description: 'Compact, elegant setup with cups, saucers, napkins and condiments.' },
    { title: 'Dietary-Friendly Options', description: 'Plant milks, gluten-free pastries, sugar-free syrups and allergy-aware choices.' },
    { title: 'Timed Refills', description: 'Scheduled top-ups for meetings and conferences so no cup runs dry.' },
    { title: 'Professional Staff', description: 'Friendly baristas and servers to prepare, pour and clear throughout your event.' },
    { title: 'Delivery & Collection', description: 'We deliver, set up, serve and collect everything afterwards.' },
  ],
  galleryH2: 'A Taste of Our Coffee & Tea Service',
  galleryImages: [
    { src: '/service-events.webp', alt: 'Coffee and tea service set-up in Dubai' },
    { src: '/menu-appetizer.webp', alt: 'Pastries and snacks for coffee service' },
    { src: '/menu-dessert.webp', alt: 'Sweet treats and scones for afternoon tea' },
    { src: '/menu-seafood.webp', alt: 'Light bites served with tea and coffee' },
    { src: '/service-villa.webp', alt: 'Elegant coffee station styling' },
    { src: '/menu-meat.webp', alt: 'Savory sandwiches for coffee break catering' },
  ],
  faqsH2: 'Coffee & Tea Service Questions',
  faqs: [
    {
      q: 'What drinks are included in your coffee and tea service?',
      a: 'We offer espresso-based coffees such as cappuccino, latte and americano, Arabic coffee, specialty teas, herbal infusions, matcha, cold brew and a selection of juices.',
    },
    {
      q: 'Can you cater coffee and tea for a large conference?',
      a: 'Yes. We provide scalable coffee and tea stations for meetings and conferences of any size, with timed refills and enough staff to keep queues short.',
    },
    {
      q: 'Do you provide plant-based milk and dietary options?',
      a: 'Absolutely. We offer oat, almond and soy milks, gluten-free pastries, vegan snacks and sugar-free syrups on request.',
    },
    {
      q: 'Can the service include food as well as drinks?',
      a: 'Yes. Our coffee and tea service can be paired with pastries, sandwiches, grazing boxes, fruit platters and full breakfast or afternoon tea menus.',
    },
    {
      q: 'How far in advance should I book coffee and tea service?',
      a: 'Three to five days is usually enough for office and reception service. For large conferences or branded activations, one to two weeks is recommended.',
    },
    {
      q: 'Do you serve Arabic coffee for traditional receptions?',
      a: 'Yes. Arabic coffee service with dates can be included for culturally focused events, corporate welcomes and VIP receptions.',
    },
  ],
  relatedServices: [
    {
      title: 'Breakfast Catering Dubai',
      description: 'Morning spreads with eggs, pastries, fruits and freshly brewed coffee for early events.',
      image: '/images/breakfast-catering-dubai-hero.webp',
      link: '/breakfast-catering-dubai',
    },
    {
      title: 'Corporate Event Catering',
      description: 'Conferences, launches and company nights. Coffee can sit as a station on that brief.',
      image: '/service-events.webp',
      link: '/corporate-event-catering-dubai',
    },
    {
      title: 'Office Catering Dubai',
      description: 'Recurring and one-off office lunches, meetings and team events across Dubai.',
      image: '/service-corporate.webp',
      link: '/office-catering-dubai',
    },
  ],
  ctaH2: 'Send the time window and the headcount',
  ctaP:
    'Date, guest count, area and whether you need Arabic coffee, plant milks or a full breakfast instead. We typically reply within 15 minutes during business hours.',
}

export default function CoffeeTeaService() {
  return <ServiceLandingPage config={config} />
}
