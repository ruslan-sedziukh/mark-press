import { parseMarkdown } from '@ruslan-sedziukh/md-parser'
import { ImageType, Markdown } from '@ruslan-sedziukh/md-render'

export default function Page() {
  const documentName = '0_First document'

  const parsedMarkdown = parseMarkdown(
    `./public/md-documents/${documentName}/First document.md`
  )

  const Image: ImageType = ({ src }) => {
    return <img src={`md-documents/${documentName}/${src}`} />
  }

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Markdown parsedMarkdown={parsedMarkdown} components={{ img: Image }} />
    </div>
  )
}
