import { MD_DOCUMENTS_PATH, MD_DOCUMENTS_FOLDER } from '@/utils'
import { parseMarkdownFile } from '@ruslan-sedziukh/md-parser'
import { Markdown } from '@ruslan-sedziukh/md-render'
import path from 'path'

type Props = {
  documentName: string
}

const MarkdownPage = ({ documentName }: Props) => {
  const documentPath = path.join(
    MD_DOCUMENTS_PATH,
    documentName,
    `${documentName}.md`
  )

  const parsedMarkdown = parseMarkdownFile(documentPath, {
    assetsPrePath: path.join(MD_DOCUMENTS_FOLDER, documentName),
  })

  return (
    <div className="w-full flex flex-col gap-2 font-[family-name:var(--font-geist-sans)]">
      <Markdown parsedMarkdown={parsedMarkdown} />
    </div>
  )
}

export default MarkdownPage
