import { ReactNode } from 'react'
import { posts } from './[post]/posts'
import Link from 'next/link'

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <div className="bg-slate-300 p-4 w-full h-full flex">
      <div className="border-r-2 pr-4">
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={post.id}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>{children}</div>
    </div>
  )
}
