import axios from 'axios';

const jejuStoreUrl = import.meta.env.VITE_API_JEJU_STORE_URL;
const jejuStoreKey = import.meta.env.VITE_API_JEJU_STORE_DECODING_KEY;

export const jejuStoreAPI = axios.create({
  baseURL: jejuStoreUrl,
  params: { serviceKey: jejuStoreKey }
});
