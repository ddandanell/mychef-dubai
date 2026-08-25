/**
 * Card data for the two new hub pages and the package hub.
 *
 * Every description below is derived from the destination page's own meta
 * description — nothing about benefits, prices, guarantees or programme details
 * is invented here. If a destination page changes its offer, update it there and
 * mirror the wording here.
 *
 * None of these child pages appear in the global navigation. They are reached
 * through their hub only.
 */

export interface HubCard {
  title: string
  href: string
  description: string
}

/** /catering-packages-dubai — every package option in one place. */
export const PACKAGE_CARDS: HubCard[] = [
  {
    title: 'Birthday Catering Package',
    href: '/birthday-catering-package-dubai',
    description: 'A private chef birthday celebration for 8–12 guests, with a tailored menu, cake option and full service.',
  },
  {
    title: 'Corporate Dinner Package',
    href: '/corporate-dinner-package-dubai',
    description: 'Professional dinner catering for boardrooms and teams, sized for a smaller senior group.',
  },
  {
    title: 'Family Feast Package',
    href: '/family-feast-package-dubai',
    description: 'A relaxed sharing-style dinner built around family and friends at one table.',
  },
  {
    title: 'Date Night Package',
    href: '/date-night-package-dubai',
    description: 'An intimate three-course private chef dinner for two, cooked and served at home.',
  },
  {
    title: 'Private Jet Catering',
    href: '/private-jet-catering-dubai',
    description: 'In-flight catering prepared for private aviation, planned around departure timing and cabin service.',
  },
]

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
