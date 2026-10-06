export const revalidate = 300; // ISR: 5 minutes
import Link from 'next/link';
import { headers } from 'next/headers';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { newsFeeds, topics } from '@/config/newsSources';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
	title: 'News',
	description: 'Indian and international news, with a focus on good news. Headlines from publishers Indians read most, summarised and credited.',
	alternates: { canonical: 'https://themanishchauhan.in/resources' },
});

async function getNews(baseUrl) {
	try {
		const res = await fetch(`${baseUrl}/api/news`, { cache: 'no-store' });
		if (!res.ok) return [];
		const data = await res.json();
		return Array.isArray(data) ? data : [];
	} catch {
		return [];
	}
}

const tabs = [['all', 'All'], ...Object.entries(topics).map(([k, v]) => [k, v.label])];

const timeAgo = (iso) => {
	if (!iso) return '';
	const mins = Math.max(1, Math.round((Date.now() - Date.parse(iso)) / 60000));
	if (Number.isNaN(mins)) return '';
	if (mins < 60) return `${mins} min ago`;
	if (mins < 60 * 24) return `${Math.round(mins / 60)} h ago`;
	return `${Math.round(mins / 1440)} d ago`;
};

export default async function ResourcesPage({ searchParams }) {
	const hdrs = headers();
	const host = hdrs.get('host');
	const proto = hdrs.get('x-forwarded-proto') || 'http';
	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || `${proto}://${host}`;
	const all = await getNews(baseUrl);

	const active = topics[searchParams?.topic] ? searchParams.topic : 'all';
	const items = active === 'all' ? all : all.filter((i) => i.topic === active);
	const aiModel = all.find((i) => i.summarizedBy)?.summarizedBy;

	return (
		<main className="prod bg-[#f4f1ec] text-[#111] antialiased">
			<Nav />
			<PageHero eyebrow="News" title="India and the world, with good news first.">
				Headlines from the publishers Indians read the most, plus positive stories from around the world. Refreshed every few minutes.
			</PageHero>

			<section className="!py-0 pb-16 md:pb-24">
				<div className="mx-auto max-w-7xl px-5 sm:px-8">
					<div className="max-w-4xl">
					<nav aria-label="News topics" className="mb-10 flex flex-wrap gap-2">
						{tabs.map(([key, label]) => (
							<Link
								key={key}
								href={key === 'all' ? '/resources' : `/resources?topic=${key}`}
								className={`rounded-full border px-5 py-2 text-sm font-semibold ${active === key ? 'border-[#111] bg-[#111] text-white' : 'border-black/25 hover:border-[#111]'}`}
							>
								{label}
							</Link>
						))}
					</nav>

					{items.length === 0 && <p className="text-[#555]">No stories available right now. Please check back soon.</p>}

					<div className="border-t border-black/20">
						{items.map((item) => (
							<article key={item.link} className="border-b border-black/20 py-8">
								<p className="text-sm font-medium text-[#777]">
									<span className="font-semibold text-[#ff5a1f]">{item.source}</span>
									{' · '}{topics[item.topic]?.label}
									{item.publishedAt ? ` · ${timeAgo(item.publishedAt)}` : ''}
								</p>
								<h2 className="mt-2 font-display text-2xl font-extrabold leading-snug">{item.title}</h2>
								<div className="mt-3 whitespace-pre-wrap text-lg leading-relaxed text-[#444]">{item.summary}</div>
								<p className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm">
									<a href={item.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#ff5a1f] hover:underline">Read the full story on {item.source} →</a>
									<span className="text-[#777]">{item.summarizedBy ? `AI summary (${item.summarizedBy})` : 'Excerpt from the publisher'}</span>
								</p>
							</article>
						))}
					</div>
					</div>
				</div>
			</section>

			{/* Credits */}
			<section id="credits" className="!py-16 md:!py-24 bg-[#111]">
				<div className="mx-auto max-w-7xl px-5 sm:px-8">
					<h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-5xl">Credits</h2>
					<p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#b9b5ad]">
						All reporting belongs to the publishers below. This page only shows headlines and short summaries from their public RSS feeds and always links back to the original story. Please read and support their journalism.
					</p>

					<div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
						{Object.entries(topics).map(([key, t]) => (
							<div key={key}>
								<p className="text-sm font-semibold uppercase tracking-widest text-[#ff5a1f]">{t.label}</p>
								<ul className="mt-4 space-y-2">
									{newsFeeds.filter((f) => f.topic === key).map((f) => (
										<li key={f.name}>
											<a href={f.site} target="_blank" rel="noopener noreferrer" className="text-[#e6e2da] underline decoration-white/30 underline-offset-4 hover:text-white hover:decoration-[#ff5a1f]">{f.name}</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>

					<div className="mt-14 border-t border-white/15 pt-8">
						<p className="text-sm font-semibold uppercase tracking-widest text-[#ff5a1f]">Tools &amp; bots behind this page</p>
						<ul className="mt-4 grid gap-3 text-[#b9b5ad] md:grid-cols-2">
							<li>
								<a href="https://openai.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline decoration-white/30 underline-offset-4">OpenAI</a>
								{aiModel ? ` (${aiModel})` : ''}: writes the short, neutral summaries when enabled. Otherwise you see the publisher&apos;s own excerpt.
							</li>
							<li>
								<a href="https://github.com/rbren/rss-parser" target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline decoration-white/30 underline-offset-4">rss-parser</a>
								: reads each publisher&apos;s RSS feed.
							</li>
							<li>
								<a href="https://github.com/sindresorhus/p-limit" target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline decoration-white/30 underline-offset-4">p-limit</a>
								: keeps requests to the summariser polite and rate-limited.
							</li>
							<li>
								<a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline decoration-white/30 underline-offset-4">Next.js</a>
								{' and '}
								<a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline decoration-white/30 underline-offset-4">Vercel</a>
								: build and host the page.
							</li>
						</ul>
						<p className="mt-6 text-sm text-[#8d8982]">
							AI summaries can contain mistakes. For anything important, rely on the original article. If you&apos;re a publisher and want a source removed, email <a className="underline" href="mailto:mani7015066@gmail.com">mani7015066@gmail.com</a>.
						</p>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
