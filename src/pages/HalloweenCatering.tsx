import { Link } from 'react-router'
import { Ghost, Candy, Moon, PartyPopper, Home, Building2 } from 'lucide-react'
import OccasionCateringPage from './occasion/OccasionCateringPage'
import type { OccasionPageConfig } from './occasion/OccasionCateringPage'

const config: OccasionPageConfig = {
  slug: 'halloween-catering-dubai',
  seoTitle: 'Halloween Catering Dubai | Spooky Private Party & Event Menus',
  metaDescription:
    'Halloween catering in Dubai. Spooky, stylish menus for home parties, kids events and venue celebrations. Private chef service, themed treats and full setup included.',
  canonicalPath: '/halloween-catering-dubai',
  ogImage: '/images/halloween-catering-dubai-hero.webp',
  breadcrumbLabel: 'Halloween Catering Dubai',
  h1: 'Halloween Catering in Dubai',
  heroSub:
    'Turn your Halloween celebration into an unforgettable night with bespoke catering, eerie styling and imaginative treats — served by a private chef in your Dubai home or venue.',
  heroImage: '/images/halloween-catering-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to book Halloween catering in Dubai (via mychef.ae/halloween-catering-dubai)",
  eyebrow: 'HALLOWEEN CATERING IN DUBAI',
  introH2: 'A Halloween Party Worth Hosting',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Halloween in Dubai has grown into one of the most anticipated nights of the year, with families, friends and brands hosting everything at home. Whether you are planning an intimate adults dinner, a fun kids party or a large costume event, our Halloween catering service delivers dramatic presentation, themed flavours and seamless service that matches the mood of the night.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Our chefs design menus around the occasion: black and gold grazing tables, spiderweb desserts, pumpkin-inspired dishes, themed mocktails and creative canapes that surprise guests before the first bite. We take care of the food, styling, service and cleanup, so you can focus on costumes, music and making memories.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        We cater Halloween events across Dubai, from villas and apartments to rooftops, event spaces and offices. Pair this with our{' '}
        <Link to="/private-party-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          private party catering
        </Link>{' '}
        for a fully hosted night, or explore{' '}
        <Link to="/kids-birthday-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          kids birthday catering
        </Link>{' '}
        for child-friendly Halloween menus.
      </p>
    </>
  ),
  formatsH2: 'Halloween Celebration Formats',
  formats: [
    {
      Icon: Ghost,
      title: 'Spooky Dinner Parties',
      description: 'Elegant, eerie dinners with gothic plating, candlelit tables and themed tasting menus for adults.',
      link: '/private-party-catering-dubai',
    },
    {
      Icon: Candy,
      title: 'Kids Halloween Parties',
      description: 'Fun, fright-free menus with themed sweets, cupcakes, finger foods and playful presentation.',
      link: '/kids-birthday-catering-dubai',
    },
    {
      Icon: Moon,
      title: 'Costume Ball & Venue Catering',
      description: 'Stylish buffet stations, grazing tables and roaming canapes for larger Halloween events at venues.',
      link: '/event-catering-dubai',
    },
    {
      Icon: PartyPopper,
      title: 'Trick-or-Treat Stations',
      description: 'Interactive treat stations and dessert displays that add theatre to any Halloween gathering.',
      link: '/dessert-table-dubai',
    },
    {
      Icon: Home,
      title: 'At-Home Villa Halloween',
      description: 'Transform your villa or apartment into a haunted hideaway with full setup, décor and service.',
      link: '/villas-private-residences',
    },
    {
      Icon: Building2,
      title: 'Corporate Halloween Events',
      description: 'Polished Halloween catering for office parties, brand activations and team celebrations.',
      link: '/corporate-event-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE HALLOWEEN CATERING SHINES',
  useCasesH2: 'Dramatic Presentation, Playful Flavours & Flawless Service',
  useCases: [
    {
      title: 'Adults Costume Parties',
      description:
        'Create a sophisticated spooky atmosphere with dark, dramatic menus, themed cocktails and elegant table styling.',
    },
    {
      title: 'Family-Friendly Gatherings',
      description:
        'Keep the fun age-appropriate with creative but not-too-scary dishes, Halloween treats and flexible service timing.',
    },
    {
      title: 'Kids Parties & Playdates',
      description:
        'Delight younger guests with themed cupcakes, monster-shaped snacks, candy stations and easy-to-eat party food.',
    },
    {
      title: 'Brand & Office Events',
      description:
        'Host a memorable Halloween celebration for colleagues or clients with branded menus and professional presentation.',
    },
  ],
  includedH2: "What's Included in Our Halloween Catering",
  includedItems: [
    { title: 'Themed Menu Design', description: 'A bespoke Halloween menu with playful or dramatic dishes tailored to your guests.' },
    { title: 'Spooky Starters & Canapes', description: 'Creative bites like pumpkin soup shots, blackened crostini and themed tartlets.' },
    { title: 'Themed Mains & Sides', description: 'Seasonal dishes such as roasted pumpkin, beetroot risotto, haunted pasta and premium grills.' },
    { title: 'Halloween Desserts & Treats', description: 'Spiderweb cakes, ghost meringues, themed cupcakes and candy displays.' },
    { title: 'Professional Chef & Staff', description: 'Experienced chefs and servers dressed to suit the occasion and keep service smooth.' },
    { title: 'Dietary Accommodation', description: 'Halal, vegetarian, vegan, gluten-free and allergy-aware options available.' },
    { title: 'Dark & Dramatic Styling', description: 'Black and gold tableware, candlelight and seasonal décor to set the scene.' },
    { title: 'Full Setup & Cleanup', description: 'We arrive early, prepare, serve and leave your space spotless after the party.' },
  ],
  galleryH2: 'A Taste of Our Halloween Catering',
  galleryImages: [
    { src: '/images/halloween-catering-dubai-hero.webp', alt: 'Halloween catering setup in Dubai' },
    { src: '/menu-appetizer.webp', alt: 'Spooky appetisers for Halloween catering' },
    { src: '/menu-mains.webp', alt: 'Halloween themed main dishes' },
    { src: '/menu-dessert.webp', alt: 'Halloween desserts and treats' },
    { src: '/service-events.webp', alt: 'Event catering service in Dubai' },
    { src: '/service-luxury-dining.webp', alt: 'Luxury private dining experience in Dubai' },
  ],
  faqsH2: 'Halloween Catering Questions',
  faqs: [
    {
      q: 'Can you cater Halloween at my home or villa in Dubai?',
      a: 'Yes. We specialise in at-home Halloween catering, bringing chefs, staff, equipment and themed tableware to create a memorable night.',
    },
    {
      q: 'What Halloween dishes do you offer?',
      a: 'Our Halloween menus can include pumpkin soup shots, blackened crostini, beetroot risotto, themed pasta, carved vegetable displays, spiderweb cakes and ghost meringues.',
    },
    {
      q: 'Do you cater kids Halloween parties?',
      a: 'Absolutely. We offer fright-free, child-friendly menus with themed cupcakes, monster snacks, candy stations and fun presentation.',
    },
    {
      q: 'Can you style the space for a Halloween theme?',
      a: 'Yes. We provide dark tableware, candlelight, black and gold linens and seasonal décor to create a dramatic or playful atmosphere.',
    },
    {
      q: 'How far in advance should I book Halloween catering?',
      a: 'Halloween is a busy date for private catering in Dubai. We recommend booking two to three weeks ahead to secure your preferred menu and service team.',
    },
    {
      q: 'Can you accommodate dietary requirements?',
      a: 'Yes. We routinely adapt menus for halal, vegetarian, vegan, gluten-free and allergy-specific needs without compromising on flavour or presentation.',
    },
  ],
  relatedServices: [
    {
      title: 'Private Party Catering',
      description: 'Bespoke catering for themed celebrations, reunions and special occasions at home or venue.',
      image: '/service-events.webp',
      link: '/private-party-catering-dubai',
    },
    {
      title: 'Kids Birthday Catering',
      description: 'Fun, child-friendly menus and themed catering perfect for younger Halloween guests.',
      image: '/images/kids-birthday-catering-dubai-hero.webp',
      link: '/kids-birthday-catering-dubai',
    },
    {
      title: 'Easter Catering Dubai',
      description: 'Spring-inspired menus for Easter brunches, lunches and garden celebrations in Dubai.',
      image: '/images/easter-catering-dubai-hero.webp',
      link: '/easter-catering-dubai',
    },
  ],
  ctaH2: 'Plan Your Halloween Celebration in Dubai',
  ctaP:
    'Tell us about your guest count, venue and theme. We will design a Halloween catering experience that is stylish, spooky and effortlessly hosted.',
}

export default function HalloweenCatering() {
  return <OccasionCateringPage config={config} />
}
