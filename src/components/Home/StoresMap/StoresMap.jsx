import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useShallow } from 'zustand/react/shallow';
import useSearch from '../../../hooks/useSearch';
import useFilterStore from '../../../zustand/filter.store';
import useFilteredJejuStore from '../../../zustand/filteredjeju.store';
import { setImg } from './functions';

function StoresMap() {
  const { appliedSearchWord: searchWord } = useSearch();
  const { jejuStores } = useFilteredJejuStore(
    useShallow((state) => ({
      jejuStores: state.jejuStores
    }))
  );
  const [filteredStores, setFilteredStores] = useState(jejuStores);

  const { typeFilters, priceFilter } = useFilterStore(
    useShallow((state) => ({
      typeFilters: state.typeFilters,
      priceFilter: state.priceFilter
    }))
  );

  useEffect(() => {
    setFilteredStores(jejuStores);
    if (typeFilters.length > 0) {
      typeFilters.forEach((typeFilter) => {
        setFilteredStores((prevStore) => {
          return prevStore.filter((prevStore) => prevStore[typeFilter.property] !== typeFilter.name);
        });
      });
    }
    if (Object.keys(priceFilter).length > 0) {
      setFilteredStores((prevStore) => prevStore.filter((store) => store[priceFilter.property] === priceFilter.name));
    }
  }, [jejuStores, typeFilters, priceFilter]);

  const searchedStores = filteredStores.filter((store) => store.bsshNm.includes(searchWord));
  return (
    <div>
      <Map
        style={{
          width: '900px',
          height: '500px',
          borderRadius: '5px'
        }}
        center={{ lat: 33.471151572491, lng: 126.495627680889 }}
        level={9}
      >
        {searchedStores &&
          searchedStores.map((jejuStoreItem) => (
            <MapMarker
              image={{
                src: setImg(jejuStoreItem.indutyNm),
                size: { width: 43, height: 43 },
                options: { offset: { x: 13, y: 15 }}
              }}
              position={{ lat: jejuStoreItem.laCrdnt, lng: jejuStoreItem.loCrdnt }}
              key={jejuStoreItem.dataCd}
              title={jejuStoreItem.bsshNm}
            >
            </MapMarker>
          ))}
      </Map>
    </div>
  );
}

export default StoresMap;
