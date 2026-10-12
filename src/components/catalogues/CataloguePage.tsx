import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { ArrowRight, BookOpen, Check, ChefHat, Copy, MessageCircle, Search, Users, X } from 'lucide-react'
import SEO from '@/components/SEO'
import { trackEvent } from '@/lib/analytics'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import { CANCELLATION_FAQ_ANSWER, DEPOSIT_FAQ_ANSWER } from '@/content/bookingTerms'
import { CORPORATE_MENUS_PATH, DINNER_MENUS_PATH, corporateFaqs, dinnerFaqs, imagePath, money, round, stationChefCharge, stationDiscount, tierPrice } from '@/content/catalogues/catalogue'
import type { CorporateCatalogue, CorporatePackage, DinnerCatalogue, DinnerMenu, PriceTier, Station } from '@/content/catalogues/catalogue'
import '@/styles/menu-catalogues.css'

type Props = {mode:'corporate';corporate:CorporateCatalogue;dinner?:never}|{mode:'dinner';dinner:DinnerCatalogue;corporate?:never}
type Choice = {id:string;name:string;price:number;unit:string;perGuest:boolean;min?:number}
type Line = {name:string;amount:number;detail?:string}
const stationFields = [['chooseItems','Station selection'],['servedWith','Served with'],['salads','Salads'],['starters','Starters'],['sideDishes','Side dishes'],['miniDesserts','Mini desserts'],['beverages','Beverages']] as const
const sectionIntro:Record<string,string>={
 'breakfast':'Morning meetings, office breakfasts and afternoon tea. Compare bakery selections, savoury dishes and beverages.',
 'light-buffet':'Canapés, finger foods and small plates for receptions and networking. The full menu shows how many items to choose.',
 'lunch-buffet':'International, Arabic and Indian spreads for groups of 20 or more, with prices matched to the published guest tiers.',
 'lunch-small-group':'Fixed-price lunch packages for intimate team gatherings of 10–15 guests.',
 'coffee-breaks-lunch':'Coffee breaks and lunch in one agenda. Full-day service timing is agreed separately.',
 'stations':'Sixteen chef-led counters, from BBQ and shawarma to sushi, dumplings and dessert. Mandatory chef charges are itemised separately.',
}
function TierTable({tiers}:{tiers:PriceTier[]}) {return <table className="mc-tier"><caption>Prices before 5% VAT</caption><thead><tr><th scope="col">Guests</th><th scope="col">Rate (AED)</th></tr></thead><tbody>{tiers.map((t,i)=><tr key={i}><th scope="row">{t.range}</th><td>{money(t.mychefRate)}<small>{t.lumpsum?'fixed package':'per guest'}</small></td></tr>)}</tbody></table>}
function MenuDetails({menu}:{menu:Record<string,string[]>}) {return <details className="mc-full-menu"><summary><BookOpen size={17}/>View the full menu</summary><div>{Object.entries(menu).filter(([,items])=>items.length).map(([name,items])=><div className="mc-course-group" key={name}><h4>{name}</h4><ul>{items.map((item,i)=><li key={i}>{item}</li>)}</ul></div>)}</div></details>}
function MenuCard({mode,item,selected,guests,onSelect}:{mode:'corporate'|'dinner';item:CorporatePackage|Station|DinnerMenu;selected:boolean;guests:number;onSelect:()=>void}) {
 const isDinner='sellingPrice' in item, isStation='perHeadTiers' in item
 const tiers=isDinner?[]:isStation?item.perHeadTiers:item.guestTiers
 const current=isDinner?(guests>=2&&guests<=20?item.sellingPrice*guests:undefined):tierPrice(tiers,guests)?.amount
 const menu=isDinner?Object.fromEntries(item.courses.map((c,i)=>[`${i+1}. ${c.slot}`,[c.dish]])):isStation?Object.fromEntries(stationFields.map(([k,label])=>[label,item[k]])):item.menu
 return <article className={`mc-card ${selected?'mc-selected':''}`} id={item.id}>
  <a className="mc-card-image" href={`#${item.id}`} aria-label={`Link to ${item.name}`}><img src={imagePath(mode,item.id)} alt={`${item.name}, myCHEF ${mode==='corporate'?'catering':'signature dinner'} menu`} width="900" height="600" loading="lazy" decoding="async"/></a>
  <div className="mc-card-body">
   {isDinner&&<p className="mc-eyebrow">{item.chef} · {item.cuisine}</p>}
   <h3>{item.name}</h3>
   {isDinner?<div className="mc-menu-rate"><strong>{money(item.sellingPrice)}</strong><span>per person · {item.coursesCount} courses · 2–20 guests<br/>Exclusive of 5% VAT</span></div>:<TierTable tiers={tiers}/>}
   <MenuDetails menu={menu}/>
   <div className="mc-inclusions"><strong>Included</strong><p>{isDinner?'Chef, ingredients, specialty equipment and plating ware. One waiter per ten guests.':item.inclusions.join(' · ')}</p></div>
   {isStation&&<p className="mc-small"><strong>Chef charge:</strong> AED 700 per station; AED 1,400 for 75+ guests, before VAT.{item.perHeadExtras.map((e,i)=><span className="mc-note" key={i}>{e.item}: +{money(e.mychef)} per guest</span>)}</p>}
   {item.notes.map((n,i)=><p className="mc-note" key={i}>{n}</p>)}
   <div className="mc-card-footer"><div><small>{guests} guests{isStation?' · food only':''}</small><strong>{current===undefined?'Custom quote':money(current)}</strong></div><button type="button" aria-pressed={selected} onClick={onSelect}>{selected?<Check size={16}/>:<ArrowRight size={16}/>} {selected?'Selected':'Add to quote'}</button></div>
  </div>
 </article>
}
function schemaFor(mode:'corporate'|'dinner',corporate:CorporateCatalogue|undefined,dinner:DinnerCatalogue|undefined,path:string,hub:string) {
 const url=`https://www.mychef.ae${path}`
 const offers=corporate?[...corporate.sections.flatMap(s=>s.packages.map(p=>({name:p.name,id:p.id,tiers:p.guestTiers}))),...corporate.stations.map(s=>({name:s.name,id:s.id,tiers:s.perHeadTiers}))].flatMap(p=>p.tiers.map(t=>({'@type':'Offer',url:`${url}#${p.id}`,itemOffered:{'@type':'Service',name:p.name},eligibleQuantity:{'@type':'QuantitativeValue',minValue:t.minGuests,...(t.maxGuests?{maxValue:t.maxGuests}:{})},priceSpecification:{'@type':'UnitPriceSpecification',priceCurrency:'AED',price:t.mychefRate,valueAddedTaxIncluded:false,unitText:t.lumpsum?'fixed package':'per guest'},description:corporate.stations.some(s=>s.id===p.id)?'Station food price; mandatory chef charge is additional.':'See the menu card for inclusions.'}))) : dinner!.menus.map(m=>({'@type':'Offer',url:`${url}#${m.id}`,itemOffered:{'@type':'Service',name:m.name},eligibleQuantity:{'@type':'QuantitativeValue',minValue:2,maxValue:20},priceSpecification:{'@type':'UnitPriceSpecification',priceCurrency:'AED',price:m.sellingPrice,unitText:'per person',valueAddedTaxIncluded:false},description:'Signature dinner rate; optional supplements and peak-date surcharge are additional.'}))
 const faqs=mode==='corporate'?corporateFaqs:dinnerFaqs
 return {'@context':'https://schema.org','@graph':[
  {'@type':'CollectionPage',name:mode==='corporate'?'Corporate menus and prices':'Private dinner menus and prices',url},
  {'@type':'Service',name:mode==='corporate'?'Corporate catering menu collection':'Signature private dinner collection',provider:{'@id':'https://www.mychef.ae/#organization'},areaServed:{'@type':'City',name:'Dubai'},hasOfferCatalog:{'@type':'OfferCatalog',name:'Menus and prices',itemListElement:offers}},
  {'@type':'BreadcrumbList',itemListElement:[{name:'Home',item:'https://www.mychef.ae/'},{name:mode==='corporate'?'Corporate':'Dinner',item:`https://www.mychef.ae${hub}`},{name:'Menus & Prices',item:url}].map((c,i)=>({'@type':'ListItem',position:i+1,...c}))},
  {'@type':'FAQPage',mainEntity:faqs.map(f=>({'@type':'Question',name:f.q,acceptedAnswer:{'@type':'Answer',text:f.a}}))},
 ]}
}
export default function CataloguePage({mode,corporate,dinner}:Props) {
 const isCorporate=mode==='corporate', path=isCorporate?CORPORATE_MENUS_PATH:DINNER_MENUS_PATH, hub=isCorporate?'/corporate':'/luxury-dining-experiences'
 const [guests,setGuests]=useState(isCorporate?20:2), [filter,setFilter]=useState('all'), [search,setSearch]=useState(''),[date,setDate]=useState('')
 const [selected,setSelected]=useState<string[]>([]),[quantities,setQuantities]=useState<Record<string,number>>({}),[upgrades,setUpgrades]=useState<Record<string,number>>({}),[peak,setPeak]=useState(false),[copied,setCopied]=useState(false)
 const extraChoices:Choice[]=isCorporate?corporate.extras.map((e,i)=>({id:`extra-${i}`,name:e.item,price:e.mychef,unit:e.unit,perGuest:e.unit==='per head',min:e.item.includes('High Bar Stool')?5:undefined})):dinner.addOns.filter(a=>a.price!==null).map(a=>({id:a.id,name:a.name,price:a.price!,unit:a.unit,perGuest:a.unit==='per person'}))
 if(corporate) for(const [gi,g] of corporate.stationAddOns.entries()) {
  if(g.items) for(const [i,item] of g.items.entries())extraChoices.push({id:`station-extra-${gi}-${i}`,name:item,price:g.mychefPerPersonPerItem!,unit:'per person, per item',perGuest:true})
  if(g.options) for(const [i,e] of g.options.entries())extraChoices.push({id:`station-extra-${gi}-${i}`,name:e.item,price:e.mychef,unit:'per person',perGuest:true})
 }
 const toggle=(id:string)=>{setSelected(s=>s.includes(id)?s.filter(x=>x!==id):isCorporate?[...s,id]:[id]);trackEvent('menu_select',{catalogue:mode,menu_id:id,page_path:path})}
 const setQuantity=(id:string,n:number)=>{setQuantities(q=>({...q,[id]:Math.max(0,Math.min(999,Math.floor(n)||0))}));trackEvent('menu_addon_select',{catalogue:mode,addon_id:id,page_path:path})}
 const lines:Line[]=[], warnings:string[]=[]
 let stationFood=0,stationCount=0
 for(const id of selected) {
  if(corporate){
   const pkg=corporate.sections.flatMap(s=>s.packages).find(p=>p.id===id)
   const station=corporate.stations.find(s=>s.id===id)
   const p=pkg||station;if(!p)continue
   const priced=tierPrice(pkg?pkg.guestTiers:station!.perHeadTiers,guests)
   if(!priced){warnings.push(`${p.name}: ${guests} guests is outside a published tier. Please request a custom quote.`);continue}
   lines.push({name:p.name,amount:priced.amount,detail:priced.detail})
   if(station){
    stationCount++;stationFood+=priced.amount
    lines.push({name:`${station.name} — chef charge`,amount:stationChefCharge(guests,corporate.stationChefCharges),detail:guests>=75?'Two chefs for this station':'One chef for this station'})
    const upgrade=station.perHeadExtras[upgrades[id]??-1]
    if(upgrade){stationFood+=upgrade.mychef*guests;lines.push({name:`${station.name} — ${upgrade.item}`,amount:upgrade.mychef*guests,detail:`${money(upgrade.mychef)} × ${guests} guests`})}
   }
  }else{
   const m=dinner.menus.find(m=>m.id===id);if(!m)continue
   if(guests<2||guests>20){warnings.push('Signature menu rates cover 2–20 guests. Please request a custom quote for this group.');continue}
   lines.push({name:m.name,amount:m.sellingPrice*guests,detail:`${money(m.sellingPrice)} × ${guests} guests`})
  }
 }
 if(stationCount>3)warnings.push('More than three live stations: staffing and multi-station discount require a custom quote.')
 const discount=stationDiscount(stationCount,stationFood)
 if(discount)lines.push({name:`${stationCount===2?15:20}% multi-station food discount`,amount:-round(discount),detail:'Chef charges, other extras and VAT excluded; confirmed at quote.'})
 for(const extra of extraChoices){
  const qty=quantities[extra.id]||0;if(!qty)continue
  if(extra.min&&qty<extra.min)warnings.push(`${extra.name}: minimum quantity ${extra.min}.`)
  lines.push({name:extra.name,amount:extra.price*qty,detail:`${money(extra.price)} × ${qty} (${extra.unit})`})
 }
 const datePeak=!isCorporate&&['12-24','12-25','12-31'].includes(date.slice(5))
 if(!isCorporate&&(peak||datePeak)&&selected.length){const base=lines.reduce((n,l)=>n+l.amount,0);lines.push({name:'Peak-date surcharge (50%)',amount:round(base*.5),detail:'Indicative surcharge; final application confirmed in writing.'})}
 const subtotal=round(lines.reduce((n,l)=>n+l.amount,0)),vat=round(subtotal*.05),total=round(subtotal+vat),hasSelection=selected.length>0
 const faqs=isCorporate?corporateFaqs:dinnerFaqs
 const summary=[`Hi myCHEF, I would like to enquire about ${isCorporate?'corporate catering':'a signature private dinner'}.`,`Catalogue: https://www.mychef.ae${path}`,`Guests: ${guests}`,`Event date: ${date||'Please confirm'}`,...lines.map(l=>`${l.name}: ${money(l.amount)}${l.detail?` (${l.detail})`:''}`),...(warnings.length?warnings:[`Subtotal: ${money(subtotal)}`,`VAT 5%: ${money(vat)}`,`Estimated total: ${money(total)}`]),'Venue in Dubai:','Allergies and dietary requirements:','Please confirm availability, menu selections and the final written quotation.'].join('\n')
 useWhatsAppMessage(`Hi myCHEF, I am viewing the ${isCorporate?'corporate':'dinner'} menus and prices: https://www.mychef.ae${path}.`)
 useEffect(()=>{trackEvent('menu_catalogue_view',{catalogue:mode,page_path:path})},[mode,path])
 const matches=(name:string,content:string)=>`${name} ${content}`.toLowerCase().includes(search.toLowerCase().trim())
 const visibleSections=corporate?.sections.map(s=>({...s,packages:s.packages.filter(p=>matches(p.name,JSON.stringify(p.menu)))})).filter(s=>(filter==='all'||filter===s.id)&&s.packages.length)||[]
 const visibleStations=corporate?.stations.filter(s=>(filter==='all'||filter==='stations')&&matches(s.name,JSON.stringify(stationFields.map(([k])=>s[k]))))||[]
 const visibleDinners=dinner?.menus.filter(m=>(filter==='all'||filter===m.chef||filter===m.cuisine)&&matches(m.name,`${m.chef} ${m.cuisine} ${m.courses.map(c=>c.dish).join(' ')}`))||[]
 const visibleCount=visibleSections.reduce((n,s)=>n+s.packages.length,0)+visibleStations.length+visibleDinners.length
 const heroId=isCorporate?'hero-corporate-buffet':'hero-finedining'
 return <div className="mc-catalogue">
  <SEO title={isCorporate?'Corporate Catering Menus & Prices Dubai | myCHEF':'Private Dinner Menus & Prices Dubai | myCHEF'} description={isCorporate?'Corporate catering menus and prices in Dubai: compare 33 packages and 16 live stations, full menus, guest tiers and inclusions. Prices exclude 5% VAT.':'Private dinner menus and prices in Dubai: explore 13 signature menus for 2–20 guests, from AED 600 per person. Chef and waiter included; 5% VAT extra.'} canonicalPath={path} ogImage={imagePath(mode,heroId)} hideSiteName schema={schemaFor(mode,corporate,dinner,path,hub)}/>
  <header className="mc-hero"><img src={imagePath(mode,heroId)} width="1600" height="1000" alt={isCorporate?'Corporate catering buffet with a selection of dishes':'A plated private fine-dining dinner'} fetchPriority="high"/><div className="mc-hero-shade"/><div className="mc-wrap mc-hero-content">
   <nav aria-label="Breadcrumb" className="mc-breadcrumb"><Link to="/">Home</Link><span>/</span><Link to={hub}>{isCorporate?'Corporate':'Dinner'}</Link><span>/</span><span aria-current="page">Menus & Prices</span></nav>
   <p className="mc-eyebrow">myCHEF Dubai · {isCorporate?'Meetings, teams & company occasions':'The signature collection'}</p>
   <h1>{isCorporate?'Corporate Catering Menus and Prices Dubai':'Private Dinner Menus and Prices Dubai'}</h1>
   <p>{isCorporate?'Corporate catering menus and prices in Dubai, with every dish, guest tier and inclusion in one place. Choose breakfast, a buffet or live stations, then send your selections for an itemised quote.':'Private dinner menus and prices in Dubai, from a three-course Italian classic to a seven-course tasting journey. Explore the dishes, choose your chef and plan a dinner around your table.'}</p>
   <div className="mc-hero-actions"><a className="mc-button" href="#browse-menus">Explore menus <ArrowRight size={18}/></a><a className="mc-button mc-button-outline" href="#your-quote">Build your quote <ChefHat size={18}/></a></div>
   <div className="mc-facts"><span><BookOpen size={17}/>{isCorporate?'33 packages + 16 live stations':'13 signature menus · 2 chefs'}</span><span><Users size={17}/>{isCorporate?'Small groups to 105+ guests':'2–20 guests · from AED 600pp'}</span><span>Prices exclusive of 5% VAT</span></div>
  </div></header>
  <div className="mc-wrap mc-how"><div><span>01</span><h2>Explore the dishes</h2><p>Open each full menu. Every course and selection is here.</p></div><div><span>02</span><h2>See your price</h2><p>Enter your guest count. Fixed packages and per-person rates stay clearly labelled.</p></div><div><span>03</span><h2>Make it yours</h2><p>Send your selection, date and dietary requirements. We confirm the details in writing.</p></div></div>
  <div className="mc-wrap mc-content" id="browse-menus"><div className="mc-main">
   <div className="mc-heading"><p className="mc-eyebrow">The full collection</p><h2>{isCorporate?'Corporate catering menus and prices Dubai — choose your format':'Private dinner menus and prices Dubai — choose your evening'}</h2><p>{isCorporate?'Published rates are matched to the exact guest ranges below. If your number falls between tiers, we will quote that group individually.':'Flat per-person menu rates apply to parties of 2–20. Signature menus and the existing Date Night package have their own inclusions and pricing; select the offering that suits your evening.'}</p>{!isCorporate&&<p>For the starting package for two, see <Link to="/romantic-dinner-dubai">Date Night from AED 2,400</Link>.</p>}</div>
   <div className="mc-controls"><label className="mc-search"><Search size={18}/><span className="sr-only">Search dishes or menus</span><input type="search" placeholder="Search dishes, cuisines or menus…" value={search} onChange={e=>setSearch(e.target.value)}/></label><label className="mc-guests">Guests <input type="number" min={isCorporate?1:2} max="2000" value={guests} onChange={e=>setGuests(Math.max(1,Math.min(2000,Math.floor(Number(e.target.value))||1)))}/></label></div>
   <nav className="mc-filters" aria-label="Menu filters"><button type="button" aria-pressed={filter==='all'} onClick={()=>setFilter('all')}>All menus</button>{(corporate?corporate.sections.map(s=>({id:s.id,label:s.name.split(' — ')[0]})):[...new Set(dinner!.menus.map(m=>m.chef)),...new Set(dinner!.menus.map(m=>m.cuisine))].map(c=>({id:c,label:c}))).map(f=><button type="button" key={f.id} aria-pressed={filter===f.id} onClick={()=>setFilter(f.id)}>{f.label}</button>)}{isCorporate&&<button type="button" aria-pressed={filter==='stations'} onClick={()=>setFilter('stations')}>Live stations</button>}</nav>
   <p className="mc-small" role="status">{visibleCount} {visibleCount===1?'menu':'menus'} shown · {guests} guests for price previews</p>
   {visibleCount===0&&<p className="mc-empty">No menus match this search. Try a dish name or choose All menus.</p>}
   {visibleSections.map(s=><section className="mc-menu-section" key={s.id} id={s.id}><div className="mc-section-heading"><p className="mc-eyebrow">{s.packages.length} menus</p><h2>{s.name}</h2><p>{sectionIntro[s.id]}</p></div><div className="mc-grid">{s.packages.map(p=><MenuCard key={p.id} mode={mode} item={p} guests={guests} selected={selected.includes(p.id)} onSelect={()=>toggle(p.id)}/>)}</div></section>)}
   {visibleStations.length>0&&<section className="mc-menu-section" id="stations"><div className="mc-section-heading"><p className="mc-eyebrow">Made in front of your guests</p><h2>Live stations</h2><p>{sectionIntro.stations}</p><p>Two stations: 15% off station food. Three stations: 20%. Chef charges and VAT are additional.</p></div><div className="mc-grid">{visibleStations.map(s=><MenuCard key={s.id} mode={mode} item={s} guests={guests} selected={selected.includes(s.id)} onSelect={()=>toggle(s.id)}/>)}</div></section>}
   {visibleDinners.length>0&&<div className="mc-grid">{visibleDinners.map(m=><MenuCard key={m.id} mode={mode} item={m} guests={guests} selected={selected.includes(m.id)} onSelect={()=>toggle(m.id)}/>)}</div>}
   <section className="mc-menu-section" id="extras"><div className="mc-section-heading"><p className="mc-eyebrow">Finishing touches</p><h2>{isCorporate?'Furniture, service and upgrades':'Pairings, supplements and styling'}</h2><p>All add-on rates exclude 5% VAT. Enter a quantity to include an item. For per-person extras, enter the number of guests receiving that item.</p></div>
    <div className="mc-extra-list">{extraChoices.filter(e=>!e.id.startsWith('station-extra')).map(e=><div className="mc-extra" key={e.id}><div><h3>{e.name}</h3><p>{money(e.price)} · {e.unit}</p></div><label>Quantity<input type="number" min="0" max="999" value={quantities[e.id]||0} onChange={event=>setQuantity(e.id,Number(event.target.value))} aria-label={`${e.name} quantity`}/></label></div>)}</div>
    {corporate&&<div className="mc-station-upgrades"><h3>Live-station menu additions</h3>{corporate.stationAddOns.map((g,gi)=><details key={g.group}><summary>{g.group} · {g.mychefPerPersonPerItem?`${money(g.mychefPerPersonPerItem)} per person, per item`:'per-person rates below'}</summary>{g.note&&<p>{g.note}</p>}{extraChoices.filter(e=>e.id.startsWith(`station-extra-${gi}-`)).map(e=><div className="mc-extra" key={e.id}><div><h4>{e.name}</h4><p>{money(e.price)} · {e.unit}</p></div><label>Quantity<input type="number" min="0" max="999" value={quantities[e.id]||0} onChange={event=>setQuantity(e.id,Number(event.target.value))} aria-label={`${e.name} quantity`}/></label></div>)}</details>)}</div>}
   </section>
   <section className="mc-terms" id="service-details"><p className="mc-eyebrow">Before you book</p><h2>Service details & booking</h2>
    {corporate?Object.entries(corporate.terms).filter(([k])=>!['multiStationDiscounts','governingLaw'].includes(k)).map(([k,v])=><details key={k}><summary>{({vat:'VAT',quoteValidity:'Quote validity',minimumGuests:'Guest minimums',guestCount:'Final guest count',eventDuration:'Service timing',foodDisplay:'Food display',location:'Location',staffing:'Staffing',menuChanges:'Menu changes'} as Record<string,string>)[k]||k}</summary>{Array.isArray(v)?<ul>{v.map((s,i)=><li key={i}>{s}</li>)}</ul>:<p>{v}</p>}</details>):Object.entries(dinner.terms).filter(([k])=>!['minimumGuests','vat'].includes(k)).map(([k,v])=><details key={k}><summary>{({groupPricing:'Group pricing',serviceWindow:'Timing',staffing:'Staffing',kitchenRequirements:'Your kitchen',alcohol:'Drinks & halal menus',marketNote:'Seasonal & premium ingredients',customization:'Dietary requirements'} as Record<string,string>)[k]||k}</summary><p>{String(v)}</p></details>)}
    {!isCorporate&&<p className="mc-small">{dinner.addOns.find(a=>a.id==='peak-date-surcharge')?.name}: +50%, confirmed at quote.</p>}
    <details><summary>Payment & confirmation</summary><p>{isCorporate?'Corporate catering requires full payment in advance, unless an alternative arrangement such as an LPO is expressly accepted in your written quotation. Payment methods and any card fees are confirmed on the quotation.':DEPOSIT_FAQ_ANSWER}</p></details>
    <details><summary>Cancellation</summary><p>{CANCELLATION_FAQ_ANSWER.split(' Full wording:')[0]}</p><Link to={isCorporate?'/corporate-booking-terms':'/private-client-booking-terms'}>Read the full booking terms</Link></details>
    <p className="mc-small">Menu estimates are subject to date, location, availability and the final agreed brief. The accepted written quotation and linked booking terms confirm your booking. myCHEF is a brand of Numini.</p>
   </section>
   <section className="mc-faq"><p className="mc-eyebrow">Your questions, answered</p><h2>Menus & prices: frequently asked questions</h2>{faqs.map(f=><details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}</section>
   <div className="mc-related"><Link to={hub}>{isCorporate?'Explore corporate catering':'Explore dinner experiences'} <ArrowRight size={17}/></Link>{!isCorporate&&<Link to="/private-chef-dubai">Looking for regular chef visits? <ArrowRight size={17}/></Link>}</div>
  </div>
  <aside className="mc-quote-column"><div className="mc-quote" id="your-quote"><p className="mc-eyebrow">Your table, your selection</p><h2>Your menu quote</h2><p className="mc-small">{isCorporate?'Combine packages and live stations for the same event.':'Choose one signature menu for the whole party.'}</p><div className="mc-quote-fields"><label>Guests<input type="number" min={isCorporate?1:2} max="2000" value={guests} onChange={e=>setGuests(Math.max(1,Math.min(2000,Math.floor(Number(e.target.value))||1)))}/></label><label>Event date<input type="date" value={date} onChange={e=>setDate(e.target.value)}/></label></div>
   {!hasSelection&&<p className="mc-empty">Add a menu from the collection to begin your estimate.</p>}
   {selected.map(id=>{const item=corporate?[...corporate.sections.flatMap(s=>s.packages),...corporate.stations].find(p=>p.id===id):dinner.menus.find(m=>m.id===id);const station=corporate?.stations.find(s=>s.id===id);return <div className="mc-chosen" key={id}><div><strong>{item?.name}</strong><button type="button" aria-label={`Remove ${item?.name}`} onClick={()=>setSelected(s=>s.filter(x=>x!==id))}><X size={15}/></button></div>{station&&station.perHeadExtras.length>0&&<label>Station upgrade<select value={upgrades[id]??-1} onChange={e=>setUpgrades(u=>({...u,[id]:Number(e.target.value)}))}><option value={-1}>No upgrade</option>{station.perHeadExtras.map((e,i)=><option value={i} key={i}>{e.item} (+{money(e.mychef)}/guest)</option>)}</select></label>}</div>})}
   {!isCorporate&&<label className="mc-peak"><input type="checkbox" checked={peak||datePeak} disabled={datePeak} onChange={e=>setPeak(e.target.checked)}/>Include 50% peak-date surcharge (Ramadan iftar, 24–25 Dec or NYE)</label>}
   {hasSelection&&<><div className="mc-quote-lines">{lines.map((l,i)=><div key={i}><span>{l.name}<small>{l.detail}</small></span><strong>{money(l.amount)}</strong></div>)}</div>{warnings.map(w=><p className="mc-warning" key={w}>{w}</p>)}{warnings.length===0?<div className="mc-totals"><div><span>Subtotal</span><span>{money(subtotal)}</span></div><div><span>VAT 5%</span><span>{money(vat)}</span></div><div className="mc-total"><span>Estimated total</span><strong>{money(total)}</strong></div></div>:<p className="mc-warning">Final total: custom quote required.</p>}</>}
   <a className="mc-button mc-send" data-track-label="price_table" href={`https://wa.me/971551744849?text=${encodeURIComponent(summary)}`} target="_blank" rel="noopener noreferrer" onClick={()=>trackEvent('menu_quote_request_click',{catalogue:mode,page_path:path,menu_count:selected.length})}><MessageCircle size={19}/>{hasSelection?'Send my menu request':'Ask about these menus'}</a>
   <button className="mc-copy" type="button" onClick={async()=>{try{await navigator.clipboard.writeText(summary);setCopied(true)}catch{setCopied(false)}}}><Copy size={16}/>{copied?'Copied':'Copy quote summary'}</button><p className="mc-small">Estimate only. Menu availability, premium ingredients, staffing and any transport requirements are confirmed in the written quote.</p>
  </div></aside></div>
  <div className="mc-mobile-quote"><span>{hasSelection&&warnings.length===0?money(total):'Your menu quote'}<small>{hasSelection?(warnings.length?'Custom quote required':'Including 5% VAT'):'Choose a menu to begin'}</small></span><a href="#your-quote">View quote <ArrowRight size={17}/></a></div>
 </div>
}
