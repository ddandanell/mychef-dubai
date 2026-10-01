import rules from '@/content/blogLinkRules.json'
import serviceRules from '@/content/serviceLinkRules.json'
import { isParked } from '@/content/parkedUrls'
import { blogImageDimensions, blogImageSrcSet } from './blogImages'

type Rule = { phrases: string[]; href: string }
export const PRIVATE_CHEF_PATH = '/private-chef-dubai'
export function isPrivateChefOverview(href: string) {
  try {
    const url = new URL(href, 'https://www.mychef.ae')
    return ['www.mychef.ae', 'mychef.ae'].includes(url.hostname) && url.pathname.replace(/\/$/, '') === PRIVATE_CHEF_PATH
  } catch { return false }
}
export function privateChefBodyLinkCount(html: string) {
  return [...html.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["']/gi)]
    .filter(match => isPrivateChefOverview(match[1])).length
}
export interface BlogLinkState { path: string; remaining: number; uses: Map<string, number>; rules: Rule[]; limit: number; perDestination: number }
const escape = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

// Reuse non-global matchers across paragraphs and repeat renders. No lastIndex
// state is carried between matches, so the link caps and phrase order stay intact.
const phraseMatchers = new Map<string, RegExp>()
function phraseMatcher(phrase: string): RegExp {
  let matcher = phraseMatchers.get(phrase)
  if (!matcher) {
    matcher = new RegExp(`\\b${escape(phrase)}\\b`, 'i')
    phraseMatchers.set(phrase, matcher)
  }
  return matcher
}

export function blogLinkState(path: string): BlogLinkState {
  const specific = (rules.pages as Record<string, Rule[]>)[path] || []
  const blog = path.startsWith('/blog/')
  const candidates = blog ? [...specific, ...rules.shared] : (serviceRules as Record<string, Rule[]>)[path] || []
  return { path, remaining: 1, uses: new Map(), limit: blog ? 8 : 6, perDestination: blog ? 2 : 1, rules: candidates.filter(rule => {
    const target = rule.href.split(/[?#]/)[0]
    return target !== path && !isParked(target)
  }) }
}

export function linkBlogText(text: string, state: BlogLinkState): (string | { href: string; text: string })[] {
  if (!state.remaining || [...state.uses.values()].reduce((total, count) => total + count, 0) >= state.limit) return [text]
  for (const rule of state.rules) {
    const destinationLimit = isPrivateChefOverview(rule.href) ? 1 : state.perDestination
    if ((state.uses.get(rule.href) || 0) >= destinationLimit) continue
    for (const phrase of rule.phrases) {
      const match = phraseMatcher(phrase).exec(text)
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
  // An authored contextual link already serves this destination. Count absolute
  // and relative URLs before auto-linking, including links later in the article.
  const authoredChefLinks = privateChefBodyLinkCount(html)
  if (authoredChefLinks) state.uses.set(PRIVATE_CHEF_PATH, authoredChefLinks)
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
  result = result.replace(/<img\b[^>]*?\bsrc="([^"]+)"[^>]*?\/?\s*>/gi, (tag: string, src: string) => {
    const srcSet = blogImageSrcSet(src)
    const dimensions = blogImageDimensions(src)
    const attributes: string[] = []
    if (srcSet && !/\bsrcset=/i.test(tag)) attributes.push(`srcset="${srcSet}"`)
    if (srcSet && !/\bsizes=/i.test(tag)) attributes.push('sizes="(min-width: 900px) 820px, calc(100vw - 40px)"')
    if (dimensions && !/\b(?:width|height)=/i.test(tag)) attributes.push(`width="${dimensions.width}" height="${dimensions.height}"`)
    if (!/\bdecoding=/i.test(tag)) attributes.push('decoding="async"')
    return attributes.length ? tag.replace(/\s*\/?>$/, ` ${attributes.join(' ')}>`) : tag
  })
  return { html: result, headings }
}
