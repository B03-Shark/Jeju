import { create } from 'zustand';

const useFilteredJejuStore = create((set) => ({
  jejuStores: [],
  initJejuStores: (stores) => {
    const newStores = stores.filter((store) => store.laCrdnt && store.loCrdnt && store.laCrdnt < 33.7);
    const changedStores = newStores.map((store) => {
      const strArr = store.prdlstCn.split(' ');
      const regex = /[^0-9]/g;
      const numArr = strArr.map((str) => parseInt(str.replace(regex, ''))).filter((num) => num);
      const midIndex = parseInt(numArr.length / 2);
      const midNum = numArr[midIndex];
      let priceRange = '';

      if (midNum < 10000) {
        priceRange = '만원 이하';
      } else if (midNum < 20000) {
        priceRange = '1~2만원';
      } else if (midNum < 40000) {
        priceRange = '2~4만원';
      } else {
        priceRange = '4만원 이상';
      }

      if (
        store.indutyNm.includes('음식') ||
        store.indutyNm.includes('한식') ||
        store.indutyNm.includes('중식') ||
        store.indutyNm.includes('양식')
      ) {
        return { ...store, indutyNm: '음식점', priceRange };
      } else if (store.indutyNm.includes('미용')) {
        return { ...store, indutyNm: '미용업', priceRange };
      } else if (store.indutyNm.includes('세탁')) {
        return { ...store, indutyNm: '세탁업', priceRange };
      } else if (store.indutyNm.includes('숙박')) {
        return { ...store, indutyNm: '숙박업', priceRange };
      } else if (store.indutyNm.includes('목욕')) {
        return { ...store, indutyNm: '목욕업', priceRange };
      } else {
        return { ...store, indutyNm: '기타', priceRange };
      }
    });

    set({ jejuStores: changedStores });
  }
}));

export default useFilteredJejuStore;
