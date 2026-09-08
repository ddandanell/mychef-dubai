import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const TONES: Record<string, string> = {
  ok: "border-transparent bg-secondary text-secondary-foreground",
  connected: "border-transparent bg-secondary text-secondary-foreground",
  healthy: "border-transparent bg-secondary text-secondary-foreground",
  live: "border-transparent bg-secondary text-secondary-foreground",
  done: "border-transparent bg-secondary text-secondary-foreground",
  accepted: "border-transparent bg-secondary text-secondary-foreground",
  fixed: "border-transparent bg-secondary text-secondary-foreground",
  lift: "border-transparent bg-secondary text-secondary-foreground",
  won: "border-transparent bg-secondary text-secondary-foreground",
  improved: "border-transparent bg-secondary text-secondary-foreground",
  open: "border-transparent bg-accent text-accent-foreground",
  proposed: "border-transparent bg-accent text-accent-foreground",
  fail: "border-transparent bg-destructive/20 text-destructive-foreground",
  pass: "border-transparent bg-secondary text-secondary-foreground",
  blocked: "border-transparent bg-accent text-accent-foreground",
  household: "border-transparent bg-secondary text-secondary-foreground",
  event_host: "border-transparent bg-accent text-accent-foreground",
  planner: "border-transparent bg-muted text-muted-foreground",
  ctr_ok: "border-transparent bg-secondary text-secondary-foreground",
  too_few_impressions: "border-transparent bg-muted text-muted-foreground",
  snippet_test: "border-transparent bg-accent text-accent-foreground",
  new: "border-transparent bg-accent text-accent-foreground",
  too_soon: "border-transparent bg-accent text-accent-foreground",
  flat: "border-transparent bg-muted text-muted-foreground",
  rejected: "border-transparent bg-muted text-muted-foreground",
  warn: "border-transparent bg-accent text-accent-foreground",
  review: "border-transparent bg-accent text-accent-foreground",
  stale: "border-transparent bg-accent text-accent-foreground",
  bad: "border-transparent bg-destructive/20 text-destructive-foreground",
  error: "border-transparent bg-destructive/20 text-destructive-foreground",
  high: "border-transparent bg-destructive/20 text-destructive-foreground",
  drop: "border-transparent bg-destructive/20 text-destructive-foreground",
  lost: "border-transparent bg-destructive/20 text-destructive-foreground",
  confounded: "border-transparent bg-destructive/20 text-destructive-foreground",
  regressed: "border-transparent bg-destructive/20 text-destructive-foreground",
  off: "border-transparent bg-muted text-muted-foreground",
  low: "border-transparent bg-muted text-muted-foreground",
  medium: "border-transparent bg-accent text-accent-foreground",
  l2: "border-transparent bg-secondary text-secondary-foreground",
  l3: "border-transparent bg-accent text-accent-foreground",
  l4: "border-transparent bg-destructive/20 text-destructive-foreground",
}

export function StatusPill({
  value,
  tone,
  className,
}: {
  value: unknown
  tone?: "ok" | "warn" | "bad" | "off"
  className?: string
}) {
  const raw = value == null || value === "" ? "—" : String(value)
  const color = TONES[tone ?? raw.toLowerCase()] ?? ""
  const label = raw.replaceAll("_", " ")
  return (
    <Badge variant="outline" className={cn("font-normal", color, className)}>
      {label}
    </Badge>
  )
}
