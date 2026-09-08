import { Link } from 'react-router'
import { INSTITUTIONAL_PATHS, institutionalWhatsApp } from './institutionalCluster'
import type { InstitutionalPageContent } from './institutionalLandingTypes'

export const HOSPITAL_ROOT = INSTITUTIONAL_PATHS.hospital

export const hospitalPage: InstitutionalPageContent = {
  root: HOSPITAL_ROOT,
  eyebrow: 'Healthcare',
  lock: {
    primary: 'hospital catering dubai',
    title: 'Hospital Catering Dubai | Patient and Staff Meals | myCHEF',
    description:
      'Hospital catering Dubai for staff cafeterias first, then patient meals when the kitchen and diet list can be documented. Quote after a site walk.',
    h1: 'Hospital Catering Dubai',
  },
  hero: {
    src: '/images/hospital-catering-dubai-hero.webp',
    alt: 'Hospital catering Dubai — staff cafeteria with a dressed servery, labelled hot line, no devices on the tables. Experience concept shown.',
    width: 1344,
    height: 752,
    subtitle:
      'Hospital catering Dubai starts where we can document the kitchen: staff cafeterias and visitor dining. Patient meal services and therapeutic diet meals follow when the diet list, the ward timing and the papers are real.',
    micro: 'Share the site, covers per day and whether you need staff dining or patient meals. We typically reply within 15 minutes during business hours.',
  },
  whatsapp: institutionalWhatsApp(
    HOSPITAL_ROOT,
    'I need hospital catering. Site: __, Covers/day: __, Staff cafeteria or patient meals: __',
  ),
  primaryCta: 'Get a hospital catering quote',
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Institutional catering', href: INSTITUTIONAL_PATHS.hub },
    { label: 'Hospital catering' },
  ],
  jumpNav: [
    { href: '#brief', label: 'The job' },
    { href: '#difference', label: 'How it is run' },
    { href: '#menu', label: 'Diets' },
    { href: '#compliance', label: 'What it requires' },
    { href: '#how-it-works', label: 'How it starts' },
    { href: '#quote', label: 'Quote' },
    { href: '#faqs', label: 'FAQs' },
  ],
  siblings: [
    { href: INSTITUTIONAL_PATHS.canteen, label: 'Canteen management' },
    { href: INSTITUTIONAL_PATHS.school, label: 'School catering' },
    { href: INSTITUTIONAL_PATHS.nursery, label: 'Nursery catering' },
  ],
  siloNote: (
    <>
      This page owns hospital catering Dubai. Healthcare catering Dubai and hospital catering
      services Dubai are the same brief. Staff dining that is really a workplace canteen also sits
      on{' '}
      <Link to={INSTITUTIONAL_PATHS.canteen} className="text-gold-ink underline underline-offset-4 hover:text-gold">
        canteen management
      </Link>
      .
    </>
  ),
  problem: {
    h2: 'Hospital catering Dubai is won in the staff cafeteria first',
    paragraphs: [
      'Patient meal programmes in Dubai are awarded to kitchens that already hold the papers: HACCP, dietitian cover, texture-modified production, ward timing. The incumbents are entrenched. A new supplier who leads with “therapeutic excellence” and no staff-dining track record does not get the ward.',
      'The honest entry is hospital staff cafeteria catering Dubai — visitor cafés and staff dining at clinics and second-tier hospitals, run as a documented canteen. Healthcare catering Dubai of that kind is still hospital work: health cards, temperature, labelling. It is not a villa dinner in a white corridor.',
      'When the site is ready for patient meal services Dubai, the diet list has to be real: diabetic, renal, cardiac, IDDSI texture-modified. We will not print a from-price for that work. We will not claim a DHA-licensed dietitian on our payroll on this page. The proposal names who writes the diets, or it does not go out.',
    ],
  },
  difference: {
    h2: 'Staff dining, then wards — not the other way round',
    blocks: [
      {
        title: 'Staff cafeteria as the first contract',
        body: 'Covers per day you can count. A servery you can walk. A cycle the night shift will actually eat. That is how hospital catering services Dubai start with us.',
      },
      {
        title: 'Visitor dining that is still a kitchen',
        body: 'Clinics and day-surgery centres need a café that does not look like a mall counter and does not put plated food next to a reception screen.',
      },
      {
        title: 'Patient meals only with a diet list',
        body: 'Therapeutic diet meals Dubai are a clinical document, not a menu adjective. Texture-modified meals Dubai follow IDDSI language when the hospital uses it. We quote that after the dietitian relationship is named.',
      },
      {
        title: 'Halal and allergen labelling',
        body: 'Halal by default. Allergen cards on the line. Ward allergies are not a “may contain” conversation at the pass.',
      },
      {
        title: 'Timing is the product',
        body: 'Wards do not wait for a van stuck in Sheikh Zayed traffic. If we cannot hit the window, we do not take the sitting.',
      },
      {
        title: 'Papers before poetry',
        body: 'Permit, PIC, health cards, logs. Same list as every other institutional page. No invented certificate numbers.',
      },
    ],
  },
  table: {
    label: 'DIETS',
    h2: 'Therapeutic diet meals Dubai — what the card has to say',
    intro:
      'Names a hospital already uses. We do not invent diet titles. The live card is written with whoever owns clinical nutrition on that site.',
    columns: ['Diet', 'What it usually means', 'What we need from you'],
    rows: [
      ['Regular', 'Standard staff or visitor meal', 'Covers, service times'],
      ['Diabetic', 'Controlled carbohydrate, labelled sugars', 'Clinical spec from the site'],
      ['Renal', 'Controlled electrolytes and protein', 'Clinical spec; we do not guess this'],
      ['Cardiac / low-sodium', 'Salt and fat limits on the card', 'Clinical spec'],
      ['Texture-modified (IDDSI)', 'Pureed, minced, soft as the hospital codes them', 'IDDSI levels in use on the ward'],
    ],
    note: 'This table is a briefing tool. It is not a medical claim and it is not a published from-price.',
  },
  compliance: {
    h2: 'What hospital catering services Dubai have to show',
    intro: 'Procurement will ask. Have the file ready, or do not bid.',
    rows: [
      { item: 'Food establishment permit', who: 'Dubai Municipality', see: 'Kitchen that actually cooks' },
      { item: 'HACCP-based system', who: 'DM / certifier', see: 'Dated certificate or documented system' },
      { item: 'PIC at production and at service', who: 'DM', see: 'Named cover for both, on hospital work' },
      { item: 'Health cards', who: 'DHA', see: 'Every handler' },
      { item: 'Temperature-controlled transport', who: 'DM', see: 'Logs and van permit' },
      { item: 'Clinical nutrition named', who: 'Hospital / DHA', see: 'Who writes therapeutic menus' },
      { item: 'Allergen and texture coding', who: 'Hospital policy', see: 'Cards matching ward language' },
      { item: 'Halal supply', who: 'Accredited body', see: 'Certificates for proteins' },
    ],
    note: 'We do not claim ISO 22000, a dietitian on payroll, or a hospital-panel listing on this page until those sit in src/content/.',
  },
  process: {
    h2: 'Four steps. Procurement sees the file.',
    steps: [
      'Send the site, covers per day, and whether this is staff dining or patient meals.',
      'We typically reply within 15 minutes during business hours if the kitchen can cover it.',
      'Site walk. Itemised proposal. Named diet cover if wards are in scope.',
      'Trial service in the cafeteria before anyone talks about wards.',
    ],
  },
  quoting: {
    h2: 'How a hospital quote is built',
    paragraphs: [
      'Staff dining is quoted like a canteen: covers, hours, diet mix. Patient meals are quoted only after the diet list and the ward windows are on paper.',
      'Managed staff dining in Dubai is often discussed in a per-head-per-day band you will see in tenders. That is market context. myCHEF does not publish it as a from-price here.',
      '5% VAT is its own line. Food, staff, equipment and delivery are not blended.',
    ],
  },
  trust: {
    h2: 'The cafeteria is the proof',
    items: [
      {
        title: 'Canteen management is the sister brief',
        body: 'If the room needs fit-out and staffing, that is canteen management Dubai, not a ward slogan.',
        href: INSTITUTIONAL_PATHS.canteen,
        linkLabel: 'Canteen management',
      },
      {
        title: 'How culinary partners are selected',
        body: 'Vetting before anyone cooks. Backup when a shift fails.',
        href: '/how-we-vet-our-chefs',
        linkLabel: 'How we vet chefs',
      },
      {
        title: 'Halal-first',
        body: 'Default for myCHEF institutional menus. Certificates on request in the brief.',
        href: '/halal-catering-dubai',
        linkLabel: 'Halal catering',
      },
      {
        title: 'Allergy-safe production',
        body: 'Written matrix. No guessing at the pass.',
        href: '/allergy-safe-catering-dubai',
        linkLabel: 'Allergy-safe catering',
      },
    ],
  },
  faqH2: 'What should I know before booking hospital catering in Dubai?',
  faqs: [
    {
      q: 'Do you do patient meals from day one?',
      a: 'Only when the diet list, ward timing and clinical nutrition cover are named. Staff cafeterias are the usual first contract.',
    },
    {
      q: 'Are you HACCP certified?',
      a: 'We describe the standard the work requires. We print a certificate number when it is on file. This page does not invent one.',
    },
    {
      q: 'Can you handle diabetic, renal and texture-modified diets?',
      a: 'Therapeutic diet meals Dubai are quoted after the hospital’s clinical spec is in the brief. We do not guess renal or IDDSI levels.',
    },
    {
      q: 'Is this the same as a staff canteen?',
      a: 'Staff dining is the entry. A full room fit-out sits on [canteen management](/canteen-management-dubai).',
    },
    {
      q: 'Do you serve clinics and day-surgery centres?',
      a: 'Yes. Clinic catering Dubai is usually a compact café or staff room, still documented as a food business.',
    },
    {
      q: 'What about care homes?',
      a: 'Texture-modified and regular dining can be quoted when the home’s diet policy is written. It is not a copy-paste of a hospital ward.',
    },
    {
      q: 'How do you keep food safe in transit?',
      a: 'Temperature-controlled vans, probe logs, cold ≤5°C and hot ≥60°C. If we cannot hit the window, we do not take the sitting.',
    },
    {
      q: 'Do you put food in the ward next to monitors?',
      a: 'No. Meals are plated and served as the hospital already serves them. We do not style food next to clinical screens.',
    },
    {
      q: 'How is this priced?',
      a: 'Itemised after a site walk. No from-price on this page. 5% VAT as its own line.',
    },
  ],
  locationTitle: 'Hospital and clinic catering across Dubai',
  locationSubtitle: (
    <>
      Staff dining and clinic cafés in{' '}
      <Link to="/locations/downtown-dubai" className="text-gold hover:text-gold-light underline underline-offset-4">
        Downtown Dubai
      </Link>
      ,{' '}
      <Link to="/locations/business-bay" className="text-gold hover:text-gold-light underline underline-offset-4">
        Business Bay
      </Link>
      {' '}and{' '}
      <Link to="/locations/difc" className="text-gold hover:text-gold-light underline underline-offset-4">
        DIFC
      </Link>
      .
    </>
  ),
  cta: {
    h2: 'Site, covers and whether this is staff or wards',
    body: 'That is enough to start. We typically reply within 15 minutes during business hours.',
  },
}
