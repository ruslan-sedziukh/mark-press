type Post = {
  name: string
  title: string
  path: string
}

export const documents: Post[] = [
  {
    name: 'first-document',
    title: 'First document',
    path: './public/md-documents/first-document/first-document.md',
  },
  {
    name: 'second-document',
    title: 'Second document',
    path: './public/md-documents/second-document/second-document.md',
  },
]
