import { parseMarkdown } from '@ruslan-sedziukh/md-parser'
import Post from './_components/Post'

export default function Page() {
  const documentName = '0_First document'

  const parsedMarkdown = parseMarkdown(
    `./public/md-documents/${documentName}/First document.md`
  )

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Post post={documentName} parsedMarkdown={parsedMarkdown} />
    </div>
  )
}
