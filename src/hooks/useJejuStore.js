import { useQuery } from '@tanstack/react-query';
import { getJejuStores } from '../api/jejuStore.api';

function useJejuStore() {
  const { data: jejuStores } = useQuery({
    queryKey: ['jejuStores'],
    queryFn: () => getJejuStores()
  });
  return { jejuStores };
}

export default useJejuStore;
