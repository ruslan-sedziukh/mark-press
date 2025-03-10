'use client'

import { Markdown } from '@ruslan-sedziukh/md-render'
import { MarkdownProvider } from '../_context/MarkdownContext'
import { ParsedMarkdown } from '@ruslan-sedziukh/md-types'
import Image from './Image'

type Props = {
  parsedMarkdown: ParsedMarkdown
  post: string
}

const Document = ({ parsedMarkdown, post }: Props) => {
  return (
    <MarkdownProvider post={post}>
      <Markdown parsedMarkdown={parsedMarkdown} components={{ img: Image }} />
    </MarkdownProvider>
  )
}

export default Document
