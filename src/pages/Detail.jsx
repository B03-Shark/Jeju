import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/Detail/Modal';
import { useParams } from 'react-router-dom';
import ReviewCardList from '../components/Detail/ReviewCardList';
import PostModal from '../components/ReviewsCreate/PostModal';
import useJejuStore from '../hooks/useJejuStore';
import SelectedStoreMap from '../components/Detail/SelectedStoreMap';
import SelectedStoredata from '../components/Detail/SelectedStoredata';

function Detail() {
  const [modalDisplay, setModalDisplay] = useState(false);
  const { id: dataCd } = useParams();
  const { jejuStores, isPending, isError } = useJejuStore();
  const [selectedStoreData, setSelectedStoreData] = useState(null);

  useEffect(() => {
    if (jejuStores && dataCd) {
      const selectedStore = jejuStores.item.find((store) => store.dataCd === dataCd);
      setSelectedStoreData(selectedStore);
    }
  }, [jejuStores, dataCd]);

  const handleModal = () => {
    setModalDisplay((prev) => !prev);
  };

  if (isPending) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>데이터 가져오는 중에 에러 발생</div>;
  }

  // if (!selectedStoreData) {
  //   return <div>데이터 없음</div>;
  // }
  return (
    <div>
      <StStoreDataWrapper>
        {selectedStoreData && <SelectedStoreMap store={selectedStoreData} />}
        <StStoreDataRight>
          <SelectedStoredata selectedStoreData={selectedStoreData} />
          <StReviewButton onClick={handleModal}>리뷰 작성하기</StReviewButton>
        </StStoreDataRight>
      </StStoreDataWrapper>
      {modalDisplay ? <StModalWrapper onClick={handleModal} /> : ''}
      {modalDisplay ? (
        <Modal setModalDisplay={setModalDisplay}>
          <PostModal />
        </Modal>
      ) : (
        ''
      )}
      <ReviewCardList dataCd={dataCd} />
    </div>
  );
}

export default Detail;

const StModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  z-index: 100;
  animation: modal-bg-show 1s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const StStoreDataWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

const StStoreDataRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;

const StReviewButton = styled.button`
  width: 150px;
`;
