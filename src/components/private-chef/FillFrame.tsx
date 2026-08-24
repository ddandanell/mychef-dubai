export default function FillFrame({
  src,
  alt,
  width,
  height,
  className = '',
  eager = false,
  objectPosition = 'center',
  sizes = '100vw',
}: {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  eager?: boolean
  objectPosition?: string
  sizes?: string
}) {
  const decorative = alt === ''

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition }}
        loading={eager ? 'eager' : 'lazy'}
        {...(eager ? { fetchPriority: 'high' as const } : {})}
        decoding="async"
        {...(decorative ? { 'aria-hidden': true as const } : {})}
      />
    </div>
  )
}
