import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { relatedPosts } from '../content/blogTaxonomy'
import { SectionLabel } from '@/components/system'


interface BlogRelatedProps {
  currentSlug: string
  /** How many related posts to show (default 3). */
  count?: number
}

/**
 * Topic-aware "Related Reading" module. Pulls same-hub siblings first (then fills
 * from the wider set) from the central blog taxonomy, so every post links to the
 * most relevant neighbours rather than a fixed three.
 */
export default function BlogRelated({ currentSlug, count = 3 }: BlogRelatedProps) {
  const related = relatedPosts(currentSlug, count)
  if (related.length === 0) return null

  return (
    <section className="bg-white section-padding">
      <div className="container-custom max-w-[1100px]">
        <div className="text-center mb-10">
          <SectionLabel align="center">Related Reading</SectionLabel>
          <h2 className="font-playfair text-h2 text-black">
            More from the myCHEF Dubai Blog
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {related.map((post) => (
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
              <div className="p-5">
                <span className="font-inter text-xs uppercase tracking-wider text-gold font-medium block mb-2">
                  {post.category}
                </span>
                <h3 className="font-playfair text-h4 text-black mb-2 group-hover:text-gold transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="font-inter text-body-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">
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
  )
}
