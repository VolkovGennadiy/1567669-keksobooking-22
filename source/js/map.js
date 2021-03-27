/* global L:readonly */
import {
  formDisabled,
  formElements,
  mapFormElements,
  mapFormDisabled
} from './form.js';

import {
  renderPopup
} from './render-popup.js';

const coordMap = {
  LAT: 35.68950,
  LNG: 139.69171,
}

const newAddress = document.querySelector('#address');
const fixedNumber = 5;

const map = L.map('map-canvas')
  .on('load', () => {
    formDisabled.classList.remove('ad-form--disabled');
    formElements.forEach(formElements => formElements.removeAttribute('disabled', 'disabled'));    /* Переписать на функции */
    mapFormDisabled.classList.remove('map__filters--disabled');
    mapFormElements.forEach(mapFormElements => mapFormElements.removeAttribute('disabled', 'disabled'));
  })
  .setView({
    lat: coordMap.LAT,
    lng: coordMap.LNG,
  }, 10);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [50, 50],
  iconAnchor: [25, 50],
})

const mainPinMarker = L.marker(
  {
    lat:coordMap.LAT,
    lng: coordMap.LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const setAddress = (lat, lng) => {
  const address = newAddress;
  address.value = `${lat.toFixed(fixedNumber)}, ${lng.toFixed(fixedNumber)}`;
}

const onMainPin = (evt) => {
  const latLng = evt.target.getLatLng();
  setAddress(latLng.lat, latLng.lng);
}

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

let markersGroup = L.layerGroup().addTo(map);

const renderList = (data) => {
  data.forEach((render) => {

    const icon = L.icon({
      iconUrl: './img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 20],
    });

    const marker = L.marker(
      {
        lat: render.location.lat,
        lng: render.location.lng,
      },
      {
        icon,
      },
    );

    marker
      .addTo(markersGroup)
      .bindPopup(
        renderPopup(render),
        {
          keepInView: true,
        },
      );
  });
};

const defaultMarker = () => {
  mainPinMarker.setLatLng([coordMap.LAT, coordMap.LNG]).update();
  map.setView([coordMap.LAT, coordMap.LNG]);
};

const resetMarker = () => {
  markersGroup.clearLayers();
  map.closePopup();
}

const resetMap = () => {
  resetMarker();
  setAddress(coordMap.LAT, coordMap.LNG);
}

const removeMarkers = () => {
  map.removeLayer(markersGroup);
  markersGroup = L.layerGroup().addTo(map);
}

mainPinMarker.addTo(map);
setAddress(coordMap.LAT, coordMap.LNG);
mainPinMarker.on('move', onMainPin);


export {renderList, removeMarkers, resetMap, defaultMarker};
