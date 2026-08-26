/**
 * Card data for the two new hub pages and the package hub.
 *
 * Descriptions come from the destination page. Package prices, guest counts and
 * included lines on PRIMARY_PACKAGES copy the published package pages and
 * starterPackages — nothing is invented here. If a destination page changes,
 * update it there and mirror the wording here.
 *
 * None of these child pages appear in the global navigation. They are reached
 * through their hub only.
 */

export interface HubCard {
  title: string
  href: string
  description: string
}

/** pages["/catering-packages-dubai"].on_page */
export const PACKAGE_HUB_SEO = {
  title: 'Catering Packages Dubai | myCHEF',
  description:
    'Catering Packages Dubai with a vetted myCHEF team. Menus, service and clear-down handled so you stay a guest at your own table.',
  h1: 'Catering Packages Dubai',
  canonical: '/catering-packages-dubai',
} as const

/** User/uplink lock: Luxury catering in Dubai. */
export const PACKAGE_UPLINK = {
  href: '/catering-dubai',
  label: 'Luxury catering in Dubai',
} as const

/** pages["/catering-packages-dubai"].internal_linking.siblings — render exactly. */
export const PACKAGE_SIBLING_LINKS = [
  { href: '/birthday-catering-package-dubai', label: 'Birthday catering packages' },
  { href: '/family-feast-package-dubai', label: 'Family catering' },
  { href: '/date-night-package-dubai', label: 'Date night package' },
  { href: '/dubai-catering-prices-guide', label: 'Catering prices' },
] as const

/** Featured children that are not priced packages. Anchors from STANDARD. */
export const PACKAGE_FEATURED_EXTRAS = [
  { href: '/gift-cards', label: 'Book an evening in their name' },
  { href: '/founding-customer-offer', label: 'Mychef founding customer offer' },
] as const

/** pages["/catering-packages-dubai"].internal_linking.locations — three areas + index. */
export const PACKAGE_LOCATION_LINKS = [
  { href: '/locations/palm-jumeirah', label: 'Palm Jumeirah' },
  { href: '/locations/dubai-marina', label: 'Dubai Marina' },
  { href: '/locations/downtown-dubai', label: 'Downtown Dubai' },
  { href: '/locations', label: 'Areas we serve' },
] as const

export type PrimaryPackage = {
  occasion: 'date-night' | 'family-dinner' | 'birthday' | 'corporate'
  title: string
  href: string
  guests: string
  price: string
  perPerson: string
  description: string
  included: string
}

/**
 * Published catering packages only.
 * Prices, guest counts and included lines match starterPackages + each package page.
 * Titles use STANDARD featured_children anchors.
 */
export const PRIMARY_PACKAGES: PrimaryPackage[] = [
  {
    occasion: 'date-night',
    title: 'Date night package',
    href: '/date-night-package-dubai',
    guests: '2',
    price: '1,200',
    perPerson: 'AED 600',
    description: 'An intimate three-course private chef dinner for two, cooked and served at home.',
    included: 'Bespoke 3-course menu for two, private chef, table service, and full cleanup.',
  },
  {
    occasion: 'family-dinner',
    title: 'Family catering',
    href: '/family-feast-package-dubai',
    guests: '6–8',
    price: '2,400',
    perPerson: 'AED 300–400',
    description: 'A relaxed sharing-style dinner built around family and friends at one table.',
    included:
      'Generous sharing-style menu, premium ingredients, chef and service support for a relaxed family dinner.',
  },
  {
    occasion: 'birthday',
    title: 'Birthday catering packages',
    href: '/birthday-catering-package-dubai',
    guests: '8–12',
    price: '3,600',
    perPerson: 'AED 300–450',
    description:
      'A private chef birthday celebration for 8–12 guests, with a tailored menu, cake option and full service.',
    included: 'Celebration menu with canapés or starter, main course, dessert, cake option, and service staff.',
  },
  {
    occasion: 'corporate',
    title: 'Corporate dinner package',
    href: '/corporate-dinner-package-dubai',
    guests: '10–15',
    price: '4,500',
    perPerson: 'AED 300–450',
    description: 'Professional dinner catering for boardrooms and teams, sized for a smaller senior group.',
    included:
      'Professional multi-course or buffet menu, service staff, VAT invoice, and presentation for board or team dinners.',
  },
]

