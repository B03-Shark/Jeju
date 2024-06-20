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
        <StSearchImg src={search} alt="searchImg" />
      </StButton>
    </StForm>
  );
}

export default SearchForm;

const StForm = styled.form`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 16px;
`;

const StButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
const StSearchImg = styled.img`
  width: 43px;
  height: 43px;
  border-radius: 50%;
`;

const StInput = styled.input`
  width: 15rem;
  height: 2rem;
`;
