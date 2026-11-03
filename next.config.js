/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Headers for SEO and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600',
          },
        ],
      },
    ]
  },
  
  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/comingsoon',
        destination: '/about',
        permanent: true,
      },
      // Per-town pages were merged into one page per service (Nov 2026)
      {
        source: '/services/:service/:town',
        destination: '/services/:service',
        permanent: true,
      },
      {
        source: '/locations/:town',
        destination: '/services',
        permanent: true,
      },
      // Old pages that were removed
      {
        source: '/srijanx',
        destination: '/services/business-automation',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contacts',
        permanent: true,
      },
      {
        source: '/blogposts/:slug*',
        destination: '/blog',
        permanent: true,
      },
      // AI classes moved to their own site
      {
        source: '/ai-courses',
        destination: 'https://learn.themanishchauhan.in/',
        permanent: true,
      },
      {
        source: '/hi/ai-courses',
        destination: 'https://learn.themanishchauhan.in/hi',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
