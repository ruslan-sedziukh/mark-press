import { parseMarkdown } from '@ruslan-sedziukh/md-parser'
import Document from './_components/Document'
import { documents } from './documents'

export default async function Page({
  params,
}: {
  params: Promise<{ documentName: string }>
}) {
  const documentName = (await params).documentName

  const postPath = documents.find((document) => document.name === documentName)

  if (!postPath) {
    return <div>Not found</div>
  }

  const parsedMarkdown = parseMarkdown(postPath.path)

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Document post={documentName} parsedMarkdown={parsedMarkdown} />
    </div>
  )
}
