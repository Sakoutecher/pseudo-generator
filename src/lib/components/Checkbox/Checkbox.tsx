//Librairies
import { FC } from 'react'

type CheckboxProps = {
  label: string
}

export const Checkbox: FC<CheckboxProps> = ({ label }) => {
  return (
    <div className='w-full bg-gray-300 rounded-md py-2 px-3 flex items-center'>
      <div className='flex items-center mr-2'>
        <input id={label} type='checkbox' className='w-4 h-4 rounded' />
      </div>
      <label htmlFor={label} className='uppercase text-sm'>
        {label}
      </label>
    </div>
  )
}
