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
            <input type="checkbox" checked={true} />
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

  background-color: #ffc1634a;
  width: 150px;
`;

const StCategory = styled.section`
  width: 100%;
`;

const StCategoryTitle = styled.h4`
  background-color: gray;
  padding-left: 10px;
`;

const StCategoryContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
