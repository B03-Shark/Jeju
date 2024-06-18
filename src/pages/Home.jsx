import styled from 'styled-components';
import Filter from '../components/Home/Filter/Filter';
import Map from '../components/Home/Map';
import useJejuStore from '../hooks/useJejuStore';

function Home() {
  const { jejuStores } = useJejuStore();

  return (
    <StWrapper>
      <Filter jejuStores={jejuStores} />
      <Map jejuStores={jejuStores} />
    </StWrapper>
  );
}

export default Home;

const StWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1800px;
`;
