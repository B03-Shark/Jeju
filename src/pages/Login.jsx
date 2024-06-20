import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn, signOut } from '../components/Auth/auth';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    signIn(email, password);
    navigate('/');
  };

  return (
    <div>
      <label htmlFor="email">이메일</label>
      <input type="text" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="password">패스워드</label>
      <input type="password" placeholder="패스워드" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button
        onClick={() => {
          handleSignIn();
        }}
      >
        로그인
      </button>
      <p onClick={() => navigate('/')}>홈으로</p>
    </div>
  );
}

export default Login;
