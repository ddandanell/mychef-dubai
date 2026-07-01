import { Link } from 'react-router'
import { Fish, Utensils, Leaf, Home, Building, PartyPopper } from 'lucide-react'
import DietaryCateringPage from './dietary/DietaryCateringPage'
import type { DietaryPageConfig } from './dietary/DietaryCateringPage'

const config: DietaryPageConfig = {
  slug: 'pescatarian-catering-dubai',
  seoTitle: 'Pescatarian Catering Dubai | Seafood-Focused Event Menus',
  metaDescription:
    'Pescatarian catering in Dubai for events, villas and offices. Seafood-forward menus with seasonal vegetables, dairy-free options and full-service execution. Request a quote today.',
  canonicalPath: '/pescatarian-catering-dubai',
  ogImage: '/images/pescatarian-catering-dubai-hero.webp',
  breadcrumbLabel: 'Pescatarian Catering Dubai',
  h1: 'Pescatarian Catering in Dubai',
  heroSub:
    'Seafood-led menus, fresh seasonal produce and flexible preparation for weddings, villa dinners, corporate events and celebrations across Dubai.',
  heroImage: '/images/pescatarian-catering-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to plan pescatarian catering in Dubai (via mychef.ae/pescatarian-catering-dubai)",
  eyebrow: 'PESCATARIAN CATERING IN DUBAI',
  introH2: 'Pescatarian Dining Done Beautifully',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        A pescatarian diet brings together the best of the ocean and the garden: fresh fish, shellfish, eggs and dairy alongside vibrant vegetables, grains and legumes. Our pescatarian catering in Dubai is designed for guests who want a seafood-forward menu without red meat or poultry, served with the same luxury presentation and attentive service that defines every myCHEF Dubai event.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        We work with trusted suppliers to source the freshest local and imported seafood, then build menus around it. Think grilled sea bass with herb oil, prawn skewers with citrus glaze, seafood paella, tuna tartare, and colourful salads that balance every plate. Whether your event is fully pescatarian or you need a dedicated seafood station within a larger menu, our chefs make it feel generous and intentional.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        Explore how this sits alongside our{' '}
        <Link to="/sushi-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          sushi catering Dubai
        </Link>{' '}
        for raw-bar experiences, or see our broader{' '}
        <Link to="/healthy-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          healthy catering Dubai
        </Link>{' '}
        options for wellness-focused events.
      </p>
    </>
  ),
  formatsH2: 'Pescatarian Formats for Every Event',
  formats: [
    {
      Icon: Utensils,
      title: 'Plated Seafood Dinners',
      description: 'Elegant multi-course menus with fish or shellfish as the hero, complemented by seasonal vegetables and grains.',
      link: '/catering-dubai',
    },
    {
      Icon: Fish,
      title: 'Pescatarian Buffets & Stations',
      description: 'Self-serve buffets and live stations featuring grilled fish, prawns, paella and fresh salads.',
      link: '/buffet-catering-dubai',
    },
    {
      Icon: Leaf,
      title: 'Vegetable-Forward Pescatarian',
      description: 'Menus where seafood accents abundant plant-based dishes for a lighter, balanced feel.',
      link: '/vegetarian-catering-dubai',
    },
    {
      Icon: PartyPopper,
      title: 'Seafood Canapés & Receptions',
      description: 'Bite-sized seafood creations for cocktail receptions and welcome parties.',
      link: '/canape-catering-dubai',
    },
    {
      Icon: Home,
      title: 'Villa & Home Pescatarian Dining',
      description: 'Full-service pescatarian dining at home across Palm Jumeirah, Emirates Hills and Dubai Hills.',
      link: '/villas-private-residences',
    },
    {
      Icon: Building,
      title: 'Corporate Pescatarian Lunches',
      description: 'Inclusive office lunches with seafood and vegetarian options, clearly labelled and beautifully presented.',
      link: '/corporate-event-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE PESCATARIAN CATERING HELPS',
  useCasesH2: 'Designed for Seafood-Loving Guests',
  useCases: [
    {
      title: 'Weddings with Diverse Diets',
      description:
        'A pescatarian main course or station gives guests a premium protein option while keeping the menu inclusive and elegant.',
    },
    {
      title: 'Villa Dinners & Celebrations',
      description:
        'Host a relaxed yet refined seafood dinner at home with grilled fish, mezze-style sides and desserts that everyone can enjoy.',
    },
    {
      title: 'Corporate Wellness Events',
      description:
        'Seafood-rich menus align with wellness goals while offering satisfying, protein-forward options for team lunches and boardroom dining.',
    },
    {
      title: 'Beach & Poolside Gatherings',
      description:
        'Light, coastal-inspired pescatarian menus are a natural fit for outdoor events by the water across Dubai.',
    },
  ],
  includedH2: "What's Included in Our Pescatarian Catering",
  includedItems: [
    { title: 'Seafood-Forward Menu Design', description: 'Every dish planned around fresh fish and shellfish with vibrant seasonal produce.' },
    { title: 'Fresh, Responsibly Sourced Seafood', description: 'Quality local and imported seafood selected for flavour, texture and sustainability.' },
    { title: 'Vegetarian & Dairy-Free Flexibility', description: 'Easily adaptable menus for guests who also avoid dairy or eggs.' },
    { title: 'Live Grills & Stations', description: 'On-site grilling, seafood paella and carving stations for interactive service.' },
    { title: 'Canapés & Starters', description: 'Tuna tartare, prawn skewers, smoked salmon bites and other elegant seafood appetisers.' },
    { title: 'Balanced Sides & Salads', description: 'Grains, pulses, roasted vegetables and fresh salads that round out every plate.' },
    { title: 'Desserts Without Compromise', description: 'Fruit-forward and dairy-optional desserts that keep the menu light and inclusive.' },
    { title: 'Full Service & Cleanup', description: 'Chefs, service staff and full pack-down so you can focus on your guests.' },
  ],
  galleryH2: 'A Taste of Our Pescatarian Catering',
  galleryImages: [
    { src: '/images/pescatarian-catering-dubai-hero.webp', alt: 'Pescatarian catering spread in Dubai' },
    { src: '/menu-appetizer.webp', alt: 'Seafood appetisers for pescatarian catering' },
    { src: '/menu-mains.webp', alt: 'Grilled fish and seafood main dishes' },
    { src: '/menu-dessert.webp', alt: 'Light desserts for pescatarian events' },
    { src: '/service-events.webp', alt: 'Event catering service in Dubai' },
    { src: '/service-luxury-dining.webp', alt: 'Luxury private dining experience in Dubai' },
  ],
  faqsH2: 'Pescatarian Catering Questions',
  faqs: [
    {
      q: 'What does pescatarian catering include?',
      a: 'Our pescatarian menus include fish, shellfish, eggs, dairy, vegetables, grains and legumes. We avoid all red meat and poultry, and can further adapt for dairy-free or egg-free guests.',
    },
    {
      q: 'Can pescatarian dishes be served alongside meat dishes?',
      a: 'Yes. We can create a fully pescatarian event or integrate a dedicated seafood station, plated option or buffet line within a larger mixed menu.',
    },
    {
      q: 'Do you offer live seafood stations?',
      a: 'Absolutely. Live grilling, seafood paella stations and raw bars are popular formats that add theatre and freshness to pescatarian events.',
    },
    {
      q: 'Is your seafood fresh and sustainably sourced?',
      a: 'We source fresh seafood daily from trusted local and international suppliers, choosing quality and responsible sourcing wherever possible.',
    },
    {
      q: 'Can you accommodate guests who are allergic to shellfish?',
      a: 'Yes. We can prepare shellfish-free pescatarian menus using fin fish only, and follow strict separation protocols to reduce cross-contact risks.',
    },
    {
      q: 'How far in advance should I book pescatarian catering?',
      a: 'Two to four weeks is ideal, especially for large villa events or weddings where premium seafood needs advance ordering. During peak season, earlier is better.',
    },
  ],
  relatedServices: [
    {
      title: 'Sushi Catering Dubai',
      description: 'Premium sushi and sashimi experiences for receptions, dinners and private events.',
      image: '/menu-appetizer.webp',
      link: '/sushi-catering-dubai',
    },
    {
      title: 'Healthy Catering Dubai',
      description: 'Balanced, nutrition-conscious menus that pair naturally with pescatarian dining.',
      image: '/service-corporate.webp',
      link: '/healthy-catering-dubai',
    },
    {
      title: 'Buffet Catering Dubai',
      description: 'Elegant buffet formats ideal for showcasing seafood and vegetarian stations together.',
      image: '/service-events.webp',
      link: '/buffet-catering-dubai',
    },
  ],
  ctaH2: 'Plan a Pescatarian Menu Your Guests Will Love',
  ctaP:
    'Tell us about your event, guest count and any dietary needs. We will design a seafood-led pescatarian catering experience that feels fresh, generous and perfectly hosted.',
}

export default function PescatarianCatering() {
  return <DietaryCateringPage config={config} />
}
