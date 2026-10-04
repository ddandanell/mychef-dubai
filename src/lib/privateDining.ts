import catalogue from '../content/privateDiningMenu.json'
import { DINING_CONFIG as config } from '../content/privateDiningConfig'
export type DiningService = 'delivery' | 'home'
export type DiningStyle = 'family' | 'three-course' | 'fine'
export type Diet = 'standard' | 'vegetarian' | 'vegan'
export type Course = 'Starter' | 'Main' | 'Side' | 'Dessert'
export type DiningDish = { id:string; name:string; cuisine:string; course:Course; diet:Diet; tier:'E'|'S'|'C'; groceryBand:'L'|'M'|'H'; minChefLevel:number; quoteRequired:boolean; active:boolean; recipeNote:string }
export const DINING_DISHES = catalogue as DiningDish[]
export const DIET_GROUPS = ['vegetarian','vegan'] as const
export const DIET_LABELS = { standard:'Main menu', vegetarian:'Vegetarian menu', vegan:'Vegan menu' }
export const REASSURANCE = 'Just an estimate · no commitment · no payment'
export type DiningInput = {
 service:DiningService; guests:number; area:string; cuisine:string; style:DiningStyle; mood:string; extraDishes:number;
 dishIds:string[]; dietary:Record<'vegetarian'|'vegan',number>; alternatives:Record<'vegetarian'|'vegan',string[]>;
 drinkIds:string[]; waiters:number; bartenders:number; kitchenHours:number; serviceHours:number;
 fineEquipment:'yes'|'hire'|''; bar:boolean; furniture:Record<string,number>; styling:string; theme:string; cake:string; glassware:boolean;
}
export type DiningDetails = {
 name:string; whatsapp:string; email:string; channel:'whatsapp'|'email'; date:string; time:string; dietaryNotes:string;
 kitchen:'yes'|'field'|''; otherTheme:string; otherCake:string; specialRequests:string; notes:string;
 formalOffer:boolean; company:string; companyAddress:string; trn:string;
}
export const emptyDetails:DiningDetails = {name:'',whatsapp:'',email:'',channel:'whatsapp',date:'',time:'',dietaryNotes:'',kitchen:'',otherTheme:'',otherCake:'',specialRequests:'',notes:'',formalOffer:false,company:'',companyAddress:'',trn:''}
export const money = (n:number) => `AED ${n.toLocaleString('en-AE',{minimumFractionDigits:Number.isInteger(n)?0:2,maximumFractionDigits:2})}`
const cents = (n:number) => Math.round((n+Number.EPSILON)*100)/100
export const compatible = (d:DiningDish,diet:Diet) => diet==='standard'||d.diet===diet||(diet==='vegetarian'&&d.diet==='vegan')
export const menuEligible = (d:DiningDish) => d.active&&!d.quoteRequired&&d.minChefLevel<5
export function menuSlots(style:DiningStyle,extra=0):{course:Course;label:string}[]{
 if(style==='three-course')return [{course:'Starter',label:'Starter'},{course:'Main',label:'Main course'},{course:'Dessert',label:'Dessert'}]
 if(style==='fine')return [{course:'Starter',label:'Amuse-bouche'},{course:'Starter',label:'Starter'},{course:'Main',label:'Middle course'},{course:'Main',label:'Main course'},{course:'Dessert',label:'Dessert'}]
 return [{course:'Starter' as const,label:'Starter to share'},{course:'Main' as const,label:'First shared main'},{course:'Main' as const,label:'Second shared main'},...Array.from({length:Math.max(0,Math.min(4,extra))},(_,i)=>({course:['Starter','Main','Side','Dessert'][i] as Course,label:`Extra ${['starter','main','side','dessert'][i]}`})),{course:'Dessert' as const,label:'Dessert'}]
}
const moodPatterns:Record<string,RegExp>={
 relaxed:/chicken|mezze|samosa|lasagne|gyoza|biryani|panna|tiramisu/i,
 celebration:/tikka|lamb|kofta|kulfi|prawn|fondant|arancini|baklava|matcha|salmon/i,
 elegant:/salmon|prawn|parfait|burrata|ravioli|shorba|paneer|poached|crème|panna|agedashi|tagine/i,
 fresh:/salad|lemon|sorbet|vegetable|fruit|tabbouleh|gazpacho|sunomono|cauliflower|grilled/i,
 comfort:/butter|roast|bourguignon|lasagne|risotto|katsu|machboos|biryani|crumble|gulab/i,
}
const proteinPatterns=[/chicken/i,/beef/i,/lamb|mutton/i,/salmon|fish|seafood|prawn|shrimp/i,/duck/i]
export function suggestedMenu(cuisine:string,style:DiningStyle,mood='relaxed',extra=0,diet:Diet='standard'):string[]{
 const used=new Set<string>(),usedProteins=new Set<number>()
 return menuSlots(style,extra).map((slot,i)=>{
  const pool=DINING_DISHES.filter(d=>menuEligible(d)&&d.cuisine===cuisine&&d.course===slot.course&&compatible(d,diet)&&!used.has(d.id))
  // Mood guides the menu; lighter fine-dining courses and protein variety take priority.
  const score=(d:DiningDish)=>(moodPatterns[mood]?.test(d.name)?4:0)+(diet==='standard'&&d.diet==='standard'?2:0)
   +(style==='fine'&&(i===0||i===2)&&d.diet!=='standard'?9:0)
   -(slot.course!=='Dessert'&&proteinPatterns.some((pattern,p)=>usedProteins.has(p)&&pattern.test(d.name))?8:0)
  pool.sort((a,b)=>score(b)-score(a));const dish=pool[0],id=dish?.id??'';used.add(id)
  if(dish&&slot.course!=='Dessert')proteinPatterns.forEach((pattern,p)=>{if(pattern.test(dish.name))usedProteins.add(p)})
  return id
 })
}
export function generateMenu(input:DiningInput):DiningInput{
 return {...input,dishIds:suggestedMenu(input.cuisine,input.style,input.mood,input.extraDishes),alternatives:{vegetarian:suggestedMenu(input.cuisine,input.style,input.mood,input.extraDishes,'vegetarian'),vegan:suggestedMenu(input.cuisine,input.style,input.mood,input.extraDishes,'vegan')}}
}
export function createDiningInput():DiningInput{
 return generateMenu({service:'home',guests:6,area:'downtown-dubai',cuisine:'indian',style:'family',mood:'relaxed',extraDishes:0,dishIds:[],dietary:{vegetarian:0,vegan:0},alternatives:{vegetarian:[],vegan:[]},drinkIds:[],waiters:0,bartenders:0,kitchenHours:6,serviceHours:5,fineEquipment:'',bar:false,furniture:{},styling:'none',theme:'Elegant neutrals',cake:'No cake',glassware:false})
}
export function assistantCount(service:DiningService,guests:number):number{
 return service==='delivery'||!Number.isSafeInteger(guests)||guests<9?0:guests<=18?1:2+Math.floor((guests-19)/10)
}
export function resolvedMenu(input:DiningInput,diet:Diet):(DiningDish|undefined)[]{
 const ids=diet==='standard'?input.dishIds:input.alternatives[diet]
 return menuSlots(input.style,input.extraDishes).map((_,i)=>DINING_DISHES.find(d=>d.id===ids[i]))
}
export function toggleDrink(ids:string[],id:string):string[]{
 if(ids.includes(id))return ids.filter(d=>d!==id)
 const conflicts=config.drinkConflicts.filter(c=>c.includes(id)).flat()
 return [...ids.filter(d=>!conflicts.includes(d)),id]
}
export function calculateDining(input:DiningInput,details?:DiningDetails){
 const errors:string[]=[],reasons:string[]=[]
 const service=config.services.find(s=>s.id===input.service),area=config.areas.find(a=>a.id===input.area)
 const cuisine=config.cuisines.find(c=>c.id===input.cuisine),style=config.styles.find(s=>s.id===input.style),isHome=input.service==='home'
 if(!service)errors.push('Choose your serving option.')
 if(!Number.isSafeInteger(input.guests)||input.guests<6||input.guests>1000)errors.push('Enter a whole guest count between 6 and 1,000.')
 if(!area)errors.push('Choose your area.')
 if(!cuisine||!style||!config.moods.some(m=>m.id===input.mood))errors.push('Choose a serving style, cuisine and mood.')
 if(!isHome&&input.style!=='family')errors.push('Delivered food is family style. Plated menus need a chef in your kitchen.')
 if(!Number.isInteger(input.extraDishes)||input.extraDishes<0||input.extraDishes>4||(input.style!=='family'&&input.extraDishes!==0))errors.push('Family style allows up to four extra dishes; plated menus have fixed courses.')
 const dietCount=input.dietary.vegetarian+input.dietary.vegan
 if(DIET_GROUPS.some(d=>!Number.isSafeInteger(input.dietary[d])||input.dietary[d]<0)||dietCount>input.guests)errors.push('Dietary counts cannot exceed your guests. Count each person once.')
 const slots=menuSlots(input.style,input.extraDishes)
 const groups=(['standard',...DIET_GROUPS] as Diet[]).map(diet=>({diet,count:diet==='standard'?input.guests-dietCount:input.dietary[diet],dishes:resolvedMenu(input,diet)})).filter(g=>g.count>0)
 for(const g of groups)if(g.dishes.length!==slots.length||g.dishes.some((d,i)=>!d||!menuEligible(d)||d.cuisine!==input.cuisine||d.course!==slots[i].course||!compatible(d,g.diet))||new Set(g.dishes.map(d=>d?.id)).size!==slots.length)errors.push(`Complete the ${DIET_LABELS[g.diet].toLowerCase()} with different, suitable dishes.`)
 const drinks=[...new Set(input.drinkIds)].map(id=>config.drinks.find(d=>d.id===id))
 if(drinks.some(d=>!d||(!isHome&&d.homeOnly))||drinks.length!==input.drinkIds.length||config.drinkConflicts.some(pair=>pair.every(id=>input.drinkIds.includes(id))))errors.push('Choose non-overlapping drinks suitable for your service.')
 for(const [name,count] of [['waiters',input.waiters],['bartenders',input.bartenders]] as const)if(!Number.isSafeInteger(count)||count<0||count>20)errors.push(`Choose a valid number of ${name}.`)
 if(!isHome&&(input.waiters||input.bartenders||input.bar||input.glassware))errors.push('Delivered food has no on-site waiters, bar or bartender.')
 if(input.drinkIds.includes('own-alcohol')&&input.waiters+input.bartenders===0)errors.push('Add a waiter or bartender for service of your own wine or beer.')
 if(input.drinkIds.includes('cocktail-kit')&&input.bartenders===0)errors.push('Add a bartender for your cocktail kit.')
 if(input.bar&&input.bartenders===0)errors.push('Add a bartender to run your bar.')
 if(!Number.isSafeInteger(input.kitchenHours)||input.kitchenHours<6||input.kitchenHours>10||!Number.isSafeInteger(input.serviceHours)||input.serviceHours<5||input.serviceHours>10)errors.push('Choose kitchen hours from 6–10 and service hours from 5–10.')
 const max=config.automaticGuestLimits[input.service as keyof typeof config.automaticGuestLimits]??50
 if(input.guests>max)reasons.push(`Groups above ${max} guests need a tailored team and complete offer.`)
 if(details?.kitchen==='field'&&isHome)reasons.push('A temporary kitchen needs a venue and equipment assessment before we can confirm the complete price.')
 if(input.style==='fine'&&!['yes','hire',''].includes(input.fineEquipment))errors.push('Choose your fine dining equipment option.')
 if(!config.styling.some(s=>s.id===input.styling))errors.push('Choose your table styling.')
 if(!config.themes.includes(input.theme)||!config.cakes.includes(input.cake))errors.push('Choose a valid theme and cake flavour.')
 const furniture=Object.entries(input.furniture).map(([id,quantity])=>({item:config.furniture.find(f=>f.id===id),quantity}))
 if(furniture.some(f=>!f.item||!Number.isSafeInteger(f.quantity)||f.quantity<0||f.quantity>1000))errors.push('Choose valid furniture quantities.')
 const assistants=assistantCount(input.service,input.guests),chefFee=isHome?config.chefFee:0,assistantTotal=assistants*config.assistantFee
 const kitchenOvertime=isHome?(input.kitchenHours-6)*(config.staff.chefOvertime+assistants*config.staff.assistantOvertime):0,kitchenTeam=chefFee+assistantTotal+kitchenOvertime
 const perGuestFood=config.foodPrices[input.style as keyof typeof config.foodPrices]?.[input.cuisine as keyof typeof config.foodPrices.family]??0
 const food=cents(input.guests*(perGuestFood+(input.style==='family'?input.extraDishes*config.extraFamilyDish:0)))
 const uplift=input.style==='fine'?cents((food+kitchenTeam)*config.fineDiningUplift):0
 const serviceStaff=input.waiters*config.staff.waiter+input.bartenders*config.staff.bartender+(input.serviceHours-5)*(input.waiters*config.staff.waiterOvertime+input.bartenders*config.staff.bartenderOvertime)
 const drinksTotal=cents(drinks.reduce((n,d)=>n+(d?.price??0),0)*input.guests),packaging=isHome?0:Math.max(config.packaging.minimum,input.guests*config.packaging.perGuest)
 const staffCount=isHome?1+assistants+input.waiters+input.bartenders:0,cars=isHome?Math.ceil(staffCount/config.staffPerCar):1
 const regional=config.regionalTransport[area?.id as keyof typeof config.regionalTransport]
 const transportRate=regional?.[input.service]??config.transport.find(t=>t.id===area?.zone)?.fee??0,transport=transportRate*cars
 const furnitureItems=cents(furniture.reduce((n,f)=>n+(f.item?.price??0)*f.quantity,0)),furnitureDelivery=furnitureItems>0?config.extrasPrices.furnitureDelivery:0
 const stylingPrice=config.styling.find(s=>s.id===input.styling)?.price??0,cake=input.cake==='No cake'?0:config.extrasPrices.cake
 const fineEquipment=input.style==='fine'&&input.fineEquipment==='hire'?config.extrasPrices.fineEquipment*input.guests:0
 const bar=input.bar?config.extrasPrices.bar:0,glassware=input.glassware?config.extrasPrices.glassware:0
 const extras=furnitureItems+furnitureDelivery+stylingPrice+cake+fineEquipment+bar+glassware,isFrom=extras>0
 const subtotal=cents(food+kitchenTeam+uplift+serviceStaff+drinksTotal+packaging+transport+extras),vat=cents(subtotal*config.vat)
 const total=errors.length===0&&reasons.length===0?cents(subtotal+vat):null
 return {errors:[...new Set(errors)],reasons,service,area,cuisine,style,groups,drinks,assistants,chefFee,assistantTotal,kitchenOvertime,kitchenTeam,perGuestFood,food,uplift,serviceStaff,drinksTotal,packaging,staffCount,cars,transportRate,transport,furniture,furnitureItems,furnitureDelivery,stylingPrice,cake,fineEquipment,bar,glassware,extras,isFrom,subtotal,vat,total,perGuest:total===null?null:cents(total/input.guests),canEnquire:errors.length===0}
}
export function dubaiToday(now=new Date()):string{return new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Dubai',year:'numeric',month:'2-digit',day:'2-digit'}).format(now)}
export function earliestDiningDate(today=dubaiToday()):string{const d=new Date(`${today}T12:00:00Z`);d.setUTCDate(d.getUTCDate()+config.leadDays);return d.toISOString().slice(0,10)}
export function validDiningDate(date:string,today=dubaiToday()):boolean{
 if(!/^\d{4}-\d{2}-\d{2}$/.test(date))return false
 const d=new Date(`${date}T12:00:00Z`);return !Number.isNaN(d.valueOf())&&d.toISOString().slice(0,10)===date&&date>=earliestDiningDate(today)
}
export function gatheringErrors(input:DiningInput,details:DiningDetails,today=dubaiToday()):string[]{
 const errors:string[]=[]
 if(!validDiningDate(details.date,today))errors.push(`Choose a date on or after ${earliestDiningDate(today)} (five days ahead, Dubai time).`)
 if(!Number.isSafeInteger(input.guests)||input.guests<6||input.guests>1000)errors.push('Please add at least 6 guests, as a whole number.')
 if(!config.areas.some(a=>a.id===input.area))errors.push('Please choose your area.')
 if(!config.services.some(s=>s.id===input.service))errors.push('Choose your serving option.')
 return errors
}
export function bookingErrors(input:DiningInput,details:DiningDetails,today=dubaiToday()):string[]{
 const errors=gatheringErrors(input,details,today)
 if(!details.name.trim())errors.push('Enter your name.')
 if(!/^\+?[1-9]\d{7,14}$/.test(details.whatsapp.replace(/[\s()-]/g,'')))errors.push('Enter your WhatsApp number with country code.')
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email.trim()))errors.push('Enter your email for an automatic copy or backup.')
 if(input.service==='home'&&!details.kitchen)errors.push('Tell us whether a usable kitchen is available.')
 if(input.style==='fine'&&!input.fineEquipment)errors.push('Choose whether you have fine dining plates and glasses or need hire.')
 if(input.styling!=='none'&&input.theme==='Other theme'&&!details.otherTheme.trim())errors.push('Describe your theme.')
 if(input.cake==='Other flavour'&&!details.otherCake.trim())errors.push('Describe your cake flavour.')
 if(details.formalOffer&&!details.company.trim())errors.push('Add your company name for the formal PDF offer.')
 return [...new Set(errors)]
}
export function diningBrief(input:DiningInput,details:DiningDetails,intent:'call'|'confirm'='confirm'):string{
 const q=calculateDining(input,details)
 const lines=['myCHEF dinner estimate · request only',`Date: ${details.date}`,`Serving time: ${details.time||'To confirm'} (Dubai time)`,`Guests: ${input.guests}`,`Area: ${q.area?.name}`,`Service: ${q.service?.name}`,`Style: ${q.style?.name}`,`Cuisine: ${q.cuisine?.name}`,`Mood: ${config.moods.find(m=>m.id===input.mood)?.name}`,'']
 q.groups.forEach(g=>lines.push(`${DIET_LABELS[g.diet]} · ${g.count} guests`,...g.dishes.map((d,i)=>`${menuSlots(input.style,input.extraDishes)[i].label}: ${d?.name??'To confirm'}`),''))
 lines.push(`Allergies / dietary notes: ${details.dietaryNotes.trim()||'None provided'}`,`Kitchen: ${input.service==='delivery'?'Not required':details.kitchen==='yes'?'Usable customer kitchen':'Temporary kitchen assessment requested'}`,`Fine dining equipment: ${input.style==='fine'?(input.fineEquipment==='hire'?'Hire requested':'Customer supplies'):'Not applicable'}`,'')
 const rows:[string,number][]=[['Food',q.food],['Chef',q.chefFee],[`Kitchen assistants (${q.assistants})`,q.assistantTotal],['Kitchen overtime',q.kitchenOvertime],['Fine dining uplift',q.uplift],['Optional service staff',q.serviceStaff],['Drinks',q.drinksTotal],['Packaging',q.packaging],[`Transport (${q.cars} car${q.cars===1?'':'s'})`,q.transport],['Furniture items (from)',q.furnitureItems],['Furniture delivery (from)',q.furnitureDelivery],['Decoration (from)',q.stylingPrice],['Cake (from)',q.cake],['Fine dining equipment (from)',q.fineEquipment],['Bar set-up (from)',q.bar],['Glassware (from)',q.glassware]]
 if(q.total!==null)lines.push(...rows.filter(r=>r[1]>0).map(([n,v])=>`${n}: ${money(v)}`),`Subtotal: ${money(q.subtotal)}`,`VAT 5%: ${money(q.vat)}`,`${q.isFrom?'Estimated total from':'Estimated total'}: ${money(q.total)}`,`Per guest: ${money(q.perGuest!)}`)
 else lines.push('Complete price: personal offer required.',...q.reasons)
 lines.push('',`Drinks: ${q.drinks.map(d=>`${d?.name} (${d?.serving})`).join('; ')||'None'}`,`Waiters: ${input.waiters}; bartenders: ${input.bartenders}`,`Kitchen hours: ${input.kitchenHours}; service staff hours: ${input.serviceHours}`,`Furniture: ${q.furniture.filter(f=>f.quantity>0).map(f=>`${f.item?.name} × ${f.quantity}`).join('; ')||'None'}`,`Styling: ${config.styling.find(s=>s.id===input.styling)?.name}; theme: ${input.styling==='none'?'None':input.theme==='Other theme'?details.otherTheme:input.theme}`,`Cake: ${input.cake==='Other flavour'?details.otherCake:input.cake}`,`Special requests: ${details.specialRequests||'None'}`,`Notes: ${details.notes||'None'}`,`Name: ${details.name}`,`WhatsApp: ${details.whatsapp}`,`Email: ${details.email}`,`Preferred reply channel: ${details.channel}`,`Follow-up: ${intent==='call'?'Please call me to go through the offer':'Please confirm availability and the complete offer'}`,`Formal company PDF: ${details.formalOffer?`Requested · ${details.company} · ${details.companyAddress} · TRN ${details.trn||'Not provided'}`:'Not requested'}`,'',REASSURANCE,'Availability, dietary suitability and from-price hire items are confirmed in writing.','Source: mychef.ae/private-chef-dubai#dinner-calculator')
 return lines.join('\n')
}
export function diningWhatsApp(input:DiningInput,details:DiningDetails):string{return `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(diningBrief(input,details))}`}
/** Only non-sensitive event choices are shareable; never contacts, allergies, or an address. */
export function diningSharePath(input:DiningInput,details:DiningDetails):string{
 const p=new URLSearchParams({guests:String(input.guests),area:input.area,service:input.service,style:input.style,cuisine:input.cuisine,mood:input.mood})
 if(details.date)p.set('date',details.date);if(input.extraDishes)p.set('extra',String(input.extraDishes))
 return `/private-chef-dubai?${p}#dinner-calculator`
}
export function readDiningPrefill(search:string):{input:DiningInput;date:string}{
 const p=new URLSearchParams(search),input=createDiningInput()
 if(p.get('service')==='delivery')input.service='delivery'
 const guests=Number(p.get('guests'));if(Number.isSafeInteger(guests)&&guests>=6&&guests<=1000)input.guests=guests
 if(config.areas.some(a=>a.id===p.get('area')))input.area=p.get('area')!
 if(config.cuisines.some(c=>c.id===p.get('cuisine')))input.cuisine=p.get('cuisine')!
 if(config.styles.some(s=>s.id===p.get('style'))&&input.service==='home')input.style=p.get('style')! as DiningStyle
 if(config.moods.some(m=>m.id===p.get('mood')))input.mood=p.get('mood')!
 const extra=Number(p.get('extra'));if(input.style==='family'&&Number.isInteger(extra)&&extra>=0&&extra<=4)input.extraDishes=extra
 return {input:generateMenu(input),date:validDiningDate(p.get('date')??'')?p.get('date')!:''}
}
