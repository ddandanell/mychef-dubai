import { Link } from 'react-router'
import { HeartPulse, Stethoscope, Apple, ShieldCheck, Truck, Leaf } from 'lucide-react'
import ServiceLandingPage from './shared/ServiceLandingPage'
import type { ServicePageConfig } from './shared/ServiceLandingPage'

const config: ServicePageConfig = {
  slug: 'healthcare-catering-dubai',
  seoTitle: 'Hospital & Healthcare Catering Dubai | Medical Facility Meals',
  metaDescription:
    'Hospital and healthcare catering in Dubai: safe, nutritious and compliant meal solutions for hospitals, clinics, care homes, medical conferences and healthcare facilities.',
  canonicalPath: '/healthcare-catering-dubai',
  ogImage: '/images/corporate-catering-dubai-hero.webp',
  breadcrumbLabel: 'Hospital & Healthcare Catering Dubai',
  h1: 'Hospital & Healthcare Catering in Dubai',
  heroSub:
    'Specialist catering for hospitals, clinics, care homes and medical events in Dubai — hygienic, nutritionally balanced and fully compliant with healthcare food-safety expectations.',
  heroImage: '/images/corporate-catering-dubai-hero.webp',
  whatsappMessage:
    'Hi myCHEF Dubai, I would like to arrange hospital or healthcare catering in Dubai (via mychef.ae/healthcare-catering-dubai)',
  eyebrow: 'HOSPITAL & HEALTHCARE CATERING IN DUBAI',
  introH2: 'Food That Supports Care Environments',
  introNodes: (
    <>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        Healthcare environments demand more than good food. Meals must be safe, temperature-controlled, nutritionally appropriate and delivered with strict hygiene standards. Our hospital and healthcare catering service is designed for Dubai medical facilities, care homes and health-focused organisations that need reliable food partners, not just occasional caterers.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed mb-5">
        We prepare menus for patients, visitors, medical staff and corporate healthcare events. Each menu can be tailored to dietary restrictions, texture-modified requirements, religious guidelines and clinical nutrition goals. From ward meal services and staff cafeterias to medical conference lunches and wellness seminars, we deliver food that supports recovery, energy and professionalism.
      </p>
      <p className="font-inter text-body-lg text-gray-500 leading-relaxed">
        This service complements our{' '}
        <Link to="/school-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          school catering Dubai
        </Link>{' '}
        and{' '}
        <Link to="/corporate-event-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          corporate event catering Dubai
        </Link>{' '}
        experience, and pairs with{' '}
        <Link to="/healthy-catering-dubai" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          healthy catering Dubai
        </Link>{' '}
        for wellbeing-focused programmes.
      </p>
    </>
  ),
  formatsH2: 'Healthcare Catering Formats',
  formats: [
    {
      Icon: HeartPulse,
      title: 'Patient Meal Services',
      description: 'Balanced, comforting meals designed for hospital wards, recovery centres and long-term care patients.',
      link: '/drop-off-catering-dubai',
    },
    {
      Icon: Stethoscope,
      title: 'Medical Conference Catering',
      description: 'Working lunches, coffee breaks and buffet setups for healthcare conferences, seminars and training days.',
      link: '/conference-catering-dubai',
    },
    {
      Icon: Apple,
      title: 'Clinical Nutrition Menus',
      description: 'Low-sodium, diabetic-friendly, texture-modified, halal and allergen-aware options available.',
      link: '/sugar-free-catering-dubai',
    },
    {
      Icon: ShieldCheck,
      title: 'Staff & Cafeteria Catering',
      description: 'Reliable daily meals and staff meal programmes for hospitals, clinics and healthcare offices.',
      link: '/staff-meals-catering-dubai',
    },
    {
      Icon: Truck,
      title: 'Drop-Off Healthcare Catering',
      description: 'Sealed, labelled and temperature-controlled delivery for meetings, training and departmental events.',
      link: '/drop-off-catering-dubai',
    },
    {
      Icon: Leaf,
      title: 'Wellness & Preventative Catering',
      description: 'Whole-food, plant-forward menus for wellness events, health screenings and preventative-care programmes.',
      link: '/healthy-catering-dubai',
    },
  ],
  useCasesEyebrow: 'WHERE HEALTHCARE CATERING WORKS',
  useCasesH2: 'Built for Medical Environments',
  useCases: [
    {
      title: 'Hospitals & Medical Centres',
      description:
        'Ward meal programmes, visitor dining and staff feeding with a focus on hygiene, consistency and nutrition.',
    },
    {
      title: 'Clinics & Day Surgery Centres',
      description:
        'Light refreshments, fasting-friendly options and recovery-focused meals for patients and accompanying family.',
    },
    {
      title: 'Care Homes & Rehabilitation Facilities',
      description:
        'Soft, nutritionally dense and culturally appropriate menus for elderly residents and rehabilitation patients.',
    },
    {
      title: 'Healthcare Conferences & Training',
      description:
        'Professional catering for CME events, nursing workshops, pharmaceutical launches and medical association meetings.',
    },
  ],
  includedH2: "What's Included in Our Healthcare Catering",
  includedItems: [
    { title: 'HACCP-Informed Preparation', description: 'Food prepared with strict hygiene, storage and transport controls suitable for healthcare settings.' },
    { title: 'Clinical Dietary Support', description: 'Menus for diabetic, renal, cardiac, low-sodium, texture-modified and allergen-restricted diets.' },
    { title: 'Halal & Religious Compliance', description: 'All meat is halal; vegetarian, vegan and other religious requirements accommodated.' },
    { title: 'Sealed & Labelled Packaging', description: 'Individually packed meals with ingredient and allergen labelling for patient safety.' },
    { title: 'Temperature-Controlled Delivery', description: 'Hot and cold chain maintained during transport and handover to facility teams.' },
    { title: 'Staff Meal Programmes', description: 'Recurring breakfast, lunch and dinner options for medical and support staff.' },
    { title: 'Flexible Scheduling', description: 'Scheduled deliveries, on-call event support and emergency catering when required.' },
    { title: 'Dedicated Account Coordination', description: 'A single point of contact to manage menus, compliance documents and delivery schedules.' },
  ],
  galleryH2: 'A Taste of Our Healthcare Catering',
  galleryImages: [
    { src: '/images/corporate-catering-dubai-hero.webp', alt: 'Healthcare catering set-up in Dubai' },
    { src: '/service-corporate.webp', alt: 'Medical conference catering' },
    { src: '/menu-appetizer.webp', alt: 'Fresh and balanced healthcare meals' },
    { src: '/service-catering.webp', alt: 'Nutritious patient meal options' },
    { src: '/service-events.webp', alt: 'Healthcare seminar refreshments' },
    { src: '/menu-meat.webp', alt: 'Hot balanced dishes for care homes' },
  ],
  faqsH2: 'Healthcare Catering Questions',
  faqs: [
    {
      q: 'What healthcare facilities do you cater for?',
      a: 'We cater for hospitals, clinics, day surgery centres, care homes, rehabilitation facilities, medical conference venues and healthcare offices across Dubai.',
    },
    {
      q: 'Can you provide texture-modified or clinical diet meals?',
      a: 'Yes. We offer soft, puréed, minced, low-sodium, diabetic-friendly, renal and other clinically appropriate options on request.',
    },
    {
      q: 'Is your meat halal and are vegetarian options available?',
      a: 'All meat is halal. We also provide vegetarian, vegan, gluten-free, dairy-free and nut-free menus to meet diverse patient and staff needs.',
    },
    {
      q: 'How do you maintain food safety for hospital patients?',
      a: 'We follow HACCP-informed preparation, sealed and labelled packaging, temperature-controlled transport, and clear handover protocols to minimise risk.',
    },
    {
      q: 'Can you set up a recurring staff meal programme?',
      a: 'Yes. We design recurring breakfast, lunch and dinner programmes for hospital and clinic staff with rotating menus and reliable daily delivery.',
    },
    {
      q: 'What information do you need to quote healthcare catering?',
      a: 'Facility type, number of meals per day, dietary requirements, service frequency, delivery windows and any compliance documents you need help completing.',
    },
  ],
  relatedServices: [
    {
      title: 'Staff Meals Catering',
      description: 'Daily meal programmes for teams, departments and shift workers across Dubai.',
      image: '/service-corporate.webp',
      link: '/staff-meals-catering-dubai',
    },
    {
      title: 'Conference Catering',
      description: 'Professional working lunches and breaks for medical seminars and training events.',
      image: '/service-events.webp',
      link: '/conference-catering-dubai',
    },
    {
      title: 'Healthy Catering Dubai',
      description: 'Nutrition-focused menus ideal for wellness programmes and preventative health events.',
      image: '/service-catering.webp',
      link: '/healthy-catering-dubai',
    },
  ],
  ctaH2: 'Plan Healthcare Catering with myCHEF Dubai',
  ctaP:
    'Tell us about your facility, patient or staff numbers, dietary needs and compliance requirements. We will build a healthcare catering plan that is safe, nutritious and reliable.',
}

export default function HealthcareCatering() {
  return <ServiceLandingPage config={config} />
}
