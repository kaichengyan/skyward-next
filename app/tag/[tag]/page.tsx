import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import PostCard from "@/components/PostCard";

export function generateStaticParams() {
  const allTags = allPosts
    .filter((post) => !post.draft && !post.hidden)
    .flatMap((post) => post.tags);
  return Array.from(new Set(allTags)).map((tag) => ({ tag }));
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const posts = allPosts
    .filter((post) => !post.draft && !post.hidden)
    .filter((post) => post.tags?.includes(params.tag))
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <>
      <h1 className="font-bold text-3xl mt-8 mb-8">🏷️ Tag: {params.tag}</h1>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </>
  );
}
