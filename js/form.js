import { sendData } from './fetch.js';
import { errorModalOpen, showModalOpen, succesModalOpen} from './modal.js';

const mapFilterHousing = document.querySelector('#type');
const formInputPrice = document.querySelector('#price');
const formInputTimeIn = document.querySelector('#timein');
const formInpuTimeOut = document.querySelector('#timeout');
const formDisabled = document.querySelector('.ad-form');
const formElements = formDisabled.querySelectorAll('input, select, textarea, buttun');
const formRoomNumber = formDisabled.querySelector('#room_number')
const formCapacity = formDisabled.querySelector('#capacity');
const mapFormDisabled = document.querySelector('.map__filters');
const mapFormElements = mapFormDisabled.querySelectorAll('input, select');

/*
const roomsGuests = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
}

const onRoomsChange = () => {
  const capacityOptions = formCapacity.options;
  for (let capacityOption of capacityOptions) {
    if (roomsGuests[formRoomNumber.value].includes(capacityOption.value)) {
      capacityOption.selected = true;
      capacityOption.style.display = 'block';
    } else {
      capacityOption.style.display = 'none';
    }
  }
};

formRoomNumber.addEventListener('change', onRoomsChange);
*/

formRoomNumber.addEventListener('change', (evt) => {
  switch (evt.target.value) {
    case '1':
      formCapacity.options[0].disabled = true;
      formCapacity.options[1].disabled = true;
      formCapacity.options[2].disabled = false;
      formCapacity.options[3].disabled = true;
      formCapacity.options[2].selected = true;
      break;
    case '2':
      formCapacity.options[0].disabled = true;
      formCapacity.options[1].disabled = false;
      formCapacity.options[2].disabled = false;
      formCapacity.options[3].disabled = true;
      formCapacity.options[1].selected = true;
      break;
    case '3':
      formCapacity.options[0].disabled = false;
      formCapacity.options[1].disabled = false;
      formCapacity.options[2].disabled = false;
      formCapacity.options[3].disabled = true;
      formCapacity.options[0].selected = true;
      break;
    case '100':
      formCapacity.options[0].disabled = true;
      formCapacity.options[1].disabled = true;
      formCapacity.options[2].disabled = true;
      formCapacity.options[3].disabled = false;
      formCapacity.options[3].selected = true;
      break;
    default:
      formCapacity.options[0].disabled = false;
      formCapacity.options[1].disabled = false;
      formCapacity.options[2].disabled = false;
      formCapacity.options[3].disabled = false;
  }
});

const MinPrices = {
  BUNGALOW: 0,
  FLAT: 1000,
  HOUSE: 5000,
  PALACE: 10000,
};

mapFilterHousing.addEventListener('change', () => {
  formInputPrice.placeholder = MinPrices[mapFilterHousing.value.toUpperCase()];
  formInputPrice.min = MinPrices[mapFilterHousing.value.toUpperCase()];
});

formInputTimeIn.addEventListener('change', () => {
  formInpuTimeOut.value = formInputTimeIn.value;
});

formInpuTimeOut.addEventListener('change', () => {
  formInputTimeIn.value = formInpuTimeOut.value;
});

formDisabled.classList.add('ad-form--disabled');
mapFormDisabled.classList.add('map__filters--disabled');
formElements.forEach(formElements => formElements.setAttribute('disabled', 'disabled'));
mapFormElements.forEach(mapFormElements => mapFormElements.setAttribute('disabled', 'disabled'));

const setUserFormSubmit = () => {
  formDisabled.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
      () => {
        showModalOpen(succesModalOpen);
        formDisabled.requestFullscreen();
      },
      () => showModalOpen(errorModalOpen),
      new FormData(evt.target),
    );
  });
};

setUserFormSubmit();

export {formDisabled, formElements, mapFormElements, mapFormDisabled, formRoomNumber};
