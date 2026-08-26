import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NumberTicker } from "@/components/magicui/number-ticker"

export function KpiCard({
  label,
  value,
  hint,
  delay = 0,
}: {
  label: string
  value: number
  hint: string
  delay?: number
}) {
  return (
    <Card>
      <CardHeader className="gap-1">
        <CardDescription>{label}</CardDescription>
        <CardTitle className="text-3xl">
          <NumberTicker value={value} delay={delay} />
        </CardTitle>
      </CardHeader>
      <CardContent className="text-muted-foreground text-sm">{hint}</CardContent>
    </Card>
  )
}
