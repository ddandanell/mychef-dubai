import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const TONES: Record<string, string> = {
  ok: "border-transparent bg-emerald-100 text-emerald-900",
  connected: "border-transparent bg-emerald-100 text-emerald-900",
  healthy: "border-transparent bg-emerald-100 text-emerald-900",
  live: "border-transparent bg-emerald-100 text-emerald-900",
  done: "border-transparent bg-emerald-100 text-emerald-900",
  warn: "border-transparent bg-amber-100 text-amber-950",
  review: "border-transparent bg-amber-100 text-amber-950",
  stale: "border-transparent bg-amber-100 text-amber-950",
  bad: "border-transparent bg-red-100 text-red-900",
  error: "border-transparent bg-red-100 text-red-900",
  high: "border-transparent bg-red-100 text-red-900",
  off: "border-transparent bg-muted text-muted-foreground",
  low: "border-transparent bg-muted text-muted-foreground",
  medium: "border-transparent bg-amber-100 text-amber-950",
  l2: "border-transparent bg-emerald-100 text-emerald-900",
  l3: "border-transparent bg-amber-100 text-amber-950",
  l4: "border-transparent bg-red-100 text-red-900",
}

export function StatusPill({
  value,
  className,
}: {
  value: unknown
  className?: string
}) {
  const raw = value == null || value === "" ? "—" : String(value)
  const tone = TONES[raw.toLowerCase()] ?? ""
  const label = raw.replaceAll("_", " ")
  return (
    <Badge variant="outline" className={cn("font-normal", tone, className)}>
      {label}
    </Badge>
  )
}
