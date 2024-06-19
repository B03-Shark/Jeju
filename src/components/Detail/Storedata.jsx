// Storedata.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useJejuStore from '../../hooks/useJejuStore';
import styled from 'styled-components';

function Storedata() {
  const { id } = useParams();
  const { jejuStores, isPending, isError } = useJejuStore();
  const [selectedStoreData, setSelectedStoreData] = useState(null);

  useEffect(() => {
    if (jejuStores && id) {
      const selectedStore = jejuStores.item.find((store) => store.dataCd === id);
      setSelectedStoreData(selectedStore);
    }
  }, [jejuStores, id]);

  if (isPending) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>데이터 가져오는중에 에러 발생</div>;
  }

  if (!selectedStoreData) {
    return <div>데이터 없음</div>;
  }

  return (
    <>
      <StStoreDataWrapper>
        <h2>{selectedStoreData.bsshNm}</h2>
        <StDataWrapper>
          <StDataLabel>지역</StDataLabel>
          <p>제주시</p>
          <StDataLabel>업종</StDataLabel>
          <p>{selectedStoreData.indutyNm}</p>
          <StDataLabel>가격</StDataLabel>
          <p>{selectedStoreData.prdlstCn}</p>
          <StDataLabel>주소</StDataLabel>
          <p>{selectedStoreData.rnAdres}</p>
        </StDataWrapper>
        <StReviewButton> 리뷰작성하기 </StReviewButton>
      </StStoreDataWrapper>
    </>
  );
}

export default Storedata;

const StStoreDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  align-items: center;
  width: 30rem;
  gap: 2rem;
  padding: 15px 0;

  & > h2 {
    font-size: 2rem;
  }
`;

const StDataWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-gap: 16px;
`;

const StDataLabel = styled.p`
  font-weight: bold;
  margin-right: 16px;
`;

const StReviewButton = styled.button`
  background-color: beige;
`;
