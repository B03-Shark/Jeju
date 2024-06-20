import styled from 'styled-components';
import { useShallow } from 'zustand/react/shallow';
import useFilterStore from '../../../zustand/filter.store';
import Checkbox from './Checkbox';

function Filter() {
  const handleChange = (e) => {
    const checkboxes = document.getElementsByName('price');
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== e.target) {
        checkboxes[i].checked = false;
      }
    }
  };

  const { addPriceFilter, delPriceFilter, setPriceFilter } = useFilterStore(
    useShallow((state) => ({
      addPriceFilter: state.addPriceFilter,
      delPriceFilter: state.delPriceFilter,
      setPriceFilter: state.setPriceFilter
    }))
  );

  const handleType = ({ target }) => {
    const newFilter = { property: 'indutyNm', name: target.value };
    if (target.checked) {
      delPriceFilter(newFilter);
    } else {
      addPriceFilter(newFilter);
    }
  };
  const handlePrice = ({ target }) => {
    const newFilter = { property: 'priceRange', name: target.value };
    if (target.checked) {
      setPriceFilter(newFilter);
    } else {
      setPriceFilter({});
    }
  };
  return (
    <StMainWrapper>
      <StCategory>
        <StCategoryTitle>지역</StCategoryTitle>
        <StCategoryContent>
          <label>
            <StCheckBoxInput type="checkbox" checked={true} />
            제주시
          </label>
        </StCategoryContent>
      </StCategory>
      <StCategory>
        <StCategoryTitle>업종</StCategoryTitle>
        <StCategoryContent>
          <Checkbox checked={true} handler={handleType}>
            음식점
          </Checkbox>
          <Checkbox checked={true} handler={handleType}>
            미용업
          </Checkbox>
          <Checkbox checked={true} handler={handleType}>
            세탁업
          </Checkbox>
          <Checkbox checked={true} handler={handleType}>
            숙박업
          </Checkbox>
          <Checkbox checked={true} handler={handleType}>
            기타
          </Checkbox>
        </StCategoryContent>
      </StCategory>
      <StCategory>
        <StCategoryTitle>가격</StCategoryTitle>
        <StCategoryContent>
          <Checkbox name="price" handler={handlePrice} handleChange={handleChange}>
            만원 이하
          </Checkbox>
          <Checkbox name="price" handler={handlePrice} handleChange={handleChange}>
            1~2만원
          </Checkbox>
          <Checkbox name="price" handler={handlePrice} handleChange={handleChange}>
            2~4만원
          </Checkbox>
          <Checkbox name="price" handler={handlePrice} handleChange={handleChange}>
            4만원 이상
          </Checkbox>
        </StCategoryContent>
      </StCategory>
    </StMainWrapper>
  );
}

export default Filter;

const StMainWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  margin-top: 58px;
  padding-bottom: 80px;
  border: 1px solid #ffca80;
  min-width: 150px;
  height: 50%;
`;

const StCheckBoxInput = styled.input`
  accent-color: #ffba59;
`;
const StCategory = styled.section`
  width: 100%;
`;

const StCategoryTitle = styled.h4`
  font-size: 15px;
  font-weight: 700;
  background-color: #ffb752e0;
  padding: 10px;
  color: #5b5b5b;
`;

const StCategoryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px 20px;
`;
