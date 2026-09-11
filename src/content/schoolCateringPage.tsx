import { Link } from 'react-router'
import { INSTITUTIONAL_PATHS, institutionalWhatsApp } from './institutionalCluster'
import type { InstitutionalPageContent } from './institutionalLandingTypes'

export const SCHOOL_ROOT = INSTITUTIONAL_PATHS.school

export const schoolPage: InstitutionalPageContent = {
  root: SCHOOL_ROOT,
  eyebrow: 'Schools',
  lock: {
    primary: 'school catering dubai',
    title: 'School Catering Dubai | Lunches Built to the Rules | myCHEF',
    description:
      'School catering Dubai for lunches and canteens. Built around Dubai Municipality school-food rules. Quote after we see the kitchen and the roll.',
    h1: 'School Catering Dubai',
  },
  hero: {
    src: '/images/school-catering-dubai-hero.webp',
    alt: 'School catering Dubai — service team laying a labelled lunch line in a bright school dining hall, devices away. Experience concept shown.',
    width: 1344,
    height: 752,
    subtitle:
      'School catering Dubai for lunches, meal plans and canteen service. Menus written against municipal school-food rules, labelled for allergens, quoted after we see the roll and the kitchen.',
    micro: 'Share the school, year groups and whether you want delivery or a managed line. We typically reply within 15 minutes during business hours.',
  },
  whatsapp: institutionalWhatsApp(
    SCHOOL_ROOT,
    'I need school catering. School: __, Roll: __, Format: delivery or canteen __, Days: __',
  ),
  primaryCta: 'Get a school catering quote',
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Institutional catering', href: INSTITUTIONAL_PATHS.hub },
    { label: 'School catering' },
  ],
  jumpNav: [
    { href: '#brief', label: 'The job' },
    { href: '#difference', label: 'How it is run' },
    { href: '#menu', label: 'Formats' },
    { href: '#compliance', label: 'The rules' },
    { href: '#how-it-works', label: 'How it starts' },
    { href: '#quote', label: 'Quote' },
    { href: '#faqs', label: 'FAQs' },
  ],
  siblings: [
    { href: INSTITUTIONAL_PATHS.nursery, label: 'Nursery catering' },
    { href: INSTITUTIONAL_PATHS.canteen, label: 'Canteen management' },
    { href: INSTITUTIONAL_PATHS.hospital, label: 'Hospital catering' },
  ],
  figures: {
    afterBrief: {
      src: '/images/school-catering-dubai-hall.webp',
      alt: 'Dubai school dining hall being prepared for lunch, service team setting tables. Experience concept shown.',
      width: 1280,
      height: 720,
      caption: 'Experience concept shown.',
    },
    afterDifference: {
      src: '/images/school-catering-dubai-pass.webp',
      alt: 'Chef finishing roasted vegetables on a school lunch pass while a manager observes the empty hall. Experience concept shown.',
      width: 1280,
      height: 720,
      caption: 'Experience concept shown.',
    },
  },
  siloNote: (
    <>
      This page owns school catering Dubai. School lunch delivery Dubai and school meal plans Dubai
      are this brief. A full canteen fit-out sits on{' '}
      <Link to={INSTITUTIONAL_PATHS.canteen} className="text-gold-ink underline underline-offset-4 hover:text-gold">
        canteen management
      </Link>
      . Early years sit on{' '}
      <Link to={INSTITUTIONAL_PATHS.nursery} className="text-gold-ink underline underline-offset-4 hover:text-gold">
        nursery catering
      </Link>
      .
    </>
  ),
  problem: {
    h2: 'School catering Dubai is a licensed food operation',
    paragraphs: [
      'A school canteen in Dubai is no longer a tuck shop with a microwave. It is inspected like any other food business, with extra rules on what may be sold to children. Dubai has 220 or more private schools. Exclusive canteen contracts are large, long, and awarded to kitchens that can show papers — not to the first WhatsApp cook who can do a pasta day.',
      'Two things changed the brief. My School Food, launched in November 2025, put hundreds of thousands of students onto a registered-supplier model. The 2026 national guide for food in the school environment bans sugary and energy drinks, confectionery, fried food, nuts and processed meats in UAE schools. Healthy school lunch Dubai is now a compliance sentence, not a slogan on a menu board.',
      'School catering companies in Dubai that still sell “yummy variety” without a labelled cycle will not survive a parent committee. You need a kitchen that can be inspected, a matrix a nurse can read, and a quote finance can compare.',
      'School catering companies Dubai are hired for papers, not a pasta day. KHDA school catering Dubai is wellbeing language, not a food licence; education catering Dubai on this page is the meal programme, and canteen catering services Dubai for a full room sit on canteen management.',
    ],
  },
  difference: {
    h2: 'Delivery, a line, or a managed canteen',
    blocks: [
      {
        title: 'School lunch delivery',
        body: 'Cooked that morning, packed by year group, logged on the van, laid out in your hall. School lunch delivery Dubai is the usual start when you do not yet want to own a canteen.',
      },
      {
        title: 'A staffed lunch line',
        body: 'School canteen catering Dubai with people behind the counter: hot held hot, cold held cold, allergens labelled, the room usable for the next sitting. This is still food service, not a software login.',
      },
      {
        title: 'A managed canteen',
        body: 'Fit-out, staffing, menu cycle and cashless pre-order if the school wants it. That full brief lives on canteen management Dubai. This page stays with the meal programme.',
      },
      {
        title: 'Written against the rules',
        body: 'KHDA wellbeing language is not a caterer licence. Municipal food rules are. We write menus against the published bans and labelling rules, and we will not claim a listing we have not filed.',
      },
      {
        title: 'Halal and allergen labelling as default',
        body: 'Halal proteins by default. Nut-aware production. The 14 declared allergens on the card, not in a PDF nobody opens during service.',
      },
      {
        title: 'A tasting before a term',
        body: 'Leadership and, where the school wants it, a parent panel taste before anyone signs a year. The first sitting is run as a trial unless you ask otherwise.',
      },
    ],
  },
  table: {
    label: 'FORMATS',
    h2: 'Three ways school catering Dubai is actually bought',
    intro: 'Pick the format before you shortlist anyone. The quote is different for each.',
    columns: ['Format', 'What it is', 'Who it suits'],
    rows: [
      ['Delivered meal programme', 'Hot and cold packed by year group, laid out in your hall', 'Schools without a production kitchen'],
      ['Staffed lunch line', 'People, holding equipment, labelled service', 'Halls that already have a servery'],
      ['Managed canteen', 'Fit-out, staff, cycle, optional cashless', 'Schools ready to outsource the room — see canteen management'],
    ],
    note: 'We do not publish a from-price per child. Roll, format and diet list move the number. 5% VAT is its own line.',
  },
  compliance: {
    h2: 'The rules a school canteen has to survive',
    intro:
      'Ask to see these before you award a year. We will not take a contract we cannot document.',
    rows: [
      { item: 'Education-supply food permit', who: 'DM Food Safety', see: 'Permit for schools, not only a restaurant licence' },
      { item: 'My School Food / Foodwatch status', who: 'Dubai Municipality', see: 'Supplier status, dated' },
      { item: 'Menus against the 2026 national guide', who: 'UAE / DM', see: 'No sugary drinks, confectionery, fried food, nuts, processed meats' },
      { item: 'PIC Level 3 on the shift', who: 'DM-accredited trainer', see: 'Named person on the roster' },
      { item: 'Allergen labelling (14 allergens)', who: 'Dubai Food Code', see: 'Cards on the line, matrix in the office' },
      { item: 'Temperature logs', who: 'Dubai Municipality', see: 'Cold ≤5°C, hot ≥60°C, van permit' },
      { item: 'Health cards for handlers', who: 'DHA', see: 'Cards matching the people on site' },
      { item: 'Halal supply', who: 'Accredited body', see: 'Certificates matching the proteins on the cycle' },
    ],
    note: 'Read the 2026 explainer if you have to brief a board. Cashless pre-order is a school choice, not a substitute for a kitchen.',
  },
  process: {
    h2: 'Four steps. The principal sees the papers.',
    steps: [
      'Send the school, roll, year groups, and whether you want delivery or a line.',
      'We typically reply within 15 minutes during business hours if a kitchen can cover the week.',
      'Site walk, sample cycle, allergen matrix, itemised proposal with VAT as its own line.',
      'Tasting. Trial sitting. Written booking for the term or the year.',
    ],
  },
  quoting: {
    h2: 'How a school quote is built',
    paragraphs: [
      'Roll, format, diet list and the time children actually sit down. Those four change the kitchen more than a mood board does.',
      'Hot lunch programmes you will see advertised in Dubai often sit in a band families already know. Managed canteens are a different product and are quoted per head per day after the walk. Neither number is published here as a myCHEF from-price.',
      'Finance gets food, staff, equipment, delivery and 5% VAT on separate lines.',
    ],
  },
  trust: {
    h2: 'A parent committee can open this',
    items: [
      {
        title: 'The 2026 rules, in English',
        body: 'What My School Food and the national guide actually ban, and what a caterer must be able to show you.',
        href: '/blog/dubai-school-food-rules-2026',
        linkLabel: 'Dubai school food rules 2026',
      },
      {
        title: 'Early years are a different kitchen',
        body: 'Textures, portions and nut-free production for under-fives sit on their own page.',
        href: INSTITUTIONAL_PATHS.nursery,
        linkLabel: 'Nursery catering',
      },
      {
        title: 'If you need the room, not only the lunch',
        body: 'Fit-out, staffing and cashless belong on canteen management — food, not a POS vendor.',
        href: INSTITUTIONAL_PATHS.canteen,
        linkLabel: 'Canteen management',
      },
      {
        title: 'How culinary partners are selected',
        body: 'Identity, right-to-work, skill and references before anyone cooks for children.',
        href: '/how-we-vet-our-chefs',
        linkLabel: 'How we vet chefs',
      },
    ],
  },
  faqH2: 'What should I know before booking school catering in Dubai?',
  faqs: [
    {
      q: 'What are Dubai school canteen nutrition standards?',
      a: 'Municipal school-food rules plus the 2026 national guide: no sugary or energy drinks, confectionery, fried food, nuts or processed meats, with labelling and portion rules on top. Details in [Dubai school food rules 2026](/blog/dubai-school-food-rules-2026).',
    },
    {
      q: 'How much do school meals cost in Dubai?',
      a: 'We do not publish a from-price. Delivered programmes and managed canteens are different products. The quote follows a site walk. 5% VAT is its own line.',
    },
    {
      q: 'How do I choose a school catering company in Dubai?',
      a: 'Ask for the education-supply permit, the live allergen matrix, PIC cover, van logs, and a tasting. If they lead with an app login, send them to software. Food is this page.',
    },
    {
      q: 'Do you work with KHDA schools?',
      a: 'KHDA sets wellbeing expectations for private schools. Food permits sit with Dubai Municipality. We write against both. We do not use “KHDA-approved caterer” as a badge.',
    },
    {
      q: 'Can parents pre-order?',
      a: 'Yes, if the school wants a cashless or pre-order layer. That is a school choice. It does not replace a documented kitchen.',
    },
    {
      q: 'Do you cover allergens and halal?',
      a: 'Halal by default. Allergen cards on the line. Nut-aware production. Specific certificates belong in the brief.',
    },
    {
      q: 'What is the difference between this and canteen management?',
      a: 'This page is the meal programme. [Canteen management](/canteen-management-dubai) is the room: fit-out, staffing, optional cashless.',
    },
    {
      q: 'How soon can you start?',
      a: 'Send the roll and the format. We tell you the same working day whether a kitchen can cover the week. A tasting and a trial sitting are normal before a term.',
    },
  ],
  locationTitle: 'School catering across Dubai',
  locationSubtitle: (
    <>
      Schools in{' '}
      <Link to="/locations/arabian-ranches" className="text-gold hover:text-gold-light underline underline-offset-4">
        Arabian Ranches
      </Link>
      ,{' '}
      <Link to="/locations/dubai-hills" className="text-gold hover:text-gold-light underline underline-offset-4">
        Dubai Hills
      </Link>
      {' '}and{' '}
      <Link to="/locations/jumeirah" className="text-gold hover:text-gold-light underline underline-offset-4">
        Jumeirah
      </Link>
      .
    </>
  ),
  cta: {
    h2: 'Roll, format and days is enough to start',
    body: 'You do not need a finished cycle. We typically reply within 15 minutes during business hours.',
  },
}
