import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function HeartbeatBanner({
  banner,
  stale,
}: {
  banner?: string | null
  stale: boolean
}) {
  if (!banner && !stale) return null
  return (
    <Alert variant="destructive">
      <AlertTitle>{stale ? "Stale source" : "Needs attention"}</AlertTitle>
      <AlertDescription>{banner ?? "The loop has not written a fresh heartbeat."}</AlertDescription>
    </Alert>
  )
}
