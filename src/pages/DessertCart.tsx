import { Link } from 'react-router'
import { IceCream2, PartyPopper, Cake, Utensils, Truck, Sparkles } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'dessert-cart-dubai',
  seoTitle: 'Gelato & Dessert Cart Dubai | Ice Cream Cart Hire for Events',
  metaDescription:
    'Dessert cart and gelato cart hire in Dubai: ice cream, sorbet, crepes, waffles and sweet treats for weddings, parties, corporate events and kids birthdays.',
  canonicalPath: '/dessert-cart-dubai',
  ogImage: '/images/dessert-table-catering-dubai-hero.webp',
  breadcrumbLabel: 'Gelato & Dessert Cart Dubai',
  h1: 'Gelato & Dessert Cart in Dubai',
  heroSub:
    'Bring the fun to your event with a gelato and dessert cart in Dubai — from Italian ice cream and sorbet to crepes, waffles and candy displays for weddings, parties and corporate celebrations.',
  heroImage: '/images/dessert-table-catering-dubai-hero.webp',
  whatsappMessage:
    'Hi myCHEF Dubai, I would like to arrange a gelato or dessert cart in Dubai (via mychef.ae/dessert-cart-dubai)',
  eyebrow: 'GELATO & DESSERT CART IN DUBAI',
  introH2: 'Sweet Moments, Served with Style',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        A dessert cart is one of the simplest ways to make an event feel special. Guests love the theatre of choosing their favourite flavour, watching a crepe being folded or picking from a display of colourful macarons and candies. Our gelato and dessert cart service in Dubai brings that experience to weddings, birthdays, corporate events, school functions and private parties across the city.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        We offer a range of cart options to suit your theme and guest list: Italian gelato and sorbet carts, crepe and waffle stations, candy and popcorn carts, mini dessert displays and fully staffed sweet tables. Everything is presented beautifully, portioned elegantly and served by friendly staff who keep the queue moving and the mood light.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        A dessert cart works perfectly as a finishing touch to our{' '}
        <Link to="/dessert-table-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          dessert table catering Dubai
        </Link>{' '}
        and as a highlight at{' '}
        <Link to="/kids-birthday-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          kids birthday catering Dubai
        </Link>{' '}
        parties. It also pairs well with{' '}
        <Link to="/wedding-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          wedding catering Dubai
        </Link>{' '}
        for a memorable reception finale.
      </p>
    </>
  ),
  formatsH2: 'Dessert Cart Formats',
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
      link: '/kids-birthday-catering-dubai',
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
      link: '/party-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE DESSERT CARTS WORK',
  useCasesH2: 'A Crowd-Pleasing Finale for Any Event',
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
  includedH2: "What's Included in Our Dessert Cart Service",
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
      a: 'Our carts can serve intimate parties of 20 up to large events of several hundred guests, with portion quantities tailored to your numbers.',
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
      link: '/kids-birthday-catering-dubai',
    },
    {
      title: 'Wedding Catering Dubai',
      description: 'Full-service wedding menus, dessert tables and reception catering across Dubai.',
      image: '/service-events.webp',
      link: '/wedding-catering-dubai',
    },
  ],
  ctaH2: 'Sweeten Your Next Event',
  ctaP:
    'Tell us about your event, guest count, theme and favourite desserts. We will design a gelato or dessert cart experience that leaves everyone smiling.',
}

export default function DessertCart() {
  return <ServiceLandingPage config={config} />
}
