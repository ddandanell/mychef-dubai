import { ShieldCheck, ExternalLink } from 'lucide-react'

interface SourceItem {
  label: string
  url?: string
}

interface SourcesBlockProps {
  sources: SourceItem[]
  note?: string
}

export default function SourcesBlock({ sources, note }: SourcesBlockProps) {
  return (
    <aside className="article-section opacity-0 translate-y-8 mb-12 border-l-4 border-gold bg-gray-50 p-6 md:p-8">
      <div className="flex items-center gap-2 mb-4">
        <ShieldCheck size={20} className="text-gold" />
        <h2 className="font-playfair text-h4 text-black">Sources & Verification</h2>
      </div>

      <p className="font-inter text-body-sm text-gray-500 leading-relaxed mb-4">
        The regulatory, pricing, and cultural notes in this article are drawn from official or high-trust sources fetched and verified on 2026-07-19. We do not publish claims we cannot verify.
      </p>

      <ul className="space-y-3">
        {sources.map((source, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-gold mt-1">•</span>
            {source.url ? (
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-body-sm text-gray-600 hover:text-gold underline underline-offset-4 transition-colors inline-flex items-center gap-1"
              >
                {source.label}
                <ExternalLink size={12} />
              </a>
            ) : (
              <span className="font-inter text-body-sm text-gray-600">{source.label}</span>
            )}
          </li>
        ))}
      </ul>

      {note && (
        <p className="font-inter text-body-sm text-gray-400 mt-4 italic">
          {note}
        </p>
      )}
    </aside>
  )
}
