import { Link } from 'react-router'
import { Umbrella, Utensils, Fish, Salad, Sun, Home } from 'lucide-react'
import OccasionCateringPage from './occasion/OccasionCateringPage'
import type { OccasionPageConfig } from './occasion/OccasionCateringPage'

const config: OccasionPageConfig = {
  slug: 'beach-catering-dubai',
  seoTitle: 'Beach Catering Dubai | myCHEF',
  metaDescription:
    'Beach catering Dubai at a shoreline you have booked: seafood, grills, salads and staff. We cook at your venue. We do not own the beach. Itemised quote.',
  canonicalPath: '/private-party-catering-dubai',
  ogImage: '/images/beach-catering-dubai-hero.webp',
  breadcrumbLabel: 'Beach Catering Dubai',
  h1: 'Beach Catering Dubai',
  heroSub:
    'Beach catering Dubai at a private shoreline, club or beachfront villa you have access to. Seafood, grills and chilled service. We cook there. We do not own the beach.',
  heroImage: '/images/beach-catering-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to plan beach catering in Dubai (via mychef.ae/beach-catering-dubai)",
  eyebrow: 'SHORELINE CATERING IN DUBAI',
  introH2: 'Beach catering Dubai at a shoreline you control',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Beach catering Dubai is food and service at a beach, club or shoreline villa you have booked. Sand, wind and heat decide the menu more than a pretty plate. We bring chilled holding, covered stations and a team that can work outside. We do not own beaches, clubs or camps.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        A beach BBQ catering Dubai sitting starts from the published BBQ floor of AED 150 per person. Canapés from AED 150. A staffed buffet from AED 120. Drop-off from AED 90. All before 5% VAT. Permits for public sand sit with the host. Pair this with{' '}
        <Link to="/yachts" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          yacht catering Dubai
        </Link>{' '}
        if the same weekend is on a boat you have chartered, or{' '}
        <Link to="/bbq-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          BBQ catering Dubai
        </Link>{' '}
        when the grill is the centre of the afternoon.
      </p>
    </>
  ),
  formatsH2: 'Formats that hold up in sand and wind',
  formats: [
    {
      Icon: Utensils,
      title: 'Beach canapés and platters',
      description: 'Passed bites and sharing platters that can be eaten without a full table setting.',
      link: '/canape-catering-dubai',
    },
    {
      Icon: Fish,
      title: 'Fresh seafood stations',
      description: 'Chilled displays and grilled fish, timed so seafood is not sitting in the heat.',
      link: '/catering-dubai',
    },
    {
      Icon: Salad,
      title: 'Coastal salad and grain bars',
      description: 'Salads and grains that hold in warm weather, replenished rather than left to wilt.',
      link: '/buffet-catering-dubai',
    },
    {
      Icon: Sun,
      title: 'Sunset beach BBQ',
      description: 'Portable grills for meats, seafood and vegetables, planned around smoke, wind and holding.',
      link: '/bbq-catering-dubai',
    },
    {
      Icon: Umbrella,
      title: 'Beach club catering',
      description: 'Cooking and service at a club you have booked. Their rules, our kitchen team.',
      link: '/events',
    },
    {
      Icon: Home,
      title: 'Private beach villas',
      description: 'A shoreline villa dinner: kitchen access, outdoor power and where the team unloads, written into the brief.',
      link: '/villas-private-residences',
    },
  ],
  useCasesEyebrow: 'WHERE BEACH CATERING WORKS',
  useCasesH2: 'Family days, sunset dinners, club weekends',
  useCases: [
    {
      title: 'Family beach days',
      description:
        'Adult food and a simpler plate for children, with fruit and drinks that can be carried to a towel.',
    },
    {
      title: 'Sunset brand activations',
      description:
        'Food that can be eaten standing, labelled, and timed to a run-of-show. Photography is a by-product, not the brief.',
    },
    {
      title: 'Intimate shoreline dinners',
      description:
        'A small table at a villa beach you control. Two covers marking a year belong on a romantic dinner page, not here.',
    },
    {
      title: 'Beach club weekends',
      description:
        'We work to the club’s access, power and pack-down rules. The club remains the venue owner.',
    },
  ],
  includedH2: 'What a staffed beach sitting includes',
  includedItems: [
    { title: 'Menu written for the shore', description: 'Seafood, grills and cold dishes chosen because they hold outside.' },
    { title: 'Chilled holding', description: 'Ice, covered stations and timed replenishment so salads and seafood stay safe.' },
    { title: 'Live grilling', description: 'Portable BBQ when the brief needs cooking in front of guests.' },
    { title: 'Drinks', description: 'Mocktails, infused water and chilled juices. Alcohol at a private residence is sourced by the host.' },
    { title: 'Kit that works on sand', description: 'Weighted stations and serveware that does not blow into the water.' },
    { title: 'Seafood sourcing', description: 'Fresh fish and shellfish, handled to Dubai Municipality food-safety standards by licensed partners.' },
    { title: 'Outdoor service team', description: 'Staff who can work heat, wind and a changing headcount.' },
    { title: 'Pack-down', description: 'The sand or terrace is left tidy. Public-beach rules still sit with the host.' },
  ],
  galleryH2: 'How beach catering looks in Dubai',
  galleryImages: [
    { src: '/menu-appetizer.webp', alt: 'Beach appetisers in Dubai' },
    { src: '/menu-canapes.webp', alt: 'Beach canapé selection' },
    { src: '/menu-dessert.webp', alt: 'Coastal dessert display' },
    { src: '/service-catering.webp', alt: 'Beach catering set-up in Dubai' },
    { src: '/service-villa.webp', alt: 'Beach villa dinner styling' },
    { src: '/service-events.webp', alt: 'Beach event catering in Dubai' },
  ],
  faqsH2: 'Questions before you book',
  faqs: [
    {
      q: 'Can you cater on any Dubai beach?',
      a: 'We cook at private beaches, beach clubs and villa beachfronts you have access to. Public beach events may need permits. Those sit with the host. We can flag what we need to know once we have the location.',
    },
    {
      q: 'How do you keep food fresh on the beach?',
      a: 'Chilled transport, ice baths, covered stations and timed replenishment. Seafood and salads are not left on an open table in midday sun.',
    },
    {
      q: 'Do you offer beach BBQs?',
      a: 'Yes. Chefs grill on portable kit at the site you have booked. BBQ catering starts from AED 150 per person before 5% VAT, subject to guest count and access.',
    },
    {
      q: 'Can you provide tableware that works on sand?',
      a: 'Yes. We bring kit that can take wind and wet feet. Fine china on open sand is usually the wrong brief.',
    },
    {
      q: 'What happens if the weather changes?',
      a: 'Covered stations and a backup running order are planned in the proposal. On the day we follow the host’s call on whether the sitting stays outside.',
    },
    {
      q: 'How far in advance should I book beach catering?',
      a: 'Two to four weeks is the usual window, longer if seafood is the centre of the menu or a club has to approve access.',
    },
  ],
  relatedServices: [
    {
      title: 'Yacht Catering',
      description: 'Galley-friendly menus on a yacht you have chartered. We do not own the boat.',
      image: '/images/yacht-catering-dubai-hero.webp',
      link: '/yachts',
    },
    {
      title: 'BBQ Catering',
      description: 'Live grilling for a garden, terrace or shoreline you control.',
      image: '/images/bbq-catering-dubai-hero.webp',
      link: '/bbq-catering-dubai',
    },
    {
      title: 'Event Catering',
      description: 'The occasion hub when the night is still unnamed.',
      image: '/service-events.webp',
      link: '/events',
    },
  ],
  ctaH2: 'Send the shoreline, date and guest count',
  ctaP:
    'Tell us the address or club, how many people and whether you need a grill. We send an itemised proposal. We cook at your venue.',
  showTrustSignalStrip: true,
}

export default function BeachCatering() {
  return <OccasionCateringPage config={config} />
}
