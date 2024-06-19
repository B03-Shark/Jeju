import { useShallow } from 'zustand/react/shallow';
import useFilteredJejuStore from '../../../zustand/filteredjeju.store';

function Map() {
  const { filteredJejuStores } = useFilteredJejuStore(
    useShallow((state) => ({
      filteredJejuStores: state.filteredJejuStores
    }))
  );
  console.log(filteredJejuStores);
  return <div>Map</div>;
}

export default Map;
