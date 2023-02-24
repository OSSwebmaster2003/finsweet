import React from 'react';
import { YMaps , Map , Placemark } from '@pbe/react-yandex-maps';

function YandexMap(props) {
  const defaultState = {
    center: [41.316278, 69.254072],
    zoom: 5,
  };
  return (  
    <YMaps width="100%" height="100%">
      <Map defaultState={defaultState}>
        <Placemark geometry={[55.684758, 37.738521]} />
      </Map>
    </YMaps>
  );
}

export default YandexMap;