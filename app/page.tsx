import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import PostCard from "@/components/PostCard";
import Image from "next/image";

export default function Home() {
  const posts = allPosts
    .filter((post) => !post.draft && !post.hidden)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <>
      <h1 className="flex my-4 items-center space-x-4">
        <Image src="/img/logo.png" width={32} height={32} alt="logo" />
        <span className="font-overpass inline-block pt-2 font-bold text-3xl">
          Skyward
        </span>
      </h1>
      <div className="py-4">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </>
  );
}
