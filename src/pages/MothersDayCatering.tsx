import { Link } from 'react-router'
import { Heart, Gift, Coffee, Cake, Home, Building } from 'lucide-react'
import OccasionCateringPage from './occasion/OccasionCateringPage'
import type { OccasionPageConfig } from './occasion/OccasionCateringPage'

const config: OccasionPageConfig = {
  slug: 'mothers-day-catering-dubai',
  seoTitle: "Mother's Day Catering Dubai | myCHEF",
  metaDescription:
    "Mother's Day catering Dubai at home: brunch, lunch or afternoon tea. Buffet from AED 120. We cook at your venue. Itemised quote.",
  canonicalPath: '/private-party-catering-dubai',
  ogImage: '/images/mothers-day-catering-dubai-hero.webp',
  breadcrumbLabel: "Mother's Day Catering Dubai",
  h1: "Mother's Day Catering Dubai",
  heroSub:
    "Mother's Day catering Dubai for a family brunch, lunch or tea at home. We cook, serve and clear down. Mum stays a guest.",
  heroImage: '/images/mothers-day-catering-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to plan Mother's Day catering in Dubai (via mychef.ae/mothers-day-catering-dubai)",
  eyebrow: "MOTHER'S DAY CATERING IN DUBAI",
  introH2: "Mother's Day catering Dubai so Mum is not in the kitchen",
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Mother's Day catering Dubai is a family sitting at your villa, apartment or a room you have booked. Brunch, lunch or tea. The person who usually cooks should not be plating. We bring the team. You stay at the table.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        A staffed buffet starts from AED 120 per person. Canapés from AED 150. Drop-off from AED 90. Chef-led plated dining is AED 700–950. All before 5% VAT. There is no separate Mother’s Day floor. Pair a classic tea with{' '}
        <Link to="/afternoon-tea-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          afternoon tea catering Dubai
        </Link>
        , or a longer morning table with{' '}
        <Link to="/brunch-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          brunch catering Dubai
        </Link>
        .
      </p>
    </>
  ),
  formatsH2: "How Mother's Day is served",
  formats: [
    {
      Icon: Coffee,
      title: "Mother's Day brunch",
      description: 'Pastries, eggs, salads, fruit and coffee, at the table or as a grazing buffet.',
      link: '/brunch-catering-dubai',
    },
    {
      Icon: Cake,
      title: 'High tea and cake stands',
      description: 'Tiered stands with sandwiches, scones and cakes for a shorter afternoon sitting.',
      link: '/afternoon-tea-catering-dubai',
    },
    {
      Icon: Home,
      title: 'At-home family lunch',
      description: 'Courses cooked in your kitchen and served to the family, then cleared.',
      link: '/private-chef-dubai',
    },
    {
      Icon: Gift,
      title: 'Surprise celebration setup',
      description: 'Arrival timed so the table is set before she walks in. Flowers quoted when you want them.',
      link: '/private-party-catering-dubai',
    },
    {
      Icon: Building,
      title: 'Venue dining',
      description: 'Catering at a clubhouse or private room you have booked. Their rules, our kitchen team.',
      link: '/events',
    },
    {
      Icon: Heart,
      title: 'Multi-generational feasts',
      description: 'Grandparents, children and Mum at one table. Spice levels and portions named in the brief.',
      link: '/catering-dubai',
    },
  ],
  useCasesEyebrow: "WHERE MOTHER'S DAY CATERING WORKS",
  useCasesH2: 'Garden brunch, apartment lunch, mixed ages',
  useCases: [
    {
      title: 'Villa garden brunches',
      description:
        'Shade, a grazing table and a running order so photographs do not collide with hot food.',
    },
    {
      title: 'Intimate apartment gatherings',
      description:
        'A Downtown or Marina kitchen. We bring kit. A restaurant-scale production is the wrong brief.',
    },
    {
      title: 'Multi-generational celebrations',
      description:
        'Grandmothers, mothers, daughters and children. One menu with labelled options, not two events.',
    },
    {
      title: 'Surprise homecoming meals',
      description:
        'Timing, access and who lets the team in belong in the brief. The reveal is yours.',
    },
  ],
  includedH2: "What a staffed Mother's Day sitting includes",
  includedItems: [
    { title: 'Menu written around Mum', description: 'Her dishes, the family’s dietary notes, the time of day.' },
    { title: 'Tableware', description: 'Linen and serving kit. Flowers quoted as their own line when you want them.' },
    { title: 'Pastries and cake', description: 'Morning pastry or a cake moment, named in the quote.' },
    { title: 'Chef and staff', description: 'Licensed partners and waiters sized to the format.' },
    { title: 'Dietary notes', description: 'Vegetarian, vegan, gluten-free, dairy-free and halal dishes when named.' },
    { title: 'Drinks', description: 'Juice, tea, coffee and mocktails. Alcohol at a private residence is sourced by the host.' },
    { title: 'Setup and cleanup', description: 'The kitchen is left as we found it.' },
    { title: 'Location', description: 'Homes, villas and rooms you have booked across Dubai.' },
  ],
  galleryH2: "How Mother's Day catering looks in Dubai",
  galleryImages: [
    { src: '/images/mothers-day-catering-dubai-hero.webp', alt: "Mother's Day brunch catering setup in Dubai" },
    { src: '/menu-appetizer.webp', alt: 'Elegant appetisers for a family brunch' },
    { src: '/menu-canapes.webp', alt: "Canapés for a Mother's Day gathering" },
    { src: '/menu-dessert.webp', alt: 'Celebration cakes and pastries for Mum' },
    { src: '/service-luxury-dining.webp', alt: 'Family dining experience in Dubai' },
    { src: '/service-events.webp', alt: 'Family event catering in Dubai' },
  ],
  faqsH2: 'Questions before you book',
  faqs: [
    {
      q: "Can you cater Mother's Day at my home or villa?",
      a: 'Yes. Brunch, lunch or tea at your address. Staffed bookings include setup, service and clear-down.',
    },
    {
      q: 'Do you provide flowers and table styling?',
      a: 'Tableware is part of a staffed sitting. Flowers and extra styling are quoted as their own line when you ask for them.',
    },
    {
      q: "What kind of menu works best for Mother's Day?",
      a: 'Brunch and tea are the usual formats. A seated lunch if the table is the event. We write it around what she eats.',
    },
    {
      q: 'Can you accommodate large multi-generational families?',
      a: 'Yes. That is the usual brief. Portions, spice and dietary notes belong in the first draft.',
    },
    {
      q: 'How far in advance should I book?',
      a: 'Two to four weeks is the usual window. The date itself fills earlier.',
    },
    {
      q: 'Do you offer alcohol-free options?',
      a: 'Yes. Mocktails, juice, tea and coffee. Alcohol at a private residence is sourced by the host.',
    },
  ],
  relatedServices: [
    {
      title: 'Afternoon Tea Catering',
      description: 'Tiered tea when the sitting is shorter than a brunch.',
      image: '/images/afternoon-tea-catering-dubai-hero.webp',
      link: '/afternoon-tea-catering-dubai',
    },
    {
      title: 'Brunch Catering',
      description: 'A late morning table when the date is not Mother’s Day.',
      image: '/service-luxury-dining.webp',
      link: '/brunch-catering-dubai',
    },
    {
      title: 'Private Chef Dubai',
      description: 'A household chef visit, if the brief is one table and a workable kitchen.',
      image: '/service-private-chef.webp',
      link: '/private-chef-dubai',
    },
  ],
  ctaH2: 'Send the date, guest count and what Mum eats',
  ctaP:
    "Tell us brunch, lunch or tea, how many people and the address. We send an itemised Mother's Day catering Dubai quote.",
  showTrustSignalStrip: true,
}

export default function MothersDayCatering() {
  return <OccasionCateringPage config={config} />
}
