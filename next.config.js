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

  // Notice, the daily memory game: a static page in public/notice/, served at
  // notice.themanishchauhan.in and at /notice on the main site.
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/', has: [{ type: 'host', value: 'notice.themanishchauhan.in' }], destination: '/notice/index.html' },
      ],
      afterFiles: [
        { source: '/notice', destination: '/notice/index.html' },
      ],
    }
  },

  // Redirects for SEO
  async redirects() {
    return [
      // The game's subdomain only serves the game; any other path there goes to the main site
      {
        source: '/:path+',
        has: [{ type: 'host', value: 'notice.themanishchauhan.in' }],
        destination: 'https://themanishchauhan.in/:path+',
        permanent: false,
      },
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
      // Per-town pages were merged into one page per service (Nov 2026). The few that ranked are back
      // (lib/townPages.js); the town page route redirects every other /services/<service>/<town> itself.
      // Towns that still have a page: send the old location URL to it, so its ranking carries over
      { source: '/locations/chandigarh', destination: '/services/rent-management-software/chandigarh', permanent: true },
      { source: '/locations/mohali', destination: '/services/rent-management-software/mohali', permanent: true },
      { source: '/locations/manesar', destination: '/services/website-design/manesar', permanent: true },
      { source: '/locations/rewari', destination: '/services/business-automation/rewari', permanent: true },
      { source: '/locations/jaipur', destination: '/services/business-automation/jaipur', permanent: true },
      {
        source: '/locations/:town',
        destination: '/services',
        permanent: true,
      },
      // Blog page 1 lives at /blog (one URL, no duplicate)
      {
        source: '/blog/page/1',
        destination: '/blog',
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
