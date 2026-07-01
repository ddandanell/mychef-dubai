import { Link } from 'react-router'
import { GraduationCap, Users, Apple, Clock, Truck, Leaf } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'university-catering-dubai',
  seoTitle: 'University & Student Catering Dubai | Campus Events & Meals',
  metaDescription:
    'University and student catering in Dubai: campus events, student meals, fresh food stations and dietary-friendly menus for universities, colleges and student groups.',
  canonicalPath: '/university-catering-dubai',
  ogImage: '/images/school-catering-dubai-hero.webp',
  breadcrumbLabel: 'University & Student Catering Dubai',
  h1: 'University & Student Catering in Dubai',
  heroSub:
    'Fresh, affordable and inclusive catering for universities and student groups in Dubai — from campus events and welcome weeks to society gatherings, graduations and daily meal solutions.',
  heroImage: '/images/school-catering-dubai-hero.webp',
  whatsappMessage:
    'Hi myCHEF Dubai, I would like to arrange university or student catering in Dubai (via mychef.ae/university-catering-dubai)',
  eyebrow: 'UNIVERSITY & STUDENT CATERING IN DUBAI',
  introH2: 'Campus Catering That Keeps Students Happy',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Universities and colleges in Dubai host a constant calendar of events — orientation weeks, society meetings, career fairs, graduation ceremonies, sports days and guest lectures. Our university and student catering service is built to feed large, diverse student populations with menus that are fresh, budget-conscious and inclusive of every dietary need.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        We provide everything from drop-off sandwich platters and healthy bowl stations to live food carts, buffet setups and formal gala catering. Whether you are a student society planning a networking night, an administration team organising a graduation lunch, or a faculty group hosting a conference, we make the food simple, reliable and enjoyable.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        This service extends our{' '}
        <Link to="/school-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          school catering Dubai
        </Link>{' '}
        and{' '}
        <Link to="/corporate-event-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          corporate event catering Dubai
        </Link>{' '}
        experience, and works alongside{' '}
        <Link to="/healthy-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          healthy catering Dubai
        </Link>{' '}
        for campuses focused on nutrition and wellbeing.
      </p>
    </>
  ),
  formatsH2: 'University Catering Formats',
  formats: [
    {
      Icon: GraduationCap,
      title: 'Graduation & Ceremony Catering',
      description: 'Buffets, canapés and seated dining for graduation ceremonies, award events and faculty receptions.',
      link: '/graduation-catering-dubai',
    },
    {
      Icon: Users,
      title: 'Society & Club Events',
      description: 'Affordable catering for student societies, clubs, networking nights and cultural celebrations.',
      link: '/party-catering-dubai',
    },
    {
      Icon: Apple,
      title: 'Healthy Campus Meal Stations',
      description: 'Nutritious bowls, salads, wraps and protein boxes designed for health-conscious students.',
      link: '/healthy-catering-dubai',
    },
    {
      Icon: Clock,
      title: 'Exam Period Refreshments',
      description: 'Coffee, tea, snacks and brain-fuel boxes for study sessions, exam support and library events.',
      link: '/coffee-tea-service-dubai',
    },
    {
      Icon: Truck,
      title: 'Drop-Off Campus Catering',
      description: 'Convenient delivered platters and boxed meals for meetings, workshops and training days.',
      link: '/drop-off-catering-dubai',
    },
    {
      Icon: Leaf,
      title: 'Plant-Based & Allergy-Aware Menus',
      description: 'Vegan, vegetarian, gluten-free, dairy-free and nut-free options available across all formats.',
      link: '/vegan-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE UNIVERSITY CATERING WORKS',
  useCasesH2: 'Built for Campus Life',
  useCases: [
    {
      title: 'Orientation & Welcome Weeks',
      description:
        'High-volume, casual catering for new-student orientation, campus tours and welcome fairs across Dubai universities.',
    },
    {
      title: 'Graduation Celebrations',
      description:
        'Formal and family-friendly catering for graduation ceremonies, after-parties and alumni reunions.',
    },
    {
      title: 'Conferences & Guest Lectures',
      description:
        'Professional working lunches, coffee breaks and networking refreshments for academic events.',
    },
    {
      title: 'Sports & Cultural Events',
      description:
        'Energising food stations and hydration bars for tournaments, cultural days and student festivals.',
    },
  ],
  includedH2: "What's Included in Our University Catering",
  includedItems: [
    { title: 'Student-Friendly Menus', description: 'Balanced, familiar dishes that appeal to a wide range of tastes and budgets.' },
    { title: 'Dietary Inclusivity', description: 'Halal, vegan, vegetarian, gluten-free, dairy-free and nut-free options as standard.' },
    { title: 'Fresh Ingredients', description: 'Quality produce prepared daily for flavour and nutritional value.' },
    { title: 'Flexible Service Styles', description: 'Buffets, food stations, boxed meals, drop-off platters and seated service.' },
    { title: 'Branded & Themed Options', description: 'Custom menus, signage and packaging to match university branding or event themes.' },
    { title: 'Hydration & Snack Stations', description: 'Water, juices, smoothies, coffee, tea and healthy snacks for long events.' },
    { title: 'Reliable Delivery & Setup', description: 'On-time delivery, setup, service and cleanup across Dubai campuses.' },
    { title: 'Budget-Conscious Packages', description: 'Tiered pricing designed for student societies and institutional event budgets.' },
  ],
  galleryH2: 'A Taste of Our University Catering',
  galleryImages: [
    { src: '/images/school-catering-dubai-hero.webp', alt: 'University catering set-up in Dubai' },
    { src: '/service-events.webp', alt: 'Campus event catering for students' },
    { src: '/menu-appetizer.webp', alt: 'Fresh wraps and salads for student meals' },
    { src: '/menu-dessert.webp', alt: 'Healthy snacks and desserts for campus events' },
    { src: '/service-corporate.webp', alt: 'Conference catering at a university' },
    { src: '/menu-meat.webp', alt: 'Hot buffet options for student gatherings' },
  ],
  faqsH2: 'University Catering Questions',
  faqs: [
    {
      q: 'What university events can you cater?',
      a: 'We cater orientation weeks, graduation ceremonies, society events, conferences, guest lectures, career fairs, sports days, cultural festivals and daily campus meal programs.',
    },
    {
      q: 'Can you work with tight student budgets?',
      a: 'Yes. We offer budget-conscious packages and tiered pricing designed for student societies and university departments without compromising on quality or freshness.',
    },
    {
      q: 'Do you provide halal and vegetarian options?',
      a: 'Absolutely. All meat is halal, and we provide vegetarian, vegan, gluten-free, dairy-free and nut-free choices to ensure every student is catered for.',
    },
    {
      q: 'Can food be delivered directly to a campus venue?',
      a: 'Yes. We deliver, set up and collect across university campuses in Dubai, including lecture halls, courtyards, student centres and outdoor event spaces.',
    },
    {
      q: 'Can you brand the catering for our university or society?',
      a: 'Yes. We can incorporate university colours, logos and themed menus into packaging, signage and presentation for a polished, personalised look.',
    },
    {
      q: 'How far in advance should we book student event catering?',
      a: 'One to two weeks is ideal for most events. Large graduation events or multi-day programs may require additional planning time.',
    },
  ],
  relatedServices: [
    {
      title: 'School Catering Dubai',
      description: 'Safe, nutritious catering for schools, nurseries and educational institutions across Dubai.',
      image: '/images/school-catering-dubai-hero.webp',
      link: '/school-catering-dubai',
    },
    {
      title: 'Corporate Event Catering',
      description: 'Professional catering for conferences, launches and formal events with full service.',
      image: '/service-corporate.webp',
      link: '/corporate-event-catering-dubai',
    },
    {
      title: 'Healthy Catering Dubai',
      description: 'Balanced, nutrition-focused menus ideal for campus wellbeing and active students.',
      image: '/service-catering.webp',
      link: '/healthy-catering-dubai',
    },
  ],
  ctaH2: 'Plan Your Campus Catering with myCHEF Dubai',
  ctaP:
    'Tell us about your university event, student numbers, dietary needs and budget. We will create a campus catering plan that keeps students happy and your team stress-free.',
}

export default function UniversityCatering() {
  return <ServiceLandingPage config={config} />
}
