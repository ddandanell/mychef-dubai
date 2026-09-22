import type { ReactNode } from 'react'
import { Link, useLocation } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import { trailFor } from '@/content/breadcrumbTrails'
import { chefPageImages } from '@/content/privateChefDesign'
import ServiceImage from './ServiceImage'
import { blogImageSrcSet } from '@/lib/blogImages'

type Action = { label: string; href: string; external?: boolean; track?: string; ctaLocation?: string }
export function ChefAction({ action, secondary = false }: { action: Action; secondary?: boolean }) {
  const props = { className: secondary ? 'pc-link' : 'pc-button', 'data-track': action.track, 'data-cta-location': action.ctaLocation }
  const content = <>{action.label}<ArrowUpRight size={17} aria-hidden="true" /></>
  return action.external || action.href.startsWith('#') ? <a {...props} href={action.href} {...(action.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{content}</a> : <Link {...props} to={action.href}>{content}</Link>
}
export default function EditorialHero({ title, eyebrow, subtitle, image, imageAlt, cta, secondaryCta, children }: { title: ReactNode; eyebrow?: string; subtitle?: string; image?: string; imageAlt?: string; cta?: Action; secondaryCta?: Action; children?: ReactNode }) {
  const { pathname } = useLocation()
  const key = chefPageImages[pathname] || 'household'
  const compact = pathname === '/private-chef-dubai/pricing' || pathname.includes('how-your-plan')
  const trail = trailFor(pathname)
  return <section className={`pc-hero ${compact ? 'pc-hero-compact' : ''}`}>
    <div className="pc-hero-copy">
      <nav aria-label="Breadcrumb" className="pc-breadcrumb">{trail.map((crumb,index)=><span key={index} className="pc-crumb">{index>0 && <span aria-hidden="true">/</span>}{crumb.href && index<trail.length-1 ? <Link to={crumb.href}>{crumb.label}</Link> : <span aria-current={index===trail.length-1 ? "page" : undefined}>{crumb.label}</span>}</span>)}</nav>
      <p className="pc-eyebrow">{eyebrow || 'Thoughtfully arranged · Dubai'}</p>
      <h1>{title}</h1>
      {subtitle && <p className="pc-hero-intro">{subtitle}</p>}
      {(cta || secondaryCta) && <div className="pc-actions">{cta && <ChefAction action={cta} />}{secondaryCta && <ChefAction action={secondaryCta} secondary />}</div>}
      <p className="pc-hero-note">A personal brief. A suitable chef. A clear written proposal.</p>
      {children}
    </div>
    <div className="pc-hero-photo">{pathname.startsWith('/blog/') && image ? <img src={image} srcSet={blogImageSrcSet(image)} sizes="(min-width: 900px) 52vw, 100vw" alt={imageAlt || ''} width={1536} height={1024} loading="eager" fetchPriority="high" decoding="async" className="w-full h-full object-cover"/> : <ServiceImage imageKey={key} loading="eager" fetchPriority="high" sizes="(min-width: 900px) 52vw, 100vw" />}<span className="pc-photo-mark" aria-hidden="true">Good food.<br/>Your place.</span></div>
  </section>
}
