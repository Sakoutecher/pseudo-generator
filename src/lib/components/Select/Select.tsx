//Librairies
import { FC } from 'react'

type SelectProps = {
  options: string[]
}

export const Select: FC<SelectProps> = ({ options }) => {
  return (
    <select className='my-4 w-full py-2 px-2 bg-transparent border-2 border-zinc-300 rounded outline-none'>
      <option value='' disabled selected>
        Select one
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}
