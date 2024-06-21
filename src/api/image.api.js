import supabase from "../supabase/supabase";

export const uploadImage = async (file) => {
  const fileExt = file.name.split(".").pop();
  const filePath = `${Date.now()}.${fileExt}`;

  const { data, error } = await supabase.storage.from("images").upload(filePath, file);

  if (error) {
    console.log(error);
  }

  return data.path;
};