import { Link } from 'react-router'

interface ExploreSectionProps {
  className?: string
}

const exploreLinks = [
  { label: 'Blog', href: '/blog' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Our Chefs', href: '/our-chefs' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Guides', href: '/guides' },
  { label: 'World Cuisines', href: '/cuisines-dubai' },
  { label: 'Venue Partners', href: '/venue-partners' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Menus', href: '/menus' },
  { label: 'Catering Prices', href: '/dubai-catering-prices-guide' },
  { label: 'Private Chef Prices', href: '/private-chef-prices-dubai' },
]

export default function ExploreSection({ className = '' }: ExploreSectionProps) {
  return (
    <section className={`bg-charcoal py-16 ${className}`}>
      <div className="container-custom max-w-[1100px]">
        <div className="text-center mb-10">
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
            Discover More
          </span>
          <h2 className="font-playfair text-h2 text-white mb-4">
            Explore myCHEF Dubai
          </h2>
          <p className="font-inter text-body text-gray-400 max-w-[640px] mx-auto">
            From chef stories and real events to planning guides and world cuisines — see everything myCHEF Dubai offers.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {exploreLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="px-5 py-2.5 font-inter text-body-sm text-gold border border-gold/30 hover:bg-gold hover:text-black transition-all duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
