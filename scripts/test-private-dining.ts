import assert from 'node:assert/strict'
import { assistantCount, bookingErrors, calculateDining, compatible, DINING_DISHES, diningWhatsApp, dishPrice, earliestDiningDate, emptyDetails, menuSlots, resolvedMenu, suggestedMenu, validDiningDate, type DiningInput, type DiningService } from '../src/lib/privateDining'
import { DINING_CONFIG as config } from '../src/content/privateDiningConfig'
const base: DiningInput = { service:'home',guests:6,area:'dubai-marina',cuisine:'indian',dishCount:4,dishIds:suggestedMenu('indian',4),dietary:{vegetarian:0,vegan:0,other:0},alternatives:{vegetarian:[],vegan:[],other:[]},drinkIds:[] }
const details = {...emptyDetails,name:'Test guest',whatsapp:'+971 50 123 4567',date:'2026-10-09',kitchen:true}
const q=calculateDining(base)
assert.equal(q.total,((55+55+35+55)*6+1800+95)*1.05)
for(const s of config.services){assert.ok(calculateDining({...base,service:s.id as DiningService,guests:s.minGuests}).canEnquire);assert.equal(calculateDining({...base,service:s.id as DiningService,guests:s.minGuests-1}).total,null)}
for(const [guests,expected] of [[8,0],[9,1],[19,1],[20,2],[29,2],[30,3],[39,3],[40,4],[49,4],[50,5],[59,5],[60,6],[100,10]]){assert.equal(assistantCount('home',guests),expected);assert.equal(assistantCount('buffet',guests),Math.min(expected,5));assert.equal(assistantCount('delivery',guests),0)}
for(const value of [NaN,Infinity,-1,6.5,0])assert.equal(calculateDining({...base,guests:value}).total,null)
assert.equal(calculateDining({...base,area:'missing'}).total,null)
assert.equal(calculateDining({...base,dietary:{vegetarian:4,vegan:3,other:0}}).total,null)
assert.equal(calculateDining({...base,dietary:{vegetarian:0.5,vegan:0,other:0}}).total,null)
assert.equal(calculateDining({...base,dishIds:['italian-starter-01',...base.dishIds.slice(1)]}).total,null)
assert.equal(calculateDining({...base,drinkIds:['bad']}).total,null)
assert.equal(calculateDining({...base,drinkIds:['water','water']}).total,null)
for(const cuisine of config.cuisines){
 for(const course of ['Starter','Main','Side','Dessert']){assert.equal(DINING_DISHES.filter(d=>d.cuisine===cuisine.id&&d.course===course).length,10);assert.ok(DINING_DISHES.filter(d=>d.cuisine===cuisine.id&&d.course===course&&d.diet==='vegan').length>=4)}
 for(let n=3;n<=11;n++){const input={...base,cuisine:cuisine.id,dishCount:n,dishIds:suggestedMenu(cuisine.id,n)};assert.equal(input.dishIds.length,n);assert.ok(calculateDining(input).canEnquire);assert.equal(menuSlots(n).length,n)}
}
assert.equal(new Set(DINING_DISHES.map(d=>d.id)).size,200)
const dietary: DiningInput = {...base,guests:10,dietary:{vegetarian:2,vegan:3,other:0},alternatives:{vegetarian:[],vegan:[],other:[]}}
for(const diet of ['vegetarian','vegan'] as const){const used=new Set<string>();dietary.alternatives[diet]=menuSlots(4).map(slot=>{const dish=DINING_DISHES.find(d=>d.cuisine==='indian'&&d.course===slot.course&&compatible(d,diet)&&!used.has(d.id))!;used.add(dish.id);return dish.id})}
const split=calculateDining(dietary)
assert.deepEqual(split.groups.map(g=>g.count),[5,2,3])
const food=split.groups.reduce((sum,g)=>sum+g.count*g.dishes.reduce((n,d)=>n+dishPrice(d!)!,0),0)
assert.equal(split.menuTotal,food)
assert.equal(split.total,Math.round((food+1800+400+95)*1.05*100)/100)
const allVegan=calculateDining({...dietary,dietary:{vegetarian:0,vegan:10,other:0}})
assert.equal(allVegan.groups.length,1);assert.equal(allVegan.groups[0].diet,'vegan')
const drinks=calculateDining({...base,drinkIds:['mocktail','water']})
assert.equal(drinks.drinksTotal,6*(28+8));assert.equal(drinks.vat,Math.round(drinks.beforeVat!*.05*100)/100)
const delivery=calculateDining({...base,service:'delivery',guests:10});assert.equal(delivery.chefFee,0);assert.equal(delivery.assistants,0)
const market={...base,cuisine:'western',dishIds:['western-starter-01','western-main-05','western-side-01','western-dessert-01']}
assert.equal(calculateDining(market).total,null);assert.ok(calculateDining(market).quoteRequired)
assert.equal(earliestDiningDate('2026-12-28'),'2027-01-02');assert.equal(earliestDiningDate('2028-02-25'),'2028-03-01')
assert.ok(validDiningDate('2026-10-09','2026-10-04'));assert.equal(validDiningDate('2026-10-08','2026-10-04'),false);assert.equal(validDiningDate('2026-02-30','2026-02-01'),false);assert.equal(validDiningDate('','2026-10-04'),false)
assert.equal(diningWhatsApp(base,{...details,kitchen:false},'2026-10-04'),null)
assert.equal(diningWhatsApp(base,{...details,name:''},'2026-10-04'),null)
assert.equal(diningWhatsApp(base,{...details,whatsapp:'abc'},'2026-10-04'),null)
assert.equal(diningWhatsApp(base,{...details,date:'2026-10-08'},'2026-10-04'),null)
assert.equal(bookingErrors({...base,dietary:{vegetarian:0,vegan:0,other:1}},details,'2026-10-04').length,1)
const href=diningWhatsApp({...dietary,drinkIds:['juice']},{...details,theme:'Christmas',cake:'Chocolate',equipment:['Chairs'],notes:'Birthday table'},'2026-10-04')!
const text=new URL(href).searchParams.get('text')!
for(const fragment of ['Main menu — 5 guests','Vegetarian — 2 guests','Vegan — 3 guests','250 ml serving per guest × 10 guests','Christmas','Chocolate','Chairs','Birthday table','+971 50 123 4567','2026-10-09'])assert.ok(text.includes(fragment),fragment)
assert.ok(!text.includes('undefined'));assert.equal(new URL(href).pathname,'/971551744849')
assert.equal(resolvedMenu({...base,dietary:{vegetarian:0,vegan:1,other:0}},'vegan')[2]?.name,'Dal tadka (oil, no ghee)')
console.log('PASS: service minimums; staffing boundaries; 200 dishes; 3–11 slots; one cuisine; dietary replacement pricing; drinks; transport; VAT; lead time; contacts; WhatsApp payload.')
