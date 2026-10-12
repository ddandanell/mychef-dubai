import { pageAuthorityFor } from '@/content/pageAuthority'
import type { NavGroup } from '@/content/navClusters'
import { CORPORATE_MENUS_PATH, DINNER_MENUS_PATH } from './catalogue'

export type MenuCatalogue = 'corporate' | 'dinner'

export const MENU_CATALOGUES = {
  corporate: {
    href: CORPORATE_MENUS_PATH,
    label: 'Corporate menus & prices',
    description: 'Breakfasts, buffets, canapés and live stations. Compare dishes, guest tiers and inclusions.',
    image: '/images/menu-catalogues/corporate/hero-corporate-buffet.webp',
    imageAlt: 'A buffet table set for a catered event',
    eyebrow: 'Corporate & event catering',
    action: 'View corporate menus & prices',
  },
  dinner: {
    href: DINNER_MENUS_PATH,
    label: 'Private dinner menus & prices',
    description: 'Explore signature dinners with every course and price shown. Choose a menu for your evening.',
    image: '/images/menu-catalogues/dinner/hero-finedining.webp',
    imageAlt: 'A table set for a private fine dining dinner',
    eyebrow: 'Chef-led private dining',
    action: 'View dinner menus & prices',
  },
} as const

export const MENU_NAV_GROUPS: NavGroup[] = [
  {
    heading: 'Corporate & events',
    items: [{ href: CORPORATE_MENUS_PATH, label: 'Corporate Menus & Prices', description: 'Breakfast, buffet, canapés and live stations' }],
  },
  {
    heading: 'Private dinners',
    items: [{ href: DINNER_MENUS_PATH, label: 'Dinner Menus & Prices', description: 'Signature menus, every course and price' }],
  },
]
export const MENU_NAV_CHILDREN = MENU_NAV_GROUPS.flatMap(group => group.items)

const bothPages = new Set([
  '/', '/menus', '/catering-dubai', '/catering-packages-dubai', '/catering-cost-calculator-dubai',
  '/dubai-catering-prices-guide', '/dubai-event-catering-price-guide-2026', '/cuisines-dubai',
  '/events', '/yachts', '/villas-private-residences', '/villa-catering-ideas-dubai',
  '/private-party-catering-dubai', '/birthday-catering-dubai', '/birthday-catering-package-dubai',
  '/engagement-catering-dubai', '/family-feast-package-dubai', '/buffet-vs-plated-dubai',
  '/italian-catering-dubai', '/mediterranean-catering-dubai', '/asian-catering-dubai',
  '/blog/topic/menus-dietary',
])
const dinnerPages = new Set(['/private-chef-dubai', '/private-chef-dubai/pricing'])
// These services need their own menus, rather than the published event/dinner collections.
const separateService = /(?:cooking-class|institutional|nursery|school|hospital|canteen|staff-meals)/
const cateringTopic = /(?:catering|caterer|buffet|canape|brunch|breakfast|grazing|food-trends|menus|cuisines|family-feast)/

/** Follow the existing service ownership, including articles added by the publishing pipeline. */
export function menuCataloguesFor(pathname: string): MenuCatalogue[] {
  const path = pathname.split(/[?#]/)[0].replace(/\/+$/, '') || '/'
  if (path === CORPORATE_MENUS_PATH || path === DINNER_MENUS_PATH || separateService.test(path)) return []
  if (bothPages.has(path)) return ['corporate', 'dinner']
  if (dinnerPages.has(path)) return ['dinner']
  const page = pageAuthorityFor(path)
  if (!page || page.purpose === 'utility') return []
  if (page.money_page === '/corporate') return ['corporate']
  if (page.money_page === '/luxury-dining-experiences') return ['dinner']
  if (page.money_page === '/yachts') return ['corporate', 'dinner']
  if (page.money_page === '/events') {
    return /(?:dinner-party|private-chef-birthday)/.test(path) ? ['dinner'] : ['corporate']
  }
  if (page.money_page === '/catering-dubai' && cateringTopic.test(path)) return ['corporate']
  return []
}
