/**
 * Institutional catering cluster — nurseries, schools, hospitals, canteens.
 * New URLs. Do not nest under /catering-dubai/. Do not retarget household primaries.
 */

export const INSTITUTIONAL_ROOT = '/institutional-catering-dubai' as const

export const INSTITUTIONAL_PATHS = {
  hub: INSTITUTIONAL_ROOT,
  nursery: '/nursery-catering-dubai',
  school: '/school-catering-dubai',
  hospital: '/hospital-catering-dubai',
  canteen: '/canteen-management-dubai',
} as const

export const INSTITUTIONAL_WHATSAPP_NUMBER = '971551744849'

export function institutionalWhatsApp(path: string, brief: string) {
  const message = `Hi myCHEF Dubai, ${brief} (via mychef.ae${path})`
  return `https://wa.me/${INSTITUTIONAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
