import { Link } from 'react-router'
import { BLOG_PAGE_COUNT, blogPagePath } from '@/content/blogArchive'

export default function BlogPagination({ current }: { current: number }) {
  return (
    <nav aria-label="Blog archive pages" className="mt-12 flex flex-wrap items-center justify-center gap-2">
      {Array.from({ length: BLOG_PAGE_COUNT }, (_, i) => i + 1).map(page => (
        <Link key={page} to={blogPagePath(page)} aria-current={page === current ? 'page' : undefined}
          aria-label={`Blog page ${page}`}
          className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded border px-3 font-inter text-sm ${page === current ? 'border-black bg-black text-white' : 'border-gray-300 text-black hover:border-gold'}`}>
          {page}
        </Link>
      ))}
    </nav>
  )
}
