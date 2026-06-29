import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SEO from '../components/SEO'
import { Moon, Star, Sun } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function RamadanIftar() {
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
      <SEO title="Iftar Catering & Ramadan Private Chef Dubai" description="Traditional and contemporary Iftar catering in Dubai. Private chef for Ramadan, Suhoor, and Iftar gatherings. Custom menus, full service." />
      <section className="relative min-h-[70vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0"><img src="/service-catering.jpg" alt="Ramadan iftar catering" className="w-full h-full object-cover opacity-40" /><div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" /></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <nav className="text-sm mb-6"><Link to="/" className="text-gray-400 hover:text-gold">Home</Link><span className="text-gray-600 mx-2">/</span><Link to="/catering-dubai" className="text-gray-400 hover:text-gold">Catering</Link><span className="text-gray-600 mx-2">/</span><span className="text-gold">Iftar & Ramadan</span></nav>
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4">Ramadan Kareem</p>
          <h1 className="font-playfair text-4xl md:text-6xl text-white font-semibold mb-4">Iftar Catering & Ramadan Private Chef</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Honoring tradition with exceptional cuisine. From intimate family Iftars to large corporate gatherings during the holy month.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="/inquiry" className="btn-primary">Book Iftar Catering</a>
            <a href="https://wa.me/971588274544" target="_blank" rel="noopener noreferrer" className="btn-secondary">Chat on WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl text-white text-center mb-12 gsap-r">Our Ramadan Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{icon: Moon, title: 'Private Iftar', desc: 'Traditional Iftar menu served in your home or villa for family and close friends.'}, {icon: Star, title: 'Corporate Iftar', desc: 'Large-scale Iftar catering for companies, embassies, and organizations.'}, {icon: Sun, title: 'Suhoor Service', desc: 'Late-night Suhoor gatherings with light, energizing menus before Fajr.'}].map((f, i) => (
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
          <h2 className="font-playfair text-3xl text-white text-center mb-12 gsap-r">Traditional Iftar Menu Includes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Dates & Arabic Coffee', 'Lentil Soup', 'Hot & Cold Mezze', 'Mixed Grills', 'Seafood Dishes', 'Vegetarian Options', 'Arabic Desserts', 'Fresh Juices'].map((item, i) => (
              <div key={i} className="bg-black p-6 text-center gsap-r"><span className="text-gold text-lg mb-2 block">&#127769;</span><p className="text-white font-medium text-sm">{item}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-center">
        <div className="max-w-3xl mx-auto px-4 gsap-r">
          <h2 className="font-playfair text-3xl text-white mb-6">Reserve Your Ramadan Catering</h2>
          <p className="text-gray-400 mb-8">Ramadan dates fill quickly. Contact us early to secure your preferred dates.</p>
          <a href="/inquiry" className="btn-primary">Request Iftar Catering Quote</a>
        </div>
      </section>
    </div>
  )
}
