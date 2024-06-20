import { useNavigate } from 'react-router-dom';
import store from '../../assets/store.png';
import styled from 'styled-components';
import useSearch from '../../hooks/useSearch';
import { useRef, useState } from 'react';
import { signOut } from '../Auth/auth';

function Header() {
  const navigate = useNavigate();
  const { applySearch } = useSearch();
  const searchInputRef = useRef();

  const [isLoggedin, setIsLoggedin] = useState(JSON.parse(localStorage.getItem('isLoggedin')));

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchWord = searchInputRef.current.value;
    applySearch(searchWord);
  };

  const handleLogoClick = () => {
    applySearch('');
    navigate(`/`);
    searchInputRef.current.value = '';
  };

  const handleLogInOut = () => {
    if (isLoggedin) {
      signOut();
      setIsLoggedin(false);
    } else {
      setIsLoggedin(localStorage.getItem('isLoggedin'));
      navigate('/login');
    }
  };

  console.log(isLoggedin);

  return (
    <StHeader>
      <StLeftWrap>
        <StLogoImg onClick={handleLogoClick} src={store} alt="logoImg" />
      </StLeftWrap>
      <StRigthWrap>
        {isLoggedin && <div>{JSON.parse(localStorage.getItem('user')).nickname}</div>}
        <StButton onClick={() => handleLogInOut()}>{isLoggedin ? '로그아웃' : '로그인'}</StButton>
      </StRigthWrap>
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

const StRigthWrap = styled.div`
  display: flex;
  gap: 10px;
`;
