import { householdImage, householdImageSet } from '@/content/householdChefs'

export default function HouseholdImage({ id, alt, eager = false, sizes = '(min-width: 900px) 50vw, 100vw' }: { id: string; alt: string; eager?: boolean; sizes?: string }) {
  return <img className="hc-image" src={householdImage(id)} srcSet={householdImageSet(id)} sizes={sizes} alt={alt} width={1536} height={1024} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} decoding="async" />
}
