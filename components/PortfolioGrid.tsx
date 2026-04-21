'use client'
import { useState } from 'react'
import Link from 'next/link'
import FadeUp from '@/components/FadeUp'

const projects = [
  { cat:'ai',         label:'AI Integration',   title:'DataPulse — AI Analytics Dashboard', desc:'Real-time business intelligence platform with AI-powered anomaly detection and natural language query interface.',           tech:['Angular','.NET Core','OpenAI API','SQL Server'] },
  { cat:'enterprise', label:'Enterprise System', title:'Orbitax — Custom ERP Platform',      desc:'End-to-end ERP for a Manchester-based financial services firm. HR, inventory, reporting, and client management unified.',  tech:['.NET Core','Angular','SQL Server SPs','Azure']  },
  { cat:'web',        label:'Web Application',   title:'Stackwise — SaaS Platform',          desc:'Multi-tenant SaaS platform for developer tooling. Subscription billing, team management, and CI/CD integrations.',        tech:['Next.js','TypeScript','REST API','Stripe']       },
  { cat:'api',        label:'API Development',   title:'PayRoute — Payments API Gateway',    desc:'High-throughput payments API handling 50k+ transactions daily with fraud detection and multi-currency support.',          tech:['.NET Core','ADO.NET','JWT','Redis']              },
  { cat:'ai',         label:'AI System',         title:'HireFlow — AI Recruitment Engine',   desc:'CV screening and candidate ranking system using LLMs. Reduced hiring time by 60% for a London-based HR firm.',           tech:['Python','Claude API','Angular','FastAPI']        },
  { cat:'web',        label:'Web Application',   title:'ClientCore — CRM System',            desc:"Custom CRM replacing Salesforce for a US-based consulting firm. Pipeline management, email automation, and reporting.",   tech:['Angular','.NET 8','SQL Server','SignalR']        },
]

const FILTERS = [
  { key:'all',        label:'All'        },
  { key:'ai',         label:'AI Systems' },
  { key:'web',        label:'Web Apps'   },
  { key:'enterprise', label:'Enterprise' },
  { key:'api',        label:'APIs'       },
]

export default function PortfolioGrid() {
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? projects : projects.filter(p => p.cat === active)

  return (
    <section className="py-20" aria-labelledby="portfolio-heading">
      <h2 id="portfolio-heading" className="sr-only">Project Portfolio</h2>
      <div className="max-w-6xl mx-auto px-8">

        {/* Filters */}
        <div className="flex gap-2 flex-wrap mb-12" role="group" aria-label="Filter projects by category">
          {FILTERS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              aria-pressed={active === key}
              className={`font-mono text-[10px] tracking-[3px] uppercase px-5 py-2.5 border transition-all duration-300 ${
                active === key
                  ? 'border-ion text-ion bg-ion/10'
                  : 'border-border text-text2 hover:border-ion hover:text-ion hover:bg-ion/5'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map(({ cat, label, title, desc, tech }) => (
            <FadeUp key={title}>
              <article className="bg-surface border border-border overflow-hidden group hover:border-ion/30 hover:-translate-y-1 transition-all duration-300">
                <div className="h-48 bg-panel relative overflow-hidden flex items-center justify-center" aria-hidden="true">
                  <span className="font-hero text-[56px] tracking-[0.1em] text-white/[0.06] select-none">
                    {cat.toUpperCase()}
                  </span>
                  <div className="absolute inset-0 bg-ion/[0.06] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="font-brand text-[10px] tracking-[3px] uppercase text-ion">View Case Study &rarr;</span>
                  </div>
                </div>
                <div className="p-7">
                  <div className="font-mono text-[9px] tracking-[3px] uppercase text-ion mb-2">{label}</div>
                  <h3 className="font-brand text-[13px] tracking-[1px] uppercase text-text1 mb-2">{title}</h3>
                  <p className="text-xs text-text2 leading-[1.75] mb-4">{desc}</p>
                  <ul className="flex flex-wrap gap-1.5" aria-label="Technologies used">
                    {tech.map(t => (
                      <li key={t} className="font-mono text-[9px] tracking-[1px] text-text3 bg-panel border border-border px-2.5 py-1">{t}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-text2 mb-6">Have a project in mind? Let&apos;s discuss it.</p>
          <Link
            href="/contact"
            className="font-brand text-[11px] tracking-[3px] uppercase bg-ion text-black px-9 py-4 hover:bg-gold hover:-translate-y-0.5 transition-all duration-300 inline-block"
          >
            Start Your Project &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
