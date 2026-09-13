import { Link } from 'react-router'
import { trackConversion } from '@/lib/track'
import {
  coverageLabel,
  corporateInquiryHref,
  corporateWhatsAppLink,
  publicPriceLabel,
  type CorporatePackage,
} from '@/content/corporatePackages'

type Props = {
  packages: readonly CorporatePackage[]
  heading?: string
  intro?: string
}

export default function CorporatePackageCompare({ packages, heading, intro }: Props) {
  if (packages.length === 0) return null

  return (
    <div>
      {heading ? <h2 className="font-playfair text-h2 text-black mb-4">{heading}</h2> : null}
      {intro ? <p className="font-inter text-body text-gray-600 mb-8 max-w-[65ch]">{intro}</p> : null}

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left font-inter text-body-sm text-gray-700">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-3 pr-4 font-medium text-black">Package</th>
              <th className="py-3 pr-4 font-medium text-black">Best for</th>
              <th className="py-3 pr-4 font-medium text-black">What you get</th>
              <th className="py-3 pr-4 font-medium text-black">What's included</th>
              <th className="py-3 pr-4 font-medium text-black">Minimum</th>
              <th className="py-3 font-medium text-black">Price</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg) => (
              <tr key={pkg.id} className="border-b border-gray-100 align-top">
                <td className="py-4 pr-4 text-black font-medium">{pkg.name}</td>
                <td className="py-4 pr-4">{pkg.occasions[0]}</td>
                <td className="py-4 pr-4">
                  <p>{pkg.portionNote}</p>
                  <p className="mt-1 text-gray-500">{pkg.includedStaff}</p>
                </td>
                <td className="py-4 pr-4">{coverageLabel(pkg)}</td>
                <td className="py-4 pr-4">
                  {pkg.minGuests} guests
                  {pkg.minOrderAed ? ` · AED ${pkg.minOrderAed.toLocaleString('en-US')} min order` : ''}
                </td>
                <td className="py-4">
                  <p>{publicPriceLabel(pkg)}</p>
                  <p className="mt-1 text-gray-500">{pkg.tax.split('.')[0]}.</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="mt-8 grid gap-6 md:grid-cols-2">
        {packages.map((pkg) => (
          <li key={`${pkg.id}-card`} className="border border-gray-200 p-6">
            <h3 className="font-playfair text-h4 text-black mb-2">{pkg.name}</h3>
            <p className="font-inter text-body-sm text-gray-600 mb-3">{pkg.sampleMenu.join(' · ')}</p>
            {pkg.exclusions[0] ? (
              <p className="font-inter text-body-sm text-gray-500 mb-4">Not included: {pkg.exclusions[0]}.</p>
            ) : null}
            <div className="flex flex-wrap gap-4">
              <Link
                to={corporateInquiryHref(pkg)}
                data-track="price_table"
                onClick={() => trackConversion('cta_click', 'price_table')}
                className="font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
              >
                Request a quote for this package
              </Link>
              <a
                href={corporateWhatsAppLink(pkg)}
                target="_blank"
                rel="noopener noreferrer"
                data-track="price_table"
                onClick={() => trackConversion('whatsapp_click', 'price_table')}
                className="font-inter text-caption uppercase tracking-[0.12em] text-gold-ink hover:text-gold"
              >
                WhatsApp this package
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
