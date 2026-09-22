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
    alt: 'School catering Dubai: service team laying a labelled lunch line in a bright school dining hall, devices away.',
    width: 1344,
    height: 752,
    subtitle:
      "School catering in Dubai, with lunches, meal plans and canteen service assessed around your pupils and facilities. Menus, allergen information and applicable requirements are reviewed before the service is confirmed.",
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
      alt: 'Dubai school dining hall being prepared for lunch, service team setting tables.',
      width: 1280,
      height: 720,
      caption: '',
    },
    afterDifference: {
      src: '/images/school-catering-dubai-pass.webp',
      alt: 'Chef finishing roasted vegetables on a school lunch pass while a manager observes the empty hall.',
      width: 1280,
      height: 720,
      caption: '',
    },
  },
  siloNote: (
    <>
      Discuss school lunch delivery, meal plans and staffed lunch service. For a dedicated facility, explore{' '}
      <Link to={INSTITUTIONAL_PATHS.canteen} className="text-gold-ink underline underline-offset-4 hover:text-gold">
        canteen management
      </Link>
      . For younger children, explore{' '}
      <Link to={INSTITUTIONAL_PATHS.nursery} className="text-gold-ink underline underline-offset-4 hover:text-gold">
        nursery catering
      </Link>
      .
    </>
  ),
  problem: {
    "h2": "School catering Dubai, assessed for your school",
    "paragraphs": [
      "School lunch has to work for pupils, teaching staff and the people managing a busy timetable. A considered programme combines familiar dishes, suitable portions and variety across the week with an organised way to order, receive and serve every meal.",
      "Begin with the year groups, expected daily uptake and length of each lunch sitting. A school without a production kitchen may need delivered meals, while an existing servery may suit a staffed lunch line. A fully managed canteen requires a broader review of equipment, staffing and operating responsibilities.",
      "Share the school food policy, dietary requirements and approval process before the sample cycle is written. The proposed culinary partner must be assessed for the setting, including any required permissions and documentation. Menu examples support that discussion; the school approves the final programme before launch.",
      "The best brief also looks beyond the first week. Agree how attendance changes are reported, who approves substitutions and how feedback is gathered. These small operational decisions help the programme remain consistent through a busy term."
    ]
  },
  difference: {
    "h2": "Delivery, a lunch line or a managed canteen",
    "blocks": [
      {
        "title": "School lunch delivery",
        "body": "Meals are planned around the agreed delivery window and school receiving arrangements. Confirm how orders will be grouped, labelled and handed over for each year group."
      },
      {
        "title": "A staffed lunch line",
        "body": "Discuss service staff, holding equipment, replenishment and clearance. The timetable should give pupils enough time to choose, collect and enjoy their meal."
      },
      {
        "title": "A managed canteen",
        "body": "A wider operating proposal can include the kitchen, service counter, staffing and menu cycle. Ordering or payment systems are assessed alongside the food operation."
      },
      {
        "title": "Menus reviewed with the school",
        "body": "Use the current school policy and applicable requirements to guide the cycle. Identify the person responsible for approving dishes and any later substitutions."
      },
      {
        "title": "Clear dietary information",
        "body": "Document ingredient and dietary information for the agreed menu. Specific allergy requests require an assessment of preparation and service conditions before accommodation is confirmed."
      },
      {
        "title": "A considered introduction",
        "body": "Discuss a tasting and trial service with school leadership. Review portion sizes, queue times, pupil feedback and the handover process before expanding the programme."
      }
    ]
  },
  table: {
    label: 'FORMATS',
    h2: 'School catering Dubai: three service arrangements',
    intro: 'Pick the format before you shortlist anyone. The quote is different for each.',
    columns: ['Format', 'What it is', 'Who it suits'],
    rows: [
      ['Delivered meal programme', 'Hot and cold packed by year group, laid out in your hall', 'Schools without a production kitchen'],
      ['Staffed lunch line', 'People, holding equipment, labelled service', 'Halls that already have a servery'],
      ['Managed canteen', 'Fit-out, staff, cycle, optional cashless', 'Schools ready to outsource the room: see canteen management'],
    ],
    note: 'We do not publish a from-price per child. Roll, format and diet list move the number. 5% VAT is its own line.',
  },
  compliance: {
    "h2": "Documentation and responsibilities to confirm",
    "intro": "Before a school catering service is agreed, review the proposed culinary partner and the requirements for your site with the responsible management team.",
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
        "item": "School food policy and approvals",
        "who": "School management and proposed provider",
        "see": "Current requirements, menu approval and any applicable supplier registration"
      },
      {
        "item": "Pupil dietary requirements",
        "who": "School designated contact",
        "see": "Agreed information-sharing, meal identification and escalation process"
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
    h2: 'A clear review process for the school team',
    steps: [
      'Send the school, roll, year groups, and whether you want delivery or a line.',
      'We typically reply within 15 minutes during business hours if a kitchen can cover the week.',
      'Site walk, sample cycle, allergen matrix, itemised proposal with VAT as its own line.',
      'Tasting. Trial sitting. Written booking for the term or the year.',
    ],
  },
  quoting: {
    "h2": "How a school catering quote is built",
    "paragraphs": [
      "Share the school location, year groups, expected meal orders and operating days. The proposal considers the menu cycle, portion requirements, dietary arrangements and whether the school needs delivery, service staff or a managed facility.",
      "Confirm the number of lunch sittings and what equipment the school provides. Ordering deadlines, term dates and handling of pupil absences should be clear, alongside the price for any agreed extras.",
      "Review the full term budget as well as the meal price. Food, staff, transport and equipment are identified in the proposal, with 5% VAT shown separately. A trial can help validate the practical assumptions before a longer arrangement is agreed."
    ]
  },
  trust: {
    "h2": "Plan the wider school food service",
    "items": [
      {
        "title": "Canteen management",
        "body": "Operating support for schools with a dedicated kitchen or dining facility.",
        "href": "/canteen-management-dubai",
        "linkLabel": "Canteen management"
      },
      {
        "title": "Nursery catering",
        "body": "Separate planning for younger children and early-years meal routines.",
        "href": "/nursery-catering-dubai",
        "linkLabel": "Nursery catering"
      },
      {
        "title": "Dietary requirements",
        "body": "Discuss ingredients, preparation arrangements and the information needed for an assessment.",
        "href": "/allergy-safe-catering-dubai",
        "linkLabel": "Allergy requirements"
      },
      {
        "title": "Culinary partner selection",
        "body": "Understand the checks used when matching culinary professionals to a brief.",
        "href": "/how-we-vet-our-chefs",
        "linkLabel": "How we vet chefs"
      }
    ]
  },
  faqH2: 'What should I know before booking school catering in Dubai?',
  faqs: [
    {
      "q": "Do you deliver lunches or operate the canteen?",
      "a": "Both formats can be assessed. Delivered meals suit a school arranging its own service, while a staffed lunch line or managed canteen includes additional operational responsibilities. The proposal confirms which arrangement is suitable."
    },
    {
      "q": "How are school menus developed?",
      "a": "The school shares the year groups, meal schedule, dietary policy and approval requirements. A sample cycle is then reviewed for variety, portions and service practicality before the final menu is agreed."
    },
    {
      "q": "How are allergies considered?",
      "a": "Provide the school requirements through the designated contact before menu approval. Ingredients, preparation conditions, labelling and handover arrangements must be assessed. A dish label alone does not guarantee an absence of cross-contact."
    },
    {
      "q": "Which documents should procurement review?",
      "a": "Check the current documentation of the proposed provider against the school requirements, including relevant kitchen approvals, food safety arrangements and any required supplier registrations. Confirm these before the service begins."
    },
    {
      "q": "Can we arrange a tasting or trial?",
      "a": "Discuss a tasting with the school team and a trial service where useful. A trial provides a practical way to review portions, collection times, queue flow and feedback before agreeing a longer programme."
    },
    {
      "q": "How does this relate to canteen management?",
      "a": "[School catering](/school-catering-dubai) focuses on the meal programme and lunch service. [Canteen management](/canteen-management-dubai) covers the wider operation of a dedicated facility, including agreed staffing and equipment responsibilities."
    }
  ],
  locationTitle: 'School catering across Dubai',
  locationSubtitle: (
    <>
      Schools in{' '}
      <span>
        Arabian Ranches
      </span>
      ,{' '}
      <span>
        Dubai Hills
      </span>
      {' '}and{' '}
      <span>
        Jumeirah
      </span>
      .
    </>
  ),
  cta: {
    h2: 'Roll, format and days is enough to start',
    body: 'You do not need a finished cycle. We typically reply within 15 minutes during business hours.',
  },
}
