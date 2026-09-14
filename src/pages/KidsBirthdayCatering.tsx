import { Link } from 'react-router'
import { PartyPopper, Utensils, Pizza, IceCream, Home, Building } from 'lucide-react'
import OccasionCateringPage from './occasion/OccasionCateringPage'
import type { OccasionPageConfig } from './occasion/OccasionCateringPage'

const config: OccasionPageConfig = {
  slug: 'kids-birthday-catering-dubai',
  seoTitle: "Kids Birthday Catering Dubai | Safe, Fun Party Food | myCHEF",
  metaDescription:
    'Kids birthday catering Dubai: child-sized menus, allergy notes in the brief, stations if the party needs them, and an adult table. Setup and pack-down included. Send the age, date and guest count.',
  canonicalPath: '/birthday-catering-dubai',
  ogImage: '/images/kids-birthday-catering-dubai-hero.webp',
  breadcrumbLabel: 'Kids Birthday Catering Dubai',
  h1: 'Kids Birthday Catering Dubai: Safe, Fun Party Food',
  heroSub:
    'Kids birthday catering Dubai for villa gardens, apartments and venues. Child-sized menus, allergy notes in the brief, a station if the party needs one, and an adult table so you are not eating leftover pizza. Setup, service and pack-down included. Send the age, date, guest count and any allergies.',
  heroImage: '/images/kids-birthday-catering-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to plan kids birthday catering in Dubai (via mychef.ae/kids-birthday-catering-dubai)",
  hideSiteName: true,
  primaryCta: 'Plan this kids birthday',
  eyebrow: 'KIDS PARTY CATERING IN DUBAI',
  introH2: 'Kids birthday catering Dubai, without you running the kitchen',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        A children’s party in Dubai is a mixed room: small appetites, a cake moment, and adults who still need a proper plate. Kids birthday catering is built around that, not around a restaurant kids’ menu. Food children will actually eat, allergy notes in the brief before anyone cooks, and a team that serves and packs down so you stay with the party.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        Villa gardens, apartments and venues all work. Nut-free, gluten-free and dairy-free plates are designed in when you flag them, with clear labelling. Adult guests get a grazing table or canapés at the same time, not leftover pizza. Adult and milestone birthdays sit on{' '}
        <Link to="/birthday-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          birthday catering Dubai
        </Link>
        . Allergy-led briefs sit on{' '}
        <Link to="/allergy-safe-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          allergy-safe catering
        </Link>
        . Fixed-price bands are on{' '}
        <Link to="/catering-packages-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          catering packages
        </Link>.
      </p>
    </>
  ),
  formatsH2: 'How the food is served',
  formats: [
    {
      Icon: Utensils,
      title: 'Plated Kids’ Menus',
      description: 'Plated meals with familiar flavours and portions a child can finish. Colours and shapes follow the brief, not a cartoon plate for its own sake.',
      link: '/catering-dubai',
    },
    {
      Icon: Pizza,
      title: 'Pizza & Pasta Stations',
      description: 'Live pizza or pasta stations where children choose toppings. Useful when the party should move rather than sit.',
      link: '/live-cooking-stations-dubai',
    },
    {
      Icon: IceCream,
      title: 'Dessert & Sweet Tables',
      description: 'Cupcakes, cake pops, fruit skewers and a dessert table matched to the theme. Cake timing sits in the run-sheet, not as an afterthought.',
      link: '/dessert-table-catering-dubai',
    },
    {
      Icon: PartyPopper,
      title: 'Themed Party Buffets',
      description: 'A buffet for mixed ages, styled to the theme if you want it. Parents and children eat from the same service, with portions labelled.',
      link: '/buffet-catering-dubai',
    },
    {
      Icon: Home,
      title: 'Villa & Home Parties',
      description: 'The team works in your home or villa: setup, service and pack-down. You stay with the children.',
      link: '/villas-private-residences',
    },
    {
      Icon: Building,
      title: 'Venue & Club Parties',
      description: 'Food and service at a party venue, beach club or entertainment centre, planned around their kitchen rules and load-in.',
      link: '/events',
    },
  ],
  useCasesEyebrow: 'WHERE KIDS BIRTHDAY CATERING WORKS',
  useCasesH2: 'Where this brief actually sits',
  useCases: [
    {
      title: 'Back Garden Villa Parties',
      description:
        'A villa garden is usually a mixed list: children eating first, adults after. We set up by the pool or under a tent, serve, and pack down so you are not clearing plates at dusk.',
    },
    {
      title: 'Allergy-Conscious Class Parties',
      description:
        'Nut, dairy and gluten notes are common in a school class. Flag them when you enquire. Dishes are labelled. Where an allergy is declared, the assigned culinary partner confirms whether the menu can be provided.',
    },
    {
      title: 'Beach & Pool Celebrations',
      description:
        'Pool and beach club birthdays need food that holds in the heat, is easy to eat standing, and does not fight the venue’s kitchen rules. That is in the brief, not discovered on the day.',
    },
    {
      title: 'Themed Celebrations',
      description:
        'Colours and shapes can follow the theme. The food still has to be something children will eat. Tell us the theme when you enquire; we will say what travels and what does not.',
    },
  ],
  includedH2: "What's Included in Our Kids Birthday Catering",
  includedItems: [
    { title: 'Child-sized menus', description: 'Familiar food, portions a child can finish, written around the age in the room.' },
    { title: 'Allergy notes in the brief', description: 'Nut-free, gluten-free and dairy-free plates when you flag them, with clear labelling.' },
    { title: 'Dessert table', description: 'Cupcakes, cake pops, cookies and a celebration cake if you want one.' },
    { title: 'Stations', description: 'Pizza, pasta, mocktail or ice-cream stations when the party should move.' },
    { title: 'Adult table', description: 'Canapés or a grazing spread for parents and older guests, not leftover pizza.' },
    { title: 'Service staff', description: 'Staff sized to the room. Children are served, not performed at.' },
    { title: 'Setup and pack-down', description: 'Equipment in, service, clear-down. You stay with the party.' },
    { title: 'Theme, if you want it', description: 'Colours and shapes can follow the brief. The food still has to work.' },
  ],
  galleryH2: 'A Taste of Our Kids Birthday Catering',
  galleryImages: [
    { src: '/menu-appetizer.webp', alt: 'Kids birthday appetisers in Dubai' },
    { src: '/menu-canapes.webp', alt: 'Child-friendly canapé selection' },
    { src: '/menu-dessert.webp', alt: 'Themed kids dessert table' },
    { src: '/service-catering.webp', alt: 'Kids party catering set-up at a Dubai event' },
    { src: '/service-villa.webp', alt: 'Villa kids birthday party styling' },
    { src: '/service-events.webp', alt: 'Children’s birthday catering in Dubai' },
  ],
  faqsH2: 'Kids Birthday Catering Questions',
  faqs: [
    {
      q: 'Can you cater for children with allergies?',
      a: 'Yes. Nut-free, gluten-free and dairy-free plates are designed in when you flag them, and dishes are labelled. For a declared allergy, the assigned culinary partner confirms whether the menu can be provided. Partner kitchens may handle allergens, so cross-contact cannot be completely excluded unless dedicated controls have been confirmed for the booking.',
    },
    {
      q: 'What kind of food do children enjoy at your parties?',
      a: 'Typical plates are mini pizzas, pasta, chicken skewers, sliders, fruit and cupcakes. Tell us the age and what they will actually eat. The adult table is a separate brief on the same booking.',
    },
    {
      q: 'Do you provide birthday cakes?',
      a: 'Yes. We can arrange themed celebration cakes, cupcakes and dessert tables as part of the catering package. Let us know the theme and guest count when planning.',
    },
    {
      q: 'Can parents eat too, or is it just for kids?',
      a: 'Yes. An adult grazing table, canapés or plated plates sit alongside the children’s menu. Parents should not be eating leftover pizza.',
    },
    {
      q: 'Do you handle setup and cleanup at the venue?',
      a: 'Yes. The team arrives early, serves during the party, and packs down afterwards. You stay with the children.',
    },
    {
      q: 'How far in advance should I book kids birthday catering?',
      a: 'One to three weeks is typical, especially for a themed dessert table or a weekend date. Short notice is assessed against live partner availability. Message the date on WhatsApp.',
    },
  ],
  relatedServices: [
    {
      title: 'Birthday Catering',
      description: 'Catering for adults, milestones and mixed-age celebrations.',
      image: '/images/birthday-catering-dubai-hero.webp',
      link: '/birthday-catering-dubai',
    },
    {
      title: 'Private Chef Birthday Dinner',
      description: 'When the party is a small seated dinner rather than a children\u2019s event.',
      image: '/images/birthday-catering-dubai-hero.webp',
      link: '/blog/best-private-chef-birthday-dinner-dubai',
    },
    {
      title: 'Nut-Free Catering',
      description: 'Allergy-aware catering ideal for school-age children and family events.',
      image: '/images/nut-free-catering-dubai-hero.webp',
      link: '/allergy-safe-catering-dubai',
    },
    {
      title: 'Dessert Table Catering',
      description: 'Dessert displays and celebration cakes, planned with the rest of the menu.',
      image: '/menu-dessert.webp',
      link: '/dessert-table-catering-dubai',
    },
    {
      title: 'Gelato & Dessert Cart',
      description: 'Ice cream and dessert carts when the party needs a station rather than a plated last course.',
      image: '/images/dessert-table-catering-dubai-hero.webp',
      link: '/live-cooking-stations-dubai',
    },
  ],
  ctaH2: 'Send the age, date and allergies',
  ctaP:
    'Age group, guest count, venue, theme if you have one, and any allergies. We send an itemised proposal. You stay with the party.',
  showTrustSignalStrip: true,
}

export default function KidsBirthdayCatering() {
  return <OccasionCateringPage config={config} />
}
