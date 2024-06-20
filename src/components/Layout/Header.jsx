import { useNavigate } from 'react-router-dom';
import search from '../../assets/search.png';
import store from '../../assets/store.png';
import styled from 'styled-components';
import { useSearch } from '../../context/SearchWordContext';

function Header() {
  const navigate = useNavigate();
  const { searchWord, setSearchWord, applySearch } = useSearch();

  const handleSubmit = (e) => {
    e.preventDefault();
    applySearch(searchWord);
  };

  return (
    <StHeader>
      <StLeftWrap>
        <StLogoImg
          onClick={() => {
            setSearchWord('');
            applySearch('');
            navigate(`/`);
          }}
          src={store}
          alt="logoImg"
        />
      </StLeftWrap>
      <StForm onSubmit={handleSubmit}>
        <StInput
          type="text"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          placeholder="상호명을 검색해보세요."
        />
        <StButton type="submit">
          <StSearchImg src={search} alt="searchImg" />
        </StButton>
      </StForm>
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
const StLogoImg = styled.img`
  width: 64px;
  height: 64px;
  cursor: pointer;
`;

const StInput = styled.input`
  width: 15rem;
  height: 2rem;
`;
