import { YACHT_OCCASIONS } from '@/content/yachtPage'

export default function YachtOccasions() {
  return (
    <section className="bg-[#F4F0E8] py-14 md:py-20" aria-labelledby="yacht-occasions">
      <div className="container-custom">
        <p className="font-inter text-caption uppercase tracking-[0.16em] text-gold-ink mb-3">Occasions</p>
        <h2 id="yacht-occasions" className="font-playfair text-fluid-h2 text-[#1B2A4A] mb-8">
          The same team, different days on the water
        </h2>
        <ul className="flex flex-wrap gap-2">
          {YACHT_OCCASIONS.map((item) => (
            <li
              key={item}
              className="font-inter text-body-sm text-[#1B2A4A] border border-[#1B2A4A]/15 bg-white px-4 py-2"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
