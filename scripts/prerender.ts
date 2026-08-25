import type { AddressInfo } from "node:net"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import express from "express"
import type { Browser, Page } from "puppeteer"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const IS_VERCEL = Boolean(process.env.VERCEL)

const DIST_DIR = path.resolve(__dirname, "../dist")
const SITEMAP_PATH = path.resolve(__dirname, "../dist/sitemap.xml")
// Pristine copy of the Vite SPA shell. Routes are rendered against THIS, not against
// dist/index.html, which the "/" route overwrites part-way through the run.
const SHELL_PATH = path.resolve(__dirname, "../dist/.spa-shell.html")
const FALLBACK_SITEMAP_PATH = path.resolve(__dirname, "../public/sitemap.xml")

const CONCURRENCY = 10
const RENDER_TIMEOUT_MS = 30000
const NAVIGATION_TIMEOUT_MS = 60000

// --- Inline SEO payload (window.__SEO__) ------------------------------------
// HandoffPage fetches its copy in a useEffect, so on the client's first paint it
// renders nothing. Inlining the route's payload lets it seed synchronously and
// paint the same markup the prerender captured. Injected as a plain (non-module)
// <script>, so it runs before the deferred module entry sets up React.
const SEO_ROUTES: Record<string, string> = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../src/content/seo/routes.json"), "utf-8"),
)
const SEO_PAGES_DIR = path.resolve(__dirname, "../src/content/seo-pages")
const ROUTES_TSX = path.resolve(__dirname, "../src/routes.tsx")
const VERCEL_JSON = path.resolve(__dirname, "../vercel.json")

/** Static (non-parametric) paths declared in src/routes.tsx, keyed by whether HandoffPage renders them. */
function readRouteTable(): { paths: string[]; handoff: Set<string> } {
  const src = fs.readFileSync(ROUTES_TSX, "utf-8")
  const paths: string[] = []
  const handoff = new Set<string>()
  for (const m of src.matchAll(/\{\s*path:\s*"([^"]+)"\s*,\s*element:\s*<([A-Za-z0-9_]+)/g)) {
    const p = m[1]
    if (p.includes(":") || p.includes("*")) continue
    paths.push(p)
    if (m[2] === "HandoffPage") handoff.add(p)
  }
  return { paths, handoff }
}

const ROUTE_TABLE = readRouteTable()

/** Paths vercel.json 301s away. They must never be rendered — the redirect wins on Vercel, but a stale dist dir is still a smell. */
function redirectSources(): Set<string> {
  try {
    const cfg = JSON.parse(fs.readFileSync(VERCEL_JSON, "utf-8")) as { redirects?: { source: string }[] }
    return new Set((cfg.redirects ?? []).map((r) => r.source).filter((s) => !s.includes(":") && !s.includes("*")))
  } catch {
    return new Set()
  }
}

// Only HandoffPage routes seed from window.__SEO__ (commercial pages stopped
// rendering the digest on 2026-08-26), so only they get the inline payload.
// Everything else would just be ~10-15 KB of dead JSON per page.
function inlineSeoScript(route: string): string {
  if (!ROUTE_TABLE.handoff.has(route)) return ""
  const slug = SEO_ROUTES[route]
  if (!slug) return ""
  const file = path.join(SEO_PAGES_DIR, `${slug}.json`)
  if (!fs.existsSync(file)) return ""
  const full = JSON.parse(fs.readFileSync(file, "utf-8"))
  // Only the fields SeoContent/SeoHead read — keeps the inlined payload small.
  const data = {
    url: full.url,
    head: full.head,
    opening_paragraph: full.opening_paragraph,
    replace_in_block: full.replace_in_block,
    add_block: full.add_block,
  }
  const json = JSON.stringify({ path: route, data })
    .replace(/</g, "\\u003c")
    .replace(/[\u2028]/g, "\\u2028")
    .replace(/[\u2029]/g, "\\u2029")
  return `<script>window.__SEO__=${json}</script>`
}

// Routes that are deliberately SPA-only (vercel.json rewrites them to index.html).
const SPA_ONLY = new Set(["/inquiry", "/thank-you"])

