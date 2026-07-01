import { Link } from 'react-router'
import { Umbrella, Utensils, Fish, Salad, Sun, Home } from 'lucide-react'
import OccasionCateringPage from './occasion/OccasionCateringPage'
import type { OccasionPageConfig } from './occasion/OccasionCateringPage'

const config: OccasionPageConfig = {
  slug: 'beach-catering-dubai',
  seoTitle: 'Beach Catering Dubai | Fresh Seafood & Shoreline Menus',
  metaDescription:
    'Beach catering in Dubai for private gatherings, beach clubs and shoreline events. Fresh seafood, grilled meats, salads and full service by the water.',
  canonicalPath: '/beach-catering-dubai',
  ogImage: '/images/beach-catering-dubai-hero.webp',
  breadcrumbLabel: 'Beach Catering Dubai',
  h1: 'Beach Catering in Dubai',
  heroSub:
    'Fresh, coastal-inspired catering for Dubai beach clubs, private shoreline gatherings and sandy celebrations — seafood, grills, salads and chilled service by the water.',
  heroImage: '/images/beach-catering-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to plan beach catering in Dubai (via mychef.ae/beach-catering-dubai)",
  eyebrow: 'SHORELINE CATERING IN DUBAI',
  introH2: 'Dining with Your Feet in the Sand',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Dubai’s coastline offers some of the most beautiful settings for a celebration — private beaches, beach clubs and shoreline villas where the water is the backdrop. Our beach catering is designed for the environment: fresh seafood, grilled meats, crisp salads and plenty of chilled refreshments, all served in a way that handles sand, breeze and sunshine with ease.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        We work with beach clubs, private villa estates and event planners to deliver menus that feel relaxed but refined. Whether it is a family day, a brand activation or an intimate sunset dinner, we bring the kitchen to the shore. Pair beach catering with our{' '}
        <Link to="/yachts" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          yacht catering Dubai
        </Link>{' '}
        for a full weekend of waterside dining, or explore{' '}
        <Link to="/bbq-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          BBQ catering Dubai
        </Link>{' '}
        for live grilling on the sand.
      </p>
    </>
  ),
  formatsH2: 'Beach Catering Formats',
  formats: [
    {
      Icon: Utensils,
      title: 'Beach Canapés & Platters',
      description: 'Elegant passed canapés and sharing platters designed for sandy feet and casual mingling.',
      link: '/canape-catering-dubai',
    },
    {
      Icon: Fish,
      title: 'Fresh Seafood Stations',
      description: 'Chilled seafood displays, grilled fish and shellfish prepared with coastal flavours and citrus.',
      link: '/catering-dubai',
    },
    {
      Icon: Salad,
      title: 'Coastal Salad & Grain Bars',
      description: 'Cool, refreshing salads and grains that hold up beautifully in beach temperatures.',
      link: '/buffet-catering-dubai',
    },
    {
      Icon: Sun,
      title: 'Sunset Beach BBQ',
      description: 'Live grills on the sand at golden hour — meats, seafood and vegetables with smoky, beachside flavour.',
      link: '/bbq-catering-dubai',
    },
    {
      Icon: Umbrella,
      title: 'Beach Club Catering',
      description: 'Full-service catering coordination for Dubai beach clubs, cabanas and waterfront venues.',
      link: '/event-catering-dubai',
    },
    {
      Icon: Home,
      title: 'Private Beach Villas',
      description: 'Bespoke beachfront dining at private villas and estates along Dubai’s coastline.',
      link: '/villa-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE BEACH CATERING WORKS',
  useCasesH2: 'From Casual Days to Sunset Dinners',
  useCases: [
    {
      title: 'Family Beach Days',
      description:
        'Keep the whole family fed with a mix of adult and child-friendly dishes, from grilled chicken and salads to fruit skewers and cookies.',
    },
    {
      title: 'Sunset Brand Activations',
      description:
        'Beach activations need food that photographs well and tastes better. Our coastal menus and styled stations create shareable moments for guests and social media.',
    },
    {
      title: 'Intimate Shoreline Dinners',
      description:
        'For proposals, anniversaries or small celebrations, a private beach dinner with candles, grilled seafood and attentive service is hard to beat.',
    },
    {
      title: 'Beach Club Weekends',
      description:
        'Dubai beach clubs rely on fast, consistent, beautiful food service. We coordinate with venue teams to deliver menus that match the club’s pace and style.',
    },
  ],
  includedH2: "What's Included in Our Beach Catering",
  includedItems: [
    { title: 'Coastal Menu Design', description: 'Menus built around seafood, grills, citrus and fresh produce.' },
    { title: 'Chilled Service Equipment', description: 'Ice baths, covered stations and temperature control for beach conditions.' },
    { title: 'Live Grilling Options', description: 'Beach BBQ stations with chefs grilling meats, fish and vegetables to order.' },
    { title: 'Hydrating Drinks', description: 'Mocktails, infused waters and chilled juices to keep guests refreshed.' },
    { title: 'Sturdy Beach Setup', description: 'Weighted, wind-resistant serving stations and tableware suitable for sand.' },
    { title: 'Seafood Sourcing', description: 'Fresh, responsibly sourced seafood prepared simply and elegantly.' },
    { title: 'On-Site Service Team', description: 'Experienced outdoor service staff who handle beach logistics smoothly.' },
    { title: 'Pack-Down & Clearance', description: 'We leave the beach area clean and tidy after service.' },
  ],
  galleryH2: 'A Taste of Our Beach Catering',
  galleryImages: [
    { src: '/menu-appetizer.webp', alt: 'Beach appetisers in Dubai' },
    { src: '/menu-canapes.webp', alt: 'Beach canapé selection' },
    { src: '/menu-dessert.webp', alt: 'Coastal dessert display' },
    { src: '/service-catering.webp', alt: 'Beach catering set-up in Dubai' },
    { src: '/service-villa.webp', alt: 'Beach villa dinner styling' },
    { src: '/service-events.webp', alt: 'Beach event catering in Dubai' },
  ],
  faqsH2: 'Beach Catering Questions',
  faqs: [
    {
      q: 'Can you cater on any Dubai beach?',
      a: 'We cater at private beaches, beach clubs and villa beachfronts. Public beach events may require permits; we can advise on requirements once we know your location.',
    },
    {
      q: 'How do you keep food fresh on the beach?',
      a: 'We use chilled transport, ice baths, covered serving stations and strict timing so seafood, salads and drinks stay fresh and safe throughout the event.',
    },
    {
      q: 'Do you offer beach BBQs?',
      a: 'Yes. Live beach BBQs are one of our most popular formats — chefs grill meats, seafood and vegetables on portable equipment right on the sand.',
    },
    {
      q: 'Can you provide tableware that works on sand?',
      a: 'Yes. We use sturdy, wind-resistant serveware and can provide casual tableware that feels appropriate for a beach setting while still looking polished.',
    },
    {
      q: 'What happens if the weather changes?',
      a: 'We plan for Dubai’s weather with covered stations, backup service timing and contingency structures where possible. Communication on the day ensures we adapt smoothly.',
    },
    {
      q: 'How far in advance should I book beach catering?',
      a: 'Two to four weeks is recommended, especially for seafood-heavy menus or beach club coordination. For private villa beaches, we can sometimes accommodate shorter notice.',
    },
  ],
  relatedServices: [
    {
      title: 'Yacht Catering',
      description: 'Waterside dining for yachts and marina events across Dubai.',
      image: '/images/yacht-catering-dubai-hero.webp',
      link: '/yachts',
    },
    {
      title: 'BBQ Catering',
      description: 'Live grilling stations ideal for beach and garden settings.',
      image: '/images/bbq-catering-dubai-hero.webp',
      link: '/bbq-catering-dubai',
    },
    {
      title: 'Event Catering',
      description: 'Full-service catering for celebrations of any size and venue.',
      image: '/service-events.webp',
      link: '/event-catering-dubai',
    },
  ],
  ctaH2: 'Plan Your Beach Celebration',
  ctaP:
    'Tell us about your beach, guest count and vision. We will create a fresh, coastal menu that makes the most of Dubai’s beautiful shoreline.',
}

export default function BeachCatering() {
  return <OccasionCateringPage config={config} />
}
