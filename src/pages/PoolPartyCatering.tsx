import { Link } from 'react-router'
import { Waves, Utensils, Salad, IceCream, Home, Sun } from 'lucide-react'
import OccasionCateringPage from './occasion/OccasionCateringPage'
import type { OccasionPageConfig } from './occasion/OccasionCateringPage'

const config: OccasionPageConfig = {
  slug: 'pool-party-catering-dubai',
  seoTitle: 'Pool Party Catering Dubai | myCHEF',
  metaDescription:
    'Pool party catering Dubai at a villa pool you control. Light menus, grill, drinks. BBQ from AED 150. We cook at your venue. Itemised quote.',
  canonicalPath: '/private-party-catering-dubai',
  ogImage: '/images/pool-party-catering-dubai-hero.webp',
  breadcrumbLabel: 'Pool Party Catering Dubai',
  h1: 'Pool Party Catering Dubai',
  heroSub:
    'Pool party catering Dubai at a villa or club pool you have access to. Grills, salads, drinks and a team that can work wet feet. We do not own the pool.',
  heroImage: '/images/pool-party-catering-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to plan pool party catering in Dubai (via mychef.ae/pool-party-catering-dubai)",
  eyebrow: 'POOLSIDE CATERING IN DUBAI',
  introH2: 'Pool party catering Dubai that survives heat and splash',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Pool party catering Dubai is food beside a pool you already have: a villa day in Palm Jumeirah, a teenagers’ afternoon, or an adults’ sitting. Food has to be eaten in swimwear, held in heat, and cleared without wet cables. We cook at your venue. We do not own the pool or the club.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        BBQ catering starts from AED 150 per person. Canapés from AED 150. A staffed buffet from AED 120. All before 5% VAT. Live fire and children in the same garden needs a named adult on the grill, or no grill. See{' '}
        <Link to="/bbq-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          BBQ catering Dubai
        </Link>{' '}
        and{' '}
        <Link to="/villas-private-residences" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          villa catering Dubai
        </Link>
        .
      </p>
    </>
  ),
  formatsH2: 'How poolside food is served',
  formats: [
    {
      Icon: Utensils,
      title: 'Poolside canapés',
      description: 'Bites that can be eaten from a lounger. No knife work.',
      link: '/canape-catering-dubai',
    },
    {
      Icon: Salad,
      title: 'Salad and grain bars',
      description: 'Cold dishes that hold, replenished rather than left to wilt.',
      link: '/buffet-catering-dubai',
    },
    {
      Icon: Waves,
      title: 'Live grill and BBQ stations',
      description: 'Meats, seafood and vegetables cooked to order, sited away from splash and shade lines.',
      link: '/bbq-catering-dubai',
    },
    {
      Icon: IceCream,
      title: 'Frozen dessert stations',
      description: 'Ice-cream, sorbet and fruit, quoted when you want a cold finish.',
      link: '/dessert-table-catering-dubai',
    },
    {
      Icon: Home,
      title: 'Villa pool parties',
      description: 'Covered stations, outdoor power and pack-down written into the villa brief.',
      link: '/villas-private-residences',
    },
    {
      Icon: Sun,
      title: 'Beach club and venue parties',
      description: 'Cooking at a club or hotel pool you have booked. Their rules, our kitchen team.',
      link: '/events',
    },
  ],
  useCasesEyebrow: 'WHERE POOL PARTY CATERING SHINES',
  useCasesH2: 'Family days, teens, heat',
  useCases: [
    {
      title: 'Family villa days',
      description:
        'Shaded grazing, a grill if the brief allows it, and drinks that can be carried to the water.',
    },
    {
      title: 'Teen and young adult parties',
      description:
        'Casual food, a mocktail station, and a running order parents can see in the quote.',
    },
    {
      title: 'Adults-only pool sittings',
      description:
        'Canapés, seafood and cold plates. Alcohol at a private residence is sourced by the host.',
    },
    {
      title: 'Heat-proof celebrations',
      description:
        'Chilled holding, covered stations and timed replenishment. Midday sun is a logistics problem, not a mood.',
    },
  ],
  includedH2: 'What a staffed pool sitting includes',
  includedItems: [
    { title: 'A menu written for heat', description: 'Dishes that hold outdoors and do not need a full place setting.' },
    { title: 'Grill options', description: 'On-site BBQ when the brief and the garden can support it.' },
    { title: 'Drinks', description: 'Infused water, mocktails and juice. Alcohol at a private residence is sourced by the host.' },
    { title: 'Salads and grains', description: 'Cold sides, replenished.' },
    { title: 'Frozen treats', description: 'Quoted when you want them, not assumed.' },
    { title: 'Covered stations', description: 'Kit that can take splash and sun.' },
    { title: 'Outdoor staff', description: 'A team used to wet feet and a moving guest list.' },
    { title: 'Pack-down', description: 'The pool deck is left tidy. Pool chemicals and furniture stay yours.' },
  ],
  galleryH2: 'How pool party catering looks in Dubai',
  galleryImages: [
    { src: '/menu-appetizer.webp', alt: 'Pool party appetisers in Dubai' },
    { src: '/menu-canapes.webp', alt: 'Poolside canapé selection' },
    { src: '/menu-dessert.webp', alt: 'Frozen dessert station by the pool' },
    { src: '/service-catering.webp', alt: 'Pool party catering set-up at a Dubai villa' },
    { src: '/service-villa.webp', alt: 'Villa pool party styling' },
    { src: '/service-events.webp', alt: 'Poolside catering in Dubai' },
  ],
  faqsH2: 'Questions before you book',
  faqs: [
    {
      q: 'What food works best for a pool party in Dubai?',
      a: 'Grilled meats and seafood, salads, canapés, fruit and frozen desserts. Heavy hot dishes usually fight the weather.',
    },
    {
      q: 'Can you keep food cool and safe by the pool?',
      a: 'Yes. Chilled kit, ice, covered stations and timed replenishment. Food safety sits with the licensed partners cooking, to Dubai Municipality standards.',
    },
    {
      q: 'Do you provide mocktail bars for pool parties?',
      a: 'Yes, quoted as a drinks line. See bar services for how a drinks station is staffed.',
    },
    {
      q: 'Can you cater at a villa I have rented?',
      a: 'Yes. We cook at Palm Jumeirah, Emirates Hills, Dubai Hills and other addresses you have access to. Community rules belong in the brief.',
    },
    {
      q: 'Do you handle setup and cleanup poolside?',
      a: 'Staffed bookings include setup, service and clear-down of our kit.',
    },
    {
      q: 'How far in advance should I book pool party catering?',
      a: 'Two to four weeks is the usual window for weekend sittings in the cooler months.',
    },
  ],
  relatedServices: [
    {
      title: 'BBQ Catering',
      description: 'Grill-led service for a garden or pool you control.',
      image: '/images/bbq-catering-dubai-hero.webp',
      link: '/bbq-catering-dubai',
    },
    {
      title: 'Mocktail Bar Catering',
      description: 'Alcohol-free drinks service, quoted as its own line.',
      image: '/menu-canapes.webp',
      link: '/bar-services-dubai',
    },
    {
      title: 'Villa Catering',
      description: 'Gates, kitchen access and outdoor power for a villa sitting.',
      image: '/service-villa.webp',
      link: '/villas-private-residences',
    },
  ],
  ctaH2: 'Send the pool, guest count and whether you need a grill',
  ctaP:
    'Tell us the address, how many people and the time of day. We send an itemised pool party catering Dubai quote.',
  showTrustSignalStrip: true,
}

export default function PoolPartyCatering() {
  return <OccasionCateringPage config={config} />
}
