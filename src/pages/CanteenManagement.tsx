// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /canteen-management-dubai
//     primary:     "canteen management dubai"
//     subkeywords: "staff canteen management dubai" · "canteen setup dubai" · "corporate canteen catering dubai" · "office cafeteria management dubai" · "canteen catering services dubai" · "staff canteen dubai" · "cashless canteen dubai" · "outsource canteen catering dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import InstitutionalLanding from '@/components/InstitutionalLanding'
import { canteenPage } from '@/content/canteenManagementPage'

export default function CanteenManagement() {
  useWhatsAppMessage(
    'Hi myCHEF Dubai, I need canteen management. Site: __, Covers/day: __, Existing kitchen: yes/no __ (via mychef.ae/canteen-management-dubai)',
  )
  return <InstitutionalLanding page={canteenPage} />
}
