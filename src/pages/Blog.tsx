import { useRef } from 'react'
import { Link } from 'react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useScrollTrigger } from '@/hooks/useScrollTrigger'
import { ArrowRight, Phone, BookOpen } from 'lucide-react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import { BLOG_POSTS, BLOG_HUBS, postsInHub } from '../content/blogTaxonomy'
import { SectionLabel } from '../components/system'


const WHATSAPP_NUMBER = '971551744849'
const WHATSAPP_MESSAGE = encodeURIComponent('Hi myCHEF Dubai, I found your blog and would like to discuss catering (via mychef.ae/blog)')
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const posts = BLOG_POSTS

const collectionSchema = {
  '@type': 'CollectionPage',
  name: 'myCHEF Dubai Blog',
  url: 'https://www.mychef.ae/blog',
  description: 'The myCHEF Dubai blog: private chef and catering guides, real prices, menu ideas and the planning detail behind hosting well in Dubai.',
}

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mychef.ae/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.mychef.ae/blog' },
  ],
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [collectionSchema, breadcrumbSchema],
}

export default function Blog() {
  useScrollTrigger()
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
        title="Blog | Private Chef & Catering Insights"
        description="The myCHEF Dubai blog: private chef and catering guides, real prices, menu ideas and the planning detail behind hosting well in Dubai."
        canonicalPath="/blog"
        ogImage="/images/mychef-dubai-blog-hero.webp"
        preloadHero="/images/mychef-dubai-blog-hero.webp"
        schema={schema}
      />

      {/* ═══════════════ Hero ═══════════════ */}
      <PageHero
        eyebrow="News & Inspiration"
        title="Private Chef & Catering Blog"
        subtitle="Expert tips, seasonal trends, and menu inspiration for private dining, yacht parties, Ramadan gatherings, and corporate events across Dubai."
        image="/images/mychef-dubai-blog-hero.webp"
        imageAlt="Private chef evening in a Dubai villa: the host stays seated with guests while the culinary team finishes service"
        imageWidth={1920}
        imageHeight={1080}
        cta={{ label: 'Request a Custom Quote', href: '/inquiry' }}
        secondaryCta={{ label: 'Chat on WhatsApp', href: WHATSAPP_LINK, external: true }}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
        minHeight="full"
        overlay="medium"
        imagePosition="center 40%"
      />
      <p className="bg-cream text-center font-inter text-xs uppercase tracking-[0.14em] text-gray-400 py-3 border-b border-gray-200">
        Experience concept shown
      </p>

      {/* ═══════════════ Browse by Topic ═══════════════ */}
      <section className="bg-cream section-padding border-b border-gray-200">
        <div className="container-custom max-w-[1100px]">
          <div className="text-center mb-12">
            <SectionLabel align="center">Browse by Topic</SectionLabel>
            <h2 className="font-playfair text-h2 text-black">
              Explore Our Guides by Theme
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_HUBS.map((hub) => (
              <Link
                key={hub.slug}
                to={`/blog/topic/${hub.slug}`}
                className="group block bg-white border border-gray-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-gold"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-playfair text-h4 text-black group-hover:text-gold transition-colors">
                    {hub.title}
                  </h3>
                  <span className="font-inter text-xs text-gray-400">
                    {postsInHub(hub.slug).length}
                  </span>
                </div>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed mb-4">
                  {hub.description}
                </p>
                <span className="inline-flex items-center gap-1 font-inter text-body-sm uppercase tracking-wider text-gold group-hover:text-gold-light transition-colors">
                  View topic <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ Blog Grid ═══════════════ */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[1100px]">
          <div className="text-center mb-12">
            <SectionLabel align="center">Latest Posts</SectionLabel>
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
                    alt={`${post.title} — experience concept shown`}
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
            <Link to="/inquiry" className="btn-primary">
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
            We typically reply within 15 minutes during business hours.
          </p>
        </div>
      </section>
    </div>
  )
}
