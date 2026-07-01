import { Link } from 'react-router'
import { PartyPopper, Utensils, Pizza, IceCream, Home, Building } from 'lucide-react'
import OccasionCateringPage from './occasion/OccasionCateringPage'
import type { OccasionPageConfig } from './occasion/OccasionCateringPage'

const config: OccasionPageConfig = {
  slug: 'kids-birthday-catering-dubai',
  seoTitle: 'Kids Birthday Catering Dubai | Fun, Safe Party Food',
  metaDescription:
    'Kids birthday party catering in Dubai: nut-free, allergy-aware menus, fun food stations, themed treats and full setup. Request a custom party quote today.',
  canonicalPath: '/kids-birthday-catering-dubai',
  ogImage: '/images/kids-birthday-catering-dubai-hero.webp',
  breadcrumbLabel: 'Kids Birthday Catering Dubai',
  h1: 'Kids Birthday Catering in Dubai',
  heroSub:
    'Stress-free kids birthday party catering across Dubai: safe, fun menus, allergy-aware options, interactive food stations and full service so parents can enjoy the party too.',
  heroImage: '/images/kids-birthday-catering-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to plan kids birthday catering in Dubai (via mychef.ae/kids-birthday-catering-dubai)",
  eyebrow: 'KIDS PARTY CATERING IN DUBAI',
  introH2: 'Birthday Parties That Parents & Kids Both Enjoy',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Throwing a children’s birthday party in Dubai should be about laughter, games and memories — not about juggling platters and praying no one has an allergic reaction. Our kids birthday catering is built around the realities of family parties: food that children actually want to eat, menus that account for common allergies, and a setup that lets parents step away from the kitchen and join the celebration.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        From villa garden parties in Emirates Hills to beach club celebrations and at-home gatherings in Jumeirah, we bring child-friendly menus, friendly service staff and clear labelling so every guest knows what is on their plate. We also offer nut-free, gluten-free and dairy-free options so no child is left out. See how this fits with our wider{' '}
        <Link to="/birthday-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          birthday catering Dubai
        </Link>{' '}
        service, or explore safe{' '}
        <Link to="/nut-free-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          nut-free catering Dubai
        </Link>{' '}
        options for school-age guests.
      </p>
    </>
  ),
  formatsH2: 'Kids Party Catering Formats',
  formats: [
    {
      Icon: Utensils,
      title: 'Plated Kids’ Menus',
      description: 'Age-appropriate plated meals with familiar flavours, colourful presentation and portions sized for smaller appetites.',
      link: '/catering-dubai',
    },
    {
      Icon: Pizza,
      title: 'Pizza & Pasta Stations',
      description: 'Live pizza or pasta stations where children can choose toppings — interactive, fun and endlessly popular.',
      link: '/live-cooking-stations-dubai',
    },
    {
      Icon: IceCream,
      title: 'Dessert & Sweet Tables',
      description: 'Cupcakes, cake pops, fruit skewers and themed dessert tables designed to match the party style.',
      link: '/dessert-table-catering-dubai',
    },
    {
      Icon: PartyPopper,
      title: 'Themed Party Buffets',
      description: 'Buffet spreads styled around the birthday theme, from superheroes and princesses to tropical pool parties.',
      link: '/buffet-catering-dubai',
    },
    {
      Icon: Home,
      title: 'Villa & Home Parties',
      description: 'Full-service catering at your home or villa across Dubai, with setup, service and pack-down handled for you.',
      link: '/villa-catering-dubai',
    },
    {
      Icon: Building,
      title: 'Venue & Club Parties',
      description: 'Catering coordination for Dubai party venues, beach clubs and kids’ entertainment centres.',
      link: '/event-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE KIDS BIRTHDAY CATERING WORKS',
  useCasesH2: 'Parties Designed Around Children',
  useCases: [
    {
      title: 'Back Garden Villa Parties',
      description:
        'Villa gardens across Dubai are perfect for bouncy castles, lawn games and a kids’ buffet. We set up under tents or by the pool, serve the children, and clear away while parents relax.',
    },
    {
      title: 'Allergy-Conscious Class Parties',
      description:
        'Nut allergies, dairy intolerances and gluten-free requirements are common in school classes. We label every dish and can prepare fully allergen-aware menus so every child eats safely.',
    },
    {
      title: 'Beach & Pool Celebrations',
      description:
        'For pool parties and beach club birthdays, we serve fresh, light menus that hold up in the heat, with plenty of hydration and treats that are easy to eat in swimwear.',
    },
    {
      title: 'Themed Celebrations',
      description:
        'From unicorn tea parties to football-themed lunches, our chefs and styling team can match colours, shapes and flavours to the birthday theme without sacrificing food quality.',
    },
  ],
  includedH2: "What's Included in Our Kids Birthday Catering",
  includedItems: [
    { title: 'Child-Friendly Menus', description: 'Familiar favourites, fun presentations and portion sizes designed for kids.' },
    { title: 'Allergy Awareness', description: 'Nut-free, gluten-free and dairy-free options available with clear labelling.' },
    { title: 'Sweet & Dessert Tables', description: 'Themed cupcakes, cake pops, cookies and celebration cakes on request.' },
    { title: 'Interactive Food Stations', description: 'Pizza, pasta, mocktail and ice-cream stations that double as entertainment.' },
    { title: 'Adult Grazing Options', description: 'Sophisticated canapés and platters for parents and older guests.' },
    { title: 'Friendly Service Staff', description: 'Patient, experienced staff who know how to serve and engage with children.' },
    { title: 'Full Setup & Pack-Down', description: 'We bring equipment, serve, clear and leave the venue tidy.' },
    { title: 'Theme Coordination', description: 'Menu styling and colours aligned with your chosen party theme.' },
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
      a: 'Yes. We offer nut-free, gluten-free and dairy-free options and clearly label every dish. For severe allergies, tell us in advance and we will plan prep and service protocols to reduce cross-contact risk.',
    },
    {
      q: 'What kind of food do children enjoy at your parties?',
      a: 'Our kids menus include mini pizzas, pasta, chicken skewers, sliders, fruit platters, cupcakes and themed treats. We balance fun with freshness so the sugar crash is minimised.',
    },
    {
      q: 'Do you provide birthday cakes?',
      a: 'Yes. We can arrange themed celebration cakes, cupcakes and dessert tables as part of the catering package. Let us know the theme and guest count when planning.',
    },
    {
      q: 'Can parents eat too, or is it just for kids?',
      a: 'Absolutely. We usually prepare an adult-friendly grazing table, canapés or plated options alongside the children’s menu so parents and older siblings enjoy the food as well.',
    },
    {
      q: 'Do you handle setup and cleanup at the venue?',
      a: 'Yes. Our team arrives early to set up, serves during the party, and packs everything away afterwards. You just need to enjoy the celebration.',
    },
    {
      q: 'How far in advance should I book kids birthday catering?',
      a: 'One to three weeks is ideal, especially for themed dessert tables or busy weekend dates. Last-minute bookings are sometimes possible — contact us on WhatsApp to check availability.',
    },
  ],
  relatedServices: [
    {
      title: 'Birthday Catering',
      description: 'Full-service birthday catering for adults and mixed-age celebrations.',
      image: '/images/birthday-catering-dubai-hero.webp',
      link: '/birthday-catering-dubai',
    },
    {
      title: 'Nut-Free Catering',
      description: 'Allergy-aware catering ideal for school-age children and family events.',
      image: '/images/nut-free-catering-dubai-hero.webp',
      link: '/nut-free-catering-dubai',
    },
    {
      title: 'Dessert Table Catering',
      description: 'Show-stopping dessert displays and celebration cakes for any theme.',
      image: '/menu-dessert.webp',
      link: '/dessert-table-catering-dubai',
    },
  ],
  ctaH2: 'Plan a Kids Birthday Party Everyone Will Love',
  ctaP:
    'Tell us about the age group, theme, allergies and venue. We will design a safe, fun kids birthday menu that lets you enjoy the party as much as they do.',
}

export default function KidsBirthdayCatering() {
  return <OccasionCateringPage config={config} />
}
