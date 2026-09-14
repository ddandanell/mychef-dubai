import { Link } from 'react-router'
import { NutOff, Utensils, Salad, Cake, Home } from 'lucide-react'
import DietaryCateringPage from './dietary/DietaryCateringPage'
import type { DietaryPageConfig } from './dietary/DietaryCateringPage'

const config: DietaryPageConfig = {
  slug: 'nut-free-catering-dubai',
  seoTitle: 'Nut Free Catering Dubai | myCHEF',
  metaDescription:
    'Nut Free Catering Dubai with a vetted myCHEF team. Peanuts and tree nuts off the written menu. Service and clear-down so you stay a guest at your table.',
  canonicalPath: '/allergy-safe-catering-dubai',
  hideSiteName: true,
  showTrustSignalStrip: true,
  ogImage: '/images/nut-free-catering-dubai-hero.webp',
  breadcrumbLabel: 'Nut-Free Catering Dubai',
  h1: 'Nut Free Catering Dubai',
  heroSub:
    'Nut Free Catering Dubai treats the whole menu, not one dish. Peanuts, tree nuts, nut oils and garnishes come off the brief. We cook at your address and pack down after.',
  heroImage: '/images/nut-free-catering-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to plan nut-free catering in Dubai (via mychef.ae/nut-free-catering-dubai)",
  eyebrow: 'NUT-FREE CATERING IN DUBAI',
  introH2: 'Peanuts and tree nuts off the whole spread',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        A nut allergy is not a garnish swap. Oils, pestos, baklava, almond flour and hidden pastes all count. For Nut Free Catering Dubai we treat peanuts and tree nuts as a whole-menu brief. Severe allergy is flagged before a chef is matched. Dietary notes go into the first menu draft.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        Partner chefs cook in shared kitchens and in your home. We separate prep where the room allows. We do not call that an allergen-free kitchen. Cross-contact risk remains. Guests who carry emergency medication should still bring it. For other allergens see{' '}
        <Link to="/allergy-safe-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          allergy-safe catering
        </Link>
        . For mixed occasions see{' '}
        <Link to="/events" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          event catering Dubai
        </Link>
        {' '}and our{' '}
        <Link to="/cuisines-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          cuisine collection
        </Link>
        .
      </p>
    </>
  ),
  formatsH2: 'Formats that keep nuts off the pass',
  formats: [
    {
      Icon: Utensils,
      title: 'Nut-Free Plated Dinners',
      description: 'Courses written without peanuts or tree nuts, including oils and garnishes. The chef cooks and plates at your address.',
      link: '/catering-dubai',
    },
    {
      Icon: Salad,
      title: 'Nut-Free Buffets',
      description: 'Labelled dishes and briefed staff. Desserts and salads are checked, not assumed safe because they look plain.',
      link: '/buffet-catering-dubai',
    },
    {
      Icon: NutOff,
      title: 'Nut-Free Canapés',
      description: 'Passed bites without pestos, nut oils or crushed-nut coatings. Bases and garnishes are specified on the draft.',
      link: '/canape-catering-dubai',
    },
    {
      Icon: Cake,
      title: 'Nut-Free Desserts',
      description: 'Cakes and dessert tables without nut flours, pastes or garnishes. Say so if a birthday cake is required.',
      link: '/dessert-table-catering-dubai',
    },
    {
      Icon: Home,
      title: 'Family & Home Events',
      description: 'Birthdays and family tables at home. The nut-free line is the menu, not a separate plate in the kitchen.',
      link: '/private-party-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE NUT-FREE CATERING MATTERS',
  useCasesH2: 'Name the allergy, then we write the shopping list',
  useCases: [
    {
      title: 'Children’s parties',
      description:
        'Nut allergy is common in younger guests. The brief covers the cake, the canapés and the buffet, not only the main. Parents should still bring prescribed medication.',
    },
    {
      title: 'Office lunches',
      description:
        'A labelled nut-free line keeps a working lunch simple. Staff are briefed. You stay in the meeting.',
    },
    {
      title: 'Weddings with allergic guests',
      description:
        'One nut-allergic guest is enough to change the dessert and the mezze. We would rather redesign the spread than discover baklava on the night.',
    },
    {
      title: 'Family tables',
      description:
        'Diwali, Eid and birthdays often mix generations. A nut-free menu lets the table eat together. Seeds and spices carry flavour when nuts are off.',
    },
  ],
  includedH2: 'What a nut-free booking actually covers',
  includedItems: [
    { title: 'No peanuts or tree nuts', description: 'Almonds, cashews, pistachios, walnuts, hazelnuts, pine nuts and peanuts stay off the written menu.' },
    { title: 'Nut-free oils and pastes', description: 'Seed oils and other alternatives. Pesto and nut milks are not slipped in as a shortcut.' },
    { title: 'Clear labelling', description: 'Cards and a briefed team so guests can choose without a speech from the host.' },
    { title: 'Honest prep limits', description: 'We reduce cross-contact where the room allows. Shared kitchens still carry residual risk.' },
    { title: 'Nut-free bakery', description: 'Cakes and pastry without nut flours or garnishes when the brief asks.' },
    { title: 'School-policy notes', description: 'If a children’s event follows a nut-free house rule, put that rule on the enquiry. We write the menu to it.' },
    { title: 'On-site service', description: 'Partner chefs and service staff at your address. Questions at the pass go to the briefed team, not to you.' },
    { title: 'Setup and pack-down', description: 'We bring equipment, serve, and clear. You stay with your guests.' },
  ],
  galleryH2: 'What nut-free service looks like',
  galleryImages: [
    { src: '/menu-appetizer.webp', alt: 'Nut-free appetisers in Dubai' },
    { src: '/menu-canapes.webp', alt: 'Nut-free canapé selection' },
    { src: '/menu-dessert.webp', alt: 'Nut-free dessert display' },
    { src: '/service-catering.webp', alt: 'Nut-free catering set-up at a Dubai event' },
    { src: '/service-villa.webp', alt: 'Villa nut-free dinner styling' },
    { src: '/service-events.webp', alt: 'Nut-free event catering in Dubai' },
  ],
  faqsH2: 'Nut Free Catering Dubai: the questions we get before a booking',
  faqs: [
    {
      q: 'Is the catering completely free of peanuts and tree nuts?',
      a: 'On a nut-free booking, the written menu excludes peanuts and tree nuts, including oils, milks and pastes. Seeds are not nuts. Tell us if sesame or other seeds are also off.',
    },
    {
      q: 'Can you guarantee a nut-free environment?',
      a: 'No. Shared kitchens and home kitchens carry cross-contact risk. We brief, separate where the room allows, and label. For anaphylaxis-level allergy we say what the venue can and cannot support before you book. Carry prescribed medication.',
    },
    {
      q: 'Do you offer nut-free birthday cakes?',
      a: 'Yes, when the brief asks. Fruit, chocolate and seeds can carry decoration. Nut flours and pastes stay off that cake.',
    },
    {
      q: 'Is this suitable for schools and nurseries?',
      a: 'We can write a nut-free menu to a house policy. We are a caterer, not the school. Send the policy with the date and headcount.',
    },
    {
      q: 'Can nut-free also be vegan or gluten-free?',
      a: 'Those are extra lines on the same brief. We combine them when you list them. We do not invent a second diet on the night.',
    },
    {
      q: 'How is nut-free catering Dubai priced?',
      a: 'By custom quote. Guest count, the menu and service in the room move the figure. You get an itemised proposal with 5% VAT shown separately. Send the date, headcount and venue.',
    },
  ],
  relatedServices: [
    {
      title: 'Birthday Catering',
      description: 'Birthday tables at home, including children’s parties that need a nut-free line.',
      image: '/menu-dessert.webp',
      link: '/birthday-catering-dubai',
    },
    {
      title: 'Healthy Catering',
      description: 'Balanced menus that can sit alongside a nut-free brief.',
      image: '/service-events.webp',
      link: '/cuisines-dubai',
    },
  ],
  ctaH2: 'Send the nut brief with the date',
  ctaP:
    'Name peanuts, tree nuts, oils and any seeds that are also off. We put that on the first menu draft and quote the night as an itemised figure.',
}

export default function NutFreeCatering() {
  return <DietaryCateringPage config={config} />
}
