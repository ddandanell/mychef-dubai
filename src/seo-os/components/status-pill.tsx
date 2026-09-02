import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const TONES: Record<string, string> = {
  ok: "border-transparent bg-secondary text-secondary-foreground",
  connected: "border-transparent bg-secondary text-secondary-foreground",
  healthy: "border-transparent bg-secondary text-secondary-foreground",
  live: "border-transparent bg-secondary text-secondary-foreground",
  done: "border-transparent bg-secondary text-secondary-foreground",
  accepted: "border-transparent bg-secondary text-secondary-foreground",
  open: "border-transparent bg-accent text-accent-foreground",
  rejected: "border-transparent bg-muted text-muted-foreground",
  warn: "border-transparent bg-accent text-accent-foreground",
  review: "border-transparent bg-accent text-accent-foreground",
  stale: "border-transparent bg-accent text-accent-foreground",
  bad: "border-transparent bg-destructive/20 text-destructive-foreground",
  error: "border-transparent bg-destructive/20 text-destructive-foreground",
  high: "border-transparent bg-destructive/20 text-destructive-foreground",
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
