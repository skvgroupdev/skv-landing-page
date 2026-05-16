import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.skvlao.com'
    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${baseUrl}/pos`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        // Add other routes here if you have them, e.g., /services, /about
    ]
}
