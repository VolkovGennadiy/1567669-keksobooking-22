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

import {
  CARDS_QUANTITY,
  createCardList
} from './data.js';

const LAT = 35.68950;
const LNG = 139.69171;

const map = L.map('map-canvas')
  .on('load', () => {
    formDisabled.classList.remove('ad-form--disabled');
    formElements.forEach(formElements => formElements.removeAttribute('disabled', 'disabled'));
    mapFormDisabled.classList.remove('map__filters--disabled');
    mapFormElements.forEach(mapFormElements => mapFormElements.removeAttribute('disabled', 'disabled'));
  })
  .setView({
    lat: LAT,
    lng: LNG,
  }, 10);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [50, 50],
  iconAnchor: [25, 50],
})

const mainPinMarker = L.marker(
  {
    lat: LAT,
    lng: LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const addAddress = (lat, lng) => {
  const address = document.querySelector('#address');
  address.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
}

const loadMainPin = (evt) => {
  const latLng = evt.target.getLatLng();
  addAddress(latLng.lat, latLng.lng);
}

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const cardsList = createCardList(CARDS_QUANTITY);

cardsList.forEach((card) => {

  const lat = card.location.x;
  const lng = card.location.y;


  const icon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(
      renderPopup(card),
      {
        keepInView: true,
      },
    );
});


mainPinMarker.addTo(map);
addAddress(LAT, LNG);
mainPinMarker.on('moveend', loadMainPin);
