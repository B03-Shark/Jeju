import styled from 'styled-components';
import Filter from '../components/Home/Filter/Filter';
import Map from '../components/Home/Map';

function Home() {
  return (
    <StWrapper>
      <Filter />
      <Map />
    </StWrapper>
  );
}

export default Home;

const StWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1800px;
`;
