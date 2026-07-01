import { Link } from 'react-router'
import { Sprout, Utensils, Salad, Leaf, Home, Building } from 'lucide-react'
import DietaryCateringPage from './dietary/DietaryCateringPage'
import type { DietaryPageConfig } from './dietary/DietaryCateringPage'

const config: DietaryPageConfig = {
  slug: 'jain-catering-dubai',
  seoTitle: 'Jain Catering Dubai | Vegetarian No-Onion/Garlic Menus',
  metaDescription:
    'Jain catering in Dubai for weddings, festivals and family events. Lacto-vegetarian menus prepared without onion, garlic, root vegetables or eggs.',
  canonicalPath: '/jain-catering-dubai',
  ogImage: '/images/jain-catering-dubai-hero.webp',
  breadcrumbLabel: 'Jain Catering Dubai',
  h1: 'Jain Catering in Dubai',
  heroSub:
    'Respectful Jain catering for Dubai weddings, festivals and family gatherings — lacto-vegetarian menus prepared without onion, garlic, root vegetables or eggs.',
  heroImage: '/images/jain-catering-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to plan Jain catering in Dubai (via mychef.ae/jain-catering-dubai)",
  eyebrow: 'JAIN CATERING IN DUBAI',
  introH2: 'Catering That Honours Jain Dietary Principles',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Jain catering requires more than simply leaving meat off the plate. It calls for a respectful approach to ingredients — no onion, no garlic, no root vegetables such as potatoes and carrots, no mushrooms, and no eggs. At myCHEF Dubai, we plan Jain menus with the care these traditions deserve, drawing on the depth of Indian vegetarian cooking to create dishes that are aromatic, colourful and completely compliant.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        Our Jain menus are ideal for weddings, Paryushan, Diwali gatherings, housewarmings and family celebrations across Dubai. We source appropriate ingredients, use separate prep awareness, and design dishes around pulses, grains, dairy, leafy greens, gourds, beans and aromatic spices. See how this connects with our{' '}
        <Link to="/indian-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          Indian catering Dubai
        </Link>{' '}
        range or explore our wider{' '}
        <Link to="/vegetarian-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          vegetarian catering Dubai
        </Link>{' '}
        options.
      </p>
    </>
  ),
  formatsH2: 'Jain Catering Formats',
  formats: [
    {
      Icon: Utensils,
      title: 'Plated Jain Dinners',
      description: 'Elegant multi-course Jain meals for weddings, engagements and milestone celebrations, plated with traditional and contemporary presentation.',
      link: '/catering-dubai',
    },
    {
      Icon: Salad,
      title: 'Jain Buffets',
      description: 'Generous vegetarian buffets with a full Jain section, clearly labelled and served with separate utensils where required.',
      link: '/buffet-catering-dubai',
    },
    {
      Icon: Leaf,
      title: 'Jain Thali Service',
      description: 'Traditional thali-style service with small portions of multiple Jain dishes, breads, rice, sweets and accompaniments.',
      link: '/indian-catering-dubai',
    },
    {
      Icon: Sprout,
      title: 'Jain Canapés',
      description: 'Refined bite-sized options for receptions and cocktail events, free from onion, garlic and root vegetables.',
      link: '/canape-catering-dubai',
    },
    {
      Icon: Home,
      title: 'Villa & Home Jain Feasts',
      description: 'Full-service Jain dining at home for family gatherings and religious occasions across Dubai’s neighbourhoods.',
      link: '/villa-catering-dubai',
    },
    {
      Icon: Building,
      title: 'Corporate Jain Lunches',
      description: 'Inclusive vegetarian lunch options for offices with Jain team members or guests.',
      link: '/corporate-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE JAIN CATERING IS ESSENTIAL',
  useCasesH2: 'Respectful Menus for Meaningful Occasions',
  useCases: [
    {
      title: 'Jain Weddings & Engagements',
      description:
        'Weddings with Jain families require full menus that respect religious practice while still feeling celebratory and abundant. We plan every course accordingly.',
    },
    {
      title: 'Paryushan & Religious Observances',
      description:
        'During Paryushan and other Jain observances, stricter dietary rules apply. We design simple, sattvic menus that align with these periods.',
    },
    {
      title: 'Diwali & Family Festivals',
      description:
        'Diwali and other family gatherings often include Jain relatives. A dedicated Jain menu ensures everyone can eat together without compromise.',
    },
    {
      title: 'Mixed Vegetarian Events',
      description:
        'Even when most guests eat regular vegetarian food, a separate Jain section or thali service keeps the gathering inclusive and respectful.',
    },
  ],
  includedH2: "What's Included in Our Jain Catering",
  includedItems: [
    { title: 'No Onion or Garlic', description: 'All dishes are prepared without onion, garlic, asafoetida substitutes and related alliums.' },
    { title: 'No Root Vegetables', description: 'We avoid potatoes, carrots, radishes, beetroot and other underground vegetables as required.' },
    { title: 'No Mushrooms or Eggs', description: 'Menus are fully free from mushrooms, eggs and non-vegetarian ingredients.' },
    { title: 'Lacto-Vegetarian Options', description: 'Dairy-based dishes and vegan alternatives are available depending on your community’s practice.' },
    { title: 'Separate Prep Awareness', description: 'We plan workflows to minimise cross-contact with non-Jain ingredients where needed.' },
    { title: 'Authentic Spice Blends', description: 'Aromatic Jain masalas, whole spices and fresh herbs create deep flavour without restricted ingredients.' },
    { title: 'Thali or Plated Service', description: 'Traditional thali service or contemporary plated formats, whichever suits your occasion.' },
    { title: 'Full Setup & Service', description: 'On-site cooking, service staff, styling and clearance handled end-to-end.' },
  ],
  galleryH2: 'A Taste of Our Jain Catering',
  galleryImages: [
    { src: '/menu-appetizer.webp', alt: 'Jain appetisers in Dubai' },
    { src: '/menu-canapes.webp', alt: 'Jain canapé selection' },
    { src: '/menu-dessert.webp', alt: 'Jain dessert display' },
    { src: '/service-catering.webp', alt: 'Jain catering set-up at a Dubai event' },
    { src: '/service-villa.webp', alt: 'Villa Jain dinner styling' },
    { src: '/service-events.webp', alt: 'Jain event catering in Dubai' },
  ],
  faqsH2: 'Jain Catering Questions',
  faqs: [
    {
      q: 'What ingredients are avoided in Jain catering?',
      a: 'Jain menus avoid all meat, fish, eggs, onion, garlic, mushrooms and root vegetables such as potatoes, carrots, radishes and beetroot. We design dishes using pulses, grains, dairy, leafy greens, gourds and permitted vegetables.',
    },
    {
      q: 'Is Jain food always vegan?',
      a: 'Traditional Jain cuisine is lacto-vegetarian, meaning dairy is permitted. We can also provide fully vegan Jain menus on request, depending on your guests’ practices.',
    },
    {
      q: 'Can you provide Jain thali service?',
      a: 'Yes. Thali service is a beautiful way to present Jain cuisine, with small portions of multiple dishes, breads, rice, sweets and accompaniments served together.',
    },
    {
      q: 'Can Jain dishes be served alongside regular vegetarian food?',
      a: 'Yes. We can create a fully Jain menu or a separate Jain section within a larger vegetarian spread, with clear labelling and serving protocols.',
    },
    {
      q: 'Do you cater for Paryushan and stricter observances?',
      a: 'We do. During Paryushan and similar periods we design simpler, sattvic menus that respect the additional restrictions observed by many Jain families.',
    },
    {
      q: 'How far in advance should I book Jain catering?',
      a: 'Two to four weeks is ideal, particularly for weddings and festivals where menu planning, ingredient sourcing and prep workflows need careful coordination.',
    },
  ],
  relatedServices: [
    {
      title: 'Indian Catering',
      description: 'Regional Indian menus including fully vegetarian and Jain-compliant options.',
      image: '/images/indian-catering-dubai-hero.webp',
      link: '/indian-catering-dubai',
    },
    {
      title: 'Vegetarian Catering',
      description: 'Global vegetarian menus for inclusive celebrations of any size.',
      image: '/menu-appetizer.webp',
      link: '/vegetarian-catering-dubai',
    },
    {
      title: 'Wedding Catering',
      description: 'Full-service wedding catering that respects every dietary tradition.',
      image: '/service-events.webp',
      link: '/wedding-catering-dubai',
    },
  ],
  ctaH2: 'Plan a Respectful Jain Menu',
  ctaP:
    'Tell us about your occasion and any specific Jain dietary requirements. We will design a flavourful, compliant menu that honours your traditions.',
}

export default function JainCatering() {
  return <DietaryCateringPage config={config} />
}
