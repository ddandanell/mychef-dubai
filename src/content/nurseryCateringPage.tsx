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
    alt: 'Nursery catering Dubai: a chef in a black jacket setting child-sized plates in a calm early-years dining room.',
    width: 1344,
    height: 752,
    subtitle:
      "Nursery catering in Dubai, with menus and service assessed around the children’s ages, dietary requirements and nursery facilities. We review the site, weekly schedule and documentation before preparing a proposal.",
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
  figures: {
    afterBrief: {
      src: '/images/nursery-catering-dubai-room.webp',
      alt: 'Early-years dining room in Dubai being set with child-sized tables before lunch.',
      width: 1280,
      height: 720,
      caption: '',
    },
    afterDifference: {
      src: '/images/nursery-catering-dubai-plating.webp',
      alt: 'Chefs plating small early-years portions in a Dubai kitchen, no children in the cook zone.',
      width: 1280,
      height: 720,
      caption: '',
    },
  },
  siloNote: (
    <>
      Plan nursery meals around the ages, timetable and dietary requirements of your centre. For older pupils, explore{' '}
      <Link to={INSTITUTIONAL_PATHS.school} className="text-gold-ink underline underline-offset-4 hover:text-gold">
        school catering
      </Link>
      . Compare other organisational services through{' '}
      <Link to={INSTITUTIONAL_PATHS.hub} className="text-gold-ink underline underline-offset-4 hover:text-gold">
        institutional catering Dubai
      </Link>
      .
    </>
  ),
  problem: {
    "h2": "Nursery catering Dubai, planned for early-years routines",
    "paragraphs": [
      "Nursery meals are part of a familiar daily routine. Children need time to settle, eat and explore different flavours, while the nursery team needs a dependable way to receive meals and understand exactly what has been ordered. The service should support both.",
      "Start with the ages, number of children and meal times at your centre. Explain whether lunch is included in the nursery fee, ordered separately or combined with parent-provided meals. Those arrangements affect ordering, labelling and communication with families.",
      "The nursery supplies its food policy and dietary requirements before menu development. Age-appropriate preparation, portions and textures are reviewed with the responsible nursery team. Any individual requirements that need specialist input should be agreed with the relevant professionals before the menu is confirmed.",
      "A written cycle helps staff and parents understand the meals planned for the week. Clear ordering deadlines, handover instructions and an agreed approach to substitutions make the service easier to manage. The proposed kitchen and required documentation are assessed for the centre before a contract is agreed."
    ]
  },
  difference: {
    "h2": "A thoughtful meal programme for your centre",
    "blocks": [
      {
        "title": "Menus shaped around the children",
        "body": "Share age groups and current meal routines so the sample cycle can be reviewed for suitable portions and preparation. Keep familiar choices alongside a considered variety of ingredients."
      },
      {
        "title": "Preparation and texture agreed in advance",
        "body": "The nursery team approves the preparation requirements for each age group. Any individual clinical or feeding requirements need the appropriate professional guidance and a confirmed service plan."
      },
      {
        "title": "Your allergy policy in the brief",
        "body": "Provide the current policy, including any restrictions on nuts or other ingredients. The proposed kitchen must assess whether its sourcing and preparation arrangements can meet those requirements."
      },
      {
        "title": "Halal menu requirements",
        "body": "Halal ingredients are the default for myCHEF nursery proposals. Include any specific supplier documentation or certification requirements in the initial brief so they can be reviewed."
      },
      {
        "title": "An organised delivery handover",
        "body": "Agree the receiving contact, delivery window and meal identification. The proposal should explain the handling information and checks the nursery needs when the order arrives."
      },
      {
        "title": "A clear commercial proposal",
        "body": "Daily numbers, operating days, menus, delivery and any staffing are considered together. Discuss a tasting or trial and review the itemised quote before committing to a term."
      }
    ]
  },
  table: {
    "label": "MENU PLANNING",
    "h2": "Build a nursery menu cycle together",
    "intro": "The examples below suggest a structure for discussion. The nursery team reviews ingredients, preparation, textures and portions before any dish is approved.",
    "columns": [
      "Meal element",
      "Example to discuss",
      "Detail to agree"
    ],
    "rows": [
      [
        "Main dish",
        "Chicken with rice and cooked vegetables",
        "Preparation and portions for each age group"
      ],
      [
        "Vegetarian option",
        "Lentil and vegetable dish",
        "Ingredients, texture and suitable accompaniment"
      ],
      [
        "Alternative main",
        "Fish with potato and cooked vegetables",
        "Ingredient review and age-appropriate preparation"
      ],
      [
        "Fruit or snack",
        "Prepared fruit or plain yoghurt",
        "Portion, preparation and dietary suitability"
      ],
      [
        "Weekly variety",
        "A rotating selection of approved dishes",
        "Ordering, substitutions and parent communication"
      ]
    ],
    "note": "These are menu ideas, not a prescribed feeding plan. The final cycle follows the centre requirements and the assessment of the proposed culinary partner."
  },
  compliance: {
    "h2": "Documentation and responsibilities to confirm",
    "intro": "Before a nursery catering service is agreed, review the proposed culinary partner and the requirements for your site with the responsible management team.",
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
        "item": "Nursery food and allergy policy",
        "who": "Nursery management",
        "see": "Current restrictions and the agreed preparation and handover requirements"
      },
      {
        "item": "Age groups and meal preparation",
        "who": "Nursery team and menu lead",
        "see": "Approved portions, textures and any individual instructions"
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
    h2: 'A clear process for the nursery management team',
    steps: [
      'Send the centre, enrolment, age bands, days, and whether lunch is inside the fee.',
      'We typically reply within 15 minutes during business hours if a kitchen and a chef can cover the week.',
      'A site walk and an itemised proposal: menu cycle, allergen matrix, delivery window, food, staff, van, VAT as separate lines.',
      'Tasting if the centre needs one. Then a written booking. The first week is run as a trial unless you ask otherwise.',
    ],
  },
  quoting: {
    "h2": "How a nursery catering quote is built",
    "paragraphs": [
      "Share the centre location, enrolment, age groups and service days, together with your meal schedule and dietary policy. An indicative spending range helps prioritise the proposal around your needs.",
      "Delivery access and the time children eat determine the practical handover window. Confirm whether the nursery needs lunch only or additional snacks, how staff meals are handled and when daily numbers become final.",
      "The itemised proposal identifies the agreed food, delivery, equipment and staffing, with 5% VAT separately stated. Review term dates, closure days and the process for changes so the arrangement remains clear for management and families."
    ]
  },
  trust: {
    "h2": "Useful support for nursery planning",
    "items": [
      {
        "title": "Culinary partner selection",
        "body": "Learn how culinary professionals are assessed and matched to a brief.",
        "href": "/how-we-vet-our-chefs",
        "linkLabel": "How we vet chefs"
      },
      {
        "title": "Halal catering",
        "body": "Share the menu and supplier documentation requirements for your centre.",
        "href": "/halal-catering-dubai",
        "linkLabel": "Halal catering"
      },
      {
        "title": "Allergy requirements",
        "body": "Review the information needed to assess ingredients and preparation conditions.",
        "href": "/allergy-safe-catering-dubai",
        "linkLabel": "Discuss allergy requirements"
      },
      {
        "title": "School catering",
        "body": "Explore a separate programme for older pupils and school lunch sittings.",
        "href": "/school-catering-dubai",
        "linkLabel": "School catering Dubai"
      }
    ]
  },
  faqH2: 'What should I know before booking nursery catering in Dubai?',
  faqs: [
    {
      "q": "Can meals be included in the nursery fee?",
      "a": "The nursery decides how families enrol and pay. Share whether meals are included, ordered separately or offered on selected days so the proposal can reflect the ordering and invoicing arrangement."
    },
    {
      "q": "How are nursery food allergies handled?",
      "a": "The centre provides its policy and dietary requirements through a designated contact. The proposed provider assesses ingredients, kitchen conditions, meal identification and handover. Accommodation is confirmed only after that review."
    },
    {
      "q": "Can you provide nut-free nursery meals?",
      "a": "Share the exact policy, including any requirements about ingredient traces and kitchen segregation. We must assess the proposed kitchen and supply arrangements before confirming whether the request can be met."
    },
    {
      "q": "How much do nursery meal plans cost?",
      "a": "The quote depends on age groups, daily numbers, menu requirements, service days and delivery arrangements. The proposal shows the agreed scope and 5% VAT separately so the centre can assess the full cost."
    },
    {
      "q": "How do we check supplier registration?",
      "a": "Request the current documents for the proposed provider and check them against the requirements for your centre. Any necessary education-supply approval or platform registration must be verified before service is confirmed."
    },
    {
      "q": "Can parents still provide meals on some days?",
      "a": "That depends on nursery policy. If a mixed arrangement is permitted, agree how orders are recorded and how the same food and allergy rules will be communicated to families and staff."
    },
    {
      "q": "Can we review a sample menu before booking?",
      "a": "Yes, discuss a sample cycle and any tasting or trial requirements during the assessment. The nursery team reviews the menu, portions, preparation and delivery process before approving the programme."
    }
  ],
  locationTitle: 'Nursery catering across Dubai',
  locationSubtitle: (
    <>
      Early-years centres in{' '}
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
      , and the rest of the city.
    </>
  ),
  cta: {
    h2: 'Enrolment, ages and days is enough to start',
    body: 'You do not need a finished menu. We typically reply within 15 minutes during business hours. The quote comes after we see the site.',
  },
}
