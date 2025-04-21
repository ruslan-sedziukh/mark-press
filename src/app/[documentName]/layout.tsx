import { ReactNode } from 'react'
import { documents } from './documents'
import Link from 'next/link'
import Sidebar from './_components/Sibebar'

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
        className={documentName === document.name ? 'text-pink-400' : ''}
      >
        {document.title}
      </Link>
    </li>
  ))

  return (
    <div className="h-full min-h-screen p-4 max-sm:pb-20 bg-neutral-50 w-full flex justify-center">
      <div className="flex w-full lg:w-[1024px] sm:gap-4">
        <Sidebar key={documentName}>
          <ul>{links}</ul>
        </Sidebar>

        {children}
      </div>
    </div>
  )
}
