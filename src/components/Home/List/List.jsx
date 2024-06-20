import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useShallow } from 'zustand/react/shallow';
import useSearch from '../../../hooks/useSearch';
import useFilterStore from '../../../zustand/filter.store';
import useFilteredJejuStore from '../../../zustand/filteredjeju.store';

function List() {
  const navigate = useNavigate();
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

  if (!filteredStores || filteredStores.length === 0) {
    return <div>데이터가 없습니다.</div>;
  }

  const searchedStores = filteredStores.filter((store) => store.bsshNm.includes(searchWord));

  return (
    <StListWrapper>
      {searchedStores.map((store, index) => (
        <StStoreItem
          key={index}
          onClick={() => {
            navigate(`/detail/${store.dataCd}`);
          }}
        >
          <div>
            <h3>{store.bsshNm}</h3>
          </div>
          <div>
            <p>{store.indutyNm}</p>
          </div>
          <div>
            <p>{store.rnAdres}</p>
          </div>
        </StStoreItem>
      ))}
    </StListWrapper>
  );
}

export default List;

const StListWrapper = styled.div`
  width: 900px;
`;

const StStoreItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  padding: 1rem;
  border: 1px solid gray;
  border-radius: 10px;
  margin-bottom: 8px;
  cursor: pointer;

  h3 {
    font-weight: bold;
  }
`;
