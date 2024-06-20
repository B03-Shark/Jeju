import styled from 'styled-components';

function SelectedStoredata({ selectedStoreData }) {
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
      </StStoreDataWrapper>
    </>
  );
}

export default SelectedStoredata;

const StStoreDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  gap: 2rem;
  padding: 15px 0;

  & > h2 {
    font-size: 2rem;
    font-weight: 700;
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
