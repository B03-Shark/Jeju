import { create } from 'zustand';

const useSearchStore = create((set) => ({
  searchWord: '',
  appliedSearchWord: '',
  setSearchWord: (word) => set({ searchWord: word }),
  setAppliedSearchWord: (word) => set({ appliedSearchWord: word })
}));

export default useSearchStore;
