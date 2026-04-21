import type { ReactNode } from 'react'

interface LegalLayoutProps {
  title:    string
  accent:   string
  tag:      string
  children: ReactNode
}

export default function LegalLayout({ title, accent, tag, children }: LegalLayoutProps) {
  return (
    <>
      <div className="pt-40 pb-20 bg-black border-b border-border relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{background:'linear-gradient(90deg,transparent,#00C2FF,transparent)'}} />
        <div className="max-w-6xl mx-auto px-8">
          <span className="font-mono text-[10px] tracking-[4px] uppercase text-ion opacity-80 mb-3 block">{tag}</span>
          <h1 className="font-hero leading-[0.95] tracking-[0.06em] uppercase" style={{fontSize:'clamp(48px,7vw,100px)'}}>
            {title} <span style={{color:'#00C2FF'}}>{accent}</span>
          </h1>
        </div>
      </div>

      <section className="py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-8">
          <div className="max-w-3xl legal-content">
            {children}
          </div>
        </div>
      </section>

      <style>{`
        .legal-content h2 {
          font-family: 'Orbitron', monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #00C2FF;
          margin: 36px 0 14px;
        }
        .legal-content h2:first-child { margin-top: 0; }
        .legal-content p {
          font-size: 14px;
          color: #8888A8;
          line-height: 1.9;
          margin-bottom: 14px;
        }
        .legal-content strong { color: #EEEEF8; }
        .legal-content ul {
          padding-left: 18px;
          margin-bottom: 14px;
        }
        .legal-content ul li {
          font-size: 14px;
          color: #8888A8;
          line-height: 1.9;
          margin-bottom: 6px;
          list-style-type: disc;
        }
      `}</style>
    </>
  )
}
