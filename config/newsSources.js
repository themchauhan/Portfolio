// Central list of news RSS feeds, grouped by topic.
// Keep this list curated to reputable sources to reduce noise.
// `site` is used for the credits section on the Resources page.

/** @typedef {'india' | 'world' | 'good' | 'tech'} Topic */

/** @type {Record<Topic, {label: string, limit: number, maxAgeDays: number}>} */
const topics = {
  india: { label: "India", limit: 8, maxAgeDays: 2 },
  world: { label: "World", limit: 6, maxAgeDays: 2 },
  good: { label: "Good news", limit: 8, maxAgeDays: 7 },
  tech: { label: "Tech", limit: 6, maxAgeDays: 3 },
};

/** @type {Array<{name: string, url: string, site: string, topic: Topic}>} */
const newsFeeds = [
  // India: the most-read Indian news publishers
  { name: "The Times of India", url: "https://timesofindia.indiatimes.com/rssfeedstopstories.cms", site: "https://timesofindia.indiatimes.com", topic: "india" },
  { name: "NDTV", url: "https://feeds.feedburner.com/ndtvnews-top-stories", site: "https://www.ndtv.com", topic: "india" },
  { name: "Hindustan Times", url: "https://www.hindustantimes.com/feeds/rss/india-news/rssfeed.xml", site: "https://www.hindustantimes.com", topic: "india" },
  { name: "India Today", url: "https://www.indiatoday.in/rss/home", site: "https://www.indiatoday.in", topic: "india" },
  { name: "The Hindu", url: "https://www.thehindu.com/news/national/feeder/default.rss", site: "https://www.thehindu.com", topic: "india" },
  { name: "The Indian Express", url: "https://indianexpress.com/section/india/feed/", site: "https://indianexpress.com", topic: "india" },
  { name: "The Economic Times", url: "https://economictimes.indiatimes.com/rssfeedstopstories.cms", site: "https://economictimes.indiatimes.com", topic: "india" },

  // World
  { name: "BBC News", url: "https://feeds.bbci.co.uk/news/world/rss.xml", site: "https://www.bbc.com/news", topic: "world" },
  { name: "The Guardian", url: "https://www.theguardian.com/world/rss", site: "https://www.theguardian.com/world", topic: "world" },
  { name: "Al Jazeera", url: "https://www.aljazeera.com/xml/rss/all.xml", site: "https://www.aljazeera.com", topic: "world" },

  // Good news
  { name: "The Better India", url: "https://www.thebetterindia.com/feed/", site: "https://www.thebetterindia.com", topic: "good" },
  { name: "Good News Network", url: "https://www.goodnewsnetwork.org/feed/", site: "https://www.goodnewsnetwork.org", topic: "good" },
  { name: "Positive News", url: "https://www.positive.news/feed/", site: "https://www.positive.news", topic: "good" },
  { name: "Optimist Daily", url: "https://www.optimistdaily.com/feed/", site: "https://www.optimistdaily.com", topic: "good" },
  { name: "Reasons to be Cheerful", url: "https://reasonstobecheerful.world/feed/", site: "https://reasonstobecheerful.world", topic: "good" },

  // Tech
  { name: "The Verge", url: "https://www.theverge.com/rss/index.xml", site: "https://www.theverge.com", topic: "tech" },
  { name: "TechCrunch", url: "https://techcrunch.com/feed/", site: "https://techcrunch.com", topic: "tech" },
  { name: "Ars Technica", url: "http://feeds.arstechnica.com/arstechnica/index", site: "https://arstechnica.com", topic: "tech" },
  { name: "Hacker News", url: "https://hnrss.org/frontpage", site: "https://news.ycombinator.com", topic: "tech" },
];

// Kept for backwards compatibility.
const techNewsFeeds = newsFeeds;

module.exports = { newsFeeds, techNewsFeeds, topics };
