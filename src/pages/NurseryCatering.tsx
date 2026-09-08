// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /nursery-catering-dubai
//     primary:     "nursery catering dubai"
//     subkeywords: "nursery catering companies dubai" · "nursery meal plans dubai" · "preschool catering dubai" · "nursery lunch delivery dubai" · "nut-free nursery meals dubai" · "halal nursery meals dubai" · "healthy meals for nurseries dubai" · "early years catering dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import InstitutionalLanding from '@/components/InstitutionalLanding'
import { nurseryPage } from '@/content/nurseryCateringPage'

export default function NurseryCatering() {
  useWhatsAppMessage(
    'Hi myCHEF Dubai, I need nursery catering. Centre: __, Enrolment: __, Ages: __, Days: __ (via mychef.ae/nursery-catering-dubai)',
  )
  return <InstitutionalLanding page={nurseryPage} />
}
