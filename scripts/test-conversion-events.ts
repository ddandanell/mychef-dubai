/**
 * GA4 conversion click classifier — one event per click, no double-fire.
 *
 *   npx tsx scripts/test-conversion-events.ts
 */
import {
  classifyConversionHref,
  conversionParams,
  sanitizeConversionUrl,
  shouldGenerateLead,
} from '../src/lib/conversionEvents'

let fails = 0
const eq = (name: string, got: unknown, want: unknown) => {
  const ok = JSON.stringify(got) === JSON.stringify(want)
  if (!ok) fails++
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}: got ${JSON.stringify(got)}${ok ? '' : ` want ${JSON.stringify(want)}`}`)
}

eq('wa.me', classifyConversionHref('https://wa.me/971551744849?text=Hi')?.event, 'whatsapp_click')
eq('api.whatsapp', classifyConversionHref('https://api.whatsapp.com/send?phone=971551744849')?.event, 'whatsapp_click')
eq('marketing whatsapp.com is not a chat CTA', classifyConversionHref('https://www.whatsapp.com/channel/x'), null)
eq('tel', classifyConversionHref('tel:+971551744849')?.event, 'phone_click')
eq('mailto', classifyConversionHref('mailto:info@mychef.ae')?.event, 'email_click')
eq('inquiry', classifyConversionHref('/inquiry')?.event, 'quote_click')
eq('inquiry with query', classifyConversionHref('/inquiry?source=hero')?.event, 'quote_click')
eq('absolute inquiry', classifyConversionHref('https://www.mychef.ae/inquiry')?.event, 'quote_click')
eq('home is not a conversion', classifyConversionHref('/'), null)
eq('packages is not a conversion', classifyConversionHref('/catering-packages-dubai'), null)
eq('hash only', classifyConversionHref('#quote'), null)
eq('empty', classifyConversionHref(''), null)
eq('null', classifyConversionHref(null), null)

const params = conversionParams(
  { event: 'whatsapp_click', link_url: 'https://wa.me/971' },
  { page_path: '/catering-dubai', cta_location: 'hero' },
)
eq('params shape', Object.keys(params).sort(), ['cta_location', 'link_url', 'page_path'])
eq('params values', params, {
  link_url: 'https://wa.me/971',
  page_path: '/catering-dubai',
  cta_location: 'hero',
})

eq(
  'strips WhatsApp text (PII)',
  classifyConversionHref(
    'https://wa.me/971551744849?text=' + encodeURIComponent('Hi myCHEF, Jane Doe, Emirates Hills, AED 3000'),
  )?.link_url,
  'https://wa.me/971551744849',
)
eq(
  'keeps api.whatsapp phone, drops text',
  sanitizeConversionUrl('https://api.whatsapp.com/send?phone=971551744849&text=SecretName'),
  'https://api.whatsapp.com/send?phone=971551744849',
)
eq('strips mailto subject', classifyConversionHref('mailto:info@mychef.ae?subject=Hi%20Jane')?.link_url, 'mailto:info@mychef.ae')
eq('inquiry query stripped', classifyConversionHref('/inquiry?source=hero')?.link_url, '/inquiry')
eq('seo gate is not a lead', shouldGenerateLead('/seo', 'lead_form'), false)
eq('seo analyst is not a lead', shouldGenerateLead('/seo/analyst', 'x'), false)
eq('unlabelled form is not a lead', shouldGenerateLead('/private-chef-dubai/pricing', ''), false)
eq('plan form is a lead', shouldGenerateLead('/private-chef-dubai/pricing', 'private-chef-plan'), true)

if (fails > 0) {
  console.error(`\n${fails} failing check(s)`)
  process.exit(1)
}
console.log('\nAll conversion-event checks passed')
