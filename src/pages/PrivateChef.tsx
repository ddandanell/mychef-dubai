// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /private-chef-dubai
//     primary:     "private chef dubai"
//     subkeywords: "personal chef dubai" · "chef at home dubai" · "private chef service dubai" · "book a private chef dubai" · "private chef for dinner party dubai" · "private chef near me dubai" · "private chef" · "private chef near me" · "french private chef dubai" · "private chef dubai daily" · "private chefs dubai" · "private chef dubai monthly"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import SEO from '@/components/SEO'
import { Calculator } from 'lucide-react'
import { householdSchema } from '@/lib/householdSchema'
import PrivateDiningBuilder from '@/components/private-chef/PrivateDiningBuilder'
import { DINING_FAQS } from '@/content/privateDiningConfig'
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'

export default function PrivateChef() {
  useWhatsAppMessage('Hi myCHEF, I would like to discuss my dinner estimate (via mychef.ae/private-chef-dubai).')
  return <div>
    <SEO title="Private Chef Dubai | Get Your Dinner Price in Five Minutes | myCHEF" description="Private chef Dubai: choose your menu, guests and area and see your complete estimate with VAT. Chef at home or delivered, from six guests. No commitment or payment." canonicalPath="/private-chef-dubai" ogImage="/images/dinner-calculator-share.png" socialTitle="Get your price in five minutes | Private Chef Dubai – myCHEF" socialDescription="Choose your menu, guests and area and see your full price, VAT included, before you talk to anyone. Chef at home or delivered, from 6 guests." schema={householdSchema('Private chef dinner calculator in Dubai', 'Food and chef dinner estimates from six guests, with family-style, three-course and five-course menus. Drinks, transport, staff, hire items and VAT are itemised.', DINING_FAQS)}/>
    <header className="dining-page-hero"><div className="dining-hero-inner"><div><p className="dining-hero-tagline">myCHEF · Your dinner, clearly priced</p><h1>Private Chef Dubai.<br/><em>Your price in five minutes.</em></h1><p>Food, your chef and the finishing touches. Build a dinner at home or a ready-to-serve delivery, from six guests.</p><a className="dining-primary" href="#dinner-calculator">Get my price <Calculator size={18}/></a></div><aside className="dining-hero-note" aria-label="What you will get"><Calculator size={32} strokeWidth={1.5}/><strong>A complete estimate.<br/>Before the conversation.</strong><p>Your food, team, drinks, transport and VAT, together in one clear price.</p><ol><li><span>1</span>Your gathering</li><li><span>2</span>Your menu</li><li><span>3</span>Drinks & extras</li><li><span>4</span>Review & send</li></ol></aside></div></header>
    <PrivateDiningBuilder/>
  </div>
}
