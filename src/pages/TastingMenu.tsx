import { Link } from 'react-router'
import { Star, ChefHat, Home, Building, PartyPopper, Users } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'tasting-menu-dubai',
  seoTitle: 'Tasting Menu Dubai | Private Chef’s Table Experiences',
  metaDescription:
    'Bespoke tasting menus and chef’s table experiences in Dubai for intimate dinners, celebrations and corporate hospitality. Multi-course menus served by a private chef team.',
  canonicalPath: '/tasting-menu-dubai',
  ogImage: '/images/tasting-menu-dubai-hero.webp',
  breadcrumbLabel: 'Tasting Menu Dubai',
  h1: 'Tasting Menu & Chef’s Table in Dubai',
  heroSub:
    'Multi-course tasting menus and interactive chef’s table experiences in your villa, venue or private dining room — designed, cooked and presented by a dedicated myCHEF Dubai chef.',
  heroImage: '/images/tasting-menu-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to book a tasting menu or chef's table in Dubai (via mychef.ae/tasting-menu-dubai)",
  eyebrow: 'TASTING MENU & CHEF’S TABLE DUBAI',
  introH2: 'A Restaurant-Quality Experience, Private and Personal',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        A tasting menu is the most intimate way to experience a chef’s creativity. Our private chef’s table and tasting menu experiences in Dubai bring a curated, multi-course journey to your dining table — whether that is in a Palm Jumeirah villa, a Downtown penthouse, a corporate boardroom or a carefully chosen venue. Each course is introduced, every flavour is considered, and the pacing is designed around the conversation at the table.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        We begin with a consultation to understand your tastes, any dietary requirements and the tone of the evening. The chef then designs a bespoke menu that can span modern European, Japanese, Mediterranean, Middle Eastern or fusion influences. Wine-pairing-style mocktails, amuse-bouches, palate cleansers and petits fours complete the experience, with service that is attentive but never intrusive.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        This is the chef-led, fine-dining side of our{' '}
        <Link to="/luxury-dining-experiences" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          luxury dining experiences
        </Link>{' '}
        in Dubai. For larger celebrations, explore{' '}
        <Link to="/event-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          event catering Dubai
        </Link>{' '}
        options, or add drama with{' '}
        <Link to="/live-cooking-stations-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          live cooking stations
        </Link>{' '}
        for a hybrid format.
      </p>
    </>
  ),
  formatsH2: 'Tasting Menu Formats',
  formats: [
    {
      Icon: Star,
      title: 'Multi-Course Tasting Menus',
      description: 'Six to twelve curated courses served at your table, with chef introductions and refined plating throughout the evening.',
      link: '/luxury-dining-experiences',
    },
    {
      Icon: ChefHat,
      title: 'Interactive Chef’s Table',
      description: 'Guests sit around the cooking or plating space and watch the chef build each course in real time.',
      link: '/luxury-dining-experiences',
    },
    {
      Icon: Home,
      title: 'Villa & Residence Tastings',
      description: 'An intimate tasting menu experience in your home or villa across Emirates Hills, Palm Jumeirah and Dubai Hills.',
      link: '/villas-private-residences',
    },
    {
      Icon: Building,
      title: 'Corporate Chef’s Table',
      description: 'Impress clients and leadership with a private tasting menu in a boardroom or curated corporate venue.',
      link: '/corporate-event-catering-dubai',
    },
    {
      Icon: PartyPopper,
      title: 'Celebration Tasting Dinners',
      description: 'Birthdays, anniversaries and milestones turned into memorable culinary journeys for small groups.',
      link: '/private-dining-dubai',
    },
    {
      Icon: Users,
      title: 'Group Tasting Experiences',
      description: 'Scaled tasting menus for slightly larger groups while keeping the personal, chef-led feel intact.',
      link: '/catering-packages-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE TASTING MENUS WORK BEST',
  useCasesH2: 'Designed for Special Occasions',
  useCases: [
    {
      title: 'Intimate Anniversary Dinners',
      description:
        'Mark a milestone with a private tasting menu where every course reflects a favourite flavour or shared memory, served at your own table.',
    },
    {
      title: 'Client & Executive Hospitality',
      description:
        'A chef’s table creates a talking point and a sense of exclusivity for high-value client dinners, board retreats and leadership evenings.',
    },
    {
      title: 'Milestone Celebrations',
      description:
        'Birthdays, engagements and family reunions become truly memorable when the meal is the entertainment and the chef is part of the evening.',
    },
    {
      title: 'Culinary Exploration at Home',
      description:
        'For food-loving hosts who want to try new cuisines and techniques without leaving home, a tasting menu is the ultimate private restaurant experience.',
    },
  ],
  includedH2: "What's Included in Our Tasting Menu Experience",
  includedItems: [
    { title: 'Bespoke Menu Design', description: 'A personalised tasting menu created after a detailed consultation with the chef.' },
    { title: 'Premium Ingredients', description: 'Seasonal produce, quality proteins and speciality ingredients chosen for each course.' },
    { title: 'Private Chef & Team', description: 'A dedicated chef and service staff focused entirely on your table for the evening.' },
    { title: 'Course Introductions', description: 'Each course presented with context, ingredients and inspiration for a richer experience.' },
    { title: 'Mocktail & Beverage Pairing', description: 'Non-alcoholic pairings, juices and tonics selected to complement the menu.' },
    { title: 'Table Styling & Plating', description: 'Restaurant-quality crockery, glassware and presentation arranged to suit the setting.' },
    { title: 'Dietary Adaptation', description: 'Vegetarian, vegan, halal, gluten-free and allergy-conscious courses available on request.' },
    { title: 'Full Setup & Pack-Down', description: 'We bring equipment, prep, serve and clear away so you only need to enjoy the evening.' },
  ],
  galleryH2: 'A Taste of Our Tasting Menu Experiences',
  galleryImages: [
    { src: '/images/tasting-menu-dubai-hero.webp', alt: 'Private tasting menu experience in Dubai' },
    { src: '/menu-appetizer.webp', alt: 'Artistic appetiser course from a tasting menu' },
    { src: '/menu-mains.webp', alt: 'Plated main course at a chef’s table dinner' },
    { src: '/menu-dessert.webp', alt: 'Refined dessert course for a private tasting menu' },
    { src: '/service-luxury-dining.webp', alt: 'Luxury private dining service in Dubai' },
    { src: '/service-villa.webp', alt: 'Villa tasting dinner setting' },
  ],
  faqsH2: 'Tasting Menu & Chef’s Table Questions',
  faqs: [
    {
      q: 'How many courses are in a typical tasting menu?',
      a: 'Most private tasting menus range from five to ten courses, depending on the occasion, appetite and time available. We design the pacing around your evening so it never feels rushed.',
    },
    {
      q: 'Can the menu be customised to my preferences?',
      a: 'Yes. Every tasting menu is bespoke. We discuss your favourite cuisines, ingredients, dislikes and any dietary requirements before the chef finalises the courses.',
    },
    {
      q: 'Where can a chef’s table take place?',
      a: 'We host chef’s tables and tasting menus in private villas, apartments, penthouses, corporate boardrooms and selected venues across Dubai. A suitable kitchen or prep space is helpful but not essential.',
    },
    {
      q: 'How many guests can a chef’s table accommodate?',
      a: 'Chef’s tables are ideal for 2 to 16 guests. Larger groups can still enjoy a tasting-menu format with additional chefs and service staff, though the experience becomes more event-style than intimate.',
    },
    {
      q: 'Do you provide drinks pairing?',
      a: 'We create mocktail, juice and tonic pairings to complement each course. If you would like alcoholic pairings, our team can coordinate with your selected sommelier or supplier.',
    },
    {
      q: 'How far in advance should I book a tasting menu?',
      a: 'Two to four weeks is ideal, especially for complex menus or peak-season dates. Last-minute bookings are sometimes possible — contact us on WhatsApp to check chef availability.',
    },
  ],
  relatedServices: [
    {
      title: 'Luxury Dining Experiences',
      description: 'Private chef-led fine dining in your home, villa or chosen venue across Dubai.',
      image: '/service-luxury-dining.webp',
      link: '/luxury-dining-experiences',
    },
    {
      title: 'Live Cooking Stations',
      description: 'Interactive stations that add theatre and energy to larger private events.',
      image: '/service-events.webp',
      link: '/live-cooking-stations-dubai',
    },
    {
      title: 'Private Dining Dubai',
      description: 'Bespoke private dinners and intimate celebrations designed around your occasion.',
      image: '/service-villa.webp',
      link: '/private-dining-dubai',
    },
  ],
  ctaH2: 'Design a Tasting Menu Your Guests Will Never Forget',
  ctaP:
    'Tell us about your occasion, guest count and culinary preferences. We will create a chef’s table or tasting menu experience in Dubai that feels personal, polished and completely unforgettable.',
}

export default function TastingMenu() {
  return <ServiceLandingPage config={config} />
}
