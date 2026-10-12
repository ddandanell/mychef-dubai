import { Link, useLocation } from 'react-router'
import { ArrowRight, BookOpen } from 'lucide-react'
import { CORPORATE_MENUS_PATH, DINNER_MENUS_PATH } from '@/content/catalogues/catalogue'
const corporatePages = new Set(['/corporate','/corporate-event-catering-dubai','/office-catering-dubai','/business-lunch-catering-dubai','/conference-catering-dubai','/breakfast-catering-dubai','/buffet-catering-dubai','/canape-catering-dubai','/live-cooking-stations-dubai','/bbq-catering-dubai','/corporate-dinner-package-dubai','/corporate-catering-checklist-dubai','/afternoon-tea-catering-dubai','/finger-food-catering-dubai'])
const dinnerPages = new Set(['/luxury-dining-experiences','/private-chef-dubai','/private-chef-dubai/pricing','/romantic-dinner-dubai','/tasting-menu-dubai','/halal-private-dining-dubai','/date-night-package-dubai','/luxury-dinner-planning-guide-dubai','/italian-catering-dubai','/mediterranean-catering-dubai','/asian-catering-dubai'])
export default function MenuCatalogueLinks() {
 const {pathname}=useLocation()
 const both=['/menus','/catering-dubai','/catering-packages-dubai','/dubai-catering-prices-guide','/catering-cost-calculator-dubai'].includes(pathname)
 const corporate=both||corporatePages.has(pathname), dinner=both||dinnerPages.has(pathname)
 if(!corporate&&!dinner)return null
 return <section className="bg-cream text-black border-y border-gold/20 py-9"><div className="container-custom"><p className="font-inter text-caption tracking-widest uppercase text-gold-ink mb-3">Choose your menu</p><h2 className="font-playfair text-2xl mb-4">See the dishes. See the prices.</h2><div className="flex flex-wrap gap-4">{corporate&&<Link className="inline-flex items-center gap-3 border border-gold/40 px-5 py-4 text-gold-ink hover:bg-white" to={CORPORATE_MENUS_PATH}><BookOpen size={20}/>Corporate menus & prices<ArrowRight size={16}/></Link>}{dinner&&<Link className="inline-flex items-center gap-3 border border-gold/40 px-5 py-4 text-gold-ink hover:bg-white" to={DINNER_MENUS_PATH}><BookOpen size={20}/>Dinner menus & prices<ArrowRight size={16}/></Link>}</div></div></section>
}
