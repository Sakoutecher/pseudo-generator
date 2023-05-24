//Librairies
import { useState } from 'react'

//Components
import { Slider } from '#/Slider'
import { Select } from '#/Select'
import { Checkbox } from '#/Checkbox'
import { Button } from '#/Button'
import { Response } from '#/Response'

//Hooks
import { useSliderStore } from '../../hooks/useSlider'
import { useCheckboxStore } from '../../hooks/useCheckbox'
import { useSelectStore } from '../../hooks/useSelect'

export const PseudoGenerator = () => {
  const [response, setResponse] = useState<string>('')
  const checkbox = useCheckboxStore((state) => state.checkbox)
  const value = useSliderStore((state) => state.value)
  const select = useSelectStore((state) => state.select)

  const API_KEY = import.meta.env.VITE_OPENAI_API_KEY

  const handleClickButton = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: `Génère moi ${value} pseudos ${checkbox} dans le style ${select}`,
          },
        ],
      }),
    }
    try {
      setResponse('Loading...')
      fetch('https://api.openai.com/v1/chat/completions', options)
        .then((response) => response.json())
        .then((data) => setResponse(data.choices[0].message.content))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='bg-zinc-400 backdrop-blur-sm h-2/5 rounded flex justify-between items-center p-4 gap-12'>
      <div className='w-60 h-full relative'>
        <Slider />
        <Select options={[`Futuristic`, `Technologic`, `Childreness`]} />
        <div className='flex flex-col items-center justify-center my-4 gap-4'>
          <Checkbox label='Fun' />
          <Checkbox label='Badass' />
        </div>
        <Button label={`Generate`} onClick={handleClickButton} />
      </div>
      <div className='w-60 h-full'>
        <Response response={response} />
      </div>
    </div>
  )
}
