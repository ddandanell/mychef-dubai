import { Link } from 'react-router'
import { ShoppingBasket, Sun, Car, TreePine, Leaf, Coffee } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'picnic-catering-dubai',
  seoTitle: 'Picnic Catering Dubai | myCHEF',
  metaDescription:
    'Picnic catering Dubai: baskets and boxes delivered to a park, beach, garden or desert site you have access to. Drop-off from AED 90. We do not own the land.',
  canonicalPath: '/private-party-catering-dubai',
  ogImage: '/images/beach-catering-dubai-hero.webp',
  breadcrumbLabel: 'Picnic Catering Dubai',
  h1: 'Picnic Catering Dubai',
  heroSub:
    'Picnic catering Dubai for a park, beach, villa garden or desert meeting point you can access. Boxes and baskets that travel. We do not own the land.',
  heroImage: '/images/beach-catering-dubai-hero.webp',
  whatsappMessage:
    'Hi myCHEF Dubai, I would like to arrange picnic catering in Dubai (via mychef.ae/picnic-catering-dubai)',
  eyebrow: 'PICNIC CATERING IN DUBAI',
  introH2: 'Picnic catering Dubai that can leave the kitchen',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Picnic catering Dubai is food packed to travel to a beach, park, garden or desert site you have access to. Sandwiches, salads, fruit and things that hold without a pass. We do not own beaches, parks or camps. Permits sit with the host.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Most picnic orders are drop-off, from AED 90 per person, with a 10-guest and AED 900 minimum, before 5% VAT. A staffed garden picnic uses the buffet or grazing format instead. Halal picnic catering Dubai is the default sourcing.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        A shoreline sitting with staff is{' '}
        <Link to="/private-party-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          beach catering Dubai
        </Link>
        . Boxes without a picnic brief sit on{' '}
        <Link to="/drop-off-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          drop-off catering Dubai
        </Link>
        . A garden party with people in the house is{' '}
        <Link to="/private-party-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          private party catering Dubai
        </Link>
        .
      </p>
    </>
  ),
  formatsH2: 'How picnic food is packed',
  formats: [
    {
      Icon: ShoppingBasket,
      title: 'Picnic baskets',
      description: 'Sandwiches, salads, cheese, fruit, dips and sweets packed to share.',
      link: '/grazing-table-dubai',
    },
    {
      Icon: Sun,
      title: 'Beach and park picnics',
      description: 'Menus that travel to a beach or lawn you can access, with holding that matches the heat.',
      link: '/private-party-catering-dubai',
    },
    {
      Icon: Car,
      title: 'Desert meeting-point picnics',
      description: 'Boxes for a desert site you have booked. We cook for that site. We do not run the camp.',
      link: '/desert-dining-dubai',
    },
    {
      Icon: TreePine,
      title: 'Villa garden picnics',
      description: 'A staffed garden setup at your villa, with tableware if the brief needs it.',
      link: '/villas-private-residences',
    },
    {
      Icon: Coffee,
      title: 'Corporate picnic boxes',
      description: 'Individual boxes for a team outing. Labels and a count that matches the bus.',
      link: '/office-catering-dubai',
    },
    {
      Icon: Leaf,
      title: 'Vegan and healthy picnics',
      description: 'Plant-based, gluten-free and lighter boxes when those notes are in the brief.',
      link: '/cuisines-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE PICNIC CATERING WORKS',
  useCasesH2: 'Beach, park, garden, desert site',
  useCases: [
    {
      title: 'Family days at the beach',
      description:
        'Food delivered to a beach you can use. We do not reserve the sand.',
    },
    {
      title: 'Park gatherings with friends',
      description:
        'Safa, Zabeel or Al Barsha Pond Park. Access notes and a meeting point belong in the order.',
    },
    {
      title: 'Two-person picnics',
      description:
        'A smaller basket. Drop-off still has a 10-guest and AED 900 minimum unless the brief is a staffed chef sitting.',
    },
    {
      title: 'Corporate team outings',
      description:
        'Boxed counts, dietary labels and a delivery window that matches the coach.',
    },
  ],
  includedH2: 'What picnic catering includes',
  includedItems: [
    { title: 'A menu that travels', description: 'Dishes chosen because they hold outdoors, not because they photograph as a restaurant plate.' },
    { title: 'Boxes and baskets', description: 'Packed to the guest count. Empties collected when you ask.' },
    { title: 'Sandwiches and wraps', description: 'Fillings that do not collapse in the heat.' },
    { title: 'Salads and cold plates', description: 'Held cold until handover.' },
    { title: 'Fruit and sweets', description: 'Sized to the order, not a dessert table.' },
    { title: 'Drinks', description: 'Chilled drinks quoted as an add-on. Coolers when the brief needs them.' },
    { title: 'Packaging', description: 'Named in the quote. We do not claim a packaging brand we do not use.' },
    { title: 'Delivery', description: 'To a beach, park, villa or desert meeting point you can access.' },
  ],
  galleryH2: 'How picnic catering looks in Dubai',
  galleryImages: [
    { src: '/service-events.webp', alt: 'Styled picnic catering set-up in Dubai' },
    { src: '/menu-appetizer.webp', alt: 'Grazing box with cheeses and charcuterie' },
    { src: '/menu-dessert.webp', alt: 'Fresh fruit and desserts for a picnic' },
    { src: '/menu-seafood.webp', alt: 'Light picnic salads and chilled dishes' },
    { src: '/service-villa.webp', alt: 'Villa garden picnic catering styling' },
    { src: '/menu-meat.webp', alt: 'Gourmet sandwich and wrap platter for picnics' },
  ],
  faqsH2: 'Questions before you book',
  faqs: [
    {
      q: 'What kind of food comes in a picnic catering basket?',
      a: 'Sandwiches, wraps, salads, cheese, dips, fruit and sweets, cut to dietary notes. We do not pack dishes that wilt in thirty minutes of sun.',
    },
    {
      q: 'Can you deliver picnic catering to a beach or park?',
      a: 'Yes, to a location you can access. Share the pin, time and any gate notes. Permits sit with the host.',
    },
    {
      q: 'Do you provide styling, rugs and tableware?',
      a: 'Food and packaging are the default. Rugs, low tables and extra styling are quoted through partners when you ask. We do not own a picnic-styling product.',
    },
    {
      q: 'Can picnic catering be vegetarian, vegan or gluten-free?',
      a: 'Yes, when named in the brief. Dishes are labelled.',
    },
    {
      q: 'How many people can you cater for a picnic?',
      a: 'Drop-off starts from 10 guests and AED 900. Smaller tables are a chef sitting, quoted as plated or a household visit, not as a picnic box below the minimum.',
    },
    {
      q: 'How far in advance should I book picnic catering?',
      a: 'Two to three days for most drop-off orders. Staffed garden setups need about a week.',
    },
  ],
  relatedServices: [
    {
      title: 'Beach Catering Dubai',
      description: 'Staffed shoreline food at a beach you have access to.',
      image: '/images/beach-catering-dubai-hero.webp',
      link: '/private-party-catering-dubai',
    },
    {
      title: 'Drop-Off Catering Dubai',
      description: 'Food delivered and laid out, no team remaining on site.',
      image: '/service-events.webp',
      link: '/drop-off-catering-dubai',
    },
    {
      title: 'Private Party Catering',
      description: 'A house night, if the picnic is really a garden party.',
      image: '/service-villa.webp',
      link: '/private-party-catering-dubai',
    },
  ],
  ctaH2: 'Send the pin, guest count and dietary notes',
  ctaP:
    'Tell us beach, park, garden or desert site, how many people and the handover time. We send an itemised picnic catering Dubai quote.',
  showTrustSignalStrip: true,
}

export default function PicnicCatering() {
  return <ServiceLandingPage config={config} />
}
