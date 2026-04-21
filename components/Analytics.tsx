'use client'
import Script from 'next/script'

/**
 * FREE ANALYTICS SETUP
 * ─────────────────────────────────────────────────────────────────
 * OPTION 1 — UMAMI (Recommended: free, open-source, GDPR-compliant, no cookies)
 *   1. Sign up at https://umami.is (free cloud plan)
 *   2. Add your website → get your Website ID
 *   3. Set env var: NEXT_PUBLIC_UMAMI_WEBSITE_ID=your-website-id
 *   Cost: FREE forever (3 websites, 100k events/month on cloud)
 *
 * OPTION 2 — GOOGLE ANALYTICS 4 (free, powerful, requires cookie consent)
 *   1. Sign up at https://analytics.google.com
 *   2. Create a GA4 property → get Measurement ID (G-XXXXXXXXXX)
 *   3. Set env var: NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 *   Cost: FREE
 *
 * OPTION 3 — VERCEL ANALYTICS (free tier with Vercel deployment)
 *   Just deploy to Vercel and enable Analytics in dashboard.
 *   Cost: FREE on hobby plan
 * ─────────────────────────────────────────────────────────────────
 */

const UMAMI_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID
const GA_ID    = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export default function Analytics() {
  return (
    <>
      {/* ── Umami Analytics (privacy-first, no cookies, GDPR-safe) ── */}
      {UMAMI_ID && (
        <Script
          src="https://analytics.umami.is/script.js"
          data-website-id={UMAMI_ID}
          strategy="afterInteractive"
        />
      )}

      {/* ── Google Analytics 4 ── */}
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', {
                page_path: window.location.pathname,
                anonymize_ip: true,
                cookie_flags: 'SameSite=None;Secure'
              });
            `}
          </Script>
        </>
      )}
    </>
  )
}

/**
 * TRACK CUSTOM EVENTS — import and call anywhere
 *
 * import { trackEvent } from '@/components/Analytics'
 * trackEvent('contact_form_submit', { budget: '$5k-20k' })
 * trackEvent('book_call_click')
 */
export function trackEvent(eventName: string, properties?: Record<string, string | number>) {
  // Umami
  if (typeof window !== 'undefined' && (window as Window & { umami?: { track: (name: string, props?: Record<string, string | number>) => void } }).umami) {
    (window as Window & { umami?: { track: (name: string, props?: Record<string, string | number>) => void } }).umami!.track(eventName, properties)
  }
  // GA4
  if (typeof window !== 'undefined' && (window as Window & { gtag?: (...args: unknown[]) => void }).gtag) {
    (window as Window & { gtag?: (...args: unknown[]) => void }).gtag!('event', eventName, properties)
  }
}
