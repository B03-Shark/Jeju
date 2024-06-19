import supabase from '../supabase/supabase';

const getReviewlist = async ({ queryKey }) => {
  const [, dataCd] = queryKey;
  let { data, error } = await supabase.from('reviews').select().eq('dataCd', dataCd);
  if (error) console.error(error);
  return data;
};

export { getReviewlist };
