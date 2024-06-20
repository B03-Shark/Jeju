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
      <div className="inner">
        <StContainer>
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
          <StPWrapper>
            <p onClick={() => navigate('/login')}>이미 계정을 가지고 계신가요?</p>
            <p onClick={() => navigate('/')}>홈으로</p>
          </StPWrapper>
        </StContainer>
      </div>
    </div>
  );
}

export default SignUp;

const StContainer = styled.div`
  background-color: white;
  position: fixed;
  right: 0;
  width: 60vw;
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
    font-size: 20px;
    margin-bottom: 50px;
  }
`;

const StInputGroup = styled.div`
  margin-bottom: 15px;
  width: 550px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const StInputWrapper = styled.div`
  width: 100%;
  height: 100%;
  label {
    display: block;
    margin-bottom: 4px;
    color: #7c838a;
    font-size: 1rem;
  }

  input {
    width: 96%;
    color: #adb1b6;
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
    /*
    border-color: #80befc;
    outline: none;
    background-color: white;
    border: medium;
    */
  }
`;

const StButton = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px 100px;
  background-color: #007dfa;
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin: 18px;
`;

const StPWrapper = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  p {
    color: #7c838a;
    font-size: 14px;
  }

  p:hover {
    cursor: pointer;
    color: #f9ed32;
  }
`;
