import { Link } from 'react-router'
import { Home, PartyPopper, Utensils, Users, Star, Heart } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'housewarming-catering-dubai',
  seoTitle: 'Housewarming Catering Dubai | myCHEF',
  metaDescription:
    'Housewarming catering Dubai for a new villa or apartment. Grazing, buffet or BBQ. Drop-off from AED 90, buffet from AED 120. You stay with your guests.',
  canonicalPath: '/private-party-catering-dubai',
  ogImage: '/service-villa.webp',
  breadcrumbLabel: 'Housewarming Catering Dubai',
  h1: 'Housewarming Catering Dubai',
  heroSub:
    'Housewarming catering Dubai for a new villa or apartment. Shareable food, staff if you need them, and a kitchen left usable when people leave.',
  heroImage: '/service-villa.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to arrange housewarming catering in Dubai (via mychef.ae/housewarming-catering-dubai)",
  eyebrow: 'HOUSEWARMING CATERING IN DUBAI',
  introH2: 'Housewarming catering Dubai so you can show the house',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Housewarming catering Dubai is food for a new address: a villa in Arabian Ranches, an apartment in Downtown, a townhouse in Dubai Hills. Guests arrive in waves. You should be at the door, not in the kitchen.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Drop-off starts from AED 90 per person. A staffed buffet from AED 120. Canapés, BBQ and live stations from AED 150. All before 5% VAT. An open house usually wants food that holds, not a plated dinner for a guest list that never sits down together.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        Gardens and pools sit next to{' '}
        <Link to="/villas-private-residences" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          villa dining
        </Link>
        {' '}and{' '}
        <Link to="/bbq-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          BBQ catering Dubai
        </Link>
        . A standing welcome is{' '}
        <Link to="/canape-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          canapé catering Dubai
        </Link>
        .
      </p>
    </>
  ),
  formatsH2: 'How a housewarming is served',
  formats: [
    {
      Icon: Home,
      title: 'Open-house grazing tables',
      description: 'A spread guests can pick at as they arrive, replenished rather than plated all at once.',
      link: '/grazing-table-dubai',
    },
    {
      Icon: PartyPopper,
      title: 'Garden and terrace parties',
      description: 'Outdoor food for a new villa: shade, power and where the team unloads, written into the brief.',
      link: '/villas-private-residences',
    },
    {
      Icon: Utensils,
      title: 'Buffet and family-style dining',
      description: 'A maintained buffet or shared platters when people will sit in groups, not all at one time.',
      link: '/buffet-catering-dubai',
    },
    {
      Icon: Users,
      title: 'Canapé and drinks receptions',
      description: 'Passed bites for a smaller apartment or a standing welcome.',
      link: '/canape-catering-dubai',
    },
    {
      Icon: Star,
      title: 'Live cooking stations',
      description: 'Grill, pasta or shawarma when the room should move. Power and ventilation belong in the quote.',
      link: '/live-cooking-stations-dubai',
    },
    {
      Icon: Heart,
      title: 'Dessert and sweet tables',
      description: 'Cake and sweets quoted when you want them, not assumed on a drop-off.',
      link: '/dessert-table-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE HOUSEWARMING CATERING WORKS',
  useCasesH2: 'Villas, apartments, neighbours in waves',
  useCases: [
    {
      title: 'Villa housewarmings',
      description:
        'A garden buffet, BBQ or grazing table in Palm Jumeirah, Emirates Hills or Dubai Hills. Outdoor holding is part of the brief.',
    },
    {
      title: 'Apartment and penthouse gatherings',
      description:
        'A compact kitchen. Canapés and bowl food that do not need a dining table for twenty.',
    },
    {
      title: 'Family open houses',
      description:
        'People coming and going. Replenished platters, not one sitting that punishes late arrivals.',
    },
    {
      title: 'Neighbourhood meet-and-greets',
      description:
        'A mixed guest list you may not know well. Labels on the food matter more than a theme name.',
    },
  ],
  includedH2: 'What housewarming catering includes',
  includedItems: [
    { title: 'Food that can be eaten standing', description: 'Grazing, mezze, sliders and salads unless you ask for a seated dinner.' },
    { title: 'Sharing platters', description: 'Cheeses, breads, mezze and salads arranged for self-service.' },
    { title: 'Live stations', description: 'Optional. Quoted when the kitchen and the garden can support them.' },
    { title: 'Canapés and bowl food', description: 'The usual apartment format when there is no dining table for the whole list.' },
    { title: 'Drinks', description: 'Mocktails, juice and water. Alcohol at a private residence is sourced by the host.' },
    { title: 'Dessert', description: 'Quoted when you want a cake moment.' },
    { title: 'Setup, service and cleanup', description: 'Staffed bookings include clear-down. Drop-off is food and layout.' },
    { title: 'Dietary notes', description: 'Vegetarian, vegan, halal, gluten-free and dairy-free dishes when named.' },
  ],
  galleryH2: 'How housewarming catering looks in Dubai',
  galleryImages: [
    { src: '/service-villa.webp', alt: 'Housewarming catering at a Dubai villa' },
    { src: '/menu-appetizer.webp', alt: 'Appetisers for a housewarming party' },
    { src: '/menu-meat.webp', alt: 'Shared main dishes for a housewarming celebration' },
    { src: '/service-events.webp', alt: 'Housewarming event catering setup' },
    { src: '/menu-dessert.webp', alt: 'Dessert table for a housewarming party' },
    { src: '/service-luxury-dining.webp', alt: 'Private dining for a housewarming' },
  ],
  faqsH2: 'Questions before you book',
  faqs: [
    {
      q: 'What kind of food works best for a housewarming party?',
      a: 'Sharing food. Grazing, mezze, sliders, salads. Live stations and BBQs suit villas. Apartments usually need canapés or drop-off.',
    },
    {
      q: 'Can you cater a housewarming in an apartment?',
      a: 'Yes. We adapt to the kitchen and the lift. Compact canapés and platters are the usual brief.',
    },
    {
      q: 'Do you provide staff and cleanup?',
      a: 'Staffed bookings include chefs, service and clear-down. Drop-off is food delivered and laid out. You host, you clear, unless collection is arranged.',
    },
    {
      q: 'Can the menu reflect a theme or cuisine?',
      a: 'Yes. Mediterranean, Middle Eastern, Asian or a mix. The kitchen still has to hold it.',
    },
    {
      q: 'How many guests can you cater for a housewarming?',
      a: 'Drop-off from 10 guests. Buffet from 20. A chef cooking on site has no minimum headcount.',
    },
    {
      q: 'How far in advance should I book housewarming catering?',
      a: 'One to two weeks is the usual window. Live stations need longer.',
    },
  ],
  relatedServices: [
    {
      title: 'Villa Dining Dubai',
      description: 'Kitchen access, gates and outdoor power for a villa sitting.',
      image: '/service-villa.webp',
      link: '/villas-private-residences',
    },
    {
      title: 'BBQ Catering Dubai',
      description: 'Grill-led service for a new garden.',
      image: '/menu-meat.webp',
      link: '/bbq-catering-dubai',
    },
    {
      title: 'Canapé Catering Dubai',
      description: 'Passed food for a standing welcome.',
      image: '/menu-canapes.webp',
      link: '/canape-catering-dubai',
    },
    {
      title: 'Graduation Party Catering',
      description: 'A daytime mixed-ages table, if that is the real brief.',
      image: '/service-events.webp',
      link: '/private-party-catering-dubai',
    },
    {
      title: 'Reunion Catering',
      description: 'A house night for people who already know each other.',
      image: '/service-events.webp',
      link: '/private-party-catering-dubai',
    },
  ],
  ctaH2: 'Send the new address, guest count and format',
  ctaP:
    'Tell us villa or apartment, how many people and whether you want drop-off or staff. We send an itemised housewarming catering Dubai quote.',
  showTrustSignalStrip: true,
}

export default function HousewarmingCatering() {
  return <ServiceLandingPage config={config} />
}
