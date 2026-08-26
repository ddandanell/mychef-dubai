import { Badge } from "@/components/ui/badge"

const VERDICTS = ["lift", "flat", "drop", "too_soon", "confounded"] as const

export function ExperimentVerdict({ value }: { value?: string | null }) {
  const raw = (value ?? "too_soon").toLowerCase()
  const known = VERDICTS.includes(raw as (typeof VERDICTS)[number])
  const variant = raw === "lift" ? "default" : raw === "drop" || raw === "confounded" ? "destructive" : "secondary"
  return <Badge variant={known ? variant : "outline"}>{known ? raw.replaceAll("_", " ") : raw}</Badge>
}
