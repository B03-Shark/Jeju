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
      <StWrapper>
        <Filter />
        <StMainWrapper>
          <SearchForm />
          <StoresMap />
          <List />
        </StMainWrapper>
      </StWrapper>
    </>
  );
}

export default Home;

const StWrapper = styled.main`
  display: flex;
  justify-content: center;
  gap: 45px;
  max-width: 1800px;
  margin-bottom: 36px;
`;

const StMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
