import { Children, cloneElement, isValidElement, type HTMLAttributes, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router'
import { blogLinkState, linkBlogText, isPrivateChefOverview, PRIVATE_CHEF_PATH, type BlogLinkState } from '@/lib/blogEditorial'

/** Add contextual links in the rendered article, including prerendered HTML.
 * Existing links, headings, navigation and custom components keep their meaning.
 * Service-page destinations follow the SEO ownership contract. Links are capped
 * per paragraph, destination and article so copy remains comfortable to read. */
export default function BlogProse({ as: Tag = 'article', children, ...props }: HTMLAttributes<HTMLElement> & { as?: 'article' | 'div' }) {
  const { pathname } = useLocation()
  const state = blogLinkState(pathname)
  function countChefLinks(nodes: ReactNode): number {
    return Children.toArray(nodes).reduce<number>((total, node) => {
      if (!isValidElement<{ children?: ReactNode; href?: string; to?: string }>(node)) return total
      const href = node.type === Link ? node.props.to : node.type === 'a' ? node.props.href : undefined
      return total + (typeof href === 'string' && isPrivateChefOverview(href) ? 1 : 0) + countChefLinks(node.props.children)
    }, 0)
  }
  const authoredChefLinks = countChefLinks(children)
  if (authoredChefLinks) state.uses.set(PRIVATE_CHEF_PATH, authoredChefLinks)
  function containsLink(nodes: ReactNode): boolean {
    return Children.toArray(nodes).some(node => isValidElement<{ children?: ReactNode }>(node) &&
      (node.type === 'a' || node.type === Link || containsLink(node.props.children)))
  }
  function walk(nodes: ReactNode, paragraph?: BlogLinkState): ReactNode {
    return Children.map(nodes, node => {
      if (typeof node === 'string' && paragraph) {
        return linkBlogText(node, paragraph).map((part, i) => typeof part === 'string' ? part :
          <Link key={i} to={part.href} className="blog-context-link">{part.text}</Link>)
      }
      if (!isValidElement<{ children?: ReactNode }>(node) || typeof node.type !== 'string') return node
      if (/^(a|nav|aside|script|style|h[1-6]|button|figcaption)$/.test(node.type)) return node
      const next = node.type === 'p' ? { ...state, remaining: containsLink(node.props.children) ? 0 : 1 } : paragraph
      return cloneElement(node, {}, walk(node.props.children, next))
    })
  }
  return <Tag {...props}>{state.rules.length ? walk(children) : children}</Tag>
}
