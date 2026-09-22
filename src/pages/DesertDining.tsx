// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /desert-dining-dubai
//     primary:     "desert dining dubai"
//     subkeywords: "desert dining dubai price" · "desert dining price per person dubai" · "best desert dining dubai" · "desert dining packages dubai" · "desert dining menu dubai" · "halal desert dining dubai" · "private desert dining dubai" · "luxury desert dining dubai" · "desert dining experience dubai" · "desert dinner dubai private" · "best desert dinner dubai" · "desert dinner experience dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { Link } from 'react-router'
import { Sun, Utensils, Flame, Salad, Moon, Home } from 'lucide-react'
import OccasionCateringPage from './occasion/OccasionCateringPage'
import type { OccasionPageConfig } from './occasion/OccasionCateringPage'

const config: OccasionPageConfig = {
  slug: 'desert-dining-dubai',
  seoTitle: 'Desert Dining Dubai | myCHEF',
  metaDescription:
    'Desert dining Dubai with a vetted myCHEF team. Menus, service and clear-down at a camp or dune site you have booked, so you stay a guest at the table.',
  canonicalPath: '/desert-dining-dubai',
  ogImage: '/images/desert-dining-dubai-hero.webp',
  breadcrumbLabel: 'Desert Dining & Camp Catering Dubai',
  h1: 'Desert Dining Dubai',
  heroSub:
    "Desert dining in Dubai, with private dinners, Arabic sharing menus and live grills at your chosen site. The menu, equipment and service are planned around the setting and the evening light.",
  heroImage: '/images/desert-dining-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to plan desert dining or camp catering in Dubai (via mychef.ae/desert-dining-dubai)",
  eyebrow: 'DESERT CATERING IN DUBAI',
  introH2: 'The kitchen travels. The camp is yours.',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Desert dining in Dubai brings a private catering service to a camp or agreed outdoor site you have booked. We coordinate the chef, menu, service team and clear-down, accounting for access, heat, wind and available facilities. Arabic sharing plates, grills and slow-cooked dishes are well suited to the setting.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        The quote moves with guest count, the menu, and how much of the work happens in the room. We start from a published format and adjust it to your date. What to check: the named chef, an itemised quote, and who buys the ingredients. Dietary notes go into the first menu draft.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        Chefs in our network handle transport, on-site cooking, service and pack-down, working with desert camps, event planners and private estates. Explore our{' '}
        <Link to="/arabic-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          Arabic catering Dubai
        </Link>{' '}
        menus for traditional flavours, or see how this complements our{' '}
        <Link to="/bbq-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          BBQ catering Dubai
        </Link>{' '}
        live grilling options.
      </p>
    </>
  ),
  formatsH2: 'Desert Dining Formats',
  formats: [
    {
      Icon: Utensils,
      title: 'Bedouin sharing feasts',
      description: 'Communal platters of Arabic mezze, grilled meats and rice, served around low tables or carpets.',
      link: '/arabic-catering-dubai',
    },
    {
      Icon: Flame,
      title: 'Live desert grill',
      description: 'Chefs grill lamb, chicken, seafood and vegetables over open flames as the sun sets.',
      link: '/bbq-catering-dubai',
    },
    {
      Icon: Salad,
      title: 'Mezze & Salad Spreads',
      description: 'Cool mezze, tabbouleh, fattoush and dips that balance the richer grilled dishes in the desert heat.',
      link: '/mediterranean-catering-dubai',
    },
    {
      Icon: Moon,
      title: 'Sunset and starlight dinners',
      description: 'Service timed to sunset or later, with lanterns, candles and a team that can work in wind and sand.',
      link: '/luxury-dining-experiences',
    },
    {
      Icon: Home,
      title: 'Private desert camps',
      description: 'Catering at licensed desert camps and private setups arranged by you or your event planner.',
      link: '/events',
    },
    {
      Icon: Sun,
      title: 'Corporate Retreat Dining',
      description: 'Structured group dining for team-building retreats, conferences and incentive trips in the desert.',
      link: '/corporate',
    },
  ],
  useCasesEyebrow: 'WHERE THE CATERING HAPPENS',
  useCasesH2: 'Tables we cook for in the desert',
  useCases: [
    {
      title: 'Private dune dinners',
      description:
        'For proposals, anniversaries or a small guest list: a table on the dunes with a chef and server, at a site you have booked.',
    },
    {
      title: 'Bedouin-Style Celebrations',
      description:
        'Birthdays, family gatherings and cultural events feel natural in a Bedouin-style setup with cushions, carpets and sharing platters.',
    },
    {
      title: 'Corporate Desert Retreats',
      description:
        'Team-building days and incentive trips often end with a desert dinner. We scale the menu and service to the group size and the brief.',
    },
    {
      title: 'Cultural & Seasonal Events',
      description:
        'Desert dining is especially popular during Ramadan, Eid and cooler months. We adapt timings, menus and service style for each occasion.',
    },
  ],
  includedH2: 'What desert dining catering includes',
  includedItems: [
    { title: 'Arabic & Mediterranean Menus', description: 'Sharing platters, mezze, grilled meats and rice dishes suited to the desert setting.' },
    { title: 'Live grill stations', description: 'On-site grilling over charcoal or open flame, cooked in front of guests.' },
    { title: 'Desert-Safe Logistics', description: 'Insulated transport, covered prep areas and wind-aware serving setups.' },
    { title: 'Ambient Styling Support', description: 'Coordination with your camp or planner on lanterns, low tables and service flow.' },
    { title: 'Dietary Adaptations', description: 'Vegetarian, vegan, halal and allergy-conscious options available.' },
    { title: 'Dedicated service staff', description: 'An outdoor service team used to sand, wind and timed sunset service.' },
    { title: 'Timed Sunset Service', description: 'Service planned around sunset, temperature and guest arrival.' },
    { title: 'Full Pack-Down', description: 'We clear the catering area and leave no trace on the dunes.' },
  ],
  galleryH2: 'Desert dining setups',
  galleryImages: [
    { src: '/menu-appetizer.webp', alt: 'Arabic appetisers for desert dining in Dubai' },
    { src: '/menu-canapes.webp', alt: 'Desert camp canapé selection' },
    { src: '/menu-dessert.webp', alt: 'Dessert under the desert stars' },
    { src: '/service-catering.webp', alt: 'Desert dining set-up in Dubai' },
    { src: '/service-villa.webp', alt: 'Private dune dinner styling' },
    { src: '/service-events.webp', alt: 'Desert event catering in Dubai' },
  ],
  faqsH2: 'Desert Dining Dubai: the questions we get before a booking',
  faqs: [
    {
      q: 'Can you cater at any desert camp in Dubai?',
      a: 'We coordinate catering at licensed desert camps and private setups arranged by event planners. If you already have a camp or location, we work with them on access, power and service areas. We do not operate the camp.',
    },
    {
      q: 'What food is best for desert dining?',
      a: 'Arabic sharing menus hold up outdoors: hot and cold mezze, grilled meats, spiced rice, flatbreads and salads. Mediterranean and other menus are available on request.',
    },
    {
      q: 'Do you provide the camp setup or just the food?',
      a: 'We handle the catering. Tables, cushions, lighting and camp hire sit with your camp provider or event planner. We can coordinate timings and service flow with them.',
    },
    {
      q: 'Is desert dining available year-round?',
      a: 'It is most comfortable from October to April. Summer events are possible in the early morning or late evening with shaded, cooled setups and adjusted menus.',
    },
    {
      q: 'Can you handle dietary requirements in the desert?',
      a: 'Yes. We plan vegetarian, vegan, gluten-free and halal options just as carefully for desert events as we do for indoor catering.',
    },
    {
      q: 'How far in advance should I book desert dining catering?',
      a: 'Three to four weeks is ideal, especially for large groups or peak season. This gives us time to coordinate transport, camp access and menu sourcing.',
    },
  ],
  relatedServices: [
    {
      title: 'Arabic Catering',
      description: 'Traditional Arabic sharing menus perfect for desert feasts.',
      image: '/images/arabic-catering-dubai-hero.webp',
      link: '/arabic-catering-dubai',
    },
    {
      title: 'BBQ Catering',
      description: 'Live grilling stations that bring theatre to any outdoor setting.',
      image: '/images/bbq-catering-dubai-hero.webp',
      link: '/bbq-catering-dubai',
    },
    {
      title: 'Luxury Dining Experiences',
      description: 'Chef-led dinners at a villa, yacht or venue you have booked.',
      image: '/service-villa.webp',
      link: '/luxury-dining-experiences',
    },
  ],
  ctaH2: 'Plan the dinner on the sand',
  ctaP:
    'Tell us the camp or site, group size and date. We will send a menu and service plan for cooking on the sand, with the chef named and the quote itemised.',
  showTrustSignalStrip: true,
}

export default function DesertDining() {
  return <OccasionCateringPage config={config} />
}
