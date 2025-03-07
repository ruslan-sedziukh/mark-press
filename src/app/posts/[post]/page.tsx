import { parseMarkdown } from '@ruslan-sedziukh/md-parser'
import Post from './_components/Post'
import { getMdList } from './_utils/getMdList'

export default async function Page({
  params,
}: {
  params: Promise<{ post: string }>
}) {
  const post = (await params).post.replace(/%20/g, ' ')

  const parsedMarkdown = parseMarkdown(
    `./public/md-documents/${post}/${post}.md`
  )

  const mdDocuments = await getMdList('./public/md-documents/')

  console.log('>>> mdDocuments:', mdDocuments)

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Post post={post} parsedMarkdown={parsedMarkdown} />
    </div>
  )
}
