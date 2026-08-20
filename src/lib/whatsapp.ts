export const WHATSAPP_NUMBER = '971551744849'

export const DEFAULT_WHATSAPP_MESSAGE = "Hi myCHEF Dubai, I'd like to request a proposal"

export function buildWhatsAppLink(
  message: string,
  {
    source = 'mychef.ae',
    medium = 'sticky_bar',
    campaign = 'mobile',
  }: { source?: string; medium?: string; campaign?: string } = {}
): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}&utm_source=${encodeURIComponent(source)}&utm_medium=${encodeURIComponent(medium)}&utm_campaign=${encodeURIComponent(campaign)}`
}
