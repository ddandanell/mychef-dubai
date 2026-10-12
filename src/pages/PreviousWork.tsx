import { Link, useLocation, useSearchParams } from 'react-router'
import { ArrowUpRight, Search, X } from 'lucide-react'
import SEO from '@/components/SEO'
import WorkPhotoCard from '@/components/previous-work/WorkPhotoCard'
import WorkLightbox from '@/components/previous-work/WorkLightbox'
import { WORK_PHOTOS, WORK_CATEGORIES, WORK_COLLECTIONS, filterWorkPhotos, workPhotoSrcSet, type WorkPhoto } from '@/content/previousWork'
import { trackEvent } from '@/lib/analytics'
import '@/styles/previous-work.css'

const SITE = 'https://www.mychef.ae'
const gallerySchema = {
  '@context': 'https://schema.org', '@graph': [
    { '@type': ['CollectionPage','ImageGallery'], '@id': `${SITE}/gallery#webpage`, name: 'Previous Work — myCHEF', url: `${SITE}/gallery`,
      hasPart: WORK_PHOTOS.map(photo => ({ '@type': 'ImageObject', '@id': `${SITE}/gallery#${photo.id}`, name: photo.title, description: photo.alt, contentUrl: SITE + photo.src, thumbnailUrl: SITE + photo.thumbnail, width: photo.width, height: photo.height, keywords: photo.tags.join(', '), isPartOf: { '@id': `${SITE}/gallery#webpage` } })) },
    { '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'Previous Work', item: `${SITE}/gallery` } ] },
  ],
}
export default function PreviousWork() {
  const [params, setParams] = useSearchParams()
  const { pathname } = useLocation()
  const collection = WORK_COLLECTIONS.some(item => item.id === params.get('collection')) ? params.get('collection')! : 'all'
  const category = Object.hasOwn(WORK_CATEGORIES, params.get('category') || '') ? params.get('category')! : 'all'
  const query = params.get('q') || ''
  const pageSize = 24
  const pageCount = Math.max(1, Math.min(Math.ceil(WORK_PHOTOS.length / pageSize), Math.floor(Number(params.get('page')) || 1)))
  const visible = filterWorkPhotos(collection,category,query)
  const shown = visible.slice(0,pageCount * pageSize)
  const selected = WORK_PHOTOS.find(photo => photo.id === params.get('photo')) || null
  const lightboxPhotos = selected && !visible.some(photo => photo.id === selected.id) ? WORK_PHOTOS : visible
  const hero = WORK_PHOTOS.find(photo => photo.id === 'private-dining-138')!
  const updateFilter = (key: string, value: string, submitSearch = false) => {
    const next = new URLSearchParams(params)
    if (value && value !== 'all') next.set(key,value); else next.delete(key)
    next.delete('page'); next.delete('photo')
    if (key === 'collection') next.delete('category')
    setParams(next,{replace:true})
    if (submitSearch || key !== 'q') trackEvent('previous_work_filter', { page_path: pathname, filter_type: key, filter_value: key === 'q' ? 'search' : value, result_count: filterWorkPhotos(key === 'collection' ? value : collection, key === 'category' ? value : key === 'collection' ? 'all' : category, key === 'q' ? value : query).length })
  }
  const selectPhoto = (photo: WorkPhoto) => {
    const next = new URLSearchParams(params); next.set('photo',photo.id); setParams(next,{replace:true})
    trackEvent('previous_work_photo_view', { photo_id: photo.id, page_path: pathname, source: 'gallery' })
  }
  const clear = () => { setParams({}, {replace:true}) }
  return <div className="pw-page">
    <SEO title="Previous Work | Event & Catering Photo Gallery | myCHEF" description="Explore previous myCHEF work: private dining, yacht tables, BBQs, live stations, buffets and festive events. Filter photos and plan your own occasion." canonicalPath="/gallery" ogImage={hero.src} schema={gallerySchema} />
    <header className="pw-hero pw-wrap"><div className="pw-hero-copy"><nav aria-label="Breadcrumb"><Link to="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Previous Work</span></nav><p className="pw-eyebrow">Our work, in the details</p><h1>Previous Work</h1><p className="pw-hero-line">The food. The tables.<br/><em>The moments before guests arrive.</em></p><p className="pw-intro">A closer look at the occasions we have helped bring together. Browse our food, chefs at work and table settings, from private dining and yacht service to live stations and festive buffets.</p><div className="pw-actions"><a className="pw-button" href="#work-gallery">Explore our work<ArrowUpRight size={17} /></a><Link className="pw-text-link" to="/inquiry?from=previous-work" data-track="inquiry_form" data-cta-location="previous-work-hero">Plan your occasion<ArrowUpRight size={17} /></Link></div><div className="pw-hero-facts"><span>{WORK_PHOTOS.length} photographs</span><span>{Object.keys(WORK_CATEGORIES).length} categories</span><span>From our previous work</span></div></div><figure><img src={hero.src} srcSet={workPhotoSrcSet(hero)} sizes="(min-width: 900px) 50vw, 92vw" width={hero.width} height={hero.height} alt={hero.alt} fetchPriority="high" decoding="async" /><figcaption>Garden dining, ready for guests. A previous myCHEF setup.</figcaption></figure></header>
    <section id="work-gallery" className="pw-gallery-section" aria-labelledby="pw-gallery-heading"><div className="pw-wrap"><div className="pw-gallery-heading"><div><p className="pw-eyebrow">Find your kind of occasion</p><h2 id="pw-gallery-heading">Take a closer look.</h2></div><p>Explore the details you love.<br/>We will shape them around your brief.</p></div>
      <div className="pw-filters" role="group" aria-label="Filter previous work by collection">{WORK_COLLECTIONS.map(item => <button key={item.id} type="button" aria-pressed={collection === item.id} onClick={() => updateFilter('collection',item.id)}>{item.label}<span>{filterWorkPhotos(item.id).length}</span></button>)}</div>
      <div className="pw-tools"><label className="pw-category-select"><span>Type of work</span><select aria-label="Filter by type of work" value={category} onChange={event => updateFilter('category',event.target.value)}><option value="all">All types</option>{Object.entries(WORK_CATEGORIES).filter(([id]) => collection === 'all' || (WORK_COLLECTIONS.find(item => item.id === collection)!.categories as readonly string[]).includes(id)).map(([id,label]) => <option key={id} value={id}>{label}</option>)}</select></label><form className="pw-search" role="search" onSubmit={event => { event.preventDefault(); updateFilter('q',query,true) }}><label htmlFor="pw-search" className="sr-only">Search work photos</label><Search size={18} aria-hidden="true" /><input id="pw-search" type="search" placeholder="Search tacos, garden, table settings…" value={query} onChange={event => { updateFilter('q',event.target.value) }} /><button type="submit">Search</button></form>{(collection !== 'all' || category !== 'all' || query) && <button type="button" className="pw-clear" onClick={clear}>Clear filters<X size={15} /></button>}</div>
      <p className="pw-result-count" role="status">Showing {shown.length} of {visible.length} photographs{query && <> matching “{query}”</>}</p>
      {shown.length ? <div className="pw-gallery-grid">{shown.map(photo => <WorkPhotoCard key={photo.id} photo={photo} onOpen={selectPhoto} />)}</div> : <div className="pw-empty"><h3>No photographs match these filters.</h3><p>Try another type of work or clear your search.</p><button className="pw-button" onClick={clear}>Show all work</button></div>}
      {shown.length < visible.length && <div className="pw-load-more"><button className="pw-button" onClick={() => { const next = new URLSearchParams(params); next.set('page',String(pageCount + 1)); setParams(next,{replace:true}); trackEvent('previous_work_load_more',{page_path: pathname,photos_shown: Math.min((pageCount + 1) * pageSize,visible.length)}) }}>Show {Math.min(pageSize,visible.length - shown.length)} more photographs<ArrowUpRight size={17} /></button></div>}
      <p className="pw-gallery-note">These photographs show previous work. Menus, staff, equipment, flowers and table styling are confirmed for your own booking in a written proposal.</p>
    </div></section>
    <section className="pw-plan"><div className="pw-wrap"><p className="pw-eyebrow">Make the next occasion yours</p><h2>Seen a detail you love?</h2><p>Tell us your date, guest count and venue. Send us a photo you like from this gallery and we will help you plan the food, service and setup.</p><div className="pw-actions"><Link className="pw-button" to="/inquiry?from=previous-work" data-track="inquiry_form" data-cta-location="previous-work-end">Plan with myCHEF<ArrowUpRight size={17} /></Link><Link className="pw-text-link" to="/catering-dubai">Explore catering services<ArrowUpRight size={17} /></Link><Link className="pw-text-link" to="/private-chef-dubai">Explore private chef services<ArrowUpRight size={17} /></Link></div></div></section>
    <WorkLightbox photos={lightboxPhotos} photo={selected} onChange={photo => { const next = new URLSearchParams(params); next.set('photo',photo.id); setParams(next,{replace:true}) }} onClose={() => { const next = new URLSearchParams(params); next.delete('photo'); setParams(next,{replace:true}) }} />
  </div>
}
