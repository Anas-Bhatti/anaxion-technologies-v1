'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { trackEvent } from '@/components/Analytics'

const NAV_LINKS = [
  { href: '/',          label: 'Home'      },
  { href: '/services',  label: 'Services'  },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact',   label: 'Contact'   },
]

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMobileOpen(false)

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-border py-3' : 'py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
          <Link href="/" onClick={close} aria-label="Anaxion Technologies — home" className="flex flex-col leading-none">
            <span className="font-hero text-[28px] tracking-[0.12em] text-gradient-logo">ANAXION</span>
            <span className="font-brand text-[8px] tracking-[4px] uppercase text-text3 mt-[-4px]">TECHNOLOGIES</span>
          </Link>

          <div className="hidden md:flex items-center gap-9">
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href}
                className={`font-brand text-[10px] tracking-[3px] uppercase transition-colors relative group ${
                  pathname === href ? 'text-ion' : 'text-text2 hover:text-ion'
                }`}
              >
                {label}
                <span className={`absolute -bottom-1 left-0 h-px bg-ion transition-all duration-300 ${
                  pathname === href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          <Link href="/contact"
            onClick={() => trackEvent('nav_cta_click')}
            className="hidden md:block font-brand text-[10px] tracking-[3px] uppercase bg-ion text-black px-5 py-2.5 hover:bg-gold transition-colors duration-200">
            Book a Call
          </Link>

          <button
            className="md:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setMobileOpen(v => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span className={`w-6 h-px bg-text1 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
            <span className={`w-6 h-px bg-text1 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-px bg-text1 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
          </button>
        </div>
      </nav>

      <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation"
        className={`fixed inset-0 bg-void z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {NAV_LINKS.map(({ href, label }) => (
          <Link key={href} href={href} onClick={close}
            className="font-hero text-5xl tracking-[0.1em] text-text1 hover:text-ion transition-colors">
            {label}
          </Link>
        ))}
        <Link href="/contact" onClick={() => { close(); trackEvent('mobile_cta_click') }}
          className="font-hero text-5xl tracking-[0.1em] text-ion mt-4">
          Book a Call &rarr;
        </Link>
      </div>
    </>
  )
}
