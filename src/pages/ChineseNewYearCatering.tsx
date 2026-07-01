import { Link } from 'react-router'
import { Sparkles, Utensils, Flame, Home, Leaf, Coffee } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'chinese-new-year-catering-dubai',
  seoTitle: 'Chinese New Year Catering Dubai | Lunar New Year Feasts',
  metaDescription:
    'Chinese New Year catering in Dubai: Lunar New Year menus, dim sum, Peking duck, live noodle stations and family banquets at home or venues. Request a quote.',
  canonicalPath: '/chinese-new-year-catering-dubai',
  ogImage: '/images/asian-catering-dubai-hero.webp',
  breadcrumbLabel: 'Chinese New Year Catering Dubai',
  h1: 'Chinese New Year Catering in Dubai',
  heroSub:
    'Ring in the Lunar New Year with Chinese New Year catering across Dubai — from symbolic sharing menus and dim sum brunches to live wok stations and elegant home banquets.',
  heroImage: '/images/asian-catering-dubai-hero.webp',
  whatsappMessage:
    'Hi myCHEF Dubai, I would like to arrange Chinese New Year catering in Dubai (via mychef.ae/chinese-new-year-catering-dubai)',
  eyebrow: 'CHINESE NEW YEAR CATERING IN DUBAI',
  introH2: 'A Lucky Start to the Lunar New Year',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Chinese New Year is one of the most food-centred celebrations of the year. Every dish carries meaning — long noodles for longevity, dumplings for wealth, whole fish for abundance, and sweet rice cakes for a higher year ahead. Our Chinese New Year catering in Dubai translates these traditions into beautifully presented menus for family reunions, corporate dinners, and community gatherings.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        We design menus that range from classic Cantonese and Sichuan sharing feasts to modern pan-Asian Lunar New Year spreads. Whether you are hosting a multi-generational reunion dinner in a villa, a company lunch in Downtown Dubai, or a casual dim sum brunch with friends, we bring the flavours, symbolism and service to match the occasion.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        This service complements our broader{' '}
        <Link to="/asian-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          Asian catering Dubai
        </Link>{' '}
        and{' '}
        <Link to="/festive-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          festive catering Dubai
        </Link>{' '}
        options, and pairs perfectly with{' '}
        <Link to="/private-party-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          private party catering Dubai
        </Link>{' '}
        for intimate home celebrations.
      </p>
    </>
  ),
  formatsH2: 'Chinese New Year Catering Formats',
  formats: [
    {
      Icon: Sparkles,
      title: 'Reunion Dinner Banquet',
      description: 'A traditional multi-course sharing menu served family-style, built around lucky dishes and premium ingredients.',
      link: '/catering-dubai',
    },
    {
      Icon: Coffee,
      title: 'Dim Sum Brunch',
      description: 'Bamboo baskets of dumplings, buns, cheung fun and small plates — ideal for daytime Lunar New Year gatherings.',
      link: '/brunch-catering-dubai',
    },
    {
      Icon: Flame,
      title: 'Live Wok & Noodle Station',
      description: 'Theatre-style cooking with fresh noodles, fried rice, stir-fries and chef-tossed dishes served hot from the pan.',
      link: '/live-cooking-stations-dubai',
    },
    {
      Icon: Utensils,
      title: 'Plated Corporate Dinner',
      description: 'Elegant plated or buffet service for company CNY dinners, client receptions and team celebrations.',
      link: '/corporate-event-catering-dubai',
    },
    {
      Icon: Home,
      title: 'Villa & Home Celebrations',
      description: 'Full-service catering in your home or villa across Dubai with setup, service and clear-down included.',
      link: '/villas-private-residences',
    },
    {
      Icon: Leaf,
      title: 'Vegetarian & Dietary Menus',
      description: 'Plant-based Buddhist-friendly options, halal proteins, gluten-free and nut-free adjustments on request.',
      link: '/vegetarian-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE CHINESE NEW YEAR CATERING WORKS',
  useCasesH2: 'Built for Tradition and Togetherness',
  useCases: [
    {
      title: 'Family Reunion Dinners',
      description:
        'Gather the generations for a lucky banquet at home or in a villa in Emirates Hills, Palm Jumeirah or Dubai Hills.',
    },
    {
      title: 'Corporate CNY Lunches',
      description:
        'Welcome the new year with staff and clients over symbolic sharing plates, live stations and festive desserts.',
    },
    {
      title: 'Community & Association Events',
      description:
        'Large-format buffet or banquet catering for Chinese cultural groups, clubs and embassy celebrations across Dubai.',
    },
    {
      title: 'Intimate Dim Sum Brunches',
      description:
        'Relaxed daytime celebrations with friends, featuring baskets of dumplings, teas and sweet treats.',
    },
  ],
  includedH2: "What's Included in Our Chinese New Year Catering",
  includedItems: [
    { title: 'Symbolic Menu Design', description: 'Dishes chosen for prosperity, longevity, abundance and good fortune, adapted to your guest list.' },
    { title: 'Asian-Inspired Starters', description: 'Spring rolls, dumplings, char siu, salads and cold platters to open the meal auspiciously.' },
    { title: 'Sharing Mains & Sides', description: 'Whole fish, Peking duck, wok-fried noodles, fried rice, seasonal greens and signature sauces.' },
    { title: 'Live Cooking Stations', description: 'Optional chef-manned wok, noodle and dumpling stations for energy and freshness.' },
    { title: 'Vegetarian & Halal Options', description: 'Menus adjusted for dietary, halal and allergy requirements without losing authenticity.' },
    { title: 'Festive Desserts & Tea', description: 'Red bean pastries, sesame balls, rice cakes, fortune cookies and Chinese tea service.' },
    { title: 'Service Staff & Setup', description: 'Professional team to plate, serve, clear and keep the celebration flowing.' },
    { title: 'Full Pack-Down & Cleanup', description: 'We leave your venue tidy so you can focus on red envelopes and reunion time.' },
  ],
  galleryH2: 'A Taste of Our Chinese New Year Catering',
  galleryImages: [
    { src: '/service-events.webp', alt: 'Chinese New Year catering set-up in Dubai' },
    { src: '/menu-appetizer.webp', alt: 'Dumplings and starters for Lunar New Year catering' },
    { src: '/menu-seafood.webp', alt: 'Whole fish and seafood for Chinese New Year banquet' },
    { src: '/menu-meat.webp', alt: 'Peking duck and roasted meats for CNY catering' },
    { src: '/service-villa.webp', alt: 'Villa Chinese New Year reunion dinner styling' },
    { src: '/menu-dessert.webp', alt: 'Lunar New Year dessert table and tea service' },
  ],
  faqsH2: 'Chinese New Year Catering Questions',
  faqs: [
    {
      q: 'What dishes are traditionally served for Chinese New Year?',
      a: 'Common symbolic dishes include dumplings for wealth, long noodles for longevity, whole fish for abundance, spring rolls for gold bars, and sweet rice cakes for a prosperous year. We build menus around these traditions.',
    },
    {
      q: 'Can you cater a Chinese New Year reunion dinner at our villa?',
      a: 'Yes. We provide full-service villa and home catering across Dubai, including table setup, service staff, live stations and cleanup, so your family can focus on the celebration.',
    },
    {
      q: 'Do you offer halal Chinese New Year catering?',
      a: 'Absolutely. All meats and ingredients can be sourced and prepared halal, and we can adjust menus for vegetarian, vegan, gluten-free and nut-free guests.',
    },
    {
      q: 'Can you include live cooking stations?',
      a: 'Yes. Live wok, noodle and dumpling stations are popular for Chinese New Year events, adding theatre and ensuring food is served fresh and hot.',
    },
    {
      q: 'How many guests can you cater for?',
      a: 'We cater intimate reunion dinners from 8 guests up to large corporate or community banquets of 100 or more.',
    },
    {
      q: 'How far in advance should I book Chinese New Year catering?',
      a: 'Two to three weeks ahead is ideal, especially for reunion weekends and corporate events. Last-minute bookings may be possible depending on availability.',
    },
  ],
  relatedServices: [
    {
      title: 'Asian Catering Dubai',
      description: 'Broader Asian menus including Chinese, Japanese, Thai and Korean flavours for any occasion.',
      image: '/images/asian-catering-dubai-hero.webp',
      link: '/asian-catering-dubai',
    },
    {
      title: 'Festive Catering Dubai',
      description: 'Seasonal menus and themed catering for celebrations throughout the year.',
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
  ctaH2: 'Celebrate the Year Ahead with myCHEF Dubai',
  ctaP:
    'Tell us about your Lunar New Year plans, guest count, venue and menu style. We will create a Chinese New Year catering experience that honours tradition and impresses your guests.',
}

export default function ChineseNewYearCatering() {
  return <ServiceLandingPage config={config} />
}
