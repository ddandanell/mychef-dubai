import { Link } from 'react-router'
import { Coffee, Sun, Users, Cookie, Leaf, Truck } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'coffee-tea-service-dubai',
  seoTitle: 'Coffee & Tea Service Dubai | Corporate Receptions & Events',
  metaDescription:
    'Coffee and tea service in Dubai: barista-style coffee, specialty teas, pastries and light bites for corporate receptions, meetings, breakfasts and events.',
  canonicalPath: '/coffee-tea-service-dubai',
  ogImage: '/images/afternoon-tea-catering-dubai-hero.webp',
  breadcrumbLabel: 'Coffee & Tea Service Dubai',
  h1: 'Coffee & Tea Service in Dubai',
  heroSub:
    'Elevate your reception, meeting or break with professional coffee and tea service across Dubai — from barista-brewed coffee and specialty teas to fresh pastries, healthy bites and full breakfast spreads.',
  heroImage: '/images/afternoon-tea-catering-dubai-hero.webp',
  whatsappMessage:
    'Hi myCHEF Dubai, I would like to arrange coffee and tea service in Dubai (via mychef.ae/coffee-tea-service-dubai)',
  eyebrow: 'COFFEE & TEA SERVICE IN DUBAI',
  introH2: 'A Better Break Starts Here',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Great coffee and tea can transform a ordinary meeting, conference break or welcome reception into something people remember. Our coffee and tea service in Dubai delivers barista-quality drinks, curated tea selections, fresh pastries and light snacks wherever you are hosting — offices, venues, showrooms and private homes across the city.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        We set up elegant service stations staffed by professional teams who keep cups full and guests happy. Choose from espresso-based coffees, Arabic coffee, cold brew, flavoured teas, matcha and wellness infusions, paired with croissants, muffins, sandwiches and grazing boards. Everything is tailored to your schedule, guest profile and dietary requirements.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        This service works as a stand-alone reception offering or as an add-on to our{' '}
        <Link to="/breakfast-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          breakfast catering Dubai
        </Link>{' '}
        and{' '}
        <Link to="/corporate-event-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          corporate event catering Dubai
        </Link>{' '}
        packages, and complements{' '}
        <Link to="/office-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          office catering Dubai
        </Link>{' '}
        for regular meetings and team days.
      </p>
    </>
  ),
  formatsH2: 'Coffee & Tea Service Formats',
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
      link: '/healthy-catering-dubai',
    },
    {
      Icon: Truck,
      title: 'Mobile Coffee Cart',
      description: 'Compact cart-based setup perfect for receptions, product launches and exhibition stands.',
      link: '/brand-activation-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE COFFEE & TEA SERVICE WORKS',
  useCasesH2: 'Built for Every Kind of Gathering',
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
  includedH2: "What's Included in Our Coffee & Tea Service",
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
      description: 'Full-service catering for conferences, product launches and company celebrations.',
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
  ctaH2: 'Book Coffee & Tea Service for Your Next Event',
  ctaP:
    'Tell us about your event, guest count, timings and drink preferences. We will design a coffee and tea service that keeps everyone refreshed and impressed.',
}

export default function CoffeeTeaService() {
  return <ServiceLandingPage config={config} />
}
