import { Outlet } from 'react-router-dom';
import Header from './Header';
import { useState } from 'react';

function Layout() {
  const [searchWord, setSearchWord] = useState('');

  return (
    <>
      <Header searchWord={searchWord} setSearchWord={setSearchWord} />
      <Outlet context={{ searchWord }} />
    </>
  );
}

export default Layout;
