import { Link } from 'react-router'
import { Fish, Utensils, Leaf, Home, Building, PartyPopper } from 'lucide-react'
import DietaryCateringPage from './dietary/DietaryCateringPage'
import type { DietaryPageConfig } from './dietary/DietaryCateringPage'

const config: DietaryPageConfig = {
  slug: 'pescatarian-catering-dubai',
  seoTitle: 'Pescatarian Catering Dubai | myCHEF',
  metaDescription:
    'Pescatarian Catering Dubai with a vetted myCHEF team. Fish and vegetables on the written menu. No red meat or poultry. You stay a guest at your table.',
  canonicalPath: '/cuisines-dubai',
  showTrustSignalStrip: true,
  ogImage: '/images/pescatarian-catering-dubai-hero.webp',
  breadcrumbLabel: 'Pescatarian Catering Dubai',
  h1: 'Pescatarian Catering Dubai',
  heroSub:
    'Pescatarian Catering Dubai is fish, shellfish if allowed, eggs, dairy and plants. Red meat and poultry stay off. We cook at your address and pack down after service.',
  heroImage: '/images/pescatarian-catering-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to plan pescatarian catering in Dubai (via mychef.ae/pescatarian-catering-dubai)",
  eyebrow: 'PESCATARIAN CATERING IN DUBAI',
  introH2: 'Fish on the plate. Meat off the brief.',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        A pescatarian table wants the ocean and the garden, not a chicken substitute. Pescatarian Catering Dubai is written without red meat or poultry. Shellfish is a separate line: some guests eat prawns, some do not. Eggs and dairy stay on unless you remove them. Dietary notes go into the first menu draft.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Partner chefs source fish for the date, then build around it: grilled sea bass, citrus prawns if shellfish is allowed, rice or grains, and vegetables that actually fill a plate. Raw service belongs on the sushi brief, not assumed here.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        The quote moves with guest count, the menu, and how much of the work happens in the room. For a live counter see{' '}
        <Link to="/sushi-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          sushi catering Dubai
        </Link>
        . For a lighter vegetable-forward table see{' '}
        <Link to="/cuisines-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          healthy catering Dubai
        </Link>
        .
      </p>
    </>
  ),
  formatsH2: 'How a pescatarian night is served',
  formats: [
    {
      Icon: Utensils,
      title: 'Plated Seafood Dinners',
      description: 'Courses with fish as the centre and vegetables as a proper side, not a garnish.',
      link: '/catering-dubai',
    },
    {
      Icon: Fish,
      title: 'Pescatarian Buffets & Stations',
      description: 'Grilled fish, prawns if allowed, rice dishes and salads. Labels for shellfish so guests are not guessing.',
      link: '/buffet-catering-dubai',
    },
    {
      Icon: Leaf,
      title: 'Vegetable-Forward Pescatarian',
      description: 'Plants lead. Fish accents. Useful when half the table is vegetarian and the rest still want seafood.',
      link: '/vegetarian-catering-dubai',
    },
    {
      Icon: PartyPopper,
      title: 'Seafood Canapés & Receptions',
      description: 'Passed bites for standing guests. Shellfish is labelled. Raw fish is only on the brief if you asked for it.',
      link: '/canape-catering-dubai',
    },
    {
      Icon: Home,
      title: 'Villa & Home Pescatarian Dining',
      description: 'Cooking in Palm Jumeirah, Emirates Hills and Dubai Hills homes. We check the kitchen, cook, serve and pack down.',
      link: '/villas-private-residences',
    },
    {
      Icon: Building,
      title: 'Corporate Pescatarian Lunches',
      description: 'Office lunches with a fish line and a vegetarian line, labelled. You stay in the meeting.',
      link: '/corporate-event-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE PESCATARIAN CATERING HELPS',
  useCasesH2: 'Say shellfish yes or no before we shop',
  useCases: [
    {
      title: 'Weddings with mixed diets',
      description:
        'A pescatarian main gives a protein that is not red meat. Vegetarian guests still need their own line. We write both.',
    },
    {
      title: 'Villa dinners',
      description:
        'Grilled fish, sharing sides and a dessert that fits the rest of the brief. The host stays at the table.',
    },
    {
      title: 'Office lunches',
      description:
        'Fish and vegetable plates that hold through a working afternoon. Shellfish is optional, not assumed.',
    },
    {
      title: 'Poolside and waterfront tables',
      description:
        'Lighter fish and salads suit outdoor rooms. Fire and ice still have to match the space. We check that before we quote live grilling.',
    },
  ],
  includedH2: 'What a pescatarian booking actually covers',
  includedItems: [
    { title: 'No red meat or poultry', description: 'The written menu is fish, plants, and eggs or dairy if you allow them.' },
    { title: 'Fish sourced for the date', description: 'Quality from trusted suppliers. The species follows the brief and what is actually available that week.' },
    { title: 'Shellfish as a separate line', description: 'Prawns, crab and similar only if you say yes. Allergies are flagged before shopping.' },
    { title: 'Live grills when the space allows', description: 'Outdoor villa plots can take charcoal. Apartments and yachts often cannot. We check first.' },
    { title: 'Canapés and starters', description: 'Tartare, smoked fish and prawn bites only when they match the brief and the room.' },
    { title: 'Sides that fill a plate', description: 'Grains, pulses, roasted vegetables and salads. Not a lemon wedge and a hope.' },
    { title: 'Dessert on the same brief', description: 'Fruit-forward or dairy-optional sweets. Dairy-free if you list it.' },
    { title: 'Service and pack-down', description: 'Chefs, service staff and a kitchen left handled.' },
  ],
  galleryH2: 'What pescatarian service looks like',
  galleryImages: [
    { src: '/images/pescatarian-catering-dubai-hero.webp', alt: 'Pescatarian catering spread in Dubai' },
    { src: '/menu-appetizer.webp', alt: 'Seafood appetisers for pescatarian catering' },
    { src: '/menu-meat.webp', alt: 'Grilled fish and seafood main dishes' },
    { src: '/menu-dessert.webp', alt: 'Light desserts for pescatarian events' },
    { src: '/service-events.webp', alt: 'Event catering service in Dubai' },
    { src: '/service-luxury-dining.webp', alt: 'Private dining service in Dubai' },
  ],
  faqsH2: 'Pescatarian Catering Dubai: the questions we get before a booking',
  faqs: [
    {
      q: 'What does pescatarian catering include?',
      a: 'Fish, vegetables, grains and legumes. Eggs and dairy unless you remove them. Red meat and poultry stay off. Shellfish only if you say yes.',
    },
    {
      q: 'Can pescatarian dishes sit beside meat dishes?',
      a: 'Yes. We can run a fully pescatarian event or a fish line inside a mixed menu. Cross-contact with meat is managed where the kitchen allows. We do not call a shared kitchen meat-free.',
    },
    {
      q: 'Do you offer live seafood stations?',
      a: 'When the space allows fire and the brief wants it. Grilling and paella stations need outdoor room. Raw bars belong on the sushi brief if that is the format.',
    },
    {
      q: 'How do you source the fish?',
      a: 'From trusted suppliers for the date. We do not print a sustainability certificate we cannot show. Ask, and we tell you what we can actually confirm.',
    },
    {
      q: 'What if a guest is allergic to shellfish?',
      a: 'Fin fish only. Shellfish stays off the whole menu if that is safer. Shared prep still carries residual risk. We say so before you book.',
    },
    {
      q: 'How is pescatarian catering Dubai priced?',
      a: 'By custom quote. Guest count, the fish, and service in the room move the figure. You get an itemised proposal with 5% VAT shown separately. Send the date, headcount and whether shellfish is allowed.',
    },
  ],
  relatedServices: [
    {
      title: 'Sushi Catering Dubai',
      description: 'Live counters, ice time and platters when raw service is the point of the night.',
      image: '/menu-appetizer.webp',
      link: '/sushi-catering-dubai',
    },
    {
      title: 'Healthy Catering Dubai',
      description: 'Lighter menus when the brief is balance, not a pescatarian rule.',
      image: '/service-corporate.webp',
      link: '/cuisines-dubai',
    },
    {
      title: 'Buffet Catering Dubai',
      description: 'Buffet formats that can hold a fish station and a vegetable station on the same table.',
      image: '/service-events.webp',
      link: '/buffet-catering-dubai',
    },
  ],
  ctaH2: 'Send the fish brief with the date',
  ctaP:
    'Say shellfish yes or no, raw yes or no, and any other allergens. We put that on the first menu draft and quote the night as an itemised figure.',
}

export default function PescatarianCatering() {
  return <DietaryCateringPage config={config} />
}
