//Librairies
import { create } from 'zustand'

type useCheckboxStoreType = {
  checkbox: string
  setCheckbox: (value: string) => void
}

export const useCheckboxStore = create<useCheckboxStoreType>((set) => ({
  checkbox: 'Fun',
  setCheckbox: (checkbox: string) => {
    set({ checkbox: checkbox })
  },
}))
