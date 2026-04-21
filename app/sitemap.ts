import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://anaxion.tech'
  const now     = new Date()

  return [
    {
      url:              baseUrl,
      lastModified:     now,
      changeFrequency:  'monthly',
      priority:         1.0,
    },
    {
      url:              `${baseUrl}/services`,
      lastModified:     now,
      changeFrequency:  'monthly',
      priority:         0.9,
    },
    {
      url:              `${baseUrl}/portfolio`,
      lastModified:     now,
      changeFrequency:  'monthly',
      priority:         0.8,
    },
    {
      url:              `${baseUrl}/contact`,
      lastModified:     now,
      changeFrequency:  'yearly',
      priority:         0.9,
    },
    {
      url:              `${baseUrl}/privacy`,
      lastModified:     now,
      changeFrequency:  'yearly',
      priority:         0.3,
    },
    {
      url:              `${baseUrl}/terms`,
      lastModified:     now,
      changeFrequency:  'yearly',
      priority:         0.3,
    },
    {
      url:              `${baseUrl}/cookies`,
      lastModified:     now,
      changeFrequency:  'yearly',
      priority:         0.3,
    },
  ]
}
