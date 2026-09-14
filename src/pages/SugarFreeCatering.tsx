import { Link } from 'react-router'
import { Apple, Heart, Building, Home, Coffee, Utensils } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'sugar-free-catering-dubai',
  seoTitle: 'Sugar Free Catering Dubai | myCHEF',
  metaDescription:
    'Sugar Free Catering Dubai with a vetted myCHEF team. Reduced-sugar menus written to your brief. Service and clear-down so you stay a guest at your table.',
  canonicalPath: '/allergy-safe-catering-dubai',
  showTrustSignalStrip: true,
  ogImage: '/images/healthy-catering-dubai-hero.webp',
  breadcrumbLabel: 'Sugar-Free Catering Dubai',
  h1: 'Sugar Free Catering Dubai',
  heroSub:
    'Sugar Free Catering Dubai means refined sugar off the written menu, including sauces and desserts. We cook at your address. You stay with your guests.',
  heroImage: '/images/healthy-catering-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to arrange sugar-free/diabetic-friendly catering in Dubai (via mychef.ae/sugar-free-catering-dubai)",
  eyebrow: 'DIABETIC-FRIENDLY CATERING IN DUBAI',
  introH2: 'Sugar off the sauces, not only off the cake',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Zero-sugar and reduced-sugar are different briefs. Diabetic-friendly is a third. Tell us which you need, and whether fruit, honey and dessert even belong on the table. We are not your clinician. We cook to the list you send. Dietary notes go into the first menu draft.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Flavour comes from spice, citrus, dairy where it is allowed, and ripe fruit used as fruit, not as a syrup poured over everything. Alternative sweeteners appear only when they improve a dessert you actually asked for. Hidden sugar in marinades is the usual miss. We write those sauces on the draft.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        The quote moves with guest count, the menu, and how much of the work happens in the room. Pair this with{' '}
        <Link to="/cuisines-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          healthy catering Dubai
        </Link>
        {' '}or{' '}
        <Link to="/cuisines-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          keto catering Dubai
        </Link>
        {' '}when carbohydrates are also limited. Combine with{' '}
        <Link to="/allergy-safe-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          gluten-free catering Dubai
        </Link>
        {' '}when wheat is a separate line.
      </p>
    </>
  ),
  formatsH2: 'How a reduced-sugar night is served',
  formats: [
    {
      Icon: Utensils,
      title: 'Plated Sugar-Free Dinners',
      description: 'Courses with sauces written without added refined sugar. Dessert is designed as the dessert, or omitted if the brief says so.',
      link: '/catering-dubai',
    },
    {
      Icon: Apple,
      title: 'Wellness-Focused Buffets',
      description: 'Proteins, salads, grains if they are allowed, and fruit used as fruit. Labels so guests are not hunting for the sugar-free dish.',
      link: '/buffet-catering-dubai',
    },
    {
      Icon: Coffee,
      title: 'Corporate Wellness Lunches',
      description: 'Office lunches that do not dump a tray of sweet sauces on a working afternoon. Packed or buffet, labelled.',
      link: '/office-catering-dubai',
    },
    {
      Icon: Home,
      title: 'Villa & Private Dinners',
      description: 'At-home dining in Emirates Hills, Palm Jumeirah and similar homes. We cook, serve and pack down.',
      link: '/villas-private-residences',
    },
    {
      Icon: Building,
      title: 'Healthcare & Clinic Events',
      description: 'If a clinic lunch needs a reduced-sugar line, send the guidance with the headcount. We cook to that list.',
      link: '/corporate-event-catering-dubai',
    },
    {
      Icon: Heart,
      title: 'Celebration Dessert Tables',
      description: 'Fruit, reduced-sugar cakes and labelled treats so a diabetic guest is not left watching the cake cut.',
      link: '/dessert-table-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE SUGAR-FREE CATERING HELPS',
  useCasesH2: 'Name the rule, then we write dessert',
  useCases: [
    {
      title: 'Diabetic guests',
      description:
        'Send what they actually eat: carbohydrate cap, fruit yes or no, dessert yes or no. We write the menu to that. We do not issue medical advice.',
    },
    {
      title: 'Office wellness days',
      description:
        'A reduced-sugar lunch is useful when the afternoon still has work in it. The sweet tray is not the default.',
    },
    {
      title: 'Fitness groups',
      description:
        'If the programme already limits sugar, the catering should match it. Put the rule on the enquiry, not in a speech on the day.',
    },
    {
      title: 'Family celebrations',
      description:
        'Birthdays and Eid often mix generations. A labelled reduced-sugar dessert lets older relatives eat with the table.',
    },
  ],
  includedH2: 'What a sugar-free booking actually covers',
  includedItems: [
    { title: 'Reduced-sugar menu design', description: 'Refined sugar stays off sauces, dressings and marinades unless you ask for an exception in writing.' },
    { title: 'Diabetic-friendly options', description: 'When the brief asks. Carbohydrate choices follow your list, not a slogan.' },
    { title: 'Desserts with a rule', description: 'Fruit, reduced-sugar bakes, or no dessert. Alternative sweeteners only where they earn their place.' },
    { title: 'No hidden sugars in the savoury line', description: 'Ketchup-style glazes and syrup marinades are rewritten or removed.' },
    { title: 'Clear labelling', description: 'Guests can see what is sugar-free, reduced-sugar or naturally sweetened.' },
    { title: 'Other diets on the same brief', description: 'Gluten-free, dairy-free or keto can sit alongside if you list them.' },
    { title: 'On-site chefs and service', description: 'Partner chefs cook at your address. Service staff run the room.' },
    { title: 'Setup and pack-down', description: 'Equipment in, service, then the space left handled.' },
  ],
  galleryH2: 'What reduced-sugar service looks like',
  galleryImages: [
    { src: '/images/healthy-catering-dubai-hero.webp', alt: 'Sugar-free catering spread in Dubai' },
    { src: '/menu-appetizer.webp', alt: 'Reduced-sugar appetisers and salads' },
    { src: '/menu-canapes.webp', alt: 'Naturally sweetened canapé selection' },
    { src: '/menu-dessert.webp', alt: 'Sugar-free dessert display' },
    { src: '/service-corporate.webp', alt: 'Corporate wellness lunch setup' },
    { src: '/service-villa.webp', alt: 'Villa sugar-free dinner styling' },
  ],
  faqsH2: 'Sugar Free Catering Dubai: the questions we get before a booking',
  faqs: [
    {
      q: 'Is this suitable for diabetic guests?',
      a: 'We can write a reduced-sugar or carbohydrate-aware menu from the list you send. We are not a clinic. Share any guest guidance with the enquiry.',
    },
    {
      q: 'Do you use artificial sweeteners?',
      a: 'We prefer fruit, spice and dairy where they are allowed. Alternative sweeteners appear when a dessert needs them and you have agreed that on the draft.',
    },
    {
      q: 'Can the entire menu be sugar-free?',
      a: 'Yes, if that is the brief. Savoury and sweet courses are written together so no guest is left with a different plate.',
    },
    {
      q: 'Are sugar-free menus also gluten-free or dairy-free?',
      a: 'Only if you list those needs. Many reduced-sugar dishes happen to be gluten-free. That is not a guarantee of coeliac-safe prep.',
    },
    {
      q: 'What desserts can you offer without refined sugar?',
      a: 'Fruit, dark chocolate in agreed amounts, and bakes using alternative sweeteners when requested. The dessert is designed, or it is omitted.',
    },
    {
      q: 'How is sugar-free catering Dubai priced?',
      a: 'By custom quote. Guest count, the menu and service in the room move the figure. You get an itemised proposal with 5% VAT shown separately. Send the date, headcount and the sugar rule.',
    },
  ],
  relatedServices: [
    {
      title: 'Healthy Catering Dubai',
      description: 'Balanced menus when the brief is lighter eating, not a sugar rule.',
      image: '/service-catering.webp',
      link: '/cuisines-dubai',
    },
    {
      title: 'Keto Catering Dubai',
      description: 'Low-carb menus when carbohydrates as a whole are limited, not only sugar.',
      image: '/service-events.webp',
      link: '/cuisines-dubai',
    },
    {
      title: 'Gluten-Free Catering Dubai',
      description: 'Wheat, barley and rye off the plate. Combine with reduced sugar when both apply.',
      image: '/menu-canapes.webp',
      link: '/allergy-safe-catering-dubai',
    },
    {
      title: 'FODMAP-Friendly Catering Dubai',
      description: 'Onion, garlic and other FODMAP triggers off the build when that is a separate line.',
      image: '/images/healthy-catering-dubai-hero.webp',
      link: '/allergy-safe-catering-dubai',
    },
  ],
  ctaH2: 'Send the sugar rule with the date',
  ctaP:
    'Say zero, reduced, or diabetic-aware, and whether dessert is on the table. We put that on the first menu draft and quote the night as an itemised figure.',
}

export default function SugarFreeCatering() {
  return <ServiceLandingPage config={config} />
}
