'use client'
import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { trackEvent } from '@/components/Analytics'

type FormState = {
  name:    string
  email:   string
  company: string
  budget:  string
  service: string
  message: string
  consent: boolean
}

const BUDGET_OPTIONS  = ['Under $5,000','$5,000 – $20,000','$20,000 – $100,000','$100,000+','Prefer to Discuss']
const SERVICE_OPTIONS = ['AI Integration','Custom Web Application','Enterprise System (ERP/CRM)','API Development','UI/UX & Branding','IT Consulting','Not Sure Yet']

const INPUT_CLASS = 'w-full bg-surface border border-border text-text1 font-body text-sm font-light px-4 py-3.5 focus:border-ion focus:bg-panel transition-colors duration-200 placeholder:text-text3'

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name:'', email:'', company:'', budget:'', service:'', message:'', consent:false })
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const set = (field: keyof FormState, value: string | boolean) =>
    setForm(prev => ({ ...prev, [field]: value }))

  // Basic client-side sanitisation — strips HTML tags
  const sanitise = (val: string) => val.replace(/<[^>]*>/g, '').trim().slice(0, 2000)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    // Honeypot check (filled by bots)
    const honeypot = (e.currentTarget.elements.namedItem('website') as HTMLInputElement)?.value
    if (honeypot) { setStatus('idle'); return }

    try {
      const { send } = await import('@emailjs/browser')

      /**
       * ── EmailJS Setup ──────────────────────────────────────────
       * 1. Sign up free at https://emailjs.com
       * 2. Create Email Service (Gmail / Outlook)
       * 3. Create Email Template — use these variables:
       *    {{from_name}} {{from_email}} {{company}} {{budget}} {{service}} {{message}}
       * 4. Copy Service ID, Template ID, Public Key
       * 5. Add to .env.local:
       *    NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
       *    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
       *    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
       * ─────────────────────────────────────────────────────────
       */
      await send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          from_name:  sanitise(form.name),
          from_email: sanitise(form.email),
          company:    sanitise(form.company) || 'Not provided',
          budget:     form.budget,
          service:    form.service || 'Not specified',
          message:    sanitise(form.message),
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '' },
      )

      trackEvent('contact_form_submit', { budget: form.budget, service: form.service })
      setStatus('success')
    } catch (err) {
      console.error('EmailJS error:', err)
      setErrorMsg('Something went wrong. Please email us directly at hello@anaxion.tech')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-ion/[0.08] border border-ion/40 p-10 text-center">
        <div className="font-brand text-[12px] tracking-[3px] uppercase text-ion mb-4">✦ Message Received</div>
        <p className="text-sm text-text2 leading-[1.85]">
          Thank you. We have received your enquiry and will respond within 24 hours.
          If your project is urgent, please also book a call using the calendar link.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Honeypot — hidden from humans, filled by bots */}
      <input type="text" name="website" aria-hidden="true"
        className="absolute opacity-0 w-0 h-0 pointer-events-none" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="font-mono text-[10px] tracking-[3px] uppercase text-text2 block mb-2">Full Name *</label>
          <input id="name" required type="text" autoComplete="name"
            value={form.name} onChange={e => set('name', e.target.value)}
            placeholder="John Smith" maxLength={100} className={INPUT_CLASS} />
        </div>
        <div>
          <label htmlFor="email" className="font-mono text-[10px] tracking-[3px] uppercase text-text2 block mb-2">Email Address *</label>
          <input id="email" required type="email" autoComplete="email"
            value={form.email} onChange={e => set('email', e.target.value)}
            placeholder="john@company.com" maxLength={200} className={INPUT_CLASS} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className="font-mono text-[10px] tracking-[3px] uppercase text-text2 block mb-2">Company Name</label>
          <input id="company" type="text" autoComplete="organization"
            value={form.company} onChange={e => set('company', e.target.value)}
            placeholder="Acme Inc." maxLength={100} className={INPUT_CLASS} />
        </div>
        <div>
          <label htmlFor="budget" className="font-mono text-[10px] tracking-[3px] uppercase text-text2 block mb-2">Estimated Budget *</label>
          <select id="budget" required value={form.budget} onChange={e => set('budget', e.target.value)}
            className={`${INPUT_CLASS} appearance-none cursor-pointer`}>
            <option value="" disabled>Select a range</option>
            {BUDGET_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="service" className="font-mono text-[10px] tracking-[3px] uppercase text-text2 block mb-2">Service Required</label>
        <select id="service" value={form.service} onChange={e => set('service', e.target.value)}
          className={`${INPUT_CLASS} appearance-none cursor-pointer`}>
          <option value="" disabled>Select a service</option>
          {SERVICE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="font-mono text-[10px] tracking-[3px] uppercase text-text2 block mb-2">Project Details *</label>
        <textarea id="message" required value={form.message}
          onChange={e => set('message', e.target.value)}
          placeholder="Describe your project, goals, timeline, and any technical requirements..."
          rows={6} maxLength={2000}
          className={`${INPUT_CLASS} resize-y min-h-[120px]`} />
        <p className="text-[11px] text-text3 mt-1.5">
          {form.message.length}/2000 — more detail = more specific response
        </p>
      </div>

      <div className="flex items-start gap-3">
        <input type="checkbox" id="consent" required checked={form.consent}
          onChange={e => set('consent', e.target.checked)}
          className="mt-0.5 accent-ion flex-shrink-0 w-4 h-4" />
        <label htmlFor="consent" className="text-xs text-text2 leading-[1.75] cursor-pointer">
          I agree to the{' '}
          <Link href="/privacy" className="text-ion hover:underline">Privacy Policy</Link>
          {' '}and consent to Anaxion Technologies storing and processing my data to respond to this enquiry.
        </label>
      </div>

      {status === 'error' && (
        <div className="bg-red-500/10 border border-red-500/30 px-4 py-3 text-sm text-red-400">
          {errorMsg}
        </div>
      )}

      <button type="submit" disabled={status === 'sending'}
        className="w-full font-brand text-[12px] tracking-[4px] uppercase bg-ion text-black py-4 hover:bg-gold hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
        {status === 'sending' ? 'Sending...' : 'Send Enquiry →'}
      </button>
    </form>
  )
}
