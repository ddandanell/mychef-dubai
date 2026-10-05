import { Link, useLocation } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import BlogProse from '@/components/blog/BlogProse'
import BlogReadingLink from '@/components/blog/BlogReadingLink'
import { cateringDesign } from '@/content/cateringDesign'

type Photo = { image: string; alt: string }
export type CateringDetailPage = { title: string; focus: string; sections: { id: string; title: string; paragraphs: string[] }[]; links: { href: string; label: string }[] }
function SupportingPhoto({photo}: {photo: Photo}) {
  const source = (width: number) => `/images/catering-editorial-2026/${photo.image}-${width}.webp`
  return <figure className="ct-supporting-photo"><img src={source(800)} srcSet={[480,800,1200,1536].map(w=>`${source(w)} ${w}w`).join(', ')} sizes="(min-width: 1100px) 50vw, 100vw" alt={photo.alt} width={1536} height={1024} loading="lazy" decoding="async" /></figure>
}
export default function PlanningArticle({page}: {page: CateringDetailPage}) {
  const { pathname } = useLocation()
  const photographs = cateringDesign[pathname.replace(/\/$/, '')]?.supporting ?? []
  const photoPositions = new Map(photographs.map((photo, i) => [pathname.startsWith('/blog/') ? Math.max(0, Math.floor((i + 1) * page.sections.length / (photographs.length + 1)) - 1) : i, photo]))
  const operational = /\/(institutional|school|nursery|hospital|canteen|staff-meals)/.test(pathname)
  const flight = pathname === '/private-jet-catering-dubai'
  const production = pathname === '/production-catering-dubai'
  const closingCopy = operational
    ? 'Share your site, expected meal volumes, operating days and service requirements. We’ll assess the facilities and proposed scope, then confirm the arrangements in a written proposal.'
    : flight
      ? 'Share the flight date, passenger count, menu requirements and operator-approved handover details. We’ll assess the request and confirm the proposed catering scope in writing.'
      : production
        ? 'Share the location, crew count, call times and meal breaks. We’ll discuss the catering around your production schedule and confirm the agreed service in a written proposal.'
        : 'Share your date, venue, guest count and menu preferences. We’ll discuss the service your occasion needs and confirm the details in a written proposal.'
  return <BlogProse className="ct-planning" data-catering-expansion id="catering-planning">
    <div className="ct-container ct-planning-grid">
      <aside className="ct-guide-nav"><p className="ct-eyebrow">{operational || flight || production ? 'A considered catering service' : 'A more considered occasion'}</p><h2>{page.title}</h2><p>{page.focus}</p><nav aria-label="Catering planning topics"><ol>{page.sections.map((section,i)=><li key={section.id}><a href={`#catering-detail-${section.id}`}><span>{String(i+1).padStart(2,'0')}</span>{section.title}</a></li>)}</ol></nav></aside>
      <div className="ct-guide-copy">{page.sections.map((section,i)=><section className="ct-detail" key={section.id} id={`catering-detail-${section.id}`}><p className="ct-eyebrow">{String(i+1).padStart(2,'0')} · Planning with myCHEF</p><h2>{section.title}</h2>{section.paragraphs.map((p,n)=><p key={n}>{p}</p>)}<BlogReadingLink section={`catering-detail-${section.id}`}/>{photoPositions.get(i) && <SupportingPhoto photo={photoPositions.get(i)!}/>}</section>)}
        {page.links.length>0 && <nav className="ct-context-links" aria-label="Related planning resources"><p className="ct-eyebrow">Continue planning</p>{page.links.map(link=><Link key={link.href} to={link.href}>{link.label}<ArrowUpRight size={16}/></Link>)}</nav>}
      </div>
    </div>
    <div className="ct-planning-close"><div className="ct-container"><p className="ct-eyebrow">{operational || flight || production ? 'Your service, thoughtfully planned' : 'Your occasion, thoughtfully planned'}</p><h2>{operational ? 'Tell us about your organisation.' : 'Tell us what you have in mind.'}</h2><p>{closingCopy}</p><Link className="ct-button" to="/inquiry">Start your catering enquiry <ArrowUpRight size={18}/></Link></div></div>
  </BlogProse>
}
