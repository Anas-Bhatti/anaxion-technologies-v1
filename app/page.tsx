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
  { icon: '◈', title: 'AI Integration',     desc: 'Embed intelligent automation into your workflows. ChatGPT, Claude, custom ML — we connect AI to your business logic.'     },
  { icon: '⬡', title: 'Custom Web Apps',    desc: 'Full-stack web applications built for performance. Angular, .NET Core, SQL — clean architecture, clean code.'            },
  { icon: '◉', title: 'Enterprise Systems', desc: 'ERPs, CRMs, and internal platforms for businesses that have outgrown off-the-shelf solutions.'                           },
  { icon: '✦', title: 'API Development',    desc: 'Robust RESTful and GraphQL APIs that power your products. Secure, documented, and built to integrate with anything.'    },
  { icon: '◆', title: 'UI/UX & Branding',   desc: 'Interfaces that convert. We design systems that look world-class and perform even better.'                              },
  { icon: '⬛', title: 'IT Consulting',      desc: 'Architecture reviews, stack decisions, roadmap planning — strategic guidance for founders and CTOs.'                   },
]

const stats = [
  { num: '50',  suffix: '+',  label: 'Projects Delivered' },
  { num: 'US',  suffix: '/UK',label: 'Primary Markets'    },
  { num: 'AI',  suffix: '∞',  label: 'Integrated Systems' },
  { num: '100', suffix: '%',  label: 'Client Retention'   },
]

const testimonials = [
  { quote: 'Anaxion delivered our entire AI-powered dashboard in 6 weeks. Clean code, great communication, and they genuinely understood our business goals.',          author: 'Sarah Mitchell', company: 'CEO, DataPulse — London, UK'    },
  { quote: 'We had tried two other agencies before Anaxion. The difference is night and day. They ask the right questions before writing a single line of code.',       author: 'James Thornton', company: 'Founder, Stackwise — Austin, TX' },
  { quote: 'Our enterprise ERP went from concept to production in 4 months. The architecture is solid, the AI integrations are seamless, and the team is excellent.',  author: 'Priya Nair',     company: 'CTO, Orbitax — Manchester, UK'  },
]

const process = [
  { num:'01', title:'Discovery Call',          desc:'30-minute session. We understand your business, goals, budget, and timeline. No sales pitch — honest conversation.'       },
  { num:'02', title:'Proposal & Architecture', desc:'A precise technical proposal with scope, timeline, and cost. No ambiguity. You know exactly what you get before signing.' },
  { num:'03', title:'Build & Iterate',         desc:'Agile sprints with weekly demos. Full source code access from day one — it is always your code.'                         },
  { num:'04', title:'Launch & Support',        desc:'We deploy, monitor, and support post-launch. Optional retainer for ongoing development and AI model updates.'             },
]

const marqueeItems = ['AI Integration','Custom Software','Web Applications','Enterprise Systems','API Development','Cloud Solutions','UI/UX Design','Digital Transformation']

