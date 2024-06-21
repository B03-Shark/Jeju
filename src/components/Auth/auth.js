import supabase from '../../supabase/supabase';

export const signUp = async (email, password, nickname) => {
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
    if (error.code === 'weak_password') {
      alert('비밀번호는 6자리 이상 입력해주세요');
    } else if (error.code === 'validation_failed') {
      alert('올바른 이메일을 입력해주세요');
    } else {
      alert(`회원가입 실패: ${error.message}`);
    }
    return;
  } else {
    alert('회원가입 성공');
    await supabase.from('users').insert({
      id: data.user.id,
      password,
      email,
      nickname
    });
    signIn(email, password);
  }
};

export const signIn = async (email, password) => {
  const {
    data: { user },
    error
  } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  if (error) {
    alert('로그인 실패');
    console.log(error);
  } else {
    localStorage.setItem(
      'user',
      JSON.stringify({
        id: user.id,
        nickname: user.user_metadata.displayName
      })
    );
    localStorage.setItem('isLoggedin', true);
    return user;
  }
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  localStorage.clear();
  if (error) {
    console.log(error);
  } else {
    localStorage.clear();
    localStorage.setItem('isLoggedin', false);
  }
};

// 아이디, 닉네임 불러오는 값 추가
export const getUser = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user;
};
