import type { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Anaxion Technologies collects, uses, and protects your personal data under UK GDPR, EU GDPR, and US privacy laws.',
  alternates: { canonical: 'https://anaxion.tech/privacy' },
  openGraph: {
    title:       'Privacy Policy — Anaxion Technologies',
    description: 'How we collect, use, and protect your personal data.',
    url:         'https://anaxion.tech/privacy',
    images:      [{ url: 'https://anaxion.tech/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary', title: 'Privacy Policy — Anaxion Technologies', description: 'How we handle your personal data.' },
  robots: { index: true, follow: false },
}

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy" accent="Policy" tag="Legal">
      <p style={{fontFamily:'Space Mono,monospace',fontSize:'10px',letterSpacing:'3px',color:'#44445A',marginBottom:'48px',paddingBottom:'32px',borderBottom:'1px solid #252538'}}>
        Last Updated: January 2025 &middot; Anaxion Technologies
      </p>
      <h2>1. Who We Are</h2>
      <p>Anaxion Technologies (&ldquo;Anaxion&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates anaxion.tech. We are committed to protecting your privacy under the UK GDPR, EU GDPR, and applicable US privacy laws including CCPA.</p>
      <h2>2. Information We Collect</h2>
      <p>We collect personal data only when you choose to provide it:</p>
      <ul>
        <li>Full name and email address (via contact form)</li>
        <li>Company name, budget range, and project details you share</li>
        <li>IP address and browser information via server logs (automatically)</li>
        <li>Anonymised analytics data via Umami &mdash; no cookies, no personal data</li>
      </ul>
      <h2>3. How We Use Your Data</h2>
      <p>We use your data solely for responding to enquiries, providing services, improving our website using aggregate analytics, and complying with legal obligations. <strong>We do not sell, rent, or share your data with third parties for marketing.</strong></p>
      <h2>4. Legal Basis for Processing (UK/EU)</h2>
      <p>We process data on the basis of: (a) explicit consent at form submission; (b) legitimate interest in responding to business enquiries; (c) contractual necessity when entering a service agreement.</p>
      <h2>5. Data Retention</h2>
      <p>Enquiry data is retained for 24 months or for the duration of any business relationship. You may request deletion at any time by emailing privacy@anaxion.tech.</p>
      <h2>6. Your Rights</h2>
      <p>You have the right to: access your data, correct inaccuracies, request erasure, object to processing, request data portability, and withdraw consent. Contact privacy@anaxion.tech. We respond within 30 days.</p>
      <h2>7. Third-Party Services</h2>
      <p>We use EmailJS to transmit contact form submissions. Analytics are handled by Umami &mdash; a privacy-first, cookieless tool that collects no personal data and requires no consent.</p>
      <h2>8. Cookies</h2>
      <p>We use exactly one cookie: <code style={{background:'#1C1C2C',padding:'2px 8px',color:'#00C2FF',fontSize:'12px',fontFamily:'Space Mono,monospace'}}>anaxion_cookie_consent</code> &mdash; stores your preference for 12 months. We do not use tracking or advertising cookies. See our <a href="/cookies" style={{color:'#00C2FF'}}>Cookie Policy</a>.</p>
      <h2>9. International Transfers</h2>
      <p>If you are in the UK or EU, your data may be processed outside your jurisdiction. We ensure appropriate safeguards are in place for any such transfers.</p>
      <h2>10. Contact &amp; Complaints</h2>
      <p>Privacy queries: privacy@anaxion.tech. UK users may lodge a complaint with the ICO at ico.org.uk.</p>
    </LegalLayout>
  )
}
