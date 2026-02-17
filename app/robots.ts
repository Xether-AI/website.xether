import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://xether.ai'

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/test/'],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
