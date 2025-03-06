import { createContext, ReactNode } from 'react'

type ContextValue = {
  post: string
}

export const MarkdownContext = createContext<ContextValue>({ post: '' })

type ProviderProps = {
  children: ReactNode
  post: string
}

export const MarkdownProvider = ({ children, post }: ProviderProps) => {
  return (
    <MarkdownContext.Provider value={{ post: post }}>
      {children}
    </MarkdownContext.Provider>
  )
}
