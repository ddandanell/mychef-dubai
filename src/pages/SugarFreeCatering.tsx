import { Link } from 'react-router'
import { Apple, Heart, Building, Home, Coffee, Utensils } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'sugar-free-catering-dubai',
  seoTitle: 'Sugar-Free Catering Dubai | Diabetic-Friendly Event Menus',
  metaDescription:
    'Sugar-free and diabetic-friendly catering in Dubai for offices, villas and wellness events. Naturally sweetened dishes, low-GI menus and full setup. Request a quote.',
  canonicalPath: '/sugar-free-catering-dubai',
  ogImage: '/images/healthy-catering-dubai-hero.webp',
  breadcrumbLabel: 'Sugar-Free Catering Dubai',
  h1: 'Sugar-Free Catering in Dubai',
  heroSub:
    'Diabetic-friendly and reduced-sugar event catering across Dubai — delicious menus that keep blood sugar steady without sacrificing flavour or presentation.',
  heroImage: '/images/healthy-catering-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to arrange sugar-free/diabetic-friendly catering in Dubai (via mychef.ae/sugar-free-catering-dubai)",
  eyebrow: 'DIABETIC-FRIENDLY CATERING IN DUBAI',
  introH2: 'Event Catering That Respects Every Guest’s Health',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Sugar-conscious eating is no longer a niche request. Across Dubai, hosts regularly need diabetic-friendly catering, reduced-sugar menus and wellness-focused options that still feel celebratory. Our sugar-free catering service is designed for exactly that: plates that are lower in refined sugar, balanced in flavour, and beautiful enough for weddings, corporate events and private dinners.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        We do not simply remove sugar and call it healthy. Instead, we build flavour with ripe seasonal fruit, warm spices, quality dairy, nuts and naturally sweet vegetables, using alternative sweeteners only where they genuinely improve the dish. The result is food that satisfies sweet cravings and savoury appetites alike, while keeping glycaemic impact in mind.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        This approach works alongside our wider{' '}
        <Link to="/healthy-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          healthy catering Dubai
        </Link>{' '}
        range and pairs naturally with{' '}
        <Link to="/keto-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          keto catering Dubai
        </Link>{' '}
        for low-carb events. We can also combine sugar-free requirements with{' '}
        <Link to="/gluten-free-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          gluten-free catering Dubai
        </Link>{' '}
        in a single coherent menu.
      </p>
    </>
  ),
  formatsH2: 'Sugar-Free Catering Formats',
  formats: [
    {
      Icon: Utensils,
      title: 'Plated Sugar-Free Dinners',
      description: 'Elegant multi-course menus with reduced-sugar sauces, naturally sweet sides and diabetic-friendly desserts.',
      link: '/catering-dubai',
    },
    {
      Icon: Apple,
      title: 'Wellness-Focused Buffets',
      description: 'Buffet lines built around lean proteins, whole grains, fresh salads and fruit-forward options with no hidden sugars.',
      link: '/buffet-catering-dubai',
    },
    {
      Icon: Coffee,
      title: 'Corporate Wellness Lunches',
      description: 'Office lunches that keep energy stable through the afternoon with low-GI mains and sugar-free beverages.',
      link: '/office-catering-dubai',
    },
    {
      Icon: Home,
      title: 'Villa & Private Dinners',
      description: 'Intimate at-home dining in Emirates Hills, Palm Jumeirah and across Dubai with personalised sugar-free menus.',
      link: '/villas-private-residences',
    },
    {
      Icon: Building,
      title: 'Healthcare & Clinic Events',
      description: 'Catering for medical practices, wellness clinics and health screenings with menus aligned to dietary guidance.',
      link: '/corporate-event-catering-dubai',
    },
    {
      Icon: Heart,
      title: 'Celebration Dessert Tables',
      description: 'Sugar-free cakes, fruit platters and naturally sweetened treats so everyone can join the celebration.',
      link: '/dessert-table-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE SUGAR-FREE CATERING HELPS',
  useCasesH2: 'Built for Health-Conscious Hosts',
  useCases: [
    {
      title: 'Diabetic Guest Events',
      description:
        'When one or more guests manage diabetes, a thoughtful sugar-free menu removes anxiety and ensures everyone can eat freely and safely.',
    },
    {
      title: 'Corporate Wellness Programmes',
      description:
        'Dubai companies investing in employee wellbeing choose reduced-sugar catering for town halls, retreats and weekly lunches.',
    },
    {
      title: 'Fitness & Retreat Groups',
      description:
        'Villa wellness retreats and fitness bootcamps benefit from low-sugar, nutrient-dense meals that support the programme goals.',
    },
    {
      title: 'Family Celebrations',
      description:
        'Birthdays, Eid and family gatherings often span generations. Sugar-free options let older relatives and health-conscious guests celebrate fully.',
    },
  ],
  includedH2: "What's Included in Our Sugar-Free Catering",
  includedItems: [
    { title: 'Reduced-Sugar Menu Design', description: 'Every dish developed with minimal refined sugar, relying on natural sweetness and seasoning.' },
    { title: 'Diabetic-Friendly Options', description: 'Low-GI carbohydrates, lean proteins and healthy fats to support stable blood sugar.' },
    { title: 'Naturally Sweetened Desserts', description: 'Fruit-based desserts, sugar-free bakes and carefully portioned treats using alternative sweeteners.' },
    { title: 'No Hidden Sugars', description: 'Sauces, dressings and marinades made without added sugars or syrups.' },
    { title: 'Clear Dietary Labelling', description: 'Every item labelled so guests can see what is sugar-free, low-carb or naturally sweetened.' },
    { title: 'Customisable Combinations', description: 'Combine sugar-free with gluten-free, dairy-free, keto or halal requirements in one menu.' },
    { title: 'On-Site Chefs & Service', description: 'Food prepared, finished and served at your venue by our experienced team.' },
    { title: 'Full Setup & Pack-Down', description: 'We bring equipment, style the buffet or table, serve and clear away afterwards.' },
  ],
  galleryH2: 'A Taste of Our Sugar-Free Catering',
  galleryImages: [
    { src: '/images/healthy-catering-dubai-hero.webp', alt: 'Sugar-free catering spread in Dubai' },
    { src: '/menu-appetizer.webp', alt: 'Reduced-sugar appetisers and salads' },
    { src: '/menu-canapes.webp', alt: 'Naturally sweetened canapé selection' },
    { src: '/menu-dessert.webp', alt: 'Sugar-free dessert display' },
    { src: '/service-corporate.webp', alt: 'Corporate wellness lunch setup' },
    { src: '/service-villa.webp', alt: 'Villa sugar-free dinner styling' },
  ],
  faqsH2: 'Sugar-Free Catering Questions',
  faqs: [
    {
      q: 'Is your sugar-free catering suitable for diabetics?',
      a: 'Yes. We design diabetic-friendly menus with low-GI ingredients, controlled carbohydrates and no added refined sugars. We can also coordinate with your guests or medical guidance for specific needs.',
    },
    {
      q: 'Do you use artificial sweeteners?',
      a: 'We prefer natural sweetness from fruit, spices and dairy, and use alternative sweeteners only when they genuinely improve a dessert. We avoid excessive reliance on artificial substitutes.',
    },
    {
      q: 'Can the entire menu be sugar-free?',
      a: 'Absolutely. We can design an event where every dish — from appetisers to desserts — is reduced-sugar or sugar-free, so no guest feels singled out.',
    },
    {
      q: 'Are sugar-free menus also gluten-free or dairy-free?',
      a: 'They can be. Many sugar-free dishes are naturally gluten-free, and we can adapt recipes to be dairy-free, keto or halal on request. Just share the requirements during planning.',
    },
    {
      q: 'What desserts can you offer without sugar?',
      a: 'Options include fruit platters, sugar-free cheesecakes, dark chocolate barks, chia puddings, nut-based tarts and naturally sweetened Arabic treats. We tailor desserts to your theme and guest preferences.',
    },
    {
      q: 'How far in advance should I book sugar-free catering?',
      a: 'Two to four weeks is ideal, especially for large events or multi-day wellness programmes. Smaller villa dinners can often be arranged with one week’s notice.',
    },
  ],
  relatedServices: [
    {
      title: 'Healthy Catering Dubai',
      description: 'Balanced, nutrition-focused menus that pair naturally with sugar-free requirements.',
      image: '/service-catering.webp',
      link: '/healthy-catering-dubai',
    },
    {
      title: 'Keto Catering Dubai',
      description: 'Low-carb, high-protein menus that overlap naturally with reduced-sugar dining.',
      image: '/service-events.webp',
      link: '/keto-catering-dubai',
    },
    {
      title: 'Gluten-Free Catering Dubai',
      description: 'Coeliac-safe and gluten-free menus that can be combined with sugar-free options.',
      image: '/menu-canapes.webp',
      link: '/gluten-free-catering-dubai',
    },
  ],
  ctaH2: 'Plan Sugar-Free Catering That Everyone Enjoys',
  ctaP:
    'Tell us about your event, guest health needs and preferred menu style. We will create a delicious, reduced-sugar catering experience anywhere in Dubai.',
}

export default function SugarFreeCatering() {
  return <ServiceLandingPage config={config} />
}
