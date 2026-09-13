// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /corporate-booking-terms
//     primary:     none (untargeted by decision)
//     subkeywords: none
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import LegalPolicyPage from '@/components/LegalPolicyPage'
import { CORPORATE_BOOKING_TERMS, PRIVATE_CLIENT_TERMS_PATH } from '@/content/bookingTerms'

export default function CorporateBookingTerms() {
  return (
    <LegalPolicyPage
      doc={CORPORATE_BOOKING_TERMS}
      sibling={{ href: PRIVATE_CLIENT_TERMS_PATH, label: 'private client booking terms' }}
    />
  )
}
