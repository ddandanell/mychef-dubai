import { Link } from 'react-router'
import { INSTITUTIONAL_PATHS, institutionalWhatsApp } from './institutionalCluster'
import type { InstitutionalPageContent } from './institutionalLandingTypes'

export const NURSERY_ROOT = INSTITUTIONAL_PATHS.nursery

export const nurseryPage: InstitutionalPageContent = {
  root: NURSERY_ROOT,
  eyebrow: 'Early years',
  lock: {
    primary: 'nursery catering dubai',
    title: 'Nursery Catering Dubai | Daily Meals for Early Years | myCHEF',
    description:
      'Nursery catering Dubai for early-years meals. Documented kitchens, allergen lists, a quote after we see the site. WhatsApp the enrolment.',
    h1: 'Nursery Catering Dubai',
  },
  hero: {
    src: '/images/nursery-catering-dubai-hero.webp',
    alt: 'Nursery catering Dubai — a chef in a black jacket setting child-sized plates in a calm early-years dining room. Experience concept shown.',
    width: 1344,
    height: 752,
    subtitle:
      'Nursery catering Dubai for early-years settings: chef-cooked meals, a written allergen list, and a kitchen you can inspect. We quote after we see the site, the diet list and the week.',
    micro: 'Share enrolment, ages and whether lunch is included in the fee. We typically reply within 15 minutes during business hours.',
  },
  whatsapp: institutionalWhatsApp(
    NURSERY_ROOT,
    'I need nursery catering. Centre: __, Enrolment: __, Ages: __, Days: __',
  ),
  primaryCta: 'Get a nursery catering quote',
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Institutional catering', href: INSTITUTIONAL_PATHS.hub },
    { label: 'Nursery catering' },
  ],
  jumpNav: [
    { href: '#brief', label: 'The job' },
    { href: '#difference', label: 'How it is run' },
    { href: '#menu', label: 'Sample week' },
    { href: '#compliance', label: 'What it requires' },
    { href: '#how-it-works', label: 'How it starts' },
    { href: '#quote', label: 'Quote' },
    { href: '#faqs', label: 'FAQs' },
  ],
  siblings: [
    { href: INSTITUTIONAL_PATHS.school, label: 'School catering' },
    { href: INSTITUTIONAL_PATHS.canteen, label: 'Canteen management' },
    { href: INSTITUTIONAL_PATHS.hospital, label: 'Hospital catering' },
  ],
  siloNote: (
    <>
      This page owns nursery catering Dubai. Preschool catering Dubai and nursery lunch delivery
      Dubai are the same brief with a different age band or drop-off window. School canteens sit on{' '}
      <Link to={INSTITUTIONAL_PATHS.school} className="text-gold-ink underline underline-offset-4 hover:text-gold">
        school catering
      </Link>
      . The silo sits on{' '}
      <Link to={INSTITUTIONAL_PATHS.hub} className="text-gold-ink underline underline-offset-4 hover:text-gold">
        institutional catering Dubai
      </Link>
      .
    </>
  ),
  problem: {
    h2: 'Why nursery catering Dubai is a different job',
    paragraphs: [
      'If you run a nursery in Dubai, lunch is the part of the day with the least margin for error. You are feeding children as young as one. Parents chose you because they wanted a professional standard, not a packed box that may or may not survive the car. Dubai has hundreds of licensed early-childhood centres and tens of thousands of children in them. Enrolment has been growing faster than school enrolment. For most of those children, the nursery lunch is most of what they eat, five days a week.',
      'Nurseries here split two ways: meals inside the fee, or parents pack. More centres are moving to provided meals because it removes the packed-lunch lottery and lets you hold a nut-free rule. It also means the food becomes your reputation. When a third-party kitchen fails, parents still call the nursery first. That is the job nursery catering companies in Dubai are actually being hired to do — not a pretty menu card.',
      'Regulation has tightened around that fact. Dubai Municipality’s My School Food platform, launched in late 2025, covers schools, nurseries and universities with a registered-supplier model, labelling rules and allergy protocols. Food businesses supplying educational settings need a valid permit from the Food Safety Department. Menus are reviewed. Daily monitoring runs through municipal channels. A kitchen someone recommended is no longer enough. You should be able to see the paperwork.',
    ],
  },
  difference: {
    h2: 'What you can verify before anyone cooks',
    blocks: [
      {
        title: 'Chef-led cooking, not a tray line',
        body: 'myCHEF started as a private-chef and event kitchen. Culinary partners are matched, vetted and backed up. Early-years meals are cooked from whole ingredients — vegetables, grains, lean halal proteins, fruit — not a reheated production tray. Children eat with their eyes. Food that looks like food is how fussy eaters become willing ones.',
      },
      {
        title: 'Menus written for the age band',
        body: 'Nursery meal plans in Dubai have to fit 12 months to five years: texture, portion and what a small stomach will actually finish. Healthy meals for nurseries in Dubai are not adult canteen food cut smaller. Age bands, textures and a written cycle sit in the proposal so a manager can show a parent the week, not describe it from memory.',
      },
      {
        title: 'Nut-free as a kitchen rule',
        body: 'Nut-free nursery meals in Dubai are the expected baseline, including “may contain traces” in many centres. We treat that as a production rule, not a menu filter. Every meal leaves with allergen labelling. Your team gets a written matrix for the cycle, so any staff member — not only the manager — can answer a parent without guessing.',
      },
      {
        title: 'Halal-first, documented',
        body: 'Halal nursery meals in Dubai are not a special request. Meat and poultry come from approved suppliers. Pork and non-halal derivatives stay out of the nursery range. If a family needs to see certificates, that request belongs in the brief before the first service, not after a complaint.',
      },
      {
        title: 'Temperature on the van, not only in the kitchen',
        body: 'Nursery lunch delivery in Dubai fails in the last kilometre as often as it fails on the pass. Cold food has to stay cold; hot food has to stay hot. Probe logs travel with the run. If a centre cannot receive at a loading bay, say so in the brief — that changes the pack, not the promise.',
      },
      {
        title: 'A quote after the walk, not a from-price on the internet',
        body: 'We do not publish a per-child from-price for nursery catering. Enrolment, ages, diet list, kitchen access and how many days you run all move the number. Finance gets food, staff, delivery, equipment and 5% VAT on separate lines. A tasting happens when the site needs one, before anyone signs a term.',
      },
    ],
  },
  table: {
    label: 'SAMPLE WEEK',
    h2: 'An example week used for quoting, not a promised menu',
    intro:
      'This is the shape of a nursery meal plan in Dubai: one hot main, a carbohydrate, vegetables, fruit, and a labelled allergen card. The live cycle is written after we see ages and the diet list.',
    columns: ['Day', 'Lunch', 'Snack'],
    rows: [
      ['Sunday', 'Grilled chicken, rice, steamed carrot and cucumber', 'Yoghurt and sliced fruit'],
      ['Monday', 'Baked fish, potato, green beans', 'Hummus and vegetable sticks'],
      ['Tuesday', 'Lamb mince pasta, hidden vegetables, side salad', 'Cheese and apple'],
      ['Wednesday', 'Chicken and vegetable rice, cucumber', 'Fruit and a plain biscuit'],
      ['Thursday', 'Vegetable macaroni, tomato sauce, fruit', 'Yoghurt'],
    ],
    note: 'Sample only. No nuts. Halal proteins. Final menus are written against your allergen matrix and municipal rules, then shown to you before service starts.',
  },
  compliance: {
    h2: 'What this work requires in Dubai',
    intro:
      'These are the documents a nursery manager should be able to open. We will not take a contract we cannot document. We do not claim a My School Food listing or a named HACCP certificate on this page until those papers sit in src/content/.',
    rows: [
      { item: 'Trade licence with catering activity', who: 'DET', see: 'Licence copy on file' },
      { item: 'Food establishment permit / kitchen NOC', who: 'Dubai Municipality', see: 'Permit for the kitchen that actually cooks' },
      { item: 'Permit to supply schools and nurseries', who: 'DM Food Safety', see: 'The education-supply permit, not a restaurant licence alone' },
      { item: 'Platform registration (Foodwatch / My School Food)', who: 'Dubai Municipality', see: 'Supplier status before we say we are listed' },
      { item: 'HACCP-based food safety system', who: 'DM / certifier', see: 'Certificate or documented system, dated' },
      { item: 'PIC Level 3 on the shift', who: 'DM-accredited trainer', see: 'Named person on the roster that day' },
      { item: 'Occupational health cards', who: 'DHA', see: 'Cards for every handler on the run' },
      { item: 'Temperature-controlled transport', who: 'Dubai Municipality', see: 'Van permit, probe logs, cold ≤5°C / hot ≥60°C' },
      { item: 'Halal supply chain', who: 'Accredited body', see: 'Supplier certificates matching the menu' },
      { item: 'Allergen matrix and nut-free protocol', who: 'DM / KHDA expectation', see: 'Written matrix for the live cycle' },
    ],
    note: 'Insurance, staff police clearance and cashless pre-order sit in the proposal when the site needs them. Cost of permits is an operations matter, not a menu line.',
  },
  process: {
    h2: 'Four steps. The manager sees the papers.',
    steps: [
      'Send the centre, enrolment, age bands, days, and whether lunch is inside the fee.',
      'We typically reply within 15 minutes during business hours if a kitchen and a chef can cover the week.',
      'A site walk and an itemised proposal: menu cycle, allergen matrix, delivery window, food, staff, van, VAT as separate lines.',
      'Tasting if the centre needs one. Then a written booking. The first week is run as a trial unless you ask otherwise.',
    ],
  },
  quoting: {
    h2: 'How a nursery quote is built',
    paragraphs: [
      'A useful proposal needs four things: the centre, how many children eat, the age bands, and the days. The diet list and whether parents currently pack lunch help. Telling us a budget band is not a trap — it means the first proposal is realistic.',
      'Access, parking and the time the children actually sit down change when food can arrive at temperature. Mention the building early. Headcounts move; we will tell you the last point at which the kitchen can still change the order.',
      'Published competitor meal plans in Dubai often sit in a band parents already know. That is market context, not our from-price. myCHEF quotes after the walk. 5% VAT is its own line.',
    ],
  },
  trust: {
    h2: 'Parents ask who chose the caterer',
    items: [
      {
        title: 'How culinary partners are selected',
        body: 'Identity, right-to-work, skill and references are checked before anyone cooks. No chef is guaranteed by name; we match the brief and keep a backup.',
        href: '/how-we-vet-our-chefs',
        linkLabel: 'How we vet chefs',
      },
      {
        title: 'What halal-first means here',
        body: 'Halal ingredients are sourced by default for nursery menus. Specific certification needs belong in the brief.',
        href: '/halal-catering-dubai',
        linkLabel: 'Halal catering',
      },
      {
        title: 'Allergy-safe production',
        body: 'The written matrix is the product. If a centre needs a fully segregated nut-free line, that is a kitchen question, not a menu note.',
        href: '/allergy-safe-catering-dubai',
        linkLabel: 'Allergy-safe catering',
      },
      {
        title: 'Read the rules, then the quote',
        body: 'Municipal school-food rules changed in 2025–26. The explainer is for managers who have to brief a board.',
        href: '/blog/dubai-school-food-rules-2026',
        linkLabel: 'Dubai school food rules 2026',
      },
    ],
  },
  faqH2: 'What should I know before booking nursery catering in Dubai?',
  faqs: [
    {
      q: 'Do all nurseries in Dubai provide meals?',
      a: 'No. Some include lunch in the fee. Others ask parents to pack. More centres are moving to provided meals so they can hold a nut-free rule and stop the packed-lunch lottery. The choice is yours; the kitchen still has to be documented either way. See [provided meals vs packed lunch](/blog/nursery-meals-vs-packed-lunch-dubai).',
    },
    {
      q: 'How do Dubai nurseries handle food allergies?',
      a: 'With a written matrix, labelled meals, and a nut-free production rule in most centres. Parents should be able to ask any staff member, not only the manager. Read [nut-free, allergen and halal nursery meals](/blog/nut-free-halal-nursery-meals-dubai).',
    },
    {
      q: 'What foods are restricted in Dubai nurseries?',
      a: 'Nuts are widely banned, including “may contain traces” in many settings. Pork is out. Sugary drinks and confectionery are increasingly restricted under municipal school-food rules. The live list sits in your policy and in the caterer’s matrix, not in a slogan.',
    },
    {
      q: 'How much do nursery meal plans cost in Dubai?',
      a: 'We do not publish a from-price per child. Enrolment, ages, diet list and delivery all move the number. Market meal plans you will see advertised elsewhere often sit in a band parents already recognise. myCHEF sends an itemised quote after a site walk, with 5% VAT as its own line.',
    },
    {
      q: 'Are you listed on My School Food?',
      a: 'We will say so when that registration is complete and filed. Until then this page describes the standard the work requires, not a listing we have not documented.',
    },
    {
      q: 'Do you cook on site or deliver?',
      a: 'Most nurseries do not have a production kitchen. Nursery lunch delivery Dubai is the usual format: cooked that morning, packed for the age band, logged on the van, laid out in your dining room. On-site cooking is a different brief and is quoted as such.',
    },
    {
      q: 'Can parents still pack on some days?',
      a: 'Yes, if your policy allows it. Mixed models are common during a transition. The allergen rule still has to hold for everything that enters the room.',
    },
    {
      q: 'How much notice do you need to start?',
      a: 'We do not publish a fixed minimum. Send enrolment and days; we tell you the same working day whether a kitchen can cover the week. A tasting and a trial week are normal before a term-long booking.',
    },
  ],
  locationTitle: 'Nursery catering across Dubai',
  locationSubtitle: (
    <>
      Early-years centres in{' '}
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
      , and the rest of the city.
    </>
  ),
  cta: {
    h2: 'Enrolment, ages and days is enough to start',
    body: 'You do not need a finished menu. We typically reply within 15 minutes during business hours. The quote comes after we see the site.',
  },
}
