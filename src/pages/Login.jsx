import { useState } from 'react';
import supabase from '../supabase/supabase';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (data) {
      alert('로그인 성공');
      console.log(data);
    } else {
      alert('로그인 실패');
      console.log(error);
    }
  };

  return (
    <div>
      <label htmlFor="email">이메일</label>
      <input type="text" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="password">패스워드</label>
      <input type="password" placeholder="패스워드" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button
        onClick={() => {
          handleLogin(email, password);
        }}
      >
        로그인
      </button>
    </div>
  );
}

export default Login;
