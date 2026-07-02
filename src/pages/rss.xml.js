import { getCollection } from 'astro:content';
import { fullSiteUrl } from '../data/site';

export async function GET() {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  const items = posts.map((post) => `
    <item>
      <title><![CDATA[${post.data.title}]]></title>
      <description><![CDATA[${post.data.description}]]></description>
      <link>${fullSiteUrl}blog/${post.id}/</link>
      <guid>${fullSiteUrl}blog/${post.id}/</guid>
      <pubDate>${post.data.date.toUTCString()}</pubDate>
      ${post.data.tags ? post.data.tags.map((t) => `<category>${t}</category>`).join('\n      ') : ''}
    </item>
  `).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Osmar Bogarín | Blog</title>
    <description>Artículos sobre tecnología, datos y desarrollo</description>
    <link>${fullSiteUrl}blog/</link>
    <atom:link href="${fullSiteUrl}rss.xml" rel="self" type="application/rss+xml"/>
    <language>es</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
