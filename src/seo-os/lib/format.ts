export function fmtNum(value: unknown): string {
  if (value == null || value === "") return "—"
  const n = typeof value === "number" ? value : Number(value)
  if (Number.isFinite(n)) return n.toLocaleString("en-US")
  return String(value)
}

export function fmtScore(value: unknown): string {
  if (value == null || value === "") return "—"
  const n = typeof value === "number" ? value : Number(value)
  if (!Number.isFinite(n)) return String(value)
  return Number.isInteger(n) ? String(n) : n.toFixed(1)
}

export function asRecord(value: unknown): Record<string, unknown> {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value as Record<string, unknown>
  }
  return {}
}

export function flattenUnknown(value: unknown): unknown[] {
  if (Array.isArray(value)) return value
  if (value && typeof value === "object") {
    const record = value as Record<string, unknown>
    for (const key of ["rows", "pages", "profiles", "proposals", "issues", "silos"]) {
      const inner = record[key]
      if (Array.isArray(inner)) return inner
      if (inner && typeof inner === "object" && !Array.isArray(inner)) {
        return Object.values(inner as Record<string, unknown>).flatMap((item) =>
          Array.isArray(item) ? item : [item],
        )
      }
    }
  }
  return []
}

export function stringifyCell(value: unknown): string {
  if (value == null || value === "") return ""
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return String(value)
  }
  if (Array.isArray(value)) {
    if (value.every((item) => typeof item !== "object")) return value.map(String).join(", ")
    return `${value.length} items`
  }
  return JSON.stringify(value)
}

export function downloadJson(filename: string, payload: unknown) {
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = filename.endsWith(".json") ? filename : `${filename}.json`
  a.click()
  URL.revokeObjectURL(url)
}
