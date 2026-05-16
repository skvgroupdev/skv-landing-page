import { MetadataRoute } from 'next'

const baseUrl = 'https://www.skvlao.com'

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date()

    return [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/pos`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/team/vongchln`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
    ]
}
