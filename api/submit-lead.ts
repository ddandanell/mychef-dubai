import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

const NAVY = '#1B2A4A'
const GOLD = '#C5A059'
const IVORY = '#F4F0E8'
const INK = '#2B2B2B'
const MUTED = '#6B6560'

const HIDDEN = new Set(['formId', 'password', 'pass', 'token', 'smtp'])
const EMPTY = new Set(['', 'not given', 'n/a', 'na', 'none', '-', 'unknown'])

const LABELS: Record<string, string> = {
  name: 'Name',
  email: 'Email',
  phone: 'WhatsApp / phone',
  serviceType: 'Service',
  eventDate: 'Date',
  guests: 'Guests',
  location: 'Location',
  occasion: 'Occasion',
  style: 'Service style',
  yacht: 'Yacht',
  estimate: 'Indicative estimate',
  chef: 'Chef preference',
  package: 'Package',
  extras: 'Extras',
  source: 'Source',
  sourcePage: 'Service page',
  page: 'Form page',
  message: 'Brief',
}

const ORDER = [
  'name',
  'email',
  'phone',
  'serviceType',
  'eventDate',
  'guests',
  'location',
  'occasion',
  'style',
  'yacht',
  'estimate',
  'chef',
  'package',
  'extras',
  'source',
  'sourcePage',
  'page',
  'message',
]

type LeadFields = Record<string, unknown>

function isEmail(value: string): boolean {
  return /^\S+@\S+\.\S+$/.test(value)
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function asText(value: unknown): string {
  if (value == null) return ''
  if (typeof value === 'string') return value.trim()
  if (typeof value === 'number' || typeof value === 'boolean') return String(value)
  return ''
}

function prettyKey(key: string): string {
  return key
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[_-]+/g, ' ')
    .replace(/^\w/, (letter) => letter.toUpperCase())
}

function collectLeadRows(body: LeadFields): { label: string; value: string; key: string }[] {
  const seen = new Set<string>()
  const rows: { label: string; value: string; key: string }[] = []

  const add = (key: string, raw: unknown) => {
    if (HIDDEN.has(key) || seen.has(key)) return
    const value = asText(raw)
    if (!value || EMPTY.has(value.toLowerCase())) return
    seen.add(key)
    rows.push({ key, label: LABELS[key] || prettyKey(key), value })
  }

  for (const key of ORDER) add(key, body[key])
  for (const [key, raw] of Object.entries(body)) {
    if (typeof raw === 'string' || typeof raw === 'number') add(key, raw)
  }
  return rows
}

function formatValueHtml(key: string, value: string): string {
  const safe = escapeHtml(value).replace(/\n/g, '<br>')
  if (key === 'email' && isEmail(value)) {
    return `<a href="mailto:${escapeHtml(value)}" style="color:${NAVY};text-decoration:underline;">${safe}</a>`
  }
  if (key === 'phone') {
    const digits = value.replace(/[^\d+]/g, '')
    if (digits.length >= 8) {
      const wa = digits.replace(/^\+/, '')
      return `<a href="https://wa.me/${escapeHtml(wa)}" style="color:${NAVY};text-decoration:underline;">${safe}</a>`
    }
  }
  if (key === 'page' && value.startsWith('/')) {
    return `<a href="https://www.mychef.ae${escapeHtml(value)}" style="color:${NAVY};text-decoration:underline;">${safe}</a>`
  }
  return safe
}

function guestEmailFrom(body: LeadFields): string | null {
  const email = asText(body.email)
  if (email && isEmail(email) && !EMPTY.has(email.toLowerCase())) return email
  return null
}

function leadRecipients(teamTo: string, guest: string | null): string[] {
  const list = [teamTo]
  if (guest && guest.toLowerCase() !== teamTo.toLowerCase()) list.push(guest)
  return list
}

