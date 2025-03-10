import { redirect } from 'next/navigation'
import { documents } from './[documentName]/documents'

export default function Home() {
  redirect(documents[0].name)

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Not found
    </div>
  )
}
