import { type ReactNode } from 'react'
import { lazyPreloadable, type PreloadableComponent } from '@/lib/lazyPreloadable'
import { Link, useLocation } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import designData from '@/content/cateringDesign.json'
import '@/styles/catering-editorial.css'
import type { CateringDetailPage } from './CateringPlanningArticle'

type Photo = { image: string; alt: string }
type Design = { supporting?: Photo[]; title: string; lead: string; keyword: string; image: string; alt: string; trail: { url: string; anchor: string; current?: boolean }[] }
export const cateringDesign = designData as Record<string, Design>
export const isCateringDesignPage = (path: string) => Boolean(cateringDesign[path.replace(/\/$/, '')])
export const cateringImage = (path: string, width = 1200) => `/images/catering-editorial-2026/${cateringDesign[path]?.image}-${width}.webp`

/** Shared legacy templates remain available to other service routes. Catering
 * uses explicitly assigned photographs instead of repeated stock thumbnails. */
export function NonCateringVisual({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  return isCateringDesignPage(pathname) ? null : children
}

export function CateringHero() {
  const { pathname } = useLocation()
  const page = cateringDesign[pathname]
  if (!page || pathname === "/yachts" || pathname === "/canape-catering-dubai" || pathname === "/catering-dubai") return null
  return <section className="ct-hero" data-catering-hero aria-labelledby="catering-page-title">
    <div className="ct-container ct-hero-grid">
      <div className="ct-hero-copy">
        <nav aria-label="Breadcrumb"><ol className="ct-breadcrumb">{page.trail.map(item => <li key={item.url}>{item.current ? <span aria-current="page">{item.anchor}</span> : <Link to={item.url}>{item.anchor}</Link>}</li>)}</ol></nav>
        <p className="ct-eyebrow">myCHEF · Thoughtful food, considered service</p>
        <h1 id="catering-page-title">{page.title}</h1>
        <p className="ct-lead">{page.lead}</p>
        <div className="ct-actions"><Link className="ct-button" to="/inquiry" data-track="inquiry_form" data-cta-location="hero">Plan with myCHEF <ArrowUpRight size={18}/></Link><a className="ct-text-link" href="#catering-planning">Explore the details</a></div>
      </div>
      <figure className="ct-hero-figure"><img src={cateringImage(pathname, 800)} srcSet={[480,800,1200,1536].map(w=>`${cateringImage(pathname,w)} ${w}w`).join(', ')} sizes="(min-width: 1400px) 628px, (min-width: 1001px) calc(50vw - 72px), (min-width: 721px) calc(50vw - 40px), calc(100vw - 40px)" alt={page.alt} width={1536} height={1024} fetchPriority="high" decoding="async"/></figure>
    </div>
  </section>
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
  if (pathname === '/canape-catering-dubai' || pathname === '/catering-dubai') return Promise.resolve()
  return pages[pathname]?.preload() ?? Promise.resolve()
}
export default function CateringExpansion() {
  const {pathname}=useLocation(); const Page=pages[pathname.replace(/\/$/,'')]; return pathname === '/canape-catering-dubai' || pathname === '/catering-dubai' ? null : Page ? <Page/> : null
}
