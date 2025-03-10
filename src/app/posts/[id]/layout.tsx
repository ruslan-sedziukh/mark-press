import { ReactNode } from 'react'
import { posts } from './posts'
import Link from 'next/link'

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: ReactNode
  params: Promise<{ id: string }>
}>) {
  const postId = (await params).id

  const links = posts.map((post) => (
    <li key={post.id}>
      <Link
        href={post.id}
        className={postId === post.id ? 'text-purple-500' : ''}
      >
        {post.title}
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
