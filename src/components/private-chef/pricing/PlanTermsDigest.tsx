import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { Eyebrow, DisplayHeading, BodyCopy } from '@/components/system'
import { CLUSTER_PATHS } from '@/content/privateChefCluster'
import { PLAN_TERMS, type TermItem } from '@/content/privateChefPlanTerms'

/** The rules that influence the purchase, directly under the calculator. Native <details>: indexable, zero JS. */
export default function PlanTermsDigest() {
  const groups = PLAN_TERMS.map((g) => ({ ...g, items: g.items.filter((i) => i.decisionRelevant) })).filter((g) => g.items.length > 0)
  return (
    <section aria-labelledby="plan-terms-h" className="scroll-mt-24" id="how-your-plan-works">
      <div className="max-w-[760px] mb-10">
        <Eyebrow className="mb-3">How your plan works</Eyebrow>
        <DisplayHeading size="h2" className="text-black mb-4">
          <span id="plan-terms-h">The rules that shape the price — in plain English.</span>
        </DisplayHeading>
        <BodyCopy muted>Only the rules that change what you pay or what you get. Everything else is on one page, written the same way.</BodyCopy>
      </div>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.3fr)_minmax(0,0.7fr)] lg:gap-16 items-start">
        <div className="lg:sticky lg:top-24">
          <ol className="border-t border-gray-200">
            {groups.map((g) => (
              <li key={g.id} className="border-b border-gray-200">
                <a href={`#digest-${g.id}`} className="block py-3 font-inter text-body-sm text-gray-600 hover:text-gold-ink transition-colors">{g.title}</a>
              </li>
            ))}
          </ol>
          <Link to={CLUSTER_PATHS.planTerms} className="mt-6 inline-flex items-center gap-2 font-inter text-caption uppercase tracking-wider text-gold-ink hover:text-gold">
            Read how your plan works in full <ArrowRight size={14} />
          </Link>
        </div>
        <div className="space-y-10">
          {groups.map((g, gi) => (
            <div key={g.id} id={`digest-${g.id}`} className="scroll-mt-24">
              <p className="font-inter text-caption uppercase tracking-[0.14em] text-gold-ink mb-2">{g.title}</p>
              <div className="border-t border-gray-200">
                {g.items.map((item: TermItem, ii: number) => {
                  const open = gi === 0 && ii === 0
                  return (
                    <details key={item.id} open={open} className="group border-b border-gray-200">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 [&::-webkit-details-marker]:hidden">
                        <h3 className="font-playfair text-h4 text-black group-open:text-gold-ink transition-colors">{item.title}</h3>
                        <span aria-hidden className="flex h-8 w-8 flex-shrink-0 items-center justify-center border border-gold/35 text-gold-ink transition-transform duration-300 group-open:rotate-45">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 1v10M1 6h10" /></svg>
                        </span>
                      </summary>
                      <div className="pb-6 max-w-[640px]">
                        {item.paragraphs.map((p) => (
                          <p key={p} className="font-inter text-body-sm text-gray-600 leading-relaxed mb-3 last:mb-0">{p}</p>
                        ))}
                        {item.bullets ? (
                          <ul className="mt-3 grid gap-1 sm:grid-cols-2">
                            {item.bullets.map((b) => (
                              <li key={b} className="flex items-start gap-2 font-inter text-caption text-gray-600"><span className="mt-2 h-px w-3 shrink-0 bg-gold-ink/60" />{b}</li>
                            ))}
                          </ul>
                        ) : null}
                        {item.twoUp ? (
                          <div className="mt-4 grid gap-px bg-gray-200 border border-gray-200 sm:grid-cols-2">
                            {[item.twoUp.left, item.twoUp.right].map((side, i) => (
                              <div key={side.label} className={i === 1 ? 'bg-cream p-4' : 'bg-white p-4'}>
                                <p className="font-inter text-caption uppercase tracking-[0.12em] text-gold-ink mb-1.5">{side.label}</p>
                                {side.lines.map((l) => <p key={l} className="font-inter text-body-sm text-gray-700 leading-relaxed">{l}</p>)}
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </details>
                  )
                })}
              </div>
            </div>
          ))}
          <Link to={CLUSTER_PATHS.planTerms} className="lg:hidden inline-flex items-center gap-2 font-inter text-caption uppercase tracking-wider text-gold-ink hover:text-gold">
            Read how your plan works in full <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
