import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import { CHRISTMAS_WORK_PHOTOS } from '@/content/christmasWork'

export default function FestivePlanningSection() {
  const photo = CHRISTMAS_WORK_PHOTOS[0]
  return <section className="bg-cream section-padding" aria-labelledby="festive-planning-title">
    <div className="container-custom grid gap-10 md:grid-cols-2 items-center">
      <figure>
        <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async" className="w-full h-auto" />
        <figcaption className="mt-3 font-inter text-xs text-gray-500">A previous myCHEF Christmas table. Styling is quoted separately.</figcaption>
      </figure>
      <div>
        <p className="font-inter text-caption uppercase tracking-widest text-gold-ink mb-4">Plan your festive table</p>
        <h2 id="festive-planning-title" className="font-playfair text-fluid-h2 text-black mb-5">Your traditions. A menu made around them.</h2>
        <p className="font-inter text-body-lg text-gray-600 mb-6">Planning Christmas Eve, Christmas Day lunch or a New Year’s Eve gathering? Explore the menus, then share your date, Dubai venue, adult and child numbers and dietary requirements. We confirm availability and an itemised proposal for your celebration.</p>
        <div className="flex flex-col items-start gap-4 font-inter">
          <Link to="/christmas-catering-dubai" className="inline-flex items-center gap-2 text-gold-ink underline underline-offset-4">Explore Christmas catering and menus <ArrowUpRight size={18} aria-hidden /></Link>
          <Link to="/new-year-catering-dubai" className="inline-flex items-center gap-2 text-gold-ink underline underline-offset-4">Plan New Year’s Eve catering <ArrowUpRight size={18} aria-hidden /></Link>
          <Link to="/catering-dubai" className="text-gold-ink underline underline-offset-4">Compare all catering formats</Link>
        </div>
      </div>
    </div>
  </section>
}
