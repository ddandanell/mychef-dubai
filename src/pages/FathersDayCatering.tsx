import { Link } from 'react-router'
import { Beef, Coffee, Home, Utensils, Flame, Heart } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'fathers-day-catering-dubai',
  seoTitle: "Father's Day Catering Dubai | Brunch, BBQ & Family Feasts",
  metaDescription:
    "Father's Day catering in Dubai: brunch, BBQ, family lunches and private dining to celebrate Dad. Full setup, custom menus and service. Request a quote.",
  canonicalPath: '/fathers-day-catering-dubai',
  ogImage: '/service-events.webp',
  breadcrumbLabel: "Father's Day Catering Dubai",
  h1: "Father's Day Catering in Dubai",
  heroSub:
    "Celebrate Dad with Father's Day catering across Dubai — from relaxed brunches and BBQs to private family dinners and sharing-style feasts he'll actually enjoy.",
  heroImage: '/service-events.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to arrange Father's Day catering in Dubai (via mychef.ae/fathers-day-catering-dubai)",
  eyebrow: "FATHER'S DAY CATERING IN DUBAI",
  introH2: "A Father's Day Feast Worthy of the Occasion",
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Father's Day is the perfect excuse to gather the family around a table of great food and let Dad relax. Our Father's Day catering in Dubai is designed for families who want to celebrate at home, in a villa, or at a venue without the stress of cooking, shopping or washing up.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        We create menus that lean into what many Dads love: generous portions, quality meats, bold flavours, fresh seafood and laid-back presentation. Whether that means a Father's Day brunch with eggs and grills, a BBQ lunch by the pool, or a private dinner with his favourite cuisine, we tailor the day to your father and your family.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        This service pairs naturally with our{' '}
        <Link to="/brunch-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          brunch catering Dubai
        </Link>{' '}
        and{' '}
        <Link to="/bbq-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          BBQ catering Dubai
        </Link>{' '}
        options, and with{' '}
        <Link to="/private-party-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          private party catering Dubai
        </Link>{' '}
        for intimate celebrations at home.
      </p>
    </>
  ),
  formatsH2: "Father's Day Catering Formats",
  formats: [
    {
      Icon: Coffee,
      title: "Father's Day Brunch",
      description: 'Late-morning spreads with eggs, pastries, grilled proteins, fresh juices and coffee served family-style.',
      link: '/brunch-catering-dubai',
    },
    {
      Icon: Flame,
      title: 'BBQ & Grill Lunch',
      description: 'Poolside or garden BBQ with premium meats, seafood, salads and all the smoky flavours Dad enjoys.',
      link: '/bbq-catering-dubai',
    },
    {
      Icon: Utensils,
      title: 'Plated Family Dinner',
      description: "Elegant multi-course dinner at home or in a villa for a more refined Father's Day celebration.",
      link: '/catering-dubai',
    },
    {
      Icon: Home,
      title: 'Villa & Home Celebrations',
      description: 'Full-service catering in your home or villa across Dubai with setup, service and cleanup.',
      link: '/villas-private-residences',
    },
    {
      Icon: Beef,
      title: 'Carving & Live Stations',
      description: 'Live carving, shawarma or grill stations that add theatre and keep the food hot and fresh.',
      link: '/live-cooking-stations-dubai',
    },
    {
      Icon: Heart,
      title: 'Themed Dessert & Cake',
      description: "Personalised Father's Day cakes, desserts and sweet tables to finish the meal on a high note.",
      link: '/dessert-table-catering-dubai',
    },
  ],
  useCasesEyebrow: "WHERE FATHER'S DAY CATERING WORKS",
  useCasesH2: "Built Around What Dad Loves",
  useCases: [
    {
      title: 'Family Villa Lunches',
      description:
        "Gather the extended family in a villa in Emirates Hills, Palm Jumeirah or Dubai Hills for a relaxed Father's Day lunch that Dad does not have to lift a finger for.",
    },
    {
      title: 'Poolside BBQ Celebrations',
      description:
        'Fire up the grill by the pool with a BBQ menu that keeps everyone happy, from kids to grandparents.',
    },
    {
      title: 'Intimate Home Dinners',
      description:
        "For smaller families, a private chef-style dinner at home makes Father's Day feel personal and special.",
    },
    {
      title: 'Multi-Generational Gatherings',
      description:
        "Menus designed to suit grandfathers, fathers and sons alike, with variety, generous portions and easy-to-share dishes.",
    },
  ],
  includedH2: "What's Included in Our Father's Day Catering",
  includedItems: [
    { title: "Dad-Focused Menu Design", description: "Menus built around hearty proteins, bold flavours and relaxed presentation Dad will appreciate." },
    { title: 'Brunch, Lunch or Dinner', description: 'Flexible timings and formats to suit your family schedule and Dad’s preferences.' },
    { title: 'Premium Meats & Seafood', description: 'Quality steaks, ribs, burgers, prawns and fish prepared to order.' },
    { title: 'Live BBQ & Grill Stations', description: 'Chef-manned grills and smokers for poolside or garden celebrations.' },
    { title: 'Fresh Sides & Salads', description: 'Balanced sides, breads and salads to complement the main dishes.' },
    { title: 'Desserts & Celebration Cake', description: "Father's Day cakes, chocolate desserts and sweet stations for the whole family." },
    { title: 'Service Staff & Setup', description: 'Friendly team to serve, clear and keep the celebration running smoothly.' },
    { title: 'Full Pack-Down & Cleanup', description: 'We leave the venue tidy so the family can enjoy the rest of the day.' },
  ],
  galleryH2: "A Taste of Our Father's Day Catering",
  galleryImages: [
    { src: '/service-events.webp', alt: "Father's Day catering set-up in Dubai" },
    { src: '/menu-meat.webp', alt: "Grilled meats for a Father's Day feast" },
    { src: '/menu-appetizer.webp', alt: "Father's Day appetisers and salads" },
    { src: '/menu-dessert.webp', alt: "Father's Day dessert table and cake" },
    { src: '/service-villa.webp', alt: "Villa Father's Day lunch styling" },
    { src: '/service-catering.webp', alt: "Father's Day catering service in Dubai" },
  ],
  faqsH2: "Father's Day Catering Questions",
  faqs: [
    {
      q: "What kind of food works best for Father's Day catering?",
      a: "Menus usually centre on Dad's favourites: grilled meats, BBQ, seafood, hearty sides and indulgent desserts. We tailor the cuisine to your father's tastes and the family style.",
    },
    {
      q: "Can you cater Father's Day at our home or villa?",
      a: 'Yes. We provide full-service home and villa catering across Dubai, including setup, service and cleanup, so the family can focus on Dad.',
    },
    {
      q: 'Do you offer brunch as well as lunch and dinner?',
      a: 'Absolutely. Father’s Day brunch is a popular option, with eggs, pastries, grilled proteins, fresh juices and coffee served family-style.',
    },
    {
      q: 'Can you include a custom cake or dessert for Dad?',
      a: 'Yes. We can arrange a personalised Father’s Day cake, themed dessert table or selection of his favourite sweets.',
    },
    {
      q: 'How many guests can you cater for Father’s Day?',
      a: 'We cater intimate family dinners from around 8 guests up to large family gatherings of 100 or more in a villa or venue.',
    },
    {
      q: 'How far in advance should I book Father’s Day catering?',
      a: "One to two weeks is ideal, especially for villa BBQs or custom menus. During Father's Day weekend, earlier booking is strongly recommended.",
    },
  ],
  relatedServices: [
    {
      title: 'BBQ Catering Dubai',
      description: 'Relaxed outdoor grilling menus that are always a Father’s Day favourite.',
      image: '/menu-meat.webp',
      link: '/bbq-catering-dubai',
    },
    {
      title: 'Brunch Catering Dubai',
      description: 'Late-morning spreads perfect for a celebratory Father’s Day brunch.',
      image: '/service-events.webp',
      link: '/brunch-catering-dubai',
    },
    {
      title: 'Private Party Catering',
      description: 'Intimate home and villa parties with personalised menus and full service.',
      image: '/service-villa.webp',
      link: '/private-party-catering-dubai',
    },
  ],
  ctaH2: "Make This Father's Day One to Remember",
  ctaP:
    "Tell us about Dad, your family size, venue and preferred style. We will create a Father's Day catering menu that lets him relax and enjoy the celebration.",
}

export default function FathersDayCatering() {
  return <ServiceLandingPage config={config} />
}
