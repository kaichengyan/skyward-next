import { allPosts } from '@/.contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { format, parseISO } from 'date-fns'
import lodash from 'lodash'
import Head from 'next/head'

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug.split('/'),
  }));
}

export default function PostPage({
  params
}: {
  params: { slug: string[] }
}) {
  const post = allPosts.find((it) => lodash.isEqual(it.slug.split('/'), params.slug));

  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  const MDXContent = useMDXComponent(post?.body.code);

  return <>
    <Head>
      <title>{post.title}</title>
      <meta name="description" content="Skyward Blog" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <h1 className="font-bold text-3xl mt-5">
      {post.title}
    </h1>
    <div className="mt-2 text-gray-500 dark:text-gray-400 space-x-1 text-xs">
      <span>{post.tags?.join('/') ?? ''}</span>
      <span>·</span>
      <span>{format(parseISO(post.date), 'LLLL d, yyyy')}</span>
      <span>·</span>
      <span>{post.authors}</span>
    </div>
    <div className='mt-3'>
      <MDXContent />
    </div>
  </>
}
