import { memo } from 'react'
import { Link, useLocation } from 'react-router'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { SectionLabel } from '@/components/system'
import { doNotLink, getSiloPage, type SiloLink } from '@/content/siloMap'

/**
 * Silo-aware closing module. Replaces the fixed twelve-link "Explore myCHEF"
 * block that rendered identically on all 216 URLs — the same list everywhere is
 * a footer, not a silo.
 *
 * Everything here comes from src/content/siloMap.ts, which is generated from the
 * locked keyword map. Nothing on this page is hand-picked. Direction is always
 * hub -> children -> guides/blogs -> commercial owner.
 */

const clean = (items: SiloLink[]) => items.filter((i) => !doNotLink.has(i.url))

function LinkRow({ item }: { item: SiloLink }) {
  return (
    <Link
      to={item.url}
      className="group flex items-baseline justify-between gap-4 border-b border-white/10 py-3 transition-colors hover:border-gold/40"
    >
      <span className="font-playfair text-[17px] leading-snug text-white/85 transition-colors group-hover:text-gold">
        {item.label}
      </span>
      <ArrowRight
        size={15}
        className="shrink-0 translate-x-0 text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold"
        aria-hidden
      />
    </Link>
  )
}

function Card({ item }: { item: SiloLink }) {
  return (
    <Link
      to={item.url}
      className="group flex items-center justify-between gap-3 border border-white/12 px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-white/[0.03]"
    >
      <span className="font-playfair text-[16px] leading-snug text-white/85 transition-colors group-hover:text-gold">
        {item.label}
      </span>
      <ArrowUpRight size={15} className="shrink-0 text-white/25 transition-colors group-hover:text-gold" aria-hidden />
    </Link>
  )
}

function Rail({ label, title, note }: { label: string; title: string; note?: string }) {
  return (
    <div className="lg:sticky lg:top-28">
      <SectionLabel tone="dark">{label}</SectionLabel>
      <h2 className="font-playfair text-[clamp(24px,2.4vw,34px)] leading-tight text-white">{title}</h2>
      {note && <p className="mt-3 max-w-[38ch] font-inter text-body-sm leading-relaxed text-white/50">{note}</p>}
    </div>
  )
}

const SiloSection = memo(function SiloSection() {
  const { pathname } = useLocation()
  const page = getSiloPage(pathname)
  if (!page) return null

  const siblings = clean(page.siblings)
  const children = clean(page.featured_children)
  const index = clean(page.silo_index)
  const owners = clean(page.commercial_owners)
  const guides = clean(page.supporting_guides)
  const areas = clean(page.areas)

  if (!siblings.length && !children.length && !owners.length && !guides.length) return null

  const silo = page.silo || 'myCHEF Dubai'

  return (
    <section className="bg-charcoal py-16 print:hidden" aria-label="Related pages">
      <div className="container-custom max-w-[1200px]">
        {/* A guide's job is to hand the reader to the page that takes the booking. */}
        {owners.length > 0 && (
          <div className="mb-14 border-y border-gold/25 py-8">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center">
              <div>
                <SectionLabel tone="dark">Ready when you are</SectionLabel>
                <p className="font-playfair text-[clamp(20px,2vw,26px)] leading-snug text-white">
                  Done reading? This is the page that takes the booking.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {owners.map((item, i) => (
                  <Link
                    key={item.url}
                    to={item.url}
                    className={
                      i === 0
                        ? 'btn-primary px-6 text-xs'
                        : 'btn-secondary px-6 text-xs'
                    }
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="grid gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
          <Rail
            label={page.is_hub ? 'Inside this section' : 'Closest to this page'}
            title={page.is_hub ? `Everything in ${silo}` : `More in ${silo}`}
            note={
              page.is_hub
                ? 'The pages below sit under this hub. Start with the format you already know you want.'
                : page.uplink
                  ? undefined
                  : 'Pages chosen by how closely they match this one, not by a fixed list.'
            }
          />

          <div className="min-w-0">
            {children.length > 0 && (
              <div className="mb-10 grid gap-3 sm:grid-cols-2">
                {children.map((item) => (
                  <Card key={item.url} item={item} />
                ))}
              </div>
            )}

            {siblings.length > 0 && children.length === 0 && (
              <div className="mb-10 grid gap-x-10 sm:grid-cols-2">
                {siblings.map((item) => (
                  <LinkRow key={item.url} item={item} />
                ))}
              </div>
            )}

            {guides.length > 0 && (
              <div className="mb-10">
                <p className="mb-3 font-inter text-caption uppercase tracking-[0.14em] text-gold">
                  Plan it first
                </p>
                <div className="grid gap-x-10 sm:grid-cols-2">
                  {guides.map((item) => (
                    <LinkRow key={item.url} item={item} />
                  ))}
                </div>
              </div>
            )}

            {areas.length > 0 && (
              <div className="mb-10">
                <p className="mb-3 font-inter text-caption uppercase tracking-[0.14em] text-gold">
                  Where we work
                </p>
                <p className="font-inter text-body-sm leading-relaxed text-white/55">
                  {areas.map((item, i) => (
                    <span key={item.url}>
                      {i > 0 && <span className="text-white/25"> · </span>}
                      <Link to={item.url} className="text-white/70 underline-offset-4 hover:text-gold hover:underline">
                        {item.label}
                      </Link>
                    </span>
                  ))}
                  <span className="text-white/25"> · </span>
                  <Link to="/locations" className="text-gold underline-offset-4 hover:underline">
                    All areas
                  </Link>
                </p>
              </div>
            )}

            {/* Hub only: the long tail, so a thin spoke still gets inbound. */}
            {index.length > 0 && (
              <div className="border-t border-white/10 pt-6">
                <p className="mb-3 font-inter text-caption uppercase tracking-[0.14em] text-white/40">
                  Also in {silo}
                </p>
                <p className="font-inter text-body-sm leading-[2] text-white/50">
                  {index.map((item, i) => (
                    <span key={item.url}>
                      {i > 0 && <span className="text-white/20"> · </span>}
                      <Link to={item.url} className="underline-offset-4 hover:text-gold hover:underline">
                        {item.label}
                      </Link>
                    </span>
                  ))}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
})

export default SiloSection
