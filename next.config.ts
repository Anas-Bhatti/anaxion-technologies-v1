import type { NextConfig } from 'next'

const isDev = process.env.NODE_ENV === 'development'

// Fonts served locally via @fontsource — no external font domains needed
const CSP = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval'" : ''} https://analytics.umami.is https://www.googletagmanager.com https://www.google-analytics.com`.trim(),
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  "img-src 'self' data: blob:",
  "connect-src 'self' https://api.emailjs.com https://analytics.umami.is https://www.google-analytics.com https://region1.google-analytics.com",
  "frame-src 'self' https://calendar.google.com",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join('; ')

const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control',    value: 'on'                                           },
  { key: 'X-Frame-Options',           value: 'SAMEORIGIN'                                   },
  { key: 'X-Content-Type-Options',    value: 'nosniff'                                      },
  { key: 'Referrer-Policy',           value: 'strict-origin-when-cross-origin'              },
  { key: 'Permissions-Policy',        value: 'camera=(), microphone=(), geolocation=()'     },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'Content-Security-Policy',   value: CSP                                            },
]

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }]
  },
  poweredByHeader: false,
  compress:        true,
  images: {
    formats:         ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
}

export default nextConfig
