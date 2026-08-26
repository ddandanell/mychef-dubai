import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { stringifyCell } from "@/seo-os/lib/format"

function Field({ label, value }: { label: string; value: unknown }) {
  if (value == null || value === "") return null
  if (Array.isArray(value)) {
    return (
      <div className="flex flex-col gap-2">
        <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide">{label}</p>
        {value.every((item) => typeof item !== "object") ? (
          <div className="flex flex-wrap gap-1.5">
            {value.map((item, i) => (
              <Badge key={`${label}-${i}`} variant="secondary">
                {String(item)}
              </Badge>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {value.map((item, i) => (
              <div key={`${label}-${i}`} className="rounded-lg border p-3 text-sm">
                {typeof item === "object" && item ? (
                  Object.entries(item as Record<string, unknown>).map(([k, v]) => (
                    <p key={k}>
                      <span className="text-muted-foreground">{k}: </span>
                      {stringifyCell(v)}
                    </p>
                  ))
                ) : (
                  stringifyCell(item)
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
  if (typeof value === "object") {
    return (
      <div className="flex flex-col gap-2">
        <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide">{label}</p>
        <div className="rounded-lg border p-3 text-sm">
          {Object.entries(value as Record<string, unknown>).map(([k, v]) => (
            <p key={k}>
              <span className="text-muted-foreground">{k}: </span>
              {stringifyCell(v)}
            </p>
          ))}
        </div>
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-1">
      <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide">{label}</p>
      <p className="text-sm break-words">{String(value)}</p>
    </div>
  )
}

export function InspectorSheet({
  row,
  title,
  onClose,
}: {
  row: Record<string, unknown> | null
  title?: string
  onClose: () => void
}) {
  const heading =
    title ||
    (row && (row.url || row.keyword || row.kw || row.name || row.header)
      ? String(row.url || row.keyword || row.kw || row.name || row.header)
      : "Inspector")

  return (
    <Sheet open={Boolean(row)} onOpenChange={(open) => !open && onClose()}>
      <SheetContent side="right" className="flex w-full flex-col sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="font-mono text-base">{heading}</SheetTitle>
          <SheetDescription>Record from the current board file.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 pb-6">
          {row
            ? Object.entries(row).map(([key, value], i) => (
                <div key={key} className="flex flex-col gap-4">
                  {i > 0 ? <Separator /> : null}
                  <Field label={key.replace(/_/g, " ")} value={value} />
                </div>
              ))
            : null}
        </div>
      </SheetContent>
    </Sheet>
  )
}
