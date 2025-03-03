import { parseMarkdown } from '@ruslan-sedziukh/md-parser'
import Markdown from '@ruslan-sedziukh/md-render'

export default function Page() {
  const parsedMarkdown = parseMarkdown(
    './public/md-documents/0_First document/First document.md'
  )

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Markdown parsedMarkdown={parsedMarkdown} />
    </div>
  )
}
