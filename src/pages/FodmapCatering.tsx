import { Link } from 'react-router'
import { Leaf, Utensils, Home, Building, Coffee, Heart } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'fodmap-catering-dubai',
  seoTitle: 'FODMAP-Friendly Catering Dubai | Low-FODMAP Event Menus',
  metaDescription:
    'Low-FODMAP catering in Dubai for IBS-friendly events, wellness retreats and private dinners. Gentle menus without onion, garlic and high-FODMAP ingredients. Request a quote.',
  canonicalPath: '/fodmap-catering-dubai',
  ogImage: '/images/healthy-catering-dubai-hero.webp',
  breadcrumbLabel: 'FODMAP-Friendly Catering Dubai',
  h1: 'FODMAP-Friendly Catering in Dubai',
  heroSub:
    'Thoughtful low-FODMAP event catering across Dubai — gentle on digestion, full on flavour, and free from the usual trigger ingredients that can spoil a good meal.',
  heroImage: '/images/healthy-catering-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to arrange low-FODMAP catering in Dubai (via mychef.ae/fodmap-catering-dubai)",
  eyebrow: 'LOW-FODMAP CATERING IN DUBAI',
  introH2: 'Event Catering for Sensitive Digestive Systems',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Following a low-FODMAP diet in Dubai does not mean missing out on beautifully catered events. Our FODMAP-friendly catering is designed for guests who need to avoid fermentable carbohydrates — particularly excess onion, garlic, wheat, certain dairy products and some fruits — without feeling like they are eating a stripped-back plate while everyone else enjoys a feast.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        We build flavour with FODMAP-safe ingredients: fresh herbs, citrus, ginger, spring onion greens, tolerated spices, quality proteins and low-FODMAP vegetables. Every menu is planned with care, clearly labelled, and prepared with attention to cross-contact so guests can relax and eat with confidence.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        This service complements our broader{' '}
        <Link to="/healthy-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          healthy catering Dubai
        </Link>{' '}
        range and can be combined with{' '}
        <Link to="/gluten-free-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          gluten-free catering Dubai
        </Link>{' '}
        for wheat-sensitive guests. For events that also need reduced sugar, see our{' '}
        <Link to="/sugar-free-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          sugar-free catering Dubai
        </Link>{' '}
        options.
      </p>
    </>
  ),
  formatsH2: 'FODMAP-Friendly Catering Formats',
  formats: [
    {
      Icon: Utensils,
      title: 'Plated Low-FODMAP Dinners',
      description: 'Elegant plated menus where every course is built around gentle, flavourful, low-FODMAP ingredients.',
      link: '/catering-dubai',
    },
    {
      Icon: Leaf,
      title: 'Wellness Retreat Catering',
      description: 'Multi-day retreat programmes with low-FODMAP breakfasts, lunches and dinners that support digestive wellbeing.',
      link: '/healthy-catering-dubai',
    },
    {
      Icon: Home,
      title: 'Private Villa Dining',
      description: 'Relaxed at-home low-FODMAP meals for family dinners, small celebrations and houseguests across Dubai.',
      link: '/villas-private-residences',
    },
    {
      Icon: Building,
      title: 'Corporate Wellness Events',
      description: 'Office lunches and wellness days with gentle menus that keep teams comfortable and energised.',
      link: '/corporate-event-catering-dubai',
    },
    {
      Icon: Coffee,
      title: 'Low-FODMAP Brunches',
      description: 'Late-morning spreads featuring tolerated fruits, eggs, oats, rice dishes and herb-infused drinks.',
      link: '/brunch-catering-dubai',
    },
    {
      Icon: Heart,
      title: 'IBS-Friendly Celebration Menus',
      description: 'Birthdays, anniversaries and family gatherings where low-FODMAP guests can celebrate without compromise.',
      link: '/party-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE FODMAP-FRIENDLY CATERING HELPS',
  useCasesH2: 'Built for Comfortable, Confident Dining',
  useCases: [
    {
      title: 'IBS-Managed Guests',
      description:
        'Guests following a low-FODMAP approach can enjoy a full menu designed around tolerated ingredients, rather than picking at side dishes.',
    },
    {
      title: 'Wellness Retreats & Spa Days',
      description:
        'Retreat leaders choose low-FODMAP catering to align meals with digestive health, mindfulness and overall wellness goals.',
    },
    {
      title: 'Family Gatherings',
      description:
        'When one or more relatives have sensitive digestion, a FODMAP-friendly menu lets everyone share the same dishes without fuss.',
    },
    {
      title: 'Post-Medical Recovery Events',
      description:
        'Gentle, low-FODMAP meals are ideal for recovery celebrations, post-procedure gatherings or events hosted by healthcare practices.',
    },
  ],
  includedH2: "What's Included in Our FODMAP-Friendly Catering",
  includedItems: [
    { title: 'Low-FODMAP Menu Design', description: 'Dishes planned around ingredients that are gentle on digestion and naturally flavourful.' },
    { title: 'Onion- & Garlic-Free Cooking', description: 'We avoid high-FODMAP alliums and build depth with herbs, spices and infused oils instead.' },
    { title: 'Clear Ingredient Labelling', description: 'Every dish is labelled so guests can see exactly what is safe and what to avoid.' },
    { title: 'Cross-Contact Awareness', description: 'Prep and service protocols designed to reduce cross-contact with high-FODMAP ingredients.' },
    { title: 'Tolerated Carbohydrates', description: 'Rice, quinoa, oats and sourdough-style options chosen for easier digestion.' },
    { title: 'Customisable Combinations', description: 'Combine low-FODMAP with gluten-free, dairy-free, halal or sugar-free requirements.' },
    { title: 'On-Site Chefs & Service', description: 'Food cooked and served at your venue by a team briefed on dietary needs.' },
    { title: 'Full Setup & Pack-Down', description: 'Equipment, styling, service and cleanup handled from start to finish.' },
  ],
  galleryH2: 'A Taste of Our FODMAP-Friendly Catering',
  galleryImages: [
    { src: '/images/healthy-catering-dubai-hero.webp', alt: 'FODMAP-friendly catering spread in Dubai' },
    { src: '/menu-appetizer.webp', alt: 'Low-FODMAP appetisers and salads' },
    { src: '/menu-canapes.webp', alt: 'Gentle canapé selection without onion or garlic' },
    { src: '/menu-dessert.webp', alt: 'Low-FODMAP fruit and dessert display' },
    { src: '/service-corporate.webp', alt: 'Corporate wellness lunch setup' },
    { src: '/service-villa.webp', alt: 'Villa low-FODMAP dinner styling' },
  ],
  faqsH2: 'FODMAP-Friendly Catering Questions',
  faqs: [
    {
      q: 'What does FODMAP-friendly catering mean?',
      a: 'It means catering that avoids or limits high-FODMAP ingredients — such as onion, garlic, certain wheat products, some dairy and specific fruits — that can trigger digestive discomfort in sensitive individuals.',
    },
    {
      q: 'Can you provide completely onion- and garlic-free food?',
      a: 'Yes. We routinely prepare onion- and garlic-free menus, replacing their savoury depth with herbs, infused oils, citrus, ginger, spring onion greens and tolerated spices.',
    },
    {
      q: 'Is low-FODMAP catering the same as gluten-free?',
      a: 'Not exactly. Many low-FODMAP dishes happen to be gluten-free, but the two diets have different rules. We can combine both, or keep them separate, depending on your guest list.',
    },
    {
      q: 'Can you accommodate the elimination and reintroduction phases?',
      a: 'We can tailor menus to stricter elimination-phase ingredients or provide more flexible reintroduction-phase options. Share the specific foods your guests are avoiding and we will design accordingly.',
    },
    {
      q: 'What proteins and starches do you use?',
      a: 'We favour rice, quinoa, oats, potatoes and sourdough-style breads alongside poultry, fish, eggs, firm tofu and tolerated legumes in small portions. Every menu is adjusted to the guest list.',
    },
    {
      q: 'How far in advance should I book FODMAP-friendly catering?',
      a: 'Two to four weeks is ideal, especially for multi-day retreats or large events where ingredient sourcing and staff briefing need extra planning. Smaller dinners can often be arranged with one week’s notice.',
    },
  ],
  relatedServices: [
    {
      title: 'Healthy Catering Dubai',
      description: 'Balanced, nutrition-focused menus that pair naturally with low-FODMAP requirements.',
      image: '/service-catering.webp',
      link: '/healthy-catering-dubai',
    },
    {
      title: 'Gluten-Free Catering Dubai',
      description: 'Coeliac-safe menus that can be combined with low-FODMAP ingredients.',
      image: '/images/gluten-free-catering-dubai-hero.webp',
      link: '/gluten-free-catering-dubai',
    },
    {
      title: 'Sugar-Free Catering Dubai',
      description: 'Reduced-sugar menus for guests managing blood sugar alongside digestive health.',
      image: '/images/healthy-catering-dubai-hero.webp',
      link: '/sugar-free-catering-dubai',
    },
  ],
  ctaH2: 'Plan Low-FODMAP Catering That Works for Everyone',
  ctaP:
    'Tell us about your guests, event and any specific food triggers. We will create a flavourful, low-FODMAP menu that lets everyone enjoy the occasion.',
}

export default function FodmapCatering() {
  return <ServiceLandingPage config={config} />
}
