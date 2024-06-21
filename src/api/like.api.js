import supabase from '../supabase/supabase';

const addLikeData = async ({ user_id, review_id }) => {
  const { data, error } = await supabase.from('likes').insert({ user_id, review_id });
  if (error) console.error(error);
};

const deleteLikeData = async ({ user_id, review_id }) => {
  const { data, error } = await supabase.from('likes').delete().eq('user_id', user_id).eq('review_id', review_id);
  if (error) console.error(error);
};

export { addLikeData, deleteLikeData };
