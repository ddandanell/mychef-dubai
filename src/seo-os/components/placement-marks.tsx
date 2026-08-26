import { cn } from "@/lib/utils"
import { PLACE_MARKS, type PlaceMap } from "@/seo-os/lib/board-model"

export function PlacementMarks({
  place,
  size = "md",
}: {
  place?: PlaceMap | null
  size?: "sm" | "md"
}) {
  return (
    <div className="flex flex-wrap gap-1" aria-label="On-page placement">
      {PLACE_MARKS.map((mark) => {
        const on = Boolean(place?.[mark.key])
        return (
          <span
            key={mark.key}
            title={`${mark.label}${on ? " — present" : " — missing"}`}
            className={cn(
              "inline-flex items-center justify-center rounded-md border font-mono font-medium",
              size === "sm" ? "min-w-7 px-1.5 text-[10px] leading-5" : "min-w-8 px-1.5 text-xs leading-6",
              on
                ? "border-primary/20 bg-primary text-primary-foreground"
                : "border-border text-muted-foreground",
            )}
          >
            {mark.short}
          </span>
        )
      })}
    </div>
  )
}
