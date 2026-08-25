import {
  ShieldCheck,
  Handshake, BookOpen, MapPin, Phone, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { CONTACT_PATHS } from '@/content/contactNav'

/** Path → icon. Lives in its own module so the mega menu stays component-only (react-refresh). */
export const CONTACT_ICONS: Record<string, LucideIcon> = {
  [CONTACT_PATHS.contact]: Phone,
  [CONTACT_PATHS.locations]: MapPin,
  [CONTACT_PATHS.about]: Users,
  [CONTACT_PATHS.blog]: BookOpen,
  '/trust-and-programs': ShieldCheck,
  '/partners': Handshake,
}
