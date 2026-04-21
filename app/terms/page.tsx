import type { Metadata } from 'next'
import LegalLayout from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions for using Anaxion Technologies website and services.',
  alternates: { canonical: 'https://anaxion.tech/terms' },
  openGraph: {
    title:       'Terms & Conditions — Anaxion Technologies',
    description: 'Terms and conditions for using Anaxion Technologies website and services.',
    url:         'https://anaxion.tech/terms',
    images:      [{ url: 'https://anaxion.tech/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary', title: 'Terms & Conditions — Anaxion Technologies', description: 'Terms for using our website and services.' },
  robots: { index: true, follow: false },
}

export default function TermsPage() {
  return (
    <LegalLayout title="Terms &" accent="Conditions" tag="Legal">
      <p style={{fontFamily:'Space Mono,monospace',fontSize:'10px',letterSpacing:'3px',color:'#44445A',marginBottom:'48px',paddingBottom:'32px',borderBottom:'1px solid #252538'}}>
        Last Updated: January 2025 &middot; Anaxion Technologies
      </p>
      <h2>1. Agreement to Terms</h2>
      <p>By accessing anaxion.tech you agree to be bound by these Terms and Conditions. If you disagree with any part, please do not use our website.</p>
      <h2>2. Services</h2>
      <p>Anaxion Technologies provides custom software development, AI integration, and IT consulting services. All service engagements are governed by a separate Statement of Work (SOW) or Service Agreement signed by both parties. No contract is formed by website use alone.</p>
      <h2>3. Intellectual Property</h2>
      <p>All website content including text, design, graphics, and code is the property of Anaxion Technologies and protected by copyright law. Upon full payment of services, clients receive full ownership of all custom deliverables created for them, as specified in the individual service agreement.</p>
      <h2>4. Enquiries &amp; Communications</h2>
      <p>Submitting an enquiry through our contact form does not constitute a contract or guarantee of service. All engagements are confirmed only through a signed written agreement. We reserve the right to decline any engagement at our discretion.</p>
      <h2>5. Accuracy of Information</h2>
      <p>We make reasonable efforts to ensure website content is accurate and current. Portfolio case studies and testimonials are representative samples only. We do not warrant that all information is complete or error-free.</p>
      <h2>6. Limitation of Liability</h2>
      <p>To the maximum extent permitted by law, Anaxion Technologies shall not be liable for any indirect, incidental, special, or consequential damages arising from use of this website. Our total liability for any claims is limited to fees paid for services rendered under a specific engagement.</p>
      <h2>7. Third-Party Links</h2>
      <p>Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of those websites.</p>
      <h2>8. Governing Law</h2>
      <p>For UK clients: these terms are governed by English law. For US clients: disputes shall be resolved under the applicable state jurisdiction where the client is domiciled.</p>
      <h2>9. Changes to Terms</h2>
      <p>We may update these terms at any time. Continued use of the website after changes constitutes acceptance.</p>
      <h2>10. Contact</h2>
      <p>Legal queries: legal@anaxion.tech &middot; Anaxion Technologies &middot; anaxion.tech</p>
    </LegalLayout>
  )
}
