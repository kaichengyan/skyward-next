import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'

function PostCard(post: Post) {
  return (
    <Link key={post.slug} href={`/${post.slug}`} passHref>
      <div className="border-none rounded cursor-pointer -mx-2 mb-2 p-2 hover:opacity-80 transition duration-200">
        <h2 className="flex justify-start items-center space-x-2 mb-2">
          <span className='inline-block align-middle rounded text-xs px-1 py-0.5 whitespace-nowrap
                           text-gray-800 bg-gray-200 dark:text-gray-200 dark:bg-gray-800'>
            {post.lang?.startsWith('zh') ? '中文' : ''}
            {post.lang?.startsWith('en') ? 'En' : ''}
          </span>
          <span className='font-bold text-xl'> {post.title} </span>
        </h2>

        <div className="flex flex-wrap space-x-1 text-xs text-gray-500 dark:text-gray-400 items-center">
          <span>{format(parseISO(post.date), 'LLL d, yyyy')}</span>
          <span>·</span>
          <span>{post.readingTime.text}</span>
          {(post.tags && post.tags.length > 0) && <>
            <span>·</span>
            <span>{post.tags?.join(' / ') ?? ''}</span>
          </>}
          {(post.authors && post.authors.length > 0) && <>
            <span>·</span>
            <span>{post.authors?.join(' / ') ?? ''}</span>
          </>}
        </div>
      </div>
    </Link >
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
