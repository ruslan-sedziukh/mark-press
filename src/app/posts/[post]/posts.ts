type Post = {
  id: string
  title: string
  path: string
}

export const posts: Post[] = [
  {
    id: 'first-document',
    title: 'First document',
    path: './public/md-documents/first-document/first-document.md',
  },
  {
    id: 'second-document',
    title: 'Second document',
    path: './public/md-documents/second-document/second-document.md',
  },
]
