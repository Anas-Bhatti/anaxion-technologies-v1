interface JsonLdProps {
  type: 'home' | 'services' | 'portfolio' | 'contact'
}

const BASE_URL = 'https://anaxion.tech'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type':    'Organization',
  name:       'Anaxion Technologies',
  url:        BASE_URL,
  logo:       `${BASE_URL}/logo.png`,
  description:'AI-powered software engineering for ambitious startups and enterprises in the US & UK.',
  email:      'hello@anaxion.tech',
  sameAs:     [
    'https://linkedin.com/company/anaxion-technologies',
    'https://twitter.com/anaxiontech',
  ],
  areaServed: ['US', 'GB'],
  knowsAbout: [
    'Artificial Intelligence', 'Software Development', 'Web Applications',
    'Enterprise Systems', 'API Development', 'IT Consulting',
  ],
}

const websiteSchema = {
  '@context':        'https://schema.org',
  '@type':           'WebSite',
  name:              'Anaxion Technologies',
  url:               BASE_URL,
  potentialAction:   {
    '@type':  'SearchAction',
    target:   `${BASE_URL}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type':    'ItemList',
  name:       'Anaxion Technologies Services',
  itemListElement: [
    { '@type':'ListItem', position:1, name:'AI Integration Services',      url:`${BASE_URL}/services` },
    { '@type':'ListItem', position:2, name:'Custom Web Applications',      url:`${BASE_URL}/services` },
    { '@type':'ListItem', position:3, name:'Enterprise Systems (ERP/CRM)', url:`${BASE_URL}/services` },
    { '@type':'ListItem', position:4, name:'API Design & Development',     url:`${BASE_URL}/services` },
    { '@type':'ListItem', position:5, name:'UI/UX Design & Brand Systems', url:`${BASE_URL}/services` },
    { '@type':'ListItem', position:6, name:'IT Consulting & Architecture', url:`${BASE_URL}/services` },
  ],
}

const contactSchema = {
  '@context':  'https://schema.org',
  '@type':     'ContactPage',
  name:        'Contact Anaxion Technologies',
  url:         `${BASE_URL}/contact`,
  description: 'Book a free discovery call or send a project enquiry.',
  mainEntity:  {
    '@type':       'Organization',
    name:          'Anaxion Technologies',
    email:         'hello@anaxion.tech',
    contactPoint:  {
      '@type':           'ContactPoint',
      contactType:       'customer support',
      availableLanguage: 'English',
      areaServed:        ['US', 'GB'],
    },
  },
}

const SCHEMA_MAP = {
  home:      [organizationSchema, websiteSchema],
  services:  [organizationSchema, servicesSchema],
  portfolio: [organizationSchema],
  contact:   [organizationSchema, contactSchema],
}

export default function JsonLd({ type }: JsonLdProps) {
  const schemas = SCHEMA_MAP[type]
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
