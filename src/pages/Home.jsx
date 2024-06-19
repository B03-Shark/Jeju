import styled from 'styled-components';
import Filter from '../components/Home/Filter/Filter';
import List from '../components/Home/List/List';
import StoresMap from '../components/Home/StoresMap';
import useJejuStore from '../hooks/useJejuStore';

function Home() {
  const { jejuStores } = useJejuStore();
  console.log(jejuStores);
  return (
    <>
      <StWrapper>
        <Filter jejuStores={jejuStores} />
        <StoresMap jejuStores={jejuStores} />
      </StWrapper>
      <StBottomWrapper>
        <List jejuStores={jejuStores} />
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
