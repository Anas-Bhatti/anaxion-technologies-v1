'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('anaxion_cookie_consent')
    if (!consent) setTimeout(() => setVisible(true), 2000)
  }, [])

  const accept  = () => { localStorage.setItem('anaxion_cookie_consent','accepted');  setVisible(false) }
  const decline = () => { localStorage.setItem('anaxion_cookie_consent','declined'); setVisible(false) }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-panel border-t border-border px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4 animate-fadeUp">
      <p className="text-sm text-text2 leading-relaxed">
        We use essential cookies only. See our{' '}
        <Link href="/cookies" className="text-ion hover:underline">Cookie Policy</Link>
        {' '}and{' '}
        <Link href="/privacy" className="text-ion hover:underline">Privacy Policy</Link>.
      </p>
      <div className="flex gap-3 flex-shrink-0">
        <button
          onClick={accept}
          className="font-brand text-[10px] tracking-[3px] uppercase bg-ion text-black px-5 py-2.5 hover:bg-gold transition-colors"
        >
          Accept
        </button>
        <button
          onClick={decline}
          className="font-brand text-[10px] tracking-[3px] uppercase border border-border text-text2 px-5 py-2.5 hover:border-muted hover:text-text1 transition-colors"
        >
          Decline
        </button>
      </div>
    </div>
  )
}
