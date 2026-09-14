import { Link } from 'react-router'
import { Flame, Utensils, Salad, Beef, Home, Building } from 'lucide-react'
import DietaryCateringPage from './dietary/DietaryCateringPage'
import type { DietaryPageConfig } from './dietary/DietaryCateringPage'

const config: DietaryPageConfig = {
  slug: 'keto-catering-dubai',
  seoTitle: 'Keto Catering Dubai | myCHEF',
  metaDescription:
    'Keto Catering Dubai with a vetted myCHEF team. Low-carb menus written to your brief. Service and clear-down so you stay a guest at your table.',
  canonicalPath: '/cuisines-dubai',
  showTrustSignalStrip: true,
  ogImage: '/images/keto-catering-dubai-hero.webp',
  breadcrumbLabel: 'Keto & Low-Carb Catering Dubai',
  h1: 'Keto Catering Dubai',
  heroSub:
    'Keto Catering Dubai is a carbohydrate cap on a written menu. Proteins, fats and vegetables fill the plate. Bread, pasta and sugar sauces stay off unless you say otherwise.',
  heroImage: '/images/keto-catering-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to plan keto/low-carb catering in Dubai (via mychef.ae/keto-catering-dubai)",
  eyebrow: 'LOW-CARB CATERING IN DUBAI',
  introH2: 'A carb cap, written before shopping',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Keto and low-carb are not the same brief. Keto is stricter. Low-carb may still allow some rice or fruit. Send the rule this table is following. We are not your clinician. We cook to the cap you name. Dietary notes go into the first menu draft.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        Partner chefs build plates from meat, poultry, fish, eggs, cheese where dairy is allowed, and non-starchy vegetables. Sauces are written without hidden sugar. Keto is not automatically gluten-free. Shared kitchens still carry cross-contact risk if coeliac is also on the brief. See{' '}
        <Link to="/cuisines-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          healthy catering Dubai
        </Link>
        {' '}for broader balance, or{' '}
        <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          private chef Dubai
        </Link>
        {' '}when the same household wants this as a standing rhythm rather than one night.
      </p>
    </>
  ),
  formatsH2: 'How a keto night is served',
  formats: [
    {
      Icon: Utensils,
      title: 'Plated Keto Dinners',
      description: 'Courses with protein-forward mains and vegetable sides. Bread, pasta and starchy fillers stay off the draft.',
      link: '/catering-dubai',
    },
    {
      Icon: Salad,
      title: 'Low-Carb Buffets',
      description: 'Grills, seafood, salads and roasted vegetables. Labels so guests are not hunting for the low-carb tray.',
      link: '/buffet-catering-dubai',
    },
    {
      Icon: Beef,
      title: 'Protein-Forward BBQ',
      description: 'Live grilling with marinades written without sugar. Apartment balconies and yachts have fire limits. We check the space first.',
      link: '/bbq-catering-dubai',
    },
    {
      Icon: Flame,
      title: 'Keto Canapés',
      description: 'Passed bites without pastry cases. Cheese, seafood and vegetable bases when they fit the cap.',
      link: '/canape-catering-dubai',
    },
    {
      Icon: Home,
      title: 'Villa Wellness Dinners',
      description: 'At-home dinners where the host wants the table on-plan. We cook, serve and pack down.',
      link: '/villas-private-residences',
    },
    {
      Icon: Building,
      title: 'Corporate Wellness Lunches',
      description: 'Office lunches that do not dump a bread basket on a working afternoon. Packed or buffet, labelled.',
      link: '/corporate',
    },
  ],
  useCasesEyebrow: 'WHERE KETO CATERING FITS',
  useCasesH2: 'Name the cap, then we write the plate',
  useCases: [
    {
      title: 'Fitness and retreat days',
      description:
        'If the programme already limits carbohydrates, the catering should match it. Put the cap on the enquiry.',
    },
    {
      title: 'Office wellness days',
      description:
        'A low-carb lunch is useful when the afternoon still has work in it. The sandwich platter is not the default.',
    },
    {
      title: 'Private celebrations',
      description:
        'Birthdays and family dinners can stay low-carb without looking like a clinic tray. Premium proteins and a designed dessert, or no dessert.',
    },
    {
      title: 'Guests already on a plan',
      description:
        'One guest on keto should not be left picking around a pasta buffet. Either convert the table or run a labelled line.',
    },
  ],
  includedH2: 'What a keto booking actually covers',
  includedItems: [
    { title: 'Low-carb menu design', description: 'Proteins, fats and non-starchy vegetables. Bread, pasta, rice and potatoes stay off unless you loosen the cap.' },
    { title: 'Sauces without added sugar', description: 'Marinades and dressings are rewritten. We do not hide syrup in a glaze.' },
    { title: 'Proteins as the centre', description: 'Meat, poultry, seafood and eggs as the plate, not a garnish on starch.' },
    { title: 'Vegetable sides', description: 'Roasted, grilled and raw vegetables that fill the table without filling the carb budget.' },
    { title: 'Low-carb desserts if you want them', description: 'Alternative sweeteners only when you ask for dessert. Otherwise we stop after the main.' },
    { title: 'Macro notes on request', description: 'A general view of the approach, not a clinical meal plan. Detailed macros only if you ask in the brief.' },
    { title: 'On-site cooking and service', description: 'Partner chefs cook at your address. Service staff run the room.' },
    { title: 'Other diets on the same brief', description: 'Gluten-free, dairy-free or nut-free can sit alongside if you list them. They are not automatic.' },
  ],
  galleryH2: 'What keto service looks like',
  galleryImages: [
    { src: '/menu-appetizer.webp', alt: 'Low-carb appetisers in Dubai' },
    { src: '/menu-canapes.webp', alt: 'Keto-friendly canapé selection' },
    { src: '/menu-dessert.webp', alt: 'Low-carb dessert display' },
    { src: '/service-catering.webp', alt: 'Keto catering set-up at a Dubai event' },
    { src: '/service-villa.webp', alt: 'Villa low-carb dinner styling' },
    { src: '/service-events.webp', alt: 'Low-carb event catering in Dubai' },
  ],
  faqsH2: 'Keto Catering Dubai: the questions we get before a booking',
  faqs: [
    {
      q: 'What does keto catering include?',
      a: 'High-protein plates, fats and low-carbohydrate vegetables. Bread, pasta, rice, potatoes and sugary sauces stay off. Dessert is designed to the cap, or omitted.',
    },
    {
      q: 'Can you cater a fully keto event?',
      a: 'Yes, when the brief says the whole table follows it. Mixed tables can run a labelled keto line beside other dishes.',
    },
    {
      q: 'Do you provide macro information?',
      a: 'We can outline the approach. Detailed macros per dish are extra work and only if you ask. We are not a dietitian.',
    },
    {
      q: 'Are keto menus also gluten-free?',
      a: 'They are often low in gluten. They are not automatically coeliac-safe. Shared kitchens carry cross-contact risk. Say if both apply.',
    },
    {
      q: 'What desserts work on keto?',
      a: 'Dark chocolate, berries, cream and alternative sweeteners when you want a sweet course. Nut-based desserts only if nuts are allowed.',
    },
    {
      q: 'How is keto catering Dubai priced?',
      a: 'By custom quote. Guest count, the menu and service in the room move the figure. You get an itemised proposal with 5% VAT shown separately. Send the date, headcount and the carbohydrate cap.',
    },
  ],
  relatedServices: [
    {
      title: 'Healthy Catering',
      description: 'Balanced menus when the brief is lighter eating, not a strict carb cap.',
      image: '/service-corporate.webp',
      link: '/cuisines-dubai',
    },
    {
      title: 'Sugar-Free Catering',
      description: 'Reduced-sugar menus when sugar is the rule, not all carbohydrates.',
      image: '/images/healthy-catering-dubai-hero.webp',
      link: '/allergy-safe-catering-dubai',
    },
    {
      title: 'BBQ Catering',
      description: 'Live grilling when the space allows fire. Protein-forward, if the marinade is written without sugar.',
      image: '/service-events.webp',
      link: '/bbq-catering-dubai',
    },
    {
      title: 'Private Chef Dubai',
      description: 'A standing household chef when keto is how this house eats most weeks, not one night.',
      image: '/service-villa.webp',
      link: '/private-chef-dubai',
    },
  ],
  ctaH2: 'Send the carb cap with the date',
  ctaP:
    'Say keto or low-carb, dairy yes or no, dessert yes or no. We put that on the first menu draft and quote the night as an itemised figure.',
}

export default function KetoCatering() {
  return <DietaryCateringPage config={config} />
}
