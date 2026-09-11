import { YACHT_LEVELS, YACHT_LEVELS_COPY, type YachtFormStyleId } from '@/content/yachtPage'

type Props = {
  onSelect: (id: YachtFormStyleId) => void
}

export default function YachtServiceLevels({ onSelect }: Props) {
  return (
    <section className="bg-[#F4F0E8] py-16 md:py-24" aria-labelledby="yacht-levels">
      <div className="container-custom">
        <p className="font-inter text-caption uppercase tracking-[0.16em] text-gold-ink mb-3">{YACHT_LEVELS_COPY.label}</p>
        <h2 id="yacht-levels" className="font-playfair text-fluid-h2 text-[#1B2A4A] mb-3">
          {YACHT_LEVELS_COPY.h2}
        </h2>
        <p className="font-inter text-body text-gray-600 mb-10 max-w-[52ch]">{YACHT_LEVELS_COPY.intro}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {YACHT_LEVELS.map((level) => (
            <button
              key={level.id}
              type="button"
              aria-label={`${level.title}. ${level.line} Best for ${level.bestFor}. Pre-fills the quote form.`}
              onClick={() => onSelect(level.id)}
              className="text-left bg-white border border-gray-200 p-6 hover:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold transition-colors"
            >
              <span className="font-playfair text-h4 text-[#1B2A4A] block mb-3">{level.title}</span>
              <span className="font-inter text-body-sm text-gray-600 leading-relaxed block mb-4">{level.line}</span>
              <span className="font-inter text-caption uppercase tracking-[0.12em] text-gold-ink">Best for</span>
              <span className="font-inter text-body-sm text-gray-700 leading-relaxed block mt-1">{level.bestFor}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
