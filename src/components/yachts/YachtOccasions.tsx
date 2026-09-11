import { YACHT_OCCASIONS, YACHT_OCCASIONS_COPY } from '@/content/yachtPage'

type Props = {
  onSelect: (occasion: string) => void
}

export default function YachtOccasions({ onSelect }: Props) {
  return (
    <section className="bg-[#F4F0E8] py-14 md:py-20" aria-labelledby="yacht-occasions">
      <div className="container-custom">
        <p className="font-inter text-caption uppercase tracking-[0.16em] text-gold-ink mb-3">{YACHT_OCCASIONS_COPY.label}</p>
        <h2 id="yacht-occasions" className="font-playfair text-fluid-h2 text-[#1B2A4A] mb-4">
          {YACHT_OCCASIONS_COPY.h2}
        </h2>
        <p className="font-inter text-body text-gray-600 leading-relaxed max-w-[58ch] mb-8">{YACHT_OCCASIONS_COPY.intro}</p>
        <ul className="flex flex-wrap gap-2">
          {YACHT_OCCASIONS.map((item) => (
            <li key={item}>
              <button
                type="button"
                onClick={() => onSelect(item)}
                className="font-inter text-body-sm text-[#1B2A4A] border border-[#1B2A4A]/15 bg-white px-4 py-2 hover:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
