import { type ReactNode } from 'react'
import { lazyPreloadable, type PreloadableComponent } from '@/lib/lazyPreloadable'
import { useLocation } from 'react-router'
import designIndex from '@/content/cateringDesignIndex.json'
import '@/styles/catering-editorial.css'
import type { CateringDetailPage } from './CateringPlanningArticle'

const images = designIndex as Record<string, string>
export const isCateringDesignPage = (path: string) => Object.hasOwn(images, path.replace(/\/$/, ''))
export const cateringImage = (path: string, width = 1200) => `/images/catering-editorial-2026/${images[path.replace(/\/$/, '')]}-${width}.webp`
const ownHero = new Set(['/yachts', '/canape-catering-dubai', '/catering-dubai'])
const ownPlanning = new Set(['/canape-catering-dubai', '/catering-dubai'])
const Hero = lazyPreloadable(() => import('./CateringHero'))

/** Shared legacy templates remain available to other service routes. Catering
 * uses explicitly assigned photographs instead of repeated stock thumbnails. */
export function NonCateringVisual({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  return isCateringDesignPage(pathname) ? null : children
}

export function CateringHero() {
  const { pathname } = useLocation()
  const path = pathname.replace(/\/$/, '')
  return isCateringDesignPage(path) && !ownHero.has(path) ? <Hero/> : null
}

const loaders = import.meta.glob<CateringDetailPage>('../../content/catering-editorial/*.json', {import:'default'})
const pages: Record<string,PreloadableComponent> = {}
for(const [file,load] of Object.entries(loaders)) {
  const path='/'+file.split('/').pop()!.replace(/\.json$/,'').replaceAll('__','/')
  pages[path]=lazyPreloadable(async()=>{
    const [page, { default: PlanningArticle }] = await Promise.all([load(), import('./CateringPlanningArticle')])
    return {default:()=> <PlanningArticle page={page}/>}
  })
}
export function preloadCateringExpansion(pathname: string): Promise<void> {
  const path = pathname.replace(/\/$/, '')
  return Promise.all([
    isCateringDesignPage(path) && !ownHero.has(path) ? Hero.preload() : undefined,
    !ownPlanning.has(path) ? pages[path]?.preload() : undefined,
  ]).then(() => undefined)
}
export default function CateringExpansion() {
  const {pathname}=useLocation(); const path=pathname.replace(/\/$/,''); const Page=pages[path]; return ownPlanning.has(path) ? null : Page ? <Page/> : null
}
