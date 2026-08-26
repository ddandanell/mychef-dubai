import {
  Briefcase,
  Cake,
  Flame,
  Gift,
  GlassWater,
  Heart,
  Home,
  Package,
  Plane,
  PartyPopper,
  Presentation,
  Salad,
  Sandwich,
  Ship,
  Truck,
  UtensilsCrossed,
  Users,
  Baby,
  Building2,
  Sparkles,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/** Path → icon for the four top-level clusters (used by the mobile accordion). */
export const NAV_CLUSTER_ICONS: Record<string, LucideIcon> = {
  // Catering — service formats
  '/catering-dubai': UtensilsCrossed,
  '/buffet-catering-dubai': Salad,
  '/canape-catering-dubai': Sandwich,
  '/live-cooking-stations-dubai': Flame,
  '/bbq-catering-dubai': Flame,
  '/grazing-table-dubai': GlassWater,
  '/drop-off-catering-dubai': Truck,
  // Catering — venues
  '/villas-private-residences': Home,
  '/yachts': Ship,
  '/private-jet-catering-dubai': Plane,
  // Private events
  '/birthday-catering-dubai': Cake,
  '/private-party-catering-dubai': PartyPopper,
  '/wedding-catering-dubai': Heart,
  '/baby-shower-catering-dubai': Baby,
  '/desert-dining-dubai': Flame,
  '/afternoon-tea-catering-dubai': GlassWater,
  '/events': Sparkles,
  // Corporate
  '/corporate': Briefcase,
  '/corporate-event-catering-dubai': PartyPopper,
  '/product-launch-catering-dubai': Presentation,
  '/gala-dinner-catering-dubai': Sparkles,
  '/office-catering-dubai': Building2,
  '/conference-catering-dubai': Presentation,
  '/exhibition-catering-dubai': Building2,
  '/staff-meals-catering-dubai': Users,
  // Packages
  '/catering-packages-dubai': Package,
  '/birthday-catering-package-dubai': Cake,
  '/family-feast-package-dubai': Home,
  '/corporate-dinner-package-dubai': Briefcase,
  '/date-night-package-dubai': Gift,
}
