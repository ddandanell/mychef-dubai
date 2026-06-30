import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only accept POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const body = req.body || {}
    const formId = body.formId || 'lead_form'

    const isLeadMagnet = formId === 'lead-magnet-form'

    // Lead magnet only requires a phone number; full forms require name/email/service
    const requiredFields = isLeadMagnet
      ? ['phone']
      : ['name', 'email', 'phone', 'serviceType']

    for (const field of requiredFields) {
      if (!body[field] || typeof body[field] !== 'string' || !body[field].trim()) {
        return res.status(400).json({ error: `Missing required field: ${field}` })
      }
    }

    const {
      name = '',
      email = '',
      phone,
      serviceType = isLeadMagnet ? 'Private Dining Guide' : '',
      eventDate,
      guests,
      location,
      message,
      source = 'website',
      page = '',
    } = body

    // Simple email format check (only when email is provided)
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' })
    }

    const host = process.env.SMTP_HOST
    const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const to = process.env.LEAD_EMAIL_TO || 'hallo@mychef.ae'
    const from = process.env.SMTP_FROM || user || 'leads@mychef.ae'

    let emailSent = false

    if (host && user && pass) {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
      })

      const subject = `New myCHEF lead — ${serviceType}${name ? ` from ${name}` : ''}`
      const text = [
        `New enquiry received via ${formId}`,
        `Source page: ${page || 'unknown'}`,
        '',
        name ? `Name: ${name}` : '',
        email ? `Email: ${email}` : '',
        `Phone: ${phone}`,
        `Service: ${serviceType}`,
        eventDate ? `Event date: ${eventDate}` : '',
        guests ? `Guests: ${guests}` : '',
        location ? `Location: ${location}` : '',
        '',
        'Message:',
        message || 'No additional message',
      ].filter(Boolean).join('\n')

      await transporter.sendMail({
        from,
        to,
        replyTo: email || from,
        subject,
        text,
      })
      emailSent = true
    }

    // Always return success to the user, but flag if email wasn't sent
    return res.status(200).json({
      success: true,
      emailSent,
      message: emailSent
        ? 'Lead submitted successfully'
        : 'Lead received. Email delivery is not configured — set SMTP_HOST, SMTP_USER, and SMTP_PASS.',
    })
  } catch (err) {
    console.error('submit-lead error:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
