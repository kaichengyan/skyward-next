import Rss from 'rss'
import { allPosts } from 'contentlayer/generated'

const SITE_URL = "https://www.skyward.moe";

export async function GET() {
  const feed = new Rss({
    title: "Skyward",
    description: "Beyond awesome.",
    feed_url: `${SITE_URL}/rss`,
    site_url: SITE_URL,
    language: "en",
  });

  allPosts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.summary ?? '',
      url: `${SITE_URL}/${post.slug}`,
      date: post.date,
    });
  });

  return new Response(feed.xml(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
