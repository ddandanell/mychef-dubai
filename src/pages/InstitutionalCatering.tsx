// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /institutional-catering-dubai
//     primary:     "institutional catering dubai"
//     subkeywords: "education catering dubai" · "healthcare catering dubai" · "staff canteen dubai" · "early years catering dubai" · "patient meal services dubai" · "corporate canteen catering dubai" · "nut-free institutional meals dubai" · "documented catering kitchen dubai"
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import { useWhatsAppMessage } from '@/context/WhatsAppMessageContext'
import InstitutionalLanding from '@/components/InstitutionalLanding'
import { institutionalHubPage } from '@/content/institutionalCateringPage'

export default function InstitutionalCatering() {
  useWhatsAppMessage(
    'Hi myCHEF Dubai, I need institutional catering. Site type: nursery/school/hospital/canteen, Covers: __, Area: __ (via mychef.ae/institutional-catering-dubai)',
  )
  return <InstitutionalLanding page={institutionalHubPage} />
}
