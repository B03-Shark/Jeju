import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

function SelectedStoreMap({ store }) {
  return (
    <Map
      style={{
        width: '500px',
        height: '400px',
        borderRadius: '5px'
      }}
      center={{ lat: store.laCrdnt, lng: store.loCrdnt }}
      level={3} // 줌 레벨을 낮춰서 확대
    >
      <MapMarker position={{ lat: store.laCrdnt, lng: store.loCrdnt }}>
        <div>{store.bsshNm}</div>
      </MapMarker>
    </Map>
  );
}

export default SelectedStoreMap;
