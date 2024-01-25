import { allPosts, Post } from "@/.contentlayer/generated";
import { compareDesc } from "date-fns";
import PostCard from "./PostCard";

export default function PostGrid({
  filter,
}: {
  filter?: (post: Post) => boolean;
}) {
  const _filter = filter || (() => true);

  const posts = allPosts
    .filter((post) => !post.draft && !post.hidden)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <div className="py-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {posts.filter(_filter).map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
