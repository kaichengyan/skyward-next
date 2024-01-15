import Rss from "rss";
import { allPosts } from "contentlayer/generated";

const SITE_URL = "https://www.skyward.moe";

export function GET() {
  const feed = new Rss({
    title: "Skyward",
    description: "Beyond awesome.",
    feed_url: `${SITE_URL}/feed`,
    site_url: SITE_URL,
    language: "en",
  });

  allPosts
    .filter((post) => !post.draft && !post.hidden)
    .map((post) => ({
      title: post.title,
      description: post.summary ?? "",
      url: `${SITE_URL}/${post.slug}`,
      date: post.date,
    }))
    .forEach((postItem) => feed.item(postItem));

  return new Response(feed.xml(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