export default function HomePage() {
  return (
    <>
      <JsonLd type="home" />

      {/* ── HERO ── */}
      <section className="min-h-screen flex flex-col justify-end pb-20 relative overflow-hidden bg-black">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0" style={{ background:'radial-gradient(ellipse 70% 50% at 50% -10%,rgba(0,194,255,0.06) 0%,transparent 60%)' }} />
          <div className="absolute inset-0" style={{ background:'radial-gradient(ellipse 40% 40% at 90% 90%,rgba(201,168,76,0.04) 0%,transparent 50%)' }} />
        </div>
        <div className="absolute inset-0 hero-grid-bg pointer-events-none" aria-hidden="true" />
        <div className="absolute top-1/2 left-0 right-0 pointer-events-none select-none -translate-y-1/2 overflow-hidden" aria-hidden="true">
          <div className="animate-ticker whitespace-nowrap font-hero text-[clamp(120px,20vw,260px)] tracking-[0.05em] text-white/[0.018]">
            {Array(6).fill('ANAXION\u00A0\u00A0\u00A0').join('')}
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-8 relative z-10 w-full">
          <p className="font-mono text-[11px] tracking-[5px] uppercase text-ion mb-7 opacity-0 animate-fadeUp" style={{animationDelay:'0.3s'}}>
            &#47;&#47; Anaxion Technologies &mdash; anaxion.tech
          </p>

          <div className="opacity-0 animate-fadeUp" style={{animationDelay:'0.5s'}}>
            <h1 className="font-hero leading-[0.95] tracking-[0.08em] uppercase" style={{fontSize:'clamp(64px,9vw,130px)'}}>
              <span className="text-gradient-hero block">Beyond</span>
              <span className="text-gradient-accent block">The Known.</span>
            </h1>
          </div>

          <p className="text-base text-text2 max-w-[520px] leading-[1.85] mt-6 mb-11 opacity-0 animate-fadeUp" style={{animationDelay:'0.7s'}}>
            We build <strong className="text-text1 font-medium">AI-powered software systems</strong> for startups
            and enterprises in the US &amp; UK &mdash; custom, fast, and engineered to scale.
          </p>

          <div className="flex gap-4 flex-wrap opacity-0 animate-fadeUp" style={{animationDelay:'0.9s'}}>
            <Link href="/contact"
              className="font-brand text-[11px] tracking-[3px] uppercase bg-ion text-black px-9 py-4 hover:bg-gold hover:-translate-y-0.5 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,194,255,0.25)]">
              Book Discovery Call &rarr;
            </Link>
            <Link href="/services"
              className="font-brand text-[11px] tracking-[3px] uppercase border border-border text-text1 px-9 py-4 hover:border-ion hover:text-ion hover:-translate-y-0.5 transition-all duration-300">
              Our Services
            </Link>
          </div>

          <div className="flex flex-wrap gap-12 mt-20 pt-12 border-t border-border opacity-0 animate-fadeUp" style={{animationDelay:'1.1s'}}>
            {stats.map(({ num, suffix, label }) => (
              <div key={label}>
                <div className="font-hero text-5xl tracking-[0.05em] leading-none text-text1">
                  {num}<span className="text-ion">{suffix}</span>
                </div>
                <div className="font-mono text-[10px] tracking-[3px] uppercase text-text3 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 right-8 flex flex-col items-center gap-3 font-mono text-[9px] tracking-[3px] uppercase text-text3 opacity-0 animate-fadeUp" aria-hidden="true" style={{animationDelay:'1.3s'}}>
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-ion to-transparent animate-scrollP" />
          Scroll
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="bg-surface border-y border-border py-3.5 overflow-hidden" aria-hidden="true">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className={`font-brand text-[10px] tracking-[4px] uppercase px-10 border-r border-border flex-shrink-0 ${i % 2 === 0 ? 'text-ion' : 'text-text3'}`}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="py-24 border-b border-border" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-8">
          <FadeUp>
            <span className="font-mono text-[10px] tracking-[4px] uppercase text-ion opacity-80 mb-3 block">02 &mdash; What We Build</span>
            <h2 id="services-heading" className="font-hero text-[clamp(40px,5vw,72px)] tracking-[0.06em] uppercase mb-14">
              Our <span className="text-ion">Core</span><br />Services
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map(({ icon, title, desc }, i) => (
              <FadeUp key={title} delay={i * 80}>
                <Link href="/services"
                  className="block bg-surface border border-border p-9 card-hover group h-full">
                  <span className="text-[28px] mb-5 block" aria-hidden="true">{icon}</span>
                  <h3 className="font-brand text-[12px] tracking-[2px] uppercase text-text1 mb-3">{title}</h3>
                  <p className="text-[13px] text-text2 leading-[1.85]">{desc}</p>
                  <span className="mt-4 text-ion text-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300 inline-block" aria-hidden="true">&rarr;</span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-24 border-b border-border bg-black" aria-labelledby="about-heading">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <FadeUp>
            <span className="font-mono text-[10px] tracking-[4px] uppercase text-ion opacity-80 mb-3 block">03 &mdash; Who We Are</span>
            <h2 id="about-heading" className="font-hero text-[clamp(40px,5vw,72px)] tracking-[0.06em] uppercase mb-6">
              The <span className="text-gold">Force</span><br />Behind You
            </h2>
            <p className="text-[15px] text-text2 leading-[1.9] mb-5">
              Anaxion Technologies is a premium software house targeting ambitious founders and growing
              enterprises in the US and UK who need enterprise-grade systems without enterprise-grade friction.
            </p>
            <p className="text-[15px] text-text2 leading-[1.9] mb-8">
              We are not a body-shop. We are a strategic technology partner &mdash; embedded in your vision,
              delivering with precision.
            </p>
            <Link href="/contact"
              className="font-brand text-[11px] tracking-[3px] uppercase border border-border text-text1 px-9 py-4 hover:border-ion hover:text-ion transition-all duration-300 inline-block">
              Start a Conversation &rarr;
            </Link>
          </FadeUp>

          <FadeUp delay={150} className="flex flex-col gap-5">
            {[
              { icon:'◈', title:'AI-First Approach',    text:'Every system we build considers AI integration from day one — not as an afterthought, but as a core architectural decision.' },
              { icon:'✦', title:'US & UK Market Focus', text:'We understand the standards, compliance needs, and expectations of US and UK clients. Legal, technical, and cultural alignment.' },
              { icon:'◆', title:'Founder-to-Founder',   text:'You work directly with the people building your product. No account managers, no handoffs — just direct, honest execution.' },
            ].map(({ icon, title, text }) => (
              <div key={title} className="bg-surface border border-border p-7 flex gap-4 hover:border-ion transition-colors duration-300">
                <span className="text-ion text-xl flex-shrink-0 mt-0.5" aria-hidden="true">{icon}</span>
                <div>
                  <div className="font-brand text-[11px] tracking-[2px] uppercase text-text1 mb-2">{title}</div>
                  <p className="text-[13px] text-text2 leading-[1.75]">{text}</p>
                </div>
              </div>
            ))}
          </FadeUp>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 border-b border-border" aria-labelledby="process-heading">
        <div className="max-w-6xl mx-auto px-8">
          <FadeUp className="mb-14">
            <span className="font-mono text-[10px] tracking-[4px] uppercase text-ion opacity-80 mb-3 block">04 &mdash; How We Work</span>
            <h2 id="process-heading" className="font-hero text-[clamp(40px,5vw,72px)] tracking-[0.06em] uppercase">
              Our <span className="text-ion">Process</span>
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {process.map(({ num, title, desc }, i) => (
              <FadeUp key={num} delay={i * 100}>
                <div className="relative pl-12 pb-10 pt-8 border-l border-border group hover:border-ion transition-colors duration-300">
                  <div className="absolute -left-5 top-7 w-10 h-10 bg-surface border border-border flex items-center justify-center font-mono text-[11px] text-ion transition-all duration-300 group-hover:bg-ion group-hover:text-black group-hover:border-ion" aria-hidden="true">
                    {num}
                  </div>
                  <h3 className="font-brand text-[12px] tracking-[2px] uppercase text-text1 mb-2.5">{title}</h3>
                  <p className="text-[13px] text-text2 leading-[1.85]">{desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 border-b border-border bg-black" aria-labelledby="testimonials-heading">
        <div className="max-w-6xl mx-auto px-8">
          <FadeUp className="mb-14">
            <span className="font-mono text-[10px] tracking-[4px] uppercase text-ion opacity-80 mb-3 block">05 &mdash; Client Words</span>
            <h2 id="testimonials-heading" className="font-hero text-[clamp(40px,5vw,72px)] tracking-[0.06em] uppercase">
              What They <span className="text-gold">Say</span>
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ quote, author, company }, i) => (
              <FadeUp key={author} delay={i * 100}>
                <figure className="bg-surface border border-border p-9 relative h-full hover:border-ion/30 transition-colors duration-300">
                  <span className="absolute top-5 left-7 font-hero text-[64px] text-ion/20 leading-none select-none" aria-hidden="true">&ldquo;</span>
                  <blockquote className="text-[15px] text-text1 leading-[1.85] italic mb-6 mt-4">{quote}</blockquote>
                  <figcaption>
                    <div className="font-brand text-[10px] tracking-[2px] uppercase text-ion">{author}</div>
                    <div className="text-xs text-text3 mt-1">{company}</div>
                  </figcaption>
                </figure>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24" aria-labelledby="cta-heading">
        <div className="max-w-6xl mx-auto px-8">
          <FadeUp>
            <div className="bg-surface border border-border p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
                <span className="font-hero text-[200px] tracking-[0.1em] text-white/[0.015]">ANAXION</span>
              </div>
              <span className="font-mono text-[10px] tracking-[4px] uppercase text-ion opacity-80 mb-4 block">Ready to Build?</span>
              <h2 id="cta-heading" className="font-hero text-[clamp(40px,5vw,72px)] tracking-[0.06em] uppercase mb-4 relative z-10">
                Let&apos;s Build<br /><span className="text-ion">Something Real.</span>
              </h2>
              <p className="text-[15px] text-text2 max-w-[480px] mx-auto leading-[1.85] mb-8 relative z-10">
                Book a free 30-minute discovery call. No commitment. We will tell you honestly if we
                are the right fit for your project.
              </p>
              <div className="flex gap-4 justify-center flex-wrap relative z-10">
                <Link href="/contact"
                  className="font-brand text-[11px] tracking-[3px] uppercase bg-ion text-black px-9 py-4 hover:bg-gold hover:-translate-y-0.5 transition-all duration-300">
                  Book Discovery Call &rarr;
                </Link>
                <Link href="/portfolio"
                  className="font-brand text-[11px] tracking-[3px] uppercase border border-border text-text1 px-9 py-4 hover:border-ion hover:text-ion hover:-translate-y-0.5 transition-all duration-300">
                  View Our Work
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
