import { Link } from 'react-router'
import { Coffee, Building, Home, PartyPopper, Sun, Utensils } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'breakfast-catering-dubai',
  seoTitle: 'Breakfast Catering Dubai | Office & Private Breakfast Menus',
  metaDescription:
    'Breakfast catering in Dubai for offices, villas and hotels. Fresh pastries, hot dishes, healthy bowls, coffee and juice, delivered or fully served. Request a morning menu quote.',
  canonicalPath: '/breakfast-catering-dubai',
  ogImage: '/images/breakfast-catering-dubai-hero.webp',
  breadcrumbLabel: 'Breakfast Catering Dubai',
  h1: 'Breakfast Catering in Dubai',
  heroSub:
    'Morning menus delivered fresh to offices, villas and hotels across Dubai — from light continental spreads to hot breakfast buffets, barista coffee and healthy grab-and-go options.',
  heroImage: '/images/breakfast-catering-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to arrange breakfast catering in Dubai (via mychef.ae/breakfast-catering-dubai)",
  eyebrow: 'BREAKFAST CATERING IN DUBAI',
  introH2: 'Start the Day With a Well-Planned Breakfast',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        The first meal of the day sets the tone for everything that follows. Our breakfast catering in Dubai is designed for busy teams, hotel groups, villa guests and early-morning events who want fresh food, reliable service and a setup that feels effortless. We deliver and serve across Dubai from Business Bay and DIFC to Palm Jumeirah, Jumeirah and Dubai Marina.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Menus range from continental pastries, seasonal fruit and granola bowls to hot buffets with eggs, pancakes, Arabic breads and grilled proteins. We also provide barista-style coffee, fresh juices and mocktails so guests have everything they need in one place. Dietary options — including vegan, gluten-free, dairy-free and low-sugar — are clearly labelled and easy to request.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        Breakfast catering pairs naturally with our{' '}
        <Link to="/office-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          office catering Dubai
        </Link>{' '}
        service for corporate mornings, and with{' '}
        <Link to="/brunch-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          brunch catering Dubai
        </Link>{' '}
        when you want the meal to extend past midday. For healthier starts, see our{' '}
        <Link to="/healthy-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          healthy catering Dubai
        </Link>{' '}
        options.
      </p>
    </>
  ),
  formatsH2: 'Breakfast Catering Formats',
  formats: [
    {
      Icon: Coffee,
      title: 'Continental Breakfast Boxes',
      description: 'Pastries, muffins, fresh fruit, yoghurt and granola in individual boxes — ideal for offices and hotel room drops.',
      link: '/office-catering-dubai',
    },
    {
      Icon: Sun,
      title: 'Hot Breakfast Buffets',
      description: 'Eggs, pancakes, Arabic breads, grilled halloumi, sausages and warm sides served from a styled buffet station.',
      link: '/buffet-catering-dubai',
    },
    {
      Icon: Building,
      title: 'Corporate Breakfast Meetings',
      description: 'Timed, tidy breakfast spreads for boardrooms, training days and morning conferences with coffee and juice service.',
      link: '/business-lunch-catering-dubai',
    },
    {
      Icon: Home,
      title: 'Villa & Residence Breakfasts',
      description: 'Relaxed at-home breakfast catering for house guests, family gatherings and weekend villas across Dubai.',
      link: '/villas-private-residences',
    },
    {
      Icon: PartyPopper,
      title: 'Celebration Breakfasts',
      description: 'Special-occasion morning spreads for birthdays, baby showers, Eid mornings and post-wedding brunches.',
      link: '/brunch-catering-dubai',
    },
    {
      Icon: Utensils,
      title: 'Healthy & Dietary Breakfasts',
      description: 'Low-sugar, gluten-free, dairy-free and vegan breakfast options that keep energy steady through the morning.',
      link: '/healthy-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE BREAKFAST CATERING HELPS',
  useCasesH2: 'Morning Events Made Simple',
  useCases: [
    {
      title: 'Office Early Starts',
      description:
        'Fuel morning meetings, training sessions and product launches with a breakfast spread that arrives on time, is set up quickly and clears away before the workday begins.',
    },
    {
      title: 'Hotel & Short-Stay Guests',
      description:
        'Offer arriving guests or groups a fresh breakfast experience in a villa, serviced apartment or hotel suite without relying on restaurant schedules.',
    },
    {
      title: 'Weekend Villa Gatherings',
      description:
        'Let guests wake up to the smell of coffee and a laid-out breakfast in Palm Jumeirah, Emirates Hills or Dubai Hills — no one has to cook or leave the house.',
    },
    {
      title: 'Post-Event Recovery Brunches',
      description:
        'After weddings, galas or late celebrations, a gentle breakfast or recovery brunch helps guests recharge before the day continues.',
    },
  ],
  includedH2: "What's Included in Our Breakfast Catering",
  includedItems: [
    { title: 'Fresh Pastries & Breads', description: 'Croissants, muffins, Arabic breads and artisan toast delivered fresh on the morning.' },
    { title: 'Hot & Cold Dishes', description: 'Eggs, pancakes, warm grains, grilled proteins and chilled fruit platters to suit every appetite.' },
    { title: 'Barista Coffee & Tea', description: 'Freshly brewed coffee, tea and barista-style service available for larger corporate bookings.' },
    { title: 'Fresh Juices & Mocktails', description: 'Orange juice, green blends and morning mocktails to complement the spread.' },
    { title: 'Healthy & Dietary Options', description: 'Vegan, gluten-free, dairy-free and low-sugar choices clearly labelled and kept separate.' },
    { title: 'Individual Boxes & Buffets', description: 'Choose boxed service for safety and convenience, or a shared buffet for a more social start.' },
    { title: 'On-Time Delivery & Setup', description: 'We coordinate arrival with your schedule and set up before guests arrive.' },
    { title: 'Disposable or Reusable Serveware', description: 'Options for elegant reusable platters or practical disposables depending on the venue.' },
  ],
  galleryH2: 'A Taste of Our Breakfast Catering',
  galleryImages: [
    { src: '/images/breakfast-catering-dubai-hero.webp', alt: 'Breakfast catering spread in Dubai' },
    { src: '/menu-appetizer.webp', alt: 'Morning appetisers and pastries' },
    { src: '/menu-dessert.webp', alt: 'Fresh fruit and granola bowls' },
    { src: '/service-corporate.webp', alt: 'Corporate breakfast meeting setup' },
    { src: '/service-villa.webp', alt: 'Villa breakfast catering in Dubai' },
    { src: '/service-events.webp', alt: 'Event breakfast buffet service' },
  ],
  faqsH2: 'Breakfast Catering Questions',
  faqs: [
    {
      q: 'What time do you deliver breakfast catering?',
      a: 'We schedule delivery and setup to match your event start time, typically arriving 30 to 60 minutes before service. Early-morning office breakfasts can be arranged from 6:30am onwards across Dubai.',
    },
    {
      q: 'Can you cater breakfast for a large office?',
      a: 'Yes. We regularly provide breakfast for teams from 10 to 200+ people, with buffet stations, individual boxes and dietary options clearly labelled.',
    },
    {
      q: 'Do you serve hot breakfast dishes?',
      a: 'Yes. Our hot breakfast options include eggs, pancakes, French toast, Arabic breads, grilled halloumi and warm sides. We can also keep dishes warm on chafing dishes for buffet service.',
    },
    {
      q: 'Are healthy and dietary options available?',
      a: 'Absolutely. We offer vegan, gluten-free, dairy-free and low-sugar breakfast items, from chia pots and smoothie bowls to gluten-free pastries and dairy-free yoghurt.',
    },
    {
      q: 'Can breakfast be served at a villa or hotel suite?',
      a: 'Yes. We deliver and serve breakfast in villas, apartments, hotel suites and serviced residences across Dubai, with full setup and cleanup included.',
    },
    {
      q: 'How far in advance should I book breakfast catering?',
      a: 'For smaller orders, 48 hours is usually enough. For large corporate breakfasts or hotel group orders, we recommend one to two weeks. During busy periods, earlier is better.',
    },
  ],
  relatedServices: [
    {
      title: 'Office Catering Dubai',
      description: 'Full office catering for meetings, lunches and all-day team events.',
      image: '/service-corporate.webp',
      link: '/office-catering-dubai',
    },
    {
      title: 'Brunch Catering Dubai',
      description: 'Relaxed late-morning and midday spreads that extend breakfast into brunch.',
      image: '/service-events.webp',
      link: '/brunch-catering-dubai',
    },
    {
      title: 'Healthy Catering Dubai',
      description: 'Balanced, nutrition-conscious menus that pair naturally with morning meals.',
      image: '/service-catering.webp',
      link: '/healthy-catering-dubai',
    },
    {
      title: 'Coffee & Tea Service',
      description: 'Barista-style coffee, specialty teas and pastries to complete any morning event.',
      image: '/images/afternoon-tea-catering-dubai-hero.webp',
      link: '/coffee-tea-service-dubai',
    },
  ],
  ctaH2: 'Book Breakfast Catering That Gets the Morning Right',
  ctaP:
    'Tell us your guest count, location and preferred menu style. We will deliver a fresh, well-organised breakfast catering experience anywhere in Dubai.',
}

export default function BreakfastCatering() {
  return <ServiceLandingPage config={config} />
}
