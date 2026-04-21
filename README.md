# Anaxion Technologies — Production Website

**Stack:** Next.js 16 · TypeScript · Tailwind CSS v4 · @fontsource (local fonts)

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.local.example .env.local
# Fill in your values (see setup guides below)

# 3. Run development server
npm run dev

# 4. Production build
npm run build && npm start
```

---

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | ✅ Yes | EmailJS service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | ✅ Yes | EmailJS template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | ✅ Yes | EmailJS public key |
| `NEXT_PUBLIC_UMAMI_WEBSITE_ID` | Optional | Umami analytics |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional | Google Analytics 4 |

---

## EmailJS Setup (Contact Form)

1. Sign up free at **https://emailjs.com**
2. Add Email Service → connect Gmail or Outlook
3. Create Email Template with variables:
   - `{{from_name}}` `{{from_email}}` `{{company}}` `{{budget}}` `{{service}}` `{{message}}`
4. Copy **Service ID**, **Template ID**, and **Public Key**
5. Paste into `.env.local`

---

## Analytics Setup (Free)

### Umami (Recommended — GDPR-safe, no cookies)
1. Sign up free at **https://umami.is**
2. Add website → get Website ID
3. Set `NEXT_PUBLIC_UMAMI_WEBSITE_ID` in `.env.local`

### Google Analytics 4
1. Sign up at **https://analytics.google.com**
2. Create GA4 property → get Measurement ID (`G-XXXXXXXXXX`)
3. Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in `.env.local`

---

## Deployment (Vercel — Recommended, Free)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set env vars in Vercel dashboard:
# Project → Settings → Environment Variables
# Add all variables from .env.local.example
```

---

## Booking (Google Calendar)

Replace the calendar link in `app/contact/page.tsx`:
```tsx
href="https://calendar.google.com/calendar/appointments/create"
```
With your actual Google Calendar Appointment Scheduling URL.

---

## OG Image

Add your Open Graph image at:
```
public/og-image.png   (1200 × 630px)
```

---

## Project Structure

```
app/
├── page.tsx              Home
├── services/page.tsx     Services
├── portfolio/page.tsx    Portfolio (server component)
├── contact/page.tsx      Contact + AI Recommender
├── privacy/page.tsx      Privacy Policy
├── terms/page.tsx        Terms & Conditions
├── cookies/page.tsx      Cookie Policy
├── sitemap.ts            Auto-generated sitemap.xml
└── robots.ts             Auto-generated robots.txt

components/
├── Navbar.tsx            Sticky nav + mobile menu
├── Footer.tsx            4-column footer
├── Analytics.tsx         Umami + GA4
├── ContactForm.tsx       EmailJS form (honeypot + sanitisation)
├── AIRecommender.tsx     3-question service recommender
├── CookieBanner.tsx      GDPR cookie consent
├── FadeUp.tsx            Intersection observer animation
├── JsonLd.tsx            JSON-LD structured data
├── LegalLayout.tsx       Shared legal page layout
└── PortfolioGrid.tsx     Client-side filterable project grid
```

---

## Security

- **CSP headers** — no wildcards, specific domains only
- **HSTS** — 2-year max-age with preload
- **X-Frame-Options** — SAMEORIGIN
- **Permissions-Policy** — camera, mic, geolocation all blocked
- **EmailJS** — only public key used (safe for client), IDs via env vars
- **Honeypot** — hidden field catches bots silently
- **Input sanitisation** — HTML tags stripped, length limits enforced
- **Fonts** — local via @fontsource, no external network calls

---

## Brand

- **Primary:** Ion Blue `#00C2FF`
- **Accent:** Anax Gold `#C9A84C`
- **Background:** Void `#06060A`
- **Fonts:** Bebas Neue (hero) · Orbitron (brand) · DM Sans (body) · Space Mono (mono)

---

Built by Anaxion Technologies · anaxion.tech
