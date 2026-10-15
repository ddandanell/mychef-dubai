import { BLOG_POSTS } from './blogTaxonomy'

export const BLOG_PAGE_SIZE = 12
export const BLOG_PAGE_COUNT = Math.max(1, Math.ceil(BLOG_POSTS.length / BLOG_PAGE_SIZE))
export const BLOG_ARCHIVE_PATHS = Array.from({ length: BLOG_PAGE_COUNT - 1 }, (_, i) => `/blog/page/${i + 2}`)
export const blogPagePath = (page: number) => page === 1 ? '/blog' : `/blog/page/${page}`

// Stable useful starting points; pin separately so archive pagination remains chronological.
export const BLOG_START_HERE = [
  '/blog/how-to-hire-a-private-chef-dubai',
  '/blog/compare-catering-quotes-dubai',
  '/blog/household-menu-brief-dubai',
]
