import { create } from 'zustand'
import { getBeers } from '../api'
import type { Beer, RenderList } from '../types'

interface BeerState {
    beerList: Array<Beer> | [],
    renderList: RenderList,
    loading: boolean,
    hasErrors: boolean,
    page: number,
    fetchBeerList: (page: number) => Promise<void>
    setRenderList: (list: Array<Beer>) => void
    deleteRenderElement: (id: number) => void
    increasePage: () => void
  }

export const useBeerStore = create<BeerState>((set, get) => ({
    beerList: [],
    renderList: [],
    loading: false,
    hasErrors: false,
    page: 1,
    fetchBeerList: async (page) => {
      set(() => ({ loading: true }));
      try {
        const list = await getBeers(page)
        set(() => ({ beerList: list }));
      } catch (err) {
        set(() => ({ hasErrors: true }));
      }
      finally {
        set(() => ({ loading: false }));
      }
    },
    setRenderList: (list) => set((state) => ({ renderList: [...state.renderList, ...list] })),
    deleteRenderElement: (id) => set(() => ({ renderList: get().renderList.filter((item) => item.id !== id) })),
    increasePage: () => set((state) => ({ page: state.page + 1 })),
}))