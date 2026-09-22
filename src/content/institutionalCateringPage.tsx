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
    alt: 'Institutional catering Dubai: a calm service line being set, labelled trays, no devices on the food.',
    width: 1344,
    height: 752,
    subtitle:
      "Institutional catering in Dubai, with service proposals based on your setting, kitchen facilities and operational requirements. Discuss nursery, school, hospital or staff dining needs, with suitability and documentation assessed before confirmation.",
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
    { href: '#menu', label: 'Service options' },
    { href: '#compliance', label: 'Documentation' },
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
      alt: 'Chef and coordinator reviewing a kitchen pass before service in a Dubai institutional kitchen.',
      width: 1280,
      height: 720,
      caption: '',
    },
  },
  siloNote: (
    <>
      Explore institutional catering for nurseries, schools, hospitals and managed canteens. For regular cooking at home, explore{' '}
      <Link to="/private-chef-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
        private chef
      </Link>
      . For a one-off gathering, explore{' '}
      <Link to="/catering-dubai" className="text-gold-ink underline underline-offset-4 hover:text-gold">
        catering Dubai
      </Link>
      .
    </>
  ),
  problem: {
    "h2": "Institutional catering Dubai, planned around your organisation",
    "paragraphs": [
      "A successful institutional meal service brings together food, people and dependable daily routines. Nursery children, school pupils, hospital teams and employees use dining spaces differently. Their menus, portions, service windows and approval processes should reflect those differences from the first conversation.",
      "myCHEF helps define the brief and assess a suitable culinary arrangement around your site. Start with the number of meals, operating days and available facilities. Explain who receives the food, who approves menus and whether the requirement is delivery, a staffed service counter or a managed kitchen.",
      "The next step is a practical review of the proposed provider, documentation and responsibilities. Specialist dietary requirements, site policies and any necessary permissions are considered before a commitment is made. An itemised proposal then connects the menu and service plan to a clear commercial scope."
    ]
  },
  difference: {
    "h2": "Four settings, each with a considered service plan",
    "blocks": [
      {
        "title": "Nurseries",
        "body": "Age groups, portions, meal textures and handovers are discussed with the nursery team. The centre supplies its dietary policy and approval requirements before menus are agreed."
      },
      {
        "title": "Schools",
        "body": "Term dates, lunch sittings, year groups and meal ordering shape the programme. Discuss delivery, a staffed lunch line or a managed canteen according to the facilities available."
      },
      {
        "title": "Hospitals and clinics",
        "body": "Staff and visitor dining are assessed separately from patient meals. Any patient service requires the responsible clinical team to define and approve the dietary specifications."
      },
      {
        "title": "Staff canteens",
        "body": "Plan opening hours, kitchen operations, staffing and rotating menus around the workforce. The commercial proposal explains how the service will be funded and managed."
      },
      {
        "title": "Clear documentation",
        "body": "Review the proposed kitchen, food safety procedures and required approvals with your procurement team. Records should relate to the provider and service actually proposed."
      },
      {
        "title": "A practical site assessment",
        "body": "Access, preparation areas, storage and dining capacity help determine what can be delivered reliably. These details also make the quote more useful to compare."
      }
    ]
  },
  table: {
    "label": "SERVICE OPTIONS",
    "h2": "Find the right institutional service",
    "intro": "Choose the setting that matches your organisation, then share the facilities and daily meal requirements.",
    "columns": [
      "Setting",
      "Service",
      "Planning priority"
    ],
    "rows": [
      [
        "Early-years centre",
        "Nursery catering",
        "Age groups, meal routines and dietary policy"
      ],
      [
        "School",
        "School catering",
        "Year groups, term dates and lunch sittings"
      ],
      [
        "Hospital or clinic",
        "Hospital catering",
        "Staff dining scope and any separate clinical requirements"
      ],
      [
        "Workplace or campus",
        "Canteen management",
        "Operating hours, staffing and kitchen facilities"
      ]
    ]
  },
  compliance: {
    "h2": "Documentation and responsibilities to confirm",
    "intro": "Before a institutional service is agreed, review the proposed culinary partner and the requirements for your site with the responsible management team.",
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
        "item": "Insurance and contract scope",
        "who": "Procurement team",
        "see": "Required cover, exclusions and responsibilities in writing"
      }
    ],
    "note": "Required registrations, certifications and permissions are verified for the proposed provider and setting before confirmation. The proposal records the agreed scope and any conditions that must be met before service begins."
  },
  process: {
    "h2": "From the first brief to an agreed service",
    "steps": [
      "Share the setting, location, expected meal volumes and operating days.",
      "Discuss facilities, menus, dietary requirements and the proposed service model.",
      "Review the site, documentation and itemised proposal with the relevant decision-makers.",
      "Agree any tasting or trial, the launch schedule and the ongoing review process."
    ]
  },
  quoting: {
    "h2": "How an institutional catering quote is built",
    "paragraphs": [
      "Pricing follows the operational requirements of your organisation. Daily volumes, service hours, menu complexity, staffing and available equipment all influence the proposal. A delivered meal programme and a managed kitchen require different resources.",
      "The written quote identifies food, staff, equipment and delivery, with 5% VAT shown separately. Confirm ordering deadlines, changes in attendance and the duration of the agreement so your team can plan the ongoing budget."
    ]
  },
  trust: {
    "h2": "Explore the service for your setting",
    "items": [
      {
        "title": "Nursery catering",
        "body": "Meal plans and delivery arrangements for early-years settings.",
        "href": "/nursery-catering-dubai",
        "linkLabel": "Nursery catering Dubai"
      },
      {
        "title": "School catering",
        "body": "Lunch programmes, service formats and school procurement planning.",
        "href": "/school-catering-dubai",
        "linkLabel": "School catering Dubai"
      },
      {
        "title": "Hospital catering",
        "body": "Defined proposals for staff, visitor and clinically specified meal requirements.",
        "href": "/hospital-catering-dubai",
        "linkLabel": "Hospital catering Dubai"
      },
      {
        "title": "Canteen management",
        "body": "An operating plan for a dedicated staff dining facility.",
        "href": "/canteen-management-dubai",
        "linkLabel": "Canteen management Dubai"
      }
    ]
  },
  faqH2: 'What should I know before booking institutional catering in Dubai?',
  faqs: [
    {
      "q": "How does institutional catering differ from office catering?",
      "a": "Institutional catering considers the ongoing requirements of a school, nursery, hospital or managed canteen. [Office catering](/office-catering-dubai) is useful for workplace lunches, meetings and recurring deliveries where a dedicated food-service operation is not required."
    },
    {
      "q": "How is institutional catering priced?",
      "a": "The quote is based on the setting, meal volumes, operating days, menu and service responsibilities. Share the facilities and expected headcount so the proposal can show food, staffing, equipment, delivery and 5% VAT clearly."
    },
    {
      "q": "How are provider approvals checked?",
      "a": "Request current documentation for the proposed culinary partner and review it against the requirements of your organisation. Any required school-food registration, certification or site permission must be verified before service is confirmed."
    },
    {
      "q": "Which service should a school consider?",
      "a": "Explore [school catering](/school-catering-dubai) for meal programmes and lunch service. If you need a dedicated facility staffed and operated, include [canteen management](/canteen-management-dubai) in the discussion."
    }
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
