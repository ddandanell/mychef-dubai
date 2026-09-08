// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /hospital-catering-dubai
//     primary:     "hospital catering dubai"
//     subkeywords: "healthcare catering dubai" · "hospital catering services dubai" · "patient meal services dubai" · "therapeutic diet meals dubai" · "hospital staff cafeteria catering dubai" · "texture-modified meals dubai" · "clinic catering dubai" · "staff cafeteria dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import InstitutionalLanding from '@/components/InstitutionalLanding'
import { hospitalPage } from '@/content/hospitalCateringPage'

export default function HospitalCatering() {
  useWhatsAppMessage(
    'Hi myCHEF Dubai, I need hospital catering. Site: __, Covers/day: __, Staff cafeteria or patient meals: __ (via mychef.ae/hospital-catering-dubai)',
  )
  return <InstitutionalLanding page={hospitalPage} />
}
