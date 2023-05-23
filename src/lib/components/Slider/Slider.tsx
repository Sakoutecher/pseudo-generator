//Hooks
import { useSliderStore } from '../../hooks/useSlider'

export const Slider = () => {
  const value = useSliderStore((state) => state.value)
  const updateValue = useSliderStore((state) => state.setValue)

  return (
    <>
      <input
        type='range'
        className='transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-zinc-300 my-4'
        id='customRange1'
        min={5}
        max={20}
        step={5}
        value={value}
        onChange={(e) => updateValue(Number(e.target.value))}
      />
    </>
  )
}
