import { parseMarkdown } from '@ruslan-sedziukh/md-parser'
import Post from './_components/Post'
import { posts } from './posts'

export default async function Page({
  params,
}: {
  params: Promise<{ post: string }>
}) {
  const postParam = (await params).post.replace(/%20/g, ' ')

  const postPath = posts.find((post) => post.id === postParam)

  if (!postPath) {
    return <div>Not found</div>
  }

  const parsedMarkdown = parseMarkdown(postPath.path)

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Post post={postParam} parsedMarkdown={parsedMarkdown} />
    </div>
  )
}
