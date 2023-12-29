import { allPages } from "contentlayer/generated";
import { Mdx } from "@/components/Mdx";
import { notFound } from "next/navigation";
import lodash from "lodash";

export function generateMetadata({ params }: { params: { slug: string[] } }) {
  const page = allPages.find((it) =>
    lodash.isEqual(it.slug.split("/"), params.slug)
  );

  if (!page) notFound();

  return {
    title: page.title,
  };
}

export function generateStaticParams() {
  return allPages
    .filter((page) => !page.draft)
    .map((page) => ({
      slug: page.slug.split("/"),
    }));
}

export default function PostPage({ params }: { params: { slug: string[] } }) {
  const page = allPages.find((it) =>
    lodash.isEqual(it.slug.split("/"), params.slug)
  );

  if (!page) notFound();

  return (
    <>
      <h1 className="font-bold text-3xl my-4">{page.title}</h1>
      <article className="py-4">
        <Mdx code={page.body.code} />
      </article>
    </>
  );
}
