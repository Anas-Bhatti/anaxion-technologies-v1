import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Anaxion Technologies — AI-Powered Software for US & UK Enterprises',
  description: 'We build AI-powered custom software, web applications, and enterprise systems for startups in the US & UK. Book a free discovery call today.',
  alternates: { canonical: 'https://anaxion.tech' },
  openGraph: {
    title:       'Anaxion Technologies — AI-Powered Software for US & UK Enterprises',
    description: 'We build AI-powered custom software, web applications, and enterprise systems for startups in the US & UK.',
    url:         'https://anaxion.tech',
    images:      [{ url: 'https://anaxion.tech/og-image.png', width: 1200, height: 630, alt: 'Anaxion Technologies' }],
  },
  twitter: { card: 'summary_large_image', images: ['https://anaxion.tech/og-image.png'] },
}

const services = [
  { title: 'AI Integration',     desc: 'LLMs, automation pipelines, and intelligent systems embedded into your product or workflow.'  },
  { title: 'Custom Web Apps',    desc: 'Full-stack applications in Angular, .NET Core, and SQL — built to scale from day one.'        },
  { title: 'Enterprise Systems', desc: 'Purpose-built ERP, CRM, and internal platforms that replace expensive off-the-shelf tools.'   },
  { title: 'API Development',    desc: 'RESTful and GraphQL APIs — versioned, documented, secured, and built to integrate anything.'  },
  { title: 'UI/UX Design',       desc: 'Design systems and interfaces that convert. Figma to pixel-perfect, WCAG compliant.'          },
  { title: 'IT Consulting',      desc: 'Architecture reviews, stack decisions, and technology roadmaps for founders and CTOs.'        },
]

const stats = [
  { value: '50+',  label: 'Projects delivered'  },
  { value: 'US/UK',label: 'Primary markets'     },
  { value: '100%', label: 'Client retention'    },
  { value: '24h',  label: 'Response guarantee'  },
]

const process = [
  { step: '01', title: 'Discovery',   desc: 'A 30-minute call to understand your goals, budget, and timeline. No pitch — just honest conversation.'         },
  { step: '02', title: 'Proposal',    desc: 'Fixed scope, fixed price, fixed timeline. You know exactly what you are getting before signing anything.'      },
  { step: '03', title: 'Build',       desc: 'Weekly demos. Full source code access from day one. You own everything we build.'                              },
  { step: '04', title: 'Launch',      desc: 'Deployment, monitoring, and post-launch support included. Ongoing retainer available.'                        },
]

const testimonials = [
  { quote: 'Anaxion delivered our AI-powered dashboard in 6 weeks. Clean code, honest communication, and they genuinely understood our business goals.',         author: 'Sarah Mitchell',  role: 'CEO, DataPulse',  location: 'London'     },
  { quote: 'The difference from other agencies is night and day. They ask the right questions before writing a single line of code.',                            author: 'James Thornton', role: 'Founder, Stackwise', location: 'Austin TX' },
  { quote: 'Our ERP went from concept to production in 4 months. Solid architecture, seamless AI integrations, and a team that delivers what they promise.',    author: 'Priya Nair',     role: 'CTO, Orbitax',    location: 'Manchester' },
]

