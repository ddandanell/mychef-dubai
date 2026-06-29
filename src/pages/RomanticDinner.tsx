import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SEO from '../components/SEO'
import { Heart, Sparkles, Wine } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function RomanticDinner() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.gsap-reveal').forEach((el) => {
        gsap.from(el, { opacity: 0, y: 40, duration: 0.7, scrollTrigger: { trigger: el, start: 'top 88%' } })
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef}>
      <SEO title="Romantic Private Dinner Dubai" description="Intimate romantic dinners in Dubai. Private chef, candlelit setting, bespoke menu for couples, anniversaries, and proposals." />

      <section className="relative min-h-[70vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0"><img src="/service-luxury-dining.jpg" alt="Romantic dinner" className="w-full h-full object-cover opacity-40" /><div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" /></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <nav className="text-sm mb-6"><Link to="/" className="text-gray-400 hover:text-gold">Home</Link><span className="text-gray-600 mx-2">/</span><span className="text-gold">Romantic Dinner Dubai</span></nav>
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">For Two</p>
          <h1 className="font-playfair text-4xl md:text-6xl text-white font-semibold mb-4">Romantic Dinner Dubai</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">An unforgettable evening for you and your loved one. Private chef, candlelit table, bespoke menu.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="/inquiry" className="btn-primary">Plan My Romantic Dinner</a>
            <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer" className="btn-secondary">Chat on WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl text-white text-center mb-12 gsap-reveal">The Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{icon: Heart, title: 'Intimate Setting', desc: 'Candlelit table, rose petals, soft music. We create the perfect ambiance.'}, {icon: Wine, title: 'Wine Pairing', desc: 'Expertly selected wines to complement each course of your bespoke menu.'}, {icon: Sparkles, title: 'Bespoke Menu', desc: 'Every dish designed around your preferences, dietary needs, and the occasion.'}].map((f, i) => (
              <div key={i} className="text-center p-8 border border-charcoal-light hover:border-gold/50 transition-colors gsap-reveal">
                <f.icon className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="font-playfair text-xl text-white mb-3">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl text-white text-center mb-12 gsap-reveal">Perfect For</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Anniversaries', 'Marriage Proposals', 'Birthday Surprises', 'Date Nights', 'Valentine\'s Day', 'Honeymoon Dining', 'Reconciliation Dinners', 'Just Because'].map((item, i) => (
              <div key={i} className="bg-black p-6 text-center gsap-reveal"><span className="text-gold text-2xl mb-2 block">&#10084;</span><p className="text-white font-medium">{item}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center gsap-reveal">
          <h2 className="font-playfair text-3xl text-white mb-6">Create an Unforgettable Evening</h2>
          <p className="text-gray-400 mb-8">Let us handle everything while you focus on what matters most.</p>
          <a href="/inquiry" className="btn-primary">Request a Romantic Dinner Quote</a>
        </div>
      </section>
    </div>
  )
}
