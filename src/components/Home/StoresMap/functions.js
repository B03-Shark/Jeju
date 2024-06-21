import accomodation from '../../../assets/accomodation.png';
import laundry from '../../../assets/laundry.png';
import rest from '../../../assets/rest.png';
import restaurant from '../../../assets/restaurant.png';
import salon from '../../../assets/salon.png';

export const setImg = (indutyNm) => {
  if (indutyNm === '음식점') return restaurant;
  else if (indutyNm === '미용업') return salon;
  else if (indutyNm === '세탁업') return laundry;
  else if (indutyNm === '숙박업') return accomodation;
  else return rest;
};
