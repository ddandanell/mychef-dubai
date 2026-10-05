import { Link, useLocation } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import { cateringDesign } from '@/content/cateringDesign'
import { cateringImage } from './CateringEditorial'

export default function CateringHero() {
  const { pathname } = useLocation()
  const path = pathname.replace(/\/$/, '')
  const page = cateringDesign[path]
  if (!page) return null
  return <section className="ct-hero" data-catering-hero aria-labelledby="catering-page-title">
    <div className="ct-container ct-hero-grid">
      <div className="ct-hero-copy">
        <nav aria-label="Breadcrumb"><ol className="ct-breadcrumb">{page.trail.map(item => <li key={item.url}>{item.current ? <span aria-current="page">{item.anchor}</span> : <Link to={item.url}>{item.anchor}</Link>}</li>)}</ol></nav>
        <p className="ct-eyebrow">myCHEF · Thoughtful food, considered service</p>
        <h1 id="catering-page-title">{page.title}</h1>
        <p className="ct-lead">{page.lead}</p>
        <div className="ct-actions"><Link className="ct-button" to="/inquiry" data-track="inquiry_form" data-cta-location="hero">Plan with myCHEF <ArrowUpRight size={18}/></Link><a className="ct-text-link" href="#catering-planning">Explore the details</a></div>
      </div>
      <figure className="ct-hero-figure"><img src={cateringImage(path, 800)} srcSet={[480,800,1200,1536].map(w=>`${cateringImage(path,w)} ${w}w`).join(', ')} sizes="(min-width: 1400px) 628px, (min-width: 1001px) calc(50vw - 72px), (min-width: 721px) calc(50vw - 40px), calc(100vw - 40px)" alt={page.alt} width={1536} height={1024} fetchPriority="high" decoding="async"/></figure>
    </div>
  </section>
}
