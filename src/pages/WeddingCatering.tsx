import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SEO from '../components/SEO'
import { Heart, Wine, Flower2 } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function WeddingCatering() {
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
      <SEO title="Wedding Catering Dubai" description="Premium wedding catering in Dubai. Elegant receptions, intimate ceremonies, bespoke menus, full-service team for your special day." />
      <section className="relative min-h-[70vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0"><img src="/service-events.jpg" alt="Wedding catering" className="w-full h-full object-cover opacity-40" /><div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" /></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <nav className="text-sm mb-6"><Link to="/" className="text-gray-400 hover:text-gold">Home</Link><span className="text-gray-600 mx-2">/</span><Link to="/events" className="text-gray-400 hover:text-gold">Events</Link><span className="text-gray-600 mx-2">/</span><span className="text-gold">Wedding Catering</span></nav>
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">Your Special Day</p>
          <h1 className="font-playfair text-4xl md:text-6xl text-white font-semibold mb-4">Wedding Catering Dubai</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Elegant wedding catering from intimate ceremonies to grand receptions. Bespoke menus, impeccable presentation, flawless service.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="/inquiry" className="btn-primary">Plan Wedding Catering</a>
            <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer" className="btn-secondary">Chat on WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl text-white text-center mb-12 gsap-r">Wedding Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{icon: Heart, title: 'Reception Dining', desc: 'Plated dinners, buffets, or family-style service for your wedding reception.'}, {icon: Wine, title: 'Cocktail Hour', desc: 'Elegant canapes and champagne service during your cocktail reception.'}, {icon: Flower2, title: 'Table Design', desc: 'Stunning table settings that complement your wedding theme and colors.'}].map((f, i) => (
              <div key={i} className="text-center p-8 border border-charcoal-light hover:border-gold/50 transition-colors gsap-r">
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
          <h2 className="font-playfair text-3xl text-white text-center mb-12 gsap-r">We Cater</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Engagement Party', 'Pre-Wedding Dinner', 'Wedding Reception', 'Post-Wedding Brunch', 'Nikah Ceremony', 'Henna Night', 'Beach Wedding', 'Garden Wedding'].map((item, i) => (
              <div key={i} className="bg-black p-6 text-center gsap-r"><span className="text-gold text-2xl mb-2 block">&#128144;</span><p className="text-white font-medium">{item}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-center">
        <div className="max-w-3xl mx-auto px-4 gsap-r">
          <h2 className="font-playfair text-3xl text-white mb-6">Begin Your Wedding Catering Journey</h2>
          <p className="text-gray-400 mb-8">Share your vision and we will craft a bespoke wedding dining experience.</p>
          <a href="/inquiry" className="btn-primary">Request Wedding Catering Quote</a>
        </div>
      </section>
    </div>
  )
}
