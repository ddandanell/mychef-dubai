import { NavigationMenuLink } from '@/components/ui/navigation-menu'
import { ArrowRight, Calculator, Check } from 'lucide-react'
import { Link } from 'react-router'
import { DINNER_CALCULATOR_PATH } from '@/content/privateDiningLinks'
import '@/styles/dinner-calculator-links.css'

export default function DinnerCalculatorCallout({ featured = false }: { featured?: boolean }) {
  return <section className={`dinner-callout ${featured ? 'dinner-callout--featured' : ''}`} aria-label="Private dinner price calculator">
    <div className="dinner-callout-inner">
      <div className="dinner-callout-copy">
        <p className="dinner-callout-eyebrow"><Calculator size={17} aria-hidden="true"/> Private dinner price calculator</p>
        <h2>{featured ? <>Your dinner. Your menu.<br/><em>Your price in moments.</em></> : 'Hosting 6–20 guests at home?'}</h2>
        <p>Choose your chef, guests and dishes. See an instant estimate, then send your menu and booking request on WhatsApp.</p>
        {featured && <div className="dinner-callout-facts"><span><Check size={15} aria-hidden="true"/> Minimum 6 guests</span><span><Check size={15} aria-hidden="true"/> Ingredients included</span><span><Check size={15} aria-hidden="true"/> No sign-up</span></div>}
      </div>
      <div className="dinner-callout-action">
        <Link to={DINNER_CALCULATOR_PATH} className="dinner-calculator-button" data-cta-location={featured ? 'home-dinner-calculator' : 'related-dinner-calculator'}>Get my dinner price <ArrowRight size={18} aria-hidden="true"/></Link>
        <p>6–20 guests · ingredients included<br/>Bespoke menus quoted personally.</p>
      </div>
    </div>
  </section>
}

export function DinnerCalculatorMenuLink() {
  return <NavigationMenuLink asChild className="p-0 hover:bg-transparent focus:bg-transparent"><Link to={DINNER_CALCULATOR_PATH} className="dinner-menu-link">
    <Calculator size={22} strokeWidth={1.5} aria-hidden="true"/>
    <span><strong>Dinner price calculator</strong><small>6–20 guests · instant menu estimate</small></span>
    <ArrowRight size={18} aria-hidden="true"/>
  </Link></NavigationMenuLink>
}
