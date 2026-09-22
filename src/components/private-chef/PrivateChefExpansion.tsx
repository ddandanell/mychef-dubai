import { lazy, type ComponentType } from 'react'
import { Link, useLocation } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import { chefImage, chefImages, type ChefImageKey } from '@/content/privateChefDesign'

interface DetailSection {
  id: string
  title: string
  image: string
  paragraphs: string[]
  link?: { href: string; label: string }
}
interface DetailPage {
  title: string
  intro: string
  sections: DetailSection[]
  cta: { title: string; body: string; label: string; href: string }
}

const imageAlts: Record<string, string> = {
  'seasonal-menu': 'Roasted fish with herbs, grilled vegetables and a fresh green salad',
  'family-cooking': 'Chef portioning roast chicken, rice and vegetables in a home kitchen',
  'dinner-service': 'A plated main course being served at an intimate dining table',
  'menu-planning': 'Menu planning with a notebook, fresh herbs and seasonal ingredients',
  'kitchen-preparation': 'An organised home kitchen with vegetables and cooking equipment ready',
  'fresh-meal-prep': 'Prepared lunches arranged in glass food containers',
  'pasta-detail': 'Fresh ravioli being shaped by hand beside basil and tomato sauce',
  'dessert-finish': 'Raspberries being added to a vanilla tart on an ivory plate',
}

// Related images give each reading section visual variety without increasing its
// initial loading priority. The first occurrence always uses the new photograph.
const alternatives: Record<string, ChefImageKey[]> = {
  'seasonal-menu': ['ingredients', 'arabic', 'wellness', 'craft', 'family-table'],
  'family-cooking': ['household', 'breakfast', 'family-table', 'planning'],
  'dinner-service': ['villa-evening', 'chefs-table', 'romantic', 'birthday', 'team-service'],
  'menu-planning': ['planning', 'ingredients', 'clean-kitchen', 'family-table'],
  'kitchen-preparation': ['clean-kitchen', 'apartment', 'ingredients', 'craft'],
  'fresh-meal-prep': ['meal-prep', 'wellness', 'family-table', 'ingredients'],
  'pasta-detail': ['pasta', 'cooking-class', 'ingredients'],
  'dessert-finish': ['dessert', 'birthday', 'romantic'],
}

function DetailImage({ imageKey, occurrence }: { imageKey: string; occurrence: number }) {
  const fallback = occurrence > 0 ? alternatives[imageKey]?.[occurrence - 1] : undefined
  const imagePath = (width: number) => fallback
    ? chefImage(fallback, width)
    : `/images/private-chef-guides-2026/${imageKey}-${width}.webp`
  return <img className="pc-reading-image" src={imagePath(800)}
    srcSet={[480, 800, 1200, 1536].map(width => `${imagePath(width)} ${width}w`).join(', ')}
    sizes="(min-width: 1100px) 440px, (min-width: 800px) 38vw, calc(100vw - 40px)"
    alt={fallback ? chefImages[fallback].alt : imageAlts[imageKey]}
    width={1536} height={1024} loading="lazy" decoding="async" />
}

function ExpansionArticle({ page }: { page: DetailPage }) {
  const occurrences: Record<string, number> = {}
  return <div className="pc-reading" data-chef-expansion>
    <section className="pc-section pc-tone-cream" aria-labelledby="chef-planning-guide">
      <div className="pc-container pc-reading-intro">
        <div><p className="pc-eyebrow">Make it personal · The details that matter</p>
          <h2 id="chef-planning-guide">{page.title}</h2><p className="pc-reading-lead">{page.intro}</p></div>
        <nav className="pc-reading-nav" aria-label="Explore this guide">
          <p className="pc-eyebrow">Explore the details</p>
          <ol>{page.sections.map((section, index) => <li key={section.id}>
            <a href={`#chef-detail-${section.id}`}><span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>{section.title}</a>
          </li>)}</ol>
        </nav>
      </div>
    </section>
    {page.sections.map((section, index) => {
      const occurrence = occurrences[section.image] || 0
      occurrences[section.image] = occurrence + 1
      return <section key={section.id} id={`chef-detail-${section.id}`} className={`pc-section pc-reading-section ${index % 2 ? 'pc-tone-cream' : ''}`} aria-labelledby={`chef-detail-heading-${section.id}`}>
        <div className={`pc-container pc-reading-row ${index % 2 ? 'pc-reading-reverse' : ''}`}>
          <div className="pc-reading-visual"><DetailImage imageKey={section.image} occurrence={occurrence}/></div>
          <div className="pc-reading-copy"><p className="pc-eyebrow">{String(index + 1).padStart(2, '0')} · Your myCHEF experience</p>
            <h2 id={`chef-detail-heading-${section.id}`}>{section.title}</h2>
            {section.paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
            {section.link && <Link className="pc-reading-link" to={section.link.href}>{section.link.label}<ArrowUpRight size={17} aria-hidden="true"/></Link>}
          </div>
        </div>
      </section>
    })}
    <section className="pc-section pc-tone-ink" aria-labelledby="chef-details-enquiry">
      <div className="pc-container pc-reading-close"><p className="pc-eyebrow">Your next step</p>
        <h2 id="chef-details-enquiry">{page.cta.title}</h2><p>{page.cta.body}</p>
        <Link className="pc-button pc-reading-button" to={page.cta.href}>{page.cta.label}<ArrowUpRight size={18} aria-hidden="true"/></Link>
        <a className="pc-reading-back" href="#chef-planning-guide">Back to the guide</a>
      </div>
    </section>
  </div>
}

// Each page gets a separate content chunk; unrelated routes do not download the
// expanded guides. The enclosing route Suspense also waits during prerendering.
const loaders = import.meta.glob<DetailPage>('../../content/private-chef-expansion/*.json', { import: 'default' })
const pageComponents: Record<string, ComponentType> = {}
for (const [file, load] of Object.entries(loaders)) {
  if (file.endsWith('/routes.json')) continue
  const path = '/' + file.split('/').pop()!.replace(/\.json$/, '').replaceAll('__', '/')
  pageComponents[path] = lazy(async () => {
    const page = await load()
    return { default: () => <ExpansionArticle page={page}/> }
  })
}

export default function PrivateChefExpansion() {
  const { pathname } = useLocation()
  const Page = pageComponents[pathname.replace(/\/$/, '')]
  return Page ? <Page/> : null
}
