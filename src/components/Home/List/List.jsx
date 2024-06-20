import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function List({ jejuStores, searchWord }) {
  const navigate = useNavigate();

  if (!jejuStores || jejuStores.item.length === 0) {
    return <div>데이터가 없습니다.</div>;
  }

  const filteredStores = jejuStores.item.filter((store) => store.bsshNm.includes(searchWord));

  return (
    <StListWrapper>
      {filteredStores.map((store, index) => (
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
            <p>{store.prdlstCn}</p>
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
