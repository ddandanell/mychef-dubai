import { Link } from 'react-router'
import { Package, Building, Home, PartyPopper, Clock, Utensils } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'drop-off-catering-dubai',
  seoTitle: 'Drop-Off Catering Dubai | Delivered Meals for Offices & Events',
  metaDescription:
    'Drop-off catering in Dubai: individually packed meals, labelled platters and buffet boxes delivered to your office, villa or venue. No on-site staff needed. Request a quote today.',
  canonicalPath: '/drop-off-catering-dubai',
  ogImage: '/images/drop-off-catering-dubai-hero.webp',
  breadcrumbLabel: 'Drop-Off Catering Dubai',
  h1: 'Drop-Off Catering in Dubai',
  heroSub:
    'Hassle-free catering delivered ready to serve: individually packed meals, shareable platters and labelled buffet boxes for offices, villas and small events across Dubai.',
  heroImage: '/images/drop-off-catering-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to arrange drop-off catering in Dubai (via mychef.ae/drop-off-catering-dubai)",
  eyebrow: 'DROP-OFF CATERING IN DUBAI',
  introH2: 'Great Food, Delivered Ready to Serve',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Not every event needs a full service team on site. Drop-off catering in Dubai is the practical choice for working lunches, team meetings, villa gatherings and small celebrations where you want restaurant-quality food without the logistics of live service. We prepare everything in our kitchen, pack it beautifully, and deliver it to your door with clear labelling and simple reheating or serving instructions.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Our drop-off menus include individually packed lunch boxes, shareable mezze and salad platters, sandwich and wrap trays, hot mains in transport containers, and dessert portions. Every item is sealed, labelled and portioned so your guests can help themselves with confidence. Dietary requirements — halal, vegetarian, vegan, gluten-free, dairy-free and nut-free — are marked clearly.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        Drop-off catering works hand-in-hand with our{' '}
        <Link to="/office-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          office catering Dubai
        </Link>{' '}
        service for busy teams, and with{' '}
        <Link to="/corporate-event-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          corporate event catering Dubai
        </Link>{' '}
        when you need a lighter-touch option. For larger celebrations, explore our full-service{' '}
        <Link to="/event-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          event catering Dubai
        </Link>{' '}
        offering.
      </p>
    </>
  ),
  formatsH2: 'Drop-Off Catering Formats',
  formats: [
    {
      Icon: Package,
      title: 'Individual Meal Boxes',
      description: 'Complete lunches or dinners in sealed, labelled boxes — perfect for offices, shoots and controlled guest counts.',
      link: '/office-catering-dubai',
    },
    {
      Icon: Utensils,
      title: 'Platter & Buffet Drops',
      description: 'Shareable platters of salads, wraps, mezze, mains and desserts delivered ready to unpack and serve.',
      link: '/buffet-catering-dubai',
    },
    {
      Icon: Building,
      title: 'Office Drop-Off Lunches',
      description: 'Recurring or one-off team lunches delivered to DIFC, Business Bay, Downtown Dubai and across the city.',
      link: '/office-catering-dubai',
    },
    {
      Icon: Home,
      title: 'Villa & Home Drop-Off',
      description: 'Family-style drops for villa dinners, casual gatherings and at-home celebrations across Dubai.',
      link: '/villas-private-residences',
    },
    {
      Icon: PartyPopper,
      title: 'Small Event Drop-Off',
      description: 'Birthdays, baby showers and informal parties with ready-to-serve food and disposable serveware.',
      link: '/party-catering-dubai',
    },
    {
      Icon: Clock,
      title: 'Same-Day & Express Orders',
      description: 'Streamlined menus for last-minute meetings and urgent catering needs when time is tight.',
      link: '/business-lunch-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE DROP-OFF CATERING HELPS',
  useCasesH2: 'A Simple Solution for Busy Hosts',
  useCases: [
    {
      title: 'Busy Office Teams',
      description:
        'Keep meeting rooms focused and productive with individually packed lunches or shareable platters that require no on-site chef or service staff.',
    },
    {
      title: 'Film & Production Crews',
      description:
        'Feed cast and crew on location with hearty, labelled boxes that travel well and can be eaten between takes without interrupting the schedule.',
    },
    {
      title: 'Casual Villa Gatherings',
      description:
        'Host friends and family at home without spending the day cooking. We deliver a complete spread and clear instructions so you can relax with your guests.',
    },
    {
      title: 'Small Celebrations',
      description:
        'For birthdays, housewarmings and baby showers where budget and simplicity matter, drop-off catering delivers the quality without the overhead.',
    },
  ],
  includedH2: "What's Included in Our Drop-Off Catering",
  includedItems: [
    { title: 'Chef-Prepared Food', description: 'Every dish cooked fresh and packed in containers designed to travel and hold temperature.' },
    { title: 'Clear Labelling', description: 'Each box or platter labelled with contents and dietary information so guests know what they are eating.' },
    { title: 'Individual or Shared Portions', description: 'Choose sealed meal boxes for control and hygiene, or platters for a more social spread.' },
    { title: 'Disposable Serveware', description: 'Eco-friendly plates, cutlery and napkins included for easy self-service and cleanup.' },
    { title: 'Dietary Accommodations', description: 'Halal, vegetarian, vegan, gluten-free, dairy-free and nut-free options available and clearly marked.' },
    { title: 'Hot & Cold Menus', description: 'Cold lunch boxes, room-temperature platters and hot mains with reheating instructions.' },
    { title: 'On-Time Delivery', description: 'We deliver to your schedule, with setup windows agreed in advance.' },
    { title: 'Simple Reheating Instructions', description: 'Hot drops include easy instructions so food is served at its best without a chef on site.' },
  ],
  galleryH2: 'A Taste of Our Drop-Off Catering',
  galleryImages: [
    { src: '/images/drop-off-catering-dubai-hero.webp', alt: 'Drop-off catering boxes and platters in Dubai' },
    { src: '/menu-appetizer.webp', alt: 'Shareable appetiser platters for drop-off catering' },
    { src: '/menu-mains.webp', alt: 'Packed hot mains and salads for delivery' },
    { src: '/service-corporate.webp', alt: 'Office drop-off catering delivery' },
    { src: '/service-villa.webp', alt: 'Villa drop-off meal spread' },
    { src: '/menu-dessert.webp', alt: 'Individual dessert portions for drop-off events' },
  ],
  faqsH2: 'Drop-Off Catering Questions',
  faqs: [
    {
      q: 'What is drop-off catering?',
      a: 'Drop-off catering means we prepare, pack and deliver your food ready to serve. There is no chef or service team on site, making it a cost-effective option for meetings, offices and small gatherings.',
    },
    {
      q: 'Is drop-off catering suitable for offices?',
      a: 'Yes. It is one of our most popular formats for office lunches, training days and boardroom meetings across Dubai. Individual boxes keep things tidy and portioned; platters work well for relaxed team lunches.',
    },
    {
      q: 'Can the food stay warm until we eat?',
      a: 'Hot dishes are packed in insulated transport containers and delivered close to service time. Reheating instructions are included for anything that needs a quick refresh in an oven or microwave.',
    },
    {
      q: 'Do you cater for dietary requirements with drop-off?',
      a: 'Absolutely. We offer halal, vegetarian, vegan, gluten-free, dairy-free and nut-free options, all clearly labelled. Share your guest requirements when ordering and we will build the mix accordingly.',
    },
    {
      q: 'How far in advance should I order drop-off catering?',
      a: 'For standard orders, 24 to 48 hours is usually enough. For large office drops or complex dietary mixes, two to three days helps us plan perfectly. Same-day orders are sometimes possible — contact us on WhatsApp to check.',
    },
    {
      q: 'What areas of Dubai do you deliver to?',
      a: 'We deliver drop-off catering across Dubai including DIFC, Business Bay, Downtown Dubai, Dubai Marina, JBR, Palm Jumeirah, Jumeirah, Emirates Hills and Dubai Hills. Share your location and we will confirm delivery timing.',
    },
  ],
  relatedServices: [
    {
      title: 'Office Catering Dubai',
      description: 'Recurring and one-off office lunches, meetings and team events across Dubai.',
      image: '/service-corporate.webp',
      link: '/office-catering-dubai',
    },
    {
      title: 'Corporate Event Catering',
      description: 'Full-service corporate catering when your event needs chefs and front-of-house staff.',
      image: '/service-events.webp',
      link: '/corporate-event-catering-dubai',
    },
    {
      title: 'Business Lunch Catering',
      description: 'Professional working lunches delivered or served for client meetings and boardrooms.',
      image: '/menu-appetizer.webp',
      link: '/business-lunch-catering-dubai',
    },
    {
      title: 'Picnic Catering Dubai',
      description: 'Styled outdoor baskets and grazing boxes delivered to beaches, parks and villas.',
      image: '/images/beach-catering-dubai-hero.webp',
      link: '/picnic-catering-dubai',
    },
  ],
  ctaH2: 'Order Drop-Off Catering That Arrives Ready to Serve',
  ctaP:
    'Tell us your headcount, location and menu preferences. We will prepare, pack and deliver fresh drop-off catering anywhere in Dubai — simple, reliable and delicious.',
}

export default function DropOffCatering() {
  return <ServiceLandingPage config={config} />
}
