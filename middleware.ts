/**
 * Vercel Routing Middleware — password gate for the SEO research pages at /seo/*.
 *
 * The pages are static HTML copied from docs/seo/keyword-map by docs/seo/keyword-map/publish.sh.
 * They are noindex, disallowed in robots.txt and never linked from the site. The password is the
 * SEO_PASSWORD environment variable (set with: vercel env add SEO_PASSWORD production) — never in code.
 * Any username is accepted; the browser's Basic Auth prompt is the "login".
 */
export const config = { matcher: ['/seo', '/seo/:path*'] }

export default function middleware(request: Request): Response | undefined {
  const expected = process.env.SEO_PASSWORD
  if (!expected) return new Response('SEO pages are not configured (SEO_PASSWORD missing).', { status: 503 })
  const header = request.headers.get('authorization') || ''
  if (header.startsWith('Basic ')) {
    try {
      const decoded = atob(header.slice(6))
      const password = decoded.slice(decoded.indexOf(':') + 1)
      if (password === expected) return undefined // continue to the static file
    } catch {
      // fall through to the challenge
    }
  }
  return new Response('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="myCHEF SEO", charset="UTF-8"', 'Cache-Control': 'no-store' },
  })
}
