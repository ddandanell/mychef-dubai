import { Link, useLocation } from 'react-router'
import { pageAuthorityFor } from '@/content/pageAuthority'

/** A visible next step to the core service, generated from the existing SEO contract. */
export default function SupportServiceLink() {
  const { pathname } = useLocation()
  const page = pageAuthorityFor(pathname)
  if (!page || page.role === 'money' || page.purpose === 'utility') return null
  return <aside className="bg-cream text-gray-700 py-6" data-money-page-link>
    <p className="container-custom max-w-[900px] font-inter text-body-sm leading-relaxed">
      {page.purpose === 'service-detail' ? 'Explore the full range of ' : 'For service details and booking options, explore '}
      <Link to={page.money_page} className="font-medium text-gold-ink underline underline-offset-4">{page.anchor}</Link>.
      {' '}{page.purpose === 'editorial' ? 'Use this guide to prepare your brief, then choose the service that fits your plans.' : 'Compare the arrangements and tell us what you need.'}
    </p>
  </aside>
}
