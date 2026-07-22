import { Lightbulb, Calendar } from 'lucide-react'

interface FactItem {
  label: string
  value: string
}

interface KeyFactsBoxProps {
  answer: string
  facts: FactItem[]
  updated?: string
}

export default function KeyFactsBox({ answer, facts, updated = 'July 2026' }: KeyFactsBoxProps) {
  return (
    <aside className="article-section opacity-0 translate-y-8 mb-12 bg-cream border border-gray-200 rounded-sm p-6 md:p-8">
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb size={20} className="text-gold" />
        <h2 className="font-playfair text-h4 text-black">At a Glance</h2>
      </div>

      <p className="font-inter text-body-lg text-black leading-relaxed mb-6">
        {answer}
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {facts.map((fact, i) => (
          <div key={i} className="bg-white border border-gray-100 p-4">
            <span className="block font-inter text-xs uppercase tracking-wider text-gold mb-1">
              {fact.label}
            </span>
            <span className="block font-inter text-body text-black font-medium">
              {fact.value}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 text-gray-400 font-inter text-sm">
        <Calendar size={14} />
        <span>Updated {updated}</span>
      </div>
    </aside>
  )
}
