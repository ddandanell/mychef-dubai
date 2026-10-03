import { Fragment } from 'react'
import { Link } from 'react-router'
import FaqAccordion from './FaqAccordion'
import { planningDetails } from '@/content/planningDetails'

function LinkedCopy({ text }: { text: string }) {
  return text.split(/(\[[^\]]+\]\(\/[^)]+\))/g).map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\((\/[^)]+)\)$/)
    return link
      ? <Link key={index} to={link[2]} className="text-gold-ink underline underline-offset-4">{link[1]}</Link>
      : <Fragment key={index}>{part}</Fragment>
  })
}

/** Practical, page-specific details; FAQs stay visible without adding FAQPage markup. */
export default function PlanningDetails({ path }: { path: string }) {
  const page = planningDetails[path]
  if (!page) return null
  return <section className="bg-cream py-16 text-black" data-planning-details>
    <div className="container-custom max-w-[1000px]">
      <p className="mb-3 font-inter text-xs uppercase tracking-widest text-gold-ink">{page.eyebrow}</p>
      <h2 className="mb-8 font-playfair text-h2">{page.title}</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {page.sections.map(section => <div key={section.heading}>
          <h3 className="mb-3 font-playfair text-h3">{section.heading}</h3>
          {section.paragraphs.map(paragraph => <p key={paragraph} className="mb-4 font-inter text-body leading-relaxed text-gray-600"><LinkedCopy text={paragraph}/></p>)}
        </div>)}
      </div>
      {page.faqs?.length ? <div className="mt-10 border-t border-gray-200 pt-8">
        <h3 className="mb-5 font-playfair text-h3">Questions before you begin</h3>
        <FaqAccordion items={page.faqs} defaultOpen={-1}/>
      </div> : null}
    </div>
  </section>
}
