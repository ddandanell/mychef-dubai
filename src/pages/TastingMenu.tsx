// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /tasting-menu-dubai
//     primary:     "private tasting menu dubai"
//     subkeywords: "private chef tasting menu dubai" · "tasting menu dubai price" · "private chef tasting menu price per person dubai" · "tasting menu packages dubai" · "halal tasting menu dubai" · "tasting menu at home dubai" · "private chef set menu dubai" · "chef tasting menu dubai" · "tasting menu courses" · "tasting menu birthday dubai" · "degustation menu dubai private" · "private jet catering menu prices"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { Link } from 'react-router'
import { Star, ChefHat, Home, Building, PartyPopper, Users } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'tasting-menu-dubai',
  seoTitle: 'Private Tasting Menu Dubai | myCHEF',
  metaDescription: 'A private tasting menu in Dubai at your table: courses cooked in your kitchen, paced to the conversation. Not a restaurant chef’s table.',
  canonicalPath: '/tasting-menu-dubai',
  ogImage: '/images/tasting-menu-dubai-hero.webp',
  showTrustSignalStrip: true,
  breadcrumbLabel: 'Tasting Menu Dubai',
  h1: 'Private tasting menu Dubai',
  heroSub:
    "A private tasting menu in Dubai, prepared in your kitchen and served at your table. Discover a succession of considered courses, with the pace and style shaped around your occasion.",
  heroImage: '/images/tasting-menu-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to book a tasting menu or chef's table in Dubai (via mychef.ae/tasting-menu-dubai)",
  eyebrow: 'TASTING MENU & CHEF’S TABLE DUBAI',
  introH2: 'A private tasting menu Dubai, cooked at your table',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        A private tasting menu in Dubai brings the chef’s craft to your own table. Each course is prepared, plated and introduced for your guests, with time to enjoy the food and conversation. Host in a villa, apartment, boardroom or agreed private venue, with facilities confirmed during planning.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        The quote moves with guest count, the menu, and how much of the work happens in the room. We start from a published format and adjust it to your date. What to check: the named chef, an itemised quote, and who buys the ingredients. Dietary notes go into the first menu draft.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        We start with what you like to eat, what you cannot eat, and how formal the evening is. The chef then writes a menu that can draw on modern European, Japanese, Mediterranean or Middle Eastern cooking. Non-alcoholic pairings, small opening bites and a last sweet course can sit around the main run. Service stays in the room without hovering.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        This is the chef-led, fine-dining side of our{' '}
        <Link to="/luxury-dining-experiences" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          luxury dining experiences
        </Link>{' '}
        in Dubai. For larger celebrations, explore{' '}
        <Link to="/events" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          event catering Dubai
        </Link>{' '}
        options, or add{' '}
        <Link to="/live-cooking-stations-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          live cooking stations
        </Link>{' '}
        for a hybrid format.
      </p>
    </>
  ),
  formatsH2: 'Tasting menu formats',
  formats: [
    {
      Icon: Star,
      title: 'Multi-course tasting menus',
      description: 'Six to twelve courses at your table, with chef introductions and plating through the evening.',
      link: '/luxury-dining-experiences',
    },
    {
      Icon: ChefHat,
      title: 'Interactive chef’s table',
      description: 'Guests sit around the cooking or plating space and watch the chef build each course in real time.',
      link: '/luxury-dining-experiences',
    },
    {
      Icon: Home,
      title: 'Villa and residence tastings',
      description: 'A tasting menu in your home or villa in Emirates Hills, Palm Jumeirah or Dubai Hills.',
      link: '/villas-private-residences',
    },
    {
      Icon: Building,
      title: 'Corporate chef’s table',
      description: 'A tasting menu in a boardroom or a venue you have booked, for clients or leadership.',
      link: '/corporate-event-catering-dubai',
    },
    {
      Icon: PartyPopper,
      title: 'Celebration tasting dinners',
      description: 'Birthdays, anniversaries and small milestones as a seated tasting menu, not a buffet.',
      link: '/private-chef-dubai',
    },
    {
      Icon: Users,
      title: 'Group tasting menus',
      description: 'A tasting-menu format for a larger table, with extra chefs and service staff when the headcount needs it.',
      link: '/catering-packages-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE A TASTING MENU FITS',
  useCasesH2: 'When a tasting menu is the right format',
  useCases: [
    {
      title: 'Anniversary dinners at home',
      description:
        'A private tasting menu where courses can follow a favourite flavour or a shared memory, served at your own table.',
    },
    {
      title: 'Client and leadership dinners',
      description:
        'A chef’s table gives the evening a clear shape: courses, introductions and a table that stays together, without booking a restaurant.',
    },
    {
      title: 'Small milestone tables',
      description:
        'Birthdays, engagements and family reunions for a small group, where the meal is plated and paced rather than laid out as a buffet.',
    },
    {
      title: 'Trying a cuisine at home',
      description:
        'For hosts who want a set of courses they would not cook themselves, without leaving the house or booking a chef’s table in a restaurant.',
    },
  ],
  includedH2: 'What a tasting menu booking includes',
  includedItems: [
    { title: 'Menu written for the table', description: 'A tasting menu drafted after a consultation with the chef, then revised before the night.' },
    { title: 'Ingredients for each course', description: 'Seasonal produce, proteins and speciality items chosen for the run of dishes.' },
    { title: 'Private chef and team', description: 'A partner chef and service staff focused on your table for the evening.' },
    { title: 'Course introductions', description: 'Each course presented with what is in it and why it is on the menu.' },
    { title: 'Mocktail and beverage pairing', description: 'Non-alcoholic pairings, juices and tonics chosen against the menu.' },
    { title: 'Table styling and plating', description: 'Crockery, glassware and presentation arranged to suit the room you have.' },
    { title: 'Dietary adaptation', description: 'Vegetarian, vegan, halal, gluten-free and allergy-conscious courses available on request.' },
    { title: 'Setup and pack-down', description: 'We bring equipment, prep, serve and clear away. You stay at the table.' },
  ],
  galleryH2: 'From the table',
  galleryImages: [
    { src: '/images/tasting-menu-dubai-hero.webp', alt: 'Private tasting menu in a Dubai dining room' },
    { src: '/menu-appetizer.webp', alt: 'Appetiser course from a tasting menu' },
    { src: '/menu-meat.webp', alt: 'Plated main course at a chef’s table dinner' },
    { src: '/menu-dessert.webp', alt: 'Dessert course for a private tasting menu' },
    { src: '/service-luxury-dining.webp', alt: 'Private dining service in Dubai' },
    { src: '/service-villa.webp', alt: 'Villa tasting dinner setting' },
  ],
  faqsH2: 'The questions we get before a tasting menu booking',
  faqs: [
    {
      q: 'How many courses are in a typical tasting menu?',
      a: 'Most private tasting menus range from five to ten courses, depending on the occasion, appetite and time available. We set the pacing around your evening so courses do not stack.',
    },
    {
      q: 'Can the menu be customised to my preferences?',
      a: 'Yes. Every tasting menu is written for the table. We discuss your favourite cuisines, ingredients, dislikes and any dietary requirements before the chef finalises the courses.',
    },
    {
      q: 'Where can a chef’s table take place?',
      a: 'We cook tasting menus in private villas, apartments, penthouses, corporate boardrooms and venues you have booked across Dubai. A usable kitchen or prep space helps. It is not always essential.',
    },
    {
      q: 'How many guests can a chef’s table accommodate?',
      a: 'Chef’s tables work well for 2 to 16 guests. Larger groups can still use a tasting-menu format with extra chefs and service staff. At that size it reads more like an event than a small table.',
    },
    {
      q: 'Do you provide drinks pairing?',
      a: 'We create mocktail, juice and tonic pairings to complement each course. If you would like alcoholic pairings, our chefs can coordinate with your selected sommelier or supplier.',
    },
    {
      q: 'How far in advance should I book a tasting menu?',
      a: 'Two to four weeks is ideal, especially for complex menus or peak-season dates. Last-minute bookings are sometimes possible. Contact us on WhatsApp to check chef availability.',
    },
  {
    q: 'How is the private chef set menu Dubai put together?',
    a: 'It is written for your event, not picked off a list: we start from what you are hosting, the season and any dietary needs, then send a draft you can change before anything is confirmed. Tell us the date and headcount and you get a first draft to react to.',
  },
],
  relatedServices: [
    {
      title: 'Luxury Dining Experiences',
      description: 'Chef-led dinners in your home, villa or a venue you have booked across Dubai.',
      image: '/service-luxury-dining.webp',
      link: '/luxury-dining-experiences',
    },
    {
      title: 'Live Cooking Stations',
      description: 'Stations cooked in front of guests, used when a tasting menu is not the right format for the room.',
      image: '/service-events.webp',
      link: '/live-cooking-stations-dubai',
    },
    {
      title: 'Private Dining Dubai',
      description: 'Household chef service for standing plans. One dinner is catering; we send that brief there.',
      image: '/service-villa.webp',
      link: '/private-chef-dubai',
    },
  ],
  ctaH2: 'Send the date, the headcount and how you eat',
  ctaP:
    'Tell us the occasion, guest count and what you like to eat. We will send a tasting-menu or chef’s table plan for your kitchen in Dubai, with the chef named and the quote itemised.',
}

export default function TastingMenu() {
  return <ServiceLandingPage config={config} />
}
