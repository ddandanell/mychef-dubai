import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { sourceTone, type ControlSource } from "@/seo-os/lib/control"

export function SourceClock({ source }: { source: ControlSource }) {
  const tone = sourceTone(source)
  const label = tone === "ok" ? "ok" : tone === "stale" ? "stale" : "error"
  const variant = tone === "ok" ? "secondary" : tone === "stale" ? "outline" : "destructive"

  return (
    <Card>
      <CardHeader className="gap-1">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-sm">{source.service}</CardTitle>
          <Badge variant={variant}>{label}</Badge>
        </div>
        <CardDescription>{source.detail ?? source.status}</CardDescription>
      </CardHeader>
      <CardContent>
        <Tooltip>
          <TooltipTrigger asChild>
            <p className="text-muted-foreground text-xs">
              last success {source.last_success ?? "never"}
            </p>
          </TooltipTrigger>
          <TooltipContent>
            {source.error ?? source.checked_at ?? "No successful pull recorded."}
          </TooltipContent>
        </Tooltip>
      </CardContent>
    </Card>
  )
}
