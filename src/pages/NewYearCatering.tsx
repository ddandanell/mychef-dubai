import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SEO from '../components/SEO'
import { Sparkles, Flame, PartyPopper } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function NewYearCatering() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.gsap-r').forEach((el) => {
        gsap.from(el, { opacity: 0, y: 40, duration: 0.7, scrollTrigger: { trigger: el, start: 'top 88%' } })
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref}>
      <SEO title="New Year Catering Dubai" description="Spectacular New Year's Eve catering in Dubai. Gala dinners, yacht parties, villa celebrations. Ring in the new year with exceptional cuisine." />
      <section className="relative min-h-[70vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0"><img src="/service-luxury-dining.jpg" alt="New Year catering" className="w-full h-full object-cover opacity-40" /><div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" /></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <nav className="text-sm mb-6"><Link to="/" className="text-gray-400 hover:text-gold">Home</Link><span className="text-gray-600 mx-2">/</span><Link to="/events" className="text-gray-400 hover:text-gold">Events</Link><span className="text-gray-600 mx-2">/</span><span className="text-gold">New Year Catering</span></nav>
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">New Year's Eve</p>
          <h1 className="font-playfair text-4xl md:text-6xl text-white font-semibold mb-4">New Year Catering Dubai</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Ring in the New Year with spectacular catering. Gala dinners, yacht parties, and villa celebrations across Dubai.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="/inquiry" className="btn-primary">Plan New Year&apos;s Eve</a>
            <a href="https://wa.me/971551744849" target="_blank" rel="noopener noreferrer" className="btn-secondary">Chat on WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl text-white text-center mb-12 gsap-r">New Year&apos;s Eve Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{icon: Sparkles, title: 'Gala Dinner', desc: 'Multi-course gala dinner with champagne toast at midnight.'}, {icon: Flame, title: 'NYE BBQ Party', desc: 'Outdoor New Year BBQ with live grilling and firepit ambiance.'}, {icon: PartyPopper, title: 'Yacht Countdown', desc: 'Watch the fireworks from the water with our yacht catering service.'}].map((f, i) => (
              <div key={i} className="text-center p-8 border border-charcoal-light hover:border-gold/50 transition-colors gsap-r">
                <f.icon className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="font-playfair text-xl text-white mb-3">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-center">
        <div className="max-w-3xl mx-auto px-4 gsap-r">
          <h2 className="font-playfair text-3xl text-white mb-6">Plan Your New Year's Celebration</h2>
          <a href="/inquiry" className="btn-primary">Request NYE Catering Quote</a>
        </div>
      </section>
    </div>
  )
}
