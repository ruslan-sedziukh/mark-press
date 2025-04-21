import CloseIcon from '../CloseIcon'
import KebabIcon from '../KebabIcon'

type Props = {
  open: boolean
  onClick: () => void
}

const Button = ({ onClick, open }: Props) => {
  return (
    <button
      className={`
          rounded-[50%] fixed bottom-4 left-[50%] w-12 h-12 bg-white 
          shadow-[0px_0px_5px_var(--color-gray-300)] 
          border-solid border-gray-200 border-0 p-4
          flex justify-center content-center flex-wrap
          cursor-pointer
        `}
      onClick={onClick}
    >
      {open ? <CloseIcon /> : <KebabIcon />}
    </button>
  )
}

export default Button
