import { Link } from 'react-router'
import { IceCream2, PartyPopper, Cake, Utensils, Truck, Sparkles } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'dessert-cart-dubai',
  seoTitle: 'Gelato & Dessert Cart Dubai | myCHEF',
  metaDescription:
    'A dessert cart in Dubai is a live station: gelato, crepes or mini sweets, staffed and packed down. Canonical: live cooking stations. Quoted with the catering.',
  canonicalPath: '/live-cooking-stations-dubai',
  ogImage: '/images/dessert-table-catering-dubai-hero.webp',
  showTrustSignalStrip: true,
  breadcrumbLabel: 'Gelato & Dessert Cart Dubai',
  h1: 'Gelato & Dessert Cart in Dubai',
  heroSub:
    'A dessert cart is a live station: gelato, crepes or mini sweets, a person to serve, setup and collection. It is not a separate catering company. Live cooking stations own the format.',
  heroImage: '/images/dessert-table-catering-dubai-hero.webp',
  whatsappMessage:
    'Hi myCHEF Dubai, I would like to arrange a gelato or dessert cart in Dubai (via mychef.ae/dessert-cart-dubai)',
  eyebrow: 'GELATO & DESSERT CART IN DUBAI',
  introH2: "A dessert station with a distinctive presentation",
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        A dessert cart in Dubai is gelato, sorbet, crepes or mini sweets served from a cart we bring, staff and collect. There is no published per-person floor for the cart alone. Live stations start from AED 150 per person, from 15 guests, on the Catering hub. This page canonicalises to live cooking stations.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Heat decides what can sit out. Dairy-free and nut-free pieces are named in the brief. The queue is staffed so you are not scooping.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        A styled cake and patisserie display lives on{' '}
        <Link to="/dessert-table-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          dessert table catering
        </Link>
        . Birthdays and{' '}
        <Link to="/wedding-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          wedding catering
        </Link>{' '}
        can add the cart as a station, not as a shop.
      </p>
    </>
  ),
  formatsH2: 'What can sit on the cart',
  formats: [
    {
      Icon: IceCream2,
      title: 'Gelato & Sorbet Cart',
      description: 'Italian-style gelato and refreshing sorbet served from a classic cart with cones, cups and toppings.',
      link: '/dessert-table-catering-dubai',
    },
    {
      Icon: Utensils,
      title: 'Crepe & Waffle Station',
      description: 'Freshly made crepes and waffles with sweet and savoury toppings, cooked to order in front of guests.',
      link: '/live-cooking-stations-dubai',
    },
    {
      Icon: Cake,
      title: 'Mini Dessert Display',
      description: 'Macarons, cupcakes, cake pops, tarts and petit fours arranged on a styled cart or dessert table.',
      link: '/dessert-table-catering-dubai',
    },
    {
      Icon: PartyPopper,
      title: 'Candy & Popcorn Cart',
      description: 'Colourful candy jars, popcorn, cotton candy and nostalgic treats for fun, family-friendly events.',
      link: '/birthday-catering-dubai',
    },
    {
      Icon: Sparkles,
      title: 'Wedding Dessert Cart',
      description: 'Elegant gelato and sweet carts styled to match your wedding theme and dessert table.',
      link: '/wedding-catering-dubai',
    },
    {
      Icon: Truck,
      title: 'Mobile Cart Hire',
      description: 'Compact, transportable carts suitable for venues, offices, outdoor events and private homes.',
      link: '/private-party-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE DESSERT CARTS WORK',
  useCasesH2: 'A finish, not the whole meal',
  useCases: [
    {
      title: 'Wedding Receptions',
      description:
        'Replace or supplement a traditional cake with a gelato cart or mini dessert display that guests can enjoy late into the evening.',
    },
    {
      title: "Kids' Birthday Parties",
      description:
        'Candy carts, ice cream stations and popcorn stands are always a hit with younger guests and their parents.',
    },
    {
      title: 'Corporate Activations',
      description:
        'Branded dessert carts for product launches, exhibition stands and company celebrations that draw a crowd.',
    },
    {
      title: 'Private Celebrations',
      description:
        'Add a playful, indulgent touch to anniversaries, baby showers and family gatherings at home or in a villa.',
    },
  ],
  includedH2: 'What the cart quote lists',
  includedItems: [
    { title: 'Cart Selection & Styling', description: 'Choose from gelato, crepe, candy or mini dessert carts styled to suit your event.' },
    { title: 'Handcrafted Desserts', description: 'Fresh gelato, sorbet, crepes, waffles, macarons, cupcakes and more.' },
    { title: 'Toppings & Sauces', description: 'Chocolate, caramel, fruit coulis, nuts, sprinkles and seasonal garnishes.' },
    { title: 'Serving Staff', description: 'Friendly attendants to serve guests, manage portions and keep the cart tidy.' },
    { title: 'Cones, Cups & Tableware', description: 'All serving ware included, from waffle cones to elegant dessert spoons.' },
    { title: 'Custom Branding Options', description: 'Corporate logos, branded menus and themed signage available for activations.' },
    { title: 'Setup & Collection', description: 'We deliver, set up, operate and remove the cart after your event.' },
    { title: 'Dietary-Friendly Choices', description: 'Vegan sorbet, dairy-free gelato, gluten-free waffles and nut-free options on request.' },
  ],
  galleryH2: 'A Taste of Our Dessert Cart Catering',
  galleryImages: [
    { src: '/menu-dessert.webp', alt: 'Gelato and dessert cart at a Dubai event' },
    { src: '/service-events.webp', alt: 'Styled dessert cart for weddings and parties' },
    { src: '/menu-appetizer.webp', alt: 'Mini desserts and sweet treats display' },
    { src: '/service-villa.webp', alt: 'Villa party dessert cart setup' },
    { src: '/menu-meat.webp', alt: 'Crepe and waffle station catering' },
    { src: '/menu-seafood.webp', alt: 'Colourful candy cart for kids parties' },
  ],
  faqsH2: 'Dessert Cart Questions',
  faqs: [
    {
      q: 'What dessert cart options do you offer?',
      a: 'We offer gelato and sorbet carts, crepe and waffle stations, candy and popcorn carts, mini dessert displays and custom sweet tables.',
    },
    {
      q: 'Can the dessert cart be branded for a corporate event?',
      a: 'Yes. We can add branded signage, menus, cup sleeves and cart styling for product launches, exhibitions and company celebrations.',
    },
    {
      q: 'Do you provide dairy-free or vegan dessert options?',
      a: 'Absolutely. We offer vegan sorbet, dairy-free gelato and gluten-free or nut-free dessert choices on request.',
    },
    {
      q: 'How many guests can a dessert cart serve?',
      a: 'We size portions and staff to the guest count. Live stations start from 15 guests on the hub. We will not invent a per-hour capacity.',
    },
    {
      q: 'Can I combine a dessert cart with a dessert table?',
      a: 'Yes. Many clients pair a dessert cart with a styled dessert table for a more impressive and varied sweet offering.',
    },
    {
      q: 'How far in advance should I book a dessert cart?',
      a: 'One to two weeks is ideal, especially for weddings and themed events. Last-minute bookings may be possible depending on availability.',
    },
  ],
  relatedServices: [
    {
      title: 'Dessert Table Catering',
      description: 'Styled dessert tables with cakes, pastries and sweet displays for weddings, parties and events.',
      image: '/images/dessert-table-catering-dubai-hero.webp',
      link: '/dessert-table-catering-dubai',
    },
    {
      title: 'Kids Birthday Catering',
      description: 'Fun, safe and colourful catering designed specifically for childrens parties in Dubai.',
      image: '/images/kids-birthday-catering-dubai-hero.webp',
      link: '/birthday-catering-dubai',
    },
    {
      title: 'Wedding Catering Dubai',
      description: 'Full-service wedding menus, dessert tables and reception catering across Dubai.',
      image: '/service-events.webp',
      link: '/wedding-catering-dubai',
    },
  ],
  ctaH2: 'Send the guest count and what you want scooped',
  ctaP:
    'Date, headcount and whether this is gelato, crepes or mini sweets. We typically reply within 15 minutes during business hours.',
}

export default function DessertCart() {
  return <ServiceLandingPage config={config} />
}
