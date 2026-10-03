import { Calculator } from 'lucide-react'
import { DINNER_CALCULATOR_PATH } from '@/content/privateDiningLinks'
import { Link, useLocation } from 'react-router'
import { CLUSTER_NAV, CLUSTER_PATHS } from '@/content/privateChefCluster'

export default function ClusterNav() {
  const { pathname } = useLocation()
  const current = CLUSTER_NAV.find(item => item.href === pathname)
  const links = <>{CLUSTER_NAV.map(item => <Link key={item.href} to={item.href} aria-current={pathname === item.href ? 'page' : undefined}>{item.label}</Link>)}<Link to={DINNER_CALCULATOR_PATH} className="pc-dinner-nav"><Calculator size={15} aria-hidden="true"/> Dinner price</Link></>
  return <div className="pc-cluster-nav"><nav className="pc-nav-inner" aria-label="Household chef pages">{links}<Link to={CLUSTER_PATHS.planTerms} aria-current={pathname === CLUSTER_PATHS.planTerms ? 'page' : undefined}>Visit plan details</Link></nav><details className="pc-mobile-nav" key={pathname}><summary>In this section · {current?.label || 'Plan details'}<span aria-hidden="true">＋</span></summary><nav aria-label="Household chef pages">{links}<Link to={CLUSTER_PATHS.planTerms}>Visit plan details</Link></nav></details></div>
}
