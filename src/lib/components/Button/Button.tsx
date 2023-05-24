//Librairies
import { FC } from 'react'

type ButtonProps = {
  label: string
  onClick?: () => void
}

export const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='w-full uppercase bg-blue-300 hover:bg-blue-400 rounded py-2 bottom-0 absolute'
    >
      {label}
    </button>
  )
}
