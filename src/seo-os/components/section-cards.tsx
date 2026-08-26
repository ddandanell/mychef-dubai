import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export type MetricCard = {
  label: string
  value: string
  hint?: string
}

export function SectionCards({ items }: { items: MetricCard[] }) {
  if (!items.length) return null
  return (
    <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 xl:grid-cols-4 lg:px-6">
      {items.map((item) => (
        <Card key={item.label} className="gap-3 py-4 shadow-xs">
          <CardHeader>
            <CardDescription>{item.label}</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums">
              {item.value}
            </CardTitle>
          </CardHeader>
          {item.hint ? (
            <CardFooter className="text-sm text-muted-foreground">{item.hint}</CardFooter>
          ) : null}
        </Card>
      ))}
    </div>
  )
}
