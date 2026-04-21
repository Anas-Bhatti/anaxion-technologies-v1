import type { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Anaxion Technologies cookie policy — we use only one essential cookie and zero tracking cookies.',
  alternates: { canonical: 'https://anaxion.tech/cookies' },
  openGraph: {
    title:       'Cookie Policy — Anaxion Technologies',
    description: 'We use only one essential cookie. No tracking, no advertising cookies.',
    url:         'https://anaxion.tech/cookies',
    images:      [{ url: 'https://anaxion.tech/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary', title: 'Cookie Policy — Anaxion Technologies', description: 'One essential cookie. Zero tracking.' },
  robots: { index: true, follow: false },
}

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie" accent="Policy" tag="Legal">
      <p style={{fontFamily:'Space Mono,monospace',fontSize:'10px',letterSpacing:'3px',color:'#44445A',marginBottom:'48px',paddingBottom:'32px',borderBottom:'1px solid #252538'}}>
        Last Updated: January 2025 &middot; Anaxion Technologies
      </p>
      <h2>1. What Are Cookies</h2>
      <p>Cookies are small text files stored on your device when you visit a website. They help websites function and provide owners information about user interactions.</p>
      <h2>2. The One Cookie We Use</h2>
      <p>Anaxion Technologies uses <strong>exactly one cookie</strong>:</p>
      <ul>
        <li><code style={{background:'#1C1C2C',padding:'2px 8px',color:'#00C2FF',fontSize:'12px',fontFamily:'Space Mono,monospace'}}>anaxion_cookie_consent</code> &mdash; Stores your consent preference (accepted / declined). First-party only. Expires: 12 months.</li>
      </ul>
      <p>That is it. No session cookies, no tracking cookies, no third-party cookies of any kind.</p>
      <h2>3. Analytics &mdash; Cookieless by Design</h2>
      <p>We use <strong>Umami Analytics</strong> &mdash; an open-source, privacy-first analytics tool that works entirely without cookies. It collects no personal data, no IP addresses, and is fully GDPR-compliant by design.</p>
      <h2>4. What We Do NOT Use</h2>
      <ul>
        <li>Google Analytics tracking cookies (GA4 is optional and off by default)</li>
        <li>Facebook Pixel or any advertising retargeting</li>
        <li>Third-party marketing or behavioural advertising cookies</li>
        <li>Social media tracking cookies</li>
        <li>Session recording, heatmap, or A/B testing tools</li>
      </ul>
      <h2>5. Your Choices</h2>
      <p>You can accept or decline our single consent cookie using the banner on your first visit. You can also control cookies through your browser settings at any time.</p>
      <h2>6. Changes to This Policy</h2>
      <p>If we ever add new cookies, we will update this policy and display a new consent banner.</p>
      <h2>7. Contact</h2>
      <p>Cookie queries: privacy@anaxion.tech &middot; anaxion.tech</p>
    </LegalLayout>
  )
}
