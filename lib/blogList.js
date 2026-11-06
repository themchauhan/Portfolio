import { newBlogPosts } from '@/lib/blogPosts'

// The blog list, shared by /blog and /blog/page/[n]. 9 cards per page.
export const PER_PAGE = 9

// Older articles (their full text lives in app/blog/[slug]/page.jsx).
const olderPosts = [
  {
    id: 'ai-powered-seo-nextjs',
    title: 'AI-Powered SEO: How Next.js and AI Transform Website Performance',
    excerpt: 'Discover how artificial intelligence is revolutionizing SEO strategies in Next.js applications, from automated content optimization to intelligent user experience enhancements.',
    date: '2025-03-15',
    readTime: '8 min read',
    category: 'AI & SEO',
    image: '/blog/ai-seo-nextjs.jpg',
    tags: ['AI', 'SEO', 'Next.js', 'Performance']
  },
  {
    id: 'nextjs-maintenance-best-practices',
    title: 'Next.js Maintenance Made Easy: Best Practices for Long-term Success',
    excerpt: 'Learn essential maintenance strategies for Next.js applications that ensure optimal performance, security, and scalability over time.',
    date: '2025-01-15',
    readTime: '6 min read',
    category: 'Development',
    image: '/blog/nextjs-maintenance.jpg',
    tags: ['Next.js', 'Maintenance', 'Best Practices', 'Performance']
  },
  {
    id: 'ai-content-optimization-websites',
    title: 'AI Content Optimization: Boosting Website Engagement and Rankings',
    excerpt: 'Explore how AI-driven content optimization can dramatically improve your website\'s search rankings and user engagement metrics.',
    date: '2024-08-15',
    readTime: '7 min read',
    category: 'AI & Content',
    image: '/blog/ai-content-optimization.jpg',
    tags: ['AI', 'Content', 'SEO', 'Engagement']
  },
  {
    id: 'website-speed-optimization-ai',
    title: 'Lightning Fast Websites: AI-Driven Speed Optimization Techniques',
    excerpt: 'Uncover advanced AI techniques for optimizing website speed and performance, ensuring your Next.js applications load in milliseconds.',
    date: '2024-03-15',
    readTime: '9 min read',
    category: 'Performance',
    image: '/blog/website-speed-ai.jpg',
    tags: ['AI', 'Performance', 'Speed', 'Optimization']
  },
  {
    id: 'ai-user-experience-personalization',
    title: 'Personalized User Experiences: AI-Powered Website Customization',
    excerpt: 'Learn how AI can create personalized user experiences that adapt to individual visitors, increasing engagement and conversion rates.',
    date: '2023-11-25',
    readTime: '10 min read',
    category: 'AI & UX',
    image: '/blog/ai-personalization.jpg',
    tags: ['AI', 'UX', 'Personalization', 'Engagement']
  }
];

// Practical guides (with a quick answer) first, then newest first
export const allPosts = [...newBlogPosts, ...olderPosts].sort((a, b) => (!!b.quickAnswer - !!a.quickAnswer) || b.date.localeCompare(a.date))
export const pageCount = Math.ceil(allPosts.length / PER_PAGE)
export const postsForPage = (n) => allPosts.slice((n - 1) * PER_PAGE, n * PER_PAGE)
export const pagePath = (n) => (n <= 1 ? '/blog' : `/blog/page/${n}`)
