import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/Detail/Modal';
import ReviewCard from '../components/Detail/ReviewCard';
import supabase from '../supabase/supabase';
import { useParams } from 'react-router-dom';

//임시데이터
let { data: user, error: userError } = await supabase.from('users').select('*');

function Detail() {
  const [modalDisplay, setModalDisplay] = useState(false);
  const [review, setReview] = useState([]);
  const { id: dataCd } = useParams();

  useEffect(() => {
    const loadData = async () => {
      let { data: reviewData, error: reviewError } = await supabase.from('reviews').select().eq('dataCd', dataCd);
      setReview(reviewData);
    };

    loadData();
  }, []);

  const handleModal = () => {
    setModalDisplay((prev) => !prev);
  };
  return (
    <div>
      {modalDisplay ? <StModalWrapper onClick={handleModal} /> : ''}
      {modalDisplay ? <Modal setModalDisplay={setModalDisplay} /> : ''}
      {review.map((e) => {
        console.log(e);
        return <ReviewCard key={e.id} data={e} />;
      })}

      <button onClick={handleModal}>모달 버튼</button>
    </div>
  );
}

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
export default Detail;
