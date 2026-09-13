import { estimateCorporatePackage, formatAed, packageById, publicPriceLabel } from '@/content/corporatePackages'

export type WorkedExample = {
  title: string
  packageId: string
  guests: number
  days?: number
  note: string
}

type Props = {
  heading: string
  intro: string
  examples: readonly WorkedExample[]
}

export default function CorporateWorkedBudgets({ heading, intro, examples }: Props) {
  return (
    <div>
      <h2 className="font-playfair text-h2 text-black mb-4">{heading}</h2>
      <p className="font-inter text-body text-gray-600 mb-8 max-w-[65ch]">{intro}</p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] text-left font-inter text-body-sm text-gray-700">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-3 pr-4 font-medium text-black">Example</th>
              <th className="py-3 pr-4 font-medium text-black">Guests</th>
              <th className="py-3 pr-4 font-medium text-black">Headline</th>
              <th className="py-3 pr-4 font-medium text-black">Package subtotal</th>
              <th className="py-3 pr-4 font-medium text-black">VAT 5%</th>
              <th className="py-3 font-medium text-black">Indicative total</th>
            </tr>
          </thead>
          <tbody>
            {examples.map((ex) => {
              const pkg = packageById(ex.packageId)
              const est = estimateCorporatePackage({
                packageId: ex.packageId,
                guests: ex.guests,
                days: ex.days,
              })
              return (
                <tr key={ex.title} className="border-b border-gray-100 align-top">
                  <td className="py-4 pr-4">
                    <p className="text-black font-medium">{ex.title}</p>
                    <p className="mt-1 text-gray-500">{ex.note}</p>
                  </td>
                  <td className="py-4 pr-4">
                    {ex.guests}
                    {ex.days && ex.days > 1 ? ` × ${ex.days} days` : ''}
                  </td>
                  <td className="py-4 pr-4">{pkg ? publicPriceLabel(pkg) : '—'}</td>
                  <td className="py-4 pr-4">{est.ok ? formatAed(est.food) : 'Proposal'}</td>
                  <td className="py-4 pr-4">{est.ok ? formatAed(est.vat) : '—'}</td>
                  <td className="py-4 text-black font-medium">{est.ok ? formatAed(est.total) : 'Itemised proposal'}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-4 font-inter text-body-sm text-gray-500 max-w-[65ch]">
        These totals use published starting prices. Per-person figures use the guest count in that row. A whole-event package is not multiplied by headcount. Unusual venue costs are extra. The written quote is the offer.
      </p>
    </div>
  )
}
