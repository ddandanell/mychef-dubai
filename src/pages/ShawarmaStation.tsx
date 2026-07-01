import { Link } from 'react-router'
import { Flame, Utensils, Users, Beef, Salad, Clock } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'shawarma-station-dubai',
  seoTitle: 'Live Shawarma & Kebab Station Dubai | Arabic Catering',
  metaDescription:
    'Live shawarma and kebab station hire in Dubai: freshly carved meats, grilled skewers, Arabic breads and salads for weddings, parties and corporate events.',
  canonicalPath: '/shawarma-station-dubai',
  ogImage: '/images/arabic-catering-dubai-hero.webp',
  breadcrumbLabel: 'Live Shawarma & Kebab Station Dubai',
  h1: 'Live Shawarma & Kebab Station in Dubai',
  heroSub:
    'Bring the sizzle of the Middle East to your event with a live shawarma and kebab station in Dubai — fresh meats carved to order, smoky grills, Arabic breads and vibrant salads for any celebration.',
  heroImage: '/images/arabic-catering-dubai-hero.webp',
  whatsappMessage:
    'Hi myCHEF Dubai, I would like to arrange a live shawarma and kebab station in Dubai (via mychef.ae/shawarma-station-dubai)',
  eyebrow: 'LIVE SHAWARMA & KEBAB STATION IN DUBAI',
  introH2: 'Theatre, Smoke and Authentic Flavour',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Few catering stations draw a crowd like a live shawarma spit. The aroma of slowly roasted meat, the theatre of the chef carving thin slices into warm Arabic bread, and the custom toppings guests choose themselves make it a highlight of any event. Our live shawarma and kebab station in Dubai brings this experience to weddings, corporate events, private parties and community celebrations across the city.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        We offer a complete Arabic street-food setup: vertical shawarma spits for chicken and beef, charcoal or grill-fired kebab skewers, fresh khubz and saj bread, mezze dips, pickles, garlic sauce, tahini and chopped salads. Everything is prepared fresh on site and served hot by experienced station chefs who keep the line moving and the energy high.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        This station fits naturally within our{' '}
        <Link to="/arabic-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          Arabic catering Dubai
        </Link>{' '}
        and{' '}
        <Link to="/live-cooking-stations-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          live cooking stations Dubai
        </Link>{' '}
        offerings, and works as a crowd-pleasing addition to{' '}
        <Link to="/corporate-event-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          corporate event catering Dubai
        </Link>{' '}
        receptions and team events.
      </p>
    </>
  ),
  formatsH2: 'Shawarma & Kebab Station Formats',
  formats: [
    {
      Icon: Flame,
      title: 'Classic Vertical Shawarma',
      description: 'Chicken or beef shawarma carved fresh from the spit and wrapped in warm Arabic bread with sauces and salads.',
      link: '/arabic-catering-dubai',
    },
    {
      Icon: Beef,
      title: 'Grilled Kebab Skewers',
      description: 'Lamb, chicken and kofta kebabs grilled over charcoal and served with bread, dips and rice.',
      link: '/bbq-catering-dubai',
    },
    {
      Icon: Utensils,
      title: 'Shawarma Platter Service',
      description: 'Pre-plated or buffet-style shawarma and kebab plates for seated dinners and formal events.',
      link: '/catering-dubai',
    },
    {
      Icon: Users,
      title: 'Corporate Reception Station',
      description: 'Branded or themed live station for product launches, staff parties and client receptions.',
      link: '/corporate-event-catering-dubai',
    },
    {
      Icon: Salad,
      title: 'Mezze & Salad Counter',
      description: 'Hummus, moutabal, tabbouleh, fattoush, pickles and fresh bread to complete the Arabic spread.',
      link: '/grazing-table-dubai',
    },
    {
      Icon: Clock,
      title: 'Late-Night Event Station',
      description: 'A satisfying late-night food station for weddings, after-parties and long celebrations.',
      link: '/party-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE SHAWARMA STATIONS WORK',
  useCasesH2: 'A Crowd Magnet for Any Occasion',
  useCases: [
    {
      title: 'Wedding Receptions',
      description:
        'Add a memorable live station to your wedding reception where guests can enjoy freshly made shawarma and kebabs late into the evening.',
    },
    {
      title: 'Corporate Events & Team Days',
      description:
        'Bring colleagues together around a casual, flavourful station that suits outdoor venues, offices and conference centres.',
    },
    {
      title: 'Private Villa Parties',
      description:
        'Transform a garden or poolside gathering into a Middle Eastern feast with a full shawarma and kebab setup.',
    },
    {
      title: 'Community & Cultural Celebrations',
      description:
        'Ideal for Eid, National Day, Iftar and cultural events where authentic Arabic flavours are expected.',
    },
  ],
  includedH2: "What's Included in Our Shawarma & Kebab Station",
  includedItems: [
    { title: 'Vertical Shawarma Spit', description: 'Chicken and/or beef shawarma cooked on a traditional vertical rotisserie.' },
    { title: 'Charcoal or Grill Kebabs', description: 'Skewers of lamb, chicken or kofta grilled fresh to order.' },
    { title: 'Fresh Arabic Breads', description: 'Khubz, saj and markook bread warmed and ready for wrapping.' },
    { title: 'Classic Mezze & Salads', description: 'Hummus, moutabal, tabbouleh, fattoush, pickles and garlic sauce.' },
    { title: 'Sauces & Toppings Bar', description: 'Toum, tahini, amba, chilli sauce, sumac onions and fresh herbs.' },
    { title: 'Live Station Chef', description: 'Experienced chef to carve, grill, assemble and serve throughout the event.' },
    { title: 'Service Staff & Setup', description: 'Station build, trays, napkins, plates and clear-down included.' },
    { title: 'Halal Meats & Ingredients', description: 'All meats sourced and prepared halal as standard.' },
  ],
  galleryH2: 'A Taste of Our Shawarma & Kebab Station',
  galleryImages: [
    { src: '/images/arabic-catering-dubai-hero.webp', alt: 'Live shawarma station at a Dubai event' },
    { src: '/menu-meat.webp', alt: 'Grilled kebab skewers and shawarma meat' },
    { src: '/menu-appetizer.webp', alt: 'Arabic mezze and salads for shawarma station' },
    { src: '/service-events.webp', alt: 'Live cooking station setup in Dubai' },
    { src: '/service-villa.webp', alt: 'Villa party with live shawarma catering' },
    { src: '/menu-dessert.webp', alt: 'Arabic desserts to follow a shawarma feast' },
  ],
  faqsH2: 'Shawarma & Kebab Station Questions',
  faqs: [
    {
      q: 'What meats do you offer at a shawarma and kebab station?',
      a: 'We typically offer chicken and beef shawarma, plus lamb, chicken and kofta kebabs. All meats are halal and prepared fresh on site.',
    },
    {
      q: 'Can the station be set up outdoors or at a villa?',
      a: 'Yes. Our live shawarma and kebab stations are designed for both indoor and outdoor venues, including villa gardens, pool decks and event spaces.',
    },
    {
      q: 'Do you provide vegetarian or vegan options?',
      a: 'Absolutely. We can add falafel, grilled vegetable skewers, halloumi and a full mezze selection so vegetarian and vegan guests are well catered for.',
    },
    {
      q: 'How many guests can one station serve?',
      a: 'A single station comfortably serves around 80–100 guests per hour. For larger events we can add additional spits and grills.',
    },
    {
      q: 'Can the station be branded for a corporate event?',
      a: 'Yes. We can add branded signage, menu boards, uniforms and themed presentation for corporate activations and product launches.',
    },
    {
      q: 'How far in advance should I book a shawarma station?',
      a: 'One to two weeks is ideal, especially during peak event season. Last-minute bookings may be possible depending on availability.',
    },
  ],
  relatedServices: [
    {
      title: 'Arabic Catering Dubai',
      description: 'Full Arabic menus with mezze, grills, biryanis and live stations for any occasion.',
      image: '/images/arabic-catering-dubai-hero.webp',
      link: '/arabic-catering-dubai',
    },
    {
      title: 'Live Cooking Stations',
      description: 'Interactive chef-manned stations including pasta, wok, tandoor and BBQ stations.',
      image: '/service-events.webp',
      link: '/live-cooking-stations-dubai',
    },
    {
      title: 'Corporate Event Catering',
      description: 'Full-service catering for conferences, launches and company celebrations across Dubai.',
      image: '/service-corporate.webp',
      link: '/corporate-event-catering-dubai',
    },
  ],
  ctaH2: 'Book a Live Shawarma & Kebab Station',
  ctaP:
    'Tell us about your event, guest count, venue and preferred meats. We will bring a live shawarma and kebab station that becomes the highlight of the evening.',
}

export default function ShawarmaStation() {
  return <ServiceLandingPage config={config} />
}
