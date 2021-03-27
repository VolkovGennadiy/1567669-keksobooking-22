import { sendData } from './fetch.js';
import { showError, showSuccess} from './modal.js';
import { defaultMarker, removeMarkers, resetMap} from './map.js'

const formInputTimeIn = document.querySelector('#timein');
const formInpuTimeOut = document.querySelector('#timeout');
const formDisabled = document.querySelector('.ad-form');
const mapFilterHousing = formDisabled.querySelector('#type');
const formInputPrice = formDisabled.querySelector('#price');
const formElements = formDisabled.querySelectorAll('input, select, textarea, buttun');
const roomNumber = formDisabled.querySelector('#room_number')
const formCapacity = formDisabled.querySelector('#capacity');
const resetButton = formDisabled.querySelector('.ad-form__reset')
const mapFormDisabled = document.querySelector('.map__filters');
const mapFormElements = mapFormDisabled.querySelectorAll('input, select');

const RoomsCapacity = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
}

const MinPrices = {
  BUNGALOW: 0,
  FLAT: 1000,
  HOUSE: 5000,
  PALACE: 10000,
};

const onRoomsChange = () => {
  const capacityOptions = formCapacity.options;
  for (let capacityOption of capacityOptions) {
    capacityOption.disabled = !RoomsCapacity[roomNumber.value].includes(capacityOption.value);
    capacityOption.selected = !capacityOption.disabled;
  }
};

onRoomsChange();
roomNumber.addEventListener('change', onRoomsChange);

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

const disableForm = () => {
  formDisabled.classList.add('ad-form--disabled');
  mapFormDisabled.classList.add('map__filters--disabled');
  formElements.forEach(formElements => formElements.setAttribute('disabled', 'disabled'));
  mapFormElements.forEach(mapFormElements => mapFormElements.setAttribute('disabled', 'disabled'));
}

const resetForm = () => {
  mapFormDisabled.reset();
  formDisabled.reset();
  resetMap();
  removeMarkers();
}

const handleSubmit = () => {
  showSuccess();
  resetForm();
}

const handleError = () => {
  showError();
  resetMap();
}

formDisabled.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  sendData(handleSubmit, handleError, formData);
})

const changeFilteres = (cb) => {
  mapFormDisabled.addEventListener('change', () => {
    resetMap();
    cb();
  });
};

const resetAllForm = (cb) => {
  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    defaultMarker();
    resetForm();
    cb()
  });
};

disableForm();

export {formDisabled, formElements, mapFormElements, mapFormDisabled, changeFilteres, roomNumber, resetAllForm};