function buildLeadEmail(body: LeadFields, formId: string) {
  const rows = collectLeadRows(body)
  const name = asText(body.name)
  const service = asText(body.serviceType) || 'Website enquiry'
  const receivedAt = new Date().toLocaleString('en-GB', {
    timeZone: 'Asia/Dubai',
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  const subject = name
    ? `New myCHEF enquiry — ${service} from ${name}`
    : `New myCHEF enquiry — ${service}`

  const text = [
    'New myCHEF enquiry',
    `Received: ${receivedAt} (Dubai)`,
    `Form: ${formId}`,
    '',
    ...rows.map((row) => `${row.label}: ${row.value}`),
    '',
    'Reply to the guest from this email, or WhatsApp them if they left a number.',
  ].join('\n')

  const detailRows = rows
    .filter((row) => row.key !== 'message')
    .map(
      (row, index) => `
        <tr>
          <td style="padding:12px 0;border-top:${index === 0 ? '0' : '1px solid #E6E0D6'};width:38%;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:${GOLD};vertical-align:top;">
            ${escapeHtml(row.label)}
          </td>
          <td style="padding:12px 0;border-top:${index === 0 ? '0' : '1px solid #E6E0D6'};font-family:Georgia,'Times New Roman',serif;font-size:16px;line-height:1.45;color:${NAVY};vertical-align:top;">
            ${formatValueHtml(row.key, row.value)}
          </td>
        </tr>`,
    )
    .join('')

  const brief = rows.find((row) => row.key === 'message')
  const briefBlock = brief
    ? `
      <tr>
        <td style="padding:22px 28px 8px;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:${GOLD};">
          Brief
        </td>
      </tr>
      <tr>
        <td style="padding:0 28px 28px;font-family:Georgia,'Times New Roman',serif;font-size:16px;line-height:1.6;color:${INK};">
          ${formatValueHtml('message', brief.value)}
        </td>
      </tr>`
    : ''

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:0;background:${IVORY};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${IVORY};padding:28px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="640" cellpadding="0" cellspacing="0" border="0" style="width:640px;max-width:100%;background:#ffffff;border:1px solid #E6E0D6;">
          <tr>
            <td style="background:${NAVY};padding:28px 32px 24px;">
              <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:${GOLD};">myCHEF Dubai</p>
              <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:1.2;font-weight:normal;color:#ffffff;">New enquiry</h1>
              <p style="margin:10px 0 0;font-family:Georgia,'Times New Roman',serif;font-size:16px;color:#F4F0E8;">${escapeHtml(service)}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:18px 32px;background:${IVORY};border-bottom:1px solid #E6E0D6;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:${MUTED};">
              Received ${escapeHtml(receivedAt)} Dubai time · ${escapeHtml(formId)}
            </td>
          </tr>
          <tr>
            <td style="padding:8px 32px 12px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                ${detailRows}
              </table>
            </td>
          </tr>
          ${briefBlock}
          <tr>
            <td style="padding:20px 32px;background:${NAVY};">
              <p style="margin:0 0 6px;font-family:Georgia,'Times New Roman',serif;font-size:16px;color:#ffffff;">Reply from this email.</p>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.5;color:#F4F0E8;">
                A copy also went to the guest if they left an email. WhatsApp
                <a href="https://wa.me/971551744849" style="color:${GOLD};text-decoration:none;">+971 55 174 4849</a>
                · <a href="https://www.mychef.ae" style="color:${GOLD};text-decoration:none;">mychef.ae</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

  return { subject, text, html }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const body = req.body || {}
    const formId = body.formId || 'lead_form'

    const isLeadMagnet = formId === 'lead-magnet-form'
    const isQuote =
      formId === 'quote_request' ||
      formId === 'yacht-quote-form' ||
      formId === 'private-chef-plan'

    const requiredFields = isLeadMagnet
      ? ['phone']
      : isQuote
        ? ['serviceType']
        : ['name', 'email', 'phone', 'serviceType']

    for (const field of requiredFields) {
      if (!body[field] || typeof body[field] !== 'string' || !body[field].trim()) {
        return res.status(400).json({ error: `Missing required field: ${field}` })
      }
    }

    if (isQuote) {
      const emailOk = typeof body.email === 'string' && body.email.trim() && body.email !== 'not given'
      const phoneOk = typeof body.phone === 'string' && body.phone.trim() && body.phone !== 'not given'
      if (!emailOk && !phoneOk) {
        return res.status(400).json({ error: 'Provide an email or a phone number' })
      }
    }

    const email = typeof body.email === 'string' ? body.email.trim() : ''
    if (email && email !== 'not given' && !isEmail(email)) {
      return res.status(400).json({ error: 'Invalid email address' })
    }

    const host = process.env.SMTP_HOST
    const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const teamTo = process.env.LEAD_EMAIL_TO || 'info@mychef.ae'
    const from = process.env.SMTP_FROM || user || 'myCHEF website <info@mychef.ae>'
    const guest = guestEmailFrom(body)
    const recipients = leadRecipients(teamTo, guest)

    let emailSent = false

    if (host && user && pass) {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
      })

      const { subject, text, html } = buildLeadEmail(body, formId)

      await transporter.sendMail({
        from,
        to: recipients,
        replyTo: guest || teamTo,
        subject,
        text,
        html,
      })
      emailSent = true
    }

    if (!emailSent) {
      console.error('submit-lead: email delivery is not configured')
      return res.status(503).json({ success: false, emailSent: false, error: 'Email delivery unavailable; please use WhatsApp instead.' })
    }

    return res.status(200).json({ success: true, emailSent: true, message: 'Lead submitted successfully' })
  } catch (err) {
    console.error('submit-lead error:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
