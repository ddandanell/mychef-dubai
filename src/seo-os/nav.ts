import type { LucideIcon } from "lucide-react"
import {
  Activity,
  BarChart3,
  Database,
  GitCompare,
  Globe,
  History,
  Inbox,
  KeyRound,
  LayoutDashboard,
  LineChart,
  Link2,
  ListTodo,
  MessageSquare,
  Network,
  Plug,
  Search,
  Settings,
  Sparkles,
  TrendingUp,
} from "lucide-react"

export type SeoNavItem = {
  href: string
  label: string
  description: string
  icon: LucideIcon
  file?: string
}

export type SeoNavGroup = {
  title: string
  items: SeoNavItem[]
}

export const SEO_NAV: SeoNavGroup[] = [
  {
    title: "Overview",
    items: [
      { href: "/seo", label: "Board", description: "Every URL and its locked keywords", icon: LayoutDashboard, file: "data" },
      { href: "/seo/status", label: "Status", description: "Is every source connected and feeding data", icon: Activity, file: "status" },
    ],
  },
  {
    title: "Search",
    items: [
      { href: "/seo/keywords", label: "Keywords", description: "One row per keyword, with its score", icon: KeyRound, file: "keywords" },
      { href: "/seo/demand", label: "Demand", description: "What each page's keyword set is worth", icon: TrendingUp, file: "demand" },
      { href: "/seo/research", label: "Research", description: "Volume, difficulty, intent, position", icon: Search, file: "report" },
      { href: "/seo/gaps", label: "Gaps", description: "What competitors cover and we do not", icon: GitCompare, file: "gaps" },
    ],
  },
  {
    title: "Site",
    items: [
      { href: "/seo/architecture", label: "Architecture", description: "The sitemap as an authority map", icon: Network, file: "architecture" },
      { href: "/seo/links", label: "Links", description: "Internal link profile per URL", icon: Link2, file: "links" },
    ],
  },
  {
    title: "Execution",
    items: [
      { href: "/seo/queue", label: "Queue", description: "Ranked proposals, not applied", icon: ListTodo, file: "proposals" },
      { href: "/seo/backlog", label: "Backlog", description: "Phrases no page owns yet", icon: Inbox, file: "backlog" },
      { href: "/seo/actions", label: "Agent Runs", description: "Every change the agent made, newest first", icon: History, file: "actions" },
    ],
  },
  {
    title: "AI",
    items: [
      { href: "/seo/ai-visibility", label: "AI Visibility", description: "Who Claude names for buyer prompts", icon: Sparkles, file: "ai-visibility" },
      { href: "/seo/ask", label: "Analyst", description: "Put a question to the read-only SEO analyst", icon: MessageSquare },
    ],
  },
  {
    title: "Data",
    items: [
      { href: "/seo/gsc", label: "Search Console", description: "Impressions, clicks, position", icon: LineChart },
      { href: "/seo/analytics", label: "Analytics", description: "Vercel, first-party, GA4", icon: BarChart3 },
      { href: "/seo/semrush", label: "Semrush", description: "Historic export, API paused", icon: Database },
      { href: "/seo/dataforseo", label: "DataForSEO", description: "Volume, SERPs, difficulty", icon: Globe },
    ],
  },
  {
    title: "Integrations",
    items: [
      { href: "/seo/connections", label: "Connections", description: "Keys, freshness, what still needs access", icon: Plug },
    ],
  },
  {
    title: "Settings",
    items: [
      { href: "/seo/settings", label: "Settings", description: "Density, exports, how a run works", icon: Settings },
    ],
  },
]

export const SEO_PAGES = SEO_NAV.flatMap((group) => group.items)

export function seoPageForPath(pathname: string) {
  const clean = pathname.replace(/\/$/, "") || "/seo"
  return SEO_PAGES.find((item) => item.href === clean) ?? SEO_PAGES[0]
}
