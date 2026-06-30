import { Link } from 'react-router'
import SEO from '@/components/SEO'

interface PlaceholderProps {
  title: string
}

export default function Placeholder({ title }: PlaceholderProps) {
  return (
    <>
      <SEO title={title} />
      <div className="min-h-[60dvh] flex flex-col items-center justify-center bg-black text-white px-6">
        <h1 className="font-playfair text-h1 text-center mb-4">{title}</h1>
        <p className="font-inter text-gray-400 text-center mb-8 max-w-md">
          This page is coming soon. Contact us to learn more about our services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/inquiry?utm_source=mychef.ae&utm_medium=cta_button&utm_campaign=placeholder" className="btn-primary">Request a Quote</Link>
          <Link to="/" className="btn-secondary">Back to Home</Link>
        </div>
      </div>
    </>
  )
}
