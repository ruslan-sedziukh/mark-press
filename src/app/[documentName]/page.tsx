import { DOCUMENTS } from '../documents'
import MarkdownPage from '@/components/MarkdownPage/MarkdownPage'

export default async function Page({
  params,
}: {
  params: Promise<{ documentName: string }>
}) {
  const documentName = (await params).documentName

  const document = DOCUMENTS.find((doc) => doc.name === documentName)

  if (!document?.name) {
    return <div>Not found</div>
  }

  return <MarkdownPage documentName={documentName} />
}
