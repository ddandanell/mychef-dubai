import { lazy, type ComponentType, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import designData from '@/content/cateringDesign.json'
import '@/styles/catering-editorial.css'

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
  if (!page || pathname === "/yachts") return null
  return <section className="ct-hero" data-catering-hero aria-labelledby="catering-page-title">
    <div className="ct-container ct-hero-grid">
      <div className="ct-hero-copy">
        <nav aria-label="Breadcrumb"><ol className="ct-breadcrumb">{page.trail.map(item => <li key={item.url}>{item.current ? <span aria-current="page">{item.anchor}</span> : <Link to={item.url}>{item.anchor}</Link>}</li>)}</ol></nav>
        <p className="ct-eyebrow">myCHEF · Thoughtful food, considered service</p>
        <h1 id="catering-page-title">{page.title}</h1>
        <p className="ct-lead">{page.lead}</p>
        <div className="ct-actions"><Link className="ct-button" to="/inquiry" data-track="inquiry_form" data-cta-location="hero">Plan with myCHEF <ArrowUpRight size={18}/></Link><a className="ct-text-link" href="#catering-planning">Explore the details</a></div>
      </div>
      <figure className="ct-hero-figure"><img src={cateringImage(pathname, 800)} srcSet={[480,800,1200,1536].map(w=>`${cateringImage(pathname,w)} ${w}w`).join(', ')} sizes="(min-width: 1100px) 48vw, 100vw" alt={page.alt} width={1536} height={1024} fetchPriority="high" decoding="async"/></figure>
    </div>
  </section>
}

type Page = { title: string; focus: string; sections: { id: string; title: string; paragraphs: string[] }[]; links: { href: string; label: string }[] }
function SupportingPhoto({photo}: {photo: Photo}) {
  const source = (width: number) => `/images/catering-editorial-2026/${photo.image}-${width}.webp`
  return <figure className="ct-supporting-photo"><img src={source(800)} srcSet={[480,800,1200,1536].map(w=>`${source(w)} ${w}w`).join(', ')} sizes="(min-width: 1100px) 50vw, 100vw" alt={photo.alt} width={1536} height={1024} loading="lazy" decoding="async" /></figure>
}
function PlanningArticle({page}: {page: Page}) {
  const { pathname } = useLocation()
  const photographs = cateringDesign[pathname.replace(/\/$/, '')]?.supporting ?? []
  return <article className="ct-planning" data-catering-expansion id="catering-planning">
    <div className="ct-container ct-planning-grid">
      <aside className="ct-guide-nav"><p className="ct-eyebrow">A more considered occasion</p><h2>{page.title}</h2><p>{page.focus}</p><nav aria-label="Catering planning topics"><ol>{page.sections.map((section,i)=><li key={section.id}><a href={`#catering-detail-${section.id}`}><span>{String(i+1).padStart(2,'0')}</span>{section.title}</a></li>)}</ol></nav></aside>
      <div className="ct-guide-copy">{page.sections.map((section,i)=><section className="ct-detail" key={section.id} id={`catering-detail-${section.id}`}><p className="ct-eyebrow">{String(i+1).padStart(2,'0')} · Planning with myCHEF</p><h2>{section.title}</h2>{section.paragraphs.map((p,n)=><p key={n}>{p}</p>)}{photographs[i] && <SupportingPhoto photo={photographs[i]}/>}</section>)}
        {page.links.length>0 && <nav className="ct-context-links" aria-label="Related planning resources"><p className="ct-eyebrow">Continue planning</p>{page.links.map(link=><Link key={link.href} to={link.href}>{link.label}<ArrowUpRight size={16}/></Link>)}</nav>}
      </div>
    </div>
    <div className="ct-planning-close"><div className="ct-container"><p className="ct-eyebrow">Your occasion, thoughtfully planned</p><h2>Tell us what you have in mind.</h2><p>Share your date, venue, guest count and menu preferences. We’ll discuss the service your occasion needs and confirm the details in a written proposal.</p><Link className="ct-button" to="/inquiry">Start your catering enquiry <ArrowUpRight size={18}/></Link></div></div>
  </article>
}
const loaders = import.meta.glob<Page>('../../content/catering-editorial/*.json', {import:'default'})
const pages: Record<string,ComponentType> = {}
for(const [file,load] of Object.entries(loaders)) {
  const path='/'+file.split('/').pop()!.replace(/\.json$/,'').replaceAll('__','/')
  pages[path]=lazy(async()=>{const page=await load();return {default:()=> <PlanningArticle page={page}/>}})
}
export default function CateringExpansion() {
  const {pathname}=useLocation(); const Page=pages[pathname.replace(/\/$/,'')]; return Page ? <Page/> : null
}
