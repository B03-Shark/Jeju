import { jejuStoreAPI } from "./api";

export async function getJejuStores(){
  const path = "/getGoodPirceStoreList";
  const response = await jejuStoreAPI.get(path);
  const responseData = response.data?.response?.body.items;

  return responseData;
}