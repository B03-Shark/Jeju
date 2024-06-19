import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useShallow } from 'zustand/react/shallow';
import useFilteredJejuStore from '../zustand/filteredjeju.store';

function useCheckBox(property) {
  const queryClient = useQueryClient();
  const initStores = queryClient.getQueryData(['jejuStores']);
  const [filters, setFilters] = useState([]);
  const { setFilteredJejuStores } = useFilteredJejuStore(
    useShallow((state) => ({
      setFilteredJejuStores: state.setFilteredJejuStores
    }))
  );

  const handler = ({ target }) => {
    if (target.checked) {
      setFilters((prevFilters) => [...prevFilters, target.value]);
    } else {
      setFilters((prevFilters) => prevFilters.filter((prevFilter) => prevFilter !== target.value));
    }
    console.log(filters);
    filters.forEach((filter) => {
      setFilteredJejuStores(initStores, property, filter);
    });
  };

  return [handler];
}
export default useCheckBox;
