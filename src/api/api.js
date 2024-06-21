import axios from 'axios';

const jejuStoreUrl = import.meta.env.VITE_API_JEJU_STORE_URL;
const jejuStoreDecodingKey = import.meta.env.VITE_API_JEJU_STORE_DECODING_KEY;
const jejuStoreEncodingKey = import.meta.env.VITE_API_JEJU_STORE_ENCODING_KEY;

export const jejuStoreAPIDecoding = axios.create({
  baseURL: jejuStoreUrl,
  params: { serviceKey: jejuStoreDecodingKey, numOfRows: 11630, pageNo: 2 }
});

export const jejuStoreAPIEncoding = axios.create({
  baseURL: jejuStoreUrl,
  params: { serviceKey: jejuStoreEncodingKey, numOfRows: 11630, pageNo: 2 }
});
