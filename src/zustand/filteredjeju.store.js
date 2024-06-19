import { create } from 'zustand';

const useFilteredJejuStore = create((set) => ({
  filteredJejuStores: [],
  initJejuStores: (stores) => {
    set({ filteredJejuStores: stores });
  },
  setFilteredJejuStores: (initStores, category, filter) => {
    const filteredJejuStoresItem = initStores.item.filter((store) => store[category] !== filter);
    set({
      filteredJejuStores: filteredJejuStoresItem
    });
  }
}));

export default useFilteredJejuStore;
