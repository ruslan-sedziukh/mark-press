import { redirect } from 'next/navigation'
import { DOCUMENTS, ROOT_DOCUMENT_NAME } from './documents'
import MarkdownPage from '@/components/MarkdownPage/MarkdownPage'

export default function Home() {
  if (!ROOT_DOCUMENT_NAME) {
    if (DOCUMENTS[0]?.name) {
      redirect(DOCUMENTS[0]?.name)
    } else {
      return <></>
    }
  }

  return <MarkdownPage documentName={ROOT_DOCUMENT_NAME} />
}
