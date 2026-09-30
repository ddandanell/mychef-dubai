/** Portraits illustrate matching styles; confirmed candidates have their own profiles. */
export default function HouseholdPortrait({ id, alt }: { id: string; alt: string }) {
  const image = (width: number) => `/images/household-chefs/portraits/${id}-${width}.webp`
  return <img
    className="hc-image hc-portrait"
    src={image(600)}
    srcSet={[360, 600, 960].map(width => `${image(width)} ${width}w`).join(', ')}
    sizes="(min-width: 1101px) 400px, (min-width: 701px) 46vw, 100vw"
    alt={alt}
    width={960}
    height={1200}
    loading="lazy"
    decoding="async"
  />
}
