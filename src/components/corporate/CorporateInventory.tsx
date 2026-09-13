import {
  CORPORATE_INVENTORY_INTRO,
  CORPORATE_INVENTORY_PILLARS,
  inventoryForPath,
} from '@/content/corporateInventory'

type Props = {
  path: string
  quoteHref?: string
}

export default function CorporateInventory({ path, quoteHref = '#quote' }: Props) {
  const sections = inventoryForPath(path)
  if (sections.length === 0) return null
  const pillars = CORPORATE_INVENTORY_PILLARS.filter((item) =>
    sections.some((section) => `#${section.id}` === item.href),
  )

  return (
    <div id="inventory">
      <section className="bg-white py-16 md:py-24" aria-labelledby="corporate-hospitality">
        <div className="container-custom">
          <p className="font-inter text-caption uppercase tracking-[0.16em] text-gold-ink mb-3">
            {CORPORATE_INVENTORY_INTRO.label}
          </p>
          <h2 id="corporate-hospitality" className="font-playfair text-fluid-h2 text-black mb-4 max-w-[24ch]">
            {CORPORATE_INVENTORY_INTRO.h2}
          </h2>
          <p className="font-inter text-body text-gray-600 leading-relaxed max-w-[62ch] mb-10">
            {CORPORATE_INVENTORY_INTRO.body}
          </p>
          <nav aria-label="Corporate hospitality inventory" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {pillars.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border border-gray-200 bg-cream p-5 hover:border-gold transition-colors"
              >
                <span className="font-playfair text-h4 text-black block mb-1">{item.title}</span>
                <span className="font-inter text-body-sm text-gray-600">{item.line}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={
            index % 2 === 0
              ? 'bg-cream py-16 md:py-24 scroll-mt-24'
              : 'bg-white py-16 md:py-24 scroll-mt-24'
          }
          aria-labelledby={`${section.id}-h`}
        >
          <div className="container-custom grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] gap-10 lg:gap-16 items-start">
            <figure className="overflow-hidden bg-gray-100">
              <img
                src={section.image}
                alt={section.imageAlt}
                width={1280}
                height={720}
                loading="lazy"
                decoding="async"
                className="w-full h-auto aspect-[16/10] object-cover"
              />
              <figcaption className="font-inter text-body-xs text-gray-500 px-1 pt-2">Experience concept shown</figcaption>
            </figure>
            <div>
              <p className="font-inter text-caption uppercase tracking-[0.16em] text-gold-ink mb-3">{section.label}</p>
              <h2 id={`${section.id}-h`} className="font-playfair text-fluid-h2 text-black mb-4">
                {section.h2}
              </h2>
              <p className="font-inter text-body text-gray-700 leading-relaxed mb-8">{section.how}</p>
              <div className="space-y-8">
                {section.groups.map((group) => (
                  <div key={group.heading}>
                    <h3 className="font-playfair text-h4 text-black mb-3">{group.heading}</h3>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-3 font-inter text-body-sm text-gray-700 leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-gold" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="mt-8">
                <a
                  href={quoteHref}
                  className="font-inter text-body-sm text-gold-ink underline underline-offset-4 hover:text-gold"
                >
                  Add this to a corporate proposal
                </a>
              </p>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
