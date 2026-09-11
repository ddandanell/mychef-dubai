import { Link } from 'react-router'
import { INSTITUTIONAL_PATHS, institutionalWhatsApp } from './institutionalCluster'
import type { InstitutionalPageContent } from './institutionalLandingTypes'

export const HUB_ROOT = INSTITUTIONAL_PATHS.hub

export const institutionalHubPage: InstitutionalPageContent = {
  root: HUB_ROOT,
  eyebrow: 'Institutions',
  lock: {
    primary: 'institutional catering dubai',
    title: 'Institutional Catering Dubai | Nurseries to Hospitals | myCHEF',
    description:
      'Institutional catering Dubai for nurseries, schools, hospitals and canteens. Documented kitchens, a quote after we see the site.',
    h1: 'Institutional Catering Dubai',
  },
  hero: {
    src: '/images/institutional-catering-dubai-hero.webp',
    alt: 'Institutional catering Dubai — a calm service line being set, labelled trays, no devices on the food. Experience concept shown.',
    width: 1344,
    height: 752,
    subtitle:
      'Institutional catering Dubai for nurseries, schools, hospitals and staff canteens. One kitchen standard: papers you can open, a quote after we walk the site.',
    micro: 'Tell us which kind of site it is. We typically reply within 15 minutes during business hours.',
  },
  whatsapp: institutionalWhatsApp(
    HUB_ROOT,
    'I need institutional catering. Site type: nursery/school/hospital/canteen, Covers: __, Area: __',
  ),
  primaryCta: 'Get an institutional catering quote',
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Institutional catering' },
  ],
  jumpNav: [
    { href: '#brief', label: 'The job' },
    { href: '#difference', label: 'Four sites' },
    { href: '#menu', label: 'Which page' },
    { href: '#compliance', label: 'Papers' },
    { href: '#how-it-works', label: 'How it starts' },
    { href: '#faqs', label: 'FAQs' },
  ],
  siblings: [
    { href: INSTITUTIONAL_PATHS.nursery, label: 'Nursery catering' },
    { href: INSTITUTIONAL_PATHS.school, label: 'School catering' },
    { href: INSTITUTIONAL_PATHS.hospital, label: 'Hospital catering' },
    { href: INSTITUTIONAL_PATHS.canteen, label: 'Canteen management' },
  ],
  figures: {
    afterBrief: {
      src: '/images/institutional-catering-dubai-walk.webp',
      alt: 'Chef and coordinator reviewing a kitchen pass before service in a Dubai institutional kitchen. Experience concept shown.',
      width: 1280,
      height: 720,
      caption: 'Experience concept shown.',
    },
  },
  siloNote: (
    <>
      This hub owns institutional catering Dubai. Each child page owns its primary. Household chefs
      stay on{' '}
      <Link to="/private-chef-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
        private chef
      </Link>
      . Event catering stays on{' '}
      <Link to="/catering-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
        catering Dubai
      </Link>
      .
    </>
  ),
  problem: {
    h2: 'Institutional catering Dubai is a documented kitchen',
    paragraphs: [
      'Nurseries, schools, hospitals and staff canteens buy food the same way a household does not. They buy a kitchen they can inspect, a matrix a nurse or a manager can read, and an invoice finance can compare. Education catering Dubai and healthcare catering Dubai fail in public when those papers are missing.',
      'The market is large and the SERPs are thin. Competitors still ship 400-word pages with no FAQs and no quote path. We built four owned pages instead of stuffing this hub with every phrase. A staff canteen Dubai or corporate canteen catering Dubai brief belongs on canteen management; early years catering Dubai on nursery catering; patient meal services Dubai on hospital catering. Nut-free institutional meals Dubai and a documented catering kitchen Dubai are the standard on every child page, not a badge on this hub.',
      'We do not publish a from-price on this hub. We do not claim My School Food registration or a named HACCP number here. Those sentences live on the child page only when src/content/ can show them.',
    ],
  },
  difference: {
    h2: 'Four sites. Four pages. One standard.',
    blocks: [
      {
        title: 'Nurseries',
        body: 'Early years, nut-free production, age-band textures, parents who will call you first if lunch fails.',
        image: {
          src: '/images/nursery-catering-dubai-room.webp',
          alt: 'Early-years dining room in Dubai being set with child-sized tables before lunch. Experience concept shown.',
          width: 1280,
          height: 720,
          caption: 'Experience concept shown.',
        },
      },
      {
        title: 'Schools',
        body: 'Meal programmes and lunch lines written against municipal school-food rules, not a tuck-shop slogan.',
        image: {
          src: '/images/school-catering-dubai-hall.webp',
          alt: 'Dubai school dining hall being prepared for lunch, service team setting tables. Experience concept shown.',
          width: 1280,
          height: 720,
          caption: 'Experience concept shown.',
        },
      },
      {
        title: 'Hospitals and clinics',
        body: 'Staff cafeterias first. Patient meals when the diet list is real.',
        image: {
          src: '/images/hospital-catering-dubai-cafeteria.webp',
          alt: 'Staff cafeteria in a Dubai hospital with a chef on the servery and colleagues eating. Experience concept shown.',
          width: 1280,
          height: 720,
          caption: 'Experience concept shown.',
        },
      },
      {
        title: 'Staff canteens',
        body: 'Food, not a POS app. Setup, staffing, a cycle, optional cashless as a layer.',
        image: {
          src: '/images/canteen-management-dubai-dining.webp',
          alt: 'Workplace canteen in Dubai, a manager seated as a guest while chefs work the line. Experience concept shown.',
          width: 1280,
          height: 720,
          caption: 'Experience concept shown.',
        },
      },
      {
        title: 'Documented kitchens',
        body: 'Permit, PIC, health cards, logs. The same file, whoever sits down.',
      },
      {
        title: 'A walk before a number',
        body: 'Every quote follows a site walk. 5% VAT is its own line.',
      },
    ],
  },
  table: {
    label: 'WHICH PAGE',
    h2: 'Open the page that owns the site',
    intro: 'Do not brief a nursery on the hospital page. The kitchen is different.',
    columns: ['If this is the site', 'Open', 'Primary'],
    rows: [
      ['Early-years centre', 'Nursery catering', 'nursery catering dubai'],
      ['School lunch or school canteen meals', 'School catering', 'school catering dubai'],
      ['Hospital, clinic, staff cafeteria, patient meals', 'Hospital catering', 'hospital catering dubai'],
      ['Office or campus canteen to run', 'Canteen management', 'canteen management dubai'],
    ],
  },
  compliance: {
    h2: 'Papers every institutional kitchen should be able to open',
    intro: 'Child pages carry the full table. This is the shared floor.',
    rows: [
      { item: 'Food permit for the kitchen that cooks', who: 'Dubai Municipality', see: 'Permit copy' },
      { item: 'Education-supply permit when feeding schools or nurseries', who: 'DM Food Safety', see: 'The extra permit, not a restaurant licence alone' },
      { item: 'PIC on the shift', who: 'DM', see: 'Named person' },
      { item: 'Health cards', who: 'DHA', see: 'Every handler' },
      { item: 'Temperature logs', who: 'DM', see: 'Cold ≤5°C / hot ≥60°C' },
      { item: 'Allergen matrix', who: 'Food Code / site policy', see: 'Written cycle' },
      { item: 'Halal supply', who: 'Accredited body', see: 'Certificates matching proteins' },
      { item: 'Insurance', who: 'Broker', see: 'Sums in the proposal' },
    ],
    note: 'Platform listings and named certificates are claimed only when they are on file.',
  },
  process: {
    h2: 'Four steps on every child page',
    steps: [
      'Tell us the kind of site, covers, and days.',
      'We typically reply within 15 minutes during business hours.',
      'Site walk and an itemised proposal.',
      'Tasting or trial sitting before a term or a year.',
    ],
  },
  quoting: {
    h2: 'How an institutional quote is built',
    paragraphs: [
      'The child page owns the number. This hub does not average four different kitchens into one from-price.',
      'Food, staff, equipment, delivery and 5% VAT stay on separate lines.',
    ],
  },
  trust: {
    h2: 'Read the page that matches the site',
    items: [
      {
        title: 'Nursery catering',
        body: 'Early years, nut-free, age-band meals.',
        href: INSTITUTIONAL_PATHS.nursery,
        linkLabel: 'Nursery catering Dubai',
      },
      {
        title: 'School catering',
        body: 'Lunches and lines against 2026 school-food rules.',
        href: INSTITUTIONAL_PATHS.school,
        linkLabel: 'School catering Dubai',
      },
      {
        title: 'Hospital catering',
        body: 'Staff dining first, then wards when the diet list is real.',
        href: INSTITUTIONAL_PATHS.hospital,
        linkLabel: 'Hospital catering Dubai',
      },
      {
        title: 'Canteen management',
        body: 'The room. Food, not software.',
        href: INSTITUTIONAL_PATHS.canteen,
        linkLabel: 'Canteen management Dubai',
      },
    ],
  },
  faqH2: 'What should I know before booking institutional catering in Dubai?',
  faqs: [
    {
      q: 'Is this the same as office catering?',
      a: 'No. [Office catering](/office-catering-dubai) is a repeating workplace lunch. This hub is nurseries, schools, hospitals and operating canteens.',
    },
    {
      q: 'Do you have a from-price?',
      a: 'Not on this hub. Each child page explains how that kitchen is quoted. 5% VAT is always its own line.',
    },
    {
      q: 'Are you on My School Food?',
      a: 'We will say so when that registration is filed. Until then we describe the standard, not a listing.',
    },
    {
      q: 'Which page should a school open?',
      a: '[School catering](/school-catering-dubai) for the meal programme. [Canteen management](/canteen-management-dubai) if you need the room run.',
    },
  ],
  locationTitle: 'Institutional kitchens across Dubai',
  locationSubtitle: (
    <>
      From family neighbourhoods to{' '}
      <Link to="/locations/difc" className="text-gold hover:text-gold-light underline underline-offset-4">
        DIFC
      </Link>
      {' '}campuses.
    </>
  ),
  cta: {
    h2: 'Tell us the kind of site',
    body: 'Nursery, school, hospital or canteen. Covers and days. That is enough to start.',
  },
}
