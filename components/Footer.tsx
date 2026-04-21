import Link from 'next/link'

const serviceLinks = ['AI Integration','Custom Web Apps','Enterprise Systems','API Development','UI/UX Design','IT Consulting']
const legalLinks   = [
  { href:'/privacy', label:'Privacy Policy'      },
  { href:'/terms',   label:'Terms & Conditions'  },
  { href:'/cookies', label:'Cookie Policy'       },
]
const navLinks = [
  { href:'/',          label:'Home'      },
  { href:'/services',  label:'Services'  },
  { href:'/portfolio', label:'Portfolio' },
  { href:'/contact',   label:'Contact'   },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-border pt-18 pb-8">
      <div className="max-w-6xl mx-auto px-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14 pt-10">
          {/* Brand */}
          <div>
            <div className="font-hero text-4xl tracking-[0.12em] text-gradient-logo mb-1">ANAXION</div>
            <div className="font-brand text-[8px] tracking-[4px] uppercase text-text3 mb-4">TECHNOLOGIES</div>
            <p className="text-sm text-text2 leading-relaxed max-w-[280px]">
              AI-powered software engineering for ambitious startups and enterprises in the US & UK.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="font-brand text-[10px] tracking-[3px] uppercase text-text1 mb-5">Navigation</div>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-text2 hover:text-ion transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="font-brand text-[10px] tracking-[3px] uppercase text-text1 mb-5">Services</div>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map(s => (
                <li key={s}>
                  <Link href="/services" className="text-sm text-text2 hover:text-ion transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Contact */}
          <div>
            <div className="font-brand text-[10px] tracking-[3px] uppercase text-text1 mb-5">Legal</div>
            <ul className="flex flex-col gap-2.5 mb-8">
              {legalLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-text2 hover:text-ion transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
            <div className="font-brand text-[10px] tracking-[3px] uppercase text-text1 mb-3">Contact</div>
            <div className="text-sm text-text2">hello@anaxion.tech</div>
            <div className="font-mono text-[10px] tracking-[1px] text-text3 mt-1">anaxion.tech</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border">
          <div className="font-mono text-[10px] text-text3 tracking-[1px]">
            © 2025 Anaxion Technologies. All rights reserved.
          </div>
          <div className="flex gap-6">
            {legalLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="font-mono text-[10px] text-text3 tracking-[1px] hover:text-ion transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
