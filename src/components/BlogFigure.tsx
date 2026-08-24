import type { SeoImage } from '../content/seo'

/** Editorial figure for blog imagery. */
export default function BlogFigure({ image, priority = false }: { image: SeoImage; priority?: boolean }) {
  return (
    <figure className="my-10">
      <div className="overflow-hidden rounded-2xl bg-gray-100">
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : 'auto'}
          className="w-full h-auto object-cover"
        />
      </div>
      {image.caption && (
        <figcaption className="mt-3 font-inter text-sm text-gray-500 leading-relaxed">
          {image.caption}
        </figcaption>
      )}
      {image.inclusions && image.inclusions.length > 0 && (
        <ul className="mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-1.5 font-inter text-sm text-gray-600 list-none">
          {image.inclusions.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-gold mt-1.5 shrink-0" aria-hidden>●</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </figure>
  )
}
