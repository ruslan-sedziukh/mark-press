import { useContext } from 'react'
import NextImage from 'next/image'
import { ImageType } from '@ruslan-sedziukh/md-render'
import { MarkdownContext } from '../_context/MarkdownContext'

const Image: ImageType = ({ src, alt }) => {
  const { post } = useContext(MarkdownContext)

  return (
    <NextImage
      src={`/md-documents/${post}/${src}`}
      alt={alt}
      width={100}
      height={100}
      layout="responsive"
    />
  )
}

export default Image
