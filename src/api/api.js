import axios from 'axios';

const jejuStoreUrl = import.meta.env.VITE_API_JEJU_STORE_URL;
const jejuStoreEncodingKey = import.meta.env.VITE_API_JEJU_STORE_ENCODING_KEY;
const jejuStoreDecodingKey = import.meta.env.VITE_API_JEJU_STORE_DECODING_KEY;

export const jejuStoreAPI = axios.create({
  baseURL: jejuStoreUrl,
  params: { serviceKey: jejuStoreDecodingKey, numOfRows: 12620, pageNo: 2} // 최대 개수: 12633, 카카오 Marker는 약 300, 2023년 데이터: 11630부터
});
