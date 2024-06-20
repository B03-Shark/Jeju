import styled from 'styled-components';
import Filter from '../components/Home/Filter/Filter';
import List from '../components/Home/List/List';
import SearchForm from '../components/Home/Search/SearchForm';
import StoresMap from '../components/Home/StoresMap';
import useJejuStore from '../hooks/useJejuStore';

function Home() {
  useJejuStore();

  return (
    <>
      <SearchForm/>
      <StWrapper>
        <Filter />
        <StoresMap />
      </StWrapper>
      <StBottomWrapper>
        <List />
      </StBottomWrapper>
    </>
  );
}

export default Home;

const StWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  max-width: 1800px;
`;

const StBottomWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
