import { Link } from 'react-router'
import { Leaf, Utensils, Home, Building, Coffee, Heart } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'fodmap-catering-dubai',
  seoTitle: 'Fodmap Catering Dubai | myCHEF',
  metaDescription:
    'Fodmap Catering Dubai with a vetted myCHEF team. Onion, garlic and other high-FODMAP ingredients off the written menu. You stay a guest at your table.',
  canonicalPath: '/allergy-safe-catering-dubai',
  showTrustSignalStrip: true,
  ogImage: '/images/healthy-catering-dubai-hero.webp',
  breadcrumbLabel: 'FODMAP-Friendly Catering Dubai',
  h1: 'Fodmap Catering Dubai',
  heroSub:
    'Fodmap Catering Dubai is a written list of trigger foods, not a bland plate. Onion, garlic and other high-FODMAP items come off the build. We cook at your address.',
  heroImage: '/images/healthy-catering-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to arrange low-FODMAP catering in Dubai (via mychef.ae/fodmap-catering-dubai)",
  eyebrow: 'LOW-FODMAP CATERING IN DUBAI',
  introH2: 'Onion and garlic off, flavour still on the plate',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Low-FODMAP is a chef brief, not a diagnosis. We are not your clinician. Send the foods this guest is avoiding in this phase: onion, garlic, wheat, some dairy, certain fruit. We write the menu from that list. Dietary notes go into the first menu draft.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Depth comes from herbs, citrus, ginger, spring-onion greens, tolerated spices, good protein and low-FODMAP vegetables. Low-FODMAP is not the same as gluten-free. Many dishes overlap. The rules differ. Partner kitchens are shared. We reduce cross-contact where the room allows. We do not call that an allergen-free kitchen.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        The quote moves with guest count, the menu, and how much of the work happens in the room. See{' '}
        <Link to="/cuisines-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          healthy catering Dubai
        </Link>
        {' '}for broader balance,{' '}
        <Link to="/allergy-safe-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          gluten-free catering Dubai
        </Link>
        {' '}when wheat is also off, and{' '}
        <Link to="/allergy-safe-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          sugar-free catering Dubai
        </Link>
        {' '}when refined sugar is a separate line.
      </p>
    </>
  ),
  formatsH2: 'How a low-FODMAP night is served',
  formats: [
    {
      Icon: Utensils,
      title: 'Plated Low-FODMAP Dinners',
      description: 'Courses built from the tolerated list. The whole table can eat the same meal, or only named guests follow the stricter line.',
      link: '/catering-dubai',
    },
    {
      Icon: Leaf,
      title: 'Wellness Retreat Catering',
      description: 'Multi-day breakfasts, lunches and dinners written to the same brief so the cook does not reset every morning.',
      link: '/cuisines-dubai',
    },
    {
      Icon: Home,
      title: 'Private Villa Dining',
      description: 'Family dinners at home. We check the kitchen, cook, serve and pack down. You stay with your guests.',
      link: '/villas-private-residences',
    },
    {
      Icon: Building,
      title: 'Corporate Wellness Events',
      description: 'Office lunches with a gentle line labelled on the buffet. You stay in the room. We handle the pass.',
      link: '/corporate-event-catering-dubai',
    },
    {
      Icon: Coffee,
      title: 'Low-FODMAP Brunches',
      description: 'Eggs, oats, rice dishes, tolerated fruit and herb drinks. Wheat bread is not assumed.',
      link: '/brunch-catering-dubai',
    },
    {
      Icon: Heart,
      title: 'IBS-Friendly Celebration Menus',
      description: 'Birthdays and family tables where one guest should not be left with a side salad while everyone else eats.',
      link: '/private-party-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE FODMAP-FRIENDLY CATERING HELPS',
  useCasesH2: 'Send the food list, not a diet name',
  useCases: [
    {
      title: 'Guests managing IBS',
      description:
        'The menu follows the foods they currently tolerate. Elimination and reintroduction are different phases. Name the phase.',
    },
    {
      title: 'Retreat days',
      description:
        'If the programme asks for low-FODMAP meals, we write breakfast through dinner to that list. We do not add a medical claim on top.',
    },
    {
      title: 'Family gatherings',
      description:
        'One relative on a low-FODMAP plan should still sit at the same table. We either convert the whole menu or run a labelled line.',
    },
    {
      title: 'Quieter celebrations',
      description:
        'Gentle menus for recovery gatherings work when onion and garlic are off the stock, not scraped off a finished sauce.',
    },
  ],
  includedH2: 'What a FODMAP booking actually covers',
  includedItems: [
    { title: 'Menu from a tolerated list', description: 'You send the foods. We write dishes around them. We do not guess a standard low-FODMAP template.' },
    { title: 'Onion- and garlic-free cooking', description: 'High-FODMAP alliums stay off. Herbs, citrus, ginger and infused oils carry savoury depth.' },
    { title: 'Clear labelling', description: 'Guests can see what is on the plate. Staff are briefed from the same list.' },
    { title: 'Cross-contact awareness', description: 'Shared kitchens carry risk. We separate where the room allows and we say when it does not.' },
    { title: 'Tolerated carbohydrates', description: 'Rice, quinoa, oats and potatoes are the usual bases. Wheat is not assumed.' },
    { title: 'Other diets on the same brief', description: 'Gluten-free, dairy-free or sugar-free can sit alongside if you list them. They are not automatic.' },
    { title: 'On-site chefs and service', description: 'Partner chefs cook at your address. Service staff run the room. Pack-down is included.' },
    { title: 'Setup and pack-down', description: 'Equipment in, service, then the kitchen left handled.' },
  ],
  galleryH2: 'What FODMAP-friendly service looks like',
  galleryImages: [
    { src: '/images/healthy-catering-dubai-hero.webp', alt: 'FODMAP-friendly catering spread in Dubai' },
    { src: '/menu-appetizer.webp', alt: 'Low-FODMAP appetisers and salads' },
    { src: '/menu-canapes.webp', alt: 'Gentle canapé selection without onion or garlic' },
    { src: '/menu-dessert.webp', alt: 'Low-FODMAP fruit and dessert display' },
    { src: '/service-corporate.webp', alt: 'Corporate wellness lunch setup' },
    { src: '/service-villa.webp', alt: 'Villa low-FODMAP dinner styling' },
  ],
  faqsH2: 'Fodmap Catering Dubai: the questions we get before a booking',
  faqs: [
    {
      q: 'What does FODMAP-friendly catering mean here?',
      a: 'It means the written menu avoids or limits the high-FODMAP foods you name, commonly onion, garlic, some wheat products, some dairy and specific fruit. It is not a medical service.',
    },
    {
      q: 'Can you cook completely onion- and garlic-free?',
      a: 'Yes, when the brief says so. We replace that savoury depth with herbs, citrus, ginger, spring-onion greens and tolerated spices, not with a powder that still contains onion.',
    },
    {
      q: 'Is low-FODMAP the same as gluten-free?',
      a: 'No. Many low-FODMAP dishes happen to be gluten-free. The two lists are not identical. We can combine them if you ask.',
    },
    {
      q: 'Can you follow elimination or reintroduction?',
      a: 'Send the foods that are currently off. We cook to that list. We do not decide which phase a guest is in.',
    },
    {
      q: 'What proteins and starches do you use?',
      a: 'Poultry, fish, eggs, firm tofu, rice, quinoa, oats and potatoes are the usual base. Legumes only in the portions you confirm as tolerated.',
    },
    {
      q: 'How is fodmap catering Dubai priced?',
      a: 'By custom quote. Guest count, the menu and service in the room move the figure. You get an itemised proposal with 5% VAT shown separately. Send the date, headcount and the food list.',
    },
  ],
  relatedServices: [
    {
      title: 'Healthy Catering Dubai',
      description: 'Balanced menus when the brief is lighter eating, not a FODMAP list.',
      image: '/service-catering.webp',
      link: '/cuisines-dubai',
    },
    {
      title: 'Gluten-Free Catering Dubai',
      description: 'Wheat, barley and rye off the plate. Combine with low-FODMAP when both apply.',
      image: '/images/gluten-free-catering-dubai-hero.webp',
      link: '/allergy-safe-catering-dubai',
    },
    {
      title: 'Sugar-Free Catering Dubai',
      description: 'Reduced-sugar menus when blood sugar is a separate line on the same brief.',
      image: '/images/healthy-catering-dubai-hero.webp',
      link: '/allergy-safe-catering-dubai',
    },
  ],
  ctaH2: 'Send the food list with the date',
  ctaP:
    'Name onion, garlic and every other trigger that is off this month. We put that on the first menu draft and quote the night as an itemised figure.',
}

export default function FodmapCatering() {
  return <ServiceLandingPage config={config} />
}
