import { ReactNode } from 'react'
import { DOCUMENTS } from '../documents'
import Link from 'next/link'
import Sidebar from './_components/Sibebar'

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: ReactNode
  params: Promise<{ documentNames: string }>
}>) {
  const resolvedParams = await params

  let documentName: string | undefined = undefined
  let links: ReactNode[]

  if (!resolvedParams.documentNames) {
    links = DOCUMENTS.map((document) => (
      <li key={document.name}>
        <Link href={document.name}>{document.title}</Link>
      </li>
    ))
  } else {
    documentName = resolvedParams.documentNames[0]

    links = DOCUMENTS.map((document) => (
      <li key={document.name}>
        <Link
          href={document.name}
          className={documentName === document.name ? 'text-pink-400' : ''}
        >
          {document.title}
        </Link>
      </li>
    ))
  }

  return (
    <>
      <Sidebar key={documentName || ''}>
        <ul>{links}</ul>
      </Sidebar>

      {children}
    </>
  )
}
