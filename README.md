<div align="center">

<br />

# ANAXION TECHNOLOGIES
### Production Website — anaxion.tech

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)
[![License](https://img.shields.io/badge/License-Proprietary-gold?style=flat-square)](#license)

**AI-powered software engineering company website.**  
Built for performance, SEO, security, and conversion — targeting US & UK enterprise clients.

[Live Site](https://anaxion.tech) · [Book a Call](https://anaxion.tech/contact) · [Report a Bug](https://github.com/anaxion/anaxion-website/issues)

<br />

</div>

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Third-Party Setup](#third-party-setup)
- [Deployment](#deployment)
- [SEO & Performance](#seo--performance)
- [Security](#security)
- [Brand System](#brand-system)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

The official marketing website for **Anaxion Technologies** — a premium software house building AI-powered systems for US and UK enterprises.

**Key features:**
- 7 fully static, SEO-optimised pages
- AI Service Recommender (logic-based, no API cost)
- Contact form with EmailJS, honeypot spam protection, and input sanitisation
- GDPR-compliant cookie consent and full legal pages (Privacy, Terms, Cookies)
- JSON-LD structured data (Organization, WebSite, Services, Contact schemas)
- Umami + Google Analytics 4 via environment variables
- Hardened security headers (CSP, HSTS, X-Frame, Permissions-Policy)
- Local fonts via `@fontsource` — zero external network calls at build time

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) — App Router, static export |
| Language | [TypeScript 5](https://www.typescriptlang.org) — strict mode |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) — CSS-based `@theme` tokens |
| Fonts | [@fontsource](https://fontsource.org) — self-hosted, no Google Fonts |
| Email | [EmailJS](https://emailjs.com) — client-side, no backend needed |
| Analytics | [Umami](https://umami.is) + [GA4](https://analytics.google.com) — both optional |
| Deployment | [Vercel](https://vercel.com) — edge network, free tier |
| Linting | ESLint + TypeScript strict checks |

---

## Project Structure

```
anaxion/
│
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout — fonts, metadata, analytics
│   ├── globals.css               # Tailwind v4 @theme + global styles
│   ├── page.tsx                  # / — Home (Hero, Services, About, Process, CTA)
│   ├── services/
│   │   └── page.tsx              # /services — 6 service lines
│   ├── portfolio/
│   │   └── page.tsx              # /portfolio — server component, filterable projects
│   ├── contact/
│   │   └── page.tsx              # /contact — form + AI recommender + booking
│   ├── privacy/
│   │   └── page.tsx              # /privacy — GDPR privacy policy
│   ├── terms/
│   │   └── page.tsx              # /terms — terms & conditions
│   ├── cookies/
│   │   └── page.tsx              # /cookies — cookie policy
│   ├── sitemap.ts                # Auto-generated /sitemap.xml
│   └── robots.ts                 # Auto-generated /robots.txt
│
├── components/
│   ├── Navbar.tsx                # Sticky nav, mobile menu, active link states
│   ├── Footer.tsx                # 4-column footer with all navigation
│   ├── Analytics.tsx             # Umami + GA4 scripts via env vars
│   ├── ContactForm.tsx           # EmailJS form — honeypot, sanitisation, validation
│   ├── AIRecommender.tsx         # 3-question logic-based service recommender
│   ├── CookieBanner.tsx          # GDPR cookie consent banner
│   ├── FadeUp.tsx                # IntersectionObserver scroll animation wrapper
│   ├── JsonLd.tsx                # JSON-LD structured data schemas
│   ├── LegalLayout.tsx           # Shared layout for legal pages
│   └── PortfolioGrid.tsx         # 'use client' filterable project grid
│
├── .env.local.example            # Environment variable template
├── .gitignore                    # Excludes .env.local, node_modules, .next
├── next.config.ts                # Security headers, CSP, compression
├── tsconfig.json                 # TypeScript config
├── package.json                  # Dependencies
└── README.md                     # This file
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v18.17 or higher
- npm v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/anaxion-website.git
cd anaxion-website

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.local.example .env.local
# Open .env.local and fill in your values (see Environment Variables below)

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
npm run dev        # Start development server (http://localhost:3000)
npm run build      # Build for production
npm run start      # Start production server (run build first)
npm run lint       # Run ESLint
npx tsc --noEmit   # TypeScript type check
```

---

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your values.  
**Never commit `.env.local` to Git — it is in `.gitignore`.**

```env
# Site
NEXT_PUBLIC_SITE_URL=https://anaxion.tech

# EmailJS — required for contact form
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx

# Analytics — both optional
NEXT_PUBLIC_UMAMI_WEBSITE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | ✅ Required | EmailJS email service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | ✅ Required | EmailJS template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | ✅ Required | EmailJS public key (safe for client) |
| `NEXT_PUBLIC_UMAMI_WEBSITE_ID` | Optional | Umami analytics website ID |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional | Google Analytics 4 measurement ID |

> **Security note:** Only `NEXT_PUBLIC_` prefixed variables are exposed to the browser. EmailJS only requires the public key client-side — service and template IDs are not secret, but keeping them in env vars prevents hardcoding.

---

## Third-Party Setup

### EmailJS (Contact Form)

1. Sign up free at [emailjs.com](https://emailjs.com)
2. **Add Email Service** → connect Gmail, Outlook, or custom SMTP
3. **Create Email Template** using these exact variable names:

   ```
   {{from_name}}    {{from_email}}    {{company}}
   {{budget}}       {{service}}       {{message}}
   ```

4. Copy your **Service ID**, **Template ID**, and **Public Key**
5. Paste into `.env.local`

### Umami Analytics (Recommended — Free, GDPR-safe, no cookies)

1. Sign up free at [umami.is](https://umami.is)
2. Add your website → copy the **Website ID**
3. Set `NEXT_PUBLIC_UMAMI_WEBSITE_ID` in `.env.local`
4. Free tier: 3 websites, 100k events/month

> Umami is cookieless and GDPR-compliant by design — no consent required.

### Google Analytics 4 (Optional)

1. Sign up at [analytics.google.com](https://analytics.google.com)
2. Create a GA4 property → copy the **Measurement ID** (`G-XXXXXXXXXX`)
3. Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in `.env.local`

> GA4 requires cookie consent (already implemented via CookieBanner).

### Google Calendar Booking

Replace the placeholder link in `app/contact/page.tsx`:

```tsx
// Replace this:
href="https://calendar.google.com/calendar/appointments/create"

// With your actual Google Calendar Appointment Scheduling URL
href="https://calendar.google.com/calendar/appointments/schedules/YOUR_ID"
```

### OG Image

Add your Open Graph / social share image:

```
public/og-image.png    →    1200 × 630px recommended
```

---

## Deployment

### Vercel (Recommended — Free)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

Then add environment variables in the Vercel dashboard:
**Project → Settings → Environment Variables**

Add all variables from `.env.local.example` with their production values.

### Manual / Other Platforms

```bash
# Build the project
npm run build

# The output is in .next/
# Deploy to any Node.js hosting (Railway, Render, DigitalOcean, AWS, etc.)
npm start
```

---

## SEO & Performance

Every page includes:

- `generateMetadata()` with unique `title`, `description`, and `canonical` URL
- Open Graph tags with `og:image` (1200×630)
- Twitter Card (`summary_large_image`)
- JSON-LD structured data (Organization, WebSite, Services, ContactPage schemas)
- Auto-generated `/sitemap.xml` via `app/sitemap.ts`
- Auto-generated `/robots.txt` via `app/robots.ts`

Performance optimisations:

- **Local fonts** via `@fontsource` — no render-blocking Google Fonts requests
- **Static generation** — all pages pre-rendered at build time (`○` in build output)
- **Image optimisation** — Next.js Image component with AVIF/WebP formats
- **Zero JavaScript** on legal pages — pure server-rendered HTML

---

## Security

Security headers applied to all routes via `next.config.ts`:

| Header | Value |
|---|---|
| `Content-Security-Policy` | Strict CSP — no wildcard origins |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `X-Frame-Options` | `SAMEORIGIN` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` |

Contact form security:

- **Honeypot field** — hidden `website` input silently drops bot submissions
- **HTML sanitisation** — strips all tags before sending via EmailJS
- **Character limits** — enforced via `maxLength` on all inputs
- **Consent checkbox** — required, GDPR-compliant
- **No backend** — EmailJS public key is the only credential exposed

---

## Brand System

### Colours

| Token | Hex | Usage |
|---|---|---|
| `--color-ion` | `#00C2FF` | Primary accent — buttons, links, highlights |
| `--color-gold` | `#C9A84C` | Royal accent — premium moments only |
| `--color-void` | `#06060A` | Primary background |
| `--color-surface` | `#12121C` | Card backgrounds |
| `--color-panel` | `#1C1C2C` | Elevated surfaces |
| `--color-border` | `#252538` | Borders and dividers |
| `--color-text1` | `#EEEEF8` | Primary text |
| `--color-text2` | `#8888A8` | Secondary text |
| `--color-text3` | `#44445A` | Muted / metadata text |

### Typography

| Role | Font | Usage |
|---|---|---|
| Hero | Bebas Neue | Large headings, wordmark |
| Brand | Orbitron | Labels, navigation, subheadings |
| Body | DM Sans | Paragraphs, UI text |
| Mono | Space Mono | Code, metadata, tags |

All fonts self-hosted via `@fontsource` — no Google Fonts dependency.

---

## Contributing

This is a proprietary project. If you find a bug or security issue:

1. **Security vulnerabilities** — email [hello@anaxion.tech](mailto:hello@anaxion.tech) directly. Do not open a public issue.
2. **Bugs** — open an issue with steps to reproduce.
3. **Pull requests** — contact us before submitting a PR.

---

## License

Copyright © 2025 Anaxion Technologies. All rights reserved.

This repository and its contents are proprietary and confidential. Unauthorised copying, modification, distribution, or use of any part of this codebase is strictly prohibited without written permission from Anaxion Technologies.

---

<div align="center">

**Built by [Anaxion Technologies](https://anaxion.tech)**

*The Supreme Force Beyond the Known.*

[anaxion.tech](https://anaxion.tech) · [hello@anaxion.tech](mailto:hello@anaxion.tech)

</div>