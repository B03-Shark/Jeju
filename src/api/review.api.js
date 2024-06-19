import supabase from '../supabase/supabase';

const getReviewlist = async ({ queryKey }) => {
  const [, dataCd] = queryKey;
  let { data, error } = await supabase.from('reviews').select().eq('dataCd', dataCd);
  if (error) console.error(error);
  return data;
};

const updateReview = async (editedContent, reviewId) => {
  const { error } = await supabase.from('reviews').update({ content: editedContent }).eq('id', reviewId);
  if (error) throw new Error(error.message);
};

const deleteReview = async (reviewId) => {
  const { error } = await supabase.from('reviews').delete().eq('id', reviewId);
  if (error) throw new Error(error.message);
};

export { getReviewlist, updateReview, deleteReview };
