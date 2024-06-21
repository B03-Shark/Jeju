import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import styled from 'styled-components';
import useSearch from '../../hooks/useSearch';
import { useRef, useState } from 'react';
import { signOut } from '../Auth/auth';
import useUserStore from '../../zustand/user.store';

function Header() {
  const navigate = useNavigate();
  const { applySearch } = useSearch();
  const searchInputRef = useRef();

  const [isLoggedin, setIsLoggedin] = useState(JSON.parse(localStorage.getItem('isLoggedin')));
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  const handleLogoClick = () => {
    applySearch('');
    navigate(`/`);
    searchInputRef.current.value = '';
  };

  const handleLogInOut = async () => {
    if (isLoggedin) {
      await signOut();
      setUser(null);
      setIsLoggedin(false);
    } else {
      setIsLoggedin(localStorage.getItem('isLoggedin'));
      navigate('/login');
    }
  };
  return (
    <StHeader>
      <StLeftWrap>
        <StLogoImg onClick={handleLogoClick} src={Logo} alt="logoImg" />
      </StLeftWrap>
      <StRigthWrap>
        {isLoggedin && (
          <StNicknameWrap>
            <p>🍊</p>
            <div>{JSON.parse(localStorage.getItem('user')).nickname}</div>
          </StNicknameWrap>
        )}
        <StButton onClick={() => handleLogInOut()}>{user ? '🍊 로그아웃' : '로그인'}</StButton>
      </StRigthWrap>
    </StHeader>
  );
}

export default Header;

const StHeader = styled.div`
  height: 110px;
  background-color: #ffc1634a;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 0 170px;
  margin-bottom: 20px;
`;
const StLeftWrap = styled.div`
  display: flex;
  gap: 10px;
`;

const StButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 19px;
  font-weight: 600;
  color: #7d7d7d;

  &:hover {
    color: #e16539;
  }
`;
const StLogoImg = styled.img`
  width: 170px;
  height: 180px;
  cursor: pointer;
`;

const StRigthWrap = styled.div`
  display: flex;
  gap: 5px;
  font-size: 19px;
  font-weight: 600;
  align-items: center;
  color: #7d7d7d;
`;

const StNicknameWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
