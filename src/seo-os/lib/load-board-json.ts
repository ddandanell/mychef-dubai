/**
 * The OS only renders. Python writes JSON into public/seo/data.
 * Prefer that static file. /api/seo/control is a later live path.
 */

export { loadSeoJson as loadBoardJson, useSeoJson as useBoardJson } from "@/seo-os/lib/data"
export type { LoadState } from "@/seo-os/lib/data"

import { loadSeoJson } from "@/seo-os/lib/data"
import type { ControlFile } from "@/seo-os/lib/control"

export async function loadControl(): Promise<ControlFile> {
  try {
    return await loadSeoJson<ControlFile>("control")
  } catch {
    const response = await fetch("/api/seo/control", { cache: "no-store" })
    if (!response.ok) {
      throw new Error(`Could not load control (${response.status})`)
    }
    return response.json() as Promise<ControlFile>
  }
}
