import type { AddressInfo } from "node:net"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import express from "express"
import puppeteer from "puppeteer"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const DIST_DIR = path.resolve(__dirname, "../dist")
const SITEMAP_PATH = path.resolve(__dirname, "../dist/sitemap.xml")
const FALLBACK_SITEMAP_PATH = path.resolve(__dirname, "../public/sitemap.xml")

const CONCURRENCY = 5
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
  const app = express()

  // Disable caching so Puppeteer always sees the latest files
  app.use((_, res, next) => {
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate")
    res.setHeader("Pragma", "no-cache")
    res.setHeader("Expires", "0")
    next()
  })

  app.use(express.static(DIST_DIR, { index: false, maxAge: 0 }))

  // SPA fallback: every unknown route serves dist/index.html
  app.get("*", (_req, res) => {
    res.sendFile(path.join(DIST_DIR, "index.html"), {
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
async function renderRoute(
  page: puppeteer.Page,
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

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  })

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
