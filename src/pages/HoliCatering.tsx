import { Link } from 'react-router'
import { Palette, Sun, Music, Flame, Home, Leaf } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'holi-catering-dubai',
  seoTitle: 'Holi Catering Dubai | Colourful Festival Feasts & Thandai',
  metaDescription:
    'Holi catering in Dubai: vibrant Indian festival menus, chaat stations, thandai, biryanis and colourful desserts for home, villa and corporate celebrations.',
  canonicalPath: '/holi-catering-dubai',
  ogImage: '/images/indian-catering-dubai-hero.webp',
  breadcrumbLabel: 'Holi Catering Dubai',
  h1: 'Holi Catering in Dubai',
  heroSub:
    'Celebrate the festival of colours with Holi catering across Dubai — from chaat counters and thandai bars to vibrant Indian buffets and sweet platters for every kind of gathering.',
  heroImage: '/images/indian-catering-dubai-hero.webp',
  whatsappMessage:
    'Hi myCHEF Dubai, I would like to arrange Holi catering in Dubai (via mychef.ae/holi-catering-dubai)',
  eyebrow: 'HOLI CATERING IN DUBAI',
  introH2: 'Bring the Colours of Holi to Your Table',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Holi is one of the most joyful celebrations on the calendar — a day of colour, music, togetherness and indulgent food. Our Holi catering in Dubai captures the spirit of the festival with menus that are bright, flavourful and made for sharing. Whether you are planning a family gathering in a villa, a community colour party, or a corporate Holi lunch, we deliver the food, service and festive energy you need.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        We build Holi menus around the classics people expect: crisp samosas and pakoras, live chaat stations, fragrant biryanis, rich curries, fresh breads, and sweet treats like gujiya, jalebi and kulfi. Thandai — the traditional spiced milk drink — can be served from a dedicated bar or passed around the party to keep guests refreshed.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        Holi catering sits naturally alongside our{' '}
        <Link to="/indian-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          Indian catering Dubai
        </Link>{' '}
        and{' '}
        <Link to="/festive-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          festive catering Dubai
        </Link>{' '}
        services, and works beautifully with{' '}
        <Link to="/private-party-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          private party catering Dubai
        </Link>{' '}
        for intimate home celebrations.
      </p>
    </>
  ),
  formatsH2: 'Holi Catering Formats',
  formats: [
    {
      Icon: Palette,
      title: 'Holi Buffet Feast',
      description: 'A colourful Indian buffet with chaat, curries, biryani, breads, rice and festive desserts served family-style.',
      link: '/buffet-catering-dubai',
    },
    {
      Icon: Sun,
      title: 'Garden & Poolside Holi Party',
      description: 'Outdoor catering for villa gardens and pool decks with live stations, grazing tables and refreshing drinks.',
      link: '/pool-party-catering-dubai',
    },
    {
      Icon: Flame,
      title: 'Live Chaat & Tandoor Station',
      description: 'Interactive chef stations serving golgappa, dahi bhalla, tandoori kebabs and fresh naan straight from the oven.',
      link: '/live-cooking-stations-dubai',
    },
    {
      Icon: Music,
      title: 'Thandai & Mocktail Bar',
      description: 'A dedicated drinks station serving thandai, flavoured lassis, lemonades and colourful Holi mocktails.',
      link: '/mocktail-bar-catering-dubai',
    },
    {
      Icon: Home,
      title: 'Villa & Home Celebrations',
      description: 'Full-service catering at your home or villa anywhere in Dubai with setup, service and cleanup handled for you.',
      link: '/villas-private-residences',
    },
    {
      Icon: Leaf,
      title: 'Vegetarian & Dietary Menus',
      description: 'Plant-forward Holi menus, Jain, vegan, gluten-free and nut-free options so every guest can join the feast.',
      link: '/vegetarian-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE HOLI CATERING WORKS',
  useCasesH2: 'Made for Every Kind of Colour Celebration',
  useCases: [
    {
      title: 'Family Villa Holi Parties',
      description:
        'Gather family and friends in a villa in Emirates Hills, Palm Jumeirah or Arabian Ranches for a Holi lunch that keeps everyone energised.',
    },
    {
      title: 'Community & Cultural Events',
      description:
        'Large-scale buffet and station catering for community groups, cultural associations and embassy Holi celebrations across Dubai.',
    },
    {
      title: 'Corporate Holi Lunches',
      description:
        'Brighten the office with a themed lunch, colourful desserts and a thandai bar for staff celebrations in Business Bay or DIFC.',
    },
    {
      title: 'Intimate Home Gatherings',
      description:
        'A relaxed Holi meal at home with a curated menu, warm service and none of the cooking or cleanup stress.',
    },
  ],
  includedH2: "What's Included in Our Holi Catering",
  includedItems: [
    { title: 'Festive Menu Design', description: 'Curated Holi menus built around colour, flavour and the Indian dishes guests love most.' },
    { title: 'Chaat & Starter Platters', description: 'Samosas, pakoras, tikka, chaat and colourful chutneys to start the celebration.' },
    { title: 'Curries, Biryani & Breads', description: 'Aromatic mains, fragrant rice and freshly baked breads served sharing-style.' },
    { title: 'Live Cooking Stations', description: 'Optional tandoor, chaat and dessert stations for theatre and freshness.' },
    { title: 'Thandai & Refreshing Drinks', description: 'Traditional thandai, lassis, lemonades and Holi-inspired mocktails.' },
    { title: 'Sweets & Colourful Desserts', description: 'Gujiya, jalebi, kulfi, falooda and a vibrant mithai selection.' },
    { title: 'Service Staff & Setup', description: 'Friendly team to serve, replenish and keep the party moving smoothly.' },
    { title: 'Full Pack-Down & Cleanup', description: 'We clear everything away so you can enjoy the rest of Holi without the mess.' },
  ],
  galleryH2: 'A Taste of Our Holi Catering',
  galleryImages: [
    { src: '/service-events.webp', alt: 'Holi catering set-up in Dubai' },
    { src: '/menu-appetizer.webp', alt: 'Indian starters and chaat for Holi catering' },
    { src: '/menu-meat.webp', alt: 'Tandoori meats and curries for Holi feast' },
    { src: '/menu-dessert.webp', alt: 'Colourful Indian sweets and desserts for Holi' },
    { src: '/service-villa.webp', alt: 'Villa Holi party catering styling' },
    { src: '/menu-seafood.webp', alt: 'Fresh dishes served at a Holi celebration' },
  ],
  faqsH2: 'Holi Catering Questions',
  faqs: [
    {
      q: 'What food is typically served at a Holi celebration?',
      a: 'Holi menus usually feature chaat, samosas, pakoras, tandoori kebabs, biryani, curries, breads, and sweets such as gujiya, jalebi and kulfi. Thandai is the traditional drink of the day.',
    },
    {
      q: 'Can you cater Holi at our villa or outdoor venue?',
      a: 'Yes. We provide full-service outdoor and villa catering across Dubai, including garden setups, live stations, buffet service and cleanup.',
    },
    {
      q: 'Do you offer vegetarian or Jain Holi catering?',
      a: 'Absolutely. We offer fully vegetarian menus as well as Jain, vegan, gluten-free and nut-free options to suit all dietary needs.',
    },
    {
      q: 'Can you set up a thandai or drinks station?',
      a: 'Yes. A thandai bar is one of our most popular Holi add-ons, alongside lassis, lemonades and colourful mocktails.',
    },
    {
      q: 'How many guests can you cater for Holi?',
      a: 'We cater intimate home gatherings from 10 guests up to large community events of 100 or more.',
    },
    {
      q: 'How far in advance should I book Holi catering?',
      a: 'One to two weeks ahead is ideal, especially for villa parties and live stations. Last-minute bookings may be possible depending on availability.',
    },
  ],
  relatedServices: [
    {
      title: 'Indian Catering Dubai',
      description: 'Authentic North and South Indian menus with curries, biryanis, tandoor stations and vegetarian options.',
      image: '/images/indian-catering-dubai-hero.webp',
      link: '/indian-catering-dubai',
    },
    {
      title: 'Festive Catering Dubai',
      description: 'Themed menus and full-service catering for celebrations throughout the year.',
      image: '/service-events.webp',
      link: '/festive-catering-dubai',
    },
    {
      title: 'Private Party Catering',
      description: 'Intimate home and villa parties with personalised menus and full service.',
      image: '/service-villa.webp',
      link: '/private-party-catering-dubai',
    },
  ],
  ctaH2: 'Make Your Holi Celebration Unforgettable',
  ctaP:
    'Tell us about your Holi plans, guest count, venue and preferred menu style. We will create a colourful catering experience that matches the joy of the festival.',
}

export default function HoliCatering() {
  return <ServiceLandingPage config={config} />
}
