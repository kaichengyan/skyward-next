import { allPosts } from 'contentlayer/generated'
import { mdxComponents } from '@/components/mdx-components'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { format, parseISO } from 'date-fns'
import { notFound } from 'next/navigation'
import lodash from 'lodash'

export function generateMetadata({
  params
}: {
  params: { slug: string[] }
}) {
  const post = allPosts.find((it) => lodash.isEqual(it.slug.split('/'), params.slug))

  if (!post) notFound()

  return {
    title: post.title,
  }
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug.split('/'),
  }))
}

export default function PostPage({
  params
}: {
  params: { slug: string[] }
}) {
  const post = allPosts.find((it) => lodash.isEqual(it.slug.split('/'), params.slug))

  if (!post) notFound()

  const MDXContent = useMDXComponent(post.body.code)

  return <>
    <h1 className="font-bold text-3xl mt-5">
      {post.title}
    </h1>
    <div className="mt-2 text-gray-500 dark:text-gray-400 space-x-1 text-xs">
      <span>{post.readingTime.text}</span>
      <span>·</span>
      <span>{post.tags?.join('/') ?? ''}</span>
      <span>·</span>
      <span>{format(parseISO(post.date), 'LLLL d, yyyy')}</span>
      <span>·</span>
      <span>{post.authors}</span>
    </div>
    <div className='py-2'>
      <MDXContent components={mdxComponents} />
    </div>
  </>
}
