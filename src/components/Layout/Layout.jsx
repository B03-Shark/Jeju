import { Outlet } from 'react-router-dom';
import Header from './Header';
import { SearchProvider } from '../../context/SearchWordContext';

function Layout() {
  return (
    <SearchProvider>
      <Header />
      <Outlet />
    </SearchProvider>
  );
}

export default Layout;
