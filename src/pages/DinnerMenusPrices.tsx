// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /luxury-dining-experiences/menus-prices
//     primary:     "private dinner menus and prices dubai"
//     subkeywords: none
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import CataloguePage from '@/components/catalogues/CataloguePage'
import data from '@/content/catalogues/dinner.json'
import type { DinnerCatalogue } from '@/content/catalogues/catalogue'
export default function DinnerMenusPrices() { return <CataloguePage mode="dinner" dinner={data as DinnerCatalogue} /> }
