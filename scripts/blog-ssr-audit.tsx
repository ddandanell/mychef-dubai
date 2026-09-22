import { cloneElement } from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { PassThrough } from 'node:stream'
import { writeFileSync, mkdirSync } from 'node:fs'
import { MemoryRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import Layout from '../src/components/Layout'
import CateringExpansion, { CateringHero } from '../src/components/catering/CateringEditorial'
import PrivateChefExpansion from '../src/components/private-chef/PrivateChefExpansion'
import { routes, preloadRoute } from '../src/routes'
import { getSeoContent } from '../src/content/seo'

async function audit() {
  const outputDir = process.env.BLOG_AUDIT_DIR || '.blog-audit/rendered'
  mkdirSync(outputDir, { recursive: true })
  const pages = routes.filter(route => route.path === '/blog' || (route.path.startsWith('/blog/') && !route.path.includes(':')))
  for (const route of pages) {
    await preloadRoute(route.path)
    const initialData = await getSeoContent(route.path)
    const context: { helmet?: Record<string, { toString(): string }> } = {}
    const html = await new Promise<string>((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error(`Render timeout: ${route.path}`)), 15000)
      let output = ''
      const sink = new PassThrough()
      sink.on('data', buffer => output += buffer)
      sink.on('end', () => { clearTimeout(timeout); resolve(output) })
      sink.on('error', reject)
      const stream = renderToPipeableStream(<HelmetProvider context={context}><MemoryRouter initialEntries={[route.path]}><Layout>
        <CateringHero/>{cloneElement(route.element, { initialData })}<PrivateChefExpansion/><CateringExpansion/>
      </Layout></MemoryRouter></HelmetProvider>, { onAllReady() { stream.pipe(sink) }, onShellError: reject, onError: reject })
    })
    const head = ['title', 'meta', 'link', 'script'].map(key => context.helmet?.[key]?.toString() || '').join('')
    writeFileSync(`${outputDir}/${route.path === '/blog' ? 'index' : route.path.slice(6)}.html`, `<!DOCTYPE html><html lang="en"><head>${head}</head><body>${html}</body></html>`)
  }
  console.log(`Rendered ${pages.length} complete blog pages for image and link review.`)
}
audit().catch(error => { console.error(error); process.exitCode = 1 })