/** /catering-packages-dubai — the four published packages. */
export const PACKAGE_CARDS: HubCard[] = PRIMARY_PACKAGES.map((pkg) => ({
  title: pkg.title,
  href: pkg.href,
  description: pkg.description,
}))

/** /trust-and-programs — standards, protection and the programmes myCHEF runs. */
export const TRUST_PROGRAM_CARDS: HubCard[] = [
  {
    title: 'myCHEF Certified',
    href: '/mychef-certified',
    description: 'The audition, background-check, food-safety and halal competency standards a chef meets before reaching your table.',
  },
  {
    title: 'Quality Guarantee',
    href: '/quality-guarantee-dubai',
    description: 'Vetted chefs, backup cover, written briefings and how a booking is resolved fairly if it falls short.',
  },
  {
    title: 'Booking Protection',
    href: '/booking-protection-insurance',
    description: 'How a booking is protected: backup chefs, liability insurance, cancellation terms, deposits and complaint handling.',
  },
  {
    title: 'myCHEF Membership',
    href: '/mychef-membership',
    description: 'Priority booking, quarterly dining credits, member pricing and concierge support, set out on the membership page.',
  },
  {
    title: 'Loyalty Programme',
    href: '/loyalty-programme',
    description: 'How repeat bookings with myCHEF turn into credits and experiences over time.',
  },
  {
    title: 'Referral Programme',
    href: '/referral-programme',
    description: 'Refer someone to myCHEF and both of you receive credit toward a private chef or catering booking.',
  },
  {
    title: 'Founding Customer Offer',
    href: '/founding-customer-offer',
    description: 'The early-member offer for customers joining myCHEF Dubai first, with its terms on the page.',
  },
  {
    title: 'Become a myCHEF Chef',
    href: '/become-a-mychef',
    description: 'For experienced chefs, pastry chefs and event chefs who want to join the Dubai network.',
  },
  {
    title: 'Partner With Us',
    href: '/partner-with-us',
    description: 'For businesses offering private chef and catering to villa guests, charter clients, weddings and corporate contacts.',
  },
  {
    title: 'Influencer Partnerships',
    href: '/influencer-partnerships',
    description: 'Content collaborations and private chef experiences with creators across the UAE.',
  },
]

/** /partners — the four partner categories myCHEF works with. */
export const PARTNER_CARDS: HubCard[] = [
  {
    title: 'Concierge Services',
    href: '/partners/concierge-services-dubai',
    description: 'For concierge teams offering their clients private chef and luxury catering experiences across Dubai.',
  },
  {
    title: 'Event Planners',
    href: '/partners/event-planners-dubai',
    description: 'Catering and private chef service for planners who need the food side handled reliably.',
  },
  {
    title: 'Villa Rental Partners',
    href: '/partners/villa-rentals-dubai',
    description: 'In-villa private chef and catering for rental guests, added to the stay rather than sourced separately.',
  },
  {
    title: 'Yacht Charter Partners',
    href: '/partners/yacht-charters-dubai',
    description: 'Private chef and catering on charters across Dubai Marina, Palm Jumeirah and beyond.',
  },
]

export const trustAndProgramsSeo = {
  title: 'Trust & Programs | Standards, Protection and Membership | myCHEF',
  description:
    'How myCHEF works behind the booking: chef certification, quality guarantee, booking protection, membership, loyalty and referral programmes, and how to join us.',
  h1: 'Trust and Programs',
  canonical: '/trust-and-programs',
} as const

export const partnersSeo = {
  title: 'Partners | Concierge, Event Planners, Villas & Yachts | myCHEF',
  description:
    'myCHEF partners with concierge services, event planners, villa rentals and yacht charters in Dubai to provide private chef and catering for their clients.',
  h1: 'Partner Categories',
  canonical: '/partners',
} as const
