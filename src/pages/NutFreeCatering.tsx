import { Link } from 'react-router'
import { NutOff, Utensils, Salad, Cake, Home, Building } from 'lucide-react'
import DietaryCateringPage from './dietary/DietaryCateringPage'
import type { DietaryPageConfig } from './dietary/DietaryCateringPage'

const config: DietaryPageConfig = {
  slug: 'nut-free-catering-dubai',
  seoTitle: 'Nut-Free Catering Dubai | Allergy-Aware Event Menus',
  metaDescription:
    'Nut-free catering in Dubai for schools, nurseries, family events and corporate functions. Allergy-aware prep, clear labelling and safe, delicious menus.',
  canonicalPath: '/nut-free-catering-dubai',
  ogImage: '/images/nut-free-catering-dubai-hero.webp',
  breadcrumbLabel: 'Nut-Free Catering Dubai',
  h1: 'Nut-Free Catering in Dubai',
  heroSub:
    'Allergy-aware nut-free catering for schools, birthday parties, corporate lunches and family celebrations across Dubai — safe, labelled and delicious.',
  heroImage: '/images/nut-free-catering-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to plan nut-free catering in Dubai (via mychef.ae/nut-free-catering-dubai)",
  eyebrow: 'NUT-FREE CATERING IN DUBAI',
  introH2: 'Safe, Delicious Catering Without Nuts',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Nut allergies demand more than a simple ingredient swap — they require clear communication, controlled prep and service processes that reduce risk. Our nut-free catering is designed for hosts who need peace of mind, whether they are planning a school event, a children’s party, a corporate lunch or a family celebration. Every menu is built without tree nuts and peanuts, with staff trained to serve and answer guest questions confidently.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        We know that nut-free food still needs to feel exciting. Our chefs use seeds, herbs, spices, crunchy vegetables and other ingredients to create texture and flavour without ever opening a nut packet. Learn more about our{' '}
        <Link to="/school-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          school catering Dubai
        </Link>{' '}
        programmes, or explore our wider{' '}
        <Link to="/event-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          event catering Dubai
        </Link>{' '}
        options for private celebrations.
      </p>
    </>
  ),
  formatsH2: 'Nut-Free Formats for Every Setting',
  formats: [
    {
      Icon: Utensils,
      title: 'Nut-Free Plated Dinners',
      description: 'Refined plated menus for weddings, anniversaries and private dinners where every course is guaranteed nut-free from prep to plate.',
      link: '/catering-dubai',
    },
    {
      Icon: Salad,
      title: 'Nut-Free Buffets',
      description: 'Clearly labelled buffet spreads with separate serving protocols, ideal for mixed groups and larger celebrations.',
      link: '/buffet-catering-dubai',
    },
    {
      Icon: NutOff,
      title: 'Nut-Free Canapés',
      description: 'Elegant bite-sized options for receptions and cocktail parties without nuts, pestos or hidden nut oils.',
      link: '/canape-catering-dubai',
    },
    {
      Icon: Cake,
      title: 'Nut-Free Desserts',
      description: 'Celebration cakes, cupcakes and dessert tables baked in a nut-aware environment with beautiful presentation.',
      link: '/dessert-table-catering-dubai',
    },
    {
      Icon: Home,
      title: 'Family & Home Events',
      description: 'Safe nut-free dining for birthdays, Eid, Diwali and family gatherings at home across Dubai.',
      link: '/party-catering-dubai',
    },
    {
      Icon: Building,
      title: 'School & Nursery Catering',
      description: 'Nut-free meal programmes, lunch boxes and event spreads designed to meet common school allergy policies.',
      link: '/nursery-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE NUT-FREE CATERING MATTERS',
  useCasesH2: 'Built for Safety and Confidence',
  useCases: [
    {
      title: 'Children’s Parties & Schools',
      description:
        'Nut allergies are especially common among children. Our nut-free menus give parents, teachers and hosts confidence that every child can eat safely.',
    },
    {
      title: 'Corporate Inclusive Dining',
      description:
        'Offices and conference venues increasingly need allergy-aware catering. Nut-free options with clear labelling keep team lunches simple and safe.',
    },
    {
      title: 'Weddings with Allergic Guests',
      description:
        'Wedding guest lists often include at least one nut allergy. A dedicated nut-free menu or event removes stress for the guest and the host.',
    },
    {
      title: 'Multi-Generational Family Events',
      description:
        'From Diwali gatherings to Eid lunches, nut-free catering means grandparents, children and everyone in between can share the same spread safely.',
    },
  ],
  includedH2: "What's Included in Our Nut-Free Catering",
  includedItems: [
    { title: 'No Peanuts or Tree Nuts', description: 'Every dish is prepared without peanuts, almonds, cashews, pistachios, walnuts or other tree nuts.' },
    { title: 'Nut-Free Oils & Ingredients', description: 'We use seed oils and other nut-free alternatives so flavour and texture are never compromised.' },
    { title: 'Clear Labelling', description: 'Menu cards, buffet tags and staff are briefed so guests can identify safe choices instantly.' },
    { title: 'Allergy-Aware Prep', description: 'Preparation and service workflows are planned to reduce cross-contact risk.' },
    { title: 'Nut-Free Bakery', description: 'Cakes, pastries and desserts made without nut flours, pastes or garnishes.' },
    { title: 'School-Policy Friendly', description: 'Menus designed to align with common nursery and school nut-free policies.' },
    { title: 'On-Site Service', description: 'Trained service staff manage plating, serving and guest questions throughout your event.' },
    { title: 'Full Setup & Pack-Down', description: 'We handle delivery, setup, service and clearance at your chosen venue.' },
  ],
  galleryH2: 'A Taste of Our Nut-Free Catering',
  galleryImages: [
    { src: '/menu-appetizer.webp', alt: 'Nut-free appetisers in Dubai' },
    { src: '/menu-canapes.webp', alt: 'Nut-free canapé selection' },
    { src: '/menu-dessert.webp', alt: 'Nut-free dessert display' },
    { src: '/service-catering.webp', alt: 'Nut-free catering set-up at a Dubai event' },
    { src: '/service-villa.webp', alt: 'Villa nut-free dinner styling' },
    { src: '/service-events.webp', alt: 'Nut-free event catering in Dubai' },
  ],
  faqsH2: 'Nut-Free Catering Questions',
  faqs: [
    {
      q: 'Is the catering completely free of peanuts and tree nuts?',
      a: 'Yes. Our nut-free menus are prepared without peanuts and all tree nuts, including almonds, cashews, pistachios, walnuts, hazelnuts and pine nuts. We also avoid nut oils, nut milks and nut-based pastes.',
    },
    {
      q: 'Can you guarantee a nut-free environment?',
      a: 'We follow strict prep and service protocols to minimise cross-contact, and we communicate clearly about ingredients. For guests with severe anaphylaxis, we recommend discussing the event format with us directly so we can advise on the safest approach.',
    },
    {
      q: 'Do you offer nut-free birthday cakes?',
      a: 'Yes. We bake celebration cakes, cupcakes and dessert tables without nuts, using seeds, fruit, chocolate and other safe ingredients for decoration and texture.',
    },
    {
      q: 'Is nut-free catering suitable for schools and nurseries?',
      a: 'Absolutely. We design nut-free menus that align with common school allergy policies, using child-friendly formats and clear labelling.',
    },
    {
      q: 'Can nut-free catering also be vegan or gluten-free?',
      a: 'We can combine multiple dietary requirements in one menu. Just share the full list of allergies and preferences during planning and we will design accordingly.',
    },
    {
      q: 'How far in advance should I book nut-free catering?',
      a: 'Two to four weeks is ideal, especially for school programmes or large events. This gives us time to source verified nut-free ingredients and brief the service team thoroughly.',
    },
  ],
  relatedServices: [
    {
      title: 'School Catering',
      description: 'Nut-aware meal programmes and event catering for Dubai schools.',
      image: '/service-corporate.webp',
      link: '/school-catering-dubai',
    },
    {
      title: 'Birthday Catering',
      description: 'Safe, fun catering for children’s and adult birthday celebrations.',
      image: '/menu-dessert.webp',
      link: '/birthday-catering-dubai',
    },
    {
      title: 'Healthy Catering',
      description: 'Balanced, inclusive menus for wellness-focused events.',
      image: '/service-events.webp',
      link: '/healthy-catering-dubai',
    },
  ],
  ctaH2: 'Plan a Safe, Nut-Free Event',
  ctaP:
    'Tell us about your guests and venue. We will design an allergy-aware, nut-free menu that everyone can enjoy with complete confidence.',
}

export default function NutFreeCatering() {
  return <DietaryCateringPage config={config} />
}
