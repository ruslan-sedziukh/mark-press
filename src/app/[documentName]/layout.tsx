import { ReactNode } from 'react'
import { documents } from './documents'
import Link from 'next/link'

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: ReactNode
  params: Promise<{ documentName: string }>
}>) {
  const documentName = (await params).documentName

  const links = documents.map((document) => (
    <li key={document.name}>
      <Link
        href={document.name}
        className={documentName === document.name ? 'text-purple-500' : ''}
      >
        {document.title}
      </Link>
    </li>
  ))

  return (
    <div className="bg-slate-300 p-4 w-full h-full flex">
      <div className="border-r-2 pr-4">
        <ul>{links}</ul>
      </div>

      <div>{children}</div>
    </div>
  )
}
