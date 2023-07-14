import { create } from 'zustand'
import { getBeers } from '../api'

interface BeerState {
    beerList: Object[],
    loading: boolean,
    hasErrors: boolean,
    page: number,
    fetchBeerList: (page: number) => Promise<void>
  }

export const useBeerStore = create<BeerState>((set) => ({
    beerList: [],
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
}))