import { Link } from 'react-router'
import { INSTITUTIONAL_PATHS, institutionalWhatsApp } from './institutionalCluster'
import type { InstitutionalPageContent } from './institutionalLandingTypes'

export const CANTEEN_ROOT = INSTITUTIONAL_PATHS.canteen

export const canteenPage: InstitutionalPageContent = {
  root: CANTEEN_ROOT,
  eyebrow: 'Canteens',
  lock: {
    primary: 'canteen management dubai',
    title: 'Canteen Management Dubai | Staff Dining Services | myCHEF',
    description:
      'Canteen management Dubai with rotating menus, staffing and kitchen operations planned around your workforce and facilities. Request a tailored proposal.',
    h1: 'Canteen Management Dubai',
  },
  hero: {
    src: '/images/canteen-management-dubai-hero.webp',
    alt: 'Canteen management Dubai: a dressed staff dining room, servery live, laptops stacked away from the food.',
    width: 1344,
    height: 752,
    subtitle:
      "Canteen management in Dubai, with kitchen operations, staffing and rotating menus planned around your site. We assess the facilities, daily covers and service requirements before preparing a proposal.",
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
    { href: '#brief', label: 'Service overview' },
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
  figures: {
    afterBrief: {
      src: '/images/canteen-management-dubai-dining.webp',
      alt: 'Workplace canteen in Dubai, a manager seated as a guest while chefs work the line.',
      width: 1280,
      height: 720,
      caption: '',
    },
    afterDifference: {
      src: '/images/canteen-management-dubai-kitchen.webp',
      alt: 'Two chefs in black jackets cooking vegetables and salad at an open Dubai canteen pass.',
      width: 1280,
      height: 720,
      caption: '',
    },
  },
  siloNote: (
    <>
      Plan an ongoing food operation for your workplace. If you need meals delivered to an office, explore{' '}
      <Link to="/office-catering-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
        office catering
      </Link>
      . For pupil meal programmes, explore{' '}
      <Link to={INSTITUTIONAL_PATHS.school} className="text-gold-ink underline underline-offset-4 hover:text-gold">
        school catering
      </Link>
      .
    </>
  ),
  problem: {
    "h2": "Canteen management Dubai for your site and workforce",
    "paragraphs": [
      "A well-run canteen gives employees a dependable place to eat within the working day. It needs an appealing menu, a practical service layout and an operating team sized to the number of diners. The plan should account for the quiet periods as carefully as the busiest lunch break.",
      "Begin with the available kitchen, expected daily meals and opening hours. Explain whether the facility is already operating or needs a setup plan. Preparation space, equipment, storage, washing areas and the movement of people all influence the proposed service.",
      "The commercial model is agreed alongside the operation. Your organisation may subsidise meals, pay an operating fee or wish to discuss a revenue arrangement. The proposal defines what each party provides, how changes in uptake are handled and which costs are included.",
      "Menu rotation, dietary information, staffing and feedback keep the daily service useful to the workforce. Optional ordering or payment systems can support the arrangement where appropriate. A site assessment brings these elements together before a quotation is confirmed."
    ]
  },
  difference: {
    "h2": "Build a complete daily dining operation",
    "blocks": [
      {
        "title": "Site and facilities assessment",
        "body": "Review preparation areas, equipment, storage, service capacity and clearance. Record what can be used immediately and what needs further assessment or approval."
      },
      {
        "title": "A defined staffing plan",
        "body": "Agree the roles, service hours, supervision and cover arrangements. Match the service team to peak demand and the work required before and after diners arrive."
      },
      {
        "title": "Rotating menus",
        "body": "Develop a cycle around the workforce, portion expectations and dietary requirements. Regular feedback helps identify popular dishes and reduce avoidable waste."
      },
      {
        "title": "A clear commercial model",
        "body": "Discuss a subsidised arrangement, operating fee or revenue model. The written terms should explain the assumptions, responsibilities and treatment of changing demand."
      },
      {
        "title": "Ordering and payments",
        "body": "If pre-ordering or cashless payments are needed, include them in the brief. Confirm the provider, reporting and support responsibilities as part of the wider operation."
      },
      {
        "title": "A considered launch",
        "body": "Agree any trial period and the measures used to review service. Meal uptake, queues, feedback and staffing needs provide useful evidence for adjustments."
      }
    ]
  },
  table: {
    label: 'MODELS',
    h2: 'How canteen management Dubai is usually paid for',
    intro: 'Discuss the model that fits your organisation, then confirm responsibilities and costs in the written agreement.',
    columns: ['Model', 'Who pays', 'What we run'],
    rows: [
      ['Subsidised', 'The company covers some or all of the meal', 'Kitchen, staff, cycle; till optional'],
      ['Revenue-share', 'Staff pay; operator takes till risk', 'Kitchen, staff, cycle, till'],
      ['Fixed fee', 'A contracted operating fee', 'Kitchen, staff, cycle to an agreed spec'],
    ],
    note: 'The final quote follows the site assessment and agreed operating scope. Food, staffing and any setup requirements are identified, with 5% VAT shown separately.',
  },
  compliance: {
    "h2": "Documentation and responsibilities to confirm",
    "intro": "Before a canteen management service is agreed, review the proposed culinary partner and the requirements for your site with the responsible management team.",
    "rows": [
      {
        "item": "Kitchen and business approvals",
        "who": "Proposed culinary partner",
        "see": "Current documents applicable to the kitchen and service scope"
      },
      {
        "item": "Food safety procedures",
        "who": "Culinary partner and site management",
        "see": "Preparation, transport, receiving and holding arrangements"
      },
      {
        "item": "Staffing and supervision",
        "who": "Operations lead",
        "see": "Named responsibilities, required training and cover arrangements"
      },
      {
        "item": "Ingredients and dietary information",
        "who": "Menu lead and site contact",
        "see": "Current menu, ingredient information and agreed labelling"
      },
      {
        "item": "Facility and equipment responsibilities",
        "who": "Facilities team and operator",
        "see": "Maintenance, cleaning, utilities and any required site approvals"
      },
      {
        "item": "Ordering and payment systems",
        "who": "Client and any system provider",
        "see": "Agreed setup, support, reporting and access responsibilities"
      },
      {
        "item": "Insurance and contract scope",
        "who": "Procurement team",
        "see": "Required cover, exclusions and responsibilities in writing"
      }
    ],
    "note": "Required registrations, certifications and permissions are verified for the proposed provider and setting before confirmation. The proposal records the agreed scope and any conditions that must be met before service begins."
  },
  process: {
    h2: 'Review the operating plan with your facilities team',
    steps: [
      'Send the site, covers per day, hours, and whether a kitchen already exists.',
      'We typically reply within 15 minutes during business hours.',
      'Walk the room. Itemised proposal: model, staffing, cycle, any fit-out, VAT as its own line.',
      'Trial week on the line before a year-long operations contract.',
    ],
  },
  quoting: {
    "h2": "How a canteen management quote is built",
    "paragraphs": [
      "Expected meals, opening hours, existing equipment and the proposed commercial model are the starting point. Share shift patterns and likely changes in occupancy so the operating assumptions are realistic.",
      "The quote separates the daily service from any setup work or equipment requirements. Review who provides utilities, maintenance, cleaning and waste arrangements alongside the food and staffing scope.",
      "A delivered office lunch and a managed canteen have different responsibilities. Compare proposals against the same operating specification, and confirm the treatment of VAT, changes in uptake and any agreed review points before signing."
    ]
  },
  trust: {
    "h2": "Explore related workplace food services",
    "items": [
      {
        "title": "Office catering",
        "body": "Delivered meals and meeting hospitality for workplaces without a dedicated canteen.",
        "href": "/office-catering-dubai",
        "linkLabel": "Office catering"
      },
      {
        "title": "School meal programmes",
        "body": "Lunch planning and service arrangements for school pupils.",
        "href": "/school-catering-dubai",
        "linkLabel": "School catering"
      },
      {
        "title": "Hospital staff dining",
        "body": "Food-service planning within healthcare facilities, with separate clinical requirements where relevant.",
        "href": "/hospital-catering-dubai",
        "linkLabel": "Hospital catering"
      },
      {
        "title": "Culinary partner selection",
        "body": "Learn how culinary professionals are reviewed for a proposed brief.",
        "href": "/how-we-vet-our-chefs",
        "linkLabel": "How we vet chefs"
      }
    ]
  },
  faqH2: 'What should I know before booking canteen management in Dubai?',
  faqs: [
    {
      "q": "What does canteen management include?",
      "a": "The agreed scope can cover kitchen operations, menu planning, staffing and service in a dedicated facility. Equipment, cleaning, utilities, maintenance and payment systems are assigned explicitly in the proposal."
    },
    {
      "q": "How much does canteen management cost?",
      "a": "Pricing follows the site assessment, daily meal volumes, operating hours and commercial model. The proposal identifies the operating scope, any setup requirements and 5% VAT separately."
    },
    {
      "q": "Can you assess an empty room for a staff canteen?",
      "a": "Yes, share the location, dimensions, building information and expected demand for an initial discussion. A setup proposal depends on the facilities review, required specialist input and relevant approvals."
    },
    {
      "q": "How is this different from office catering?",
      "a": "[Office catering](/office-catering-dubai) supplies meals or hospitality for a workplace. Canteen management covers the ongoing operation of a dedicated food-service facility with defined staffing and site responsibilities."
    },
    {
      "q": "Can a school request canteen management?",
      "a": "A school can discuss a managed facility alongside its [school meal programme](/school-catering-dubai). The scope is assessed against the school facilities, timetable, dietary policy and approval requirements."
    },
    {
      "q": "Can cashless ordering be included?",
      "a": "Include any ordering and payment requirements in the brief. The proposal identifies the relevant provider, setup, reporting and support responsibilities where that arrangement is available."
    },
    {
      "q": "How soon can a service start?",
      "a": "Timing depends on the readiness of the facility, provider assessment, menus, staffing and approvals. Agree the launch schedule after those requirements have been reviewed, including any trial service."
    }
  ],
  locationTitle: 'Staff canteens across Dubai',
  locationSubtitle: (
    <>
      Offices and campuses in{' '}
      <Link to="/locations/difc" className="text-gold hover:text-gold-light underline underline-offset-4">
        DIFC
      </Link>
      ,{' '}
      <span>
        Business Bay
      </span>
      {' '}and{' '}
      <span>
        Downtown Dubai
      </span>
      .
    </>
  ),
  cta: {
    h2: 'Site, covers and whether the kitchen exists',
    body: 'That is enough to start. We typically reply within 15 minutes during business hours.',
  },
}
