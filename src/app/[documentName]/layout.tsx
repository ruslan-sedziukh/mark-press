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
        className={documentName === document.name ? 'text-pink-400' : ''}
      >
        {document.title}
      </Link>
    </li>
  ))

  return (
    <div className="h-full min-h-screen px-4 bg-neutral-50 w-full flex justify-center">
      <div className="flex py-4 w-full lg:w-[1024px]">
        <div className="border-r-1 pr-4 border-gray-300 w-55">
          <ul>{links}</ul>
        </div>

        {children}
      </div>
    </div>
  )
}
