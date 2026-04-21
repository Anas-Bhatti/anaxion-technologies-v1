import type { Metadata, Viewport } from 'next'
import './globals.css'
// Local font imports — served from node_modules, no network request at build time
import '@fontsource/bebas-neue/400.css'
import '@fontsource/orbitron/400.css'
import '@fontsource/orbitron/600.css'
import '@fontsource/orbitron/700.css'
import '@fontsource/orbitron/900.css'
import '@fontsource/dm-sans/300.css'
import '@fontsource/dm-sans/400.css'
import '@fontsource/dm-sans/500.css'
import '@fontsource/space-mono/400.css'
import '@fontsource/space-mono/700.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import Analytics from '@/components/Analytics'

export const metadata: Metadata = {
  metadataBase: new URL('https://anaxion.tech'),
  title: {
    default:  'Anaxion Technologies — AI-Powered Software for US & UK Enterprises',
    template: '%s | Anaxion Technologies',
  },
  description:
    'Anaxion Technologies builds AI-powered custom software, web applications, and enterprise systems for startups and businesses in the US & UK. Book a free discovery call.',
  keywords: [
    'AI software development','custom web applications','enterprise software UK',
    'software house US','Angular .NET development','AI integration services',
    'custom ERP CRM development','software startup UK','IT consulting US UK',
  ],
  authors:  [{ name: 'Anaxion Technologies', url: 'https://anaxion.tech' }],
  creator:  'Anaxion Technologies',
  openGraph: {
    type:        'website',
    url:         'https://anaxion.tech',
    title:       'Anaxion Technologies — The Supreme Force Beyond the Known',
    description: 'AI-powered software engineering for ambitious companies in the US & UK.',
    siteName:    'Anaxion Technologies',
    locale:      'en_US',
    images:      [{ url: 'https://anaxion.tech/og-image.png', width: 1200, height: 630, alt: 'Anaxion Technologies' }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Anaxion Technologies',
    description: 'AI-powered software for US & UK enterprises.',
    creator:     '@anaxiontech',
    images:      ['https://anaxion.tech/og-image.png'],
  },
  robots:     { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: 'https://anaxion.tech' },
}

export const viewport: Viewport = {
  width:        'device-width',
  initialScale: 1,
  themeColor:   '#06060A',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Analytics />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-ion focus:text-black focus:px-4 focus:py-2 focus:text-xs focus:tracking-widest focus:uppercase"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
