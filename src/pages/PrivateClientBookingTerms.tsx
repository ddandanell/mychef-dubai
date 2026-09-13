// KEYWORD LOCK — generated from docs/seo/myCHEF-AE-SEO-STANDARD.json (npm run seo:locks); the contract wins, edit it there.
//   /private-client-booking-terms
//     primary:     none (untargeted by decision)
//     subkeywords: none
//   Rule: primary in title, H1, first 100 words and one H2. Subkeywords inside sentences only. Never target another page's primary.
// END KEYWORD LOCK
import LegalPolicyPage from '@/components/LegalPolicyPage'
import { CORPORATE_BOOKING_TERMS_PATH, PRIVATE_CLIENT_TERMS } from '@/content/bookingTerms'

export default function PrivateClientBookingTerms() {
  return (
    <LegalPolicyPage
      doc={PRIVATE_CLIENT_TERMS}
      sibling={{ href: CORPORATE_BOOKING_TERMS_PATH, label: 'corporate and business booking terms' }}
    />
  )
}
