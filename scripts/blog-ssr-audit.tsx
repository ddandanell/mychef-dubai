import { cloneElement } from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { PassThrough } from 'node:stream'
import { writeFileSync, mkdirSync, readFileSync } from 'node:fs'
import { MemoryRouter, Routes, Route, matchPath } from 'react-router'
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
  const extraPaths: string[] = process.env.BLOG_AUDIT_TARGETS ? JSON.parse(readFileSync(process.env.BLOG_AUDIT_TARGETS, 'utf8')) : []
  for (const path of extraPaths) {
    if (pages.some(page => page.path === path)) continue
    const route = routes.find(route => !route.path.includes('*') && matchPath(route.path, path))
    if (!route) throw new Error(`Unregistered blog destination: ${path}`)
    pages.push({ ...route, path })
  }
  mkdirSync(`${outputDir}/targets`, { recursive: true })
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
        <CateringHero/><Routes><Route path={routes.find(item => item.element === route.element)?.path || route.path} element={cloneElement(route.element, { initialData })}/></Routes><PrivateChefExpansion/><CateringExpansion/>
      </Layout></MemoryRouter></HelmetProvider>, { onAllReady() { stream.pipe(sink) }, onShellError: reject, onError: reject })
    })
    const head = ['title', 'meta', 'link', 'script'].map(key => context.helmet?.[key]?.toString() || '').join('')
    const name = route.path === '/blog' ? 'index' : route.path.startsWith('/blog/') && !route.path.startsWith('/blog/topic/') ? route.path.slice(6) : `targets/${encodeURIComponent(route.path)}`
    writeFileSync(`${outputDir}/${name}.html`, `<!DOCTYPE html><html lang="en"><head>${head}</head><body>${html}</body></html>`)
  }
  console.log(`Rendered ${pages.length} blog pages and requested destinations for image and link review.`)
}
audit().catch(error => { console.error(error); process.exitCode = 1 })
