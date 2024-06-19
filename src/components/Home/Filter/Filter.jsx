import styled from 'styled-components';
import { useShallow } from 'zustand/react/shallow';
import useCheckBox from '../../../hooks/useCheckBox';
import useFilteredJejuStore from '../../../zustand/filteredjeju.store';
import Checkbox from './Checkbox';

function Filter() {
  const { filteredJejuStores } = useFilteredJejuStore(
    useShallow((state) => ({
      filteredJejuStores: state.filteredJejuStores
    }))
  );

  const [handleType] = useCheckBox('indutyNm');
  const [handlePrice] = useCheckBox();

  console.log(filteredJejuStores);
  return (
    <StMainWrapper>
      <StCategory>
        <StCategoryTitle>지역</StCategoryTitle>
        <StCategoryContent>
          <Checkbox checked={true}>제주시</Checkbox>
        </StCategoryContent>
      </StCategory>
      <StCategory>
        <StCategoryTitle>업종</StCategoryTitle>
        <StCategoryContent>
          <Checkbox handleChange={handleType}>한식</Checkbox>
          <Checkbox handleChange={handleType}>미용실</Checkbox>
          <Checkbox handleChange={handleType}>세탁업</Checkbox>
          <Checkbox handleChange={handleType}>숙박업</Checkbox>
          <Checkbox handleChange={handleType}>기타</Checkbox>
        </StCategoryContent>
      </StCategory>
      <StCategory>
        <StCategoryTitle>가격</StCategoryTitle>
        <StCategoryContent>
          <Checkbox handleChange={handlePrice}>1~2만원</Checkbox>
          <Checkbox handleChange={handlePrice}>2~4만원</Checkbox>
          <Checkbox handleChange={handlePrice}>4만원 이상</Checkbox>
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
