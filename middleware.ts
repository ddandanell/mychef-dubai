/**
 * Password gate for the board.
 *
 * HTML at /seo and /seo/* is public so the landing and login can render.
 * JSON at /seo/data/* and the analyst at /api/ask require the gate cookie
 * (or the old Basic header, if a client still sends it).
 *
 * Never send WWW-Authenticate — that pops the browser dialog over the designed login.
 * Password lives in SEO_PASSWORD. Never in code.
 */
import { GATE_COOKIE, gateToken, tokensMatch, readCookie } from "./lib/seo-gate"

export const config = { matcher: ["/seo", "/seo/:path*", "/api/ask"] }

function isPublicPath(pathname: string): boolean {
  if (pathname === "/seo" || pathname === "/seo/" || pathname === "/seo/login") return true
  if (pathname.startsWith("/seo/data/") || pathname === "/api/ask") return false
  if (pathname.startsWith("/seo/")) return true
  return false
}

async function authorized(request: Request, secret: string): Promise<boolean> {
  const expected = await gateToken(secret)
  const cookie = readCookie(request.headers.get("cookie"), GATE_COOKIE)
  if (cookie && tokensMatch(cookie, expected)) return true

  const header = request.headers.get("authorization") || ""
  if (header.startsWith("Basic ")) {
    try {
      const decoded = atob(header.slice(6))
      const password = decoded.slice(decoded.indexOf(":") + 1)
      if (tokensMatch(password, secret)) return true
    } catch {
      return false
    }
  }
  return false
}

export default async function middleware(request: Request): Promise<Response | undefined> {
  const expected = process.env.SEO_PASSWORD
  if (!expected) {
    return new Response("SEO pages are not configured (SEO_PASSWORD missing).", { status: 503 })
  }

  const pathname = new URL(request.url).pathname
  if (isPublicPath(pathname)) return undefined
  if (await authorized(request, expected)) return undefined

  return new Response(JSON.stringify({ error: "Authentication required" }), {
    status: 401,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  })
}
