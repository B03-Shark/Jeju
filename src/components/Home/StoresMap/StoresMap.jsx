import { Map, MapMarker } from "react-kakao-maps-sdk";

function StoresMap({ jejuStores }) {
  const jejuStoreItems = jejuStores ? jejuStores.item : [];

  return (
    <div>
      <Map
        center={{ lat: 35.874272844097, lng: 127.060705646439 }}
        style={{
          width: '600px',
          height: '500px',
          borderRadius: '20px'
        }}
      >
        {jejuStoreItems.map((jejuStoreItem) => (
          <MapMarker
            style={{ border: 'tranparent' }}
            position={{ lat: jejuStoreItem.laCrdnt, lng: jejuStoreItem.loCrdnt }}
            key={jejuStoreItem.dataCd}
          >
            <div>{jejuStoreItem.bsshNm}</div>
          </MapMarker>
        ))}
      </Map>
    </div>
  );
}

export default StoresMap;
