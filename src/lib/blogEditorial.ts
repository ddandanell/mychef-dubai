import rules from '@/content/blogLinkRules.json'
import { isParked } from '@/content/parkedUrls'
import { blogImageSrcSet } from './blogImages'

type Rule = { phrases: string[]; href: string }
export interface BlogLinkState { path: string; remaining: number; uses: Map<string, number>; rules: Rule[] }
const escape = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

export function blogLinkState(path: string): BlogLinkState {
  const specific = (rules.pages as Record<string, Rule[]>)[path] || []
  return { path, remaining: 1, uses: new Map(), rules: [...specific, ...rules.shared].filter(rule => {
    const target = rule.href.split(/[?#]/)[0]
    return target !== path && !isParked(target)
  }) }
}

export function linkBlogText(text: string, state: BlogLinkState): (string | { href: string; text: string })[] {
  if (!state.remaining) return [text]
  for (const rule of state.rules) {
    if ((state.uses.get(rule.href) || 0) >= 2) continue
    for (const phrase of rule.phrases) {
      const match = new RegExp(`\\b${escape(phrase)}\\b`, 'i').exec(text)
      if (!match) continue
      state.remaining--
      state.uses.set(rule.href, (state.uses.get(rule.href) || 0) + 1)
      return [text.slice(0, match.index), { href: rule.href, text: match[0] }, text.slice(match.index + match[0].length)]
    }
  }
  return [text]
}

/** The imported article HTML is trusted editorial content. Only text inside
 * paragraphs is linked; existing anchors and all other markup are preserved. */
export function prepareBlogHtml(html: string, path: string) {
  const state = blogLinkState(path)
  const headings: { id: string; title: string }[] = []
  const ids = new Set<string>()
  let result = html.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/gi, (_, attrs: string, content: string) => {
    const title = content.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&#39;/g, "'")
    const existing = attrs.match(/\bid=["']([^"']+)["']/)?.[1]
    const base = existing || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 70) || 'section'
    let id = base
    for (let n = 2; ids.has(id); n++) id = `${base}-${n}`
    ids.add(id)
    headings.push({ id, title })
    return `<h2${attrs.replace(/\s*id=["'][^"']*["']/g, '')} id="${id}">${content}</h2>`
  })
  result = result.replace(/<p(\s[^>]*)?>([\s\S]*?)<\/p>/gi, (_, attrs: string = '', content: string) => {
    const paragraph = { ...state, remaining: content.includes('<a ') ? 0 : 1 }
    let inAnchor = false
    const linked = content.split(/(<[^>]+>)/g).map(token => {
      if (token.startsWith('<')) {
        if (/^<a\b/i.test(token)) inAnchor = true
        if (/^<\/a\b/i.test(token)) inAnchor = false
        return token
      }
      if (inAnchor) return token
      return linkBlogText(token, paragraph).map(part => typeof part === 'string' ? part :
        `<a class="blog-context-link" href="${part.href}">${part.text}</a>`).join('')
    }).join('')
    return `<p${attrs}>${linked}</p>`
  })
  result = result.replace(/<img\b([^>]*?)\bsrc="([^"]+)"([^>]*?)\/?\s*>/gi, (tag, before: string, src: string, after: string) => {
    const srcSet = blogImageSrcSet(src)
    return srcSet && !/\bsrcset=/i.test(tag)
      ? `<img${before}src="${src}" srcset="${srcSet}" sizes="(min-width: 900px) 820px, calc(100vw - 40px)"${after}>`
      : tag
  })
  return { html: result, headings }
}
