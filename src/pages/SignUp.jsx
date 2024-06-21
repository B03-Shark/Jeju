import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import login2 from '../assets/login2.png';
import { signUp } from '../components/Auth/auth';
import { StButton, StContainer, StDiv, StInputGroup, StPWrapper, StSideImg } from '../style/auth.style';
import supabase from '../supabase/supabase';

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [nicknames, setNicknames] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const fetchUserNicknames = async () => {
    const { data, error } = await supabase.from('users').select('nickname');
    if (error) {
      console.log(error);
    } else {
      setNicknames(data.map((response) => response.nickname));
    }
  };

  const handleSignUp = () => {
    fetchUserNicknames();
    if (nicknames.includes(nickname)) {
      alert('중복된 닉네임입니다.');
      return;
    } else {
      signUp(email, password, nickname);
      setEmail('');
      setPassword('');
      setNickname('');
      navigate('/login');
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <StSideImg src={login2} alt="backgroundImg" />
      <StDiv>
        <StContainer>
          <h3>회원가입</h3>
          <StInputGroup>
            <StInputWrapper>
              <label htmlFor="nickname">이름</label>
              <input
                type="text"
                placeholder="이름을 입력해 주세요"
                ref={inputRef}
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </StInputWrapper>
            <StInputWrapper>
              <label htmlFor="email">이메일</label>
              <input
                type="text"
                placeholder="이메일을 입력해 주세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </StInputWrapper>
            <StInputWrapper>
              <label htmlFor="password">패스워드</label>
              <input
                type="password"
                placeholder="비밀번호를 입력해 주세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </StInputWrapper>
          </StInputGroup>
          <StButton
            onClick={() => {
              handleSignUp();
            }}
          >
            회원가입
          </StButton>
          <StPWrapper>
            <p onClick={() => navigate('/login')}>이미 계정을 가지고 계신가요?</p>
            <p onClick={() => navigate('/')}>홈으로</p>
          </StPWrapper>
        </StContainer>
      </StDiv>
    </div>
  );
}

export default SignUp;

const StInputWrapper = styled.div`
  width: 100%;
  height: 100%;

  label {
    display: block;
    margin-bottom: 4px;
    color: #7c838a;
    font-size: 16px;
  }

  input {
    width: 96%;
    color: #000000;
    padding: 16px;
    box-sizing: border-box;
    background-color: #dfe3e7;
    border-radius: 12px;
    border: none;
    font-size: 16px;
  }

  input:hover {
    cursor: pointer;
  }

  input:focus {
    outline-color: #ffb752;
    background-color: white;
  }
`;
