//Librairies
import { create } from 'zustand'

type useSelectStoreType = {
  select: string
  setSelect: (value: string) => void
}

export const useSelectStore = create<useSelectStoreType>((set) => ({
  select: '',
  setSelect: (select: string) => {
    set({ select: select })
  },
}))
