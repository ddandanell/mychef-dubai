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
    alt: 'Hospital catering Dubai: staff cafeteria with a dressed servery, labelled hot line, no devices on the tables.',
    width: 1344,
    height: 752,
    subtitle:
      "Hospital catering in Dubai begins with a detailed assessment of the site and service requirements. Staff and visitor dining can be discussed first; patient meals and therapeutic diets require confirmation of the appropriate clinical brief, facilities and approvals before any commitment.",
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
  figures: {
    afterBrief: {
      src: '/images/hospital-catering-dubai-cafeteria.webp',
      alt: 'Staff cafeteria in a Dubai hospital with a chef on the servery and colleagues eating.',
      width: 1280,
      height: 720,
      caption: '',
    },
    afterDifference: {
      src: '/images/hospital-catering-dubai-trays.webp',
      alt: 'Chef checking colour-coded diet trays on a trolley in a Dubai hospital kitchen.',
      width: 1280,
      height: 720,
      caption: '',
    },
  },
  siloNote: (
    <>
      Share the staff, visitor or patient meal requirements of your facility. For a dedicated staff dining operation, explore{' '}
      <Link to={INSTITUTIONAL_PATHS.canteen} className="text-gold-ink underline underline-offset-4 hover:text-gold">
        canteen management
      </Link>
      .
    </>
  ),
  problem: {
    "h2": "Hospital catering Dubai for clearly defined service needs",
    "paragraphs": [
      "Hospital catering begins with a precise service brief. A staff cafeteria, visitor dining area and patient meal programme serve different needs and require separate planning. Clear responsibilities allow procurement, facilities and clinical teams to review the proposal against the right criteria.",
      "Staff dining can be planned around shift patterns, meal breaks and the available kitchen or servery. Visitor catering requires its own opening hours, menu and collection arrangements. Each should have a defined menu cycle, dietary information and service plan.",
      "Patient meals require the responsible clinical team to specify and approve the diets, textures and service requirements. The proposed culinary partner must demonstrate suitability for that scope before a commitment is made. Menu development and operational planning follow the approved brief rather than assumptions about a diagnosis.",
      "Share the facility, intended diners, daily meal volumes and documentation requirements. A site assessment and itemised proposal help establish the practical scope, including staffing, equipment, transport and the review process before launch."
    ]
  },
  difference: {
    "h2": "Separate plans for staff, visitors and patients",
    "blocks": [
      {
        "title": "Staff dining across shifts",
        "body": "Record when day and night teams can take their breaks. The proposal should explain the meal windows, expected volumes and service arrangements for each shift."
      },
      {
        "title": "Visitor dining",
        "body": "Assess the dining space, opening hours and menu according to visitor needs and facility policy. Define payment, collection and clearance responsibilities."
      },
      {
        "title": "Clinically specified patient meals",
        "body": "The hospital owns the clinical specifications and approval process. Any request for therapeutic or texture-modified meals requires a documented assessment before it can be accepted."
      },
      {
        "title": "Dietary information and identification",
        "body": "Agree the ingredient information, labels and handover method required by the facility. Patient meal identification follows the hospital-approved process."
      },
      {
        "title": "Reliable service windows",
        "body": "Delivery, receiving and meal service must fit the site routine. Confirm the contact responsible for delays, substitutions and any change to the agreed schedule."
      },
      {
        "title": "Procurement documentation",
        "body": "Review relevant provider approvals, food safety arrangements, staffing and insurance. The contract records the scope the partner has been assessed to deliver."
      }
    ]
  },
  table: {
    "label": "SERVICE BRIEF",
    "h2": "Define the meal service before developing menus",
    "intro": "Use the facility requirements to build the specification. Any clinical diet or texture is defined and approved by the responsible healthcare team.",
    "columns": [
      "Service",
      "Planning information",
      "Approval responsibility"
    ],
    "rows": [
      [
        "Staff cafeteria",
        "Shift patterns, expected meals and service hours",
        "Facilities and procurement team"
      ],
      [
        "Visitor dining",
        "Opening hours, access and menu scope",
        "Facility management"
      ],
      [
        "Patient meal programme",
        "Prescribed requirements, meal identification and ward schedule",
        "Responsible clinical and operational teams"
      ],
      [
        "Therapeutic diets",
        "Written, individual clinical specifications",
        "Responsible clinical or dietetic team"
      ],
      [
        "Texture-modified meals",
        "Approved preparation specifications and identification",
        "Responsible clinical or dietetic team"
      ]
    ],
    "note": "Clinical requirements are supplied by the hospital. Service suitability and responsibilities are confirmed before any patient meal arrangement is agreed."
  },
  compliance: {
    "h2": "Documentation and responsibilities to confirm",
    "intro": "Before a hospital catering service is agreed, review the proposed culinary partner and the requirements for your site with the responsible management team.",
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
        "item": "Clinical scope, if patient meals are requested",
        "who": "Responsible hospital clinical team",
        "see": "Approved specifications, provider assessment and sign-off process"
      },
      {
        "item": "Meal identification and handover",
        "who": "Hospital operations lead",
        "see": "Facility-approved labels, receiving checks and escalation contacts"
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
    "h2": "A practical process for procurement review",
    "steps": [
      "Share the facility, intended diners, meal volumes and operating hours.",
      "Review facilities, documentation and any clinical requirements with the responsible teams.",
      "Assess the proposed service and itemised quotation, including staffing and handover responsibilities.",
      "Agree the relevant trial, approvals and launch plan before service starts."
    ]
  },
  quoting: {
    "h2": "How a hospital catering quote is built",
    "paragraphs": [
      "Staff and visitor dining are quoted around meal volumes, operating hours, menus and facility arrangements. A patient meal request requires a separate approved specification before suitability or pricing can be confirmed.",
      "The proposal identifies food, staff, equipment and transport, with 5% VAT separately stated. Discuss shift coverage, ordering deadlines and how variations in daily volume will be managed.",
      "Procurement should review the operating responsibilities alongside the price. Include the documentation, trial arrangements and reporting expected from the proposed provider so the agreement is specific enough to assess and manage."
    ]
  },
  trust: {
    "h2": "Related planning for your facility",
    "items": [
      {
        "title": "Canteen management",
        "body": "Consider a dedicated operating plan for the staff dining facility.",
        "href": "/canteen-management-dubai",
        "linkLabel": "Canteen management"
      },
      {
        "title": "Culinary partner selection",
        "body": "Understand the matching and assessment process for culinary professionals.",
        "href": "/how-we-vet-our-chefs",
        "linkLabel": "How we vet chefs"
      },
      {
        "title": "Halal catering",
        "body": "Include menu and supplier documentation requirements in the brief.",
        "href": "/halal-catering-dubai",
        "linkLabel": "Halal catering"
      },
      {
        "title": "Institutional catering",
        "body": "Compare service arrangements across different organisational settings.",
        "href": "/institutional-catering-dubai",
        "linkLabel": "Institutional catering"
      }
    ]
  },
  faqH2: 'What should I know before booking hospital catering in Dubai?',
  faqs: [
    {
      "q": "Can staff dining and patient meals be included in one request?",
      "a": "They can be discussed together, but the scopes must remain clearly defined. Staff dining is assessed as a food-service operation. Patient meals require the responsible clinical team to specify and approve the requirements and assess provider suitability."
    },
    {
      "q": "How are certifications verified?",
      "a": "Request current documents for the proposed culinary partner and review them against hospital procurement requirements. Any required certification or approved-provider status must be verified before a contract is confirmed."
    },
    {
      "q": "Can therapeutic or texture-modified meals be considered?",
      "a": "Share the hospital-approved specifications and required clinical oversight. The proposed partner must be assessed against those requirements before the service can be accepted; dietary details are not inferred from a condition name."
    },
    {
      "q": "Can you assess a clinic dining service?",
      "a": "Share the intended users, opening hours, facilities and meal volumes. A staff or visitor service can then be reviewed against the clinic requirements, with any patient-related food request considered separately."
    },
    {
      "q": "Who approves patient menus?",
      "a": "The responsible hospital clinical or dietetic team defines and approves the clinical requirements. The service proposal must name the relevant approval and operational responsibilities."
    },
    {
      "q": "How are delivery and handover planned?",
      "a": "Agree the receiving point, authorised contact, delivery windows and required checks with hospital operations. The proposal records transport and holding arrangements, together with the process for reporting any deviation."
    }
  ],
  locationTitle: 'Hospital and clinic catering across Dubai',
  locationSubtitle: (
    <>
      Staff dining and clinic cafés in{' '}
      <span>
        Downtown Dubai
      </span>
      ,{' '}
      <span>
        Business Bay
      </span>
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
