import Link from 'next/link'

const NAV   = [{ href:'/', label:'Home' },{ href:'/services', label:'Services' },{ href:'/portfolio', label:'Portfolio' },{ href:'/contact', label:'Contact' }]
const SVCS  = ['AI Integration','Custom Web Apps','Enterprise Systems','API Development','UI/UX Design','IT Consulting']
const LEGAL = [{ href:'/privacy', label:'Privacy Policy' },{ href:'/terms', label:'Terms & Conditions' },{ href:'/cookies', label:'Cookie Policy' }]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-border">
      <div className="max-w-6xl mx-auto px-8">

        {/* Main footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16">
          <div className="md:col-span-1">
            <div className="font-hero text-[22px] tracking-[0.14em] text-white mb-1">ANAXION</div>
            <div className="font-mono text-[7px] tracking-[4px] uppercase text-text3 mb-5">TECHNOLOGIES</div>
            <p className="text-[13px] text-text2 leading-[1.8] font-light max-w-[220px]">
              AI-powered software engineering for US &amp; UK enterprises.
            </p>
          </div>

          <div>
            <div className="font-mono text-[9px] tracking-[3px] uppercase text-text3 mb-5">Navigation</div>
            <ul className="flex flex-col gap-3">
              {NAV.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-[13px] text-text2 hover:text-white transition-colors duration-200 font-light">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono text-[9px] tracking-[3px] uppercase text-text3 mb-5">Services</div>
            <ul className="flex flex-col gap-3">
              {SVCS.map(s => (
                <li key={s}>
                  <Link href="/services" className="text-[13px] text-text2 hover:text-white transition-colors duration-200 font-light">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-mono text-[9px] tracking-[3px] uppercase text-text3 mb-5">Legal</div>
            <ul className="flex flex-col gap-3 mb-8">
              {LEGAL.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-[13px] text-text2 hover:text-white transition-colors duration-200 font-light">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="font-mono text-[9px] tracking-[3px] uppercase text-text3 mb-3">Contact</div>
            <a href="mailto:hello@anaxion.tech"
              className="text-[13px] text-text2 hover:text-white transition-colors duration-200 font-light block">
              hello@anaxion.tech
            </a>
            <span className="text-[12px] text-text3 font-mono mt-1 block">anaxion.tech</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6 border-t border-border">
          <div className="font-mono text-[10px] text-text3 tracking-[1px]">
            &copy; 2025 Anaxion Technologies. All rights reserved.
          </div>
          <div className="flex gap-6">
            {LEGAL.map(({ href, label }) => (
              <Link key={href} href={href}
                className="font-mono text-[10px] text-text3 tracking-[1px] hover:text-text2 transition-colors duration-200">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
