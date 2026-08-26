import type { VercelRequest, VercelResponse } from "@vercel/node"
import { GATE_COOKIE, gateToken, tokensMatch, readCookie } from "../lib/seo-gate"

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
