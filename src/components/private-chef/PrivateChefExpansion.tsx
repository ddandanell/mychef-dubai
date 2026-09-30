import { lazyPreloadable, type PreloadableComponent } from '@/lib/lazyPreloadable'
import { useLocation } from 'react-router'
import type { DetailPage } from './PrivateChefPlanningArticle'

// Each page gets a separate content chunk; unrelated routes do not download the
// expanded guides. The enclosing route Suspense also waits during prerendering.
const loaders = import.meta.glob<DetailPage>('../../content/private-chef-expansion/*.json', { import: 'default' })
const pageComponents: Record<string, PreloadableComponent> = {}
for (const [file, load] of Object.entries(loaders)) {
  // About now owns a complete, bespoke story and exclusive photographs.
  if (file.endsWith('/routes.json') || file.endsWith('/about.json')) continue
  const path = '/' + file.split('/').pop()!.replace(/\.json$/, '').replaceAll('__', '/')
  pageComponents[path] = lazyPreloadable(async () => {
    const [page, { default: ExpansionArticle }] = await Promise.all([
      load(),
      import('./PrivateChefPlanningArticle'),
    ])
    return { default: () => <ExpansionArticle page={page}/> }
  })
}

export function preloadPrivateChefExpansion(pathname: string): Promise<void> {
  return pageComponents[pathname]?.preload() ?? Promise.resolve()
}

export default function PrivateChefExpansion() {
  const { pathname } = useLocation()
  const Page = pageComponents[pathname.replace(/\/$/, '')]
  if (!Page) return null
  if (['/full-time-private-chef-dubai', '/our-chefs'].includes(pathname)) return <details className="hc-guide" open={typeof window !== 'undefined' && window.location.hash.startsWith('#chef-')}><summary>More about planning your household chef arrangement</summary><Page/></details>
  return <Page/>
}
