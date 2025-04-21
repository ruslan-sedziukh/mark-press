import { DOCUMENTS, ROOT_DOCUMENT_NAME } from '../documents'
import MarkdownPage from '@/components/MarkdownPage/MarkdownPage'

export default async function Page({
  params,
}: {
  params: Promise<{ documentNames: string }>
}) {
  const resolvedParams = await params

  let documentName: string | undefined = undefined

  if (!resolvedParams.documentNames) {
    return <MarkdownPage documentName={ROOT_DOCUMENT_NAME} />
  } else {
    documentName = resolvedParams.documentNames[0]
  }

  const document = DOCUMENTS.find((doc) => doc.name === documentName)

  if (!document?.name) {
    return <div>Not found</div>
  }

  return <MarkdownPage documentName={documentName} />
}
