import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'

function PostCard(post: Post) {
  return (
    <Link key={post.slug} href={`/${post.slug}`} passHref>
      <div className="border-none rounded cursor-pointer -mx-2 mb-2 p-2 hover:opacity-80 transition duration-200">
        <h2 className="font-bold space-x-2 text-xl mb-2 justify-between">
          {post.title}
        </h2>

        <div className="flex flex-wrap space-x-2 text-sm text-gray-500 dark:text-gray-400 items-center">
          <span>{post.tags?.join(' / ') ?? ''}</span>
          <span>·</span>
          <span>{format(parseISO(post.date), 'LLLL d, yyyy')}</span>
        </div>
      </div>
    </Link>
  )
}

export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return <>
    <h1 className="font-bold text-3xl mt-8 mb-8">
      ✍️ Skyward
    </h1>
    {
      posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))
    }
  </>
}
