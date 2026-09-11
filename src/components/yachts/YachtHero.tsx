import { Link } from 'react-router'
import { YACHT_HERO, YACHT_POSITIONING } from '@/content/yachtPage'

type Props = {
  image: string
  quoteHref: string
  whatsappHref: string
}

export default function YachtHero({ image, quoteHref, whatsappHref }: Props) {
  return (
    <section data-hero className="yacht-page bg-[#F4F0E8]" aria-labelledby="yacht-h1">
      <div className="container-custom grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-10 lg:gap-16 items-center py-10 lg:py-16">
        <div className="order-2 lg:order-1 min-w-0">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 font-inter text-body-xs text-gray-500">
              <li>
                <Link to="/" className="hover:text-gold-ink underline-offset-4 hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link to="/private-chef-dubai" className="hover:text-gold-ink underline-offset-4 hover:underline">
                  Private chef
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-gray-800">Yacht catering</li>
            </ol>
          </nav>
          <p className="font-inter text-caption uppercase tracking-[0.16em] text-gold-ink mb-4">{YACHT_HERO.eyebrow}</p>
          <h1 id="yacht-h1" className="font-playfair text-fluid-h1 text-[#1B2A4A] leading-[1.12] mb-5">
            {YACHT_HERO.h1}
          </h1>
          <p className="font-playfair text-h3 text-[#1B2A4A] mb-4">{YACHT_POSITIONING}</p>
          <p className="font-inter text-body text-gray-700 leading-relaxed max-w-[58ch] mb-6">{YACHT_HERO.support}</p>
          <p className="font-playfair text-h4 text-[#1B2A4A] mb-1">{YACHT_HERO.priceLine}</p>
          <p className="font-inter text-body-xs text-gray-500 leading-relaxed max-w-[52ch] mb-8">{YACHT_HERO.priceNote}</p>
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <a href={quoteHref} className="btn-primary text-center" data-placement="hero">
              {YACHT_HERO.primaryCta}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-center !text-[#1B2A4A] !border-[#1B2A4A]/30"
              data-placement="hero"
            >
              {YACHT_HERO.secondaryCta}
            </a>
          </div>
          <p className="font-inter text-body-sm text-gray-600 mb-6">{YACHT_HERO.reply}</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 font-inter text-caption uppercase tracking-[0.1em] text-gray-600">
            {YACHT_HERO.trust.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-gold" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 lg:order-2">
          <figure className="overflow-hidden bg-gray-100">
            <img
              src={image}
              alt="Chef and service on a Dubai yacht deck. Experience concept shown."
              width={1344}
              height={752}
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto aspect-[16/10] object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
