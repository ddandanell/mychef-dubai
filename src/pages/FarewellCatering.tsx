import { Link } from 'react-router'
import { Briefcase, PartyPopper, Home, Building, Utensils, Heart } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'farewell-catering-dubai',
  seoTitle: 'Farewell & Retirement Catering Dubai | Leaving & Send-Off Parties',
  metaDescription:
    'Farewell and retirement party catering in Dubai for office send-offs, retirement celebrations and goodbye gatherings. Buffets, canapés, live stations and full service.',
  canonicalPath: '/farewell-catering-dubai',
  ogImage: '/service-events.webp',
  breadcrumbLabel: 'Farewell & Retirement Catering Dubai',
  h1: 'Farewell & Retirement Catering in Dubai',
  heroSub:
    'Send off colleagues, friends and loved ones in style with farewell and retirement catering across Dubai — from office lunches and rooftop receptions to private villa parties.',
  heroImage: '/service-events.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to arrange farewell or retirement catering in Dubai (via mychef.ae/farewell-catering-dubai)",
  eyebrow: 'FAREWELL & RETIREMENT CATERING IN DUBAI',
  introH2: 'A Thoughtful Farewell Deserves Great Food',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Saying goodbye is never easy, but the right food and atmosphere can turn a farewell into a celebration of everything that has been achieved. Our farewell and retirement catering in Dubai is designed for office send-offs, retirement dinners, leaving parties and recognition events where colleagues, friends and family come together to honour a milestone.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        We cater across Dubai for corporate farewells in DIFC and Business Bay, relaxed rooftop receptions in Dubai Marina, and intimate villa gatherings in Emirates Hills and Palm Jumeirah. Menus range from refined canapés and grazing tables to plated dinners, BBQ live stations and themed dessert displays. Our team handles setup, service and cleanup so hosts can focus on speeches, memories and the guest of honour.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        This service sits between our{' '}
        <Link to="/corporate-event-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          corporate event catering Dubai
        </Link>{' '}
        and{' '}
        <Link to="/party-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          party catering Dubai
        </Link>{' '}
        services. For a more private family celebration, explore our{' '}
        <Link to="/private-party-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          private party catering Dubai
        </Link>{' '}
        options.
      </p>
    </>
  ),
  formatsH2: 'Farewell & Retirement Catering Formats',
  formats: [
    {
      Icon: Building,
      title: 'Office Farewell Lunches',
      description: 'Timed, tidy lunch spreads for boardrooms, staff canteens and office break-out areas across Dubai.',
      link: '/office-catering-dubai',
    },
    {
      Icon: PartyPopper,
      title: 'Rooftop & Venue Receptions',
      description: 'Canapés, grazing tables and mocktail bars for venue-based leaving parties and retirement receptions.',
      link: '/event-catering-dubai',
    },
    {
      Icon: Utensils,
      title: 'Plated Retirement Dinners',
      description: 'Elegant multi-course meals for intimate retirement celebrations with family and close colleagues.',
      link: '/catering-dubai',
    },
    {
      Icon: Home,
      title: 'Private Villa Farewells',
      description: 'Full-service catering at home or in a villa for family-focused goodbye gatherings.',
      link: '/villas-private-residences',
    },
    {
      Icon: Briefcase,
      title: 'Corporate Send-Off Buffets',
      description: 'Styled buffets for larger company send-offs, department recognitions and long-service awards.',
      link: '/buffet-catering-dubai',
    },
    {
      Icon: Heart,
      title: 'Themed Cake & Dessert Tables',
      description: 'Personalised cakes, memory-themed dessert tables and sweet stations that reflect the guest of honour.',
      link: '/dessert-table-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE FAREWELL CATERING WORKS',
  useCasesH2: 'Designed for Every Kind of Goodbye',
  useCases: [
    {
      title: 'Corporate Retirement Parties',
      description:
        'Celebrate decades of service with a polished corporate event that respects the retiree and brings teams together.',
    },
    {
      title: 'Office Leaving Dos',
      description:
        'From casual Friday afternoon send-offs to formal leaving lunches, we make office goodbyes feel special without disrupting the workday.',
    },
    {
      title: 'Family Retirement Celebrations',
      description:
        'Host a relaxed family dinner at home to honour a parent or grandparent stepping into retirement.',
    },
    {
      title: 'Expat Farewell Gatherings',
      description:
        'Dubai is a transient city. We cater expat leaving parties with menus that suit mixed nationalities and dietary preferences.',
    },
  ],
  includedH2: "What's Included in Our Farewell & Retirement Catering",
  includedItems: [
    { title: 'Personalised Menu Planning', description: 'Menus tailored to the guest of honour, event tone and guest mix.' },
    { title: 'Canapés & Grazing Tables', description: 'Stylish arrival bites and share platters perfect for mingling and speeches.' },
    { title: 'Live Cooking Stations', description: 'Optional pasta, BBQ, carving or dessert stations that add theatre to the event.' },
    { title: 'Mocktails & Soft Bars', description: 'Non-alcoholic drinks, fresh juices and themed beverages for all guests.' },
    { title: 'Themed Dessert & Cakes', description: 'Farewell cakes, memory boards and dessert displays personalised for the occasion.' },
    { title: 'Dietary Accommodations', description: 'Vegetarian, vegan, gluten-free, halal and allergy-aware options available.' },
    { title: 'Professional Service Staff', description: 'Experienced chefs, servers and hosts who understand the tone of farewell events.' },
    { title: 'Setup, Service & Cleanup', description: 'We manage the full event flow so hosts can be present with their guests.' },
  ],
  galleryH2: 'A Taste of Our Farewell & Retirement Catering',
  galleryImages: [
    { src: '/service-events.webp', alt: 'Farewell party catering set-up in Dubai' },
    { src: '/menu-canapes.webp', alt: 'Canapés for a retirement celebration' },
    { src: '/menu-appetizer.webp', alt: 'Farewell party appetisers and salads' },
    { src: '/menu-dessert.webp', alt: 'Retirement dessert table and cake display' },
    { src: '/service-corporate.webp', alt: 'Corporate farewell lunch setup' },
    { src: '/service-villa.webp', alt: 'Villa farewell party styling' },
  ],
  faqsH2: 'Farewell & Retirement Catering Questions',
  faqs: [
    {
      q: 'What types of farewell events do you cater?',
      a: 'We cater retirement parties, office leaving lunches, corporate send-offs, expat goodbye gatherings and private family farewell dinners across Dubai.',
    },
    {
      q: 'Can the menu reflect the guest of honour?',
      a: 'Yes. We can incorporate favourite cuisines, themed desserts, branded signage and personal touches that celebrate the retiree or departing colleague.',
    },
    {
      q: 'Do you provide non-alcoholic drinks?',
      a: 'Absolutely. We offer mocktails, fresh juices, flavoured waters, teas and coffees suitable for office and family events.',
    },
    {
      q: 'Can you cater at our office or venue?',
      a: 'Yes. We provide office catering across Dubai as well as venue and villa-based farewell events with full setup and service.',
    },
    {
      q: 'How formal or casual can the event be?',
      a: 'As formal or relaxed as you need. We provide everything from refined plated dinners to casual BBQs, grazing tables and buffet spreads.',
    },
    {
      q: 'How far in advance should I book farewell catering?',
      a: 'Two to four weeks is ideal, especially for venue events or custom menus. Office lunches can often be arranged with shorter notice — contact us on WhatsApp to check availability.',
    },
  ],
  relatedServices: [
    {
      title: 'Corporate Event Catering',
      description: 'Full-service catering for company events, award ceremonies and team gatherings.',
      image: '/service-corporate.webp',
      link: '/corporate-event-catering-dubai',
    },
    {
      title: 'Party Catering Dubai',
      description: 'The hub for birthdays, celebrations and every kind of private party.',
      image: '/service-events.webp',
      link: '/party-catering-dubai',
    },
    {
      title: 'Private Party Catering',
      description: 'Intimate home and villa parties with personalised menus and full service.',
      image: '/service-villa.webp',
      link: '/private-party-catering-dubai',
    },
  ],
  ctaH2: 'Send Them Off With Catering Worth Remembering',
  ctaP:
    'Tell us about the guest of honour, venue, guest count and preferred style. We will create a farewell or retirement menu that honours the moment and lets everyone celebrate together.',
}

export default function FarewellCatering() {
  return <ServiceLandingPage config={config} />
}
