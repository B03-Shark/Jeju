import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../components/Auth/auth';
import { StButton, StContainer, StDiv, StInputGroup, StPWrapper, StSideImg } from '../style/auth.style';
import styled from 'styled-components';
import login2 from '../assets/login2.png';
import backgroundImg from '../assets/background_img.jpg';
import useUserStore from '../zustand/user.store';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isActive, setIsActive] = useState(false);
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
    setIsActive((prev) => !prev);
  }, []);

  const handleSignIn = async () => {
    const user = await signIn(email, password);
    setUser(user);
    navigate('/');
  };

  const handleFocus = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div style={{ display: 'flex' }}>
      <StSideImg src={login2} alt="backgroundImg" />
      <StDiv>
        <StContainer style={{ top: '24%' }}>
          <h3 style={{ marginBottom: '80px' }}>로그인</h3>
          <StInputGroup>
            <StInputWrapper>
              <input
                type="text"
                placeholder="이메일을 입력해 주세요"
                ref={inputRef}
                onFocus={handleFocus}
                onBlur={handleFocus}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <StLabel htmlFor="email" $active={isActive}>
                email
              </StLabel>
            </StInputWrapper>
            <StInputWrapper>
              <input
                type="password"
                placeholder="패스워드를 입력해 주세요"
                onFocus={handleFocus}
                onBlur={handleFocus}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <StLabel htmlFor="password" $active={isActive}>
                password
              </StLabel>
            </StInputWrapper>
          </StInputGroup>
          <StButton
            onClick={() => {
              handleSignIn();
            }}
          >
            로그인
          </StButton>
          <StPWrapper>
            <p onClick={() => navigate('/signUp')}>계정이 없으신가요?</p>
            <p onClick={() => navigate('/')}>홈으로</p>
          </StPWrapper>
        </StContainer>
      </StDiv>
    </div>
  );
}

export default Login;

const StLabel = styled.label`
  font-size: 12px;
  font-weight: bold;
  background-color: white;
  padding: 4px 8px;
  position: absolute;
  left: 24px;
  top: -12px;
  opacity: 0;
`;

const StInputWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 54px;
  position: relative;

  input {
    width: 80%;
    color: #000000;
    padding: 16px;
    box-sizing: border-box;
    background-color: #f5f5f7;
    border-radius: 12px;
    font-size: 16px;
    border: none;

    &:hover {
      cursor: pointer;
    }

    &:focus {
      background-color: white;
      outline-color: #ffb752;
      outline-style: solid;
      outline-width: 3px;
    }

    &:focus ~ label {
      opacity: ${({ $active }) => ($active ? '0' : '100')};
    }
  }
`;
