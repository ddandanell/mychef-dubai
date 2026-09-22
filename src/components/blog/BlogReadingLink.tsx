import { Link, useLocation } from 'react-router'
import notes from '@/content/blogReadingLinks.json'

type Note = { before: string; label: string; href: string; after?: string }
/** A short, editor-written connection to the next useful planning resource. */
export default function BlogReadingLink({ section }: { section: string }) {
  const { pathname } = useLocation()
  const note = (notes as Record<string, Record<string, Note>>)[pathname]?.[section]
  return note ? <p className="blog-reading-note">{note.before}<Link className="blog-context-link" to={note.href}>{note.label}</Link>{note.after || '.'}</p> : null
}