/**
 * Return the normalized list of routes to prerender: every URL in sitemap.xml
 * PLUS every static route declared in src/routes.tsx (dynamic expansions such
 * as /locations/:slug only come from the sitemap). The union matters: noindex
 * pages (legal pages, the nested private-chef modules) are correctly absent
 * from the sitemap but must still ship as real HTML, and a sitemap-only source
 * silently turned them into the empty SPA shell.
 * Root route ("/") is always placed last so it does not overwrite
 * dist/index.html while other routes are still being rendered against the
 * SPA shell.
 */
function readRoutes(): string[] {
  const sitemapPath = fs.existsSync(SITEMAP_PATH)
    ? SITEMAP_PATH
    : FALLBACK_SITEMAP_PATH

  if (!fs.existsSync(sitemapPath)) {
    throw new Error(`sitemap.xml not found at ${SITEMAP_PATH} or ${FALLBACK_SITEMAP_PATH}`)
  }

  const sitemap = fs.readFileSync(sitemapPath, "utf-8")
  const fromSitemap = Array.from(sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)).map((match) => {
    const url = match[1].trim()
    const pathname = new URL(url).pathname
    return pathname === "/" ? "/" : pathname.replace(/\/$/, "")
  })

  const skip = redirectSources()
  const fromRoutes = ROUTE_TABLE.paths.filter((p) => !SPA_ONLY.has(p) && !skip.has(p))
  const extra = fromRoutes.filter((p) => !fromSitemap.includes(p))
  if (extra.length > 0) {
    console.log(`Prerendering ${extra.length} route(s) not in the sitemap (noindex/support pages): ${extra.join(", ")}`)
  }
  const dropped = fromSitemap.filter((p) => skip.has(p))
  if (dropped.length > 0) {
    console.warn(`WARNING: sitemap still lists redirected path(s), skipping: ${dropped.join(", ")}`)
  }

  // De-duplicate and sort root last
  const unique = Array.from(new Set([...fromSitemap.filter((p) => !skip.has(p)), ...extra]))
  return unique.sort((a, b) => (a === "/" ? 1 : b === "/" ? -1 : a.localeCompare(b)))
}

/**
 * Start a tiny static server over the dist directory with SPA fallback.
 */
async function startServer(): Promise<{ server: import("http").Server; url: string }> {
  // Snapshot the shell before anything can overwrite dist/index.html.
  // Always re-copy: a stale snapshot left by a cached build would silently
  // prerender every route against the previous deployment's shell.
  fs.copyFileSync(path.join(DIST_DIR, "index.html"), SHELL_PATH)

  const app = express()

  // Disable caching so Puppeteer always sees the latest files
  app.use((_, res, next) => {
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate")
    res.setHeader("Pragma", "no-cache")
    res.setHeader("Expires", "0")
    next()
  })

  app.use(express.static(DIST_DIR, { index: false, maxAge: 0 }))

  // SPA fallback: serve the pristine shell snapshot, never the live
  // dist/index.html — that file gets replaced by the prerendered "/" and would
  // otherwise leak the home page's markup into every route rendered after it.
  app.get("*", (_req, res) => {
    // dotfiles: "allow" is REQUIRED — the snapshot is called ".spa-shell.html"
    // and send/express default to dotfiles:"ignore", which 404s every route and
    // makes the whole prerender time out. This is what broke the build on bb0cb3a.
    res.sendFile(SHELL_PATH, {
      dotfiles: "allow",
      headers: { "Cache-Control": "no-store" },
    })
  })

  return new Promise((resolve, reject) => {
    const server = app.listen(0, "127.0.0.1", () => {
      const addr = server.address() as AddressInfo
      resolve({ server, url: `http://127.0.0.1:${addr.port}` })
    })
    server.on("error", reject)
  })
}

/**
 * Render a single route and write the resulting HTML to disk.
 */
/**
 * Launch a browser appropriate for the environment.
 * On Vercel builds we use @sparticuz/chromium, which ships a Chromium binary
 * compiled for Amazon Linux 2 / Lambda build containers. Locally we fall back
 * to the full puppeteer package so devs don't need to manage Chrome manually.
 */
async function launchBrowser(): Promise<Browser> {
  if (IS_VERCEL) {
    const chromium = await import("@sparticuz/chromium")
    const puppeteerCore = await import("puppeteer-core")
    return puppeteerCore.launch({
      args: chromium.default.args,
      executablePath: await chromium.default.executablePath(),
      headless: chromium.default.headless as "shell" | true,
    })
  }

  const puppeteer = await import("puppeteer")
  return puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  })
}

