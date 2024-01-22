import { format, parseISO } from "date-fns";
import Link from "next/link";
import Image from "next/image";
import type { Post } from "contentlayer/generated";

export default function PostCard(post: Post) {
  return (
    <Link
      key={post.slug}
      href={`/post/${post.slug}`}
      passHref
      className="border-0"
    >
      <div className="relative rounded-xl shadow hover:shadow-2xl hover:scale-102 border-none cursor-pointer transition duration-200 aspect-16/9">
        <Image
          src={post.banner ?? "/images/banners/default.png"}
          alt={post.title}
          fill
          quality={25}
          className="rounded-xl"
        />

        <div className="absolute rounded-xl content-[''] left-0 top-0 h-full w-full block bg-gradient-to-t from-black/70 to-transparent"></div>

        <div className="absolute left-0 bottom-0 py-2 px-4 text-white text-shadow-lg">
          <div className="flex flex-wrap space-x-1 text-xs text-gray-200 items-center">
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
      </div>
    </Link>
  );
}
