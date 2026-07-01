import { Link } from 'react-router'
import { Heart, Gift, Coffee, Cake, Home, Building } from 'lucide-react'
import OccasionCateringPage from './occasion/OccasionCateringPage'
import type { OccasionPageConfig } from './occasion/OccasionCateringPage'

const config: OccasionPageConfig = {
  slug: 'mothers-day-catering-dubai',
  seoTitle: "Mother's Day Catering Dubai | Brunch, Lunch & High Tea",
  metaDescription:
    "Mother's Day catering in Dubai: elegant brunch, private lunch and high tea at home or venue. Spoil her with a bespoke menu, flowers and seamless service.",
  canonicalPath: '/mothers-day-catering-dubai',
  ogImage: '/images/mothers-day-catering-dubai-hero.webp',
  breadcrumbLabel: "Mother's Day Catering Dubai",
  h1: "Mother's Day Catering in Dubai",
  heroSub:
    "Celebrate Mum with a beautifully catered Mother's Day brunch, lunch or high tea in your Dubai home, villa or venue — bespoke menus, fresh flowers and zero stress.",
  heroImage: '/images/mothers-day-catering-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to plan Mother's Day catering in Dubai (via mychef.ae/mothers-day-catering-dubai)",
  eyebrow: "MOTHER'S DAY CATERING IN DUBAI",
  introH2: "A Mother's Day Celebration She Actually Deserves",
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Mother's Day should feel effortless for the person who usually does everything. Instead of packing the family into a busy restaurant, bring the celebration home with a private chef and catering team who handle every detail. From a leisurely brunch spread to an elegant afternoon tea or a multi-course lunch, we create a relaxed, beautiful experience centred around her.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        We cater Mother's Day gatherings across Dubai — villas in Emirates Hills and Arabian Ranches, penthouses in Downtown, beachfront homes in Jumeirah and venues across the city. Pair this with our{' '}
        <Link to="/afternoon-tea-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          afternoon tea catering Dubai
        </Link>{' '}
        for a classic high-tea experience, or explore{' '}
        <Link to="/brunch-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          brunch catering Dubai
        </Link>{' '}
        for a more casual family feast.
      </p>
    </>
  ),
  formatsH2: "Mother's Day Catering Formats",
  formats: [
    {
      Icon: Coffee,
      title: 'Mother\'s Day Brunch',
      description: 'A relaxed family brunch with fresh pastries, eggs, salads, fruits and sparkling refreshments — served at your table or as a grazing buffet.',
      link: '/brunch-catering-dubai',
    },
    {
      Icon: Cake,
      title: 'High Tea & Cake Stands',
      description: 'Elegant tiered stands with finger sandwiches, scones, preserves and delicate cakes for a refined Mother\'s Day afternoon.',
      link: '/afternoon-tea-catering-dubai',
    },
    {
      Icon: Home,
      title: 'At-Home Family Lunch',
      description: 'A private multi-course lunch prepared in your kitchen and served to the whole family, with cleanup handled afterwards.',
      link: '/private-chef-dubai',
    },
    {
      Icon: Gift,
      title: 'Surprise Celebration Setup',
      description: 'We coordinate timing, flowers and table styling so the moment she walks in feels instantly special.',
      link: '/party-catering-dubai',
    },
    {
      Icon: Building,
      title: 'Venue & Restaurant-Style Dining',
      description: 'Catering delivered to a private venue, clubhouse or restaurant space for larger multi-generational gatherings.',
      link: '/event-catering-dubai',
    },
    {
      Icon: Heart,
      title: 'Grandmother & Multi-Gen Feasts',
      description: 'Menus designed to please every generation — light options for grandparents, playful dishes for children and indulgent treats for Mum.',
      link: '/catering-dubai',
    },
  ],
  useCasesEyebrow: "WHERE MOTHER'S DAY CATERING WORKS",
  useCasesH2: "Celebrations Built Around Family",
  useCases: [
    {
      title: 'Villa Garden Brunches',
      description:
        "Dubai villas with pools and gardens make the perfect backdrop for a Mother's Day brunch. We set up shaded grazing tables, live cooking stations and floral table styling while the family relaxes.",
    },
    {
      title: 'Intimate Apartment Gatherings',
      description:
        'Even in smaller Downtown or Marina apartments, a private chef can create a restaurant-quality lunch without anyone leaving the sofa. We bring equipment, ingredients and a friendly server.',
    },
    {
      title: 'Multi-Generational Celebrations',
      description:
        'Grandmothers, mothers, daughters and children often celebrate together. We balance cuisines, spice levels and portion sizes so every generation enjoys the same meal.',
    },
    {
      title: 'Surprise Homecoming Meals',
      description:
        'If the plan is to surprise Mum with a beautifully set table and her favourite dishes, we coordinate arrival, styling and service so the reveal is picture-perfect.',
    },
  ],
  includedH2: "What's Included in Our Mother's Day Catering",
  includedItems: [
    { title: 'Bespoke Brunch or Lunch Menu', description: 'A menu designed around Mum\'s favourite cuisines, dietary needs and the family\'s tastes.' },
    { title: 'Fresh Flowers & Table Styling', description: 'Soft linens, floral arrangements and elegant tableware to set a celebratory mood.' },
    { title: 'Pastries, Cakes & Sweet Displays', description: 'Fresh pastries, celebration cakes and patisserie arranged beautifully for the occasion.' },
    { title: 'Private Chef & Service Staff', description: 'A discreet chef and attentive staff to cook, serve and clear away throughout the meal.' },
    { title: 'Dietary Accommodation', description: 'Vegetarian, vegan, gluten-free, dairy-free and halal options available for the whole family.' },
    { title: 'Drinks & Bubbly Service', description: 'Fresh juices, teas, coffee and sparkling mocktails or champagne service on request.' },
    { title: 'Full Setup & Cleanup', description: 'We arrive early, prepare, serve and leave the kitchen and dining space spotless.' },
    { title: 'Flexible Locations', description: 'Service at homes, villas, venues and clubhouses anywhere in Dubai.' },
  ],
  galleryH2: "A Taste of Our Mother's Day Catering",
  galleryImages: [
    { src: '/images/mothers-day-catering-dubai-hero.webp', alt: "Mother's Day brunch catering setup in Dubai" },
    { src: '/menu-appetizer.webp', alt: 'Elegant appetisers for a family brunch' },
    { src: '/menu-canapes.webp', alt: "Canapés for a Mother's Day gathering" },
    { src: '/menu-dessert.webp', alt: 'Celebration cakes and pastries for Mum' },
    { src: '/service-luxury-dining.webp', alt: 'Luxury family dining experience in Dubai' },
    { src: '/service-events.webp', alt: 'Family event catering in Dubai' },
  ],
  faqsH2: "Mother's Day Catering Questions",
  faqs: [
    {
      q: "Can you cater Mother's Day at my home or villa?",
      a: 'Yes. We bring everything needed for a beautiful brunch, lunch or high tea in your home, villa or private venue across Dubai.',
    },
    {
      q: 'Do you provide flowers and table styling?',
      a: 'Yes. We can include fresh flowers, linens, candles and elegant tableware as part of the setup, styled around the occasion.',
    },
    {
      q: "What kind of menu works best for Mother's Day?",
      a: 'Brunch and high tea are the most popular formats, but we also create relaxed lunches and grazing spreads. The menu is always tailored to Mum\'s preferences.',
    },
    {
      q: 'Can you accommodate large multi-generational families?',
      a: 'Absolutely. We regularly cater multi-generational gatherings and design menus with varied spice levels, textures and dietary needs in mind.',
    },
    {
      q: 'How far in advance should I book?',
      a: "Mother's Day is a popular date. We recommend booking two to four weeks ahead to secure your preferred time, menu and styling.",
    },
    {
      q: 'Do you offer alcohol-free options?',
      a: 'Yes. We offer elegant mocktails, fresh juices, sparkling non-alcoholic options and specialty teas and coffees for the whole family.',
    },
  ],
  relatedServices: [
    {
      title: 'Afternoon Tea Catering',
      description: 'Elegant high tea with tiered stands — a classic way to celebrate Mum.',
      image: '/images/afternoon-tea-catering-dubai-hero.webp',
      link: '/afternoon-tea-catering-dubai',
    },
    {
      title: 'Brunch Catering',
      description: 'Relaxed, generous brunch spreads perfect for family gatherings.',
      image: '/service-luxury-dining.webp',
      link: '/brunch-catering-dubai',
    },
    {
      title: 'Private Chef Dubai',
      description: 'A dedicated chef in your home for an intimate, restaurant-quality meal.',
      image: '/service-private-chef.webp',
      link: '/private-chef-dubai',
    },
  ],
  ctaH2: "Give Mum the Mother's Day She Deserves",
  ctaP:
    "Tell us about your family, venue and how you want to spoil her. We will design a beautiful Mother's Day menu and experience that lets everyone relax and celebrate together.",
}

export default function MothersDayCatering() {
  return <OccasionCateringPage config={config} />
}
