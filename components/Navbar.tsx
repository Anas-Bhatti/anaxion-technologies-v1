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
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMobileOpen(false)

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-xl border-b border-border py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">

          {/* Logo — clean wordmark only */}
          <Link href="/" onClick={close} aria-label="Anaxion Technologies home"
            className="flex flex-col leading-none">
            <span className="font-hero text-[22px] tracking-[0.14em] text-white">ANAXION</span>
            <span className="font-mono text-[7px] tracking-[4px] uppercase text-text3 mt-[-2px]">
              TECHNOLOGIES
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href}
                className={`font-mono text-[10px] tracking-[3px] uppercase transition-colors duration-200 ${
                  pathname === href
                    ? 'text-white'
                    : 'text-text3 hover:text-white'
                }`}>
                {label}
              </Link>
            ))}
          </div>

          {/* CTA — white pill, minimal */}
          <Link href="/contact"
            onClick={() => trackEvent('nav_cta_click')}
            className="hidden md:inline-flex items-center font-mono text-[9px] tracking-[3px] uppercase bg-white text-black px-5 py-2.5 hover:bg-ion transition-colors duration-200">
            Book a Call
          </Link>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setMobileOpen(v => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span className={`w-5 h-px bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`w-5 h-px bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-px bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu — full screen, minimal */}
      <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation"
        className={`fixed inset-0 bg-black z-40 flex flex-col items-start justify-center px-12 gap-8 transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
        {NAV_LINKS.map(({ href, label }) => (
          <Link key={href} href={href} onClick={close}
            className="font-hero text-4xl tracking-[0.06em] uppercase text-white hover:text-ion transition-colors duration-200">
            {label}
          </Link>
        ))}
        <Link href="/contact" onClick={() => { close(); trackEvent('mobile_cta_click') }}
          className="mt-4 font-mono text-[10px] tracking-[4px] uppercase bg-white text-black px-6 py-3 hover:bg-ion transition-colors duration-200">
          Book a Call
        </Link>
      </div>
    </>
  )
}
