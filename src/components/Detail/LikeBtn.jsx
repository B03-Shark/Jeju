import styled from 'styled-components';
import { addLikeData, deleteLikeData } from '../../api/like.api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function LikeBtn({ likes, review_id, dataCd }) {
  const user = JSON.parse(localStorage.getItem('user'));
  const user_id = user ? user.id : null;
  const queryClient = useQueryClient();
  const isLike = [...likes].find((like) => {
    return like.user_id === user_id;
  });

  const { mutate: addLike } = useMutation({
    mutationFn: addLikeData,
    onMutate: async ({ user_id, review_id }) => {
      await queryClient.cancelQueries({ queryKey: ['reviewList', dataCd] });
      const previousReviews = queryClient.getQueryData(['reviewList', dataCd]);

      queryClient.setQueryData(['reviewList', dataCd], (old) => {
        const TargetIndex = old.findIndex((oldReview) => {
          return oldReview.id === review_id;
        });
        const newReviews = [...old];
        newReviews[TargetIndex].likes.push({ user_id, review_id });
        return newReviews;
      });
      return { previousReviews };
    },
    onError: (err, _, context) => {
      queryClient.setQueryData(['reviewList', dataCd], context.previousReviews);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['reviewList', dataCd]);
    }
  });

  const { mutate: deleteLike } = useMutation({
    mutationFn: deleteLikeData,
    onMutate: async ({ user_id, review_id }) => {
      await queryClient.cancelQueries({ queryKey: ['reviewList', dataCd] });

      const previousReviews = queryClient.getQueryData(['reviewList', dataCd]);

      queryClient.setQueryData(['reviewList', dataCd], (old) => {
        const TargetIndex = old.findIndex((oldReview) => {
          return oldReview.id === review_id;
        });
        const TargetLikeIndex = old[TargetIndex].likes.findIndex((like) => {
          return like.user_id === user_id;
        });
        const newReviews = [...old];
        newReviews[TargetIndex].likes.splice(TargetLikeIndex, 1);
        return newReviews;
      });
      return { previousReviews };
    },
    onError: (err, _, context) => {
      queryClient.setQueryData(['reviewList', dataCd], context.previousReviews);
    },
    onSettled: () => {
      queryClient.invalidateQueries(['reviewList', dataCd]);
    }
  });

  return (
    <StLikeBtn
      $islike={isLike}
      onClick={(event) => {
        event.stopPropagation();
        if (!user_id) {
          return alert('로그인이 필요합니다.');
        }

        isLike ? deleteLike({ user_id, review_id }) : addLike({ user_id, review_id });
      }}
    >
      {' '}
      👍
      <span>{likes?.length}</span>
    </StLikeBtn>
  );
}

const StLikeBtn = styled.button`
  margin-left: auto;
  border: 1px solid ${(props) => (props.$islike ? '#FF822D' : 'gray;')};
  border-radius: 10px;
  background-color: ${(props) => (props.$islike ? '#ffdfaf' : 'white')};
  color: ${(props) => (props.$islike ? 'black' : 'rgba(0, 0, 0, 0.7)')};
`;

export default LikeBtn;
