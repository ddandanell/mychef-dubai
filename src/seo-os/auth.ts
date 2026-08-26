const STORAGE = "seo-gate"

function isJsonApi(response: Response): boolean {
  const type = response.headers.get("content-type") || ""
  if (!type) return response.status === 204
  if (type.includes("application/json")) return true
  if (type.includes("text/html") || type.includes("javascript") || type.includes("ecmascript")) return false
  return response.status === 204
}

export async function seoSession(): Promise<boolean> {
  if (import.meta.env.DEV && sessionStorage.getItem(STORAGE) === "ok") return true
  try {
    const response = await fetch("/api/seo-login", { method: "GET", credentials: "include" })
    return response.ok && isJsonApi(response)
  } catch {
    return false
  }
}

export async function seoLogin(password: string): Promise<{ ok: boolean; error?: string }> {
  try {
    const response = await fetch("/api/seo-login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    })
    if (response.ok && isJsonApi(response)) {
      if (import.meta.env.DEV) sessionStorage.setItem(STORAGE, "ok")
      return { ok: true }
    }
    if (import.meta.env.DEV && (!isJsonApi(response) || response.status === 404 || response.status === 503)) {
      sessionStorage.setItem(STORAGE, "ok")
      return { ok: true }
    }
    if (response.status === 401) return { ok: false, error: "Wrong password." }
    return { ok: false, error: "Could not reach the gate." }
  } catch {
    if (import.meta.env.DEV) {
      sessionStorage.setItem(STORAGE, "ok")
      return { ok: true }
    }
    return { ok: false, error: "Could not reach the gate." }
  }
}
