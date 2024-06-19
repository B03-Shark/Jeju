import { useState } from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';

function Filter() {
  const [region, setRegion] = useState(false);
  const [sector, setSector] = useState([false, false, false, false, false]);
  const [price, setPrice] = useState([false, false, false]);
 
  return (
    <StMainWrapper>
      <StCategory>
        <StCategoryTitle>지역</StCategoryTitle>
        <StCategoryContent>
          <Checkbox>제주시</Checkbox>
        </StCategoryContent>
      </StCategory>
      <StCategory>
        <StCategoryTitle>업종</StCategoryTitle>
        <StCategoryContent>
          <Checkbox>음식점</Checkbox>
          <Checkbox>미용실</Checkbox>
          <Checkbox>세탁업</Checkbox>
          <Checkbox>숙박업</Checkbox>
          <Checkbox>기타</Checkbox>
        </StCategoryContent>
      </StCategory>
      <StCategory>
        <StCategoryTitle>가격</StCategoryTitle>
        <StCategoryContent>
          <Checkbox>1~2만원</Checkbox>
          <Checkbox>2~4만원</Checkbox>
          <Checkbox>4만원 이상</Checkbox>
        </StCategoryContent>
      </StCategory>
    </StMainWrapper>
  );
}

export default Filter;

const StMainWrapper = styled.aside``;

const StCategory = styled.section``;

const StCategoryTitle = styled.h5``;

const StCategoryContent = styled.div`
  display: flex;
  flex-direction: column;
`;
