import supabase from '../supabase/supabase';

const getReviewlist = async ({ queryKey }) => {
  const [, dataCd] = queryKey;
  let { data, error } = await supabase.from('reviews').select('*, likes(review_id,user_id)').eq('dataCd', dataCd);
  if (error) console.error(error);
  return data;
};

export { getReviewlist };
