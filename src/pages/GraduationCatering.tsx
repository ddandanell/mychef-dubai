import { Link } from 'react-router'
import { GraduationCap, PartyPopper, Home, Building, Utensils, Camera } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'graduation-catering-dubai',
  seoTitle: 'Graduation Party Catering Dubai | School & University Celebrations',
  metaDescription:
    'Graduation party catering in Dubai for schools, universities and private celebrations. Buffet, canapés, live stations and full event service. Request a quote.',
  canonicalPath: '/graduation-catering-dubai',
  ogImage: '/service-events.webp',
  breadcrumbLabel: 'Graduation Party Catering Dubai',
  h1: 'Graduation Party Catering in Dubai',
  heroSub:
    'Celebrate every cap, gown and milestone with graduation party catering across Dubai — from school leavers and university grads to postgraduate achievements and family parties.',
  heroImage: '/service-events.webp',
  whatsappMessage:
    "Hi myCHEF Dubai, I'd like to arrange graduation party catering in Dubai (via mychef.ae/graduation-catering-dubai)",
  eyebrow: 'GRADUATION PARTY CATERING IN DUBAI',
  introH2: 'A Celebration Worthy of the Achievement',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Graduation marks the end of years of hard work and the start of something new. Whether you are planning a school prom after-party, a university graduation lunch, or an intimate family dinner at home, our graduation party catering brings the food, styling and service needed to match the occasion.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        We cater across Dubai for graduating classes, parent-hosted villa parties, faculty events and mixed-age celebrations. Menus range from relaxed grazing tables and BBQ live stations to elegant plated dinners and themed dessert displays. Our team handles setup, service and cleanup so graduates and their families can focus on photographs, speeches and making memories.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        This service fits naturally within our wider{' '}
        <Link to="/party-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          party catering Dubai
        </Link>{' '}
        range and pairs well with{' '}
        <Link to="/private-party-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          private party catering Dubai
        </Link>{' '}
        for at-home celebrations. For a more formal graduate dinner, explore our{' '}
        <Link to="/catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          luxury catering Dubai
        </Link>{' '}
        options.
      </p>
    </>
  ),
  formatsH2: 'Graduation Party Catering Formats',
  formats: [
    {
      Icon: PartyPopper,
      title: 'Themed Graduation Buffets',
      description: 'Styled buffet spreads with school colours, branded signage and crowd-pleasing dishes for grads and guests.',
      link: '/buffet-catering-dubai',
    },
    {
      Icon: Utensils,
      title: 'Plated Celebration Dinners',
      description: 'Elegant multi-course plated meals for intimate graduate dinners and family recognition events.',
      link: '/catering-dubai',
    },
    {
      Icon: Camera,
      title: 'Canapé & Cocktail Receptions',
      description: 'Bite-sized canapés and mocktail service ideal for photo-friendly arrivals and mingling.',
      link: '/canape-catering-dubai',
    },
    {
      Icon: Home,
      title: 'Villa & Home Graduation Parties',
      description: 'Full-service catering at your home or villa across Dubai, with setup, service and pack-down included.',
      link: '/villas-private-residences',
    },
    {
      Icon: Building,
      title: 'School & University Events',
      description: 'Catering for campus halls, school courtyards, auditoriums and graduation venues with scalable service.',
      link: '/event-catering-dubai',
    },
    {
      Icon: GraduationCap,
      title: 'Dessert & Cake Stations',
      description: 'Celebration cakes, cupcakes, themed dessert tables and sweet stations to mark the milestone.',
      link: '/dessert-table-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE GRADUATION CATERING WORKS',
  useCasesH2: 'Designed for Every Kind of Graduate Celebration',
  useCases: [
    {
      title: 'School Leaver Parties',
      description:
        'From prom after-parties to Year 13 farewells, we create safe, age-appropriate menus that students enjoy and parents trust.',
    },
    {
      title: 'University Graduation Events',
      description:
        'Celebrate bachelor’s, master’s and doctoral milestones with catering that suits mixed-age groups of classmates, professors and family.',
    },
    {
      title: 'Family Villa Celebrations',
      description:
        'Host a relaxed graduation lunch or dinner at home in Emirates Hills, Palm Jumeirah or Dubai Hills with full service and cleanup.',
    },
    {
      title: 'Institutional Ceremonies',
      description:
        'Schools and universities can book timed, tidy catering for award ceremonies, convocation receptions and faculty gatherings.',
    },
  ],
  includedH2: "What's Included in Our Graduation Party Catering",
  includedItems: [
    { title: 'Celebration Menu Design', description: 'Menus tailored to the graduate, school colours, theme and guest age range.' },
    { title: 'Live Cooking Stations', description: 'Optional pasta, BBQ, shawarma or dessert stations that add energy to the party.' },
    { title: 'Canapés & Grazing Tables', description: 'Stylish arrival bites and share platters perfect for mingling and photos.' },
    { title: 'Themed Dessert Tables', description: 'Cakes, cupcakes and sweet displays personalised for the graduate and institution.' },
    { title: 'Mocktails & Soft Bars', description: 'Non-alcoholic drink stations, fresh juices and celebratory mocktails for all ages.' },
    { title: 'Dietary Accommodations', description: 'Vegetarian, vegan, gluten-free, halal and allergy-aware options available.' },
    { title: 'Event Setup & Service', description: 'Tables, linens, serveware and friendly staff to run the event smoothly.' },
    { title: 'Full Pack-Down & Cleanup', description: 'We leave the venue clean so the celebration can continue without interruption.' },
  ],
  galleryH2: 'A Taste of Our Graduation Party Catering',
  galleryImages: [
    { src: '/service-events.webp', alt: 'Graduation party catering set-up in Dubai' },
    { src: '/menu-canapes.webp', alt: 'Canapés for a graduation celebration' },
    { src: '/menu-appetizer.webp', alt: 'Graduation party appetisers and salads' },
    { src: '/menu-dessert.webp', alt: 'Graduation dessert table and cake display' },
    { src: '/service-villa.webp', alt: 'Villa graduation party styling' },
    { src: '/service-catering.webp', alt: 'Graduation catering service in Dubai' },
  ],
  faqsH2: 'Graduation Party Catering Questions',
  faqs: [
    {
      q: 'What types of graduation events do you cater?',
      a: 'We cater school leaver parties, university graduation celebrations, postgraduate dinners, family villa gatherings, and institutional receptions across Dubai.',
    },
    {
      q: 'Can you match the school or university colours and theme?',
      a: 'Yes. We can coordinate menu styling, dessert colours, signage and table decor to reflect the graduate’s school, university or chosen theme.',
    },
    {
      q: 'Do you provide non-alcoholic drinks and mocktails?',
      a: 'Absolutely. We offer mocktails, fresh juices, soft drinks and themed non-alcoholic beverages suitable for all ages.',
    },
    {
      q: 'Can graduation catering be held at home or in a villa?',
      a: 'Yes. We provide full-service villa and home catering across Dubai, including setup, service and cleanup, so families can celebrate without stress.',
    },
    {
      q: 'Do you cater for mixed-age groups including children and grandparents?',
      a: 'Yes. We design menus with variety and portion sizes to suit younger guests, adults and older relatives, with dietary options clearly labelled.',
    },
    {
      q: 'How far in advance should I book graduation party catering?',
      a: 'Two to four weeks is ideal, especially during graduation season and peak event months. Last-minute bookings may be possible — contact us on WhatsApp to check availability.',
    },
  ],
  relatedServices: [
    {
      title: 'Party Catering Dubai',
      description: 'The hub for birthdays, celebrations and every kind of private party across Dubai.',
      image: '/service-events.webp',
      link: '/party-catering-dubai',
    },
    {
      title: 'Private Party Catering',
      description: 'Intimate home and villa parties with personalised menus and full service.',
      image: '/service-villa.webp',
      link: '/private-party-catering-dubai',
    },
    {
      title: 'Dessert Table Catering',
      description: 'Show-stopping dessert displays and celebration cakes for milestone events.',
      image: '/menu-dessert.webp',
      link: '/dessert-table-catering-dubai',
    },
  ],
  ctaH2: 'Celebrate the Graduate With Catering They Will Remember',
  ctaP:
    'Tell us about the graduate, guest count, venue and preferred style. We will create a graduation party menu that matches the achievement and the mood.',
}

export default function GraduationCatering() {
  return <ServiceLandingPage config={config} />
}
