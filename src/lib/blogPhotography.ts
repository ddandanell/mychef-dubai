import photography from '@/content/blogPhotography.json'
import { blogImageSrcSet } from './blogImages'

export interface EditorialPhoto {
  src: string
  alt: string
  caption: string
  width: number
  height: number
}
interface ArticlePhotography { inline: EditorialPhoto[]; hero?: { src: string; alt: string } }
const plans = photography as Record<string, ArticlePhotography>
export function articlePhotography(path: string) { return plans[path] }
const escape = (value: string) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Curated photographs belong to the article's editorial plan, so Ryze imports
 * cannot revert them to remote placeholders. Pure string rendering is identical
 * during prerender and hydration; no DOM rewriting or extra network fetches. */
export function withArticlePhotography(html: string, path: string): string {
  const plan = articlePhotography(path)
  if (!plan) return html
  const body = html
    .replace(/<figure\b[^>]*>[\s\S]*?<\/figure>/gi, figure => /<img\b/i.test(figure) ? '' : figure)
    .replace(/<p\b[^>]*>\s*(?:<a\b[^>]*>)?\s*<img\b[^>]*>\s*(?:<\/a>)?\s*<\/p>/gi, '')
    .replace(/<img\b[^>]*>/gi, '')
  const headings = [...body.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/gi)]
    .filter(match => !/^(?:faq|frequently asked|related guides|related articles)/i.test(match[1].replace(/<[^>]*>/g, '').trim()))
  const inserts = plan.inline.map((photo, i) => {
    const heading = headings[Math.min(headings.length - 1, Math.max(1, Math.floor((i + 1) * headings.length / (plan.inline.length + 1))))]
    const position = heading?.index ?? body.length
    const srcSet = blogImageSrcSet(photo.src)
    const figure = `<figure class="blog-editorial-photo" data-editorial-photo><img src="${escape(photo.src)}"${srcSet ? ` srcset="${escape(srcSet)}" sizes="(min-width: 900px) 820px, calc(100vw - 40px)"` : ''} alt="${escape(photo.alt)}" width="${photo.width}" height="${photo.height}" loading="lazy" decoding="async"><figcaption>${escape(photo.caption)}</figcaption></figure>`
    return { position, figure }
  })
  let result = body
  for (const { position, figure } of inserts.reverse()) result = result.slice(0, position) + figure + result.slice(position)
  return result
}
