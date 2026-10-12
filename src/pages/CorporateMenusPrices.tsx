// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /corporate/menus-prices
//     primary:     "corporate catering menus and prices dubai"
//     subkeywords: none
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import CataloguePage from '@/components/catalogues/CataloguePage'
import data from '@/content/catalogues/corporate.json'
import type { CorporateCatalogue } from '@/content/catalogues/catalogue'
export default function CorporateMenusPrices() { return <CataloguePage mode="corporate" corporate={data as unknown as CorporateCatalogue} /> }
