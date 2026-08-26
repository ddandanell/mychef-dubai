/**
 * Vercel Routing Middleware — password gate for the board at /seo/* and its analyst at /api/ask.
 *
 * The board is the React OS at /seo, fed by JSON from docs/seo/keyword-map/publish.sh.
 * They are noindex, disallowed in robots.txt and never linked from the site. The password is the
 * SEO_PASSWORD environment variable (set with: vercel env add SEO_PASSWORD production) — never in code.
 * Any username is accepted; the browser's Basic Auth prompt is the "login".
 */
// /api/ask reads the whole SEO database and costs money per question, so it sits behind the
// same password as the pages. /api/e is deliberately NOT here: it is the public tracking beacon.
export const config = { matcher: ['/seo', '/seo/:path*', '/api/ask'] }

export default function middleware(request: Request): Response | undefined {
  const expected = process.env.SEO_PASSWORD
  if (!expected) return new Response('SEO pages are not configured (SEO_PASSWORD missing).', { status: 503 })
  const header = request.headers.get('authorization') || ''
  if (header.startsWith('Basic ')) {
    try {
      const decoded = atob(header.slice(6))
      const password = decoded.slice(decoded.indexOf(':') + 1)
      if (password === expected) return undefined // continue to the static file or the analyst
    } catch {
      // fall through to the challenge
    }
  }
  return new Response('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="myCHEF SEO", charset="UTF-8"', 'Cache-Control': 'no-store' },
  })
}
