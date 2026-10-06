import React from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import { pageMeta } from '@/lib/seo';

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

export const metadata = pageMeta({
  title: 'Blog',
  description: 'Notes on AI, Next.js, SEO and web performance.',
  alternates: { canonical: 'https://themanishchauhan.in/blog' },
});

export default function BlogPage() {
  return (
    <main className="prod bg-[#f4f1ec] text-[#111] antialiased">
      <Nav />
      <PageHero eyebrow="Blog" title="Notes on the web.">
        Short, practical articles on AI, Next.js, SEO and performance.
      </PageHero>
      <section className="!py-0 pb-16 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ul className="border-t border-black/20">
            {blogPosts.map((post) => (
              <li key={post.id} className="border-b border-black/20">
                <Link href={`/blog/${post.id}`} className="group grid gap-3 py-8 md:grid-cols-[160px_1fr_auto] md:items-start md:gap-10">
                  <div className="text-sm font-medium text-[#777]">
                    <p className="font-semibold text-[#ff5a1f]">{post.category}</p>
                    <p className="mt-1">{post.date} · {post.readTime}</p>
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-extrabold leading-tight group-hover:text-[#ff5a1f] md:text-3xl">{post.title}</h2>
                    <p className="mt-3 max-w-3xl text-lg text-[#555]">{post.excerpt}</p>
                  </div>
                  <span className="font-semibold text-[#ff5a1f] transition group-hover:translate-x-1">Read →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand title="Need help with your website?" />
      <Footer />
    </main>
  );
}
