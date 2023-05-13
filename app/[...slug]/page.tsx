import { allPosts } from "contentlayer/generated";
import { mdxComponents } from "@/app/mdx-components";
import { useMDXComponent } from "next-contentlayer/hooks";
import { format, parseISO } from "date-fns";
import { notFound } from "next/navigation";
import lodash from "lodash";

export function generateMetadata({ params }: { params: { slug: string[] } }) {
  const post = allPosts.find((it) =>
    lodash.isEqual(it.slug.split("/"), params.slug)
  );

  if (!post) notFound();

  return {
    title: post.title,
  };
}

export function generateStaticParams() {
  return allPosts
    .filter((post) => !post.draft)
    .map((post) => ({
      slug: post.slug.split("/"),
    }));
}

export default function PostPage({ params }: { params: { slug: string[] } }) {
  const post = allPosts.find((it) =>
    lodash.isEqual(it.slug.split("/"), params.slug)
  );

  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <h1 className="font-bold text-3xl mt-5">{post.title}</h1>
      <div className="mt-2 text-gray-500 dark:text-gray-400 space-x-1 text-xs">
        <span>{format(parseISO(post.date), "LLL d, yyyy")}</span>
        <span>·</span>
        <span>{post.readingTime.text}</span>
        {post.tags && post.tags.length > 0 && (
          <>
            <span>·</span>
            <span>{post.tags?.join(" / ") ?? ""}</span>
          </>
        )}
        {post.authors && post.authors.length > 0 && (
          <>
            <span>·</span>
            <span>{post.authors?.join(" / ") ?? ""}</span>
          </>
        )}
      </div>
      <div className="py-2">
        <MDXContent components={mdxComponents} />
      </div>
    </>
  );
}
