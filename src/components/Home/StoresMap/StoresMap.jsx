import { useEffect, useState } from 'react';
import { Map, MapMarker, MarkerClusterer } from 'react-kakao-maps-sdk';
import { useShallow } from 'zustand/react/shallow';
import useFilterStore from '../../../zustand/filter.store';
import useFilteredJejuStore from '../../../zustand/filteredjeju.store';

function StoresMap() {
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

  return (
    <div>
      <Map
        center={{ lat: 33.4842414211083, lng: 126.480910986984 }}
        style={{
          width: '600px',
          height: '500px',
          borderRadius: '20px'
        }}
      >
        <MarkerClusterer>
          {filteredStores &&
            filteredStores.map((jejuStoreItem) => (
              <MapMarker
                style={{ border: 'tranparent' }}
                position={{ lat: jejuStoreItem.laCrdnt, lng: jejuStoreItem.loCrdnt }}
                key={jejuStoreItem.dataCd}
              >
                <div>{jejuStoreItem.bsshNm}</div>
              </MapMarker>
            ))}
        </MarkerClusterer>
      </Map>
    </div>
  );
}

export default StoresMap;