export default function HomePage() {
  return (
    <>
      <JsonLd type="home" />

      {/* ── HERO ── */}
      <section className="min-h-screen flex flex-col justify-end pb-24 pt-32 relative bg-void overflow-hidden">
        {/* Subtle radial glow only — no grid, no ticker */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
          style={{background:'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,194,255,0.05) 0%, transparent 70%)'}}>
        </div>

        <div className="max-w-6xl mx-auto px-8 w-full relative z-10">
          {/* Eyebrow — plain text, no code comment */}
          <p className="font-mono text-[11px] tracking-[4px] uppercase text-ion/60 mb-10 opacity-0 animate-fadeUp"
            style={{animationDelay:'0.2s'}}>
            Anaxion Technologies &mdash; Est. 2025
          </p>

          {/* Headline — large, restrained, no gradient on first line */}
          <div className="opacity-0 animate-fadeUp" style={{animationDelay:'0.4s'}}>
            <h1 className="font-hero uppercase leading-[0.92] tracking-[0.04em]"
              style={{fontSize:'clamp(56px,8.5vw,124px)'}}>
              <span className="text-white block">We Build</span>
              <span className="text-gradient-accent block">Software That</span>
              <span className="text-white block">Means Business.</span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="mt-8 mb-12 text-[15px] text-text2 max-w-[480px] leading-[1.9] font-light opacity-0 animate-fadeUp"
            style={{animationDelay:'0.6s'}}>
            Custom software, AI integration, and enterprise systems for
            ambitious companies in the United States and United Kingdom.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-5 flex-wrap opacity-0 animate-fadeUp" style={{animationDelay:'0.8s'}}>
            <Link href="/contact"
              className="inline-flex items-center gap-3 bg-white text-black font-brand text-[10px] tracking-[3px] uppercase px-8 py-4 hover:bg-ion transition-colors duration-300">
              Book a Discovery Call
            </Link>
            <Link href="/services"
              className="inline-flex items-center gap-2 text-text2 font-brand text-[10px] tracking-[3px] uppercase hover:text-white transition-colors duration-300 group">
              View Services
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>

          {/* Stats — horizontal, minimal */}
          <div className="mt-20 pt-8 border-t border-border/50 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-0 animate-fadeUp"
            style={{animationDelay:'1s'}}>
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div className="font-hero text-[36px] tracking-[0.04em] text-white leading-none mb-1">{value}</div>
                <div className="font-mono text-[10px] tracking-[2px] uppercase text-text3">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-28 border-t border-border" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-8">
          <FadeUp>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <h2 id="services-heading" className="font-hero text-[clamp(36px,5vw,60px)] tracking-[0.04em] uppercase text-white leading-none">
                What We Build
              </h2>
              <Link href="/services"
                className="font-mono text-[10px] tracking-[3px] uppercase text-text3 hover:text-ion transition-colors duration-300 flex-shrink-0">
                All Services &rarr;
              </Link>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {services.map(({ title, desc }, i) => (
              <FadeUp key={title} delay={i * 60}>
                <Link href="/services"
                  className="block bg-void p-8 group hover:bg-surface transition-colors duration-300 h-full">
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-mono text-[9px] tracking-[3px] uppercase text-text3">
                      0{i + 1}
                    </span>
                    <span className="text-text3 opacity-0 group-hover:opacity-100 group-hover:text-ion transition-all duration-300 text-sm">
                      &rarr;
                    </span>
                  </div>
                  <h3 className="font-brand text-[13px] tracking-[1px] uppercase text-white mb-3 group-hover:text-ion transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-[13px] text-text2 leading-[1.8] font-light">{desc}</p>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-28 border-t border-border bg-black" aria-labelledby="about-heading">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <FadeUp>
              <h2 id="about-heading" className="font-hero text-[clamp(36px,5vw,60px)] tracking-[0.04em] uppercase text-white leading-[0.95] mb-8">
                Not an Agency.<br />
                <span className="text-gradient-accent">A Partner.</span>
              </h2>
              <p className="text-[15px] text-text2 leading-[1.9] font-light mb-5">
                Anaxion Technologies builds AI-powered software for founders and enterprises
                in the US and UK who need precision-engineered systems, not templated solutions.
              </p>
              <p className="text-[15px] text-text2 leading-[1.9] font-light mb-10">
                You work directly with the people building your product. No account managers,
                no handoffs, no surprises. Every engagement begins with honesty about what
                is possible and what it will cost.
              </p>
              <Link href="/contact"
                className="inline-flex items-center gap-2 font-brand text-[10px] tracking-[3px] uppercase text-white border border-border px-7 py-4 hover:border-ion hover:text-ion transition-colors duration-300 group">
                Start a Conversation
                <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </FadeUp>

            <FadeUp delay={150}>
              <div className="flex flex-col gap-6">
                {[
                  { label: 'AI-First Architecture',  text: 'Every system we build considers AI integration from day one — not bolted on after the fact.'        },
                  { label: 'US & UK Standards',       text: 'GDPR, CCPA, enterprise security, and English-first communication built into every engagement.'       },
                  { label: 'Fixed-Price Delivery',    text: 'Scope, cost, and timeline agreed upfront. No scope creep, no billing surprises.'                    },
                  { label: 'You Own Everything',      text: 'Full source code, full IP transfer on completion. No lock-in, no licensing, no dependencies on us.'  },
                ].map(({ label, text }) => (
                  <div key={label} className="border-t border-border pt-6">
                    <div className="font-brand text-[11px] tracking-[2px] uppercase text-white mb-2">{label}</div>
                    <p className="text-[13px] text-text2 leading-[1.8] font-light">{text}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-28 border-t border-border" aria-labelledby="process-heading">
        <div className="max-w-6xl mx-auto px-8">
          <FadeUp className="mb-16">
            <h2 id="process-heading" className="font-hero text-[clamp(36px,5vw,60px)] tracking-[0.04em] uppercase text-white leading-none">
              How We Work
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border">
            {process.map(({ step, title, desc }, i) => (
              <FadeUp key={step} delay={i * 80}>
                <div className="bg-void p-8 h-full">
                  <div className="font-mono text-[10px] tracking-[3px] uppercase text-ion mb-6">{step}</div>
                  <div className="font-brand text-[13px] tracking-[1px] uppercase text-white mb-4">{title}</div>
                  <p className="text-[13px] text-text2 leading-[1.8] font-light">{desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-28 border-t border-border bg-black" aria-labelledby="testimonials-heading">
        <div className="max-w-6xl mx-auto px-8">
          <FadeUp className="mb-16">
            <h2 id="testimonials-heading" className="font-hero text-[clamp(36px,5vw,60px)] tracking-[0.04em] uppercase text-white leading-none">
              Client Results
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {testimonials.map(({ quote, author, role, location }, i) => (
              <FadeUp key={author} delay={i * 100}>
                <figure className="bg-void p-8 h-full flex flex-col justify-between">
                  <blockquote className="text-[14px] text-text1 leading-[1.85] font-light mb-8">
                    &ldquo;{quote}&rdquo;
                  </blockquote>
                  <figcaption>
                    <div className="font-brand text-[11px] tracking-[1px] uppercase text-white mb-1">{author}</div>
                    <div className="font-mono text-[10px] tracking-[2px] uppercase text-text3">{role} &mdash; {location}</div>
                  </figcaption>
                </figure>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 border-t border-border" aria-labelledby="cta-heading">
        <div className="max-w-6xl mx-auto px-8">
          <FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 id="cta-heading" className="font-hero text-[clamp(40px,5vw,72px)] tracking-[0.04em] uppercase text-white leading-[0.95] mb-6">
                  Ready to Build<br />
                  <span className="text-gradient-accent">Something Real?</span>
                </h2>
                <p className="text-[15px] text-text2 leading-[1.9] font-light max-w-[400px]">
                  Book a free 30-minute discovery call. We will tell you honestly
                  whether we are the right fit — even if the answer is no.
                </p>
              </div>
              <div className="flex flex-col gap-4 md:items-end">
                <Link href="/contact"
                  className="inline-flex items-center gap-3 bg-white text-black font-brand text-[10px] tracking-[3px] uppercase px-10 py-5 hover:bg-ion transition-colors duration-300 w-full md:w-auto justify-center">
                  Book Discovery Call
                </Link>
                <Link href="/portfolio"
                  className="inline-flex items-center gap-3 border border-border text-text2 font-brand text-[10px] tracking-[3px] uppercase px-10 py-5 hover:border-white hover:text-white transition-colors duration-300 w-full md:w-auto justify-center group">
                  View Our Work
                  <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </Link>
                <p className="font-mono text-[10px] tracking-[2px] uppercase text-text3 mt-2">
                  Response within 24 hours
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
