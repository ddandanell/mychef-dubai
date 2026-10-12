import { Link, useLocation } from 'react-router'
import { ArrowRight, BookOpen } from 'lucide-react'
import { MENU_CATALOGUES, menuCataloguesFor } from '@/content/catalogues/menuDiscovery'
import '@/styles/menu-discovery.css'

export default function MenuCatalogueLinks() {
  const { pathname } = useLocation()
  const catalogues = menuCataloguesFor(pathname)
  if (!catalogues.length) return null
  const both = catalogues.length === 2
  return (
    <section id="related-menus" className="menu-discovery" aria-labelledby="related-menus-title" data-menu-catalogue-links>
      <div className="container-custom">
        <p className="menu-discovery-eyebrow"><BookOpen size={17} aria-hidden />Menus & prices</p>
        <h2 id="related-menus-title">{both ? 'Choose the menu for your occasion.' : catalogues[0] === 'dinner' ? 'Find the menu for your private dinner.' : 'Find the menu for your next event.'}</h2>
        <p className="menu-discovery-intro">See the dishes, prices and inclusions before you enquire.</p>
        <div className={`menu-discovery-grid ${both ? '' : 'menu-discovery-single'}`}>
          {catalogues.map(kind => {
            const menu = MENU_CATALOGUES[kind]
            return (
              <Link key={kind} to={menu.href} className="menu-discovery-card" data-menu-catalogue={kind}>
                <img src={menu.image} alt={menu.imageAlt} width={640} height={426} loading="lazy" decoding="async" />
                <div className="menu-discovery-copy">
                  <p className="menu-discovery-eyebrow">{menu.eyebrow}</p>
                  <h3>{menu.label}</h3>
                  <p>{menu.description}</p>
                  <span className="menu-discovery-action">{menu.action}<ArrowRight size={18} aria-hidden /></span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
