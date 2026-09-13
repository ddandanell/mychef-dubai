// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /exhibition-catering-dubai
//     primary:     "exhibition catering dubai"
//     subkeywords: "exhibition catering dubai price" · "exhibition catering dubai cost per person" · "exhibition stand catering dubai" · "exhibition catering packages dubai" · "exhibition catering menu dubai" · "trade show catering dubai" · "food exhibition catering dubai" · "dubai food exhibition 2026"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { Link } from 'react-router'
import { Users, Coffee, Truck, Utensils } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'
import CorporatePackageCompare from '@/components/corporate/CorporatePackageCompare'
import CorporateInventory from '@/components/corporate/CorporateInventory'
import { packagesForOwner } from '@/content/corporatePackages'

const config: ServicePageConfig = {
  slug: 'exhibition-catering-dubai',
  seoTitle: 'Exhibition Catering Dubai | DWTC & Expo City | myCHEF',
  metaDescription:
    'Exhibition catering Dubai for stand hospitality and exhibitor meals. Drop-off from AED 90 per person. No kitchen assumed. Hall access quoted separately.',
  canonicalPath: '/exhibition-catering-dubai',
  ogImage: '/service-events.webp',
  breadcrumbLabel: 'Exhibition Catering Dubai',
  hideSiteName: true,
  h1: 'Exhibition Catering Dubai: DWTC, Expo City & Trade Show Stands',
  heroSub:
    'Reliable, high-volume catering for exhibitors, organisers and trade show visitors at Dubai World Trade Centre, Expo City and major exhibition venues across the emirate.',
  heroImage: '/service-events.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like a quote for exhibition and trade show catering in Dubai (via mychef.ae/exhibition-catering-dubai)",
  eyebrow: 'EXHIBITION & TRADE SHOW CATERING IN DUBAI',
  introH2: 'Keep Your Stand, Staff and Visitors Well Fed',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Exhibition catering in Dubai is hospitality without a kitchen: visitor food at the stand, and separate meals for the exhibitor team. Drop-off starts from AED 90 per person. Hall rules, power and replenishment matter more than a plated menu.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        We provide branded food counters, passed canapés, grab-and-go meal boxes, barista coffee stations, refreshment trolleys and VIP hospitality menus. Everything is designed to be served efficiently in a busy exhibition environment, with clear labelling for dietary needs and packaging that travels well from prep kitchen to stand.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        Exhibition catering sits within our wider{' '}
        <Link to="/corporate" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          corporate catering
        </Link>{' '}
        and{' '}
        <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          luxury catering in Dubai
        </Link>{' '}
        offering. For product launches and brand activations, see our{' '}
        <Link to="/brand-activation-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          brand activation catering
        </Link>{' '}
        service, or explore{' '}
        <Link to="/canape-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          canapé catering Dubai
        </Link>{' '}
        for reception-style service at your stand.
      </p>
    </>
  ),
  formatsH2: 'Exhibition Catering Formats',
  formats: [
    {
      Icon: Coffee,
      title: 'Coffee & Refreshment Stations',
      description: 'Coffee, tea, water and juice on the stand. Power and hall rules checked first. Barista labour is not a full coffee cart unless named.',
      link: '/bar-services-dubai',
    },
    {
      Icon: Utensils,
      title: 'Canapé & Bowl Food Receptions',
      description: 'Elegant bite-sized dishes for stand openings, networking receptions and VIP moments within the exhibition hall.',
      link: '/canape-catering-dubai',
    },
    {
      Icon: Truck,
      title: 'Grab-and-Go Meal Boxes',
      description: 'Individually packed meals for staff, crew and visitors who need to eat quickly without leaving the venue.',
      link: '/drop-off-catering-dubai',
    },
    {
      Icon: Users,
      title: 'VIP Hospitality Catering',
      description: 'Premium plated and buffet options for private meeting rooms, hospitality suites and executive lounges.',
      link: '/corporate-event-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE EXHIBITION CATERING HELPS',
  useCasesH2: 'Built for the Show Floor',
  useCases: [
    {
      title: 'Exhibitor Stands',
      description:
        'Turn your stand into a destination with coffee, canapés and light lunches. Good catering encourages visitors to stay longer and gives your team a natural conversation starter.',
    },
    {
      title: 'Organiser & Pavilion Hospitality',
      description:
        'we coordinate catering for organiser lounges, press rooms, speaker green rooms and national pavilions with efficient service and menus that scale across multi-day events.',
    },
    {
      title: 'Product Launches at Trade Shows',
      description:
        'Time food to the launch moment: passed bites, labelled dietary plates, service that can pause for the reveal.',
    },
    {
      title: 'Multi-Day Conferences & Expos',
      description:
        'Consistent quality across breakfast, lunch and coffee breaks for delegates, exhibitors and crew during week-long exhibitions and congresses.',
    },
  ],
  includedH2: "What's Included in Our Exhibition Catering",
  includedItems: [
    { title: 'Venue-Aware Logistics', description: 'Planning around DWTC, Expo City and hotel venue rules, loading bays, power limits and service windows.' },
    { title: 'Branded Counter Design', description: 'Food stations styled to complement your stand design and brand colours.' },
    { title: 'High-Volume Capacity', description: 'Menus and staffing scaled to serve hundreds of visitors across busy show hours.' },
    { title: 'Canapés & Bowl Food', description: 'Bite-sized, easy-to-eat options perfect for networking while standing.' },
    { title: 'Grab-and-Go & Boxed Meals', description: 'Quick lunch options for crew and visitors who cannot sit down for a full meal.' },
    { title: 'Barista Coffee & Beverages', description: 'Coffee, tea, juices and infused water stations to keep energy up on the show floor.' },
    { title: 'Dietary Labelling', description: 'Halal, vegetarian, vegan, gluten-free and allergen-aware items clearly marked.' },
    { title: 'Full Service & Pack-Down', description: 'Chefs, service staff and clean-up crews managed around exhibition hall schedules.' },
  ],
  galleryH2: 'A Taste of Our Exhibition Catering',
  galleryImages: [
    { src: '/service-events.webp', alt: 'Exhibition catering at a Dubai trade show' },
    { src: '/menu-canapes.webp', alt: 'Canapés for exhibition stand receptions' },
    { src: '/menu-appetizer.webp', alt: 'Bite-sized appetisers for trade show guests' },
    { src: '/service-corporate.webp', alt: 'Corporate catering setup at an exhibition venue' },
    { src: '/service-luxury-dining.webp', alt: 'VIP hospitality catering for exhibitions' },
    { src: '/menu-dessert.webp', alt: 'Dessert display for exhibition events' },
  ],
  faqsH2: 'Exhibition Catering Dubai: the questions we get before a booking',
  faqs: [
    {
      q: 'Which exhibition venues in Dubai do you cater?',
      a: 'we coordinate catering at Dubai World Trade Centre, Expo City Dubai, major hotel exhibition halls and outdoor show sites across the emirate. We are familiar with venue access, loading and service restrictions.',
    },
    {
      q: 'Can you brand the catering counter to match our stand?',
      a: 'Counter cloths, labelled trays and napkins can follow a colour brief. That is not a full stand build. Hall rules still apply.',
    },
    {
      q: 'Do you provide staff for exhibition stands?',
      a: 'Yes. we bring you a vetted chef you engage, baristas and service staff who understand the pace of exhibition service and can engage professionally with your visitors.',
    },
    {
      q: 'Can you handle dietary requirements for a large crowd?',
      a: 'Absolutely. We build halal, vegetarian, vegan, gluten-free and dairy-free options into exhibition menus as standard, with clear labelling so every guest can choose confidently.',
    },
    {
      q: 'What is the minimum order for exhibition catering?',
      a: 'Drop-off starts from 10 guests with a minimum order of AED 900. Tell us the stand, the hours and the headcount and we will quote visitor hospitality and exhibitor meals separately.',
    },
    {
      q: 'How far in advance should we book exhibition catering?',
      a: 'Two to four weeks is ideal, especially for large multi-day shows or stands requiring custom branding. For urgent stand catering, contact us on WhatsApp and we will confirm what is possible.',
    },
  ],
  relatedServices: [
    {
      title: 'Corporate Event Catering',
      description: 'fully-coordinated catering for conferences, launches and company events across Dubai.',
      image: '/service-events.webp',
      link: '/corporate-event-catering-dubai',
    },
    {
      title: 'Canapé Catering Dubai',
      description: 'Sophisticated bite-sized food for receptions, stand openings and networking moments.',
      image: '/menu-canapes.webp',
      link: '/canape-catering-dubai',
    },
  ],
  ctaH2: 'Plan Exhibition Catering That Works as Hard as Your Stand',
  ctaP:
    'Send the hall, the stand, the hours and the headcount. You get an itemised proposal. Hall access and power are quoted when they are not standard.',
  primaryCta: 'Request a corporate catering quote',
  showTrustSignalStrip: true,
  afterIntro: (
    <>
    <section className="bg-cream section-padding">
      <div className="container-custom">
        <CorporatePackageCompare
          packages={packagesForOwner('/exhibition-catering-dubai')}
          heading="Stand hospitality and exhibitor meals"
          intro="Visitor hospitality at the stand and exhibitor crew meals are listed separately. Both use the drop-off starting price from AED 90 per person unless the stand is staffed. Hall access and power are quoted separately when they are not standard."
        />
      </div>
    </section>
    <CorporateInventory path="/exhibition-catering-dubai" quoteHref="/inquiry" />
    </>
  ),
}

export default function ExhibitionCatering() {
  return <ServiceLandingPage config={config} />
}
