//Components
import { Slider } from '#/Slider'
import { Select } from '#/Select'
import { Checkbox } from '#/Checkbox'
import { Button } from '#/Button'
import { Response } from '#/Response'

export const PseudoGenerator = () => {
  //TODO: Ask gpt for the pseudo generation
  //TODO: Ask with options wich select the user
  //TODO: Display all of the pseudos to the user

  return (
    <div className='bg-zinc-400 backdrop-blur-sm h-2/5 rounded flex justify-between items-center p-4 gap-12'>
      <div className='w-60 h-full relative'>
        <Slider />
        <Select options={[`Futuristic`, `Technologic`, `Childreness`]} />
        <div className='flex flex-col items-center justify-center my-4 gap-4'>
          <Checkbox label='Fun' />
          <Checkbox label='Badass' />
        </div>
        <Button label={`Generate`} />
      </div>
      <div className='w-60 h-full'>
        <Response />
      </div>
    </div>
  )
}
