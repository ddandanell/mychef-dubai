import source from './previousWorkPhotos.json'

export interface WorkPhoto {
  id: string; category: string; title: string; alt: string; tags: string[]
  src: string; thumbnail: string; width: number; height: number
  thumbnailWidth: number; thumbnailHeight: number
  serviceHref: string; serviceLabel: string; sourceBatch: number
}
export const WORK_CATEGORIES: Record<string, string> = {
  bbq: 'BBQ stations', 'boxed-canapes': 'Boxed canapés', breakfast: 'Breakfast & coffee breaks',
  burger: 'Burger stations', canapes: 'Canapés & finger food', chaat: 'Chaat stations',
  christmas: 'Christmas events', desserts: 'Dessert displays', 'high-tea': 'Afternoon tea',
  'live-cooking': 'Live cooking stations', tacos: 'Mexican & taco stations',
  buffets: 'Buffets & catering setups', pasta: 'Pasta stations',
  'private-dining': 'Private dining & table settings', ramadan: 'Ramadan events',
  carving: 'Roast & carving stations', salads: 'Salad buffets', shawarma: 'Shawarma stations',
  yachts: 'Yacht dining & table settings',
}
export const WORK_COLLECTIONS = [
  { id: 'all', label: 'All work', categories: [] as string[] },
  { id: 'private-dining', label: 'Private dining', categories: ['private-dining'] },
  { id: 'yachts', label: 'Yacht dining', categories: ['yachts'] },
  { id: 'bbq', label: 'BBQ', categories: ['bbq'] },
  { id: 'live-stations', label: 'Live stations', categories: ['live-cooking', 'tacos', 'pasta', 'chaat', 'burger', 'carving', 'shawarma', 'bbq'] },
  { id: 'buffets', label: 'Buffets & breakfast', categories: ['buffets', 'breakfast', 'salads'] },
  { id: 'canapes', label: 'Canapés', categories: ['canapes', 'boxed-canapes'] },
  { id: 'desserts-tea', label: 'Desserts & tea', categories: ['desserts', 'high-tea'] },
  { id: 'christmas', label: 'Christmas', categories: ['christmas'] },
  { id: 'ramadan', label: 'Ramadan', categories: ['ramadan'] },
] as const
const highlights = ['private-dining-138','bbq-002','yachts-154','breakfast-030','boxed-canapes-093','christmas-045','tacos-056','ramadan-077','high-tea-051','canapes-098','private-dining-135','pasta-124','bbq-019','buffets-068','desserts-111','shawarma-149','buffets-071','carving-146','chaat-104','burger-095','yachts-151','live-cooking-113','christmas-037','salads-081']
const rank = new Map(highlights.map((id, index) => [id, index]))
export const WORK_PHOTOS: WorkPhoto[] = (source as WorkPhoto[]).slice().sort((a,b) => (rank.get(a.id) ?? 1000) - (rank.get(b.id) ?? 1000))
export const uploadedPhotoCount = WORK_PHOTOS.filter(photo => photo.sourceBatch > 0).length
export function workPhotoSrcSet(photo: WorkPhoto) {
  return photo.thumbnailWidth < photo.width
    ? `${photo.thumbnail} ${photo.thumbnailWidth}w, ${photo.src} ${photo.width}w`
    : `${photo.src} ${photo.width}w`
}
export function filterWorkPhotos(collection = 'all', category = 'all', query = '') {
  const group = WORK_COLLECTIONS.find(item => item.id === collection) ?? WORK_COLLECTIONS[0]
  const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase()
  const words = normalize(query).trim().split(/\s+/).filter(Boolean)
  return WORK_PHOTOS.filter(photo => {
    if (group.categories.length && !(group.categories as readonly string[]).includes(photo.category)) return false
    if (category !== 'all' && photo.category !== category) return false
    const text = normalize(`${photo.title} ${WORK_CATEGORIES[photo.category]} ${photo.tags.join(' ')}`)
    return words.every(word => text.includes(word))
  })
}
export interface WorkContext { collection: string; categories?: string[]; title: string; intro: string }
const contexts: Record<string, WorkContext> = {
  all: { collection: 'all', title: 'See the details. Picture your occasion.', intro: 'From the food and live stations to the tables ready for guests. Explore a selection from our previous work, then find the details you would like for your own occasion.' },
  yachts: { collection: 'yachts', title: 'Yacht tables and catering details.', intro: 'Yacht table settings and a canapé presentation from our previous work. Take a closer look at details you could discuss for your own occasion.' },
  bbq: { collection: 'bbq', title: 'From our BBQ events.', intro: 'The grills, the skewers and the chefs behind the station. See how previous myCHEF BBQ setups came together.' },
  christmas: { collection: 'christmas', title: 'From our Christmas events.', intro: 'Festive buffets, warm dishes and thoughtful displays from our previous Christmas work.' },
  ramadan: { collection: 'ramadan', title: 'From our Ramadan events.', intro: 'Lantern-lit buffets, food stations and outdoor arrangements from our previous Ramadan work.' },
  dining: { collection: 'private-dining', title: 'A closer look at our previous tables.', intro: 'Private tables, place settings and garden arrangements from our event work. Share the details you would like us to plan for your occasion.' },
  buffet: { collection: 'buffets', title: 'From our buffets and breakfast events.', intro: 'A look at food presentation, serving layouts and the team behind the setup, from our previous catering work.' },
  canapes: { collection: 'canapes', title: 'Small bites. Attention to detail.', intro: 'Boxed selections and finger-food displays from our previous catering work. Explore the presentation, then discuss a menu for your guests.' },
  tea: { collection: 'desserts-tea', title: 'From our dessert and afternoon tea tables.', intro: 'Sweet displays, tiered stands and table details from our previous events.' },
  stations: { collection: 'live-stations', title: 'The chefs behind the stations.', intro: 'From tacos and pasta to chaat, carving and BBQ. See the cooking stations we have brought to previous events.' },
}
export function workContextFor(pathname: string): WorkContext {
  const path = pathname.toLowerCase()
  if (/yacht/.test(path)) return contexts.yachts
  if (/christmas/.test(path)) return contexts.christmas
  if (/ramadan|iftar|suhoor/.test(path)) return contexts.ramadan
  if (/bbq/.test(path)) return contexts.bbq
  if (/canape|finger-food|drop-off|grazing|cocktail/.test(path)) return contexts.canapes
  if (/afternoon-tea|high-tea|dessert|pastry|coffee-tea/.test(path)) return contexts.tea
  if (/pasta|italian/.test(path)) return { ...contexts.stations, categories: ['pasta'] }
  if (/taco|mexican/.test(path)) return { ...contexts.stations, categories: ['tacos'] }
  if (/chaat|indian|diwali|holi/.test(path)) return { ...contexts.stations, categories: ['chaat'] }
  if (/shawarma/.test(path)) return { ...contexts.stations, categories: ['shawarma', 'carving', 'bbq'] }
  if (/live-cooking|live-station/.test(path)) return contexts.stations
  if (/breakfast|brunch|corporate|office|business-lunch|conference|buffet/.test(path)) return contexts.buffet
  if (/private|dining|dinner|villa|wedding|anniversary|birthday|celebration|engagement/.test(path)) return contexts.dining
  return contexts.all
}
export function previewWorkPhotos(pathname: string): WorkPhoto[] {
  const context = workContextFor(pathname)
  const photos = filterWorkPhotos(context.collection).filter(photo => !context.categories || context.categories.includes(photo.category))
  // Some supplied folders contain fewer than six photos. Complete a preview
  // with related work from the same submitted collection, never generated art.
  const related = context.collection === 'yachts' ? filterWorkPhotos('canapes') : WORK_PHOTOS
  return [...photos,...related.filter(photo => !photos.some(item => item.id === photo.id))].slice(0,6)
}
export function workGalleryHref(context: WorkContext) {
  if (context.categories?.length === 1) return `/gallery?category=${context.categories[0]}`
  return context.collection === 'all' ? '/gallery' : `/gallery?collection=${context.collection}`
}
/** Use submitted photographs as heroes only where the pictured work matches the service. */
export function pageWorkHero(pathname: string): WorkPhoto | undefined {
  const path = pathname.replace(/\/$/,'') || '/'
  const heroIds: Record<string,string> = {
    '/': 'bbq-002', '/catering-dubai': 'buffets-071', '/corporate': 'breakfast-030',
    '/bbq-catering-dubai': 'bbq-019', '/buffet-catering-dubai': 'buffets-067',
    '/breakfast-catering-dubai': 'breakfast-030', '/brunch-catering-dubai': 'breakfast-034',
    '/office-catering-dubai': 'breakfast-033', '/business-lunch-catering-dubai': 'buffets-071',
    '/corporate-event-catering-dubai': 'breakfast-030', '/conference-catering-dubai': 'buffets-064',
    '/christmas-catering-dubai': 'christmas-037', '/ramadan-catering-dubai': 'ramadan-077',
    '/iftar-catering-dubai': 'ramadan-079', '/suhoor-catering-dubai': 'ramadan-076',
    '/live-cooking-stations-dubai': 'live-cooking-113',
    '/italian-catering-dubai': 'pasta-124', '/indian-catering-dubai': 'chaat-104',
    '/dessert-table-catering-dubai': 'desserts-111',
    '/afternoon-tea-catering-dubai': 'high-tea-051', '/drop-off-catering-dubai': 'boxed-canapes-094',
    '/villas-private-residences': 'private-dining-135', '/luxury-dining-experiences': 'private-dining-138',
    '/events': 'private-dining-133', '/wedding-catering-dubai': 'private-dining-135',
    '/private-party-catering-dubai': 'private-dining-130',
  }
  return WORK_PHOTOS.find(photo => photo.id === heroIds[path])
}
