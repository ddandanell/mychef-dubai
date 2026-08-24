import { Link, useParams } from 'react-router'
import { ArrowRight, Phone } from 'lucide-react'
import SEO from '../components/SEO'
import { getHub, postsInHub } from '../content/blogTaxonomy'

const WHATSAPP_LINK = 'https://wa.me/971551744849'
const SITE = 'https://www.mychef.ae'

/**
 * Topic-cluster hub page at /blog/topic/:hub. Groups the blog posts in a cluster,
 * links up to the cluster's pillar service page, and gives the cluster a crawlable
 * landing page — the "spoke index" of the hub-and-spoke model.
 */
export default function BlogCategoryHub() {
  const { hub: hubSlug = '' } = useParams()
  const hub = getHub(hubSlug)

  if (!hub) {
    return (
      <div className="bg-white section-padding pt-32 md:pt-40">
        <div className="container-custom max-w-[820px] text-center">
          <h1 className="font-playfair text-h2 text-black mb-4">Topic not found</h1>
          <Link to="/blog" className="text-gold underline underline-offset-2">Back to the blog</Link>
        </div>
      </div>
    )
  }

  const posts = postsInHub(hub.slug)
  const path = `/blog/topic/${hub.slug}`

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: `${hub.title} — myCHEF Dubai Blog`,
        description: hub.description,
        url: `${SITE}${path}`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
          { '@type': 'ListItem', position: 3, name: hub.title, item: `${SITE}${path}` },
        ],
      },
      {
        '@type': 'ItemList',
        itemListElement: posts.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: `${SITE}${p.slug}`,
          name: p.title,
        })),
      },
    ],
  }

  return (
    <div>
      <SEO
        title={`${hub.title} in Dubai`}
        description={hub.description}
        canonicalPath={path}
        schema={schema}
      />

      {/* Hero */}
      <section className="relative bg-black overflow-hidden section-padding pt-32 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(200,164,92,0.12)_0%,transparent_60%)]" />
        <div className="relative z-10 container-custom max-w-[900px]">
          <nav className="mb-6">
            <ol className="flex items-center gap-2 font-inter text-body-sm">
              <li><Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link to="/blog" className="text-gray-400 hover:text-gold transition-colors">Blog</Link></li>
              <li className="text-gray-400">/</li>
              <li><span className="text-gold">{hub.title}</span></li>
            </ol>
          </nav>
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">Topic</span>
          <h1 className="font-playfair text-fluid-h1 font-semibold text-white leading-tight mb-6">
            {hub.title}
          </h1>
          <p className="font-inter text-body-lg text-gray-400 leading-relaxed max-w-[760px] mb-8">
            {hub.intro}
          </p>
          <Link to={hub.pillar.url} className="btn-primary">
            {hub.pillar.label} <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Posts grid */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-[1100px]">
          <div className="text-center mb-12">
            <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
              {posts.length} {posts.length === 1 ? 'Guide' : 'Guides'}
            </span>
            <h2 className="font-playfair text-h2 text-black">Guides in this topic</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={post.slug}
                className="group block bg-cream border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6">
                  <span className="font-inter text-xs uppercase tracking-wider text-gold font-medium block mb-2">
                    {post.category}
                  </span>
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

          <div className="text-center mt-12">
            <Link to="/blog" className="font-inter text-body-sm uppercase tracking-wider text-gold hover:text-gold-light transition-colors inline-flex items-center gap-1">
              All blog topics <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-charcoal to-black section-padding">
        <div className="container-custom max-w-[720px] text-center">
          <h2 className="font-playfair text-h2 text-white mb-4">Plan it with myCHEF</h2>
          <p className="font-inter text-body-lg text-gray-400 mb-8">
            Tell us the date, the guest count and the venue — you&apos;ll have a written proposal back promptly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/inquiry" className="btn-primary">Request a Proposal</Link>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Phone size={16} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
