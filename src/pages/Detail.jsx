function Detail() {
  const [modalDisplay, setModalDisplay] = useState(false);
  const handleModal = () => {
    setModalDisplay((prev) => !prev);
  };

  console.log(import.meta.env.VITE_SUPABASE_URL);
  return (
    <div>
      {modalDisplay ? <StModalWrapper onClick={handleModal} /> : ''}
      {modalDisplay ? <Modal setModalDisplay={setModalDisplay} /> : ''}
      <button onClick={handleModal}>모달 버튼</button>
    </div>
  );
}

export default Detail;
