// robots.txt: open to all crawlers (including AI crawlers), with links to the sitemap and llms.txt.
export const dynamic = 'force-static'

const SITE = 'https://themanishchauhan.in'

export function GET() {
  const body = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /private/',
    'Disallow: /admin/',
    'Disallow: /api/',
    '',
    `Sitemap: ${SITE}/sitemap.xml`,
    'Sitemap: https://learn.themanishchauhan.in/sitemap.xml',
    '',
    '# Plain-text summary for AI assistants: ' + `${SITE}/llms.txt`,
    '',
  ].join('\n')
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
