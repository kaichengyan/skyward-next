import { format, parseISO } from "date-fns";
import Link from "next/link";
import type { Post } from "contentlayer/generated";

export default function PostCard(post: Post) {
  return (
    <Link key={post.slug} href={`/post/${post.slug}`} passHref>
      <div className="flex flex-col space-y-1 border-none rounded-md cursor-pointer mb-6 hover:opacity-80 transition duration-200">
        <div className="flex flex-wrap space-x-1 text-xs text-gray-500 dark:text-gray-400 items-center">
          <span>{format(parseISO(post.date), "LLL d, yyyy")}</span>
        </div>

        <h2 className="flex justify-start items-center space-x-2">
          <span className="font-bold text-balance text-xl">{post.title}</span>
          {post.machineTranslated ? (
            <div className="i-ic-round-translate"></div>
          ) : (
            ""
          )}
          {post.lang?.startsWith("zh") ? (
            <div className="i-icon-park-outline-chinese"></div>
          ) : (
            ""
          )}
        </h2>
      </div>
    </Link>
  );
}
