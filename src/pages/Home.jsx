import styled from 'styled-components';
import Filter from '../components/Home/Filter/Filter';
import List from '../components/Home/List/List';
import StoresMap from '../components/Home/StoresMap';
import useJejuStore from '../hooks/useJejuStore';
import { useOutletContext } from 'react-router-dom';

function Home() {
  const { jejuStores } = useJejuStore();
  const { searchWord } = useOutletContext();

  return (
    <>
      <StWrapper>
        <Filter jejuStores={jejuStores} />
        <StoresMap jejuStores={jejuStores} />
      </StWrapper>
      <StBottomWrapper>
        <List jejuStores={jejuStores} searchWord={searchWord} />
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
