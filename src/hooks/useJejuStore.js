import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { getJejuStores } from '../api/jejuStore.api';
import useFilteredJejuStore from '../zustand/filteredjeju.store';

function useJejuStore() {
  const { initJejuStores } = useFilteredJejuStore(
    useShallow((state) => ({
      initJejuStores: state.initJejuStores
    }))
  );

  const {
    data: jejuStores,
    isPending,
    isError
  } = useQuery({
    queryKey: ['jejuStores'],
    queryFn: getJejuStores
  });
  
  useEffect(() => {
    if (jejuStores) {
      initJejuStores(jejuStores.item);
    }
  }, [jejuStores]);

  return { jejuStores, isPending, isError };
}

export default useJejuStore;
