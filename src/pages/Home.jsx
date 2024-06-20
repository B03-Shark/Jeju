import styled from 'styled-components';
import Filter from '../components/Home/Filter/Filter';
import List from '../components/Home/List/List';
import StoresMap from '../components/Home/StoresMap';
import useJejuStore from '../hooks/useJejuStore';
import useSearch from '../hooks/useSearch';

function Home() {
  const { jejuStores } = useJejuStore();
  const { appliedSearchWord } = useSearch();

  return (
    <>
      <StWrapper>
        <Filter/>
        <StoresMap />
      </StWrapper>
      <StBottomWrapper>
        <List jejuStores={jejuStores} searchWord={appliedSearchWord} />
      </StBottomWrapper>
    </>
  );
}

export default Home;

const StWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1800px;
`;

const StBottomWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
