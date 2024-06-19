import { useQuery } from '@tanstack/react-query';
import { getJejuStores } from '../api/jejuStore.api';

function useJejuStore() {
  const {
    data: jejuStores,
    isPending,
    isError
  } = useQuery({
    queryKey: ['jejuStores'],
    queryFn: getJejuStores
  });
  return { jejuStores, isPending, isError };
}

export default useJejuStore;
