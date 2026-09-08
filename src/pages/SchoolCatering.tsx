// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /school-catering-dubai
//     primary:     "school catering dubai"
//     subkeywords: "school catering companies dubai" · "school lunch delivery dubai" · "school canteen catering dubai" · "healthy school lunch dubai" · "school meal plans dubai" · "khda school catering dubai" · "education catering dubai" · "canteen catering services dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import InstitutionalLanding from '@/components/InstitutionalLanding'
import { schoolPage } from '@/content/schoolCateringPage'

export default function SchoolCatering() {
  useWhatsAppMessage(
    'Hi myCHEF Dubai, I need school catering. School: __, Roll: __, Format: delivery or canteen __, Days: __ (via mychef.ae/school-catering-dubai)',
  )
  return <InstitutionalLanding page={schoolPage} />
}
