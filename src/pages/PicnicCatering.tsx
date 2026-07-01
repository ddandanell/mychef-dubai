import { Link } from 'react-router'
import { ShoppingBasket, Sun, Car, TreePine, Leaf, Coffee } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'picnic-catering-dubai',
  seoTitle: 'Picnic Catering Dubai | Styled Outdoor Baskets & Grazing Boxes',
  metaDescription:
    'Picnic catering in Dubai: beautifully styled outdoor baskets, grazing boxes, fresh sandwiches and salads delivered to parks, beaches, deserts and villas.',
  canonicalPath: '/picnic-catering-dubai',
  ogImage: '/images/beach-catering-dubai-hero.webp',
  breadcrumbLabel: 'Picnic Catering Dubai',
  h1: 'Picnic Catering in Dubai',
  heroSub:
    'Enjoy effortless outdoor dining with picnic catering across Dubai — from curated grazing boxes and gourmet baskets to full beach, park and desert setups for families, couples and groups.',
  heroImage: '/images/beach-catering-dubai-hero.webp',
  whatsappMessage:
    'Hi myCHEF Dubai, I would like to arrange picnic catering in Dubai (via mychef.ae/picnic-catering-dubai)',
  eyebrow: 'PICNIC CATERING IN DUBAI',
  introH2: 'Outdoor Dining, Delivered Beautifully',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Dubai’s outdoors are made for picnics — sunny beaches, landscaped parks, desert dunes and villa gardens all call for relaxed, shareable food served without the hassle. Our picnic catering in Dubai provides beautifully prepared baskets and boxes filled with fresh sandwiches, salads, charcuterie, pastries, fruits and treats, ready to enjoy wherever you choose to lay your blanket.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        We handle the food, presentation and delivery so you can focus on the moment. Choose from individual picnic boxes for corporate outings, generous grazing baskets for friends, or fully styled setups with rugs, low tables and tableware for special celebrations. Every menu can be tailored for dietary preferences, group size and location.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        Picnic catering pairs naturally with our{' '}
        <Link to="/beach-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          beach catering Dubai
        </Link>{' '}
        and{' '}
        <Link to="/drop-off-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          drop-off catering Dubai
        </Link>{' '}
        services, and with{' '}
        <Link to="/private-party-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          private party catering Dubai
        </Link>{' '}
        for intimate garden gatherings.
      </p>
    </>
  ),
  formatsH2: 'Picnic Catering Formats',
  formats: [
    {
      Icon: ShoppingBasket,
      title: 'Gourmet Picnic Baskets',
      description: 'Curated baskets with sandwiches, salads, charcuterie, cheese, fruit, dips and sweet treats for easy sharing.',
      link: '/grazing-table-dubai',
    },
    {
      Icon: Sun,
      title: 'Beach & Park Picnics',
      description: 'Delivery-friendly menus designed for sandy beaches, waterfront lawns and shaded parks across Dubai.',
      link: '/beach-catering-dubai',
    },
    {
      Icon: Car,
      title: 'Desert Safari Picnics',
      description: 'Rugged yet refined boxes and baskets for desert drives, dune dinners and outdoor adventures.',
      link: '/desert-dining-dubai',
    },
    {
      Icon: TreePine,
      title: 'Villa Garden Picnics',
      description: 'Styled garden setups with low tables, cushions, tableware and a full grazing spread at your villa.',
      link: '/villas-private-residences',
    },
    {
      Icon: Coffee,
      title: 'Corporate Picnic Boxes',
      description: 'Branded individual boxes for team outings, wellness days and company park events.',
      link: '/office-catering-dubai',
    },
    {
      Icon: Leaf,
      title: 'Vegan & Healthy Picnics',
      description: 'Plant-based, gluten-free and light picnic menus for health-conscious guests.',
      link: '/healthy-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE PICNIC CATERING WORKS',
  useCasesH2: 'Made for Dubai’s Outdoor Lifestyle',
  useCases: [
    {
      title: 'Family Days at the Beach',
      description:
        'Spend the day at Kite Beach, JBR or La Mer with a ready-to-eat picnic basket delivered to your spot.',
    },
    {
      title: 'Park Gatherings with Friends',
      description:
        'Casual catch-ups in Safa Park, Zabeel Park or Al Barsha Pond Park with fresh food and no cooking.',
    },
    {
      title: 'Romantic Couples Picnics',
      description:
        'Elegant two-person baskets with bubbles, cheeses and desserts for proposals, anniversaries or date nights.',
    },
    {
      title: 'Corporate Team Outings',
      description:
        'Branded boxes and group grazing boards for team-building days, away days and company picnics.',
    },
  ],
  includedH2: "What's Included in Our Picnic Catering",
  includedItems: [
    { title: 'Curated Picnic Menu', description: 'Seasonal, travel-friendly dishes chosen to stay fresh and delicious outdoors.' },
    { title: 'Grazing Boxes & Baskets', description: 'Beautifully arranged boxes with cheeses, meats, crackers, fruits and nibbles.' },
    { title: 'Fresh Sandwiches & Wraps', description: 'Gourmet sandwiches, wraps and rolls with premium fillings and breads.' },
    { title: 'Salads & Light Mains', description: 'Refreshing salads, grain bowls and cold plates perfect for warm-weather dining.' },
    { title: 'Desserts & Fresh Fruit', description: 'Brownies, pastries, seasonal fruit and sweet bites to finish the picnic.' },
    { title: 'Drinks & Cooler Add-Ons', description: 'Chilled lemonades, iced teas, sparkling water and coolers on request.' },
    { title: 'Eco-Friendly Packaging', description: 'Practical, presentable packaging that travels well and simplifies cleanup.' },
    { title: 'Delivery to Your Location', description: 'Direct delivery to beaches, parks, villas and desert meeting points across Dubai.' },
  ],
  galleryH2: 'A Taste of Our Picnic Catering',
  galleryImages: [
    { src: '/service-events.webp', alt: 'Styled picnic catering set-up in Dubai' },
    { src: '/menu-appetizer.webp', alt: 'Grazing box with cheeses and charcuterie' },
    { src: '/menu-dessert.webp', alt: 'Fresh fruit and desserts for a picnic' },
    { src: '/menu-seafood.webp', alt: 'Light picnic salads and chilled dishes' },
    { src: '/service-villa.webp', alt: 'Villa garden picnic catering styling' },
    { src: '/menu-meat.webp', alt: 'Gourmet sandwich and wrap platter for picnics' },
  ],
  faqsH2: 'Picnic Catering Questions',
  faqs: [
    {
      q: 'What kind of food comes in a picnic catering basket?',
      a: 'Baskets typically include a mix of sandwiches, wraps, salads, cheeses, charcuterie, dips, crackers, fresh fruit and sweet treats. We can tailor the contents to your group size, dietary needs and occasion.',
    },
    {
      q: 'Can you deliver picnic catering to a beach or park?',
      a: 'Yes. We deliver picnic catering to beaches, parks, villas and desert locations across Dubai. Just share the location, time and any access notes when booking.',
    },
    {
      q: 'Do you provide styling, rugs and tableware?',
      a: 'We focus on the food and packaging, but can coordinate styling, rugs, low tables and tableware through our partners on request.',
    },
    {
      q: 'Can picnic catering be vegetarian, vegan or gluten-free?',
      a: 'Absolutely. We offer plant-based, vegan, vegetarian, gluten-free, dairy-free and nut-free picnic options.',
    },
    {
      q: 'How many people can you cater for a picnic?',
      a: 'From intimate two-person baskets up to large corporate group orders of 100 or more.',
    },
    {
      q: 'How far in advance should I book picnic catering?',
      a: 'Two to three days is ideal for most picnic orders. For large events or styled setups, one week ahead is recommended.',
    },
  ],
  relatedServices: [
    {
      title: 'Beach Catering Dubai',
      description: 'Relaxed coastal menus, grazing boxes and drinks for beach gatherings across Dubai.',
      image: '/images/beach-catering-dubai-hero.webp',
      link: '/beach-catering-dubai',
    },
    {
      title: 'Drop-Off Catering Dubai',
      description: 'Convenient delivered menus for home, office and outdoor events with no on-site staff needed.',
      image: '/service-events.webp',
      link: '/drop-off-catering-dubai',
    },
    {
      title: 'Private Party Catering',
      description: 'Intimate home and villa parties with personalised menus and full service.',
      image: '/service-villa.webp',
      link: '/private-party-catering-dubai',
    },
  ],
  ctaH2: 'Plan Your Perfect Dubai Picnic',
  ctaP:
    'Tell us where you are heading, how many guests you have and any dietary preferences. We will prepare a picnic catering basket that makes the day effortless and delicious.',
}

export default function PicnicCatering() {
  return <ServiceLandingPage config={config} />
}
