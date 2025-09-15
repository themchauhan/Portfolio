import Parser from 'rss-parser';
import pLimit from 'p-limit';
import { NextResponse } from 'next/server';
import { techNewsFeeds } from '@/config/newsSources';

// Simple in-memory cache for API responses
let cachedResponse = { timestamp: 0, data: null };
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes

const parser = new Parser({
	timeout: 15000,
	customFields: {
 		item: [
 			['media:content', 'media:content', { keepArray: true }],
 			['media:thumbnail', 'media:thumbnail'],
 			['content:encoded', 'content:encoded'],
 		],
 	},
});

// Lazy load OpenAI client to avoid requiring key when not needed
async function getOpenAIClient() {
	const apiKey = process.env.OPENAI_API_KEY;
	if (!apiKey) return null;
	const mod = await import('openai');
	const OpenAI = mod.default || mod;
	return new OpenAI({ apiKey });
}

async function fetchAllFeeds() {
	const results = await Promise.allSettled(
		techNewsFeeds.map(async (feed) => {
			const parsed = await parser.parseURL(feed.url);
			return { feed: feed.name, items: parsed.items || [] };
		})
	);

	const items = [];
	for (const res of results) {
		if (res.status === 'fulfilled') {
			for (const item of res.value.items) {
				items.push({
					source: res.value.feed,
					title: item.title || 'Untitled',
					link: item.link || item.guid || '',
					isoDate: item.isoDate || item.pubDate || null,
					snippet: item.contentSnippet || item.content || item['content:encoded'] || '',
					raw: item,
				});
			}
		}
	}

	return items;
}

function dedupeAndFilter(items) {
	const seen = new Set();
	const now = Date.now();
	const threeDaysMs = 3 * 24 * 60 * 60 * 1000;
	const cleaned = [];
	for (const it of items) {
		const key = it.link || it.title;
		if (!key || seen.has(key)) continue;
		seen.add(key);
		if (it.isoDate) {
			const ts = Date.parse(it.isoDate);
			if (!Number.isNaN(ts) && now - ts > threeDaysMs) continue; // older than 3 days
		}
		cleaned.push(it);
	}
	// prioritize by recency, then by title as tiebreaker
	cleaned.sort((a, b) => (Date.parse(b.isoDate || 0) || 0) - (Date.parse(a.isoDate || 0) || 0) || a.title.localeCompare(b.title));
	return cleaned.slice(0, 25);
}

async function summarizeItems(items) {
	const client = await getOpenAIClient();
	if (!client) {
		// Fallback: return first 1-2 sentences from snippet
		return items.map((it) => ({
			...it,
			summary: (it.snippet || it.title || '').split(/(?<=[.!?])\s+/).slice(0, 3).join(' '),
		}));
	}

	const limit = pLimit(3);
	const model = process.env.OPENAI_MODEL || 'gpt-4o-mini';
	const tasks = items.map((it) =>
		limit(async () => {
			const prompt = `Write a crisp, neutral 2-3 paragraph summary (120-220 words total) of the following tech news. Avoid marketing fluff. Include essential facts, context, and why it matters. Do not invent details. Return only the paragraphs without title.

Title: ${it.title}
Source: ${it.source}
Published: ${it.isoDate ?? 'unknown'}
Link: ${it.link}
Snippet: ${it.snippet ?? ''}`;
			try {
				const completion = await client.chat.completions.create({
					model,
					messages: [
						{ role: 'system', content: 'You are a concise tech news editor.' },
						{ role: 'user', content: prompt },
					],
					temperature: 0.5,
					max_tokens: 350,
				});
				const summary = completion.choices?.[0]?.message?.content?.trim();
				return { ...it, summary: summary || it.snippet || it.title };
			} catch (err) {
				return { ...it, summary: it.snippet || it.title };
			}
		})
	);
	return await Promise.all(tasks);
}

function extractImageUrl(item) {
	try {
		// 1) enclosure url
		if (item.raw && item.raw.enclosure && item.raw.enclosure.url) {
			return item.raw.enclosure.url;
		}
		// 2) media:content (array)
		const media = item.raw && item.raw['media:content'];
		if (Array.isArray(media) && media.length > 0) {
			const first = media[0];
			if (first && first.$ && first.$.url) return first.$.url;
			if (first && first.url) return first.url;
		}
		// 3) media:thumbnail
		const thumb = item.raw && item.raw['media:thumbnail'];
		if (thumb && thumb.$ && thumb.$.url) return thumb.$.url;
		if (thumb && thumb.url) return thumb.url;
		// 4) parse first <img src> from content fields
		const html = item.raw && (item.raw['content:encoded'] || item.raw.content || item.snippet);
		if (typeof html === 'string') {
			const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
			if (match && match[1]) return match[1];
		}
		return null;
	} catch (_) {
		return null;
	}
}

export async function GET() {
	try {
		// Serve from cache if fresh
		if (cachedResponse.data && Date.now() - cachedResponse.timestamp < CACHE_TTL_MS) {
			return NextResponse.json(cachedResponse.data, { headers: { 'Cache-Control': 's-maxage=300, stale-while-revalidate=300' } });
		}

		const rawItems = await fetchAllFeeds();
		const curated = dedupeAndFilter(rawItems);
		const summarized = await summarizeItems(curated);
		const payload = summarized.map((it) => ({
			source: it.source,
			title: it.title,
			link: it.link,
			publishedAt: it.isoDate,
			summary: it.summary,
			image: extractImageUrl(it),
		}));

		cachedResponse = { timestamp: Date.now(), data: payload };

		return NextResponse.json(payload, { headers: { 'Cache-Control': 's-maxage=300, stale-while-revalidate=300' } });
	} catch (error) {
		return NextResponse.json({ error: 'Failed to load news' }, { status: 500 });
	}
}


