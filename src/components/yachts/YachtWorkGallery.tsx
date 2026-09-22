import { Section, Container, SectionLabel, DisplayHeading, BodyCopy } from '../system'
import { YACHT_WORK, YACHT_WORK_PHOTOS } from '@/content/yachtPage'

const galleryFiles = new Set(['salon-buffet', 'tartare', 'nigiri', 'sliders-sandwiches', 'salmon-sliders', 'nut-tartlets'])
const photos = YACHT_WORK_PHOTOS.filter(photo => galleryFiles.has(photo.src.split('/').pop()!.replace('.webp', '')))
export default function YachtWorkGallery() {
  return <Section id="previous-work" tone="ivory" rhythm="chapter">
    <Container>
      <SectionLabel>{YACHT_WORK.label}</SectionLabel>
      <DisplayHeading className="text-[#1B2A4A] mb-4">{YACHT_WORK.h2}</DisplayHeading>
      <BodyCopy className="mb-10 max-w-[62ch]">{YACHT_WORK.intro}</BodyCopy>
      <div className="grid sm:grid-cols-3 gap-8 mb-12">{YACHT_WORK.how.map(item => <article key={item.title}><h3 className="font-playfair text-h4 text-[#1B2A4A] mb-3">{item.title}</h3><p className="font-inter text-body-sm text-gray-600 leading-relaxed">{item.body}</p></article>)}</div>
      <div className="ct-yacht-gallery">{photos.map((photo,index) => <figure key={photo.src} className={index === 0 || index === 5 ? 'ct-yacht-gallery-wide' : ''}><img src={photo.src} alt={photo.alt} width={1280} height={800} loading="lazy" decoding="async" /></figure>)}</div>
      <p className="mt-8"><a href="#yacht-quote" className="font-inter text-body-sm text-gold-ink underline underline-offset-4" data-track="inquiry_form" data-cta-location="previous-work">{YACHT_WORK.cta}</a></p>
    </Container>
  </Section>
}
