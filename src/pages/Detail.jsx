import { useState } from 'react';
import ReviewModal from '../components/Layout/Modal/ReviewModal';

function Detail() {
  const [modalDisplay, setModalDisplay] = useState(false);
  const handleModal = () => {
    setModalDisplay((prev) => !prev);
  };

  console.log(import.meta.env.VITE_SUPABASE_URL);
  return (
    <div>
      {modalDisplay ? <ReviewModal onClick={handleModal} /> : ''}
      <button onClick={handleModal}>모달 버튼</button>
    </div>
  );
}

export default Detail;
