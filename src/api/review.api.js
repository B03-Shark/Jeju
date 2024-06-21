import supabase from '../supabase/supabase';

const getReviewlist = async ({ queryKey }) => {
  const [, dataCd] = queryKey;
  let { data, error } = await supabase
    .from('reviews')
    .select('*, likes(review_id,user_id)')
    .eq('dataCd', dataCd)
    .order('created_at', { ascending: true });
  if (error) console.error(error);
  return data;
};

const addReview = async (newReview) => {
  const { error } = await supabase.from('reviews').insert(newReview);

  if (error) console.log(error);
};

const getReview = async ({ queryKey }) => {
  const [, reviewId] = queryKey;
  let { data, error } = await supabase.from('reviews').select().eq('id', reviewId).single();
  if (error) throw new Error(error.message);
  return data;
};

const updateReview = async ({ reviewId, content, image_url }) => {
  const { error } = await supabase.from('reviews').update({ content, image_url }).eq('id', reviewId);
  if (error) throw new Error(error.message);
};

const deleteReview = async ({ reviewId }) => {
  const { error } = await supabase.from('reviews').delete().eq('id', reviewId);
  if (error) throw new Error(error.message);
};

export { getReviewlist, updateReview, deleteReview, getReview, addReview };
