import { parseMarkdownFile } from '@ruslan-sedziukh/md-parser'
import Document from './_components/Document'
import { documents } from './documents'
import path from 'path'
import { MD_DOCUMENTS_PATH } from '@/utils'

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
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Document post={documentName} parsedMarkdown={parsedMarkdown} />
    </div>
  )
}
