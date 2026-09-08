import { Link } from 'react-router'
import { INSTITUTIONAL_PATHS, institutionalWhatsApp } from './institutionalCluster'
import type { InstitutionalPageContent } from './institutionalLandingTypes'

export const CANTEEN_ROOT = INSTITUTIONAL_PATHS.canteen

export const canteenPage: InstitutionalPageContent = {
  root: CANTEEN_ROOT,
  eyebrow: 'Canteens',
  lock: {
    primary: 'canteen management dubai',
    title: 'Canteen Management Dubai | Food, Not Software | myCHEF',
    description:
      'Canteen management Dubai is food, staff and a kitchen — not a POS app. Setup, staffing and a quote after we walk the room.',
    h1: 'Canteen Management Dubai',
  },
  hero: {
    src: '/images/canteen-management-dubai-hero.webp',
    alt: 'Canteen management Dubai — a dressed staff dining room, servery live, laptops stacked away from the food. Experience concept shown.',
    width: 1344,
    height: 752,
    subtitle:
      'Canteen management Dubai is a kitchen, a team and a cycle — not a till app. Staff canteen management, setup and catering, quoted after we walk the room.',
    micro: 'Share the site, covers per day and whether the room already exists. We typically reply within 15 minutes during business hours.',
  },
  whatsapp: institutionalWhatsApp(
    CANTEEN_ROOT,
    'I need canteen management. Site: __, Covers/day: __, Existing kitchen: yes/no __',
  ),
  primaryCta: 'Get a canteen quote',
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Institutional catering', href: INSTITUTIONAL_PATHS.hub },
    { label: 'Canteen management' },
  ],
  jumpNav: [
    { href: '#brief', label: 'Not software' },
    { href: '#difference', label: 'How it is run' },
    { href: '#menu', label: 'Models' },
    { href: '#compliance', label: 'What it requires' },
    { href: '#how-it-works', label: 'How it starts' },
    { href: '#quote', label: 'Quote' },
    { href: '#faqs', label: 'FAQs' },
  ],
  siblings: [
    { href: INSTITUTIONAL_PATHS.hospital, label: 'Hospital catering' },
    { href: INSTITUTIONAL_PATHS.school, label: 'School catering' },
    { href: '/office-catering-dubai', label: 'Office catering' },
  ],
  siloNote: (
    <>
      This page owns canteen management Dubai. Staff canteen management Dubai and canteen setup
      Dubai are this brief. A weekday office lunch without a room sits on{' '}
      <Link to="/office-catering-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
        office catering
      </Link>
      . School meal programmes sit on{' '}
      <Link to={INSTITUTIONAL_PATHS.school} className="text-gold-ink underline underline-offset-4 hover:text-gold">
        school catering
      </Link>
      .
    </>
  ),
  problem: {
    h2: 'Canteen management Dubai is food. The SERP is full of software.',
    paragraphs: [
      'Search “canteen management Dubai” and you will land on till systems, cashless apps and workplace-benefit platforms. Useful tools. They do not cook. They do not hold a probe. They do not stand behind a line at 12:10 when the floor empties.',
      'Staff canteen management Dubai is a food business inside someone else’s building: a kitchen or a finishing servery, people with health cards, a cycle the night shift will eat, and a commercial model finance understands. Canteen setup Dubai means the room as well as the menu — gas, extraction, holding, flow — not a QR code on a dirty microwave.',
      'Corporate canteen catering Dubai and office cafeteria management Dubai fail when someone buys the app first and the kitchen second. We do the kitchen. If you want cashless, we will say so in the proposal as a layer, not as the product.',
    ],
  },
  difference: {
    h2: 'Setup, staffing, a cycle — then optional tech',
    blocks: [
      {
        title: 'Walk the room before the deck',
        body: 'Covers, hours, power, extraction, where dirty plates go. Canteen setup Dubai starts with a tape measure, not a slide.',
      },
      {
        title: 'People on the line',
        body: 'Canteen catering services Dubai need PIC cover, health cards and a backup when someone is sick. An app does not plate a biryani.',
      },
      {
        title: 'A cycle people finish',
        body: 'Staff canteen Dubai food that looks like leftover events will empty the room in a fortnight. Rotate. Label. Ask the night shift what they actually eat.',
      },
      {
        title: 'Three commercial models',
        body: 'Subsidised (the company pays some or all), revenue-share (the operator takes till risk), or a fixed fee. We quote the one you are actually running. We do not publish a from-price per head on this page.',
      },
      {
        title: 'Cashless if you want it',
        body: 'Pre-order and cashless canteen Dubai tech is table stakes in some offices. It is a partner layer. It is not the catering.',
      },
      {
        title: 'Not a weekday drop-off',
        body: 'If you only need lunch delivered to a meeting table, that is office catering. Outsource canteen catering Dubai when you want the room run.',
      },
    ],
  },
  table: {
    label: 'MODELS',
    h2: 'How canteen management Dubai is usually paid for',
    intro: 'Name the model in the brief. Mixing them in one sentence is how tenders go wrong.',
    columns: ['Model', 'Who pays', 'What we run'],
    rows: [
      ['Subsidised', 'The company covers some or all of the meal', 'Kitchen, staff, cycle; till optional'],
      ['Revenue-share', 'Staff pay; operator takes till risk', 'Kitchen, staff, cycle, till'],
      ['Fixed fee', 'A contracted operating fee', 'Kitchen, staff, cycle to an agreed spec'],
    ],
    note: 'Tenders in Dubai often discuss managed canteens in a per-head-per-day band. That is market context. myCHEF quotes after the walk. 5% VAT is its own line.',
  },
  compliance: {
    h2: 'A canteen is a food establishment',
    intro: 'If the room cooks or holds hot food, it needs the same papers as any other kitchen.',
    rows: [
      { item: 'Food establishment permit', who: 'Dubai Municipality', see: 'For the canteen kitchen, not only the caterer’s central kitchen' },
      { item: 'PIC on the shift', who: 'DM', see: 'Named person' },
      { item: 'Health cards', who: 'DHA', see: 'Every handler on the line' },
      { item: 'Temperature control', who: 'DM', see: 'Holding and, if used, vans' },
      { item: 'Allergen labelling', who: 'Dubai Food Code', see: 'Cards on the line' },
      { item: 'Halal supply', who: 'Accredited body', see: 'Certificates for proteins' },
      { item: 'Staff vetting if on a school or nursery site', who: 'KHDA expectation', see: 'Police clearance when the site asks' },
      { item: 'Insurance', who: 'Broker', see: 'Public liability and product, sums in the proposal' },
    ],
    note: 'We do not claim a fit-out cost or a per-head from-price here. Those numbers are written after we see the room.',
  },
  process: {
    h2: 'Four steps. Facilities sees the drawing.',
    steps: [
      'Send the site, covers per day, hours, and whether a kitchen already exists.',
      'We typically reply within 15 minutes during business hours.',
      'Walk the room. Itemised proposal: model, staffing, cycle, any fit-out, VAT as its own line.',
      'Trial week on the line before a year-long operations contract.',
    ],
  },
  quoting: {
    h2: 'How a canteen quote is built',
    paragraphs: [
      'Covers, hours, existing kit, and which of the three commercial models you are running. Those four decide the kitchen.',
      'Packed-lunch or drop-off programmes are a different product and live on office catering. Do not compare those per-head figures to a staffed canteen.',
      'If you need the meal programme for a school without taking the room, use school catering Dubai.',
    ],
  },
  trust: {
    h2: 'The line is the product',
    items: [
      {
        title: 'Office lunch without a canteen',
        body: 'Drop-off to a meeting table, from the published office rate card.',
        href: '/office-catering-dubai',
        linkLabel: 'Office catering',
      },
      {
        title: 'School meal programmes',
        body: 'When the customer is a school and the product is lunch, not a staff canteen.',
        href: INSTITUTIONAL_PATHS.school,
        linkLabel: 'School catering',
      },
      {
        title: 'Hospital staff dining',
        body: 'Cafeterias inside clinics and hospitals, with a path to patient meals later.',
        href: INSTITUTIONAL_PATHS.hospital,
        linkLabel: 'Hospital catering',
      },
      {
        title: 'How culinary partners are selected',
        body: 'Vetting, backup, papers. Same as the rest of myCHEF.',
        href: '/how-we-vet-our-chefs',
        linkLabel: 'How we vet chefs',
      },
    ],
  },
  faqH2: 'What should I know before booking canteen management in Dubai?',
  faqs: [
    {
      q: 'Is this a cashless canteen system?',
      a: 'No. Canteen management Dubai on this page is food, staff and a kitchen. Cashless canteen Dubai tech can sit on top if you want it. It is not the product.',
    },
    {
      q: 'How much does canteen management cost in Dubai?',
      a: 'We do not publish a from-price per head. Subsidised, revenue-share and fixed-fee models price differently. The number follows a site walk. 5% VAT is its own line.',
    },
    {
      q: 'Can you set up a staff canteen from an empty room?',
      a: 'Canteen setup Dubai is in scope: flow, holding, extraction, staffing. Fit-out cost is quoted after we see the room, not invented on this page.',
    },
    {
      q: 'Is this the same as office catering?',
      a: 'Office catering is a repeating drop-off or a staffed sitting in a meeting room. This page is an operating canteen.',
    },
    {
      q: 'Do you run school canteens?',
      a: 'Meal programmes sit on [school catering](/school-catering-dubai). A full school canteen fit-out can be quoted from this page when the room is the brief.',
    },
    {
      q: 'What about outsource vs in-house?',
      a: 'Outsource canteen catering Dubai when you want one operator on the line, one invoice, and papers you can open. In-house means you employ the team. We do the first.',
    },
    {
      q: 'Will food sit next to laptops?',
      a: 'No. Service happens at a servery or a dressed table. Devices stay off the food.',
    },
    {
      q: 'How soon can you start?',
      a: 'An existing servery can trial in days once papers and a cycle are agreed. A fit-out follows the building, not a slogan.',
    },
  ],
  locationTitle: 'Staff canteens across Dubai',
  locationSubtitle: (
    <>
      Offices and campuses in{' '}
      <Link to="/locations/difc" className="text-gold hover:text-gold-light underline underline-offset-4">
        DIFC
      </Link>
      ,{' '}
      <Link to="/locations/business-bay" className="text-gold hover:text-gold-light underline underline-offset-4">
        Business Bay
      </Link>
      {' '}and{' '}
      <Link to="/locations/downtown-dubai" className="text-gold hover:text-gold-light underline underline-offset-4">
        Downtown Dubai
      </Link>
      .
    </>
  ),
  cta: {
    h2: 'Site, covers and whether the kitchen exists',
    body: 'That is enough to start. We typically reply within 15 minutes during business hours.',
  },
}
