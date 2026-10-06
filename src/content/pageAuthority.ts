import data from './pageAuthority.json'

export interface PageAuthority {
  role: 'money' | 'supporting'
  purpose: 'utility' | 'editorial' | 'service-detail'
  money_page: string
  anchor: string
  title?: string
  h1?: string
  description?: string
  lead?: string
}

const pages = data as Record<string, PageAuthority>
export function pageAuthorityFor(pathname: string): PageAuthority | undefined {
  const path = pathname.split(/[?#]/)[0].replace(/\/$/, '') || '/'
  return pages[path]
}
