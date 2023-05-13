import { format, parseISO } from "date-fns";
import Link from "next/link";
import type { Post } from "contentlayer/generated";

export default function PostCard(post: Post) {
  return (
    <Link key={post.slug} href={`/${post.slug}`} passHref>
      <div className="border-none rounded-md cursor-pointer -mx-2 mb-2 p-2 hover:opacity-80 transition duration-200">
        <h2 className="flex justify-start items-center space-x-2 mb-2">
          <span
            className="inline-block align-middle rounded text-xs px-1 py-0.5 whitespace-nowrap
                           text-gray-800 bg-gray-200 dark:text-gray-200 dark:bg-gray-800"
          >
            {post.lang?.startsWith("zh") ? "中文" : ""}
            {post.lang?.startsWith("en") ? "ENG" : ""}
          </span>
          <span className="font-bold text-xl"> {post.title} </span>
        </h2>

        <div className="flex flex-wrap space-x-1 text-xs text-gray-500 dark:text-gray-400 items-center">
          <span>{post.readingTime.text}</span>
          <span>·</span>
          <span>{format(parseISO(post.date), "LLL d, yyyy")}</span>
        </div>
      </div>
    </Link>
  );
}
