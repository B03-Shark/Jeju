import { useEffect, useState } from 'react';
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { deleteReview, updateReview, getReview } from '../../api/review.api';
import ModalBase from './ModalBase';
import defaultImg from '../../assets/default-image.png';
import { getUser } from '../Auth/auth';
function ReviewModal({ review, onClose }) {
  const queryClient = useQueryClient();
  const [isEditing, setIsEditing] = useState(false);
  const [editedReview, setEditedReview] = useState({ content: '', image_url: '', nickname: '' });
  const { data, isLoading } = useQuery({
    queryKey: ['review', review.id],
    queryFn: getReview,
    onSuccess: (data) => {
      setEditedReview(data);
    }
  });
  useEffect(() => {
    if (isEditing && data) {
      setEditedReview(data);
    }
  }, [isEditing, data]);
  const updateMutation = useMutation({
    mutationFn: updateReview,
    onSuccess: () => {
      queryClient.setQueryData(['review', review.dataCd], (oldData) => {
        return { ...oldData, ...editedReview };
      });
      queryClient.invalidateQueries(['reviewList']);
      setIsEditing(false);
    },
    onError: (error) => {
      console.log(error);
    }
  });
  const deleteMutation = useMutation({
    mutationFn: deleteReview,
    onSuccess: () => {
      queryClient.invalidateQueries(['reviews']);
      onClose();
    }
  });
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setEditedReview((prev) => ({ ...prev, image_url: reader.result }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleContentChange = (e) => {
    setEditedReview((prev) => ({ ...prev, content: e.target.value }));
  };
  const user = getUser();
  const isShowEditing = review.user_id == user.id;
  return (
    <ModalBase isOpen={true} onClose={onClose}>
      <h2>{review.nickname}</h2>
      <h2>{review.created_at}</h2>
      {isLoading ? (
        <div>IsLoading...</div>
      ) : isEditing ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
          <label
            htmlFor="image"
            style={{
              aspectRatio: '1/1',
              border: '1px solid #ccc',
              borderRadius: 8,
              cursor: 'pointer',
              backgroundImage: `url(${editedReview.image_url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <input id="image" type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} />
          <textarea value={editedReview.content} onChange={handleContentChange} />
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
          <label
            htmlFor="image"
            style={{
              aspectRatio: '1/1',
              border: '1px solid #ccc',
              borderRadius: 8,
              cursor: 'pointer',
              backgroundImage: `url(${data?.image_url ? data.image_url : defaultImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <p>{data?.content}</p>
        </div>
      )}
      {isShowEditing && !isEditing && (
        <button onClick={() => deleteMutation.mutate({ reviewId: review.id })}>삭제</button>
      )}
      {isEditing && (
        <button
          onClick={() =>
            updateMutation.mutate({
              reviewId: editedReview.id,
              content: editedReview.content,
              image_url: editedReview.image_url
            })
          }
        >
          저장
        </button>
      )}
      {isShowEditing && !isEditing && <button onClick={() => setIsEditing(true)}>수정</button>}
    </ModalBase>
  );
}
export default ReviewModal;
