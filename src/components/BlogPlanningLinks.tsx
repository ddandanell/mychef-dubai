import { Link, useLocation } from 'react-router'
import links from '@/content/blogPlanningLinks.json'

type PlanningArticle = { url: string; title: string; excerpt: string }

/** Contextual guides authored alongside the service-page linking contract. */
export default function BlogPlanningLinks() {
  const { pathname } = useLocation()
  const articles = (links as Record<string, PlanningArticle[]>)[pathname]
  if (!articles?.length) return null
  return (
    <section className="bg-cream py-14 text-black" aria-label="Planning guides">
      <div className="container-custom max-w-[1100px]">
        <p className="font-inter text-xs uppercase tracking-widest text-gold mb-3">Plan the details</p>
        <h2 className="font-playfair text-h2 mb-8">Helpful guides for your next booking</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {articles.slice(0, 3).map(article => (
            <Link key={article.url} to={article.url} className="block border border-gray-200 bg-white p-6 transition-colors hover:border-gold">
              <h3 className="font-playfair text-h4 mb-3">{article.title}</h3>
              <p className="font-inter text-body-sm text-gray-600 leading-relaxed">{article.excerpt}</p>
              <span className="mt-4 block font-inter text-sm font-medium text-gold">Read the guide →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
