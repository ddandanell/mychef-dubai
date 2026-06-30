import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Phone, BookOpen } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I found your blog and would like to discuss catering (via mychef.ae/blog)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const posts = [
  {
    slug: '/blog/ramadan-iftar-catering-trends-2026',
    title: 'Ramadan Iftar Catering Trends for 2026',
    excerpt: 'From grazing-style Iftar tables to zero-waste menus and modern Emirati flavours, here is what is shaping Ramadan catering in Dubai this year.',
    category: 'Ramadan',
    date: 'July 2026',
    image: '/images/ramadan-iftar-catering-dubai-hero.webp',
  },
  {
    slug: '/blog/yacht-party-menu-ideas-dubai',
    title: 'Yacht Party Menu Ideas in Dubai',
    excerpt: 'Plan a stylish, seaworthy menu for your next Dubai Marina or Palm Jumeirah cruise with canapés, fresh seafood, and desserts that travel well.',
    category: 'Yachts',
    date: 'July 2026',
    image: '/images/yacht-catering-dubai-hero.webp',
  },
  {
    slug: '/blog/how-much-does-private-chef-cost-dubai',
    title: 'How Much Does a Private Chef Cost in Dubai?',
    excerpt: 'A practical breakdown of private chef pricing in Dubai, the factors that move the cost, and how to get an accurate quote for your dinner.',
    category: 'Private Chef',
    date: 'July 2026',
    image: '/images/private-chef-dubai-hero.webp',
  },
  {
    slug: '/blog/corporate-catering-full-service-vs-drop-off',
    title: 'Corporate Catering: Full-Service vs Drop-Off',
    excerpt: 'Compare drop-off and full-service corporate catering by cost, setup, staffing, and guest experience so you can choose the right format.',
    category: 'Corporate',
    date: 'July 2026',
    image: '/images/corporate-catering-dubai-hero.webp',
  },
]

const collectionSchema = {
  '@type': 'CollectionPage',
  name: 'myCHEF Dubai Blog',
  url: 'https://mychef.ae/blog',
  description: 'Expert tips, trends, and inspiration for private dining and luxury catering in Dubai.',
}

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://mychef.ae/blog' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [collectionSchema, breadcrumbSchema],
}

export default function Blog() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    gsap.to('.blog-card', {
      scrollTrigger: { trigger: '.blog-grid', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
    })

    gsap.to('.blog-cta', {
      scrollTrigger: { trigger: '.blog-cta', start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <SEO
        title="Blog | myCHEF Dubai | Private Chef & Catering Insights"
        description="Expert tips, trends, and inspiration for private dining and luxury catering in Dubai."
        canonicalPath="/blog"
        ogImage="/images/guides-hub-dubai-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Hero ═══════════════ */}
      <PageHero
        eyebrow="News & Inspiration"
        title="Private Chef & Catering Blog"
        subtitle="Expert tips, seasonal trends, and menu inspiration for private dining, yacht parties, Ramadan gatherings, and corporate events across Dubai."
        image="/images/guides-hub-dubai-hero.webp"
        imageAlt="myCHEF Dubai blog"
        cta={{ label: 'Request a Custom Quote', href: '/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=blog' }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
        minHeight="tall"
        overlay="dark"
      />

      {/* ═══════════════ Blog Grid ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[1100px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              Latest Posts
            </span>
            <h2 className="font-playfair text-h2 text-black">
              Insights for Dubai Hosts
            </h2>
          </div>

          <div className="blog-grid grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={post.slug}
                className="blog-card group block bg-cream border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] opacity-0 translate-y-10"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-inter text-xs uppercase tracking-wider text-gold font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-300">|</span>
                    <span className="font-inter text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="font-playfair text-h3 text-black mb-3 group-hover:text-gold transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-inter text-body-sm text-gray-500 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Final CTA ═══════════════ */}
      <section className="blog-cta bg-gradient-to-b from-black to-charcoal py-20 opacity-0 translate-y-8">
        <div className="container-custom text-center">
          <BookOpen size={40} className="text-gold mx-auto mb-6" />
          <h2 className="font-playfair text-h2 text-white mb-4">
            Want a Bespoke Menu?
          </h2>
          <p className="font-inter text-body-lg text-gray-400 max-w-[600px] mx-auto mb-8">
            Whether you are planning a villa dinner, yacht cruise, or corporate event, we will design a menu and service plan tailored to your occasion.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=blog" className="btn-primary">
              Request My Custom Quote
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
          <p className="font-inter text-sm text-gray-400 mt-6">
            We typically reply within 2 hours during business hours.
          </p>
        </div>
      </section>
    </div>
  )
}
