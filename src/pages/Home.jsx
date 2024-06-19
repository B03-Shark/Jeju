import styled from 'styled-components';
import Filter from '../components/Home/Filter/Filter';
import Map from '../components/Home/Map';
import useJejuStore from '../hooks/useJejuStore';
import List from '../components/Home/List/List';

function Home() {
  const { jejuStores } = useJejuStore();
  console.log(jejuStores);
  return (
    <>
      <StWrapper>
        {/* <Filter jejuStores={jejuStores} />
        <Map jejuStores={jejuStores} /> */}
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
