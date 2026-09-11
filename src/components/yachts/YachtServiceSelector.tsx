import { YACHT_FORMATS_COPY, YACHT_SERVICES, type YachtServiceId } from '@/content/yachtPage'

type Props = {
  onSelect: (id: YachtServiceId) => void
}

export default function YachtServiceSelector({ onSelect }: Props) {
  return (
    <section className="bg-white py-16 md:py-24" aria-labelledby="yacht-eat">
      <div className="container-custom">
        <p className="font-inter text-caption uppercase tracking-[0.16em] text-gold-ink mb-3">{YACHT_FORMATS_COPY.label}</p>
        <h2 id="yacht-eat" className="font-playfair text-fluid-h2 text-[#1B2A4A] mb-3">
          {YACHT_FORMATS_COPY.h2}
        </h2>
        <p className="font-inter text-body text-gray-600 mb-10 max-w-[52ch]">{YACHT_FORMATS_COPY.intro}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {YACHT_SERVICES.map((service) => (
            <button
              key={service.id}
              type="button"
              aria-label={`${service.title}. ${service.line} Pre-fills the quote form.`}
              onClick={() => onSelect(service.id)}
              className="group text-left bg-[#F4F0E8] hover:bg-[#EFE8DA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold transition-colors"
            >
              <img
                src={service.image}
                alt=""
                width={640}
                height={400}
                loading="lazy"
                decoding="async"
                className="w-full aspect-[16/10] object-cover"
              />
              <span className="block p-4">
                <span className="font-playfair text-h4 text-[#1B2A4A] block mb-2">{service.title}</span>
                <span className="font-inter text-body-sm text-gray-600 leading-relaxed block">{service.line}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
