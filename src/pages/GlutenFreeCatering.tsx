import { Link } from 'react-router'
import { WheatOff, Utensils, Salad, Cake, Home, Building } from 'lucide-react'
import DietaryCateringPage from './dietary/DietaryCateringPage'
import type { DietaryPageConfig } from './dietary/DietaryCateringPage'

const config: DietaryPageConfig = {
  slug: 'gluten-free-catering-dubai',
  seoTitle: 'Gluten-Free Catering Dubai | Coeliac-Safe Event Menus',
  metaDescription:
    'Gluten-free catering in Dubai for events, villas and offices. Coeliac-safe menus, transparent ingredients and full-service execution. Request a quote today.',
  canonicalPath: '/gluten-free-catering-dubai',
  ogImage: '/images/gluten-free-catering-dubai-hero.webp',
  breadcrumbLabel: 'Gluten-Free Catering Dubai',
  h1: 'Gluten-Free Catering in Dubai',
  heroSub:
    'Coeliac-safe menus, clearly labelled dishes and kitchen-aware preparation for weddings, villa dinners, corporate events and family celebrations across Dubai.',
  heroImage: '/images/gluten-free-catering-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to plan gluten-free catering in Dubai (via mychef.ae/gluten-free-catering-dubai)",
  eyebrow: 'COELIAC-SAFE CATERING IN DUBAI',
  introH2: 'Gluten-Free Dining Without Compromise',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Eating gluten-free in Dubai should never mean settling for a plain salad while everyone else enjoys a full menu. Our gluten-free catering is built around the simple idea that a dietary requirement is an invitation to cook more creatively, not less. We design complete spreads — canapés, mains, sides, breads and desserts — where every element is prepared without gluten, clearly labelled, and served with the same luxury finish as every other myCHEF Dubai menu.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        Whether you are managing coeliac disease, a wheat intolerance, or simply want a fully gluten-free celebration, our kitchen processes reduce cross-contamination risk and our team plans the service around your guests’ needs. Explore how this sits alongside our{' '}
        <Link to="/healthy-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          healthy catering Dubai
        </Link>{' '}
        options, or see our broader{' '}
        <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          luxury catering in Dubai
        </Link>{' '}
        for mixed-diet events.
      </p>
    </>
  ),
  formatsH2: 'Gluten-Free Formats for Every Event',
  formats: [
    {
      Icon: Utensils,
      title: 'Plated Gluten-Free Dinners',
      description: 'Elegant multi-course plated menus where every dish, sauce and garnish is gluten-free by design — ideal for weddings, anniversaries and private villa dinners.',
      link: '/catering-dubai',
    },
    {
      Icon: Salad,
      title: 'Gluten-Free Buffet & Stations',
      description: 'Self-serve buffets and live stations with clearly separated gluten-free options so guests can plate confidently without endless questions.',
      link: '/buffet-catering-dubai',
    },
    {
      Icon: WheatOff,
      title: 'Gluten-Free Canapés',
      description: 'Bite-sized gluten-free canapés for receptions and cocktail parties — crisp tartlets, skewers, spoons and wraps that feel anything but restricted.',
      link: '/canape-catering-dubai',
    },
    {
      Icon: Cake,
      title: 'Gluten-Free Desserts & Cakes',
      description: 'Coeliac-safe celebration cakes, tarts and dessert tables made with alternative flours so the sweet course is just as memorable.',
      link: '/dessert-table-catering-dubai',
    },
    {
      Icon: Home,
      title: 'Villa & Home Gluten-Free Menus',
      description: 'Full-service gluten-free dining at home across Palm Jumeirah, Emirates Hills and Dubai Hills, cooked and served on-site.',
      link: '/villa-catering-dubai',
    },
    {
      Icon: Building,
      title: 'Corporate Gluten-Free Lunches',
      description: 'Inclusive office lunches and boardroom catering with individually packed gluten-free meals or clearly labelled buffet lines.',
      link: '/corporate-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE GLUTEN-FREE CATERING HELPS',
  useCasesH2: 'Designed for Real Dietary Needs',
  useCases: [
    {
      title: 'Coeliac-Safe Celebrations',
      description:
        'For guests with coeliac disease, even trace gluten is a problem. We plan gluten-free menus with separate prep awareness, clear labelling and serving protocols so hosts can relax and guests can eat safely.',
    },
    {
      title: 'Weddings with Dietary Guests',
      description:
        'Wedding guest lists often include coeliac, wheat-intolerant or health-conscious attendees. A dedicated gluten-free menu or station ensures no one is served an afterthought on your big day.',
    },
    {
      title: 'Corporate Wellness & Inclusive Offices',
      description:
        'Modern Dubai offices increasingly cater to diverse diets. Gluten-free lunch options signal attentiveness and help teams eat well without leaving anyone out.',
    },
    {
      title: 'Family Gatherings at Home',
      description:
        'From birthday brunches to Eid lunches, our villa gluten-free service means the whole family enjoys one menu together, with no separate “special” plate in the corner.',
    },
  ],
  includedH2: "What's Included in Our Gluten-Free Catering",
  includedItems: [
    { title: '100% Gluten-Free Menu Design', description: 'Every dish on the gluten-free menu is planned without wheat, barley, rye or cross-contaminated ingredients.' },
    { title: 'Clear Labelling', description: 'Buffet cards, menu notes and staff briefings make it easy for guests to identify safe options.' },
    { title: 'Alternative Breads & Pastry', description: 'Gluten-free breads, tart cases and pastry elements where the menu calls for them.' },
    { title: 'Cross-Contamination Awareness', description: 'Prep, plating and service workflows designed to minimise cross-contact risks.' },
    { title: 'Custom Mains & Sides', description: 'Hearty, balanced mains built on rice, quinoa, vegetables, pulses and certified gluten-free grains.' },
    { title: 'Gluten-Free Desserts', description: 'Cakes, mousses, tarts and fruit-based desserts prepared with alternative flours.' },
    { title: 'Full On-Site Service', description: 'Service staff, plating and styling handled at your venue from arrival to pack-down.' },
    { title: 'Mixed-Diet Planning', description: 'We can run a fully gluten-free event or integrate safe options within a broader menu.' },
  ],
  galleryH2: 'A Taste of Our Gluten-Free Catering',
  galleryImages: [
    { src: '/menu-appetizer.webp', alt: 'Gluten-free appetisers in Dubai' },
    { src: '/menu-canapes.webp', alt: 'Gluten-free canapé selection' },
    { src: '/menu-dessert.webp', alt: 'Gluten-free dessert display' },
    { src: '/service-catering.webp', alt: 'Gluten-free catering set-up at a Dubai event' },
    { src: '/service-villa.webp', alt: 'Villa gluten-free dinner styling' },
    { src: '/service-events.webp', alt: 'Gluten-free event catering in Dubai' },
  ],
  faqsH2: 'Gluten-Free Catering Questions',
  faqs: [
    {
      q: 'Is your gluten-free catering safe for coeliacs?',
      a: 'We design gluten-free menus without wheat, barley or rye and follow preparation and serving protocols to reduce cross-contamination. If a guest has severe coeliac disease, tell us during planning so we can advise on the safest service format.',
    },
    {
      q: 'Can gluten-free dishes be served alongside regular dishes?',
      a: 'Yes. We can create a fully gluten-free spread or integrate clearly labelled gluten-free options within a mixed menu. Separate stations, serving utensils and buffet lines keep things straightforward for guests.',
    },
    {
      q: 'Do you offer gluten-free bread, pastry and cakes?',
      a: 'We do. Alternative flours and certified gluten-free ingredients let us build bread baskets, tart shells and celebration cakes that feel generous rather than restricted.',
    },
    {
      q: 'What grains and starches do you use instead of wheat?',
      a: 'Our chefs use rice, quinoa, polenta, buckwheat, lentils, potatoes and seasonal vegetables as the base for gluten-free mains and sides, keeping menus varied and satisfying.',
    },
    {
      q: 'Can the whole menu be gluten-free for an event?',
      a: 'Absolutely. Many hosts choose a fully gluten-free menu so every guest can eat everything without question. We will recommend the best format based on your guest count and occasion.',
    },
    {
      q: 'How far in advance should I book gluten-free catering?',
      a: 'Two to four weeks is ideal, especially for weddings or large villa events where alternative ingredients and bakery items need advance ordering. During peak season, earlier is better.',
    },
  ],
  relatedServices: [
    {
      title: 'Healthy Catering',
      description: 'Balanced, nutrition-conscious menus for wellness-focused events and corporate lunches.',
      image: '/service-corporate.webp',
      link: '/healthy-catering-dubai',
    },
    {
      title: 'Vegan Catering',
      description: 'Fully plant-based menus that also happen to be naturally gluten-free friendly.',
      image: '/menu-appetizer.webp',
      link: '/vegan-catering-dubai',
    },
    {
      title: 'Buffet Catering',
      description: 'Elegant buffet formats that can include dedicated gluten-free stations.',
      image: '/service-events.webp',
      link: '/buffet-catering-dubai',
    },
  ],
  ctaH2: 'Plan a Gluten-Free Menu Everyone Will Enjoy',
  ctaP:
    'Tell us about your event and dietary needs. We will design a coeliac-aware, delicious gluten-free spread that lets every guest eat with confidence.',
}

export default function GlutenFreeCatering() {
  return <DietaryCateringPage config={config} />
}
