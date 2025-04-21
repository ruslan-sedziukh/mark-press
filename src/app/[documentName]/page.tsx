import { parseMarkdownFile } from '@ruslan-sedziukh/md-parser'
import { documents } from './documents'
import path from 'path'
import { MD_DOCUMENTS_PATH } from '@/utils'
import { Markdown } from '@ruslan-sedziukh/md-render'

const DOCUMENTS_FOLDER = path.join(process.cwd(), 'public', MD_DOCUMENTS_PATH)

export default async function Page({
  params,
}: {
  params: Promise<{ documentName: string }>
}) {
  const documentName = (await params).documentName

  const document = documents.find((doc) => doc.name === documentName)

  if (!document) {
    return <div>Not found</div>
  }

  const documentPath = path.join(
    DOCUMENTS_FOLDER,
    documentName,
    `${documentName}.md`
  )

  const parsedMarkdown = parseMarkdownFile(documentPath, {
    assetsPrePath: path.join(MD_DOCUMENTS_PATH, documentName),
  })

  return (
    <div className="w-full flex flex-col gap-2 font-[family-name:var(--font-geist-sans)]">
      <Markdown parsedMarkdown={parsedMarkdown} />
    </div>
  )
}
