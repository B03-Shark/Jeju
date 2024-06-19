import { Map, MapMarker, MarkerClusterer } from "react-kakao-maps-sdk";

function StoresMap({ jejuStores }) {
  const jejuStoreItems = jejuStores ? jejuStores.item : [];

  return (
    <div>
      <Map
        center={{ lat: 33.4842414211083, lng: 126.480910986984 }}
        style={{
          width: '600px',
          height: '500px',
          borderRadius: '20px'
        }}
      >
        <MarkerClusterer>
          {jejuStoreItems.map((jejuStoreItem) => (
            <MapMarker
              style={{ border: 'tranparent' }}
              position={{ lat: jejuStoreItem.laCrdnt, lng: jejuStoreItem.loCrdnt }}
              key={jejuStoreItem.dataCd}
            >
              <div>{jejuStoreItem.bsshNm}</div>
            </MapMarker>
          ))}
        </MarkerClusterer>
      </Map>
    </div>
  );
}

export default StoresMap;
