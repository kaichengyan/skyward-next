import { allPosts } from "contentlayer/generated";
import { Mdx } from "@/components/Mdx";
import { format, parseISO } from "date-fns";
import { notFound } from "next/navigation";
import lodash from "lodash";
import TagPill from "@/components/TagPill";
import GiscusComments from "@/components/GiscusComments";
import FullWidthImage from "@/components/FullWidthImage";

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

  return (
    <>
      {post.tags && post.tags.length > 0 && (
        <div className="flex mt-1 space-x-2">
          {post.tags.map((tag, idx) => (
            <TagPill tagName={tag} key={idx} />
          ))}
        </div>
      )}
      <div className="mt-2 text-gray-500 dark:text-gray-400 space-x-1 text-xs">
        <span>{format(parseISO(post.date), "LLL d, yyyy")}</span>
        <span>·</span>
        <span>{post.readingTime.text}</span>
        {post.authors && post.authors.length > 0 && (
          <>
            <span>·</span>
            <span>{post.authors?.join(" / ") ?? ""}</span>
          </>
        )}
      </div>
      <h1 className="font-overpass font-bold text-3xl mt-2">{post.title}</h1>
      <article className="py-4">
        {post.banner && (
          <div className="mb-6">
            <FullWidthImage
              src={post.banner}
              alt={post.title}
              height={"300px"}
            />
          </div>
        )}
        {post.machineTranslated && (
          <div
            className="flex items-center space-x-2 rounded px-4 py-2 mb-2 text-sm
                bg-gray-100 text-gray-600 dark:bg-gray-900 dark:text-gray-400"
          >
            <div className="i-ic-round-translate"></div>
            <span>
              This post is machine-translated using ChatGPT from another
              language.
            </span>
          </div>
        )}
        <Mdx code={post.body.code} />
        <section className="mt-8">
          <GiscusComments lang={post.lang} />
        </section>
      </article>
    </>
  );
}
