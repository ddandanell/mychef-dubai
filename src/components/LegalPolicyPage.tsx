import { Fragment } from 'react'
import { Link } from 'react-router'
import SEO from '@/components/SEO'
import PageHero from '@/components/PageHero'
import { breadcrumbSchema } from '@/utils/schema'
import type { PolicyBlock, PolicyDoc } from '@/content/bookingTerms'

const TOKEN = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g

function RichText({ text }: { text: string }) {
  const parts = text.split(TOKEN)
  return (
    <>
      {parts.map((part, i) => {
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (link) {
          const [, label, href] = link
          if (href.startsWith('/') && !href.startsWith('//')) {
            return (
              <Link key={i} to={href} className="text-gold hover:underline">
                {label}
              </Link>
            )
          }
          return (
            <a
              key={i}
              href={href}
              className="text-gold hover:underline"
              {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {label}
            </a>
          )
        }
        const bold = part.match(/^\*\*([^*]+)\*\*$/)
        if (bold) return <strong key={i} className="font-medium text-black">{bold[1]}</strong>
        return <Fragment key={i}>{part}</Fragment>
      })}
    </>
  )
}

function Block({ block }: { block: PolicyBlock }) {
  if (block.kind === 'lead') {
    return (
      <p className="font-inter text-body text-black mb-4" style={{ lineHeight: '1.8' }}>
        <strong className="font-medium">{block.text}</strong>
      </p>
    )
  }
  if (block.kind === 'ul') {
    return (
      <ul className="space-y-2 mb-4">
        {block.items.map((item) => (
          <li key={item} className="flex items-start gap-3 font-inter text-body text-gray-500" style={{ lineHeight: '1.8' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2.5" />
            <span><RichText text={item} /></span>
          </li>
        ))}
      </ul>
    )
  }
  return (
    <p className="font-inter text-body text-gray-500 mb-4" style={{ lineHeight: '1.8' }}>
      <RichText text={block.text} />
    </p>
  )
}

export default function LegalPolicyPage({
  doc,
  sibling,
}: {
  doc: PolicyDoc
  sibling: { href: string; label: string }
}) {
  const schema = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Terms of Service', path: '/terms' },
    { name: doc.h1, path: doc.path },
  ])

  return (
    <div>
      <SEO
        title={doc.title}
        hideSiteName
        description={doc.description}
        canonicalPath={doc.path}
        noindex
        ogImage="/images/catering-dubai-hero.webp"
        schema={schema}
      />
      <PageHero
        eyebrow="LEGAL"
        title={doc.h1}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Terms of Service', href: '/terms' },
          { label: doc.h1 },
        ]}
        minHeight="short"
        overlay="dark"
      >
        <p className="font-inter text-body-sm text-white/70 mt-4">Last updated: {doc.lastUpdated}</p>
      </PageHero>

      <section className="bg-white py-20">
        <div className="container-custom max-w-[800px]">
          <article>
            {doc.intro.map((paragraph) => (
              <p key={paragraph} className="font-inter text-body text-gray-500 mb-4" style={{ lineHeight: '1.8' }}>
                <RichText text={paragraph} />
              </p>
            ))}

            {doc.sections.map((section) => (
              <div key={section.id} id={section.id} className="mt-12">
                <h2 className="font-playfair text-[1.75rem] text-black mb-4" style={{ lineHeight: '1.2' }}>
                  {section.title}
                </h2>
                {section.blocks.map((block, i) => (
                  <Block key={`${section.id}-${i}`} block={block} />
                ))}
              </div>
            ))}

            <div id="contact" className="mt-12">
              <h2 className="font-playfair text-[1.75rem] text-black mb-4" style={{ lineHeight: '1.2' }}>
                Contact
              </h2>
              <address className="not-italic font-inter text-body text-gray-500" style={{ lineHeight: '1.8' }}>
                <p className="mb-2"><strong className="font-medium text-black">myCHEF Dubai | Numini FZC</strong></p>
                <p>Business Centre, Sharjah Publishing City Free Zone</p>
                <p className="mb-4">Sharjah, United Arab Emirates</p>
                <p>
                  Email:{' '}
                  <a href="mailto:info@mychef.ae" className="text-gold hover:underline">info@mychef.ae</a>
                </p>
                <p>
                  Phone / WhatsApp:{' '}
                  <a href="https://wa.me/971551744849" className="text-gold hover:underline">+971 55 174 4849</a>
                </p>
                <p>
                  Website:{' '}
                  <a href="https://www.mychef.ae" className="text-gold hover:underline">https://www.mychef.ae</a>
                </p>
              </address>
            </div>
          </article>

          <p className="mt-16 pt-10 border-t border-gray-200 font-inter text-body-sm text-gray-500">
            Also read the{' '}
            <Link to={sibling.href} className="text-gold hover:underline">{sibling.label}</Link>
            {' '}and the website{' '}
            <Link to="/privacy-policy" className="text-gold hover:underline">Privacy Policy</Link>.
          </p>
        </div>
      </section>
    </div>
  )
}
