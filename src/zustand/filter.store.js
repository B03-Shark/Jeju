import { create } from 'zustand';

const useFilterStore = create((set, get) => ({
  typeFilters: [],
  priceFilter: {},
  addPriceFilter: (filter) => {
    const prevFilters = get().typeFilters;
    set({
      typeFilters: [...prevFilters, filter]
    });
  },
  delPriceFilter: (filter) => {
    const deletedFilter = get().typeFilters.filter((prevFilter) => {
      return prevFilter.name !== filter.name;
    });
    set({
      typeFilters: deletedFilter
    });
  },
  setPriceFilter: (filter) => {
    set({
      priceFilter: filter
    });
  }
}));

export default useFilterStore;
