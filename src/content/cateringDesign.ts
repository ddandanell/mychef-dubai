import designData from './cateringDesign.json'

export type CateringPhoto = { image: string; alt: string }
export type CateringDesign = {
  supporting?: CateringPhoto[]
  title: string
  lead: string
  keyword: string
  image: string
  alt: string
  trail: { url: string; anchor: string; current?: boolean }[]
}

// Only catering heroes and planning articles import the complete copy.
export const cateringDesign = designData as Record<string, CateringDesign>
