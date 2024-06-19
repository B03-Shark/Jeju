import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../components/Auth/auth';
import supabase from '../supabase/supabase';

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
    <div>
      <div>
        <label htmlFor="email">이메일</label>
        <input type="text" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">패스워드</label>
        <input type="password" placeholder="패스워드" value={password} onChange={(e) => setPassword(e.target.value)} />
        <label htmlFor="nickname">닉네임</label>
        <input type="text" placeholder="닉네임" value={nickname} onChange={(e) => setNickname(e.target.value)} />
      </div>

      <button
        onClick={() => {
          handleSignUp();
        }}
      >
        회원가입
      </button>
    </div>
  );
}

export default SignUp;
