import { useNavigate } from 'react-router-dom';
import search from '../../assets/search.png';
import store from '../../assets/store.png';
import styled from 'styled-components';
import useJejuStore from '../../hooks/useJejuStore';
import { useState } from 'react';

function Header({ searchWord, setSearchWord }) {
  const navigate = useNavigate();

  return (
    <StHeader>
      <StLeftWrap>
        <StLogoImg
          onClick={() => {
            navigate(`/`);
          }}
          src={store}
          alt="logoImg"
        />
      </StLeftWrap>
      <StRightWrap>
        <StInput
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          placeholder="상호명을 검색해보세요."
        />
        <StSearchImg src={search} alt="searchImg" />
      </StRightWrap>
    </StHeader>
  );
}

export default Header;

const StHeader = styled.div`
  height: 6rem;
  background-color: #ffc1634a;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 0 64px;
  margin-bottom: 20px;
`;
const StLeftWrap = styled.div`
  display: flex;
  gap: 10px;
`;
const StRightWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 16px;
`;

const StLogoImg = styled.img`
  width: 64px;
  height: 64px;
  cursor: pointer;
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
