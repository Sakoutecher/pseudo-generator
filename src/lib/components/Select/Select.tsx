//Librairies
import { FC } from 'react'

//Hooks
import { useSelectStore } from '../../hooks/useSelect/'

type SelectProps = {
  options: string[]
}

export const Select: FC<SelectProps> = ({ options }) => {
  const setSelect = useSelectStore((state) => state.setSelect)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value)
  }

  return (
    <select
      className='my-4 w-full py-2 px-2 bg-transparent border-2 border-zinc-300 rounded outline-none'
      onChange={handleChange}
    >
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
