import { NavigationMenuLink } from '@/components/ui/navigation-menu'
import { ArrowRight, Calculator, Check } from 'lucide-react'
import { Link } from 'react-router'
import { DINNER_CALCULATOR_PATH } from '@/content/privateDiningLinks'
import '@/styles/dinner-calculator-links.css'

export default function DinnerCalculatorCallout({ featured = false }: { featured?: boolean }) {
  return <section className={`dinner-callout ${featured ? 'dinner-callout--featured' : ''}`} aria-label="Food & chef price calculator">
    <div className="dinner-callout-inner">
      <div className="dinner-callout-copy">
        <p className="dinner-callout-eyebrow"><Calculator size={17} aria-hidden="true"/> Food & chef price calculator</p>
        <h2>{featured ? <>Your dinner. Your menu.<br/><em>Your price in moments.</em></> : 'Planning a dinner, delivery or buffet?'}</h2>
        <p>Choose your service, guests and dishes. Chef preparation is included. See your estimate, then send your menu and booking request on WhatsApp.</p>
        {featured && <div className="dinner-callout-facts"><span><Check size={15} aria-hidden="true"/> Chef at home from 6 guests</span><span><Check size={15} aria-hidden="true"/> Ingredients included</span><span><Check size={15} aria-hidden="true"/> No sign-up</span></div>}
      </div>
      <div className="dinner-callout-action">
        <Link to={DINNER_CALCULATOR_PATH} className="dinner-calculator-button" data-cta-location={featured ? 'home-dinner-calculator' : 'related-dinner-calculator'}>Get my menu price <ArrowRight size={18} aria-hidden="true"/></Link>
        <p>At home 6+ · delivery 10+ · buffet 20+<br/>One cuisine, dietary alternatives, instant estimate.</p>
      </div>
    </div>
  </section>
}

export function DinnerCalculatorMenuLink() {
  return <NavigationMenuLink asChild className="p-0 hover:bg-transparent focus:bg-transparent"><Link to={DINNER_CALCULATOR_PATH} className="dinner-menu-link">
    <Calculator size={22} strokeWidth={1.5} aria-hidden="true"/>
    <span><strong>Food & chef calculator</strong><small>At home, delivery or buffet · instant estimate</small></span>
    <ArrowRight size={18} aria-hidden="true"/>
  </Link></NavigationMenuLink>
}
