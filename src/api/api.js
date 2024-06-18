import axios from 'axios';

const JEJU_STORE_BASE_URL = import.meta.env.JEJU_BASE_STORE_URL;
const JEJU_STORE_KEY = import.meta.env.JEJU_STORE_KEY;

export const jejuStoreAPI = axios.create({ baseURL: JEJU_STORE_BASE_URL });
