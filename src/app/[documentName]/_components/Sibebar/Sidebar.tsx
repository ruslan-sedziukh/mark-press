'use client'

import { ReactNode, useState } from 'react'
import Button from './components/Button'

type Props = {
  children: ReactNode
}

const Sidebar = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => setIsOpen((prev) => !prev)

  return (
    <>
      <div className="max-sm:hidden border-r-1 pr-4 border-gray-300 w-55">
        {children}
      </div>

      <div className="sm:hidden">
        {isOpen && 'open'}

        <Button open={isOpen} onClick={() => toggleIsOpen()} />
      </div>
    </>
  )
}

export default Sidebar
