import type { Metadata } from 'next'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Services — AI Integration, Custom Software & Enterprise Systems',
  description: 'Six core services for US & UK businesses: AI Integration, Custom Web Apps, Enterprise ERP/CRM, API Development, UI/UX Design, and IT Consulting.',
  alternates: { canonical: 'https://anaxion.tech/services' },
  openGraph: {
    title:       'Services — Anaxion Technologies',
    description: 'AI Integration, Custom Web Apps, Enterprise Systems, API Development, UI/UX Design, IT Consulting.',
    url:         'https://anaxion.tech/services',
    images:      [{ url: 'https://anaxion.tech/og-image.png', width: 1200, height: 630, alt: 'Anaxion Technologies Services' }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Services — Anaxion Technologies',
    description: 'AI Integration, Custom Web Apps, Enterprise Systems, API Development and more.',
    images:      ['https://anaxion.tech/og-image.png'],
  },
}

const services = [
  {
    icon:'◈', title:'AI Integration Services',
    tagline:'Embed intelligence into your existing systems or build AI-native products from scratch.',
    desc:'We integrate large language models, computer vision, recommendation engines, and predictive analytics into your software. From connecting OpenAI APIs to your CRM, to building custom ML pipelines for data-heavy workflows — we make AI work for your specific business context, not a generic demo.',
    tags:['LLM Integration','OpenAI / Claude API','Custom ML Models','AI Chatbots','Predictive Analytics','Data Pipelines'],
  },
  {
    icon:'⬡', title:'Custom Web Applications',
    tagline:'Full-stack web applications built for performance, scalability, and clean UX.',
    desc:'We architect and build production-grade web applications using Angular, .NET Core, and SQL Server. Component-driven frontends, RESTful backends, optimised databases — delivered with full documentation, test coverage, and clean code your team can maintain and extend.',
    tags:['Angular 17+','.NET Core 8','SQL Server','ADO.NET','Next.js','TypeScript','REST APIs'],
  },
  {
    icon:'◉', title:'Enterprise Systems (ERP/CRM)',
    tagline:'Custom internal platforms that replace off-the-shelf software costing you flexibility.',
    desc:'When SAP is too expensive and spreadsheets are too fragile, Anaxion builds the middle ground — lean, purpose-built enterprise software tailored to your operations. Inventory, HR, finance, client management — integrated, automated, and owned entirely by you.',
    tags:['ERP Systems','CRM Platforms','Inventory Management','HR Systems','Reporting Dashboards'],
  },
  {
    icon:'✦', title:'API Design & Development',
    tagline:'The backbone of modern software. Secure, documented, and built to last.',
    desc:'Whether you need a greenfield API for your mobile app, a migration from legacy services, or a gateway to integrate third-party platforms — we design REST and GraphQL APIs with proper versioning, authentication, rate limiting, and full Swagger documentation.',
    tags:['RESTful APIs','GraphQL','JWT Auth','OAuth 2.0','Swagger / OpenAPI','Microservices'],
  },
  {
    icon:'◆', title:'UI/UX Design & Brand Systems',
    tagline:'Interfaces that users trust, understand, and convert on.',
    desc:'From brand identity systems to pixel-perfect UI components, we design digital experiences that reflect the quality of your product. Figma design systems, interactive prototypes, accessibility-compliant components, and full developer handoff — every pixel has a purpose.',
    tags:['Figma Design Systems','UI Components','Brand Identity','Prototyping','WCAG Accessibility'],
  },
  {
    icon:'⬛', title:'IT Consulting & Architecture',
    tagline:'Strategic guidance for founders and CTOs navigating complex technology decisions.',
    desc:'Not every problem needs code. Sometimes it needs clarity. We work with technical and non-technical founders to audit existing systems, define architecture strategies, choose the right tech stack, plan cloud migrations, and build technology roadmaps aligned to business milestones.',
    tags:['Architecture Review','Stack Selection','Cloud Migration','Tech Roadmap','Code Audit'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <JsonLd type="services" />
      <div className="pt-40 pb-20 bg-black border-b border-border relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{background:'linear-gradient(90deg,transparent,#00C2FF,transparent)'}}
          aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-8">
          <span className="font-mono text-[10px] tracking-[4px] uppercase text-ion opacity-80 mb-3 block">What We Build</span>
          <h1 className="font-hero text-[clamp(56px,9vw,120px)] tracking-[0.06em] uppercase mb-4 leading-[0.95]">
            Our <span className="text-ion">Services</span>
          </h1>
          <p className="text-base text-text2 max-w-[560px] leading-[1.85]">
            Six core service lines. Every one designed to deliver measurable business outcomes &mdash; not just lines of code.
          </p>
        </div>
      </div>

      <section className="py-20" aria-labelledby="services-list-heading">
        <h2 id="services-list-heading" className="sr-only">Our Service Offerings</h2>
        <div className="max-w-6xl mx-auto px-8 flex flex-col gap-0.5">
          {services.map(({ icon, title, tagline, desc, tags }, i) => (
            <FadeUp key={title} delay={i * 60}>
              <article className="bg-surface border border-border p-12 card-left-bar hover:border-ion/25 transition-colors duration-300">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-14 h-14 bg-ion/10 flex items-center justify-center text-2xl flex-shrink-0" aria-hidden="true">{icon}</div>
                  <div>
                    <h2 className="font-brand text-[14px] tracking-[2px] uppercase text-text1 mb-1.5">{title}</h2>
                    <p className="text-[13px] text-text2">{tagline}</p>
                  </div>
                </div>
                <p className="text-sm text-text2 leading-[1.9] max-w-3xl mb-5">{desc}</p>
                <ul className="flex flex-wrap gap-2" aria-label="Technologies">
                  {tags.map(tag => (
                    <li key={tag} className="font-mono text-[10px] tracking-[2px] uppercase text-text2 border border-border px-3.5 py-1.5 hover:border-ion hover:text-ion transition-colors duration-200 cursor-default">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-8">
          <FadeUp>
            <div className="bg-surface border border-border p-16 text-center relative overflow-hidden">
              <span className="font-mono text-[10px] tracking-[4px] uppercase text-ion opacity-80 mb-4 block">Get Started</span>
              <h2 className="font-hero text-[clamp(36px,4vw,64px)] tracking-[0.06em] uppercase mb-4">
                Not Sure Which<br /><span className="text-ion">Service You Need?</span>
              </h2>
              <p className="text-[15px] text-text2 max-w-[440px] mx-auto mb-8 leading-[1.85]">
                Use our AI Service Recommender on the contact page &mdash; answer 3 questions and get a tailored recommendation instantly.
              </p>
              <Link href="/contact"
                className="font-brand text-[11px] tracking-[3px] uppercase bg-ion text-black px-9 py-4 hover:bg-gold hover:-translate-y-0.5 transition-all duration-300 inline-block">
                Get a Recommendation &rarr;
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
