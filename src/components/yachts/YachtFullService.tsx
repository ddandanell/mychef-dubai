import { YACHT_FULL_SERVICE } from '@/content/yachtPage'

export default function YachtFullService() {
  return (
    <section className="bg-white py-16 md:py-24" aria-labelledby="yacht-full-service">
      <div className="container-custom">
        <p className="font-inter text-caption uppercase tracking-[0.16em] text-gold-ink mb-3">{YACHT_FULL_SERVICE.label}</p>
        <h2 id="yacht-full-service" className="font-playfair text-fluid-h2 text-[#1B2A4A] mb-4 max-w-[28ch]">
          {YACHT_FULL_SERVICE.h2}
        </h2>
        <p className="font-inter text-body text-gray-600 leading-relaxed max-w-[62ch] mb-10">{YACHT_FULL_SERVICE.intro}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {YACHT_FULL_SERVICE.items.map((item) => (
            <article key={item.title} className="border border-gray-200 bg-[#F4F0E8] p-6">
              <h3 className="font-inter text-caption uppercase tracking-[0.14em] text-gold-ink mb-3">{item.title}</h3>
              <p className="font-inter text-body-sm text-gray-700 leading-relaxed">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
