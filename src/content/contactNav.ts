/**
 * Contact nav group — existing URLs nested under Contact in the header.
 * Do not change these paths. Navigation grouping only; not an SEO cluster.
 */

export const CONTACT_PATHS = {
  contact: '/contact',
  locations: '/locations',
  about: '/about',
  blog: '/blog',
  trustAndPrograms: '/trust-and-programs',
  partners: '/partners',
} as const

export type ContactNavItem = {
  href: string
  label: string
  description: string
}

/** Compact mega + mobile list. Same shape as CLUSTER_NAV / CATERING_NAV. */
export const CONTACT_NAV = [
  {
    href: CONTACT_PATHS.contact,
    label: 'Contact',
    description: 'WhatsApp, phone, or a proposal',
  },
  {
    href: CONTACT_PATHS.locations,
    label: 'Locations',
    description: 'Where we cook and cater in Dubai',
  },
  {
    href: CONTACT_PATHS.about,
    label: 'About',
    description: 'Who we are and how we work',
  },
  {
    href: CONTACT_PATHS.trustAndPrograms,
    label: 'Trust and Programs',
    description: 'Standards, protection, membership and programmes',
  },
  {
    href: CONTACT_PATHS.partners,
    label: 'Partners',
    description: 'Concierge, planners, villas and yacht charters',
  },
  {
    href: CONTACT_PATHS.blog,
    label: 'Blog',
    description: 'Guides on dining and catering in Dubai',
  },
] as const

export const CONTACT_NAV_CHILDREN: ContactNavItem[] = CONTACT_NAV.map((item) => ({
  href: item.href,
  label: item.label,
  description: item.description,
}))

/** Pathnames that should gold-state the Contact nav item. */
export function contactNavActive(pathname: string) {
  const path = pathname.length > 1 && pathname.endsWith('/') ? pathname.replace(/\/+$/, '') : pathname
  if (path === CONTACT_PATHS.contact || path === CONTACT_PATHS.about) return true
  if (path === CONTACT_PATHS.locations || path.startsWith(`${CONTACT_PATHS.locations}/`)) return true
  if (path === CONTACT_PATHS.blog || path.startsWith(`${CONTACT_PATHS.blog}/`)) return true
  if (path === CONTACT_PATHS.trustAndPrograms) return true
  if (path === CONTACT_PATHS.partners || path.startsWith(`${CONTACT_PATHS.partners}/`)) return true
  return false
}
