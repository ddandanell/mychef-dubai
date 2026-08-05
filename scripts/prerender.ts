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

/**
 * Read sitemap.xml and return a normalized list of routes.
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
  const routes = Array.from(sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)).map((match) => {
    const url = match[1].trim()
    const pathname = new URL(url).pathname
    return pathname === "/" ? "/" : pathname.replace(/\/$/, "")
  })

  // De-duplicate and sort root last
  const unique = Array.from(new Set(routes))
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

  const html = await page.content()

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
