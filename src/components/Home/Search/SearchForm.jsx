import { useRef } from 'react';
import styled from 'styled-components';
import search from '../../../assets/search.png';
import useSearch from '../../../hooks/useSearch';

function SearchForm() {
  const { applySearch } = useSearch();
  const searchInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchWord = searchInputRef.current.value;
    applySearch(searchWord);
  };

  return (
    <StForm onSubmit={handleSubmit}>
      <StInput type="text" ref={searchInputRef} placeholder="상호명을 검색해보세요." />
      <StButton type="submit">
        <StImgContainer>
          <img src={search} alt="searchImg" />
        </StImgContainer>
      </StButton>
    </StForm>
  );
}

export default SearchForm;

const StForm = styled.form`
  display: flex;
  gap: 16px;
`;

const StButton = styled.button`
  all: unset;
`;
const StImgContainer = styled.div`
  width: 28px;
  height: 28px;
  cursor: pointer;
  display: flex;
  align-items: center;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StInput = styled.input`
  width: 23rem;
  height: 2rem;
  border: solid 1px gray;
  border-radius: 10px;
  padding-left: 10px;
`;
