import supabase from '../supabase/supabase';

const getReviewlist = async ({ queryKey }) => {
  const [, dataCd] = queryKey;
  let { data, error } = await supabase.from('reviews').select('*, likes(review_id,user_id)').eq('dataCd', dataCd);
  if (error) console.error(error);
  return data;
};

const addReview = async (newReview) => {
  const { error } = await supabase.from('reviews').insert(newReview);

  if (error) console.log(error);
};

const updateReview = async ({ id, content }) => {
  const { error } = await supabase.from('reviews').update({ content }).eq('id', id);
  if (error) throw new Error(error.message);
};

const deleteReview = async ({ id }) => {
  const { error } = await supabase.from('reviews').delete().eq('id', id);
  if (error) throw new Error(error.message);
};

export { getReviewlist, updateReview, deleteReview, addReview };
