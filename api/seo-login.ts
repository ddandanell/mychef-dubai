import type { VercelRequest, VercelResponse } from "@vercel/node"

// Deliberately duplicated from lib/seo-gate.ts rather than imported.
//
// Every .ts file in api/ is compiled as its own serverless function, and a relative import is
// not resolved inside that bundle: the build passes, the deployment reports READY, and the
// function answers 500 FUNCTION_INVOCATION_FAILED on every request. This endpoint did exactly
// that from the moment it shipped. middleware.ts is built by a different pipeline and keeps
// importing the shared file, so lib/seo-gate.ts stays where it is — these three helpers are
// small and stable enough that one copy in the function is the cheaper half of the trade.
// scripts/verify-api-functions.py fails the build if a relative import comes back.
const GATE_COOKIE = "seo_gate"
const GATE_PAYLOAD = "mychef-seo-gate-v1"

async function gateToken(secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  )
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(GATE_PAYLOAD))
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("")
}

function tokensMatch(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  let out = 0
  for (let i = 0; i < a.length; i += 1) out |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return out === 0
}

function readCookie(header: string | null, name: string): string | null {
  if (!header) return null
  for (const part of header.split(";")) {
    const [rawKey, ...rest] = part.trim().split("=")
    if (rawKey === name) return rest.join("=")
  }
  return null
}

function cookieHeader(value: string, maxAge: number): string {
  const secure = process.env.VERCEL ? "; Secure" : ""
  return `${GATE_COOKIE}=${value}; HttpOnly; Path=/; Max-Age=${maxAge}; SameSite=Lax${secure}`
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const secret = process.env.SEO_PASSWORD
  if (!secret) {
    res.status(503).json({ error: "SEO_PASSWORD is not configured." })
    return
  }

  const expected = await gateToken(secret)

  if (req.method === "GET") {
    const got = readCookie(req.headers.cookie ?? null, GATE_COOKIE)
    if (got && tokensMatch(got, expected)) {
      res.status(204).end()
      return
    }
    res.status(401).end()
    return
  }

  if (req.method === "DELETE") {
    res.setHeader("Set-Cookie", cookieHeader("", 0))
    res.status(204).end()
    return
  }

  if (req.method !== "POST") {
    res.status(405).end()
    return
  }

  const raw = req.body
  const body = typeof raw === "string" ? (JSON.parse(raw) as { password?: string }) : raw
  const password = typeof body?.password === "string" ? body.password : ""
  if (!password || !tokensMatch(password, secret)) {
    res.status(401).json({ error: "Wrong password." })
    return
  }

  res.setHeader("Set-Cookie", cookieHeader(expected, 60 * 60 * 24 * 7))
  res.status(204).end()
}
