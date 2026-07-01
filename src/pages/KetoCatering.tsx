import { Link } from 'react-router'
import { Flame, Utensils, Salad, Beef, Home, Building } from 'lucide-react'
import DietaryCateringPage from './dietary/DietaryCateringPage'
import type { DietaryPageConfig } from './dietary/DietaryCateringPage'

const config: DietaryPageConfig = {
  slug: 'keto-catering-dubai',
  seoTitle: 'Keto & Low-Carb Catering Dubai | High-Protein Event Menus',
  metaDescription:
    'Keto and low-carb catering in Dubai for events, villas, offices and wellness retreats. High-protein menus, healthy fats and zero compromise on flavour.',
  canonicalPath: '/keto-catering-dubai',
  ogImage: '/images/keto-catering-dubai-hero.webp',
  breadcrumbLabel: 'Keto & Low-Carb Catering Dubai',
  h1: 'Keto & Low-Carb Catering in Dubai',
  heroSub:
    'High-protein, low-carb menus built around quality proteins, healthy fats and seasonal vegetables for events, villas and corporate wellness days across Dubai.',
  heroImage: '/images/keto-catering-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to plan keto/low-carb catering in Dubai (via mychef.ae/keto-catering-dubai)",
  eyebrow: 'LOW-CARB CATERING IN DUBAI',
  introH2: 'Low-Carb Menus That Still Feel Luxurious',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Keto and low-carb diets are no longer a fringe request — they show up on guest lists across Dubai, from fitness-focused corporates to health-conscious families. Our low-carb catering swaps refined carbohydrates for vibrant vegetables, quality proteins and healthy fats, creating plates that are satisfying, beautifully presented and completely on-plan.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        Whether you need a fully keto wedding menu, a low-carb corporate lunch, or a villa dinner where guests can stay on track without feeling deprived, we design every dish with macros in mind. Pair this with our{' '}
        <Link to="/healthy-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          healthy catering Dubai
        </Link>{' '}
        range or explore{' '}
        <Link to="/private-chef-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          private chef Dubai
        </Link>{' '}
        options for fully personalised low-carb dining.
      </p>
    </>
  ),
  formatsH2: 'Keto & Low-Carb Formats',
  formats: [
    {
      Icon: Utensils,
      title: 'Plated Keto Dinners',
      description: 'Multi-course plated menus with protein-forward mains, vegetable sides and rich sauces — no bread, pasta or starchy fillers.',
      link: '/catering-dubai',
    },
    {
      Icon: Salad,
      title: 'Low-Carb Buffets',
      description: 'Buffet lines centred on grilled meats, seafood, salads, roasted vegetables and low-carb accompaniments.',
      link: '/buffet-catering-dubai',
    },
    {
      Icon: Beef,
      title: 'Protein-Forward BBQ',
      description: 'Live grilling stations featuring premium cuts, seafood and vegetable skewers with sugar-free marinades.',
      link: '/bbq-catering-dubai',
    },
    {
      Icon: Flame,
      title: 'Keto Canapés',
      description: 'Bite-sized low-carb options for receptions — cheese, charcuterie, seafood and vegetable-based bites without pastry or bread.',
      link: '/canape-catering-dubai',
    },
    {
      Icon: Home,
      title: 'Villa Wellness Dinners',
      description: 'At-home low-carb dining for fitness retreats, birthday dinners and health-focused gatherings across Dubai.',
      link: '/villa-catering-dubai',
    },
    {
      Icon: Building,
      title: 'Corporate Wellness Lunches',
      description: 'Low-carb office lunch programmes that keep teams energised without the afternoon carb crash.',
      link: '/corporate-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE KETO CATERING FITS',
  useCasesH2: 'Built for Health-Conscious Hosts',
  useCases: [
    {
      title: 'Fitness & Wellness Retreats',
      description:
        'Dubai’s wellness scene expects food that supports the programme. Low-carb catering fits naturally into villa retreats, spa days and fitness-focused events.',
    },
    {
      title: 'Corporate Wellness Days',
      description:
        'Teams increasingly request balanced, low-carb lunch options. Our corporate low-carb menus keep energy steady and sugar crashes at bay.',
    },
    {
      title: 'Private Celebrations',
      description:
        'Birthdays, anniversaries and family dinners can stay low-carb without losing the celebratory feel — think premium proteins, abundant sides and elegant desserts.',
    },
    {
      title: 'Weight-Management Guests',
      description:
        'Guests following keto, paleo or other low-carb approaches can enjoy a full menu rather than picking around bread baskets and dessert tables.',
    },
  ],
  includedH2: "What's Included in Our Keto & Low-Carb Catering",
  includedItems: [
    { title: 'Low-Carb Menu Design', description: 'Menus built around proteins, healthy fats and non-starchy vegetables.' },
    { title: 'No Added Sugar Sauces', description: 'Sauces, dressings and marinades made without hidden sugars or starchy thickeners.' },
    { title: 'Premium Proteins', description: 'Quality meats, poultry, seafood and plant-based proteins as the centrepiece of every plate.' },
    { title: 'Vegetable-Forward Sides', description: 'Roasted, grilled and raw vegetable dishes that add colour, fibre and flavour.' },
    { title: 'Low-Carb Desserts', description: 'Sugar-free or naturally low-sugar desserts using alternative sweeteners where appropriate.' },
    { title: 'Macro Awareness', description: 'Dishes designed with carbohydrate content in mind, with guidance available on request.' },
    { title: 'On-Site Cooking & Service', description: 'Prepared and finished at your venue by our chefs and service team.' },
    { title: 'Customisable for Other Diets', description: 'Combine keto, gluten-free, dairy-free or halal requirements in one menu.' },
  ],
  galleryH2: 'A Taste of Our Keto & Low-Carb Catering',
  galleryImages: [
    { src: '/menu-appetizer.webp', alt: 'Low-carb appetisers in Dubai' },
    { src: '/menu-canapes.webp', alt: 'Keto-friendly canapé selection' },
    { src: '/menu-dessert.webp', alt: 'Low-carb dessert display' },
    { src: '/service-catering.webp', alt: 'Keto catering set-up at a Dubai event' },
    { src: '/service-villa.webp', alt: 'Villa low-carb dinner styling' },
    { src: '/service-events.webp', alt: 'Low-carb event catering in Dubai' },
  ],
  faqsH2: 'Keto & Low-Carb Catering Questions',
  faqs: [
    {
      q: 'What does keto catering include?',
      a: 'Keto catering focuses on high-quality proteins, healthy fats and low-carbohydrate vegetables. We avoid bread, pasta, rice, potatoes, sugary sauces and most desserts, replacing them with satisfying alternatives.',
    },
    {
      q: 'Can you cater a fully keto event?',
      a: 'Yes. We can design a menu where every dish is keto-friendly, so every guest can eat freely without checking carb counts.',
    },
    {
      q: 'Do you provide macro or calorie information?',
      a: 'We can provide a general overview of the menu approach and highlight low-carb dishes. Detailed macros per dish are available on request for corporate wellness or retreat clients.',
    },
    {
      q: 'Are your keto menus also gluten-free?',
      a: 'Keto menus are naturally low in gluten, but they are not automatically coeliac-safe. Let us know if you need both keto and gluten-free so we can plan prep accordingly.',
    },
    {
      q: 'What desserts can you offer on a keto menu?',
      a: 'We create low-carb desserts using alternative sweeteners, dark chocolate, berries, cream and nut-free options where needed. Every menu is tailored to your guests’ preferences.',
    },
    {
      q: 'How far in advance should I book keto catering?',
      a: 'Two to four weeks is recommended, especially for large events or retreat programmes where daily low-carb menus need advance planning and sourcing.',
    },
  ],
  relatedServices: [
    {
      title: 'Healthy Catering',
      description: 'Balanced, nutrition-focused menus for wellness events and offices.',
      image: '/service-corporate.webp',
      link: '/healthy-catering-dubai',
    },
    {
      title: 'Sugar-Free Catering',
      description: 'Reduced-sugar menus that align naturally with low-carb goals.',
      image: '/images/healthy-catering-dubai-hero.webp',
      link: '/sugar-free-catering-dubai',
    },
    {
      title: 'BBQ Catering',
      description: 'Protein-forward grilling stations perfect for low-carb gatherings.',
      image: '/service-events.webp',
      link: '/bbq-catering-dubai',
    },
    {
      title: 'Private Chef Dubai',
      description: 'Fully personalised low-carb menus cooked in your home or villa.',
      image: '/service-villa.webp',
      link: '/private-chef-dubai',
    },
  ],
  ctaH2: 'Build Your Keto or Low-Carb Menu',
  ctaP:
    'Tell us about your event, guest goals and dietary needs. We will create a satisfying low-carb menu that keeps everyone on track without sacrificing flavour.',
}

export default function KetoCatering() {
  return <DietaryCateringPage config={config} />
}
