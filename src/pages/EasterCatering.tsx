import { Link } from 'react-router'
import { Egg, Rabbit, Flower2, Sun, Home, Building2 } from 'lucide-react'
import OccasionCateringPage from './occasion/OccasionCateringPage'
import type { OccasionPageConfig } from './occasion/OccasionCateringPage'

const config: OccasionPageConfig = {
  slug: 'easter-catering-dubai',
  seoTitle: 'Easter Catering Dubai | Brunch, Lunch & Private Chef Service',
  metaDescription:
    'Easter catering in Dubai. Celebrate with a bespoke spring brunch, roast lunch or garden party menu crafted by a private chef for family and friends at home or venue.',
  canonicalPath: '/easter-catering-dubai',
  ogImage: '/images/easter-catering-dubai-hero.webp',
  breadcrumbLabel: 'Easter Catering Dubai',
  h1: 'Easter Catering in Dubai',
  heroSub:
    'Celebrate Easter with a beautifully crafted spring menu — from elegant brunches and roast lunches to garden parties and family feasts, all served by a private chef in your Dubai home or venue.',
  heroImage: '/images/easter-catering-dubai-hero.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to book Easter catering in Dubai (via mychef.ae/easter-catering-dubai)",
  eyebrow: 'EASTER CATERING IN DUBAI',
  introH2: 'An Easter Feast Worth Celebrating',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Easter in Dubai is the perfect occasion to gather family and friends over a generous, beautifully presented meal. Whether you are hosting a relaxed garden brunch, a formal sit-down lunch or a lively egg hunt party for children, our Easter catering service brings seasonal flavours and effortless hospitality to your chosen setting. Every menu is designed around your guest list, dietary preferences and the mood of the day.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Our chefs combine classic Easter favourites with fresh, spring-inspired dishes. Expect herb-crusted lamb, honey-glazed ham, seasonal vegetables, artisan breads, fresh salads and indulgent desserts. We handle the shopping, preparation, service and cleanup, so you can focus on enjoying the celebration with your guests.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        We cater Easter events across Dubai, from villas and apartments to rooftop terraces and event venues. Pair this with our{' '}
        <Link to="/brunch-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          brunch catering
        </Link>{' '}
        for a spring-inspired morning celebration, or explore{' '}
        <Link to="/private-party-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          private party catering
        </Link>{' '}
        for larger family gatherings.
      </p>
    </>
  ),
  formatsH2: 'Easter Celebration Formats',
  formats: [
    {
      Icon: Egg,
      title: 'Easter Brunch',
      description: 'A leisurely spring brunch with eggs Benedict, pastries, fresh fruit, salads and sparkling mocktails.',
      link: '/brunch-catering-dubai',
    },
    {
      Icon: Rabbit,
      title: 'Family Easter Lunch',
      description: 'A comforting roast lunch with lamb, ham, seasonal sides and classic desserts for the whole family.',
      link: '/private-party-catering-dubai',
    },
    {
      Icon: Flower2,
      title: 'Garden & Terrace Parties',
      description: 'Al fresco Easter celebrations with grazing tables, BBQ stations and spring floral styling.',
      link: '/villas-private-residences',
    },
    {
      Icon: Sun,
      title: 'Kids Easter Egg Hunt Catering',
      description: 'Child-friendly menus, sweet treats and snack stations designed around an Easter egg hunt.',
      link: '/kids-birthday-catering-dubai',
    },
    {
      Icon: Home,
      title: 'At-Home Villa Dining',
      description: 'Transform your villa or apartment into a private Easter dining venue with full setup and service.',
      link: '/villas-private-residences',
    },
    {
      Icon: Building2,
      title: 'Venue & Corporate Easter Events',
      description: 'Polished Easter catering for venues, corporate family days and community celebrations.',
      link: '/corporate-event-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE EASTER CATERING SHINES',
  useCasesH2: 'Spring Flavours, Relaxed Hosting & Impeccable Service',
  useCases: [
    {
      title: 'Family Gatherings',
      description:
        'Bring generations together over a menu that balances traditional Easter dishes with lighter spring options, served at a beautifully styled table.',
    },
    {
      title: 'Garden & Poolside Parties',
      description:
        'Make the most of Dubai’s spring weather with an outdoor Easter feast, complete with grazing platters, grills and refreshing drinks.',
    },
    {
      title: 'Children’s Easter Egg Hunts',
      description:
        'Keep young guests happy with kid-friendly bites, Easter-themed desserts and a service schedule that works around the egg hunt.',
    },
    {
      title: 'Corporate & Community Events',
      description:
        'Host a polished Easter celebration for colleagues or community groups with scalable menus and professional service.',
    },
  ],
  includedH2: "What's Included in Our Easter Catering",
  includedItems: [
    { title: 'Bespoke Spring Menu', description: 'A personalised menu featuring Easter classics and fresh seasonal dishes.' },
    { title: 'Roast Mains & Carving', description: 'Herb-crusted lamb, honey-glazed ham or vegetarian centrepieces, carved and served at the table.' },
    { title: 'Spring Starters & Salads', description: 'Light appetisers, fresh salads and seasonal vegetables to balance the meal.' },
    { title: 'Easter Desserts & Treats', description: 'Chocolate eggs, hot cross buns, simnel cake and other festive sweet treats.' },
    { title: 'Professional Chef & Staff', description: 'Experienced chefs and attentive servers who keep the day running smoothly.' },
    { title: 'Dietary Accommodation', description: 'Halal, vegetarian, vegan, gluten-free and allergy-aware options available.' },
    { title: 'Table Styling & Floral Touches', description: 'Elegant tableware, linens and subtle spring décor to suit the occasion.' },
    { title: 'Full Setup & Cleanup', description: 'We arrive early, prepare, serve and leave your space spotless after the celebration.' },
  ],
  galleryH2: 'A Taste of Our Easter Catering',
  galleryImages: [
    { src: '/images/easter-catering-dubai-hero.webp', alt: 'Easter catering setup in Dubai' },
    { src: '/menu-appetizer.webp', alt: 'Spring appetisers for an Easter brunch' },
    { src: '/menu-mains.webp', alt: 'Roast lamb and Easter main dishes' },
    { src: '/menu-dessert.webp', alt: 'Easter desserts and chocolate treats' },
    { src: '/service-events.webp', alt: 'Event catering service in Dubai' },
    { src: '/service-luxury-dining.webp', alt: 'Luxury private dining experience in Dubai' },
  ],
  faqsH2: 'Easter Catering Questions',
  faqs: [
    {
      q: 'Can you cater Easter at my home or villa in Dubai?',
      a: 'Yes. We specialise in at-home Easter catering, bringing chefs, staff, equipment and tableware so you can host without the stress.',
    },
    {
      q: 'What Easter dishes do you offer?',
      a: 'Our Easter menus can include herb-crusted lamb, honey-glazed ham, roasted vegetables, fresh salads, hot cross buns, simnel cake and chocolate Easter treats.',
    },
    {
      q: 'Do you cater Easter egg hunts for children?',
      a: 'Absolutely. We can time the meal around the egg hunt and provide child-friendly menus, snacks and sweet treats for younger guests.',
    },
    {
      q: 'Can you host an Easter brunch instead of lunch?',
      a: 'Yes. Our brunch catering includes eggs Benedict, pastries, fresh fruit, salads and sparkling mocktails — perfect for a relaxed Easter morning.',
    },
    {
      q: 'How far in advance should I book Easter catering?',
      a: 'Easter is a popular date for private catering. We recommend booking two to three weeks ahead, especially for large family gatherings and prime slots.',
    },
    {
      q: 'Can you accommodate dietary requirements?',
      a: 'Yes. We routinely adapt menus for halal, vegetarian, vegan, gluten-free and allergy-specific needs without compromising on flavour or presentation.',
    },
  ],
  relatedServices: [
    {
      title: 'Brunch Catering Dubai',
      description: 'Relaxed, elegant brunch menus for morning celebrations and weekend gatherings.',
      image: '/images/brunch-catering-dubai-hero.webp',
      link: '/brunch-catering-dubai',
    },
    {
      title: 'Private Party Catering',
      description: 'Bespoke catering for family celebrations, reunions and special occasions at home or venue.',
      image: '/service-events.webp',
      link: '/private-party-catering-dubai',
    },
    {
      title: 'Kids Birthday Catering',
      description: 'Fun, child-friendly menus and themed catering for young guests and family events.',
      image: '/images/kids-birthday-catering-dubai-hero.webp',
      link: '/kids-birthday-catering-dubai',
    },
  ],
  ctaH2: 'Plan Your Easter Celebration in Dubai',
  ctaP:
    'Tell us about your guest count, venue and menu preferences. We will design an Easter catering experience that feels seasonal, effortless and memorable.',
}

export default function EasterCatering() {
  return <OccasionCateringPage config={config} />
}
