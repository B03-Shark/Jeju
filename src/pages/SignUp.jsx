import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../components/Auth/auth';
import supabase from '../supabase/supabase';
import styled from 'styled-components';

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [nicknames, setNicknames] = useState('');

  const fetchUserNicknames = async () => {
    const { data, error } = await supabase.from('users').select('nickname');
    if (error) {
      console.log(error);
    } else {
      setNicknames(data.map((el) => el.nickname));
    }
  };

  const handleSignUp = () => {
    fetchUserNicknames();
    if (nicknames.includes(nickname)) {
      alert('중복된 닉네임입니다.');
      return;
    } else {
      signUp(email, password, nickname);
      // navigate('/'); 다른 기능의 console.log로 혼잡하므로 현재는 주석처리
      setEmail('');
      setPassword('');
      setNickname('');
    }
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', height: '100vh' }}>
      <StContainer>
        <div className="inner">
          <h3>회원가입</h3>
          <StInputGroup>
            <StInputWrapper>
              <label htmlFor="nickname">이름</label>
              <input
                type="text"
                placeholder="이름을 입력해 주세요"
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
          <p onClick={() => navigate('/login')}>이미 계정을 가지고 계신가요?</p>
          <p onClick={() => navigate('/')}>홈으로</p>
        </div>
      </StContainer>
    </div>
  );
}

export default SignUp;

const StContainer = styled.div`
  background-color: white;
  position: fixed;
  right: 0;
  width: 65vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h3 {
    font-weight: bold;
    font-size: 22px;
  }

  p:hover {
    cursor: pointer;
    color: #f9ed32;
  }
`;

const StInputGroup = styled.div`
  margin-bottom: 15px;
  label {
    display: block;
    margin-bottom: 5px;
    color: #adb1b6;
    font-size: 1rem;
  }

  input {
    width: 100%;
    color: #adb1b6;
    padding: 12px;
    box-sizing: border-box;
    background-color: #dfe3e7;
    border: 0;
    border-radius: 8px;
  }

  input:focus {
    /*
    background-color: white;
    border: medium;
    border-color: #80befc;
    outline: none;
    */
  }

  input:hover {
    cursor: pointer;
  }
`;

const StInputWrapper = styled.div`
  margin: 10px;
`;

const StButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;

  &:disabled {
    background-color: #a0a0a0;
  }
`;
