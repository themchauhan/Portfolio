// Central list of tech news RSS feeds
// Keep this list curated to reputable sources to reduce noise.

/** @type {Array<{name: string, url: string}>} */
const techNewsFeeds = [
  { name: "The Verge - Tech", url: "https://www.theverge.com/rss/index.xml" },
  { name: "TechCrunch", url: "https://techcrunch.com/feed/" },
  { name: "Ars Technica", url: "http://feeds.arstechnica.com/arstechnica/index" },
  { name: "Hacker News Frontpage", url: "https://hnrss.org/frontpage" },
  { name: "The Register", url: "https://www.theregister.com/headlines.atom" },
  { name: "Apple Newsroom", url: "https://www.apple.com/newsroom/rss-feed.rss" },
  { name: "Amazon Day One Blog", url: "https://www.aboutamazon.com/news/rss" },
  { name: "Google Blog", url: "https://blog.google/rss/" },
  { name: "Microsoft Blog", url: "https://blogs.microsoft.com/feed/" },
  { name: "Meta Newsroom", url: "https://about.fb.com/news/feed/" }
];

module.exports = { techNewsFeeds };


