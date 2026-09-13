import { Link } from 'react-router'

type Sibling = { href: string; label: string }

type Props = {
  items: readonly Sibling[]
  note?: string
}

export default function CorporateSiblings({ items, note }: Props) {
  if (items.length === 0) return null
  return (
    <div>
      <p className="font-inter text-caption uppercase tracking-[0.12em] text-gold-ink mb-4">Also useful</p>
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              to={item.href}
              className="font-inter text-body-sm text-gray-700 underline decoration-gold/40 underline-offset-4 hover:text-gold-ink"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      {note ? <p className="mt-6 font-inter text-body-sm text-gray-600 max-w-[62ch]">{note}</p> : null}
    </div>
  )
}
