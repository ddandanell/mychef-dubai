import { ChefHat, Gift, Heart, Sparkles, Sun, UtensilsCrossed } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { EXPERIENCES_PATHS } from '@/content/experiencesCluster'

/** Path → icon. Lives in its own module so the mega menu stays component-only (react-refresh). */
export const EXPERIENCES_ICONS: Record<string, LucideIcon> = {
  [EXPERIENCES_PATHS.hub]: Sparkles,
  [EXPERIENCES_PATHS.romantic]: Heart,
  [EXPERIENCES_PATHS.tasting]: UtensilsCrossed,
  [EXPERIENCES_PATHS.cookingClasses]: ChefHat,
  [EXPERIENCES_PATHS.desert]: Sun,
  [EXPERIENCES_PATHS.giftCards]: Gift,
}
