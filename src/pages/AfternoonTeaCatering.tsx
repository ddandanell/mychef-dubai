import { Link } from 'react-router'
import { Coffee, Utensils, Cake, Cookie, Home, Building } from 'lucide-react'
import OccasionCateringPage from './occasion/OccasionCateringPage'
import type { OccasionPageConfig } from './occasion/OccasionCateringPage'

const config: OccasionPageConfig = {
  slug: 'afternoon-tea-catering-dubai',
  seoTitle: 'Afternoon Tea Catering Dubai | High Tea at Home & Venues',
  metaDescription:
    'Afternoon tea and high tea catering in Dubai for birthdays, bridal showers, corporate events and home gatherings. Elegant savoury, scones, cakes and full service.',
  canonicalPath: '/afternoon-tea-catering-dubai',
  ogImage: '/images/afternoon-tea-catering-dubai-hero.webp',
  breadcrumbLabel: 'Afternoon Tea Catering Dubai',
  h1: 'Afternoon Tea Catering in Dubai',
  heroSub:
    'Elegant afternoon tea and high tea catering across Dubai — refined savoury bites, warm scones, petit fours and beautiful table service for home, venue and corporate events.',
  heroImage: '/images/afternoon-tea-catering-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to plan afternoon tea catering in Dubai (via mychef.ae/afternoon-tea-catering-dubai)",
  eyebrow: 'HIGH TEA CATERING IN DUBAI',
  introH2: 'A Proper Afternoon Tea, Wherever You Are',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        There is something undeniably elegant about a well-executed afternoon tea: tiered stands of delicate sandwiches, warm scones with cream, and small cakes arranged like jewellery. Our afternoon tea catering brings that hotel-lounge experience to your home, villa, office or event venue across Dubai — without the formality of a fixed venue.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        It is a perfect format for bridal showers, baby showers, birthdays, corporate hospitality or simply a sophisticated get-together with friends. We can style the table, serve from tiered stands, or set up a self-service tea station. Pair this with our{' '}
        <Link to="/canape-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          canapé catering Dubai
        </Link>{' '}
        for extra bite-sized options, or explore{' '}
        <Link to="/dessert-table-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          dessert table catering Dubai
        </Link>{' '}
        for a grander sweet finish.
      </p>
    </>
  ),
  formatsH2: 'Afternoon Tea Catering Formats',
  formats: [
    {
      Icon: Utensils,
      title: 'Traditional Tiered Tea',
      description: 'Three-tiered stands with finger sandwiches, scones, clotted cream, jams and petit fours — served tableside or at a grazing station.',
      link: '/catering-dubai',
    },
    {
      Icon: Cake,
      title: 'Pastry & Cake Tables',
      description: 'Expanded cake and patisserie displays for guests who want a stronger sweet focus alongside the savoury course.',
      link: '/dessert-table-catering-dubai',
    },
    {
      Icon: Coffee,
      title: 'Tea & Coffee Service',
      description: 'Curated tea selection, freshly brewed coffee and elegant service pots, with staff on hand to pour and replenish.',
      link: '/catering-dubai',
    },
    {
      Icon: Cookie,
      title: 'Themed High Tea',
      description: 'Afternoon tea styled around a colour, occasion or brand — from pastel bridal showers to corporate logo touches.',
      link: '/event-catering-dubai',
    },
    {
      Icon: Home,
      title: 'At-Home Tea Parties',
      description: 'Full-service afternoon tea in your Dubai villa or apartment, complete with table styling, service and cleanup.',
      link: '/villa-catering-dubai',
    },
    {
      Icon: Building,
      title: 'Corporate Tea Reception',
      description: 'Refined tea receptions for boardrooms, product launches and client entertaining — professional without being stuffy.',
      link: '/corporate',
    },
  ],
  useCasesEyebrow: 'WHERE AFTERNOON TEA FITS',
  useCasesH2: 'Elegant, Versatile & Always Photogenic',
  useCases: [
    {
      title: 'Bridal & Baby Showers',
      description:
        'Afternoon tea is the natural choice for bridal and baby showers — delicate, feminine, easy to eat while mingling, and beautiful in photos.',
    },
    {
      title: 'Birthday Celebrations',
      description:
        'For adults who prefer elegance over loud parties, a high tea birthday with friends is refined, relaxed and memorable.',
    },
    {
      title: 'Corporate Hospitality',
      description:
        'Boardrooms and showrooms become more welcoming with a curated tea service for clients, investors and partners.',
    },
    {
      title: 'Intimate Family Gatherings',
      description:
        'Grandmother’s birthday, an anniversary tea, or a long-overdue reunion — afternoon tea turns a family afternoon into an occasion.',
    },
  ],
  includedH2: "What's Included in Our Afternoon Tea Catering",
  includedItems: [
    { title: 'Finger Sandwiches & Savoury Bites', description: 'Classic and contemporary fillings on fresh breads, cut for elegant eating.' },
    { title: 'Warm Scones & Preserves', description: 'Freshly baked scones with clotted cream, butter and seasonal jams.' },
    { title: 'Petit Fours & Mini Cakes', description: 'Beautiful small cakes, macarons, tarts and sweet bites for the top tier.' },
    { title: 'Curated Tea & Coffee', description: 'Selection of teas and freshly brewed coffee, served with elegant pots and cups.' },
    { title: 'Tiered Stands & Table Styling', description: 'Classic cake stands, linen and tableware to create the full high-tea look.' },
    { title: 'Dietary Options', description: 'Vegetarian, vegan, gluten-free and dairy-free adaptations available on request.' },
    { title: 'White-Glove Service', description: 'Attentive staff to pour, serve and replenish throughout the event.' },
    { title: 'Setup & Pack-Down', description: 'We bring everything, style the table, serve and clear away afterwards.' },
  ],
  galleryH2: 'A Taste of Our Afternoon Tea Catering',
  galleryImages: [
    { src: '/menu-appetizer.webp', alt: 'Afternoon tea savoury bites in Dubai' },
    { src: '/menu-canapes.webp', alt: 'Elegant high tea canapés' },
    { src: '/menu-dessert.webp', alt: 'Tiered afternoon tea cake stand' },
    { src: '/service-catering.webp', alt: 'Afternoon tea catering set-up at a Dubai event' },
    { src: '/service-villa.webp', alt: 'Villa high tea styling' },
    { src: '/service-events.webp', alt: 'Afternoon tea event catering in Dubai' },
  ],
  faqsH2: 'Afternoon Tea Catering Questions',
  faqs: [
    {
      q: 'What is included in a typical afternoon tea menu?',
      a: 'A classic afternoon tea includes finger sandwiches, warm scones with cream and jam, and a selection of small cakes and pastries. We can also add savouries, themed sweets and upgraded patisserie.',
    },
    {
      q: 'Can afternoon tea be served at my home or villa?',
      a: 'Yes. We bring tiered stands, tableware, linens, food and service staff to your home or villa anywhere in Dubai.',
    },
    {
      q: 'Do you offer themed or branded afternoon tea?',
      a: 'Absolutely. We can style the menu, colours and presentation around a bridal theme, baby shower, corporate brand or seasonal occasion.',
    },
    {
      q: 'Can you accommodate dietary requirements?',
      a: 'Yes. We offer vegetarian, vegan, gluten-free and dairy-free options, and can label everything clearly for mixed groups.',
    },
    {
      q: 'Is afternoon tea suitable for corporate events?',
      a: 'Yes. It works beautifully for client hospitality, boardroom celebrations, product launches and team events where you want something more refined than a standard buffet.',
    },
    {
      q: 'How far in advance should I book afternoon tea catering?',
      a: 'One to three weeks is ideal, especially for custom patisserie or themed styling. For smaller home gatherings, shorter notice may be possible.',
    },
  ],
  relatedServices: [
    {
      title: "Mother's Day Catering",
      description: 'A refined afternoon tea or brunch to celebrate Mum in style.',
      image: '/images/mothers-day-catering-dubai-hero.webp',
      link: '/mothers-day-catering-dubai',
    },
    {
      title: 'Canapé Catering',
      description: 'Elegant bite-sized options that complement any afternoon tea menu.',
      image: '/images/canape-catering-dubai-hero.webp',
      link: '/canape-catering-dubai',
    },
    {
      title: 'Dessert Table Catering',
      description: 'Show-stopping sweet displays and celebration cakes for any occasion.',
      image: '/menu-dessert.webp',
      link: '/dessert-table-catering-dubai',
    },
    {
      title: 'Baby Shower Catering',
      description: 'Beautiful, inclusive catering for baby showers and family celebrations.',
      image: '/service-events.webp',
      link: '/baby-shower-catering-dubai',
    },
  ],
  ctaH2: 'Host an Afternoon Tea to Remember',
  ctaP:
    'Tell us about your occasion, guest list and preferred venue. We will design an elegant afternoon tea menu and table experience that feels like a luxury hotel brought to you.',
}

export default function AfternoonTeaCatering() {
  return <OccasionCateringPage config={config} />
}
