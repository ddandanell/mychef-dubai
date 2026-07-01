import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'

interface BlogRelatedProps {
  currentSlug: string
}

const posts = [
  {
    slug: '/blog/ramadan-iftar-catering-trends-2026',
    title: 'Ramadan Iftar Catering Trends for 2026',
    excerpt: 'From grazing-style Iftar tables to zero-waste menus and modern Emirati flavours, here is what is shaping Ramadan catering in Dubai this year.',
    category: 'Ramadan',
    image: '/images/ramadan-iftar-catering-dubai-hero.webp',
  },
  {
    slug: '/blog/yacht-party-menu-ideas-dubai',
    title: 'Yacht Party Menu Ideas in Dubai',
    excerpt: 'Plan a stylish, seaworthy menu for your next Dubai Marina or Palm Jumeirah cruise with canapés, fresh seafood, and desserts that travel well.',
    category: 'Yachts',
    image: '/images/yacht-catering-dubai-hero.webp',
  },
  {
    slug: '/blog/how-much-does-private-chef-cost-dubai',
    title: 'How Much Does a Private Chef Cost in Dubai?',
    excerpt: 'A practical breakdown of private chef pricing in Dubai, the factors that move the cost, and how to get an accurate quote for your dinner.',
    category: 'Private Chef',
    image: '/images/private-chef-dubai-hero.webp',
  },
  {
    slug: '/blog/corporate-catering-full-service-vs-drop-off',
    title: 'Corporate Catering: Full-Service vs Drop-Off',
    excerpt: 'Compare drop-off and full-service corporate catering by cost, setup, staffing, and guest experience so you can choose the right format.',
    category: 'Corporate',
    image: '/images/corporate-catering-dubai-hero.webp',
  },
  {
    slug: '/blog/weekly-meal-prep-vs-full-time-chef-dubai',
    title: 'Weekly Meal Prep vs Hiring a Full-Time Chef in Dubai',
    excerpt: 'Compare weekly meal prep services and full-time private chefs in Dubai by cost, flexibility, vetting, and lifestyle fit so you can choose the right option.',
    category: 'Meal Prep',
    image: '/images/weekly-meal-prep-dubai-hero.webp',
  },
  {
    slug: '/blog/best-private-chef-birthday-dinner-dubai',
    title: 'Best Private Chef Birthday Dinner in Dubai: Menu Ideas, Costs & How to Book',
    excerpt: 'Plan a private chef birthday dinner in Dubai with menu ideas, indicative costs, booking tips, and answers to the most common host questions.',
    category: 'Birthday',
    image: '/images/birthday-catering-dubai-hero.webp',
  },
  {
    slug: '/blog/private-chef-palm-jumeirah-guide',
    title: 'Private Chef Palm Jumeirah: A Complete Guide to Dining at Home',
    excerpt: 'A practical guide to hiring a private chef in Palm Jumeirah, covering menus, service styles, indicative pricing, and how to book a curated dining experience at home.',
    category: 'Private Chef',
    image: '/images/luxury-dining-dubai-hero.webp',
  },
  {
    slug: '/blog/halal-private-dining-dubai-what-to-ask',
    title: 'Halal Private Dining in Dubai: What to Ask Before You Book',
    excerpt: 'A practical guide for Dubai hosts booking halal private dining, covering certification, cross-contamination, alcohol policy, sourcing, and indicative costs.',
    category: 'Halal',
    image: '/images/halal-catering-dubai-hero.webp',
  },
]

export default function BlogRelated({ currentSlug }: BlogRelatedProps) {
  const related = posts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, 3)

  if (related.length === 0) return null

  return (
    <section className="bg-white section-padding">
      <div className="container-custom max-w-[1100px]">
        <div className="text-center mb-10">
          <span className="font-inter text-caption uppercase tracking-wider text-gold mb-3 block">
            Related Reading
          </span>
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
