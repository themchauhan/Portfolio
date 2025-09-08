import React from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Blog data
const blogPosts = [
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

export default function BlogPage() {
  return (
    <main>
      <Nav />
      
      {/* Blog Header */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent text-sm font-semibold uppercase tracking-wider">
              📚 Tech Blog
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
              AI & Web Development
              <span className="block bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 bg-clip-text text-transparent line-height-[1.2]">
                Insights
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay ahead with the latest trends in AI-powered web development, SEO optimization, and Next.js best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group block bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <article className="pointer-events-none">
                  {/* Blog Image */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-100 to-cyan-100 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-80">
                        {post.category === 'AI & SEO' && '🤖'}
                        {post.category === 'Development' && '⚡'}
                        {post.category === 'AI & Content' && '📝'}
                        {post.category === 'Performance' && '🚀'}
                        {post.category === 'AI & UX' && '🎯'}
                      </div>
                    </div>
                  </div>

                  {/* Blog Content */}
                  <div className="p-6">
                    {/* Category & Date */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More Indicator (non-link to avoid nested anchors) */}
                    <span className="inline-flex items-center space-x-2 text-blue-600 font-semibold group-hover:translate-x-1 transition-all duration-300">
                      <span>Read More</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Stay Updated with Latest Tech Insights
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Get the latest articles on AI, web development, and SEO optimization delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
