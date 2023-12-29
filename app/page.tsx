import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import PostCard from "@/components/PostCard";

export default function Home() {
  const posts = allPosts
    .filter((post) => !post.draft && !post.hidden)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <main className="py-8">
      <h1 className="font-bold text-3xl my-4">✍️ Skyward</h1>
      <div className="py-4">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </main>
  );
}
