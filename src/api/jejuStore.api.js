import { jejuStoreAPIDecoding, jejuStoreAPIEncoding } from './api';

export async function getJejuStores() {
  const path = '/getGoodPirceStoreList';

  try {
    const response = await jejuStoreAPIEncoding.get(path);
    const responseDataDecoding = response.data?.response?.body.items;
    if (!responseDataDecoding) {
      console.log('encoding key 실패, decoding key 시도');
      try {
        const responseEncoding = await jejuStoreAPIDecoding.get(path);
        const responseDataEncoding = responseEncoding.data?.response?.body.items;
        return responseDataEncoding;
      } catch (encodingError) {
        console.log('encoding key 에러:', encodingError);
        throw encodingError;
      }
    }
    return responseDataDecoding;
  } catch (decodingError) {
    console.log('decoding key 에러 :', decodingError);
  }
}
