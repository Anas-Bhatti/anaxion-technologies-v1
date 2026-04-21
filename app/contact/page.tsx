import type { Metadata } from 'next'
import FadeUp from '@/components/FadeUp'
import ContactForm from '@/components/ContactForm'
import AIRecommender from '@/components/AIRecommender'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Contact — Book a Discovery Call or Send an Enquiry',
  description: 'Get in touch with Anaxion Technologies. Book a free 30-minute discovery call or send a project enquiry. We respond within 24 hours.',
  alternates: { canonical: 'https://anaxion.tech/contact' },
  openGraph: {
    title:       'Contact — Anaxion Technologies',
    description: 'Book a free 30-minute discovery call or send a project enquiry. We respond within 24 hours.',
    url:         'https://anaxion.tech/contact',
    images:      [{ url: 'https://anaxion.tech/og-image.png', width: 1200, height: 630, alt: 'Contact Anaxion Technologies' }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Contact — Anaxion Technologies',
    description: 'Book a free 30-minute discovery call or send a project enquiry.',
    images:      ['https://anaxion.tech/og-image.png'],
  },
}

const contactInfo = [
  { icon:'◈', label:'Email',          value:'hello@anaxion.tech'             },
  { icon:'✦', label:'Markets Served', value:'United States & United Kingdom' },
  { icon:'◉', label:'Response Time',  value:'Within 24 hours'                },
  { icon:'◆', label:'Website',        value:'anaxion.tech'                   },
]

export default function ContactPage() {
  return (
    <>
      <JsonLd type="contact" />
      <div className="pt-40 pb-20 bg-black border-b border-border relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{background:'linear-gradient(90deg,transparent,#00C2FF,transparent)'}}
          aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-8">
          <span className="font-mono text-[10px] tracking-[4px] uppercase text-ion opacity-80 mb-3 block">Get In Touch</span>
          <h1 className="font-hero text-[clamp(56px,9vw,120px)] tracking-[0.06em] uppercase mb-4 leading-[0.95]">
            Let&apos;s <span className="text-ion">Build.</span>
          </h1>
          <p className="text-base text-text2 max-w-[520px] leading-[1.85]">
            Tell us about your project. We respond within 24 hours with honest advice &mdash;
            even if that means pointing you elsewhere.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16">
            <FadeUp>
              <div>
                {contactInfo.map(({ icon, label, value }) => (
                  <div key={label} className="flex gap-4 items-start py-6 border-b border-border">
                    <span className="text-ion text-lg mt-0.5 flex-shrink-0" aria-hidden="true">{icon}</span>
                    <div>
                      <div className="font-mono text-[10px] tracking-[3px] uppercase text-text3 mb-1">{label}</div>
                      <div className="text-sm text-text1">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-surface border border-border p-10 mt-6">
                <span className="font-mono text-[10px] tracking-[4px] uppercase text-ion mb-2 block">Book a Call</span>
                <h2 className="font-brand text-[14px] tracking-[2px] uppercase text-text1 mb-3">Free 30-Min Discovery Call</h2>
                <p className="text-sm text-text2 leading-[1.85] mb-2">
                  No commitment. We discuss your project, goals, and budget &mdash; and give you honest feedback on feasibility and approach.
                </p>
                <a href="https://calendar.google.com/calendar/appointments/create"
                  target="_blank" rel="noopener noreferrer"
                  className="block w-full text-center font-brand text-[11px] tracking-[4px] uppercase bg-gold text-black py-4 mt-5 hover:bg-ion hover:-translate-y-0.5 transition-all duration-300">
                  Schedule via Google Calendar &rarr;
                </a>
                <p className="font-mono text-[10px] tracking-[1px] text-text3 text-center mt-3">
                  Available: Mon&ndash;Fri, 9AM&ndash;6PM GMT / EST
                </p>
              </div>
              <AIRecommender />
            </FadeUp>

            <FadeUp delay={150}>
              <span className="font-mono text-[10px] tracking-[4px] uppercase text-ion opacity-80 mb-3 block">Send an Enquiry</span>
              <h2 className="font-hero text-[clamp(36px,4vw,60px)] tracking-[0.06em] uppercase mb-8">
                Start Your<br /><span className="text-gold">Project</span>
              </h2>
              <ContactForm />
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  )
}
