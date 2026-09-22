import { Children, cloneElement, isValidElement, type HTMLAttributes, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router'
import { blogLinkState, linkBlogText, type BlogLinkState } from '@/lib/blogEditorial'

/** Add contextual links in the rendered article, including prerendered HTML.
 * Existing links, headings, navigation and custom components keep their meaning.
 * One link per paragraph and two per destination keep long guides readable. */
export default function BlogProse({ as: Tag = 'article', children, ...props }: HTMLAttributes<HTMLElement> & { as?: 'article' | 'div' }) {
  const { pathname } = useLocation()
  const state = blogLinkState(pathname)
  function walk(nodes: ReactNode, paragraph?: BlogLinkState): ReactNode {
    return Children.map(nodes, node => {
      if (typeof node === 'string' && paragraph) {
        return linkBlogText(node, paragraph).map((part, i) => typeof part === 'string' ? part :
          <Link key={i} to={part.href} className="blog-context-link">{part.text}</Link>)
      }
      if (!isValidElement<{ children?: ReactNode }>(node) || typeof node.type !== 'string') return node
      if (/^(a|nav|aside|script|style|h[1-6]|button|figcaption)$/.test(node.type)) return node
      const next = node.type === 'p' ? { ...state, remaining: 1 } : paragraph
      return cloneElement(node, {}, walk(node.props.children, next))
    })
  }
  return <Tag {...props}>{pathname.startsWith('/blog/') ? walk(children) : children}</Tag>
}
