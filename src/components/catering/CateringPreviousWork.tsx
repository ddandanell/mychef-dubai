import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'

export default function CateringPreviousWork() {
  return <section className="ch-section ch-wrap" id="previous-catering-work">
    <div className="ch-section-top">
      <div><p className="ch-eyebrow">Previous myCHEF work</p><h2>See the details<br /><em>from earlier occasions.</em></h2></div>
      <p>Use these existing portfolios to discuss the setting and service you want. Your own menu, staff, equipment and styling are itemised for your booking.</p>
    </div>
    <div className="grid gap-8 md:grid-cols-2">
      <div className="border-t border-gold/40 pt-6"><h3>A Christmas table in a villa</h3><p>See photographs of a previous myCHEF Christmas sitting, including the dining room, centrepiece and place settings. Table styling is an optional addition to catering.</p><Link className="ch-link" to="/christmas-catering-dubai#christmas-previous-work">View the Christmas table<ArrowUpRight size={16} aria-hidden /></Link></div>
      <div className="border-t border-gold/40 pt-6"><h3>Food and service aboard a yacht</h3><p>Our yacht portfolio shows an upper-deck dining table, individually presented canapés and a grazing setup from a previous catering day.</p><Link className="ch-link" to="/yachts#previous-work">View the yacht catering portfolio<ArrowUpRight size={16} aria-hidden /></Link></div>
    </div>
    <p className="ch-small">Planning something similar? <Link to="/inquiry?from=/catering-dubai">Send your date, guest count and venue for a catering proposal</Link>.</p>
  </section>
}
