import assert from 'node:assert/strict'
import { tierPrice, stationChefCharge, stationDiscount, round } from '../src/content/catalogues/catalogue'
import corporate from '../src/content/catalogues/corporate.json'
import dinner from '../src/content/catalogues/dinner.json'
const tiers=corporate.sections[0].packages[0].guestTiers
assert.equal(tierPrice(tiers,10)?.amount,3000,'small package is charged once')
assert.equal(tierPrice(tiers,15)?.amount,3000)
assert.equal(tierPrice(tiers,16),undefined,'unpublished tier must not silently extrapolate')
assert.equal(tierPrice(tiers,20)?.amount,3200)
assert.equal(tierPrice(tiers,105)?.amount,12600)
assert.equal(tierPrice(tiers,20.5),undefined)
assert.equal(stationChefCharge(74,corporate.stationChefCharges),700)
assert.equal(stationChefCharge(75,corporate.stationChefCharges),1400)
// English + Arabic BBQ for 20: 7,200 + 7,000 food, less 15%, plus two 700 chef charges.
const food=14200,net=food-stationDiscount(2,food)+1400
assert.equal(net,13470);assert.equal(round(net*1.05),14143.5)
assert.equal(stationDiscount(3,15000),3000)
assert.equal(stationDiscount(4,15000),0,'more than three stations requires a custom quote')
assert.equal(dinner.menus[0].sellingPrice,600)
assert.equal(round(dinner.menus[0].sellingPrice*2*1.05),1260)
assert.equal(round(dinner.menus[0].sellingPrice*2*1.5*1.05),1890)
console.log('PASS fixed/per-guest prices, unpublished tiers, chef threshold, station discount, VAT and peak-date totals')