async function renderRoute(
  page: Page,
  baseUrl: string,
  route: string,
): Promise<{ route: string; outPath: string }> {
  const url = `${baseUrl}${route === "/" ? "/" : route}`

  await page.goto(url, {
    waitUntil: "networkidle0",
    timeout: NAVIGATION_TIMEOUT_MS,
  })

  // Wait for React to mount real content and for the document to carry
  // meaningful text. This guards against capturing the empty SPA shell.
  await page.waitForFunction(
    () => {
      const root = document.getElementById("root")
      const title = document.title || ""
      const bodyText = document.body ? document.body.innerText.trim() : ""
      return (
        root !== null &&
        root.childElementCount > 0 &&
        title.length > 5 &&
        bodyText.length > 200
      )
    },
    { timeout: RENDER_TIMEOUT_MS },
  )

  // Brief pause so GSAP / ScrollTrigger entrance animations can settle
  // before we snapshot the DOM. Without this, elements that animate in
  // (fade/slide) may still be at initial visibility states.
  await new Promise((resolve) => setTimeout(resolve, 500))

  let html = await page.content()

  // Puppeteer fires the fonts stylesheet's onload during prerender, flipping
  // media="print" -> media="all" and re-serializing it as render-blocking.
  // Reset it so the served HTML keeps the non-blocking load (onload re-applies it).
  html = html.replace(
    /(<link[^>]*fonts\.googleapis\.com[^>]*?)\smedia="all"/g,
    '$1 media="print"',
  )

  // Inline this route's SEO payload (HandoffPage routes only) so the client
  // paints without a fetch round-trip / rebuild. Placed just before </body>,
  // outside #root.
  const seoScript = inlineSeoScript(route)
  if (seoScript && html.includes("</body>")) {
    html = html.replace("</body>", `${seoScript}</body>`)
  }

  const outDir = route === "/" ? DIST_DIR : path.join(DIST_DIR, route)
  fs.mkdirSync(outDir, { recursive: true })

  const outPath = path.join(outDir, "index.html")
  // Atomic write so a partially-written file is never served
  const tmpPath = `${outPath}.tmp`
  fs.writeFileSync(tmpPath, html, "utf-8")
  fs.renameSync(tmpPath, outPath)

  return { route, outPath }
}

/**
 * Process routes with bounded concurrency.
 */
async function renderRoutes(
  browser: puppeteer.Browser,
  baseUrl: string,
  routes: string[],
): Promise<void> {
  let completed = 0
  const total = routes.length
  const queue = [...routes]

  async function worker(): Promise<void> {
    const page = await browser.newPage()
    try {
      while (queue.length > 0) {
        const route = queue.shift()!
        const result = await renderRoute(page, baseUrl, route)
        completed += 1
        console.log(`[${completed}/${total}] ${result.route} -> ${result.outPath}`)
      }
    } finally {
      await page.close()
    }
  }

  const workers = Array.from({ length: CONCURRENCY }, () => worker())
  await Promise.all(workers)
}

async function main(): Promise<void> {
  if (!fs.existsSync(DIST_DIR)) {
    throw new Error(`dist directory not found at ${DIST_DIR}. Run vite build first.`)
  }

  const routes = readRoutes()
  console.log(`Prerendering ${routes.length} routes from sitemap...`)

  const { server, url } = await startServer()

  const browser = await launchBrowser()

  try {
    await renderRoutes(browser, url, routes)
    // Catch-all rewrite must NOT serve dist/index.html — that file is the
    // prerendered homepage. Unknown extensionless paths get the original SPA
    // shell so React Router can show the real route or NotFound.
    const fallbackPath = path.join(DIST_DIR, "fallback.html")
    fs.copyFileSync(SHELL_PATH, fallbackPath)
    console.log(`SPA fallback -> ${fallbackPath}`)
    console.log("Prerender complete.")
  } finally {
    await browser.close()
    await new Promise<void>((resolve, reject) => {
      server.close((err) => (err ? reject(err) : resolve()))
    })
  }
}

main().catch((error) => {
  console.error("Prerender failed:", error)
  process.exit(1)
})
