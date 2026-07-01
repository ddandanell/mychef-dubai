import { Link } from 'react-router'
import { Shell, Utensils, Wine, Droplets, Fish, Sparkles } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'oyster-bar-dubai',
  seoTitle: 'Oyster & Seafood Bar Dubai | Premium Shellfish & Caviar',
  metaDescription:
    'Oyster and seafood bar in Dubai: fresh oysters, chilled shellfish, caviar and premium seafood platters for weddings, corporate events and private parties.',
  canonicalPath: '/oyster-bar-dubai',
  ogImage: '/images/sushi-catering-dubai-hero.webp',
  breadcrumbLabel: 'Oyster & Seafood Bar Dubai',
  h1: 'Oyster & Seafood Bar in Dubai',
  heroSub:
    'Impress your guests with a premium oyster and seafood bar in Dubai — freshly shucked oysters, chilled prawns, crab, lobster and caviar presented beautifully for weddings, galas and exclusive private events.',
  heroImage: '/images/sushi-catering-dubai-hero.webp',
  whatsappMessage:
    'Hi myCHEF Dubai, I would like to arrange an oyster and seafood bar in Dubai (via mychef.ae/oyster-bar-dubai)',
  eyebrow: 'OYSTER & SEAFOOD BAR IN DUBAI',
  introH2: 'The Finest Catch, Served in Style',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        An oyster and seafood bar is the ultimate statement in elegant catering. Piled high with crushed ice, lemon wedges, delicate sauces and the freshest shellfish, it becomes a natural gathering point at weddings, corporate galas, yacht parties and private dinners. Our oyster and seafood bar in Dubai brings restaurant-quality presentation and flavour to any venue across the city.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        We source premium oysters, chilled prawns, crab legs, lobster, mussels, clams and seasonal fish, arranged on tiered platters or custom-built ice bars. Our team includes experienced shuckers and servers who keep the station replenished, clean and inviting throughout your event. Pair the bar with champagne, white wine or bespoke mocktails for a complete luxury experience.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        The seafood bar pairs beautifully with our{' '}
        <Link to="/sushi-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          sushi catering Dubai
        </Link>{' '}
        and{' '}
        <Link to="/yachts" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          yacht catering Dubai
        </Link>{' '}
        services, and adds a refined touch to{' '}
        <Link to="/gala-dinner-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          gala dinner catering Dubai
        </Link>{' '}
        receptions.
      </p>
    </>
  ),
  formatsH2: 'Seafood Bar Formats',
  formats: [
    {
      Icon: Shell,
      title: 'Fresh Oyster Bar',
      description: 'Premium oysters shucked to order with mignonette, lemon, tabasco and classic accompaniments.',
      link: '/sushi-catering-dubai',
    },
    {
      Icon: Fish,
      title: 'Chilled Seafood Platters',
      description: 'Tiered displays of prawns, crab, lobster, mussels and clams served on crushed ice.',
      link: '/catering-dubai',
    },
    {
      Icon: Sparkles,
      title: 'Caviar & Champagne Station',
      description: 'Luxury caviar service with blinis, crème fraîche and chilled champagne pairings.',
      link: '/bar-services-dubai',
    },
    {
      Icon: Utensils,
      title: 'Seafood Buffet Station',
      description: 'A larger format seafood buffet with hot and cold dishes for gala dinners and weddings.',
      link: '/buffet-catering-dubai',
    },
    {
      Icon: Wine,
      title: 'Yacht Seafood Bar',
      description: 'Elegant onboard oyster and shellfish service tailored for yacht events and sunset cruises.',
      link: '/yachts',
    },
    {
      Icon: Droplets,
      title: 'Raw Bar with Live Shucker',
      description: 'An interactive raw bar where guests choose oysters and watch them being freshly shucked.',
      link: '/live-cooking-stations-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE OYSTER & SEAFOOD BARS WORK',
  useCasesH2: 'A Showpiece for Premium Events',
  useCases: [
    {
      title: 'Wedding Receptions',
      description:
        'Create an unforgettable reception moment with a beautifully styled seafood bar during cocktail hour or late evening.',
    },
    {
      title: 'Corporate Galas & Launches',
      description:
        'Add prestige to product launches, awards nights and client receptions with a premium shellfish station.',
    },
    {
      title: 'Yacht Parties & Beach Clubs',
      description:
        'Perfect for waterfront venues where chilled seafood, sparkling wine and sea breezes come together.',
    },
    {
      title: 'Private Dinner Parties',
      description:
        'Bring fine-dining seafood service into a villa or residence for an intimate, luxurious evening.',
    },
  ],
  includedH2: "What's Included in Our Oyster & Seafood Bar",
  includedItems: [
    { title: 'Premium Shellfish Selection', description: 'Fresh oysters, prawns, crab, lobster, mussels and clams sourced for quality and freshness.' },
    { title: 'Professional Shuckers', description: 'Trained staff to shuck oysters, prepare platters and serve guests with care.' },
    { title: 'Elegant Ice Display', description: 'Crushed-ice bar or tiered platters styled to suit your event theme.' },
    { title: 'Classic Accompaniments', description: 'Mignonette, lemon, cocktail sauce, tabasco, horseradish and fresh herbs.' },
    { title: 'Caviar & Luxury Add-Ons', description: 'Optional caviar service, blinis and premium garnishes for top-tier events.' },
    { title: 'Drink Pairing Suggestions', description: 'Champagne, white wine and mocktail pairing recommendations on request.' },
    { title: 'Service Staff & Replenishment', description: 'Attentive team to keep the bar full, clean and visually striking.' },
    { title: 'Setup, Breakdown & Cleanup', description: 'Full station setup, service and clear-down handled by our team.' },
  ],
  galleryH2: 'A Taste of Our Oyster & Seafood Bar',
  galleryImages: [
    { src: '/images/sushi-catering-dubai-hero.webp', alt: 'Oyster and seafood bar at a Dubai event' },
    { src: '/menu-seafood.webp', alt: 'Chilled shellfish and prawns on ice' },
    { src: '/menu-appetizer.webp', alt: 'Elegant seafood starters and canapés' },
    { src: '/service-events.webp', alt: 'Premium seafood station setup' },
    { src: '/service-villa.webp', alt: 'Villa private dinner seafood display' },
    { src: '/menu-dessert.webp', alt: 'Refined dessert to follow a seafood menu' },
  ],
  faqsH2: 'Oyster & Seafood Bar Questions',
  faqs: [
    {
      q: 'What seafood is included in the bar?',
      a: 'We typically offer fresh oysters, chilled prawns, crab, lobster, mussels and clams. Caviar and other luxury items can be added on request.',
    },
    {
      q: 'Can the oyster bar be set up on a yacht or beach venue?',
      a: 'Yes. Our team is experienced in catering for yachts, beach clubs, poolside venues and outdoor locations across Dubai.',
    },
    {
      q: 'Do you provide professional oyster shuckers?',
      a: 'Absolutely. Every oyster and seafood bar is staffed by trained shuckers and servers to ensure safety, quality and presentation.',
    },
    {
      q: 'Can you accommodate shellfish allergies or dietary restrictions?',
      a: 'Yes. We clearly label items, avoid cross-contamination and can provide non-shellfish alternatives for guests with allergies.',
    },
    {
      q: 'How far in advance should I book a seafood bar?',
      a: 'One to two weeks is recommended to secure the freshest seafood and allow time for custom styling. Large galas may require more notice.',
    },
    {
      q: 'Is caviar service available?',
      a: 'Yes. Caviar can be added as a premium upgrade, served with blinis, crème fraîche and mother-of-pearl spoons.',
    },
  ],
  relatedServices: [
    {
      title: 'Sushi Catering Dubai',
      description: 'Hand-rolled sushi, sashimi and Japanese-inspired platters for events of any size.',
      image: '/images/sushi-catering-dubai-hero.webp',
      link: '/sushi-catering-dubai',
    },
    {
      title: 'Yacht Catering Dubai',
      description: 'Luxury onboard dining, canapés and seafood service for yacht events and cruises.',
      image: '/service-luxury-dining.webp',
      link: '/yachts',
    },
    {
      title: 'Gala Dinner Catering',
      description: 'Full-service gala catering with premium menus, stations and white-glove service.',
      image: '/service-events.webp',
      link: '/gala-dinner-catering-dubai',
    },
  ],
  ctaH2: 'Create an Unforgettable Seafood Experience',
  ctaP:
    'Tell us about your event, guest count, venue and preferred seafood selection. We will design an oyster and seafood bar that delivers luxury, freshness and lasting impressions.',
}

export default function OysterBar() {
  return <ServiceLandingPage config={config} />
}
