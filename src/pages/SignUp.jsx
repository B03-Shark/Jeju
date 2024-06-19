import { useState } from 'react';
import supabase from '../supabase/supabase';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  // 회원가입
  const handleSignUp = async (email, password, nickname) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          displayName: nickname
        }
      }
    });
    if (error) {
      console.error(error.message);
      return;
    } else {
      alert('회원가입 성공');
      await supabase.from('users').insert({
        id: data.user.id,
        password,
        email,
        nickname
      });
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
          handleSignUp(email, password, nickname);
        }}
      >
        회원가입
      </button>
    </div>
  );
}

export default SignUp;
