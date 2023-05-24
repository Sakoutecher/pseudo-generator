//Librairies
import { FC } from 'react'

type ResponseProps = {
  response: string
}

export const Response: FC<ResponseProps> = ({ response }) => {
  return (
    <div className='h-full w-full bg-zinc-300 rounded py-2 px-4 overflow-y-scroll'>
      {response.split('\n').map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  )
}
