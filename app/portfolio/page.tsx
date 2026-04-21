import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import PortfolioGrid from '@/components/PortfolioGrid'

export const metadata: Metadata = {
  title: 'Portfolio — Selected Projects & Case Studies',
  description: 'Explore Anaxion Technologies selected projects: AI dashboards, enterprise ERPs, SaaS platforms, payment APIs, and CRM systems built for US & UK clients.',
  alternates: { canonical: 'https://anaxion.tech/portfolio' },
  openGraph: {
    title:       'Portfolio — Anaxion Technologies',
    description: 'AI dashboards, enterprise ERPs, SaaS platforms, and custom APIs built for US & UK clients.',
    url:         'https://anaxion.tech/portfolio',
    images:      [{ url: 'https://anaxion.tech/og-image.png', width: 1200, height: 630, alt: 'Anaxion Technologies Portfolio' }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Portfolio — Anaxion Technologies',
    description: 'AI dashboards, enterprise ERPs, SaaS platforms, and APIs built for US & UK clients.',
    images:      ['https://anaxion.tech/og-image.png'],
  },
}

export default function PortfolioPage() {
  return (
    <>
      <JsonLd type="portfolio" />
      <div className="pt-40 pb-20 bg-black border-b border-border relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{background:'linear-gradient(90deg,transparent,#C9A84C,transparent)'}}
          aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-8">
          <span className="font-mono text-[10px] tracking-[4px] uppercase text-ion opacity-80 mb-3 block">Our Work</span>
          <h1 className="font-hero text-[clamp(56px,9vw,120px)] tracking-[0.06em] uppercase mb-4 leading-[0.95]">
            Selected <span className="text-gold">Projects</span>
          </h1>
          <p className="text-base text-text2 max-w-[560px] leading-[1.85]">
            A selection of systems, products, and platforms engineered for clients across the US and UK.
          </p>
        </div>
      </div>
      <PortfolioGrid />
    </>
  )
}
